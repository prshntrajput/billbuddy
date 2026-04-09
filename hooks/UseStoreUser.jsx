"use client";

import { useUser } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export function useStoreUser() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { user } = useUser();
  const [userId, setUserId] = useState(null);
  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    if (!isAuthenticated || !user || !user.primaryEmailAddress) return;

    async function createUser() {
      // ✅ Build name safely without mixing ?? and ||
      const joinedName = [user.firstName, user.lastName]
        .filter(Boolean)
        .join(" ");

      const name =
        user.fullName ??
        (joinedName || null) ??
        user.primaryEmailAddress?.emailAddress?.split("@")[0] ??
        "Anonymous";

      const id = await storeUser({
        name,
        email: user.primaryEmailAddress?.emailAddress ?? "",
        imageUrl: user.imageUrl ?? undefined,
      });
      setUserId(id);
    }

    createUser();
    return () => setUserId(null);
  }, [isAuthenticated, storeUser, user?.id]);

  return {
    isLoading: isLoading || (isAuthenticated && userId === null),
    isAuthenticated: isAuthenticated && userId !== null,
  };
}
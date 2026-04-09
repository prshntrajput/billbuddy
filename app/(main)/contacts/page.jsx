import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import ContactsPage from "./components/contacts-page";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto py-12">
          <BarLoader width={"100%"} color="#36d7b7" />
        </div>
      }
    >
      <ContactsPage />
    </Suspense>
  );
}
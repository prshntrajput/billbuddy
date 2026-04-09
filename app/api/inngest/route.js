import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { paymentReminders } from "@/inngest/payment-reminders";
import { spendingInsights } from "@/inngest/spending-insights";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    spendingInsights,
    paymentReminders,
  ],
});
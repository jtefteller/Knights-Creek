"use server";

import { contactMessage } from "@/app/lib/validations/cloudflare";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function sendContactMessage(formData: FormData) {
  try {
    const { email, first_name, last_name, message, phone_number } =
      contactMessage.parse({
        email: formData.get("email"),
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        phone_number: formData.get("phone_number"),
        message: formData.get("message"),
      });
    await fetch(
      "https://autumn-wildflower-c93c.justin-128.workers.dev/message",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          first_name,
          last_name,
          phone_number,
          message,
          website: "https://knights-creek.com",
        }),
      }
    );
  } catch (error) {
    console.error("Error sending contact message:", error);
    throw new Error("Failed to send contact message");
  } finally {
    revalidatePath("/thank-you");
    redirect("/thank-you");
  }
}

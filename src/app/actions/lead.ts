"use server";

import { z } from "zod";

const leadSchema = z.object({
  fullName: z.string().min(2, "שם מלא נדרש"),
  phone: z
    .string()
    .regex(/^0\d{1,2}-?\d{7}$/, "מספר טלפון לא תקין"),
  email: z.string().email("כתובת אימייל לא תקינה").optional().or(z.literal("")),
  city: z.string().optional(),
  currentPayment: z.string().optional(),
  serviceType: z.string().optional(),
  message: z.string().optional(),
  source: z.string().default("אתר"),
});

export type LeadFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitLead(
  _prevState: LeadFormState | null,
  formData: FormData
): Promise<LeadFormState> {
  const raw = {
    fullName: String(formData.get("fullName") || ""),
    phone: String(formData.get("phone") || ""),
    email: String(formData.get("email") || ""),
    city: String(formData.get("city") || ""),
    currentPayment: String(formData.get("currentPayment") || ""),
    serviceType: String(formData.get("serviceType") || ""),
    message: String(formData.get("message") || ""),
    source: String(formData.get("source") || "אתר"),
  };

  const parsed = leadSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "נא לתקן את השדות המסומנים",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const lead = parsed.data;

  try {
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...lead,
          submittedAt: new Date().toISOString(),
        }),
      });
    } else {
      console.info("[LEAD]", lead);
    }

    return {
      success: true,
      message:
        "תודה רבה! קיבלנו את הפרטים שלך. משה אדרי או נציג מהצוות יחזרו אליך בהקדם.",
    };
  } catch (error) {
    console.error("[LEAD ERROR]", error);
    return {
      success: false,
      message: "אירעה תקלה. נא להתקשר ישירות: 077-340-2800",
    };
  }
}

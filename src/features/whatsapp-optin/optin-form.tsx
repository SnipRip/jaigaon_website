"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CONSENT_TEXT } from "./consent";
import { ConsentCheckbox } from "./consent-checkbox";
import { CountrySelect } from "./country-select";
import { optInSchema, type OptInValues } from "./optin-schema";
import { submitOptIn } from "./submit-optin";

const FIELD = "h-12 w-full rounded-xl border border-ink/30 bg-white px-3.5 text-[15px] font-medium text-ink";
const LABEL = "text-[13px] font-bold";
const ERROR = "text-[13px] font-semibold text-danger";

// WhatsApp sign-up. Built to Meta's opt-in rules: the consent box starts
// unticked, the wording says who will message and what about, and how to stop.
export function OptInForm() {
  const [signedUp, setSignedUp] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<OptInValues>({
    resolver: zodResolver(optInSchema),
    defaultValues: { name: "", businessName: "", country: "BT", phone: "", consent: false, website: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    const result = await submitOptIn(values);
    if (result.ok) setSignedUp(true);
    else setError("root", { message: result.message });
  });

  if (signedUp) {
    return (
      <div role="status" className="flex flex-col gap-2 rounded-3xl bg-white p-7 text-ink">
        <h3 className="text-xl font-extrabold">You are signed up</h3>
        <p className="text-[15px] font-medium text-ink-soft">
          We will send the updates you ask for to your WhatsApp number. Reply STOP to any message to opt out.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="WhatsApp sign-up" className="flex flex-col gap-4 rounded-3xl bg-white p-7 text-ink">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="optin-name" className={LABEL}>Your name</label>
        <input id="optin-name" autoComplete="name" aria-invalid={!!errors.name} className={FIELD} {...register("name")} />
        {errors.name && <p className={ERROR}>{errors.name.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="optin-business" className={LABEL}>Business name (optional)</label>
        <input id="optin-business" autoComplete="organization" className={FIELD} {...register("businessName")} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="optin-phone" className={LABEL}>WhatsApp number</label>
        <div className="flex gap-2">
          <Controller
            name="country"
            control={control}
            render={({ field }) => <CountrySelect id="optin-country" value={field.value} onChange={field.onChange} />}
          />
          <input id="optin-phone" type="tel" autoComplete="tel-national" aria-invalid={!!errors.phone} className={FIELD} {...register("phone")} />
        </div>
        {errors.phone && <p className={ERROR}>{errors.phone.message}</p>}
      </div>

      {/* Honeypot field, kept out of sight and out of the tab order. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="optin-website">Website</label>
        <input id="optin-website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-ground p-3.5 text-[13px] leading-relaxed font-semibold">
          <ConsentCheckbox {...register("consent")} />
          <span>
            {CONSENT_TEXT} See our{" "}
            <Link href="/privacy-policy" className="font-bold text-brand underline">Privacy Policy</Link> and{" "}
            <Link href="/whatsapp-policy" className="font-bold text-brand underline">WhatsApp messaging terms</Link>.
          </span>
        </label>
        {errors.consent && <p className={ERROR}>{errors.consent.message}</p>}
      </div>

      {errors.root && <p role="alert" className={ERROR}>{errors.root.message}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="h-[52px] rounded-[14px] bg-success text-base font-extrabold text-white hover:bg-success-strong disabled:opacity-60"
      >
        {isSubmitting ? "Signing up…" : "Sign up for WhatsApp updates"}
      </button>
      <p className="text-xs font-semibold text-muted">The box is not ticked for you. We keep a record of when and how you agreed.</p>
    </form>
  );
}

"use client";

import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const formId =
    process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "REPLACE_WITH_YOUR_FORMSPREE_ID";
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00C4CC"
            strokeWidth="2"
            className="w-8 h-8"
          >
            <path
              d="M20 6L9 17l-5-5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3
          className="text-xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Message sent!
        </h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          We&apos;ll get back to you within 24 hours. Looking forward to
          talking.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name <span className="text-teal">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="h-11 px-4 rounded-xl border border-border bg-background text-foreground text-sm
              placeholder:text-muted-foreground focus:outline-none focus:border-teal focus:ring-2
              focus:ring-teal/20 transition-all"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-xs text-red-500"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email <span className="text-teal">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="h-11 px-4 rounded-xl border border-border bg-background text-foreground text-sm
              placeholder:text-muted-foreground focus:outline-none focus:border-teal focus:ring-2
              focus:ring-teal/20 transition-all"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-xs text-red-500"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="company"
          className="text-sm font-medium text-foreground"
        >
          Company{" "}
          <span className="text-muted-foreground text-xs">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          name="company"
          placeholder="Your company name"
          className="h-11 px-4 rounded-xl border border-border bg-background text-foreground text-sm
            placeholder:text-muted-foreground focus:outline-none focus:border-teal focus:ring-2
            focus:ring-teal/20 transition-all"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="service"
          className="text-sm font-medium text-foreground"
        >
          Service interested in
        </label>
        <select
          id="service"
          name="service"
          className="h-11 px-4 rounded-xl border border-border bg-background text-foreground text-sm
            focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all cursor-pointer"
        >
          <option value="">Select a service...</option>
          <option value="Social Media Management">
            Social Media Management
          </option>
          <option value="Content Marketing & Creation">
            Content Marketing &amp; Creation
          </option>
          <option value="SEO Strategy">SEO Strategy</option>
          <option value="Paid Ad Campaigns">Paid Ad Campaigns</option>
          <option value="Brand Strategy & Identity">
            Brand Strategy &amp; Identity
          </option>
          <option value="Analytics & Reporting">
            Analytics &amp; Reporting
          </option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your brand and what you're looking to achieve..."
          className="px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm
            placeholder:text-muted-foreground focus:outline-none focus:border-teal focus:ring-2
            focus:ring-teal/20 transition-all resize-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-xs text-red-500"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full h-12 rounded-full bg-teal text-white font-semibold text-sm hover:bg-teal/90
          transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {state.submitting ? "Sending..." : "Send it over"}
      </button>
    </form>
  );
}

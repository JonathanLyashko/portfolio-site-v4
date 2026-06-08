"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Icon } from "@/components/shared/icon";

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type FormState = {
  from_name: string;
  reply_to: string;
  organization: string;
  message: string;
};

const initialState: FormState = {
  from_name: "",
  reply_to: "",
  organization: "",
  message: "",
};

function getErrorMessage(error: unknown) {
  if (typeof error === "object" && error !== null) {
    const errorWithStatus = error as {
      status?: number;
      text?: string;
      message?: string;
      name?: string;
    };

    if (errorWithStatus.status || errorWithStatus.text) {
      return `Send failed: ${errorWithStatus.status ?? "ERR"} ${errorWithStatus.text ?? "Unknown EmailJS error"}`;
    }

    if (errorWithStatus.message) {
      return `Send failed: ${errorWithStatus.message}`;
    }

    if (errorWithStatus.name) {
      return `Send failed: ${errorWithStatus.name}`;
    }
  }

  return "Message send failed. Please try again.";
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      setErrorMessage("Email service is not configured correctly.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.from_name,
          reply_to: form.reply_to,
          organization: form.organization || "Independent",
          message: form.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setForm(initialState);
      setStatus("success");
    } catch (error) {
      console.error("EmailJS send failed", error);
      setStatus("error");
      setErrorMessage(getErrorMessage(error));
    }
  }

  function isDisabled() {
    return (
      status === "sending" ||
      !form.from_name.trim() ||
      !form.reply_to.trim() ||
      !form.message.trim()
    );
  }

  return (
    <form className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label className="font-label-caps text-[10px] uppercase tracking-widest text-primary/70">
          01. Your Name
        </label>
        <input
          className="rounded border border-primary/20 bg-analog-gray/30 p-3 font-code-sm text-on-surface outline-none transition-all placeholder:text-primary/20 focus:border-primary/60"
          onChange={(event) =>
            setForm((current) => ({ ...current, from_name: event.target.value }))
          }
          placeholder="Tony Stark"
          required
          type="text"
          value={form.from_name}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-caps text-[10px] uppercase tracking-widest text-primary/70">
          02. Email Address
        </label>
        <input
          className="rounded border border-primary/20 bg-analog-gray/30 p-3 font-code-sm text-on-surface outline-none transition-all placeholder:text-primary/20 focus:border-primary/60"
          onChange={(event) =>
            setForm((current) => ({ ...current, reply_to: event.target.value }))
          }
          placeholder="example@starkindustries.com"
          required
          type="email"
          value={form.reply_to}
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="font-label-caps text-[10px] uppercase tracking-widest text-primary/70">
          03. Affiliation
        </label>
        <input
          className="rounded border border-primary/20 bg-analog-gray/30 p-3 font-code-sm text-on-surface outline-none transition-all placeholder:text-primary/20 focus:border-primary/60"
          onChange={(event) =>
            setForm((current) => ({ ...current, organization: event.target.value }))
          }
          placeholder="Stark Industries"
          type="text"
          value={form.organization}
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="font-label-caps text-[10px] uppercase tracking-widest text-primary/70">
          04. Message
        </label>
        <textarea
          className="resize-none rounded border border-primary/20 bg-analog-gray/30 p-3 font-code-sm text-on-surface outline-none transition-all placeholder:text-primary/20 focus:border-primary/60"
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          placeholder="Let's chat..."
          required
          rows={4}
          value={form.message}
        />
      </div>
      <div className="mt-4 flex flex-col items-center gap-4 md:col-span-2">
        <button
          className="glitch-btn group flex items-center gap-3 rounded border border-primary/20 bg-primary/10 px-12 py-4 font-label-caps text-label-caps tracking-widest text-primary shadow-[0_0_10px_rgba(0,229,255,0.12)] transition-all hover:border-primary/35 hover:bg-primary/14 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isDisabled()}
          type="submit"
        >
          <Icon className="h-5 w-5 group-hover:animate-pulse" name="sensors" />
          {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
        </button>
        {status === "success" ? (
          <p className="font-code-sm text-code-sm text-secondary">
            Message sent successfully.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="font-code-sm text-code-sm text-primary">{errorMessage}</p>
        ) : null}
      </div>
    </form>
  );
}

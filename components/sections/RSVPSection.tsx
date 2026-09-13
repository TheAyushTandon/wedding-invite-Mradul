"use client";
import { useState } from "react";
import { useForm, Controller, type UseFormReturn, type FieldErrors, type UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { EVENTS } from "@/data/events";
import { useConfetti } from "@/hooks/useConfetti";
import {
  User, Phone, Mail, Check, ChevronRight, CalendarDays,
  UtensilsCrossed, Music, Send, Star, X, CheckCircle2, XCircle
} from "lucide-react";

const COUNTRY_CODES = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "US/CA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
];

const DIETARY_OPTIONS = [
  "No Restrictions",
  "Vegetarian",
  "Jain (No Root Vegs)",
  "Vegan",
  "Gluten Free",
  "Nut Allergy",
  "Dairy Free",
  "Other",
];

const schema = z.object({
  fullName: z.string().min(2, "Full name required"),
  countryCode: z.string(),
  phone: z.string().min(6, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  attendance: z.enum(["accept", "decline"]),
  guestCount: z.number().min(1).max(8).optional(),
  events: z.array(z.string()).optional(),
  dietary: z.array(z.string()).optional(),
  otherDietary: z.string().optional(),
  songRequest: z.string().optional(),
  blessings: z.string().optional(),
});

type RSVPData = z.infer<typeof schema>;

type Step = "attendance" | "details" | "events" | "dietary" | "extras" | "done";

const STEPS: Step[] = ["attendance", "details", "events", "dietary", "extras", "done"];
const ACCEPTING_STEPS: Step[] = ["attendance", "details", "events", "dietary", "extras", "done"];

const STEP_ICONS = {
  attendance: <CalendarDays size={14} />,
  details: <User size={14} />,
  events: <Star size={14} />,
  dietary: <UtensilsCrossed size={14} />,
  extras: <Music size={14} />,
  done: <Check size={14} />,
};

const STEP_LABELS = {
  attendance: "Attendance",
  details: "Your Info",
  events: "Events",
  dietary: "Dining",
  extras: "Extras",
  done: "Done",
};

export function RSVPSection() {
  const [step, setStep] = useState<Step>("attendance");
  const [attendance, setAttendance] = useState<"accept" | "decline" | null>(null);
  const { fire } = useConfetti();

  const form = useForm<RSVPData>({
    resolver: zodResolver(schema),
    defaultValues: {
      countryCode: "+91",
      events: [],
      dietary: [],
    },
  });

  const { watch, setValue, getValues, formState: { errors } } = form;
  const selectedEvents = watch("events") || [];
  const selectedDietary = watch("dietary") || [];
  const guestCount = watch("guestCount");

  const goNext = () => {
    const current = ACCEPTING_STEPS.indexOf(step);
    if (current < ACCEPTING_STEPS.length - 1) {
      setStep(ACCEPTING_STEPS[current + 1]);
    }
  };

  const handleAttendance = (choice: "accept" | "decline") => {
    setAttendance(choice);
    setValue("attendance", choice);
    if (choice === "decline") {
      setStep("done");
    } else {
      goNext();
    }
  };

  const toggleEvent = (id: string) => {
    const current = getValues("events") || [];
    setValue("events", current.includes(id) ? current.filter((e) => e !== id) : [...current, id]);
  };

  const toggleDietary = (item: string) => {
    const current = getValues("dietary") || [];
    if (item === "No Restrictions") {
      setValue("dietary", ["No Restrictions"]);
      return;
    }
    const filtered = current.filter((d) => d !== "No Restrictions");
    setValue("dietary", filtered.includes(item) ? filtered.filter((d) => d !== item) : [...filtered, item]);
  };

  const handleSubmit = async () => {
    await fire({ x: 0.5, y: 0.3 });
    setTimeout(async () => await fire({ x: 0.5, y: 0.7 }), 400);
    setStep("done");
  };

  const stepIdx = ACCEPTING_STEPS.indexOf(step);
  const totalSteps = attendance === "decline" ? 2 : ACCEPTING_STEPS.length;

  return (
    <section
      id="rsvp"
      className="section-bg"
      style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}
    >
      <Image src="/assets/schedule/floral-arch-bg.png" alt="" fill className="section-bg-img" style={{ objectPosition: "center top" }} />
      <div className="section-overlay" style={{ background: "rgba(250,247,242,0.90)" }} />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow="✦ KINDLY RESPOND ✦"
          heading="RSVP"
          quote="Please respond by January 1, 2027 so we can make your arrival extra special."
        />

        {/* Progress bar */}
        {step !== "done" && (
          <div className="mb-6">
            <div className="flex gap-1 mb-2">
              {ACCEPTING_STEPS.slice(0, -1).map((s, i) => (
                <div
                  key={s}
                  style={{
                    flex: 1,
                    height: "3px",
                    borderRadius: "9999px",
                    background: i <= stepIdx ? "#8C4B27" : "rgba(140,75,39,0.20)",
                    transition: "background 0.3s",
                  }}
                />
              ))}
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", color: "#8C4B27", fontWeight: 600, letterSpacing: "0.1em" }}>
              STEP {stepIdx + 1} OF {ACCEPTING_STEPS.length - 1} • {STEP_LABELS[step]}
            </p>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* STEP 1: Attendance */}
          {step === "attendance" && (
            <Step1Attendance key="attendance" onSelect={handleAttendance} />
          )}

          {/* STEP 2: Details */}
          {step === "details" && (
            <StepDetails key="details" form={form} onNext={goNext} errors={errors} />
          )}

          {/* STEP 3: Events */}
          {step === "events" && (
            <StepEvents
              key="events"
              guestCount={guestCount || 1}
              selectedEvents={selectedEvents}
              onToggle={toggleEvent}
              onNext={goNext}
            />
          )}

          {/* STEP 4: Dietary */}
          {step === "dietary" && (
            <StepDietary
              key="dietary"
              selected={selectedDietary}
              onToggle={toggleDietary}
              showOther={selectedDietary.includes("Other")}
              register={form.register}
              onNext={goNext}
            />
          )}

          {/* STEP 5: Extras */}
          {step === "extras" && (
            <StepExtras key="extras" register={form.register} onSubmit={handleSubmit} />
          )}

          {/* DONE */}
          {step === "done" && (
            <StepDone key="done" accepted={attendance === "accept"} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ── Sub-steps ─────────────────────────────────────────── */

function Step1Attendance({ onSelect }: { onSelect: (v: "accept" | "decline") => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4"
    >
      <button
        onClick={() => onSelect("accept")}
        className="glass-card p-5 flex items-center gap-4 w-full text-left"
        style={{ border: "2px solid transparent", transition: "all 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#8C4B27")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
      >
        <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(37,211,102,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <CheckCircle2 size={24} color="#15803D" />
        </div>
        <div>
          <p className="font-serif-wd" style={{ fontSize: "1.05rem", fontWeight: 700, color: "#3D2522", marginBottom: "0.2rem" }}>
            Joyfully Accept 🎉
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.68rem", color: "#6E4141" }}>
            Yes! I will join the celebrations in Goa.
          </p>
        </div>
        <ChevronRight size={16} color="#8C4B27" style={{ marginLeft: "auto", flexShrink: 0 }} />
      </button>

      <button
        onClick={() => onSelect("decline")}
        className="glass-card p-5 flex items-center gap-4 w-full text-left"
        style={{ border: "2px solid transparent", transition: "all 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(194,65,55,0.40)")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
      >
        <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(194,65,55,0.10)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <XCircle size={24} color="#C24137" />
        </div>
        <div>
          <p className="font-serif-wd" style={{ fontSize: "1.05rem", fontWeight: 700, color: "#3D2522", marginBottom: "0.2rem" }}>
            Regretfully Decline
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.68rem", color: "#6E4141" }}>
            Sadly unable to make it, but sending love.
          </p>
        </div>
        <ChevronRight size={16} color="#9B9B9B" style={{ marginLeft: "auto", flexShrink: 0 }} />
      </button>
    </motion.div>
  );
}

function StepDetails({ form, onNext, errors }: { form: UseFormReturn<RSVPData>; onNext: () => void; errors: FieldErrors<RSVPData> }) {
  const { register, watch, setValue } = form;
  const countryCode = watch("countryCode");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4"
    >
      {/* Full Name */}
      <FieldWrap label="Full Name *" error={errors.fullName?.message}>
        <div className="flex items-center gap-2 px-3 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.80)", border: "1.5px solid rgba(140,75,39,0.25)" }}>
          <User size={14} color="#8C4B27" />
          <input {...register("fullName")} placeholder="Your full name" style={{ flex: 1, background: "none", border: "none", outline: "none", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: "#3D2522" }} />
        </div>
      </FieldWrap>

      {/* Phone */}
      <FieldWrap label="Phone Number *" error={errors.phone?.message}>
        <div className="flex gap-2">
          <select
            value={countryCode}
            onChange={(e) => setValue("countryCode", e.target.value)}
            style={{ padding: "0.65rem 0.5rem", borderRadius: "0.75rem", border: "1.5px solid rgba(140,75,39,0.25)", background: "rgba(255,255,255,0.80)", fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", color: "#3D2522", cursor: "pointer", outline: "none" }}
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
            ))}
          </select>
          <div className="flex-1 flex items-center gap-2 px-3 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.80)", border: "1.5px solid rgba(140,75,39,0.25)" }}>
            <Phone size={14} color="#8C4B27" />
            <input {...register("phone")} type="tel" placeholder="Your phone number" style={{ flex: 1, background: "none", border: "none", outline: "none", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: "#3D2522" }} />
          </div>
        </div>
      </FieldWrap>

      {/* Email */}
      <FieldWrap label="Email Address *" error={errors.email?.message}>
        <div className="flex items-center gap-2 px-3 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.80)", border: "1.5px solid rgba(140,75,39,0.25)" }}>
          <Mail size={14} color="#8C4B27" />
          <input {...register("email")} type="email" placeholder="your@email.com" style={{ flex: 1, background: "none", border: "none", outline: "none", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: "#3D2522" }} />
        </div>
      </FieldWrap>

      {/* Guest count */}
      <FieldWrap label="Number of Guests (including yourself)" error={errors.guestCount?.message}>
        <div className="flex gap-2 flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setValue("guestCount", n)}
              style={{
                width: "2.6rem",
                height: "2.6rem",
                borderRadius: "50%",
                background: watch("guestCount") === n ? "#8C4B27" : "rgba(255,255,255,0.80)",
                border: `1.5px solid ${watch("guestCount") === n ? "#8C4B27" : "rgba(140,75,39,0.25)"}`,
                color: watch("guestCount") === n ? "white" : "#3D2522",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {n}
            </button>
          ))}
        </div>
      </FieldWrap>

      <button onClick={onNext} className="btn-primary w-full mt-2">
        CONTINUE TO EVENTS <ChevronRight size={14} />
      </button>
    </motion.div>
  );
}

function StepEvents({ guestCount, selectedEvents, onToggle, onNext }: {
  guestCount: number; selectedEvents: string[]; onToggle: (id: string) => void; onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4"
    >
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.92rem", color: "#5C3D2E", fontStyle: "italic" }}>
        Which celebrations will you be attending? ({guestCount} {guestCount === 1 ? "guest" : "guests"})
      </p>
      {EVENTS.map((event) => {
        const selected = selectedEvents.includes(event.id);
        return (
          <button
            key={event.id}
            onClick={() => onToggle(event.id)}
            className={`event-tile ${selected ? "selected" : ""}`}
          >
            <div className="flex items-start justify-between gap-2">
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8C4B27", marginBottom: "0.2rem" }}>
                  Day {event.day} • {event.time}
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", fontWeight: 700, color: "#3D2522", lineHeight: 1.3 }}>
                  {event.title}
                </p>
              </div>
              <div
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  borderRadius: "50%",
                  background: selected ? "#8C4B27" : "transparent",
                  border: `2px solid ${selected ? "#8C4B27" : "rgba(140,75,39,0.35)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.2s",
                }}
              >
                {selected && <Check size={10} color="white" />}
              </div>
            </div>
          </button>
        );
      })}
      <button onClick={onNext} className="btn-primary w-full mt-2">
        CONTINUE <ChevronRight size={14} />
      </button>
    </motion.div>
  );
}

function StepDietary({ selected, onToggle, showOther, register, onNext }: {
  selected: string[]; onToggle: (d: string) => void; showOther: boolean; register: UseFormRegister<RSVPData>; onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4"
    >
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.92rem", color: "#5C3D2E", fontStyle: "italic" }}>
        Any dietary preferences or restrictions?
      </p>
      <div className="flex flex-wrap gap-2">
        {DIETARY_OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => onToggle(opt)}
            className={`chip ${selected.includes(opt) ? "selected" : ""}`}
          >
            {selected.includes(opt) && <Check size={11} />}
            {opt}
          </button>
        ))}
      </div>
      {showOther && (
        <input
          {...register("otherDietary")}
          placeholder="Please describe your restriction…"
          style={{ padding: "0.65rem 1rem", borderRadius: "0.75rem", border: "1.5px solid rgba(140,75,39,0.25)", background: "rgba(255,255,255,0.80)", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: "#3D2522", outline: "none" }}
        />
      )}
      <button onClick={onNext} className="btn-primary w-full mt-2">
        CONTINUE <ChevronRight size={14} />
      </button>
    </motion.div>
  );
}

function StepExtras({ register, onSubmit }: { register: UseFormRegister<RSVPData>; onSubmit: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4"
    >
      <FieldWrap label="Song Request 🎵" error={undefined}>
        <input
          {...register("songRequest")}
          placeholder='Suggest a dance floor banger (e.g., "Gallan Goodiyaan")'
          style={{ width: "100%", padding: "0.65rem 1rem", borderRadius: "0.75rem", border: "1.5px solid rgba(140,75,39,0.25)", background: "rgba(255,255,255,0.80)", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: "#3D2522", outline: "none" }}
        />
      </FieldWrap>
      <FieldWrap label="A Blessing or Message 💌" error={undefined}>
        <textarea
          {...register("blessings")}
          rows={4}
          placeholder="Share a warm blessing or heartfelt message for Mradul & Shreya…"
          style={{ width: "100%", padding: "0.65rem 1rem", borderRadius: "0.75rem", border: "1.5px solid rgba(140,75,39,0.25)", background: "rgba(255,255,255,0.80)", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: "#3D2522", outline: "none", resize: "none", lineHeight: 1.6 }}
        />
      </FieldWrap>
      <button onClick={onSubmit} className="btn-primary w-full mt-2">
        <Send size={14} />
        SUBMIT RSVP
      </button>
    </motion.div>
  );
}

function StepDone({ accepted }: { accepted: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.93 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 text-center"
    >
      {accepted ? (
        <>
          <div className="flex justify-center mb-4">
            <div style={{ width: "4rem", height: "4rem", borderRadius: "50%", background: "rgba(37,211,102,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CheckCircle2 size={32} color="#15803D" />
            </div>
          </div>
          <h3 className="heading-calligraphy" style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>
            See You in Goa!
          </h3>
          <p className="font-serif-wd" style={{ fontSize: "1rem", color: "#4A2E2B", lineHeight: 1.8, fontStyle: "italic" }}>
            Your RSVP has been recorded. We are overjoyed to be celebrating with you at Taj Heritage. A confirmation will arrive on your email shortly. 🌺
          </p>
        </>
      ) : (
        <>
          <div className="flex justify-center mb-4">
            <div style={{ width: "4rem", height: "4rem", borderRadius: "50%", background: "rgba(140,75,39,0.10)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "2rem" }}>💌</span>
            </div>
          </div>
          <h3 className="heading-calligraphy" style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>
            We Will Miss You
          </h3>
          <p className="font-serif-wd" style={{ fontSize: "1rem", color: "#4A2E2B", lineHeight: 1.8, fontStyle: "italic" }}>
            Thank you so much for letting us know. We will carry your blessings and love with us as we begin our forever. Please celebrate us from wherever you are! 💕
          </p>
        </>
      )}
    </motion.div>
  );
}

function FieldWrap({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6E4141", display: "block", marginBottom: "0.4rem" }}>
        {label}
      </label>
      {children}
      {error && (
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", color: "#C24137", marginTop: "0.25rem" }}>
          {error}
        </p>
      )}
    </div>
  );
}



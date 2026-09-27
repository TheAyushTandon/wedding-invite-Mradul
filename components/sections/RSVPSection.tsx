"use client";
import { useState } from "react";
import { useForm, type UseFormReturn, type FieldErrors, type UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { EVENTS } from "@/data/events";
import { useConfetti } from "@/hooks/useConfetti";
import { useLanguage } from "@/components/shared/LanguageContext";
import {
  User, Phone, Mail, Check, ChevronRight, CalendarDays,
  UtensilsCrossed, Music, Send, Star, X, CheckCircle2, XCircle,
  AlertTriangle, WineOff
} from "lucide-react";

import { Language, TranslationSchema } from "@/lib/translations";

const COUNTRY_CODES = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "US/CA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
];

const DIETARY_OPTIONS_BY_LANG: Record<Language, { id: string; label: string }[]> = {
  en: [
    { id: "No Restrictions", label: "No Restrictions" },
    { id: "Vegetarian", label: "Vegetarian" },
    { id: "Vegan", label: "Vegan" },
    { id: "Gluten Free", label: "Gluten Free" },
    { id: "Nut Allergy", label: "Nut Allergy" },
    { id: "Dairy Free", label: "Dairy Free" },
    { id: "Other", label: "Other" },
  ],
  hi: [
    { id: "No Restrictions", label: "कोई परहेज नहीं" },
    { id: "Vegetarian", label: "शुद्ध शाकाहारी" },
    { id: "Vegan", label: "वीगन" },
    { id: "Gluten Free", label: "ग्लूटेन-मुक्त" },
    { id: "Nut Allergy", label: "नट एलर्जी" },
    { id: "Dairy Free", label: "डेयरी-मुक्त" },
    { id: "Other", label: "अन्य" },
  ],
  mr: [
    { id: "No Restrictions", label: "काहीही पथ्य नाही" },
    { id: "Vegetarian", label: "शुद्ध शाकाहारी" },
    { id: "Vegan", label: "व्हीगन" },
    { id: "Gluten Free", label: "ग्लुटेन-मुक्त" },
    { id: "Nut Allergy", label: "नट ॲलर्जी" },
    { id: "Dairy Free", label: "डेअरी-मुक्त" },
    { id: "Other", label: "इतर" },
  ],
};

const schema = z.object({
  fullName: z.string().min(2, "Full name required"),
  countryCode: z.string(),
  phone: z.string().min(6, "Valid phone number required"),
  email: z.string().email("Valid email required").optional().or(z.literal("")),
  attendance: z.enum(["accept", "decline"]),
  guestCount: z.number().min(1).max(8).optional(),
  events: z.array(z.string()).optional(),
  dietary: z.array(z.string()).optional(),
  otherDietary: z.string().optional(),
  songRequest: z.string().optional(),
  blessings: z.string().optional(),
});

type RSVPData = z.infer<typeof schema>;

type Step = "attendance" | "details" | "events" | "dietary" | "extras" | "declineDetails" | "done";

const ACCEPTING_STEPS: Step[] = ["attendance", "details", "events", "dietary", "extras", "done"];

export function RSVPSection() {
  const [step, setStep] = useState<Step>("attendance");
  const [attendance, setAttendance] = useState<"accept" | "decline" | null>(null);
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const { fire } = useConfetti();
  const { t, lang } = useLanguage();

  const form = useForm<RSVPData>({
    resolver: zodResolver(schema),
    defaultValues: {
      countryCode: "+91",
      events: ["haldi", "sangeet", "pheras", "gala"],
      dietary: ["Vegetarian"],
      guestCount: 2,
    },
  });

  const { watch, setValue, getValues, trigger, formState: { errors } } = form;
  const selectedEvents = watch("events") || [];
  const selectedDietary = watch("dietary") || [];
  const guestCount = watch("guestCount") || 2;

  const goNext = () => {
    const current = ACCEPTING_STEPS.indexOf(step);
    if (current >= 0 && current < ACCEPTING_STEPS.length - 1) {
      setStep(ACCEPTING_STEPS[current + 1]);
    }
  };

  const handleSelectAttendance = (choice: "accept" | "decline") => {
    if (choice === "decline") {
      setShowDeclineModal(true);
    } else {
      setAttendance("accept");
      setValue("attendance", "accept");
      goNext();
    }
  };

  const confirmDecline = () => {
    setShowDeclineModal(false);
    setAttendance("decline");
    setValue("attendance", "decline");
    setStep("declineDetails");
  };

  const cancelDecline = () => {
    setShowDeclineModal(false);
    setAttendance("accept");
    setValue("attendance", "accept");
    setStep("details");
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

  const handleSubmitDecline = async () => {
    const isValid = await trigger(["fullName", "phone"]);
    if (isValid) {
      setStep("done");
    }
  };

  const stepIdx = ACCEPTING_STEPS.indexOf(step);

  return (
    <section
      id="rsvp"
      className="section-bg"
      style={{ minHeight: "100svh", display: "flex", alignItems: "flex-start" }}
    >
      <Image
        src="/assets/shared/all-page.jpeg"
        alt=""
        fill
        className="section-bg-img"
        style={{ objectPosition: "center top" }}
      />
      <div
        className="section-overlay"
        style={{ background: "rgba(250,247,242,0.35)" }}
      />

      <div className="section-content section-pad w-full py-16">
        <SectionHeader
          eyebrow={t.rsvpEyebrow}
          heading={t.rsvpHeading}
          quote={t.rsvpQuote}
        />

        {/* Progress bar */}
        {step !== "done" && step !== "declineDetails" && (
          <div className="w-full max-w-[420px] mx-auto mb-6">
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
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                color: "#8C4B27",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {t.stepLabel} {stepIdx + 1} {t.stepOf} {ACCEPTING_STEPS.length - 1} • {t.stepNames[step as keyof typeof t.stepNames] || step}
            </p>
          </div>
        )}

        <div className="w-full max-w-[420px] mx-auto">
          <AnimatePresence mode="wait">
            {/* STEP 1: Attendance */}
            {step === "attendance" && (
              <Step1Attendance
                key="attendance"
                onSelect={handleSelectAttendance}
                acceptLabel={t.acceptOption}
                acceptSubtext={t.acceptSubtext}
                declineLabel={t.declineOption}
                declineSubtext={t.declineSubtext}
              />
            )}

            {/* STEP 2: Details */}
            {step === "details" && (
              <StepDetails
                key="details"
                form={form}
                onNext={goNext}
                errors={errors}
                t={t}
              />
            )}

            {/* STEP 3: Events */}
            {step === "events" && (
              <StepEvents
                key="events"
                guestCount={guestCount}
                selectedEvents={selectedEvents}
                onToggle={toggleEvent}
                onNext={goNext}
                t={t}
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
                t={t}
                lang={lang}
              />
            )}

            {/* STEP 5: Extras */}
            {step === "extras" && (
              <StepExtras
                key="extras"
                register={form.register}
                onSubmit={handleSubmit}
                t={t}
              />
            )}

            {/* STEP: Decline Details */}
            {step === "declineDetails" && (
              <StepDeclineDetails
                key="declineDetails"
                form={form}
                onSubmit={handleSubmitDecline}
                errors={errors}
                t={t}
              />
            )}

            {/* DONE */}
            {step === "done" && (
              <StepDone
                key="done"
                accepted={attendance === "accept"}
                t={t}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Decline Confirmation Modal Dialog */}
        <AnimatePresence>
          {showDeclineModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setShowDeclineModal(false)}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative z-10 w-full max-w-sm bg-[#FAF7F2] rounded-2xl p-6 text-center shadow-2xl border border-[#8C4B27]/30"
              >
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    background: "rgba(194,65,55,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                  }}
                >
                  <AlertTriangle size={28} color="#C24137" />
                </div>

                <h3
                  className="heading-calligraphy text-[#3D2522] mb-2"
                  style={{ fontSize: "2rem", lineHeight: 1.1 }}
                >
                  {t.declineWarningTitle}
                </h3>

                <p
                  className="font-serif-wd text-[#4A2E2B] mb-6"
                  style={{ fontSize: "0.95rem", lineHeight: 1.6, fontStyle: "italic" }}
                >
                  {t.declineWarningMessage}
                </p>

                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={cancelDecline}
                    className="btn-primary w-full"
                    style={{ padding: "0.75rem 1rem" }}
                  >
                    {t.reconsiderBtn}
                  </button>

                  <button
                    onClick={confirmDecline}
                    className="w-full py-2.5 px-4 rounded-full text-sm font-semibold tracking-wider uppercase text-[#C24137] hover:bg-[#C24137]/10 transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {t.confirmDeclineBtn}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ── Sub-steps ─────────────────────────────────────────── */

function Step1Attendance({
  onSelect,
  acceptLabel,
  acceptSubtext,
  declineLabel,
  declineSubtext,
}: {
  onSelect: (v: "accept" | "decline") => void;
  acceptLabel: string;
  acceptSubtext: string;
  declineLabel: string;
  declineSubtext: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4"
    >
      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelect("accept")}
        className="glass-card p-5 flex items-center gap-4 w-full text-left"
        style={{ border: "2px solid rgba(37,211,102,0.30)", transition: "border-color 0.2s ease, box-shadow 0.2s ease", cursor: "pointer" }}
      >
        <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(37,211,102,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <CheckCircle2 size={24} color="#15803D" />
        </div>
        <div>
          <p className="font-serif-wd" style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1E0F0C", marginBottom: "0.2rem" }}>
            {acceptLabel} 🎉
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "#4D261E" }}>
            {acceptSubtext}
          </p>
        </div>
        <ChevronRight size={16} color="#8C4B27" style={{ marginLeft: "auto", flexShrink: 0 }} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelect("decline")}
        className="glass-card p-5 flex items-center gap-4 w-full text-left"
        style={{ border: "2px solid rgba(194,65,55,0.25)", transition: "border-color 0.2s ease, box-shadow 0.2s ease", cursor: "pointer" }}
      >
        <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(194,65,55,0.10)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <XCircle size={24} color="#C24137" />
        </div>
        <div>
          <p className="font-serif-wd" style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1E0F0C", marginBottom: "0.2rem" }}>
            {declineLabel}
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "#4D261E" }}>
            {declineSubtext}
          </p>
        </div>
        <ChevronRight size={16} color="#9B9B9B" style={{ marginLeft: "auto", flexShrink: 0 }} />
      </motion.button>
    </motion.div>
  );
}

function StepDetails({
  form,
  onNext,
  errors,
  t,
}: {
  form: UseFormReturn<RSVPData>;
  onNext: () => void;
  errors: FieldErrors<RSVPData>;
  t: TranslationSchema;
}) {
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
      <FieldWrap label={t.fullNameLabel} error={errors.fullName?.message}>
        <div className="flex items-center gap-2 px-3.5 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.90)", border: "1.5px solid rgba(140,75,39,0.25)" }}>
          <User size={15} color="#8C4B27" />
          <input
            {...register("fullName")}
            placeholder="e.g. Rahul Sharma"
            style={{ flex: 1, background: "none", border: "none", outline: "none", fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "#1E0F0C" }}
          />
        </div>
      </FieldWrap>

      {/* Phone */}
      <FieldWrap label={t.phoneLabel} error={errors.phone?.message}>
        <div className="flex gap-2">
          <select
            value={countryCode}
            onChange={(e) => setValue("countryCode", e.target.value)}
            style={{ padding: "0.65rem 0.6rem", borderRadius: "0.75rem", border: "1.5px solid rgba(140,75,39,0.25)", background: "rgba(255,255,255,0.90)", fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "#1E0F0C", cursor: "pointer", outline: "none" }}
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
            ))}
          </select>
          <div className="flex-1 flex items-center gap-2 px-3.5 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.90)", border: "1.5px solid rgba(140,75,39,0.25)" }}>
            <Phone size={15} color="#8C4B27" />
            <input
              {...register("phone")}
              type="tel"
              placeholder="e.g. 98200 12345"
              style={{ flex: 1, background: "none", border: "none", outline: "none", fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "#1E0F0C" }}
            />
          </div>
        </div>
      </FieldWrap>

      {/* Email */}
      <FieldWrap label={t.emailLabel} error={errors.email?.message}>
        <div className="flex items-center gap-2 px-3.5 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.90)", border: "1.5px solid rgba(140,75,39,0.25)" }}>
          <Mail size={15} color="#8C4B27" />
          <input
            {...register("email")}
            type="email"
            placeholder="e.g. rahul.sharma@example.com"
            style={{ flex: 1, background: "none", border: "none", outline: "none", fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "#1E0F0C" }}
          />
        </div>
      </FieldWrap>

      {/* Guest count */}
      <FieldWrap label={t.guestsCountLabel} error={errors.guestCount?.message}>
        <div className="flex gap-2 flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <motion.button
              key={n}
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setValue("guestCount", n)}
              style={{
                width: "2.6rem",
                height: "2.6rem",
                borderRadius: "50%",
                background: watch("guestCount") === n ? "#8C4B27" : "rgba(255,255,255,0.90)",
                border: `1.5px solid ${watch("guestCount") === n ? "#8C4B27" : "rgba(140,75,39,0.25)"}`,
                color: watch("guestCount") === n ? "white" : "#1E0F0C",
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {n}
            </motion.button>
          ))}
        </div>
      </FieldWrap>

      <button onClick={onNext} className="btn-primary w-full mt-3">
        {t.continueToEvents} <ChevronRight size={14} />
      </button>
    </motion.div>
  );
}

function StepEvents({
  guestCount,
  selectedEvents,
  onToggle,
  onNext,
  t,
}: {
  guestCount: number;
  selectedEvents: string[];
  onToggle: (id: string) => void;
  onNext: () => void;
  t: TranslationSchema;
}) {
  const eventsList = t.eventsList || EVENTS;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-3.5"
    >
      <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem", color: "#5C3D2E", fontStyle: "italic" }}>
        {t.whichCelebrations} ({guestCount})
      </p>

      {eventsList.map((event) => {
        const selected = selectedEvents.includes(event.id);
        return (
          <motion.button
            key={event.id}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            onClick={() => onToggle(event.id)}
            className={`event-tile ${selected ? "selected" : ""}`}
            style={{
              padding: "1rem",
              borderRadius: "1rem",
              border: `1.5px solid ${selected ? "#8C4B27" : "rgba(140,75,39,0.18)"}`,
              background: selected ? "rgba(140,75,39,0.08)" : "rgba(255,255,255,0.75)",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <div className="flex items-center justify-between gap-2">
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8C4B27", marginBottom: "0.25rem" }}>
                  {event.time} • {event.location}
                </p>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, color: "#1E0F0C", lineHeight: 1.25 }}>
                  {event.title}
                </p>
              </div>
              <div
                style={{
                  width: "1.6rem",
                  height: "1.6rem",
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
                {selected && <Check size={12} color="white" />}
              </div>
            </div>
          </motion.button>
        );
      })}

      <button onClick={onNext} className="btn-primary w-full mt-3">
        {t.continueBtn} <ChevronRight size={14} />
      </button>
    </motion.div>
  );
}

function StepDietary({
  selected,
  onToggle,
  showOther,
  register,
  onNext,
  t,
  lang,
}: {
  selected: string[];
  onToggle: (d: string) => void;
  showOther: boolean;
  register: UseFormRegister<RSVPData>;
  onNext: () => void;
  t: TranslationSchema;
  lang: Language;
}) {
  const options = DIETARY_OPTIONS_BY_LANG[lang] || DIETARY_OPTIONS_BY_LANG.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4"
    >
      {/* Alcohol-free wedding notification */}
      <div
        className="flex items-start gap-3 p-3.5 rounded-xl"
        style={{ background: "rgba(140,75,39,0.08)", border: "1px solid rgba(140,75,39,0.20)" }}
      >
        <WineOff size={18} color="#8C4B27" className="flex-shrink-0 mt-0.5" />
        <p
          className="font-serif-wd"
          style={{ fontSize: "0.92rem", color: "#3D2522", lineHeight: 1.5, fontStyle: "italic" }}
        >
          <strong>{t.dietaryAlcoholNoteTitle} </strong>{t.dietaryAlcoholNote}
        </p>
      </div>

      <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem", color: "#5C3D2E", fontStyle: "italic" }}>
        {t.dietaryHeading}
      </p>

      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onToggle(opt.id)}
            className={`chip ${selected.includes(opt.id) ? "selected" : ""}`}
            style={{
              padding: "0.5rem 0.9rem",
              borderRadius: "9999px",
              border: `1.5px solid ${selected.includes(opt.id) ? "#8C4B27" : "rgba(140,75,39,0.25)"}`,
              background: selected.includes(opt.id) ? "#8C4B27" : "rgba(255,255,255,0.85)",
              color: selected.includes(opt.id) ? "white" : "#1E0F0C",
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {selected.includes(opt.id) && <Check size={11} className="inline mr-1" />}
            {opt.label}
          </motion.button>
        ))}
      </div>

      {showOther && (
        <input
          {...register("otherDietary")}
          placeholder={t.dietaryPlaceholder}
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            border: "1.5px solid rgba(140,75,39,0.25)",
            background: "rgba(255,255,255,0.90)",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.02rem",
            color: "#3D2522",
            outline: "none",
          }}
        />
      )}

      <button onClick={onNext} className="btn-primary w-full mt-3">
        {t.continueBtn} <ChevronRight size={14} />
      </button>
    </motion.div>
  );
}

function StepExtras({
  register,
  onSubmit,
  t,
}: {
  register: UseFormRegister<RSVPData>;
  onSubmit: () => void;
  t: TranslationSchema;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4"
    >
      <FieldWrap label={t.songRequestLabel} error={undefined}>
        <input
          {...register("songRequest")}
          placeholder={t.songRequestPlaceholder}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            border: "1.5px solid rgba(140,75,39,0.25)",
            background: "rgba(255,255,255,0.90)",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.02rem",
            color: "#3D2522",
            outline: "none",
          }}
        />
      </FieldWrap>

      <FieldWrap label={t.blessingLabel} error={undefined}>
        <textarea
          {...register("blessings")}
          rows={3}
          placeholder={t.blessingPlaceholder}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            border: "1.5px solid rgba(140,75,39,0.25)",
            background: "rgba(255,255,255,0.90)",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.02rem",
            color: "#3D2522",
            outline: "none",
            resize: "none",
            lineHeight: 1.6,
          }}
        />
      </FieldWrap>

      <button onClick={onSubmit} className="btn-primary w-full mt-3">
        <Send size={14} />
        {t.submitRsvp}
      </button>
    </motion.div>
  );
}

function StepDeclineDetails({
  form,
  onSubmit,
  errors,
  t,
}: {
  form: UseFormReturn<RSVPData>;
  onSubmit: () => void;
  errors: FieldErrors<RSVPData>;
  t: TranslationSchema;
}) {
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
      <div className="text-center mb-1">
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            color: "#8C4B27",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "0.3rem",
          }}
        >
          {t.declineDetailsEyebrow}
        </p>
        <h4
          className="heading-calligraphy text-[#3D2522]"
          style={{ fontSize: "1.9rem", lineHeight: 1.1, marginBottom: "0.4rem" }}
        >
          {t.declineDetailsHeading}
        </h4>
        <p
          className="font-serif-wd text-[#3F2018]"
          style={{ fontSize: "1rem", lineHeight: 1.6, fontStyle: "italic" }}
        >
          {t.declineDetailsSubtitle}
        </p>
      </div>

      {/* Full Name */}
      <FieldWrap label={t.fullNameLabel} error={errors.fullName?.message}>
        <div
          className="flex items-center gap-2 px-3.5 py-3 rounded-xl"
          style={{ background: "rgba(255,255,255,0.90)", border: "1.5px solid rgba(140,75,39,0.25)" }}
        >
          <User size={15} color="#8C4B27" />
          <input
            {...register("fullName")}
            placeholder="e.g. Rahul Sharma"
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.05rem",
              color: "#3D2522",
            }}
          />
        </div>
      </FieldWrap>

      {/* Phone */}
      <FieldWrap label={t.phoneLabel} error={errors.phone?.message}>
        <div className="flex gap-2">
          <select
            value={countryCode}
            onChange={(e) => setValue("countryCode", e.target.value)}
            style={{
              padding: "0.65rem 0.6rem",
              borderRadius: "0.75rem",
              border: "1.5px solid rgba(140,75,39,0.25)",
              background: "rgba(255,255,255,0.90)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              color: "#1E0F0C",
              cursor: "pointer",
              outline: "none",
            }}
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.code}
              </option>
            ))}
          </select>
          <div
            className="flex-1 flex items-center gap-2 px-3.5 py-3 rounded-xl"
            style={{ background: "rgba(255,255,255,0.90)", border: "1.5px solid rgba(140,75,39,0.25)" }}
          >
            <Phone size={15} color="#8C4B27" />
            <input
              {...register("phone")}
              type="tel"
              placeholder="e.g. 98200 12345"
              style={{
                flex: 1,
                background: "none",
                border: "none",
                outline: "none",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.05rem",
                color: "#3D2522",
              }}
            />
          </div>
        </div>
      </FieldWrap>

      {/* Optional blessings */}
      <FieldWrap label={t.blessingLabel} error={undefined}>
        <textarea
          {...register("blessings")}
          rows={2}
          placeholder={t.blessingPlaceholder}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            border: "1.5px solid rgba(140,75,39,0.25)",
            background: "rgba(255,255,255,0.90)",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.02rem",
            color: "#3D2522",
            outline: "none",
            resize: "none",
            lineHeight: 1.6,
          }}
        />
      </FieldWrap>

      <button onClick={onSubmit} className="btn-primary w-full mt-2">
        <Send size={14} />
        {t.confirmDeclineSubmitBtn}
      </button>
    </motion.div>
  );
}

function StepDone({ accepted, t }: { accepted: boolean; t: TranslationSchema }) {
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
            <div
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                background: "rgba(37,211,102,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircle2 size={32} color="#15803D" />
            </div>
          </div>
          <h3
            className="heading-calligraphy"
            style={{ fontSize: "2.6rem", marginBottom: "0.75rem", color: "#3D2522" }}
          >
            {t.seeYouInGoa}
          </h3>
          <p
            className="font-serif-wd"
            style={{ fontSize: "1.05rem", color: "#4A2E2B", lineHeight: 1.8, fontStyle: "italic" }}
          >
            {t.rsvpSuccessNote}
          </p>
        </>
      ) : (
        <>
          <div className="flex justify-center mb-4">
            <div
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                background: "rgba(140,75,39,0.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "2rem" }}>💌</span>
            </div>
          </div>
          <h3
            className="heading-calligraphy"
            style={{ fontSize: "2.3rem", marginBottom: "0.75rem", color: "#3D2522" }}
          >
            {t.willMissYou}
          </h3>
          <p
            className="font-serif-wd"
            style={{ fontSize: "1.05rem", color: "#4A2E2B", lineHeight: 1.8, fontStyle: "italic" }}
          >
            {t.rsvpDeclineNote}
          </p>
        </>
      )}
    </motion.div>
  );
}

function FieldWrap({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#3F2018",
          display: "block",
          marginBottom: "0.4rem",
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.72rem",
            color: "#C24137",
            marginTop: "0.25rem",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default RSVPSection;

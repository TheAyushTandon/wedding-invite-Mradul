"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { MENU } from "@/data/menu";

export function MenuSection() {
  return (
    <section
      id="menu"
      className="relative w-full min-h-[100dvh] px-4 sm:px-6 bg-[#FAF7F2] text-[#4A2E2B] flex flex-col items-center justify-between select-none overflow-hidden"
      style={{
        paddingTop: "135px",
        paddingBottom: "95px",
      }}
    >
      {/* Background Illustrated Satin Ribbon & Lily Frame */}
      <Image
        src="/assets/menu/ribbon-lily-frame-bg.png"
        alt="Ribbon & Lily Menu Frame"
        fill
        priority
        className="object-cover object-top pointer-events-none select-none z-0"
      />

      {/* Subtle Warm Parchment Blend Overlay */}
      <div className="absolute inset-0 bg-[#FAF7F2]/10 pointer-events-none z-0" />

      {/* Main Content Layout fitted inside the card frame */}
      <div className="relative z-10 w-full max-w-[330px] sm:max-w-[360px] mx-auto flex-1 flex flex-col justify-between items-center text-center">
        {/* 1. Top Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center mb-3"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-[#8C4B27]/50 text-[9px]">✦</span>
            <span
              className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.32em] text-[#8C4B27]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Dining
            </span>
            <span className="text-[#8C4B27]/50 text-[9px]">✦</span>
          </div>

          {/* Cursive Calligraphy Title */}
          <h2
            className="text-3xl sm:text-4xl font-normal text-[#8C4B27] text-center mb-1 tracking-wide leading-tight"
            style={{ fontFamily: "var(--font-cursive)" }}
          >
            The Banquet Menu
          </h2>

          {/* Romantic Italic Quote */}
          <p
            className="text-[11px] sm:text-[12px] text-[#6E4141] max-w-[270px] sm:max-w-xs text-center font-serif italic leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            &ldquo;A four-course feast celebrating coastal delicacies and fine wine pairings.&rdquo;
          </p>
        </motion.div>

        {/* 2. Open Editorial Menu Items (No enclosing card box) */}
        <div className="w-full flex flex-col items-center flex-1 justify-around py-1">
          {MENU.map((course, idx) => (
            <motion.div
              key={course.course}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full flex flex-col items-center my-2"
            >
              {/* Course Header with delicate hairlines */}
              <div className="flex items-center justify-center gap-3 w-full mb-2">
                <div className="flex-1 max-w-[42px] h-[1px] bg-[#8C4B27]/25" />
                <span
                  className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.24em] text-[#8C4B27]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {course.course}
                </span>
                <div className="flex-1 max-w-[42px] h-[1px] bg-[#8C4B27]/25" />
              </div>

              {/* Course Dishes List */}
              <div className="w-full flex flex-col items-center gap-2">
                {course.items.map((item, ii) => (
                  <div key={ii} className="w-full flex flex-col items-center text-center">
                    {/* Dish Name */}
                    <div className="flex items-center justify-center gap-1.5 flex-wrap">
                      <h3
                        className="text-[14px] sm:text-[15.5px] font-serif font-medium text-[#4A2E2B] leading-snug"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {item.name}
                      </h3>
                      {item.dietary && (
                        <span
                          className="inline-flex items-center gap-0.5 text-[9px] font-bold text-[#15803D] bg-[#22C55E]/15 px-1.5 py-0.5 rounded-full"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          🌱 V
                        </span>
                      )}
                    </div>

                    {/* Dish Description */}
                    <p
                      className="text-[10.5px] sm:text-[11px] text-[#6E4141] font-light italic leading-relaxed max-w-[270px] sm:max-w-[295px] mt-0.5"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Bottom Dietary Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full flex flex-col items-center pt-2"
        >
          <p
            className="text-[9.5px] sm:text-[10px] text-[#8C4B27]/80 font-serif italic max-w-[270px] text-center leading-snug"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            * Dietary preferences and allergies accommodated via RSVP
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default MenuSection;

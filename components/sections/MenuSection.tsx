"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { MENU_BY_LANG } from "@/data/menu";
import { useLanguage } from "@/components/shared/LanguageContext";

export function MenuSection() {
  const { t, lang } = useLanguage();
  const menuCourses = (lang && MENU_BY_LANG && MENU_BY_LANG[lang]) || MENU_BY_LANG?.en || [];

  return (
    <section
      id="menu"
      className="relative w-full min-h-[100svh] px-4 sm:px-6 bg-[#FAF7F2] text-[#4A2E2B] flex flex-col items-center justify-between select-none overflow-hidden"
      style={{
        paddingTop: "155px",
        paddingBottom: "95px",
      }}
    >
      {/* Background Illustrated Ribbon & Floral Frame */}
      <Image
        src="/assets/shared/all-page.jpeg"
        alt="Menu Frame"
        fill
        priority
        className="object-cover object-top pointer-events-none select-none z-0"
      />

      {/* Subtle Warm Parchment Blend Overlay */}
      <div className="absolute inset-0 bg-[#FAF7F2]/25 pointer-events-none z-0" />

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-[305px] sm:max-w-[335px] mx-auto flex-1 flex flex-col justify-between items-center text-center">
        {/* Top Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center mb-2.5"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <span className="text-[#8C4B27]/50 text-[8px]">✦</span>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8C4B27]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t.menuEyebrow.replace(/✦/g, "").trim()}
            </span>
            <span className="text-[#8C4B27]/50 text-[8px]">✦</span>
          </div>

          {/* Menu Title */}
          <h2
            className="heading-calligraphy text-[#8C4B27] text-center mb-1 leading-tight"
            style={{ fontSize: "2.1rem" }}
          >
            {t.menuHeading}
          </h2>

          {/* Romantic Italic Quote */}
          <p
            className="text-[13px] sm:text-[14px] text-[#4D261E] max-w-xs text-center font-serif italic leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t.menuQuote}
          </p>
        </motion.div>

        {/* Open Editorial Menu Items */}
        <div className="w-full flex flex-col items-center flex-1 justify-around py-1">
          {menuCourses.map((course, idx) => (
            <motion.div
              key={`${lang}-${course.course}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="w-full flex flex-col items-center my-2"
            >
              {/* Course Header with delicate hairlines */}
              <div className="flex items-center justify-center gap-2.5 w-full mb-2">
                <div className="flex-1 max-w-[40px] h-[1px] bg-[#8C4B27]/30" />
                <span
                  className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#8C4B27]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {course.course}
                </span>
                <div className="flex-1 max-w-[40px] h-[1px] bg-[#8C4B27]/30" />
              </div>

              {/* Course Dishes List */}
              <div className="w-full flex flex-col items-center gap-3">
                {course.items.map((item, ii) => (
                  <div key={ii} className="w-full flex flex-col items-center text-center">
                    {/* Dish Name */}
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <h3
                        className="text-[16px] sm:text-[17px] font-semibold text-[#1E0F0C] leading-snug"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {item.name}
                      </h3>
                      {item.dietary && (
                        <span
                          className="inline-flex items-center gap-1 text-[9px] font-bold text-[#15803D] bg-[#22C55E]/15 px-2 py-0.5 rounded-full"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          <span
                            style={{
                              width: "5px",
                              height: "5px",
                              borderRadius: "50%",
                              background: "#16A34A",
                              display: "inline-block",
                            }}
                          />
                          VEG
                        </span>
                      )}
                    </div>

                    {/* Dish Description */}
                    <p
                      className="text-[12px] sm:text-[13px] text-[#3F2018] leading-relaxed max-w-[310px] mt-0.5 font-normal"
                      style={{ fontFamily: "var(--font-serif-wd)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Dietary & Alcohol Policy Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-full flex flex-col items-center pt-3"
        >
          <p
            className="text-[11.5px] sm:text-[12px] text-[#783618] font-serif italic max-w-sm text-center leading-relaxed font-medium"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t.menuAlcoholFootnote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default MenuSection;

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
        src="/assets/menu/ribbon-lily-frame-bg.png"
        alt="Menu Frame"
        fill
        priority
        className="object-cover object-top pointer-events-none select-none z-0"
      />

      {/* Subtle Warm Parchment Blend Overlay */}
      <div className="absolute inset-0 bg-[#FAF7F2]/20 pointer-events-none z-0" />

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
              className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.28em] text-[#8C4B27]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.menuEyebrow.replace(/✦/g, "").trim()}
            </span>
            <span className="text-[#8C4B27]/50 text-[8px]">✦</span>
          </div>

          {/* Cursive Calligraphy Title */}
          <h2
            className="heading-calligraphy text-[#8C4B27] text-center mb-0.5 leading-tight"
            style={{ fontSize: "2.2rem" }}
          >
            {t.menuHeading}
          </h2>

          {/* Romantic Italic Quote */}
          <p
            className="text-[11.5px] sm:text-[12px] text-[#6E4141] max-w-[270px] text-center font-serif italic leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {t.menuQuote}
          </p>
        </motion.div>

        {/* Open Editorial Menu Items */}
        <div className="w-full flex flex-col items-center flex-1 justify-around py-0.5">
          {menuCourses.map((course, idx) => (
            <motion.div
              key={`${lang}-${course.course}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="w-full flex flex-col items-center my-1.5"
            >
              {/* Course Header with delicate hairlines */}
              <div className="flex items-center justify-center gap-2.5 w-full mb-1.5">
                <div className="flex-1 max-w-[36px] h-[1px] bg-[#8C4B27]/25" />
                <span
                  className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C4B27]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {course.course}
                </span>
                <div className="flex-1 max-w-[36px] h-[1px] bg-[#8C4B27]/25" />
              </div>

              {/* Course Dishes List */}
              <div className="w-full flex flex-col items-center gap-2">
                {course.items.map((item, ii) => (
                  <div key={ii} className="w-full flex flex-col items-center text-center">
                    {/* Dish Name */}
                    <div className="flex items-center justify-center gap-1.5 flex-wrap">
                      <h3
                        className="text-[14px] sm:text-[15px] font-medium text-[#4A2E2B] leading-tight"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                      >
                        {item.name}
                      </h3>
                      {item.dietary && (
                        <span
                          className="inline-flex items-center gap-0.5 text-[8.5px] font-bold text-[#15803D] bg-[#22C55E]/15 px-1.5 py-0.5 rounded-full"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          🌱 V
                        </span>
                      )}
                    </div>

                    {/* Dish Description */}
                    <p
                      className="text-[10.5px] sm:text-[11px] text-[#6E4141] font-light italic leading-relaxed max-w-[270px] mt-0.5"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
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
          className="w-full flex flex-col items-center pt-2"
        >
          <p
            className="text-[9.5px] sm:text-[10px] text-[#8C4B27] font-serif italic max-w-[270px] text-center leading-snug font-medium"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {t.menuAlcoholFootnote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default MenuSection;

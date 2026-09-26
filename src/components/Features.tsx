"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11a3 3 0 100 6 3 3 0 000-6z"
          />
        </svg>
      ),
      title: t("feature.gorumetrik.title"),
      description: t("feature.gorumetrik.description"),
      categoryEn: "AI Computer Vision",
      categoryBn: "এআই ভিশন প্রযুক্তি",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-emerald-100",
      glowColor: "group-hover:shadow-emerald-500/20",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
          <circle cx="10" cy="12" r="2" strokeWidth={2} />
        </svg>
      ),
      title: t("feature.televet.title"),
      description: t("feature.televet.description"),
      categoryEn: "Telehealth Consult",
      categoryBn: "দূরবর্তী পশু চিকিৎসা",
      color: "from-indigo-500 to-blue-600",
      bgColor: "from-indigo-50 to-indigo-100",
      glowColor: "group-hover:shadow-indigo-500/20",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
      title: t("feature.voice_assistant.title"),
      description: t("feature.voice_assistant.description"),
      categoryEn: "AI Voice Assistant",
      categoryBn: "এআই ভয়েস সহকারী",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-purple-100",
      glowColor: "group-hover:shadow-purple-500/20",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 4h4v4H4V4zm0 12h4v4H4v-4zm12-12h4v4h-4V4z"
          />
        </svg>
      ),
      title: t("feature.qr_management.title"),
      description: t("feature.qr_management.description"),
      categoryEn: "Digital Passport",
      categoryBn: "ডিজিটাল প্রোফাইল",
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-blue-100",
      glowColor: "group-hover:shadow-blue-500/20",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: t("feature.gorucollar.title"),
      description: t("feature.gorucollar.description"),
      categoryEn: "IoT Wearable Sensor",
      categoryBn: "আইওটি স্মার্ট সেন্সর",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-amber-100",
      glowColor: "group-hover:shadow-amber-500/20",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      title: t("feature.virtual_fencing.title"),
      description: t("feature.virtual_fencing.description"),
      categoryEn: "GPS Geofencing",
      categoryBn: "জিপিএস নিরাপত্তা সীমানা",
      color: "from-red-500 to-rose-600",
      bgColor: "from-red-50 to-red-100",
      glowColor: "group-hover:shadow-red-500/20",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl px-4 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-emerald-50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-teal-50 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight ${language === "bn" ? "font-bengali" : ""}`}
          >
            {t("features.title")}
          </h2>
          <p
            className={`text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}
          >
            {t("features.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-gray-150/70 hover:border-gray-300/40 rounded-[28px] p-8 transition-all duration-300 shadow-md hover:shadow-2xl ${feature.glowColor} hover:-translate-y-1 flex flex-col justify-between overflow-hidden`}
            >
              <div>
                {/* Card Top: Category Tag & Icon */}
                <div className="flex items-center justify-between mb-8">
                  {/* Glowing Icon Wrapper */}
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-20 blur-lg rounded-2xl group-hover:scale-125 transition-all duration-300`}
                    ></div>
                    <div
                      className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 group-hover:rotate-3 transition-all duration-300`}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200/50 text-gray-400 group-hover:bg-emerald-50 group-hover:border-emerald-200/40 group-hover:text-emerald-750 transition-colors duration-300 ${language === "bn" ? "font-bengali" : ""}`}
                  >
                    {language === "bn"
                      ? feature.categoryBn
                      : feature.categoryEn}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-305 ${language === "bn" ? "font-bengali" : "font-english"}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm text-gray-500 leading-relaxed group-hover:text-gray-650 transition-colors ${language === "bn" ? "font-bengali" : ""}`}
                >
                  {feature.description}
                </p>
              </div>

              {/* Decorative radial glows */}
              <div
                className={`absolute -right-20 -top-20 w-36 h-36 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-40 rounded-full blur-2xl transition-opacity duration-300 -z-10`}
              ></div>
              <div
                className={`absolute -left-20 -bottom-20 w-36 h-36 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-25 rounded-full blur-2xl transition-opacity duration-300 -z-10`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

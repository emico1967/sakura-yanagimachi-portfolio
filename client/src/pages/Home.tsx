/* ============================================================
   PAGE: Home — 柳町さくら AIコミュニティ・ポートフォリオ
   Design: Editorial Minimalism × Japanese Ma (間)
   Sections: Hero → Profile → Career Timeline → Achievements → Services → Contact
   ============================================================ */

import Navigation from "@/components/Navigation";
import { useEffect, useRef, useState } from "react";

// ── Scroll animation hook ──────────────────────────────────
function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll(".fade-in-up");
            targets.forEach((t, i) => {
              setTimeout(() => t.classList.add("visible"), i * 100);
            });
            if (entry.target.classList.contains("fade-in-up")) {
              entry.target.classList.add("visible");
            }
            const lines = entry.target.querySelectorAll(".timeline-line");
            lines.forEach((l) => l.classList.add("visible"));
          }
        });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

// ── Section Label ──────────────────────────────────────────
function SectionLabel({ children }: { children: string }) {
  return (
    <span
      className="text-[10px] tracking-[0.4em] text-[#B8963E] uppercase font-light block mb-4"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {children}
    </span>
  );
}

// ── Gold Divider ───────────────────────────────────────────
function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`gold-line my-16 ${className}`} />
  );
}

// ── Career Timeline Item ───────────────────────────────────
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  items?: string[];
  delay?: number;
}

function TimelineItem({ year, title, description, items, delay = 0 }: TimelineItemProps) {
  return (
    <div
      className="fade-in-up flex gap-8 md:gap-12"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Year column */}
      <div className="flex-shrink-0 w-16 md:w-24 pt-1">
        <span
          className="text-3xl md:text-4xl font-black text-[#E8E4DC] leading-none select-none"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {year}
        </span>
      </div>

      {/* Gold dot + line */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-[#B8963E] mt-2 flex-shrink-0" />
        <div className="timeline-line flex-1 mt-2" style={{ minHeight: "60px" }} />
      </div>

      {/* Content */}
      <div className="pb-12 flex-1">
        <h3
          className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-3 leading-tight"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          {title}
        </h3>
        <p className="text-sm text-[#555] leading-relaxed mb-4 font-light">
          {description}
        </p>
        {items && items.length > 0 && (
          <ul className="space-y-1">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#777] font-light">
                <span className="text-[#B8963E] mt-0.5 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// ── Service Card ───────────────────────────────────────────
interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

function ServiceCard({ number, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <div
      className="fade-in-up border border-[#E0DDD8] p-8 hover:border-[#B8963E] transition-colors duration-500 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span
        className="text-5xl font-black text-[#F0EDE7] group-hover:text-[#D4AF6A] transition-colors duration-500 block mb-4 leading-none"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {number}
      </span>
      <h3
        className="text-base font-bold text-[#1A1A1A] mb-3"
        style={{ fontFamily: "'Noto Serif JP', serif" }}
      >
        {title}
      </h3>
      <p className="text-xs text-[#777] leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const profileRef = useFadeIn();
  const careerRef = useFadeIn(0.05);
  const achievementsRef = useFadeIn();
  const servicesRef = useFadeIn();
  const contactRef = useFadeIn();

  // Hero text animation
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      <Navigation />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663136401401/Q4WdecWDJoqkAT4ovPEJmt/hero-bg-kKkHXU5mYYciTpTgSpEdh9.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#F7F4EF]/70" />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div
              className={`transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "0ms" }}
            >
              <span
                className="text-[11px] tracking-[0.5em] text-[#B8963E] font-light block mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                AI × BUSINESS CONSULTANT
              </span>
            </div>

            {/* Main heading */}
            <div
              className={`transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "150ms" }}
            >
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1A1A1A] leading-none mb-2"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900 }}
              >
                柳町
              </h1>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1A1A1A] leading-none mb-8"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900 }}
              >
                さくら
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className={`transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="w-16 h-px bg-[#B8963E] mb-8" />
              <p
                className="text-sm md:text-base text-[#444] leading-loose font-light max-w-xl"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                AIコミュニティで活動する、戦略・コンプライアンス・ホスピタリティの実務家。<br />
                30年以上にわたるコンサルティング経験と、幅広い業界実績を基盤に、<br />
                変化の時代に必要な対話と仕組みづくりを支援します。
              </p>
            </div>

            {/* Stats */}
            <div
              className={`mt-12 flex gap-12 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "450ms" }}
            >
              {[
                { num: "30+", label: "年のキャリア" },
                { num: "50+", label: "取引企業数" },
                { num: "6", label: "専門分野" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span
                    className="text-3xl md:text-4xl font-black text-[#1A1A1A] block leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {stat.num}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-[#888] font-light mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div
              className={`mt-16 flex items-center gap-3 transition-all duration-1000 ${heroVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="w-px h-12 bg-[#B8963E] animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] text-[#B8963E] font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                SCROLL
              </span>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-2/5">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663136401401/Q4WdecWDJoqkAT4ovPEJmt/profile-abstract-CUrKT797GM3k8ZSrMjowXL.webp"
            alt="柳町さくらのポートフォリオイメージ"
            className="w-full h-full object-cover"
            style={{ opacity: 0.85 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EF]/80 to-transparent" />
        </div>
      </section>

      {/* ── PROFILE ───────────────────────────────────────── */}
      <section id="profile" className="py-24 md:py-32 bg-[#F7F4EF]">
        <div ref={profileRef} className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left column */}
            <div className="lg:col-span-4">
              <div className="fade-in-up">
                <SectionLabel>Profile</SectionLabel>
                <h2
                  className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-tight mb-8"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900 }}
                >
                  プロフィール
                </h2>
                <div className="w-8 h-px bg-[#B8963E] mb-8" />
              </div>

              <div className="fade-in-up" style={{ transitionDelay: "100ms" }}>
                <div className="space-y-4 text-sm text-[#555] leading-relaxed font-light">
                  <p>1967年生まれ。1985年に父の逝去により法人を継承し、取締役に就任（金融：手形割引・不動産）。</p>
                  <p>1995年に金融業から撤退後、経営コンサルティングとブランドコンサルティングを主たる業務として活動を開始。</p>
                  <p>以来30年以上にわたり、ブライダル・美容・飲食・内部統制・国際ビジネスなど多岐にわたる分野で実績を積み重ねてきた。</p>
                </div>
              </div>
            </div>

            {/* Right column — expertise */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "⚖",
                    title: "内部統制・コンプライアンス",
                    desc: "監査法人出身者との協働による高度なコンサルティング。危機管理マニュアルの策定から教育プログラムの設計まで。",
                    delay: 0,
                  },
                  {
                    icon: "✦",
                    title: "ブランディング・マーケティング",
                    desc: "美容・ブライダル・飲食業界での豊富な実績。ブランド価値の構築から市場導入戦略まで一貫してサポート。",
                    delay: 100,
                  },
                  {
                    icon: "◈",
                    title: "経営戦略・事業開発",
                    desc: "30年以上の経営者視点から、事業の立ち上げ・M&A・国際展開まで幅広いフェーズで戦略立案を支援。",
                    delay: 200,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="fade-in-up border-t border-[#E0DDD8] pt-6"
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                    <span className="text-2xl text-[#B8963E] block mb-4">{item.icon}</span>
                    <h3
                      className="text-sm font-bold text-[#1A1A1A] mb-3 leading-snug"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#777] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="fade-in-up mt-12 pl-6 border-l-2 border-[#B8963E]" style={{ transitionDelay: "300ms" }}>
                <p
                  className="text-base md:text-lg text-[#333] leading-relaxed font-light italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  「30年以上の経験と多様な業界での実績を活かし、<br />
                  お客様のビジネス課題解決をサポートいたします。」
                </p>
                <span className="text-xs text-[#B8963E] tracking-[0.2em] mt-3 block">— 柳町さくら</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ── CAREER TIMELINE ───────────────────────────────── */}
      <section
        id="career"
        className="py-24 md:py-32"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663136401401/Q4WdecWDJoqkAT4ovPEJmt/timeline-texture-ECXfvdefjgKcubmJg85NyK.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#F7F4EF]/85" style={{ position: "relative" }}>
          <div ref={careerRef} className="container">
            <div className="fade-in-up mb-16">
              <SectionLabel>Career</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-tight"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900 }}
              >
                キャリア年表
              </h2>
              <div className="w-8 h-px bg-[#B8963E] mt-6" />
            </div>

            <div className="max-w-3xl">
              <TimelineItem
                year="1985"
                title="法人継承・取締役就任"
                description="父の逝去により法人を継承し、取締役に就任。金融業（手形割引・不動産）の経営を担う。"
                delay={0}
              />
              <TimelineItem
                year="1995"
                title="コンサルティング業へ転換"
                description="金融業から撤退後、経営コンサルティングとブランドコンサルティングを主軸に活動を開始。"
                delay={50}
              />
              <TimelineItem
                year="1996"
                title="ブライダル業界への参画"
                description="WEDDINNET（株式会社フォーシス アンド カンパニー）に参画。業界初となる『愛される花嫁の立ち居振る舞い教室』を開講。"
                items={[
                  "ブライダルフェアやセミナーの企画立案・講師",
                  "ブライダル情報誌への記事協力",
                  "ウエディングプランナーの育成",
                ]}
                delay={100}
              />
              <TimelineItem
                year="2001"
                title="美容業界へのコンサルティング展開"
                description="株式会社レゾナ（ZA/ZA INTERNATIONAL：美容サロングループ）の内部統制とブランディングコンサルティングに着手。"
                items={[
                  "中野製薬・アリミノ・日本ロレアル・ウエラジャパン等との取引",
                  "シュワルツコフ・資生堂ビューティーカンパニーとの協業",
                ]}
                delay={150}
              />
              <TimelineItem
                year="2004"
                title="国際ビジネス展開"
                description="アクアストア（西麻布）のコンサルティングを開始。2005年にはイタリアフェスティバル in 東京ドームへの出店を実現。"
                items={[
                  "イタリア法人の日本進出コンセプトメイク（Bridge that Gap プロジェクト）",
                  "日本初の『アクアソムリエ』資格者のセミナー登壇を実現",
                ]}
                delay={200}
              />
              <TimelineItem
                year="2006"
                title="飲食業界への経営参画"
                description="株式会社牧ノ原の料飲部『Pastelaria 五條』の立ち上げからプロダクトマネジメントに着手し、顧問就任。その後M&Aによりオーナーに。"
                items={[
                  "料飲部の立ち上げから商品開発まで一貫して担当",
                  "他社のメニュー開発・出店計画の支援",
                ]}
                delay={250}
              />
              <TimelineItem
                year="2007"
                title="内部統制・コンプライアンス分野へ"
                description="株式会社エムズコンサルティング（代表：茂木和剛 元あづさ監査法人副社長）の社外取締役に就任。内部統制・コンプライアンス・ホスピタリティ事業に着手。"
                items={[
                  "グローバルホスピタリティコンソーシアム エグゼクティブパートナー就任（2008年）",
                  "株式会社豊島屋の危機管理マニュアル策定（パンデミック対応含む）",
                ]}
                delay={300}
              />
              <TimelineItem
                year="2017"
                title="国立大学法人 学長特命補佐"
                description="国立大学法人お茶の水女子大学の学長特命補佐を務める（10月〜12月）。トランスジェンダー学生の受け入れ制度構築に貢献。"
                delay={350}
              />
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ── ACHIEVEMENTS ──────────────────────────────────── */}
      <section id="achievements" className="py-24 md:py-32 bg-[#F7F4EF]">
        <div ref={achievementsRef} className="container">
          <div className="fade-in-up mb-16">
            <SectionLabel>Achievements</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-tight"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900 }}
            >
              主要取引実績
            </h2>
            <div className="w-8 h-px bg-[#B8963E] mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Client list */}
            <div className="fade-in-up" style={{ transitionDelay: "100ms" }}>
              <p className="text-sm text-[#555] leading-relaxed font-light mb-8">
                30年以上のキャリアを通じて、製薬・食品・出版・美容・広告・小売・建設など多岐にわたる業界の企業と取引してきた。
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "株式会社共立製薬",
                  "タカノフーズ株式会社",
                  "株式会社講談社",
                  "株式会社アサツーディ・ケイ",
                  "NHK",
                  "株式会社高島屋",
                  "大和ハウス工業株式会社",
                  "麒麟麦酒株式会社",
                  "中野製薬株式会社",
                  "日本ロレアル株式会社",
                  "ウエラジャパン株式会社",
                  "資生堂ビューティーカンパニー",
                ].map((client, i) => (
                  <div
                    key={client}
                    className="fade-in-up flex items-center gap-2 py-2 border-b border-[#E8E4DC]"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B8963E] flex-shrink-0" />
                    <span className="text-xs text-[#444] font-light">{client}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#999] mt-4 font-light">※ 一部掲載</p>
            </div>

            {/* Industry breakdown */}
            <div>
              <div className="space-y-6">
                {[
                  { industry: "美容・ホスピタリティ", desc: "美容サロングループの内部統制・ブランディング。大手メーカーとの協業実績多数。", delay: 0 },
                  { industry: "ブライダル", desc: "業界初のサービス開発から人材育成まで。ブライダルフェア・セミナーの企画立案。", delay: 100 },
                  { industry: "飲食・食品", desc: "料飲部の立ち上げから経営参画まで。メニュー開発・出店計画の支援。", delay: 200 },
                  { industry: "内部統制・コンプライアンス", desc: "監査法人出身者との協働。危機管理マニュアル策定・コンプライアンス教育。", delay: 300 },
                  { industry: "国際ビジネス", desc: "イタリア法人の日本進出支援。東京ドームでのイベント出店実現。", delay: 400 },
                  { industry: "教育・公共機関", desc: "国立大学法人での学長特命補佐。多様性推進施策の立案・実行。", delay: 500 },
                ].map((item) => (
                  <div
                    key={item.industry}
                    className="fade-in-up flex gap-4 items-start"
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                    <div className="w-px self-stretch bg-[#B8963E] flex-shrink-0 mt-1" style={{ minHeight: "40px" }} />
                    <div>
                      <h4
                        className="text-sm font-bold text-[#1A1A1A] mb-1"
                        style={{ fontFamily: "'Noto Serif JP', serif" }}
                      >
                        {item.industry}
                      </h4>
                      <p className="text-xs text-[#777] leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section id="services" className="py-24 md:py-32 bg-[#F2EFE9]">
        <div ref={servicesRef} className="container">
          <div className="fade-in-up mb-16">
            <SectionLabel>Services</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-tight"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900 }}
            >
              コンサルティングサービス
            </h2>
            <div className="w-8 h-px bg-[#B8963E] mt-6" />
            <p className="text-sm text-[#555] leading-relaxed font-light mt-6 max-w-2xl">
              30年以上の経験と多様な業界での実績を活かし、お客様のビジネス課題解決をサポートいたします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              number="01"
              title="戦略コンサルティング"
              description="経営戦略の立案から実行支援まで。30年以上の経営者視点と豊富な業界知識を活かした実践的なアドバイスを提供。"
              delay={0}
            />
            <ServiceCard
              number="02"
              title="内部統制・コンプライアンス"
              description="監査法人出身者との協働による高度な内部統制体制の構築。コンプライアンス教育プログラムの設計・実施。"
              delay={100}
            />
            <ServiceCard
              number="03"
              title="危機管理マニュアル策定"
              description="パンデミック対応を含む包括的な危機管理体制の構築。実際の事例に基づいた実践的なマニュアルを策定。"
              delay={200}
            />
            <ServiceCard
              number="04"
              title="ブランディング・マーケティング"
              description="ブランド価値の構築から市場導入戦略まで。美容・ブライダル・飲食業界での豊富な実績を活かしたサポート。"
              delay={300}
            />
            <ServiceCard
              number="05"
              title="プロダクトマネジメント"
              description="商品開発から事業立ち上げまで一貫したサポート。飲食業界での実際の経営参画経験を活かした実践的な支援。"
              delay={400}
            />
            <ServiceCard
              number="06"
              title="国際ビジネス支援"
              description="海外法人の日本進出支援・コンセプトメイク。国際的なネットワークを活かした市場参入戦略の立案。"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24 md:py-32 relative"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663136401401/Q4WdecWDJoqkAT4ovPEJmt/contact-bg-hSGmaSktxpVv76QdKMWSUk.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1A1A1A]/85" />
        <div ref={contactRef} className="container relative z-10">
          <div className="max-w-2xl">
            <div className="fade-in-up">
              <SectionLabel>Contact</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-black text-white leading-tight mb-6"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900 }}
              >
                お問い合わせ
              </h2>
              <div className="w-8 h-px bg-[#B8963E] mb-8" />
            </div>

            <div className="fade-in-up" style={{ transitionDelay: "100ms" }}>
              <p className="text-sm text-[#CCC] leading-relaxed font-light mb-10">
                AI関連の共同企画、コンサルティングのご依頼・ご相談は、以下のメールアドレスよりお気軽にお問い合わせください。
                30年以上の経験と多様な業界での実績を活かし、変化の時代に向けたビジネス課題の整理と解決を支援いたします。
              </p>
            </div>

            <div className="fade-in-up" style={{ transitionDelay: "200ms" }}>
              <a
                href="mailto:sakurakbys3@gmail.com"
                className="inline-flex items-center gap-4 group"
              >
                <span
                  className="text-lg md:text-xl text-white group-hover:text-[#D4AF6A] transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  sakurakbys3@gmail.com
                </span>
                <span className="w-8 h-px bg-[#B8963E] group-hover:w-16 transition-all duration-300" />
              </a>
            </div>

            <div className="fade-in-up mt-12 pt-12 border-t border-white/10" style={{ transitionDelay: "300ms" }}>
              <p className="text-xs text-[#888] font-light leading-relaxed">
                このポストが役立ったと思われましたら、シェアしていただくか、コンサルティングが必要な方にご紹介ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="bg-[#1A1A1A] py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span
              className="text-sm font-black text-white"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              柳町さくら
            </span>
            <span className="text-xs text-[#666] ml-3 font-light">AI Community Portfolio</span>
          </div>
          <div className="text-xs text-[#555] font-light">
            制作：柳町さくら
          </div>
          <div className="text-xs text-[#555] font-light">
            © 2026 Sakura Yanagimachi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useEffect, useState, type ReactNode } from "react";
import yard from "./assets/customer/9a245837-d43d-4e0f-993e-ada309eadc64.png";
import entrance from "./assets/customer/643eef3f-5822-4501-b585-2756e91e538e.png";
import copper from "./assets/customer/35e1f166-d971-4a29-9f4a-c1813439fc3e.png";
import overview from "./assets/customer/2a4600bd-86b4-47af-a878-f7ce792276ed.png";
import demolition from "./assets/customer/929b3cb7-ae64-4252-8ba9-ca48b517d31f.png";
import sorted from "./assets/customer/e0ad1e57-234a-4e46-a793-88ebee5fd39d.png";
import warehouse from "./assets/customer/c059e4c1-b336-4eb8-bffd-c2784c9856c8.png";
import materials from "./assets/customer/4568e6c7-a03c-456f-aa92-b21374471057.png";
import stock from "./assets/customer/fea7ad96-dd36-42b6-b484-5ab397e329fb.png";

const phone = "71756163";
const call = `tel:+974${phone}`;
const whatsapp = `https://wa.me/974${phone}?text=${encodeURIComponent("Hello Qatar Scrap, I would like a quote for my scrap.")}`;
const externalLinks = [
  "https://share.google/QG7OtJl4NMNB86IhT",
  "https://share.google/0JOybUD5gAJ16kRFI",
  "https://share.google/y7CD5eKtVYWBL2kqn",
  "https://scrapbuyerqatar.com",
];

type IconName = "phone" | "pin" | "message" | "arrow" | "check" | "clock" | "menu";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.3 1.73.5 2.63.62A2 2 0 0 1 22 16.9Z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.7-5.1A8.5 8.5 0 1 1 21 15Z" />,
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.7 2.7L16.5 9" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}

const copy = {
  en: {
    utility: "Fast scrap collection — anywhere in Qatar",
    subbrand: "Scrap Buying • Demolition",
    nav: ["Home", "What We Buy", "Services", "Gallery", "Contact"],
    whatsapp: "WhatsApp",
    quote: "Get Free Quote",
    badge: "Qatar’s trusted scrap buyer",
    heroA: "We buy all kinds of",
    heroAccent: "scrap",
    heroB: "across Qatar",
    heroText:
      "Fair prices, fast collection and dependable service for homes, workshops, warehouses and businesses.",
    callNow: "Call Now",
    proofs: ["All scrap types", "Fast response", "Fair market prices", "Qatar-wide pickup"],
    panelTitle: "Request a free quote",
    panelSub: "Send photos for a faster estimate",
    panelItems: [
      "Free material assessment",
      "Clear, competitive pricing",
      "Convenient collection",
      "Demolition & site clearance",
    ],
    start: "Start Your Quote",
    stats: [
      ["100%", "Direct buyer"],
      ["15+", "Scrap categories"],
      ["24/7", "WhatsApp enquiries"],
      ["Qatar", "Collection coverage"],
    ],
    servicesLabel: "What we buy",
    servicesTitle: "One reliable buyer for every kind of scrap",
    servicesText:
      "From small loads to full commercial clear-outs, we assess, buy and collect materials across Qatar.",
    items: [
      ["Steel & Iron", "Beams, sheets, structural steel, pipes and mixed iron.", overview],
      ["Copper & Cable", "Copper, electrical cable, wiring and industrial motors.", copper],
      ["Aluminium & Brass", "Frames, profiles, fittings and non-ferrous metals.", materials],
      ["A/C & Equipment", "A/C units, compressors and commercial kitchen equipment.", yard],
      ["Plastic, HDPE & PVC", "Industrial plastic, HDPE materials and PVC pipes.", stock],
      ["Batteries & More", "Batteries, plywood and all general recyclable scrap.", sorted],
    ],
    more: "Get a price",
    whyLabel: "Why Qatar Scrap",
    whyTitle: "A straightforward way to sell your scrap",
    whyText:
      "Share the details, receive a clear quote and choose a convenient pickup time. Our local team handles the rest.",
    reasons: [
      ["Fair quotations", "Pricing based on the material, quantity and current market."],
      ["Quick response", "Direct support through WhatsApp and mobile."],
      ["On-site collection", "Collection from homes, workshops and commercial sites."],
      ["Experienced team", "Careful handling, loading and material sorting."],
      ["Demolition work", "Clearance for warehouses, properties and industrial sites."],
      ["Local coverage", "Serving customers throughout Doha and across Qatar."],
    ],
    galleryLabel: "Our work",
    galleryTitle: "Real materials. Real operations.",
    galleryText: "A look inside our yard, collection work and the materials we purchase every day.",
    galleryNames: [
      "Scrap yard",
      "Copper & cable",
      "Mixed materials",
      "Warehouse clearance",
      "Demolition work",
      "Sorted stock",
      "Metal collection",
      "Industrial scrap",
    ],
    ctaLabel: "Ready when you are",
    ctaTitle: "Turn your scrap into value today.",
    ctaText:
      "Send photos and your location on WhatsApp. We’ll review the material and arrange the next step.",
    request: "Request Free Quote",
    orCall: "Or call",
    footerText:
      "Buying all kinds of scrap and providing demolition and site-clearance services across Qatar.",
    quick: "Quick Links",
    materialsTitle: "Materials We Buy",
    touch: "Get in Touch",
    address: "Street 10, Industrial Area, Qatar",
    rights: "All rights reserved.",
    online: "Online",
  },
  ar: {
    utility: "جمع سريع للسكراب — في جميع أنحاء قطر",
    subbrand: "شراء السكراب • أعمال الهدم",
    nav: ["الرئيسية", "ما نشتريه", "خدماتنا", "معرض الصور", "تواصل معنا"],
    whatsapp: "واتساب",
    quote: "احصل على سعر مجاني",
    badge: "مشتري السكراب الموثوق في قطر",
    heroA: "نشتري جميع أنواع",
    heroAccent: "السكراب",
    heroB: "في جميع أنحاء قطر",
    heroText: "أسعار عادلة وجمع سريع وخدمة موثوقة للمنازل والورش والمستودعات والشركات.",
    callNow: "اتصل الآن",
    proofs: ["جميع أنواع السكراب", "استجابة سريعة", "أسعار سوق عادلة", "استلام في جميع أنحاء قطر"],
    panelTitle: "اطلب سعراً مجانياً",
    panelSub: "أرسل الصور للحصول على تقدير أسرع",
    panelItems: [
      "تقييم مجاني للمواد",
      "أسعار واضحة وتنافسية",
      "خدمة استلام مريحة",
      "الهدم وتنظيف المواقع",
    ],
    start: "ابدأ طلب السعر",
    stats: [
      ["100%", "مشتري مباشر"],
      ["15+", "نوعاً من السكراب"],
      ["24/7", "استفسارات واتساب"],
      ["قطر", "تغطية الاستلام"],
    ],
    servicesLabel: "ما نشتريه",
    servicesTitle: "مشتري واحد موثوق لجميع أنواع السكراب",
    servicesText:
      "من الكميات الصغيرة إلى تنظيف المواقع التجارية بالكامل، نقيّم ونشتري ونجمع المواد في جميع أنحاء قطر.",
    items: [
      ["الحديد والصلب", "عوارض وصفائح وحديد إنشائي وأنابيب وحديد متنوع.", overview],
      ["النحاس والكابلات", "نحاس وكابلات كهربائية وأسلاك ومواتير صناعية.", copper],
      ["الألمنيوم والنحاس الأصفر", "إطارات وقطاعات ووصلات ومعادن غير حديدية.", materials],
      ["المكيفات والمعدات", "وحدات تكييف وضواغط ومعدات مطابخ تجارية.", yard],
      ["البلاستيك وHDPE وPVC", "بلاستيك صناعي ومواد HDPE وأنابيب PVC.", stock],
      ["البطاريات والمزيد", "بطاريات وخشب أبلكاش وجميع أنواع السكراب العام.", sorted],
    ],
    more: "احصل على سعر",
    whyLabel: "لماذا قطر سكراب",
    whyTitle: "طريقة سهلة ومباشرة لبيع السكراب",
    whyText:
      "شارك التفاصيل واحصل على سعر واضح واختر وقت الاستلام المناسب. فريقنا المحلي يتولى الباقي.",
    reasons: [
      ["أسعار عادلة", "تسعير حسب نوع المادة والكمية وسعر السوق الحالي."],
      ["استجابة سريعة", "دعم مباشر عبر واتساب والهاتف."],
      ["استلام من الموقع", "جمع من المنازل والورش والمواقع التجارية."],
      ["فريق ذو خبرة", "تحميل وفرز وتعامل دقيق مع المواد."],
      ["أعمال الهدم", "تنظيف المستودعات والعقارات والمواقع الصناعية."],
      ["تغطية محلية", "نخدم العملاء في الدوحة وجميع أنحاء قطر."],
    ],
    galleryLabel: "أعمالنا",
    galleryTitle: "مواد حقيقية. عمليات حقيقية.",
    galleryText: "نظرة على ساحتنا وأعمال الجمع والمواد التي نشتريها يومياً.",
    galleryNames: [
      "ساحة السكراب",
      "نحاس وكابلات",
      "مواد متنوعة",
      "تنظيف مستودعات",
      "أعمال الهدم",
      "مواد مفروزة",
      "جمع المعادن",
      "سكراب صناعي",
    ],
    ctaLabel: "نحن جاهزون",
    ctaTitle: "حوّل السكراب إلى قيمة اليوم.",
    ctaText: "أرسل الصور وموقعك عبر واتساب. سنراجع المواد ونرتب الخطوة التالية.",
    request: "اطلب سعراً مجانياً",
    orCall: "أو اتصل",
    footerText: "نشتري جميع أنواع السكراب ونقدم خدمات الهدم وتنظيف المواقع في جميع أنحاء قطر.",
    quick: "روابط سريعة",
    materialsTitle: "المواد التي نشتريها",
    touch: "تواصل معنا",
    address: "شارع 10، المنطقة الصناعية، قطر",
    rights: "جميع الحقوق محفوظة.",
    online: "روابطنا",
  },
};

function App() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const ar = lang === "ar";
  const t = copy[lang];
  const ids = ["home", "services", "process", "gallery", "contact"];
  const galleryImages = [yard, copper, materials, warehouse, demolition, sorted, entrance, stock];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = ar ? "rtl" : "ltr";
  }, [ar, lang]);

  return (
    <div className={ar ? "site arabic" : "site"}>
      <div className="utility-bar">
        <div className="container utility-inner">
          <div>
            <a href={call}>
              <Icon name="phone" size={14} /> +974 {phone}
            </a>
            <a href={externalLinks[0]} target="_blank" rel="noreferrer">
              <Icon name="pin" size={14} /> {t.address}
            </a>
          </div>
          <span>
            <i /> {t.utility}
          </span>
        </div>
      </div>

      <header>
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Qatar Scrap home">
            <span className="brand-mark">
              QS
              <i />
            </span>
            <span>
              <strong>Qatar Scrap</strong>
              <small>{t.subbrand}</small>
            </span>
          </a>
          <nav className={menuOpen ? "open" : ""}>
            {t.nav.map((item, index) => (
              <a href={`#${ids[index]}`} key={item} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button className="language" onClick={() => setLang(ar ? "en" : "ar")}>
              {ar ? "EN" : "عربي"}
            </button>
            <a className="whatsapp-head" href={whatsapp} target="_blank" rel="noreferrer">
              <Icon name="message" size={16} />
              {t.whatsapp}
            </a>
            <a className="quote-head" href="#contact">
              {t.quote}
            </a>
            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <Icon name="menu" size={21} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-bg" src={overview} alt="Qatar Scrap yard in Doha" />
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="pill">
                <i />
                {t.badge}
              </div>
              <h1>
                {t.heroA} <em>{t.heroAccent}</em> {t.heroB}
              </h1>
              <p>{t.heroText}</p>
              <div className="hero-buttons">
                <a className="button light" href={whatsapp} target="_blank" rel="noreferrer">
                  {t.quote}
                  <Icon name="arrow" />
                </a>
                <a className="button outline" href={call}>
                  <Icon name="phone" />
                  {t.callNow}
                </a>
                <a className="button lime" href={whatsapp} target="_blank" rel="noreferrer">
                  <Icon name="message" />
                  {t.whatsapp}
                </a>
              </div>
              <div className="proofs">
                {t.proofs.map((proof, index) => (
                  <span key={proof}>
                    <Icon name={index === 1 ? "clock" : "check"} size={16} />
                    {proof}
                  </span>
                ))}
              </div>
            </div>
            <aside className="quote-panel">
              <div className="panel-head">
                <span>
                  <Icon name="message" size={22} />
                </span>
                <div>
                  <strong>{t.panelTitle}</strong>
                  <small>{t.panelSub}</small>
                </div>
              </div>
              <ul>
                {t.panelItems.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={whatsapp} target="_blank" rel="noreferrer">
                {t.start}
                <Icon name="arrow" />
              </a>
              <div className="panel-call">
                <span>{t.orCall}</span>
                <a href={call}>+974 {phone}</a>
              </div>
            </aside>
          </div>
        </section>

        <section className="stats-wrap" aria-label="Service highlights">
          <div className="container">
            <div className="stats">
              {t.stats.map(([number, label]) => (
                <div key={label}>
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <SectionHead label={t.servicesLabel} title={t.servicesTitle} text={t.servicesText} />
            <div className="service-grid">
              {t.items.map(([name, description, image], index) => (
                <article className="service-card" key={name as string}>
                  <div className="service-image">
                    <img src={image} alt={name as string} loading={index > 2 ? "lazy" : "eager"} />
                    <span>0{index + 1}</span>
                  </div>
                  <div className="service-body">
                    <h3>{name as string}</h3>
                    <p>{description as string}</p>
                    <a href={whatsapp} target="_blank" rel="noreferrer">
                      {t.more}
                      <Icon name="arrow" size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why" id="process">
          <div className="container why-grid">
            <div className="why-visual">
              <img
                src={demolition}
                alt="Qatar Scrap demolition and collection work"
                loading="lazy"
              />
              <div className="experience">
                <strong>QATAR</strong>
                <span>{ar ? "خدمة محلية" : "LOCAL SERVICE"}</span>
              </div>
              <a href={externalLinks[0]} target="_blank" rel="noreferrer">
                <Icon name="pin" />
                <span>
                  <small>{ar ? "موقعنا" : "Find our yard"}</small>
                  <strong>{t.address}</strong>
                </span>
              </a>
            </div>
            <div className="why-copy">
              <SectionHead label={t.whyLabel} title={t.whyTitle} text={t.whyText} align="left" />
              <div className="reason-grid">
                {t.reasons.map(([title, description]) => (
                  <div className="reason" key={title}>
                    <Icon name="check" />
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="container">
            <SectionHead label={t.galleryLabel} title={t.galleryTitle} text={t.galleryText} />
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <figure key={image}>
                  <img src={image} alt={t.galleryNames[index]} loading="lazy" />
                  <div>
                    <small>
                      {ar ? "عمل" : "Project"} 0{index + 1}
                    </small>
                    <figcaption>{t.galleryNames[index]}</figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="container">
            <div className="cta">
              <div>
                <small>{t.ctaLabel}</small>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaText}</p>
              </div>
              <div>
                <a className="button light" href={whatsapp} target="_blank" rel="noreferrer">
                  {t.request}
                  <Icon name="arrow" />
                </a>
                <span>
                  {t.orCall} <a href={call}>+974 {phone}</a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div className="footer-about">
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">
                QS
                <i />
              </span>
              <span>
                <strong>Qatar Scrap</strong>
                <small>{t.subbrand}</small>
              </span>
            </a>
            <p>{t.footerText}</p>
            <div className="socials">
              {externalLinks.map((link, index) => (
                <a
                  href={link}
                  key={link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`External link ${index + 1}`}
                >
                  ↗
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>{t.quick}</h4>
            {t.nav.map((item, index) => (
              <a href={`#${ids[index]}`} key={item}>
                {item}
              </a>
            ))}
          </div>
          <div>
            <h4>{t.materialsTitle}</h4>
            {t.items.slice(0, 6).map(([name]) => (
              <a href="#services" key={name as string}>
                {name as string}
              </a>
            ))}
          </div>
          <div className="footer-contact">
            <h4>{t.touch}</h4>
            <a href={externalLinks[0]} target="_blank" rel="noreferrer">
              <Icon name="pin" />
              {t.address}
            </a>
            <a href={call}>
              <Icon name="phone" />
              +974 {phone}
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              <Icon name="message" />
              {t.whatsapp}
            </a>
            <a href={externalLinks[3]} target="_blank" rel="noreferrer">
              scrapbuyerqatar.com
            </a>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <span>
              © {new Date().getFullYear()} Qatar Scrap. {t.rights}
            </span>
            <span>Street 10 • Industrial Area • Qatar</span>
          </div>
        </div>
      </footer>

      <div className="floating-actions">
        <a className="floating-label" href={whatsapp} target="_blank" rel="noreferrer">
          {t.request}
        </a>
        <a
          className="floating whatsapp"
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <Icon name="message" size={24} />
        </a>
        <a className="floating floating-call" href={call} aria-label="Call Qatar Scrap">
          <Icon name="phone" size={21} />
        </a>
      </div>
    </div>
  );
}

function SectionHead({
  label,
  title,
  text,
  align = "center",
}: {
  label: string;
  title: string;
  text: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`section-head ${align}`}>
      <span className="section-pill">
        <i />
        {label}
      </span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default App;

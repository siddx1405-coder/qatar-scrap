import { useEffect, useState } from "react";
import a from "./assets/customer/9a245837-d43d-4e0f-993e-ada309eadc64.png";
import b from "./assets/customer/643eef3f-5822-4501-b585-2756e91e538e.png";
import c from "./assets/customer/35e1f166-d971-4a29-9f4a-c1813439fc3e.png";
import d from "./assets/customer/2a4600bd-86b4-47af-a878-f7ce792276ed.png";
import e from "./assets/customer/929b3cb7-ae64-4252-8ba9-ca48b517d31f.png";
import f from "./assets/customer/e0ad1e57-234a-4e46-a793-88ebee5fd39d.png";
import g from "./assets/customer/c059e4c1-b336-4eb8-bffd-c2784c9856c8.png";
import h from "./assets/customer/4568e6c7-a03c-456f-aa92-b21374471057.png";
import i from "./assets/customer/fea7ad96-dd36-42b6-b484-5ab397e329fb.png";

const phone = "71756163";
const wa = `https://wa.me/974${phone}`;
const links = [
  "https://share.google/QG7OtJl4NMNB86IhT",
  "https://share.google/0JOybUD5gAJ16kRFI",
  "https://share.google/y7CD5eKtVYWBL2kqn",
  "https://scrapbuyerqatar.com",
];
const photos = [a, d, c, f, h, i, g, b, e];

const text = {
  en: {
    nav: ["Home", "What We Buy", "Services", "Gallery", "Contact"],
    tag: "Trusted scrap buyer in Qatar",
    title: "Your scrap has value.",
    accent: "We buy it all.",
    desc: "Fast, reliable scrap collection for homes, workshops and businesses across Qatar. Get a fair quote and convenient pickup today.",
    quote: "Get a quote on WhatsApp",
    call: "Call 71756163",
    benefits: ["Fair market prices", "Fast response", "All kinds of scrap", "Demolition work"],
    buy: "What we buy",
    buyTitle: "From everyday metal to complete site clear-outs",
    buyDesc:
      "We purchase ferrous and non-ferrous scrap, electrical items, equipment and reusable materials in any quantity.",
    products: [
      ["Steel & Iron", "Structural steel, beams, sheets and mixed iron"],
      ["Copper & Cable", "Copper, electric wire, cable and motors"],
      ["Aluminium & Brass", "Frames, profiles, fittings and mixed metal"],
      ["A/C & Equipment", "A/C units, compressors and kitchen equipment"],
      ["Plastic & PVC", "HDPE, PVC pipes and industrial plastic"],
      ["Battery & More", "Batteries, plywood and general scrap items"],
    ],
    pro: "Professional service",
    simple: "Simple, quick and dependable",
    proDesc:
      "Send us photos of your scrap. We review the material, arrange collection and help clear your site with minimal disruption.",
    steps: [
      ["01", "Send your details", "Share photos and your location through WhatsApp."],
      ["02", "Get a fair quote", "We assess the material and provide a clear price."],
      ["03", "We collect", "Our team arranges fast pickup at a suitable time."],
    ],
    demo: "Demolition & site clearance",
    demoDesc:
      "We also undertake demolition work and remove scrap from warehouses, workshops, commercial sites and properties across Qatar.",
    discuss: "Discuss your project",
    work: "Our work",
    gallery: "Real materials. Real operations.",
    galleryDesc: "A look at our scrap collection, sorting and yard operations in Qatar.",
    contact: "Contact us",
    contactTitle: "Turn your scrap into value today",
    contactDesc:
      "For prices, collection and demolition enquiries, contact Qatar Scrap directly. Send photos on WhatsApp for a faster estimate.",
    location: "Street 10, Industrial Area, Qatar",
    map: "Open location",
    online: "Find us online",
    footer: "Buying all kinds of scrap and providing demolition services across Qatar.",
  },
  ar: {
    nav: ["الرئيسية", "ما نشتريه", "خدماتنا", "معرض الصور", "تواصل معنا"],
    tag: "مشتري سكراب موثوق في قطر",
    title: "السكراب له قيمة.",
    accent: "نشتري جميع الأنواع.",
    desc: "خدمة سريعة وموثوقة لشراء وجمع السكراب من المنازل والورش والشركات في جميع أنحاء قطر. احصل على سعر عادل وخدمة استلام مريحة.",
    quote: "اطلب سعراً عبر واتساب",
    call: "اتصل 71756163",
    benefits: ["أسعار سوق عادلة", "استجابة سريعة", "جميع أنواع السكراب", "أعمال الهدم"],
    buy: "ما نشتريه",
    buyTitle: "من المعادن اليومية إلى تنظيف المواقع بالكامل",
    buyDesc:
      "نشتري المعادن الحديدية وغير الحديدية والأدوات الكهربائية والمعدات والمواد القابلة لإعادة الاستخدام بأي كمية.",
    products: [
      ["الحديد والصلب", "حديد إنشائي وعوارض وصفائح وحديد متنوع"],
      ["النحاس والكابلات", "نحاس وأسلاك كهربائية وكابلات ومواتير"],
      ["الألمنيوم والنحاس الأصفر", "إطارات وقطاعات ووصلات ومعادن متنوعة"],
      ["المكيفات والمعدات", "وحدات تكييف وضواغط ومعدات مطابخ"],
      ["البلاستيك وPVC", "أنابيب HDPE وPVC وبلاستيك صناعي"],
      ["البطاريات والمزيد", "بطاريات وخشب أبلكاش وسكراب عام"],
    ],
    pro: "خدمة احترافية",
    simple: "بسيطة وسريعة وموثوقة",
    proDesc:
      "أرسل لنا صور السكراب. نقوم بتقييم المواد وترتيب الاستلام والمساعدة في تنظيف موقعك بأقل إزعاج.",
    steps: [
      ["٠١", "أرسل التفاصيل", "شارك الصور وموقعك معنا عبر واتساب."],
      ["٠٢", "احصل على سعر عادل", "نقيّم المواد ونقدم سعراً واضحاً."],
      ["٠٣", "نأتي للاستلام", "يرتب فريقنا استلاماً سريعاً في الوقت المناسب."],
    ],
    demo: "الهدم وتنظيف المواقع",
    demoDesc:
      "نقوم أيضاً بأعمال الهدم وإزالة السكراب من المستودعات والورش والمواقع التجارية والعقارات في جميع أنحاء قطر.",
    discuss: "ناقش مشروعك معنا",
    work: "أعمالنا",
    gallery: "مواد حقيقية. عمليات حقيقية.",
    galleryDesc: "نظرة على أعمال جمع وفرز السكراب وساحتنا في قطر.",
    contact: "تواصل معنا",
    contactTitle: "حوّل السكراب إلى قيمة اليوم",
    contactDesc:
      "للاستفسار عن الأسعار وخدمة الاستلام وأعمال الهدم، تواصل مباشرة مع قطر سكراب. أرسل الصور عبر واتساب للحصول على تقدير أسرع.",
    location: "شارع 10، المنطقة الصناعية، قطر",
    map: "افتح الموقع",
    online: "تجدنا على الإنترنت",
    footer: "نشتري جميع أنواع السكراب ونقدم خدمات الهدم في جميع أنحاء قطر.",
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function App() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [menu, setMenu] = useState(false);
  const t = text[lang],
    ar = lang === "ar";
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = ar ? "rtl" : "ltr";
  }, [lang, ar]);
  const ids = ["home", "products", "services", "gallery", "contact"];
  return (
    <div className={ar ? "arabic" : ""}>
      <header>
        <a className="brand" href="#home">
          <b>QS</b>
          <span>
            <strong>Qatar Scrap</strong>
            <small>{ar ? "نشتري جميع أنواع السكراب" : "We buy all kinds of scrap"}</small>
          </span>
        </a>
        <nav className={menu ? "open" : ""}>
          {t.nav.map((n, x) => (
            <a key={n} href={"#" + ids[x]} onClick={() => setMenu(false)}>
              {n}
            </a>
          ))}
        </nav>
        <div className="head-actions">
          <button className="lang" onClick={() => setLang(ar ? "en" : "ar")}>
            {ar ? "EN" : "العربية"}
          </button>
          <a className="head-call" href={"tel:+974" + phone}>
            +974 {phone}
          </a>
          <button className="menu" onClick={() => setMenu(!menu)} aria-label="Menu">
            <i />
            <i />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img src={d} alt="Qatar Scrap industrial yard" />
          <div className="shade" />
          <div className="shell hero-inner">
            <div>
              <p className="eyebrow light">{t.tag}</p>
              <h1>
                {t.title}
                <em>{t.accent}</em>
              </h1>
              <p className="lead">{t.desc}</p>
              <div className="buttons">
                <a className="btn primary" href={wa} target="_blank">
                  ● {t.quote}
                </a>
                <a className="btn ghost" href={"tel:+974" + phone}>
                  {t.call} <Arrow />
                </a>
              </div>
            </div>
            <aside>
              <i />{" "}
              <span>
                <small>{ar ? "جاهزون للاستلام" : "Ready for pickup"}</small>
                <b>{ar ? "المنطقة الصناعية، قطر" : "Industrial Area, Qatar"}</b>
              </span>
            </aside>
          </div>
        </section>
        <div className="benefits">
          <div className="shell">
            {t.benefits.map((x, n) => (
              <span key={x}>
                <i>0{n + 1}</i>
                {x}
              </span>
            ))}
          </div>
        </div>

        <section className="section" id="products">
          <div className="shell">
            <div className="heading">
              <div>
                <p className="eyebrow">{t.buy}</p>
                <h2>{t.buyTitle}</h2>
              </div>
              <p>{t.buyDesc}</p>
            </div>
            <div className="products">
              {t.products.map((p, n) => (
                <article key={p[0]}>
                  <small>0{n + 1}</small>
                  <div className={"icon ic" + n}>♻</div>
                  <h3>{p[0]}</h3>
                  <p>{p[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="services">
          <div className="shell process-grid">
            <div className="process-img">
              <img src={c} alt="Qatar Scrap collection yard" />
              <b>
                100%<small>{ar ? "خدمة محلية" : "LOCAL SERVICE"}</small>
              </b>
            </div>
            <div>
              <p className="eyebrow">{t.pro}</p>
              <h2>{t.simple}</h2>
              <p className="muted">{t.proDesc}</p>
              <div className="steps">
                {t.steps.map((s) => (
                  <article key={s[1]}>
                    <i>{s[0]}</i>
                    <div>
                      <h3>{s[1]}</h3>
                      <p>{s[2]}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="demo">
          <img src={g} alt="Demolition and scrap clearance" />
          <div className="shade" />
          <div className="shell">
            <p className="eyebrow light">
              {ar ? "أكثر من شراء السكراب" : "More than scrap buying"}
            </p>
            <h2>{t.demo}</h2>
            <p>{t.demoDesc}</p>
            <a href={wa} target="_blank">
              {t.discuss} <Arrow />
            </a>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="shell">
            <div className="heading">
              <div>
                <p className="eyebrow">{t.work}</p>
                <h2>{t.gallery}</h2>
              </div>
              <p>{t.galleryDesc}</p>
            </div>
            <div className="gallery">
              {photos.map((p, n) => (
                <figure className={n === 0 ? "feature" : n === 4 ? "wide" : ""} key={p}>
                  <img
                    src={p}
                    alt={`Qatar Scrap work ${n + 1}`}
                    loading={n > 2 ? "lazy" : "eager"}
                  />
                  <figcaption>0{n + 1} · Qatar Scrap</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="shell contact-grid">
            <div>
              <p className="eyebrow light">{t.contact}</p>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactDesc}</p>
              <a className="btn primary" href={wa} target="_blank">
                ● {t.quote}
              </a>
            </div>
            <div className="contact-cards">
              <a href={"tel:+974" + phone}>
                <small>{ar ? "الهاتف وواتساب" : "Phone & WhatsApp"}</small>
                <strong>+974 {phone}</strong>
                <Arrow />
              </a>
              <a href={links[0]} target="_blank">
                <small>{ar ? "موقعنا" : "Our location"}</small>
                <strong>{t.location}</strong>
                <span>
                  {t.map} <Arrow />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-grid">
          <div>
            <a className="brand invert" href="#home">
              <b>QS</b>
              <strong>Qatar Scrap</strong>
            </a>
            <p>{t.footer}</p>
          </div>
          <div>
            <h3>{t.online}</h3>
            {["Google Business", "Facebook", "Business Profile", "scrapbuyerqatar.com"].map(
              (x, n) => (
                <a href={links[n]} target="_blank" key={x}>
                  {x} <Arrow />
                </a>
              ),
            )}
          </div>
          <div>
            <h3>{ar ? "تواصل معنا" : "Contact"}</h3>
            <a href={"tel:+974" + phone}>+974 {phone}</a>
            <span>{t.location}</span>
          </div>
        </div>
        <div className="shell copyright">
          © {new Date().getFullYear()} Qatar Scrap.{" "}
          {ar ? "جميع الحقوق محفوظة." : "All rights reserved."}
        </div>
      </footer>
      <a className="float" href={wa} target="_blank" aria-label="WhatsApp">
        ●
      </a>
    </div>
  );
}
export default App;

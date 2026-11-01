import React, { useEffect, useState } from "react";
import "./App.css";

const BASE = import.meta.env.BASE_URL;

const heroSweets = [
  { name: "Motichoor Laddu", short: "LADDU", category: "THE FESTIVE CLASSIC", price: "₹420 / kg", desc: "Tiny golden pearls, gently bound into a melt-in-your-mouth celebration.", image: `${BASE}images/sweets/motichoor-laddu.png`, emoji: "🟠", tone: "#e8a43a" },
  { name: "Kaju Katli", short: "KAJU KATLI", category: "THE ROYAL FAVOURITE", price: "₹680 / kg", desc: "Silky cashew goodness finished with a delicate touch of silver.", image: `${BASE}images/sweets/kaju-katli.png`, emoji: "🔶", tone: "#d8bd8b" },
  { name: "Gulab Jamun", short: "GULAB JAMUN", category: "THE TIMELESS INDULGENCE", price: "₹360 / kg", desc: "Soft golden dumplings soaked in fragrant cardamom syrup.", image: `${BASE}images/sweets/gulab-jamun.png`, emoji: "🍡", tone: "#8e3d2c" },
  { name: "Strawberry Peda", short: "STRAWBERRY PEDA", category: "A LITTLE TWIST", price: "₹520 / kg", desc: "A playful berry note meets the comforting richness of milk peda.", image: `${BASE}images/sweets/strawberry-peda.png`, emoji: "🍓", tone: "#c85a70" },
  { name: "Jalebi", short: "JALEBI", category: "CRISP. GOLDEN. JOYFUL.", price: "₹300 / kg", desc: "Crisp spirals dipped in warm syrup for a bright festive bite.", image: `${BASE}images/sweets/jalebi.png`, emoji: "🥨", tone: "#df8b22" },
];

const collections = [
  {
    name: "Motichoor Laddu",
    price: "₹420",
    unit: "/ kg",
    image: `${BASE}images/collection/laddu.png`,
    emoji: "🟠",
    color: "#b86c35",
    description: "Golden pearls of sweetness, handcrafted with pure desi ghee.",
  },
  {
    name: "Kaju Katli",
    price: "₹680",
    unit: "/ kg",
    image: `${BASE}images/collection/kaju-katli.png`,
    emoji: "🔶",
    color: "#b69a6b",
    description: "Rich cashews transformed into a smooth royal delicacy.",
  },
  {
    name: "Gulab Jamun",
    price: "₹360",
    unit: "/ kg",
    image: `${BASE}images/collection/gulab-jamun.png`,
    emoji: "🍡",
    color: "#934b3c",
    description: "Soft, delicious dumplings soaked in aromatic sugar syrup.",
  },
  {
    name: "Milk Peda",
    price: "₹520",
    unit: "/ kg",
    image: `${BASE}images/collection/peda.png`,
    emoji: "🍥",
    color: "#b47b72",
    description: "Traditional milk peda with a rich and creamy flavour.",
  },
  {
    name: "Mysore Pak",
    price: "₹480",
    unit: "/ kg",
    image: `${BASE}images/collection/mysore-pak.png`,
    emoji: "🟨",
    color: "#b47a31",
    description: "A melt-in-your-mouth South Indian classic made with ghee.",
  },
  {
    name: "Jalebi",
    price: "₹300",
    unit: "/ kg",
    image: `${BASE}images/collection/jalebi.png`,
    emoji: "🥨",
    color: "#d58a27",
    description: "Crispy golden spirals dipped in delicious sweet syrup.",
  },
  {
    name: "Rasgulla",
    price: "₹400",
    unit: "/ kg",
    image: `${BASE}images/collection/rasgulla.png`,
    emoji: "⚪",
    color: "#aa8c80",
    description: "Soft and spongy Bengali sweets with delicate sweetness.",
  },
];

const showcase = [
  { name: "Motichoor Laddu", image: `${BASE}images/sweets/motichoor-laddu.png`, emoji: "🟠", color: "#e6a43d", text: "A little golden sphere of happiness, prepared for the moments that bring everyone together." },
  { name: "Gulab Jamun", image: `${BASE}images/sweets/gulab-jamun.png`, emoji: "🍡", color: "#a45139", text: "Soft, warm and soaked in fragrant syrup — a timeless treat that feels like home." },
  { name: "Kaju Katli", image: `${BASE}images/sweets/kaju-katli.png`, emoji: "🔶", color: "#d3bd91", text: "Finely ground cashews become a delicate, silky sweet with a touch of royal charm." },
  { name: "Jalebi", image: `${BASE}images/sweets/jalebi.png`, emoji: "🥨", color: "#e99a29", text: "Crisp spirals, golden colour and just the right sweetness in every joyful bite." },
  { name: "Rasgulla", image: `${BASE}images/sweets/rasgulla.png`, emoji: "⚪", color: "#c7a99b", text: "Light and tender, made for those who love a softer kind of sweetness." },
];

function SweetImage({ src, emoji, className = "" }) {
  const [failed, setFailed] = useState(false);
  return failed
    ? <div className={`sweet-placeholder ${className}`} aria-label="Sweet image placeholder">{emoji}</div>
    : <img className={className} src={src} alt="Indian sweet" onError={() => setFailed(true)} />;
}

function Loader({ onDone }) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, 4500);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="loader-screen intro-video-screen">
      <video
        className="intro-video"
        src={`${BASE}videos/intro.mp4`}
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <div className="intro-video-overlay" />
      <div className="intro-video-brand">
        <span>ONE BITE</span>
        <small>THE SWEET HOUSE</small>
      </div>
      <div className="intro-video-progress"><i /></div>
      <button className="intro-skip" onClick={onDone}>SKIP INTRO ↗</button>
    </div>
  );
}

function DiwaliPopup({ onClose }) {
  // The offer stays visible until the user closes or skips it manually.
  return (
    <div className="diwali-popup-backdrop">
      <div className="diwali-popup">
        <button className="diwali-popup-close" onClick={onClose} aria-label="Close offer">×</button>
        <span className="diwali-popup-spark">✦ ✧ ✦</span>
        <p className="diwali-popup-kicker">ONE BITE · THE SWEET HOUSE</p>
        <h2>Advance Happy <em>Diwali!</em></h2>
        <div className="diwali-discount">50% <span>OFF</span></div>
        <p className="diwali-popup-copy">Celebrate the festival of lights with a little extra sweetness.</p>
        <div className="diwali-sweet-list">
          <span>Motichoor Laddu</span>
          <span>Kaju Katli</span>
          <span>Gulab Jamun</span>
          <span>Jalebi</span>
          <span>Mysore Pak</span>
        </div>
        <p className="diwali-popup-note">FESTIVE OFFERS ON ONE BITE SWEETS</p>
        <button className="diwali-skip" onClick={onClose}>SKIP OFFER ×</button>
      </div>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [["Home", "#home"], ["Collection", "#collection"], ["Our Story", "#story"], ["Order", "#order"]];
  return (
    <header className="navbar">
      <a className="brand" href="#home">ONE<span>BITE</span><small>THE SWEET HOUSE</small></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "✕" : "☰"}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-order" href="#order" onClick={() => setMenuOpen(false)}>ORDER NOW ↗</a>
      </nav>
    </header>
  );
}

function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [details, setDetails] = useState(false);
  const item = heroSweets[active];
  const move = (step) => { setActive((v) => (v + step + heroSweets.length) % heroSweets.length); setDetails(false); };
  return (
    <section className="hero" id="home" style={{ "--hero-tone": item.tone }}>
      <div className="hero-grain" />
      <div className="hero-topline"><span>HANDCRAFTED IN SMALL BATCHES</span><span>EST. WITH LOVE · INDIA</span></div>
      <div className="hero-watermark">{item.short}</div>
      <div className="hero-copy">
        <p className="eyebrow">{item.category}</p>
        <h1>One bite.<br /><em>Pure delight.</em></h1>
        <p className="hero-description">{item.desc}</p>
        <div className="hero-actions">
          <a className="gold-button" href="#order">EXPLORE SWEETS <span>↗</span></a>
          <button className="text-button" onClick={() => setDetails(true)}>DISCOVER THIS SWEET +</button>
        </div>
      </div>
      <div className="hero-product">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-spark">✦</div>
        <SweetImage src={item.image} emoji={item.emoji} className="hero-sweet-img" />
        <div className="hero-product-caption"><span>ONE BITE SIGNATURE</span><b>{item.name}</b></div>
      </div>
      <div className="hero-bottom">
        <div className="hero-controls">
          <button onClick={() => move(-1)} aria-label="Previous sweet">←</button>
          <span>0{active + 1} <i>/</i> 0{heroSweets.length}</span>
          <button onClick={() => move(1)} aria-label="Next sweet">→</button>
        </div>
        <div className="hero-dots">{heroSweets.map((s, i) => <button key={s.name} className={i === active ? "active" : ""} onClick={() => setActive(i)} aria-label={`Show ${s.name}`} />)}</div>
        <p>SCROLL TO TASTE THE JOY ↓</p>
      </div>
      {details && <div className="modal-backdrop" onClick={() => setDetails(false)}><div className="sweet-modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setDetails(false)}>×</button><SweetImage src={item.image} emoji={item.emoji} /><p className="eyebrow">{item.category}</p><h2>{item.name}</h2><p>{item.desc}</p><strong>{item.price}</strong><a className="gold-button" href="#order" onClick={() => setDetails(false)}>ENQUIRE TO ORDER ↗</a></div></div>}
    </section>
  );
}

function SweetCollection() {
  const [active, setActive] = useState(0);
  const [cart, setCart] = useState([]);

  const item = collections[active];

  const addToCart = (sweet) => {
    setCart((previous) => [...previous, sweet.name]);
  };

  return (
    <section className="collection section-pad" id="collection">

      <div className="section-heading">
        <p className="eyebrow">A BOX FULL OF HAPPINESS</p>

        <h2>
          Find your <em>favourite.</em>
        </h2>

        <p>
          Seven little reasons to make every moment sweeter.
        </p>
      </div>

      <div className="collection-cards">

        {collections.map((sweet, i) => (

          <button
            key={sweet.name}
            className={`collection-card ${
              active === i ? "selected" : ""
            }`}
            style={{ "--card-color": sweet.color }}
            onClick={() => setActive(i)}
          >

            {/* NUMBER */}
            <span className="collection-card-index">
              0{i + 1}
            </span>

            {/* OPEN CARD CONTENT */}
            {active === i && (

              <div className="collection-open-content">

                <div className="collection-card-image">
                  <SweetImage
                    src={sweet.image}
                    emoji={sweet.emoji}
                  />
                </div>

                <div className="collection-card-info">

                  <span className="collection-label">
                    ONE BITE SIGNATURE
                  </span>

                  <h3>{sweet.name}</h3>

                  <p className="collection-description">
                    {sweet.description}
                  </p>

                  <div className="collection-price">
                    <strong>{sweet.price}</strong>
                    <span>{sweet.unit}</span>
                  </div>

                  <button
                    className="add-cart-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(sweet);
                    }}
                  >
                    ADD TO CART <span>＋</span>
                  </button>

                </div>

              </div>

            )}

          </button>

        ))}

      </div>

      <div className="cart-status">
        <span>YOUR SWEET BOX</span>
        <strong>{cart.length} ITEMS ADDED</strong>
      </div>

    </section>
  );
}

function Sweet3DCarousel() {
  const [active, setActive] = useState(0);
  const current = showcase[active];
  const move = (step) => setActive((v) => (v + step + showcase.length) % showcase.length);
  return (
    <section className="showcase section-pad" id="signature">
      <div className="section-heading light-heading"><p className="eyebrow">THE SIGNATURE SELECTION</p><h2>Tradition, with a <em>twist.</em></h2><p>Take a closer look at the sweets made to be remembered.</p></div>
      <div className="showcase-stage" style={{ "--active-color": current.color }}>
        {showcase.map((sweet, i) => {
          let offset = i - active;
          if (offset > 2) offset -= showcase.length;
          if (offset < -2) offset += showcase.length;
          return <button key={sweet.name} className={`showcase-item ${offset === 0 ? "is-active" : ""}`} style={{ "--offset": offset, "--distance": Math.abs(offset), "--sweet-color": sweet.color, zIndex: 10 - Math.abs(offset) }} onClick={() => setActive(i)} aria-label={`View ${sweet.name}`}><SweetImage src={sweet.image} emoji={sweet.emoji} /><span>{sweet.name}</span></button>;
        })}
      </div>
      <div className="showcase-info"><div><span className="eyebrow">0{active + 1} / 0{showcase.length}</span><h3>{current.name}</h3><p>{current.text}</p></div><div className="showcase-arrows"><button onClick={() => move(-1)} aria-label="Previous">←</button><button onClick={() => move(1)} aria-label="Next">→</button></div></div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="story section-pad" id="story">
      <div className="story-mark">✳</div>
      <div className="story-copy"><p className="eyebrow">A SWEET LITTLE STORY</p><h2>Every sweet<br />has a <em>story.</em></h2><p>Some memories begin with a familiar taste. A festival shared with family, a box of sweets carried to a friend, a small treat after a long day. At ONE BITE, we celebrate those moments with thoughtfully prepared Indian favourites and a whole lot of heart.</p><a href="#order" className="underlined-link">SHARE A LITTLE HAPPINESS ↗</a></div>
      <div className="story-art"><div className="story-circle"><span>ONE<br />BITE</span><b>✦</b></div><span className="story-side-note">TRADITION · TASTE · TOGETHERNESS</span></div>
    </section>
  );
}

function SweetVideo() {
  return <section className="video-section"><video autoPlay muted loop playsInline preload="metadata" poster={`${BASE}images/sweets/motichoor-laddu.png`}><source src={`${BASE}videos/sweet-making.mp4`} type="video/mp4" /></video><div className="video-overlay" /><div className="video-content"><p className="eyebrow">FROM OUR HANDS TO YOUR HEART</p><h2>MADE WITH LOVE.<br /><em>SERVED WITH HAPPINESS.</em></h2><p>Little details. Beautiful ingredients. A whole lot of sweetness.</p></div></section>;
}

function OrderSection() {
  return (
    <section className="order-section section-pad" id="order">
      <div className="order-decoration">✦</div><p className="eyebrow">MAKE EVERY CELEBRATION SWEETER</p><h2>Your moment.<br /><em>Your sweet box.</em></h2><p className="order-copy">Planning a celebration, surprising someone special, or simply craving something sweet? We would love to help you put together a box of happiness.</p>
      <div className="order-options"><div><span>01</span><b>Everyday favourites</b><small>Your go-to sweets, freshly prepared.</small></div><div><span>02</span><b>Festive gift boxes</b><small>Thoughtful boxes for every celebration.</small></div><div><span>03</span><b>Custom celebrations</b><small>A sweet selection made around you.</small></div></div>
      <a className="gold-button large-button" href="https://wa.me/?text=Hi%20ONE%20BITE%2C%20I%20would%20like%20to%20enquire%20about%20sweets." target="_blank" rel="noreferrer">ENQUIRE ON WHATSAPP ↗</a>
      <small className="order-note">Replace this demo WhatsApp link with your shop number before publishing.</small>
    </section>
  );
}
function QRSection() {
  return (
    <section className="qr-section">
      <div>
        <p className="eyebrow">KEEP THE SWEETNESS CLOSE</p>

        <h2>
          SCAN. EXPLORE.
          <br />
          <em>ORDER.</em>
        </h2>

        <p>
          Scan our QR code to discover the collection
          and place your order.
        </p>
      </div>

      <div className="qr-placeholder">
        <img
          src={`${import.meta.env.BASE_URL}qr/order-qr.jpg`}
          alt="ONE BITE QR Code"
          className="qr-image"
        />
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="footer"><a className="brand footer-brand" href="#home">ONE<span>BITE</span><small>THE SWEET HOUSE</small></a><p>One Bite, Endless Happiness.</p><div><a href="#home">HOME</a><a href="#collection">COLLECTION</a><a href="#story">OUR STORY</a><a href="#order">ORDER</a></div><small>© {new Date().getFullYear()} ONE BITE. MADE WITH SWEETNESS.</small></footer>;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showDiwaliPopup, setShowDiwaliPopup] = useState(false);

  useEffect(() => {
    if (!loading) setShowDiwaliPopup(true);
  }, [loading]);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Navbar />
      <main>
        <HeroCarousel />
        <SweetCollection />
        <Sweet3DCarousel />
        <OurStory />
        <SweetVideo />
        <OrderSection />
        <QRSection />
      </main>
      <Footer />
      {!loading && showDiwaliPopup && (
        <DiwaliPopup onClose={() => setShowDiwaliPopup(false)} />
      )}
    </>
  );
}


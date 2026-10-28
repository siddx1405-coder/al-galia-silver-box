import { useState } from "react"

const phone = "97466973495"
const whatsapp = "97477448010"
const customerImage = (filename: string) =>
  `${import.meta.env.BASE_URL}customer/${filename}`
const mapUrl =
  "https://www.google.com/maps/place/25%C2%B016%2710.2%22N+51%C2%B032%2712.3%22E/@25.2694886,51.5341685,788m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d25.2694886!4d51.5367434?hl=en&entry=ttu"

const Icon = ({
  name,
}: {
  name: "arrow" | "phone" | "mail" | "pin" | "menu" | "close"
}) => {
  const paths = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    phone: (
      <path d="M7.5 3.5 10 8 7.8 9.8a15.2 15.2 0 0 0 6.4 6.4L16 14l4.5 2.5v3a2 2 0 0 1-2 2A16 16 0 0 1 2.5 5.5a2 2 0 0 1 2-2h3Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  )
}

const services = [
  {
    no: "01",
    title: "Kitchen Hoods",
    arabic: "شفاطات المطابخ",
    text: "Custom stainless-steel hoods for homes, restaurants, cafés, and professional kitchens.",
    image: customerImage("kitchen-hood.png"),
  },
  {
    no: "02",
    title: "Ventilation Systems",
    arabic: "أنظمة التهوية",
    text: "Complete ducting, exhaust, and blower solutions designed for reliable airflow.",
    image: customerImage("duct-installation.png"),
  },
  {
    no: "03",
    title: "Kitchen Equipment",
    arabic: "معدات المطابخ",
    text: "Made-to-measure counters, cabinets, work tables, shelving, and service trolleys.",
    image: customerImage("stainless-cabinet.png"),
  },
]

const projects = [
  {
    src: customerImage("outdoor-hood.png"),
    title: "Outdoor Hood",
    tag: "Custom fabrication",
    className: "tall",
  },
  {
    src: customerImage("cooker-hood.png"),
    title: "Cooker Hood",
    tag: "Residential",
    className: "standard",
  },
  {
    src: customerImage("work-table.png"),
    title: "Work Station",
    tag: "Commercial kitchen",
    className: "wide",
  },
  {
    src: customerImage("service-trolley.png"),
    title: "Service Trolley",
    tag: "Stainless steel",
    className: "standard",
  },
  {
    src: customerImage("exhaust-blower.png"),
    title: "Exhaust Blower",
    tag: "Ventilation",
    className: "standard",
  },
  {
    src: customerImage("stainless-cabinet.png"),
    title: "Storage Counter",
    tag: "Made to measure",
    className: "wide",
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Al-Galia Silver Box home">
          <span className="brand-mark">AG</span>
          <span className="brand-copy">
            <strong>AL-GALIA</strong>
            <small>SILVER BOX EST.</small>
          </span>
        </a>
        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#work" onClick={closeMenu}>
            Our work
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a className="nav-call" href={`tel:+${phone}`}>
            <Icon name="phone" />
            <span>
              <small>Call us</small>6697 3495
            </span>
          </a>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> Crafted in Doha, Qatar
            </p>
            <h1>
              Built for the
              <br />
              <em>heat of the kitchen.</em>
            </h1>
            <p className="hero-intro">
              Professional kitchen hoods, ventilation systems, and custom
              stainless-steel equipment—fabricated to fit your space.
            </p>
            <div className="hero-actions">
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="button primary"
              >
                Get a quote <Icon name="arrow" />
              </a>
              <a href="#work" className="button secondary">
                View our work
              </a>
            </div>
            <div className="hero-proof">
              <div>
                <strong>Custom</strong>
                <span>Made to measure</span>
              </div>
              <div>
                <strong>Durable</strong>
                <span>Stainless steel</span>
              </div>
              <div>
                <strong>Local</strong>
                <span>Doha service</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <img
                src={customerImage("hero-storefront.png")}
                alt="Al-Galia Silver Box workshop storefront in Doha"
              />
              <span className="image-label">
                Our workshop <b>Doha, Qatar</b>
              </span>
            </div>
            <div className="hero-inset">
              <img
                src={customerImage("hero-equipment.png")}
                alt="Al-Galia Silver Box kitchen equipment and services"
              />
            </div>
            <div className="arabic-stamp" lang="ar" dir="rtl">
              جودة
              <br />
              تدوم
            </div>
          </div>
        </div>
        <div className="steel-strip" aria-hidden="true">
          <span>FABRICATION</span>
          <i /> <span>VENTILATION</span>
          <i /> <span>INSTALLATION</span>
          <i /> <span>STAINLESS STEEL</span>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span /> What we make
            </p>
            <h2>
              One workshop.
              <br />
              <em>Complete solutions.</em>
            </h2>
          </div>
          <p>
            From the first measurement to final installation, we build reliable
            equipment for kitchens of every size.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.no}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <span>{service.no}</span>
              </div>
              <div className="service-content">
                <div>
                  <h3>{service.title}</h3>
                  <p className="arabic" lang="ar" dir="rtl">
                    {service.arabic}
                  </p>
                </div>
                <p>{service.text}</p>
                <a
                  href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hello, I am interested in ${service.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire now <Icon name="arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-media">
          <img
            src={customerImage("storefront.png")}
            alt="Al-Galia Silver Box workshop storefront in Doha"
          />
          <div className="about-badge">
            <strong>32012</strong>
            <span>C.R. Number</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow light">
            <span /> Built around your kitchen
          </p>
          <h2>
            Practical design.
            <br />
            <em>Precise fabrication.</em>
          </h2>
          <p className="lead">
            Al-Galia Silver Box Est. supplies and fabricates dependable kitchen
            solutions for residential and commercial clients across Doha.
          </p>
          <p>
            We combine careful measurements, skilled metalwork, and on-site
            installation to deliver equipment that works hard, cleans easily,
            and lasts.
          </p>
          <ul>
            <li>
              <span>01</span> Site measurement & planning
            </li>
            <li>
              <span>02</span> Custom stainless-steel fabrication
            </li>
            <li>
              <span>03</span> Professional delivery & installation
            </li>
          </ul>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Discuss your project <Icon name="arrow" />
          </a>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading work-heading">
          <div>
            <p className="eyebrow">
              <span /> Selected projects
            </p>
            <h2>
              Made here.
              <br />
              <em>Working everywhere.</em>
            </h2>
          </div>
          <p>
            Real installations and custom equipment made by our Doha workshop.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <figure
              className={`project-card ${project.className}`}
              key={project.src}
            >
              <img src={project.src} alt={project.title} loading="lazy" />
              <figcaption>
                <span>
                  <b>{project.title}</b>
                  {project.tag}
                </span>
                <i>↗</i>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-top">
          <p className="eyebrow light">
            <span /> Start your project
          </p>
          <h2>Need a custom kitchen solution?</h2>
          <p>
            Send us your requirements or arrange a site visit. We’ll help you
            find the right solution.
          </p>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="button white"
          >
            Chat on WhatsApp <Icon name="arrow" />
          </a>
        </div>
        <div className="contact-grid">
          <a href={`tel:+${phone}`}>
            <Icon name="phone" />
            <span>
              <small>Call us</small>+974 6697 3495
            </span>
          </a>
          <a href="mailto:algaliasilverbox@gmail.com">
            <Icon name="mail" />
            <span>
              <small>Email us</small>algaliasilverbox@gmail.com
            </span>
          </a>
          <a href={mapUrl} target="_blank" rel="noreferrer">
            <Icon name="pin" />
            <span>
              <small>Visit our workshop</small>Al Muntazah, Doha, Qatar
            </span>
          </a>
        </div>
      </section>

      <footer>
        <a href="#home" className="brand footer-brand">
          <span className="brand-mark">AG</span>
          <span className="brand-copy">
            <strong>AL-GALIA</strong>
            <small>SILVER BOX EST.</small>
          </span>
        </a>
        <p>Kitchen equipment • Hoods • Ventilation</p>
        <p>© {new Date().getFullYear()} Al-Galia Silver Box Est.</p>
      </footer>

      <a
        className="whatsapp-float"
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span>WA</span>
        <b>WhatsApp</b>
      </a>
    </main>
  )
}

export type Lang = "en" | "es";

export const translations = {
  en: {
    navbar: {
      links: [
        { etiqueta: "Home", href: "#inicio" },
        { etiqueta: "About", href: "#nosotros" },
        { etiqueta: "Products", href: "#productos" },
        { etiqueta: "Services", href: "#servicios" },
        { etiqueta: "Contact", href: "#contacto" },
      ],
      openMenu: "Open menu",
    },
    hero: {
      title1: "Powering",
      title2: "agribusiness efficiency",
      subtitle:
        "We connect global markets with the land. We trade agricultural commodities and fertilisers with experience and commitment.",
      cta1: "View products",
      cta2: "Contact us",
    },
    about: {
      badge: "About us",
      titleLine1: "A strategic partner for",
      titleLine2: "the agricultural industry",
      body: "Viagro Servicios SRL is a strategic partner to the agricultural industry, focused on driving the growth of its clients through the provision of inputs, machinery and tailored solutions. Through our trading operations and our expertise in end-to-end logistics and financing, we support producers across different countries in the region, generating efficiency, competitiveness and sustainable value.",
      cards: [
        {
          titulo: "Tailored solutions",
          descripcion:
            "We provide inputs, machinery and custom solutions adapted to each client's specific needs",
        },
        {
          titulo: "Expert trading",
          descripcion:
            "Our trading operations connect producers with markets, ensuring competitive conditions at every stage.",
        },
        {
          titulo: "Integrated support",
          descripcion:
            "We accompany producers across the region with end-to-end solutions",
        },
      ],
    },
    products: {
      badge: "Our products",
      title1: "Comprehensive solutions backed by",
      title2: "strong relationships",
      intro:
        "Our management capabilities, together with our extensive relationships with producers and suppliers, allow us to offer our clients comprehensive and full-service solutions.",
      categories: [
        {
          label: "Agricultural Commodities",
          paragraphs: [
            "We trade a broad range of agricultural commodities, including grains and oilseeds, sourced from key producing regions around the world.",
            "Our approach is driven by market dynamics, allowing us to adapt quickly to changing conditions and identify opportunities that create value for our clients.",
            "Through strong relationships with producers, logistics partners and buyers, we ensure efficient execution and reliable supply across different markets.",
          ],
          imagen: "/AGRICULTURAL COMMODITIES.webp",
          alt: "Agricultural commodities",
        },
        {
          label: "Fertilisers",
          paragraphs: [
            "We offer a wide range of fertilizers, including urea, phosphates and tailored blends, designed to meet diverse agronomic requirements.",
            "By working closely with trusted suppliers and understanding regional needs, we provide solutions that support productivity and soil health.",
            "Our flexible trading approach allows us to respond to market conditions while ensuring consistent quality and timely delivery.",
          ],
          imagen: "/granular_urea.webp",
          alt: "Fertilisers",
        },
      ],
    },
    services: {
      badge: "Our services",
      title1: "Comprehensive solutions for",
      title2: "every stage of the business",
      items: [
        {
          numero: "01",
          titulo: "Commodity trading",
          descripcion:
            "Buying and selling of commodities and agricultural products with full structuring of international operations, connecting producers with global markets efficiently.",
        },
        {
          numero: "02",
          titulo: "Logistics solutions",
          descripcion:
            "We offer transportation and logistics services in all their forms: land, river, sea, and rail transport, cargo inspection and control, warehousing and inventory management.",
        },
        {
          numero: "03",
          titulo: "Financial solutions",
          descripcion:
            "Commercial credit structuring and assistance with international payment arrangements",
        },
      ],
    },
    contact: {
      badge: "Get in touch",
      title1: "Let's talk about your",
      title2: "next operation",
      labelName: "Name",
      placeholderName: "Your name",
      labelCompany: "Company",
      placeholderCompany: "Your company",
      labelEmail: "Email",
      labelMessage: "Message",
      placeholderMessage: "Tell us about your enquiry or requirement...",
      sending: "Sending...",
      send: "Send message",
      ok: "Message sent — we'll be in touch shortly.",
      error: "Something went wrong. Please try again or email us directly.",
      cardPhone: "Phone",
      cardLocation: "Location",
    },
    footer: {
      description:
        "A UK-based company specialising in the trading of agricultural commodities and fertilisers worldwide.",
      navLabel: "Navigation",
      contactLabel: "Contact",
      rights: "All rights reserved.",
      country: "United Kingdom",
    },
  },
  es: {
    navbar: {
      links: [
        { etiqueta: "Inicio", href: "#inicio" },
        { etiqueta: "Nosotros", href: "#nosotros" },
        { etiqueta: "Productos", href: "#productos" },
        { etiqueta: "Servicios", href: "#servicios" },
        { etiqueta: "Contacto", href: "#contacto" },
      ],
      openMenu: "Abrir menú",
    },
    hero: {
      title1: "Impulsando la",
      title2: "eficiencia del agronegocio",
      subtitle:
        "Conectamos los mercados globales con el campo. Comercializamos commodities agrícolas y fertilizantes con experiencia y compromiso.",
      cta1: "Ver productos",
      cta2: "Contactanos",
    },
    about: {
      badge: "Quiénes somos",
      titleLine1: "Un socio estratégico para",
      titleLine2: "la industria agrícola",
      body: "Viagro Servicios SRL es un socio estratégico de la industria agrícola, enfocado en impulsar el crecimiento de sus clientes a través del suministro de insumos, maquinaria y soluciones a medida. A través de nuestras operaciones de trading y nuestra experiencia en logística integral y financiamiento, apoyamos a productores de distintos países de la región, generando eficiencia, competitividad y valor sostenible.",
      cards: [
        {
          titulo: "Soluciones a medida",
          descripcion:
            "Proveemos insumos, maquinaria y soluciones personalizadas adaptadas a las necesidades específicas de cada cliente",
        },
        {
          titulo: "Trading experto",
          descripcion:
            "Nuestras operaciones de trading conectan productores con mercados, asegurando condiciones competitivas en cada etapa.",
        },
        {
          titulo: "Soporte integral",
          descripcion:
            "Acompañamos a los productores de la región con soluciones integrales de punta a punta",
        },
      ],
    },
    products: {
      badge: "Nuestros productos",
      title1: "Soluciones integrales respaldadas por",
      title2: "relaciones sólidas",
      intro:
        "Nuestras capacidades de gestión, junto con nuestras amplias relaciones con productores y proveedores, nos permiten ofrecer a nuestros clientes soluciones integrales y de servicio completo.",
      categories: [
        {
          label: "Commodities Agrícolas",
          paragraphs: [
            "Comercializamos una amplia gama de commodities agrícolas, incluidos granos y oleaginosas, provenientes de las principales regiones productoras del mundo.",
            "Nuestro enfoque está guiado por la dinámica del mercado, lo que nos permite adaptarnos rápidamente a condiciones cambiantes e identificar oportunidades que generan valor para nuestros clientes.",
            "A través de sólidas relaciones con productores, socios logísticos y compradores, garantizamos una ejecución eficiente y un suministro confiable en distintos mercados.",
          ],
          imagen: "/AGRICULTURAL COMMODITIES.webp",
          alt: "Commodities agrícolas",
        },
        {
          label: "Fertilizantes",
          paragraphs: [
            "Ofrecemos una amplia variedad de fertilizantes, incluidos urea, fosfatos y mezclas a medida, diseñados para satisfacer diversos requisitos agronómicos.",
            "Trabajando en estrecha colaboración con proveedores de confianza y comprendiendo las necesidades regionales, brindamos soluciones que apoyan la productividad y la salud del suelo.",
            "Nuestro enfoque de trading flexible nos permite responder a las condiciones del mercado garantizando calidad constante y entregas a tiempo.",
          ],
          imagen: "/granular_urea.webp",
          alt: "Fertilizantes",
        },
      ],
    },
    services: {
      badge: "Nuestros servicios",
      title1: "Soluciones integrales para",
      title2: "cada etapa del negocio",
      items: [
        {
          numero: "01",
          titulo: "Comercialización de commodities",
          descripcion:
            "Compra y venta de commodities y productos agrícolas con estructuración completa de operaciones internacionales, conectando productores con mercados globales de manera eficiente.",
        },
        {
          numero: "02",
          titulo: "Soluciones logísticas",
          descripcion:
            "Ofrecemos servicios de transporte y logística en todas sus modalidades: terrestre, fluvial, marítimo y ferroviario, inspección y control de cargas, almacenamiento y gestión de inventarios.",
        },
        {
          numero: "03",
          titulo: "Soluciones financieras",
          descripcion:
            "Estructuración de crédito comercial y asistencia en acuerdos de pagos internacionales",
        },
      ],
    },
    contact: {
      badge: "Contactanos",
      title1: "Hablemos sobre tu",
      title2: "próxima operación",
      labelName: "Nombre",
      placeholderName: "Tu nombre",
      labelCompany: "Empresa",
      placeholderCompany: "Tu empresa",
      labelEmail: "Correo electrónico",
      labelMessage: "Mensaje",
      placeholderMessage: "Cuéntanos sobre tu consulta o requerimiento...",
      sending: "Enviando...",
      send: "Enviar mensaje",
      ok: "Mensaje enviado — nos pondremos en contacto pronto.",
      error:
        "Algo salió mal. Por favor intentá de nuevo o escríbenos directamente.",
      cardPhone: "Teléfono",
      cardLocation: "Ubicación",
    },
    footer: {
      description:
        "Empresa con sede en el Reino Unido especializada en la comercialización de commodities agrícolas y fertilizantes a nivel mundial.",
      navLabel: "Navegación",
      contactLabel: "Contacto",
      rights: "Todos los derechos reservados.",
      country: "Reino Unido",
    },
  },
} as const;

export type Translations = typeof translations.en;

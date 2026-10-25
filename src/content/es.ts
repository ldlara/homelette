import type { Dict } from "./types";

export const es: Dict = {
  meta: {
    title: "Homilette | Bosquejos, diccionario y planes de estudio bíblico",
    description:
      "Bosquejos bíblicos, diccionario y planes de estudio reunidos para apoyar tu preparación y profundizar tu conocimiento de la Palabra. Próximamente.",
    shareTitle: "Homilette | Más profundidad en el estudio. Más claridad en la predicación.",
  },
  a11y: {
    skip: "Ir al contenido",
    home: "Homilette, inicio de la página",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mainNav: "Principal",
    mobileNav: "Principal (móvil)",
    footerNav: "Pie de página",
    languages: "Idioma",
  },
  nav: [
    { label: "Recursos", href: "#recursos" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Lanzamiento", href: "#lancamento" },
  ],
  navCta: "Quiero saber del lanzamiento",
  hero: {
    title: "Más profundidad en el estudio. Más claridad en la predicación.",
    description:
      "Bosquejos bíblicos, diccionario y planes de estudio reunidos para apoyar tu preparación y profundizar tu conocimiento de la Palabra.",
    photoAlt: "Lectores estudiando en una biblioteca antigua, en 1964",
    cta: "Quiero saber del lanzamiento",
    secondaryCta: "Conocer los recursos",
    launchPrefix: "Lanzamiento previsto para el",
    periodPrefix: "Lanzamiento previsto para",
    launchSoon: "Lanzamiento: próximamente",
  },
  sheet: {
    ariaLabel: "Vista previa ilustrativa de una hoja de estudio, con pestañas de bosquejo, diccionario y plan.",
    badge: "Vista previa ilustrativa",
    caption:
      "Ilustración de la propuesta del producto. Homilette aún no está disponible y el contenido final puede ser diferente.",
    tabs: { outline: "Bosquejo", dictionary: "Diccionario", plan: "Plan" },
    outline: {
      title: "Salmo 23",
      points: [
        { ref: "vv. 1–3", text: "El Señor como pastor" },
        { ref: "v. 4", text: "Presencia en el valle" },
        { ref: "vv. 5–6", text: "Mesa y casa" },
      ],
      note: "Nota: volver al término “bondad” en el v. 6.",
    },
    dictionary: {
      term: "hesed",
      gloss: "Término hebreo que suele traducirse como bondad, misericordia o amor leal.",
      where: "Aparece, por ejemplo, en el Salmo 23:6.",
      related: "Consulta también: bondad, misericordia, pacto.",
    },
    plan: {
      title: "Salmos · 7 días",
      days: [
        { day: "Día 1", text: "Salmo 1: dos caminos" },
        { day: "Día 2", text: "Salmo 8: la obra de Dios" },
        { day: "Día 3", text: "Salmo 23: el pastor" },
      ],
      note: "Ejemplo de cómo podría verse un plan.",
    },
  },
  features: {
    title: "Tres apoyos para la misma rutina de estudio",
    intro:
      "Herramientas pensadas para acompañar el ritmo de quien lee con atención, toma notas con cuidado y prepara un mensaje con responsabilidad. También están previstos recursos complementarios de apoyo a la predicación, que se presentarán más cerca del lanzamiento.",
    items: [
      {
        id: "esbocos",
        title: "Bosquejos bíblicos",
        lead: "Un camino para organizar el mensaje.",
        benefit:
          "Parte de una estructura clara para ordenar ideas, puntos y aplicaciones, en lugar de empezar con una página en blanco. El bosquejo es un apoyo: la lectura del texto y tu reflexión siguen en el centro.",
        alt: "Hoja de un manuscrito de una Biblia, hacia 1280",
      },
      {
        id: "dicionario",
        title: "Diccionario bíblico",
        lead: "Palabras y conceptos a mano.",
        benefit:
          "Consulta términos, palabras y conceptos sin interrumpir el estudio. Entender mejor el vocabulario del texto te ayuda a leer con más seguridad y a explicar con más precisión.",
        alt: "Portada de un manuscrito hebreo, coloreada a mano",
      },
      {
        id: "planos",
        title: "Planes de estudio",
        lead: "Constancia con dirección.",
        benefit:
          "Sigue una secuencia de lectura y estudio para construir una rutina de aprendizaje, a un ritmo que quepa en tu semana, ya sea para uso personal o para un grupo.",
        alt: "Hoja de manuscrito con el inicio del libro de Nehemías",
      },
    ],
  },
  routine: {
    title: "Una rutina de preparación con más claridad",
    intro:
      "Una posibilidad de uso, en tres pasos simples. Cada persona tiene su propio ritmo, y puedes adaptar la secuencia a tu manera de preparar.",
    slipTitle: "Preparación de un mensaje",
    steps: [
      { lead: "Primero", title: "Estudia un pasaje", text: "Lee el texto con calma y anota lo que llamó tu atención." },
      { lead: "Luego", title: "Consulta los términos", text: "Busca en el diccionario las palabras y los conceptos que piden más cuidado." },
      { lead: "Por último", title: "Organiza el mensaje", text: "Usa un bosquejo para dar forma a lo que estudiaste y a lo que hay que decir." },
    ],
  },
  audience: {
    title: "Para quien estudia y prepara con seriedad",
    alt: "Páginas de un manuscrito hebreo abiertas lado a lado",
    items: [
      {
        title: "Predicadores",
        text: "Que desean organizar mejor la preparación de sus mensajes, con más orden y menos improvisación de último momento.",
      },
      {
        title: "Estudiantes de la Biblia",
        text: "Que quieren profundizar su conocimiento bíblico, entendiendo términos y conceptos a lo largo de la lectura.",
      },
      {
        title: "Líderes de grupos y comunidades",
        text: "Que preparan estudios para otras personas y necesitan claridad para conducir bien el tiempo en grupo.",
      },
    ],
  },
  launch: {
    prefix: "Lanzamiento previsto para el",
    periodPrefix: "Lanzamiento previsto para",
    soon: "Próximamente",
    soonNote: "La fecha de lanzamiento aún se anunciará.",
    cardTitle: "Mantente al tanto",
    support: "Deja tu correo para recibir novedades sobre Homilette y su lanzamiento.",
    emailLabel: "Tu correo electrónico",
    emailPlaceholder: "tu@ejemplo.com",
    submit: "Quiero saber del lanzamiento",
    submitting: "Enviando…",
    fineprint: "Solo pedimos tu correo electrónico.",
    messages: {
      invalid: "Ingresa un correo electrónico válido, por ejemplo: tu@ejemplo.com.",
      success: "¡Listo! Recibimos tu correo. Te avisaremos de las novedades de Homilette.",
      unavailable: "El registro aún no está disponible. Tu correo no fue guardado. Vuelve pronto para intentarlo de nuevo.",
      error: "No fue posible enviarlo ahora. Tu correo no fue guardado. Inténtalo de nuevo en unos instantes.",
    },
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es Homilette?",
        a: "Es un producto digital en desarrollo para apoyar el estudio bíblico y la preparación de predicaciones. Reunirá bosquejos bíblicos, diccionario bíblico y planes de estudio, además de recursos complementarios de apoyo a la predicación.",
      },
      {
        q: "¿Para quién se está desarrollando el producto?",
        a: "Para predicadores, estudiantes de la Biblia y líderes que preparan estudios para grupos y comunidades. Homilette es una herramienta de apoyo y no sustituye la lectura de la Biblia ni tu reflexión personal.",
      },
      {
        q: "¿Qué recursos están previstos?",
        a: "Bosquejos bíblicos para organizar mensajes, un diccionario bíblico para consultar palabras, conceptos y términos, planes de estudio para guiar una rutina de aprendizaje y recursos complementarios relacionados con la predicación.",
      },
      {
        q: "¿Cuándo se lanzará?",
        a: "",
        launch: {
          withDate: "El lanzamiento está previsto para el {data}. Otros detalles se comunicarán a medida que se confirmen.",
          withPeriod: "El lanzamiento está previsto para {data}. Otros detalles se comunicarán a medida que se confirmen.",
          soon: "La fecha de lanzamiento aún no se ha anunciado. Por ahora, la información es: próximamente. Otros detalles se comunicarán a medida que se confirmen.",
        },
      },
      {
        q: "¿Cómo puedo seguir las novedades?",
        a: "Deja tu correo en el formulario de la sección de lanzamiento de esta página para recibir novedades sobre Homilette y su lanzamiento.",
      },
    ],
  },
  footer: {
    signoff: "Hasta el lanzamiento.",
    message:
      "Homilette es un apoyo para el estudio de la Biblia y para preparar mensajes con cuidado. La lectura del texto y tu reflexión siguen siendo el centro.",
    privacy: "Privacidad",
    contact: "Contacto",
    languages: "Idioma",
    imprint: "Homilette",
    credits: "Imágenes",
    creditsVia: "vía Wikimedia Commons",
  },
};

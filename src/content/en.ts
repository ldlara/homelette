import type { Dict } from "./types";

export const en: Dict = {
  meta: {
    title: "Homilette | Bible outlines, dictionary and study plans",
    description:
      "Bible outlines, a dictionary and study plans in one place, to support your preparation and deepen your knowledge of the Word. Coming soon.",
    shareTitle: "Homilette | More depth in study. More clarity in preaching.",
  },
  a11y: {
    skip: "Skip to content",
    home: "Homilette, top of the page",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main",
    mobileNav: "Main (mobile)",
    footerNav: "Footer",
    languages: "Language",
  },
  nav: [
    { label: "Features", href: "#recursos" },
    { label: "How it works", href: "#como-funciona" },
    { label: "Launch", href: "#lancamento" },
  ],
  navCta: "Keep me posted",
  hero: {
    title: "More depth in study. More clarity in preaching.",
    description:
      "Bible outlines, a dictionary and study plans in one place, to support your preparation and deepen your knowledge of the Word.",
    photoAlt: "Readers studying at desks in an old library, 1964",
    cta: "Tell me about the launch",
    secondaryCta: "See the features",
    launchPrefix: "Launch expected on",
    periodPrefix: "Launch expected",
    launchSoon: "Launch: coming soon",
  },
  sheet: {
    ariaLabel: "Illustrative preview of a study sheet, with tabs for outline, dictionary and plan.",
    badge: "Illustrative preview",
    caption:
      "An illustration of the product idea. Homilette is not available yet and the final content may differ.",
    tabs: { outline: "Outline", dictionary: "Dictionary", plan: "Plan" },
    outline: {
      title: "Psalm 23",
      points: [
        { ref: "vv. 1–3", text: "The Lord as shepherd" },
        { ref: "v. 4", text: "Presence in the valley" },
        { ref: "vv. 5–6", text: "Table and house" },
      ],
      note: "Note: come back to the word “goodness” in v. 6.",
    },
    dictionary: {
      term: "hesed",
      gloss: "A Hebrew term often translated as kindness, mercy or steadfast love.",
      where: "It appears, for example, in Psalm 23:6.",
      related: "See also: kindness, mercy, covenant.",
    },
    plan: {
      title: "Psalms · 7 days",
      days: [
        { day: "Day 1", text: "Psalm 1: two ways" },
        { day: "Day 2", text: "Psalm 8: the work of God" },
        { day: "Day 3", text: "Psalm 23: the shepherd" },
      ],
      note: "An example of how a plan could look.",
    },
  },
  features: {
    title: "Three supports for the same study routine",
    intro:
      "Tools made to keep pace with people who read closely, take notes with care and prepare a message responsibly. Complementary resources to support preaching are also planned and will be presented closer to launch.",
    items: [
      {
        id: "esbocos",
        title: "Bible outlines",
        lead: "A path for organizing the message.",
        benefit:
          "Start from a clear structure to order your ideas, points and applications instead of starting from a blank page. An outline is a support: reading the text and your own reflection stay at the center.",
        alt: "A leaf from a Bible manuscript, around 1280",
      },
      {
        id: "dicionario",
        title: "Bible dictionary",
        lead: "Words and concepts at hand.",
        benefit:
          "Look up terms, words and concepts without interrupting your study. Understanding the vocabulary of the text helps you read with more confidence and explain with more precision.",
        alt: "The title page of a Hebrew manuscript, colored by hand",
      },
      {
        id: "planos",
        title: "Study plans",
        lead: "Consistency, with direction.",
        benefit:
          "Follow a sequence of reading and study to build a learning routine at a pace that fits your week, whether for personal use or for a group.",
        alt: "A manuscript leaf with the opening of the book of Nehemiah",
      },
    ],
  },
  routine: {
    title: "A preparation routine with more clarity",
    intro:
      "One possible way to use it, in three simple steps. Everyone has their own pace, and you can adapt the sequence to the way you prepare.",
    slipTitle: "Preparing a message",
    steps: [
      { lead: "First", title: "Study a passage", text: "Read the text slowly and note what caught your attention." },
      { lead: "Then", title: "Look up the terms", text: "Search the dictionary for the words and concepts that deserve more care." },
      { lead: "Finally", title: "Organize the message", text: "Use an outline to give shape to what you studied and what needs to be said." },
    ],
  },
  audience: {
    title: "For people who study and prepare with care",
    alt: "Pages of a Hebrew manuscript open side by side",
    items: [
      {
        title: "Preachers",
        text: "Who want to organize their message preparation better, with more order and less last-minute improvising.",
      },
      {
        title: "Bible students",
        text: "Who want to deepen their biblical knowledge, understanding terms and concepts as they read.",
      },
      {
        title: "Group and community leaders",
        text: "Who prepare studies for other people and need clarity to lead the time together well.",
      },
    ],
  },
  launch: {
    prefix: "Launch expected on",
    periodPrefix: "Launch expected",
    soon: "Coming soon",
    soonNote: "The launch date will be announced.",
    cardTitle: "Stay in the loop",
    support: "Leave your email to receive news about Homilette and its launch.",
    emailLabel: "Your email",
    emailPlaceholder: "you@example.com",
    submit: "Tell me about the launch",
    submitting: "Sending…",
    fineprint: "We only ask for your email.",
    messages: {
      invalid: "Enter a valid email address, for example: you@example.com.",
      success: "Done! We received your email. We will let you know about Homilette news.",
      unavailable: "Sign-up is not available yet. Your email was not saved. Please come back soon and try again.",
      error: "We could not send it right now. Your email was not saved. Please try again in a moment.",
    },
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What is Homilette?",
        a: "A digital product in development to support Bible study and sermon preparation. It will bring together Bible outlines, a Bible dictionary and study plans, along with complementary resources to support preaching.",
      },
      {
        q: "Who is the product being built for?",
        a: "For preachers, Bible students and leaders who prepare studies for groups and communities. Homilette is a support tool and does not replace reading the Bible or your own reflection.",
      },
      {
        q: "Which features are planned?",
        a: "Bible outlines to organize messages, a Bible dictionary to look up words, concepts and terms, study plans to guide a learning routine, and complementary resources related to preaching.",
      },
      {
        q: "When will it launch?",
        a: "",
        launch: {
          withDate: "The launch is expected on {data}. Other details will be shared as they are confirmed.",
          withPeriod: "The launch is expected {data}. Other details will be shared as they are confirmed.",
          soon: "The launch date has not been announced yet. For now, the answer is: coming soon. Other details will be shared as they are confirmed.",
        },
      },
      {
        q: "How can I follow the news?",
        a: "Leave your email in the form in the launch section of this page to receive news about Homilette and its launch.",
      },
    ],
  },
  footer: {
    signoff: "See you at launch.",
    message:
      "Homilette is a support for Bible study and for preparing messages with care. Reading the text and your own reflection remain at the center.",
    privacy: "Privacy",
    contact: "Contact",
    languages: "Language",
    imprint: "Homilette",
    credits: "Images",
    creditsVia: "via Wikimedia Commons",
  },
};

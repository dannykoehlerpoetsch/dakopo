import "../App.css";
import "flag-icons/css/flag-icons.min.css";
import localFont from "next/font/local";
import Providers from "./providers";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BackToTopLink from "../components/BackToTopLink/BackToTopLink";
import SkipLink from "../components/SkipLink/SkipLink";

const SITE_URL = "https://dakopo.vercel.app";

const workSans = localFont({
  src: "../assets/fonts/WorkSans-VariableFont_wght.ttf",
  variable: "--font-work-sans",
  display: "swap",
});

const splash = localFont({
  src: "../assets/fonts/Splash-Regular.ttf",
  variable: "--font-splash",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Danny Köhler-Poetsch – Frontend Developer | Leipzig",
    template: "%s | DaKoPo Portfolio",
  },
  description:
    "Portfolio von Danny Köhler-Poetsch – Frontendentwickler aus Leipzig. Projekte mit React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, SASS und Salesforce LWC.",
  authors: [{ name: "Danny Köhler-Poetsch" }],
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Danny Köhler-Poetsch",
    "Frontend Developer",
    "Frontendentwickler",
    "Leipzig",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MERN Stack",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "SASS",
    "Salesforce",
    "Lightning Web Components",
    "LWC",
    "Portfolio",
    "Webentwickler",
    "Softwareentwickler",
  ],
  robots: "index, follow",
  verification: {
    google: "4i9qYYV0GvcTR_Bhorsuwt7xP5N9SktehPLlOZIYST8",
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  openGraph: {
    title: "Danny Köhler-Poetsch – Frontend Developer",
    description:
      "Projekte und Technologien: React, Next.js, Node.js, MongoDB, Tailwind CSS, Salesforce LWC und mehr.",
    url: SITE_URL,
    siteName: "DaKoPo Portfolio",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Screenshot des DaKoPo Portfolios von Danny Köhler-Poetsch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danny Köhler-Poetsch – Frontend Developer",
    description:
      "Frontend Developer aus Leipzig – React, Next.js, MERN Stack, Salesforce LWC.",
    images: ["/og-image.jpg"],
  },
};

const darkModeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('darkMode');
      if (stored === 'true') {
        document.documentElement.classList.add('dark-mode-preload');
      }
    } catch(e) {}
  })();
`;

// Der statische Sprachcode muss zum vorgerenderten Inhalt passen.
// LanguageProvider hält das Attribut später konsistent zur gewählten Sprache.
const DEFAULT_LANGUAGE = "en";

export default function RootLayout({ children }) {
  return (
    <html
      lang={DEFAULT_LANGUAGE}
      className={`${workSans.variable} ${splash.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
      </head>
      <body>
        <Providers>
          <SkipLink />
          <Header />
          <main id="main-content" className="main-content">
            {children}
          </main>
          <BackToTopLink />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

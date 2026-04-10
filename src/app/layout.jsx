import "../App.css";
import "flag-icons/css/flag-icons.min.css";
import localFont from "next/font/local";
import Providers from "./providers";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BackToTopLink from "../components/BackToTopLink/BackToTopLink";

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
  title: {
    default: "Danny Köhler-Poetsch – Frontend Developer | Leipzig",
    template: "%s | DaKoPo Portfolio",
  },
  description:
    "Portfolio von Danny Köhler-Poetsch – Frontendentwickler aus Leipzig. Projekte mit React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, SASS und Salesforce LWC.",
  authors: [{ name: "Danny Köhler-Poetsch" }],
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
    url: "https://dakopo.vercel.app",
    siteName: "DaKoPo Portfolio",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Danny Köhler-Poetsch – Frontend Developer",
    description:
      "Frontend Developer aus Leipzig – React, Next.js, MERN Stack, Salesforce LWC.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${workSans.variable} ${splash.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
      </head>
      <body>
        <Providers>
          <Header />
          <main className="main-content">
            {children}
          </main>
          <BackToTopLink />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

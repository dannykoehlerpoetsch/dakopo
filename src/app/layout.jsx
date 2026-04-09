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
  title: "DaKoPo Portfolio",
  description: "Portfolio DaKoPo",
  authors: [{ name: "Danny Köhler-Poetsch" }],
  keywords: [
    "Danny",
    "Danny Köhler-Poetsch",
    "dakopo",
    "portfolio",
    "webentwickler",
    "leipzig",
    "frontend",
    "react",
    "javascript",
    "html",
    "css",
    "softwareentwickler portfolio",
  ],
  robots: "index, follow",
  verification: {
    google: "159vB1VuwPleYC1YY02VuVuMNqYCh04b6zn06XJ_oCs",
  },
  icons: {
    icon: "/favicon-32x32.png",
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

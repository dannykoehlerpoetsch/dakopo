import "../App.css";
import Providers from "./providers";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Providers>
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

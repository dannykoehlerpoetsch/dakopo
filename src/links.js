import dictionary from "./assets/dictionary.png";
import scatterletter from "./assets/scatterletter.png";
import frightful from "./assets/frightful.png";
import textadventure from "./assets/textadventure.png";
import portfolio from "./assets/portfolio.png";
import bewerbungstracker from "./assets/bewerbungstracker.png";
import magic from "./assets/magic.png";

export const myProjects = [
  {
    title: "Application Tracker - Fullstack MERN-Projekt",
    titleDe: "Bewerbungstracker - Fullstack MERN-Projekt",
    url: "https://bewerbungstracker.onrender.com/",
    src: bewerbungstracker,
    github: "https://github.com/dannykoehlerpoetsch/application-tracker",
    alt: "Screenshot from `Application Tracker` startscreen",
    altDe: "Screenshot vom Startbildschirm meines Bewerbungstrackers",
    info: "My first full-stack project using the MERN stack! The frontend is built with React, while the backend runs on an Express server connected to a MongoDB database. After registering, users can add job applications via a form. Applications can be viewed in either a detailed or list format. In the detailed view, users can update the status and add comments for each application at any time. A clear overview of all applications is available and can be downloaded as a PDF directly by the user. This PDF serves as evidence of application efforts. User data is securely stored in the database, with passwords protected through hashing to prevent misuse. For authentication, httpOnly cookies are utilized. The project is optimized for desktop browsers, particularly Google Chrome. A responsive design for mobile and tablet devices is currently in development.",
    infoDe:
      "Mein erstes Fullstack-Projekt mit dem MERN-Stack! Das Frontend wurde mit React umgesetzt, während das Backend auf einem Express-Server läuft und mit einer MongoDB-Datenbank verbunden ist. Nach der Registrierung können Nutzer Bewerbungen über ein Formular hinzufügen. Diese Bewerbungen können in einer detaillierten Ansicht oder als Listenübersicht angezeigt werden. In der Detailansicht lassen sich der Status und Kommentare zu einzelnen Bewerbungen jederzeit bearbeiten. Eine übersichtliche Liste aller Bewerbungen kann direkt als PDF heruntergeladen werden, um beispielsweise als Nachweis der eigenen Bewerbungsaktivitäten zu dienen. Die Nutzerdaten werden sicher in der Datenbank gespeichert, wobei Passwörter durch Hashing vor Missbrauch geschützt sind. Zur Authentifizierung werden httpOnly-Cookies verwendet. Das Projekt ist für den Einsatz in Desktop-Browsern, insbesondere Google Chrome, optimiert. Ein responsives Design für mobile und Tablet-Geräte ist derzeit in Arbeit.",
  },
  {
    title: "DaKoPo - my Portfolio in React",
    titleDe: "DaKoPo - mein Portfolio in React",
    url: "https://dakopo.vercel.app/",
    src: portfolio,
    github: "https://github.com/dannykoehlerpoetsch/dakopo",
    alt: "Screenshot from `DaKoPo` startscreen",
    altDe: "Screenshot vom Startbildschirm meines Portfolios",
    info: "This portfolio is also one of my projects and was developed using React. It features responsive design, the option to switch between dark and light mode, as well as language selection.",
    infoDe:
      "Auch dieses Portfolio ist ein Projekt von mir und wurde in React programmiert. Responsive Design sowie die Auswahl zwischen Dark - & Lightmode und die Auswahl der Sprache sind implementiert. ",
  },
  {
    title: "ScatterLetter - generate random letters",
    titleDe: "ScatterLetter - zufällige Buchstaben generieren",
    url: "https://dannykoehlerpoetsch.github.io/random-letter-generator/",
    src: scatterletter,
    github: "https://github.com/dannykoehlerpoetsch/random-letter-generator",
    alt: "Screenshot from ScatterLetter Tool",
    altDe: "Screenshot vom ScatterLetter-Tool",
    info: "The `ScatterLetter` is a simple, interactive web tool that generates random letters upon user request. Users can start a new round, stop, and get a fresh letter each time, making it useful for games, creative exercises, or educational purposes. It features a clean, straightforward interface for quick and easy access.",
    infoDe:
      "`ScatterLetter` ist ein einfaches, interaktives Web-Tool, das auf Anfrage zufällige Buchstaben generiert. Nutzer können eine neue Runde starten, stoppen und jedes Mal einen neuen Buchstaben erhalten, was es nützlich für Spiele, kreative Übungen oder pädagogische Zwecke macht. Es verfügt über eine saubere, übersichtliche Benutzeroberfläche für schnellen und einfachen Zugriff.",
  },
  {
    title: "English Dictionary - using an API the first time with React",
    titleDe: "English Dictionary - erstmalige Nutzung einer API mit React",
    url: "https://dannykoehlerpoetsch.github.io/dictionary-english/",
    src: dictionary,
    github: "https://github.com/dannykoehlerpoetsch/dictionary-english",
    alt: "Screenshot from English-Dictionary Website",
    altDe: "Screenshot von der English-Dictionary Website",
    info: "The English Dictionary is a web tool that allows users to search for definitions of English words. It features a simple interface where users can enter a word and quickly retrieve its meaning, making it a convenient resource for learning new vocabulary or clarifying word meanings.",
    infoDe:
      "Das English Dictionary ist ein Web-Tool, das es Nutzern ermöglicht, nach Definitionen englischer Wörter zu suchen. Es bietet eine einfache Benutzeroberfläche, auf der die Nutzer ein Wort eingeben und schnell die Bedeutung abrufen können, was es zu einer praktischen Ressource zum Erlernen neuer Vokabeln oder zur Klärung von Wortbedeutungen macht.",
  },
  {
    title: "Frightful Fun - my Halloween-HTML-Project",
    titleDe: "Frightful Fun - mein Halloween-HTML-Projekt",
    url: "https://dannykoehlerpoetsch.github.io/frightful-fun/",
    src: frightful,
    github: "https://github.com/dannykoehlerpoetsch/frightful-fun",
    alt: "Screenshot from Frightful-Fun Website",
    altDe: "Screenshot von der Frightful-Fun Website",
    info: "`Frightful Fun` is a Halloween-themed website offering everything for a magical and spooky Halloween experience. Visitors can explore sections on Halloween history, costumes, films, music, and even (fake)shop for Halloween items. The site invites users to dive into the eerie and enchanting world of Halloween, with interactive elements and fun surprises for a thrilling experience.",
    infoDe:
      "`Frightful Fun` ist eine Halloween-Website, die alles für ein magisches und gruseliges Halloween-Erlebnis bietet. Besucher können Bereiche zur Halloween-Geschichte, Kostümen, Filmen, Musik und sogar einen (fiktiven) Halloween Shop erkunden. Die Seite lädt die Nutzer ein, in die unheimliche und bezaubernde Welt von Halloween einzutauchen, mit interaktiven Elementen und spaßigen Überraschungen für ein aufregendes Erlebnis.",
  },

  {
    title: "Mind over evil - Textadventure",
    titleDe: "Mind over evil - Textabenteuer",
    url: "https://github.com/dannykoehlerpoetsch/textadventure",
    src: textadventure,
    github: "https://github.com/dannykoehlerpoetsch/textadventure",
    alt: "Screenshot from `mind over evil` startscreen",
    altDe: "Screenshot vom Startbildschirm von `mind over evil`",
    info: "This project is only playable in the terminal on your computer. Simply follow the instructions in the Readme.md file and enjoy a round of the game.",
    infoDe:
      "Dieses Projekt ist nur im Terminal auf Ihrem Computer spielbar. Folgen Sie einfach den Anweisungen in der Readme.md-Datei und genießen Sie eine Runde des Spiels.",
  },
];

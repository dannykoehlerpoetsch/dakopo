import Projects from "../../views/Projects/Projects";

export const metadata = {
  title: "Projekte",
  description:
    "Auswahl meiner Frontend-Projekte von Danny Köhler-Poetsch: Next.js, TypeScript, Tailwind CSS, Radix UI und automatisierte Tests mit Vitest und Playwright.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <Projects />;
}

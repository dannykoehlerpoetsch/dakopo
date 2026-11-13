import Impressum from "../../components/Impressum/Impressum";

export const metadata = {
  title: "Impressum & Datenschutz",
  description:
    "Impressum und Datenschutzhinweise für DaKoPo – Portfolio von Danny Köhler-Poetsch.",
  alternates: {
    canonical: "/imprint",
  },
};

export default function ImprintPage() {
  return <Impressum />;
}

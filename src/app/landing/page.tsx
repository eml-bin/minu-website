import Promos from "@/components/landing/Promos";
import Catalog from "@/components/landing/Catalog";

export const metadata = {
  title: "Minu Repostería",
  description: "Repostería hecha en casa. Irapuato, Guanajuato.",
  alternates: {
    canonical: "https://minureposteria.com/",
  },
};

export default function Landing() {
  return (
    <>
      <Promos />
      <Catalog />
    </>
  );
}

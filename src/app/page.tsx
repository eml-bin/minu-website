import Landing from "./landing/page";

export const metadata = {
  title: "Minu Repostería",
  description: "Repostería hecha en casa. Irapuato, Guanajuato.",
  alternates: {
    canonical: "https://minureposteria.com/",
  },
};

export default function Home() {
  return <Landing />;
}

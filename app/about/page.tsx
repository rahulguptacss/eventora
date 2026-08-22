import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import AboutUs from "../components/AboutUs/page";
import Mission from "../components/Mission/page";
import Vision from "../components/Vision/page";
import Team from "../components/Team/page";
import { Metadata } from "next";
import data from "../data/data.json";

const pageData = data.categories.Event.sections.Pages.variants.AboutPage;

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDesc,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={pageData.breadcrumbTitle} />
        <AboutUs />
        <Mission />
        <Vision />
        <Team />
      </main>
      <Footer />
    </>
  );
}

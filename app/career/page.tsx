import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import CareerHero from "../components/CareerHero/page";
import CareerValues from "../components/CareerValues/page";
import CareerJobs from "../components/CareerJobs/page";
import { Metadata } from "next";
import data from "../data/data.json";

const pageData = data.categories.Event.sections.Pages.variants.CareerPage;

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDesc,
};

export default function CareerPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={pageData.breadcrumbTitle} />
        <CareerHero />
        <CareerValues />
        <CareerJobs />
      </main>
      <Footer />
    </>
  );
}

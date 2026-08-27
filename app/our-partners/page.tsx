import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import PartnersContent from "../components/PartnersContent/page";
import { Metadata } from "next";
import data from "../data/data.json";

const pageData = data.categories.Event.sections.Pages.variants.OurPartnersPage;

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDesc,
};

export default function OurPartners() {
  return (
    <>
      <Header />
      <main>
        <PartnersContent />
      </main>
      <Footer />
    </>
  );
}

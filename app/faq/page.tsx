import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import FaqContent from "../components/FaqContent/page";
import { Metadata } from "next";
import data from "../data/data.json";

const pageData = data.categories.Event.sections.Pages.variants.FaqPage;

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDesc,
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={pageData.breadcrumbTitle} />
        <FaqContent />
      </main>
      <Footer />
    </>
  );
}

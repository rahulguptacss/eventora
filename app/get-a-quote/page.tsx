import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import QuoteContent from "../components/QuoteContent/page";
import { Metadata } from "next";
import data from "../../app/data/data.json";

const pageData = data.categories.Event.sections.Pages.variants.QuotePage;

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDesc,
};

export default function GetAQuotePage() {
  return (
    <>
      <Header />
      <main>
        {/* Placeholder image for breadcrumb background since user hasn't provided one yet */}
        <Breadcrumb title={pageData.breadcrumbTitle} />
        <QuoteContent />
      </main>
      <Footer />
    </>
  );
}

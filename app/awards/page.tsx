import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import Awards from "../components/Awards/page";
import data from "../data/data.json";
import { Metadata } from "next";

const pageData = data.categories.Event.sections.Pages.variants.AwardsPage;

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDesc,
};

export default function AwardsPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={pageData.breadcrumbTitle} />
        <Awards />
      </main>
      <Footer />
    </>
  );
}

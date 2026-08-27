import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import Gallery from "../components/Gallery/page";
import { Metadata } from "next";
import data from "../data/data.json";

const pageData = data.categories.Event.sections.Pages.variants.GalleryPage;

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDesc,
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={pageData.breadcrumbTitle} />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

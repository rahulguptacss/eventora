import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import OurVision from "../components/OurVision/page";
import Stats from "../components/Stats/page";
import data from "../data/data.json";

export const metadata = {
  title: data.categories.Event.sections.Pages.variants.VisionPage.metaTitle,
  description: data.categories.Event.sections.Pages.variants.VisionPage.metaDesc,
};

export default function VisionPage() {
  const pageData = data.categories.Event.sections.Pages.variants.VisionPage;
  
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={pageData.breadcrumbTitle} />
        <OurVision />
        <Stats />
      </main>
      <Footer />
    </>
  );
}

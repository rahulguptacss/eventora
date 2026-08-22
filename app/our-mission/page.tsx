import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import OurMission from "../components/OurMission/page";
import Stats from "../components/Stats/page";
import { Metadata } from "next";
import data from "../data/data.json";

const pageData = data.categories.Event.sections.Pages.variants.MissionPage;

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDesc,
};

export default function MissionPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={pageData.breadcrumbTitle} />
        <OurMission />
        <Stats />
      </main>
      <Footer />
    </>
  );
}

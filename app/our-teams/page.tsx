import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import Team from "../components/Team/page";
import data from "../data/data.json";
import { Metadata } from "next";

const pageData = data.categories.Event.sections.Pages.variants.TeamPage;

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDesc,
};

export default function TeamsPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={pageData.breadcrumbTitle} />
        <Team showButton={false} />
      </main>
      <Footer />
    </>
  );
}

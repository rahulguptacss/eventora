import Header from "../../components/Header/page";
import Footer from "../../components/Footer/page";
import Breadcrumb from "../../components/Breadcrumb/page";
import CareerDetail from "../../components/CareerDetail/page";
import { Metadata } from "next";
import data from "../../data/data.json";

const pageData = data.categories.Event.sections.CareerDetail.variants.EventCareerDetail1;

export const metadata: Metadata = {
  title: "Career Detail - Eventora",
  description: "Read details about this career opportunity at Eventora.",
};

export default async function CareerDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={pageData.breadcrumbTitle || "Career Detail"} parentTitle="Career" parentHref="/career" currentTitle="Career Detail" />
        <CareerDetail id={resolvedParams.id} />
      </main>
      <Footer />
    </>
  );
}

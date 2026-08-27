import Header from "../../components/Header/page";
import Footer from "../../components/Footer/page";
import Breadcrumb from "../../components/Breadcrumb/page";
import TeamDetail from "./TeamDetailClient";
import data from "../../data/data.json";

export default async function TeamDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const pageData = data.categories.Event.sections.Pages.variants.TeamDetailPage;

  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={pageData.breadcrumbTitle} />
        <TeamDetail id={resolvedParams.id} />
      </main>
      <Footer />
    </>
  );
}

import Header from "../../components/Header/page";
import Footer from "../../components/Footer/page";
import Breadcrumb from "../../components/Breadcrumb/page";
import ServiceDetail from "./ServiceDetailClient";

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full flex-grow flex flex-col bg-white">
        <Breadcrumb 
          title="Services" 
          parentTitle="Services"
          parentHref="/services"
          currentTitle="Services Detail"
        />
        <ServiceDetail id={resolvedParams.id} />
      </main>
      <Footer />
    </div>
  );
}

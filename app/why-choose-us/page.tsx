import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import WhyChooseUs from "../components/WhyChooseUs/page";
import data from "../data/data.json";

export default function WhyChooseUsPage() {
  const pageData = data.categories.Event.sections.Pages.variants.WhyChooseUsPage;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Breadcrumb 
        title={pageData.breadcrumbTitle} 
        backgroundImage="/images/breadcrumb/breadcrumb.png"
      />
      <main className="flex-grow">
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

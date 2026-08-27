import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import OurStory from "../components/OurStory/page";
import Team from "../components/Team/page";
import data from "../data/data.json";

export const metadata = {
  title: data.categories.Event.sections.Pages.variants.StoryPage.metaTitle,
  description: data.categories.Event.sections.Pages.variants.StoryPage.metaDesc,
};

export default function StoryPage() {
  const pageData = data.categories.Event.sections.Pages.variants.StoryPage;
  
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={pageData.breadcrumbTitle} />
        <OurStory />
        <Team limit={3} />
      </main>
      <Footer />
    </>
  );
}

import Header from "./components/Header/page";
import Hero from "./components/Hero/page";
import AboutUs from "./components/AboutUs/page";
import Services from "./components/Services/page";
import Stats from "./components/Stats/page";
import Testimonials from "./components/Testimonials/page";
import Blog from "./components/Blog/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Stats />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

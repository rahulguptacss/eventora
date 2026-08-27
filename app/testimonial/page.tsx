import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import Testimonials from "../components/Testimonials/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonial | Eventora",
  description: "Read what our clients say about us",
};

export default function TestimonialPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Testimonial" />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

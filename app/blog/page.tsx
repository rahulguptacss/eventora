import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import { Metadata } from "next";
import BlogGrid from "@/app/blog/BlogGrid";


export const metadata: Metadata = {
  title: "Blog - Eventora",
  description: "Latest Ideas & Inspiration For Unforgettable Events",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Blogs" currentTitle="Blogs" />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}

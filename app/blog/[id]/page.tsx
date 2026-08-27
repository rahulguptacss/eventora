import Header from "../../components/Header/page";
import Footer from "../../components/Footer/page";
import Breadcrumb from "../../components/Breadcrumb/page";
import { Metadata } from "next";
import BlogDetailsClient from "./BlogDetailsClient";

export const metadata: Metadata = {
  title: "Blog Details - Eventora",
  description: "Read our latest blog on wedding trends and more.",
};

export default async function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Blogs" parentTitle="Blogs" parentHref="/blog" currentTitle="Blogs Detail" />
        <BlogDetailsClient id={resolvedParams.id} />
      </main>
      <Footer />
    </>
  );
}

"use client";

import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import Services from "../components/Services/page";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full flex-grow flex flex-col overflow-hidden">
        <Breadcrumb title="Services" />
        <Services showButton={false} />
      </main>
      <Footer />
    </div>
  );
}

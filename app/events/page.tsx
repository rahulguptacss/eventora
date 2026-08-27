"use client";

import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import Breadcrumb from "../components/Breadcrumb/page";
import EventsPage from "../components/EventsPage/page";

export default function EventsRoute() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full flex-grow flex flex-col overflow-hidden">
        <Breadcrumb title="Events" />
        <EventsPage />
      </main>
      <Footer />
    </div>
  );
}

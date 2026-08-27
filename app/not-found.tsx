import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
import NotFoundContent from "./components/NotFoundContent/page";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <NotFoundContent />
      </main>
      <Footer />
    </>
  );
}

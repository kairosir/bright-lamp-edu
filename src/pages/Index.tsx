import Hero from "../components/Hero";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
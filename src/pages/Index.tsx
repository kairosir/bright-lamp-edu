import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
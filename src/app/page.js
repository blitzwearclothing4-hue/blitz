import About from "@/components/About";
import About2 from "@/components/About2";
import CertificationPartners from "@/components/certifications";
import FAQSection from "@/components/FAQsection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InclusivePricing from "@/components/InclusivePricing";


import Navbar from "@/components/Navbar";
import NewsletterForm from "@/components/NewsLetter";
import ProductCarousel from "@/components/ProductCarousel";
import WorkingProcess from "@/components/WorkingProcess";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
       <About2/>
      <About/>
      <ProductCarousel/>
      <InclusivePricing/>
      <WorkingProcess/>
      <FAQSection/>
      <CertificationPartners/>
      <NewsletterForm/>
      <Footer/>
    </div>
  );
}

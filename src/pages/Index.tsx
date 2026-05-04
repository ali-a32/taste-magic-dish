import Layout from "@/components/site/Layout";
import Hero from "@/components/site/Hero";
import MenuHighlights from "@/components/site/MenuHighlights";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";
import ReserveCTA from "@/components/site/ReserveCTA";

const Index = () => (
  <Layout>
    <Hero />
    <MenuHighlights />
    <About />
    <Testimonials />
    <ReserveCTA />
  </Layout>
);

export default Index;

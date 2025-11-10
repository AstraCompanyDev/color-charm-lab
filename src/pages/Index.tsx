import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TrustedBy from "@/components/TrustedBy";
import BuildingGreatCompanies from "@/components/BuildingGreatCompanies";
import CommunityShowcase from "@/components/CommunityShowcase";
import Community from "@/components/Community";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <TrustedBy />
      <BuildingGreatCompanies />
      <CommunityShowcase />
      <Community />
      <Stats />
      <Testimonial />
      <CallToAction />
    </div>
  );
};

export default Index;

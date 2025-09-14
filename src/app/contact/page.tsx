// app/contact/page.tsx (Next.js 13+ App Router)
import HeroSection from "@/components/contact2/HeroSection";
import ContactOptions from "@/components/contact2/ContactOptions";
import ContactForm from "@/components/contact2/ContactForm";
import HowItWorks from "@/components/contact2/HowItWorks";
import JoinNetwork from "@/components/contact2/JoinNetwork";
import PartnerBenefits from "@/components/contact2/PartnerBenefits";
import FAQSection from "@/components/contact2/FAQSection";
import Testimonials from "@/components/contact2/Testimonials";
import StatsSection from "@/components/contact2/StatsSection";
import CallToAction from "@/components/contact2/CallToAction";

export default function ContactPage() {
  return (
    <main className=" bg-mainwhite">
      <HeroSection />
      <ContactOptions />
      <ContactForm />
      <HowItWorks />
      <JoinNetwork />
      <PartnerBenefits />
      <FAQSection />
      <Testimonials />
      <StatsSection />
      <CallToAction />
    </main>
  );
}

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
    <main className="bg-mainwhite w-full min-h-screen">
      <section className="w-full">
        <HeroSection />
      </section>

      <section className="w-full">
        <ContactOptions />
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-10">
        <ContactForm />
      </section>

      <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-10">
        <HowItWorks />
      </section>

      <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-10">
        <JoinNetwork />
      </section>

      <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-10">
        <PartnerBenefits />
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-10">
        <FAQSection />
      </section>

      <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-10">
        <Testimonials />
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-10">
        <StatsSection />
      </section>

      <section className="w-full bg-mainwhite px-4 sm:px-6 lg:px-10">
        <CallToAction />
      </section>
    </main>
  );
}

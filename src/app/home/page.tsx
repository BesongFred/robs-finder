import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import GalleryPreview from "@/components/home/GalleryPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GuestReview from "@/components/home/GuestReview";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050B18]">

      {/* Gemini-style dark blue glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute inset-0 bg-[#050B18]" />

        <div
          className="
            absolute
            -left-40
            -top-40
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-600/20
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[35%]
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-indigo-600/15
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-40
            top-[20%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-cyan-500/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-250px]
            left-1/2
            h-[600px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-blue-700/15
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-blue-950/30
            via-[#050B18]/40
            to-[#050B18]
          "
        />

      </div>

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <FeaturedRooms />
        <GalleryPreview />
        <WhyChooseUs />
        <GuestReview />
        <CTA />
      </div>

      <Footer />

    </main>
  );
}
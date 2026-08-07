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
    <>
      <Navbar />
      <Hero />
      <FeaturedRooms />
      <GalleryPreview />
      <WhyChooseUs />
      <GuestReview />
      <CTA />
      <Footer />
    </>
  );
}
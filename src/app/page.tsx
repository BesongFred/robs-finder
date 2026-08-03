import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import GalleryPreview from "@/components/home/GalleryPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GuestReview from "@/components/home/GuestReview";
import StatsCounter from "@/components/home/StatsCounter";
import Reviews from "@/components/home/Reviews";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import LogoutButton from "@/components/auth/LogoutButton";
export default function Home() {
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
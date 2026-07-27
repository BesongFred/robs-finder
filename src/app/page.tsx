import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import GalleryPreview from "@/components/home/GalleryPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GuestReview from "@/components/home/GuestReview";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedRooms />
      <GalleryPreview />
      <WhyChooseUs />
      <GuestReview />
    </>
  );
}
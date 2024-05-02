import { FC } from "react";
import bannerImg from "@/assets/banner.png";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import DynamicSearch from "@/client/components/dynamic serach/DynamicSearch";

interface BannerSectionProps {}

const BannerSection: FC<BannerSectionProps> = () => {
  return (
    <section className="py-14 relative">
      <div className="circular-blur-1"></div>
      <div className="circular-blur-2"></div>
      <main className="relative grid grid-cols-2 container">
        <div>
          <h1 className="text-heading text-6xl font-semibold leading-relaxed">
            Hotel, Flights & Experiences
          </h1>
          <p className="text-body py-8">
            Accompanying us, you have a trip full of experiences. With Chisfis,
            booking accommodation, resort villas, hotels
          </p>
          <Button className="bg-primary hover:bg-secondary">
            <Search className="mr-2 h-4 w-4" /> start your search
          </Button>
        </div>
        <div>
          <img src={bannerImg} alt="banner" />
        </div>
        <DynamicSearch />
      </main>
    </section>
  );
};

export default BannerSection;

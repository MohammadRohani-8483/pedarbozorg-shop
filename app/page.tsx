import BackgroundVectors from "components/home/BackgroundVectors";
import { BannerHomePage } from "components/home/BannerHomePage";
import BestSellingProducts from "components/home/bestSellingProducts/BestSellingProducts";
import CommentsSlider from "components/home/commentSlider/CommentsSlider";
import Cooperations from "components/home/Cooperations";
import GroupProducts from "components/home/groupProduct/GroupProducts";
import OffersSlider from "components/home/offersSlider/OffersSlider";
import PedarBozorgInLife from "components/home/pedarBozorgInLife/PedarBozorgInLife";
import SliderProduct from "components/home/sliderProduct/SliderProduct";
import SpecialOffers from "components/home/SpecialOffers";
import SpecialProducts from "components/home/SpecialProducts";
import SpecialProductsSlider from "components/home/SpecialProductsSlider";
import VideoCategory from "components/home/VideoCategory";
import { WhyPedarBozorg } from "components/home/whyPedarbozorg/WhyPedarBozorg";

export default function Home() {
  return (
    <main className="lg:pt-48 pt-16">
      <BackgroundVectors />
      <SliderProduct />
      <GroupProducts />
      <SpecialProducts />
      {/* <OffersSlider /> */}
      <SpecialProductsSlider />
      <VideoCategory />
      <WhyPedarBozorg />
      <BannerHomePage />
      {/* <SpecialOffers /> */}
      {/* <PedarBozorgInLife /> */}
      {/* <CommentsSlider /> */}
      {/* <BestSellingProducts /> */}
      <Cooperations />
    </main>
  );
}

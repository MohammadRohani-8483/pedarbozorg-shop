// import BackgroundVectors from "public/components/home/BackgroundVectors";
// import { BannerHomePage } from "public/components/home/BannerHomePage";
// import BestSellingProducts from "public/components/home/bestSellingProducts/BestSellingProducts";
// import CommentsSlider from "public/components/home/commentSlider/CommentsSlider";
// import Cooperations from "public/components/home/Cooperations";
// import GroupProducts from "public/components/home/groupProduct/GroupProducts";
// import OffersSlider from "public/components/home/offersSlider/OffersSlider";
// import PedarBozorgInLife from "public/components/home/pedarBozorgInLife/PedarBozorgInLife";
// import SliderProduct from "public/components/home/sliderProduct/SliderProduct";
// import SpecialOffers from "public/components/home/SpecialOffers";
// import SpecialProducts from "public/components/home/SpecialProducts";
// import SpecialProductsSlider from "public/components/home/SpecialProductsSlider";
// import VideoCategory from "public/components/home/VideoCategory";
// import { WhyPedarBozorg } from "public/components/home/whyPedarbozorg/WhyPedarBozorg";

import BackgroundVectors from "./components/home/BackgroundVectors";
import { BannerHomePage } from "./components/home/BannerHomePage";
import BestSellingProducts from "./components/home/bestSellingProducts/BestSellingProducts";
import CommentsSlider from "./components/home/commentSlider/CommentsSlider";
import Cooperations from "./components/home/Cooperations";
import GroupProducts from "./components/home/groupProduct/GroupProducts";
import OffersSlider from "./components/home/offersSlider/OffersSlider";
import PedarBozorgInLife from "./components/home/pedarBozorgInLife/PedarBozorgInLife";
import SliderProduct from "./components/home/sliderProduct/SliderProduct";
import SpecialOffers from "./components/home/SpecialOffers";
import SpecialProducts from "./components/home/SpecialProducts";
import SpecialProductsSlider from "./components/home/SpecialProductsSlider";
import VideoCategory from "./components/home/VideoCategory";
import { WhyPedarBozorg } from "./components/home/whyPedarbozorg/WhyPedarBozorg";

export default function Home() {
  return (
    <main className="lg:pt-48 pt-16">
      <BackgroundVectors />
      <SliderProduct />
      <GroupProducts />
      <SpecialProducts />
      <OffersSlider />
      <SpecialProductsSlider />
      <VideoCategory />
      <WhyPedarBozorg />
      <BannerHomePage />
      {/* <SpecialOffers /> */}
      {/* <PedarBozorgInLife /> */}
      {/* <CommentsSlider /> */}
      <BestSellingProducts />
      <Cooperations />
    </main>
  );
}

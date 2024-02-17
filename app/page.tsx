import { BannerHomePage } from "./components/BannerHomePage";
import BestSellingProducts from "./components/BestSellingProducts";
import CommentsSlider from "./components/commentsSlider";
import Cooperations from "./components/Cooperations";
import GroupProducts from "./components/GroupProducts";
import OffersSlider from "./components/OffersSlider";
import PedarBozorgInLife from "./components/PedarBozorgInLife";
import SliderProduct from "./components/SliderProduct";
import SpecialOffers from "./components/SpecialOffers";
import SpecialProducts from "./components/SpecialProducts";
import SpecialProductsSlider from "./components/SpecialProductsSlider";
import VideoCategory from "./components/VideoCategory";
import { WhyPedarBozorg } from "./components/WhyPedarBozorg";

export default function Home() {
  return (
    <main className="lg:pt-20 pt-16">
      <SliderProduct />
      <GroupProducts />
      <SpecialProducts />
      <OffersSlider /> 
      <SpecialProductsSlider />
      <VideoCategory />
      <WhyPedarBozorg />
      <BannerHomePage />
      <SpecialOffers />
      <PedarBozorgInLife />
      <CommentsSlider />
      <BestSellingProducts />
      <Cooperations />
    </main>
  );
}

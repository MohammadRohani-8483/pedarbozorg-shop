import BackgroundVectors from "components/home/BackgroundVectors";
import { BannerHomePage } from "components/home/BannerHomePage";
import BestSellingProducts from "components/home/bestSellingProducts/BestSellingProducts";
// import CommentsSlider from "components/home/commentSlider/CommentsSlider";
import Cooperations from "components/home/Cooperations";
import GroupProducts from "components/home/groupProduct/GroupProducts";
import OffersSlider from "components/home/offersSlider/OffersSlider";
// import PedarBozorgInLife from "components/home/pedarBozorgInLife/PedarBozorgInLife";
import SliderProduct from "components/home/sliderProduct/SliderProduct";
// import SpecialOffers from "components/home/SpecialOffers";
import SpecialProducts from "components/home/SpecialProducts";
import SpecialProductsSlider from "components/home/SpecialProductsSlider";
import VideoCategory from "components/home/VideoCategory";
import { WhyPedarBozorg } from "components/home/whyPedarbozorg/WhyPedarBozorg";

const fetchFunc = async (api: string) => {
  const res = fetch(api, {
    method: "GET",
    cache:'no-store'
  })
  return (await res).json()
}

export default async function Home() {
  console.log(process.env.API)
  const data = await fetchFunc(`${process.env.API}/core-api/site/landing/`)

  return (
    <main className="lg:pt-48 pt-16">
      <BackgroundVectors />
      <SliderProduct />
      <GroupProducts />
      <SpecialProducts />
      <OffersSlider products={data.most_discount_products} />
      <SpecialProductsSlider products={data.vip_products} />
      <VideoCategory />
      <WhyPedarBozorg />
      <BannerHomePage />
      {/* <SpecialOffers /> */}
      {/* <PedarBozorgInLife /> */}
      {/* <CommentsSlider /> */}
      <BestSellingProducts products={data.best_seller_products} />
      <Cooperations />
    </main>
  );
}

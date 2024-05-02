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
  try {
    const res = await fetch(api, {
      method: "GET",
      cache: 'no-store'
    })
    return await res.json()
  } catch (error) {
    return { error }
  }
}

export default async function Home() {
  const data = await fetchFunc(`https://api.pedarbozorg.shop/core-api/site/landing/`);

  return (
    <main className="lg:pt-48 pt-16">
      <BackgroundVectors />
      <SliderProduct />
      <GroupProducts />
      <SpecialProducts />
      {data.most_discount_products && <OffersSlider products={data.most_discount_products} />}
      {data.vip_products && <SpecialProductsSlider products={data.vip_products} />}
      <VideoCategory />
      <WhyPedarBozorg />
      <BannerHomePage />
      {/* <SpecialOffers /> */}
      {/* <PedarBozorgInLife /> */}
      {/* <CommentsSlider /> */}
      {data.best_seller_products && <BestSellingProducts products={data.best_seller_products} />}
      <Cooperations />
    </main>
  );
}

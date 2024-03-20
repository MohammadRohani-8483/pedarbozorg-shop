import React from 'react'
import BestSellingCard from './BestSellingCard'
import Title from '@/components/Title'

const BestSellingProducts = ({ products }: any) => {
    // const [products, setProducts] = useState([])
    // const url = "/api/core-api/site/landing/"
    // useEffect(() => {
    //     axios.get(url)
    //         .then(res => {
    //             setProducts(res.data.best_seller_products)
    //         })
    // }, [])

    return (
        <div className='max-w-[1136px] w-[90%] mx-auto mt-20 flex flex-col gap-8 justify-between items-center'>
            <Title>پرفروش ترین ها</Title>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 w-full'>
                {products.map((product: any, i: number) => (
                    <BestSellingCard
                        name={product.name}
                        key={product.id}
                        num={i + 1}
                        image={product.featured_image}
                        link={`products/${product.slug}`}
                    />
                ))}
            </div>
            <button className='rectangle-btn solid-btn'>مشاهده همه</button>
        </div>
    )
}

export default BestSellingProducts
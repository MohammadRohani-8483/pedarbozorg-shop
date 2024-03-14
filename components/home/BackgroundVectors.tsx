import Image from 'next/image'

const BackgroundVectors = () => {
    return (
        <div
            className='hidden lg:block'
        // className='abolute z-[-1]'
        >
            <Image
                src="/Image/background/vectors/tree-1.svg"
                alt="tree 1"
                width={152}
                height={192}
                className='top-4 right-0 absolute z-[-1]'
            />
            <Image
                src="/Image/background/vectors/tree-2.svg"
                alt="tree 2"
                width={194}
                height={218}
                className='top-2 left-0 absolute z-[-1]'
            />
            <Image
                src="/Image/background/vectors/slider-left-vector.svg"
                alt="slider left vector"
                width={66}
                height={580}
                className='top-56 left-0 absolute z-[-1]'
            />
            <Image
                src="/Image/background/vectors/slider-right-vector.svg"
                alt="slider left vector"
                width={77}
                height={469}
                className='top-72 right-0 absolute z-[-1]'
            />
            <Image
                src="/Image/background/vectors/tree-3.svg"
                alt="tree 2"
                width={336}
                height={335}
                className='top-[1230px] left-0 absolute z-[-1]'
            />
            {/* <Image
                src="/Image/background/vectors/tree-4.svg"
                alt="tree 2"
                width={351}
                height={335}
                className='top-[2700px] right-0 absolute z-[-1]'
            />
            <Image
                src="/Image/background/vectors/tree-5.svg"
                alt="tree 2"
                width={600}
                height={300}
                className='top-[4150px] left-0 absolute z-[-1]'
            /> */}
        </div>
    )
}

export default BackgroundVectors
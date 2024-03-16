import VideoItem from "./VideoItem";

export default function VideoCategory() {
    return (
        <div className="flex justify-center items-center gap-2 md:gap-4 max-w-[1136px] w-[90%] mx-auto mt-20 ltr">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center ltr">
                <VideoItem bgColor="#F5EEE7" color="#DB7A18"
                    link="/products/کره-بادام-درختی" firstDiv
                    title="کره بادام درختی"
                    desc="تهیه شده از بادام ممتاز ایرانی"
                    video="/video/kare-badam.mp4"
                    classNameDiv="aspect-[140/152] md:aspect-[272/218]"
                    classNameVideo="aspect-[140/168.7] md:aspect-[272/347]"
                />
                <VideoItem bgColor="#FAEEED" color="#BD483E"
                    link="/products/روغن-کنجد-فرابکر-ممتاز"
                    title="روغن کنجد فرابکر"
                    desc="تهیه روز با پرس سرد فقط با تصفیه فیزیکی"
                    video="/video/roghan-konjed.mp4"
                    classNameDiv="aspect-[140/224] md:aspect-[272/347]"
                    classNameVideo="aspect-[140/175.5] md:aspect-[272/361]"
                />
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center ltr">
                <VideoItem bgColor="#E5EDFF" color="#5375C2"
                    link="/products/روغن-سالاد" firstDiv
                    title="روغن مخصوص سالاد"
                    desc="حاوی قوی ترین آنتی اکسیدان های شناخته شده در دنیا"
                    video="/video/roghan-salad.mp4"
                    classNameDiv="aspect-[140/264] md:aspect-[272/221]"
                    classNameVideo="aspect-[140/176.1] md:aspect-[272/362.3]"
                />
                <VideoItem bgColor="#E7F2F5" color="#3D8361"
                    link="/products/ارده-کنجد"
                    title="ارده کنجد"
                    desc="تهیه شده به روش سنتی از کنجد ایرانی"
                    video="/video/arde-konjed.mp4"
                    classNameDiv="aspect-[140/183] md:aspect-[272/221]"
                    classNameVideo="aspect-[140/209.5] md:aspect-[272/431]"
                />
            </div>
        </div>
    )
}

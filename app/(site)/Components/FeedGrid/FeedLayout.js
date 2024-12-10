import { Tag } from 'lucide-react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

//updated Clicks
import { updatePostClicks } from '@/utils/UpdateClicks';

//dateUtils
import { dateUtils } from '@/utils/dateUtils';

export const FeedGrid = ({ data }) => {

    const [bigItem, ...minorItems] = data; // Separa el primer ítem para LayoutBig y el resto para LayoutMinor

    const router = useRouter()

    return (
        <section className='container mx-auto max-w-9xl mt-24 mb-6'>
            {/* LayoutBig - Primer ítem */}
            {bigItem && (
                <div className="relative overflow-hidden rounded-2xl bg-black text-white h-[500px] group mb-8 cursor-pointer" onClick={() => { router.push(`/posts/${bigItem.slug.current}`); updatePostClicks(bigItem._id) }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
                    <div className="absolute inset-0 bg-black/40" />
                    <Image
                        src={bigItem.mainImage} // Usa mainImage para obtener la imagen
                        alt={bigItem.title}
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        layout="fill" // Asegúrate de que la imagen cubra el área del contenedor
                    />
                    <div className="relative z-20 h-full flex flex-col justify-end p-8">
                        <h1 className="text-2xl font-bold mb-4">{bigItem.title}</h1>
                        <p className="flex items-center gap-3 text-xl"> <Tag className="w-5 h-5" /> {bigItem.categories.join(', ')}</p>
                        {dateUtils(bigItem.publishedAt)}
                    </div>
                </div>
            )}

            {/* LayoutMinor - El resto de los ítems */}
            {minorItems.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {minorItems.map((item) => (
                        <div
                            key={item._id}
                            onClick={() => { router.push(`/posts/${item.slug.current}`); updatePostClicks(item._id) }}
                            className="relative overflow-hidden rounded-xl h-[320px] group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                            <Image
                                src={item.mainImage} // Usa mainImage para obtener la imagen
                                alt={item.title}
                                layout="fill" // Asegúrate de que la imagen cubra el área del contenedor
                                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="relative z-20 h-full p-6 flex flex-col justify-end text-white">
                                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                                <p className="flex items-center gap-3 text-xl"> <Tag className="w-5 h-5" /> {item.categories.join(', ')}</p>
                                <span className='text-gray-200'>
                                {dateUtils(bigItem.publishedAt)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

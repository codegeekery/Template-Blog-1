// components/NewsCard.js
import Image from 'next/image';

const newsItems = [
    {
        title: "New Advances in Cancer Research Show Promising Results",
        date: '3 hours ago',
        imgSrc: '/ejemplo6.jpg', // Replace with actual image paths
    },
    {
        title: 'How to Maintain Mental Health During Stressful Times',
        date: 'Jul 30, 2024',
        imgSrc: '/ejemplo6.jpg',
    },
    {
        title: 'The Benefits of a Plant-Based Diet for Heart Health',
        date: 'Jul 29, 2024',
        imgSrc: '/ejemplo6.jpg',
    },
    {
        title: 'Top Exercises for Improving Your Immune System',
        date: 'Jul 29, 2024',
        imgSrc: '/ejemplo6.jpg',
    },
];

const LayoutNewsCard = () => {
    return (
        <>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-medium mb-2 mt-4'>Healthy News</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                    {newsItems.map((item, index) => (
                        <div key={index} className="overflow-hidden">
                            <Image
                                src={item.imgSrc}
                                alt={item.title}
                                width={300}
                                height={300}
                                className="w-full h-48 object-cover rounded cursor-pointer"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-gray-500">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export { LayoutNewsCard };

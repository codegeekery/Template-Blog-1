// components/NewsCard.js
import Image from 'next/image';

const newsItems = [
    {
        title: "Nuevos Avances en la Investigación del Cáncer Muestran Resultados Prometedores",
        date: 'Hace 3 horas',
        imgSrc: '/ejemplo6.jpg', // Reemplazar con las rutas reales de las imágenes
    },
    {
        title: 'Cómo Mantener la Salud Mental en Tiempos Estresantes',
        date: '30 de julio de 2024',
        imgSrc: '/ejemplo6.jpg',
    },
    {
        title: 'Los Beneficios de una Dieta Basada en Plantas para la Salud del Corazón',
        date: '29 de julio de 2024',
        imgSrc: '/ejemplo6.jpg',
    },
    {
        title: 'Los Mejores Ejercicios para Mejorar tu Sistema Inmunológico',
        date: '29 de julio de 2024',
        imgSrc: '/ejemplo6.jpg',
    },
];

const LayoutNewsCard = () => {
    return (
        <>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-medium mb-2 mt-4'>Noticias Saludables</h1>
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

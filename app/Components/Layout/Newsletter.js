// components/Newsletter.js

import Image from 'next/image'

export function Newsletter() {
    return (
        <div className="bg-blue-100 p-6 md:p-8 rounded-md flex flex-col lg:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 container max-w-7xl mx-auto mb-10">
            <div className="flex items-center space-x-4">
                <Image
                    src="/newsLetter.webp" // Reemplaza con la ruta de tu imagen
                    alt="Newsletter"
                    width={100}
                    height={100}
                    className="w-24 h-24 md:w-32 md:h-32"
                />
                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-2">Recibe lo último sobre atención plena</h2>
                    <p className="text-sm md:text-base text-gray-700">Nuestro boletín gratuito ofrece actualizaciones sobre la ciencia de la atención plena, prácticas de meditación guiadas por maestros destacados, ofertas especiales y contenido enriquecedor para apoyar tu crecimiento consciente.</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
                <input type="email" placeholder="Introduce tu correo electrónico" className="p-2 rounded-md border border-gray-300 outline-none w-full md:w-72" />
                <button className="bg-blue-500 text-white p-2 rounded-md w-full md:w-auto">Suscribirse</button>
            </div>
        </div>
    )
}

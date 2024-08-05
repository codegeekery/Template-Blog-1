'use client'
import Image from "next/image"
import {Newsletter} from "@/app/Components/Layout/Newsletter"

// ShadcnUI
import {
    Button
} from "@/components/ui/button"

export function LayoutBlog() {
    return (
        <>
            <div className="container max-w-7xl mx-auto px-4 py-8">
                <h1 className='mb-3 text-2xl font-bold text-center'>El recurso más confiable para la atención plena y la meditación.</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Columna principal */}
                    <div className="md:col-span-2 cursor-pointer">
                        <div className="mb-8">
                            <Image
                                src="/ejemplo1.webp"
                                alt="Imagen del artículo principal"
                                width={700}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                            <h2 className="text-xl font-bold mt-4">Deja que tu práctica te guíe más allá del modo de crisis</h2>
                            <p className="mt-2">Aunque muchos de nosotros recurrimos a la atención plena para ayudarnos en tiempos de caos interno y externo, podemos cultivar la mayor resiliencia a través de la consistencia en nuestra práctica, incluso cuando no se siente urgente.</p>
                            <p className="mt-2 text-sm">Georgina Miranda</p>
                        </div>
                    </div>

                    {/* Columna lateral */}
                    <div className="md:col-span-1">
                        <div className="space-y-8">

                            {/* Primer artículo lateral */}
                            <div>
                                <Image
                                    src="/ejemplo2.jpg"
                                    alt="Imagen del artículo"
                                    width={300}
                                    height={200}
                                    className="w-full h-auto object-cover"
                                />
                                <h3 className="text-lg font-bold mt-4">La compasión es clave para nuestra supervivencia</h3>
                                <p className="text-sm">Susan Kaiser Greenland</p>
                            </div>

                            {/* Lista de enlaces con imágenes */}
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-4">
                                    <Image
                                        src="/ejemplo5.jpg"
                                        alt="Imagen del artículo"
                                        width={100}
                                        height={70}
                                        className="object-cover"
                                    />
                                    <div>
                                        <a href="#" className="block text-sm">Cómo superar el síndrome del impostor</a>
                                        <p className="text-xs">Nicole Bayes-Fleming</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Image
                                        src="/ejemplo5.jpg"
                                        alt="Imagen del artículo"
                                        width={100}
                                        height={70}
                                        className="object-cover"
                                    />
                                    <div>
                                        <a href="#" className="block text-sm">Una meditación de 12 minutos para recordar que nos pertenecemos unos a otros</a>
                                        <p className="text-xs">Ruth King</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Image
                                        src="/ejemplo5.jpg"
                                        alt="Imagen del artículo"
                                        width={100}
                                        height={70}
                                        className="object-cover"
                                    />
                                    <div>
                                        <a href="#" className="block text-sm">Cómo presentarse con todo tu corazón</a>
                                        <p className="text-sm">Jonathan Fisher</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Image
                                        src="/ejemplo5.jpg"
                                        alt="Imagen del artículo"
                                        width={100}
                                        height={70}
                                        className="object-cover"
                                    />
                                    <div>
                                        <a href="#" className="block text-sm">Una meditación de 12 minutos para trabajar con la vergüenza</a>
                                        <p className="text-sm">Tovi Scruggs-Hussein</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Botón para más artículos */}
                <div className='flex justify-center'>
                    <Button className='p-4 w-[170px] mt-4' onClick={()=> {window.location.href = "/Articles"}}>
                        Más artículos
                    </Button>
                </div>

            </div>

            {/* Componente del boletín */}
            <Newsletter />
        </>
    )
}

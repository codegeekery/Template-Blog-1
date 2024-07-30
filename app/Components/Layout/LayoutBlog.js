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
                <h1 className='mb-3 text-2xl font-bold text-center'>The most trusted resource for mindfulness and meditation.</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Columna principal */}
                    <div className="md:col-span-2 cursor-pointer">
                        <div className="mb-8">
                            <Image
                                src="/ejemplo1.webp"
                                alt="Main article image"
                                width={700}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                            <h2 className="text-xl font-bold mt-4">Let Your Practice Guide You Beyond Crisis Mode</h2>
                            <p className="mt-2">While many of us lean on mindfulness to help us through times of inner and outer chaos, we can cultivate the greatest resilience through consistency in our practice, even when it doesn’t feel urgent.</p>
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
                                    alt="Article image"
                                    width={300}
                                    height={200}
                                    className="w-full h-auto object-cover"
                                />
                                <h3 className="text-lg font-bold mt-4">Compassion Is Key to Our Survival</h3>
                                <p className="text-sm">Susan Kaiser Greenland</p>
                            </div>

                            {/* Lista de enlaces con imágenes */}
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-4">
                                    <Image
                                        src="/ejemplo5.jpg"
                                        alt="Article image"
                                        width={100}
                                        height={70}
                                        className="object-cover"
                                    />
                                    <div>
                                        <a href="#" className="block text-sm">How to Overcome Imposter Syndrome</a>
                                        <p className="text-xs">Nicole Bayes-Fleming</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Image
                                        src="/ejemplo5.jpg"
                                        alt="Article image"
                                        width={100}
                                        height={70}
                                        className="object-cover"
                                    />
                                    <div>
                                        <a href="#" className="block text-sm">A 12-Minute Meditation for Remembering That We Belong to Each Other</a>
                                        <p className="text-xs">Ruth King</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Image
                                        src="/ejemplo5.jpg"
                                        alt="Article image"
                                        width={100}
                                        height={70}
                                        className="object-cover"
                                    />
                                    <div>
                                        <a href="#" className="block text-sm">How to Show Up With Your Whole Heart</a>
                                        <p className="text-sm">Jonathan Fisher</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Image
                                        src="/ejemplo5.jpg"
                                        alt="Article image"
                                        width={100}
                                        height={70}
                                        className="object-cover"
                                    />
                                    <div>
                                        <a href="#" className="block text-sm">A 12-Minute Meditation for Working with Shame</a>
                                        <p className="text-sm">Tovi Scruggs-Hussein</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Button for More Articles */}
                <div className='flex justify-center'>
                    <Button className='p-4 w-[170px] mt-4' onClick={()=> {window.location.href = "/Articles"}}>
                        More Articles
                    </Button>
                </div>

            </div>

            {/* NewsLetter Component */}
            <Newsletter />
        </>
    )
}
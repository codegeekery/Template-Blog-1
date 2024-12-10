'use client'
// components/Newsletter.js
import Image from 'next/image'
import {useNewsletter} from '@/utils/usePosts'


export function Newsletter() {

    const {data} = useNewsletter()

    console.log(data)

    return (
        <div className="bg-blue-100 p-4 md:p-8 rounded-md flex flex-col lg:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 container max-w-8xl mx-auto mb-10">
            <div className="flex items-center space-x-4">
                <Image
                    src="/newsLetter.webp"
                    alt="Newsletter"
                    width={100}
                    height={100}
                    className="w-24 h-24 md:w-32 md:h-32"
                />
                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-2">{data?.title || 'Receive the latest on mindfulness'}</h2>
                    <p className="text-sm md:text-base text-gray-700">
                        {data?.description || 'Our free newsletter provides updates on the science of mindfulness, guided meditation practices by renowned teachers, special offers, and enriching content to support your conscious growth.'}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
                <input type="email" placeholder={data?.placeholder || "Enter your email address"} className="p-2 rounded-md border border-gray-300 outline-none w-full md:w-72" />
                <button className="bg-blue-500 text-white p-2 rounded-md w-full md:w-auto">{data?.buttonText || 'Subscribe'}</button>
            </div>
        </div>
    );
}

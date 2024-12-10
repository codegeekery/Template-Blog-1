'use client'
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useNextSanityImage } from 'next-sanity-image';
import { dateUtils } from "@/utils/dateUtils";
import {
    Loader,
} from 'lucide-react'
import { GetPost } from "@/utils/usePosts";
import { client } from "@/sanity/lib/client"

const SanityImage = ({ node }) => {
    const imageProps = useNextSanityImage(client, node);
    return (
        <Image
            {...imageProps}
            alt={node.alt}
            style={{ width: '100%', height: 'auto' }}
            sizes="(max-width: 800px) 100vw, 800px"
        />
    );
};
const myPortableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value || !value.asset || !value.asset._ref) {
                return null;
            }
            // Fetch the full image object from Sanity using the reference
            return <SanityImage node={value} />;
        },
    },
    block: {
        h1: ({ children }) => <h1 className="text-4xl font-bold my-8">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-bold my-6">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
        h4: ({ children }) => <h4 className="text-xl font-bold my-4">{children}</h4>,
        h5: ({ children }) => <h5 className="text-lg font-bold my-4">{children}</h5>,
        h6: ({ children }) => <h6 className="text-base font-bold my-4">{children}</h6>,
        normal: ({ children }) => <p className="text-base my-2">{children}</p>,
        blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4">{children}</blockquote>,
        center: ({ children }) => <h1 className="text-center text-4xl font-bold">{children}</h1>
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc list-inside my-4">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal list-inside my-4">{children}</ol>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => <span className="underline">{children}</span>,
        code: ({ children }) => <code className="bg-gray-200 p-1 rounded">{children}</code>,
        link: ({ value, children }) => {
            const { href, target } = value;
            return (
                <a
                    href={href}
                    target={target}
                    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="text-blue-500 underline"
                >
                    {children}
                </a>
            );
        },
    },
};

export default function Blog({ params }) {

    const { slug } = params;

    const { data: page, isLoading, error } = GetPost(slug);

    if (isLoading) return <div className="flex justify-center items-center h-screen animate-spin"><Loader size={32} /></div>;
    if (error) return <div>Error: {error.message}</div>;



    return (

        <>
            <div className="max-w-screen-lg mx-auto px-4 py-8 mt-16">
                <div className="mt-8">
                    <div className="flex justify-center items-center gap-4 mb-8">
                        {page?.avatar && (<img className="w-12 h-12 rounded-full" src={page?.avatar} alt={page?.Author} />)}
                        <div className="text-center">
                            <p className="text-lg font-semibold">{page?.Author}</p>
                            <p className="text-sm text-gray-600">
                                {dateUtils(page?.publishedAt)}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="prose lg:prose-xl">
                    <PortableText value={page.body} components={myPortableTextComponents} />
                </div>
            </div>
        </>


    )
}

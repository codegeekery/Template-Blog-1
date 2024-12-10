'use client'
import { Newsletter } from "@/app/(site)/Components/Layout/Newsletter"



//useFeed posts order clicks desc
import { useFeedLayout } from "@/utils/usePosts"

//FeedGrid
import { FeedGrid } from "@/app/(site)/Components/FeedGrid/FeedLayout"


export function LayoutBlog() {

    const { data, isLoading } = useFeedLayout()

    return (
        <>
            {isLoading ? (
                <span className="flex items-center justify-center h-screen text-2xl">Loading...</span>
            ) : (
                <FeedGrid data={data} />
            )}

            {/* Componente del boletín */}
            <Newsletter />
        </>
    )
}

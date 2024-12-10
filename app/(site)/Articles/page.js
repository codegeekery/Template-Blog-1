'use client'
import Link from "next/link";
import { usePaginated } from "@/utils/usePosts"; // Asumiendo que el hook se encuentra en un archivo separado
import { PaginationControls } from "@/app/(site)/Components/ButtonCustom/PaginationButtons";
import { updatePostClicks } from "@/utils/UpdateClicks";
import { dateUtils } from "@/utils/dateUtils";

// icons
import { Tag } from 'lucide-react';

export default function Page({ searchParams }) {
  const LIMIT = 6;

  const currentPage = parseInt(searchParams?.page || 1);
  const start = (currentPage - 1) * LIMIT;

  // Usa el hook combinado para obtener artículos y el conteo total
  const { data, isLoading } = usePaginated(start, LIMIT);

  if (isLoading) return;

  const { posts, length } = data;

  // Determina si hay más páginas
  const hasNextPage = (currentPage * LIMIT) < length;

  return (
    <div className="container mx-auto p-4 mt-32">
      {posts?.length === 0 ? (
        <div className="text-center p-4">
          <p className="text-xl text-gray-600 mb-4">No posts available.</p>
          <Link href="/studio/structure/post" className="text-blue-500 hover:underline">
          Create your first post
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts?.map((article) => (
            <div
              key={article._id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              {article.mainImage && (
                <img
                  src={article.mainImage}
                  alt={article.alt || article.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                {article.categories && (
                  <p className="text-gray-600 mb-2">
                    <span className="flex items-center gap-2"><Tag className="w-5 h-5" /> {article.categories.join(", ")}</span>
                  </p>
                )}
                <p className="text-gray-500 text-sm mb-4">
                  Published {dateUtils(article.publishedAt)}
                </p>
                <Link href={`/posts/${article.slug.current}`} onClick={() => updatePostClicks(article._id)}>
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <PaginationControls currentPage={currentPage} hasNextPage={hasNextPage} length={length} LIMIT={LIMIT} />
    </div>

  );
}

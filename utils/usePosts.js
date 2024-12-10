import { useQuery } from '@tanstack/react-query'; // Importa el hook useQuery
import { client } from '@/sanity/lib/client'; // Asegúrate de que esta ruta sea correcta
import { CONFIG_QUERY, SEARCH_QUERY, ARTICLES, TOTAL_ARTICLES_COUNT,SLUG,FEED_LAYOUT, NEWSLETTER_QUERY } from '@/sanity/lib/queries';


//  Getting all config from Sanity document
export const useConfig = () => {
    return useQuery({
        queryKey: ['config'], // La clave de consulta que identifica esta consulta
        queryFn: async () => {
            const data = await client.fetch(CONFIG_QUERY); // Realiza la consulta a Sanity
            return data; // Devuelve los datos
        },
        refetchInterval: 2 * 60 * 1000
    });
};

//  Find a post with a query
export function useSearchPosts(SEARCH) {
    return useQuery({
        queryKey: ['posts', SEARCH],
        queryFn: async () => {
            if (!SEARCH) return [];

            const data = await client.fetch(SEARCH_QUERY, { SEARCH: `${SEARCH}*` });

            return data;
        },
        enabled: !!SEARCH,
        refetchOnWindowFocus: false
    });
}


export function usePaginated(start, LIMIT) {
    return useQuery({
        queryKey: ['posts', start, LIMIT], // Incluye los parámetros start y LIMIT en el queryKey para asegurar una caché única por cada combinación de parámetros.
        queryFn: async () => {
            const [posts, total] = await Promise.all([
                client.fetch(ARTICLES(start, LIMIT)),
                client.fetch(TOTAL_ARTICLES_COUNT),
            ]);
            const length = total[0]?.length || 0;
            return { posts, length };
        },
        refetchInterval: 60 * 1000
    });
}


export const GetPost = (slug) => {
    return useQuery({
        queryKey: ['posts', slug],
        queryFn: async () => {
            const data = await client.fetch(SLUG, { slug });
            return data;
        },
        refetchInterval: 1000 * 60 * 2,
    });
}

export function useFeedLayout () {
    return useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const data = await client.fetch(FEED_LAYOUT);
            return data
        },
        refetchInterval: 60 * 1000
    })
}

export function useNewsletter () {
    return useQuery({
        queryKey: ['newsletter'],
        queryFn: async () => {
            const data = await client.fetch(NEWSLETTER_QUERY);
            return data
        },
        refetchInterval: 60 * 1000
    })
}







import { client } from "@/sanity/lib/client";
import { CONFIG_QUERY } from "@/sanity/lib/queries";




export async function generateMetadata() {
  const options = { next: { revalidate: 120 } };
  const data = await client.fetch(CONFIG_QUERY, {}, options);
  return {
    title: data?.MetaTitle || "Sample Company",
    description: data?.MetaDescription || "Sample Company",
    icons: [{ rel: 'icon', url: data?.Icon || "/sample.png" }],
  };
}



export default function ArticlesLayout({children}) {
  return (
    <section>
      {children}
    </section>
  )
}
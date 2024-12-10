import { Inter } from "next/font/google";
import "@/app/globals.css";
import Menu from "@/app/(site)/Components/Menu/Menu"
import { TanstackProviders } from "@/utils/TanstackProviders";
import { client } from "@/sanity/lib/client";
import { CONFIG_QUERY } from "@/sanity/lib/queries";

const inter = Inter({ subsets: ["latin"] });




export async function generateMetadata() {
  const options = { next: { revalidate: 120 } };
  const data = await client.fetch(CONFIG_QUERY, {}, options);
  return {
    title: data?.MetaTitle || "Sample Company",
    description: data?.MetaDescription || "Sample Company",
    icons: [{ rel: 'icon', url: data?.Icon || "/sample.png"  }],
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProviders>
          <Menu />
          {children}
        </TanstackProviders>
      </body>
    </html>
  );
}

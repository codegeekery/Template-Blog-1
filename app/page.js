import {LayoutBlog} from "@/app/Components/Layout/LayoutBlog";
import {LayoutPodcasts} from "@/app/Components/Layout/LayoutPodcasts";
import {LayoutNewsCard} from "@/app/Components/News/NewsCards";

export default function Home() {
  return (
    <>
      {/* Blog Layout */}
      <LayoutBlog />

      {/* Layout Audio post cad */}
      <LayoutPodcasts />


      {/* News Posts */}
      <LayoutNewsCard />

    </>
  );
}

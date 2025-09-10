import YouTube from "react-youtube";
import { getYoutubeVideoId } from "../../Functions/Functions";

export function MyVideo({ url }) {
  const id = getYoutubeVideoId(url);

  if (!id) {
    return null; // or <Skeleton /> or a friendly fallback
  }
  return (
    <div className="w-full md:flex justify-center p-3">
      <YouTube
        key={id}
        videoId={id}
        opts={{ playerVars: { modestbranding: 1, rel: 0 } }}
        onError={(e) => {
          // YouTube IFrame error codes: 2,5,100,101,150
          const code = e?.data;
          if (process.env.NODE_ENV !== "production") {
            console.warn("YouTube player error", { code, url });
          }
        }}
      />
    </div>
  );
}

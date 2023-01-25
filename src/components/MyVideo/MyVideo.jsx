import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { getYoutubeVideoId } from "../../Functions/Functions";

export const MyVideo = ({ url }) => {
  const [newUrl, setNewUrl] = useState(null);

  useEffect(() => {
    setNewUrl(getYoutubeVideoId(url));
  }, [newUrl]);

  return (
    <div className="w-full">
      {url ? (
        <YouTube videoId={newUrl} />
      ) : (
        <p>Your browser does not support the video</p>
      )}
    </div>
  );
};

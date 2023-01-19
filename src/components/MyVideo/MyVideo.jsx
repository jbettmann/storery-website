import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { getYoutubeVideoId } from "../../Functions/Functions";

export const MyVideo = ({ url }) => {
  const [newUrl, setNewUrl] = useState(url);

  useEffect(() => {
    setNewUrl(getYoutubeVideoId(url));
  }, []);

  return (
    <div className="player">
      {url ? (
        <YouTube videoId={newUrl} />
      ) : (
        <p>Your browser does not support the video</p>
      )}
    </div>
  );
};

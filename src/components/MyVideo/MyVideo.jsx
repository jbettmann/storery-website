import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

export const MyVideo = ({ url }) => {
  const [newURL, setURL] = useState(url);

  function getYoutubeVideoId(urls) {
    let videoId;
    let ampersandPosition = videoId?.indexOf("&");
    if (urls.includes("v=")) {
      videoId = urls.split("v=")[1];
    } else {
      videoId = urls.split("/")[3];
    }
    if (ampersandPosition && ampersandPosition != -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return setURL(videoId);
  }

  useEffect(() => {
    getYoutubeVideoId(url);
  }, []);

  return (
    <div className="player">
      {url ? (
        <YouTube videoId={newURL} />
      ) : (
        <p>Your browser does not support the video</p>
      )}
    </div>
  );
};

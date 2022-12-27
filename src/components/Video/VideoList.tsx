import axios from "axios";
import { useEffect, useState } from "react";
import { Video } from "../../Manager/Video";
import VideoCard from "./VideoCard";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/videos", {
        withCredentials: true,
      })
      .then((res: any) => {
        console.log(res.data);
        setVideos(res.data);
      });
  }, []);

  return (
    <>
      <div className="row">
        {videos.map((video: Video) => {
          return (
            <VideoCard key={video.id}
              videoId={video.videoId}
              publishedAt={video.publishedAt}
              channelId={video.channelId}
              channelTitle={video.channelTitle}
              title={video.title}
              thumbnail={video.thumbnail}
              duration={video.duration}
            ></VideoCard>
          );
        })}
      </div>
    </>
  );
};

export default VideoList;

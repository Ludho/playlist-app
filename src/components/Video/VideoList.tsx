import axios from "axios";
import { useEffect, useState } from "react";
import { IVideo } from "../../Manager/Video";
import VideoCard from "./VideoCard";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/videos", {
        withCredentials: true,
      })
      .then((res: any) => {
        setVideos(res.data);
      });
  }, []);

  return (
    <>
      <div className="row">
        {videos.map((video: IVideo) => {
          return (
            <VideoCard key={video.id}
              id={video.id}
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

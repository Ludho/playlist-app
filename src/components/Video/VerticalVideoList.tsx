import axios from "axios";
import { useEffect, useState } from "react";
import { IVideo } from "../../Manager/Video";
import VerticalVideoCard from "./VerticalVideoCard";

interface Props {
    id: number;
}

const VerticalVideoList = ({id}:Props) => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/videos", {
        withCredentials: true,
      })
      .then((res: any) => {
        if(res.data){
            let data = shuffle(res.data);
            setVideos(data);
        }
      });
  }, []);

  return (
    <>
      <div className="flex-column">
        {videos.map((video: IVideo) => {
            if(video.id == id)return;
            return (
                <VerticalVideoCard key={video.id}
                id={video.id}
                videoId={video.videoId}
                publishedAt={video.publishedAt}
                channelId={video.channelId}
                channelTitle={video.channelTitle}
                title={video.title}
                thumbnail={video.thumbnail}
                duration={video.duration}
                ></VerticalVideoCard>
            );
        })}
      </div>
    </>
  );
};

export default VerticalVideoList;

const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };
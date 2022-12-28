import { IVideo } from "../../Manager/Video";
import VideoCard from "./VideoCard";
interface Props {
  videos:IVideo[]
}
const VideoList = ({videos}:Props) => {

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

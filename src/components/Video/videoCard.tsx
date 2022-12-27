import styled from "styled-components";
import { timeSince } from "../../Manager/Time";

interface Props {
  videoId: string;
  publishedAt: string;
  channelId: string;
  channelTitle: string;
  title: string;
  thumbnail: string;
  duration: number;
}

const VideoCard = ({
  videoId,
  publishedAt,
  channelId,
  channelTitle,
  title,
  thumbnail,
  duration,
}: Props) => {
  return (
    <>
      <div className="col-md-3 col-sm-4 col-6">
        <div className="m-1">
        <div className="position-relative">
            <img src={thumbnail} className="rounded-4 img-fluid"></img>
        </div>
        <div className="mx-2">
            <strong><p className="text-truncate m-0">{title}</p></strong>
            <p className="text-truncate m-0">{channelTitle}</p>
            <p className="text-truncate m-0">{timeSince(publishedAt)}</p>
        </div>
        </div>
      </div>
    </>
  );
};


export default VideoCard;

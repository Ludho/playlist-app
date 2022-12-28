import { fancyTimeFormat, timeSince } from "../../Manager/Time";
import { TimerP } from "../../styles/Style";

interface Props {
  id:number;
  videoId: string;
  publishedAt: string;
  channelId: string;
  channelTitle: string;
  title: string;
  thumbnail: string;
  duration: number;
}

const VerticalVideoCard = ({
  id,
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
    <div className="row point-video" onClick={()=>{window.location.href = `/video/${id}`}} style={{cursor:"pointer"}}>
        <div className="col-6" >
            <div className="m-1">
            <div className="position-relative">
                <img alt="thumbnail" src={thumbnail} className="rounded-4 img-fluid"></img>
                <TimerP
                    style={{
                        
                    }}
                    >{fancyTimeFormat(duration)}</TimerP>
            </div>
            </div>
        </div>
        <div className="col-6 my-auto">
                <strong><p className="text-truncate m-0 text-light underline-hover">{title}</p></strong>
                <p className="text-truncate m-0 text-light">{channelTitle}</p>
                <p className="text-truncate m-0 text-light">{timeSince(publishedAt)}</p>
        </div>
    </div>
    </>
  );
};


export default VerticalVideoCard;


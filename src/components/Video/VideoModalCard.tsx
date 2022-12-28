import { fancyTimeFormat } from "../../Manager/Time";


interface Props {
    thumbnail: string;
    title:string;
    duration:number;
  }

const VideoModalCard = ({thumbnail,title,duration}:Props)=>{

    return ( <>
        <div className="flex-column text-center">
            <h4>{title}</h4>
            <img className="img-fluid" src={thumbnail} alt="thumbnail"/>
            <p>{fancyTimeFormat(duration)}</p>
        </div>
    </> );
}

export default VideoModalCard;
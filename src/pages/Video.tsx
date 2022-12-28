import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VerticalVideoList from "../components/Video/VerticalVideoList";
import VideoPlayer from "../components/Video/VideoPlayer";
import { IVideo } from "../Manager/Video";

const Video = ()=>{
    let { id } = useParams();

    const [video, setVideo] = useState<IVideo>();

    useEffect(() => {
      axios
        .get(process.env.REACT_APP_API_URL + "/videos/"+id, {
          withCredentials: true,
        })
        .then((res: any) => {
          setVideo(res.data);
        }).catch(er=>{
            window.location.href = `/playlist`
        });
    }, [id]);
    
    return ( <>
        <div className="row">
            <div className="col-9 vh-100 bg-dark" style={{paddingTop:"70px"}}>
                {video?<VideoPlayer id={video.id} videoId={video.videoId} title={video.title}></VideoPlayer>:
                <p className="text-white">Chargement...</p>
                }
            </div> 
            <div className="col-3 flex-column vh-100" style={{paddingTop:"70px", backgroundColor:"#0F0F0F", overflowY:"scroll"}}>
                <VerticalVideoList></VerticalVideoList>
            </div>
        </div>
    </> );
}

export default Video;
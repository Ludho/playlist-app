import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

interface Props {
    videoId: string;
    title: string;
    id: number;
  }

const VideoPlayer = ({title,videoId,id}:Props)=>{

    const deleteVideo = () => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette vidéo ? Cette action est irréversible.") === false) {
          return;
        }
        axios.delete(process.env.REACT_APP_API_URL+'/videos/'+id,{ withCredentials: true })
          .then(res => {
              alert("Vidéo supprimé.");
              window.location.href = "/playlist"
          }).catch(function (error) {
              alert("Une erreur est survenue");
          });
    }

  return (
    <><div className="px-5 pt-2 pb-5 h-100">
      <iframe
        title={title}
        width="100%"
        height="100%"
        src={"//www.youtube.com/embed/"+videoId}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <strong><label className="text-light m-0">{title}</label></strong>
        <label onClick={()=>{deleteVideo()}}>
            <DeleteIcon className="svg" color='warning'></DeleteIcon>
        </label>
      </div>
    </>
  );
}

export default VideoPlayer;

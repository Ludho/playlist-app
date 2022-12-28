import axios from 'axios';
import { useState } from 'react';
import { Alert, Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { parse, toSeconds } from "iso8601-duration";
import VideoModalCard from './VideoModalCard';

interface Props {
    show: boolean;
    handleClose:Function;
}

const CreateVideoModal = ({show,handleClose}:Props) => {

    const [video, setVideo] = useState<any>(null);
    const [videoId, setVideoId] = useState("");
    const [showValidation, setValidation] = useState(false);
    const [validationMessage, setValidationMessage] = useState("");

    const resetModal = ()=>{
        setVideo(null);
        setVideoId("");
        setValidation(false)
        handleClose();
    }
    const searchVideo = ()=>{
        if(videoId.length===0){
            setValidationMessage("Veuillez entrer le lien");
            setValidation(true);
            return;
        }
        setValidation(false)
        axios.get(process.env.REACT_APP_API_URL+ "/videos/youtube/"+videoId,{withCredentials:true}).then(video=>{
            if(!video.data){
                setValidationMessage("Aucune vidéo trouvé");
                setValidation(true);
                return;
            }
            setValidation(false);
            setVideo(video.data)
        })
    }

    const saveVideo = ()=>{
        const videoData = {
            videoId:videoId,
            publishedAt:video.snippet.publishedAt,
            channelId:video.snippet.channelId,
            channelTitle:video.snippet.channelTitle,
            title:video.snippet.title,
            thumbnail:video.snippet.thumbnails.standard.url,
            description:video.snippet.description,
            duration:toSeconds(parse(video.contentDetails.duration)),
        }
        axios.post(process.env.REACT_APP_API_URL+ "/videos",videoData,{withCredentials:true}).then(video=>{
            resetModal();
        })
    }

    return (
        <>
        <Modal size="lg" show={show} onHide={()=>{resetModal()}}>
            <Modal.Header closeButton>
            <Modal.Title>Ajouter une nouvelle vidéo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {showValidation && <Alert variant="danger">{validationMessage}</Alert>}
                {!video &&
                <InputGroup className="mb-3">   
                    <InputGroup.Text id="basic-addon3">
                        https://www.youtube.com/watch?v=
                    </InputGroup.Text>
                    <Form.Control onChange={(e)=>{setVideoId(e.target.value)}} id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
                }
                {video &&
                <VideoModalCard title={video.snippet.title} thumbnail={video.snippet.thumbnails.standard.url} duration={toSeconds(parse(video.contentDetails.duration))}></VideoModalCard>
                }
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=>{resetModal()}}>
                Annuler
            </Button>
            {video? 
            <Button variant="primary" onClick={()=>{saveVideo()}}>
                Enregistrer
            </Button>:
            <Button variant="primary" onClick={()=>{searchVideo()}}>
                Chercher
            </Button>
            }
            </Modal.Footer>
        </Modal>
        </>
    );
};

export default CreateVideoModal;

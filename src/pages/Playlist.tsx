import AddBoxIcon from '@mui/icons-material/AddBox';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import LeftNavBarButton from '../components/Navbar/LeftNavBarButton';
import CreateVideoModal from '../components/Video/CreateVideoModal';
import { useState } from 'react';
import VideoList from '../components/Video/VideoList';

const Playlist = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
    <CreateVideoModal show={show} handleClose={handleClose} ></CreateVideoModal>
      <div className="row">
        <div className="col-2 flex-column vh-100" style={{paddingTop:"70px", backgroundColor:"#0F0F0F"}}>
          <LeftNavBarButton onClick={()=>{setShow(true)}} text="Ajouter une vidéo" icon={<AddBoxIcon sx={{ color: "white" }}/>}></LeftNavBarButton>
          <LeftNavBarButton text="Work in progress..." icon={<FilterAltIcon sx={{ color: "white" }}/>}></LeftNavBarButton>
          <LeftNavBarButton text="Work in progress..." icon={<Filter1Icon sx={{ color: "white" }}/>}></LeftNavBarButton>
          <LeftNavBarButton text="Work in progress..." icon={<Filter2Icon sx={{ color: "white" }}/>}></LeftNavBarButton>
          <LeftNavBarButton text="Work in progress..." icon={<Filter3Icon sx={{ color: "white" }}/>}></LeftNavBarButton>
          <LeftNavBarButton text="Work in progress..." icon={<Filter4Icon sx={{ color: "white" }}/>}></LeftNavBarButton>
        </div> 
        <div className="col-10 vh-100 bg-dark" style={{paddingTop:"70px", overflowY:"scroll"}}>
          <VideoList></VideoList>
        </div>
      </div>
    </>
  );
};

export default Playlist;

import {AiFillGithub} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="text-center flex-row" style={{paddingTop:"70px"}}>
        <h1 className="text-white" >Yourtube</h1>
        <a href="https://github.com/Ludho/playlist-app">
          <AiFillGithub color="black" className="svg" size={32}></AiFillGithub>
        </a>
        <p className="text-white">Réalisé par Ho Ludwig</p>
      </div>
    </>
  );
};

export default Home;

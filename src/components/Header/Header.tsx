import NavBar from "../Navbar/NavBar";




const Header = () => {
  
    return (<>
    <div className="container p-5 bg-white text-center"
   >
      <div style={{backgroundColor:"lightblue", padding:"2em",marginBottom:"1em"}}>
        <h1 className="text-light">TITLE</h1>
      </div>
    <NavBar></NavBar>
    <hr></hr>
    </div>
    
    
    </>  );
}

export default Header;
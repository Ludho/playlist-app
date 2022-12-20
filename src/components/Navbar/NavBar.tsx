import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import UserManager from '../../Manager/UserManager';


const NavBar = () => {

  let connected = localStorage.getItem("is_connected")?localStorage.getItem("is_connected"):false;
  
  return (<>
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="./logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Yourtube
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/playlist">Vidéos</Nav.Link>
        </Nav>
        {connected ?
          <Navbar.Text>
            Vous êtes connecté en tant que: <a href="/profile">{UserManager.shared.name}</a>
          </Navbar.Text>
          :
          <Nav>
            <Nav.Link href="/register">S'inscrire</Nav.Link>
          </Nav>
        }


      </Container>
    </Navbar>
  </>);
}

export default NavBar;

function useState(arg0: string | null): [any, any] {
  throw new Error('Function not implemented.');
}

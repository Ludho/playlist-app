import { useContext } from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../Manager/AuthContext';

const NavBar = () => {

  const user = useContext(AuthContext).user;
  
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
        {user!=null ?
          <Navbar.Text>
            Vous êtes connecté en tant que: <a href="/profile">{user?.name}</a>
          </Navbar.Text>
          :
          <Nav>
            <Nav.Link href="/login">Se connecter</Nav.Link>
          </Nav>
        }


      </Container>
    </Navbar>
  </>);
}

export default NavBar;
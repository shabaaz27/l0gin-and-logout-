

import '../../App.css';
// import { Button } from "react-bootstrap";
import {Link,useHistory} from "react-router-dom";
import { Navbar, Nav,NavDropdown } from "react-bootstrap";


const  Header =()=> {

  const user =JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();

   function logout(){
    localStorage.clear("");
    history.push('/register');
   }
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto navbar_wrapper">
            {
              localStorage.getItem("user-info") ?
              <>
              <Link to="/Album">AlbumOrder</Link>
              </>
              :
              <>
              <Link to="/Login">Login</Link>
              <Link to="/Register">Register</Link>
              </>
            }
          </Nav>
          {
          localStorage.getItem("user-info")
          ?
           <Nav>
             <NavDropdown title ={user && user.name}>
               <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
             </NavDropdown>
           </Nav>
           :
           null
           }
        </Navbar>
      </div>
    );

}

export default Header;

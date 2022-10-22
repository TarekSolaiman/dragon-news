import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaGoogle,
  FaGithub,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import RightCarousels from "./RightCarousels";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelrGooglLogin = () => {
    providerLogin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <ButtonGroup className="w-100" vertical>
        <Button
          onClick={handelrGooglLogin}
          className="mb-2 "
          variant="outline-primary"
        >
          <FaGoogle />
          Login with Googl
        </Button>
        <Button className="mb-4 " variant="outline-secondary">
          <FaGithub />
          Login with Github
        </Button>
      </ButtonGroup>
      <div>
        <h4>Find US</h4>
        <ListGroup>
          <Button className="mb-2 " variant="outline-secondary">
            <FaFacebook />
            FaceBook
          </Button>
          <Button className="mb-2 " variant="outline-secondary">
            <FaYoutube />
            YouTube
          </Button>
          <Button className="mb-2 " variant="outline-secondary">
            <FaTwitter />
            Twitter
          </Button>
          <Button className="mb-2 " variant="outline-secondary">
            <FaWhatsapp />
            Whatsapp
          </Button>
        </ListGroup>
      </div>
      <div>
        <RightCarousels></RightCarousels>
      </div>
    </div>
  );
};

export default RightSideNav;

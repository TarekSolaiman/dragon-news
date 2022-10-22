import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoRef = useRef(user?.photoURL);
  console.log(user);
  const handlerProfile = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(photoRef.current.value);
  };

  const handelName = (e) => {
    setName(e.target.value);
  };
  return (
    <Form onSubmit={handlerProfile}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          readOnly
          defaultValue={user?.email}
          type="email"
          name="email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handelName}
          type="text"
          defaultValue={name}
          name="name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          ref={photoRef}
          type="text"
          defaultValue={user?.photoURL}
          name="photo"
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Profile;

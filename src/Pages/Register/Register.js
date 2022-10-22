import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Register = () => {
  const { user, createUser, updateNameAndPhoto, verifyEmail } =
    useContext(AuthContext);

  const navigate = useNavigate();
  console.log(user);

  const [error, setError] = useState("");

  const [accept, setAccept] = useState(false);

  const handlerRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);

        updateNameAndPhoto(name, photo)
          .then(() => {})
          .catch((e) => setError(e.message));

        verifyEmail()
          .then(() => {})
          .catch((e) => setError(e.message));

        navigate("/");
        setError("");
        form.reset();
        toast.success("Please verify your email");
      })

      .catch((error) => setError(error.message));
  };

  const hendaleAccept = (e) => {
    setAccept(e.target.checked);
  };

  return (
    <Form onSubmit={handlerRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="name"
          name="name"
          placeholder="Your Name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photo" placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={hendaleAccept}
          label={
            <>
              Accept<Link to="/condition">Terms and condition</Link>
            </>
          }
        />
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accept}>
        Register
      </Button>
    </Form>
  );
};

export default Register;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import H1 from "../components/H1";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import OptionsCities from "../components/OptionsCities";

const NewUser = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const [formErrorName, setFormErrorName] = useState("");
  const [formErrorPassowrd, setFormErrorPassowrd] = useState("");
  const [formErrorEmail, setFormErrorEmail] = useState("");
  const [formErrorCity, setFormErrorCity] = useState("");

  const navigate = useNavigate();

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name: userName,
      email,
      password,
      city,
      profile_picture: image,
    };

    const request = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    const response = await request.json();
    resetErrors();

    if (request.status === 201) {
      navigate("/users");
    } else {
      response.map((res) => {
        if (res.param === "name") {
          return setFormErrorName(res.msg);
        } else if (res.param === "city") {
          return setFormErrorCity(res.msg);
        } else if (res.param === "email") {
          return setFormErrorEmail(res.msg);
        } else if (res.param === "password") {
          return setFormErrorPassowrd(res.msg);
        } else {
          return alert(request.status);
        }
      });
    }
  };

  const resetErrors = () => {
    setFormErrorName("");
    setFormErrorCity("");
    setFormErrorEmail("");
    setFormErrorPassowrd("");
  };

  return (
    <Container>
      <H1>New User</H1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <Input
            label="name"
            placeholder="Name"
            labelId="userName"
            type="text"
            onChange={handleChangeUserName}
            errorMessage={formErrorName}
          />
          <Input
            label="password"
            placeholder="Password"
            labelId="userPassword"
            type="password"
            onChange={handleChangePassword}
            errorMessage={formErrorPassowrd}
          />
          <Input
            label="email"
            placeholder="Email"
            labelId="userEmail"
            type="email"
            onChange={handleChangeEmail}
            errorMessage={formErrorEmail}
          />
          <Input
            label="image"
            placeholder="Image"
            labelId="userImage"
            type="text"
            onChange={handleChangeImage}
          />
          <Select
            label="City"
            labelId="userCity"
            onSelectChange={handleChangeCity}
            selectOptions={OptionsCities}
            errorMessage={formErrorCity}
          />
        </div>
        <Button text="Add new user" type="submit" />
      </form>
    </Container>
  );
};

export default NewUser;

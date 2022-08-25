import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import H1 from "../components/H1";
import H3 from "../components/H3";

const User = () => {
  const [user, setUser] = useState([]);
  const params = useParams();
  const { slug } = params;

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const request = await fetch(`http://localhost:5000/users/${slug}`);
    const response = await request.json();
    setUser(response);
  };

  return (
    <Container>
      <H1>{user.name}</H1>
      <div className="flex sm:flex-row flex-col sm:gap-5">
        <img
          src={user.profile_picture}
          className="h-60 rounded-lg my-5"
          alt={`${user.name}-image`}
        />
        <div className="flex justify-center flex-col">
          <H3 className="capitalize">From : {user.city}</H3>
          <H3>Email : {user.email}</H3>
        </div>
      </div>
    </Container>
  );
};

export default User;

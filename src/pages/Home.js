import { useState, useEffect } from "react";

import H1 from "../components/H1";
import UserCard from "../components/UserCard";
import Grid from "../components/Grid";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const request = await fetch("http://localhost:5000/users");
    const response = await request.json();

    setUsers(response);
  };

  return (
    <>
      <H1>Home</H1>
      <Grid>
        {users.map((user) => (
          <UserCard key={user.slug} user={user} />
        ))}
      </Grid>
    </>
  );
};

export default Home;

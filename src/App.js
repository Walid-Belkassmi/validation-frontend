import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

import Container from "./components/Container";
import Header from "./components/Header";
import NewUser from "./pages/NewUser";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<User />} />
          <Route path="/new-user" element={<NewUser />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;

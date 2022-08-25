import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

import Container from "./components/Container";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<User />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;

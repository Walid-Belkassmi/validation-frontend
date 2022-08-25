import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Container from "./components/Container";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;

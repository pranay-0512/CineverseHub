import { Card } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import BookingPage from "./Pages/BookingPage";
import MoviesPage from "./Pages/MoviesPage";
// use react routers for a single-page-application
function App() {
  return (
    // navabar - this will be a common component in the
    //single-page-application
    <div style={{ backgroundColor: "#ffa400" }}>
      <BrowserRouter>
        <Link to="/">
          <Card className="sticky-nav">
            <h1 className="text-center m-2">Cineverse Hub</h1>
          </Card>
        </Link>
        <Routes>
          <Route exact path="/" element={<MoviesPage />} />
          <Route exact path="/bookmovie/:id" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

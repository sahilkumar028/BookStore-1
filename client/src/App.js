import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import AddBooks from "./pages/AddBooks";
import NoPage from "./pages/NoPage";
import ListBooks from "./pages/ListBooks";
import BooksCard from "./pages/BooksCard";

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="collection" element={<Collection />} />
          <Route path="AddBooks" element={<AddBooks />} />
          <Route path="listBooks" element={<ListBooks />} />
          <Route path="booksCard" element={<BooksCard />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


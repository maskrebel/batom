// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

function Home() {
  return <h2>Home</h2>;
}

function Blogs () {
  return <h2>Blogs</h2>;
}

const Contact = () => {
  return <h1>Contact Me</h1>;
};

function NoPage () {
  return <h1>404</h1>;
}

export default App;

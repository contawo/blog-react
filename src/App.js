import {BrowserRouter, Routes, Route} from "react-router-dom";
import {BlogContext} from "./context/BlogContext.js";
import {useContext} from 'react';
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Profile from "./pages/Profile";
import Socials from './components/Socials';
import JavascriptLan from "./languages/JavascriptLan";
import ReactLan from "./languages/ReactLan";
import Html from "./languages/Html";
import PythonLan from "./languages/PythonLan";
import JavaLan from "./languages/JavaLan";
import Blog from "./components/Blog.jsx";
import ParticleLight from "./utils/ParticleLight";
import ParticleDark from "./utils/ParticleDark";
import PageNotFound from "./components/PageNotFound.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const {theme, isClicked} = useContext(BlogContext);
  return (
    <div className={theme}>
      <BrowserRouter>
        {isClicked ? <ParticleLight /> : <ParticleDark />}
        <Socials />
        <Routes>
          <Route index exact element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />

          <Route path="/blogs/javascript" element={<JavascriptLan />} />
          <Route path="/blogs/javascript/:blogId" element={<Blog />} />

          <Route path="/blogs/reactjs" element={<ReactLan />} />
          <Route path="/blogs/reactjs/:blogId" element={<Blog />} />

          <Route path="/blogs/html" element={<Html />} />
          <Route path="/blogs/html/:blogId" element={<Blog />} />

          <Route path="/blogs/python" element={<PythonLan />} />
          <Route path="/blogs/python/:blogId" element={<Blog />} />

          <Route path="/blogs/java" element={<JavaLan />} />
          <Route path="/blogs/java/:blogId" element={<Blog />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

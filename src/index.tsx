import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './pages/layout';
import './index.css';
import Blogs from './pages/blogs';
import Bookmarks from './pages/bookmarks';
import Contact from './pages/contact';
import Home from './pages/home';
import Projects from './pages/projects';
import reportWebVitals from './reportWebVitals';
import Resume from './pages/resume';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/resume" element={<Resume />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

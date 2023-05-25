import React from "react";
// import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Page404 from "./Components/Page404";
import LearningCantent from "./Components/LearningTools/LearningCantent";
import Review from "./Components/Review/Review";
import VideoNavbar from "./VideoNavbar";
import Notes from "./Components/Notes/Notes";
import SearchBar from "./Components/SearchBar/SearchBar";
import Overview from "./Components/OverView/Overview";
import QandA from "./Components/Q&A/QandA";
import Announcements from "./Components/Announcements/Announcements";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <VideoNavbar />

        <Routes>
          <Route path="/home" element={<VideoNavbar />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/announcement" element={<Announcements/>} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/learningtools" element={<LearningCantent />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/q&a" element={<QandA />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

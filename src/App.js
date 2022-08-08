
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import NoteDrawer from "./SecondPart/NoteDrawer";
import Html from "./SecondPart/NoteChapter/Html";
import CSS from "./SecondPart/NoteChapter/CSS";
import JavaScript from "./SecondPart/NoteChapter/JavaScript";
import Bootstrap from "./SecondPart/NoteChapter/Bootstrap";
import Tailwind from "./SecondPart/NoteChapter/Tailwind";
import ReactJs from "./SecondPart/NoteChapter/ReactNote";
import NodeJs from "./SecondPart/NoteChapter/Node";
import MongoDB from "./SecondPart/NoteChapter/MongoDb";
import Firebase from "./SecondPart/NoteChapter/Firebase";
import Deploy from "./SecondPart/NoteChapter/Deploy";
import Short from "./SecondPart/NoteChapter/Short";
import Navbar from "./FirstPart/Navbar";
import Nothing from "./SecondPart/NoteChapter/Nothing";







function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="drawer" element={<NoteDrawer />}>
          <Route index element={<Nothing></Nothing>}></Route>
          <Route path="html" element={<Html />}></Route>
          <Route path="css" element={<CSS />}></Route>
          <Route path="JavaScript" element={<JavaScript />}></Route>
          <Route path="Bootstrap" element={<Bootstrap />}></Route>
          <Route path="Tailwind" element={<Tailwind />}></Route>
          <Route path="ReactJs" element={<ReactJs />}></Route>
          <Route path="NodeJs" element={<NodeJs />}></Route>
          <Route path="MongoDB" element={<MongoDB />}></Route>
          <Route path="Firebase" element={<Firebase />}></Route>
          <Route path="Deploy" element={<Deploy />}></Route>
          <Route path="Short" element={<Short />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

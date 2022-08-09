
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import NoteDrawer from "./SecondPart/NoteDrawer";

import JavaScript from "./SecondPart/NoteChapter/JavaScript/JavaScript";
import Bootstrap from "./SecondPart/NoteChapter/Bootstrap/Bootstrap";
import Tailwind from "./SecondPart/NoteChapter/Tailwind/Tailwind";
import ReactNote from "./SecondPart/NoteChapter/ReactJs/ReactNote";
import NodeJs from "./SecondPart/NoteChapter/NodeJs/Node";
import MongoDB from "./SecondPart/NoteChapter/MongoDB/MongoDb";
import Firebase from "./SecondPart/NoteChapter/Firebase/Firebase";
import Deploy from "./SecondPart/NoteChapter/Deploy/Deploy";
import Short from "./SecondPart/NoteChapter/Short-Key/Short";
import Navbar from "./FirstPart/Navbar";
import Nothing from "./SecondPart/NoteChapter/Nothing/Nothing";
import Html from "./SecondPart/NoteChapter/Html/Html";

import CSS from "./SecondPart/NoteChapter/CSS/CSS";
import CSSBlog from "./SecondPart/NoteChapter/CSS/CSSBlog";
import SujuUi from "./SecondPart/NoteChapter/CSS/SujuUi";
import BootstrapBlog from "./SecondPart/NoteChapter/Bootstrap/BootstrapBlog";
import BootstrapUi from "./SecondPart/NoteChapter/Bootstrap/BootstrapUi";
import DeployBlog from "./SecondPart/NoteChapter/Deploy/DeployBlog";
import DeployCode from "./SecondPart/NoteChapter/Deploy/DeployCode";
import FirebaseBlogs from "./SecondPart/NoteChapter/Firebase/FirebaseBlogs";
import FirebaseCode from "./SecondPart/NoteChapter/Firebase/FirebaseCode";
import HtmlBlog from "./SecondPart/NoteChapter/Html/HtmlBlog";
import JavaScriptBlog from "./SecondPart/NoteChapter/JavaScript/JavaScriptBlog";
import JavaScriptCode from "./SecondPart/NoteChapter/JavaScript/JavaScriptCode";
import MongoDbBlog from "./SecondPart/NoteChapter/MongoDB/MongoDbBlog";
import MongoDbCode from "./SecondPart/NoteChapter/MongoDB/MongoDbCode";
import TailwindBlog from "./SecondPart/NoteChapter/Tailwind/TailwindBlog";
import TailwindUi from "./SecondPart/NoteChapter/Tailwind/TailwindUi";

import ReactjsBlog from "./SecondPart/NoteChapter/ReactJs/ReactjsBlog";
import ReactjsCode from "./SecondPart/NoteChapter/ReactJs/ReactjsCode";
import ShortKeyBlogs from "./SecondPart/NoteChapter/Short-Key/ShortKeyBlogs";
import NodeBlog from "./SecondPart/NoteChapter/NodeJs/NodeBlog";
import NodeCode from "./SecondPart/NoteChapter/NodeJs/NodeCode";









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
          <Route path="ReactJs" element={<ReactNote/>}></Route>
          <Route path="NodeJs" element={<NodeJs />}></Route>
          <Route path="MongoDB" element={<MongoDB />}></Route>
          <Route path="Firebase" element={<Firebase />}></Route>
          <Route path="Deploy" element={<Deploy />}></Route>
          <Route path="Short" element={<Short />}></Route>
          {/* subjects Page */}
          <Route path="blog" element={<CSSBlog></CSSBlog>}></Route>
          <Route path="UI" element={<SujuUi></SujuUi>}></Route>
          <Route path="BBlog" element={<BootstrapBlog></BootstrapBlog>}></Route>
          <Route path="BUi" element={<BootstrapUi></BootstrapUi>}></Route>
          <Route path="DBlog" element={<DeployBlog></DeployBlog>}></Route>
          <Route path="DCode" element={<DeployCode></DeployCode>}></Route>
          <Route path="FBlog" element={<FirebaseBlogs></FirebaseBlogs>}></Route>
          <Route path="FCode" element={<FirebaseCode></FirebaseCode>}></Route>
          <Route path="FCode" element={<HtmlBlog></HtmlBlog>}></Route>
          <Route path="JBlog" element={<JavaScriptBlog></JavaScriptBlog>}></Route>
          <Route path="JCode" element={<JavaScriptCode></JavaScriptCode>}></Route>
          <Route path="MBlog" element={<MongoDbBlog></MongoDbBlog>}></Route>
          <Route path="MCode" element={<MongoDbCode></MongoDbCode>}></Route>
          <Route path="TBlog" element={<TailwindBlog></TailwindBlog>}></Route>
          <Route path="TUi" element={<TailwindUi></TailwindUi>}></Route>
          <Route path="RBlog" element={<ReactjsBlog></ReactjsBlog>}></Route>
          <Route path="RCode" element={<ReactjsCode></ReactjsCode>}></Route>
          <Route path="SBlog" element={<ShortKeyBlogs></ShortKeyBlogs>}></Route>
          <Route path="NBlog" element={<NodeBlog></NodeBlog>}></Route>
          <Route path="NCode" element={<NodeCode></NodeCode>}></Route>
        
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;

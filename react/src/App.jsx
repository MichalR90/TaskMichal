import "./App.css";
import NavBar from "./components/NavBar";
import BookMark from "./components/Bookmark";
import Features from "./components/Features";
import DownloadTheExtension from "./components/DownloadTheExtension";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Footer from "./components/Footer";
import NavBarBoottom from "./components/NavBarBottom";

function HomePage() {
  return (
    <>
      <div className="main">
        <NavBar></NavBar>
        <BookMark></BookMark>
        <Features></Features>
        <DownloadTheExtension></DownloadTheExtension>
        <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
        <Footer></Footer>
        <NavBarBoottom></NavBarBoottom>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <HomePage></HomePage>
    </>
  );
}

export default App;

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Pagination from "../components/Pagination";
import VideoGrid from "../components/VideoGrid";

const Home = () => {
  return (
    <div>
      <Nav />
      <VideoGrid />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Home;

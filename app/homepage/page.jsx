import { homepageText } from "@/actions/home-page";
import Navbar from "./components/navbar";
import BodySection from "./components/BodySection";

const HomePage = () => {
  return (
    <div className=" flex flex-col h-screen custom-bg-grey100">
      <Navbar navbarText={homepageText.navbarText} />
      <BodySection cardText={homepageText.cardText}/>
    </div>
  );
};

export default HomePage;

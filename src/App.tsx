import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Services from "@/scenes/services";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Samskaras from "./scenes/samskaras";
import Pujas from "./scenes/pujas";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='app bg-gray-20'>
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Services setSelectedPage={setSelectedPage}/>
      <Samskaras setSelectedPage={setSelectedPage}/>
      <Pujas setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App;

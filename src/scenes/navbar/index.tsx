import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Logo2 from "@/assets/Logo-2.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>

        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}> 
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>

                    {/* left side of navbar */}
                    <AnchorLink 
                        className="cursor-pointer"
                        onClick={() => setSelectedPage(SelectedPage.Home)}
                        href={`#${SelectedPage.Home}`}
                    >
                        <img src={Logo2} alt="Logo" width={125}/>
                    </AnchorLink>

                    {/* right side of navbar */}
                    {isAboveMediumScreens ? (
                    <div className={`${flexBetween} w-full`}>
                        {/* inner left side of navbar right */}
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Services" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Samskaras" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Pujas" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Outreach" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Gallery" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                        {/* inner right side of navbar right */}
                        <div className={`${flexBetween}`}>
                            <ActionButton setSelectedPage={setSelectedPage}>Contact Us</ActionButton>
                        </div>
                    </div>
                    ) : (
                       <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <Bars3Icon className="h-6 w-6 text-white"/>
                       </button> 
                    )}

                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[250px] bg-primary-100 drop-shadow-xl">
                {/* close icon */}
                <div className="flex justify-end p-6">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                    </button>
                </div>

                {/* menu items */}
                <div className="ml-[33%] flex flex-col gap-8 text-lg">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Services" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Samskaras" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Pujas" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Outreach" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Gallery" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>
        )}

    </nav>
  )
}

export default Navbar
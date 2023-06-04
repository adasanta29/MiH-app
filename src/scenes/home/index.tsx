import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';

import Logo from '@/assets/Logo-2.png';
import Hanish from '@/assets/Hanish.jpg';
import HomeBg from '@/assets/mihbg.png';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        
        {/* IMAGE AND MAIN HEADER */}
        <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >

            {/* Main Header */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* headings */}
                <motion.div className='md:-mt-20'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{ hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
                >
                    <div className='relative'> {/* need div inside this for absolute positioned lower-opacity image */}
                        <div className='before:absolute before:-top-[14rem] before:-left-[11rem] before:z-[-1] md:before:content-havan md:before:scale-[90%] before:opacity-[10%]'>
                            <img src={Logo} alt="logo" width={400}/>
                        </div>
                    </div>

                    <p className='mt-8 text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </motion.div>

                {/* Actions */}

                <motion.div className='mt-8 flex items-center gap-8'>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Contact Us
                    </ActionButton>

                    <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                        onClick={() => setSelectedPage(SelectedPage.Services)}
                        href={`#${SelectedPage.Services}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* Image */}
            <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md-justify-items-end'>
                <img src={HomeBg} alt="home-page-graphic" />
            </div>

        </motion.div>

        {isAboveMediumScreens && (
            <div className='h-[150px] w-full bg-primary-100 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex items-center justify-center gap-[16rem]'>
                        <p className='text-primary-500 font-bold text-3xl opacity-50 font-eaglelake'>PEACE</p>
                        <p className='text-primary-500 font-bold text-3xl opacity-50 font-eaglelake'>TRANQUILITY</p>
                        <p className='text-primary-500 font-bold text-3xl opacity-50 font-eaglelake'>LOVE</p>
                    </div>
                </div>
            </div>
        )}

    </section>
  )
}

export default Home

/* 
z-10 mt-[20rem] md:basis-3/5
before:absolute before:-top-[23.5rem] before:-left-[11rem] before:z-[-1] md:before:content-havan md:before:scale-[80%] before:opacity-[20%] */
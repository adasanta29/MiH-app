import {RiServiceLine} from 'react-icons/ri';
import {GiPrayer} from 'react-icons/gi';
import {RiMentalHealthLine} from 'react-icons/ri';
import { SelectedPage, ServiceType } from '@/shared/types';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Service from './Service';
import ServicePic from '@/assets/services-pic2.png'

const services: Array<ServiceType> = [
    {
        icon: <GiPrayer/>,
        title: "Pujas",
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
    },
    {
        icon: <RiMentalHealthLine/>,
        title: "Samskaras",
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
    },
    {
        icon: <RiServiceLine/>,
        title: "Outreach",
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Services = ({setSelectedPage}: Props) => {
  return (
    <section id='services'
        className='mx-auto min-h-auto w-5/6 py-20' /* original = py-20 */
    >

        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        >

            {/* Header */}
            <motion.div
                className='md:my-5 flex justify-between'
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
            >
                <div className='md:w-3/5'>
                    <HText>OUR SERVICES</HText>
                    <p className='my-5 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                

            </motion.div>

            {/* Services */}

            <motion.div 
                className='md:flex items-center justify-between gap-8 mt-5'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}
            >
                {services.map((service: ServiceType) => (
                    <Service
                        key={service.title}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

        </motion.div>

    </section>
  )
}

export default Services;
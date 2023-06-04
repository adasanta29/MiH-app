import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import data from './p-data.json';
import PujaModal from './PujaModal.jsx';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Pujas = ({setSelectedPage}: Props) => {
  return (
    <section 
        id="pujas"
        className="mx-auto min-h-full w-5/6 py-40"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Pujas)}
        >

            {/* HEADER */}
            <motion.div className="md:my-5 md:w-3/5"
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
            >
                <HText>PUJAS & OTHER RITUALS</HText>
                <p className="my-5 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </motion.div>
            {/*content */}
            <motion.div className="w-4/6 grid grid-cols-3 mx-auto gap-[6rem] mt-[6rem]">
                {data.map((item) => {
                    return <PujaModal key={item.id} {...item}/>
                })}
            </motion.div>
        </motion.div>

    </section>
  )
}

export default Pujas
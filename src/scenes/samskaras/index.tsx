import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import Carousel from './Carousel';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Samskaras = ({setSelectedPage}: Props) => {
  return (
    <section id='samskaras' className='w-full bg-primary-100 py-40'>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Samskaras)}
        >

            <motion.div
                className='mx-auto w-5/6'
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
            >
                <div className='md:w-3/5'>
                    <HText>
                        SAMSKARAS
                    </HText>
                    <p className='py-5 text-sm'>
                        Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                        tellus quam porttitor. Mauris velit euismod elementum arcu neque
                        facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                        enim mattis odio in risus nunc.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
            >
                <Carousel/>
            </motion.div>

        </motion.div>
    </section>
  )
}

export default Samskaras
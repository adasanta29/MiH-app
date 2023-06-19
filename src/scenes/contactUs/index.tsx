import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import HText from "@/shared/HText";
import Hanish from "@/assets/Hanish.jpg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {

    const inputStyles = 'w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-black mb-5'

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

  return (
    <section id="contactus" className="w-full py-40 mx-auto bg-primary-100">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)} className="w-5/6 mx-auto">

            {/* HEADER */}
            <motion.div
                className="md:w-3/5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
            >
                <HText>
                    <span className="text-green-500">REACH OUT</span> TO CHAT OR INQUIRE
                </HText>
                <p className="my-5 text-sm">
                    Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                    sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                    adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                </p>
            </motion.div>

            {/* FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: {opacity: 0, y: -50}, visible: {opacity: 1, y: 0}}}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        method="POST"
                        action=""
                    >
                        <input
                            className={inputStyles}
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === 'required' && 'This field is required'}
                                {errors.name.type === 'maxLength' && 'Max Length is 100 characters'}
                            </p>
                        )}

                        <input
                            className={inputStyles}
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-primary-500">
                                {errors.email.type === 'required' && 'This field is required'}
                                {errors.email.type === 'pattern' && 'This is not a valid email address.'}
                            </p>
                        )}

                        <div>
                            <h3 className="pb-1 mx-1">What Services are you contacting us about?</h3>
                            <select
                                className={inputStyles}
                                placeholder="What Services are you contacting us about?"
                                {...register("What Services are you contacting us about?", {
                                    required: true
                                })}
                            >
                                <option value="Pujas & Other Rituals">Pujas & Other Rituals</option>
                                <option value="Samskaras">Samskaras</option>
                                <option value="Outreach">Outreach</option>
                                <option value="General Enquiry">General Enquiry</option>
                            </select>
                        </div>

                        <textarea
                            className={inputStyles}
                            placeholder="MESSAGE"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === 'required' && 'This field is required'}
                                {errors.message.type === 'maxLength' && 'Max Length is 2000 characters'}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                        >
                            SUBMIT
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }} variants={{ hidden: {opacity: 0, y: -50}, visible: {opacity: 1, y: 0}}}
                >
                    <img src={Hanish} alt="" className="rounded-md w-[80%]"/>
                </motion.div>

            </div>

        </motion.div>
    </section>
  )
}

export default ContactUs
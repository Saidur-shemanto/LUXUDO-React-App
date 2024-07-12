import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const BulletInfo = (props) => {
    useEffect(() => {
        AOS.init();

    }, [])
    return (
        <ul className="timeline timeline-vertical gap-5 w-full ">
            <li className="grid gap-10 !grid-cols-none" data-aos="fade-up"  >

                <div className="timeline-middle"><p className="rounded-full bg-black text-white w-10 h-10 flex justify-center items-center" >1</p>

                </div>
                <div className="timeline-end "><div>
                    <p className="font-bold text-xl">Buy Home</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium autem magni numquam reprehenderit eum assumenda eius et ex modi?</p>
                </div></div>

            </li>
            <li className="grid gap-10 !grid-cols-none" data-aos="fade-up" >


                <div className="timeline-middle">
                    <p className="rounded-full bg-black text-white w-10 h-10 flex justify-center items-center" >2</p>
                </div>
                <div className="timeline-end "><div>
                    <p className="font-bold text-xl">Buy Home</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium autem magni numquam reprehenderit eum assumenda eius et ex modi?</p>
                </div></div>

            </li>
            <li className="grid gap-10 !grid-cols-none" data-aos="fade-up" >


                <div className="timeline-middle">
                    <p className="rounded-full bg-black text-white w-10 h-10 flex justify-center items-center">3</p>
                </div>
                <div className="timeline-end "><div>
                    <p className="font-bold text-xl">Buy Home</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium autem magni numquam reprehenderit eum assumenda eius et ex modi?</p>
                </div></div>

            </li>
            <li className="grid gap-10 !grid-cols-none" data-aos="fade-up">


                <div className="timeline-middle">
                    <p className="rounded-full bg-black text-white w-10 h-10 flex justify-center items-center">4</p>
                </div>
                <div className="timeline-end "><div>
                    <p className="font-bold text-xl">Buy Home</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium autem magni numquam reprehenderit eum assumenda eius et ex modi?</p>
                </div></div>

            </li>
            <li className="grid gap-10 !grid-cols-none" data-aos="fade-up" >

                <div className="timeline-middle">
                    <p className="rounded-full bg-black text-white w-10 h-10 flex justify-center items-center">5</p>
                </div>
                <div className="timeline-end ">
                    <div>
                        <p className="font-bold text-xl">Buy Home</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium autem magni numquam reprehenderit eum assumenda eius et ex modi?</p>
                    </div>
                </div>
            </li>
        </ul>
    )
};

export default BulletInfo;

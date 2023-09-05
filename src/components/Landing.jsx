import Lander from "./GlobeGoods(3).svg";
import { motion } from "framer-motion"
import Shopping from "./undraw_shopping_bags_gmnk.svg";
import Shopping2 from "./undraw_empty_cart_co35.svg";
function Landing() {

    return (
        <div className="bg-[#7973d4]   flex flex-col items-center h-[100vh]">
            <div className="   flex flex-col w-full h-full  ">
                <motion.img 
                  initial={{scale: 0.5, opacity: 0}} 
                  animate={{scale: 1, opacity: 1}}
                  transition={{delay: 2, duration: 2}}
                src={Lander} />
                <div className="flex mt-auto w-full justify-between">
                  <motion.div 
                    whileHover={{
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400, damping: 17},
                      y: -50, x: 50
                    }}
                    whileTap={{
                      scale: 0.9,
                      transition: { type: "spring", stiffness: 400, damping: 17},
                    }}
                    
                    initial={{x: -400, opacity: 0}} 
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 2, duration: 2}} 
                    className="w-[23.9%]"><motion.img src={Shopping} /></motion.div>
                  <motion.div 
                    whileHover={{
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400, damping: 17},
                      y: -50, x: -50
                    }}
                    whileTap={{
                      scale: 0.9,
                      transition: { type: "spring", stiffness: 400, damping: 17},
                    }}
                    
                    initial={{x: 400, opacity: 0}} 
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 2, duration: 2}} 
                    className="w-[20%]"><motion.img src={Shopping2} /></motion.div>
                 
                </div>
            </div>

        </div>);
}

export default Landing;
import { motion } from 'framer-motion';

import {
  homeOne,
  homeTitleLeft,
  homeTitleRight,
} from '../../../../assets/images';
import { GetInTouchBtn } from '../../../UI/GetInTouchBtn/GetInTouchBtn';
import { slideInVariants } from '../../../utils/animation';

const HomeFirst = () => {
  return (
    <div
      className="home-first"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(23, 36, 35, 0.9) 38%,  
            rgba(23, 36, 35, 0.8) 49%,  
            rgba(23, 36, 35, 0.6) 57%, 
            rgba(23, 36, 35, 0.3) 73%,  
            rgba(23, 36, 35, 0) 100%    
          ),
          url(${homeOne})
        `,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="wrapper">
        <motion.div
          className="home-first-inner"
          variants={slideInVariants('right', 0.6, 50, true)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div
            className="home-first-text"
            variants={slideInVariants('right', 0.6, 50, true)}
            custom={0}
          >
            <img src={homeTitleLeft} />
            Award Wining Law Firm
            <img src={homeTitleRight} />
          </motion.div>

          <motion.h1
            variants={slideInVariants('right', 0.6, 50, true)}
            custom={1}
          >
            Advocating Justice, Delivering Results
          </motion.h1>

          <motion.p
            variants={slideInVariants('right', 0.6, 50, true)}
            custom={2}
          >
            Our law firm combines legal expertise with personalized solutions to
            protect your rights and achieve your goals.
          </motion.p>

          <motion.div
            variants={slideInVariants('right', 0.6, 50, true)}
            custom={3}
          >
            <GetInTouchBtn />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export { HomeFirst };

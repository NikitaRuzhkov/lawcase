import { motion } from 'framer-motion';

import './MyTitle.css';

import { slideInVariants } from '../../utils/animation';

const MyTitle = ({ title, subtitle, isDefault }) => {
  return (
    <div className="my-title-wrapper">
      {isDefault ? (
        <>
          <motion.h1
            className="my-title"
            variants={slideInVariants('right', 0.6, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={0}
          >
            {title}
          </motion.h1>
          <motion.span
            className="my-subtitle"
            variants={slideInVariants('right', 0.6, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={1}
          >
            {subtitle}
          </motion.span>
        </>
      ) : (
        <>
          <motion.h1
            className="my-title"
            variants={slideInVariants('right', 0.6, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={0}
          >
            Reach out
          </motion.h1>
          <motion.span
            className="my-subtitle"
            variants={slideInVariants('right', 0.6, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={1}
          >
            Our experienced attorney are here to answer any questions
          </motion.span>
        </>
      )}
    </div>
  );
};

export { MyTitle };

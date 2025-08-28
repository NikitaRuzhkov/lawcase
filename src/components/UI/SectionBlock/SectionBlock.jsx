import { motion } from 'framer-motion';

import { GetInTouchBtn } from '../../UI/GetInTouchBtn/GetInTouchBtn';
import { MyTitle } from '../../UI/MyTitle/MyTitle';

import './SectionBlock.css';

import { slideInVariants } from '../../utils/animation';

const MyMotionGetInTouchBtn = motion.create(GetInTouchBtn);

const SectionBlock = ({
  title,
  subtitle,
  isBtn = true,
  isDate = false,
  date,
  isDefault = true,
  onBtnClick,
}) => {
  return (
    <div className="section-block">
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        variants={slideInVariants('right', 0.6, 50, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <MyTitle title={title} subtitle={subtitle} isDefault={isDefault} />
        {isBtn && (
          <MyMotionGetInTouchBtn
            onBtnClick={onBtnClick}
            initial="hidden"
            whileInView="visible"
            variants={slideInVariants('right', 0.6, 50, false)}
          />
        )}
        {isDate && (
          <motion.span
            className="section-date"
            variants={slideInVariants('right', 0.6, 50, true)}
          >
            {date}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

export { SectionBlock };

import { GetInTouchBtn } from '../../UI/GetInTouchBtn/GetInTouchBtn';
import { MyTitle } from '../../UI/MyTitle/MyTitle';

import './SectionBlock.css';

const SectionBlock = ({ title, subtitle }) => {
  return (
    <div className="section-block">
      <MyTitle title={title} subtitle={subtitle} />
      <GetInTouchBtn />
    </div>
  );
};

export { SectionBlock };

import { errorImg } from '../../../assets/images';

import './ErrorPage.css';

import { MyLink } from '../../UI/MyLink/MyLink';
import { SectionBlock } from '../../UI/SectionBlock/SectionBlock';

const ErrorPage = () => {
  return (
    <>
      <div className="error-paage">
        <img src={errorImg} alt="Error" />
        <h1>Looks like here is nothing</h1>
        <MyLink to="/">Back To Home</MyLink>
      </div>
      <SectionBlock isDefault={false} />
    </>
  );
};

export { ErrorPage };

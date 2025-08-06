import './MyTitle.css';

const MyTitle = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="my-title">{title}</h1>
      <span className="my-subtitle">{subtitle}</span>
    </>
  );
};

export { MyTitle };

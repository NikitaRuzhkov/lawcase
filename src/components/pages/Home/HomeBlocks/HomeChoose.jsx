import { GetInTouchBtn } from '../../../UI/GetInTouchBtn/GetInTouchBtn';

const HomeChoose = () => {
  const results = [
    {
      id: 1,
      number: '20+',
      text: 'Years Of Law Experience',
    },
    {
      id: 2,
      number: '2+',
      text: 'Happy Clients',
    },
    {
      id: 3,
      number: '18+',
      text: 'Awards Winner',
    },
  ];
  return (
    <div className="home-choose">
      <div className="home-choose-inner">
        <h1>Why Choose Us</h1>
        <p>
          We offer a comprehensive array of legal services tailored to meet the
          diverse needs of our clients.
        </p>
        <GetInTouchBtn />
      </div>
      <div className="home-choose-number">
        {results.map(result => (
          <div className="home-choose-about" key={result.id}>
            <span>{result.number}</span>
            <p>{result.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { HomeChoose };

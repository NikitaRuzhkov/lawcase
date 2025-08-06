import { quoteUp } from '../../../../assets/images';
import { customers } from '../../../data/customres';
import { GetInTouchBtn } from '../../../UI/GetInTouchBtn/GetInTouchBtn';
import { MyTitle } from '../../../UI/MyTitle/MyTitle';

const HomeCustomers = () => {
  return (
    <div className="home-customers">
      <MyTitle title="Testimonials" subtitle="Happy Customers" />
      <div className="home-customers-items">
        {customers.map(customer => (
          <div className="home-customers-item" key={customer.id}>
            <img src={customer.image} alt={customer.name} />
            <div className="home-customers-about">
              <div className="quote">
                <img src={quoteUp} alt="quote-up" />
              </div>
              <p>{customer.about}</p>
              <h3>{customer.name}</h3>
              <span>{customer.work}</span>
            </div>
          </div>
        ))}
      </div>
      <GetInTouchBtn />
    </div>
  );
};

export { HomeCustomers };

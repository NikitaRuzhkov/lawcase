import { Link } from 'react-router-dom';

import { aroowRight } from '../../../../assets/images';
import { services } from '../../../data/services';

const ServicesItems = ({ limit }) => {
  const displayedServices = limit ? services.slice(0, limit) : services;
  return (
    <div className="services">
      <div
        className="serveices-inner"
        style={{ textAlign: 'center', marginBottom: '50px' }}
      >
        <div className="services-items">
          {displayedServices && displayedServices.length > 0 ? (
            displayedServices.map(service => (
              <div className="services-item" key={service.id}>
                <img src={service.image} alt={service.title} />
                <div className="services-content">
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <Link className="service-btn" to={`/services/${service.id}`}>
                  <img src={aroowRight} alt="arrow-right" />
                </Link>
              </div>
            ))
          ) : (
            <p>Services are loading or not enough services to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { ServicesItems };

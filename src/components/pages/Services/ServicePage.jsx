import { useParams } from 'react-router-dom';

import { services } from '../../data/services';

const ServicePage = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === Number(id));
  return (
    <div>
      <h2>{service.title}</h2>
    </div>
  );
};

export { ServicePage };

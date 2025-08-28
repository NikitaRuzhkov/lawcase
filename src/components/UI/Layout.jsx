import { Outlet } from 'react-router-dom';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { ScrollToTop } from './ScrollToTop/ScrollToTop';

const Layout = () => {
  return (
    <div className="layout">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export { Layout };

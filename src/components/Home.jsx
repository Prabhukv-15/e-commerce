import { Sidebar } from "./sidebar";
import { Banners } from "./Banner";
import { Footer } from "./footer";
import { Cards } from "./Cards";
import {SectionSubHeader} from "./SectionSubHeader";
import { DummyPopupAdvertisment } from "./DummyPopupAdvertisment";

export const Home = () => {
  return (
    <>
      {/* <Headers /> */}
      <Sidebar />
      <Banners />
      <Cards />
      <DummyPopupAdvertisment />
      <SectionSubHeader />
      {/* <Explore /> */}
      {/* <HeaderComponent /> */}
      <Footer />
    </>
  );
};


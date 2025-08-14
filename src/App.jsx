// import "./App.css";
import { Register } from "./components/register";
import { Login } from "./components/login";
import { Route, Routes, useLocation } from "react-router-dom";
import { Headers } from "./components/headers";
import { Home } from "./components/Home";
import { Sidebar } from "./components/sidebar";
import { Navbar } from "./components/nav";
import { useState } from "react";
import { Category } from "./components/Category";
import "bootstrap/dist/css/bootstrap.min.css";
import { Privacy } from "./components/Privacy";
import { CartProvider } from "./context/CartContext";
import { About } from "./components/About";
import { Documentation } from "./components/Documentation";
import { TopRatings } from "./components/TopRatings";
import { FlashOffers } from "./components/FlashOffers";
import { OrderList } from "./components/OrderList";
import { Fashion } from "./components/Fashion";
import { Payment } from "./components/payment";
import { Footer } from "./components/footer";
import { Explore } from "./components/Explore";
import { SectionSubHeader } from "./components/SectionSubHeader";
import { Logout } from "./components/Logout";
import { Settings } from "./components/Settings";
import { UserProvider } from "./context/UserContext";
import { ContactUs } from "./components/ContactUs";
import { LinkPage } from "./components/LinkPage";
import { ShoppingPage } from "./components/ShoppingPage";
import { Homepage } from "./components/Homepage";
import {ContactUsPopup} from "./components/ContactUsPopup";
import {DummyPopupAdvertisment } from "./components/DummyPopupAdvertisment";
import { Account } from "./components/Account";

function App() {
  /* <Login /> */
  const [loguser, setLoguser] = useState(null);
  const location = useLocation();
  const hideSideBarPath = ["/", "/register", "/login"];
  // const showNavbar = location.pathname !== "/";
  const hideSidebarPaths = !hideSideBarPath.includes(location.pathname);

  return (
    <UserProvider>
      <CartProvider>
        <>
          <div>
            {hideSidebarPaths && (
              <>
                <Navbar user={loguser} />
                <Sidebar />
                <DummyPopupAdvertisment />
                <ContactUsPopup />
              </>
            )}
            {/* <Navbar ></Navbar> */}
            {/* <Login ></Login> */}
          </div>
          <Routes>
            <Route
              path="/login"
              onLogin={setLoguser}
              element={<Login />}
            ></Route>
            <Route path="/" element={<Register />}></Route>
            <Route path="/category/:category" element={<Category />} />
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/homes" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/headers" element={<Headers />}></Route>
            <Route path="/" element={<Sidebar />}></Route>
            <Route path="/toprating" element={<TopRatings />}></Route>
            <Route path="/flashoffers" element={<FlashOffers />}></Route>
            <Route path="/documentation" element={<Documentation />}></Route>
            <Route path="/orders" element={<OrderList />}></Route>
            <Route path="/searchOrders" element={<OrderList />}></Route>
            <Route path="/fashion/:category" element={<Fashion />}></Route>
            <Route path="/footer" element={<Footer />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/section" element={<SectionSubHeader />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/setting" element={<Settings />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/link" element={<LinkPage />}></Route>
            <Route path="/shopping" element={<ShoppingPage />}></Route>
            <Route path="/account" element={<Account />}></Route>

            {/* <Route path="/category" element={<category />}></Route> */}
          </Routes>
        </>
      </CartProvider>
    </UserProvider>
  );
}

export default App;


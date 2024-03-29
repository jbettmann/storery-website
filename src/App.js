import { useState, useEffect, useRef } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { InvestmentProp } from "./components/InvestmentProp/InvestmentProp";
import { Remodel } from "./components/Remodel/Remodel";
import { BuySell } from "./components/Buy_Sell/BuySell";
import { About } from "./components/About/About";
import { Resources } from "./components/Resources/Resources";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { NavContext } from "./components/Context/Context";
import {
  getFooter,
  getHome,
  getNav,
  getFAQ,
  getTestimonials,
} from "./Functions/Functions";

import { SingleBlog } from "./components/Blog/SingleBlog";
import { Spinner } from "./components/Spinner/Spinner";

function App() {
  const navRef = useRef(null);

  const [nav, setNav] = useState([
    { slug: { current: "" } },
    { slug: { current: "" } },
    { slug: { current: "" } },
    { slug: { current: "" } },
    { slug: { current: "" } },
    { slug: { current: "" } },
  ]);
  const [home, setHome] = useState(null);

  const [faqs, setFAQ] = useState([]);
  const [testimonials, setTestimonials] = useState(null);
  const [footer, setFooter] = useState(null);
  const [seHabla, setSeHabla] = useState("");

  const [buySell, invest, remodel, about, resources, contact] = [...nav];

  useEffect(() => {
    getNav(setNav);
    getHome(setHome);
    getFAQ(setFAQ);
    getFooter(setFooter);
    getTestimonials(setTestimonials);
  }, []);

  if (!home || !nav) return <Spinner />;

  return (
    home &&
    nav && (
      <NavContext.Provider value={navRef.current}>
        <Router>
          <NavBar navRef={navRef} nav={nav} logo={home.logo} />
          <Routes>
            <Route
              element={
                <Home
                  home={home}
                  contact={contact.slug.current}
                  setSeHabla={setSeHabla}
                />
              }
              exact
              path="/"
            />
            <Route
              element={<BuySell faqs={faqs} testimonials={testimonials} />}
              path={`/${buySell.slug.current}`}
            />
            <Route
              element={
                <InvestmentProp
                  remodel={remodel}
                  faqs={faqs}
                  testimonials={testimonials}
                  rentalListings={footer?.socialLinks}
                />
              }
              path={`/${invest.slug.current}`}
            />
            <Route
              element={
                <Remodel
                  contact={contact.slug.current}
                  testimonials={testimonials}
                  faqs={faqs}
                />
              }
              path={`/${remodel.slug.current}`}
            />
            <Route
              element={<About contact={footer} testimonials={testimonials} />}
              path={`/${about.slug.current}`}
            />
            <Route
              element={<Resources faqs={faqs} />}
              path={`/${resources.slug.current}`}
            />
            <Route
              element={<SingleBlog navRef={navRef} />}
              path={`/${resources.slug.current}/blog/:slug`}
            />
            <Route
              element={<Contact footer={footer} seHabla={seHabla} />}
              path={`/${contact.slug.current}`}
            />
          </Routes>
          <Footer footer={footer} logo={home.logo} />
        </Router>
      </NavContext.Provider>
    )
  );
}

export default App;

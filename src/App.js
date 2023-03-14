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
import { getFooter, getHome } from "./Functions/Functions";
import { getNav } from "./Functions/Functions";
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
  const [footer, setFooter] = useState(null);
  const [seHabla, setSeHabla] = useState("");

  const [buySell, invest, remodel, about, resources, contact] = [...nav];

  useEffect(() => {
    getNav(setNav);
    getHome(setHome);
    getFooter(setFooter);
  }, []);

  if (!home || !nav) return <Spinner />;

  return (
    home &&
    nav && (
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
          <Route element={<BuySell />} path={`/${buySell.slug.current}`} />
          <Route
            element={<InvestmentProp />}
            path={`/${invest.slug.current}`}
          />
          <Route element={<Remodel />} path={`/${remodel.slug.current}`} />
          <Route element={<About />} path={`/${about.slug.current}`} />
          <Route element={<Resources />} path={`/${resources.slug.current}`} />
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
    )
  );
}

export default App;

import { useState, useEffect } from "react";
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

import sanityClient from "./client";

function App() {
  const [nav, setNav] = useState([
    { slug: { current: "" } },
    { slug: { current: "" } },
    { slug: { current: "" } },
    { slug: { current: "" } },
    { slug: { current: "" } },
    { slug: { current: "" } },
  ]);
  const [logo, setLogo] = useState("");

  const [buySell, invest, remodel, about, resources, contact] = [...nav];

  const getLogo = async () => {
    const logoUrl = `*[_type == 'home']{
      logo,  
      }`;
    const res = await sanityClient.fetch(logoUrl);
    const data = res[0];
    setLogo(data);
  };

  useEffect(() => {
    getLogo();
    sanityClient
      .fetch(
        `*[_type == 'nav']{
        title,
        slug,
        id,
      }`
      )
      .then((d) => d.sort((a, b) => a.id - b.id))
      .then((data) => setNav(data))
      .catch(console.error);
  }, []);

  return (
    <Router>
      <NavBar nav={nav} logo={logo.logo} />
      <Routes>
        <Route
          element={<Home logo={logo} contact={contact.slug.current} />}
          exact
          path="/"
        />
        <Route element={<BuySell />} path={`/${buySell.slug.current}`} />
        <Route element={<InvestmentProp />} path={`/${invest.slug.current}`} />
        <Route element={<Remodel />} path={`/${remodel.slug.current}`} />
        <Route element={<About />} path={`/${about.slug.current}`} />
        <Route element={<Resources />} path={`/${resources.slug.current}`} />
        <Route element={<Contact />} path={`/${contact.slug.current}`} />
      </Routes>
      <Footer logo={logo.logo} />
    </Router>
  );
}

export default App;

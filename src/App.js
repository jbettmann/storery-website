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

  const [buySell, invest, remodel, about, resources, contact] = [...nav];

  useEffect(() => {
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

  console.log(nav);
  return (
    <Router>
      <NavBar nav={nav} />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<BuySell />} path={`/${buySell.slug.current}`} />
        <Route element={<InvestmentProp />} path={`/${invest.slug.current}`} />
        <Route element={<Remodel />} path={`/${remodel.slug.current}`} />
        <Route element={<About />} path={`/${about.slug.current}`} />
        <Route element={<Resources />} path={`/${resources.slug.current}`} />
        <Route element={<Contact />} path={`/${contact.slug.current}`} />
        {/* <Route element={<Project />} path="/project" /> */}
      </Routes>
    </Router>
  );
}

export default App;

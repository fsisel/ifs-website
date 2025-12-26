import React from "react";

import "./style.css";

import homeEn from "./pages/home_en";
import aboutUsEn from "./pages/about_us_en";
import sponsorsEn from "./pages/sponsors_en";
import contactsEn from "./pages/contacts_en";
import privacyPolicyEn from "./pages/privacy_policy_en";
import Ifs04En from "./pages/ifs04_en";
import Ifs05En from "./pages/ifs05_en";

import homePt from "./pages/home_pt";
import aboutUsPt from "./pages/about_us_pt";
import sponsorsPt from "./pages/sponsors_pt";
import contactsPt from "./pages/contacts_pt";
import privacyPolicyPt from "./pages/privacy_policy_pt";
import Ifs04Pt from "./pages/ifs04_pt";
import Ifs05Pt from "./pages/ifs05_pt";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./tools/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={homeEn} />
        <Route exact path="/en" component={homeEn} />
        <Route path="/en/about_us" component={aboutUsEn} />
        <Route path="/en/sponsors" component={sponsorsEn} />
        <Route path="/en/contacts" component={contactsEn} />
        <Route path="/en/privacy_policy" component={privacyPolicyEn} />
        <Route path="/en/ifs04" component={Ifs04En} />
        <Route path="/en/ifs05" component={Ifs05En} />

        <Route exact path="/pt" component={homePt} />
        <Route path="/pt/about_us" component={aboutUsPt} />
        <Route path="/pt/sponsors" component={sponsorsPt} />
        <Route path="/pt/contacts" component={contactsPt} />
        <Route path="/pt/privacy_policy" component={privacyPolicyPt} />
        <Route path="/pt/ifs04" component={Ifs04Pt} />
        <Route path="/pt/ifs04" component={Ifs05Pt} />
      </Switch>
    </Router>
  );
}

export default App;

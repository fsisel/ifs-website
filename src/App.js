import React from 'react';
import './style.css';

import homeEn from './pages/home_en';
import aboutUsEn from './pages/about_us_en';
import ifs03En from './pages/ifs03_en';
import sponsorsEn from './pages/sponsors_en';
import contactsEn from './pages/contacts_en';
import privacyPolicyEn from './pages/privacy_policy_en';

import homePt from './pages/home_pt';
import aboutUsPt from './pages/about_us_pt';
import ifs03Pt from './pages/ifs03_pt';
import sponsorsPt from './pages/sponsors_pt';
import contactsPt from './pages/contacts_pt';
import privacyPolicyPt from './pages/privacy_policy_pt';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={homeEn} />
        <Route exact path="/en" component={homeEn} />
        <Route path="/en/about_us" component={aboutUsEn} />
        <Route path="/en/ifs03" component={ifs03En} />
        <Route path="/en/sponsors" component={sponsorsEn} />
        <Route path="/en/contacts" component={contactsEn} />
        <Route path="/en/privacy_policy" component={privacyPolicyEn} />

        <Route exact path="/pt" component={homePt} />
        <Route path="/pt/about_us" component={aboutUsPt} />
        <Route path="/pt/ifs03" component={ifs03Pt} />
        <Route path="/pt/sponsors" component={sponsorsPt} />
        <Route path="/pt/contacts" component={contactsPt} />
        <Route path="/pt/privacy_policy" component={privacyPolicyPt} />
      </Switch>
    </Router>
  );
}

export default App;
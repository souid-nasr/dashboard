import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";
// pages
//new
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import {NewStudent} from '../components/NewStudent.js';
import {NewStudentMod} from '../components/NewStudentMod.js';
import SettingsUniversity from "./SettingsUniversity";
import { StudentsTable } from '../components/studentsTable';
import SettingsStudent from "./SettingsStudent";
import BootstrapTables from "./tables/BootstrapTables";
// import Login from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// // documentation pages
// import DocsOverview from "./documentation/DocsOverview";
// import DocsDownload from "./documentation/DocsDownload";
// import DocsQuickStart from "./documentation/DocsQuickStart";
// import DocsLicense from "./documentation/DocsLicense";
// import DocsFolderStructure from "./documentation/DocsFolderStructure";
// import DocsBuild from "./documentation/DocsBuild";
// import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";
import updateInstitution from './components/updateInstitution';
import Login from './SignIn';
import LoginModerator from './SignInModerator';
import NewModerator from './components/NewModerator'
import Profile from './components/Profile';
import { ModeratorTable } from '../components/moderatorTable';
import SettingsUniversityMod from './SettingsUniversityMod';
import ProfileModerator from './components/ProfileMod';
const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        {/* <Preloader show={loaded ? false : true} /> */}
        {/* <Sidebar /> */}

        <main className="content">
          {/* <Navbar /> */}
          <Component {...props} />
          {/* <Footer toggleSettings={toggleSettings} showSettings={showSettings} /> */}
        </main>
      </>
    )}
    />
  )
};

export default () => (
  <Switch>

    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/*  pages */}
    <RouteWithSidebar exact path={Routes.AdminProfile.path} component={Profile} />
    <RouteWithSidebar exact path={Routes.GetModeratorProfile.path} component={ProfileModerator} />
    <RouteWithSidebar exact path={Routes.TableModerator.path} component={ModeratorTable} />
    <RouteWithSidebar exact path={Routes.NewModerator.path} component={NewModerator} />
    <RouteWithSidebar exact path={Routes.LogIn.path} component={Login} />
    <RouteWithSidebar exact path={Routes.LogInModerator.path} component={LoginModerator} />
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.Upgrade.path} component={Upgrade} />
    <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />
    <RouteWithSidebar exact path={Routes.Settings.path} component={NewStudent} />
    <RouteWithSidebar exact path={Routes.SettingsMod.path} component={NewStudentMod} />
    <RouteWithSidebar exact path={Routes.SettingsUniversity.path} component={SettingsUniversity} />
    <RouteWithSidebar exact path={Routes.SettingsUniversityMod.path} component={SettingsUniversityMod} />
    <RouteWithSidebar exact path={Routes.UpdateInstitution.path} component={updateInstitution} />
    <RouteWithSidebar exact path={Routes.SettingsStudent.path} component={SettingsStudent} />
  
    <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} /> 
    <RouteWithSidebar exact path={Routes.StudentsTable.path} component={StudentsTable} /> 

    {/* <RouteWithSidebar exact path={Routes.EditStudent.path} component={NewStudent} />  */}
    {/* components */}
    <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />

    {/* documentation
    <RouteWithSidebar exact path={Routes.DocsOverview.path} component={DocsOverview} />
    <RouteWithSidebar exact path={Routes.DocsDownload.path} component={DocsDownload} />
    <RouteWithSidebar exact path={Routes.DocsQuickStart.path} component={DocsQuickStart} />
    <RouteWithSidebar exact path={Routes.DocsLicense.path} component={DocsLicense} />
    <RouteWithSidebar exact path={Routes.DocsFolderStructure.path} component={DocsFolderStructure} />
    <RouteWithSidebar exact path={Routes.DocsBuild.path} component={DocsBuild} />
    <RouteWithSidebar exact path={Routes.DocsChangelog.path} component={DocsChangelog} /> */}

    {/* <Redirect to={Routes.NotFound.path} /> */}
  </Switch>
);

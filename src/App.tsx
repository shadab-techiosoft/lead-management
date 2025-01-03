import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Analyst from './pages/Dashboard/Analyst';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/EditLeads';
import Settings from './pages/ViewLeads';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import RegisterLayout from './layout/registerLayout';
import CreateLeadPage from './pages/CreateLeadPage';
import ViewLeadPage from './pages/ViewLeads';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (pathname == "/auth/signin" || pathname == "/auth/signup") {
      setIsLogin(false)
    }
    else {
      setIsLogin(true);
    }
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  useEffect(() => {
    navigate("/auth/signin");
  }, []);
  return loading ? (
    <Loader />
  ) : (
    isLogin ?
      <DefaultLayout>
        <Routes>
          <Route
            index
            element={
              <>
                <PageTitle title=" Dashboard " />
                <Analyst />

              </>
            }
          />
          <Route
            path="/create-leads"
            element={
              <>
                <PageTitle title="Create Lead " />
                <CreateLeadPage />
              </>
            }
          />
          <Route
            path="/edit-leads"
            element={
              <>
                <PageTitle title="Edit Leads " />
                <Profile />
              </>
            }
          />
          <Route
            path="/view-leads"
            element={
              <>
                <PageTitle title="View Leads" />
                <ViewLeadPage />
              </>
            }
          />
          <Route
            path="/forms/form-layout"
            element={
              <>
                <PageTitle title="Form Layout " />
                <FormLayout />
              </>
            }
          />
          <Route
            path="/tables"
            element={
              <>
                <PageTitle title="Tables " />
                <Tables />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <PageTitle title="Settings " />
                <Settings />
              </>
            }
          />

          <Route
            path="/ui/alerts"
            element={
              <>
                <PageTitle title="Alerts " />
                <Alerts />
              </>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <>
                <PageTitle title="Buttons " />
                <Buttons />
              </>
            }
          />
        </Routes>
      </DefaultLayout>
      :

      <RegisterLayout>
        <Routes>
          <Route index path="/auth/signin" element={<><PageTitle title="Signin " /><SignIn /></>} />
          <Route path="/auth/signup" element={<><PageTitle title="Signup " /><SignUp /></>} />
        </Routes>
      </RegisterLayout>
  );
}

export default App;

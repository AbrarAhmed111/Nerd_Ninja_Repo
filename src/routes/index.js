import AuthView from '../views/auth/AuthView';
import dashboard from '../views/Dashboard';
import PrivacyPolicy from '../views/PrivacyPolicy';
import TermsandConditons from '../views/TermsCondition';
import Acedemic from '../views/Acedemic';
import Login from '../views/auth/Login';
import Signup from '../views/auth/Signup';
import Contactus from '../views/auth/Contactus';
import Payment from '../components/membershipPayment.js/Payment';
import ForgetPassword from '../views/auth/ForgetPassword';
import OTP from '../views/auth/OTP';
import MyAccount from '../views/auth/MyAccount';
import ResetPassword from '../views/auth/ForgetPassword';

let routes = [
  {
    path: '/auth',
    component: AuthView,
    layout: 'auth',
  },
  {
    path: '/',
    component: dashboard,
    layout: 'main',
  },
  {
    path: '/login',
    component: Login,
    layout: 'auth',
  },
  {
    path: '/signup',
    component: Signup,
    layout: 'auth',
  },
  {
    path: '/myaccount',
    component: MyAccount,
    layout: 'main',
  },
  {
    path: '/forgetpassword',
    component: ForgetPassword,
    layout:'auth',
  },
  {
    path: '/otp',
    component: OTP,
    layout:'auth',
  },
  {
    path: '/resetpassword',
    component: ResetPassword,
    layout:'auth',
  },
  {
    path: '/contactus',
    component: Contactus,
    layout: 'auth',
  },
  {
path:'/subscription',
component:Payment,
layout:'auth',
  },
  {
    path: '/privacypolicy',
    component: PrivacyPolicy,
    layout: 'main',
  },
  {
    path: '/termsconditon',
    component: TermsandConditons,
    layout: 'main',
  },
  {
    path: '/acedemic',
    component: Acedemic,
    layout: 'main',
  },
];
export default routes;

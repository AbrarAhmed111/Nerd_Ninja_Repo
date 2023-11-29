import AuthView from '../views/auth/AuthView';
import dashboard from '../views/Dashboard';
import login from '../layout/Login';
import signup from '../layout/SignUp';



let routes = [
	{
		path: '/auth',
		component: AuthView,
		layout: 'auth',
	},
	{
		path: '/dashboard',
		component: dashboard,
		layout: 'main',
	},
	{
		path: '/sign-up',
		component: login,
		layout: 'main',
	},
	{
		path: '/',
		component: signup,
		layout: 'main',
	},
];
export default routes;
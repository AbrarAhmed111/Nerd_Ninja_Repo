import Footer from "../components/footer/Footer";

const Auth = props => {
	return (
		<>
			<div className="min-h-[100vh] text-white w-full bg-[#101841]">
			{props.children}
			<Footer/>
			</div>
		</>
	);
};

export default Auth;

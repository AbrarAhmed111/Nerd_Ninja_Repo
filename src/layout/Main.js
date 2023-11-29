import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Main = props => {
	return (
		<>
			<div className="min-h-[100vh] text-white w-full bg-[#011D45]">
			<Header/>
			{props.children}
			<Footer/>
			</div>
		</>
	);
};

export default Main;
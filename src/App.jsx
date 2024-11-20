
import MetaInfo from "./components/MetaInfo";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
function App() {
	return (
		<>
			<Navbar />
			<div className="flex justify-between">
				<SideBar />
				<MetaInfo />
			</div>
		</>
	);
}

export default App;


import MetaInfo from "./components/MetaInfo";
import Navbar from "./components/Navbar";
import QuestionContent from "./components/QuestionContent";
import SideBar from "./components/SideBar";
function App() {
	return (
		<>
			<Navbar />
			<div className="flex justify-between gap-0">
				<div className="flex-none">
					<SideBar />
				</div>
				<div className="flex-1">
					<QuestionContent />
				</div>
				<div className="flex-none">
					<MetaInfo />
				</div>
			</div>
		</>
	);
}

export default App;

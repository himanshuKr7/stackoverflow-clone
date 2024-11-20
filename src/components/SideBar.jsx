import { RiHomeLine } from "react-icons/ri";
import { MdOutlinePublic, MdOutlineStars } from "react-icons/md";
import { CgToolbox } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi";


const SideBar = () => {
	return (
		<div className="hidden lg:block h-screen  border-gray-200">
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
				<nav>
					<div className="mb-4 ">
						<button className="flex items-center gap-4 text-gray-700 hover:text-black font-medium py-2 px-8 hover:bg-orange-300">
							<RiHomeLine className="text-xl text-orange-600" />
							<span>Home</span>
						</button>
					</div>

					<div className="mb-4">
						<button className="flex items-center gap-4 text-gray-700 hover:text-black font-medium py-2 px-8 hover:bg-orange-300">
							<MdOutlinePublic className="text-xl text-orange-500" />
							<span>PUBLIC</span>
						</button>
						<ul className="space-y-2">
							<li className="flex items-center gap-4 px-[4.25rem] text-gray-800 hover:text-orange-600 font-medium py-2">
								<span>Questions</span>
							</li>
							<li className="flex items-center gap-4 px-[4.25rem] text-gray-800 hover:text-orange-600 font-medium py-2">
								<span>Tags</span>
							</li>
							<li className="flex items-center gap-4 px-[4.25rem] text-gray-800 hover:text-orange-600 font-medium py-2">
								<span>Users</span>
							</li>
						</ul>
					</div>

					<div className="mb-4">
						<button className="flex items-center gap-4 text-gray-700 hover:text-black font-medium py-2 px-8 hover:bg-orange-300">
							<MdOutlineStars className="text-xl text-orange-600" />
							<span>COLLECTIVES</span>
						</button>
						<ul className="space-y-2">
							<li className="flex items-center gap-4 px-[4.25rem] text-gray-800 hover:text-orange-600 font-medium py-2">
								<span>Explore Jobs</span>
							</li>
						</ul>
					</div>

					<div className="mb-4">
						<button className="flex items-center gap-4 text-gray-700 hover:text-black font-medium py-2 px-8 hover:bg-orange-300">
							<CgToolbox className="text-xl text-orange-600" />
							<span>FIND JOBS</span>
						</button>
						<ul className="space-y-2">
							<li className="flex items-center gap-4 px-[4.25rem] text-gray-800 hover:text-orange-600 font-medium py-2">
								<span>Jobs</span>
							</li>
							<li className="flex items-center gap-4 px-[4.25rem] text-gray-800 hover:text-orange-600 font-medium py-2">
								<span>Companies</span>
							</li>
						</ul>
					</div>

					<div className="mb-4">
						<button className="flex items-center gap-4 text-gray-700 hover:text-black font-medium py-2 px-8 hover:bg-orange-300">
							<HiOutlineUsers className="text-xl text-orange-600" />
							<span>TEAMS</span>
						</button>
						<ul className="space-y-2">
							<li className="flex items-center gap-4 px-[4.25rem] text-gray-800 hover:text-orange-600 font-medium py-2">
								<span>+ Create a team</span>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default SideBar;

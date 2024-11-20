import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { HiOutlineTrophy, HiOutlineUsers } from "react-icons/hi2";
import { TiDocumentText } from "react-icons/ti";
import { RiHomeLine } from "react-icons/ri";
import { MdOutlinePublic, MdOutlineStars } from "react-icons/md";
import { CgToolbox } from "react-icons/cg";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-white sticky top-0 z-10">
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center gap-4">
						<button
							onClick={toggleMenu}
							className="p-2 rounded-full text-gray-600 hover:bg-gray-100 md:hidden"
							aria-label="Menu">
							{isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
						</button>
						<div className="flex items-center">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
								alt="Stack Overflow Logo"
								className="h-8 w-8"
							/>
							<span className="hidden md:block text-xl font-semibold text-gray-800">
								stack<strong>overflow</strong>
							</span>
						</div>
					</div>
					<div className="hidden md:flex flex-1 mx-16 items-center gap-5">
						<div className="relative w-9/12">
							<input
								type="text"
								placeholder="Search Your Answers Here..."
								className="block w-full px-4 py-2 pr-10 border border-gray-300 rounded-3xl shadow-sm placeholder-gray-500 sm:text-sm outline-none"
							/>
							<FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-400" />
						</div>
						<p className="ml-4 text-gray-600">Products</p>
					</div>

					<button
						className="md:hidden p-2 rounded-full text-gray-600 hover:bg-gray-100"
						aria-label="Search">
						<FaSearch size={24} className="text-orange-400" />
					</button>
					<div className="flex items-center space-x-4">
						<button
							className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 text-lg md:text-xl"
							aria-label="Notifications">
							<BiComment />
						</button>
						<button
							className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 text-lg md:text-xl"
							aria-label="Trophy">
							<HiOutlineTrophy />
						</button>
						<button
							className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 text-xl md:text-2xl"
							aria-label="Comments">
							<TiDocumentText />
						</button>
						<div className="flex items-center">
							<img
								src="https://sipl.ind.in/wp-content/uploads/2022/07/dummy-user.png"
								alt="User Profile"
								className="h-6 w-6 md:h-8 md:w-8 rounded-full"
							/>
						</div>
					</div>
				</div>
			</div>

			
			{isMenuOpen && (
				<div className="absolute top-16 left-0 w-[50%] h-screen  bg-white shadow-lg z-40">
					<ul className="space-y-4 p-4">
				
						<li>
							<button className="flex items-center gap-4 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
								<RiHomeLine className="text-xl text-orange-600" />
								<span>Home</span>
							</button>
						</li>

						<li>
							<button className="flex items-center gap-4 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
								<MdOutlinePublic className="text-xl text-orange-500" />
								<span>Public</span>
							</button>
							<ul className="ml-10 mt-2 space-y-2">
								<li className="text-gray-800 hover:text-orange-600">
									Questions
								</li>
								<li className="text-gray-800 hover:text-orange-600">Tags</li>
								<li className="text-gray-800 hover:text-orange-600">Users</li>
							</ul>
						</li>
						<li>
							<button className="flex items-center gap-4 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
								<MdOutlineStars className="text-xl text-orange-600" />
								<span>Collectives</span>
							</button>
							<ul className="ml-10 mt-2 space-y-2">
								<li className="text-gray-800 hover:text-orange-600">
									Explore Jobs
								</li>
							</ul>
						</li>
						<li>
							<button className="flex items-center gap-4 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
								<CgToolbox className="text-xl text-orange-600" />
								<span>Find Jobs</span>
							</button>
							<ul className="ml-10 mt-2 space-y-2">
								<li className="text-gray-800 hover:text-orange-600">Jobs</li>
								<li className="text-gray-800 hover:text-orange-600">
									Companies
								</li>
							</ul>
						</li>
						<li>
							<button className="flex items-center gap-4 p-2 text-gray-700 hover:bg-gray-100 rounded-md">
								<HiOutlineUsers className="text-xl text-orange-600" />
								<span>Teams</span>
							</button>
							<ul className="ml-10 mt-2 space-y-2">
								<li className="text-gray-800 hover:text-orange-600">
									+ Create a team
								</li>
							</ul>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

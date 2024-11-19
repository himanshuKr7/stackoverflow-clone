import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { LiaCommentSolid } from "react-icons/lia";
import { TiDocumentText } from "react-icons/ti";
const Navbar = () => {
  return (
		<nav className="bg-white shadow-sm border-b sticky top-0 z-10">
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-around items-center h-16">
					<div className="flex-shrink-0 flex items-center ">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
							alt="Stack Overflow Logo"
							className="h-8 w-8"
						/>
						<span className="text-xl font-semibold text-gray-800">
							stack<strong>overflow</strong>
						</span>
					</div>
					<div className="flex-1 mx-16">
						<div className="relative flex gap-5 items-center">
							<div className="relative w-7/12">
								<input
									type="text"
									placeholder="Search Your Answers Here..."
									className="block w-full px-4 py-2 pr-10 border border-gray-300 rounded-3xl shadow-sm placeholder-gray-500 sm:text-sm outline-none"
								/>
								<FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
							</div>
							<p className="text-gray-600">Products</p>
						</div>
					</div>
					<div className="flex items-center space-x-4">
						<button
							className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 text-xl"
							aria-label="Notifications">
							<BiComment />
						</button>
						<button
							className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 text-xl"
							aria-label="Trophy">
							<HiOutlineTrophy />
						</button>
						<button
							className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 text-2xl"
							aria-label="comments">
							{/* <LiaCommentSolid /> */}
							<TiDocumentText />
						</button>

						<div className="flex items-center text-gray-400 ">
							<img
								src="https://sipl.ind.in/wp-content/uploads/2022/07/dummy-user.png"
								alt="User Profile"
								className="h-8 w-8 rounded-full text-gray-400"
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar

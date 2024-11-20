import React from "react";
import { FaPen, FaStackOverflow } from "react-icons/fa";

const MetaInfo = () => {
	return (
		<div>
			<aside className="hidden lg:block w-96 ">
				<aside className="w-[100%] p-5 bg-[#FDFCFA] ">
					<section className="mb-6 ">
						<h2 className="text-lg font-bold text-gray-800 mb-4">
							The Overflow Blog
						</h2>
						<ul className="space-y-5">
							<li className="flex items-start space-x-4">
								<FaPen className=" text-gray-400 text-sm" />
								<p className="text-gray-500 text-sm">
									The unexpected benefits of mentoring others
								</p>
							</li>
							<li className="flex items-start space-x-4">
								<FaPen className=" text-gray-400 text-xl" />
								<p className="text-gray-500 text-sm">
									Podcast 354: Building for AR with Niantic Labs’ augmented
									reality SDK
								</p>
							</li>
						</ul>
					</section>

					<section className="mb-6">
						<h2 className="text-lg font-bold text-gray-800 mb-4">
							Featured & meta
						</h2>
						<ul className="space-y-3">
							<li className="flex items-start space-x-3">
								<FaStackOverflow className=" text-lg text-gray-400" />
								<p className="text-gray-500 text-sm">
									Beta release of Collectives™ on Stack Overflow
								</p>
							</li>
						</ul>
					</section>
				</aside>

				<aside className="w-[100%] p-5 bg-[#F5F5F5] ">
					<section className="mb-6">
						<h2 className="text-lg font-bold text-gray-800 mb-4">
							Hot meta post
						</h2>
						<ul className="space-y-3">
							<li className="flex items-start space-x-5">
								<span className="font-bold text-gray-800">8</span>
								<p className="text-sm text-gray-500 ">
									Tags (driver) and (device-driver) appear to be redundant
								</p>
							</li>
							<li className="flex items-start space-x-3">
								<span className="font-bold text-gray-800">27</span>
								<p className="text-sm text-gray-500">
									How to handle dupes where A is closed as a dup of B but I have
									an answer that...
								</p>
							</li>
							<li className="flex items-start space-x-3">
								<span className="font-bold text-gray-800">27</span>
								<p className="text-sm text-gray-500">
									Ambiguous tag [containers]
								</p>
							</li>
						</ul>
					</section>
				</aside>
				<section>
					<h2 className="text-lg font-bold text-gray-800 mb-4 mt-7 px-10">
						Custom filter
					</h2>
					<input
						type="text"
						placeholder="add custom filters"
						className="w-5/6 px-3 py-2 mx-5  border border-gray-300  shadow-sm placeholder-blue-500 focus:ring-orange-500 focus:border-orange-500"
					/>
				</section>
			</aside>
		</div>
	);
};

export default MetaInfo;

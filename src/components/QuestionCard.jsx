import React from "react";
import { FiTriangle, FiEye } from "react-icons/fi";
import { LiaComments } from "react-icons/lia";


const QuestionCard = ({ question, tags, votes, answers, views,time,user }) => {
	return (
		<div className="hover:shadow-custom-shadow p-4 w-full mx-auto hover:bg-white  hover:cursor-pointer border-b-[1px] border-b-gray-100 hover:border  hover:border-gray-100 hover:scale-105 transform transition duration-300 ease-in-out ">
			<h2 className="text-lg font-semibold text-gray-700 mb-3">{question}</h2>
			<div className="flex flex-wrap gap-2 mb-4">
				{tags.map((tag, index) => (
					<span
						key={index}
						className="bg-white text-gray-700 text-sm px-3 py-1 rounded-full border border-blue-200">
						{tag}
					</span>
				))}
			</div>
			<div className="flex justify-between">
				<div className="flex items-center gap-3 md:gap-8 text-sm text-gray-500">
					<div className="flex items-center gap-1">
						<FiTriangle className="text-orange-500" />
						<span className="text-orange-500 font-semibold">{votes}</span>
					</div>
					<div className="flex items-center gap-1">
						<LiaComments className="text-lg text-gray-400" />
						<span className="text-gray-700 font-semibold">{answers}</span>
					</div>
					<div className="flex items-center gap-1">
						<FiEye className="text-lg text-gray-400" />
						<span className="text-gray-700 font-semibold">{views}</span>
					</div>
				</div>
				<div>
					<span className="text-gray-500 text-sm">
						asked on {time}:<span className="text-blue-500">{user}</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default QuestionCard;

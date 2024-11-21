import React, { useState } from "react";
import useFetchQuestions from "./useFetchQuestions";
import QuestionCard from "./QuestionCard";

const QuestionContent = () => {
	const [selectedFilter, setSelectedFilter] = useState("hot");
	const { questions, loading, error } = useFetchQuestions(selectedFilter);

	return (
		<section className="flex-1 p-6">
			<div className="mb-5">
				<h4 className="text-3xl text-gray-600 font-semibold">Top Questions</h4>
			</div>
			<div className="sm:flex justify-between items-center mb-6">
				<div className="flex space-x-3 md:space-x-1 w-full sm:w-auto ">
					{["hot", "week", "month", "activity", "votes"].map((filter) => (
						<button
							key={filter}
							className={`px-3 py-1 rounded-3xl font-medium ${
								selectedFilter === filter
									? "bg-orange-500 text-white"
									: "text-gray-400"
							}`}
							onClick={() => setSelectedFilter(filter)}>
							{filter.charAt(0).toUpperCase() + filter.slice(1)}
						</button>
					))}
				</div>
				<button className="bg-blue-500 my-5 px-4 py-2 md:px-8 md:py-1 text-sm rounded-3xl text-white font-medium w-full sm:w-auto">
					ASK QUESTION
				</button>
			</div>
			<div className="space-y-6">
				{loading ? (
					<div>Loading...</div>
				) : error ? (
					<div>{error}</div>
				) : (
					questions.map((question) => (
						<QuestionCard
							key={question.question_id}
							question={question.title}
							tags={question.tags}
							votes={question.score}
							answers={question.answer_count}
							views={question.view_count}
							time={new Date(
								question.creation_date * 1000
							).toLocaleDateString()}
							user={question.owner.display_name}
						/>
					))
				)}
			</div>
		</section>
	);
};

export default QuestionContent;

import React, { useState, useEffect } from "react";
import useFetchQuestions from "../utils/useFetchQuestions";
import QuestionCard from "./QuestionCard";
import { useSearch } from "../context/SearchContext";

const QuestionContent = () => {
	const [selectedFilter, setSelectedFilter] = useState("activity");
	const { questions, loading, error } = useFetchQuestions(selectedFilter);
	const { searchTerm, filteredQuestions, setFilteredQuestions } = useSearch();
	useEffect(() => {
		if (searchTerm.trim() && questions.length) {
			const filtered = questions.filter((question) =>
				question.title.toLowerCase().includes(searchTerm)
			);
			setFilteredQuestions(filtered);
		} else {
			setFilteredQuestions(questions);
		}
	}, [searchTerm, questions, setFilteredQuestions]);

	return (
		<section className="flex-1 p-6">
			<div className="mb-5">
				<h4 className="text-3xl text-gray-600 font-semibold">Top Questions</h4>
			</div>
			<div className="sm:flex justify-between items-center mb-6">
				<div className="flex space-x-3 md:space-x-1 w-full sm:w-auto ">
					{["activity", "hot", "week", "month", "votes"].map((filter) => (
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
				{filteredQuestions && filteredQuestions.length > 0 ? (
					filteredQuestions.map((question) => (
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
				) : loading ? (
					<div>Loading...</div>
				) : error ? (
					<div>{error}</div>
				) : (
					<div>No questions found.</div>
				)}
			</div>
		</section>
	);
};

export default QuestionContent;

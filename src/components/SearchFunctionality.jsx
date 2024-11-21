import React from "react";
import Navbar from "./Navbar";
import QuestionContent from "./QuestionContent";
import { useSearch } from "../contexts/SearchContext";
import useFetchQuestions from "../utils/useFetchQuestions";

const SearchFunctionality = () => {
	const { searchTerm } = useSearch();
	const { questions, loading, error } = useFetchQuestions("activity");
	const filteredQuestions = questions.filter((question) =>
		question.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<Navbar />
			{loading ? (
				<div className="text-center mt-8 text-gray-500">
					Loading questions...
				</div>
			) : error ? (
				<div className="text-center mt-8 text-red-500">Error: {error}</div>
			) : (
				<QuestionContent filteredQuestions={filteredQuestions} />
			)}
		</>
	);
};

export default SearchFunctionality;

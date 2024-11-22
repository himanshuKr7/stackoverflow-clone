import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredQuestions, setFilteredQuestions] = useState([]);

	return (
		<SearchContext.Provider
			value={{
				searchTerm,
				setSearchTerm,
				filteredQuestions,
				setFilteredQuestions,
			}}>
			{children}
		</SearchContext.Provider>
	);
};

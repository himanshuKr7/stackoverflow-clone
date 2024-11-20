import { useState, useEffect } from "react";

const useFetchQuestions = (filter) => {
	const [questions, setQuestions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchQuestions = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await fetch(
					`https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow`
				);

				if (response.status === 429) {
					const retryAfter = response.headers.get("Retry-After");
					setError(
						`Rate limit exceeded. Please try again after ${retryAfter} seconds.`
					);
					return;
				}

				if (!response.ok) {
					throw new Error("Failed to fetch data.");
				}

				const data = await response.json();

				if (data.items && data.items.length > 0) {
					setQuestions(data.items);
				} else {
					setError("No questions found.");
				}
			} catch (err) {
				setError(err.message || "An unexpected error occurred.");
			} finally {
				setLoading(false);
			}
		};

		fetchQuestions();
	}, [filter]);

	return { questions, loading, error };
};

export default useFetchQuestions;

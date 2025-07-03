import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

type Question = {
  question: string;
  answers: string[];
  correct: string;
};

async function fetchQuestions(): Promise<Question[]> {
  const res = await fetch("/api/questions");

  if (!res.ok) throw new Error("Network response was not ok");

  return res.json();
}

export function useQuestions(setAnswers: (answers: (string | null)[]) => void) {
  const query = useQuery<Question[], Error>({
    queryKey: ["questions"],
    queryFn: fetchQuestions,
    initialData: [],
  });

  useEffect(() => {
    if (query.data) {
      setAnswers(new Array(query.data.length).fill(null));
    }
  }, [query.data, setAnswers]);

  return query;
}

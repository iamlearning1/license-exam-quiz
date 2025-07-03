"use client";

import Alert from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loader from "@/components/ui/loader";
import { Progress } from "@/components/ui/progress";
import { useQuestions } from "@/hooks/useQuestions";
import { useState } from "react";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    data: questions,
    isLoading,
    error,
    refetch,
  } = useQuestions(() => setAnswers);

  const handleAnswerClick = (answer: string) => {
    if (answers[currentQuestionIndex]) return; // Prevent changing answer

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);

    if (answer === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers(new Array(questions.length).fill(null));
    setIsSubmitted(false);
    refetch();
  };

  if (isLoading || !questions) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Alert title="Error fetching questions" message={error.message} />
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Quiz Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl mb-4">
              Your final score is: {score} / {questions.length}
            </p>
            <div className="space-y-4">
              {questions.map((question, index) => (
                <div key={index} className="p-2 border rounded">
                  <p className="font-bold">
                    {index + 1}. {question.question}
                  </p>
                  <p
                    className={
                      answers[index] === question.correct
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    Your answer: {answers[index] || "Not answered"}
                  </p>
                  {answers[index] !== question.correct && (
                    <p className="text-green-500">
                      Correct answer: {question.correct}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Button onClick={handleRetry} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <Progress value={progress} className="mb-4" />
          <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
        </CardHeader>
        {currentQuestion && (
          <CardContent>
            <p className="mb-4">{currentQuestion.question}</p>
            <div className="flex flex-col space-y-2">
              {currentQuestion.answers.map((answer) => (
                <Button
                  key={answer}
                  color="primary"
                  onClick={() => handleAnswerClick(answer)}
                  className={`
                  ${
                    selectedAnswer &&
                    (answer === currentQuestion.correct
                      ? "bg-green-500 hover:bg-green-600"
                      : answer === selectedAnswer
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-gray-200 text-gray-800")
                  }
                  h-auto whitespace-normal text-left justify-start
                `}
                  disabled={!!selectedAnswer}
                >
                  <span className="break-words">{answer}</span>
                </Button>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <Button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>
              {currentQuestionIndex === questions.length - 1 ? (
                <Button onClick={() => setIsSubmitted(true)}>Submit</Button>
              ) : (
                <Button onClick={handleNextQuestion}>Next</Button>
              )}
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

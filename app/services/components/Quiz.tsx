"use client";

import React, { useState } from "react";
import { Question } from "@/app/data/questions";

interface QuizProps {
  questions: Question[];
}

export default function Quiz({ questions }: QuizProps) {
  const [userName, setUserName] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [skippedQuestions, setSkippedQuestions] = useState<number[]>([]);

  const handleStartQuiz = () => {
    if (userName.trim()) {
      setHasStarted(true);
    }
  };

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowScore(true);
    }
  };

  const handleSkipQuestion = () => {
    setSkippedQuestions([...skippedQuestions, currentQuestion]);
    handleNextQuestion();
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setSkippedQuestions([]);
    setHasStarted(false);
    setUserName("");
  };

  if (!hasStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full space-y-6">
          <h1 className="text-3xl font-bold text-white text-center">
            Linux Shortcuts Quiz
          </h1>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            <button
              onClick={handleStartQuiz}
              disabled={!userName.trim()}
              className={`w-full py-3 rounded-lg font-semibold transition-all ${
                userName.trim()
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showScore) {
    const attemptedQuestions = questions.length - skippedQuestions.length;
    const accuracy =
      attemptedQuestions > 0 ? (score / attemptedQuestions) * 100 : 0;

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Quiz Complete! 🎉
          </h2>
          <div className="space-y-4 mb-8">
            <p className="text-xl text-gray-300 text-center">
              Great job, {userName}!
            </p>
            <div className="bg-gray-700 p-6 rounded-lg space-y-3">
              <p className="text-gray-300">
                Score:{" "}
                <span className="text-blue-400 font-semibold">{score}</span> out
                of {questions.length}
              </p>
              <p className="text-gray-300">
                Accuracy:{" "}
                <span className="text-blue-400 font-semibold">
                  {accuracy.toFixed(1)}%
                </span>
              </p>
              <p className="text-gray-300">
                Questions Skipped:{" "}
                <span className="text-blue-400 font-semibold">
                  {skippedQuestions.length}
                </span>
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={resetQuiz}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-2xl w-full">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-400">
              Question {currentQuestion + 1}/{questions.length}
            </span>
            <span className="text-gray-400">Score: {score}</span>
          </div>
          <h2 className="text-xl font-semibold text-white mb-6">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 text-left rounded-lg transition-all ${
                  selectedAnswer === option
                    ? isCorrect
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                } ${
                  selectedAnswer !== null &&
                  option === questions[currentQuestion].correctAnswer
                    ? "bg-green-600 text-white"
                    : ""
                } border-2 ${selectedAnswer === null ? "border-gray-700" : ""}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-4 mt-6">
          <button
            onClick={handleSkipQuestion}
            disabled={selectedAnswer !== null}
            className="px-6 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Skip
          </button>
          {selectedAnswer && (
            <button
              onClick={handleNextQuestion}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

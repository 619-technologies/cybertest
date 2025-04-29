import React from "react";
import Quiz from "./services/components/Quiz";
import { questions } from "./data/questions";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Quiz questions={questions} />
    </main>
  );
}

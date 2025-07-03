import { questions } from "@/app/constants";
import { NextResponse } from "next/server";

export async function GET() {
  // select 30 random questions from the questions array
  const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
  const selectedQuestions = shuffledQuestions.slice(0, 5);

  return NextResponse.json(selectedQuestions);
}

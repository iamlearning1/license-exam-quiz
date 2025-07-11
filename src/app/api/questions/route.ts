import { questions } from '@/app/constants';
import { NextResponse } from 'next/server';

export async function GET() {
  // select random questions from the questions array
  const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
  const selectedQuestions = shuffledQuestions.slice(
    0,
    parseInt(process.env.NO_OF_QUESTIONS || '20')
  );

  return NextResponse.json(selectedQuestions);
}

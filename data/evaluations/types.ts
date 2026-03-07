export interface EvaluationExample {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  prompt: string;
  responseA: string;
  responseB: string;
  evaluation: string;
  reasoning: string[];
  winner: 'A' | 'B';
}

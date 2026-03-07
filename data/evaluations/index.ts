import { algorithmsEvaluations } from './algorithmsEvaluations';
import { javascriptEvaluations } from './javascriptEvaluations';
import { promptEngineeringEvaluations } from './promptEngineeringEvaluations';
import { pythonEvaluations } from './pythonEvaluations';
import { sqlEvaluations } from './sqlEvaluations';
import { systemDesignEvaluations } from './systemDesignEvaluations';
import { webDevEvaluations } from './webDevEvaluations';

export type { EvaluationExample } from './types';

export const allEvaluations = [
  ...javascriptEvaluations,
  ...pythonEvaluations,
  ...algorithmsEvaluations,
  ...webDevEvaluations,
  ...systemDesignEvaluations,
  ...sqlEvaluations,
  ...promptEngineeringEvaluations
];

export {
  javascriptEvaluations,
  pythonEvaluations,
  algorithmsEvaluations,
  webDevEvaluations,
  systemDesignEvaluations,
  sqlEvaluations,
  promptEngineeringEvaluations
};

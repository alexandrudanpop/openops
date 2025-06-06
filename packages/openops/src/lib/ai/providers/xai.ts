import { createXai } from '@ai-sdk/xai';
import { LanguageModelV1 } from 'ai';
import { AiProvider } from '../providers';

const xaiModels = [
  'grok-3',
  'grok-3-latest',
  'grok-3-fast',
  'grok-3-fast-latest',
  'grok-3-mini',
  'grok-3-mini-latest',
  'grok-3-mini-fast',
  'grok-3-mini-fast-latest',
  'grok-2-vision-1212',
  'grok-2-vision',
  'grok-2-vision-latest',
  'grok-2-image-1212',
  'grok-2-image',
  'grok-2-image-latest',
  'grok-2-1212',
  'grok-2',
  'grok-2-latest',
  'grok-vision-beta',
  'grok-beta',
];

function createLanguageModel(params: {
  apiKey: string;
  model: string;
  baseUrl?: string;
}): LanguageModelV1 {
  return createXai({
    apiKey: params.apiKey,
    baseURL: params.baseUrl,
  })(params.model);
}

export const xaiProvider: AiProvider = {
  models: xaiModels,
  createLanguageModel,
};

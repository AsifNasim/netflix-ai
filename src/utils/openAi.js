import OpenAI from 'openai';
import { openaiKey } from './constants';

const client = new OpenAI({
  apiKey: openaiKey,
  dangerouslyAllowBrowser: true
});

export default client;
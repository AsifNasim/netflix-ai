import Anthropic from '@anthropic-ai/sdk';
import { anthropicKey } from './constants';

const client = new Anthropic({
  apiKey: anthropicKey, 
  dangerouslyAllowBrowser: true 
});

export default client;
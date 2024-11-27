import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.REACT_APP_CLAUDE_ACCESS_TOKEN, 
  dangerouslyAllowBrowser: true 
});

export default client;
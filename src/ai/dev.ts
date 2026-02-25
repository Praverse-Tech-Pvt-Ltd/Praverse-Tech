import { config } from 'dotenv';
config();

import '@/ai/flows/generate-blog-ideas.ts';
import '@/ai/flows/generate-fda-response.ts';
import '@/ai/flows/summarize-ehr-for-triage.ts';
import '@/ai/flows/prav-chat.ts';

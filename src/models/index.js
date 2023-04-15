// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Message } = initSchema(schema);

export {
  Post,
  Message
};
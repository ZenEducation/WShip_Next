// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Group, Post, Message, ArrGroupItem } = initSchema(schema);

export {
  Group,
  Post,
  Message,
  ArrGroupItem
};
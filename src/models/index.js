// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Messages, ChatRooms, Users, UsersChatRooms } = initSchema(schema);

export {
  Messages,
  ChatRooms,
  Users,
  UsersChatRooms
};
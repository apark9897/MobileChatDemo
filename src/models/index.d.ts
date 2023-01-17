import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Messages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly userID: string;
  readonly chatroomsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Messages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly userID: string;
  readonly chatroomsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Messages = LazyLoading extends LazyLoadingDisabled ? EagerMessages : LazyMessages

export declare const Messages: (new (init: ModelInit<Messages>) => Messages) & {
  copyOf(source: Messages, mutator: (draft: MutableModel<Messages>) => MutableModel<Messages> | void): Messages;
}

type EagerChatRooms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRooms, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly newMessages?: number | null;
  readonly LastMessage?: Messages | null;
  readonly Messages?: (Messages | null)[] | null;
  readonly ChatRoomUsers?: (UsersChatRooms | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomsLastMessageId?: string | null;
}

type LazyChatRooms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRooms, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly newMessages?: number | null;
  readonly LastMessage: AsyncItem<Messages | undefined>;
  readonly Messages: AsyncCollection<Messages>;
  readonly ChatRoomUsers: AsyncCollection<UsersChatRooms>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomsLastMessageId?: string | null;
}

export declare type ChatRooms = LazyLoading extends LazyLoadingDisabled ? EagerChatRooms : LazyChatRooms

export declare const ChatRooms: (new (init: ModelInit<ChatRooms>) => ChatRooms) & {
  copyOf(source: ChatRooms, mutator: (draft: MutableModel<ChatRooms>) => MutableModel<ChatRooms> | void): ChatRooms;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly imageUri?: string | null;
  readonly status?: string | null;
  readonly Messages?: (Messages | null)[] | null;
  readonly ChatRooms?: (UsersChatRooms | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly imageUri?: string | null;
  readonly status?: string | null;
  readonly Messages: AsyncCollection<Messages>;
  readonly ChatRooms: AsyncCollection<UsersChatRooms>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerUsersChatRooms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersChatRooms, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatRoomsId?: string | null;
  readonly usersId?: string | null;
  readonly chatRooms: ChatRooms;
  readonly users: Users;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersChatRooms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersChatRooms, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatRoomsId?: string | null;
  readonly usersId?: string | null;
  readonly chatRooms: AsyncItem<ChatRooms>;
  readonly users: AsyncItem<Users>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersChatRooms = LazyLoading extends LazyLoadingDisabled ? EagerUsersChatRooms : LazyUsersChatRooms

export declare const UsersChatRooms: (new (init: ModelInit<UsersChatRooms>) => UsersChatRooms) & {
  copyOf(source: UsersChatRooms, mutator: (draft: MutableModel<UsersChatRooms>) => MutableModel<UsersChatRooms> | void): UsersChatRooms;
}
import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerArrGroupItem = {
  readonly userid?: string | null;
  readonly name?: string | null;
}

type LazyArrGroupItem = {
  readonly userid?: string | null;
  readonly name?: string | null;
}

export declare type ArrGroupItem = LazyLoading extends LazyLoadingDisabled ? EagerArrGroupItem : LazyArrGroupItem

export declare const ArrGroupItem: (new (init: ModelInit<ArrGroupItem>) => ArrGroupItem)

type EagerGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groupName?: string | null;
  readonly groupData?: (ArrGroupItem | null)[] | null;
  readonly session?: string | null;
  readonly groupImgUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groupName?: string | null;
  readonly groupData?: (ArrGroupItem | null)[] | null;
  readonly session?: string | null;
  readonly groupImgUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Group = LazyLoading extends LazyLoadingDisabled ? EagerGroup : LazyGroup

export declare const Group: (new (init: ModelInit<Group>) => Group) & {
  copyOf(source: Group, mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void): Group;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userid: string;
  readonly name: string;
  readonly designation?: string | null;
  readonly content?: string | null;
  readonly imgUrl?: string | null;
  readonly country?: string | null;
  readonly phoneNo?: string | null;
  readonly gender?: string | null;
  readonly email?: string | null;
  readonly github?: string | null;
  readonly facebook?: string | null;
  readonly instagram?: string | null;
  readonly linkedin?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userid: string;
  readonly name: string;
  readonly designation?: string | null;
  readonly content?: string | null;
  readonly imgUrl?: string | null;
  readonly country?: string | null;
  readonly phoneNo?: string | null;
  readonly gender?: string | null;
  readonly email?: string | null;
  readonly github?: string | null;
  readonly facebook?: string | null;
  readonly instagram?: string | null;
  readonly linkedin?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner: string;
  readonly message: string;
  readonly messageType?: string | null;
  readonly session?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner: string;
  readonly message: string;
  readonly messageType?: string | null;
  readonly session?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}
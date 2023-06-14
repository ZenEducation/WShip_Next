/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onCreateGroup(filter: $filter) {
      id
      groupName
      groupData {
        userid
        name
      }
      session
      groupImgUrl
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onUpdateGroup(filter: $filter) {
      id
      groupName
      groupData {
        userid
        name
      }
      session
      groupImgUrl
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
    onDeleteGroup(filter: $filter) {
      id
      groupName
      groupData {
        userid
        name
      }
      session
      groupImgUrl
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      userid
      name
      designation
      content
      imgUrl
      country
      phoneNo
      gender
      email
      github
      facebook
      instagram
      linkedin
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      userid
      name
      designation
      content
      imgUrl
      country
      phoneNo
      gender
      email
      github
      facebook
      instagram
      linkedin
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      userid
      name
      designation
      content
      imgUrl
      country
      phoneNo
      gender
      email
      github
      facebook
      instagram
      linkedin
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      owner
      message
      messageType
      session
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      owner
      message
      messageType
      session
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      owner
      message
      messageType
      session
      createdAt
      updatedAt
    }
  }
`;

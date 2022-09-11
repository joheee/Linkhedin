import { gql } from "@apollo/client";

export const GET_USER = gql
`
subscription {
  User {
    user_id
    username
    email
    password
    createdAt
    verification
    UserDetail{
      username
      description
      photoBanner
      photoProfile
      about
    }
  }
}
`

export const GET_CURRENT_USER = gql
`
subscription {
  User {
    user_id
    username
    email
    password
    createdAt
    verification
    UserDetail{
      description
      photoBanner
      photoProfile
      about
      username
    }
    UserExperiences{
      company
      experience_id
      createdAt
      experience
      experienceImage
      location
      username
    }
    UserEducations {
      education_id
      education
      institute
      username
      createdAt
      location
      educationImage
    }
    UserLicenses {
      license_id
      license
      username
      educationImage
      createdAt
      institute
    }
  }
}
`

export const GET_OTHER_USER = gql
`
subscription GetOtherUser($username:String!){
  User(where:{username:{_nlike:$username}}) {
    user_id
    username
    email
    password
    createdAt
    verification
    UserDetail{
      description
      photoBanner
      photoProfile
      about
      username
    }
    UserExperiences{
      company
      experience_id
      createdAt
      experience
      experienceImage
      location
      username
    }
    UserEducations {
      education_id
      education
      institute
      username
      createdAt
      location
      educationImage
    }
    UserLicenses {
      license_id
      license
      username
      educationImage
      createdAt
      institute
    }
  }
}
`

export const GET_LOGIN_USER = gql
`
subscription GetOtherUser($username:String!){
  User(where:{username:{_like:$username}}) {
    user_id
    username
    email
    password
    createdAt
    verification
    UserDetail{
      description
      photoBanner
      photoProfile
      about
      username
    }
    UserExperiences{
      company
      experience_id
      createdAt
      experience
      experienceImage
      location
      username
    }
    UserEducations {
      education_id
      education
      institute
      username
      createdAt
      location
      educationImage
    }
    UserLicenses {
      license_id
      license
      username
      educationImage
      createdAt
      institute
    }
    Posts(order_by:{createdAt:desc}) {
      post_id
      username
      video
      photo
      description
      createdAt
      PostComments {
        comment_id
        reply_id
        post_id
        username
        message
        createdAt
        User{
          user_id
          username
          email
          password
          verification
          UserDetail {
            photoProfile
            photoBanner
            description
            about
            username
          }
        }
      }
      PostShares {
        share_id
        post_id
        username
      }
      PostLikes {
        post_like_id
        post_id
        likedBy
      }
      User {
        user_id
        username
        email
        password
        createdAt
        verification
        UserDetail {
          photoProfile
          photoBanner
          description
          about
          username
        }
      }
    }
  }
}
`

export const SEARCH_USER = gql
`
subscription SearchUser($username:String!, $currentUser:String!){
  User(where:{username:{_iregex:$username, _nlike:$currentUser}}) {
    user_id
    username
    email
    password
    createdAt
    verification
    UserDetail{
      description
      photoBanner
      photoProfile
      about
      username
    }
    
  }
}
`

export const GET_ALL_CONNECT = gql
`
subscription {
	UserConnect {
    connect_id
		senderConnect
  	receiverConnect
    isConnected
  }
}
`

export const GET_REQUEST_CONNECT = gql
`
subscription GetRequestConnect($username:String!){
	UserConnect(where:{receiverConnect:{_like:$username}}) {
    connect_id
		senderConnect
  	receiverConnect
    isConnected
    createdAt
    User {
      user_id
      username
      email
      password
      UserDetail {
        about
        description
        photoBanner
        photoProfile
        username
      }
    }
  }
}
`

export const GET_SPECIFIC_CONNECT = gql
`
subscription GetRequestConnect($receiverConnect:String!, $senderConnect:String!){
	UserConnect(where:{receiverConnect:{_like:$receiverConnect}, senderConnect:{_like:$senderConnect}}) {
    connect_id
		senderConnect
  	receiverConnect
    isConnected
    createdAt
  }
}
`

export const GET_ALL_FOLLOW = gql 
`
subscription {
  UserFollower {
    follower_id
    sendFollow
    targetFollow
    createdAt
    User{
      username
      email
      user_id
    }
  }
}
`
export const GET_CURRENT_FOLLOW = gql
`
subscription GetCurrentFollow($sender:String!, $target:String!) {
  UserFollower(where:{sendFollow:{_like:$sender},targetFollow:{_like:$target}}) {
    follower_id
    sendFollow
    targetFollow
    createdAt
    User{
      username
      email
      user_id
    }
  }
}
`
export const GET_TOTAL_FOLLOW = gql 
`
subscription GetCurrentFollow($target:String!) {
  UserFollower(where:{targetFollow:{_like:$target}}) {
    follower_id
    sendFollow
    targetFollow
    createdAt
    User{
      username
      email
      user_id
    }
  }
}
`

export const GET_ALL_JOB = gql 
`
subscription {
  UserJob {
    job_id
    company
    employmentType
    workplaceType
    title
    picture
    location
    createdAt
    username
    User {
      user_id
      username
    }
  }
}
`

export const GET_ALL_SUBS_JOB = gql
`
subscription {
  UserJob {
    job_id
    company
    employmentType
    workplaceType
    title
    picture
    location
    createdAt
    username
    User {
      user_id
      username
    }
  }
}
`

export const GET_ALL_CHAT_ROOM = gql
`
subscription {
  ChatRoom {
    chat_room_id
    receiver
    sender
  }
}
`
export const GET_USER_CHAT_ROOM = gql
`
subscription($chatMate:String!) {
	ChatRoom(where:{_or:[{receiver:{_like:$chatMate}},{sender:{_like:$chatMate}}]}){
    sender
    receiver
    chat_room_id
  }
}
`

export const GET_CURRENT_MESSAGE = gql
`
subscription TakeMessage($chat_room_id:uuid!){
  ChatMessage(order_by:{createdAt:desc} ,where:{chat_room_id:{_eq:$chat_room_id}}){
    chat_message_id
    chat_room_id
    createdAt
    message
    sender
    receiver
    image
  }
}
`

export const GET_ALL_POST = gql
`
subscription {
  User{
    user_id
    username
    email
    password
    verification
    UserDetail {
      photoProfile
      photoBanner
      description
      about
      username
    }
    Posts(order_by:{createdAt:desc}) {
      post_id
      username
      video
      photo
      description
      createdAt
      PostShares {
        share_id
        post_id
        username
      }
      PostLikes {
        post_like_id
        post_id
        likedBy
      }
      PostComments {
        comment_id
        reply_id
        post_id
        username
        message
        createdAt
        User{
          user_id
          username
          email
          password
          verification
          UserDetail {
            photoProfile
            photoBanner
            description
            about
            username
          }
        }
      }
      User {
        user_id
        username
        email
        password
        createdAt
        verification
        UserDetail {
          photoProfile
          photoBanner
          description
          about
          username
        }
      }
    }
  }
}
`

export const GET_CURRENT_POST  = gql
`
subscription GetCurrentPost($post_id:uuid!){
	Post(where:{post_id:{_eq:$post_id}}){
      post_id
      username
      video
      photo
      description
      createdAt
      PostShares {
        share_id
        post_id
        username
      }
      PostLikes {
        post_like_id
        post_id
        likedBy
      }
      PostComments {
        comment_id
        reply_id
        post_id
        username
        message
        createdAt
        User{
          user_id
          username
          email
          password
          verification
          UserDetail {
            photoProfile
            photoBanner
            description
            about
            username
          }
        }
      }
      User {
        user_id
        username
        email
        password
        createdAt
        verification
        UserDetail {
          photoProfile
          photoBanner
          description
          about
          username
        }
      }
    }
}
`

import { gql } from "@apollo/client";

export const GET_USER = gql
`
query {
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
query {
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
query GetOtherUser($username:String!){
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
query GetOtherUser($username:String!){
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
    
  }
}
`

export const SEARCH_USER = gql
`
query SearchUser($username:String!, $currentUser:String!){
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
query {
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
query GetRequestConnect($username:String!){
	UserConnect(where:{receiverConnect:{_like:$username}}) {
    connect_id
		senderConnect
  	receiverConnect
    isConnected
    createdAt
  }
}
`

export const GET_SPECIFIC_CONNECT = gql
`
query GetRequestConnect($receiverConnect:String!, $senderConnect:String!){
	UserConnect(where:{receiverConnect:{_like:$receiverConnect}, senderConnect:{_like:$senderConnect}}) {
    connect_id
		senderConnect
  	receiverConnect
    isConnected
    createdAt
  }
}
`
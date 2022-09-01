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
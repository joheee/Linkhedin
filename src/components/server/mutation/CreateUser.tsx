import { gql } from "@apollo/client";

export const CreateUser =()=>{
  const CREATE_USER = gql
  `
  mutation CreateUserMutation($userID: ID!, $Username:String!, $Email:String!, $Password: String!){
    createUser(input:{userID:$userID, username:$Username,email:$Email, password:$Password}){
      userID
      username
    }
  }
  `
  return CREATE_USER
}
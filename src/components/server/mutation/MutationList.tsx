import { gql } from "@apollo/client";

export const REGISTER_USER = gql
  `
  mutation CreateUserMutation($Username:String!, $Email:String!, $Password: String!){
    insert_User_one(object:{username:$Username, email:$Email,password:$Password}){
      username
      email
      password
    }
  }
  `
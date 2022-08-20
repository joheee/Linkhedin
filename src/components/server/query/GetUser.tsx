import { gql } from "@apollo/client";

export const GetUser =()=>{
    const GET_USER = gql
    `
    query{
        users{
          userID
          username
          email
          password
        }
      }
    `
    return GET_USER
}
import { gql } from "@apollo/client";

export const REGISTER_USER = gql
  `
  mutation CreateUserMutation($Username:String!, $Email:String!, $Password: String!){
    insert_User_one(object:{username:$Username, email:$Email,password:$Password}){
      user_id
      username
      email
      password
      createdAt
      verification
    }
  }
  `

export const UPDATE_USER_BY_PK_VERIFICATION = gql 
`
mutation UpdateUserByPK($user_id:uuid!){
  update_User_by_pk(_set:{verification:true}, pk_columns:{user_id:$user_id}){
    user_id
    username
    email
    password
    createdAt
    verification
  }
}
`

export const UPDATE_USER_BY_PK_NEW_PASSWORD = gql 
`
mutation UpdateUserByPK($password:String,$user_id:uuid!){
  update_User_by_pk(_set:{password:$password}, pk_columns:{user_id:$user_id}){
    user_id
    username
    email
    password
    createdAt
    verification
  }
}
`
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
    insert_UserDetail_one(object:{username:$Username,description:"lorem ipsum jojojo"}){
      username
      description
      photoBanner
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

export const UPDATE_USER_BY_PK_NEW_USERNAME = gql 
`
mutation UpdateUserByPK($username:String,$user_id:uuid!){
  update_User_by_pk(_set:{username:$username}, pk_columns:{user_id:$user_id}){
    user_id
    username
    email
    password
    createdAt
    verification
  }
}
`

export const UPDATE_USER_BY_PK_NEW_DESCRIPTION = gql 
`
mutation UpdateUserByPK($description:String,$username:String!){
  update_UserDetail_by_pk(_set:{description:$description}, pk_columns:{username:$username}){
    username
    description
    photoBanner
    photoProfile
  }
}
`

export const UPDATE_USER_BY_PK_NEW_PHOTO_PROFILE = gql 
`
mutation UpdateUserByPK($photoProfile:String,$username:String!){
  update_UserDetail_by_pk(_set:{photoProfile:$photoProfile}, pk_columns:{username:$username}){
    username
    description
    photoBanner
    photoProfile
  }
}
`

export const UPDATE_USER_BY_PK_NEW_PHOTO_BANNER = gql 
`
mutation UpdateUserByPK($photoBanner:String,$username:String!){
  update_UserDetail_by_pk(_set:{photoBanner:$photoBanner}, pk_columns:{username:$username}){
    username
    description
    photoBanner
    photoProfile
  }
}
`

export const UPDATE_USER_BY_PK_NEW_PHOTO_ABOUT = gql 
`
mutation UpdateUserByPK($about:String,$username:String!){
  update_UserDetail_by_pk(_set:{about:$about}, pk_columns:{username:$username}){
    username
    description
    photoBanner
    photoProfile
    about
  }
}
`

export const CREATE_NEW_EXPERIENCE = gql 
`
mutation CreateNewExperience($username:String!,$experience:String,$company:String,$location:String){
  insert_UserExperience_one(object:{username:$username,experience:$experience,company:$company, location:$location}){
    experience
    createdAt
    company
    experienceImage
    experience_id
    location
  }
}
`
export const UPDATE_PICTURE_EXPERIENCE = gql
`
mutation UpdatePictureExperience($username:String!,$experienceImage:String,$experience_id:uuid!){
  update_UserExperience_by_pk(_set:{experienceImage:$experienceImage}, pk_columns:{username:$username,experience_id:$experience_id}){
  experience
  createdAt
  company
  experienceImage
  experience_id
  location
}
}
`
export const UPDATE_CARD_EXPERIENCE = gql
`
mutation UpdatePictureExperience($username:String!,$experience_id:uuid!,$experience:String,$company:String,$location:String){
  update_UserExperience_by_pk(_set:{experience:$experience, company:$company, location:$location}, pk_columns:{username:$username,experience_id:$experience_id}){
  experience
  createdAt
  company
  experienceImage
  experience_id
  location
}
}
`
export const DELETE_CARD_EXPERIENCE = gql 
`
mutation DeletePictureExperience($username:String!,$experience_id:uuid!){
  delete_UserExperience_by_pk(experience_id:$experience_id, username:$username){
  experience
  createdAt
  company
  experienceImage
  experience_id
  location
}
}
`


export const CREATE_NEW_EDUCATION = gql 
`
mutation CreateNewEducation($username:String!,$education:String,$institute:String,$location:String){
  insert_UserEducation_one(object:{username:$username,education:$education,institute:$institute, location:$location}){
    education_id
    education
    institute
    username
    createdAt
    location
    educationImage
  }
}
`
export const UPDATE_PICTURE_EDUCATION = gql
`
mutation UpdatePictureExperience($educationImage:String,$education_id:uuid!){
  update_UserEducation_by_pk(_set:{educationImage:$educationImage}, pk_columns:{education_id:$education_id}){
  education_id
  education
  institute
  username
  createdAt
  location
  educationImage
  }
}
`
export const UPDATE_CARD_EDUCATION = gql
`
mutation UpdatePictureExperience($education_id:uuid!,$education:String,$institute:String,$location:String){
  update_UserEducation_by_pk(_set:{education:$education,institute:$institute,location:$location}, pk_columns:{education_id:$education_id}){
  education_id
  education
  institute
  username
  createdAt
  location
  educationImage
  }
}
`
export const DELETE_CARD_EDUCATION = gql 
`
mutation DeletePictureExperience($education_id:uuid!){
	delete_UserEducation_by_pk(education_id:$education_id){
    education_id
    education
    institute
    username
    createdAt
    location
    educationImage
}
}
`

export const CREATE_NEW_LICENSE = gql 
`
mutation CreateNewLicenses($username:String!,$license:String,$institute:String){
  insert_UserLicenses_one(object:{username:$username, license:$license,institute:$institute}){
    createdAt
    educationImage
    institute
    license
    license_id
    username
  }
}
`
export const UPDATE_PICTURE_LICENSE = gql 
`
mutation CreateNewLicenses($educationImage:String!,$license_id:uuid!){
  update_UserLicenses_by_pk(_set:{educationImage:$educationImage}, pk_columns:{license_id:$license_id}){
    createdAt
    educationImage
    institute
    license
    license_id
    username
  }
}
`
export const UPDATE_CARD_LICENSE = gql
`
mutation CreateNewLicenses($license:String,$institute:String, $license_id:uuid!){
  update_UserLicenses_by_pk(_set:{license:$license,institute:$institute}, pk_columns:{license_id:$license_id}){
    createdAt
    educationImage
    institute
    license
    license_id
    username
  }
}
`
export const DELETE_CARD_LICENSE = gql
`
mutation CreateNewLicenses($license_id:uuid!){
  delete_UserLicenses_by_pk(license_id:$license_id){
    createdAt
    educationImage
    institute
    license
    license_id
    username
  }
}
`

export const CONNECT_MECHANISM = gql 
`
mutation ConnectMecha($sender:String!,$receiver:String){
  insert_UserConnect_one(object:{senderConnect:$sender, receiverConnect:$receiver}){
    connect_id
    isConnected
    receiverConnect
    senderConnect
  }
}
`
export const CONNECT_ACCEPT = gql
`
mutation GetRequestConnect($connect_id:uuid!){
  update_UserConnect_by_pk(_set:{isConnected:true}, pk_columns:{connect_id:$connect_id}){
  	connect_id
		senderConnect
  	receiverConnect
    isConnected
    createdAt
  }
}
`
export const CONNECT_REJECT = gql
`
mutation GetRequestConnect($connect_id:uuid!){
  delete_UserConnect_by_pk(connect_id:$connect_id){
  	connect_id
		senderConnect
  	receiverConnect
    isConnected
    createdAt
  }
}
`

export const FOLLOW_MECHANISM = gql
`
mutation followMechanism($sender:String!, $target:String!){
	insert_UserFollower_one(object:{sendFollow:$sender, targetFollow:$target}){
    follower_id
    sendFollow
  	targetFollow
    createdAt
  }
}
`
export const UNFOLLOW_MECHANISM = gql
`
mutation deleteFollower($follower_id:uuid!){
  delete_UserFollower_by_pk(follower_id:$follower_id){
    createdAt
    follower_id
    sendFollow
    targetFollow
  }
}
`


export const CREATE_JOB = gql
`
mutation CreateJob($title:String, $company:String,$workplace:String, $location:String, $employment:String,$username:String){
  insert_UserJob_one(object:{title:$title, company:$company,location:$location,employmentType:$employment, workplaceType:$workplace,username:$username}){
    job_id
    createdAt
    company
    employmentType
    workplaceType
    location
    picture
    title
    User {
      username
    }
  }
}
`
export const UPDATE_JOB_PICTURE = gql
`
mutation updateJob($job_id:uuid!, $picture:String!){
  update_UserJob_by_pk(_set:{picture:$picture}, pk_columns:{job_id:$job_id}){
    job_id
    createdAt
    company
    employmentType
    workplaceType
    location
    picture
    title
    User {
      username
    }
  }
}
`
export const CREATE_CHAT_ROOM = gql
`
mutation CreateChatRoom($receiver:String, $sender:String){
  insert_ChatRoom_one(object:{receiver:$receiver,sender:$sender}){
    chat_room_id
    receiver
    sender
  }
}
`
export const CREATE_MESSAGE = gql
`
mutation sendMessage($chat_room_id:uuid!,$receiver:String!, $sender:String!, $message:String!) {
  insert_ChatMessage_one(object:{chat_room_id:$chat_room_id,receiver:$receiver, sender:$sender, message:$message}){
    chat_room_id
    sender
    receiver
    message
    createdAt
    chat_message_id
  }
}
`

export const UPDATE_IMAGE_MESSAGE = gql
`
mutation sendMessage($chat_message_id:uuid!,$image:String!) {
  update_ChatMessage_by_pk(_set:{image:$image}, pk_columns:{chat_message_id:$chat_message_id}){
    chat_room_id
    sender
    receiver
    message
    createdAt
    chat_message_id
  }
}
`

export const DELETE_POST = gql
`
mutation deletePost($post_id:uuid!){
  delete_Post_by_pk(post_id:$post_id){
    post_id
    username
    video
    photo
    description
  }
}
`
export const CREATE_POST = gql
`
mutation CreatePost($username:String!, $description:String){
  insert_Post_one(object:{username:$username, description:$description}){
    post_id
    username
    description
    photo
    video
  }
}
`
export const UPDATE_POST = gql
`
mutation CreatePost($photo:String, $video:String,$post_id:uuid!){
  update_Post_by_pk(_set:{photo:$photo,video:$video},pk_columns:{post_id:$post_id}){
    post_id
    description
    photo
    username
    video
  }
}
`
export const DELETE_LIKE = gql 
`
mutation DeleteLike($post_like_id:uuid!){
  delete_PostLike_by_pk(post_like_id:$post_like_id){
    post_like_id
    post_id
    likedBy
  }
}
`

export const INSERT_LIKE = gql
`
mutation InsertLike($post_id:uuid!,$likedBy:String!){
  insert_PostLike_one(object:{post_id:$post_id,likedBy:$likedBy}){
    post_like_id
    post_id
    likedBy
  }
}
`

export const CREATE_POST_COMMENT = gql
`
mutation CreateComment($username:String!,$reply_id:uuid,$post_id:uuid!,$message:String){
  insert_PostComment_one(object:{username:$username,reply_id:$reply_id,post_id:$post_id,message:$message}){
    comment_id
    post_id
    reply_id
    username
    message
    createdAt
  }
}
`

export const CREATE_SHARE = gql
`
mutation CreateShare($post_id:uuid!, $username:String!){
  insert_PostShare_one(object:{post_id:$post_id, username:$username}){
    share_id
    post_id
    username
    Post {
      post_id
      description
    }
  }
}
`

export const UPDATE_ALL_FIELD_JOB = gql
`
mutation UpdateJob($picture:String,$title:String, $company:String,$workplace:String, $location:String, $employment:String, $job_id:uuid!){
  update_UserJob_by_pk(_set:{title:$title,company:$company,workplaceType:$workplace,location:$location,employmentType:$employment, picture:$picture}, pk_columns:{job_id:$job_id}){
    job_id
    createdAt
    company
    employmentType
    workplaceType
    location
    picture
    title
    User {
      username
    }
  }
}
`
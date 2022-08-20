export interface ButtonGoogleProp {
    text: string
}

export interface LoginRegisterInterface {
    isLogin: boolean
    setIsLogin: (active: boolean) => void
}

export interface LoginControllerInterface {
    userEmailInput:string
    passInput:string
    setError: (activate:string) => void
    allUserContext:Array<CreateUserInterface>
}

export interface CreateUserInterface {
    userID:string
    username:string
    email:string
    password:string
}

export interface RegisterControllerInterface {
    usernameInput:string
    emailInput:string
    passwordInput:string
    rePasswordInput:string
    setError:(activate:string)=>void
    allUserContext:Array<CreateUserInterface>|null
}

export interface ProfileStatInterface {
    label: string
    number: number
}

export interface RecommendCardInterface {
    username: string
    profile: string
    description: string
    posts?: Array<PostInterface>
}

export interface PostInterface {
    description: string
    picture?: string
    video?: string
    comment: number
    share: number
    like: number
}

export interface LoadingAnimationInterface {
    height: string
    width: string
}

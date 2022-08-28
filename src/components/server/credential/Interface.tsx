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
    banner?:string
    posts?: Array<PostInterface>
}

export interface PropRecommendCardInterface {
    prop: RecommendCardInterface
    attr?: React.HTMLAttributes<HTMLDivElement>
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

export interface RichTextInterface {
	content: string
}

export interface SearchPopUpInterface {
    prop: Array<RecommendCardInterface>
}

export interface MyNetworkButtonInterface {
    dummyData: number | null
    icon: string
    text: string
    navigate: string
}

export interface JobMenuIconTemplatesInterface {
    text:string
    icon?:string
    navigate?:string
}

export interface RecommendJobCardInterface {
    picture?: string
    title: string
    company: string
    location: string
    savedBy?: Array<string>
}

export interface MyExperienceCardInterface {
    picture:string
    title:string
    company:string
    timestamp:string
    location:string
}
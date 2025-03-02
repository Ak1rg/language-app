export interface IAppState {
    sideBarWide:boolean
    theme:string
    routes:IRoutes
}

interface IRoutes {
    lists:string
    words:string
}
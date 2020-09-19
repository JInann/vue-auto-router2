// Type definitions for notify version 1.0.0
// Project: notify
// Definitions by: yanbin.ji

import { RouteConfig } from "vue-router";

/*~ On this line, import the module which this module adds to */
interface autoRouterOption{
  views:__WebpackModuleApi.RequireContext
  routeNameSplitter?:string
  supportedExtensions?:string []
  trailingSlash?:boolean
}
/*~ Here, declare the same module as the one you imported above */
declare module 'vue-auto-router2' {
  export function createRoutes (option:autoRouterOption):RouteConfig[]
}

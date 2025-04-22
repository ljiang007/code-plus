declare module 'vue-router' {
  export interface RouteRecordRaw {
    path: string;
    component?: any;
    name?: string;
    children?: RouteRecordRaw[];
    redirect?: string | { name: string };
    meta?: Record<string, any>;
    props?: boolean | Record<string, any> | ((to: any) => Record<string, any>);
  }

  export function createRouter(options: {
    history: any;
    routes: RouteRecordRaw[];
  }): any;

  export function createWebHistory(base?: string): any;
} 
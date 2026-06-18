export interface NavItem {
    path: string;
    component?: any;
    name?: string;
    // ...
    meta?: {
        title?: string;
        mainMenu?: boolean;
        roles?: string[];
    };
}

export type NavItems = NavItem[];
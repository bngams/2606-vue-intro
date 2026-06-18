import type { NavItems } from '../../models/NavItem.ts';

// ...
const todosRoutes: NavItems = [
    {
        path: '/todos',
        component: () => import('./pages/TodoBoard.vue'),
        name: 'TodoBoard',
        meta: { title: 'Todo Board', mainMenu: true, roles: ['user'] }
    }
]
    
export default todosRoutes;
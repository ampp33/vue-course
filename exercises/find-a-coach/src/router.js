import ListCoaches from './components/ListCoaches.vue'
import CoachDetails from './components/CoachDetails.vue'
import RegisterCoach from './components/RegisterCoach.vue'
import ContactCoach from './components/ContactCoach.vue'
import Requests from './components/Requests.vue'

import { createWebHistory } from 'vue-router'

export default {
    routes: [
        {
            path: '/coaches',
            alias: '/',
            component: ListCoaches
        },
        {
            path: '/coach/:id',
            component: CoachDetails,
            props: true
        },
        {
            path: '/register-coach',
            component: RegisterCoach
        },
        {
            path: '/contact-coach/:id',
            component: ContactCoach,
            props: true
        },
        {
            path: '/requests',
            component: Requests
        }
    ],
    history: createWebHistory()
}
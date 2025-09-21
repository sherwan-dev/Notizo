import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp({
    data(){
        return{
            loginText: "Log in:"
        }
    }
})

app.use(createPinia())
app.use(router)

app.mount('#app')

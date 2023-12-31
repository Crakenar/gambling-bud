import {createApp, provide, h} from 'vue'
import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client/core";
import {DefaultApolloClient} from "@vue/apollo-composable";
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const httpLink = createHttpLink({
    uri: 'http://localhost:4001/graphql' //see back end
})

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});
const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App)
});

app.use(createPinia())
app.use(router)

app.mount('#app')

import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
    axios.defaults.baseURL = 'http://localhost:80'

    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    return {
        provide: { 
            axios: axios
        },
    }
});
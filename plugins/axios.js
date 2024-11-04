import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
    axios.defaults.baseURL = 'https://api.barberconnect.xyz'

    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    return {
        provide: { 
            axios: axios
        },
    }
});
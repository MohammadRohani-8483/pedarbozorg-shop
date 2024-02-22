import axios from "axios";

const apiPedarBozorg = axios.create({
    baseURL: 'https://api.pedarbozorg.shop',
    headers: {
        'Content-Type': 'application/json',
        Auth: 'Bearer Token'
    }
})

export default apiPedarBozorg
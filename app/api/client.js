import { create } from 'apisauce'

const apiClient = create({
    baseURL: "https://rest.coinapi.io/v1/",
    headers: {
        "X-CoinAPI-Key": "EF293836-D321-4AD6-8606-A7E93090E163"
    }
})

export default apiClient
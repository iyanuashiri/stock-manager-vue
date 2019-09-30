import axios from 'axios'

const client = axios.create({
    baseURL: 'https://stock-manager.herokuapp.com',
    json: true
})

export default {
    async execute (method, resource, data) {
        let accessToken = await localStorage.getItem('authToken')
        return client({
            method,
            url: resource,
            data,
            headers: {
                Authorization: `Token ${accessToken}`
            }
        }).then(req => {
            return req.data
        })
    },
    getStocks () {
        return this.execute('get', `/stocks/`)
    },
    buyStock (symbol, shares) {
        return this.execute('post', `/stocks/${symbol}/buy/${shares}/`)
    },
    sellStock (symbol, shares) {
        return this.execute('put', `/stocks/${symbol}/sell/${shares}/`)
    },
    searchStock (symbol) {
        return this.execute('get', `/stocks/${symbol}/search/`)
    },
    getTransactions () {
        return this.execute('put', `/transactions/`)
    },


}
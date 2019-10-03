<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a>Stock Manager</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link :to="{name: 'stocks'}" class="nav-item nav-link active" href="#">My Stocks</router-link>
                <router-link :to="{name: 'stock-buy'}" class="nav-item nav-link" href="#">Buy</router-link>
                <router-link :to="{name: 'stock-sell'}" class="nav-item nav-link" href="#">Sell</router-link>
                <router-link :to="{name: 'stock-search'}" class="nav-item nav-link" href="#">Search Stock</router-link>
                <router-link :to="{name: 'transactions'}" class="nav-item nav-link" href="#">My Transactions</router-link>
            </div>
        </div>
        <button v-on:click="signOut" class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
    </nav>

</template>

<script>
    import 'bootstrap'
    import 'bootstrap/dist/css/bootstrap-grid.min.css'
    import 'bootstrap/dist/css/bootstrap.css'
    import axios from 'axios'
    export default {
        name: 'NavBar',
        methods: {
            signOut: async function () {
                let url = 'http://stockplace.herokuapp.com/api/auth/token/logout/'
                await axios.post(url)
                localStorage.removeItem('authToken')
                alert('You have logged out successfully')
            }
        }
    }
</script>

<style scoped>

</style>

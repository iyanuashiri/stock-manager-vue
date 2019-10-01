<template>
    <div id="StockList">
        <NavBar></NavBar>

        <div v-for="stock in stocks.results" :key="doc.id">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{stock.symbol}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{stock.name}}</h6>
                    <p class="card-text">Total worth: {{stock.total_price}}</p>
                    <a href="#" class="card-link">{{stock.unit_price}} Naira per stcok</a>
                    <a href="#" class="card-link">Total stocks: {{stock.shares}}</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import api from "../api";
    import NavBar from "./NavBar";
    export default {
        name: "StockList",
        components: {NavBar},
        data () {
            return {
                stocks: []
            }
        },
        methods: {
            getStocks: async function () {
                this.stocks = await api.getStocks()
            }
        },
        async mounted () {
            this.getStocks()
        }
    }
</script>

<style scoped>

</style>
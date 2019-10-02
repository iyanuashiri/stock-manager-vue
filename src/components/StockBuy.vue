<template>
    <div id="StockBuy">
        <NavBar></NavBar>

        <form v-on:submit.prevent="buyStock">
            <div>
                <label for="symbol"></label>
                <input id="symbol" name="symbol" type="text" v-model="model.symbol">
            </div>
            <div>
                <label for="price"></label>
                <input id="price" name="price" type="text" v-model="model.shares">
            </div>
            <div>
                <button type="submit">Buy</button>
            </div>
        </form>
    </div>
    
</template>

<script>
    import api from "../api";
    import NavBar from "./NavBar";
    export default {
        name: "StockBuy",
        components: {NavBar},
        data () {
            return {
                model: {}
            }
        },
        methods: {
            buyStock: async function () {
                await api.buyStock(this.model)
            }
        },

    }
</script>

<style scoped>

</style>
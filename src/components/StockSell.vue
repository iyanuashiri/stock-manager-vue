<template>
    <div id="StockSell">
        <NavBar></NavBar>

        <form v-on:submit.prevent="sellStock">
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
        name: "StockSell",
        components: {NavBar},
        data () {
            return {
                model: {}
            }
        },
        methods: {
            sellStock: async function () {
                await api.sellStock(this.model)
            }
        },

    }
</script>

<style scoped>

</style>
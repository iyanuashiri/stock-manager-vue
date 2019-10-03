<template>
    <div id="StockSell">
        <NavBar></NavBar>

        <form v-on:submit.prevent="sellStock">
            <div class="form-group">
                <div class="col-4">
                    <label for="symbol"></label>
                    <input id="symbol" name="symbol" class="form-control" placeholder="symbol" type="text" v-model="model.symbol">
                </div>
                <div class="col-4">
                    <label for="price"></label>
                    <input id="price" name="price" class="form-control" placeholder="number of shares" type="text" v-model="model.shares">
                </div>
                <div class="col-4">
                    <button type="submit" class="btn btn-primary">Sell</button>
                </div>
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
                await api.sellStock(this.model.symbol, this.model.shares);
                alert(`${this.model.shares} of ${this.model.symbol} has been sold.`);
                await this.$router.push({name: 'stocks'})
            }
        },
    }
</script>

<style scoped>

</style>
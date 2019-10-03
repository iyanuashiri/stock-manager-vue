<template>
    <div id="StockBuy">
        <NavBar></NavBar>

        <form v-on:submit.prevent="buyStock">
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
                    <button type="submit" class="btn btn-primary">Buy</button>
                </div>
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
                await api.buyStock(this.model.symbol, this.model.shares);
                alert(`${this.model.symbol} has been bought.`);
                await this.$router.push({name: 'stocks'})
            }
        },

    }
</script>

<style scoped>

</style>
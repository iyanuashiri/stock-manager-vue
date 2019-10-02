<template>
    <div id="StockSearch">
        <NavBar></NavBar>

        <form v-on:submit.prevent="sellStock">
            <div>
                <label for="symbol"></label>
                <input id="symbol" name="symbol" type="text" v-model="model.symbol">
            </div>

            <div>
                <button type="submit">Search</button>
            </div>
        </form>

        <div v-if="seen">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{result.company_name}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{result.price}}</h6>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import api from "../api";
    import NavBar from "./NavBar";
    export default {
        name: "StockSearch",
        components: {NavBar},
        data () {
            return {
                model: {},
                result: {},
                seen: false
            }
        },
        methods: {
            searchStock: async function () {
                this.result = await api.searchStock(this.model.symbol);
                this.seen = true
            }
        }
    }
</script>

<style scoped>

</style>
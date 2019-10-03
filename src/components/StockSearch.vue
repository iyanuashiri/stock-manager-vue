<template>
    <div id="StockSearch">
        <NavBar></NavBar>

        <form v-on:submit.prevent="searchStock">
            <div class="form-group">
                <div class="col-4">
                    <label for="symbol"></label>
                    <input id="symbol" class="form-control" name="symbol" type="text" v-model="model.symbol">
                </div>

                <div class="col-4">
                    <button type="submit" class="btn btn-primary">Search</button>
                </div>
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
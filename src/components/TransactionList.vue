<template>
    <div id="TransactionList">
        <NavBar></NavBar>

        <div v-for="transaction in transactions.results" :key="transaction.id">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{transaction.user}} {{transaction.verb}} {{transaction.target}}</h5>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import api from "../api";
    import NavBar from "./NavBar";
    export default {
        name: "TransactionList",
        components: {NavBar},
        data () {
            return {
                transactions: []
            }
        },
        methods: {
            getTransactions: async function () {
                this.transactions = await api.getTransactions()
            }
        },
        async mounted () {
            this.getTransactions()
        }
    }
</script>

<style scoped>

</style>
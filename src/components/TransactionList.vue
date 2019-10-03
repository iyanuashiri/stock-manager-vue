<template>
    <div id="TransactionList">
        <NavBar></NavBar>

        <div v-for="transaction in transactions" :key="transaction.id">
            <div class="card" style="width: 30rem;">
                <div class="card-body">
                    <h5 class="card-title">{{transaction.verb}} of {{transaction.target.name}}</h5>
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
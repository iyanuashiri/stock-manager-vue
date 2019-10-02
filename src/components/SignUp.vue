<template>
    <div id="Signup">
        <h1 class="display-1">Create an Account</h1>
        <form @submit.prevent="signUp">
            <div class="col-md-10">
                <div class="form-group row">
                    <label for="email" class="col-md-4 col-form-label form-control-label"></label>
                    <div class="col-md-6">
                        <input v-model="model.email" type="email" placeholder="Email address" id="email" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="firstname" class="col-md-4 col-form-label form-control-label"></label>
                    <div class="col-md-6">
                        <input v-model="model.first_name" type="text" placeholder="First name" id="firstname" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="lastname" class="col-md-4 col-form-label form-control-label"></label>
                    <div class="col-md-6">
                        <input v-model="model.last_name" type="text" placeholder="Last name" id="lastname" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-md-4 col-form-label form-control-label"></label>
                    <div class="col-md-6">
                        <input v-model="model.password" type="password" placeholder="Password" required>
                    </div>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary mb-3">Sign up</button>
                </div>
            </div>
        </form>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name: "SignUp",
        components: {},
        data () {
            return {
                model: {}
            }
        },
        methods: {
            signUp: async function () {
                let url = 'https://stockplace.herokuapp.com/auth/users/'
                axios.post(url, this.model).then(response => {
                    alert('Your account has been created successfully')
                    this.$router.push({name: 'sign-in'})
                })
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div id="Signin">
        <h1 class="display-3">Login</h1>
        <form @submit.prevent="signIn">
            <div class="col-md-10">
                <div class="form-group row">
                    <label for="email" class="col-md-4 col-form-label form-control-label"></label>
                    <div class="col-md-6">
                        <input v-model="model.email" type="email" placeholder="you@gmail.com" id="email" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-md-4 col-form-label form-control-label"></label>
                    <div class="col-md-6">
                        <input v-model="model.password" type="password" placeholder="Password" id="password" required>
                    </div>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary mb-3">Sign in</button>
                </div>
            </div>
        </form>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name: "SignIn",
        components: {},
        data () {
            return {
                model: {}
            }
        },
        methods: {
            signIn: async function () {
                let url = 'https://stockplace.herokuapp.com/auth/token/login';
                axios.post(url, this.model).then(response => {
                    localStorage.setItem('authToken', response.data.auth_token);
                    localStorage.setItem('email', this.model.email);
                    alert('You have logged in successfully');
                    this.$router.push({name: 'stocks'})
                })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
    }
</script>

<style scoped>

</style>
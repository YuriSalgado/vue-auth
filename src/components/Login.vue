<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <div class="form-group">
            <label>Email</label>
            <input v-model="email" type="email" class="form-control" placeholder="Email"/>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input v-model="password" type="password" class="form-control" placeholder="Password"/>
        </div>

        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async handleSubmit() {
                const response = await axios.post('login', {
                    email: this.email,
                    password: this.password
                });

                localStorage.setItem('token', response.data.token);
            }
        }
    }
</script>
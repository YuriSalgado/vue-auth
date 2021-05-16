<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>
        <div class="form-group">
            <label>First Name</label>
            <input v-model="first_name" type="text" class="form-control" placeholder="James"/>
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input v-model="last_name" type="text" class="form-control" placeholder="Wang"/>
        </div>
        <div class="form-group">
            <label>Email</label>
            <input v-model="email" type="email" class="form-control" placeholder="james.wang@mail.com"/>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input v-model="password" type="password" class="form-control" placeholder="p4ssw0rd."/>
        </div>
        <div class="form-group">
            <label>Confirm Password</label>
            <input v-model="password_confirm" type="password" class="form-control" placeholder="p4ssw0rd."/>
        </div>

        <button class="btn btn-primary btn-block">Sign Up</button>
    </form>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Register',
        data() {
            return {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirm: ''
            }
        },
        methods: {
            async handleSubmit() {
                const response = await axios.post('register', {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    password_confirm: this.password_confirm
                });

                console.log(response);
                this.$router.push('/login');
            }
        }
    }

</script>
<template>
  <div>
    <!-- <NavBar></NavBar> -->
    <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="border-0 shadow rounded-3 my-5">
              <div class="card-body p-4 p-sm-5">
                <h3 class="card-title text-center mb-5 fw-light fs-5">Sign Up</h3>
                <form v-on:submit.prevent="registerUser">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Username"  v-model="username">
                    <label for="floatingInput">Username</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="First name"  v-model="first_name">
                    <label for="floatingInput">First Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Last name"  v-model="last_name">
                    <label for="floatingInput">Last Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="User@domain.com"  v-model="email">
                    <label for="floatingInput">Email</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"  v-model="password">
                    <label for="floatingPassword">Password</label>
                  </div>

                    <div class="form-check mb-3">
                    Already a user?<router-link :to = "{ name:'login' }"> Sign in</router-link>
                  </div>
                  <div class="d-grid">
                    <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                      up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  // import NavBar from '../components/Navbar'
  export default {
    name: 'register',
    // components: {
    //   NavBar
    // },
    data () {
      return {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: ''
        // confirm: ''
      }
    },
    methods: {
      registerUser () {
        this.$store.dispatch('registerUser', {
          username: this.username,
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password
          // confirm: this.confirm
        }).then(() => {
          this.$router.push({ name: 'login' })
        })
      }
    }
  }
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Quicksand) ;
  .register-form {
    background-color: #606366;
    width: 100%;
    margin: 78px auto;
    padding: 0;
    text-align: center;
  }
</style>

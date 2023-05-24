<template>
    <!-- Page content-->
    <div>
      <NavBar></NavBar>
      <!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! -->
    <body>
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-5">
              <div class="card-body p-4 p-sm-5">
                <h3 class="card-title text-center mb-5 fw-light fs-5">New Category</h3>
                <form v-on:submit.prevent="addCategory">
                  <div class="form-floating mb-3">
                    <input type="category_name" class="form-control" id="floatingInput" placeholder="Category Name"  v-model="category_name">
                    <label for="floatingInput">Category Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="description" class="form-control" id="floatingDescription" placeholder="Description"  v-model="description">
                    <label for="floatingDescription">Description</label>
                  </div>
                  <div class="d-grid">
                    <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Add</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
  </template>
  <script>
   /* eslint-disable */
   import axios from 'axios'
   import { mapState } from 'vuex'
    import { getAPI } from '../api/axios-base'
    import NavBar from '../components/Navbar'
    export default {
      name: 'Home',
      computed: mapState(['accessToken', 'APIData']),
      components: {
        NavBar
      },
      data () {
      return {
        category_name: '',
        description: ''
      }
      },
      
  methods: {
    addCategory() {
        axios.post('/categories/create/', {
            category_name: this.category_name,
            description: this.description
        },
        { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }) // proof that your access token is still valid; if not the
        // axios getAPI response interceptor will attempt to get a new  access token from the server. check out ../api/axios-base.js getAPI instance response interceptor
          .then(response => {
            console.log('GetAPI successfully got the categories')
            this.$store.state.APIData = response.data // store the response data in store
            console.log(response.data)
            this.$router.push({ name: 'categories' })
          })
          .catch(err => { // refresh token expired or some other error status
            console.log(err)
          })
    }
    }
    }
  </script>
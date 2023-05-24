<template>
    <!-- Page content-->
    <div>
      <NavBar></NavBar>
      <div class="container">
          <div class="text-center mt-5">
              <h1>Profiles</h1>
              <p class="lead">A list of profiles</p>
              <p>profiles</p>
          </div>
      </div>
  </div>
  </template>
  <script>
   /* eslint-disable */
   import axios from 'axios'
   import { mapState } from 'vuex'
    import { getAPI } from '../api/axios-base'
    import NavBar from '../components/Navbar'
    export default {
      name: 'Profiles',
      computed: mapState(['accessToken', 'APIData']),
      components: {
        NavBar
      },
      data () {
      return {
        email: ''
      }
      },
      mounted() {
        this.getProfilesData()
    },
  methods: {
    getProfilesData() {
        axios.get('https://blesketke-live.com/api/v1/carts/add_cart/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }) // proof that your access token is still valid; if not the
        // axios getAPI response interceptor will attempt to get a new  access token from the server. check out ../api/axios-base.js getAPI instance response interceptor
          .then(response => {
            console.log('GetAPI successfully got the profiles')
            this.$store.state.APIData = response.data // store the response data in store
            console.log(response.data)
          })
          .catch(err => { // refresh token expired or some other error status
            console.log(err)
          })
    }
    }
    }
  </script>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
/* eslint-disable */
 import { mapState } from 'vuex'
  import { getAPI } from './api/axios-base'
  export default {
    name: 'Home',
    computed: mapState(['accessToken', 'APIData']),
    data () {
    return {
      email: ''
    }
    },
    created () {
      if (this.$store.state.accessToken != null) {
        getAPI.get('/auth/users/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }) // proof that your access token is still valid; if not the
        // axios getAPI response interceptor will attempt to get a new  access token from the server. check out ../api/axios-base.js getAPI instance response interceptor
          .then(response => {
            console.log('GetAPI successfully got the users')
            this.$store.state.APIData = response.data // store the response data in store
            // console.log(response.data[0].username)
            this.email = response.data[0].email
          })
          .catch(err => { // refresh token expired or some other error status
            console.log(err)
          })
    }
  }
  }
</script>

<style>
  /* @import url(https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css) ; */

  body {
    margin: 0;
    padding: 0;
    width: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

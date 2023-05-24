<template>
    <!-- Page content-->
    <div>
      <NavBar></NavBar>
      <!-- Breadcrumb Start -->
    <div class="container-fluid">
        <div class="row px-xl-5">
            <div class="col-12">
                <nav class="breadcrumb bg-light mb-30">
                    <a class="breadcrumb-item text-dark" href="#">Home</a>
                    <a class="breadcrumb-item text-dark" href="#">Shop</a>
                    <span class="breadcrumb-item active">Shopping Cart</span>
                </nav>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->
    <!-- Cart Start -->
    <div class="container-fluid">
        <div class="row px-xl-5">
            <div class="col-lg-8 table-responsive mb-5">
                <table class="table table-light table-borderless table-hover text-center mb-0">
                    <thead class="thead-dark">
                        <tr>
                            <th>Cart Item ID</th>
                            <th>Photo</th>
                            <th>Cart</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody class="align-middle">
                        <tr v-for="item in cartData" :key="item.id" :v-if = "item.id != null">
                          <td class="align-middle">{{ item.id }}</td>
                            <td class="align-middle"><img src="img/product-1.jpg" alt="" style="width: 50px;"></td>
                            <td class="align-middle">{{ item.cart }}</td>
                            <td class="align-middle">{{ item.product }}</td>
                            <td class="align-middle">{{ item.quantity }}</td>
                            <!-- <td class="align-middle">
                                <div class="input-group quantity mx-auto" style="width: 100px;">
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-minus disabled" >
                                        <i class="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" :value="item.quantity">
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-plus disabled">
                                            <i class="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td> -->
                            <td class="align-middle"><button class="btn btn-sm btn-danger"><i class="fa fa-times"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-4">
                <form class="mb-30" action="">
                    <div class="input-group">
                        <input type="text" class="form-control border-0 p-4" placeholder="Coupon Code">
                        <div class="input-group-append">
                            <button class="btn btn-primary disabled">Apply Coupon</button>
                        </div>
                    </div>
                </form>
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Cart Summary</span></h5>
                <div class="bg-light p-30 mb-5">
                    <div class="border-bottom pb-2">
                        <div class="d-flex justify-content-between mb-3">
                            <h6>Subtotal</h6>
                            <h6>Kshs.0</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-medium">Shipping</h6>
                            <h6 class="font-weight-medium">Kshs.0</h6>
                        </div>
                    </div>
                    <div class="pt-2">
                        <div class="d-flex justify-content-between mt-2">
                            <h5>Total</h5>
                            <h5>Kshs.0</h5>
                        </div>
                        <button class="btn btn-block btn-primary font-weight-bold my-3 py-3 disabled">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Cart End -->
  </div>
  </template>
  <script>
   /* eslint-disable */
   import axios from 'axios'
   import { mapState } from 'vuex'
    // import { getAPI } from '../api/axios-base'
    import NavBar from '../components/Navbar'
    export default {
      name: 'Cart',
      computed: mapState(['accessToken', 'APIData']),
      components: {
        NavBar
      },
      data(){
    return {
      cartData: []
    };
  },
      mounted() {
        this.getCartData()
    },
  methods: {
    getCartData() {
        axios.get('https://blesketke-live.com/api/v1/carts/add_cart/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }) // proof that your access token is still valid; if not the
        // axios getAPI response interceptor will attempt to get a new  access token from the server. check out ../api/axios-base.js getAPI instance response interceptor
          .then(response => {
            // console.log('GetAPI successfully got the mpesa transactions')
            // this.$store.state.APIData = response.data // store the response data in store
            console.log(this.cartData = response.data.my_cart)

          })
          .catch(err => { // refresh token expired or some other error status
            console.log(err)
          })
    }
    }
    }
  </script>
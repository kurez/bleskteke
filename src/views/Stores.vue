<template>
    <!-- Page content-->
    <div>
      <NavBar></NavBar>
      <!-- <div class="container"> -->
        <!-- <vue-good-table
        title="Shop List Table"
        :columns="columns"
        :rows="rows"
        :paginate="true"
        :lineNumbers="true"
        :globalSearch="true" >
        <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'actions'">
          <a class="btn btn-sm primary"  @click="onRowClick(props.row.slug)">View</a>
        </span>
      </template>
      </vue-good-table> -->
      <!-- <div class="row">
      <div class="card col-4" v-for="item in rows" :key="item.id">
        <div class="imgBox">
        <img :src=" item.original_image " alt="mouse corsair" class="mouse">
        </div>
        <div class="contentBox">
        <h3>{{ item.product_name }}</h3>
        <h2 class="price">61.<small>98</small> €</h2>
        <a href="#" class="buy">Buy Now</a>
        </div>
        </div>
        </div>
      </div> -->
      <!-- Breadcrumb Start -->
    <div class="container-fluid">
        <div class="row px-xl-5">
            <div class="col-12">
                <nav class="breadcrumb bg-light mb-30">
                    <a class="breadcrumb-item text-dark" href="#">Home</a>
                    <a class="breadcrumb-item text-dark" href="#">Shop</a>
                    <span class="breadcrumb-item active">Shop List</span>
                </nav>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->
    <!-- Shop Start -->
    <div class="container">
        <div class="row px-xl-5">
            <!-- Shop Product Start -->
            <div class="col-lg-12 col-md-12">
                <div class="row pb-3">
                    <div class="col-12 pb-1">
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <div>
                                <button class="btn btn-sm btn-light"><i class="fa fa-th-large"></i></button>
                                <button class="btn btn-sm btn-light ml-2"><i class="fa fa-bars"></i></button>
                            </div>
                            <div class="ml-2">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Latest</a>
                                        <a class="dropdown-item" href="#">Popularity</a>
                                        <a class="dropdown-item" href="#">Best Rating</a>
                                    </div>
                                </div>
                                <div class="btn-group ml-2">
                                    <button type="button" class="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">10</a>
                                        <a class="dropdown-item" href="#">20</a>
                                        <a class="dropdown-item" href="#">30</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-8 pb-1" v-for="item in rows" :key="item.id">
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" :src="item.original_image" :alt="item.original_image">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" @click="onRowClick(item.slug)"><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">{{ item.product_name }}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2" v-if ="item.variation != ''">
                            <h5>Kshs.{{ item.variation[0].price }}.00</h5>
                            <!-- <h6 class="text-muted ml-2"><del>Ksh.{{ item.variation[0].price }}</del></h6> -->
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1" v-if ="item.variation != ''">
                            <!-- <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small> -->
                            <small>Quantity: {{ item.variation[0].stock }}</small>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="col-12">
                        <nav>
                          <ul class="pagination justify-content-center">
                            <li class="page-item disabled"><a class="page-link" href="#"><span>Previous</span></a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                          </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <!-- Shop Product End -->
        </div>
    </div>
    <!-- Shop End -->
  </div>
  </template>
  <script>
   /* eslint-disable */
   import axios from 'axios'
   import { mapState } from 'vuex'
    import { getAPI } from '../api/axios-base'
    import NavBar from '../components/Navbar'
    export default {
      name: 'Stores',
      computed: mapState(['accessToken', 'APIData']),
      components: {
        NavBar
      },
      data(){
    return {
      columns: [
        {
          label: 'Product Name',
          field: 'product_name',
        },
        {
          label: 'Product Category',
          field: 'category',
          type: 'number',
        },
        {
          label: 'Product Description',
          field: 'description',
        },
        {
          label: 'Created',
          field: 'created_date',
        //   type: 'date',
        },
        {
          label: 'Modified',
          field: 'modified_date',
        //   type: 'date',
        },
        {
          label: 'Actions',
          field: 'actions',
        },
      ],
      rows: [],
      StoresAPIData: ''
    };
  },
      created() {
        this.getStoresData()
    },
  methods: {
    getStoresData() {
        axios.get('https://blesketke-live.com/api/v1/store/all/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }) // proof that your access token is still valid; if not the
        // axios getAPI response interceptor will attempt to get a new  access token from the server. check out ../api/axios-base.js getAPI instance response interceptor
          .then(response => {
            console.log('GetAPI successfully got the stores')
            console.log(response.data)
            var i = 0
            for(i=0; i < response.data.length; i++) { 
                this.rows = response.data
                // this.rows.push({ photo: response.data[i].original_image, name: response.data[i].product_name, category: response.data[i].category, isbn: response.data[i].variation[0].isbn, price: response.data[i].variation[0].price, stock: response.data[i].variation[0].stock  });// store the response data in store
                // console.log(this.rows)
            }
            // console.log (this.rows)
           
           
          })
          .catch(err => { // refresh token expired or some other error status
            console.log(err)
          })
    },
    onRowClick (slug) {
        console.log('Details')
        this.$router.push({
            name: 'viewStore',
            params: {
                slug: slug // or anything you want
            }
        }) 
    }
    }
    }
  </script>

  <style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&display=swap");


.card {
  position: relative;
  /* width: 320px; */
  /* height: 480px; */
  background: #191919;
  border-radius: 20px;
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  top: -50%;
  width: 100%;
  height: 100%;
  background: #ffce00;
  transform: skewY(345deg);
  transition: 0.5s;
}

.card:hover::before {
  top: -70%;
  transform: skewY(390deg);
}

.card::after {
  content: "CORSAIR";
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 600;
  font-size: 6em;
  color: rgba(0, 0, 0, 0.1);
}

.card .imgBox {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  z-index: 1;
}
/*
.card .imgBox img {
    max-width: 100%;
    
    transition: .5s;
}

.card:hover .imgBox img {
    max-width: 50%;
      
}
*/
.card .contentBox {
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
}

.card .contentBox h3 {
  font-size: 18px;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card .contentBox .price {
  font-size: 24px;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
}

.card .contentBox .buy {
  position: relative;
  top: 100px;
  opacity: 0;
  padding: 10px 30px;
  margin-top: 15px;
  color: #000000;
  text-decoration: none;
  background: #ffce00;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.5s;
}

.card:hover .contentBox .buy {
  top: 0;
  opacity: 1;
}

.mouse {
  height: 300px;
  width: auto;
}

</style>

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//
//
// <script src="https://www.gstatic.com/firebasejs/4.10.1/firebase.js"></script>
//   <script>
// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyA3a4pDGEdKhikUg7rS0HJe1ie-Z-PPMho",
//   authDomain: "myvue-11238.firebaseapp.com",
//   databaseURL: "https://myvue-11238.firebaseio.com",
//   projectId: "myvue-11238",
//   storageBucket: "",
//   messagingSenderId: "832981180584"
// };
// firebase.initializeApp(config);
// </script>

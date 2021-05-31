import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)


/* Import the firebase SDK and extend with firestore */
import firebase from 'firebase';
require('firebase/firestore');

/* Paste your firebase configuration below */
const config = {
  apiKey: "AIzaSyDMSLEmTBSEkcMkgs01CTsOsidWw-0fd8I",
  authDomain: "thanhcv-38266.firebaseapp.com",
  databaseURL: "https://thanhcv-38266-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thanhcv-38266",
  storageBucket: "thanhcv-38266.appspot.com",
  messagingSenderId: "1009472343573",
  appId: "1:1009472343573:web:0d834eabba8df2705d081c",
  measurementId: "G-0FZEDP50SG"
};

/* Initialize firebase with your configuration */
firebase.initializeApp(config);

/* Bind firebase to your Vue instance */
Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

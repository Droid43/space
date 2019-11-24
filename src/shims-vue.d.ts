
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  import {Http} from "@/network/http";
  interface Vue {
    $http: Http;
    $api: any
  }
}

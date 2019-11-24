import Vue, { VNode } from 'vue'
import {Log} from "@/service/log";
import {Http} from "@/network/http";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  interface Window {
    $log: Log
    $http: Http
    $api: any
  }
}

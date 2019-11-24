import Axios, {AxiosInstance, AxiosRequestConfig} from 'axios'
import log from "@/service/log";


export class Http {
  private axios: AxiosInstance;

  constructor(){
    let config: AxiosRequestConfig = {
      timeout: 120000,
      headers: {}
    };
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    if(process.env.NODE_ENV === 'production'){
      config.baseURL = `${location.protocol}//${location.host}`;

    }else {
      config.baseURL = 'http://127.0.0.1:7001'
      console.log(location);
    }
    this.axios = Axios.create(config)

  }
  async get(url:string, params?:any){
    return new Promise((resolve, reject) => {
      this.axios.get(url, params).then((res) => {
        log.debug(res)
        this.resultHandle(res, resolve);
      }).catch((err) => {
        reject(err.message);
      });
    });
  }
  async post(url:string, params?:any){
    return new Promise((resolve, reject) => {
      this.axios.post(url, params).then((res) => {
        log.debug(res)
        this.resultHandle(res, resolve);
      }).catch((err) => {
        reject(err.message);
      });
    });
  }

  /**
   *
   * @param res
   * @param resolve
   */
  public resultHandle(res: any, resolve: { (value?: unknown): void; (arg0: any): void; }) {
    if (res.status > 0) {
      resolve(res.data);
    } else {
      this.errorHandle(res);
    }
  }

  /**
   * 服务端状态处理,例如中断性异常,退出异常等等(与拦截器http握手状态注意区分,一般都能分清楚吧)
   * @param res
   */
  public errorHandle(res: any) {
    log.warn(res.msg);
    // 状态码判断
    switch (res.status) {
      case -102:
        break;
      case -152:
        break;
      default:
      // console.log(other);
    }
  }

}

const http = new Http();
export default http;

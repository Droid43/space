import http from '../http'

interface DailyInfo {

}

export default {
  async getDailyInfo(){
    let items = await this.getDailyInfoList(1);
    return items && items[0];
  },
  async getDailyInfoList(length:number) {
    if (length < 0) {
      return [];
    }
    let res = await http.get('api/v1/util/getdailyword', {length});
    // @ts-ignore
    return <DailyInfo[]>res.data;
  }
}

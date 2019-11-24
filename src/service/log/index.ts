
enum LogLevel {
  info,
  debug,
  warn,
  error
}

export class Log {
  private level: LogLevel
  private isOnly: boolean
  constructor(){
    this.level = LogLevel.info
    this.isOnly = false
  }

  public setLevel(level: LogLevel, isOnly=false){
    this.level = level
    this.isOnly = isOnly
  }

  public debug(...args:any[]){
    if(this.isOnly){
      if(this.level === LogLevel.debug){
        console.debug(...args)
      }
    }else {
      if(this.level >= LogLevel.debug){
        console.debug(...args)
      }
    }
  }

  public info(...args:any[]){
    if(this.isOnly){
      if(this.level === LogLevel.info){
        console.info(...args)
      }
    }else {
      if(this.level >= LogLevel.info){
        console.info(...args)
      }
    }
  }

  public warn(...args:any[]){
    if(this.isOnly){
      if(this.level === LogLevel.warn){
        console.warn(...args)
      }
    }else {
      if(this.level >= LogLevel.warn){
        console.warn(...args)
      }
    }
  }

  public error(...args:any[]){
    if(this.isOnly){
      if(this.level === LogLevel.error){
        console.error(...args)
      }
    }else {
      if(this.level >= LogLevel.error){
        console.error(...args)
      }
    }
  }

}

const log = new Log();
export default log;

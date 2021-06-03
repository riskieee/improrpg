// main Content class for improRPG

class timeStamp {

  constructor() {
    this._now = new Date();
  }
  get timeNow() {
    return this._now.getHours() + ':' + this._now.getMinutes() + ':' + this._now.getSeconds()
  }
}

module.exports = timeStamp

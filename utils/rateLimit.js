//implement a rate limiter middleware on every request


class Cache {
  constructor() {
    this.data = {};
    this.limit = 2;
    this.time = 5; // in seconds
  }

  //returns true if cache is set
  //returns false if rate limit exceeded
  setCache(ip) {
    if (ip in this.data) {
      if (
        new Date().getTime() - this.data[ip]["created"] <= this.time * 1000
      ) {
        if(this.data[ip]["count"] > this.limit) { 
            //exceeded limit
            return false
        }
        else {

        this.data[ip]["count"]++;
        }
      } else {
        this.data[ip] = {
            count : 1,
            created : new Date().getTime()
        }
      }
    } else {
      this.data[ip] = {
        count: 1,
        created: new Date().getTime(),
      };
    }
    return true
  }
}

module.exports = Cache;

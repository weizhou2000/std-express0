const utils = {  
  chain(a) {  
    this._temp = a;  
    return this;  
  },  
  sum(b) {  
    this._temp += b;  
    return this;  
  },  
  sub(b) {  
    this._temp -= b;  
    return this;  
  },  
  value() {  
    const _temp = this._temp;  
    this._temp = undefined;  
    return _temp;  
  }  
};  
  
console.log(utils.chain(1).sum(2).sum(3).sub(4).value());  

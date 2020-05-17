Array.prototype.forEach = function(callback){
    if (typeof callback == undefined) {
      throw ('error');
    }
    for (let i = 0; i<this.length; i++) {
      callback(this[i], i, this);
    }
    return ;
    }

    var fruits = ['test', 'test2', 'test4324'];

    fruits.forEach(function (curValue, index) {
        console.log(curValue);
})
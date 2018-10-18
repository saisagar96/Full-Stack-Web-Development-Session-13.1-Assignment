function myfun(arr){
    var pro=new Promise(function(resolve,reject){
      //new arr
      var newarr=[];
      //length of array
      n=arr.length;
      //capitalizing the array
      arr.forEach(function(x){
        newarr.push(x.toUpperCase());
      });
      setTimeout(function(){
        resolve(newarr);
      },n*1000)
    })
    return pro;
  }
  //calling the function with array
  myfun(["Banana","Mango","Apple"]).then(function(data){
    console.log(data);
  })
//创建一个公用的数据调用服务
app.factory('commonService',['#http',function($http){
  var service={};
  service.getData=function(type,callBack){
    $http({
      url:'/dangdang-app-angularjs/data/book_'+type+'.json',
      method:'get'
    })
    .then(function(res){
      console.log('数据获取成功');
      callBack(res);
    },function(err){
      console.dir(err);
    })
  }
  return service
}]);

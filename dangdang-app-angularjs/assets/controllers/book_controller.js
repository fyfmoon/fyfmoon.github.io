app.controller('bookController',['$scope',function($scope){
  $scope.bookTypes=[
    {id:'ertong',name:'儿童',imgUrl:'http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%84%BF%E7%AB%A5%E4%B9%A6&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&cs=339726740,405692298&os=133761572,239069707&simid=3525915736,334124514&pn=34&rn=1&di=125883111530&ln=1972&fr=&fmq=1476867908788_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&adpicid=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimg10.360buyimg.com%2Fn0%2Fg13%2FM06%2F11%2F08%2FrBEhVFLRD1MIAAAAAARGUlrMt4EAAH1YgHM0DwABEZq225.jpg&rpstart=0&rpnum=0&adpicid=0',description:''},
    {id:'lishi',name:'历史',imgUrl:'http://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E5%8E%86%E5%8F%B2%E4%B9%A6&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&cs=3560362969,3375260239&os=3619109322,3969019563&simid=3310305139,239905059&pn=7&rn=1&di=110150345910&ln=1959&fr=&fmq=1476867978880_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&adpicid=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3D69fa0d90a244ad342ebf878fe0a30c08%2Fdf059201a18b87d6dfa60462040828381e30fd85.jpg&rpstart=0&rpnum=0&adpicid=0',description:''},
    {id:'dongman',name:'动漫',imgUrl:'http://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E5%8A%A8%E6%BC%AB%E4%B9%A6&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&cs=1697391570,261269960&os=1884166254,855323770&simid=0,0&pn=3&rn=1&di=57914774390&ln=1982&fr=&fmq=1476868045137_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&adpicid=0&pi=0&gsm=0&objurl=http%3A%2F%2Fwww.wzst.cn%2Fdata%2Fuploadfile%2Fimages%2F2009423105652482.jpg&rpstart=0&rpnum=0&adpicid=0',description:''},
    {id:'qingnianwenxue',name:'青年文学',imgUrl:'http://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E9%9D%92%E5%B9%B4%E6%96%87%E5%AD%A6%E4%B9%A6&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&cs=1691331154,3396594568&os=439876617,1393637365&simid=3334884422,261179593&pn=2&rn=1&di=25079299410&ln=1986&fr=&fmq=1476868088409_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&adpicid=0&pi=0&gsm=0&objurl=http%3A%2F%2Fec4.images-amazon.com%2Fimages%2FI%2F51zLKX65nFL._AA500_.jpg&rpstart=0&rpnum=0&adpicid=0',description:''}
  ]
}])

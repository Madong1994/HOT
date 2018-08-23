/**
 * Created by 马东 on 2018/1/8.
 */
function initVue(){
    pak = new Vue({
        el:'#hostrootdiv',
        data:{

        },
        mounted:function () {
            console.log("1111111111111111111")
            //this.initIndex(("#hostrootdiv"));
            // this.recordInit()
        },
        methods: {
            initIndex: function initSize($obj, isIndex)
                {
                    var width = document.documentElement.clientWidth;
                    var height = $(window).height();
                    if(isIndex)
                    {
                        $obj.css({width: width, height: height});//112是控制栏
                    }
                    else
                    {
                        $obj.css({width:width,height:height});
                    }
                    // onWindowResize();
            },allmove:function () {
                this.initIndex();
            },
            recordInit:function () {
                var param = {
                    page:this.page,
                    pageSize:this.pageSize
                }
                var turl = this.url;
                this.$http.post(turl,param,{emulateJSON:true}).then(function (res) {
                    var resuest = res.data
                    var code = resuest.code
                    console.log(code)
                    var msg = resuest.msg
                    if(code == '7'){
                        var $toastContent = $('<span style = "color: red">' + msg + '</span>');
                        Materialize.toast($toastContent, 4000);
                        return;
                    }
                    this.attendances = resuest.result.list
                    this.pageTotal = resuest.result.pages;
                    this.count = resuest.result.total;
                    this.page = resuest.result.pageNum;
                });

            },Trim: function (str, is_global) {
                var result;
                result = str.replace(/(^\s+)|(\s+$)/g, "");
                if (is_global.toLowerCase() == "g") {
                    result = result.replace(/\s/g, "");
                }
                return result;
            },
            animationMove:function () {
                var aurl = "/moves/animationMove";
                this.url = aurl;
                var param = {
                    page:1,
                    pageSize:this.pageSize
                }
                this.$http.post("/moves/animationMove",param,{emulateJSON: true}).then(function (res) {
                    var resuest = res.data
                    var code = resuest.code
                    console.log(code)
                    var msg = resuest.msg
                    if(code == "7"){
                        //获取数据失败
                        var $toastContent = $('<span style = "color: red">' + msg + '</span>');
                        Materialize.toast($toastContent, 4000);
                        return;
                    }
                    this.moves = resuest.result.list;
                    this.pageTotal = resuest.result.pages;
                    this.count = resuest.result.total;
                    this.page = resuest.result.pageNum;
                });
            },domesticMove:function () {
                var aurl = "/moves/domesticMove";
                this.url = aurl
                var param = {
                    page:1,
                    pageSize:this.pageSize
                }
                this.$http.post("/moves/domesticMove",param,{emulateJSON: true}).then(function (res) {
                    var resuest = res.data
                    var code = resuest.code
                    console.log(code)
                    var msg = resuest.msg
                    if(code == "7"){
                        //获取数据失败
                        var $toastContent = $('<span style = "color: red">' + msg + '</span>');
                        Materialize.toast($toastContent, 4000);
                        return;
                    }
                    this.moves = resuest.result.list;
                    this.pageTotal = resuest.result.pages;
                    this.count = resuest.result.total;
                    this.page = resuest.result.pageNum;
                });
            },jskMove:function () {
                var aurl = "/moves/jskMove";
                this.url = aurl
                // alert(terminals_no)
                var param = {
                    page:1,
                    pageSize:this.pageSize
                }
                this.$http.post("/moves/jskMove",param,{emulateJSON: true}).then(function (res) {
                    var resuest = res.data
                    var code = resuest.code
                    console.log(code)
                    var msg = resuest.msg
                    if(code == "7"){
                        //获取数据失败
                        var $toastContent = $('<span style = "color: red">' + msg + '</span>');
                        Materialize.toast($toastContent, 4000);
                        return;
                    }
                    this.moves = resuest.result.list;
                    this.pageTotal = resuest.result.pages;
                    this.count = resuest.result.total;
                    this.page = resuest.result.pageNum;
                });
            },eaMove:function () {
                var aurl = "/moves/eaMove";
                this.url = aurl
                var param = {
                    page:1,
                    pageSize:this.pageSize
                }
                this.$http.post("/moves/eaMove",param,{emulateJSON:true}).then(function (res) {
                    var resuest = res.data
                    var code = resuest.code
                    console.log(code)
                    var msg = resuest.msg
                    if(code == "7"){
                        //获取数据失败
                        var $toastContent = $('<span style = "color: red">' + msg + '</span>');
                        Materialize.toast($toastContent, 4000);
                        return;
                    }
                    this.moves = resuest.result.list;
                    this.pageTotal = resuest.result.pages;
                    this.count = resuest.result.total;
                    this.page = resuest.result.pageNum;
                });
            },otherMove:function () {
                var aurl = "/moves/otherMove";
                this.url = aurl
                var param = {
                    page:1,
                    pageSize:this.pageSize
                }
                this.$http.post("/moves/otherMove",param,{emulateJSON:true}).then(function (res) {
                    var resuest = res.data
                    var code = resuest.code
                    console.log(code)
                    var msg = resuest.msg
                    if(code == "7"){
                        //获取数据失败
                        var $toastContent = $('<span style = "color: red">' + msg + '</span>');
                        Materialize.toast($toastContent, 4000);
                        return;
                    }
                    this.moves = resuest.result.list;
                    this.pageTotal = resuest.result.pages;
                    this.count = resuest.result.total;
                    this.page = resuest.result.pageNum;
                });
            },paging:function (page) {
                if(page > this.pageTotal || page < 1){
                    return;
                }
                var param = {
                    page:page,
                    pageSize:this.pageSize
                }
                this.$http.post(this.url, param, {emulateJSON: true}).then(function (res) {
                    var resuest = res.data;
                    if(resuest.code == "7"){
                        var $toastContent = $('<span style = "color: red">'+resuest.msg+'</span>');
                        Materialize.toast($toastContent, 4000);
                        return;
                    }
                    this.moves = resuest.result.list;
                    this.pageTotal = resuest.result.pages;
                    this.count = resuest.result.total;
                    this.page = resuest.result.pageNum;
                    $('#table_body')[0].scrollTop=0;
                });
            }
        }
    });
}
/**
 * 这里是login模块
 */
var loginApp = angular.module('loginApp', []);
function loginController($scope, $http) {
    $scope.formData = {};
    $scope.postForm = function() {
        $scope.formData.action='login';
        $http({
            method  : 'POST',
            url     : './get.php',
            data    : $.param($scope.formData),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
        })
        .success(function(data) {
            console.log(data);
            if (!data.success) {
                if(!data.errors){
                    $scope.message = data.message;
                }else{
                    $scope.errorUsername = data.errors.username;
                    $scope.errorPassword = data.errors.password;
                }
            } else {
                window.location.href='#/0';
            }
        });
    };
}

/**
 * 这里是类别列表模块
 */
var pageList= angular.module("pageList",[]);//开始

pageList.controller("ListTypeCtrl",["$scope","$http",function($scope,$http){

    $http({
        method: 'GET',
        url: 'get.php?action=get_arctype&where=reid=0'
    }).success(function(data, status, headers, config) {
        console.log("success...");
        console.log(data);
        $scope.lists=data;
    }).error(function(data, status, headers, config) {
        console.log("error...");
    });

}]);

/**
 * 这里是内容列表模块
 */
totals=0;
pageList.controller("arcListCtrl",["$scope","$http","$location",function($scope,$http,$location){
 
    //获取当前路径
    $scope.typeid=$location.path().replace("/","");
    //获取总条数
    if($scope.typeid==0){
        $get_total_url='get.php?action=get_total';
    }else{
        $get_total_url='get.php?action=get_total&where=typeid='+$scope.typeid;
    }
    $http({
        method: 'GET',
        url: $get_total_url
    }).success(function(data, status, headers, config) {
        console.log("success...");
        console.log(data);
        console.log(data.total);
        $scope.paginationConf.totalItems=data.total;//这里获取并设置总页数
    }).error(function(data, status, headers, config) {
        console.log("error...");
    });
    //分页
    $scope.paginationConf = {
        currentPage: 1,
        //totalItems: 15,
        itemsPerPage: 5,
        pagesLength: 5,
        perPageOptions: [10, 20, 30, 40, 50],
        rememberPerPage: 'perPageItems',
        onChange: function(){
            //获取分页开始数
            if($scope.paginationConf.currentPage==1){
                $scope.limit=0;
            }else{
                $scope.limit=$scope.paginationConf.currentPage*$scope.paginationConf.itemsPerPage-$scope.paginationConf.itemsPerPage;
            }
            
            if($scope.typeid==0){
                $geturl='get.php?action=get_list&offset='+$scope.limit+'&rows='+$scope.paginationConf.itemsPerPage+'&orderField=id&orderBy=DESC';
            }else{
                $geturl='get.php?action=get_list&offset='+$scope.limit+'&rows='+$scope.paginationConf.itemsPerPage+'&where=typeid='+$scope.typeid+'&orderField=id&orderBy=DESC';
            }

            $http({
                method: 'GET',
                url: $geturl
            }).success(function(data, status, headers, config) {
                console.log("success...");
                console.log(data);
                $scope.lists=data;
            }).error(function(data, status, headers, config) {
                console.log("error...");
            });
        }
    };
    //删除
    $scope.del = function(index,Id) {
      $scope.lists.splice(index, 1);
      //获取Id执行删除
       var gets="?action=delete_article&id="+Id;
        console.log(gets);

        $http({
            method  : 'GET',
            url     : 'get.php'+gets,
        })
        .success(function(data) {
            console.log(data);
            if (data.code==101) {
                //删除成功
                console.log('删除成功');
                $scope.meg_success="删除成功！";
                $("#successbox").animate({opacity:'1'}).addClass("slideDown");
                setTimeout(function(){$("#successbox").removeClass().animate({opacity:'0'});}, 800);
            } else {
                //删除失败
                console.log('删除失败');
                $scope.meg_success="";
                $scope.meg_error="删除失败! ";
                 $("#errorbox").animate({opacity:'1'}).addClass("slideDown");
                 setTimeout(function(){$("#errorbox").removeClass().animate({opacity:'0'});}, 800);
            }
        });

 };

}]);

/**
 * 这里是内容详情模块
 */
var showCont = angular.module("showCont", []);
showCont.controller('ShowContCtrl', function($scope, $http, $stateParams) {
    console.log($stateParams.Id);
    $http({
        method: 'GET',
        url: 'get.php?action=get_article&id='+$stateParams.Id
    }).success(function(data, status, headers, config) {
        console.log("success...");
        console.log(data);
        $scope.lists=data;
    }).error(function(data, status, headers, config) {
        console.log("error...");
    });
});

/**
 * 这里是添加内容模块
 */
var addCont = angular.module("addCont", []);
addCont.controller('AddContCtrl', function($scope, $http) {

    //获取分类列表
    $http({
        method: 'GET',
        url: 'get.php?action=get_arctype&where=reid=0'
    }).success(function(data, status, headers, config) {
        console.log("get type list success...");
        console.log(data);
        $scope.lists=data;
    }).error(function(data, status, headers, config) {
        console.log("get type list error...");
    });

    //执行写入数据
    $scope.formData = {};
    $scope.formData.action = 'add_article';
    $scope.postForm = function() {
        $http({
            method  : 'POST',
            url     : 'get.php',
            data    : $.param($scope.formData),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data) {
            if (!data.errors) {
                //添加成功
                console.log('插入成功');
                $scope.meg_success="插入成功! 正在返回列表页...";
                $scope.meg_error="";
                setTimeout(function(){location.href='/#/0'}, 1000);
            } else {
                //添加失败
                console.log('插入失败');
                $scope.meg_success="";
                var get_error="";
                if(data.errors.title){
                    get_error=data.errors.title;
                }
                if(data.errors.content){
                    get_error=get_error+(get_error?"&":"")+data.errors.content;
                }
                if(data.errors.typeid){
                    get_error=get_error+(get_error?"&":"")+data.errors.typeid;
                }
                $scope.meg_error=get_error;
                $scope.errorBye=function(){
                    $('#errorbox').fadeOut();
                }
                $scope.errorShow=function(){
                    $('#errorbox').fadeIn();
                }
            }
        });
    };

});

/**
 * 这里是修改内容模块
 */
var modifyCont = angular.module("modifyCont", []);

modifyCont.controller('ModifyContCtrl', function($scope, $http, $stateParams) {
    //获取分类列表
    $http({
        method: 'GET',
        url: 'get.php?action=get_arctype&where=reid=0'
    }).success(function(data, status, headers, config) {
        console.log("get type list success...");
        console.log(data);
        $scope.types=data;
    }).error(function(data, status, headers, config) {
        console.log("get type list error...");
    });
    //读取这一条
    console.log($stateParams.Id);
    $http({
    method: 'GET',
    url: 'get.php?action=get_article&id='+$stateParams.Id
    }).success(function(data, status, headers, config) {
    console.log("success...");
    console.log(data);
    $scope.lists=data;
    }).error(function(data, status, headers, config) {
    console.log("error...");
    });
    //update
    $scope.formData = {};
    $scope.postForm = function() {
        $scope.formData.action = 'update_article';
        $scope.formData.id = $stateParams.Id;
        $scope.formData.title = form.title.value;
        $scope.formData.content = form.content.value;
        $scope.formData.typeid = $("#typeid option:selected").val();//待优化取值方式
        $http({
            method  : 'POST',
            url     : 'get.php',
            data    : $.param($scope.formData),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data) {
            console.log(data);
            if (data.code==101) {
                //添加成功
                console.log('修改成功');
                $scope.meg_success="修改成功! 正在返回列表页...";
                $scope.meg_error="";
                setTimeout(function(){location.href='/#/0'}, 1000);
            } else {
                //添加失败
                console.log('修改失败');
                var get_errors="";
                $scope.meg_success="";
                if(data.errors.title){
                    get_errors=data.errors.title;
                }
                if(data.errors.content){
                    get_errors=get_errors+(get_errors?"&":"")+data.errors.content;
                }
                $scope.meg_error=get_errors;
                console.log($scope.meg_error);
                $scope.errorBye=function(){
                    $('#errorbox').fadeOut();
                }
                $scope.errorShow=function(){
                    $('#errorbox').fadeIn();
                }
            }
        });
    };
});
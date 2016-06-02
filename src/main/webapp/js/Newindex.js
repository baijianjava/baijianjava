/**
 * Created by hp on 2016/5/14.
 */
$(function () {
    getDatas();

});


//首页模块
var templete = {
    init:function(datas){
        datas = eval(datas);//将json字符串转换成了对象这样就没有乱码了
        var temp = "";
        var num=0;
        for(var i in datas){
            if(datas[i].id==null||datas[i].url==null){
                continue;
            }
            var str=datas[i].words;
            var  id=str.indexOf(")")
            if(id>0){
                var newstr=str.substring(0,id+1);
                var newstr2=str.substring(id+1);
                // console.log("输出的："+newstr+" __ "+newstr2);
                //  $("#span_id").attr("value",newstr2);
                // console.log($("#span_words"));

                // console.log("路过");
                temp +=
                    '<li class="in-kct in-course" style="position:relative" id="pid" value="'+datas[i].pid+'"  ><a   onclick="donext('+datas[i].id+','+datas[i].pid+')"  target="_blank" title="'+datas[i].words+'" > ' +
                    //'style="background: url('+basePath+'upload/'+datas[i].img+'); background-repeat:no-repeat; background-position:50% 50%;">' +
                    '<img src='+basePath+'upload/'+datas[i].img+'  width="220"  height="220"  alt="图片"  style="border-radius: 110px;" >'+
                    '<div class="in-block"><span id="span_words"  class="ch" style="display: inline; padding:250px,20px,0px,20px; "   value=""><span style="color:rgb(218, 213, 10)">'+newstr+'</span>'+newstr2+'</span>' +
                    '</div></a>' +
                    '</li>'
            }else{
                //原版
                temp +=
                    '<li class="in-kct in-course" style="position:relative" id="pid" value="'+datas[i].pid+'"  ><a   onclick="donext('+datas[i].id+','+datas[i].pid+')"  target="_blank" title="'+datas[i].words+'"> ' +
                   // 'style="background: url('+basePath+'upload/'+datas[i].img+'); background-repeat:no-repeat; background-position:50% 50%;">' +
                    '<img src='+basePath+'upload/'+datas[i].img+'  width="220"  height="220"  alt="图片"  style="border-radius: 110px;" >'+
                    '<div class="in-block"><span class="ch" style="display: inline; padding:250px,20px,0px,20px " >'+datas[i].words+'</span>' +
                    '</div></a>' +
                    '</li>'
            }
            num=num+1;//限制显示个数
            if(num>7){
                break;
            }
        }
        return temp;
    }
}



//附加页面
/*var templete = {
    init:function(datas){
        datas = eval(datas);//将json字符串转换成了对象这样就没有乱码了
        var temp = "";
        var num=0;
        for(var i in datas){
            if(datas[i].id==null||datas[i].url==null){
                continue;
            }
            var str=datas[i].words;
            var  id=str.indexOf(")")
            if(id>0){
                var newstr=str.substring(0,id+1);
                var newstr2=str.substring(id+1);
                // console.log("输出的："+newstr+" __ "+newstr2);
                //  $("#span_id").attr("value",newstr2);
                // console.log($("#span_words"));

                // console.log("路过");
                temp +=
                    '<li class="in-kct in-course" style="position:relative" id="pid" value="'+datas[i].pid+'"  ><a   onclick="donext('+datas[i].id+','+datas[i].pid+')"  target="_blank" title="'+datas[i].words+'" > ' +
                    //'style="background: url('+basePath+'upload/'+datas[i].img+'); background-repeat:no-repeat; background-position:50% 50%;">' +
                    '<img src='+basePath+'upload/'+datas[i].img+'  width="220"  height="220"  alt="图片"  style="border-radius: 110px;" >'+
                    '<div class="in-block"><span id="span_words"  class="ch" style="display: inline; padding:250px,20px,0px,20px; "   value=""><span style="color:rgb(218, 213, 10)">'+newstr+'</span>'+newstr2+'</span>' +
                    '</div></a>' +
                    '</li>'
            }else{
                //原版
                temp +=
                    '<li class="in-kct in-course" style="position:relative" id="pid" value="'+datas[i].pid+'"  ><a   onclick="donext('+datas[i].id+','+datas[i].pid+')"  target="_blank" title="'+datas[i].words+'"> ' +
                    // 'style="background: url('+basePath+'upload/'+datas[i].img+'); background-repeat:no-repeat; background-position:50% 50%;">' +
                    '<img src='+basePath+'upload/'+datas[i].img+'  width="220"  height="220"  alt="图片"  style="border-radius: 110px;" >'+
                    '<div class="in-block"><span class="ch" style="display: inline; padding:250px,20px,0px,20px " >'+datas[i].words+'</span>' +
                    '</div></a>' +
                    '</li>'
            }
            num=num+1;//限制显示个数
            if(num>7){
                break;
            }
        }
        return temp;
    }
}*/



//跳转到子信息
var  donext=function (id) {

    $.ajax({
        url: basePath+'index/childShow.do',
        dataType: 'json',
        type: 'post',
        data: {
            id: id
        },
            //传到后台了
        success: function (data) {
            // alert(data);
            data = eval(data);//转成对象了
            // alert(data);
            // console.log(data);
            if(data[0].urlid=="0"){
                // alert("1");
                var temp =  templete.init(data);
                $("#data_ul").html("");
                $("#data_ul").append(temp);
                return;
            }else if(data[0].urlid=="1"){
                // alert("2");
                if(data[0].url[0]=="h"){
                    window.open(data[0].url);
                    // return ;
                }else {
                    // alert(data[0].url);
                 //   window.location.href=+"http://"+data[0].url;
                    //   window.open(data[0].url);
                    //  window.location.href=data[0].url;本页面打开一个地址 总携带localhost：8080
                    //window.open ("http://"+data[0].url,"newwindow","height=600,width=800")打开一个自定义的新页面
                    window.open ("http://"+data[0].url);
                }

            }else{
                //新增的父信息框  未测试
                // alert("空白页面3")
                // alert(data);
                blank_add_show(data);
                return;
            }
           /* alert(data+"1");//[object  object]
            alert(data[0].id+"2"); //有值
            alert(data[0])//
            alert(data.id);//undefined*/
           /*if(data[0]=="h"){//空的话显示的界面
               window.open(data);
               return ;
            }if(data[0].id!=undefined){
                var temp =  templete.init(data);
                $("#data_ul").html("");
                $("#data_ul").append(temp);
                return;
            } else {
                //空白页面
                alert("空白页面")
                alert(data);
                blank_add_show(data);
                return;
            }*/
        },
        error: function (data) {
        }
    });
}




//空白页面 添加信息界面
/*var blank_add_show = function (data) {
    art.dialog({
        id: 'add_show',
        title: '添加信息',
        lock: true,
        drag: true,
        opacity: 0.5,
        top: 20,
        width: 565,
        height: 285,
        padding: 0,
        esc: false,
        fixed: true,
        content:(
        '<div class="form_add">'+
        '<p  class="form_add_p"  style="position: relative;left: 3px" >'+
        '<span>访问地址</span>'+
        '<input  type="text" value="" id="url"  placeholder= "输入：index或http:" />'+
        '<select id="urlid" >'+
        '<option value="-1">类型</option>'+
        '<option   value="1">网站</option>'+
        '<option   value="0" >模块</option>'+
        '</select>'+
        '</p>'+
        '<div  class="form_add_p">'+
        '<span>背景图片</span>'+
        '<input type="text" name="oldName_" readonly="readnoly" class="span4" id="oldName_" />'+
        /!*'<div class="left  file_input " style="position: relative;"><span id="uploadBtn"  ></span></div>'+*!/
        '<input type="text" name="newName" class="span4" id="newName_"  placeholder="请点击上传文件"  style="display:none;"  > '+
        '<div class="left  file_input " style="position: relative;"><span id="uploadBtn"  ></span></div>'+
        '</div>'+
        '<p  class="form_add_p">'+
        '<span>文字信息</span>'+
        '<input  type="text" value=""  id="words"    placeholder="请输入文字信息" / ><br/>'+
        '<input id="delete" type="button" value="提交" onclick="blankadd_info(this)" data-id="'+data+'"   class="sub_btn"  style="" />'+
        '</p>'+
        '</div>'
    ),
        cancelVal: '关闭',
        cancel: true
    });
    //上传图片
    $.tzUpload({
        url: basePath + "upload/upload.do",
        targetId: "uploadBtn",
        size: "2000 MB",
        single: true,
        type: "*",
        img: basePath + "/js/swfupload/uploadbtn.png",
        callback: function (Data) {//文件上传完成后的回调方法。
            var data = eval('(' + Data + ')'); //将字符串转化为对象。
            if (data.errorMsg == "error") { //判断如果登录超时，那么返回登录界面
                alert("上传失败！");
            }
            $("#oldName_").val(data.oldName); //给只读文本框赋值
            $("#newName_").val(data.name); //给隐藏域赋值
        }
    });
};*/


//空白添加
/*var blankadd_info = function (t) {
    // alert($("#urlid").val());
    if($("#url").val()==""||$("#newName_").val()==""||$("#words").val()==""||$("#urlid").val()=="-1"){
        alert("地址或文字或图片不能为空,类型必须选！");
    }else{
        $.ajax({
            url:basePath+'index/add.do',
            dataType:'json',
            type:'post',
            data:{
                url:$("#url").val(),
                img:$("#newName_").val(),
                words:$("#words").val(),
                pid:null,
                id:$(t).data("id"),
                urlid:$("#urlid").val()
            },
            success: function(data){
                alert("添加成功！");
                /!*alert($("#pid").val());*!/
                var temp =  templete.init(data);
                $("#data_ul").html("");
                $("#data_ul").append(temp);
                window.location.reload();
            }

        });

    }


};*/




//显示首页信息
var getDatas = function(){
    $.ajax({
        url: basePath+'index/index.do',
        dataType: 'json',
        type: 'post',
        success: function (data) {
                var temp =  templete.init(data);
                $("#data_ul").html("");
                $("#data_ul").append(temp);
        },
        error: function (data) {

        }
    });
}


//显示详细信息
/*var show = function (id) {

        $.ajax({
            url: basePath + 'index/show.do',
            dataType: 'json',
            type: 'post',
            data: {
                id: id
            },
            success: function (data) {
                popDialog(data);
                return;
            },
            error: function (data) {
            }
        });
    
};*/



//删除信息
/*var dele= function (id) {

    if(confirm("您确定要删除信息吗？")){
        $.ajax({
            url: basePath+'index/delete.do',
            dataType: 'json',
            type: 'post',
            data: {
                id: id
            },
            success: function (data) {
                alert("删除成功");
                var temp =  templete.init(data);
                $("#data_ul").html("");
                $("#data_ul").append(temp);
                window.location.reload();
                return ;

            },
            error: function (data) {

            }
        });

    }

};*/




//添加
/*var add_info = function () {
    var pid=$("#pid").val();
    alert($("#newName_").val());
    alert($("#urlid").val());
    //var zid=$("#zid").val();//空
    if($("#url").val()==""||$("#newName_").val()==""||$("#words").val()==""){
        alert("地址或文字或图片不能为空！");
       /!* $("#url").attr("value","请输入网址");//空的验证为完成*!/
    }else{
        $.ajax({
            url:basePath+'index/add.do',
            dataType:'json',
            type:'post',
            data:{
                url:$("#url").val(),
                img:$("#newName_").val(),
                words:$("#words").val(),
                pid:pid,
                id:$("#fid").val(),
                urlid:$("#urlid").val()

            },
            success: function(data){
              /!*
                alert($("#pid").val());*!/
                alert("添加成功！");
                var temp =  templete.init(data);
                $("#data_ul").html("");
                $("#data_ul").append(temp);
                window.location.reload();
            }

        });

    }


};*/





//详细信息界面
/*var popDialog = function (data) {
    data = eval("("+data+")");
    /!*alert(data.url);
    alert(data.urlid);*!/
    art.dialog({
        id: 'showInfo',
        title: '详细信息',
        lock: true,
        drag: true,
        opacity: 0.5,
        top: 20,
        width: 500,
        height: 300,
        padding: 0,
        esc: false,
        fixed: true,
        content:(
            '<div class="form_add">'+
            '<p   class="form_add_p">'+
            '<span>访问地址</span>'+
            '<input  type="text" id="url"  value="'+data.url+'" /><br/>'+
            '</p  class="form_add_p">'+
            '<div class="form_add_p">'+
            '<span>背景图片</span>'+
            '<input type="text" name="oldName_" readonly="readnoly" class="span4" id="oldName_"  value="'+data.img+'" />'+
            '<input type="text" name="newName_" readonly="readnoly" class="span4" id="newName_"  style="display:none;" />'+
            '<div class="left  file_input " style="position: relative; left:38px"><span id="uploadBtn"  ></span></div>'+
            '</div>'+
            '<p  class="form_add_p">'+
            '<span>文字信息</span>'+
            '<input  type="text" value="'+data.words+'" id="words"    placeholder="请输入文字信息" / ><br/>'+
            '<input id="delete" type="button" value="修改"  onclick="edit(this)"  data-id="'+data.id+'"   class="sub_btn"  style="" />'+
            '</p>'+
            '</div>'
                     /!*'<form  >'+
                    "访问地址:"+'<input type="text" value="'+data.url+'" id="url"   /><br/>'+
                    "背景图片:"+'<input type="text" value="'+data.img+'" id="img"/><br/>'+
                     '<span id="uploadBtn"  ></span>'+
                    '<div class="left span10 " style="margin-left: -10px;">'+
                    '<input type="text" name="oldName_" readonly="readnoly" class="span4" id="oldName_">'+
                    '<input type="text" name="newName" class="span4" id="newName_"style="display:none;" >'+
                    '</div>'+
                     "文字信息:"+'<input type="text" value="'+data.words+'"  id="words" / ><br/>'+
                     '<input id="change" type="button" value="修改"  onclick="edit(this)"  data-id="'+data.id+'"   /!*data-url=" " data-img="'+data.img+'" data-words="'+data.words+'"*!/ class="change_id"/>&nbsp&nbsp'+
                    '</form>'*!/
        ),
        cancelVal: '关闭',
        cancel: true
    });
    //上传图片
    $.tzUpload({
        url: basePath + "upload/upload.do",
        targetId: "uploadBtn",
        size: "2000 MB",
        single: true,
        type: "*",
        img: basePath + "/js/swfupload/uploadbtn.png",
        callback: function (Data) {//文件上传完成后的回调方法。
            var data = eval('(' + Data + ')'); //将字符串转化为对象。
            if (data.errorMsg == "error") { //判断如果登录超时，那么返回登录界面
                alert("上传失败！");
            }
            $("#oldName_").val(data.oldName); //给只读文本框赋值
            $("#newName_").val(data.name); //给隐藏域赋值
        }
    });
};*/



//编辑
/*var edit = function (t) {
   /!* alert($(t).data("id"));
    alert($("#url").val());
    alert($("#newName_").val());
    alert($("#words").val());*!/
    var img="";
    if($("#newName_").val()==""){
         img=$("#oldName_").val();
    }else{
        img=$("#newName_").val();
    }
    if(confirm("您确定要修改信息吗？")) {
        $.ajax({
            url: basePath + 'index/edit.do',
            dataType: 'json',
            type: 'post',
            data: {
                id: $(t).data("id"),
                url: $("#url").val(),
                img: img,
                words: $("#words").val()
            },
            success: function (data) {
                alert("修改成功");
                window.location.reload();//直接刷新但不会停留在本页面

                var temp = templete.init(data);
                $("#data_ul").html("");
                $("#data_ul").append(temp);

            },
            error: function (data) {

            }
        });
    }

};*/




//添加信息界面 url 一定是 http 或者index 开始的才能继续正常显示
/*var add_show = function () {

    art.dialog({
        id: 'add_show',
        title: '添加信息',
        lock: true,
        drag: true,
        opacity: 0.5,
        top: 20,
        width: 565,
        height: 285,
        padding: -50,
        esc: false,
        fixed: true,
        content:(
            '<div class="form_add">'+
            '<p class="form_add_p"  style="position: relative;left: 3px">'+
            '<span>访问地址</span>'+

            '<input  type="text" value="" id="url"  placeholder= "输入：index或http:" />'+
            '<select id="urlid" >'+
            '<option>类型</option>'+
            '<option   value="1">网站</option>'+
            '<option   value="0" >模块</option>'+
            '</select>'+
            '</p>'+
            '<div class="form_add_p">'+
            '<span>背景图片</span>'+
            '<input type="text" name="oldName_" readonly="readnoly" class="span4" id="oldName_" />'+
            '<input type="text" name="newName" class="span4" id="newName_"    style="display:none;"  > '+
            '<div class="left  file_input " style="position: relative;"><span id="uploadBtn"  ></span></div>'+
            '</div>'+
            '<p class="form_add_p">'+
            '<span>文字信息</span>'+
            '<input  type="text" value=""  id="words"    placeholder="请输入文字信息" / ><br/>'+
            '<input id="delete" type="button" value="提交" onclick="add_info()"   class="sub_btn"  style="" />'+
            '</p>'+
            '</div>'
        ),
        cancelVal: '关闭',
        cancel: true
    });


    //上传图片
    $.tzUpload({
        url: basePath + "upload/upload.do",
        targetId: "uploadBtn",
        size: "2000 MB",
        single: true,
        type: "*",
        img: basePath + "/js/swfupload/uploadbtn.png",
        callback: function (Data) {//文件上传完成后的回调方法。
            var data = eval('(' + Data + ')'); //将字符串转化为对象。
            if (data.errorMsg == "error") { //判断如果登录超时，那么返回登录界面
                alert("上传失败！");
            }
            $("#oldName_").val(data.oldName); //给只读文本框赋值
            $("#newName_").val(data.name); //给隐藏域赋值
        }
    });
};*/










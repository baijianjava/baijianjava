/**
 * Created by hp on 2016/5/14.
 */
$(function () {
    getDatas();

});


//首页模块
var templete = {
    init: function (datas) {
        datas = eval(datas);//将json字符串转换成了对象这样就没有乱码了
        var temp = "";
        var num = 0;
        for (var i in datas) {
            if (datas[i].id == null || datas[i].url == null) {
                continue;
            }
            var str = datas[i].words;
            var id = str.indexOf(")")
            if (id > 0) {    //区分是否存在括号
                var newstr = str.substring(0, id + 1);
                var newstr2 = str.substring(id + 1);
                temp +=
                    '<li class="in-kct in-course" style="position:relative" id="pid" value="' + datas[i].pid + '"  ><a   onclick="donext(' + datas[i].id + ',' + datas[i].pid + ')"  target="_blank" title="' + datas[i].words + '"> ' +
                    // 'style="background: url('+basePath+'upload/'+datas[i].img+'); background-repeat:no-repeat; background-position:50% 50%;">' +
                    // 'style="background-image: url('+basePath+'upload/'+datas[i].img+'); background-repeat:repeat-x; ">' +
                    '<img src=' + basePath + 'upload/' + datas[i].img + '  width="220"  height="220"  alt="图片"  style="border-radius: 110px;" >' +
                    '<div class="in-block"><span id="span_words"  class="ch" style="display: inline; padding:250px,20px,0px,20px; "   value=""><span style="color:rgb(218, 213, 10)">' + newstr + '</span>' + newstr2 + '</span>' +
                    '</div> </a>' +
                    '<div style="display:inline-block;position:absolute;top:0px;right:0px">' +
                    '<img src="' + basePath + 'images/edit.png' + '" class="change" id="btn_2" data-id="' + datas[i].id + '" onclick="show(' + datas[i].id + ')"/>' +
                    '<img src="' + basePath + 'images/del.png' + '" class="change" id="btn_2" data-id="' + datas[i].id + '" onclick="dele(' + datas[i].id + ')"/>' +
                    '</div>' +
                    '</li>'
            } else {

                //原版
                temp +=
                    '<li class="in-kct in-course" style="position:relative" id="pid" value="' + datas[i].pid + '"  ><a   onclick="donext(' + datas[i].id + ',' + datas[i].pid + ')"  target="_blank" title="' + datas[i].words + '" >' +
                    //'style="background: url('+basePath+'upload/'+datas[i].img+'); background-repeat:no-repeat; background-position:50% 50%;">' +
                    '<img src=' + basePath + 'upload/' + datas[i].img + '  width="220"  height="220"  alt="图片"  style="border-radius: 110px;" >' +
                    '<div class="in-block"><span class="ch" style="display: inline; padding:250px,20px,0px,20px " >' + datas[i].words + '</span>' +

                    '</div></a>' +
                    '<div style="display:inline-block;position:absolute;top:0px;right:0px">' +
                    '<img src="' + basePath + 'images/edit.png' + '" class="change" id="btn_2" data-id="' + datas[i].id + '" onclick="show(' + datas[i].id + ')"/>' +
                    '<img src="' + basePath + 'images/del.png' + '" class="change" id="btn_2" data-id="' + datas[i].id + '" onclick="dele(' + datas[i].id + ')"/>' +
                    '</div>' +
                    '</li>'
            }
            num = num + 1;//限制显示个数
            if (num > 7) {
                break;
            }
        }
        return temp;
        $("span_words").attr("value", "1123");
    }
}


//跳转到子信息
var donext = function (id) {
    $.ajax({
        url: basePath + 'index/childShow.do',
        dataType: 'json',
        type: 'post',
        data: {
            id: id
        },
        success: function (data) {
            $("#indexId").val(id);
            data = eval(data);//转成对象了
            if (data[0].urlid == "0") {
                var temp = templete.init(data);
                $("#data_ul").html("");
                $("#data_ul").append(temp);
                return;
            } else if (data[0].urlid == "1") {
                if (data[0].url[0] == "h") {
                    window.open(data[0].url);
                } else {
                    window.open("http://" + data[0].url);
                }

            } else {
                blank_add_show(data);
                return;
            }
        },
        error: function (data) {
        }
    });
}


//空白页面 添加信息界面
var blank_add_show = function (data) {
    upload = layer.open({
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['600px', '300px'], //宽高
        content: '<div class="form_add">' +
        '<p class="form_add_p" >' +
        '<span>访问地址</span>' +
        '<input  type="text" value="" id="url"  placeholder= "输入：index或http:" />' +
        '<select id="urlid" >' +
        '<option   value="-1">类型</option>' +
        '<option   value="1">网站</option>' +
        '<option   value="0" >模块</option>' +
        '</select>' +
        '</p>' +
        '<div class="form_add_p">' +
        '<span>背景图片</span>' +
        '<input type="text" name="oldName_" readonly="readnoly" class="span4" id="oldName_" />' +
        '<input type="text" name="newName" class="span4" id="newName_"    style="display:none;"  > ' +
        '<div class="left  file_input " style="position: relative; left:38px"><span id="uploadBtn"  ></span></div>' +
        '</div>' +
        '<p class="form_add_p">' +
        '<span>文字信息</span>' +
        '<input  type="text" value=""  id="words"    placeholder="请输入文字信息" / ><br/>' +
        '<input id="delete" type="button" value="提交" onclick="add_info()"   class="sub_btn"  style="" />' +
        '</p>' +
        '</div>'
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
                layer.msg("上传失败",{icon:5});
            }
            $("#oldName_").val(data.oldName); //给只读文本框赋值
            $("#newName_").val(data.name); //给隐藏域赋值
        }
    });
};


//空白添加
var blankadd_info = function (t) {
    if ($("#url").val() == "" || $("#newName_").val() == "" || $("#words").val() == "" || $("#urlid").val() == "-1") {
        layer.msg("地址、文字、图片不能为空,类型必须选！");
    } else {
        $.ajax({
            url: basePath + 'index/add.do',
            dataType: 'json',
            type: 'post',
            data: {
                url: $("#url").val(),
                img: $("#newName_").val(),
                words: $("#words").val(),
                pid: null,
                id: $(t).data("id"),
                urlid: $("#urlid").val()
            },
            success: function (data) {
                layer.msg('添加成功！', {time: 1000, icon: 6}, function () {
                    var temp = templete.init(data);
                    $("#data_ul").html("");
                    $("#data_ul").append(temp);
                    if ($("#indexId").val()) {
                        donext($("#indexId").val());
                    } else {
                        window.location.reload();
                    }
                });
            }
        });

    }
};


//显示首页信息
var getDatas = function () {
    $.ajax({
        url: basePath + 'index/index.do',
        dataType: 'json',
        type: 'post',
        success: function (data) {
            $("#indexId").val("");
            var temp = templete.init(data);
            $("#data_ul").html("");
            $("#data_ul").append(temp);
        },
        error: function (data) {
        }
    });
}


//显示详细信息
var show = function (id) {

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

};


//删除信息
var dele = function (id) {

    layer.confirm('是否确定修改？', function (e) {
        $.ajax({
            url: basePath + 'index/delete.do',
            dataType: 'json',
            type: 'post',
            data: {
                id: id
            },
            success: function (data) {
                layer.msg('删除成功！', {time: 1000, icon: 6}, function () {
                    var temp = templete.init(data);
                    $("#data_ul").html("");
                    $("#data_ul").append(temp);
                    if ($("#indexId").val()) {
                        donext($("#indexId").val());
                    } else {
                        window.location.reload();
                    }
                    return;
                });
            },
            error: function (data) {
            }
        });

    });

};


//添加
var add_info = function () {
    var pid = $("#pid").val();
    if ($("#url").val() == "" || $("#newName_").val() == "" || $("#words").val() == "" || $("#urlid").val() == "-1") {
        layer.msg('地址、文字、图片、类型都不能为空！');
    } else {
        $.ajax({
            url: basePath + 'index/add.do',
            dataType: 'json',
            type: 'post',
            data: {
                url: $("#url").val(),
                img: $("#newName_").val(),
                words: $("#words").val(),
                pid: pid,
                id: $("#fid").val(),
                urlid: $("#urlid").val()

            },
            success: function (data) {
                layer.msg('添加成功！', {time: 1000, icon: 6}, function () {
                    var temp = templete.init(data);
                    $("#data_ul").html("");
                    $("#data_ul").append(temp);
                    if ($("#indexId").val()) {
                        donext($("#indexId").val());
                    } else {
                        window.location.reload();
                    }
                });
            }
        });

    }


};
var upload
//详细信息界面
var popDialog = function (data) {

    data = eval("(" + data + ")");
//页面层
    upload = layer.open({
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['600px', '300px'], //宽高
        content: '<div class="form_add">' +
        '<p   class="form_add_p">' +
        '<span>访问地址</span>' +
        '<input  type="text" id="url"  value="' + data.url + '" /><br/>' +
        '</p>' +
        '<div class="form_add_p">' +
        '<span>背景图片</span>' +
        '<input type="text" name="oldName_" readonly="readnoly" class="span4" id="oldName_"  value="' + data.img + '" />' +
        '<input type="text" name="newName_" readonly="readnoly" class="span4" id="newName_"  style="display:none;" />' +
        '<div class="left  file_input " style="position: relative; left:38px"><span id="uploadBtn"  ></span></div>' +
        '</div>' +
        '<p  class="form_add_p">' +
        '<span>文字信息</span>' +
        '<input  type="text" value="' + data.words + '" id="words"    placeholder="请输入文字信息" / ><br/>' +
        '<input id="delete" type="button" value="修改"  onclick="edit(this)"  data-id="' + data.id + '"   class="sub_btn"  style="" />' +
        '</p>' +
        '</div>'
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
               layer.msg("上传失败",{icon:5});
            }
            $("#oldName_").val(data.oldName); //给只读文本框赋值
            $("#newName_").val(data.name); //给隐藏域赋值
        }
    });
}


//编辑
var edit = function (t) {
    var img = "";
    if ($("#newName_").val() == "") {
        img = $("#oldName_").val();
    } else {
        img = $("#newName_").val();
    }
    layer.confirm('是否确定修改？', function (e) {
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
                layer.msg('修改成功！', {time: 1000, icon: 6}, function () {
                    var temp = templete.init(data);
                    $("#data_ul").html("");
                    $("#data_ul").append(temp);
                    layer.close(upload);
                    if ($("#indexId").val()) {
                        donext($("#indexId").val());
                    } else {
                        window.location.reload();
                    }
                });


            },
            error: function (data) {

            }
        });
        layer.close(e);
    });

};


//添加信息界面 url 一定是 http 或者index 开始的才能继续正常显示
var add_show = function () {

    upload = layer.open({
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['600px', '300px'], //宽高
        content: '<div class="form_add">' +
        '<p class="form_add_p" >' +
        '<span>访问地址</span>' +
        '<input  type="text" value="" id="url"  placeholder= "输入：index或http:" />' +
        '<select id="urlid" >' +
        '<option   value="-1">类型</option>' +
        '<option   value="1">网站</option>' +
        '<option   value="0" >模块</option>' +
        '</select>' +
        '</p>' +
        '<div class="form_add_p">' +
        '<span>背景图片</span>' +
        '<input type="text" name="oldName_" readonly="readnoly" class="span4" id="oldName_" />' +
        '<input type="text" name="newName" class="span4" id="newName_"    style="display:none;"  > ' +
        '<div class="left  file_input " style="position: relative; left:38px"><span id="uploadBtn"  ></span></div>' +
        '</div>' +
        '<p class="form_add_p">' +
        '<span>文字信息</span>' +
        '<input  type="text" value=""  id="words"    placeholder="请输入文字信息" / ><br/>' +
        '<input id="delete" type="button" value="提交" onclick="add_info()"   class="sub_btn"  style="" />' +
        '</p>' +
        '</div>'
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
                layer.msg("上传失败",{icon:5});
            }
            $("#oldName_").val(data.oldName); //给只读文本框赋值
            $("#newName_").val(data.name); //给隐藏域赋值
        }
    });
};










<%@ page contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<!-- 统一样式 -->

<link href="<c:url value='/css/normalize.css' />" rel="stylesheet" />
<link href="<c:url value='/scripts/common/libs/pagination/simplePagination.css' />" rel="stylesheet" />
<link href="<c:url value='/css/font-awesome-4.2.0/css/font-awesome.min.css' />" rel="stylesheet" />

<link href="<c:url value='/scripts/common/libs/artdialog/css/normalize.css' />" rel="stylesheet" />
<link href="<c:url value='/scripts/common/libs/artdialog/css/skins/blue.css' />" rel="stylesheet" />
<link href="<c:url value='/scripts/common/libs/videojs/video-js.css' />" rel="stylesheet" />
<link href="<c:url value='/scripts/common/libs/uploadify/uploadify.css' />" rel="stylesheet" />
<link rel="stylesheet" type="text/css"  href="<c:url value='/scripts/common/libs/bootstrap-datepicker/bootstrap-datepicker.css'/>">
<link href="<c:url value='/css/base.css' />" rel="stylesheet" />
<link href="<c:url value='/css/common.css' />" rel="stylesheet" />

<script>
    var CONTEXTPATH = "${pageContext.request.contextPath}";
</script>

<!-- 统一脚本 -->
<script src="<c:url value='/scripts/common/libs/jquery-1.8.0.min.js' />"></script>

<script src="<c:url value='/scripts/common/libs/pagination/pagination.js' />"></script>
<script src="<c:url value='/scripts/common/libs/jquery.tmpl.js' />"></script>
<script src="<c:url value='/scripts/common/libs/artdialog/js/jquery.artDialog.js' />"></script>
<script src="<c:url value='/scripts/common/libs/ckplayer_6_5/swfobject.js' />"></script>
<script src="<c:url value='/scripts/common/libs/ckplayer_6_5/ckplayer.js' />"></script>
<script src="<c:url value='/scripts/common/libs/ckplayer_6_5/ckplayer_control.js' />"></script>
<script src="<c:url value='/scripts/common/libs/videojs/video.js' />"></script>

<script src="<c:url value='/scripts/common/libs/bootstrap-datepicker/bootstrap-datepicker.js'/>"></script>
<script src="<c:url value='/scripts/common/libs/uploadify/swfobject.js'/>" ></script>
<script src="<c:url value='/scripts/common/libs/uploadify/jquery.uploadify.min.js'/> "></script>
<script src="<c:url value='/scripts/common/common.js' />"></script>

<script type="text/javascript" src="<c:url value='/scripts/common/textEllipsis.js'/> "></script>
<script>
    <%--var session = "<%=session.getAttribute("userRoles")%>";--%>
    <%--var requestPath = "<%=request.getServletPath()%>";--%>
    <%--var cssHtml = '';--%>
    <%--if(session.indexOf('QBQX') > -1){--%>

    <%--}else if(session.indexOf('RDQX') > -1 && session.indexOf('ZDQX') > -1 ){--%>

        <%--if(requestPath.indexOf('sampleDetail') < 0 && requestPath.indexOf('suspicious') < 0 ) {--%>

            <%--cssHtml = '[role_level="0"] { display: none!important; }';--%>
        <%--}--%>
        <%--cssHtml = cssHtml + '[role_level="1"] { display: none!important; }';--%>

    <%--}else if(session.indexOf('ZDQX') > -1){--%>

        <%--cssHtml = '[role_level="0"] { display: none!important; }';--%>

    <%--}else if(session.indexOf('RDQX') > -1){--%>

    <%--}else{--%>

        <%--cssHtml = '[role_level="0"] { display: none!important; }';--%>

    <%--}--%>

    <%--$('head').append('<style>' + cssHtml + '</style>');--%>

</script>
<link rel="stylesheet" href="<c:url value='/css/menu/menu.css'/>">
<script src="<c:url value='/scripts/common/menu.js'/>"></script>
<script src="<c:url value='/scripts/service/home.js'/>"></script>


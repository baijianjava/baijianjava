<%@ page contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/view/inc/taglibs.jsp"%>
<!DOCTYPE html>
<html>
<head>
<title>样本库管理系统</title>
<%@ include file="/WEB-INF/view/inc/style.jsp"%>
<script src="scripts/service/home.js"></script>
<link rel="stylesheet" href="<c:url value='/css/menu/menu.css'/>">
<script src="<c:url value='/scripts/common/menu.js'/>"></script>
</head>
<%@ include file="/WEB-INF/view/common/rightMenu.jsp"%>
<%@ include file="/WEB-INF/view/common/popout.jsp"%>
<script id="kwsListTemplate" type="text/x-jquery-tmpl">
	<li onClick="kwsListClick(this)" class="ell" title="{{html KEYWORD}}">{{html KEYWORD}}</li>
</script>
<body class="oh">
	<p>
		功能正在建设中...
	</p>
</body>
</html>
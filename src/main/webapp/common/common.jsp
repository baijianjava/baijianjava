<%@ page contentType="text/html;charset=UTF-8" %>
<%
	String   path   =   request.getContextPath();
	String   basePath   =   request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
	request.setAttribute("basePath",basePath);

	String local="http://localhost:8080/nav/index";
	request.setAttribute("local",local);
	String url_address="d://test";
	request.setAttribute("url_address",url_address);
%>
<script>
	var CONTEXTPATH = "${pageContext.request.contextPath}";
</script>
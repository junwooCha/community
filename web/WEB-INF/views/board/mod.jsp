<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<h1>글수정</h1>
<form action="/board/mod" method="post">
    <input type="hidden" name="iboard" value="${data.iboard}">
    <div><input type="text" name="title" placeholder="제목" value="<c:out value='${data.title}'/> "></div>

</form>
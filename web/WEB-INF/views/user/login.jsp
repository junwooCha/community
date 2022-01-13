<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<h1>로그인</h1>
<div>${requestScope.msg}</div>
<form action="/user/login" method="post" id="login-frm">
    <div><label>ID : <input type="text" name="uid" ></label></div>
    <div><label>PW : <input type="password" name="upw"></label></div>
    <div>
        <input type="submit" value="LOGIN">
    </div>
</form>
<div><a href="/user/join">join</a></div>
<!--
    로그인 처리
    세션에 UserEntity 객체 주소값 저장하는데
    키값은 Const.LOGIN_USER 를 사용한다.
    객체에 iuser, uid, nm, profileimg값만 저장한다.
    로그인 성공시 /board/list 주소값 이동
    로그인 실패시 login.jsp에서 메세지 출력!
    (아이디 없음, 비밀번호 확인, 알 수 없는 에러 발생)
-->

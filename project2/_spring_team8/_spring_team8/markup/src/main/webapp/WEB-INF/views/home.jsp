<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
	integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
	<link href="../../resources/css/user/userLogin.css" rel="stylesheet">
<title>Insert title here</title>
</head>
<body>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
	crossorigin="anonymous"></script>
 <div id="video-background">
    <video autoplay muted loop>
      <source src="../../resources/images/bgvideo.mp4" type="video/mp4">
      <!-- 웹 브라우저가 video/mp4 형식을 지원하지 않을 경우를 대비한 대체 콘텐츠 -->
      Your browser does not support the video tag.
    </video>
  </div>

<div class="loginbox">
<div class="logincontainer">
<div class="logobox">
<h2 class="logotitle">MARKUP</h2>
 <span class="logosub">MINECRAFT LIFE</span>
</div>
<div class="inputoutbox">
<form action="/member/login" method="post" class="formbox">
<div class="inputs inputBtn" ><div id="idbox">아이디</div></div>
<div class="inputs inputBtn"><div id="pwbox">비밀번호</div></div>
<div class="inputleft inputBtn"> <button class="custom-button" type="submit">로그인</button></div>
<div class="inputright inputBtn" ><a href="/member/join">아직 계정이 없으신가요?</a></div>
</form>
</div>
</div>
</div>



	<button type="button" onclick="winOpen2();">마인크래프트 게임하러 가기</button>
	<a href="/board/black"><button type="button">신고게시판</button></a>
	<a href="/comment/black"><button type="button">신고게시판(댓글)</button></a>
	<a href="/member/userList"><button type="button">회원관리</button></a>
<a href="https://www.google.com" onclick="window.open('https://www.google.com', '구글 팝업', 'width=600,height=400'); return false;">구글로 가기</a>


	<script type="text/javascript">
		const msg_login = '<c:out value="${msg_login}" />';
		constmsvg_signup = '<c:out value="${msvg_signup}" />';
		
		console.log(msg_login);
		if (msg_login == 2) {
			alert('아이디나 비밀번호가 맞지 않습니다.');
		}
		if (msvg_signup == 1) {
			alert('가입을 환영합니다 !!');
		}
	</script>
	<script type="text/javascript" src="../resources/js/game/game.js"></script>
	<script type="text/javascript" src="../resources/js/user/userLogin.js"></script>
</body>
</html>
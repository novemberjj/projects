<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- CSS only -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
	crossorigin="anonymous">

<link rel="stylesheet" type="text/css"
	href="../../resources/css/layout/header.css">
<link href="https://unpkg.com/@yaireo/tagify/dist/tagify.css"
	rel="stylesheet" type="text/css" />
</head>
<body>
	<header>
		<nav>
			<ul class = "navul">
				<li><a href="/board/list"><button>홈</button></a></li>
				<li><a href="/board/poplist?qty=100"><button>인기</button></a></li>
				<li><form action="/board/list">
						<input id="searchInput" name="keyword" type="text"
							value="${keyword}" data-keyword="${keyword}">
						<button type="submit">검색</button>
					</form></li>
					
	
				<li>
					<div class="dropdown">
					<!-- btn-secondary btn  dropdown-toggle -->
					  <button class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					    메뉴 
					  </button>
					  <ul class="dropdown-menu">
					    <li><a class="dropdown-item" href="#">내정보</a></li>
					    <li><a class="dropdown-item" href="#">패치노트</a></li>
					    <li><a class="dropdown-item" href="#">공지사항</a></li>
					    <li><a class="dropdown-item" id="gameBtn">체험하기</a></li>
					    <li><a class="dropdown-item" href="#">이용약관</a></li>
					    <li><hr class="dropdown-divider"></li>
					    <li><a class="dropdown-item" href="/board/black">글관리</a></li>
					    <li><a class="dropdown-item" href="/comment/black">댓글관리</a></li>
					    <li><a class="dropdown-item" href="/member/userList?isOK=-1">회원관리</a></li>
					    <li><hr class="dropdown-divider"></li>
					    <li><a class="dropdown-item" href="/member/logout">로그아웃</a></li>
					  </ul>
					</div>
				</li>
				<li><a href="/board/register?id=${ses.id}"><button>글쓰기</button></a></li>
				<li><button id="alarmBtn" data-id="${ses.id}">알림</button></li>
				<li><div id="countAlarm"></div></li>
					
					
				<li><a href="/member/mypage?id=${ses.id}"><button>내정보</button></a></li>
			</ul>
			<div class="alarmBox hiddenBox" id="alarmWindow"></div>
		</nav>

	</header>


	<%-- 
	<div class="headerMain">
		<div class="headdiv">
			<a href="/board/list"><button>홈</button></a>
		</div>
		<div class="headdiv">
			<a href="/board/poplist?qty=100"><button>인기</button></a>
		</div>
		<div class="headdiv">
			<form action="/board/list">
				<input id="searchInput" name="keyword" type="text"
					value="${keyword}" data-keyword="${keyword}">
				<button type="submit">검색</button>
			</form>
		</div>

		<div class="headdiv rbox">
			<a href="/member/mypage?id=${ses.id}"><button>내정보</button></a>
		</div>
		<div class="headdiv rbox">
			<button id="alarmBtn" data-id="${ses.id}">알림버튼</button>
		</div>
		<div class="headdiv rbox" id="countAlarm"></div>
		<div class="headdiv rbox">
			<a href="/board/register?id=${ses.id}"><button>글쓰기</button></a>
		</div>
	</div>
	<div class="dropdown">
		<button class="btn btn-secondary dropdown-toggle" type="button"
			data-bs-toggle="dropdown" aria-expanded="false">Dropdown
			button</button>
		<ul class="dropdown-menu">
			<li><a class="dropdown-item" href="#">Action</a></li>
			<li><a class="dropdown-item" href="#">Another action</a></li>
			<li><a class="dropdown-item" href="#">Something else here</a></li>
		</ul>
	</div>

	<div class="alarmBox hiddenBox" id="alarmWindow"></div>
 --%>
	<script src="https://unpkg.com/@yaireo/tagify"></script>
	<script type="text/javascript">
		const sesId = '<c:out value="${ses.id}" />';
		const sesName = '<c:out value="${ses.name}" />';
	</script>
	<script type="text/javascript" src="/resources/js/layout/header.js"></script>
	<script type="text/javascript" src="/resources/js/game/game.js"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
		crossorigin="anonymous"></script>
</body>
</html>

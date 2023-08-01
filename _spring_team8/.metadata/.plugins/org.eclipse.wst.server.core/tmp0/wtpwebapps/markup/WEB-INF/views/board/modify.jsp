<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!-- CSS only -->
<link href="https://unpkg.com/@yaireo/tagify/dist/tagify.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<link href="/resources/css/board/boardModify.css" rel="stylesheet" />

<!-- JavaScript Bundle with Popper -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
	<script src="https://unpkg.com/@yaireo/tagify"></script>
	<jsp:include page="../layout/header.jsp"></jsp:include>
	<h1>Board Modify Page</h1>
	
	<form action="/board/modify" method="post" enctype="multipart/form-data">
		<c:set var="board" value="${boardDTO.bvo }" />
		<c:set var="tagList" value="${tagList }" />
	
		<input hidden="hidden" name="${board.bno }">
		
		<div class="container">
		
			<div class="imageContainer">
				<div class="imageBox">
					<div class="imageZone" id="imageZone">
						<c:choose>
							<c:when test="${fList.size() == 0 }">
								이미지가 없습니다
							</c:when>
							<c:otherwise>
								<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="false">
									<ol class="carousel-indicators" id="carousel-indicators">
										<c:forEach items="${fList}" var="fvo" varStatus="loop">
											<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${loop.index}" <c:if test="${loop.first}">class="active"</c:if>></li>
										</c:forEach>
									</ol>
									
									<div class="carousel-inner" id="carousel-inner">
										<c:forEach items="${fList}" var="fvo" varStatus="loop">
											<div class="carousel-item imgItem <c:if test="${loop.first}">active</c:if>" data-uuid="${fvo.uuid }">
												<img src="/upload/${fn:replace(fvo.saveDir, '\\', '/')}/${fvo.uuid}_${fvo.fileName}" class="d-block w-100" alt="..."> <br>
											</div>
										</c:forEach>
									</div>
									
									<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev" id="prev">
										<span class="carousel-control-prev-icon" aria-hidden="true"></span>
										<span class="visually-hidden">Previous</span>
									</a>
									<a class="carousel-control-next" id="next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
										<span class="carousel-control-next-icon" aria-hidden="true"></span>
										<span class="visually-hidden">Next</span>
									</a>
								</div>
								<div class="thBox" id="thBox">
									<c:forEach items="${fList}" var="fvo">
										<div class="thumb" data-uuid="${fvo.uuid }">
											<img src="/upload/${fn:replace(fvo.saveDir, '\\', '/')}/${fvo.uuid}_th_${fvo.fileName}" class="thImg ">
											<button class="delete-button oldBtn" id="delBtn">x</button>
										</div>
									</c:forEach>
								</div>
							</c:otherwise>
						</c:choose>
					
					
					
					</div> <!-- image Zone -->
				</div>
				<div class="imageModi">
					<input type="file" class="file-input" id="file" name="files" multiple style="display: none">
					<button type="button" id="trigger"> 이미지변경 </button>
				</div>
			</div>
			
			<div id="boardBox" class="boardBox">
				<table border="1">
					<tr>
						<th><input type="text" name="bno" value="${board.bno }" hidden="hidden"></th>
					</tr>
					<tr>
						<th>제목 : <input type="text" name="title" id="title" value="${board.title }"></th>
					</tr>
					<tr>
						<th>content <textarea rows="10" cols="50" placeholder="사람들에게 회원님의 마크업에 대해 설명해 보세요" id="bcontent" name="bcontent"> ${board.bcontent } </textarea></th>
					</tr>
					<tr>
						<th>태그 : <input name='btag' id="btag" class='some_class_name' placeholder='write some tags' value="${tagList }" data-blacklist='.NET,PHP'> <br></th>
					</tr>
				</table>
			</div> <!-- boardBox div -->
		
		</div> <!-- container -->
		
		<button type="submit" id="regBtn">저장</button>
		<a href="/board/detail"> <button type="button">취소</button></a> <br>
	</form>

	<script type="text/javascript" src="/resources/js/board/boardModify.js"></script>

	<script type="text/javascript">
		const fList = '<c:out value="${boardDTO.fList}" />';
		const tagList = '<c:out value="${tagList} " />'
	</script>

</body>
</html>
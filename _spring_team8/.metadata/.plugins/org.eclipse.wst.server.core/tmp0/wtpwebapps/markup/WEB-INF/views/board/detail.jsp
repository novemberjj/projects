<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<link href="/resources/css/board/boardDetail.css" rel="stylesheet" />


<title>board detail page</title>
</head>
<body>
	<jsp:include page="../layout/header.jsp"></jsp:include>
	<div class="headerSpace"></div>

	<c:set var="thLoop" value="0" />
	<c:set var="board" value="${boardDTO.bvo}"></c:set>
	<br>



	<div class="container">
		<a href="/board/list"> <span class="back">◁ 뒤로가기 </span></a>



		<div class="dropBox">
			<div class="imageBox">


				<c:choose>
					<c:when test="${fList.size() == 0 }">
								등록된 이미지가 없습니다
							</c:when>
					<c:otherwise>
						<div id="carouselExampleIndicators" class="carousel slide"
							data-bs-ride="false">
							<ol class="carousel-indicators">
								<c:forEach items="${fList}" var="fvo" varStatus="loop">
									<li data-bs-target="#carouselExampleIndicators"
										data-bs-slide-to="${loop.index}"
										<c:if test="${loop.first}">class="active"</c:if>></li>
								</c:forEach>
							</ol>
							<div class="carousel-inner">
								<c:forEach items="${fList}" var="fvo" varStatus="loop">
									<div
										class="carousel-item <c:if test="${loop.first}">active</c:if>">
										<img
											src="/upload/${fn:replace(fvo.saveDir, '\\', '/')}/${fvo.uuid}_${fvo.fileName}"
											class="d-block w-100 mainImg" alt="..."
											data-uuid="${fvo.uuid }">
									</div>
								</c:forEach>
							</div>
							<a class="carousel-control-prev"
								href="#carouselExampleIndicators" role="button"
								data-bs-slide="prev"> <span
								class="carousel-control-prev-icon" aria-hidden="true"></span> <span
								class="visually-hidden">Previous</span>
							</a> <a class="carousel-control-next"
								href="#carouselExampleIndicators" role="button"
								data-bs-slide="next"> <span
								class="carousel-control-next-icon" aria-hidden="true"></span> <span
								class="visually-hidden">Next</span>
							</a>
						</div>

						<br>
						<div class="thBox" id="thBox">
							<c:forEach items="${fList}" var="fvo">
								<div class="thumb" data-uuid="${fvo.uuid }">
									<img
										src="/upload/${fn:replace(fvo.saveDir, '\\', '/')}/${fvo.uuid}_th_${fvo.fileName}"
										class="thImg" id="${thLoop}">

								</div>
								<c:set var="thLoop" value="${thLoop + 1}" />
							</c:forEach>
						</div>
					</c:otherwise>
				</c:choose>
			</div>
		</div>
		<br>

		<div id="boardBox" class="boardBox">
			
				
					
					<p style="text-align: right">번호.${board.bno} <br>
					작성자 : ${board.id}</p>
				
			
				
						<h1>  ${board.title}</h1>
					
				
					<div style="border: 1px solid black; padding: 10px; border-radius: 20px;"> <p>${board.bcontent}</p> </div> <br>
					<p>    ${board.btag }</p>
	
				
			
					<h3 style="text-align: right" >어떠셨나요? <button id="likeImg" style="border: 0; background-color: transparent;">🤍</button> 
					<span style="font-size: 14px;">${board.likeCount}</span></h3>
		
		
					<p style="text-align: right">작성일 ${board.regDate}</p>
			

					<div class="toggle" id="toggleComment">
					 <h2 style="text-align: left; margin-left: 10px" id="tH1">   댓글 ▷</h2></div>
			
			
			
			<div class="commentContainer" id="commentContainer" style="display: none;">
			
			<div class="commentBox" id="commentBox">
						<span id="cmtWriter">${ses.name}</span> 
						<input type="text" id="cmtText" placeholder="Test Add Comment">
						<button type="button" id="emojiBtn">😃</button>
						<button type="button" id="cmtPostBtn" data-bno="${board.bno}"
							data-title="${board.title}" data-boardid="${board.id}">
							등록</button>
						<div id="emojiContainer">
						</div>
					
				</div>
				
					<ul id="cmtListArea">
						<!-- 기존 코드... -->
					</ul>
			</div>
				


		</div>
		
		<div class="modify-delete-buttons">
			<c:if test="${ses.id eq board.id}">
				<a href="/board/modify?bno=${board.bno}"><button>수정</button></a>
				<a href="/board/delete?bno=${board.bno}"><button>삭제</button></a>
			</c:if>
			</div>
	</div>
	
	<div class="listzone">
	<c:set var="divid" value="0" />
    <c:set var="sesid" value="${ses.id}" />

    

     <div class="bigBox">
        <c:choose>
            <c:when test="${alist.size() == 0}">
               <div class="notFoundList">글을 찾을 수 없습니다</div> 
            </c:when>
            <c:otherwise>
                <c:forEach items="${alist}" var="DTO">
                    <c:set var="bvo" value="${DTO.bvo}" />
                    <c:set var="uvo" value="${DTO.uvo}" />
                    <c:set var="fList" value="${DTO.FList}" />
                    <c:set var="fvo" value="${fList[0]}" />
                    <c:set var="likeUserArr" value="${bvo.getLikeUserArr()}" />
                    <c:set var="isIt" value="false" />
				
                    <c:forEach items="${likeUserArr}" var="likeUser">
                        <c:if test="${likeUser eq sesid}">
                            <c:set var="isIt" value="true" />
                        </c:if>
                    </c:forEach>

                    <div class="pp" id="box${divid}">
                        <div class="contentBox" data-bno="${bvo.bno}" data-title="${bvo.title}" data-boardid="${bvo.id}">
                            <c:choose>
                                <c:when test="${fvo eq null}">
                                    <div class="titleBox midBox " > ${bvo.title} </div>
                                </c:when>
                                <c:otherwise>
                                    <img class="thumbnail midBox " src="/upload/${fn:replace(fvo.saveDir, '\\', '/')}/${fvo.uuid}_${fvo.fileName}" alt="이미지">
                                </c:otherwise>
                            </c:choose>
                            <div class="overlayBox" onclick="window.location.href = '/board/detail?bno=${bvo.bno}';"></div>
                            	<div class="profile hid hiddenText">
                            		<a href="/member/mypage?id=${bvo.id}"><img alt="" src="/upload/profile/${uvo.imgFile}" style="width: 30px; height: 30px;"></a>
                            		<a href="/member/mypage?id=${bvo.id}">${uvo.name }</a>
                            	</div>
                            	<c:if test="${ses.id ne bvo.id}">
                            	 <button class="hid hiddenText" type="button" id="listBlackBtn" data-bno="${bvo.bno}">신고</button>
                            	</c:if>
                            <div class="minBox">
                                <span class="tspan hid hiddenText">${bvo.getLikeCount()}</span>
                                <c:if test="${ses.id ne bvo.id}">
                                    <c:choose>
                                        <c:when test="${isIt eq true}">
                                            <i class="bi bi-heart-fill hateBtn"></i>
                                        </c:when>
                                        <c:otherwise>
                                            <i class="bi bi-heart likeBtn"></i>
                                        </c:otherwise>
                                    </c:choose>
                                </c:if>
                            </div>
                        </div>
                    </div>
                    <c:set var="divid" value="${divid + 1}" />
                </c:forEach>
            </c:otherwise>
        </c:choose>
    </div>
	</div>



	<script type="text/javascript">
		const bnoVal = '<c:out value="${boardDTO.bvo.bno}" />';
		console.log("bno : " + bnoVal);
	</script>
	
	<script type="text/javascript">
	const sesVal = '<c:out value="${ses.name}" />';
	console.log("ses.id : "+ sesVal );
	</script>
	<script type="text/javascript"
		src="../../resources/js/board/boardComment.js"></script>
	<script type="text/javascript">
		getCommentList(bnoVal);
	</script>
	<script type="text/javascript" src="../../resources/js/board/boardDetail.js"></script>
	

</body>
</html>
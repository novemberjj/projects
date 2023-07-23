<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
 integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<link href="../../resources/css/board/boardDetail.css" rel="stylesheet" />

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>board detail page</title>
</head>
<body>
<jsp:include page="../layout/header.jsp"></jsp:include>
<div class="headerSpace"></div>

<h3>board detail page</h3>

<c:set var="board" value="${boardDTO.bvo}"></c:set>

<div class="container">
    <div class="baseBox">
        <div class="imageBox">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="false">
                <ol class="carousel-indicators">
                    <c:forEach items="${fList}" var="fvo" varStatus="loop">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${loop.index}" <c:if test="${loop.first}">class="active"</c:if>>
                        </li>
                    </c:forEach>
                </ol>
                <div class="carousel-inner">
                    <c:forEach items="${fList}" var="fvo" varStatus="loop">
                        <div class="carousel-item <c:if test="${loop.first}">active</c:if>">
                            <img src="/upload/${fn:replace(fvo.saveDir, '\\', '/')}/${fvo.uuid}_${fvo.fileName}" class="d-block w-100" alt="...">
                        </div>
                    </c:forEach>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    </div>

    <div id="boardBox" class="boardBox">
        <table border="1">
            <tr>
                <th>bno</th>
                <td>${board.bno}</td>
            </tr>
            <tr>
                <th>title</th>
                <td>${board.title}</td>
            </tr>
            <tr>
                <th>id</th>
                <td>${board.id}</td>
            </tr>
            <tr>
                <th>like_Count</th>
                <td>${board.likeCount}</td>
            </tr>
            <tr>
                <th>rag_date</th>
                <td>${board.regDate}</td>
            </tr>
            <tr>
                <th>content</th>
                <td>${board.bcontent}</td>
            </tr>
        </table>

        <c:if test="${ses.id eq board.id}">
            <a href="/board/modify?bno=${board.bno}"><button>수정</button></a>
            <a href="/board/delete?bno=${board.bno}"><button>삭제</button></a>
        </c:if>

        <div class="commentBox" id="commentBox">
            <div>
                <span id="cmtWriter">${ses.id }</span>
                <input type="text" id="cmtText" placeholder="Test Add Comment">
                <button type="button" id="emojiBtn">😃</button>
                <div id="emojiContainer"></div>
                <button type="button" id="cmtPostBtn" data-bno="${board.bno }" data-title="${board.title }" data-boardid="${board.id }">Post</button>
            </div>
            <div>
                <ul id="cmtListArea">
                    <li>
                        <div>
                            <div>Writer</div>
                            Content for Comment
                        </div>
                        <span>reg_date</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    const bnoVal = '<c:out value="${boardDTO.bvo.bno}" />';
    console.log("bno : " + bnoVal);
</script>
<script type="text/javascript" src="../../resources/js/board/boardComment.js"></script>
<script type="text/javascript">
    getCommentList(bnoVal);
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

</body>
</html>

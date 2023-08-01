<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!-- header 분리 -->

<title>Register Page</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<link href="/resources/css/board/boardRegister.css" rel="stylesheet" />


</head>
<body>

<jsp:include page="../layout/header.jsp"></jsp:include>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

<div class="headerSpace"></div>




<form action="/board/register" method="post" enctype="multipart/form-data">



	<br>
	<div class="container">
	<a href="/board/list">	<span class="back">◁ 뒤로가기 </span></a>
    <div id="dropBox" class="dropBox">
  	  <input type="file" class="file-input" id="file" name="files" multiple style="display: none">
        <button type="button" id="trigger">이곳에 파일을 드래그 하거나 클릭하세요</button>
        <div id="fileZone">
            <!-- 파일 관련 요소 추가 -->
        </div>
    </div>
    
    
    
	<div class="boardBox">
	<input type="text" name="id" value="${ses.id }" readonly class="form-control-plaintext" hidden = "hidden"> 
	<br><br><br>
    <h3>제목 <input type="text"  name="title" placeholder="제목 추가"></h3>
  
   <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="작성자 : ${ses.name }">
 	
    <textarea rows="12" cols="40" name="bcontent" placeholder="사람들에게 회원님의 마크업에 대해 설명해 보세요"></textarea><br><br>
    <input name='btag' id="btag" class='some_class_name' placeholder='# 을 입력하여 태그를 추가해 보세요'
      data-blacklist='.NET,PHP'> <br> <br>
    <button id="regBtn"class="btn btn-outline-secondary">등록</button>
	</div>
  
	
	</div>

</form>


<script type="text/javascript" src="/resources/js/board/boardRegister.js"></script>
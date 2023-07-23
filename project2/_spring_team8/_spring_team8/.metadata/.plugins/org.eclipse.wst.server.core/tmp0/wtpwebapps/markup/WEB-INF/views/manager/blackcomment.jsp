<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>댓글신고게시판</title>
<body>
여기는 댓글신고게시판입니다.

<table border="1">
 	<thead>
      <tr>
      	<th width ="10%">관리</th>
        <th width="5%">댓글 번호</th>
        <th width="20%">title</th>
        <th width="5%">id</th>
        <th width="30%">댓글 내용</th>
        <th width="10%">regDate</th>
        <th width="10%">신고횟수</th>
        <th width="10%">상태</th>
       </tr>
    </thead>
    <tbody>
      <c:forEach items="${CommentList}" var="cvo">
	      <tr>
	      	<td><a href="/board/delete2?cno=${cvo.cno}"><button type="button">삭제</button></a>

	        <td>${cvo.cno}</td>
	        <td> <!-- bno로 게시글 타이틀 출력 -> 링크로 그 게시글로 연결 -->
	        <c:forEach items="${BoardList}" var="bvo">
	        <c:if test="${cvo.bno == bvo.bno}">
	        <a href="/board/detail?bno=${bvo.bno}">${bvo.title}</a>
	        </c:if>
	        </c:forEach>
	        </td>
	        <td>${cvo.id}</td>
 			<td>${cvo.ccontent}</td> <!-- 두번째글자 대문자면 인식안됨. -->
	      	<td>${cvo.regDate}</td>
	        <td>${cvo.black}</td>
	        <c:if test="${cvo.isDel==1}">	<td>삭제</td> </c:if> 
	        <c:if test="${cvo.isDel==0}">	<td>정상</td> </c:if>
	      </tr>
      </c:forEach>
    </tbody>
</table>

</body>
</html>
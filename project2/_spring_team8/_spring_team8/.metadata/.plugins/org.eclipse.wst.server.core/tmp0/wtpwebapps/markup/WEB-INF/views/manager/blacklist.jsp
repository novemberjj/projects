<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>신고게시판</title>
</head>
<body>
여기는 신고게시판입니다.

<table border="1">
 	<thead>
      <tr>
      	<th width ="10%">관리</th>
        <th width="5%">bno</th>
        <th width="10%">title</th>
        <th width="10%">내용</th>
        <th width="10%">id</th>
        <th width="10%">bTag</th>
        <th width="10%">file</th>
        <th width="10%">신고횟수</th>
        <th width="5%">likeCount</th>
        <th width="10%">regDate</th>
        <th width="10%">상태</th>
       </tr>
    </thead>
    <tbody>
      <c:forEach items="${list}" var="board">
	      <tr>
	      	<td><a href="/board/delete?bno=${board.bno}"><button type="button">삭제</button></a>
	      	<a href="/board/restore?bno=${board.bno}"><button type="button">복구</button></a></td>
	        <td>${board.bno}</td>
	        <td><a href="/board/detail?bno=${board.bno}">${board.title}</a></td>
	        <td>${board.bcontent}</td> <!-- 두번째글자 대문자면 인식안됨. -->
	        <td>${board.id}</td>
	        <td>${board.btag}</td>
	        <td>${board.file}</td>
	        <td>${board.black}</td>
	        <td>${board.likeCount}</td>
	        <td>${board.regDate}</td>
	        <c:if test="${board.isDel==1}">	<td>삭제</td> </c:if> 
	        <c:if test="${board.isDel==0}">	<td>정상</td> </c:if>
	      </tr>
      </c:forEach>
    </tbody>
</table>

</body>
</html>
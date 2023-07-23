<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>인기</title>
    <link rel="stylesheet" type="text/css" href="../../resources/css/board/boardList.css">
</head>
<jsp:include page="../layout/header.jsp"></jsp:include>
<body>
    <c:set var="divid" value="0"></c:set>
    <div class="headerSpace"></div>
    <div class="bigBox">
        <c:choose>
            <c:when test="${list.size()==0}">
                글을 찾을 수 없습니다
            </c:when>
            <c:otherwise>
                <c:forEach items="${list}" var="bvo">
                    <div class="pp" id="box${divid}">
                        <div class="contentBox" data-bno="${bvo.bno}"
                            data-title="${bvo.title}" data-boardid="${bvo.id}">
                            <a href="/board/detail?bno=${bvo.bno}">
                                <button class="hid hiddenText">aa</button>
                            </a>
                            ${bvo.bno}<br>
                            ♡<span class="tspan">${bvo.getLikeCount()}</span>
                            
                            <c:set var="likeUserArr" value="${bvo.getLikeUserArr()}" />
                            <c:set var="isIt" value="false" />
                            <c:forEach items="${likeUserArr}" var="likeUser">
                                <c:if test="${likeUser eq sesid}">
                                    <c:set var="isIt" value="true" />
                                </c:if>
                            </c:forEach>
                            <c:if test="${ses.id ne bvo.id }">
	                            <c:choose>
	                                <c:when test="${isIt eq true}">
	                                    <button class="hateBtn hid hiddenText">취소</button>
	                                </c:when>
	                                <c:otherwise>
	                                    <button class="likeBtn hid hiddenText">좋아요</button>
	                                </c:otherwise>
	                            </c:choose>
                            </c:if>
                            <br>
                        </div>
                    </div>
                    <c:set var="divid" value="${divid + 1}" />
                </c:forEach>
            </c:otherwise>
        </c:choose>
    </div>
    <script type="text/javascript" src="../../resources/js/board/boardPopList.js"></script>
</body>
</html>

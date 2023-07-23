<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>회원 관리</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" type="text/css" href="../../resources/css/user/userlist.css" />
</head>
<body>
    여기는 회원 관리 페이지입니다.
    <table border="1">
        <thead>
            <tr>
                <th width="20%">관리</th>
                <th width="10%">id</th>
                <th width="10%">pw</th>
                <th width="10%">name</th>
                <th width="10%">email</th>
                <th width="5%">following</th>
                <th width="5%">follow</th>
                <th width="10%">grade</th>
                <th width="10%">u_content</th>
                <th width="5%">u_tag</th>
                <th width="5%">img_file</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${list}" var="uvo" varStatus="status">
                <tr>
                    <td>
                        <button onclick='delmem("${uvo.id}");'>회원삭제</button>
                        <!-- 여기부터 비번변경 new -->
                        <div class="modal fade hidePrevented.bs.modal" id="exampleModal${status.index}" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">비밀번호 변경</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <!-- 앤 나중에 히든으로 뺄것. -->
                                            <label for="recipient-name" class="col-form-label">새 비밀번호를 입력해주세요.</label>
                                            <form action="memberRegi2.do" method="post" id="${status.index}">
                                                <input type="hidden" value="${uvo.id}" readOnly name="id"><br>
                                                <input type="password" class="form-control" name="pw">
                                                <button onclick="winOpen2(${status.index});" type="button">비번변경</button>
                                            </form>
                                            <span id="resultMent"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal${status.index}" data-bs-whatever="@mdo">비번변경</button>
                        <!-- 여기까지 -->
                    </td>
                    <td>${uvo.id}</td>
                    <td>${uvo.pw}</td>
                    <td>${uvo.name}</td>
                    <!-- 삭제와 비번 변경 기능 -->
                    <td>${uvo.email}</td>
                    <td>${uvo.following}</td>
                    <td>${uvo.follower}</td>
                    <td>${uvo.grade}</td>
                    <td>${uvo.ucontent}</td>
                    <td>${uvo.utag}</td>
                    <td>${uvo.imgFile}</td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
    <script type="text/javascript" src="/resources/js/manager/userList.js"></script>
    <script>
    		const isOK = '<c:out value="${isOK}" />';
		if (isOK > 0) {
			alert('회원삭제 성공');
		}else if (isOK == 0){
			alert('회원삭제 실패');
		}
    </script>
</body>
</html>

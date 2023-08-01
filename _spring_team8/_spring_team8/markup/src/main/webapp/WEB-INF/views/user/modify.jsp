<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="../../resources/css/user/userModify.css" rel="stylesheet">

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>
<body>
<jsp:include page="../layout/header.jsp"></jsp:include>

<div class="joinbox">

<form action="/member/modify" method="post" enctype="multipart/form-data">
	<div class="middlebox">
	
					
					<h3><img alt="" src="../../resources/images/user/map.png"> 프로필 수정 </h3>
					<div class="imgbox">
					    <div id="previewbox">
					    <img alt="" src="/upload/profile/${uvo.imgFile }"  id="preview">
					    </div>
					    <!-- Button trigger modal -->
					    <button type="button" class="btn btn-primary profileBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="close">프로필 사진 변경</button>
					   <input type="file" name="img" id="file" accept="image/png, image/jpg, image/jpeg, image/bmp, image/gif" style="display: none" onchange="previewImage(this)">
					    </div>
					    
					    
					    <div class="modifyinputbox">
					    <div class="boxbox">
					    <div class="jointitle">아이디</div>
					    <input type="text" name="id" value="${uvo.id }" readonly="readonly"></div>
					     <div class="boxbox">
					    <div class="jointitle">닉네임</div>
					    <input type="text" name="name" value="${uvo.name }" maxlength="10">  </div>
					    <div class="boxbox">
					    <div class="jointitle">이메일</div>
					     <input type="email" name="email" value="${uvo.email }">   </div>
					     <div class="boxbox">
					    <div class="jointitle">소개글</div>
					    <textarea rows="3" cols="30" name="ucontent" maxlength="100">${uvo.ucontent }</textarea></div>
					    
					    <div class="pwchangeBtn">
						<a class="" data-bs-toggle="modal" href="#exampleModalToggle" role="button">비밀번호 변경을 원하십니까?</a>
						</div>
					    </div>
			
		
				    <h3><img alt="" src="../../resources/images/user/map.png"> 관심사 변경</h3>
				      <div class="tagbox">
              <label for="checkbox1">
                <input type="checkbox" value="광물" id="checkbox1" name="utag" class="tags" ${uvo.utag.contains("광물") ? "checked" : ""}>광물</label>
                 <label for="checkbox2">
                <input type="checkbox" value="pvp" id="checkbox2" name="utag" class="tags"${uvo.utag.contains("pvp") ? "checked" : ""}>pvp</label>
                 <label for="checkbox3">
                <input type="checkbox" value="야생" id="checkbox3" name="utag" class="tags" ${uvo.utag.contains("야생") ? "checked" : ""}>야생</label>
                 <label for="checkbox4">
                <input type="checkbox" value="건축" id="checkbox4" name="utag" class="tags" ${uvo.utag.contains("건축") ? "checked" : ""}>건축</label>
                 <label for="checkbox5">
                <input type="checkbox" value="모드" id="checkbox5" name="utag" class="tags" ${uvo.utag.contains("모드") ? "checked" : ""}>모드</label>
                 <label for="checkbox6">
                <input type="checkbox" value="플러그인" id="checkbox6" name="utag" class="tags" ${uvo.utag.contains("플러그인") ? "checked" : ""}>플러그인</label>
                 <label for="checkbox7">
                <input type="checkbox" value="스킨" id="checkbox7" name="utag" class="tags" ${uvo.utag.contains("스킨") ? "checked" : ""}>스킨</label>
                 <label for="checkbox8">
                <input type="checkbox" value="텍스쳐팩" id="checkbox8" name="utag" class="tags" ${uvo.utag.contains("텍스쳐팩") ? "checked" : ""}>텍스쳐팩</label>
                 <label for="checkbox9">
                <input type="checkbox" value="쉐이더" id="checkbox9" name="utag" class="tags" ${uvo.utag.contains("쉐이더") ? "checked" : ""}>쉐이더</label>
                <label for="checkbox10">
                <input type="checkbox" value="레드스톤" id="checkbox10" name="utag" class="tags" ${uvo.utag.contains("레드스톤") ? "checked" : ""}>레드스톤</label>
               <label for="checkbox11">
                <input type="checkbox" value="몹" id="checkbox11" name="utag" class="tags" ${uvo.utag.contains("몹") ? "checked" : ""}>몹</label>
               <label for="checkbox12">
                <input type="checkbox" value="일상" id="checkbox12" name="utag" class="tags" ${uvo.utag.contains("농사") ? "checked" : ""}>일상</label>
               <label for="checkbox13">
                <input type="checkbox" value="인챈트" id="checkbox13" name="utag" class="tags" ${uvo.utag.contains("인챈트") ? "checked" : ""}>인챈트</label>
               <label for="checkbox14">
                <input type="checkbox" value="일러스트" id="checkbox14" name="utag" class="tags" ${uvo.utag.contains("귀여운사진") ? "checked" : ""}>일러스트</label>
               <label for="checkbox15">
                <input type="checkbox" value="풍경" id="checkbox15" name="utag" class="tags" ${uvo.utag.contains("웃긴사진") ? "checked" : ""}>풍경</label>
                
				   <button type="submit" id="formBtn" class="btncss">저장</button>
                </div>
				
	</div>


</form>

</div>

 <!-- Modal -->
					    <div class="modal fade hidePrevented.bs.modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
					        <div class="modal-dialog modal-lg modal-dialog-centered">
					            <div class="modal-content">
					                <div class="modal-header">
					                    <h1 class="modal-title fs-5" id="staticBackdropLabel">프로필 사진 변경</h1>
					                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					                </div>
					                <div class="modal-body">
					                    <div id="choiceImg">
					                        <img class="profile_img" src="../../resources/images/profile/zombie.png"  onclick="showPreview('/resources/images/profile/zombie.png')">
					                        <img class="profile_img" src="../../resources/images/profile/villager.png"  onclick="showPreview('/resources/images/profile/villager.png')">
					                        <img class="profile_img" src="../../resources/images/profile/enderman.jpg"  onclick="showPreview('/resources/images/profile/enderman.jpg')">
					                        <img class="profile_img" src="../../resources/images/profile/pig.jpg"  onclick="showPreview('/resources/images/profile/pig.jpg')">
					                        <img class="profile_img" src="../../resources/images/profile/steve.jpg"  onclick="showPreview('/resources/images/profile/steve.jpg')">
					                        <img id="mypic" src="../../resources/images/profile/물음표.png" alt="Preview" >
					                        
					                    </div>
					                </div>
					            </div>
					        </div>
					    </div> 



<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">비밀번호 변경</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>기존 비밀번호를 입력해주세요.</h5>
        <input type="hidden" value="${ses.id }" name="id" id="id"> <br>
                        <input type="password" class="form-control pwbox" id="oldPw">
                       
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" id="checkBtn" data-bs-toggle="modal">확인</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2"></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="resultMent">
       
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">이전</button>
      </div>
    </div>
  </div>
</div>




<script type="text/javascript" src="/resources/js/user/userModify.js"></script>

</body>
</html>
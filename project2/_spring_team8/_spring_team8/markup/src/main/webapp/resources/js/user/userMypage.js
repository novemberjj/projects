getFollowList(id,ses);

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('followBtn')) {
    console.log(e.target);
    let userId = e.target.dataset.id;
    let sessionId = e.target.dataset.ses;

    console.log('userId', userId, 'sessionId', sessionId);
    if (e.target.classList.contains('unfollowBtn')) {
      unfollowUser(userId, sessionId).then(result => {
        e.target.textContent = '팔로우';
      });
    } else {
      followUser(userId, sessionId).then(result => {
        e.target.textContent = '언팔로우';
      });
    }
    e.target.classList.toggle('unfollowBtn');
  }
});

async function followUser(userId, sessionId) {
  let followData = {
    following: userId,
    follower: sessionId
  }

  try {
    const url = '/member/follow';
    const config = {
      method: "post",
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(followData)
    }
    const resp = await fetch(url, config);
    const result = await resp.text();
  } catch (err) {
    console.log(err);
  }
}

//팔로잉 리스트
async function spreadFollowingList(id) {
  console.log(id);
  try {
    const resp = await fetch('/member/followinglist/' + id);
    const result = await resp.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

function getFollowList(id, sesId) {
  let sesfollowingList = [];
  spreadFollowingList(sesId).then(result => {
    console.log(sesId);
    const followzone = document.getElementById('followZone');
    for (let user of result) {
      if (user.id == sesId) {
        sesfollowingList = user.following.split(",");
        console.log('ses의 팔로잉 리스트' + followingList);
        for (let following of sesfollowingList) {
          if (following == id) {
            document.querySelector('.followBtn').classList.add('unfollowBtn');
            document.querySelector('.followBtn').textContent = '언팔로우';
          }
        }
      }
    }
  })

  spreadFollowingList(id).then(result => {
    console.log('팔로잉리스트', result);
    const followingbody = document.getElementById('followingtable');
    let followingCnt = 0;
    let followingList = [];
    for (let user of result) {
      if (user.follower != null && user.follower !== '') {
        let list1 = user.follower.split(",");
        console.log(list1);

        for (let following of list1) {
          if (following == id) {
            followingList.push(following);
            let table = `<tr><td><img alt="" src="/upload/profile/${user.imgFile }" style="width: 60px; height: 60px;"></td>`;
            table += `<td><a href="/member/mypage?id=${user.id}">${user.id }</a></td>`;
            if (user.id != sesId) {
              table += `<td><button type="button" class="followBtn unfollowBtn" data-id="${user.id}" data-ses="${sesId}">언팔로우</button></td>`;
            }
            table += `</tr>`;

            followingbody.innerHTML += table;
            followingCnt++;
          }
        }
      }
    }
    if (followingCnt === 0) {
      followingbody.innerHTML = '<h3>팔로잉 목록이 없습니다.</h3>';
    }
    document.getElementById('followingCnt').innerHTML = `팔로잉&nbsp;&nbsp;&nbsp;&nbsp;${followingCnt}명`;
    console.log('팔로잉리스트', followingList);

    const followerbody = document.getElementById('followertable');
    let followerCnt = 0;
    let followerList = [];
    for (let user of result) {
      if (user.following != null && user.following !== '') {
        let list2 = user.following.split(",");
        console.log(list2);

        for (let follower of list2) {
          if (follower == id) {
            followerList.push(follower);
            let table = `<tr><td><img alt="" src="/upload/profile/${user.imgFile }" style="width: 60px; height: 60px;"></td>`;
            table += `<td><a href="/member/mypage?id=${user.id}">${user.id }</a></td>`;
            if (user.id != sesId) {
              if (sesfollowingList.includes(user.id)) {
                table += `<td><button type="button" class="followBtn unfollowBtn" data-id="${user.id}" data-ses="${sesId}">언팔로우</button></td>`;
              } else {
                table += `<td><button type="button" class="followBtn" data-id="${user.id}" data-ses="${sesId}">팔로우</button></td>`;
              }
            }
            table += `</tr>`;
            followerbody.innerHTML += table;
            followerCnt++;
          }
        }
      }
    }
    if (followerCnt === 0) {
      followerbody.innerHTML = '<h3>팔로워 목록이 없습니다.</h3>';
    }
    document.getElementById('followerCnt').innerHTML = `팔로워&nbsp;&nbsp;&nbsp;&nbsp;${followerCnt}명`;
    console.log('팔로워리스트', followerList);
  })
}


async function unfollowUser(id, sesId) {
  let followData = {
    following: id,
    follower: sesId
  }
  console.log('id',id, 'ses',sesId);
  try {
    const url = '/member/';
    const config = {
      method: "delete",
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(followData)
    }
    const resp = await fetch(url, config);
    const result = await resp.text();
  } catch (err) {
    console.log(err);
  }
}

// 페이지 가지고오기
let selectPorL = 0;

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('myPostTab').style.display = 'none';
  document.querySelector('.mylike').classList.add('selected');

  const tabItems = document.querySelectorAll('.ulbutton li');
  tabItems.forEach(function(item) {

    item.addEventListener('click', function() {

      // 선택된 탭의 클래스를 변경하고 나머지 탭의 클래스를 제거합니다.
      tabItems.forEach(function(tab) {
        if (tab === item) {
          tab.classList.add('selected');
        } else {
          tab.classList.remove('selected');
          if (item.classList.contains('mylike')) {
            selectPorL = 0;
          } else if (item.classList.contains('mypost')) {
            selectPorL = 1;
          }
        }
      });
      console.log(selectPorL);

      if (item.classList.contains('mypost')) {
        document.getElementById('myLikeTab').style.display = 'none';
        document.getElementById('myPostTab').style.display = 'block';
      } else if (item.classList.contains('mylike')) {
        document.getElementById('myPostTab').style.display = 'none';
        document.getElementById('myLikeTab').style.display = 'block';
      }
    });

  });
});


async function getList(apiURL, pageNo, keyword) {
  console.log("가지고온 페이지: " + pageNo);

  try {
    const resp = await fetch(apiURL + pageNo + '-' + keyword);
    const result = await resp.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

let p = postdivid - 1; // 마지막으로 만들어진 pbox
let l = likedivid - 1; // 마지막으로 만들어진 lbox
let isHandlingScroll = false; // 중복 실행 방지를 위한 변수
const boxCount = 12; // 한 번에 생성할 박스 개수
let likepag = 2; // 불러올 시작 페이지
let postpag = 2;

function handleScroll() {
  console.log('likedivid', p);
  console.log('postdivid', l);

  if (isHandlingScroll) {
    return; // 이미 실행 중인 경우, 더 이상의 처리를 하지 않고 종료
  }

  isHandlingScroll = true; // 실행 중 표시

  let myDiv;
  let rect;
  let targetPage;
  let apiURL;

  if (selectPorL === 0) {
    if (likedivid > 0) {
      myDiv = document.getElementById('lbox' + l);
      rect = myDiv.getBoundingClientRect();
      targetPage = likepag;
      apiURL = '/board/likelist/';
    }
  } else if (selectPorL === 1) {
    if (postdivid > 0) {
      myDiv = document.getElementById('pbox' + p);
      rect = myDiv.getBoundingClientRect();
      targetPage = postpag;
      apiURL = '/board/postlist/';
    }
  }

  console.log('어떤 div' + myDiv);

  if (myDiv == null || myDiv === '') {
    isHandlingScroll = false;
    return;
  }

  let windowHeight = window.innerHeight || document.documentElement.clientHeight;
  let viewportY = (windowHeight / 4) * 3;

  if (rect.top + rect.height / 2 < viewportY) {
    console.log('div' + (selectPorL === 0 ? 'l' : 'p') + l + '가 화면의 중앙보다 위에 있습니다.');

    let keyword = sesId; // 검색어 가져오기

    getList(apiURL, targetPage, keyword)
      .then(async result => {
        if (result.length > 0) {
          for (let bvo of result) {
            if (selectPorL === 0) {
              l += 1;
              console.log('divl' + l + ' 생성!');
            } else if (selectPorL === 1) {
              p += 1;
              console.log('divp' + p + ' 생성!');
            }

            let previousDiv = document.getElementById(`${selectPorL === 0 ? 'lbox' : 'pbox'}${selectPorL === 0 ? l - 1 : p - 1}`);
            let str = bvo.likeUser;
            let likeUserArr = str !== null ? str.split('#').filter(item => item !== '') : [];

            let likeCount = 0;
            let isIt = false;

            for (let i = 0; i < likeUserArr.length; i++) {
              let likeUser = likeUserArr[i];

              if (likeUser === sesId) {
                isIt = true;
                break;
              }
              likeCount++;
            }

            let buttonStr = "";
            if(bvo.id != sesId){
              if (isIt) {
                buttonStr = `<button class="hateBtn hid hiddenText">취소</button>`;
              } else {
                buttonStr = `<button class="likeBtn hid hiddenText">좋아요</button>`;
              }
            }
            
            previousDiv.insertAdjacentHTML('afterend', `
              <div class="pp" id="${selectPorL === 0 ? 'lbox' : 'pbox'}${selectPorL === 0 ? l : p}">
                <div class="contentBox" data-bno="${bvo.bno}" data-title="${bvo.title}" data-boardid="${bvo.id}">
                  <a href="/board/detail?bno=${bvo.bno}">
                    <button class="hid hiddenText">aa</button>
                  </a>
                  ${bvo.bno}<br>
                  ♡<span class="tspan">${likeCount}</span>
                  ${buttonStr}
                  <br>
                </div>
              </div>
            `);
          }

          toggleClass();
        }

        if (selectPorL === 0) {
          likepag += 1;
          console.log("다음 like 페이지: " + likepag);
        } else if (selectPorL === 1) {
          postpag += 1;
          console.log("다음 post 페이지: " + postpag);
        }

        isHandlingScroll = false; // 실행 종료 표시
      })
      .catch(error => {
        console.error(error);
        isHandlingScroll = false; // 실행 종료 표시
      });

  } else {
    isHandlingScroll = false; // 실행 종료 표시
  }
}

// 스크롤 이벤트에 handleScroll 함수를 연결합니다.
window.addEventListener('scroll', handleScroll);


//클릭이벤트
document.addEventListener('click', (e) => {
  console.log('클릭');
  if (e.target.classList.contains('likeBtn')){ //좋아요
    console.log('좋아요');
    e.target.textContent = '취소';

    const div = e.target.closest('div');
    const bno = div.dataset.bno;
    const title = div.dataset.title;
    const boardid = div.dataset.boardid;

    likeToggle(e, bno);

    const pushType = 0; //좋아요는 0 ,댓글은 1
    putAlarm(bno, title, boardid, sesId, sesName, pushType);
  }else if (e.target.classList.contains('hateBtn')){//좋아요 취소
    console.log('좋아요 취소');
    e.target.textContent = '좋아요';

    const div = e.target.closest('div');
    const bno = div.dataset.bno;

    likeToggle(e, bno);
  }

});

//좋아요 토글
function likeToggle(e,bno){
  e.target.classList.toggle('likeBtn');
  e.target.classList.toggle('hateBtn');

  DBlikeToggle(bno, sesId).then(result => {
    let tspan = e.target.closest('div').querySelector('.tspan');
    tspan.textContent = result;
  });
}

// 좋아요 변환
async function DBlikeToggle(bno, sesId) {
  try {
    const url = '/board/likeToggle/' + bno + "/" + sesId;
    const config = { method: 'put' };
    const resp = await fetch(url, config);
    const result = await resp.text();
    return result;
  } catch (error) {
    console.log(error);
  }
}

function toggleClass() {
let contentBoxes = document.querySelectorAll('.contentBox');
console.log(contentBoxes);

contentBoxes.forEach((contentBox) => {
  // 마우스 올렸을 때 
  contentBox.addEventListener('mouseenter', (e) => {
    const target = e.currentTarget;
    target.classList.add('blackBox');
    target.querySelectorAll('.hid').forEach((element) => {
      element.classList.remove('hiddenText');
    });
  });

  // 마우스 나갔을 때
  contentBox.addEventListener('mouseleave', (e) => {
    const target = e.currentTarget;
    target.classList.remove('blackBox');
    target.querySelectorAll('.hid').forEach((element) => {
      element.classList.add('hiddenText');
    });
  });
});
}

toggleClass();

// 알람 DB에 저장
async function putAlarm(bno, title, boardid, sesId, sesName, pushType) {
  try {
    const url = "/alarm/push";
    const data = {
      bno: bno,
      title: title,
      id: boardid,
      pushId: sesId,
      pushName: sesName,
      pushType: pushType
    };
    const config = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const resp = await fetch(url, config);
    const result = await resp.text();
    return result;
  } catch (error) {
    console.log(error);
  }
}

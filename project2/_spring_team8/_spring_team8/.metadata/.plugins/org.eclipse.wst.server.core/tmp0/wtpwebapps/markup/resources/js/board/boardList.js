let i = 39; // 마지막으로 만들어진 div
let isHandlingScroll = false; // 중복 실행 방지를 위한 변수
const boxCount = 40; // 한 번에 생성할 박스 개수
let pag = 2; // 불러올 시작 페이지

function handleScroll() {
  if (isHandlingScroll) {
    return; // 이미 실행 중인 경우, 더 이상의 처리를 하지 않고 종료
  }

  isHandlingScroll = true; // 실행 중 표시

  let myDiv = document.getElementById('box' + i);
  let rect = myDiv.getBoundingClientRect();
  let windowHeight = window.innerHeight || document.documentElement.clientHeight;
  let viewportY = (windowHeight / 4) * 3;

  if (rect.top + rect.height / 2 < viewportY) {
    console.log('div' + i + '가 화면의 중앙보다 위에 있습니다.');

    let keyword = document.getElementById("searchInput").getAttribute("data-keyword"); // 검색어 가져오기

    getBoardList(pag, keyword).then(async result => {
      if (result.length > 0) {
        for (let bvo of result) {
          i += 1;
          let previousDiv = document.getElementById(`box${i - 1}`);
          let str = bvo.likeUser;
          let likeUserArr = [];

          if (str !== null) {
            likeUserArr = str.split('#').filter(function(item) {
              return item !== '';
            });
          }

          let likeCount = 0;
          let isIt = false; //좋아요 눌러져있는가?

          for (let i = 0; i < likeUserArr.length; i++) {
            let likeUser = likeUserArr[i];
            if (likeUser === sesid) {
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
            <div class="pp" id="box${i}">
              <div class="contentBox" data-bno="${bvo.bno}" data-title="${bvo.title}" data-boardid="${bvo.id}">
                <a href="/board/detail?bno=${bvo.bno}">
                  <button class="hid hiddenText">aa</button>
                </a>
                ${bvo.bno}<br>
                ♡<span class="tspan">${likeCount}</span>
                ${buttonStr}<br>
              </div>
            </div>
          `);

          console.log('div' + i + '생성!');
        }

        toggleClass();
      }

      pag += 1;
      console.log("다음 페이지: " + pag);
      isHandlingScroll = false; // 실행 종료 표시
    });

  } else {
    isHandlingScroll = false; // 실행 종료 표시
  }
}


// 스크롤 이벤트에 handleScroll 함수를 연결합니다.
window.addEventListener('scroll', handleScroll);

// 페이지 가지고오기
async function getBoardList(pageNo, keyword) {
  console.log("가지고온 페이지: " + pageNo);

  try {
    const resp = await fetch('/board/list/' + pageNo + '-' + keyword);
    const result = await resp.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

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

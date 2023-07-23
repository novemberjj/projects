const emojiList = ['😃', '👍', '❤️', '😊', '🎉'];

async function postCommentToServer(cmtData) {
    try {
        const url = '/comment/post';
        const config = {
            method: "post",
            headers: {
                'content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(cmtData)
        };
        const resp = await fetch(url, config);
        const result = await resp.text(); //isOK
        return result;
    } catch (err) {
        console.log(err);
    }
}
//댓글등록
document.getElementById('cmtPostBtn').addEventListener('click', (e) => {
    const cmtText = document.getElementById('cmtText').value;
    const bno = e.target.dataset.bno; // data-bno 값 가져오기
    const title = e.target.dataset.title; // data-title 값 가져오기
    const boardid = e.target.dataset.boardid; // data-boardid 값 가져오기

    console.log(cmtText);
    if (cmtText === "" || cmtText === null) {
        alert("댓글을 입력해주세요");
        document.getElementById('cmtText').focus();
        return false;
    } else {
        let cmtData = {
            bno: bnoVal,
            id: document.getElementById('cmtWriter').innerText,
            ccontent: cmtText
        };
        console.log(cmtData);
        const pushType = 1;
        putAlarm(bno, title, boardid, sesId, sesName, pushType);
        postCommentToServer(cmtData).then(result => {
            //isOk 확인 데이터
            if (result > 0) {
                alert("댓글 등록 성공~!!");
                getCommentList(cmtData.bno);
            }
        });
    }
});

document.getElementById('emojiBtn').addEventListener('click', () => {
    const emojiContainer = document.getElementById('emojiContainer'); // 이모티콘 목록을 담을 요소
    emojiContainer.innerHTML = ''; // 목록을 비웁니다
    emojiList.forEach(emoji => {
        const emojiButton = document.createElement('button');
        emojiButton.classList.add('emojiItem');
        emojiButton.textContent = emoji;

        emojiButton.addEventListener('click', () => {
            const cmtText = document.getElementById('cmtText');
            cmtText.value += emoji; // 선택한 이모티콘을 댓글 텍스트 필드에 추가합니다
            emojiContainer.innerHTML = ''; // 이모티콘 목록을 숨깁니다
        });
        emojiContainer.appendChild(emojiButton);
    });
});

async function spreadCommentFromServer(bno) {
    console.log(bno);
    try {
        const resp = await fetch('/comment/' + bno);
        const result = await resp.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}
//댓글불러오기
function getCommentList(bno) {
    spreadCommentFromServer(bno).then(result => {
        console.log(result);
        const ul = document.getElementById('cmtListArea');
        if (result.length > 0) {
            ul.innerHTML = "";
            for (let cvo of result) {
                ul.innerHTML += `
                <li data-cno="${cvo.cno}">
                    <div>
                        <div>
                            <p>작성자: ${cvo.id}</p>
                        </div>
                        <input type="text" id="cmtTextMod" value="${cvo.ccontent}">
                    </div>
                    <span>${cvo.regDate}</span>
                    <button type="button" class="modBtn">%</button>
                    <button type="button" class="delBtn">x</button>
                </li>
                `;
            }
        } else {
            let li = `<li>Comment List Empty</li>`;
            ul.innerHTML += li;
        }
    });
}
//댓글수정
async function editCommentToServer(cmtDataMod) {
    try {
        const url = '/comment/' + cmtDataMod.cno;
        const config = {
            method: 'put',
            headers: {
                'content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(cmtDataMod)
        };
        const resp = await fetch(url, config);
        const result = await resp.text();
        return result;
    } catch (err) {
        console.log(err);
    }
}
//댓글삭제
async function removeCommentToServer(cno) {
    try {
        const url = '/comment/' + cno;
        const config = {
            method: 'delete'
        };
        const resp = await fetch(url, config);
        const result = await resp.text();
        return result;
    } catch (err) {
        console.log(err);
    }
}

document.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.classList.contains('modBtn')) {
        console.log("수정버튼 클릭시");
        //내가 클릭한 버튼의 댓글 뭉치
        let li = e.target.closest('li');
        let cnoVal = li.dataset.cno;
        let textContent = li.querySelector('#cmtTextMod').value;
        console.log("cno / content   => " + cnoVal + "  " + textContent);

        let cmtDataMod = {
            cno: cnoVal,
            ccontent: textContent
        };
        console.log(cmtDataMod);
        //서버 연결
        editCommentToServer(cmtDataMod).then(result => {
            if (parseInt(result) > 0) {
                alert('댓글 수정 성공~!!');
            }
            getCommentList(bnoVal);
        });
    } else if (e.target.classList.contains('delBtn')) {
        console.log("삭제버튼 클릭시");
        let li = e.target.closest('li');
        let cnoVal = li.dataset.cno;
        console.log(cnoVal);
        removeCommentToServer(cnoVal).then(result => {
            if (result > 0) {
                alert('댓글 삭제 성공~!!');
            }
            getCommentList(bnoVal);
        });
    }
});

//알람
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
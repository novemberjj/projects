let filesArr = [];

const regExp = new RegExp("\.(exe|sh|bat|msi|dll|js)$"); // 실행파일 막기
const regExpImg = new RegExp("\.(jpg|jpeg|png|gif|bmp)$"); // 이미지파일
const maxSize = 1024 * 1024 * 20; // 20MB보다 큰지 확인

function fileSizeValidation(fileName, fileSize) {
  if (regExp.test(fileName)) {
    // 실행파일인 경우
    return 0;
  } else if (fileSize > maxSize) {
    return 0;
  } else if (!regExpImg.test(fileName)) {
    // 이미지 파일이 아닌 경우 첨부 X
    return 0;
  } else {
    return 1;
  }
}

function generateUniqueUUID() {
  // UUID 생성 로직 구현
  // 예시: UUID를 생성하는 코드
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

  return uuid;
}

document.getElementById('trigger').addEventListener('click', () => {
  document.getElementById('file').click();
});

document.getElementById('file').addEventListener('change', (e) => {
  let isOk = 1;
  const newFiles = Array.from(e.target.files);

  for (let file of newFiles) {
    let validResult = fileSizeValidation(file.name, file.size);
    isOk *= validResult;
  }

  if (isOk == 1) {
    filesArr = filesArr.concat(newFiles);
  } else {
    alert('업로드 불가능');
  }

  console.log(newFiles);
  handleFiles(filesArr);
});

function handleFiles(filesArr) {
  let imageZone = document.getElementById('imageZone');

  const dataTransfer = new DataTransfer();
  for (let file of filesArr) {
    dataTransfer.items.add(file);
  }

  const fileInput = document.getElementById('file');
  fileInput.files = dataTransfer.files;

  let i = 0; // 인덱스 변수 초기화
  const carouselInner = document.getElementById('carousel-inner');
  const carouselIndicators = document.getElementById('carousel-indicators');

  for (const file of filesArr) {
    if (typeof file.uuid === "undefined") {
      const reader = new FileReader();

      reader.onload = function (e) {
        console.log(file.uuid);

        const uniqueUUID = generateUniqueUUID();
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        carouselItem.classList.add('imgItem');
        carouselItem.setAttribute('data-uuid', uniqueUUID);

        file.uuid = uniqueUUID;

        console.log(file.name);
        console.log(file.uuid);
        const img = document.createElement('img');
        img.src = e.target.result;
        img.classList.add('d-block', 'w-100');
        img.alt = '...';

        const li = document.createElement('li');
        li.dataset.bsTarget = '#carouselExampleIndicators';

        let currentIndex = carouselIndicators.querySelectorAll("li").length;
        li.dataset.bsSlideTo = currentIndex;

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
        carouselIndicators.appendChild(li);

        if (currentIndex === 0) {
          carouselItem.classList.add('active');
          li.setAttribute('aria-current', true);
          li.classList.add('active');
        }

        const thDiv = document.getElementById('thBox');

        const th = document.createElement('div');
        th.classList.add('thumb');
        th.classList.add(`${i}`);
        th.setAttribute('data-uuid', uniqueUUID);
        th.setAttribute('data-name', file.name);

        const thImg = document.createElement('img');
        thImg.src = e.target.result;
        thImg.classList.add('dthImg');
        thImg.style.width = '236px';

        const delBtn = document.createElement('button');

        delBtn.classList.add('delete-button');
        delBtn.classList.add('newBtn');
        delBtn.textContent = "x";
        delBtn.setAttribute('id', 'delBtn');

        thDiv.appendChild(th);
        th.appendChild(thImg);
        th.appendChild(delBtn);
        i++;
      };

      reader.readAsDataURL(file);
    } else {
      break;
    }
  }
}

// 삭제버튼 서버로 보내기
async function removeFileToServer(uuid) {
  try {
    const url = '/board/file/' + uuid;
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

// file delete 
document.addEventListener('click', (e) => {
  // db에 저장 안되어 있는 파일 삭제처리 
  if (e.target.classList.contains('newBtn')) {

    

    e.preventDefault();
    const ol = document.getElementById('carousel-indicators');
    const lastLi = ol.lastElementChild;

    let thumbDiv = e.target.closest('.thumb');
    let imgName = thumbDiv.getAttribute('data-name');
    let uuid = thumbDiv.getAttribute("data-uuid");

    //이미지 안쪽 버튼삭제
    //썸네일 이미지삭제
    thumbDiv.remove();
    ol.removeChild(lastLi);

    var carouselInner = document.querySelector(".carousel-inner");
    var carouselItems = carouselInner.querySelectorAll(".carousel-item");
    // 메인이미지의 uuid와 비교하여 같으면 삭제
    for (var j = carouselItems.length - 1; j >= 0; j--) {
      if (carouselItems[j].getAttribute("data-uuid") === uuid) {
        if (j < carouselItems.length - 1 && carouselItems[j].classList.contains('active')) {
          carouselItems[j + 1].classList.add('active');
        }
        carouselItems[j].remove();
      }
    }

    const index = thumbDiv.classList[1]; // 이미지 파일명과 일치하는 인덱스 찾기

    if (index !== -1) {
      filesArr.splice(index, 1); // 배열에서 이미지 삭제
      alert('이미지가 삭제되었습니다.');
    }
  }

  handleFiles(filesArr);

  // db에 저장된 file 삭제 처리
  if (e.target.classList.contains('oldBtn')) {
    e.preventDefault();
    const ol = document.getElementById('carousel-indicators');
    const lastLi = ol.lastElementChild;

    let thumbDiv = e.target.closest('.thumb');
    let uuid = thumbDiv.getAttribute("data-uuid");

    //이미지 안쪽 버튼삭제
    //썸네일 이미지삭제
    thumbDiv.remove();
    ol.removeChild(lastLi);

    var carouselInner = document.querySelector(".carousel-inner");
    var carouselItems = carouselInner.querySelectorAll(".carousel-item");
    // 메인이미지의 uuid와 비교하여 같으면 삭제
    for (var j = carouselItems.length - 1; j >= 0; j--) {
      if (carouselItems[j].getAttribute("data-uuid") === uuid) {
        if (j < carouselItems.length - 1 && carouselItems[j].classList.contains('active')) {
          carouselItems[j + 1].classList.add('active');
        }
        carouselItems[j].remove();
      } 
    }

    removeFileToServer(uuid).then(result => {
      console.log(result);
      alert('파일삭제' + (parseInt(result) > 0 ? '성공' : '실패'));
    });
  }
});

  


let inputElm = document.querySelector('input[name=btag]');
let whitelist = [
  "#arrerw",
  "#rewb",
  "#rerwtc",
  "#dfdfd",
  "#jjkke",
  "#ttf",
  "#g",
  "#h",
  "#i",
  "#j",
  "#k",
  "#l",
  "#m",
  "#no mod",
  "#ttttt",
  "#wwww",
  "#gggg",
  "#123445",
  "#마인크래프트",
  "#마크업",
  "#징징이",
  "#노치사과",
  "#채굴",
  "#ㅌㅌ",
  "#우리집"
];

// 위의 input 요소에 Tagify 초기화
var tagify = new Tagify(inputElm, {
  enforceWhitelist: true,

  // 초기 입력 값으로부터 배열 생성
  whitelist: inputElm.value.trim().split(/\s*,\s*/)
});

// 체인 가능한 이벤트 리스너
tagify
  .on('add', onAddTag)
  .on('remove', onRemoveTag)
  .on('input', onInput)
  .on('edit', onTagEdit)
  .on('invalid', onInvalidTag)
  .on('click', onTagClick)
  .on('focus', onTagifyFocusBlur)
  .on('blur', onTagifyFocusBlur)
  .on('dropdown:hide dropdown:show', (e) => console.log(e.type))
  .on('dropdown:select', onDropdownSelect);

var mockAjax = (function mockAjax() {
  var timeout;
  return function (duration) {
    clearTimeout(timeout); // 마지막 요청 중단
    return new Promise(function (resolve, reject) {
      timeout = setTimeout(resolve, duration || 700, whitelist);
    });
  };
})();

// 태그가 추가되었을 때 콜백
function onAddTag(e) {
  console.log("onAddTag: ", e.detail);
  console.log("original input value: ", inputElm.value);
  tagify.off('add', onAddTag); // 커스텀 Tagify 이벤트 제거하는 예시
}

// 태그가 제거되었을 때 콜백
function onRemoveTag(e) {
  console.log("onRemoveTag:", e.detail, "tagify instance value:", tagify.value);
}

// 문자가 추가/제거되었을 때 (사용자가 입력/삭제 중일 때)
function onInput(e) {
  console.log("onInput: ", e.detail);
  tagify.settings.whitelist.length = 0; // 현재 화이트리스트 초기화
  tagify.loading(true).dropdown.hide.call(tagify); // 로더 애니메이션 표시

  // 지연된 가짜 요청으로부터 새로운 화이트리스트 가져오기 (Promise)
  mockAjax()
    .then(function (result) {
      // tagify "whitelist" 배열 값을 새 값으로 교체하고 이미 선택한 태그들을 다시 추가
      tagify.settings.whitelist.push(...result, ...tagify.value);

      // 제안 드롭다운 렌더링.
      tagify.loading(false).dropdown.show.call(tagify, e.detail.value);
    });
}

function onTagEdit(e) {
  console.log("onTagEdit: ", e.detail);
}

// 잘못된 태그가 추가되었을 때 콜백
function onInvalidTag(e) {
  console.log("onInvalidTag: ", e.detail);
}

// 태그를 클릭했을 때 콜백
function onTagClick(e) {
  console.log(e.detail);
  console.log("onTagClick: ", e.detail);
}

function onTagifyFocusBlur(e) {
  console.log(e.type, "event fired");
}

function onDropdownSelect(e) {
  console.log("onDropdownSelect: ", e.detail);
}

document.getElementById('regBtn').addEventListener('click', () => {
  const val = document.getElementById('btag').value;

  for (const tagValue of tagify.value) {
    console.log(tagValue);
  }
});
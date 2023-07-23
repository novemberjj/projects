// (화면이 로드되면)이벤트 추가 
document.addEventListener('DOMContentLoaded', () => {
  const dropZone = document.getElementById('dropBox'); //dropBox = 사용자가 드랍할 박스
  const trigger = document.getElementById('trigger');
  // 기본 동작 방지 (파일 열기 방지)
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });

  // 파일 드롭 처리
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    console.log(files);
    console.log(e.target.result);
    
    const imageZone = document.getElementById('fileZone');
    imageZone.innerHTML = ''; // 기존 이미지 제거
    
    for (let file of files) {
      if (regExpImg.test(file.name)) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.classList.add('preview-image');
          imageZone.appendChild(img);
        }
      
      }
    }
    handleFiles(files);
    document.getElementById('file').files = files;
  });
  
  document.getElementById('trigger').addEventListener('click', () => {
    document.getElementById('file').click();
  });

  document.getElementById('file').addEventListener('change', (e) => {
    const files = e.target.files;
    const imageZone = document.getElementById('fileZone');
    imageZone.innerHTML = ''; // 기존 이미지 제거

    for (let file of files) {
      
        const reader = new FileReader();

        reader.onload = function (e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.classList.add('preview-image');
          imageZone.appendChild(img);
        };      
    }

    handleFiles(files);
    document.getElementById('file').files = files;

  });
});

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


function handleFiles(files) {
  let imageZone = document.getElementById('fileZone');
  imageZone.innerHTML = '';

  imageZone.innerHTML = `
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="false">
      <div class="carousel-indicators">
      </div>
      <div class="carousel-inner" id="imggroup">
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">이전</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">다음</span>
      </button>
    </div>`;

  const imgGroup = document.getElementById('imggroup');
  const carouselIndicators = document.querySelector('.carousel-indicators');
  let i = 0; // 인덱스 변수 초기화
  let isOk = 1;

  for (let file of files) {
    let validResult = fileSizeValidation(file.name, file.size);
    isOk *= validResult;

    if (regExpImg.test(file.name)) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        const img = document.createElement('img');
        img.src = e.target.result;
        img.classList.add('d-block', 'w-100');
        img.alt = '...';

        carouselItem.appendChild(img);
        imgGroup.appendChild(carouselItem);

        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.bsTarget = '#carouselExampleIndicators';
        button.dataset.bsSlideTo = `${i}`;
        button.setAttribute('aria-label', `슬라이드 ${i + 1}`);

        carouselIndicators.appendChild(button);

        if (i === 0) {
          carouselItem.classList.add('active');
          button.classList.add('active');
        }

        i++; // 인덱스 증가
      };

      reader.readAsDataURL(file);
    }
  }
}


var inputElm = document.querySelector('input[name=btag]');
var whitelist = [
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
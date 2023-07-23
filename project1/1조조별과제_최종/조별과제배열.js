let gisa=document.querySelectorAll('.container');
        console.log(gisa);
        let currentIdx=0;
        let str=[];
       
        str.push(`   <nav>
        <a href="https://www.bloter.net/" target="_blank">
        <h1 class="logo_0"></h1>
    </a>
    <a href="" target="_blank">
        <div class="ad_0">
            </div>
    </a>
<ul class="icon">
    <!-- 구독, 이용자한마디, 공유, 날짜 -->
    <li><button type="button" class="subscribeBtn" onclick="loginSer();">
        <span class="material-symbols-outlined">
            done
            </span>
        구독하기</button></li>
    <li>
        <button type="button" id="shareBtn">
            <span class="material-symbols-outlined">
            share_windows
            </span>
        </button>
    </li>
        <li class="date_0"></li>
</ul>
</nav>
<section>
<div class="article1_0">
    <a href="https://www.bloter.net/news/articleView.html?idxno=601057" target="_blank">
    <div class="article1_0-img"></div>
    <div class="article1_0-txt">
        <h2>
            석유화학업계 신용도 희비...금호 '웃고' SK '울고' [Vault@Market]
        </h2>
        <p>
            볼트엣마켓(Vault@Market)은 가치있는 거래 정보를 제공하고 투자자를 보호(Vault)
            하는, <블로터>의 새로운 자본시장 정보제공 서비스입니다. 국내 신용평가사 상반기
            정기평가를 앞두고 석유화학업계의 신용등급 희비가 엇갈려 주목된다. 전방산업군으로서 현금흐름 개선에
        </p>
    </div>
</div>
</a>
<div class="article2_0">
    <a href="https://www.bloter.net/news/articleView.html?idxno=601048" target="_blank">
    <div class="article2_0-img"></div>
    <div class="article2_0-txt">
        <p>금융사, 매출 줄여 전세사기 돕는데 정부는 언 발에 오줌만</p>
    </div>
    </a>
</div>
<div class="article3_0">
    <div class="article3_0-txt">
        <ul>
            <li><a href="https://www.bloter.net/news/articleView.html?idxno=601064" target="_blank">英 경쟁당국 MS의 액티비전 인수 반대..."클라우...</a></li>
            <li><a href="https://www.bloter.net/news/articleView.html?idxno=601060" target="_blank">메타, 광고 사업 회복에 매출 약 1년만에 증가...</a></li>
            <li><a href="https://www.bloter.net/news/articleView.html?idxno=601059" target="_blank">LG이노텍, '아이폰14 부진' 속 매출 늘었지만'...</a></li>
            <li><a href="https://www.bloter.net/news/articleView.html?idxno=601052" target="_blank">1분기 흑자전환 현대제철... 건설 불황 자동차 강...</a></li>
            <li><a href="https://www.bloter.net/news/articleView.html?idxno=601056" target="_blank">'1Q 적자' LG 디스플레이, '중소형 OLED'로 하반...</a></li>
            <li><a href="https://www.bloter.net/news/articleView.html?idxno=601054" target="_blank">삼성전기, '영업익 66% 감소'에도 '자동차 부품'...</a></li>
        </ul>
    </div>
    <div class="article3_0-img">
        <a href="https://www.bloter.net/news/articleView.html?idxno=601055" target="_blank">
        <div class="article3_0-realimg"></div>
        <p>'주가 광풍' 금양, 2차전지 사업 추진 자금여력은?
            [Vault@Market]
        </p>
    </a>
    </div>
</div>

<div class="article4_0">
    <div class="title_0">
        <h3>HOT 뉴스</h3>
    </div>
    <div class="lank_0">
        <div class="article4_0-txt">
            <ul>
                <li><a href="https://www.bloter.net/news/articleView.html?idxno=600916" target="_blank">'네이버클라우드 합병' 웍스</a></li>
                <li><a href="https://www.bloter.net/news/articleView.html?idxno=601007" target="_blank">현대차그룹 한국전기차충전</a></li>
                <li><a href="https://www.bloter.net/news/articleView.html?idxno=600914" target="_blank">'파운드리 1위' TSMC를 둘러</a></li>
            </ul>
        </div>
        <div class="artice4_0-img">
            <ul>
                <li><a href="https://www.bloter.net/news/articleView.html?idxno=600916" target="_blank"><img src="image/0번기사사진/arti0_img3.jpg" alt="" width="80px" height="50px"></a></li>
                <li><a href="https://www.bloter.net/news/articleView.html?idxno=601007" target="_blank"><img src="image/0번기사사진/arti0_img4.jpg" alt="" width="80px" height="50px"></a></li>
                <li><a href="https://www.bloter.net/news/articleView.html?idxno=600914" target="_blank"><img src="image/0번기사사진/arti0_img5.jpg" alt="" width="80px" height="50px"></a></li>
            </ul>

        </div>
    </div>

</div>
</section>`);
        str.push(`  <nav>
        <h1 class="logo_1"></h1>
        <div class="ad_1">
            
            </div>
    <ul class="icon">
        <!-- 구독, 이용자한마디, 공유, 날짜 -->
        <li><button type="button" class="subscribeBtn" onclick="loginSer();">
            <span class="material-symbols-outlined">
                done
                </span>
            구독하기</button></li>
        <li>
            <button type="button">
                <span class="material-symbols-outlined">
                share_windows
                </span>
            </button>
        </li>
            <li class="date_1"></li>
    </ul>
</nav>
<section>
<div class="wrap">
        <div class="article1_1">
            <a href="http://www.newsprime.co.kr/news/article/?no=600049" target="_blank">
            <div class="article1_1-img">
                    <div class="article1_1_txt">
                        <h3>삼성-구글, 굳건한 13년 동맹 깨지나</h3>
                        <p>삼성, 챗GPT 탑재 '빙'에 관심...구글, 폴더블폰 6월 출시 예정</p>
                    </div>
                </div>
            </a>
            <a href="http://www.newsprime.co.kr/news/article/?no=600045" target="_blank">
                <div class="arti1-img1">
                    <img src="image/1번기사사진/arti1_img2.jpg" alt="" width="134px" height="134px">
                    <p>
                        땅스 부대찌개·걸작떡볶이치킨, 2023 동행축제
                    </p>
                    </div>
            </a>
            <a href="http://www.newsprime.co.kr/news/article/?no=600028" target="_blank">
                <div class="arti1-img2">
                    <img src="image/1번기사사진/arti1_img3.jpg" alt="" width="134px" height="134px">
                    <p>
                        뉴욕, 메타 호실적에 상승... 나스닥2.4% ↑
                    </p>
                </div>
            </a>
            <a href="http://www.newsprime.co.kr/news/article/?no=599998" target="_blank">
                <div class="arti1-img3">
                    <img src="image/1번기사사진/arti1_img4.jpg" alt="" width="134px" height="134px">
                    <p>
                        [캐리해볼까] 액션스퀘어·엔씨소프트·조이시
                    </p>
                </div>
            </div>
        </a>

        </div>
        <div class="article2_1">
            <a href="http://www.newsprime.co.kr/news/article/?no=600033" target="_blank">
            <div class="arti2-1">
                <h4 id="arti_h4">
                    尹, 펜타곤 방문..."北 핵 사용 기도시 압도적 대응 할 터"
                </h4>
                <div class="arti2-txt">
                    <p>
                        미국을 국빈 방문중인 윤석열 대통령은 27일(현지시간) 미 국방부
                        청사(펜타콘)을 방문해 로이드 오스틴 미국 국방장관으로부터
                        브리핑을 받았다. 윤 대통령의 방문을 환영하기 
                    </p>
                </div>
                <div class="arti2-img_1"></div>
            </div>
        </a>
        <a href="http://www.newsprime.co.kr/news/article/?no=600059" target="_blank">
            <div class="arti2-1">
                <h4>
                    민주당 신임 원내대표 '비명계' 박광온 당선
                </h4>
                <div class="arti2-txt">
                    <p>
                       28일 국회에서 열린 '제 21대 국회 더불어민주당 제4기 원내대표 선출을 위한 의원총회'
                       에서 신임 원내대표로 박광온 의원(3선·경기 수원정)이 당선됐다. 박광온 신임 원내대표
                    </p>
                </div>
                <div class="arti2-img_2"></div>
            </div>
        </a>
        <a href="http://www.newsprime.co.kr/news/article/?no=600035" target="_blank">
            <div class="arti2-1">
                <h4>
                    "장애시간 10배 보상"LGU+, 종합 피해보상안 발표
                </h4>
                <div class="arti2-txt">
                    <p>
                        LG유플러스(032640)가 지난 1월 자사 인터넷 접속 장애 사태로
                        불편을 겪은 개인 고객에게 장애 시간 10배의 요금을 감면한다. LG
                        유플러스는 피해보상협의체(이하 협의체
                    </p>
                </div>
                <div class="arti2-img_3"></div>
            </div>
        </a>
        </div>
    </div>      
</section>`);
        str.push(`  <nav>
        <a href="https://it.chosun.com/" target='blank'><h1 class="logo_2"></h1></a>
        <a href="https://hangeul.naver.com/font/" target='blank'><div class="ad_2">
        </div></a>
    <ul class="icon">
        <!-- 구독, 이용자한마디, 공유, 날짜 -->
        <li><button type="button" class="subscribeBtn" onclick="loginSer();">
            <span class="material-symbols-outlined">
                done
                </span>
            구독하기</button></li>
        <li>
            <button type="button">
                <span class="material-symbols-outlined">
                share_windows
                </span>
            </button>
        </li>
            <li class="date_2"></li>
    </ul>
</nav>
<section>
    <div class="article1_2">    
    <a href="https://it.chosun.com/site/data/html_dir/2023/04/27/2023042702729.html?utm_source=naver&utm_medium=newsstand&utm_campaign=it" target='blank'>
    <div class="article1_2-img"></div>
    </a>
        
    <div class="article1_2-txt">
    <a href="https://it.chosun.com/site/data/html_dir/2023/04/27/2023042702729.html?utm_source=naver&utm_medium=newsstand&utm_campaign=it" target='blank'><h2>
        [테라 몰락 전말] 루나의 등장, '스테이킹' 투자자들을 사로잡다
    </h2></a>
    <a href="https://it.chosun.com/site/data/html_dir/2023/04/27/2023042702510.html?utm_source=naver&utm_medium=newsstand&utm_campaign=it" target='blank'><p>
        [애플페이 한 달] “결국 삼성과 간편결제 양분, 군소 ‘페이’ 사라질 듯”
    </p></a>
    <a href="https://it.chosun.com/site/data/html_dir/2023/04/27/2023042702105.html?utm_source=naver&utm_medium=newsstand&utm_campaign=it" target='blank'><p>
        조주완표 체질 개선 성과… LG '생활가전' 사상 첫 분기 영업익 1조
    </p></a>
        </div>
    </div>
    <a href="https://it.chosun.com/site/data/html_dir/2023/04/27/2023042700747.html?utm_source=naver&utm_medium=newsstand&utm_campaign=it" target='blank'><div class="article2_2">
        <div class="article2_2-img"></div>
        <div class="article2_2-txt">
            <p>삼성전자 1분기 반도체 4.6조 적자… 14년만에 영업익 1조 아래로</p>
        </div></a>

    </div>
    <div class="article3_2">
        <div class="article3_2-txt">
            <ul>
            <li><a href="https://it.chosun.com/" target='blank'>2023년 1분기 실적진단</a></li>
            <li><a href="https://it.chosun.com/site/data/html_dir/2023/04/24/2023042401520.html?utm_source=naver&utm_medium=newsstand&utm_campaign=it" target='blank'>[애플페이 한 달] ①간편결제 300조 시장 ‘삼성페이’ 독주 막을까.</a></li>
            <li><a href="https://it.chosun.com/site/data/html_dir/2023/04/27/2023042701813.html" target='blank'>반도체 누른 K자동차… 현대차, 사상 첫 상장사 분기 영업익 1위</a></li>
            <li><a href="https://it.chosun.com/site/data/html_dir/2023/04/26/2023042600773.html" target='blank'>‘누적 5.3조’ SK하이닉스 두 분기 연속 적자… 올 2분기는 반등할까</a></li>
            </ul>
        </div>
        <a href="https://it.chosun.com/site/data/html_dir/2023/04/24/2023042402362.html" target='blank'><div class="article3_2-img">
            <div class="article3_2-realimg"></div>
            <p>‘층층 쌓은 HBM D램’ 삼성·SK, AI 시대 ‘초격차’ 쌓는다
            </p>
        </div></a>

    </div>
   
    <div class="article4_2">
        <div class="title_2">
        <a href="https://it.chosun.com/svc/list_in/list.html" target='blank'> <h3>이달의 인기 콘텐츠</h3></a>
        </div>
        <div class="lank_2">
            <div class="article4_2-txt">
                <ul>
                <li><a href="https://it.chosun.com/site/data/html_dir/2023/04/03/2023040302321.html" target='blank'>결국 ‘GAA’로 가나… 삼성-TSMC ‘2나노 파운드리’ 타이틀전</a></li>
                <li><a href="https://it.chosun.com/site/data/html_dir/2023/04/27/2023042702683.html?utm_source=naver&utm_medium=newsstand&utm_campaign=it" target='blank'>‘디지털 패러다임’ 메타버스, ESG 디지털 전환 돕는다(종합)</a></li>
                </ul>
            </div>
            <div class="artice4_2-img">
                <ul>
                    <br>
                    <li><a href="https://it.chosun.com/site/data/html_dir/2023/04/03/2023040302321.html" target='blank'><img src="image/2번기사사진/it조선기사사진.jpeg" alt="1" width="80px" height="50px"></a></li>
                    <br>
                    <li><a href="https://it.chosun.com/site/data/html_dir/2023/04/27/2023042702683.html?utm_source=naver&utm_medium=newsstand&utm_campaign=it" target='blank'><img src="image/2번기사사진/it조선기사사진2.jpeg" alt="1" width="80px" height="50px"></a></li>
                </ul>

            </div>
        </div>

    </div>
</section>`);
        str.push(`<nav>
        <a href="https://it.donga.com/" target='_blank'><h1 class="logo_3"></h1></a>
        <a href="https://contents.premium.naver.com/" target='_blank'><div class="ad_3">
            </div></a>
    <ul class="icon">
        <!-- 구독, 이용자한마디, 공유, 날짜 -->
        <li><button type="button" class="subscribeBtn" onclick="loginSer();">
            <span class="material-symbols-outlined">
                done
                </span>
            구독하기</button></li>
        <li>
            <button type="button">
                <span class="material-symbols-outlined">
                share_windows
                </span>
            </button>
        </li>
            <li class="date_3"></li>
    </ul>
</nav>
<section>
    <div class="article1_3">
    <div class="article1_3-txt">
    <a href="https://it.donga.com/103793/" target='blank'><h2>
    [농업이 IT(잇)다] 팜프로 “소 질병·출산 관리해 스마트 축산 선도국으로”
    </h2></a>
    <a href="https://it.donga.com/103793/" target='blank'><p> [IT동아 차주경 기자] 예로부터 소는 우리 생활에 좋은 영향을 줬다. 논밭을 매는 파트너이자, 우유와 고기 등 식재료를 주는 생산원이었다....
    </p></a>
    </div>
    
    <a href="https://it.donga.com/103793/" target='blank'><div class="article1_3-img"></div>
    </div></a>
    <div class="article2_3">
    <a href="https://it.donga.com/103792/" target='_blank'><div class="article2_3-img"></div></a>
        <div class="article2_3-txt">
        <a href="https://it.donga.com/103792/" target='_blank'><p>문화재까지 태운 강릉 산불, IoT 시스템 중요성 일깨웠다</p></a>
        </div>

    </div>
    <div class="article3_3">
        <div class="article3_3-txt">
            <ul>
                <li><a href="https://it.donga.com/103743/" target='_blank'>네토그린 “빅데이터 기반 농업 솔루션으로 농가 경쟁력 강화...</a></li>
                <li><a href="https://it.donga.com/103763/" target='_blank'>공개 때부터 망신 당했던 구글 바드...</a></li>
                <li><a href="https://it.donga.com/103741/" target='_blank'>[농업이 IT(잇)다] 뉴로팩 “업사이클링 친환경·기능성 포장재...</a></li>
                <li><a href="https://it.donga.com/103769/" target='_blank'>[시승기] ‘포르쉐 카이엔·718 박스터’로 …</a></li>
            </ul>
        </div>
        <div class="article3_3-img">
            <a href="https://it.donga.com/103788/" target='_blank'><div class="article3_3-realimg"></div></a>
            <a href="https://it.donga.com/103788/" target='_blank'><p>"이름도, 가격표도 부적절"…지포스 RTX 4070에 냉담한 시장 반응
            </p></a>
        </div>

    </div>
   
    <div class="article4_3">
        <div class="title_3">
            <h3>많이본 뉴스</h3>
        </div>
        <div class="lank_3">
            <div class="article4_3-txt">
                <ul>
                    <li><a href="https://it.donga.com/103791/" target='_blank'>인천시 시내버스 모두 수소버스로 ...</a></li>
                    <li><a href="https://it.donga.com/103787/" target='_blank'>[스타트업人] 소상공인 디지털화 도우미...</a></li>
                </ul>
            </div>
            <div class="artice4_3-img">
                <ul>
                    <li><a href="https://it.donga.com/103791/" target='_blank'><img src="image/3번기사사진/이츠동아기사사진4.jpg" alt="" width="80px" height="50px"></a></li>
                    <li><a href="https://it.donga.com/103787/" target='_blank'><img src="image/3번기사사진/이츠동아기사사진5.jpg" alt="" width="80px" height="50px"></a></li>
                </ul>

            </div>
        </div>

    </div>
</section>`);
        str.push(`<nav>
        <a href="http://www.yonhapnewstv.co.kr/" target='blank'><h1 class="logo_4"></h1></a>
        <a href="https://siape.veta.naver.com/fxclick?eu=EU10043095&calp=-&oj=VPhIBnd%2Bx8PcazppVJY3d8ZHxwrmezwzWs%2FXrak6H5hgO39K3ETzagICZZvChtvn9bVgSpXC5uYBAwIy6E8Q3TG60RhlCfZ93ulwfECj%2F%2FwYcMzMDCBe%2F7w0bHUjwtcgIUU4w29mN5o&ac=8485164&src=5567488&br=3721957&evtcd=P901&x_ti=1108&tb=&oid=&sid1=&sid2=&rk=adfb05aa718b2261993a170542f90559&eltts=BZJJETGHaVVinPth9RbA5A%3D%3D&lu=&brs=Y&" target='blank'><div class="ad_4">
            </div></a>
    <ul class="icon">
        <!-- 구독, 이용자한마디, 공유, 날짜 -->
        <li><button type="button" class="subscribeBtn" onclick="loginSer();">
            <span class="material-symbols-outlined">
                done
                </span>
            구독하기</button></li>
        <li>
            <button type="button">
                <span class="material-symbols-outlined">
                share_windows
                </span>
            </button>
        </li>
            <li class="date_4"></li>
    </ul>
</nav>
<section>
    <div class="article1_4">
        <div class="article1_4-img"></div>
        <div class="article1_4-txt">
       <h2><a href="https://www.yonhapnewstv.co.kr/news/MYH20230429007600641" target='_blank'>
            검찰, '돈봉투 의혹' 송영길 전 대표 주거지 등 압수수색 => 강제 수사
            </a></h2>
            <p><a href="https://www.yonhapnewstv.co.kr/news/MYH20230429007600641" target='_blank'>
                검찰은 오늘(4일) 오전부터 송영길 전 대표의 서울 송파구와 인천에 있는 주거지를 압수수색하고 있습니다.
                경선 캠프 관계자들의 주거지와 송 전 대표의 후원 조직인 '먹고사는문제연구소' 사무실도 압수수색 대상에
                포함됐습니다. 지난 24일 송 전 대표가 프랑스에서 귀국한 지 닷새만에 검찰은 강제수사를 나섰다.
            </a></p>
        </div>
    </div>
    <div class="article2_4">
        <div class="article2_4-img"></div>
        <div class="article2_4-txt">
            <p><a href="https://www.yonhapnewstv.co.kr/news/MYH20230429002600641" target='_blank'>루이비통 패션쇼 개최로 오늘 잠수교 교통 통제</a></p>
        </div>

    </div>
    <div class="article3_4">
        <div class="article3_4-txt">
            <ul>
             <h3>분야별 뉴스</h3>
                <li><a href="https://www.yonhapnewstv.co.kr/news/MYH20230429007800641" target='_blank'>정치 - 대통령실 "실제 핵공유한다 한적 없어...미국과 </a></li>
                <li><a href="https://www.yonhapnewstv.co.kr/news/MYH20230429008300641" target='_blank'>경제 - 14,812명 신규확진...전주보다 1,019명↑</a></li>
                <li><a href="https://www.yonhapnewstv.co.kr/news/MYH20230429007600641" target='_blank'>사회 - 검찰, '돈봉투 의혹' 송영길 전 대표 압수수색</a></li>
                <li><a href="https://www.yonhapnewstv.co.kr/news/MYH20230428010500032" target='_blank'>세계 - 바다온도 관측 이래 최고치...과학자들 "설명 불가"</a></li>
            </ul>
        </div>
        <div class="article3_4-img">
            <div class="article3_4-realimg"></div>
            <p>"비와서 덮개 씌우다"...인천대교서 화물차, 트레일러 추돌
            </p>
        </div>

    </div>
   
    <div class="article4_4">
        <div class="title_4">
            <h3>뉴스 포커스</h3>
        </div>
        <div class="lank_4">
            <div class="article4_4-txt">
                <ul>
                    <li><a href="https://www.yonhapnewstv.co.kr/news/MYH20230429012000641" target='_blank'>[날씨]전국 강풍 주의...내일 중 북부 한때 '비'</a></li>
                    <li><a href="https://www.yonhapnewstv.co.kr/news/MYH20230429007900641" target='_blank'>美태평양공군사령관, 북한 겨냥 "한국에 전략폭격기...</a></li>
                    <li><a href="https://www.yonhapnewstv.co.kr/news/MYH20230429007700641" target='_blank'>증권사들, 투매 사태 원인 CFD 가입º매매 차단</a></li>
                </ul>
            </div>
            <div class="artice4_4-img">
                <ul>
                    <li><a href="https://www.yonhapnewstv.co.kr/news/MYH20230429012000641" target='_blank'><img src="image/4번기사사진/004.jpg" alt="" width="80px" height="50px"></a></li>
                    <li><a href="https://www.yonhapnewstv.co.kr/news/MYH20230429007900641" target='_blank'><img src="image/4번기사사진/005.jpg" alt="" width="80px" height="50px"></a></li>
                    <li><a href="" target='_blank'><img src="image/4번기사사진/006.jpg" alt="" width="80px" height="50px"></a></li>
                </ul>

            </div>
        </div>

    </div>
</section>`)
        str.push(`<nav>
        <a href="https://biz.sbs.co.kr/" target='blank'><h1 class="logo_5"></h1></a>
        <a href="https://siape.veta.naver.com/fxclick?eu=EU10043095&calp=-&oj=VPhIBnd%2Bx8PcazppVJY3d8ZHxwrmezwzWs%2FXrak6H5hgO39K3ETzagICZZvChtvn9bVgSpXC5uYBAwIy6E8Q3TG60RhlCfZ9SQwGWuN31%2FQYcMzMDCBe%2F7w0bHUjwtcgIUU4w29mN5o&ac=8485165&src=5567490&br=3721958&evtcd=P901&x_ti=1108&tb=&oid=&sid1=&sid2=&rk=47c5d065417540aebd8043cc7a666101&eltts=zehwIbWrMAVuxgxBgpCA2w%3D%3D&lu=&brs=Y&" target='blank'><div class="ad_5">
            </div></a>
    <ul class="icon">
        <!-- 구독, 이용자한마디, 공유, 날짜 -->
        <li><button type="button" class="subscribeBtn" onclick="loginSer();">
            <span class="material-symbols-outlined">
                done
                </span>
            구독하기</button></li>
        <li>
            <button type="button">
                <span class="material-symbols-outlined">
                share_windows
                </span>
            </button>
        </li>
            <li class="date_5"></li>
    </ul>
</nav>
<section>
    <div class="article1_5">
        <div class="article1_5-img"></div>
        <div class="article1_5-txt">
            <h2>
                '학원비 2만원 인상' 단합...8개 태권도장 공정위 경고
            </h2>
            <p>
                인천 청라지구에 있는 8개 태권도장이 학원비를 월 2만원씩 올리기로 담합했다가 공정거래 위원회로부터 경고 처분을
                29일 공정위에 따르면 청라지구 8개 태권도장 대표는 지난해 11월 1일부터 교육비를 주 5회 기준 16만 원에서 18만 원으로 2만 원(12.5%)씩 올리기로 합의했습니다.
            </p>
        </div>
    </div>
    <div class="article2_5">
        <div class="article2_5-img"></div>
        <div class="article2_5-txt">
            <p>
            <a href="https://biz.sbs.co.kr/article/20000115740" target='_blank'>[뭐잇슈] '전기차 보조금' 제일 많이 주는 곳 '여기'
            </a></p>
        </div>

    </div>
    <div class="article3_5">
        <div class="article3_5-txt">
            <ul>
                <li><a href="https://biz.sbs.co.kr/article/20000115772" target='_blank'>뉴욕증시, 기업 실적, 은행 불안 속 상승... 다우 0.8% ↑</a></li>
                <li><a href="https://biz.sbs.co.kr/article/20000115722" target='_blank'>코스피, 0.23% 오른 2,500선 턱걸이... 코스닥 0.87%</a></li>
                <li><a href="https://biz.sbs.co.kr/article/20000115565" target='_blank'>메타가 이어받은 빅테크 호실적 랠리... 뉴욕증시 급등</a></li>
                <li><a href="https://biz.sbs.co.kr/article/20000115684" target='_blank'>[시황중계] 자동차 부품주 '씽씽'... 지금 탐승해야 할 종 ...</a></li>
                <li><a href="https://biz.sbs.co.kr/article/20000115575" target='_blank'>[오늘 기업] 테슬라, MS, 트위터, 롯데, 포스코, LX, 에코프로...</a></li>
            </ul>
        </div>
        <div class="article3_5-img">
            <div class="article3_5-realimg"></div>
            <p> 
            <a href="https://biz.sbs.co.kr/article/20000115791" target='_blank'>KT 소액주주, 비영리법인 설립 추진
            </p></a>
        </div>

    </div>
   
    <div class="article4_5">
        <div class="title_5">
            <h3>'SBS Biz'한 주간 경제 이슈</h3>
        </div>
        <div class="lank_5">
            <div class="article4_5-txt">
                <ul>
                    <li><a href="https://biz.sbs.co.kr/article/20000115785" target='_blank'>이번주 휘발윳값 5.3원 상승</a></li>
                    <li><a href="https://biz.sbs.co.kr/article/20000115744" target='_blank'>어린이날 치킨 배달 안 돼요?</a></li>
                    <li><a href="https://biz.sbs.co.kr/article/20000115743" target='_blank'>원희룡 "동탄,구리는 성격 달라"</a></li>
                </ul>
            </div>
            <div class="artice4_5-img">
                <ul>
                    <li><a href="https://biz.sbs.co.kr/article/20000115785" target='_blank'><img src="image/5번기사사진/004.jpg" alt="" width="80px" height="50px"></a></li>
                    <li><a href="https://biz.sbs.co.kr/article/20000115744" target='_blank'><img src="image/5번기사사진/005.jpg" alt="" width="80px" height="50px"></a></li>
                    <li><a href="https://biz.sbs.co.kr/article/20000115743" target='_blank'><img src="image/5번기사사진/006.jpg" alt="" width="80px" height="50px"></a></li>
                </ul>

            </div>
        </div>

    </div>
</section>`)
        str.push(`
        <nav>
        <nav>
        <nav>
            <a href="https://www.bloter.net/" target="_blank">
                <h1 class="logo_7"></h1>
            </a>
            <a href="" target="_blank">
                <div class="ad_7">
                    </div>
            </a>
        <ul class="icon">
            <!-- 구독, 이용자한마디, 공유, 날짜 -->
            <li><button type="button" class="subscribeBtn" onclick="loginSer();">
                <span class="material-symbols-outlined">
                    done
                    </span>
                구독하기</button></li>
            <li>
                <button type="button">
                    <span class="material-symbols-outlined">
                    share_windows
                    </span>
                </button>
            </li>
                <li class="date_7"></li>
        </ul>
    </nav>
    <section>
        <div class="article1_7">
            <a href="https://newsis.com/view/?id=NISX20230429_0002285724&cID=10601&pID=10600" target="_blank">
            <div class="article1_7-img"></div>
            <div class="article1_0-txt">
                <h2>
                    뉴진스 'OMG', 스포티파이 스밍 3억↑…자체 두 번째
                </h2>
                <p>
                    신드롬 걸그룹 '뉴진스(NewJeans)'의 싱글 '오엠지(OMG)' 타이틀곡 'OMG'가 
                    세계 최대 음원 플랫폼 스포티파이에서 3억 스트리밍을 돌파했다. 
                    '디토(Ditto)'에 이은 뉴진스 통산 두 번째 3억 스트리밍 곡이다.29일 스포티파이에 따르면, 뉴진스의 
                    'OMG'는 지난 27일(현지 시간) 기준 3억 124만 2550회 재생됐다. 음원이 공개된 지 115일 만이다.
                </p>
            </div>
        </div>
    </a>
        <div class="article2_7">
            <a href="https://newsis.com/view/?id=NISX20230425_0002279004&cID=13001&pID=13000" target="_blank">
            <div class="article2_7-img"></div>
            <div class="article2_7-txt">
                <p>코카-콜라, '제로 레몬' 출시…뉴진스 포토북 증정 이벤트도</p>
            </div>
            </a>
        </div>
        <div class="article3_7">
            <div class="article3_7-txt">
                <ul>
                    <li><a href="hhttps://newsis.com/view/?id=NISX20230402_0002250306&cID=10601&pID=10600" target="_blank">뉴진스, 3개월 연속 1~3위…멜론 서비스 이래 ...</a></li>
                    <li><a href="https://www.breaknews.com/954325" target="_blank">뉴진스 민지 1위, 걸그룹 개인 브랜드평판 정상 ...</a></li>
                    <li><a href="https://www.breaknews.com/953434" target="_blank">뉴진스 다니엘 화보, 시크한 매력 완벽 소화..이...</a></li>
                    <li><a href="https://newsis.com/view/?id=NISX20230208_0002184784&cID=10601&pID=10600" target="_blank">뉴진스, 美 빌보드 '핫100' 또 자체 최고순위…'O...</a></li>
                    <li><a href="https://www.hankyung.com/finance/article/202302034203i" target="_blank">빈자리 안 느껴져" 증권가, 뉴진스에 열광…발칵...</a></li>
                    <li><a href="https://newsis.com/view/?id=NISX20230315_0002226835&cID=10601&pID=10600" target="_blank">뉴진스, 빌보드 '글로벌 200' K팝 걸그룹 신기록</a></li>
                </ul>
            </div>
            <div class="article3_7-img">
                <a href="https://newsis.com/view/?id=NISX20230331_0002248369&cID=10601&pID=10600" target="_blank">
                <div class="article3_7-realimg"></div>
                <p>'뉴진스, CM송도 짜릿할까…내달 신곡 '제로'
                </p>
            </a>
            </div>
        </div>
        
        <div class="article4_7">
            <div class="title_7">
                <h3>HOT 뉴스</h3>
            </div>
            <div class="lank_7">
                <div class="article4_7-txt">
                    <ul>
                        <li><a href="https://h21.hani.co.kr/arti/culture/culture_general/53323.html" target="_blank">뉴진스에는 광야 같은 세계관이 왜 없..</a></li>
                        <li><a href="https://www.xportsnews.com/article/1717075" target="_blank">뉴진스, 멤버 전원이 명품 앰버서더…해린</a></li>
                        <li><a href="https://newsis.com/view/?id=NISX20230315_0002226835&cID=10601&pID=10600" target="_blank">뉴진스, 빌보드 '글로벌 200' K팝 걸그룹 신기록</a></li>
                    </ul>
                </div>
                <div class="artice4_7-img">
                    <ul>
                        <li><a href="https://www.bloter.net/news/articleView.html?idxno=600916" target="_blank"><img src="image/7번기사사진/뉴진스6.jpg" alt="" width="80px" height="50px"></a></li>
                        <li><a href="https://www.bloter.net/news/articleView.html?idxno=601007" target="_blank"><img src="image/7번기사사진/뉴진스7.jpg" alt="" width="80px" height="50px"></a></li>
                        <li><a href="https://www.bloter.net/news/articleView.html?idxno=600914" target="_blank"><img src="image/7번기사사진/뉴진스8.jpg" alt="" width="80px" height="50px"></a></li>
                    </ul>
    
                </div>
            </div>
    
        </div>
</section>`)
        str.push(`<nav>
        <nav>
        <a href="https://www.joynews24.com/" target="_blank">
            <h1 class="logo_6"></h1>
        </a>
        <a href="" target="_blank">
            <div class="ad_6">
                </div>
        </a>
    <ul class="icon">
        <!-- 구독, 이용자한마디, 공유, 날짜 -->
        <li><button type="button" class="subscribeBtn" onclick="loginSer();">
            <span class="material-symbols-outlined">
                done
                </span>
            구독하기</button></li>
        <li>
            <button type="button">
                <span class="material-symbols-outlined">
                share_windows
                </span>
            </button>
        </li>
            <li class="date_0"></li>
    </ul>
</nav>
<section>
    <div class="article1_0">
        <a href="https://www.bloter.net/news/articleView.html?idxno=601057" target="_blank">
        <div class="article1_6-img"></div>
        <div class="article1_0-txt">
            <h2>
                T1, 벤츠와 파트너십···MSI부터 새 유니폼 입는다 [E스포츠부]
            </h2>
            <p>
                e스포츠 전문 기업 T1이 메르세데스-벤츠 코리아와 공식 파트너십을 체결, 2025년 말까지 공식 후원을 받기로 했다.
                이에 따라 T1 ‘리그 오브 레전드’ 선수단은 다음달 런던에서 개막하는 ‘2023 미드 시즌 인비테이셔널’(MSI)에
                메르세데스-벤츠의 삼각별 로고가 부착된 유니폼을 착용한다.                </p>
        </div>
    </div>
</a>
    <div class="article2_0">
        <a href="https://www.bloter.net/news/articleView.html?idxno=601048" target="_blank">
        <div class="article2_6-img"></div>
        <div class="article2_0-txt">
            <p>룰러' 박재혁, MSI LPL 영상 등장..."왕호야 왜 나한테 펜타 안 줬어?"</p>
        </div>
        </a>
    </div>
    <div class="article3_0">
        <div class="article3_0-txt">
            <ul>
                <li><a href="https://www.bloter.net/news/articleView.html?idxno=601064" target="_blank">[MSI] ‘울프’ 이재완, T1 공식 중계 맡는다… ‘도인비’는 中 담당</a></li>
                <li><a href="https://www.bloter.net/news/articleView.html?idxno=601060" target="_blank">"KT 꺾고 우승 직감...가장 힘든 상대는 데프트"</a></li>
                <li><a href="https://www.bloter.net/news/articleView.html?idxno=601059" target="_blank">유럽 정상 원딜 '레클레스' 마르틴, 서포터로 간다</a></li>
                <li><a href="https://www.bloter.net/news/articleView.html?idxno=601052" target="_blank">T1과 페이커 6회 출전 '신기록’ MSI 2023에서 ...</a></li>
                <li><a href="https://www.bloter.net/news/articleView.html?idxno=601056" target="_blank">'롤 최강지역' 가리는 MSI, 참가 선수 38%가 한국</a></li>
                <li><a href="https://www.bloter.net/news/articleView.html?idxno=601054" target="_blank">한국에서 5년만에 롤드컵, 결승전 고척 스카이...</a></li>
            </ul>
        </div>
        <div class="article3_6-img">
            <a href="https://www.bloter.net/news/articleView.html?idxno=601055" target="_blank">
            <div class="article3_6-realimg"></div>
            <p>MSI 2023에서 주목할 기록들…韓 선수 28명 역대 최다
            </p>
        </a>
        </div>
    </div>
    
    <div class="article4_0">
        <div class="title_0">
            <h3>HOT 뉴스</h3>
        </div>
        <div class="lank_0">
            <div class="article4_0-txt">
                <ul>
                    <li><a href="https://www.bloter.net/news/articleView.html?idxno=600916" target="_blank">T1, 가슴팍에 ‘삼각별’ 단다</a></li>
                    <li><a href="https://www.bloter.net/news/articleView.html?idxno=601007" target="_blank">[MSI Preport] G2, '익숙한 그 맛'</a></li>
                    <li><a href="https://www.bloter.net/news/articleView.html?idxno=600914" target="_blank">땅콩불패… ‘피넛’ 한왕호 인터뷰</a></li>
                </ul>
            </div>
            <div class="artice4_0-img">
                <ul>
                    <li><a href="https://www.bloter.net/news/articleView.html?idxno=600916" target="_blank"><img src="image/6번기사사진/hot뉴스2.jpg " alt="" " width="80px" height="50px"></a></li>
                    <li><a href="https://www.bloter.net/news/articleView.html?idxno=601007" target="_blank"><img src="image/6번기사사진/hot뉴스1.jpg" alt="" width="80px" height="50px"></a></li>
                    <li><a href="https://www.bloter.net/news/articleView.html?idxno=600914" target="_blank"><img src="image/6번기사사진/hot뉴스3.jpg" alt="" width="80px" height="50px"></a></li>
                </ul>

            </div>
        </div>

    </div>
</section>`)
                console.log(str.length)

                document.querySelector('.container').innerHTML = str[currentIdx];
                document.querySelectorAll('.imgBtn')[currentIdx].style.transition="all 0.1s linear";
                document.querySelectorAll('.imgBtn')[currentIdx].style.transform="scale(1.2)";
                document.querySelectorAll('.imgBtn')[currentIdx].style.transform="scale(1.2)";
                // document.querySelectorAll('.imgBtn')[currentIdx].style.border="2px solid black";


document.getElementById('nextBtn').addEventListener('click', function() {
    removeStyle();
if (currentIdx == 7) {
    currentIdx = 0;
} else {
currentIdx++;
}
document.querySelector('.container').innerHTML = str[currentIdx];

document.querySelector('.gisa').style.animation = "none";
void document.querySelector('.gisa').offsetWidth;
document.querySelector('.gisa').style.animation = 'citycity 2s';
addStyle();
});

document.getElementById('prevBtn').addEventListener('click', function() {
    removeStyle();
if (currentIdx == 0) {
    currentIdx = 7;
} else {
    currentIdx--;
}
document.querySelector('.container').innerHTML = str[currentIdx];
addStyle();

document.querySelector('.gisa').style.animation = "none";
void document.querySelector('.gisa').offsetWidth;
document.querySelector('.gisa').style.animation = 'citycity 2s';
});

       document.querySelectorAll('.imgBtn').forEach((btn,index)=>{
           btn.addEventListener('click',function(){
            removeStyle();
            console.log(index);
            document.querySelector('.container').innerHTML=str[index];
            currentIdx=index;
            addStyle();
          
            document.querySelector('.gisa').style.animation = "none"; // 기존 애니메이션 초기화
         void document.querySelector('.gisa').offsetWidth; // reflow를 일으켜 애니메이션 재생을 위한 시간을 확보
        document.querySelector('.gisa').style.animation='citycity 2s';
        
        })
       })
      
       function addStyle(){
        document.querySelectorAll('.imgBtn')[currentIdx].style.transition="all 0.1s linear";
        document.querySelectorAll('.imgBtn')[currentIdx].style.transform="scale(1.2)";
        document.querySelectorAll('.imgBtn')[currentIdx].style.transform="scale(1.2)";
        // document.querySelectorAll('.imgBtn')[currentIdx].style.border="2px solid black";
        
    }
    function removeStyle(){
           document.querySelectorAll('.imgBtn')[currentIdx].style.transition="none";
           document.querySelectorAll('.imgBtn')[currentIdx].style.transform="noen";
           document.querySelectorAll('.imgBtn')[currentIdx].style.transform="none";
        //    document.querySelectorAll('.imgBtn')[currentIdx].style.border="none";

       }
       function loginSer(){
        swal('로그인이 필요한 서비스입니다.','','warning');
    }

   document.querySelector('.head1').addEventListener('click' , function(){
       document.querySelector('.container').innerHTML = str[0];
       addStyle();
    });

   document.querySelector('.head2').addEventListener('click' , function(){
    document.querySelector('.container').innerHTML = str[2];
    addStyle();
    });

    document.querySelector('.head3').addEventListener('click' , function(){
        document.querySelector('.container').innerHTML = str[4];
        addStyle();
    });

    document.querySelector('.head4').addEventListener('click' , function(){
        document.querySelector('.container').innerHTML = str[6];
        addStyle();
    });


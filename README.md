#doby : 웹 페이지의 전체 화면을 지정<br>
1. background : ? 는 전체 웹 페이지의 배경화면을 설정<br>
2. color : ? 는 웹 페이지에 들어가는 기본 글자 색상을 성정<br>
3. margin- left, right 바깥쪽 여백<br>

#hr : 수평 구분선을 지정<br>
1. height : 선 두께를 설정<br>
2. dorder : 선 테두리를 설정<br>
3. background : 선의 안쪽 색상을 설정<br>

#script css가 아닌 자바 스크립트<br>
1. function : 기능 function + 함수 이름 + (필요한 재료를 넣음)<br>
2. document : 화면에 보이는 웹 페이지 전체<br>
3. getElementById : (Id)로 (Element)요소를 (get)가져와라<br>
***document.getElementById("fig").src = "ElvisPresley.png";***<br>
1. document.getElementById("fig") : id="fig"를 가진 <img> 태그를 찾는다!<br>
2. .src : 그 태그 안에 있는 src 속성에 접근해서,<br>
3. = "ElvisPresley.png" : 이미지 파일 경로를 "ElvisPresley.png"로 교체한다!<br>

#h1~h6 : 은 제목 <br>
1. text-align : center, right, left <br>

#p는 본문 문단<br>
#br은 줄바꿈 (엔터키) <br>
#pre는 내가 HTML에 입력한 내용을 그대로 보여줌 띄어쓰기, 엔터 같은거<br>
#(b, i, strong 진하게), (em 강조),  (small 작은 문자), (del- 삭제), (ins_ 추가), (sup 윗첨자), (sub 아래첨자), (mark 하이라이팅)<br>

#div는 HTML에서 웹페이지의 구역(Division)을 나누거나 여러 요소를 하나로 묶을 때 사용하는 태그 <br>
1. background 배경 <br>
2. padding 상자 여백 <br>

#base : 페이지에 있는 모든 파일 경로나 링크의 '기본 출발점(기준)'을 정해주는 태그" <br>
#link : 태그는 외부 자원 연결에 사용 <br>
#meta : 태그는 다양한 메타데이터표현 <br>

#img : 사진이나 그림 <br>
1. width : 가로, height : 세로, alt 는 사진이 안뜰 때 보이는 글 <br>

#ol 순서 있는 리스트 <br>
#ul 순서 없는 리스트 <br>
#dl 정의 리스트 <br>
#li 리스트 아이템 <br>

#dl(전체 감싸기), dt(제목), dd(내용) <br> 

#table : 표 전체를 담는 컨테이너 <br>
1. caption : 표 제목 <br>
2. thead : 표의 머리글 (제목 영역) <br>
3. tbody : 표의 본문 (실제 데이터 내용 영역) <br>
4. tfoot : 표의 바닥글 (합계, 평균, 요약 영역) <br>
5. tr : 가로 한 줄(행)을 생성 <br>
6. th : 제목 칸(셸)을 생성 <br>
7. td : 일반 내용 칸(셸)을 생성 <br>

#a href 하이퍼링크 : 같은 웹 사이트에 있는 웹 페이지로 이동 <br>
1. target="_blank" : 새 창(새 탭)에서 열기 <br>
2. download 파일을 다운로드 할 수 있음 <br>
3. id 는 원하는 곳으로 이동 <br>

#iframe : 웹 페이지 안에 또 다른 웹 페이지를 띄움 <br>
#srcdoc :  iframe 안에 들어갈 HTML 코드를 직접 작성해서 띄움 <br>
#name : 이름표를 달아 줌 <br>

#video : 동영상을 보여줌, #audio : 소리만 재생 <br>
1. control : 재생, 소리, 일시정지 표시 버튼 <br>
2. loop : 재생이 끝나도 다시 재생 <br>

content : 실제 내용 영역 (글자, 이미지 등이 들어가는 공간)<br>
padding : 안쪽 여백 (내용과 테두리 사이의 간격 조절)<br>
margin : 바깥쪽 여백 (다른 요소와의 거리 조절)<br>
width : 가로 너비 (요소의 가로 크기 조절)<br>
height : 세로 높이 (요소의 세로 크기 조절)<br>
float : 요소를 왼쪽/오른쪽으로 띄워서 정렬<br>
clear : float의 영향을 끊어주는(해제하는) 속성<br>

figure : 웹 페이지에 책이나 보고서 등 본문에 삽입하는 사진, 차트, 삽화, 소스코드 등을 통상적으로 ‘그림’으로 표현<br>
1. figcaption : 제목이나 설명글을 보여줌 <br>
2. code : 웹 페이지 안에서 소스 코드를 보여줄 때 사용 <br>

#details : 내용을 담은 상자
-> summary : 상자에 보여줄 큰 내용

meter : 측정값 / 상태 (value / max) <br>
progress : 진행 상황 / 과정 (value / max) <br>
mark : 형광펜으로 색칠 <br>
value : 현재 값 <br>
max : 최대 값 <br>

#form : 사용자가 입력한 정보를 서버로 전송하기 위해서 사용 <br>
name : form의 이름을 지정 <br>
method = <br>
GET : 보내는 데이터를 주소창에 공개<br>
POST : 보내는 데이터를 숨김   <br>
submit : form에 담겨있는 데이터를 서버로 보냄 <br>
buttom : 일반 버튼이라서 아무 일 없음<br>

textarea : 텍스트를 담을 수 있는 큰 상자<br>
cols : 가로 너비 "30"은 한 줄에 30글자 적을 수 있음<br>
rows : 세로 높이 "5" 기본적으로 5줄까지 보이는 높이 <br>

datalist : 목록 리스트를 작성하는 태그<br>
input : 타입을 적고 list에 속성 값이 바로 datalist에 id 이름을 가르킨다<br>
input type = "text, image, submit, checkbox, radio"<br>
checked : 이미 체크 된 상태로 시작 <br>

raido에 name값이 같으면 1개만 체크가 가능 <br>

#select는 드롭 다운하는 상자<br>
option : 목록안에 들어가는 선택지들<br>
label for = input id를 가르킴<br>
type="password" 하면 가려져서 보임<br>
label : 입력창 커서로 자동 이동<br>

onchage : 값이 바뀌면 감지해서 실행해라 라는 스위치<br>
document.body.style.color<br>
document : 현재 보고 있는 웹페이지 전체 문서<br>
body : 화면의 내용이 들어가는 <body> 태그 영역<br>
style : 그 영역의 디자인(CSS)<br>
color : 그 중에서도 글자 색상<br>
this.value : 내가 방금 선택한 그 색상 값<br>

type="month" (연도와 월)<br>
type="week" (연도와 몇 번째 주)<br>
type="date" (년-월-일 날짜)<br>
type="time" (시간과 분)<br>
type="datetime-local" (날짜 + 시간 한 번에)<br>
value="2022-03-01T21:30:10.32"><br>
T: 날짜와 시간을 구분해 주는 구분자 문자<br>
type = "range" 는 화면에서 좌우로 움직이는 조작 막대<br>
min	최소값	슬라이더를 맨 왼쪽으로 밀었을 때 값	min="0"<br>
max	최대값	슬라이더를 맨 오른쪽으로 밀었을 때 값	max="100"<br>
value	기본값	처음에 손잡이가 위치해 있을 시작 값	value="50"<br>
step	이동 간격	손잡이를 움직일 때 몇 칸씩 이동할지	step="5" (5씩 증가/감소)<br>

placeholder="내용" 은 입력창 안에 연한 회색으로 보여주는 미리보기 안내 문구입니다.<br>
type="email" :  @ 기호가 들어갔는지 자동으로 검사<br>
type="url" : http:// 나 https:// 형태의 올바른 주소인지 자동으로 검사합니다.<br>
type="tel" : 스마트폰에서 이 칸을 터치하면 문자 자판이 아니라 숫자 키패드(전화 키패드)가 바로 열려 입력이 편해진다<br>
type="search" : 글자를 입력하면 우측 끝에 X (전체 지우기) 버튼이 자동으로 생겨서 내용을 한 번에 싹 지울 수 있다<br>




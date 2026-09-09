## 9월 9일 수업내용

<!DOCTYPE html> -HTML5 문서임을알리는지시어
</html> 끝을 알리는 태그
head : 파일의 대한 정보를 적음
body : 브라우저의 내용을 보여줌
속성 값에 불필요한 공 문자, HTML5 표준에 어긋남
태그와 속성은 대소문자 구분 없음
브라우저 특징중에 하나가 겹쳐져 있는 white character를 빈칸으로 인식함
빈칸은 &nbsp;를 사용
01title_tag

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>첫 타이틀</title>
</head>
<body>
    페이지에 타이틀을 다는 예제 입니다. 
    타이틀은 브라우저의 타이틀바에 보입니다.
</body>
</html>

02HeadingLine

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>1장 홈페이지 만들기</h1>
    <H2>1절 HTML 언어</H2>
    <h3>웹</h3>
    <h4>1.1 인터넷</h4>
    <h5>1.1.1 네트워크</h5>
    <h6>1.1.1 통신</h6>
</body>
</html>

03title_tag

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>툴팁 달기</title></head>
<body>
<h1 title="h1태그로 작성하였습니다.">
1장 홈페이지</h1>
<h2 title="h2태그로 작성하였습니다.">
1절 HTML 언어</h2>
</body>
</html>

04pEx.html

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>단락 나누기</title></head>
<body>
<h3>2 개의 단락 나누기</h3>
<p>
HTML 문서도 본문을여러단락으로
나눌수있다. CSS 스타일을 사용하면
단락단위로내어쓰기와들여쓰기가가능하다.</p>
<p>
여러개의빈칸은하나로취급되며,
엔터키역시하나의빈칸으로처리된다.</p>
</body>
</html>

05hrEx.html

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>수평선 긋기</title></head>
<body>
<h3>수평선 긋기</h3>
<hr>
<p>hr 태그는 horizontal에서 딴 글자입니다.</p>
<hr>
<p>종료 태그&lt;/hr&gt;를 사용하지 않습니다.</p>
</body>
</html>

06brEx.html

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>새로운 줄 넘어가기</title>
</head>
<body>
<h3>새로운 줄 넘어가기</h3>
<hr>
&lt;br&gt; 태그로 다음 줄로 넘어갑니다.<br>
2 개의 &lt;br&gt; 태그로 두 번 넘어 갑니다.<br><br>
잘보이나요? 
</body>
</html>

07preEx.html

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>개발자의 포맷 그대로 출력</title></head>
<body>
<h3>개발자의 포맷그대로출력하기</h3>
<hr>
<p>
&lt;p&gt; 태그를 사용하면
    여러 개의 빈 칸은 하나로, 
    여러 줄은 한 줄에 붙여 출력됩니다.</p>
<hr>
<pre>
그러나&lt;pre&gt; 태그를 사용하면
    사용자가 입력한
    그대로 출력됩니다.
</pre>
</body>
</html>

08textEx.html

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>텍스트꾸미기</title></head>
<body>
<h3>텍스트꾸미기</h3>
<hr>
<p> 
<b>진하게</b><br>
<strong>중요한</strong><br>
<em>강조</em><br>
<i>이탤릭으로강조</i><br>
<b><i>진하게이탤릭으로강조</i></b><br>
보통문자<small>한단계작은문자</small><br>
<del>삭제</del><br>
<ins>추가</ins><br>
보통문자의<sup>윗첨자</sup><br>
보통문자의<sub>아래첨자</sub><br>
<mark>하이라이팅</mark><br>
</p>
</body>
</html>

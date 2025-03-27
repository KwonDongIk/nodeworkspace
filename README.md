<div align = center>
  <img src="https://capsule-render.vercel.app/api?type=Venom&color=gradient&height=390&section=header&text=Nodejs%20learning&fontSize=100&animation=fadeIn&fontAlignY=37&desc=Yedam%20Fullstack%20class&descAlignY=60&descAlign=82"/>
</div>
<hr>
</div>
<div align = center>
  날짜별 자바스크립트 프레임워크 실습
</div>

* 250324
  * JavaScript 필수적인 문법 학습

* 250325
  * Express.js
    * npm 설정
    * 간단한 서버 구동

* 250326
  * server
    * CLUD(Select, Update, Insert, Delete)

  * Content-type
    1) application/x-www-form-urlencoed
    - key=value&key=value&...
    - QueryString(질의문자열)
    - METHOD : 제한없음

    2) application/json
    - { "key" : "value", ...}
      or [ {}, {}]
    - JSON(Javascript Object Notation)
    - METHOD : POST, PUT

    3) multipart/form-data
    - 미디어파일 전체
    - METHOD : POST, PUT
    - 특징> 별도 인코딩 없음

  * Error code
    * 400 Bad Request
    * 403 Forbidden
    * 404 Not Found
    * 405 Method Not Allowed
    * 415 Unsupported Media Type
    * 500 Internal Server Error

* 250327
  * multer
    * 저장소 생성
    * 파일 업로드 처리

  * mysql server
    * mapper = persistence
    * router = presentation
    * service = business

  * mariaDB
    * command prompt mariaDB
    * MariaDB Server 11.4.5
    * DATATYPE
      * 정수
        * int
      * 실수
        * float / double
      * 문자
        * char(1~255) / varchar(1~16383)
      * 날짜
        * datetime / data / time
          * datetime
            * YYYY-MM-DD HH:MM:SS
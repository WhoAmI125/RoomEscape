Open-Source Software Practice Final Project Proposal

# OSS Team 6

**Contact:**

| Name | Email | Phone Number |
| --- | --- | --- |
| HyunJoon Park | joell0526@gmail.com | 010-7930-2961 |
| Hajong Kim | whoami125@g.skku.edu | 010-9628-3928 |
| Yumin Heo | ymheo1123@gmail.com | 010-9506-5809 |

Application Type: Web Page

Theme: Room Escape

Our project "Escape Room" tried to solve the problem that learning new lessons can be boring by interacting questions about HTML, Git, and JavaScript with Room Escape. Our project offers visual entertainment that attracts users and provides entertainment while solving the questions.

The web page provides several different questions inside the room. The user can only open the exit and escape the room by solving all problems and obtaining hints by solving the questions.

Sketch: (This is just a prototype. so it can be changed during development process)\
![](https://lh3.googleusercontent.com/Biksr4mYBk2y-_N_V3Ns_2u5HsSjTkHBziXpvFJBCvrvUB3B5Ua5b5OJx0q-DIaVpTKiVsmGzCL28BwFx6ejj2mK6dnTxvplIip54elUvhwqnvzwCDAjsmF-gkMXD5UZUnjPxdH_SH7bElPLug)

https://docs.google.com/presentation/d/1qPlLAaRfnX6PM1l_u-RzpKxGYREmou4DWEVOWtAEkfw/edit?usp=sharing

Features:  (This is just a prototype. so it can be changed during development process) 

There is a main room, and several rooms which can be accessed by solving problems. Each room provides several different questions. Questions are provided with visual contents that the user may enjoy.  The user has to know the features of HTML, Git and JavaScript to find the answer. If the user finds all the answers and solves the questions, the user can escape the room. It is a success when the user escapes every room.

Usage scenario:  

(This is just a prototype. so it can be changed during development process) 

1.  The homepage will be the main room

2.  In the top of the room, there would be a lock, by clicking on lock will move to another link. The user needs to find out the password to escape the room

3.  There are several different questions that user needs to solve to find out the hint for the password of the lock

Task assignment:

1.  Designing rooms

2.  Making overall plot

3.  Making problem & answer sets using what we learned in class

4.  Making rooms and user-interfaces by HTML & CSS

5.  Making detailed parts (ex. scene of enlarged objects)

6.  Implementing reactions and web page movements by HTML & CSS & JavaScript

<important>Final program might be different to final project proposal. </important>

Implement Idea

브레인 스토밍

스토리 (처음 시작하면 메세지 창을 통해서 ~~ 이유로 여기 왔다 한번 탈출해봐라)

예: 너는 랩에 납치됐다 탈출 못하면 대학원생 // 오소실 시험의 방 탈출 못하면 F

물체 클릭하면 팝업창 띄어서 문제 보여주기

자물쇠에 텍스트 입력, 일치하면 문 열리는 모션과 함께 나가기

커서를 물체 위에 올리면 클릭 가능한 물체는 줌인 모션 보여주기 (css로 구현 가능)

- 따로 어떠한 매개체 구현 하지 않으면 어떤 물체가 클릭 가능한지 구별이 힘듬

문제는 여러가지 방식

예: 서랍 위 종이에서 문제 질문만 제공

아래 서랍 자물쇠에 문제로 유추한 답 제출

비밀번호 시도 횟수 제한

(몇 번 틀리면 락 또는 게임오버)

따로 잠겨 있는 방? 퍼즐 풀면 들어 갈 수 있는 임시방 (다만 이러면 구현 할게 많아짐)

아니면 잠겨 있는 서랍을 다른 푼 퍼즐을 통해서 열기

안에 미니게임? (컴퓨터 vs 사용자 틱텍토 (구현 난이도 힘듬)) // 틀린 그림 맞추기(랜덤으로 3개의 이미지중 하나 보여주기)

이스터에그? 마지막에 시간 남으면 구현

깃헙 read.me에 문제 설명 글

-아이작의 구속 같은 게임 처럼 캐릭터를 조작하여 문제 풀고 방탈출

-퀴즈 문제들은 중간고사, 퀴즈랑 비슷한 내용이나 겹치면 안 됨( 문제 유출 위험)

- 방 여러 개 or 방 여러 방향

- 총 시간, 타이머

단계- 단원별로?

- 힌트

- 메세지, 대사?

- 뭘 풀면 아이템 상태가 바뀌는 것

- 커서 가져가면 모양 바뀌는거

개발 1차: ~토요일(5.14)

박현준:

팝업창 + 문제 UI

javascript, NPM 문제

허유민:

기본 html 문 위치 고정형 세팅 + 기본 방 설정

git 문제

김하종:

문 여는 모션 + 마우스 커서 물체 이동 줌

html css 문제

-   각 방은 반응형 생각 안하고 고정으로 설정해주기

-   문 여는 모션 (자바스크립트) <https://codepen.io/am_eu/pen/EgedaQ> / 문고리 추가.

-   클릭 가능한 물체는 마우스 커서 물체에 이동시 줌인

-   깃헙 read.me에 문제 설명 글

-   문제 팝업

-   중요: 역할,파트,코드 분배 및 통합

객관식 퀴즈UI 예제

![](https://lh6.googleusercontent.com/28vZNzy45kRQCzD6xsNB-uRGi409EYaPr0e0Cyo8mlOu9Aa1j6fKBjqyJvruVNqGSXOYphGY8EPBEKvBmdLUCx7NJ_Cjq68f0-sf9HM2kcRuFL_kydqMn_nLvfujoeYkIw0d3tYICNyq1Pm6dg)

개발 2차 ~수요일(5.18)

-   문제 다 풀면 다른 방 이동 (문제는 10개정도)

-   방에 물체 배치

-   Intro webpage :처음에 사이트 접속하면 납치 배경 줄거리 스토리 팝업

개발 3차  ~금요일(5.20)

-   제한 시간 타이머 

-   문제 풀면 아이템 상태 바뀌기

-   자물쇠 시도 횟수 제한

추가 시간 남으면

-   힌트

-   라이프 바![](https://lh6.googleusercontent.com/ocgyhsuUilCC_UCqXUx3gaNDyNqKKtZQ2VwjyDyD4hV9vuB2IENi2WwLBT-ufbpDc90eSmxdtM8TEGS3X_NZYvd04JbIJZMI6ttK52WH2klyIgVDBKXgEHoTn1ceTtYGB5PE7Nod-v42iK2zFQ)

-   미니 게임-방향 키 조작게임<https://www.youtube.com/watch?v=NiG2TnZiFL0&ab_channel=TraversyMedia>

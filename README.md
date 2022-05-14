Open-Source Software Practice Final Project Proposal

# OSS Team 6

**Contact:**

| Name | Email |
| --- | --- |
| HyunJoon Park | joell0526@gmail.com |
| Hajong Kim | whoami125@g.skku.edu |
| Yumin Heo | ymheo1123@gmail.com |

**Application Type:** Web Page

**Theme:** Room Escape

Our project "Escape Room" tried to solve the problem that learning new lessons can be boring by interacting questions about HTML, Git, and JavaScript with Room Escape. Our project offers visual entertainment that attracts users and provides entertainment while solving the questions.

The web page provides several different questions inside the room. The user can only open the exit and escape the room by solving all problems and obtaining hints by solving the questions.

**Sketch:** (This is just a prototype. so it can be changed during development process)\
![](https://lh3.googleusercontent.com/Biksr4mYBk2y-_N_V3Ns_2u5HsSjTkHBziXpvFJBCvrvUB3B5Ua5b5OJx0q-DIaVpTKiVsmGzCL28BwFx6ejj2mK6dnTxvplIip54elUvhwqnvzwCDAjsmF-gkMXD5UZUnjPxdH_SH7bElPLug)

https://docs.google.com/presentation/d/1qPlLAaRfnX6PM1l_u-RzpKxGYREmou4DWEVOWtAEkfw/edit?usp=sharing

**Features:**  (This is just a prototype. so it can be changed during development process) 

There is a main room, and several rooms which can be accessed by solving problems. Each room provides several different questions. Questions are provided with visual contents that the user may enjoy.  The user has to know the features of HTML, Git and JavaScript to find the answer. If the user finds all the answers and solves the questions, the user can escape the room. It is a success when the user escapes every room.

**Usage scenario:**  

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

<br/>

**Room Escape version 0.1: ~Sat (5.14)**

*Notice*

- each room is made by absolute postion, without considering relative

- READ.ME is created to follow up the patch notes and

HyunJoon Park:

- pop up menu + question UI

- questions about javascript, NPM


Yumin Heo:

- basic html door placement setting and room setting (all with absolute position)

- questions about git


Hajong Kim:

- animation opening the door and zoom-in animation when curser is on the object (took check if that object is able to click)

-questions about html and css



객관식 퀴즈UI 예제

![](https://lh6.googleusercontent.com/28vZNzy45kRQCzD6xsNB-uRGi409EYaPr0e0Cyo8mlOu9Aa1j6fKBjqyJvruVNqGSXOYphGY8EPBEKvBmdLUCx7NJ_Cjq68f0-sf9HM2kcRuFL_kydqMn_nLvfujoeYkIw0d3tYICNyq1Pm6dg)

<br/>

**Room Escape version 0.2 ~Wed(5.18)**

-   문제 다 풀면 다른 방 이동 (문제는 10개정도)

-   방에 물체 배치

-   Intro webpage :처음에 사이트 접속하면 납치 배경 줄거리 스토리 팝업

<br/>

**Room Escape version 0.3  ~Fri(5.20)**

-   제한 시간 타이머 

-   문제 풀면 아이템 상태 바뀌기

-   자물쇠 시도 횟수 제한

추가 시간 남으면

-   힌트

-   라이프 바

![](https://lh6.googleusercontent.com/ocgyhsuUilCC_UCqXUx3gaNDyNqKKtZQ2VwjyDyD4hV9vuB2IENi2WwLBT-ufbpDc90eSmxdtM8TEGS3X_NZYvd04JbIJZMI6ttK52WH2klyIgVDBKXgEHoTn1ceTtYGB5PE7Nod-v42iK2zFQ)

-   미니 게임-방향 키 조작게임
<https://www.youtube.com/watch?v=NiG2TnZiFL0&ab_channel=TraversyMedia>


**Notes**
- Discussion 5.14: fixed or relative screen size
 Decided to use fixed pixel screen size
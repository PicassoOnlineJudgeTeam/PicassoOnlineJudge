# Picasso Online Judge
제주대학교 컴퓨터교육과 2016-2 협동프로젝트 Picasso의 산출물입니다.

## 소개
본 프로젝트는 소스코드를 통해 알고리즘을 추상적으로 이해하는데 어려움을 겪는 학습자를 위하여, 소스코드 작성과 그 결과를 보여주는 온라인 코딩 대회 시스템을 구현한다. 기존의 온라인 코딩 대회 시스템에서는, 문제에 대해 이 소스코드가 성공/실패인지만을 확인하기 때문에 자기가 작성하거나 다른 사람이 작성한 소스코드를 디버깅하기 위해선 전체 소스코드를 읽어 이해하여야 했다. 프로그래밍에 익숙한 사람이라면, 이것이 매우 익숙하겠지만 초심자에게는 이와 같은 과정이 어려움을 겪기 때문에, 소스코드를 이해하는데 도움이 되는 시각화 자료를 같이 볼 수 있게 하는 시스템을 구현하려 한다.

## 다운로드
```{r, engine='bash'}
$ git clone https://github.com/PicassoOnlineJudgeTeam/PicassoOnlineJudge.git
```

### Web Mockup
Node.js가 필요함.
```{r, engine='bash'}
$ cd webMockup & npm install
```

#### 실행
```{r, engine='bash'}
$ node server.js
```

http://localhost:3000 에서 확인

온라인 서버 : http://203.253.198.201:3000/

### visualizer
Python, Bottle 서버 프레임워크 필요함
```{r, engine='bash'}
$ cd visualizer/v3 & pip install bottle & python bootle_server.py
```

#### 실행
```{r, engine='bash'}
python bootle_server.py
```


http://localhost:8003/index.html 에서 확인.

온라인 서버 : http://203.253.198.201:8003/index.html


### compiler
Node.js가 필요함.
```{r, engine='bash'}
$ cd compiler & node index.js
```

http://localhost:8888/ 에서 확인가능
온라인 서버 : http://203.253.198.201:8888/

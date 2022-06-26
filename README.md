# 수들, Soodle

수들은 수험생 여러분들의 영어 단어 공부를 조금이나마 재밌게 하고자 만들어졌습니다.
수들은 [WORDLE](https://www.nytimes.com/games/wordle/index.html)에 영감을 받아서 제작되었습니다.

## 플레이하기

수들은 [여기](https://soodle.pages.dev)에서 플레이 할 수 있습니다.

## 기여
새로운 아이디어는 언제나 환영입니다.
[Issues](https://github.com/heyumteam/soodle/issues)에 남겨주시면 긍정적으로 검토하겠습니다.

## 개발

직접 기여하고 싶은 개발자들은 아래의 내용을 참고하시기 바랍니다.

### 요구사항

수들은 [Node.js](https://nodejs.org)로 게빌되었습니다.
[VSCode](https://code.visualstudio.com)와 [Docker](https://www.docker.com/)를 이용하면 수들 개발자들이 활용하는 [Devcontainer](https://code.visualstudio.com/docs/remote/containers)를 활용할 수 있습니다.

### 개발

수들의 종속성을 설치합니다:

```bash
$ yarn
```

아래 커맨드를 이용하여 수들 서버 실행합니다.

```bash
$ yarn dev
```

수들을 `http://localhost:3000`에서 확인합니다.
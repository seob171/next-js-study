# nextJs-study

## 초기 설정

```
// client setting (현재 경로에 next + typescript 설치)

cd client
npx create-next-app@latest --typescript ./

// server setting (node server 구현에 필요한 라이브러리 설치)

cd server
yarn init -y
yarn add morgan nodemon express --save
yarn add typescript ts-node @types/node @types/express @types/morgan --save-dev

npx tsc --init (tsconfig.json 설정)

yarn add pg typeorm reflect-metadata --save

npx typeorm init (typeorm 초기 설정)

```

## 도커 설정

```
touch docker-compose.yml .env

docker-compose up (도커 실행 명령어)
```

## tailwind css 사용법

[tailwind 공식문서](https://tailwindcss.com/docs/installation)

```
yarn add -D tailwindcss postcss-preset-env

npx tailwind init (테일윈드 초기 설정)



touch postcss.config.json (postcss config 설정)
/* ---------------------------------------------------- */
// postcss.config.json

{
  "plugins": ["tailwindcss", "postcss-preset-env"]
}

/* ---------------------------------------------------- */


global.css에 tailwind 사용 설정 (상단에 @tailwind ... 작성)


/* ---------------------------------------------------- */
// global.css

@tailwind base;
@tailwind components;
@tailwind utilities;

... (기존 코드)

/* ---------------------------------------------------- */

```

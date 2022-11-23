# nextJs-study

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

```
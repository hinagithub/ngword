# 言ってはいけないゲーム

## 概要
オンライン飲み会で遊ぶことを想定したブラウザゲームです。
2〜8名で会話をする中で、自分に割り当てられた「禁止ワード」を最後まで言わなかった人が勝ちになります。

## 動作環境

- node v12.16.0
- npm 6.13.4
- yarn 1.22.4
- Docker 19.03.12

## 環境設定
プロジェクトのルートディレクトリで以下を順次実行してください。

### データベース

`.env`ファイルの準備

ルートディレクトリに `.env`ファイルを作成し、以下をコピペしてください。
ユーザ名とパスワードは任意です。

```
DB_PORT=5432
DB_USERNAME=ngword
DB_PASSWORD=test
DB_DATABASE=ng_word
DB_HOST=0.0.0.0
```

PostgreSQL立ち上げ

```
docker-compose up -d
```

テーブル作成

```
npx sequelize-cli db:migrate
```

seedを用意

```
npx sequelize-cli db:seed:all
```

### プロジェクト実行

プロジェクト実行

```
yarn start
```

## ゲームの概要
![image](https://user-images.githubusercontent.com/44778704/90329319-cd667880-dfde-11ea-83a8-09ee434521e0.png)

以上

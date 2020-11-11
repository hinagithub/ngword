# 言ってはいけないゲーム
![image](https://user-images.githubusercontent.com/44778704/98825055-650d2300-2477-11eb-9529-cf0d286b0089.png)

## 概要
オンライン飲み会で遊ぶことを想定したブラウザゲームです。</br>
2〜8名で会話をする中で、自分に割り当てられた「禁止ワード」を最後まで言わなかった人が勝ちになります。

## デモページ
2020年9月現在　準備中です。。

## 動作環境

- node v12.16.0
- npm 6.13.4
- yarn 1.22.4
- Docker 19.03.12

## ローカル環境設定

git cloneする
```
git clone https://github.com/hinahinako/ngword
```

プロジェクトのルートディレクトリに移動
```
cd ngword
```

パッケージのインストール
```
yarn install
```

### データベース

#### `.env`ファイルの準備

ルートディレクトリに `.env`ファイルを作成

```
touch .env
```

以下をコピペしてください。
ユーザ名とパスワードは任意です。

```
DB_PORT=5432
DB_USERNAME=ngword
DB_PASSWORD=test
DB_DATABASE=ng_word
DB_HOST=0.0.0.0
```

#### PostgreSQL立ち上げ

```
docker-compose up -d
```

#### テーブル作成

```
yarn run seq-migrate
```

#### seedを用意

```
yarn run seq-seed-all
```

### プロジェクト実行

プロジェクト実行

```
yarn start
```

ブラウザで動いていることを確認

```
http://localhost:3000/
```

## ゲームのルール
![image](https://user-images.githubusercontent.com/44778704/90329319-cd667880-dfde-11ea-83a8-09ee434521e0.png)


以上

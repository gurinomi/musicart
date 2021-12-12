# musicart

music（ミュージシャン）とart（イラストレーター）を結びつけるマッチングアプリです。

## ローカル環境構築手順

1. github から clone する

   ```sh
   git clone git@github.com:gurinomi/musicart.git
   ```

2. データベースを作成する

   ```
   $ docker-compose run api rails db:create
   ```

3. コンテナを起動する

   ```sh
   docker-compose up -d

   # docker-compose ps で、2コンテナ(app, db)が起動していることを確認する
   ```

   落とすとき

   ```sh
   docker-compose stop
   docker-compose down
   ```

## テストの実行方法

1. 実行

   ```
   $ docker-compose run --rm api_test sh
   $ bundle exec rspec
   ```
## データを確認する方法

開発用の設定情報

```
host: db
port: 4306
database: myapp_development
user: root
pass: password
```

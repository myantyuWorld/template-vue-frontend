# 構成

- Vue3(Vite + tailwindcss)
- Django

このテンプレートを利用し、個人開発で作りたいアプリを作る。  
- [ ] "docker-compose up"でサンプルテーブルをmigrationし、サンプルAPIを使用したVueアプリを実行できる  
- [ ] AWS ECSにデプロイできるようにする(Fargate? Copilot?)  
- [ ] ローカル開発ー＞AWSへのデプロイを自動化させたい（Github mainブランチpushでデプロイ、が理想）  
- [ ] デプロイ結果を簡単に通知してほしい   

# 参考

https://qiita.com/generonishimura/items/88742085294bd0b234a6

# 始めるには

```sh
% git clone 
% cp .env_template .env // AWS ACCESS KEY等は、Slack#ブックマーク参照
% docker-compose build
% docker compose run frontend yarn install
% docker-compose run --rm api python manage.py makemigrations
% docker-compose run --rm api python manage.py migrate
% docker compose up
```

# aws-cli
※ // AWS ACCESS KEY等は、Slack#ブックマーク参照

```
docker-compose run --rm aws-cli-container /bin/bash

↓↓↓

bash-4.2# aws --version 
aws-cli/2.9.13 Python/3.9.11 Linux/5.15.49-linuxkit exe/x86_64.amzn.2 prompt/off
bash-4.2# aws s3 ls
2023-01-XX XX:XX:XX {hogehoge}
```


# Frontend

```
yarn add {HOGEHOGE}
```

# API

Django super user
※　管理サイトで確認するなら以下を実行すること
```
$ docker-compose run --rm api python manage.py createsueruser
```

```
localhost:18080/api
```

# DB

postgres

```sh
% psql -h localhost -p 5432 -U postgres
% \l // show databases
% \c DB name // use database
```


# css framework

https://tailwindcss.com/

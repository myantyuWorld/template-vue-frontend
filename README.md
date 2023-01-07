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

# 再利用するには

```sh
% git clone 
% docker-compose build
% docker compose run frontend yarn install
% docker-compose run --rm api python manage.py makemigrations
% docker-compose run --rm api python manage.py migrate
% docker compose up
```

Django super user
※　管理サイトで確認するなら
```
$ docker-compose run --rm api python manage.py createsueruser
```

API

```
localhost:18080/api
```

postgres

```sh
% psql -h localhost -p 5432 -U postgres
% \l // show databases
% \c DB name // use database
```


# css framework

https://tailwindcss.com/

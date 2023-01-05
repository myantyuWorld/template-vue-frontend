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
% docker compose up
```


# css framework

https://tailwindcss.com/

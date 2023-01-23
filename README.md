# システム構成

<details><summary>詳細はこちら</summary><div>
  
## AWS Copilotの考え方
<!-- ![image](https://user-images.githubusercontent.com/26809782/213391899-04cf5cc0-1966-4719-a52e-334c281c3003.png) -->
<img src="https://user-images.githubusercontent.com/26809782/213391899-04cf5cc0-1966-4719-a52e-334c281c3003.png" width="30%">

## AWS アーキテクチャ  
https://docs.aws.amazon.com/ja_jp/prescriptive-guidance/latest/patterns/deploy-a-clustered-application-to-amazon-ecs-by-using-aws-copilot.html.  
<!-- ![image](https://user-images.githubusercontent.com/26809782/213385568-7a688e79-93e1-49bd-95aa-ac6de9100b25.png) -->
<img src="https://user-images.githubusercontent.com/26809782/213385568-7a688e79-93e1-49bd-95aa-ac6de9100b25.png" width="30%">
## localでのCopilot開発・デプロイサイクル
<!-- ![image](https://user-images.githubusercontent.com/26809782/213664880-003a3006-d3a7-4ed2-aabf-51599d709033.png) -->
<img src="https://user-images.githubusercontent.com/26809782/213664880-003a3006-d3a7-4ed2-aabf-51599d709033.png" width="30%">

### アーキテクチャ

- AWS Copilot(ECS on Fargate)
- frontend : Vue3(Vite + [tailwindcss](https://tailwindcss.com/))
- backend : Django(Django REST framework)
- db : PostgreSQL
  
</div></details>

# 開発の始め方

<details><summary>詳細はこちら</summary><div>

### 初期設定コマンド

```sh
% git clone 
% cp .env_template .env // AWS ACCESS KEY等は、Slack#ブックマーク参照
% docker-compose build
% docker compose run frontend yarn install
% docker-compose run --rm web python manage.py makemigrations
% docker-compose run --rm web python manage.py migrate
% docker compose up
```

### URL
frontend : http://localhost:15173/
backend : http://localhost:18000/

# aws-cli
※ // AWS ACCESS KEY等は、Slack#ブックマーク参照

```
docker-compose run --rm aws-cli-container /bin/bash
```

## frontend appのS3へのアップロード
詳細は、[こちら](
https://github.com/myantyuWorld/template-vue-frontend/wiki/frontend%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AEAWS-S3%E3%81%AE%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89%E6%89%8B%E9%A0%86)

# DB

postgres

```sh
% psql -h localhost -p 5432 -U postgres
$ \d
$ \dt　などなど
```

</div></details>

# ローカル開発環境　確認URL

front : http://localhost:15173/about   
back :http://localhost:18000/api/

# Cacoo
TBD


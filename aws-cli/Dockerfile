# AWS CLI2 を利用するDockerfile
FROM amazonlinux:2 

# 前提パッケージのインストール
RUN yum install -y unzip less vim which

# aws cli v2 のインストール
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install

WORKDIR /workdir
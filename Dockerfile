FROM nginx
# FROM node
# 删除nginx 默认配置
RUN rm /etc/nginx/conf.d/default.conf
# 添加自己的配置 default.conf 在下面
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# # 安装yarn
# RUN curl -o- -L https://yarnpkg.com/install.sh | bash
# RUN $HOME/.yarn/bin/yarn install

# RUN yarn build

# 将当前目录下的所有文件（除了.dockerignore排除的路径），都拷贝进入/usr/share/nginx/build目录下。
COPY . /usr/share/nginx/

# 指定接下来的工作路径为/usr/share/nginx/build
WORKDIR /usr/share/nginx/build
# RUN npm install
# 将容器 3000 端口暴露出来， 允许外部连接这个端口
# EXPOSE 3000
# CMD node index.js


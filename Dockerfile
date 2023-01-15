FROM nginx:latest

WORKDIR /usr/local/app
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
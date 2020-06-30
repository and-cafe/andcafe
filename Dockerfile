FROM node:12.18.1-alpine

WORKDIR /app

RUN apk update && \
    apk add git && \
    npm install -g npm && \
    npm install -g @vue/cli \
    npm install --save nuxt

ENV HOST 0.0.0.0
ENV NUXT_TELEMETRY_DISABLED 1
EXPOSE 3000

FROM keymetrics/pm2:12-alpine

WORKDIR /app

COPY . .

RUN pm2 install typescript

ENTRYPOINT exec pm2-runtime start pm2.json

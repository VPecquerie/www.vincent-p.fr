FROM node:10-alpine 
USER root

LABEL Version="1.0.0"
LABEL Name="www-vincent-p-fr"

RUN apk add --no-cache python \
    && npm install -g yarn protractor pm2 @angular/cli \
    && chmod +x /usr/local/bin/yarn \
    &&  mkdir -p /app \
    && chown -R node:node /app \
    && rm -rf /root/.npm

USER node
WORKDIR /app

ENV NODE_ENV=production
ARG ANGULAR_CONFIGURATION=production
ENV ANGULAR_CONFIGURATION ${ANGULAR_CONFIGURATION}
COPY --chown=node:node . .

RUN yarn install --production=true && npm run build:ssr && rm -rf /home/node/.cache/yarn

EXPOSE 4000
CMD [ "pm2-runtime", "start", "ecosystem.config.js"]

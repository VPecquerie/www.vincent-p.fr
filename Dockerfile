FROM node:10-alpine 
USER root

RUN apk add --no-cache python
RUN npm install -g yarn protractor && chmod +x /usr/local/bin/yarn
RUN mkdir -p /app && chown -R node:node /app
RUN npm install -g @angular/cli
USER node
WORKDIR /app

ENV NODE_ENV=production
ARG ANGULAR_CONFIGURATION=Production
ENV ANGULAR_CONFIGURATION ${ANGULAR_CONFIGURATION}
COPY --chown=node:node . .

RUN yarn install --production=false
# Detailled Building package.
RUN ./node_modules/.bin/ngw build --prod -c ${ANGULAR_CONFIGURATION}
RUN ./node_modules/.bin/ngw run vincent-p:server:${ANGULAR_CONFIGURATION}
RUN ./node_modules/.bin/tsc -p server.tsconfig.json

EXPOSE 4000
CMD [ "npm", "run", "serve:ssr" ]

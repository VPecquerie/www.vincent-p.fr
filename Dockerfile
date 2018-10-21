FROM node:10-alpine 
USER root

RUN apk add --no-cache python
RUN npm install -g yarn && chmod +x /usr/local/bin/yarn
RUN mkdir -p /app && chown -R node:node /app
RUN npm install -g @angular/cli
USER node
WORKDIR /app

ARG ANGULAR_CONFIGURATION=Production
ENV ANGULAR_CONFIGURATION ${ANGULAR_CONFIGURATION}
COPY --chown=node:node . .

RUN yarn install && npm run build:ssr

EXPOSE 4000
CMD [ "npm", "run", "serve:ssr" ]
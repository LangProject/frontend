FROM node:20-alpine AS builder
ARG APP_DIRECTORY=/app
WORKDIR ${APP_DIRECTORY}
COPY package.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS runner
ARG APP_DIRECTORY=/app
WORKDIR ${APP_DIRECTORY}

COPY --from=builder ${APP_DIRECTORY} ${APP_DIRECTORY}

EXPOSE 3000
CMD ["npm", "start"]
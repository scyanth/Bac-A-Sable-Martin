FROM node:lts-alpine AS dev

WORKDIR /app

COPY *.json ./

RUN npm install

COPY src src
COPY data data
COPY .env .env

# RUN npm run seed

EXPOSE 4601

CMD ["npm", "run", "full"]
# build stage
FROM node:18-alpine as development
WORKDIR /app_front
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run dev

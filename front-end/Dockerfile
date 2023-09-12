<<<<<<< HEAD
FROM node:18-alpine
ENV NODE_ENV=production
#starting point => /usr/src/app ?
WORKDIR /app

#Copy the files into the workdir
COPY package*.json ./

#check if it is possible to install it only in dev environment
RUN npm install -g nodemon
RUN npm install -g ts-node

#'npm install' bad practice => possible problems
RUN npm ci
#copy alll my filels to the workdir (except files in .dockerignore)
COPY . .

CMD ["npm", "run", "dev"]

#https://docs.docker.com/language/nodejs/build-images/

=======
# build stage
FROM node:18-alpine as development
WORKDIR /app_front
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run dev
>>>>>>> 0591fb84b5177368e3967c687dad897978fc195b

FROM node:18-alpine
ENV NODE_ENV=production
#starting point => /usr/src/app ?
WORKDIR /app

#Copy the files into the workdir
COPY package*.json .

#'npm install' bad practice => possible problems
RUN npm ci
#copy alll my filels to the workdir (except files in .dockerignore)
COPY . .

CMD ["npm", "run", "dev"]

#https://docs.docker.com/language/nodejs/build-images/


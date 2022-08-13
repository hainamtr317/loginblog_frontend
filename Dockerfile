FROM node:alpine
WORKDIR /app
COPY package*.json .
COPY  . .
RUN npm install --legacy-peer-deps 
EXPOSE 3000
CMD [ "npm","start" ]
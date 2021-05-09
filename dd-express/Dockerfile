FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# ENV MONGO_URI=mongodb://localhost:27017

EXPOSE 5000

CMD ["npm", "start"]
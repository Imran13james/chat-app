FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


FROM node:18-alpine AS runner

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
EXPOSE 3000
EXPOSE 1989

CMD ["npm", "start"]

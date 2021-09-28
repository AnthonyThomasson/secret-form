FROM node:16.10.0

WORKDIR /app
COPY express/package*.json ./
RUN npm install
COPY express .

EXPOSE 3000
CMD ["npm","start"]
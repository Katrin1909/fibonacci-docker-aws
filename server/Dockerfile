FROM node:alpine
WORKDIR '/app'
COPY ./package.json ./
# RUN npm config set proxy http://rgb-proxy.avl.com:8080
# RUN npm config set https-proxy http://rgb-proxy.avl.com:8080
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
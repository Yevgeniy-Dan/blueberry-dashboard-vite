FROM node:lts as frontend
WORKDIR /app
COPY . /app
RUN npm install && npm run build

FROM node:lts-alpine
WORKDIR /app
COPY --from=frontend /app/dist /app/public
EXPOSE 8080
CMD [ "npx", "serve", "-s", "-l", "8080", "public" ]
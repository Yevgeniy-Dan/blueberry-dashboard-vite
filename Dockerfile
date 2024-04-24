FROM node:lts as frontend

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

WORKDIR /app
COPY . /app
RUN npm install && npm run build

FROM node:lts-alpine
WORKDIR /app
COPY --from=frontend /app/dist /app/public
EXPOSE 8080
CMD [ "npx", "serve", "-s", "-l", "8080", "public" ]
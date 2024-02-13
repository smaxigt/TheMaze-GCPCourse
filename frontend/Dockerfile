## Build Environment
FROM node:18 AS build-env

# Build steps
ADD . /app
WORKDIR /app
# COPY package.json package*.json ./

ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

RUN npm install
RUN npm run build

## Run Environment
FROM nginx:alpine
# Copy build artefacts
COPY --from=build-env /app/build /usr/share/nginx/html
COPY --from=build-env /app/nginx/nginx.conf /etc/nginx/conf.d/*.conf

ARG NODE_VERSION=12.15.0

FROM node:${NODE_VERSION} AS build

ARG CACHEBUST=36
# Declare args
ARG NAME=defaultName
ARG KEY=defaultKey
ARG SECRET=defaultSecret

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

ENV CLOUDINARY_CLOUD_NAME=${NAME}
ENV CLOUDINARY_KEY=${KEY}
ENV CLOUDINARY_SECRET=${SECRET}
ENV NODE_ENV=development

RUN npm run build

EXPOSE 3000

# CMD if [ "$NAME" = "defaultName" ] ; then echo Argument not provided ; else node debug.js ; fi
CMD [ "npm", "start" ]

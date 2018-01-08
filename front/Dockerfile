FROM node:9-stretch

# Create application 
RUN mkdir -p /app
WORKDIR /app

# change to non root
USER node

# copy package list and install
COPY --chown=node:node package.json package-lock.json /app
RUN npm install

# copy source
COPY --chown=node:node . /app

EXPOSE 3000

CMD ["npm","start"]
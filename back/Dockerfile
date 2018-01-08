FROM node:9-stretch

# Create application 
RUN mkdir -p /app && \
    mkdir -p /app/data &&\
    chown -R node:node /app
WORKDIR /app

# change to non root
USER node

# copy package list and install
COPY --chown=node:node package.json package-lock.json /app/
RUN npm install

# copy source
COPY --chown=node:node . /app

ENV STOREDB=/app/data/db.json

# define volume for save of data
VOLUME [ "/app/data" ]
EXPOSE 3001

CMD ["npm","start"]
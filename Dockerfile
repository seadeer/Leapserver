#install Node in Docker
FROM hypriot/rpi-node:latest

#Create app folder
RUN mkdir -p /usr/src/app
WORKDIR usr/src/app

#Install app dependencies
copy package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
EXPOSE 9000

CMD [ "npm", "start" ]

FROM node:14
# Create app directory
WORKDIR /usr/src/app
# Instalar dependências
# Um * é usado para garantir que o package.json E o package-lock.json sejam copiados
COPY package*.json ./
RUN npm install
# Se você quiser buildar seu código para produção use:
# RUN npm ci --only=production
COPY . .
EXPOSE 8081
CMD [ "npm", "start" ]
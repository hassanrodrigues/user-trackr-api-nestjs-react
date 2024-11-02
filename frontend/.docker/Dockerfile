FROM node:18-slim

WORKDIR /app

RUN apt update -yq && apt upgrade -yq && apt install -yq vim

ENV TZ=America/Manaus
ENV VITE_PORT=3000

ADD . .

RUN rm -rf node_modules package-lock.json

RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone && \
    npm install

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--port", "3000", "--host"]
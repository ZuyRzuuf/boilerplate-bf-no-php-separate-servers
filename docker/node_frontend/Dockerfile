FROM node:latest
MAINTAINER Krzysztof Sobieraj <krzysiek@sobieraj.mobi>

RUN apt-get update --fix-missing && \
    apt-get install -y curl && \
    apt-get install -y build-essential && \
    apt-get install -y npm

RUN ln -s /usr/bin/nodejs /usr/bin/node

WORKDIR /var/www/app
COPY . /var/www/app

EXPOSE 3000

ADD init.sh /init.sh
RUN chmod +x /init.sh
CMD ["/init.sh"]

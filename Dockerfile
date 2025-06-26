FROM openjdk:11-jdk-slim

# Installer ttyd + serveur http léger
RUN echo "deb http://deb.debian.org/debian bullseye-backports main" >> /etc/apt/sources.list.d/backports.list && \
    apt-get update && \
    apt-get install -y -t bullseye-backports ttyd busybox && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copier code Java
COPY src/ src/
RUN mkdir out && javac -d out src/entites/*.java

# Script shell
COPY simulation.sh /usr/local/bin/simulation.sh
RUN chmod +x /usr/local/bin/simulation.sh

# Copier index.html pour le serveur HTTP
COPY index.html /app/index.html

# Exposer les deux ports : terminal + page web
EXPOSE 8080 8000

# Démarrage : lance ttyd + serveur HTTP
CMD busybox httpd -f -p 8000 & ttyd -p 8080 /usr/local/bin/simulation.sh


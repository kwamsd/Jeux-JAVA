FROM openjdk:11-jdk-slim

RUN echo "deb http://deb.debian.org/debian bullseye-backports main" \
    >> /etc/apt/sources.list.d/backports.list && \
    apt-get update && \
    apt-get install -y -t bullseye-backports ttyd && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY src/ src/
RUN mkdir out && javac -d out src/entites/*.java

# wrapper script
COPY simulation.sh /usr/local/bin/simulation.sh
RUN chmod +x /usr/local/bin/simulation.sh

EXPOSE 8080
ENTRYPOINT ["ttyd", "-p", "8080", "/usr/local/bin/simulation.sh"]

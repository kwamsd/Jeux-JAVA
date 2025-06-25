# Use an official Java runtime
FROM openjdk:11-jre-slim

# Installe ttyd — un petit serveur Web + Terminal
RUN apt-get update && \
    apt-get install -y ttyd && \
    rm -rf /var/lib/apt/lists/*

# Copie tes classes compilées (ou compile-les ici même)
WORKDIR /app
COPY out/ ./out/

# Commande par défaut : lance ttyd, qui exposera ta JVM dans le navigateur
ENTRYPOINT ["ttyd", "-p", "8080", "java", "-cp", "out", "entites.Main"]

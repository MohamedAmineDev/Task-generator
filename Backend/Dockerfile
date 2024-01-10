FROM maven:3.9.6-eclipse-temurin-17
COPY src src
COPY pom.xml .
RUN mvn clean install -DskipTests
CMD ["java", "-jar", "target/Backend-0.0.1-SNAPSHOT.jar"]
pipeline {
    agent any
     tools{
        maven 'maven'
        nodejs 'nodejs'
        }
        environment {
        // Define your Docker credentials
        DOCKER_USERNAME = credentials('dockerhubid')
        DOCKER_PASSWORD = credentials('dockerhubpassword')
    }
    stages {
        stage("Clean up"){
      steps{
        deleteDir()
      }
    }
    stage("Clone repo"){
      steps{
        sh "git clone https://github.com/MohamedAmineDev/Task-generator.git"
      }
    }
    stage("Generate Task backend image"){
      steps{
        dir("Task-generator/Backend"){
          sh "/usr/bin/docker build -t medaminebens/task-backend-image ."
        }
      }
    }
    stage("Generate Task frontend image"){
      steps{
        dir("Task-generator/front"){
          sh "/usr/bin/docker build -t medaminebens/task-frontend-image ."
        }
      }
    }
    stage("Push the Task generator images"){
      steps{
        sh "/usr/bin/docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
        sh "/usr/bin/docker push medaminebens/task-backend-image:latest"
        sh "/usr/bin/docker push medaminebens/task-frontend-image:latest"
      }
    }
        
    }
}

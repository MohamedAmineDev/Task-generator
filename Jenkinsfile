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
        stage("Install docker"){
      steps{
           script {
                    sh 'apt-get update'
                    sh 'apt-get install -y docker.io'
                    sh 'apt-get install -y docker compose'
                }
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
          sh "docker build -t medaminebens/task-backend-image ."
        }
      }
    }
    stage("Generate Task frontend image"){
      steps{
        dir("Task-generator/front"){
          sh "docker build -t medaminebens/task-frontend-image ."
        }
      }
    }
    stage("Push the Task generator images"){
      steps{
        sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
        sh "docker push medaminebens/task-backend-image:latest"
        sh "docker push medaminebens/task-frontend-image:latest"
      }
    }
        
    }
}

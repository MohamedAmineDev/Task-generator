pipeline {
    agent any

    tools {
        maven 'maven'
        nodejs 'nodejs'
    }

    environment {
        // Define your Docker credentials
        DOCKER_USERNAME = credentials('dockerhubid')
        DOCKER_PASSWORD = credentials('dockerhubpassword')
    }

    stages {
        stage("Clean up") {
            steps {
                deleteDir()
            }
        }

        stage("Clone repo") {
            steps {
                checkout scm
            }
        }

        stage("Generate Task backend image") {
            steps {
                script {
                    docker.build("medaminebens/task-backend-image")
                }
            }
        }

        stage("Generate Task frontend image") {
            steps {
                script {
                    docker.build("medaminebens/task-frontend-image")
                }
            }
        }

        stage("Push the Task generator images") {
            steps {
                script {
                    docker.withRegistry('', DOCKER_USERNAME, DOCKER_PASSWORD) {
                        docker.image("medaminebens/task-backend-image").push()
                        docker.image("medaminebens/task-frontend-image").push()
                    }
                }
            }
        }
    }
}

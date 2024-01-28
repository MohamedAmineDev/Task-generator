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
                    dir("Task-generator/Backend"){
                        docker.build("-t medaminebens/task_backend_image -f Dockerfile .")
                    }
                }
            }
        }

        stage("Generate Task frontend image") {
            steps {
                script {
                    dir("Task-generator/front"){
                        docker.build("-t medaminebens/task_frontend_image -f Dockerfile .")
                    }
                }
            }
        }

        stage("Push the Task generator images") {
            steps {
                script {
                    docker.withRegistry('', DOCKER_USERNAME, DOCKER_PASSWORD) {
                        docker.image("medaminebens/task_backend_image").push()
                        docker.image("medaminebens/task_frontend_image").push()
                    }
                }
            }
        }
    }
}

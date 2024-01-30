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
        ID = credentials('id')
    }
    
    stages {
        stage("Clean up") {
            steps {
                // Clean up the workspace directory
                deleteDir()
            }
        }

        stage("Clone repo") {
            steps {
                // Clone the Git repository
                sh "git clone https://github.com/MohamedAmineDev/Task-generator.git"
            }
        }

        stage("Generate Task backend image") {
            steps {
                dir("Task-generator/Backend") {
                    // Build the Docker image for the backend
                    sh "docker build -t medaminebens/task-backend-image ."
                }
            }
        }

        stage("Generate Task frontend image") {
            steps {
                dir("Task-generator/front") {
                    // Build the Docker image for the frontend
                    sh "docker build -t medaminebens/task-frontend-image ."
                }
            }
        }

        stage("Push the Task generator images") {
            steps {
                // Log in to Docker Hub
                sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"

                // Push backend and frontend Docker images to Docker Hub
                sh "docker push medaminebens/task-backend-image:latest"
                sh "docker push medaminebens/task-frontend-image:latest"
            }
        }

        stage("Deploy to Kubernetes") {
    steps {
        script {
                sshagent(['ssh-agent']) {
                        sh "ssh -tt -o StrictHostKeyChecking=no kuber@${ID} kubectl apply -f Task-generator/mysql-deployment.yaml"
                        sh "ssh -tt -o StrictHostKeyChecking=no kuber@${ID} kubectl apply -f Task-generator/mysql-service.yaml"
                        sh "ssh -tt -o StrictHostKeyChecking=no kuber@${ID} kubectl apply -f Task-generator/backend-deployment.yaml"
                        sh "ssh -tt -o StrictHostKeyChecking=no kuber@${ID} kubectl apply -f Task-generator/backend-service.yaml"
                        sh "ssh -tt -o StrictHostKeyChecking=no kuber@${ID} kubectl apply -f Task-generator/frontend-deployment.yaml"
                        sh "ssh -tt -o StrictHostKeyChecking=no kuber@${ID} kubectl apply -f Task-generator/frontend-service.yaml"
                }
            
        }
    }
}

    }
}

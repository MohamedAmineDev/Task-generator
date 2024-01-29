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
        KUBE_CREDENTIALS_ID = credentials('kubernetes')
    }
    
    stages {
        stage("Clean up") {
            steps {
                deleteDir()
            }
        }

        stage("Clone repo") {
            steps {
                sh "git clone https://github.com/MohamedAmineDev/Task-generator.git"
            }
        }

        stage("Generate Task backend image") {
            steps {
                dir("Task-generator/Backend") {
                    sh "docker build -t medaminebens/task-backend-image ."
                }
            }
        }

        stage("Generate Task frontend image") {
            steps {
                dir("Task-generator/front") {
                    sh "docker build -t medaminebens/task-frontend-image ."
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

        stage("Deploy to Kubernetes") {
            steps {
                script {
                    try {
                        kubernetesDeploy(configs: "Task-generator/mysql-deployment.yaml", kubeConfigId: KUBE_CREDENTIALS_ID)
                    } catch (Exception e) {
                        // Handle deployment failure
                        echo "Error deploying to Kubernetes: ${e.message}"
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }
    }
}

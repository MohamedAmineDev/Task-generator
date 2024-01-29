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
        KUBE_CREDENTIALS_ID = 'kubernetes'
    }
    
    stages {
        stage("Deploy to Kubernetes") {
            steps {
                script {
                    withCredentials([file(credentialsId: KUBE_CREDENTIALS_ID, variable: 'KUBECONFIG')]) {
                        try {
                            kubernetesDeploy(
                                configs: "Task-generator/mysql-deployment.yaml",
                                kubeConfig: file("$KUBECONFIG").text
                            )
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
}

pipeline {
    agent any

    stages {
        stage('Clean Up Docker') {
            steps {
                sh '''
                docker system prune -af  
                '''
            }
        }

        stage('Clone Repository') {
            steps {
                git credentialsId: 'github-credentials', url: 'https://github.com/NaveenSMB/Frontend-Backend.git', branch: 'main'
            }
        }

        stage('Build & Run Containers') {
            steps {
                sh 'docker-compose up -d --build'  
            }
        }
    }
}


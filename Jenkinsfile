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
                git 'https://github.com/your-repo/simple-docker-project.git'  
            }
        }

        stage('Build & Run Containers') {
            steps {
                sh 'docker-compose up -d --build'  
            }
        }
    }
}


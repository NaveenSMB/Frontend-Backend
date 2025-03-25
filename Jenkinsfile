pipeline {
    agent any

    stages {
        stage('Clean Up Docker') {
            steps {
                sh '''
                docker system prune -af  # Remove all unused Docker containers & images
                '''
            }
        }

        stage('Clone Repository') {
            steps {
                git 'https://github.com/your-repo/simple-docker-project.git'  # Clone the repository
            }
        }

        stage('Build & Run Containers') {
            steps {
                sh 'docker-compose up -d --build'  # Build and start the containers
            }
        }
    }
}


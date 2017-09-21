pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh '''

                '''
            }
        }
        stage('test'){
            steps{
                sh 'echo "testing world"'
            }
        }
        stage('production'){
            steps{
                sh '''
                  python api-key-grab.py
                '''
            }
        }
    }
    post{
        always{
            echo "At least it ran"
        }
    }
}

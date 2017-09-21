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
                  python3 api-key-grab.json
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

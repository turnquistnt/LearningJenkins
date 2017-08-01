pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'echo "Hello World"'
            }
        }
        stage('test'){
            steps{
                sh 'echo "testing world"'
            }
        }
        stage('production'){
            steps{
                sh 'echo "Good Bye World"
            }
        }
    }
    post{
        always{
            echo "At least it ran"
        }
    }
}

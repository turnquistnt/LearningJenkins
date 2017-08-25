pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh '''
                  ./Gatling/bin/gatling.sh -s TestSimulation
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
                sh 'echo "Good Bye World"'
            }
        }
    }
    post{
        always{
            echo "At least it ran"
        }
    }
}

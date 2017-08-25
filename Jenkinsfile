pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh '''
                  ./Gatling/bin/gatling.sh -s computerdatabase.TestSimulation
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
                git checkout master
                git add --all
                git commit -S -m "Added results" -a
                git push origin master
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

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
                def json = readJSON file:'test-stuff.json'
                sh '''
                 echo "size: ${json.size}"
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

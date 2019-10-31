pipeline {
    agent {
        docker {image "rodolfododo/node-wd"}
    }
    stages {
	stage('Build') {
        steps{
        sh "npm install"
        }
	    
	}
    
	stage ('Test') {
        steps {
        sh "npm run test:ci"
    }
	}
  }
}
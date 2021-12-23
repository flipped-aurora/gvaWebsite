pipeline {
    agent {label 'built-in'}
    triggers {
        GenericTrigger(
            genericVariables: [
              [key: 'ref', value: '$.ref'],
              [key: 'clone_url', value: '$.repository.clone_url']
            ],
            token: 'github123456zzzzz' ,
            causeString: '$ref' ,
            printContributedVariables: true,
            printPostContent: true
        )
    }
    stages {
        stage('init') {
            steps {
              script {
                TYPE = "${ref}"
              }
            }
        }
        stage('show-param') {
            when {
              equals expected: 'refs/heads/main',
              actual: TYPE
            }
            steps {
                echo "${ref}"
                echo "${clone_url}"
            }
        }
        stage('git-code') {
            when {
              equals expected: 'refs/heads/main',
              actual: TYPE
            }
            steps {
                retry(20){
                  echo 'install'
                  checkout([$class: 'GitSCM', 
                    branches: [[name: "main"]],
                    doGenerateSubmoduleConfigurations: false, 
                    extensions: [], 
                    gitTool: 'Default', 
                    submoduleCfg: [], 
                    userRemoteConfigs: [[url: "${clone_url}",credentialsId: 'yunwei']]])
                }
            }
        }
        stage('restart') {
            when {
              equals expected: 'refs/heads/main',
              actual: TYPE
            }
            steps {
             sh'yarn && yarn build && cp -r build/* /www/wwwroot/huoxian.gin-vue-admin.com/dist/ '
            }
        }
    }
}



pipeline {
    agent any

    environment {
        // Define aquí cualquier variable de entorno que necesites.
    }

    stages {
        stage('Checkout') {
            steps {
				echo "Checkout..."
                // Obtén el código del repositorio.
                //checkout scm
            }
        }

        stage('Instalación de dependencias') {
            steps {
				echo "Instalación de dependencias..."
                // Instala las dependencias de npm.
				// sh 'npm install'
				
            }
        }

        stage('Construcción') {
            steps {
				echo "Construye el proyecto LitElement"
                //  
                // sh 'npm run build'
            }
        }

        stage('Pruebas') {
            steps {
				echo "Ejecución de pruebas..."
                // Ejecuta las pruebas del proyecto.
                //sh 'npm test'
            }
        }

        stage('Lanzamiento') {
            steps {
				echo "Lanzamiento..."
                // Inicia la aplicación utilizando Polymer Serve.
                sh 'polymer serve --open'
            }
        }
    }

    post {
        always {
            // Limpia después de ejecutar el pipeline.
            cleanWs()
        }
        success {
            echo 'El pipeline se ha ejecutado exitosamente.'
        }
        failure {
            echo 'El pipeline ha fallado.'
            // Aquí podrías agregar pasos para manejar los fallos.
        }
    }
}

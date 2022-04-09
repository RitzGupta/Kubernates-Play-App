# Step-1: Build the Docker File

### a. First go inside the Docker Folder   
$ docker build -t <Docker-USERNAME>/movie .    
$docker build -t ritikgupta/movie .

# Step-2: Push the Image to Docker Hub
### a. Login to Docker Hub   
$ docker login    

### b. Push Image to Docker Hub    
$ docker push ritikgupta/movie

# Step-3: Create Namespaces
Move to NameSpaces Folder

### a. Create Frontend Namespace
$ kubectl apply -f frontend-ns.yml

### b. Create Backend Namespace
$ kubectl apply -f backend-ns.yml

# Step-4 Create Backend   
Move to Backend Folder

### a. Create Persistent Volume
$ kubectl apply -f mysql-pv.yml      
      
### b. Create Persistent Volume Claim       
$ kubectl apply -f mysql-pvc.yml     

### c. Create Secrets   
$ kubectl apply -f mysql-secrets.yml     

### d. Create deployment
$ kubectl apply -f mysql-deployment.yml

### e. Create Service
$ kubectl apply -f mysql-service.yml

# Step-5 Create Frontend
Move to Frontend Folder.

### a. Create secrets
$ kubectl apply -f flaskapi-secrets.yml

### b. Create Deployment
$ kubectl apply -f flaskapi-deployment.yml

### c. Create Service
$ kubectl apply -f flaskapi-service.yml

### d. Create Extername for Backend Mysql Service
$ kubectl apply -f flaskapi-externalname.yml

### e. Create HPA
$ kubectl apply -f flaskapi-hpa.yaml


# Step-6 Create Database
### a. Create a Pod for to login MYSQL
$ kubectl run -it --rm --image=mysql:5.6 --namespace=backend-ns --restart=Never mysql-client -- mysql --host mysql --password=password

### b. Create Database and Tables
$ CREATE DATABASE flaskapi;
$ USE flaskapi;
$ CREATE TABLE movie (id INT PRIMARY KEY AUTO_INCREMENT, movie_name VARCHAR(255), director_name VARCHAR(255),ratings INT)






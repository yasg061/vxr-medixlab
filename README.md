# VXR-Medixlab
=======

## Software Requirements

Click the name of each software to go to the setup webpage.

* [Docker](https://docs.docker.com/get-docker): 20.10.x
* [docker-compose](https://docs.docker.com/compose/install/): 1.29.x 
* [Node](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions): 14.16.x 

## Setting up

* Clone the proyect
```bash
git clone git@github.com:VertexStudio/vxr-medixlab.git
git lfs pull
```

* Login to ACR (Azure Container Registry) using a User with enough permission to pull the API image.
```bash
docker login -u userhere -p passwordhere vertexstudio.azurecr.io
```

* Start PostgreSQL (http://localhost:5432), the API (http://localhost:8000) and Keycloak (http://localhost:8080) locally.
```bash
mv .env.example .env
docker-compose -f docker-compose.dev.yaml up -d
# NOTE: If you want to stop run and clean everything
docker-compose -f docker-compose.dev.yaml down --volumes
```

* Install dependencies and run.
```bash
npm install 
npm start
```


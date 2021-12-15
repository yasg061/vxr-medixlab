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

* Start Hasura and Keycloak locally.
```bash
mv .env.example .env
docker-compose up -d
```

* Install dependencies and run.
```bash
npm install 
npm start
```


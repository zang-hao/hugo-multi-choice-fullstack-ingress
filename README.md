# hugo-multi-choice-fullstack-ingress
## K8s Diagram
![](https://i.imgur.com/tD1vVTo.png)

## Create Cluster on GCP
### Requirements
* Terraform
* Gcloud-SDK
* Kubectl
* Helm

### Usage
1. Enable the GKE API
2. Create a service account on IAM
3. Add service account permission as below or higer
![](https://i.imgur.com/WN3LH8c.png)
4. cd terraform
5. `terraform init`
6. `terraform apply` to build the cluster
7. `gcloud config set project terraform-gke` set the current project
8. `gcloud container clusters get-credentials gke-example` to setup kubeconfig
9. Installing Ingress-nginx by Helm as below
```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

helm install ingress-nginx ingress-nginx/ingress-nginx
```
## Pipeline on Gitlab-CI
The pipeline have 3 stages including test, build, deploy, you only need to push the repo from local to gitlab will auto run.

### Test
We focus on deploy, just ignore this part.

### Build
* Set service account json as variabl $GCLOUD_SERVICE_KEY on Gitlab-CI.
* Using container registry like a registry on GCP.
* Tagging image with CI_COMMIT_SHORT_SHA to distinguish the image version.

```=yml
    before_script:
      - echo $GCLOUD_SERVICE_KEY | docker login -u _json_key --password-stdin https://asia.gcr.io
      - docker info
    script:
      - docker build -t $FRONTEND_IMAGE:$CI_COMMIT_SHORT_SHA ./client
      - docker build -f ./server/Dockerfile.dev -t $BACKEND_IMAGE:$CI_COMMIT_SHORT_SHA ./server
      - docker push $FRONTEND_IMAGE:$CI_COMMIT_SHORT_SHA
      - docker push $BACKEND_IMAGE:$CI_COMMIT_SHORT_SHA
      - echo "dockerize"
```
### Deploy
* Logining gcloud SDK to choose porject, zone, cluster.
* `kubectl apply -f ./k8s` to delpy on the cluster.
*  `kubectl set image` to set new image from container registry we build and push on Build stage.
```=yml
gcp_adk:
    stage: deploy
    image: google/cloud-sdk:latest
    before_script:
      - echo $GCLOUD_SERVICE_KEY > ${HOME}/gcloud-service-key.json
      - gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json
      - gcloud config set project hugo-multi-choice
      - gcloud config set compute/zone asia-east1-a
      - gcloud container clusters get-credentials cluster-1
    script:
      - kubectl apply -f ./k8s
      - kubectl set image deployments/frontend-deployment nginx=$FRONTEND_IMAGE:$CI_COMMIT_SHORT_SHA
      - kubectl set image deployments/backend-deployment backend=$BACKEND_IMAGE:$CI_COMMIT_SHORT_SHA
      - echo "deploy complete"
```
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

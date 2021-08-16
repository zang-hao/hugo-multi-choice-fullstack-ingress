provider "google" {
  credentials = file("terraform-test-323011-d3c8b78f2ba2.json")

  project = "terraform-test-323011"
  region  = "asia-east1"
  zone    = "asia-east1-a"
}

resource "google_container_cluster" "primary" {
  name                     = "gke-example"
  location                     = "asia-east1-a"
  remove_default_node_pool = true

  node_pool {
    name = "default-pool"
  }
}

resource "google_container_node_pool" "primary_pool" {
  name       = "primary-pool"
  cluster    = "${google_container_cluster.primary.name}"
  location       = "asia-east1-a"
  node_count = "2"

  node_config {
    machine_type = "n1-standard-1"
  }

  autoscaling {
    min_node_count = 2
    max_node_count = 5
  }

  management {
    auto_repair  = true
    auto_upgrade = true
  }
}



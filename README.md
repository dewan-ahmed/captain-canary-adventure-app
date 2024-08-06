# Captain Canary Adventure App

## Introduction
The Captain Canary Adventure App is a Node.js web application that showcases Captain Canary's adventures. It toggles between working and vacation modes and displays the Kubernetes pod name when deployed in a cluster.

## Features
- Toggle between Captain Canary's working and vacation modes.
- Display the current time in Hawaii during vacation mode.
- Show the Kubernetes pod name when deployed in a cluster.

## Prerequisites
- Node.js (for local running without Docker).
- Docker installed on your machine (for running via Docker).
- Access to a Kubernetes cluster (optional, for Kubernetes deployment).

## Installation and Running the App

### Running Locally without Docker
1. **Clone the Repository:**
   ```
   git clone https://github.com/dewandemo/captain-canary-adventure-app.git
   cd captain-canary-adventure-app
   ```

2. **Install Dependencies:**
   ```
   npm install
   ```

3. **Start the Application:**
   ```
   npm start
   ```
   Access the app at `http://localhost:3000`.

### Running via Docker
1. **Build the Docker Image:**
   ```
   docker build -t captain-canary-app .
   ```

2. **Run the Docker Container:**
   ```
   docker run -p 3000:3000 captain-canary-app
   ```
   Access the app at `http://localhost:3000`.

## Kubernetes Deployment
Refer to the `k8s-manifests` folder containing Kubernetes manifests for deploying the app. Update the `imageName` and `imageTag` in `values.yaml` and apply `deployment.yaml` and `service.yaml` from the `templates` folder.

## Usage
- Access the web app on your browser.
- Click the button to toggle between Captain Canary's modes.
- In vacation mode, enjoy the Hawaii time display.
- In Kubernetes, the pod name is displayed.

## Contributing
Contributions are welcome. Please follow the standard fork, branch, and pull request workflow.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Your Name - [@DewanAhmed](https://twitter.com/DewanAhmed) - www.dewanahmed.com

Project Link: [https://github.com/dewandemo/captain-canary-adventure-app](https://github.com/dewandemo/captain-canary-adventure-app)

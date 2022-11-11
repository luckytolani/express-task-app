## Steps to run this code
**Step 1** Build a Image :- `docker build -t todoapp:1.0 .`

**Step2**  `cd ./k8_yaml`

Run kubectl commands:-

    $ kubectl apply -f mongodb-secret.yaml
    $ kubectl apply -f mongo.yaml
    $ kubectl apply -f mongo-configmap.yaml
    $ kubectl apply -f mongo-express.yaml
    $ kubectl apply -f to-do-app.yaml

to see the node shell

    $ kubectl get pods
    $ kubectl logs --podName
   
 server started in
 

    http://localhost:5000
    

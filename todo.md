1. Testing With Postman[NEXT]:

a.Create a Patient:

- Make a POST request to http://localhost:3000/api/patient with JSON body:
```
json
Copy code
{
  "name": "John Doe",
  "age": 30
}
```

b.Get Patient Data:

- Make a GET request to http://localhost:3000/api/patient/1 (assuming the ID is 1 after creating the patient).
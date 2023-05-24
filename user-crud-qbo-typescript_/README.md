# user-crud-qbo-typescript
This Repository contain viruses which is not good for the computer but good for the human mind--------------XXXX--------------

this contain 
Callbacks
Promises
Async/Await
QBO integration authentication
All curd operation with try catch and perfect reponse 

To Run this Repo -
1) npm install
2) npm start


this is Json of POSTMAN collection
{
	"info": {
		"_postman_id": "60515076-d910-4303-bc8d-1360252496cf",
		"name": "user-Node",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "http://localhost:4011/user/delete?id=646daef2b944523feae8b8c1",
			"request": {
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:4011/user/delete?id=646daef2b944523feae8b8c1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4011",
					"path": [
						"user",
						"delete"
					],
					"query": [
						{
							"key": "id",
							"value": "646daef2b944523feae8b8c1"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "http://localhost:4011/user/update",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"query\":\"646dbd098c0d3131fb6e0e49\",\r\n    \"change\":{\r\n    \"firstName\":\"sdsd\",\r\n    \"lastName\":\"sdsd\",\r\n    \"gender\":\"Male\",\r\n        \"phone\":\"9427000623\",\r\n    \"email\":\"Sukhwanichirag@getnada.com\",\r\n    \"dept\":\"EC\"\r\n}\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:4011/user/update",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4011",
					"path": [
						"user",
						"update"
					]
				}
			},
			"response": []
		},
		{
			"name": "http://localhost:4011/user/get",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:4011/user/get",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4011",
					"path": [
						"user",
						"get"
					]
				}
			},
			"response": []
		},
		{
			"name": "http://localhost:4011/user/create",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"firstName\":\"deepak\",\r\n    \"lastName\":\"Sukhwnai\",\r\n    \"gender\":\"sdsd\",\r\n    \"phone\":\"94286666666\",\r\n    \"email\":\"ddd@gmail.com\",\r\n    \"dept\":\"EC\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:4011/user/create",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4011",
					"path": [
						"user",
						"create"
					]
				}
			},
			"response": []
		},
		{
			"name": "http://localhost:4011/user/authurl",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n        \"clientId\": \"ABGN5PGoARFldOAHrZK9b8Q7ZnTNfwfdTasuMrUjVGprEgbd2l\",\r\n        \"clientSecret\": \"JbIDUvco4GMu8yVrErUgyIksgJYSarnAq38TVvcl\",\r\n        \"environment\": \"sandbox\",\r\n        \"redirectUri\": \"http://localhost:4011/user/callback\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:4011/user/authurl",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4011",
					"path": [
						"user",
						"authurl"
					]
				}
			},
			"response": []
		}
	]
}



<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Inventory Module</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 
Inventory administration module in C#, with SPA with React and .NET Core backend.
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
Write about 1-2 paragraphs describing the purpose of your project.

## Aplication Service Interfaces (APIs)

### Pagination of table data

- Request:
```
GET /
Accept: application/json
```
- Response:
```
HTTP/1.1 200 OK
Content-Type: application/json
```
```json
{
    "items": [
        {
            "index": 1,
            "code": "ART001",
            "name": "Detergente",
            "description": "Descripción",
            "quantity": 3
        },
        {
            ...
        }
        ...
    ]
}
```

### Adding an item

- Request:
```
POST /
Accept: application/json
```
```json
{
    "item": 
        {
            "index": 1,
            "code": "ART001",
            "name": "Detergente",
            "description": "Descripción",
            "quantity": 3
        }
}
```

- Response:
```
HTTP/1.1 200 OK
Content-Type: application/json
```
### Modifying an item

- Request:
```
PUT /
Accept: application/json
```
```json
{
    "item": 
        {
            "index": 1,
            "code": "ART001",
            "name": "Detergente",
            "description": "Descripción",
            "quantity": 3
        }
}
```

- Response:
```
HTTP/1.1 200 OK
Content-Type: application/json
```
### Deleting an item

- Request:
```
DELETE /
Accept: application/json
```
```json
{
    "item_code": "ART100"
}
```

- Response:
```
HTTP/1.1 200 OK
Content-Type: application/json
```


## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
What things you need to install the software and how to install them.

```
Give examples
```

### Installing
A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.

## 🔧 Running the tests <a name = "tests"></a>
Explain how to run the automated tests for this system.

### Break down into end to end tests
Explain what these tests test and why

```
Give an example
```

### And coding style tests
Explain what these tests test and why

```
Give an example
```

## 🎈 Usage <a name="usage"></a>
Add notes about how to use the system.

## 🚀 Deployment <a name = "deployment"></a>
Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>
- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/) - IDE
- [Node v18.12.1 LTS](https://nodejs.org/en/) - Server Environment
- [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-2019) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReacJs v18.2.0](https://vuejs.org/) - Web Framework


## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- Hat tip to anyone whose code was used
- Inspiration
- References


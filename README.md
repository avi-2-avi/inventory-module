
<p align="center">
 <img width=180px height=180px src="https://beta.smarter.codes/wp-content/uploads/2020/04/15-.net_.png" alt="Project logo">
</p>

<h2 align="center">Inventory Module</h2>

<p align="center"> 
Inventory administration module with React SPA and .NET Core backend.
    <br> 
</p>

---


## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Planning Process](#planning)
- [Built Using](#built_using)
- [Insights](#insights)

## 💡 About <a name = "about"></a>
Inventory Module is a full-stack project which simulates web platform for the administration of inventory in a company.

It uses the Single Web Application (SPA) methodology by rendering different components depending on the option chosen. As well, it uses a ReactJS with Bootstrap library to make the Frontend User Interface and .NET Core (C#) for the APIs in the backend.

The program connects with a relational database using MS SQL Server running locally, which is why a SQL migration script is provided. Additionally, it has been developed and tested in Visual Studio 2022, as it locally deploys both the backend and frontend with IIS Server.

<br>

<img src="img/flow.png">

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

All the Software requirements and their versions are listed in the Built Using <a name = "built_using"></a> section.

Before starting the project, the database must be running locally. TO do so, install Microsoft SQL Server 2022 and SQL Server Management Studio 18 to visualize the Database. 

After the installation, locate "migration.sql" file in the "sql" directory. Open it with SSMS 18 and execute it with the "Execute" button or pressing "F5". With that, you'll have the database working locally.


### Installing

*TODO: More details later*

Managing NuGet packages: 
Microsoft.EntityFrameworkCore.SqlServer 7.0.0
Microsoft.EntityFrameworkCore.Tools 7.0.0
Microsoft.AspNetCore.SpaProxy 6.0.11


Command for connecting to the database using Scaffold-DbContext in Package Manager Console (Tools -> NuGet Package Manager -> Package Manager Console):
https://learn.microsoft.com/en-us/ef/core/cli/powershell

Make sure your local database has Windows authentication mode or it won't work.

```
Scaffold-DbContext "Server=(local); DataBase=Inventory;Integrated Security=true;TrustServerCertificate=True" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models
```






A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```


#### Demo

https://user-images.githubusercontent.com/54769706/205129985-f1b3a0c3-ab32-4c4c-a9ec-3ddf98c3f57d.mp4


## 💭 Planning Process <a name = "planning"></a>

### Database
The "Inventory" database consists of only one table, where the code of the product is the primary key.

<div align="center" style="text-align:center">
<img height=250 width=290 src="img/db.png">
</div>

### API Enpoints
Before the development, it has been important to define the enpoints needed.
#### Pagination of table data

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

#### Adding an item

- Request:
```
POST /
Accept: application/json
```
```json
{
    "item": 
        {
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
#### Modifying an item

- Request:
```
PUT /
Accept: application/json
```
```json
{
    "item": 
        {
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
#### Deleting an item

- Request:
```
DELETE /{code}
Accept: application/json
```

- Response:
```
HTTP/1.1 200 OK
Content-Type: application/json
```

## ⛏️ Built Using <a name = "built_using"></a>
- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/) - IDE
- [Node v18.12.1 LTS](https://nodejs.org/en/) - Server Environment
- [Microsoft SQL Server 2022](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReacJs v18.2.0](https://vuejs.org/) - Web Framework


## 🎉 Insights <a name = "insights"></a>
- 
- Inspiration
- References


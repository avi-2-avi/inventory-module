USE master
GO
if exists (select * from sysdatabases where name='Inventory')
		drop database Inventory
go

DECLARE @device_directory NVARCHAR(520)
SELECT @device_directory = SUBSTRING(filename, 1, CHARINDEX(N'master.mdf', LOWER(filename)) - 1)
FROM master.dbo.sysaltfiles WHERE dbid = 1 AND fileid = 1

EXECUTE (N'CREATE DATABASE Inventory
  ON PRIMARY (NAME = N''Inventory'', FILENAME = N''' + @device_directory + N'intentory.mdf'')
  LOG ON (NAME = N''Inventory_log'',  FILENAME = N''' + @device_directory + N'intentory.ldf'')')
go

USE "Inventory"

if exists (select * from sysobjects where id = object_id('dbo.Items') and sysstat & 0xf = 3)
	drop table "dbo"."Items"
GO

CREATE TABLE "Items" (
    "id" int IDENTITY(1,1) NOT NULL,
    "code" varchar(50) NOT NULL,
    "name" varchar(50) NOT NULL,
    "description" varchar(50) NOT NULL,
    "quantity" int NOT NULL,
    CONSTRAINT "PK_Items" PRIMARY KEY ("Id")
) 
go

INSERT "Items" ("code", "name", "description", "quantity") VALUES ('ART0001', 'Detergente', 'Descripcion', 3)
INSERT "Items" ("code", "name", "description", "quantity") VALUES ('ART0002', 'Comida enlatada', 'Descripcion', 4)
INSERT "Items" ("code", "name", "description", "quantity") VALUES ('ART0003', 'Jabon', 'Descripcion', 5)
INSERT "Items" ("code", "name", "description", "quantity") VALUES ('ART0004', 'Shampoo', 'Descripcion', 1)
INSERT "Items" ("code", "name", "description", "quantity") VALUES ('ART0005', 'Gaseosa', 'Descripcion', 6)
INSERT "Items" ("code", "name", "description", "quantity") VALUES ('ART0006', 'Cereal', 'Descripcion', 7)
INSERT "Items" ("code", "name", "description", "quantity") VALUES ('ART0007', 'Arroz', 'Descripcion', 8)
INSERT "Items" ("code", "name", "description", "quantity") VALUES ('ART0008', 'Avena', 'Descripcion', 4)
INSERT "Items" ("code", "name", "description", "quantity") VALUES ('ART0009', 'Pan', 'Descripcion', 3)
INSERT "Items" ("code", "name", "description", "quantity") VALUES ('ART0010', 'Mantequilla', 'Descripcion', 1)
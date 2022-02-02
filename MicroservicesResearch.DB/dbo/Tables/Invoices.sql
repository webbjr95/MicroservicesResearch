CREATE TABLE [dbo].[Invoices]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	[Identifier] VARCHAR(6) NOT NULL,
	[CountryCode] VARCHAR(2) NOT NULL,
	[ProductCode] VARCHAR(25) NOT NULL,
	[Quantity] INT NOT NULL,
	[Price] DECIMAL(19, 2) NOT NULL,
	[TotalCost] MONEY NOT NULL,
	[Status] INT NOT NULL
)

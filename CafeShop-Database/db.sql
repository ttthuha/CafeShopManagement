USE [master]
GO
/****** Object:  Database [CafeShopManagement]    Script Date: 10/6/2018 4:55:32 PM ******/
CREATE DATABASE [CafeShopManagement]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CafeShopManagement', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\CafeShopManagement.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'CafeShopManagement_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\CafeShopManagement_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [CafeShopManagement] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CafeShopManagement].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CafeShopManagement] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CafeShopManagement] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CafeShopManagement] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CafeShopManagement] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CafeShopManagement] SET ARITHABORT OFF 
GO
ALTER DATABASE [CafeShopManagement] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CafeShopManagement] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CafeShopManagement] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CafeShopManagement] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CafeShopManagement] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CafeShopManagement] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CafeShopManagement] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CafeShopManagement] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CafeShopManagement] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CafeShopManagement] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CafeShopManagement] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CafeShopManagement] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CafeShopManagement] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CafeShopManagement] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CafeShopManagement] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CafeShopManagement] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CafeShopManagement] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CafeShopManagement] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [CafeShopManagement] SET  MULTI_USER 
GO
ALTER DATABASE [CafeShopManagement] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CafeShopManagement] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CafeShopManagement] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CafeShopManagement] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [CafeShopManagement] SET DELAYED_DURABILITY = DISABLED 
GO
USE [CafeShopManagement]
GO
/****** Object:  Table [dbo].[Food]    Script Date: 10/6/2018 4:55:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Food](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Price] [int] NOT NULL,
	[Type] [nvarchar](50) NULL,
 CONSTRAINT [PK_Menu] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Order]    Script Date: 10/6/2018 4:55:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order](
	[Id] [uniqueidentifier] NOT NULL,
	[TableId] [uniqueidentifier] NOT NULL,
	[FoodId] [uniqueidentifier] NOT NULL,
	[Quantity] [int] NOT NULL,
	[Date] [datetime] NOT NULL,
 CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Table]    Script Date: 10/6/2018 4:55:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Table](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Type] [nvarchar](50) NULL,
	[SortOrder] [int] NULL,
 CONSTRAINT [PK_Table] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[Food] ([Id], [Name], [Price], [Type]) VALUES (N'20dbd024-caf0-4b98-8286-13778784e89d', N'Com bò', 45000, N'Đồ ăn')
INSERT [dbo].[Food] ([Id], [Name], [Price], [Type]) VALUES (N'adfe8f44-951c-4fc4-9b4a-3522bed57b48', N'Com sườn', 45000, N'Đồ ăn')
INSERT [dbo].[Food] ([Id], [Name], [Price], [Type]) VALUES (N'2f68c725-a70f-4876-bf69-369339414d6b', N'Coffee', 25000, N'Nước')
INSERT [dbo].[Food] ([Id], [Name], [Price], [Type]) VALUES (N'ed3055f2-1d8a-4770-8310-6407948d3a92', N'Trà', 25000, N'Nước')
INSERT [dbo].[Food] ([Id], [Name], [Price], [Type]) VALUES (N'9c326af8-cddd-40f3-b988-8dffb9d266c0', N'Bánh mì ốp la', 45000, N'Đồ ăn')
INSERT [dbo].[Food] ([Id], [Name], [Price], [Type]) VALUES (N'd4f7abdc-f7b0-4613-9c52-a3cdb89c5ae9', N'Pepsi', 25000, N'Nước')
INSERT [dbo].[Food] ([Id], [Name], [Price], [Type]) VALUES (N'fb56d7b7-84ee-4b4f-913f-efb06c43a51b', N'Coca-Cola', 25000, N'Nu?c')
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'ec8aa02f-ec10-49d9-8e90-09202a77aa24', N'BÀN 13', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'7b992905-7435-4de7-91d4-0d119383f7f2', N'BÀN 1', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'd4b67a78-abcd-4be8-b1fc-1cb3f05447eb', N'BÀN 2', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'90e6316d-1bd1-468d-a1bf-26c8edcf2d6a', N'BÀN VIP 7', N'VIP', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'0f5f7bcf-816d-4afd-bab4-37224844f5c5', N'BÀN 11', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'c75b59f1-385e-4b15-8658-46afc25e7e82', N'BÀN 9', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'd06be797-d45e-4cb6-9080-4cdb71464c6b', N'BÀN VIP 6', N'VIP', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'b7d187e2-6bc3-4e04-a323-4f0d4c0da238', N'BÀN 12', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'b75677bc-4759-4a82-9573-4fd4647fc37e', N'BÀN 10', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'496bf898-992c-4918-82fc-555b2566aca9', N'BÀN VIP 2', N'VIP', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'dfa173c1-4193-4c10-8eb7-5b527c59cfaf', N'BÀN 4', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'365205ca-3b4e-4fd1-a599-77b0c4d7c3aa', N'BÀN VIP 1', N'VIP', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'8273fa5a-75db-4403-aeac-83c037eea6d7', N'BÀN 1', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'6f9644f7-b309-4bcd-b24a-a2a2ab1558fc', N'BÀN 5', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'469cd9c6-a409-4c0f-bf27-ae74f1c480dc', N'BÀN 7', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'c025da88-8cb1-4d42-bff4-b0bc825a04fc', N'BÀN VIP 5', N'VIP', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'ac83a003-99a4-4d76-ad22-b53567255099', N'BÀN VIP 8', N'VIP', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'acfe2833-a2c8-48b3-8d06-b5c4f4cd2074', N'BÀN 3', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'e812079e-c0a2-4657-b48f-bb5d3007ca8f', N'BÀN VIP 3', N'VIP', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'bd576c87-2c67-4aa0-b8c1-e3717f1b94d6', N'BÀN VIP 9', N'VIP', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'84abbeb0-875b-4526-92dc-ee06a14fced5', N'BÀN 6', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'dbb372a1-e8b8-4a1e-a16d-f2f90c90da5b', N'BÀN 8', N'', 1)
INSERT [dbo].[Table] ([Id], [Name], [Type], [SortOrder]) VALUES (N'4b3ed6f6-0328-45a1-9110-feab23d729ee', N'BÀN VIP 4', N'VIP', 1)
ALTER TABLE [dbo].[Order]  WITH CHECK ADD  CONSTRAINT [FK_Order_Food] FOREIGN KEY([FoodId])
REFERENCES [dbo].[Food] ([Id])
GO
ALTER TABLE [dbo].[Order] CHECK CONSTRAINT [FK_Order_Food]
GO
USE [master]
GO
ALTER DATABASE [CafeShopManagement] SET  READ_WRITE 
GO


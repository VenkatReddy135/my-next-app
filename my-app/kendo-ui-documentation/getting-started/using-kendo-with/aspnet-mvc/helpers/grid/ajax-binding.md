---
title: Ajax Binding
meta_title: Configure Kendo UI Grid for ASP.NET MVC for Ajax binding
meta_description: Kendo UI Grid for ASP.NET MVC makes Ajax requests upon paging, sorting, filtering or grouping once the Grid HtmlHelper extension is configured for Ajax binding.
slug: mvc-grid-ajax-binding
publish: true
---

# Ajax Binding

## Introduction

When configured for ajax binding Kendo UI Grid for ASP.NET MVC will make ajax requests when doing paging, sorting, filtering, grouping or saving data.

Ajax-bound mode has the following features:
 - The grid retrieves only the data (in JSON format) representing the current page. As a result only the grid is updated.
 - All grid templates (column, detail) are executed client-side. They follow the [Kendo UI Template](/getting-started/framework/templates/overview) definition rules and may contain embedded JavaScript code.

## Getting Started

The following tutorial shows how to configure Kendo UI Grid for ASP.NET MVC to do ajax binding to the Northwind database (the Products table).

1.  Create a new ASP.NET MVC 4 application (or Kendo UI ASP.NET MVC application if you have installed the [Kendo UI Visual Studio Extensions](/getting-started/using-kendo-with/aspnet-mvc/introduction#kendo-ui-for-asp.net-mvc-visual-studio-extensions)).
Name the application "KendoGridAjaxBinding". If you decided not to use the Kendo UI Visual Studio Extensions followe the steps from the [introduction](/getting-started/using-kendo-with/aspnet-mvc/introduction) help topic in order
to add Kendo UI Complete for ASP.NET MVC to the application.
1.  Add a new "Entity Framework Data Model". Right click the `~/Models` folder in the solution explorer and pick "Add ->  New Item". Choose "Data -> ADO.NET Entity Data Model" in the "Add New Item" dialog.
Name the model "Northwind.edmx" and click "Next". This will start the "Entity Data Model Wizard".
![New entity data model](images/entity-data-model.png)
1.  Pick the "Generate from database" option and click "Next". Configure a connection to the Northwind database. Click "Next".
![Choose the connection](images/entity-data-model.png)
1.  Choose the "Products" table from the "Which database objects do you want to include in your model?". Leave all other options as they are set by default. Click "Finish".
![Choose the Products table](images/database-objects.png)
1.  Open HomeController.cs and add a new action method which will return the Products as JSON. The grid will make ajax requests to this action.

        public ActionResult Products_Read()
        {
        }
1.  Add a new parameter of type `Kendo.Mvc.UI.DataSourceRequest` to the action. This parameter will contain the current grid request information - page, sort, group and filter.
Decorate that parameter with the `Kendo.Mvc.UI.DataSourceRequestAttribute`. That attribute will populate the `DataSourceRequest` object from the posted data. You need to import the `Kendo.Mvc.UI` namespace.

        public ActionResult Products_Read([DataSourceRequest]DataSourceRequest request)
        {
        }
1.  Use the `ToDataSourceResult` extension method to convert the Products to a `Kendo.Mvc.UI.DataSourceResult` object. That extension method will page, filter, sort or group your data using the information provided by the
`DataSourceRequest` object. To use the `ToDataSourceResult` extension method import the `Kendo.Mvc.Extensions` namespace.

        public ActionResult Products_Read([DataSourceRequest]DataSourceRequest request)
        {
            using (var northwind = new NorthwindEntities())
            {
                IQueryable<Product> products = northwind.Products;
                DataSourceResult result = products.ToDataSourceResult(request);
            }
        }
1.  Return the `DataSourceResult` as JSON. Now let's configure Kendo UI Grid for ajax binding.

        public ActionResult Products_Read([DataSourceRequest]DataSourceRequest request)
        {
            using (var northwind = new NorthwindEntities())
            {
                IQueryable<Product> products = northwind.Products;
                DataSourceResult result = products.ToDataSourceResult(request);
                return Json(result);
            }
        }
1.  In the view configure the grid to use the action method created in the previous steps.
    - Index.aspx (ASPX)

            <%: Html.Kendo().Grid<KendoGridAjaxBinding.Models.Product>()
                  .Name("grid")
                  .DataSource(dataSource => dataSource // Configure the grid data source
                      .Ajax() // Specify that ajax binding is used
                      .Read(read => read.Action("Products_Read", "Home")) // Set the action method which will return the data in JSON format
                   )
                  .Columns(columns =>
                  {
                      // Create a column bound to the ProductID property
                      columns.Bound(product => product.ProductID);
                      // Create a column bound to the ProductName property
                      columns.Bound(product => product.ProductName);
                      // Create a column bound to the UnitsInStock property
                      columns.Bound(product => product.UnitsInStock);
                  })
                  .Pageable() // Enable paging
                  .Sortable() // Enable sorting
            %>
    - Index.cshtml (Razor)

            @(Html.Kendo().Grid<KendoGridAjaxBinding.Models.Product>()
                  .Name("grid")
                  .DataSource(dataSource => dataSource // Configure the grid data source
                      .Ajax() // Specify that ajax binding is used
                      .Read(read => read.Action("Products_Read", "Home")) // Set the action method which will return the data in JSON format
                   )
                  .Columns(columns =>
                  {
                      // Create a column bound to the ProductID property
                      columns.Bound(product => product.ProductID);
                      // Create a column bound to the ProductName property
                      columns.Bound(product => product.ProductName);
                      // Create a column bound to the UnitsInStock property
                      columns.Bound(product => product.UnitsInStock);
                  })
                  .Pageable() // Enable paging
                  .Sortable() // Enable sorting
            )
1. Build and run the application
![Final result](images/bound-grid.png)

The `ToDataSourceResult` method uses the `DataSourceRequest` parameter and LINQ expressions to page, sort, filter and group your data.
The JSON response of the action method will contain only a single page of data. The grid will be bound to that data.

> If your data is `IQueryable<T>` returned by a LINQ-enabled provider (Entity Framework, LINQ to SQL, Telerik OpenAccess, NHibernate or other) the LINQ expressions
created by the `ToDataSourceResult` method will be converted to SQL and executed by the database server.

## Using View Models

Sometimes it is convenient to use view model objects instead of entities returned by Entity Framework. For example you may want to
avoid serializing all Entity Framework properties as JSON or prevent serialization exceptions caused by circular references.
This tutorial will show how to use view models and Kendo UI Grid for ASP.NET MVC.

1. Perform all steps from the previous tutorial.
1. Add a new class to the `~/Models` folder. Name it `ProductViewModel`.

        public class ProductViewModel
        {
            public int ProductID { get; set; }
            public int ProductName { get; set; }
            public short? UnitsInStock { get; set; }
        }
1. Modify the grid declaration and make it use `ProductViewModel` instead of `Product`.
    - Index.aspx (ASPX)

            <%: Html.Kendo().Grid<KendoGridAjaxBinding.Models.ProductViewModel>()
                  .Name("grid")
                  .DataSource(dataSource => dataSource
                      .Ajax()
                      .Read(read => read.Action("Products_Read", "Home"))
                   )
                  .Columns(columns =>
                  {
                      columns.Bound(product => product.ProductID);
                      columns.Bound(product => product.ProductName);
                      columns.Bound(product => product.UnitsInStock);
                  })
                  .Pageable()
                  .Sortable()
            %>
    - Index.cshtml (Razor)

            @(Html.Kendo().Grid<KendoGridAjaxBinding.Models.ProductViewModel>()
                  .Name("grid")
                  .DataSource(dataSource => dataSource
                      .Ajax()
                      .Read(read => read.Action("Products_Read", "Home"))
                   )
                  .Columns(columns =>
                  {
                      columns.Bound(product => product.ProductID);
                      columns.Bound(product => product.ProductName);
                      columns.Bound(product => product.UnitsInStock);
                  })
                  .Pageable()
                  .Sortable()
            )
1. Modify the `Products_Read` action method and use the `ToDataSourceResult` method overload which accepts a mapping lambda.

            public ActionResult Products_Read([DataSourceRequest]DataSourceRequest request)
            {
                using (var northwind = new NorthwindEntities())
                {
                    IQueryable<Product> products = northwind.Products;
                    // Convert the Product entities to ProductViewModel instances
                    DataSourceResult result = products.ToDataSourceResult(request, product => new ProductViewModel
                            {
                            ProductID = product.ProductID,
                            ProductName = product.ProductName,
                            UnitsInStock = product.UnitsInStock
                            });
                    return Json(result);
                }
            }

## Pass Additional Data to the Action Method

To pass additional parameters to the action use the `Data` method. Provide the name of a JavaScript function which will return a JavaScript object with the additional data:


### Example - add the additional parameters to the action method:

    public ActionResult Products_Read([DataSourceRequest]DataSourceRequest request, string firstName, string lastName)
    {
        //Implementation omitted
    }

### Example - specify the JavaScript function which returns additional data (ASPX)

    <%: Html.Kendo().Grid<KendoGridAjaxBinding.Models.Product>()
          .Name("grid")
          .DataSource(dataSource => dataSource
              .Ajax()
              .Read(read => read
                   .Action("Products_Read", "Home") // Set the action method which will return the data in JSON format
                   .Data("productsReadData") // Specify the JavaScript function which will return the data
              )
          )
          .Columns(columns =>
          {
              columns.Bound(product => product.ProductID);
              columns.Bound(product => product.ProductName);
              columns.Bound(product => product.UnitsInStock);
          })
          .Pageable()
          .Sortable()
    %>
    <script>
    function productsReadData() {
        return {
            firstName: "John",
            lastName: "Doe"
        };
    }
    </script>

### Example - specify the JavaScript function which returns additional data (Razor)

    @(Html.Kendo().Grid<KendoGridAjaxBinding.Models.Product>()
          .Name("grid")
          .DataSource(dataSource => dataSource
              .Ajax()
              .Read(read => read
                   .Action("Products_Read", "Home") // Set the action method which will return the data in JSON format
                   .Data("productsReadData") // Specify the JavaScript function which will return the data
              )
          )
          .Columns(columns =>
          {
              columns.Bound(product => product.ProductID);
              columns.Bound(product => product.ProductName);
              columns.Bound(product => product.UnitsInStock);
          })
          .Pageable()
          .Sortable()
    )
    <script>
    function productsReadData() {
        return {
            firstName: "John",
            lastName: "Doe"
        };
    }
    </script>

## Enable Client Data Processing during Ajax Binding

By default the Kendo UI Grid for ASP.NET MVC will make an ajax request to the action method every time the user changes the page, sorts, filters or groups. This behavior
can be changed by disabling `ServerOperation`.

### Example - enable client data processing (ASPX)

    <%: Html.Kendo().Grid<KendoGridAjaxBinding.Models.Product>()
          .Name("grid")
          .DataSource(dataSource => dataSource
              .Ajax()
              .Read(read => read
                   .ServerOperation(false) // Paging, sorting, filtering and grouping will be done client-side
                   .Action("Products_Read", "Home") // Set the action method which will return the data in JSON format
                   .Data("productsReadData")
              )
          )
          .Columns(columns =>
          {
              columns.Bound(product => product.ProductID);
              columns.Bound(product => product.ProductName);
              columns.Bound(product => product.UnitsInStock);
          })
          .Pageable()
          .Sortable()
    %>

### Example - enable client data processing (Razor)

    @(Html.Kendo().Grid<KendoGridAjaxBinding.Models.Product>()
          .Name("grid")
          .DataSource(dataSource => dataSource
              .Ajax()
              .Read(read => read
                   .ServerOperation(false) // Paging, sorting, filtering and grouping will be done client-side
                   .Action("Products_Read", "Home") // Set the action method which will return the data in JSON format
                   .Data("productsReadData")
              )
          )
          .Columns(columns =>
          {
              columns.Bound(product => product.ProductID);
              columns.Bound(product => product.ProductName);
              columns.Bound(product => product.UnitsInStock);
          })
          .Pageable()
          .Sortable()
    )

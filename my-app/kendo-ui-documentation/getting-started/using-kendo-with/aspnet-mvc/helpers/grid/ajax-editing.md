---
title: Ajax Editing
meta_title: Ajax Editing in Kendo UI Grid for ASP.NET MVC | Kendo UI Documentation
meta_description: Documentation how to define commands and set the editing mode to configure Kendo UI Grid for ASP.NET MVC for Ajax editing.
slug: mvc-grid-ajax-editing
publish: true
---

# Ajax Editing

## Getting started

The following tutorial shows how to configure Kendo UI Grid for ASP.NET MVC to do ajax editing of the Northwind database (the Products table).

1.  Create a new ASP.NET MVC 4 application (or Kendo UI ASP.NET MVC application if you have installed the [Kendo UI Visual Studio Extensions](/getting-started/using-kendo-with/aspnet-mvc/introduction#kendo-ui-for-asp.net-mvc-visual-studio-extensions)).
Name the application "KendoGridAjaxEditing". If you decided not to use the Kendo UI Visual Studio Extensions followe the steps from the [introduction](/getting-started/using-kendo-with/aspnet-mvc/introduction) help topic in order
to add Kendo UI Complete for ASP.NET MVC to the application.
1.  Add a new "Entity Framework Data Model". Right click the `~/Models` folder in the solution explorer and pick "Add ->  New Item". Choose "Data -> ADO.NET Entity Data Model" in the "Add New Item" dialog.
Name the model "Northwind.edmx" and click "Next". This will start the "Entity Data Model Wizard".
![New entity data model](images/entity-data-model.png)
1.  Pick the "Generate from database" option and click "Next". Configure a connection to the Northwind database. Click "Next".
![Choose the connection](images/entity-data-model.png)
1.  Choose the "Products" table from the "Which database objects do you want to include in your model?". Leave all other options as they are set by default. Click "Finish".
![Choose the Products table](images/database-objects.png)
1. Add a new class to the `~/Models` folder. Name it `ProductViewModel`.

        public class ProductViewModel
        {
            public int ProductID { get; set; }
            // The ProductName property is required
            [Required]
            public int ProductName { get; set; }
            // Use the Integer editor template for the UnitsInStock property
            [UIHint("Integer")]
            public short? UnitsInStock { get; set; }
        }
1.  Open HomeController.cs and add a new action method which will return the Products as JSON. The grid will make ajax requests to this action.

        public ActionResult Products_Read([DataSourceRequest]DataSourceRequest request)
        {
            using (var northwind = new NorthwindEntities())
            {
                IQueryable<Product> products = northwind.Products;
                DataSourceResult result = products.ToDataSourceResult(request);
                return Json(result);
            }
        }
1.  Add new action method to HomeController.cs. It will be responsible for saving new data items. Name the method "Products_Create".

        public ActionResult Products_Create([DataSourceRequest]DataSourceRequest request, ProductViewModel product)
        {
            if (ModelState.IsValid)
            {
                using (var northwind = new NorthwindEntities())
                {
                    // Create a new Product entity and set its properties from the posted ProductViewModel
                    var entity = new Product
                    {
                        ProductName = product.ProductName,
                        UnitsInStock = product.UnitsInStock
                    };
                    // Add the entity
                    northwind.Products.Add(entity);
                    // Insert the entity in the database
                    northwind.SaveChanges();
                    // Get the ProductID generated by the database
                    product.ProductID = entity.ProductID;
                }
            }
            // Return the inserted product. The grid needs the generated ProductID. Also return any validation errors.
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }
1.  Add new action method to HomeController.cs. It will be responsible for saving updated data items. Name the method "Products_Update".

        public ActionResult Products_Update([DataSourceRequest]DataSourceRequest request, ProductViewModel product)
        {
            if (ModelState.IsValid)
            {
                using (var northwind = new NorthwindEntities())
                {
                    // Create a new Product entity and set its properties from the posted ProductViewModel
                    var entity = new Product
                    {
                        ProductID = product.ProductID,
                        ProductName = product.ProductName,
                        UnitsInStock = product.UnitsInStock
                    };
                    // Attach the entity
                    northwind.Products.Attach(entity);
                    // Change its state to Modified so Entity Framework can update the existing product instead of creating a new one
                    northwind.Entry(entity).State = EntityState.Modified;
                    // Or use ObjectStateManager if using a previous version of Entity Framework
                    // northwind.ObjectStateManager.ChangeObjectState(entity, EntityState.Modified);
                    // Update the entity in the database
                    northwind.SaveChanges();
                }
            }
            // Return the updated product. Also return any validation errors.
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }

1.  Add new action method to HomeController.cs. It will be responsible for saving deleted data items. Name the method "Products_Destroy".

        public ActionResult Products_Destroy([DataSourceRequest]DataSourceRequest request, ProductViewModel product)
        {
            if (ModelState.IsValid)
            {
                using (var northwind = new NorthwindEntities())
                {
                    // Create a new Product entity and set its properties from the posted ProductViewModel
                    var entity = new Product
                    {
                        ProductID = product.ProductID,
                                  ProductName = product.ProductName,
                                  UnitsInStock = product.UnitsInStock
                    };
                    // Attach the entity
                    northwind.Products.Attach(entity);
                    // Delete the entity
                    northwind.Products.Remove(entity);
                    // Or use DeleteObject if using a previous versoin of Entity Framework
                    // northwind.Products.DeleteObject(entity);
                    // Delete the entity in the database
                    northwind.SaveChanges();
                }
            }
            // Return the removed product. Also return any validation errors.
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }
1.  In the view configure the grid to use the action methods created in the previous steps.
    - Index.aspx (ASPX)

            <%: Html.Kendo().Grid<KendoGridAjaxEditing.Models.ProductViewModel>()
                  .Name("grid")
                  .Columns(columns =>
                  {
                      columns.Bound(product => product.ProductID).Width(100);
                      columns.Bound(product => product.ProductName);
                      columns.Bound(product => product.UnitsInStock).Width(250);
                      columns.Command(commands =>
                      {
                          commands.Edit(); // The "edit" command will edit and update data items
                          commands.Destroy(); // The "destroy" command removes data items
                      }).Title("Commands").Width(200);
                  })
                  .ToolBar(toolbar => toolbar.Create()) // The "create" command adds new data items
                  .Editable(editable => editable.Mode(GridEditMode.InLine)) // Use inline editing mode
                  .DataSource(dataSource =>
                      dataSource.Ajax()
                        .Model(model =>
                        {
                            model.Id(product => product.ProductID); // Specify the property which is the unique identifier of the model
                            model.Field(product => product.ProductID).Editable(false); // Make the ProductID property not editable
                        })
                        .Create(create => create.Action("Products_Create", "Home")) // Action invoked when the user saves a new data item
                        .Read(read => read.Action("Products_Read", "Home"))  // Action invoked when the grid needs data
                        .Update(update => update.Action("Products_Update", "Home"))  // Action invoked when the user saves an updated data item
                        .Destroy(destroy => destroy.Action("Products_Destroy", "Home")) // Action invoked when the user removes a data item
                  )
                  .Pageable()
            %>
    - Index.cshtml (Razor)

            @(Html.Kendo().Grid<KendoGridAjaxEditing.Models.ProductViewModel>()
                  .Name("grid")
                  .Columns(columns =>
                  {
                      columns.Bound(product => product.ProductID).Width(100);
                      columns.Bound(product => product.ProductName);
                      columns.Bound(product => product.UnitsInStock).Width(250);
                      columns.Command(commands =>
                      {
                          commands.Edit(); // The "edit" command will edit and update data items
                          commands.Destroy(); // The "destroy" command removes data items
                      }).Title("Commands").Width(200);
                  })
                  .ToolBar(toolbar => toolbar.Create()) // The "create" command adds new data items
                  .Editable(editable => editable.Mode(GridEditMode.InLine)) // Use inline editing mode
                  .DataSource(dataSource =>
                      dataSource.Ajax()
                        .Model(model =>
                        {
                            model.Id(product => product.ProductID); // Specify the property which is the unique identifier of the model
                            model.Field(product => product.ProductID).Editable(false); // Make the ProductID property not editable
                        })
                        .Create(create => create.Action("Products_Create", "Home")) // Action invoked when the user saves a new data item
                        .Read(read => read.Action("Products_Read", "Home"))  // Action invoked when the grid needs data
                        .Update(update => update.Action("Products_Update", "Home"))  // Action invoked when the user saves an updated data item
                        .Destroy(destroy => destroy.Action("Products_Destroy", "Home")) // Action invoked when the user removes a data item
                  )
                  .Pageable()
            )
1. Build and run the application
![Final result](images/inline-grid.png)

## Display ModelState errors

Server validation is often needed when performing editing. The following tutorial shows how to use the `AddModelError` method with Kendo UI Grid for ASP.NET MVC.

1. Perform all steps from the previous tutorial.
1. Add some validation code to the "Products_Update" method. For example check the length of the `ProductName` property.

        public ActionResult Products_Update([DataSourceRequest]DataSourceRequest request, ProductViewModel product)
        {
            if (product.ProductName.Length < 3)
            {
                ModelState.AddModelError("ProductName", "ProductName should be at least three characters long.");
            }
            if (ModelState.IsValid)
            {
                using (var northwind = new NorthwindEntities())
                {
                    // Create a new Product entity and set its properties from the posted ProductViewModel
                    var entity = new Product
                    {
                        ProductID = product.ProductID,
                                  ProductName = product.ProductName,
                                  UnitsInStock = product.UnitsInStock
                    };

                    // Attach the entity
                    northwind.Products.Attach(entity);
                    // Change its state to Modified so Entity Framework can update the existing product instead of creating a new one
                    northwind.Entry(entity).State = EntityState.Modified;

                    // Or use ObjectStateManager if using a previous version of Entity Framework
                    // northwind.ObjectStateManager.ChangeObjectState(entity, EntityState.Modified);

                    // Update the entity in the database
                    northwind.SaveChanges();
                }
            }
            // Return the updated product. Also return any validation errors.
            return Json(new[] { product }.ToDataSourceResult(request, ModelState));
        }
1. Subscribe to the [error](/api/framework/datasource#events-error) event of the data source. It is fired when there are model state errors or some other unexpected problem occurred when making the ajax request.
In the event handler display the errors and call the [cancelChanges](/api/web/grid#methods-cancelChanges) method of the grid.
    - Index.aspx (ASPX)

            <%: Html.Kendo().Grid<KendoGridAjaxEditing.Models.ProductViewModel>()
                  .Name("grid")
                  .Columns(columns =>
                  {
                      columns.Bound(product => product.ProductID).Width(100);
                      columns.Bound(product => product.ProductName);
                      columns.Bound(product => product.UnitsInStock).Width(250);
                      columns.Command(commands =>
                      {
                          commands.Edit();
                          commands.Destroy();
                      }).Title("Commands").Width(200);
                  })
                  .ToolBar(toolbar => toolbar.Create())
                  .Editable(editable => editable.Mode(GridEditMode.InLine))
                  .DataSource(dataSource =>
                      dataSource.Ajax()
                        .Events(events => events.Error("grid_error")) // Handle the "error" event
                        .Model(model =>
                        {
                            model.Id(product => product.ProductID);
                            model.Field(product => product.ProductID).Editable(false);
                        })
                        .Create(create => create.Action("Products_Create", "Home"))
                        .Read(read => read.Action("Products_Read", "Home"))
                        .Update(update => update.Action("Products_Update", "Home"))
                        .Destroy(destroy => destroy.Action("Products_Destroy", "Home"))
                  )
                  .Pageable()
            %>
            <script>
            function grid_error(e) {
                if (e.errors) {
                    var message = "There are some errors:\n";
                    // Create a message containing all errors.
                    $.each(e.errors, function (key, value) {
                        if ('errors' in value) {
                            $.each(value.errors, function () {
                                message += this + "\n";
                            });
                        }
                    });
                    // Display the message
                    alert(message);
                    // Cancel the changes
                    var grid = $("#grid").data("kendoGrid");
                    grid.cancelChanges();
                }
            }
            </script>
    - Index.cshtml (Razor)

            @(Html.Kendo().Grid<KendoGridAjaxEditing.Models.ProductViewModel>()
                  .Name("grid")
                  .Columns(columns =>
                  {
                      columns.Bound(product => product.ProductID).Width(100);
                      columns.Bound(product => product.ProductName);
                      columns.Bound(product => product.UnitsInStock).Width(250);
                      columns.Command(commands =>
                      {
                          commands.Edit();
                          commands.Destroy();
                      }).Title("Commands").Width(200);
                  })
                  .ToolBar(toolbar => toolbar.Create())
                  .Editable(editable => editable.Mode(GridEditMode.InLine))
                  .DataSource(dataSource =>
                      dataSource.Ajax()
                        .Events(events => events.Error("grid_error")) // Handle the "error" event
                        .Model(model =>
                        {
                            model.Id(product => product.ProductID);
                            model.Field(product => product.ProductID).Editable(false);
                        })
                        .Create(create => create.Action("Products_Create", "Home"))
                        .Read(read => read.Action("Products_Read", "Home"))
                        .Update(update => update.Action("Products_Update", "Home"))
                        .Destroy(destroy => destroy.Action("Products_Destroy", "Home"))
                  )
                  .Pageable()
            )
            <script>
            function grid_error(e) {
                if (e.errors) {
                    var message = "There are some errors:\n";
                    // Create a message containing all errors.
                    $.each(e.errors, function (key, value) {
                        if ('errors' in value) {
                            $.each(value.errors, function () {
                                message += this + "\n";
                            });
                        }
                    });
                    // Display the message
                    alert(message);
                    // Cancel the changes
                    var grid = $("#grid").data("kendoGrid");
                    grid.cancelChanges();
                }
            }
            </script>

---
title: Custom binding
meta_title: Binding a Kendo UI HierarchicalDataSource component
meta_description: See how to fetch custom hierarchical data and represent it in a HierarchicalDataSource.
slug: hierarchicaldatasource-custom-binding
publish: true
---

# Custom binding of the HierarchicalDataSource

## Binding through a custom transport

If you have a way of fetching data that cannot be achieved through the default [dataSource transport configuration](/api/framework/hierarchicaldatasource#configuration-transport), you can provide a [custom read function](/api/framework/datasource#configuration-transport.read) that fetches the data and delivers them to the datasource (the so-called "custom transport"). This enables you to query different URLs conditionally, or provide generated authentication tokens for each request.

    <script>
    var datasource = new kendo.data.HierarchicalDataSource({
      transport: {
        read: function(options) {
          var id = options.data.EmployeeId;

          // [additional processing here]

          $.ajax({
            url: "http://demos.kendoui.com/service/employees",
            dataType: "jsonp", // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
            data: { EmployeeId: id },
            success: function(result) {
              // notify the data source that the request succeeded
              options.success(result);
            },
            error: function(result) {
              // notify the data source that the request failed
              options.error(result);
            }
          });
        }
      },
      schema: {
        model: {
          id: "EmployeeId",
          hasChildren: "HasEmployees"
        }
      }
    });

    datasource.read();
    </script>


## Fetching a complete hierarchy though a single request

Because the HierarchicalDataSource loads data on demand, loading all available data can result in multiple requests to the server. In order to prevent this, you can make a single AJAX request to get all the data, and then provide it to the datasource.

    <script>
    var datasource = new kendo.data.HierarchicalDataSource();

    // asynchonous operation for getting data (e.g. $.ajax)
    setTimeout(function() {
      var data = [
        { id: 1, Name: "Tea", items: [
          { id: 2, Name: "Earl Gray" },
          { id: 3, Name: "Oolong" }
        ] }
      ];

      datasource.data(data);

      var rootItems = datasource.data();

      console.log(rootItems.length); // logs 1

      rootItems[0].load(); // does not initiate AJAX request

      console.log(rootItems[0].children.data().length); // logs 2
    }, 1000);
    </script>

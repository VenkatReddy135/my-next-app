---
title: dataSource-filterItem
slug: jsp-dataSource-filterItem
tags: api, java
publish: true
---

# \<kendo:dataSource-filterItem\>

The filter(s) which is (are) applied over the data items. By default no filter is applied.

#### Example
    <kendo:dataSource-filter>
        <kendo:dataSource-filterItem></kendo:dataSource-filterItem>
    </kendo:dataSource-filter>

## Configuration Attributes

### field `java.lang.String`

The data item field to which the filter operator is applied.

#### Example
    <kendo:dataSource-filterItem field="field">
    </kendo:dataSource-filterItem>

### logic `java.lang.String`

The logical operation to use when the filter.filters option is set. The supported values are "and" and "or".

#### Example
    <kendo:dataSource-filterItem logic="logic">
    </kendo:dataSource-filterItem>

### operator `java.lang.String`

The filter operator (comparison). The supported operators are: "eq" (equal to), "neq" (not equal to), "lt" (less than), "lte" (less than or equal to), "gt" (greater than), "gte" (greater than or equal to),
"startswith", "endswith", "contains". The last three are supported only for string fields.

#### Example
    <kendo:dataSource-filterItem operator="operator">
    </kendo:dataSource-filterItem>

### value `java.lang.Object`

The value to which the field is compared. The value must be from the same type as the field.

#### Example
    <kendo:dataSource-filterItem value="value">
    </kendo:dataSource-filterItem>


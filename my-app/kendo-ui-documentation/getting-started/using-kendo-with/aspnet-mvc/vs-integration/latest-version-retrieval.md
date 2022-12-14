---
title: Latest Version Retrieval
slug: mvc-vsx-lva
publish: true
---

#Automatic Latest Version Retrieval

With the Kendo UI for ASP.NET MVC Visual Studio Extensions you keep your projects in an up-to-date state. The Latest Version Acquirer tool automatically retrieves the latest Kendo UI for ASP.NET MVC distribution available on the Telerik website. Running the **Upgrade Wizard** as a next step makes the task of latest Kendo UI for ASP.NET MVC version utilization extremely easy.

Once a day, upon Visual Studio launch, the extensions query the Telerik website for a new version of Kendo UI for ASP.NET MVC. A notification gets displayed when a new version is discovered:

![Notification](images/notification.png)
 
> **Note:**
If you've disabled the notifications, you can use the Options Dialog to activate them again.

Clicking the **Get Now** button starts the Latest Version Acquirer tool, prompting for your Telerik credentials in its first page. If you do not have www.telerik.com account, you can create one through the **Register** link.
 
![Get latest version](images/lva1.png)

>**Important:**
You cannot use the tool if you only have a Trial License (attempt to download a distribution would result in an error message if you don’t have a Dev License).

You can check the additional information about the release by clicking the Release Notes link. This will start a browser, navigated to a page with the release notes related to the specific version.

You can use the **Save my password** checkbox to avoid having to enter your Telerik credentials multiple times. The persistence is done in a secure manner and credentials are saved in a per-user context. Other users on the machine do not have access to your stored credentials.

The download starts automatically after a confirmation window.
 
![Get latest version](images/lva2.png)
![Get latest version](images/lva3.png)
![Get latest version](images/lva4.png)
 
Once the download succeeds, the latest version of Kendo UI for ASP.NET MVC will be available for use in the **Upgrade Wizard** and the **New Project Wizard**.

>**Tip:**
The Download buttons of the Upgrade Wizard and the New Project Wizard launch the Latest Version Acquirer tool too.

>**Note:**
The Latest Version Acquirer tool downloads the zip files, containing the latest Kendo UI for ASP.NET MVC binaries and any resources vital for a Kendo UI for ASP.NET MVC Application. These get unpacked to the **%APPDATA%\Telerik\Updates** folder by default.
If you find the list of packages offered too long and you don't need the older versions, you can close Visual Studio and use Windows Explorer to delete these distributions.

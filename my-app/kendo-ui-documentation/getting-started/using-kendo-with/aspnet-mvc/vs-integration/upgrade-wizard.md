---
title: Upgrade Wizard
slug: mvc-vsx-upgrade-wizard
publish: true
---

#Upgrade Wizard

This help topic shows how to upgrade a Kendo UI for ASP.NET MVC Application.

The Upgrade Wizard has two main purposes:

- Check and retrieve the latest available Kendo UI for ASP.NET MVC  release
- Change the version of Kendo UI for ASP.NET MVC in the projects in the solution use.

The Upgrade Wizard can be launched from **Visual Studio | Telerik | Kendo UI for ASP.NET MVC | Upgrade Wizard**
  
![Choose projects](images/upgrade_menu.png)

##Choose which projects will be updated 

![update Project Resources](images/upgrade1.png)

The page allows you to configure the following options:

- **Version** - Select from all versions that have been previously installed or downloaded using the VS Extensions
- **Add referenced assemblies to solution** - Choose whether to copy referenced assemblies to your solution folder. The assemblies will automatically get added to source control when using Microsoft Team Foundation Server
- **Download** – Launch the Latest Version Acquirer tool
- **Browse** - Browse to a location where the new version is manually downloaded and extracted
- **Choose Projects** - Choose which projects will be updated (it is recommended to keep all Telerik projects the same version)
  
> **Note:**
The distribution, downloaded by the Upgrade Wizard contains only the "hotfix" files, e.g. the bare bone files, needed for a project to run correctly. It does not contain the documentation or the demo project.

> **Note:**
The listed projects use Kendo UI for ASP.NET MVC 4. If the solution contains any projects which use Kendo UI for ASP.NET MVC for other MVC version, they will be displayed on a separate page. When you complete the wizard all selected projects from the different pages will be updated.

##Update Project Resources

![Update Project Resources](images/upgrade2.png)

The Update Project Resources page allows you to:

- **Update Editor Templates** - Update the editor templates in ~/Views/Shared/EditorTemplates

##Create Backup

![Create Backup](images/upgrade3.png)

The **Create Backup** page allows you to:

- **Create a backup before converting** - backup your projects before upgrading it
- **Backup location** - specify the backup folder
- **Show upgrade log when the Upgrade Wizard finishes the update** - display the upgrade log after the Upgrade Wizard finishes

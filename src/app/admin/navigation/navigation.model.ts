import { User } from "../../models/models";
export class NavigationModel {
  public model: any[];

  constructor() {
    let user: User = JSON.parse(localStorage.getItem("currentUser"));
    console.log("role ID: " + user.roleId);
    this.model = [
      {
        id: "analytics",
        title: "Dashboard",
        type: 'collapse',
        icon: "network_check",
        role: 'admin',
        children: [
          {
            id: 'crowd',
            title: 'Charts Boards',
            type: 'item',
            icon: 'pie_chart',
            url: 'analysis/crowd'
          }
        ]
      },
  
      {
        id: 'project',
        title: 'Project',
        type: 'collapse',
        icon: 'lock',
        role: 'admin',
        children: [
          {
            id: 'create',
            title: 'Create',
            type: 'item',
            icon: 'call_made',
            url: 'project/create'
          },
        ]
      },
      {
        id: "property",
        title: "Property",
        type: "collapse",
        icon: "device_hub",
        role: "admin",
        children: [
          {
            id: "create",
            title: "Create",
            type: "item",
            icon: "add_circle",
            url: "property/create"
          },
          {
            id: "view",
            title: "View",
            type: "item",
            icon: "view_module",
            url: "property/view"
          }
        ]
      },
      {
        id: "users",
        title: "Users",
        type: "collapse",
        icon: "person",
        role: 'admin',
        children: [
          {
            id: 'users',
            title: 'Customers',
            type: 'item',
            icon: 'view_module',
            url: 'users/list'
          },
          {
            id: 'users',
            title: 'Verified Customers',
            type: 'item',
            icon: 'view_module',
            url: 'users/verifiedlist'
          },
          {
            id: 'users',
            title: 'Contacted',
            type: 'item',
            icon: 'view_module',
            url: 'users/contacted'
          },
          {
            id: 'users',
            title: 'Instalments',
            type: 'item',
            icon: 'view_module',
            url: 'users/instalments'
          }
        ]
      },
      {
        id: "agent",
        title: "Agent",
        type: "collapse",
        icon: "person",
        role: 'admin',
        children: [
          {
            id: 'agent',
            title: 'Create',
            type: 'item',
            icon: 'view_module',
            url: 'agent/create'
          }
        ]
      },
      {
        id: 'registry',
        title: 'Sales',
        type: 'collapse',
        icon: 'lock',
        role: 'admin',
        children: [
          {
            id: 'request',
            title: 'Buy Request',
            type: 'item',
            icon: 'call_made',
            url: 'registry/request'
          },
          {
            id: 'history',
            title: 'Transfer History',
            type: 'item',
            icon: 'call_received',
            url: 'registry/history'
          },
          {
            id: 'records',
            title: 'Land Registry/Records',
            type: 'item',
            icon: 'view_module',
            url: 'registry/records'
          }
        ]
      },
      {
        id: "marketplace",
        title: "Marketplace (Resales)",
        type: 'collapse',
        icon: "network_check",
        url: "marketplace",
        role: 'admin',
        children: [
          {
            id: 'marketplace',
            title: '(Resales)',
            type: 'item',
            icon: 'call_made',
            url: 'registry/request'
          },
        ]
      },
      {
        id: "marketplace",
        title: "Wallet",
        type: 'collapse',
        icon: "network_check",
        url: "marketplace",
        role: 'admin',
        children: [
          {
            id: 'marketplace',
            title: '(Resales)',
            type: 'item',
            icon: 'call_made',
            url: 'registry/request'
          },
        ]
      },
      {
        id: "marketplace",
        title: "Administration",
        type: 'collapse',
        icon: "network_check",
        url: "marketplace",
        role: 'admin',
        children: [
          {
            id: 'marketplace',
            title: '(Resales)',
            type: 'item',
            icon: 'call_made',
            url: 'registry/request'
          },
        ]
      },
      {
        id: "license",
        title: "Reports",
        type: "collapse",
        icon: "domain",
        role: "admin",

        children: [
          {
            id: 'create',
            title: 'Create',
            type: 'item',
            icon: 'add_circle',
            url: 'builders/create'
          }
        ]
      },
      {
        id: "license",
        title: "Analytics",
        type: "collapse",
        icon: "domain",
        role: "admin",
        children: [
          {
            id: 'view',
            title: 'View',
            type: 'item',
            icon: 'view_module',
            url: 'builders/view'
          },
        ]
      },
      {
        id: "settings",
        title: "Settings",
        type: "collapse",
        icon: "domain",
        role: "admin",

        children: [
          {
            id: 'settings',
            title: 'Coupons',
            type: 'item',
            icon: 'add_circle',
            url: 'settings/coupons/listcoupons'
          },
          {
            id: 'settings',
            title: 'Project Type',
            type: 'item',
            icon: 'view_module',
            url: 'settings/projecttype/list'
          },
          {
            id: 'settings',
            title: 'Property Type',
            type: 'item',
            icon: 'add_circle',
            url: 'settings/propertytype/list'
          },
          {
            id: 'settings',
            title: 'Tax',
            type: 'item',
            icon: 'view_module',
            url: 'settings/taxation/list'
          },
          {
            id: 'settings',
            title: 'Status',
            type: 'item',
            icon: 'add_circle',
            url: 'settings/status/list'
          },
          {
            id: 'settings',
            title: 'Configuration',
            type: 'item',
            icon: 'view_module',
            url: 'settings/config/list'
          },
          {
            id: 'settings',
            title: 'Period',
            type: 'item',
            icon: 'add_circle',
            url: 'settings/periods/list'
          },
          {
            id: 'settings',
            title: 'Contracts',
            type: 'item',
            icon: 'add_circle',
            url: 'settings/saf'
          }
        ]
      }
    ];
  }
}

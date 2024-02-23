// import Breadcrumbs, { BreadcrumbParams } from "@/components/breadcrumbs/breadcrumbs";
import { SideNavSetting, SideNavGroup } from "@/components/side-nav/side-nav.component";


export default function SettingsLayout({ children }: { children: any }) {

  let navigation: SideNavGroup[] = [
    {
      name: 'Admin',
      items: [
        {
          name: 'Roles & Permissions',
          url: `/settings/roles-permissions`,
          icon: 'fad fa-user',
        }
      ]
    },
    {
      name: 'Forms',
      items: [
        {
          name: 'Forms',
          url: `/settings/forms`,
          icon: 'fad fa-user',
        }
      ]
    },
    {
      name: 'Lists',
      items: [
        {
          name: 'Departments',
          url: `/settings/departments`,
          icon: 'fad fa-door-open',
        },
        {
          name: 'Business Lines',
          url: `/settings/business-lines`,
          icon: 'fad fa-credit-card',
        }, {
          name: 'Job Titles',
          url: `/settings/job-titles`,
          icon: 'fad fa-credit-card',
        },
        {
          name: 'Field Offices',
          url: `/settings/field-offices`,
          icon: 'fad fa-history',
        }
      ]
    },
  ];

  // var breadCrumbParams: BreadcrumbParams = {
  //   homeIcon: ['fad', 'fa-gears'],
  //   homeLinkUrl: `/settings`,
  //   pages: [
  //     { name: 'Settings', url: `/settings` },
  //   ]
  // };


  return <>
    {/* <Breadcrumbs {...breadCrumbParams} /> */}

    <div className="relative flex flex-1 h-full overflow-hidden">
      <aside className="relative flex-shrink-0 hidden overflow-y-auto bg-gray-200 border-l border-gray-200 xl:flex xl:flex-col w-72 ">
        <div className="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
          <SideNavSetting
            items={navigation}
          />
        </div>
        {/* End secondary column */}
      </aside>
      <main className=" flex-1 relative focus:outline-none rounded-md">
        <div className="h-full">
          {children}
        </div>
      </main>
    </div>

  </>
}

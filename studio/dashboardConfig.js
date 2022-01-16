export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e49a743eccb1b8a9798fa3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mb9ry6pa',
                  apiId: 'ba5e8aa3-bc3f-417a-9a51-abde1619e0d2'
                },
                {
                  buildHookId: '61e49a74af98a27d3e87e23c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1botw8gb',
                  apiId: '3a1bbc4b-4b16-4c9c-b750-0ab978038027'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshuasprow/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1botw8gb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

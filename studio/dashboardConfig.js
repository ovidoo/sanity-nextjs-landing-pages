export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5d5fcba32504f6a7a3e2695d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dtfp3pk3',
                  apiId: '15d24fce-1f51-4345-825c-823c1d75edb8'
                },
                {
                  buildHookId: '5d5fcba42504f6b436e26956',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c9psyevz',
                  apiId: 'db7245b7-8e82-41f8-89d1-361b719e86d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ovidoo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c9psyevz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

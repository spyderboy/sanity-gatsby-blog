export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e682519df1e75fb3fdd989f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-d5cdhqoy',
                  apiId: '2d3a5781-4aac-4815-afbf-a65b50298e2c'
                },
                {
                  buildHookId: '5e68251979446d1b0a1fa9d3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1s2w3jc9',
                  apiId: 'ddc637ba-70a5-4758-864d-f1fb4e339774'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spyderboy/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1s2w3jc9.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

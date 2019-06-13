export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d022d7b79ad3316a9a2c8aa',
                  title: 'Sanity Studio',
                  name: 'gatsby-portfolio-studio',
                  apiId: '78d498f3-7843-447f-b9b3-e5c6b61a8779'
                },
                {
                  buildHookId: '5d022d7c72e69eb481909839',
                  title: 'Portfolio Website',
                  name: 'gatsby-portfolio-web',
                  apiId: '921259be-1204-4382-8042-db8890ea68c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simmco/gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://gatsby-portfolio-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}

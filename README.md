{
    name: 'users',
    title: 'Users',
    hasSiderLink: true,
    routes: [
      {
        name: 'list-users',
        title: 'List of users',
        hasSiderLink: true,
        component: <div />,
        path: '/users',
      },
      {
        name: 'create-user',
        title: 'Add user',
        hasSiderLink: true,
        component: <div />,
        path: '/users/new',
      },
    ],
  },
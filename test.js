export const adminPaths = [
  {
    name: 'Dashboard',
    path: '/admin/dashboard',
    element: 'ADMIN_DASHBOARD',
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: '/admin/create-admin',
        element: 'CREATE_ADMIN',
      },
      {
        name: 'Create Faculty',
        path: '/admin/create-faculty',
        element: 'CREATE_FACULTY',
      },
      {
        name: 'Create Student',
        path: '/admin/create-student',
        element: 'CREATE_STUDENT',
      },
    ],
  },
];

const adminRoutes = adminPaths.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);

console.log(adminRoutes);

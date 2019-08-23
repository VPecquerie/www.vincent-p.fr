import { Route } from '@angular/router';

export const routes: Route[] = [
    {
        path: 'admin/account',
        loadChildren: () => import('./pages/admin/account/admin-account.page')
            .then(m => m.AdminAccountPage),
    },
    {
        path: 'admin/blog/articles/create',
        loadChildren: () => import('./pages/admin/blog/articles/create/admin-blog-articles-create.page')
            .then(m => m.AdminBlogArticlesCreatePage),
    },
    {
        path: 'admin/blog/articles',
        loadChildren: () => import('./pages/admin/blog/articles/list/admin-blog-articles-list.page')
            .then(m => m.AdminBlogArticlesListPage),
    },
    {
        path: 'admin/dashboard',
        loadChildren: () => import('./pages/admin/dashboard/admin-dashboard.page')
            .then(m => m.AdminDashboardPage),
    },
    {
        path: 'admin/experiences/create',
        loadChildren: () =>
            import('./pages/admin/experiences/create/admin-experiences-create.page')
                .then(m => m.AdminExperiencesCreatePage),
    },
    {
        path: 'admin/experiences',
        loadChildren: () =>
            import('./pages/admin/experiences/list/admin-experiences-list.page')
                .then(m => m.AdminExperiencesListPage),
    },
    {
        path: 'admin/login',
        loadChildren: () =>
            import('./pages/admin/login/admin-login.page')
                .then(m => m.AdminLoginPage),
    },
    {
        path: 'admin/skills/create',
        loadChildren: () =>
            import('./pages/admin/skills/create/admin-skills-create.page')
                .then(m => m.AdminSkillsCreatePage),
    },
    {
        path: 'admin/skills',
        loadChildren: () =>
            import('./pages/admin/skills/list/admin-skills-list.page')
                .then(m => m.AdminSkillsListPage),
    },
    {
        path: 'admin/trainings/create',
        loadChildren: () =>
            import('./pages/admin/trainings/create/admin-trainings-create.page')
                .then(m => m.AdminTrainingsCreatePage),
    },
    {
        path: 'admin/trainings',
        loadChildren: () =>
            import('./pages/admin/trainings/list/admin-trainings-list.page')
                .then(m => m.AdminTrainingsListPage),
    },
    {
        path: 'blog/articles',
        loadChildren: () =>
            import('./pages/blog/detail-article/blog-detail-article.page')
                .then(m => m.BlogDetailArticlePage),
    },
    {
        path: 'blog',
        loadChildren: () =>
            import('./pages/blog/list-articles/blog-list-articles.page')
                .then(m => m.BlogListArticlesPage),
    },
    {
        path: '',
        loadChildren: () =>
            import('./pages/home/home.page')
                .then(m => m.HomePage),
    },
    {
        path: '**',
        loadChildren: () =>
            import('./pages/errors/not-found/errors-not-found.page')
                .then(m => m.ErrorsNotFoundPage),
    },
];


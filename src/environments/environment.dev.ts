export const environment = {
    production: false,
    environmentName: 'Dev',
    zipkinServiceName: 'budget-bites-ui-dev',
    apiUrl: 'https://dev.budget-bites', // Base Url for entire http calls
    allowedDomains: ['dummyjson.com'], // Allow tokens for listed Domain URL
    disallowedRoutes: ["https://dummyjson.com/products/2"] // Block tokens for listed api routes
};

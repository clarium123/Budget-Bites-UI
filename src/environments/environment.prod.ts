export const environment = {
    production: true,
    environmentName: 'Prod',
    zipkinServiceName: 'budget-bites-ui-prod',
    apiUrl: 'https://app.budget-bites', // Base Url for entire http calls
    allowedDomains: ['dummyjson.com'], // Allow tokens for listed Domain URL
    disallowedRoutes: ["https://dummyjson.com/products/2"] // Block tokens for listed api routes
};
export const environment = {
    production: true,
    environmentName: 'local',
    zipkinServiceName: 'budget-bites-ui-local',
    apiUrl: 'https://localhost:8080', // Base Url for entire http calls
    allowedDomains: ['dummyjson.com'], // Allow tokens for listed Domain URL
    disallowedRoutes: ["https://dummyjson.com/products/2"] // Block tokens for listed api routes
};

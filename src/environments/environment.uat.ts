export const environment = {
    production: false,
    environmentName: 'UAT',
    zipkinServiceName: 'budget-bites-ui-uat',
    apiUrl: 'https://budget-bites.clarium.tech', // Base Url for entire http calls
    allowedDomains: ['https://budget-bites.clarium.tech'], // Allow tokens for listed Domain URL
    disallowedRoutes: ["https://dummyjson.com/products/2"] // Block tokens for listed api routes
};

export const environment = {
    production: false,
    environmentName: 'QA',
    zipkinServiceName: 'budget-bites-ui-qa',
    apiUrl: 'https://qa.budget-bites', // Base Url for entire http calls
    allowedDomains: ['https://budget-bites.clarium.tech'], // Allow tokens for listed Domain URL
    disallowedRoutes: ["https://dummyjson.com/products/2"] // Block tokens for listed api routes
};
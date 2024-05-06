export const environment = {
    production: true,
    environmentName: 'local',
    zipkinServiceName: 'budget-bites-ui-local',
    apiUrl: "https://budget-bites.azurewebsites.net", // Base Url for entire http calls
    llmApiUrl: "https://bbllmapi.azurewebsites.net",
    allowedDomains: ['dummyjson.com'], // Allow tokens for listed Domain URL
    disallowedRoutes: ["https://dummyjson.com/products/2"] // Block tokens for listed api routes
};

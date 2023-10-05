export const capitalize = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export const snakeCaseToCamelCase = (value: string) => {
    return value.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2').toLowerCase();
}

export const camelCaseToSnakeCase = (value: string) => {
    return value.replace(/([-_]\w)/g, g => g[1].toUpperCase());
}
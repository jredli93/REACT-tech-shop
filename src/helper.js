// capitalize first letter
export const capitalize = text => text[0].toUpperCase() + text.slice(1);

// remove commas from number
export const flatNumber = num => num.split(',').join('');


// Exports & Imports (Modules)

// person.js
const person = {
    name : 'Max'
}
export default person; // default export

// utility.js
export const clean = () => { /* ... */ }
export const baseData = 10; // named export

// app.js
import person from './person.js';
import prs from './person.js';

import { baseData } from 'utility.js';
import { clean } from 'utility.js';

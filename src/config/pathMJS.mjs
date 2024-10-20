import path from 'path'
import { fileURLToPath } from 'url'; // instead of __dirname in CommonJS

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default __dirname
import { getStructure } from "./vk-structure.js";
import { keys } from "./keys.js";

const keyboard = getStructure(keys);
document.body.append(keyboard);

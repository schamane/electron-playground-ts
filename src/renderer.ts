// import * as PIXI from "pixi.js";
// const app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });

import { Engine } from "./engine/index";

const t = new Engine("name1", 2);
console.log(t.someFunc("X"));

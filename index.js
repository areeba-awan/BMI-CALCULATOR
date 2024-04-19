#! /usr/bin/env node
import chalk from "chalk";
let weightInKg = 70; // 70 kg
let heightInMeters = 1.75; // 1.75m
let bmi = weightInKg / (heightInMeters * heightInMeters);
// Print the answer 
console.log(chalk.bgBlue(`Your BMi is ${bmi}`));

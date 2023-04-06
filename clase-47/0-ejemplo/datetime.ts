import { parse } from 'https://deno.land/std@0.182.0/datetime/mod.ts'

const myDate = parse("21-04-1999", "dd-mm-yyyy")

console.log(myDate);

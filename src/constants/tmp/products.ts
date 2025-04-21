import { macarons } from "./catalog/macarons";
import { cakes } from "./catalog/cakes";
import { pays } from "./catalog/pays";
import { others } from "./catalog/others";

export const products = [...macarons, ...cakes, ...pays, ...others];

import pokemon from './pokemon'
import typeDamage from "./typeDamage";
import type from "./type";

export default [
  { path: "/pokemon", router: pokemon },
  { path: "/type", router: type },
  { path: "/typeDamage", router: typeDamage },
];

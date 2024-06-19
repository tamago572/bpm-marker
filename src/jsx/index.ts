// @include './lib/json2.js'

import { ns } from "../shared/shared";

import * as ppro from "./ppro/ppro";

//@ts-ignore
const host = typeof $ !== "undefined" ? $ : window;

switch (BridgeTalk.appName as ApplicationName) {
  case "premierepro":
  case "premiereprobeta":
    host[ns] = ppro;
    break;
}

export type Scripts = typeof ppro

// https://extendscript.docsforadobe.dev/interapplication-communication/bridgetalk-class.html?highlight=bridgetalk#appname
type ApplicationName =
  | "aftereffects"
  | "aftereffectsbeta"
  | "ame"
  | "amebeta"
  | "audition"
  | "auditionbeta"
  | "bridge"
  | "bridgebeta"
  // | "flash"
  | "illustrator"
  | "illustratorbeta"
  | "indesign"
  | "indesignbeta"
  // | "indesignserver"
  | "photoshop"
  | "photoshopbeta"
  | "premierepro"
  | "premiereprobeta";

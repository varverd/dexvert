import {Format} from "../../Format.js";

export class iim extends Format
{
	name       = "InShape 3D IIM";
	website    = "http://fileformats.archiveteam.org/wiki/InShape_IIM";
	ext        = [".iim"];
	magic      = ["InShape IIM bitmap", "deark: iim"];
	converters = ["deark[module:iim]", "recoil2png", "wuimg"];
}

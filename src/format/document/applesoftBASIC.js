import {Format} from "../../Format.js";

export class applesoftBASIC extends Format
{
	name           = "Applesoft BASIC Source Code";
	ext            = [".bas"];
	forbidExtMatch = true;
	magic          = ["Applesoft BASIC program data"];
	unsupported    = true;
}
import {Format} from "../../Format.js";

export class sprEd extends Format
{
	name       = "SprEd Sprite";
	ext        = [".spr"];
	magic      = ["SprEd Sprite"];
	converters = ["recoil2png"];
}
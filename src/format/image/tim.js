import {Format} from "../../Format.js";

export class tim extends Format
{
	name         = "PlayStation TIM";
	website      = "http://fileformats.archiveteam.org/wiki/TIM_(PlayStation_graphics)";
	ext          = [".tim"];
	magic        = ["TIM image", "PSX TIM", "deark: tim"];
	weakMagic    = ["TIM image", "PSX TIM"];
	metaProvider = ["image"];
	converters   = ["convert", "deark[module:tim]", "wuimg", "paintDotNet", "noesis[type:image]", "recoil2png"];
}

import {Format} from "../../Format.js";

export class texPKFont extends Format
{
	name       = "Packed Font File Format";
	website    = "http://fileformats.archiveteam.org/wiki/PK_font";
	ext        = [".pk"];
	filename   = [/\d+pk$/i];
	magic      = [/TeX [Pp]acked font data/];
	converters = ["deark[module:pkfont]"];
}
import {xu} from "xu";
import {Format} from "../../Format.js";

export class neoPaintPattern extends Format
{
	name        = "NeoPaint Pattern";
	ext         = [".pat"];
	magic       = ["NeoPaint Palette"];
	weakMagic   = true;
	unsupported = true;
	notes       = xu.trim`
		While identified via magic as a "NeoPaint Palette" they appear to be "patterns" used as stamps in the MSDOS Neopaint program.
		Short of reverse engineering it, in theory dexvert could convert these to images by opening up DOS Neopaint, selecting the pattern, stamping it or filling a canvas with it and saving the image.
		Don't plan on bothing to actually do that though, it's a relatively obscure program and file format.`;
}

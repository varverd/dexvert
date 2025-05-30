import {Format} from "../../Format.js";

export class rekoCardset extends Format
{
	name       = "REKO Cardset";
	website    = "http://fileformats.archiveteam.org/wiki/REKO_Cardset";
	ext        = [".reko", ".deck", ".rkp"];
	magic      = [/^REKO .*cardset/, "Reko CardSet", "deark: reko (REKO cardset"];
	converters = ["deark[module:reko]", "reko2png"];
}

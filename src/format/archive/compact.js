import {Format} from "../../Format.js";

export class compact extends Format
{
	name       = "Compact Compressed (Unix)";
	website    = "http://fileformats.archiveteam.org/wiki/Compact_(Unix)";
	ext        = [".c"];
	magic      = ["compacted data", "Compact compressed data", "C: Compact", "Archive: Compact"];
	packed     = true;
	converters = ["ancient"];
}

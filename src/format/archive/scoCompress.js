import {Format} from "../../Format.js";

export class scoCompress extends Format
{
	name       = "SCO Compress";
	website    = "http://fileformats.archiveteam.org/wiki/SCO_compress_LZH";
	safeExt    = ".gz";
	magic      = ["SCO compress"];
	packed     = true;
	converters = ["gunzip"];
}
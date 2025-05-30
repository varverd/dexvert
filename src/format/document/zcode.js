import {Format} from "../../Format.js";

export class zcode extends Format
{
	name       = "Z-code for Z-machine";
	website    = "http://fileformats.archiveteam.org/wiki/Z-code";
	ext        = [].pushSequence(1, 8).map(v => `.z${v}`);
	magic      = [/Infocom .*Z-machine/, "Z-Code V"];
	idMeta     = ({macFileType, macFileCreator}) => macFileType==="ZCOD" && macFileCreator==="mxZR";
	filename   = [/^STORY\d+$/];
	weakMagic  = true;
	converters = ["unZCode"];
}

import {Format} from "../../Format.js";

export class appleDOSDiskImage extends Format
{
	name           = "Apple DOS Disk Image";
	ext            = [".dsk"];
	forbidExtMatch = true;
	magic          = [/^Apple DOS .*Image/, /^Apple II DOS .*disk image/];
	converters     = ["acx"];
}
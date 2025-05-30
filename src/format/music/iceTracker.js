import {Format} from "../../Format.js";

export class iceTracker extends Format
{
	name           = "Ice Tracker Module";
	website        = "http://fileformats.archiveteam.org/wiki/Soundtracker_v2.6_/_Ice_Tracker_module";
	ext            = [".it"];
	forbidExtMatch = [".it"];
	magic          = ["IceTracker module"];
	priority       = this.PRIORITY.LOW;
	metaProvider   = ["musicInfo"];
	converters     = ["xmp", "uade123", "zxtune123", "openmpt123"];
}

import {Format} from "../../Format.js";

export class soundFont2 extends Format
{
	name           = "SoundFont 2.0";
	website        = "http://fileformats.archiveteam.org/wiki/SoundFont_2.0";
	ext            = [".sf2", ".sbk", ".arl"];
	forbidExtMatch = [".arl"];
	magic          = [
		// generic
		/^RIFF \(little-endian\) data,? SoundFont\/Bank/, "Standard SoundFont", "EMU SoundFont bank", "SoundFont 2.0", "RIFF audio data (SoundFont 2.0)", "Generic RIFF file sfbk",
	
		// specific
		"Aureal Aspen sound bank"
	];
	forbiddenMagic = ["Emu Sound Font (v1.0)"];
	converters     = ["soundFont2tomp3", "awaveStudio[matchType:magic]"];
}

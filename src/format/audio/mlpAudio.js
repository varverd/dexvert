import {Format} from "../../Format.js";

export class mlpAudio extends Format
{
	name         = "Dolby Lossless Predictive Audio";
	website      = "https://wiki.multimedia.cx/index.php?title=Lossless_Predictive_Audio_Coding";
	ext          = [".mlp"];
	magic        = [/^fmt\/972( |$)/];
	metaProvider = ["ffprobe"];
	converters   = ["ffmpeg[outType:mp3]"];
}
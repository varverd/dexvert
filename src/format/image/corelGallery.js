import {Format} from "../../Format.js";

export class corelGallery extends Format
{
	name       = "Corel Gallery";
	website    = "http://justsolve.archiveteam.org/wiki/Corel_Gallery";
	ext        = [".bmf", ".gal"];
	magic      = ["Corel Binary Material Format", "Corel GALLERY Clipart", /^fmt\/1413( |$)/];
	converters = ["deark", "nconvert"];
	notes      = "Only the thumbnail is extracted, the actual vector file doesn't have a known converter (except Corel Gallery itself of course).";
}
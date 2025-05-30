import {Format} from "../../Format.js";

export class wordDoc extends Format
{
	name           = "Word Document";
	website        = "http://fileformats.archiveteam.org/wiki/DOC";
	ext            = [".doc", ".dot"];
	forbidExtMatch = true;
	magic          = ["Microsoft WinWord", "Microsoft Word document", "Microsoft Word for Windows", "CDFV2 Microsoft Word", "Format: MS Office 97-2003", "Format: Microsoft Word 2 document", "Archive: Microsoft Compound(MS Office",
		"Microsoft Office XML Flat File Format Word Document",
		/^Microsoft Word [\d.]+ Document/, /^fmt\/(37|38|39|40|599|609|754|755)( |$)/, /^x-fmt\/45( |$)/];
	idMeta     = ({macFileType, macFileCreator}) => ["BINA", "PDBN", "W7BN", "W8BN", "W8TN", "WTBN"].includes(macFileType) && macFileCreator==="MSWD";
	converters = [
		"soffice[format:MS Word 97]", "soffice[format:MS Word 95]", "soffice[format:MS WinWord 6.0]", "soffice[format:MS WinWord 5]",
		"fileMerlin", "keyViewPro[outType:pdf]", "wordForWord[matchType:magic][hasExtMatch]",
		"antiword"
	];
	processed = dexState =>
	{
		Object.assign(dexState.meta, dexState.ran.find(({programid}) => programid==="antiword")?.meta || {});
		if(dexState.meta.passwordProtected)
		{
			// can't do this in a 'untouched' callback because this meta data isn't available until after antiword converter has ran and the untouched method is called before converters
			dexState.untouched = true;
			return true;
		}

		return false;
	};
}

import {xu} from "xu";
import {Program} from "../../Program.js";
import {path} from "std";

export class qt_flatt extends Program
{
	website      = "https://www.macdisk.com/quickten.php";
	unsafe       = true;
	loc          = "winxp";
	flags   = {
		chainAs : "Chain as a particular format"
	};
	checkForDups = true;
	bin          = "c:\\out\\QT-FLATT.BAT";
	osData       = r => ({
		dontMaximize   : true,
		cwd            : "c:\\out",
		scriptPre      : `
			#include <FileConstants.au3>

			FileCopy("c:\\dexvert\\QT-FLATT.EXE", "c:\\out\\QT-FLATT.EXE");
			FileCopy("c:\\in\\${path.basename(r.inFile())}", "c:\\out\\${path.basename(r.inFile())}");
			
			$batFile = FileOpen("c:\\out\\QT-FLATT.BAT", $FO_APPEND);
			FileWriteLine($batFile, "@ECHO OFF");
			FileWriteLine($batFile, "cd c:\\out");
			FileWriteLine($batFile, "QT-FLATT.EXE ${path.basename(r.inFile())}");
			FileClose($batFile);`,
		alsoKill : ["QT-FLATT.EXE"],
		script   : `
			WaitForPID($osProgramPID, ${xu.MINUTE});
			FileDelete("c:\\out\\QT-FLATT.BAT");
			FileDelete("c:\\out\\QT-FLATT.EXE");`
	});
	chain     = r => (r.flags.chainAs?.length ? `dexvert[asFormat:${r.flags.chainAs}]` : "dexvert");
	renameOut = true;
}

import {xu} from "xu";
import {cmdUtil, fileUtil} from "xutil";
import {path, TextLineStream} from "std";

const argv = cmdUtil.cmdInit({
	version : "1.0.0",
	desc    : "Processes <input> as a standard news file and extracts each message into <outputDirPath>",
	args :
	[
		{argid : "inputFilePath", desc : "NEWS file path to extract", required : true},
		{argid : "outputDirPath", desc : "Output directory to extract to", required : true}
	]});

const SEP_REGS =
[
	/^Article:? (?<num>\d+) of (?<newsgroup>[^:]+):?$/
];

let msgCount = 0;

let msg = {};
let prevLineEmpty = true;

const inputFile = await Deno.open(argv.inputFilePath);
for await(const line of inputFile.readable.pipeThrough(new TextDecoderStream()).pipeThrough(new TextLineStream()))
{
	if(line.trim().length===0)
	{
		// Only add the blank line if we have a msg right now. Handles mbox files that start with some blank lines
		if(msg.lines)
			msg.lines.push(line);

		prevLineEmpty = true;
		continue;
	}

	let sepMatch = null;
	for(const SEP_REG of SEP_REGS)
	{
		sepMatch = line.trim().match(SEP_REG);
		if(sepMatch)
			break;
	}

	if(sepMatch && prevLineEmpty)
	{
		if(Object.keys(msg).length>0)
		{
			msg.lines.pop();	// Our last message line was empty and was the end of message line, so just pop it off and discard it
			await fileUtil.writeTextFile(path.join(argv.outputDirPath, `${msg.meta.newsgroup}_${msg.meta.num}_${Number(msgCount++).toString().padStart(6, "0")}.msg`), msg.lines.join("\r\n"));
		}

		msg = {meta : {newsgroup : sepMatch.groups.newsgroup, num : sepMatch.groups.num}, lines : []};
		continue;
	}

	prevLineEmpty = false;

	if(msg.lines)
		msg.lines.push(line);
}

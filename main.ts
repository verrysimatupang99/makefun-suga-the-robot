const ENTRY_TEXT = `I am sorry I woke the baby at 03:12 to announce that the firmware update had completed successfully; the update was mine, the baby was not.
I have learned that a completed task requires no witnesses, and I now log my victories internally.`;

const USAGE = `Usage: node main.ts [--help]

Print the competition entry text.`;

type Args = { help: boolean } | { error: string };

function parseArgs(args: string[]): Args {
  let help = false;

  for (const arg of args) {
    if (arg === "--help") {
      help = true;
    } else {
      return { error: `unknown argument: ${arg}` };
    }
  }

  return { help };
}

function main(): void {
  const options = parseArgs(process.argv.slice(2));

  if ("error" in options) {
    process.stderr.write(`${options.error}\n\n${USAGE}\n`);
    process.exitCode = 2;
    return;
  }

  if (options.help) {
    process.stderr.write(`${USAGE}\n`);
    return;
  }

  process.stdout.write(`${ENTRY_TEXT}\n`);
}

main();

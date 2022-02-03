const cliForm = document.querySelector('#cli');
const history = document.querySelector('#history');

const cmdHistory = [];
let cmdIndex = 0;

const commands = {};
const registerCommand = (name, func) => {
    commands[name] = func;
}

cliForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const command = cliForm.querySelector('#command-line').value;
    cliForm.querySelector('#command-line').value = '';
    if(/^\s*$/.test(command)) return;
    cmdHistory.push(command);
    history.innerHTML += `${new Option(command).innerHTML}<br>`;
    cmdIndex = cmdHistory.length;
    let runCommand = !!Object.keys(commands).length;
    let commandValue = '';
    if(runCommand) {
        const args = command.split` `;
        if(commands[args[0]]) {
        commandValue = commands[args[0]]?.(args);
        } else {
            commandValue = '<span style="color: red;">Command not found</span>';
        }
    }
    history.innerHTML += `<span class="output">${commandValue}</span><br>`;
});

cliForm.addEventListener('keydown', (e) => {
    switch(e.keyCode) {
        case 38:
            cmdIndex = Math.max(0, cmdIndex - 1);
            break;
        case 40:
            cmdIndex = Math.min(cmdIndex + 1, cmdHistory.length);
            break;
        default: return;
    }
    const input = cliForm.querySelector('#command-line');
    input.value = cmdHistory[cmdIndex] || '';
    input.scrollLeft = input.scrollWidth;
    input.setSelectionRange(input.value.length, input.value.length);
});

registerCommand('help', (args) => {
    args.shift();
    if(args.length) {
    let cmd = args.shift();
    if(commands[cmd]) {
        return commands[cmd];
    } else {
        return `<span style="color: red;">Command not found</span>`;
    }
} else {
    return `<span style="color: yellow;">${Object.keys(commands).join(', ')}</span>`;
}
});

registerCommand('echo', args => {args.shift(); return args.join(' ')});
registerCommand('exec', args => {args.shift(); return eval(args.join(' '))});
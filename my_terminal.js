const term = $('body').terminal(commands, {
    greetings: false
});

term.pause();

function ready() {
   term.echo(() => render('Terminal Portfolio')).resume();
}


const font = 'Doom';
figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts'});
figlet.preloadFonts([font], ready);
 

function render(text) {
    const cols = term.cols();
    return trim(figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    }));
}

function trim(str) {
    return str.replace(/[\n\s]+$/, '');
}

const commands = {
    help() {
        term.echo(`List of available commands: ${help}`);
    }
}

const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjuction',
})

const command_list = Object.keys(commands);
const help = formatter.format(command_list);

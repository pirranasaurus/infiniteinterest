const commands = {
    help() {
        term.echo(`List of available commands: ${help}`);
    },
    echo(...args) {
        term.echo(args.join(' '));
    }
};

const term = $('body').terminal(commands, {
    greetings: false
});

term.pause();

function ready() {
    term.echo(() => render('Terminal Page')).resume();
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


const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjuction',
})


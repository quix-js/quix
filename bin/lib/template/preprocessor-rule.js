module.exports = (handlerName, handlerSymbol) => {
    return `const RuleHandler = require('quix/preprocessor/rule/rule');\n` +
        `\n` +
        `const dh = require('quix/data-handler');\n` +
        `\n` +
        `class BooleanHandler extends RuleHandler\n` +
        `{\n` +
        `    constructor() {\n` +
        `        super('boolean');\n` +
        `    }\n` +
        `\n` +
        `    handle(data) {\n` +
        `        // do something to handle data, don't forget return.\n` +
        `    }\n` +
        `\n` +
        `}\n` +
        `\n` +
        `module.exports = BooleanHandler;`
};
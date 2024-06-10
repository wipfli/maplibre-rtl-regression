function applyArabicShaping(input) {
    return 'RTL works';
}

function processBidirectionalText(input, lineBreakPoints) {
    return [input];
}

function processStyledBidirectionalText(text, styleIndices, lineBreakPoints) {
    console.log('Error: processStyledBidirectionalText is not implemented.');
    return null;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function withAwait() {
    await sleep(1000);
    self.registerRTLTextPlugin({
        'applyArabicShaping': applyArabicShaping,
        'processBidirectionalText': processBidirectionalText,
        'processStyledBidirectionalText': processStyledBidirectionalText
    });
}

withAwait();

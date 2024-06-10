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

async function withoutAwait() {
    self.registerRTLTextPlugin({
        'applyArabicShaping': applyArabicShaping,
        'processBidirectionalText': processBidirectionalText,
        'processStyledBidirectionalText': processStyledBidirectionalText
    });
}

withoutAwait();

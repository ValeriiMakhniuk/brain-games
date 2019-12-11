module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: 'current',
                    firefox: '60',
                    chrome: '67',
                    safari: '11.1',
                },
            }
        ]
    ]
}
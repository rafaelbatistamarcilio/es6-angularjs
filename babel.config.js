module.exports = {
    presets: [
        [
            "@babel/env",
            {
                useBuiltIns: "usage",
                debug: true,
                targets: {
                   ie:'9',
                },
                modules:false
            },
        ],
    ],
    plugins: [
        ['@babel/plugin-transform-runtime', { "corejs": 2 }],
        '@babel/plugin-syntax-dynamic-import'
    ]
};
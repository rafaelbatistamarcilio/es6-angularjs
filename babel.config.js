module.exports = {
    presets: [
        [
            "@babel/env",
            {
                useBuiltIns: "entry",
                corejs: 3,
                debug: true,
                targets: {
                   ie:'9',
                },
                modules:false
            },
        ],
    ],
    plugins: [
        ['@babel/plugin-transform-runtime'],
        '@babel/plugin-syntax-dynamic-import',
    ]
};
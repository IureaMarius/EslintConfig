module.exports = {
    'env': {
        'browser': true,
        'es2020': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 8,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'space-infix-ops': ['error', { 'int32Hint': false }],
        'brace-style': ['error', '1tbs'],
        'arrow-spacing': ['error', {'before': true, 'after': true}],
        'comma-spacing': ['error', {'after': true}],
        'for-direction': ['error']
    }
};

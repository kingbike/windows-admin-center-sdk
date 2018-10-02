// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

let babelCompileLibraries = [
    '/node_modules/@msft-sme/',
    '/node_modules/@angular/',
    '/dist/'
];

let startsWith = babelCompileLibraries.map((relativePath) => (process.cwd().split('\\').join('/') + relativePath).toUpperCase());

require('babel-register')({
    ignore: function (filename) {
        filename = filename.toUpperCase();
        if (startsWith.find((startWith) => filename.indexOf(startWith) === 0)) {
            return false;
        } else {
            return true;
        }
    }
});
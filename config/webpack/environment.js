const { environment } = require('@rails/webpacker')
const { default: Popper } = require('popper.js')

const webpack = require('webpack')

environment.plugins.prepend('Provide',
    new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jquery': 'jquery',
    Popper: ['popper.js', 'default']
    })
)

module.exports = environment

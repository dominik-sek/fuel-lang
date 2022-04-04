const { addWebpackModuleRule } = require('customize-cra')

module.exports = {
    webpack: override (
        addWebpackModuleRule({
            optimization:[
                minimizer:[
                    new TerserPlugin({
                        terserOptions: {
                            keep_classnames: true,
                            keep_fnames: true
                        }
                    )}
                ]
            ]
        })
    )
}
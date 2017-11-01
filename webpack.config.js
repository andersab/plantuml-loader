{
    test: /\.puml$/
    use: [
        {
            loader: path.resolve('src/loader.js'),
            options: {
                plantuml_url: 'http://www.plantuml.com/plantuml/png/'
            }
        }
    ]
}
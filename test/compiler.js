import path from 'path';
import webpack from 'webpack';
import memoryfs from 'memory-fs';

export default(fixture, options= {}) => {
    const compiler = webpack({
        context: __dirname,
        entry: `./${fixture}`,
        output: {
            path: path.resolve(__dirname),
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                test: /\.puml$/,
                use: {
                    loader: path.resolve(__dirname, '../src/loader.js'),
                    options: {
                        plantuml_url: 'http://www.plantuml.com/plantuml/png/'
                    }
                }
            }]
        }
    });

    compiler.outputFileSystem = new memoryfs();

    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) reject(err);

            resolve(stats);
        });
    });
}
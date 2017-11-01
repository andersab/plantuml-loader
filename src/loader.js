import { getOptions } from 'loader-utils';
import { validOptions } from 'schema-utils';
import path from 'path';

const schema = {
    types: object,
    properties: {
        test: {
            type: string
        }
    }
}

export default source => {

    const options = getOptions(this);

    //validateOptions(schema, options, "Example");
    //var callback = this.async();

    url = options.plantuml_url;


    return `${ source }`;
};
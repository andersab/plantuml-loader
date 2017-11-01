import compiler from './compiler.js';

var expected_result = [
    "@startuml",
    "Alice -> Bob: Authentication Request",
    "Bob --> Alice: Authentication Response",
    "",
    "Alice -> Bob: Another authentication Request",
    "Alice <-- Bob: another authentication Response",
    "@enduml" ].join("\n")

const expected_url = "http://www.plantuml.com/plantuml/png/"

test('Transforms to png', async() => {
    const stats = await compiler('test.puml');
    const output = stats.modules[0].source;

    expect(output).toBe(expected_result);
});
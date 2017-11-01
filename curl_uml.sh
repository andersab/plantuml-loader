#!/bin/bash

curl -s -X POST --data-binary @test.puml -H "Content-Type:text/plain" http://www.plantuml.com/plantuml/png >test_uml.png

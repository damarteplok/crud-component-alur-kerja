import {
    apply,
    chain,
    MergeStrategy,
    mergeWith,
    move,
    Rule,
    template,
    SchematicContext,
    Tree, url
} from '@angular-devkit/schematics';
import {basename, normalize, strings} from "@angular-devkit/core";

export function bpmnComponent(_options: any): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        _options.name = basename(_options.name);
        _options.path =normalize(_options.path + '/');

        const templateSource = apply(
            url('./files'), [
                template({
                    ..._options,
                    classify: strings.classify,
                    dasherize: strings.dasherize,
                }),
                move(_options.path),
            ],
        );

        return chain([
            mergeWith(templateSource, MergeStrategy.Overwrite),
        ]);
    };
}

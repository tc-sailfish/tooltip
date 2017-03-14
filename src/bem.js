export var bem = function({block, module, state}) {
    var name = ''
    name += block
    if(module) {
        name += `__${module}`
    }
    if(state) {
        name += `--${state}`
    }
    return name;
}

export var prefixBem = function({prefix, block, module, state}) {
    if(prefix) {
        return [bem({block, module, state}), `${prefix}-${bem({block, module, state})}`]
    }else {
        return [bem({block, module, state})]
    }
}

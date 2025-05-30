var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// js/server.js
var server_exports2 = {};
__export(server_exports2, {
  render: () => render2
});
module.exports = __toCommonJS(server_exports2);

// import-glob:../svelte/**/*.svelte
var __exports = {};
__export(__exports, {
  default: () => __default,
  filenames: () => filenames
});

// svelte/Game.svelte
var Game_exports = {};
__export(Game_exports, {
  default: () => Game_default
});

// node_modules/svelte/src/constants.js
var EACH_INDEX_REACTIVE = 1 << 1;
var EACH_IS_CONTROLLED = 1 << 2;
var EACH_IS_ANIMATED = 1 << 3;
var EACH_ITEM_IMMUTABLE = 1 << 4;
var PROPS_IS_RUNES = 1 << 1;
var PROPS_IS_UPDATED = 1 << 2;
var PROPS_IS_BINDABLE = 1 << 3;
var PROPS_IS_LAZY_INITIAL = 1 << 4;
var TRANSITION_OUT = 1 << 1;
var TRANSITION_GLOBAL = 1 << 2;
var TEMPLATE_USE_IMPORT_NODE = 1 << 1;
var HYDRATION_START = "[";
var HYDRATION_START_ELSE = "[!";
var HYDRATION_END = "]";
var HYDRATION_ERROR = {};
var ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
var UNINITIALIZED = Symbol();
var FILENAME = Symbol("filename");
var HMR = Symbol("hmr");

// node_modules/svelte/src/escaping.js
var ATTR_REGEX = /[&"<]/g;
var CONTENT_REGEX = /[&<]/g;
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped + str.substring(last);
}

// node_modules/svelte/src/internal/shared/attributes.js
var replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
var whitespace = [..." 	\n\r\f\xA0\v\uFEFF"];
function to_class(value, hash2, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash2) {
    classname = classname ? classname + " " + hash2 : hash2;
  }
  if (directives) {
    for (var key in directives) {
      if (directives[key]) {
        classname = classname ? classname + " " + key : key;
      } else if (classname.length) {
        var len = key.length;
        var a = 0;
        while ((a = classname.indexOf(key, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}

// node_modules/svelte/src/internal/shared/utils.js
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var array_from = Array.from;
var object_keys = Object.keys;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;
var is_extensible = Object.isExtensible;
var noop = () => {
};
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}

// node_modules/esm-env/true.js
var true_default = true;

// node_modules/svelte/src/internal/client/constants.js
var DERIVED = 1 << 1;
var EFFECT = 1 << 2;
var RENDER_EFFECT = 1 << 3;
var BLOCK_EFFECT = 1 << 4;
var BRANCH_EFFECT = 1 << 5;
var ROOT_EFFECT = 1 << 6;
var BOUNDARY_EFFECT = 1 << 7;
var UNOWNED = 1 << 8;
var DISCONNECTED = 1 << 9;
var CLEAN = 1 << 10;
var DIRTY = 1 << 11;
var MAYBE_DIRTY = 1 << 12;
var INERT = 1 << 13;
var DESTROYED = 1 << 14;
var EFFECT_RAN = 1 << 15;
var EFFECT_TRANSPARENT = 1 << 16;
var LEGACY_DERIVED_PROP = 1 << 17;
var INSPECT_EFFECT = 1 << 18;
var HEAD_EFFECT = 1 << 19;
var EFFECT_HAS_DERIVED = 1 << 20;
var EFFECT_IS_UPDATING = 1 << 21;
var STATE_SYMBOL = Symbol("$state");
var LEGACY_PROPS = Symbol("legacy props");
var LOADING_ATTR_SYMBOL = Symbol("");

// node_modules/svelte/src/internal/client/reactivity/equality.js
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}

// node_modules/svelte/src/internal/client/errors.js
function derived_references_self() {
  if (true_default) {
    const error = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/derived_references_self`);
  }
}
function effect_update_depth_exceeded() {
  if (true_default) {
    const error = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops
https://svelte.dev/e/effect_update_depth_exceeded`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function hydration_failed() {
  if (true_default) {
    const error = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function rune_outside_svelte(rune) {
  if (true_default) {
    const error = new Error(`rune_outside_svelte
The \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/rune_outside_svelte`);
  }
}
function state_descriptors_fixed() {
  if (true_default) {
    const error = new Error(`state_descriptors_fixed
Property descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.
https://svelte.dev/e/state_descriptors_fixed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  if (true_default) {
    const error = new Error(`state_prototype_fixed
Cannot set prototype of \`$state\` object
https://svelte.dev/e/state_prototype_fixed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_mutation() {
  if (true_default) {
    const error = new Error(`state_unsafe_mutation
Updating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`
https://svelte.dev/e/state_unsafe_mutation`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}

// node_modules/svelte/src/internal/flags/index.js
var legacy_mode_flag = false;
var tracing_mode_flag = false;

// node_modules/svelte/src/internal/client/dev/tracing.js
var tracing_expressions = null;
function get_stack(label) {
  let error = Error();
  const stack2 = error.stack;
  if (stack2) {
    const lines = stack2.split("\n");
    const new_lines = ["\n"];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line === "Error") {
        continue;
      }
      if (line.includes("validate_each_keys")) {
        return null;
      }
      if (line.includes("svelte/src/internal")) {
        continue;
      }
      new_lines.push(line);
    }
    if (new_lines.length === 1) {
      return null;
    }
    define_property(error, "stack", {
      value: new_lines.join("\n")
    });
    define_property(error, "name", {
      // 'Error' suffix is required for stack traces to be rendered properly
      value: `${label}Error`
    });
  }
  return error;
}

// node_modules/svelte/src/internal/shared/errors.js
function store_invalid_shape(name) {
  if (true_default) {
    const error = new Error(`store_invalid_shape
\`${name}\` is not a store with a \`subscribe\` method
https://svelte.dev/e/store_invalid_shape`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/store_invalid_shape`);
  }
}

// node_modules/svelte/src/internal/client/context.js
var component_context = null;
function set_component_context(context) {
  component_context = context;
}
var dev_current_component_function = null;
function set_dev_current_component_function(fn) {
  dev_current_component_function = fn;
}
function push(props, runes = false, fn) {
  var ctx = component_context = {
    p: component_context,
    c: null,
    d: false,
    e: null,
    m: false,
    s: props,
    x: null,
    l: null
  };
  if (legacy_mode_flag && !runes) {
    component_context.l = {
      s: null,
      u: null,
      r1: [],
      r2: source(false)
    };
  }
  teardown(() => {
    ctx.d = true;
  });
  if (true_default) {
    component_context.function = fn;
    dev_current_component_function = fn;
  }
}
function pop(component2) {
  const context_stack_item = component_context;
  if (context_stack_item !== null) {
    if (component2 !== void 0) {
      context_stack_item.x = component2;
    }
    const component_effects = context_stack_item.e;
    if (component_effects !== null) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      context_stack_item.e = null;
      try {
        for (var i = 0; i < component_effects.length; i++) {
          var component_effect = component_effects[i];
          set_active_effect(component_effect.effect);
          set_active_reaction(component_effect.reaction);
          effect(component_effect.fn);
        }
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
      }
    }
    component_context = context_stack_item.p;
    if (true_default) {
      dev_current_component_function = context_stack_item.p?.function ?? null;
    }
    context_stack_item.m = true;
  }
  return component2 || /** @type {T} */
  {};
}
function is_runes() {
  return !legacy_mode_flag || component_context !== null && component_context.l === null;
}

// node_modules/svelte/src/internal/client/proxy.js
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = state(0);
  var stack2 = true_default && tracing_mode_flag ? get_stack("CreatedAt") : null;
  var reaction = active_reaction;
  var with_parent = (fn) => {
    var previous_reaction = active_reaction;
    set_active_reaction(reaction);
    var result = fn();
    set_active_reaction(previous_reaction);
    return result;
  };
  if (is_proxied_array) {
    sources.set("length", state(
      /** @type {any[]} */
      value.length,
      stack2
    ));
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop2, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s = sources.get(prop2);
        if (s === void 0) {
          s = with_parent(() => state(descriptor.value, stack2));
          sources.set(prop2, s);
        } else {
          set(
            s,
            with_parent(() => proxy(descriptor.value))
          );
        }
        return true;
      },
      deleteProperty(target, prop2) {
        var s = sources.get(prop2);
        if (s === void 0) {
          if (prop2 in target) {
            sources.set(
              prop2,
              with_parent(() => state(UNINITIALIZED, stack2))
            );
            update_version(version);
          }
        } else {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n < ls.v) {
              set(ls, n);
            }
          }
          set(s, UNINITIALIZED);
          update_version(version);
        }
        return true;
      },
      get(target, prop2, receiver) {
        if (prop2 === STATE_SYMBOL) {
          return value;
        }
        var s = sources.get(prop2);
        var exists = prop2 in target;
        if (s === void 0 && (!exists || get_descriptor(target, prop2)?.writable)) {
          s = with_parent(() => state(proxy(exists ? target[prop2] : UNINITIALIZED), stack2));
          sources.set(prop2, s);
        }
        if (s !== void 0) {
          var v = get(s);
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop2, receiver);
      },
      getOwnPropertyDescriptor(target, prop2) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor && "value" in descriptor) {
          var s = sources.get(prop2);
          if (s) descriptor.value = get(s);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop2);
          var value2 = source2?.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop2) {
        if (prop2 === STATE_SYMBOL) {
          return true;
        }
        var s = sources.get(prop2);
        var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
        if (s !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop2)?.writable)) {
          if (s === void 0) {
            s = with_parent(() => state(has ? proxy(target[prop2]) : UNINITIALIZED, stack2));
            sources.set(prop2, s);
          }
          var value2 = get(s);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop2, value2, receiver) {
        var s = sources.get(prop2);
        var has = prop2 in target;
        if (is_proxied_array && prop2 === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = with_parent(() => state(UNINITIALIZED, stack2));
              sources.set(i + "", other_s);
            }
          }
        }
        if (s === void 0) {
          if (!has || get_descriptor(target, prop2)?.writable) {
            s = with_parent(() => state(void 0, stack2));
            set(
              s,
              with_parent(() => proxy(value2))
            );
            sources.set(prop2, s);
          }
        } else {
          has = s.v !== UNINITIALIZED;
          set(
            s,
            with_parent(() => proxy(value2))
          );
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n >= ls.v) {
              set(ls, n + 1);
            }
          }
          update_version(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key2) => {
          var source3 = sources.get(key2);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key in target)) {
            own_keys.push(key);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function update_version(signal, d = 1) {
  set(signal, signal.v + d);
}
function get_proxied_value(value) {
  try {
    if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
      return value[STATE_SYMBOL];
    }
  } catch {
  }
  return value;
}

// node_modules/svelte/src/internal/client/reactivity/deriveds.js
function destroy_derived_effects(derived3) {
  var effects = derived3.effects;
  if (effects !== null) {
    derived3.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
var stack = [];
function get_derived_parent_effect(derived3) {
  var parent2 = derived3.parent;
  while (parent2 !== null) {
    if ((parent2.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent2
      );
    }
    parent2 = parent2.parent;
  }
  return null;
}
function execute_derived(derived3) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived3));
  if (true_default) {
    let prev_inspect_effects = inspect_effects;
    set_inspect_effects(/* @__PURE__ */ new Set());
    try {
      if (stack.includes(derived3)) {
        derived_references_self();
      }
      stack.push(derived3);
      destroy_derived_effects(derived3);
      value = update_reaction(derived3);
    } finally {
      set_active_effect(prev_active_effect);
      set_inspect_effects(prev_inspect_effects);
      stack.pop();
    }
  } else {
    try {
      destroy_derived_effects(derived3);
      value = update_reaction(derived3);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived3) {
  var value = execute_derived(derived3);
  var status = (skip_reaction || (derived3.f & UNOWNED) !== 0) && derived3.deps !== null ? MAYBE_DIRTY : CLEAN;
  set_signal_status(derived3, status);
  if (!derived3.equals(value)) {
    derived3.v = value;
    derived3.wv = increment_write_version();
  }
}

// node_modules/svelte/src/internal/client/reactivity/sources.js
var inspect_effects = /* @__PURE__ */ new Set();
var old_values = /* @__PURE__ */ new Map();
function set_inspect_effects(v) {
  inspect_effects = v;
}
function source(v, stack2) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  if (true_default && tracing_mode_flag) {
    signal.created = stack2 ?? get_stack("CreatedAt");
    signal.debug = null;
  }
  return signal;
}
// @__NO_SIDE_EFFECTS__
function state(v, stack2) {
  const s = source(v, stack2);
  push_reaction_value(s);
  return s;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false) {
  const s = source(initial_value);
  if (!immutable) {
    s.equals = safe_equals;
  }
  if (legacy_mode_flag && component_context !== null && component_context.l !== null) {
    (component_context.l.s ??= []).push(s);
  }
  return s;
}
function set(source2, value, should_proxy = false) {
  if (active_reaction !== null && !untracking && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && !reaction_sources?.includes(source2)) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  return internal_set(source2, new_value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    var old_value = source2.v;
    if (is_destroying_effect) {
      old_values.set(source2, value);
    } else {
      old_values.set(source2, old_value);
    }
    source2.v = value;
    if (true_default && tracing_mode_flag) {
      source2.updated = get_stack("UpdatedAt");
      if (active_effect != null) {
        source2.trace_need_increase = true;
        source2.trace_v ??= old_value;
      }
    }
    if ((source2.f & DERIVED) !== 0) {
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(
          /** @type {Derived} */
          source2
        );
      }
      set_signal_status(source2, (source2.f & UNOWNED) === 0 ? CLEAN : MAYBE_DIRTY);
    }
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY);
    if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
    if (true_default && inspect_effects.size > 0) {
      const inspects = Array.from(inspect_effects);
      for (const effect2 of inspects) {
        if ((effect2.f & CLEAN) !== 0) {
          set_signal_status(effect2, MAYBE_DIRTY);
        }
        if (check_dirtiness(effect2)) {
          update_effect(effect2);
        }
      }
      inspect_effects.clear();
    }
  }
  return value;
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var runes = is_runes();
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) continue;
    if (!runes && reaction === active_effect) continue;
    if (true_default && (flags & INSPECT_EFFECT) !== 0) {
      inspect_effects.add(reaction);
      continue;
    }
    set_signal_status(reaction, status);
    if ((flags & (CLEAN | UNOWNED)) !== 0) {
      if ((flags & DERIVED) !== 0) {
        mark_reactions(
          /** @type {Derived} */
          reaction,
          MAYBE_DIRTY
        );
      } else {
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}

// node_modules/svelte/src/internal/client/warnings.js
var bold = "font-weight: bold";
var normal = "font-weight: normal";
function hydration_mismatch(location2) {
  if (true_default) {
    console.warn(`%c[svelte] hydration_mismatch
%c${location2 ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location2}` : "Hydration failed because the initial UI does not match what was rendered on the server"}
https://svelte.dev/e/hydration_mismatch`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
function lifecycle_double_unmount() {
  if (true_default) {
    console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/lifecycle_double_unmount`);
  }
}
function state_proxy_equality_mismatch(operator) {
  if (true_default) {
    console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/state_proxy_equality_mismatch`);
  }
}

// node_modules/svelte/src/internal/client/dom/hydration.js
var hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
var hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    get_next_sibling(hydrate_node)
  );
}

// node_modules/svelte/src/internal/client/dev/equality.js
function init_array_prototype_warnings() {
  const array_prototype2 = Array.prototype;
  const cleanup = Array.__svelte_cleanup;
  if (cleanup) {
    cleanup();
  }
  const { indexOf, lastIndexOf, includes } = array_prototype2;
  array_prototype2.indexOf = function(item, from_index) {
    const index2 = indexOf.call(this, item, from_index);
    if (index2 === -1) {
      for (let i = from_index ?? 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.indexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.lastIndexOf = function(item, from_index) {
    const index2 = lastIndexOf.call(this, item, from_index ?? this.length - 1);
    if (index2 === -1) {
      for (let i = 0; i <= (from_index ?? this.length - 1); i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.lastIndexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.includes = function(item, from_index) {
    const has = includes.call(this, item, from_index);
    if (!has) {
      for (let i = 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.includes(...)");
          break;
        }
      }
    }
    return has;
  };
  Array.__svelte_cleanup = () => {
    array_prototype2.indexOf = indexOf;
    array_prototype2.lastIndexOf = lastIndexOf;
    array_prototype2.includes = includes;
  };
}

// node_modules/svelte/src/internal/client/dom/operations.js
var $window;
var $document;
var is_firefox;
var first_child_getter;
var next_sibling_getter;
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  $document = document;
  is_firefox = /Firefox/.test(navigator.userAgent);
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  var text_prototype = Text.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  if (is_extensible(element_prototype)) {
    element_prototype.__click = void 0;
    element_prototype.__className = void 0;
    element_prototype.__attributes = null;
    element_prototype.__style = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype.__t = void 0;
  }
  if (true_default) {
    element_prototype.__svelte_meta = null;
    init_array_prototype_warnings();
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function clear_text_content(node) {
  node.textContent = "";
}

// node_modules/svelte/src/internal/client/reactivity/effects.js
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn, sync, push3 = true) {
  var parent2 = active_effect;
  if (true_default) {
    while (parent2 !== null && (parent2.f & INSPECT_EFFECT) !== 0) {
      parent2 = parent2.parent;
    }
  }
  var effect2 = {
    ctx: component_context,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent: parent2,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (true_default) {
    effect2.component_function = dev_current_component_function;
  }
  if (sync) {
    try {
      update_effect(effect2);
      effect2.f |= EFFECT_RAN;
    } catch (e) {
      destroy_effect(effect2);
      throw e;
    }
  } else if (fn !== null) {
    schedule_effect(effect2);
  }
  var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & (EFFECT_HAS_DERIVED | BOUNDARY_EFFECT)) === 0;
  if (!inert && push3) {
    if (parent2 !== null) {
      push_effect(effect2, parent2);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
      var derived3 = (
        /** @type {Derived} */
        active_reaction
      );
      (derived3.effects ??= []).push(effect2);
    }
  }
  return effect2;
}
function teardown(fn) {
  const effect2 = create_effect(RENDER_EFFECT, null, false);
  set_signal_status(effect2, CLEAN);
  effect2.teardown = fn;
  return effect2;
}
function effect_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return () => {
    destroy_effect(effect2);
  };
}
function component_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return (options = {}) => {
    return new Promise((fulfil) => {
      if (options.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn, false);
}
function render_effect(fn) {
  return create_effect(RENDER_EFFECT, fn, true);
}
function branch(fn, push3 = true) {
  return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push3);
}
function execute_effect_teardown(effect2) {
  var teardown2 = effect2.teardown;
  if (teardown2 !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown2.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    var next2 = effect2.next;
    if ((effect2.f & ROOT_EFFECT) !== 0) {
      effect2.parent = null;
    } else {
      destroy_effect(effect2, remove_dom);
    }
    effect2 = next2;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next2 = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next2;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
    remove_effect_dom(
      effect2.nodes_start,
      /** @type {TemplateNode} */
      effect2.nodes_end
    );
    removed = true;
  }
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  set_signal_status(effect2, DESTROYED);
  var transitions = effect2.transitions;
  if (transitions !== null) {
    for (const transition2 of transitions) {
      transition2.stop();
    }
  }
  execute_effect_teardown(effect2);
  var parent2 = effect2.parent;
  if (parent2 !== null && parent2.first !== null) {
    unlink_effect(effect2);
  }
  if (true_default) {
    effect2.component_function = null;
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
}
function remove_effect_dom(node, end) {
  while (node !== null) {
    var next2 = node === end ? null : (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    node.remove();
    node = next2;
  }
}
function unlink_effect(effect2) {
  var parent2 = effect2.parent;
  var prev = effect2.prev;
  var next2 = effect2.next;
  if (prev !== null) prev.next = next2;
  if (next2 !== null) next2.prev = prev;
  if (parent2 !== null) {
    if (parent2.first === effect2) parent2.first = next2;
    if (parent2.last === effect2) parent2.last = prev;
  }
}
function pause_effect(effect2, callback) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  run_out_transitions(transitions, () => {
    destroy_effect(effect2);
    if (callback) callback();
  });
}
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition2 of transitions) {
      transition2.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  if (effect2.transitions !== null) {
    for (const transition2 of effect2.transitions) {
      if (transition2.is_global || local) {
        transitions.push(transition2);
      }
    }
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    pause_children(child2, transitions, transparent ? local : false);
    child2 = sibling2;
  }
}

// node_modules/svelte/src/internal/client/dom/task.js
var micro_tasks = [];
var idle_tasks = [];
function run_micro_tasks() {
  var tasks = micro_tasks;
  micro_tasks = [];
  run_all(tasks);
}
function run_idle_tasks() {
  var tasks = idle_tasks;
  idle_tasks = [];
  run_all(tasks);
}
function flush_tasks() {
  if (micro_tasks.length > 0) {
    run_micro_tasks();
  }
  if (idle_tasks.length > 0) {
    run_idle_tasks();
  }
}

// node_modules/svelte/src/internal/client/runtime.js
var handled_errors = /* @__PURE__ */ new WeakSet();
var is_throwing_error = false;
var is_flushing = false;
var last_scheduled_effect = null;
var is_updating_effect = false;
var is_destroying_effect = false;
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
var queued_root_effects = [];
var dev_effect_stack = [];
var active_reaction = null;
var untracking = false;
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
var active_effect = null;
function set_active_effect(effect2) {
  active_effect = effect2;
}
var reaction_sources = null;
function push_reaction_value(value) {
  if (active_reaction !== null && active_reaction.f & EFFECT_IS_UPDATING) {
    if (reaction_sources === null) {
      reaction_sources = [value];
    } else {
      reaction_sources.push(value);
    }
  }
}
var new_deps = null;
var skipped_deps = 0;
var untracked_writes = null;
function set_untracked_writes(value) {
  untracked_writes = value;
}
var write_version = 1;
var read_version = 0;
var skip_reaction = false;
var captured_signals = null;
function increment_write_version() {
  return ++write_version;
}
function check_dirtiness(reaction) {
  var flags = reaction.f;
  if ((flags & DIRTY) !== 0) {
    return true;
  }
  if ((flags & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i;
      var dependency;
      var is_disconnected = (flags & DISCONNECTED) !== 0;
      var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
      var length = dependencies.length;
      if (is_disconnected || is_unowned_connected) {
        var derived3 = (
          /** @type {Derived} */
          reaction
        );
        var parent2 = derived3.parent;
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (is_disconnected || !dependency?.reactions?.includes(derived3)) {
            (dependency.reactions ??= []).push(derived3);
          }
        }
        if (is_disconnected) {
          derived3.f ^= DISCONNECTED;
        }
        if (is_unowned_connected && parent2 !== null && (parent2.f & UNOWNED) === 0) {
          derived3.f ^= UNOWNED;
        }
      }
      for (i = 0; i < length; i++) {
        dependency = dependencies[i];
        if (check_dirtiness(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
    }
    if (!is_unowned || active_effect !== null && !skip_reaction) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function propagate_error(error, effect2) {
  var current = effect2;
  while (current !== null) {
    if ((current.f & BOUNDARY_EFFECT) !== 0) {
      try {
        current.fn(error);
        return;
      } catch {
        current.f ^= BOUNDARY_EFFECT;
      }
    }
    current = current.parent;
  }
  is_throwing_error = false;
  throw error;
}
function should_rethrow_error(effect2) {
  return (effect2.f & DESTROYED) === 0 && (effect2.parent === null || (effect2.parent.f & BOUNDARY_EFFECT) === 0);
}
function handle_error(error, effect2, previous_effect, component_context2) {
  if (is_throwing_error) {
    if (previous_effect === null) {
      is_throwing_error = false;
    }
    if (should_rethrow_error(effect2)) {
      throw error;
    }
    return;
  }
  if (previous_effect !== null) {
    is_throwing_error = true;
  }
  if (true_default && component_context2 !== null && error instanceof Error && !handled_errors.has(error)) {
    handled_errors.add(error);
    const component_stack = [];
    const effect_name = effect2.fn?.name;
    if (effect_name) {
      component_stack.push(effect_name);
    }
    let current_context = component_context2;
    while (current_context !== null) {
      var filename = current_context.function?.[FILENAME];
      if (filename) {
        const file = filename.split("/").pop();
        component_stack.push(file);
      }
      current_context = current_context.p;
    }
    const indent = is_firefox ? "  " : "	";
    define_property(error, "message", {
      value: error.message + `
${component_stack.map((name) => `
${indent}in ${name}`).join("")}
`
    });
    define_property(error, "component_stack", {
      value: component_stack
    });
    const stack2 = error.stack;
    if (stack2) {
      const lines = stack2.split("\n");
      const new_lines = [];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes("svelte/src/internal")) {
          continue;
        }
        new_lines.push(line);
      }
      define_property(error, "stack", {
        value: new_lines.join("\n")
      });
    }
  }
  propagate_error(error, effect2);
  if (should_rethrow_error(effect2)) {
    throw error;
  }
}
function schedule_possible_effect_self_invalidation(signal, effect2, root = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if (reaction_sources?.includes(signal)) continue;
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect2,
        false
      );
    } else if (effect2 === reaction) {
      if (root) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var previous_reaction_sources = reaction_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var flags = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  skip_reaction = (flags & UNOWNED) !== 0 && (untracking || !is_updating_effect || active_reaction === null);
  active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  reaction_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  read_version++;
  reaction.f |= EFFECT_IS_UPDATING;
  try {
    var result = (
      /** @type {Function} */
      (0, reaction.fn)()
    );
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction) {
        for (i = skipped_deps; i < deps.length; i++) {
          (deps[i].reactions ??= []).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null && previous_reaction !== reaction) {
      read_version++;
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    return result;
  } finally {
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    reaction_sources = previous_reaction_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    reaction.f ^= EFFECT_IS_UPDATING;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index2 = index_of.call(reactions, signal);
    if (index2 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index2] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    destroy_derived_effects(
      /** @type {Derived} **/
      dependency
    );
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags = effect2.f;
  if ((flags & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var previous_component_context = component_context;
  var was_updating_effect = is_updating_effect;
  active_effect = effect2;
  is_updating_effect = true;
  if (true_default) {
    var previous_component_fn = dev_current_component_function;
    set_dev_current_component_function(effect2.component_function);
  }
  try {
    if ((flags & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown2 = update_reaction(effect2);
    effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
    effect2.wv = write_version;
    var deps = effect2.deps;
    if (true_default && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && deps !== null) {
      for (let i = 0; i < deps.length; i++) {
        var dep = deps[i];
        if (dep.trace_need_increase) {
          dep.wv = increment_write_version();
          dep.trace_need_increase = void 0;
          dep.trace_v = void 0;
        }
      }
    }
    if (true_default) {
      dev_effect_stack.push(effect2);
    }
  } catch (error) {
    handle_error(error, effect2, previous_effect, previous_component_context || effect2.ctx);
  } finally {
    is_updating_effect = was_updating_effect;
    active_effect = previous_effect;
    if (true_default) {
      set_dev_current_component_function(previous_component_fn);
    }
  }
}
function log_effect_stack() {
  console.error(
    "Last ten effects were: ",
    dev_effect_stack.slice(-10).map((d) => d.fn)
  );
  dev_effect_stack = [];
}
function infinite_loop_guard() {
  try {
    effect_update_depth_exceeded();
  } catch (error) {
    if (true_default) {
      define_property(error, "stack", {
        value: ""
      });
    }
    if (last_scheduled_effect !== null) {
      if (true_default) {
        try {
          handle_error(error, last_scheduled_effect, null, null);
        } catch (e) {
          log_effect_stack();
          throw e;
        }
      } else {
        handle_error(error, last_scheduled_effect, null, null);
      }
    } else {
      if (true_default) {
        log_effect_stack();
      }
      throw error;
    }
  }
}
function flush_queued_root_effects() {
  var was_updating_effect = is_updating_effect;
  try {
    var flush_count = 0;
    is_updating_effect = true;
    while (queued_root_effects.length > 0) {
      if (flush_count++ > 1e3) {
        infinite_loop_guard();
      }
      var root_effects = queued_root_effects;
      var length = root_effects.length;
      queued_root_effects = [];
      for (var i = 0; i < length; i++) {
        var collected_effects = process_effects(root_effects[i]);
        flush_queued_effects(collected_effects);
      }
      old_values.clear();
    }
  } finally {
    is_flushing = false;
    is_updating_effect = was_updating_effect;
    last_scheduled_effect = null;
    if (true_default) {
      dev_effect_stack = [];
    }
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  for (var i = 0; i < length; i++) {
    var effect2 = effects[i];
    if ((effect2.f & (DESTROYED | INERT)) === 0) {
      try {
        if (check_dirtiness(effect2)) {
          update_effect(effect2);
          if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
            if (effect2.teardown === null) {
              unlink_effect(effect2);
            } else {
              effect2.fn = null;
            }
          }
        }
      } catch (error) {
        handle_error(error, effect2, null, effect2.ctx);
      }
    }
  }
}
function schedule_effect(signal) {
  if (!is_flushing) {
    is_flushing = true;
    queueMicrotask(flush_queued_root_effects);
  }
  var effect2 = last_scheduled_effect = signal;
  while (effect2.parent !== null) {
    effect2 = effect2.parent;
    var flags = effect2.f;
    if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags & CLEAN) === 0) return;
      effect2.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect2);
}
function process_effects(root) {
  var effects = [];
  var effect2 = root;
  while (effect2 !== null) {
    var flags = effect2.f;
    var is_branch = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
    var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
    if (!is_skippable_branch && (flags & INERT) === 0) {
      if ((flags & EFFECT) !== 0) {
        effects.push(effect2);
      } else if (is_branch) {
        effect2.f ^= CLEAN;
      } else {
        try {
          if (check_dirtiness(effect2)) {
            update_effect(effect2);
          }
        } catch (error) {
          handle_error(error, effect2, null, effect2.ctx);
        }
      }
      var child2 = effect2.first;
      if (child2 !== null) {
        effect2 = child2;
        continue;
      }
    }
    var parent2 = effect2.parent;
    effect2 = effect2.next;
    while (effect2 === null && parent2 !== null) {
      effect2 = parent2.next;
      parent2 = parent2.parent;
    }
  }
  return effects;
}
function flushSync(fn) {
  var result;
  if (fn) {
    is_flushing = true;
    flush_queued_root_effects();
    result = fn();
  }
  flush_tasks();
  while (queued_root_effects.length > 0) {
    is_flushing = true;
    flush_queued_root_effects();
    flush_tasks();
  }
  return (
    /** @type {T} */
    result
  );
}
function get(signal) {
  var flags = signal.f;
  var is_derived = (flags & DERIVED) !== 0;
  if (captured_signals !== null) {
    captured_signals.add(signal);
  }
  if (active_reaction !== null && !untracking) {
    if (!reaction_sources?.includes(signal)) {
      var deps = active_reaction.deps;
      if (signal.rv < read_version) {
        signal.rv = read_version;
        if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
          skipped_deps++;
        } else if (new_deps === null) {
          new_deps = [signal];
        } else if (!skip_reaction || !new_deps.includes(signal)) {
          new_deps.push(signal);
        }
      }
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null && /** @type {Derived} */
  signal.effects === null) {
    var derived3 = (
      /** @type {Derived} */
      signal
    );
    var parent2 = derived3.parent;
    if (parent2 !== null && (parent2.f & UNOWNED) === 0) {
      derived3.f ^= UNOWNED;
    }
  }
  if (is_derived) {
    derived3 = /** @type {Derived} */
    signal;
    if (check_dirtiness(derived3)) {
      update_derived(derived3);
    }
  }
  if (true_default && tracing_mode_flag && tracing_expressions !== null && active_reaction !== null && tracing_expressions.reaction === active_reaction) {
    if (signal.debug) {
      signal.debug();
    } else if (signal.created) {
      var entry = tracing_expressions.entries.get(signal);
      if (entry === void 0) {
        entry = { read: [] };
        tracing_expressions.entries.set(signal, entry);
      }
      entry.read.push(get_stack("TracedAt"));
    }
  }
  if (is_destroying_effect && old_values.has(signal)) {
    return old_values.get(signal);
  }
  return signal.v;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
var STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}

// node_modules/svelte/src/utils.js
var DOM_BOOLEAN_ATTRIBUTES = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected",
  "webkitdirectory",
  "defer",
  "disablepictureinpicture",
  "disableremoteplayback"
];
var DOM_PROPERTIES = [
  ...DOM_BOOLEAN_ATTRIBUTES,
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  "readOnly",
  "value",
  "volume",
  "defaultValue",
  "defaultChecked",
  "srcObject",
  "noValidate",
  "allowFullscreen",
  "disablePictureInPicture",
  "disableRemotePlayback"
];
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}

// node_modules/svelte/src/internal/client/dom/elements/events.js
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
function handle_event_propagation(event2) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event2.type;
  var path = event2.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event2.target
  );
  var path_idx = 0;
  var handled_at = event2.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event2.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event2.target;
  if (current_target === handler_element) return;
  define_property(event2, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event2.target === current_target)) {
          if (is_array(delegated)) {
            var [fn, ...data] = delegated;
            fn.apply(current_target, [event2, ...data]);
          } else {
            delegated.call(current_target, event2);
          }
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event2.__root = handler_element;
    delete event2.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
var head_anchor;
function reset_head_anchor() {
  head_anchor = void 0;
}

// node_modules/svelte/src/internal/client/dom/template.js
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes_start === null) {
    effect2.nodes_start = start;
    effect2.nodes_end = end;
  }
}
function append(anchor, dom) {
  if (hydrating) {
    active_effect.nodes_end = hydrate_node;
    hydrate_next();
    return;
  }
  if (anchor === null) {
    return;
  }
  anchor.before(
    /** @type {Node} */
    dom
  );
}

// node_modules/svelte/src/internal/client/render.js
var should_intro = true;
function mount(component2, options) {
  return _mount(component2, options);
}
function hydrate(component2, options) {
  init_operations();
  options.intro = options.intro ?? false;
  const target = options.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== 8 || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    hydrate_next();
    const instance = _mount(component2, { ...options, anchor });
    if (hydrate_node === null || hydrate_node.nodeType !== 8 || /** @type {Comment} */
    hydrate_node.data !== HYDRATION_END) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error) {
    if (error === HYDRATION_ERROR) {
      if (options.recover === false) {
        hydration_failed();
      }
      init_operations();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component2, options);
    }
    throw error;
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
    reset_head_anchor();
  }
}
var document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events2) => {
    for (var i = 0; i < events2.length; i++) {
      var event_name = events2[i];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive2 = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
      var n = document_listeners.get(event_name);
      if (n === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component2 = void 0;
  var unmount3 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    branch(() => {
      if (context) {
        push({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context;
      }
      if (events) {
        props.$$events = events;
      }
      if (hydrating) {
        assign_nodes(
          /** @type {TemplateNode} */
          anchor_node,
          null
        );
      }
      should_intro = intro;
      component2 = Component(anchor_node, props) || {};
      should_intro = true;
      if (hydrating) {
        active_effect.nodes_end = hydrate_node;
      }
      if (context) {
        pop();
      }
    });
    return () => {
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component2, unmount3);
  return component2;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component2, options) {
  const fn = mounted_components.get(component2);
  if (fn) {
    mounted_components.delete(component2);
    return fn(options);
  }
  if (true_default) {
    lifecycle_double_unmount();
  }
  return Promise.resolve();
}

// node_modules/svelte/src/internal/shared/validate.js
function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== "function") {
    store_invalid_shape(name);
  }
}

// node_modules/svelte/src/internal/client/dom/elements/attributes.js
var CLASS = Symbol("class");
var STYLE = Symbol("style");
var IS_CUSTOM_ELEMENT = Symbol("is custom element");
var IS_HTML = Symbol("is html");

// node_modules/svelte/src/store/shared/index.js
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update2) || noop;
    }
    run2(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update: update2, subscribe };
}

// node_modules/svelte/src/internal/client/reactivity/store.js
var IS_UNMOUNTED = Symbol();

// node_modules/svelte/src/legacy/legacy-client.js
function createClassComponent(options) {
  return new Svelte4Component(options);
}
var Svelte4Component = class {
  /** @type {any} */
  #events;
  /** @type {Record<string, any>} */
  #instance;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options) {
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key, value) => {
      var s = mutable_source(value);
      sources.set(key, s);
      return s;
    };
    const props = new Proxy(
      { ...options.props || {}, $$events: {} },
      {
        get(target, prop2) {
          return get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
        },
        has(target, prop2) {
          if (prop2 === LEGACY_PROPS) return true;
          get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
          return Reflect.has(target, prop2);
        },
        set(target, prop2, value) {
          set(sources.get(prop2) ?? add_source(prop2, value), value);
          return Reflect.set(target, prop2, value);
        }
      }
    );
    this.#instance = (options.hydrate ? hydrate : mount)(options.component, {
      target: options.target,
      anchor: options.anchor,
      props,
      context: options.context,
      intro: options.intro ?? false,
      recover: options.recover
    });
    if (!options?.props?.$$host || options.sync === false) {
      flushSync();
    }
    this.#events = props.$$events;
    for (const key of Object.keys(this.#instance)) {
      if (key === "$set" || key === "$destroy" || key === "$on") continue;
      define_property(this, key, {
        get() {
          return this.#instance[key];
        },
        /** @param {any} value */
        set(value) {
          this.#instance[key] = value;
        },
        enumerable: true
      });
    }
    this.#instance.$set = /** @param {Record<string, any>} next */
    (next2) => {
      Object.assign(props, next2);
    };
    this.#instance.$destroy = () => {
      unmount(this.#instance);
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    this.#instance.$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event2, callback) {
    this.#events[event2] = this.#events[event2] || [];
    const cb = (...args) => callback.call(this, ...args);
    this.#events[event2].push(cb);
    return () => {
      this.#events[event2] = this.#events[event2].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    this.#instance.$destroy();
  }
};

// node_modules/svelte/src/internal/client/dom/elements/custom-element.js
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    /** The Svelte component constructor */
    $$ctor;
    /** Slots */
    $$s;
    /** @type {any} The Svelte component instance */
    $$c;
    /** Whether or not the custom element is connected */
    $$cn = false;
    /** @type {Record<string, any>} Component props data */
    $$d = {};
    /** `true` if currently in the process of reflecting component props back to attributes */
    $$r = false;
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $$p_d = {};
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    $$l = {};
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    $$l_u = /* @__PURE__ */ new Map();
    /** @type {any} The managed render effect for reflecting attributes */
    $$me;
    /**
     * @param {*} $$componentCtor
     * @param {*} $$slots
     * @param {*} use_shadow_dom
     */
    constructor($$componentCtor, $$slots, use_shadow_dom) {
      super();
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (use_shadow_dom) {
        this.attachShadow({ mode: "open" });
      }
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot = function(name) {
          return (anchor) => {
            const slot2 = document.createElement("slot");
            if (name !== "default") slot2.name = name;
            append(anchor, slot2);
          };
        };
        await Promise.resolve();
        if (!this.$$cn || this.$$c) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            if (name === "default" && !this.$$d.children) {
              this.$$d.children = create_slot(name);
              $$slots.default = true;
            } else {
              $$slots[name] = create_slot(name);
            }
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        for (const key in this.$$p_d) {
          if (!(key in this.$$d) && this[key] !== void 0) {
            this.$$d[key] = this[key];
            delete this[key];
          }
        }
        this.$$c = createClassComponent({
          component: this.$$ctor,
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$host: this
          }
        });
        this.$$me = effect_root(() => {
          render_effect(() => {
            this.$$r = true;
            for (const key of object_keys(this.$$c)) {
              if (!this.$$p_d[key]?.reflect) continue;
              this.$$d[key] = this.$$c[key];
              const attribute_value = get_custom_element_value(
                key,
                this.$$d[key],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(this.$$p_d[key].attribute || key);
              } else {
                this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
              }
            }
            this.$$r = false;
          });
        });
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    /**
     * @param {string} attr
     * @param {string} _oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(attr2, _oldValue, newValue) {
      if (this.$$r) return;
      attr2 = this.$$g_p(attr2);
      this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
      this.$$c?.$set({ [attr2]: this.$$d[attr2] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn && this.$$c) {
          this.$$c.$destroy();
          this.$$me();
          this.$$c = void 0;
        }
      });
    }
    /**
     * @param {string} attribute_name
     */
    $$g_p(attribute_name) {
      return object_keys(this.$$p_d).find(
        (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
      ) || attribute_name;
    }
  };
}
function get_custom_element_value(prop2, value, props_definition, transform) {
  const type = props_definition[prop2]?.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop2]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      // conversion already handled above
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach((node) => {
    result[
      /** @type {Element} node */
      node.slot || "default"
    ] = true;
  });
  return result;
}

// node_modules/svelte/src/index-client.js
if (true_default) {
  let throw_rune_error = function(rune) {
    if (!(rune in globalThis)) {
      let value;
      Object.defineProperty(globalThis, rune, {
        configurable: true,
        // eslint-disable-next-line getter-return
        get: () => {
          if (value !== void 0) {
            return value;
          }
          rune_outside_svelte(rune);
        },
        set: (v) => {
          value = v;
        }
      });
    }
  };
  throw_rune_error("$state");
  throw_rune_error("$effect");
  throw_rune_error("$derived");
  throw_rune_error("$inspect");
  throw_rune_error("$props");
  throw_rune_error("$bindable");
}

// node_modules/svelte/src/store/utils.js
function subscribe_to_store(store, run2, invalidate) {
  if (store == null) {
    run2(void 0);
    if (invalidate) invalidate(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run2,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

// node_modules/svelte/src/internal/server/context.js
var current_component = null;
function push2(fn) {
  current_component = { p: current_component, c: null, d: null };
  if (true_default) {
    current_component.function = fn;
  }
}
function pop2() {
  var component2 = (
    /** @type {Component} */
    current_component
  );
  var ondestroy = component2.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component2.p;
}

// node_modules/svelte/src/internal/server/hydration.js
var BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
var BLOCK_OPEN_ELSE = `<!--${HYDRATION_START_ELSE}-->`;
var BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;

// node_modules/svelte/src/html-tree-validation.js
var autoclosing_children = {
  // based on http://developers.whatwg.org/syntax.html#syntax-tag-omission
  li: { direct: ["li"] },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt#technical_summary
  dt: { descendant: ["dt", "dd"], reset_by: ["dl"] },
  dd: { descendant: ["dt", "dd"], reset_by: ["dl"] },
  p: {
    descendant: [
      "address",
      "article",
      "aside",
      "blockquote",
      "div",
      "dl",
      "fieldset",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "main",
      "menu",
      "nav",
      "ol",
      "p",
      "pre",
      "section",
      "table",
      "ul"
    ]
  },
  rt: { descendant: ["rt", "rp"] },
  rp: { descendant: ["rt", "rp"] },
  optgroup: { descendant: ["optgroup"] },
  option: { descendant: ["option", "optgroup"] },
  thead: { direct: ["tbody", "tfoot"] },
  tbody: { direct: ["tbody", "tfoot"] },
  tfoot: { direct: ["tbody"] },
  tr: { direct: ["tr", "tbody"] },
  td: { direct: ["td", "th", "tr"] },
  th: { direct: ["td", "th", "tr"] }
};
var disallowed_children = {
  ...autoclosing_children,
  optgroup: { only: ["option", "#text"] },
  // Strictly speaking, seeing an <option> doesn't mean we're in a <select>, but we assume it here
  option: { only: ["#text"] },
  form: { descendant: ["form"] },
  a: { descendant: ["a"] },
  button: { descendant: ["button"] },
  h1: { descendant: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  h2: { descendant: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  h3: { descendant: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  h4: { descendant: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  h5: { descendant: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  h6: { descendant: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
  select: { only: ["option", "optgroup", "#text", "hr", "script", "template"] },
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
  // No special behavior since these rules fall back to "in body" mode for
  // all except special table nodes which cause bad parsing behavior anyway.
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
  tr: { only: ["th", "td", "style", "script", "template"] },
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
  tbody: { only: ["tr", "style", "script", "template"] },
  thead: { only: ["tr", "style", "script", "template"] },
  tfoot: { only: ["tr", "style", "script", "template"] },
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
  colgroup: { only: ["col", "template"] },
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
  table: {
    only: ["caption", "colgroup", "tbody", "thead", "tfoot", "style", "script", "template"]
  },
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
  head: {
    only: [
      "base",
      "basefont",
      "bgsound",
      "link",
      "meta",
      "title",
      "noscript",
      "noframes",
      "style",
      "script",
      "template"
    ]
  },
  // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
  html: { only: ["head", "body", "frameset"] },
  frameset: { only: ["frame"] },
  "#document": { only: ["html"] }
};
function is_tag_valid_with_ancestor(child_tag, ancestors, child_loc, ancestor_loc) {
  if (child_tag.includes("-")) return null;
  const ancestor_tag = ancestors[ancestors.length - 1];
  const disallowed = disallowed_children[ancestor_tag];
  if (!disallowed) return null;
  if ("reset_by" in disallowed && disallowed.reset_by) {
    for (let i = ancestors.length - 2; i >= 0; i--) {
      const ancestor = ancestors[i];
      if (ancestor.includes("-")) return null;
      if (disallowed.reset_by.includes(ancestors[i])) {
        return null;
      }
    }
  }
  if ("descendant" in disallowed && disallowed.descendant.includes(child_tag)) {
    const child2 = child_loc ? `\`<${child_tag}>\` (${child_loc})` : `\`<${child_tag}>\``;
    const ancestor = ancestor_loc ? `\`<${ancestor_tag}>\` (${ancestor_loc})` : `\`<${ancestor_tag}>\``;
    return `${child2} cannot be a descendant of ${ancestor}`;
  }
  return null;
}
function is_tag_valid_with_parent(child_tag, parent_tag, child_loc, parent_loc) {
  if (child_tag.includes("-") || parent_tag?.includes("-")) return null;
  if (parent_tag === "template") return null;
  const disallowed = disallowed_children[parent_tag];
  const child2 = child_loc ? `\`<${child_tag}>\` (${child_loc})` : `\`<${child_tag}>\``;
  const parent2 = parent_loc ? `\`<${parent_tag}>\` (${parent_loc})` : `\`<${parent_tag}>\``;
  if (disallowed) {
    if ("direct" in disallowed && disallowed.direct.includes(child_tag)) {
      return `${child2} cannot be a direct child of ${parent2}`;
    }
    if ("descendant" in disallowed && disallowed.descendant.includes(child_tag)) {
      return `${child2} cannot be a child of ${parent2}`;
    }
    if ("only" in disallowed && disallowed.only) {
      if (disallowed.only.includes(child_tag)) {
        return null;
      } else {
        return `${child2} cannot be a child of ${parent2}. \`<${parent_tag}>\` only allows these children: ${disallowed.only.map((d) => `\`<${d}>\``).join(", ")}`;
      }
    }
  }
  switch (child_tag) {
    case "body":
    case "caption":
    case "col":
    case "colgroup":
    case "frameset":
    case "frame":
    case "head":
    case "html":
      return `${child2} cannot be a child of ${parent2}`;
    case "thead":
    case "tbody":
    case "tfoot":
      return `${child2} must be the child of a \`<table>\`, not a ${parent2}`;
    case "td":
    case "th":
      return `${child2} must be the child of a \`<tr>\`, not a ${parent2}`;
    case "tr":
      return `\`<tr>\` must be the child of a \`<thead>\`, \`<tbody>\`, or \`<tfoot>\`, not a ${parent2}`;
  }
  return null;
}

// node_modules/svelte/src/internal/server/payload.js
var HeadPayload = class {
  /** @type {Set<{ hash: string; code: string }>} */
  css = /* @__PURE__ */ new Set();
  out = "";
  uid = () => "";
  title = "";
  constructor(css = /* @__PURE__ */ new Set(), out = "", title = "", uid = () => "") {
    this.css = css;
    this.out = out;
    this.title = title;
    this.uid = uid;
  }
};
var Payload = class {
  /** @type {Set<{ hash: string; code: string }>} */
  css = /* @__PURE__ */ new Set();
  out = "";
  uid = () => "";
  head = new HeadPayload();
  constructor(id_prefix = "") {
    this.uid = props_id_generator(id_prefix);
    this.head.uid = this.uid;
  }
};
function props_id_generator(prefix) {
  let uid = 1;
  return () => `${prefix}s${uid++}`;
}

// node_modules/svelte/src/internal/server/dev.js
var parent = null;
var seen;
function print_error(payload, message) {
  message = `node_invalid_placement_ssr: ${message}

This can cause content to shift around as the browser repairs the HTML, and will likely result in a \`hydration_mismatch\` warning.`;
  if ((seen ??= /* @__PURE__ */ new Set()).has(message)) return;
  seen.add(message);
  console.error(message);
  payload.head.out += `<script>console.error(${JSON.stringify(message)})</script>`;
}
function reset_elements() {
  let old_parent = parent;
  parent = null;
  return () => {
    parent = old_parent;
  };
}
function push_element(payload, tag, line, column) {
  var filename = (
    /** @type {Component} */
    current_component.function[FILENAME]
  );
  var child2 = { tag, parent, filename, line, column };
  if (parent !== null) {
    var ancestor = parent.parent;
    var ancestors = [parent.tag];
    const child_loc = filename ? `${filename}:${line}:${column}` : void 0;
    const parent_loc = parent.filename ? `${parent.filename}:${parent.line}:${parent.column}` : void 0;
    const message = is_tag_valid_with_parent(tag, parent.tag, child_loc, parent_loc);
    if (message) print_error(payload, message);
    while (ancestor != null) {
      ancestors.push(ancestor.tag);
      const ancestor_loc = ancestor.filename ? `${ancestor.filename}:${ancestor.line}:${ancestor.column}` : void 0;
      const message2 = is_tag_valid_with_ancestor(tag, ancestors, child_loc, ancestor_loc);
      if (message2) print_error(payload, message2);
      ancestor = ancestor.parent;
    }
  }
  parent = child2;
}
function pop_element() {
  parent = /** @type {Element} */
  parent.parent;
}

// node_modules/svelte/src/internal/server/index.js
var on_destroy = [];
function render(component2, options = {}) {
  const payload = new Payload(options.idPrefix ? options.idPrefix + "-" : "");
  const prev_on_destroy = on_destroy;
  on_destroy = [];
  payload.out += BLOCK_OPEN;
  let reset_reset_element;
  if (true_default) {
    reset_reset_element = reset_elements();
  }
  if (options.context) {
    push2();
    current_component.c = options.context;
  }
  component2(payload, options.props ?? {}, {}, {});
  if (options.context) {
    pop2();
  }
  if (reset_reset_element) {
    reset_reset_element();
  }
  payload.out += BLOCK_CLOSE;
  for (const cleanup of on_destroy) cleanup();
  on_destroy = prev_on_destroy;
  let head2 = payload.head.out + payload.head.title;
  for (const { hash: hash2, code } of payload.css) {
    head2 += `<style id="${hash2}">${code}</style>`;
  }
  return {
    head: head2,
    html: payload.out,
    body: payload.out
  };
}
function stringify(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
function attr_class(value, hash2, directives) {
  var result = to_class(value, hash2, directives);
  return result ? ` class="${escape_html(result, true)}"` : "";
}
function store_get2(store_values, store_name, store) {
  if (true_default) {
    validate_store(store, store_name.slice(1));
  }
  if (store_name in store_values && store_values[store_name][0] === store) {
    return store_values[store_name][2];
  }
  store_values[store_name]?.[1]();
  store_values[store_name] = [store, null, void 0];
  const unsub = subscribe_to_store(
    store,
    /** @param {any} v */
    (v) => store_values[store_name][2] = v
  );
  store_values[store_name][1] = unsub;
  return store_values[store_name][2];
}
function unsubscribe_stores(store_values) {
  for (const store_name in store_values) {
    store_values[store_name][1]();
  }
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}

// ../deps/phoenix/priv/static/phoenix.mjs
var closure = (value) => {
  if (typeof value === "function") {
    return value;
  } else {
    let closure2 = function() {
      return value;
    };
    return closure2;
  }
};
var globalSelf = typeof self !== "undefined" ? self : null;
var phxWindow = typeof window !== "undefined" ? window : null;
var global = globalSelf || phxWindow || global;
var DEFAULT_VSN = "2.0.0";
var SOCKET_STATES = { connecting: 0, open: 1, closing: 2, closed: 3 };
var DEFAULT_TIMEOUT = 1e4;
var WS_CLOSE_NORMAL = 1e3;
var CHANNEL_STATES = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
};
var CHANNEL_EVENTS = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  reply: "phx_reply",
  leave: "phx_leave"
};
var TRANSPORTS = {
  longpoll: "longpoll",
  websocket: "websocket"
};
var XHR_STATES = {
  complete: 4
};
var Push = class {
  constructor(channel, event2, payload, timeout) {
    this.channel = channel;
    this.event = event2;
    this.payload = payload || function() {
      return {};
    };
    this.receivedResp = null;
    this.timeout = timeout;
    this.timeoutTimer = null;
    this.recHooks = [];
    this.sent = false;
  }
  /**
   *
   * @param {number} timeout
   */
  resend(timeout) {
    this.timeout = timeout;
    this.reset();
    this.send();
  }
  /**
   *
   */
  send() {
    if (this.hasReceived("timeout")) {
      return;
    }
    this.startTimeout();
    this.sent = true;
    this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload(),
      ref: this.ref,
      join_ref: this.channel.joinRef()
    });
  }
  /**
   *
   * @param {*} status
   * @param {*} callback
   */
  receive(status, callback) {
    if (this.hasReceived(status)) {
      callback(this.receivedResp.response);
    }
    this.recHooks.push({ status, callback });
    return this;
  }
  /**
   * @private
   */
  reset() {
    this.cancelRefEvent();
    this.ref = null;
    this.refEvent = null;
    this.receivedResp = null;
    this.sent = false;
  }
  /**
   * @private
   */
  matchReceive({ status, response, _ref }) {
    this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
  }
  /**
   * @private
   */
  cancelRefEvent() {
    if (!this.refEvent) {
      return;
    }
    this.channel.off(this.refEvent);
  }
  /**
   * @private
   */
  cancelTimeout() {
    clearTimeout(this.timeoutTimer);
    this.timeoutTimer = null;
  }
  /**
   * @private
   */
  startTimeout() {
    if (this.timeoutTimer) {
      this.cancelTimeout();
    }
    this.ref = this.channel.socket.makeRef();
    this.refEvent = this.channel.replyEventName(this.ref);
    this.channel.on(this.refEvent, (payload) => {
      this.cancelRefEvent();
      this.cancelTimeout();
      this.receivedResp = payload;
      this.matchReceive(payload);
    });
    this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  /**
   * @private
   */
  hasReceived(status) {
    return this.receivedResp && this.receivedResp.status === status;
  }
  /**
   * @private
   */
  trigger(status, response) {
    this.channel.trigger(this.refEvent, { status, response });
  }
};
var Timer = class {
  constructor(callback, timerCalc) {
    this.callback = callback;
    this.timerCalc = timerCalc;
    this.timer = null;
    this.tries = 0;
  }
  reset() {
    this.tries = 0;
    clearTimeout(this.timer);
  }
  /**
   * Cancels any previous scheduleTimeout and schedules callback
   */
  scheduleTimeout() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.tries = this.tries + 1;
      this.callback();
    }, this.timerCalc(this.tries + 1));
  }
};
var Channel = class {
  constructor(topic, params, socket) {
    this.state = CHANNEL_STATES.closed;
    this.topic = topic;
    this.params = closure(params || {});
    this.socket = socket;
    this.bindings = [];
    this.bindingRef = 0;
    this.timeout = this.socket.timeout;
    this.joinedOnce = false;
    this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
    this.pushBuffer = [];
    this.stateChangeRefs = [];
    this.rejoinTimer = new Timer(() => {
      if (this.socket.isConnected()) {
        this.rejoin();
      }
    }, this.socket.rejoinAfterMs);
    this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
    this.stateChangeRefs.push(
      this.socket.onOpen(() => {
        this.rejoinTimer.reset();
        if (this.isErrored()) {
          this.rejoin();
        }
      })
    );
    this.joinPush.receive("ok", () => {
      this.state = CHANNEL_STATES.joined;
      this.rejoinTimer.reset();
      this.pushBuffer.forEach((pushEvent) => pushEvent.send());
      this.pushBuffer = [];
    });
    this.joinPush.receive("error", () => {
      this.state = CHANNEL_STATES.errored;
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.onClose(() => {
      this.rejoinTimer.reset();
      if (this.socket.hasLogger())
        this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
      this.state = CHANNEL_STATES.closed;
      this.socket.remove(this);
    });
    this.onError((reason) => {
      if (this.socket.hasLogger())
        this.socket.log("channel", `error ${this.topic}`, reason);
      if (this.isJoining()) {
        this.joinPush.reset();
      }
      this.state = CHANNEL_STATES.errored;
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.joinPush.receive("timeout", () => {
      if (this.socket.hasLogger())
        this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout);
      let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), this.timeout);
      leavePush.send();
      this.state = CHANNEL_STATES.errored;
      this.joinPush.reset();
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
      this.trigger(this.replyEventName(ref), payload);
    });
  }
  /**
   * Join the channel
   * @param {integer} timeout
   * @returns {Push}
   */
  join(timeout = this.timeout) {
    if (this.joinedOnce) {
      throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
    } else {
      this.timeout = timeout;
      this.joinedOnce = true;
      this.rejoin();
      return this.joinPush;
    }
  }
  /**
   * Hook into channel close
   * @param {Function} callback
   */
  onClose(callback) {
    this.on(CHANNEL_EVENTS.close, callback);
  }
  /**
   * Hook into channel errors
   * @param {Function} callback
   */
  onError(callback) {
    return this.on(CHANNEL_EVENTS.error, (reason) => callback(reason));
  }
  /**
   * Subscribes on channel events
   *
   * Subscription returns a ref counter, which can be used later to
   * unsubscribe the exact event listener
   *
   * @example
   * const ref1 = channel.on("event", do_stuff)
   * const ref2 = channel.on("event", do_other_stuff)
   * channel.off("event", ref1)
   * // Since unsubscription, do_stuff won't fire,
   * // while do_other_stuff will keep firing on the "event"
   *
   * @param {string} event
   * @param {Function} callback
   * @returns {integer} ref
   */
  on(event2, callback) {
    let ref = this.bindingRef++;
    this.bindings.push({ event: event2, ref, callback });
    return ref;
  }
  /**
   * Unsubscribes off of channel events
   *
   * Use the ref returned from a channel.on() to unsubscribe one
   * handler, or pass nothing for the ref to unsubscribe all
   * handlers for the given event.
   *
   * @example
   * // Unsubscribe the do_stuff handler
   * const ref1 = channel.on("event", do_stuff)
   * channel.off("event", ref1)
   *
   * // Unsubscribe all handlers from event
   * channel.off("event")
   *
   * @param {string} event
   * @param {integer} ref
   */
  off(event2, ref) {
    this.bindings = this.bindings.filter((bind) => {
      return !(bind.event === event2 && (typeof ref === "undefined" || ref === bind.ref));
    });
  }
  /**
   * @private
   */
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  /**
   * Sends a message `event` to phoenix with the payload `payload`.
   * Phoenix receives this in the `handle_in(event, payload, socket)`
   * function. if phoenix replies or it times out (default 10000ms),
   * then optionally the reply can be received.
   *
   * @example
   * channel.push("event")
   *   .receive("ok", payload => console.log("phoenix replied:", payload))
   *   .receive("error", err => console.log("phoenix errored", err))
   *   .receive("timeout", () => console.log("timed out pushing"))
   * @param {string} event
   * @param {Object} payload
   * @param {number} [timeout]
   * @returns {Push}
   */
  push(event2, payload, timeout = this.timeout) {
    payload = payload || {};
    if (!this.joinedOnce) {
      throw new Error(`tried to push '${event2}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
    }
    let pushEvent = new Push(this, event2, function() {
      return payload;
    }, timeout);
    if (this.canPush()) {
      pushEvent.send();
    } else {
      pushEvent.startTimeout();
      this.pushBuffer.push(pushEvent);
    }
    return pushEvent;
  }
  /** Leaves the channel
   *
   * Unsubscribes from server events, and
   * instructs channel to terminate on server
   *
   * Triggers onClose() hooks
   *
   * To receive leave acknowledgements, use the `receive`
   * hook to bind to the server ack, ie:
   *
   * @example
   * channel.leave().receive("ok", () => alert("left!") )
   *
   * @param {integer} timeout
   * @returns {Push}
   */
  leave(timeout = this.timeout) {
    this.rejoinTimer.reset();
    this.joinPush.cancelTimeout();
    this.state = CHANNEL_STATES.leaving;
    let onClose = () => {
      if (this.socket.hasLogger())
        this.socket.log("channel", `leave ${this.topic}`);
      this.trigger(CHANNEL_EVENTS.close, "leave");
    };
    let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), timeout);
    leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
    leavePush.send();
    if (!this.canPush()) {
      leavePush.trigger("ok", {});
    }
    return leavePush;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling
   * before dispatching to the channel callbacks.
   *
   * Must return the payload, modified or unmodified
   * @param {string} event
   * @param {Object} payload
   * @param {integer} ref
   * @returns {Object}
   */
  onMessage(_event, payload, _ref) {
    return payload;
  }
  /**
   * @private
   */
  isMember(topic, event2, payload, joinRef) {
    if (this.topic !== topic) {
      return false;
    }
    if (joinRef && joinRef !== this.joinRef()) {
      if (this.socket.hasLogger())
        this.socket.log("channel", "dropping outdated message", { topic, event: event2, payload, joinRef });
      return false;
    } else {
      return true;
    }
  }
  /**
   * @private
   */
  joinRef() {
    return this.joinPush.ref;
  }
  /**
   * @private
   */
  rejoin(timeout = this.timeout) {
    if (this.isLeaving()) {
      return;
    }
    this.socket.leaveOpenTopic(this.topic);
    this.state = CHANNEL_STATES.joining;
    this.joinPush.resend(timeout);
  }
  /**
   * @private
   */
  trigger(event2, payload, ref, joinRef) {
    let handledPayload = this.onMessage(event2, payload, ref, joinRef);
    if (payload && !handledPayload) {
      throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
    }
    let eventBindings = this.bindings.filter((bind) => bind.event === event2);
    for (let i = 0; i < eventBindings.length; i++) {
      let bind = eventBindings[i];
      bind.callback(handledPayload, ref, joinRef || this.joinRef());
    }
  }
  /**
   * @private
   */
  replyEventName(ref) {
    return `chan_reply_${ref}`;
  }
  /**
   * @private
   */
  isClosed() {
    return this.state === CHANNEL_STATES.closed;
  }
  /**
   * @private
   */
  isErrored() {
    return this.state === CHANNEL_STATES.errored;
  }
  /**
   * @private
   */
  isJoined() {
    return this.state === CHANNEL_STATES.joined;
  }
  /**
   * @private
   */
  isJoining() {
    return this.state === CHANNEL_STATES.joining;
  }
  /**
   * @private
   */
  isLeaving() {
    return this.state === CHANNEL_STATES.leaving;
  }
};
var Ajax = class {
  static request(method, endPoint, accept, body, timeout, ontimeout, callback) {
    if (global.XDomainRequest) {
      let req = new global.XDomainRequest();
      return this.xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback);
    } else {
      let req = new global.XMLHttpRequest();
      return this.xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback);
    }
  }
  static xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback) {
    req.timeout = timeout;
    req.open(method, endPoint);
    req.onload = () => {
      let response = this.parseJSON(req.responseText);
      callback && callback(response);
    };
    if (ontimeout) {
      req.ontimeout = ontimeout;
    }
    req.onprogress = () => {
    };
    req.send(body);
    return req;
  }
  static xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback) {
    req.open(method, endPoint, true);
    req.timeout = timeout;
    req.setRequestHeader("Content-Type", accept);
    req.onerror = () => callback && callback(null);
    req.onreadystatechange = () => {
      if (req.readyState === XHR_STATES.complete && callback) {
        let response = this.parseJSON(req.responseText);
        callback(response);
      }
    };
    if (ontimeout) {
      req.ontimeout = ontimeout;
    }
    req.send(body);
    return req;
  }
  static parseJSON(resp) {
    if (!resp || resp === "") {
      return null;
    }
    try {
      return JSON.parse(resp);
    } catch (e) {
      console && console.log("failed to parse JSON response", resp);
      return null;
    }
  }
  static serialize(obj, parentKey) {
    let queryStr = [];
    for (var key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        continue;
      }
      let paramKey = parentKey ? `${parentKey}[${key}]` : key;
      let paramVal = obj[key];
      if (typeof paramVal === "object") {
        queryStr.push(this.serialize(paramVal, paramKey));
      } else {
        queryStr.push(encodeURIComponent(paramKey) + "=" + encodeURIComponent(paramVal));
      }
    }
    return queryStr.join("&");
  }
  static appendParams(url, params) {
    if (Object.keys(params).length === 0) {
      return url;
    }
    let prefix = url.match(/\?/) ? "&" : "?";
    return `${url}${prefix}${this.serialize(params)}`;
  }
};
var arrayBufferToBase64 = (buffer) => {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};
var LongPoll = class {
  constructor(endPoint) {
    this.endPoint = null;
    this.token = null;
    this.skipHeartbeat = true;
    this.reqs = /* @__PURE__ */ new Set();
    this.awaitingBatchAck = false;
    this.currentBatch = null;
    this.currentBatchTimer = null;
    this.batchBuffer = [];
    this.onopen = function() {
    };
    this.onerror = function() {
    };
    this.onmessage = function() {
    };
    this.onclose = function() {
    };
    this.pollEndpoint = this.normalizeEndpoint(endPoint);
    this.readyState = SOCKET_STATES.connecting;
    setTimeout(() => this.poll(), 0);
  }
  normalizeEndpoint(endPoint) {
    return endPoint.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + TRANSPORTS.websocket), "$1/" + TRANSPORTS.longpoll);
  }
  endpointURL() {
    return Ajax.appendParams(this.pollEndpoint, { token: this.token });
  }
  closeAndRetry(code, reason, wasClean) {
    this.close(code, reason, wasClean);
    this.readyState = SOCKET_STATES.connecting;
  }
  ontimeout() {
    this.onerror("timeout");
    this.closeAndRetry(1005, "timeout", false);
  }
  isActive() {
    return this.readyState === SOCKET_STATES.open || this.readyState === SOCKET_STATES.connecting;
  }
  poll() {
    this.ajax("GET", "application/json", null, () => this.ontimeout(), (resp) => {
      if (resp) {
        var { status, token, messages } = resp;
        this.token = token;
      } else {
        status = 0;
      }
      switch (status) {
        case 200:
          messages.forEach((msg) => {
            setTimeout(() => this.onmessage({ data: msg }), 0);
          });
          this.poll();
          break;
        case 204:
          this.poll();
          break;
        case 410:
          this.readyState = SOCKET_STATES.open;
          this.onopen({});
          this.poll();
          break;
        case 403:
          this.onerror(403);
          this.close(1008, "forbidden", false);
          break;
        case 0:
        case 500:
          this.onerror(500);
          this.closeAndRetry(1011, "internal server error", 500);
          break;
        default:
          throw new Error(`unhandled poll status ${status}`);
      }
    });
  }
  // we collect all pushes within the current event loop by
  // setTimeout 0, which optimizes back-to-back procedural
  // pushes against an empty buffer
  send(body) {
    if (typeof body !== "string") {
      body = arrayBufferToBase64(body);
    }
    if (this.currentBatch) {
      this.currentBatch.push(body);
    } else if (this.awaitingBatchAck) {
      this.batchBuffer.push(body);
    } else {
      this.currentBatch = [body];
      this.currentBatchTimer = setTimeout(() => {
        this.batchSend(this.currentBatch);
        this.currentBatch = null;
      }, 0);
    }
  }
  batchSend(messages) {
    this.awaitingBatchAck = true;
    this.ajax("POST", "application/x-ndjson", messages.join("\n"), () => this.onerror("timeout"), (resp) => {
      this.awaitingBatchAck = false;
      if (!resp || resp.status !== 200) {
        this.onerror(resp && resp.status);
        this.closeAndRetry(1011, "internal server error", false);
      } else if (this.batchBuffer.length > 0) {
        this.batchSend(this.batchBuffer);
        this.batchBuffer = [];
      }
    });
  }
  close(code, reason, wasClean) {
    for (let req of this.reqs) {
      req.abort();
    }
    this.readyState = SOCKET_STATES.closed;
    let opts = Object.assign({ code: 1e3, reason: void 0, wasClean: true }, { code, reason, wasClean });
    this.batchBuffer = [];
    clearTimeout(this.currentBatchTimer);
    this.currentBatchTimer = null;
    if (typeof CloseEvent !== "undefined") {
      this.onclose(new CloseEvent("close", opts));
    } else {
      this.onclose(opts);
    }
  }
  ajax(method, contentType, body, onCallerTimeout, callback) {
    let req;
    let ontimeout = () => {
      this.reqs.delete(req);
      onCallerTimeout();
    };
    req = Ajax.request(method, this.endpointURL(), contentType, body, this.timeout, ontimeout, (resp) => {
      this.reqs.delete(req);
      if (this.isActive()) {
        callback(resp);
      }
    });
    this.reqs.add(req);
  }
};
var Presence = class {
  constructor(channel, opts = {}) {
    let events = opts.events || { state: "presence_state", diff: "presence_diff" };
    this.state = {};
    this.pendingDiffs = [];
    this.channel = channel;
    this.joinRef = null;
    this.caller = {
      onJoin: function() {
      },
      onLeave: function() {
      },
      onSync: function() {
      }
    };
    this.channel.on(events.state, (newState) => {
      let { onJoin, onLeave, onSync } = this.caller;
      this.joinRef = this.channel.joinRef();
      this.state = Presence.syncState(this.state, newState, onJoin, onLeave);
      this.pendingDiffs.forEach((diff) => {
        this.state = Presence.syncDiff(this.state, diff, onJoin, onLeave);
      });
      this.pendingDiffs = [];
      onSync();
    });
    this.channel.on(events.diff, (diff) => {
      let { onJoin, onLeave, onSync } = this.caller;
      if (this.inPendingSyncState()) {
        this.pendingDiffs.push(diff);
      } else {
        this.state = Presence.syncDiff(this.state, diff, onJoin, onLeave);
        onSync();
      }
    });
  }
  onJoin(callback) {
    this.caller.onJoin = callback;
  }
  onLeave(callback) {
    this.caller.onLeave = callback;
  }
  onSync(callback) {
    this.caller.onSync = callback;
  }
  list(by) {
    return Presence.list(this.state, by);
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel.joinRef();
  }
  // lower-level public static API
  /**
   * Used to sync the list of presences on the server
   * with the client's state. An optional `onJoin` and `onLeave` callback can
   * be provided to react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @returns {Presence}
   */
  static syncState(currentState, newState, onJoin, onLeave) {
    let state2 = this.clone(currentState);
    let joins = {};
    let leaves = {};
    this.map(state2, (key, presence) => {
      if (!newState[key]) {
        leaves[key] = presence;
      }
    });
    this.map(newState, (key, newPresence) => {
      let currentPresence = state2[key];
      if (currentPresence) {
        let newRefs = newPresence.metas.map((m) => m.phx_ref);
        let curRefs = currentPresence.metas.map((m) => m.phx_ref);
        let joinedMetas = newPresence.metas.filter((m) => curRefs.indexOf(m.phx_ref) < 0);
        let leftMetas = currentPresence.metas.filter((m) => newRefs.indexOf(m.phx_ref) < 0);
        if (joinedMetas.length > 0) {
          joins[key] = newPresence;
          joins[key].metas = joinedMetas;
        }
        if (leftMetas.length > 0) {
          leaves[key] = this.clone(currentPresence);
          leaves[key].metas = leftMetas;
        }
      } else {
        joins[key] = newPresence;
      }
    });
    return this.syncDiff(state2, { joins, leaves }, onJoin, onLeave);
  }
  /**
   *
   * Used to sync a diff of presence join and leave
   * events from the server, as they happen. Like `syncState`, `syncDiff`
   * accepts optional `onJoin` and `onLeave` callbacks to react to a user
   * joining or leaving from a device.
   *
   * @returns {Presence}
   */
  static syncDiff(state2, diff, onJoin, onLeave) {
    let { joins, leaves } = this.clone(diff);
    if (!onJoin) {
      onJoin = function() {
      };
    }
    if (!onLeave) {
      onLeave = function() {
      };
    }
    this.map(joins, (key, newPresence) => {
      let currentPresence = state2[key];
      state2[key] = this.clone(newPresence);
      if (currentPresence) {
        let joinedRefs = state2[key].metas.map((m) => m.phx_ref);
        let curMetas = currentPresence.metas.filter((m) => joinedRefs.indexOf(m.phx_ref) < 0);
        state2[key].metas.unshift(...curMetas);
      }
      onJoin(key, currentPresence, newPresence);
    });
    this.map(leaves, (key, leftPresence) => {
      let currentPresence = state2[key];
      if (!currentPresence) {
        return;
      }
      let refsToRemove = leftPresence.metas.map((m) => m.phx_ref);
      currentPresence.metas = currentPresence.metas.filter((p) => {
        return refsToRemove.indexOf(p.phx_ref) < 0;
      });
      onLeave(key, currentPresence, leftPresence);
      if (currentPresence.metas.length === 0) {
        delete state2[key];
      }
    });
    return state2;
  }
  /**
   * Returns the array of presences, with selected metadata.
   *
   * @param {Object} presences
   * @param {Function} chooser
   *
   * @returns {Presence}
   */
  static list(presences, chooser) {
    if (!chooser) {
      chooser = function(key, pres) {
        return pres;
      };
    }
    return this.map(presences, (key, presence) => {
      return chooser(key, presence);
    });
  }
  // private
  static map(obj, func) {
    return Object.getOwnPropertyNames(obj).map((key) => func(key, obj[key]));
  }
  static clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
};
var serializer_default = {
  HEADER_LENGTH: 1,
  META_LENGTH: 4,
  KINDS: { push: 0, reply: 1, broadcast: 2 },
  encode(msg, callback) {
    if (msg.payload.constructor === ArrayBuffer) {
      return callback(this.binaryEncode(msg));
    } else {
      let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
      return callback(JSON.stringify(payload));
    }
  },
  decode(rawPayload, callback) {
    if (rawPayload.constructor === ArrayBuffer) {
      return callback(this.binaryDecode(rawPayload));
    } else {
      let [join_ref, ref, topic, event2, payload] = JSON.parse(rawPayload);
      return callback({ join_ref, ref, topic, event: event2, payload });
    }
  },
  // private
  binaryEncode(message) {
    let { join_ref, ref, event: event2, topic, payload } = message;
    let metaLength = this.META_LENGTH + join_ref.length + ref.length + topic.length + event2.length;
    let header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
    let view = new DataView(header);
    let offset = 0;
    view.setUint8(offset++, this.KINDS.push);
    view.setUint8(offset++, join_ref.length);
    view.setUint8(offset++, ref.length);
    view.setUint8(offset++, topic.length);
    view.setUint8(offset++, event2.length);
    Array.from(join_ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(event2, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    var combined = new Uint8Array(header.byteLength + payload.byteLength);
    combined.set(new Uint8Array(header), 0);
    combined.set(new Uint8Array(payload), header.byteLength);
    return combined.buffer;
  },
  binaryDecode(buffer) {
    let view = new DataView(buffer);
    let kind = view.getUint8(0);
    let decoder = new TextDecoder();
    switch (kind) {
      case this.KINDS.push:
        return this.decodePush(buffer, view, decoder);
      case this.KINDS.reply:
        return this.decodeReply(buffer, view, decoder);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(buffer, view, decoder);
    }
  },
  decodePush(buffer, view, decoder) {
    let joinRefSize = view.getUint8(1);
    let topicSize = view.getUint8(2);
    let eventSize = view.getUint8(3);
    let offset = this.HEADER_LENGTH + this.META_LENGTH - 1;
    let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
    offset = offset + joinRefSize;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event2 = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data = buffer.slice(offset, buffer.byteLength);
    return { join_ref: joinRef, ref: null, topic, event: event2, payload: data };
  },
  decodeReply(buffer, view, decoder) {
    let joinRefSize = view.getUint8(1);
    let refSize = view.getUint8(2);
    let topicSize = view.getUint8(3);
    let eventSize = view.getUint8(4);
    let offset = this.HEADER_LENGTH + this.META_LENGTH;
    let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
    offset = offset + joinRefSize;
    let ref = decoder.decode(buffer.slice(offset, offset + refSize));
    offset = offset + refSize;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event2 = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data = buffer.slice(offset, buffer.byteLength);
    let payload = { status: event2, response: data };
    return { join_ref: joinRef, ref, topic, event: CHANNEL_EVENTS.reply, payload };
  },
  decodeBroadcast(buffer, view, decoder) {
    let topicSize = view.getUint8(1);
    let eventSize = view.getUint8(2);
    let offset = this.HEADER_LENGTH + 2;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event2 = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data = buffer.slice(offset, buffer.byteLength);
    return { join_ref: null, ref: null, topic, event: event2, payload: data };
  }
};
var Socket = class {
  constructor(endPoint, opts = {}) {
    this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] };
    this.channels = [];
    this.sendBuffer = [];
    this.ref = 0;
    this.timeout = opts.timeout || DEFAULT_TIMEOUT;
    this.transport = opts.transport || global.WebSocket || LongPoll;
    this.primaryPassedHealthCheck = false;
    this.longPollFallbackMs = opts.longPollFallbackMs;
    this.fallbackTimer = null;
    this.sessionStore = opts.sessionStorage || global && global.sessionStorage;
    this.establishedConnections = 0;
    this.defaultEncoder = serializer_default.encode.bind(serializer_default);
    this.defaultDecoder = serializer_default.decode.bind(serializer_default);
    this.closeWasClean = false;
    this.disconnecting = false;
    this.binaryType = opts.binaryType || "arraybuffer";
    this.connectClock = 1;
    if (this.transport !== LongPoll) {
      this.encode = opts.encode || this.defaultEncoder;
      this.decode = opts.decode || this.defaultDecoder;
    } else {
      this.encode = this.defaultEncoder;
      this.decode = this.defaultDecoder;
    }
    let awaitingConnectionOnPageShow = null;
    if (phxWindow && phxWindow.addEventListener) {
      phxWindow.addEventListener("pagehide", (_e) => {
        if (this.conn) {
          this.disconnect();
          awaitingConnectionOnPageShow = this.connectClock;
        }
      });
      phxWindow.addEventListener("pageshow", (_e) => {
        if (awaitingConnectionOnPageShow === this.connectClock) {
          awaitingConnectionOnPageShow = null;
          this.connect();
        }
      });
    }
    this.heartbeatIntervalMs = opts.heartbeatIntervalMs || 3e4;
    this.rejoinAfterMs = (tries) => {
      if (opts.rejoinAfterMs) {
        return opts.rejoinAfterMs(tries);
      } else {
        return [1e3, 2e3, 5e3][tries - 1] || 1e4;
      }
    };
    this.reconnectAfterMs = (tries) => {
      if (opts.reconnectAfterMs) {
        return opts.reconnectAfterMs(tries);
      } else {
        return [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][tries - 1] || 5e3;
      }
    };
    this.logger = opts.logger || null;
    if (!this.logger && opts.debug) {
      this.logger = (kind, msg, data) => {
        console.log(`${kind}: ${msg}`, data);
      };
    }
    this.longpollerTimeout = opts.longpollerTimeout || 2e4;
    this.params = closure(opts.params || {});
    this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
    this.vsn = opts.vsn || DEFAULT_VSN;
    this.heartbeatTimeoutTimer = null;
    this.heartbeatTimer = null;
    this.pendingHeartbeatRef = null;
    this.reconnectTimer = new Timer(() => {
      this.teardown(() => this.connect());
    }, this.reconnectAfterMs);
  }
  /**
   * Returns the LongPoll transport reference
   */
  getLongPollTransport() {
    return LongPoll;
  }
  /**
   * Disconnects and replaces the active transport
   *
   * @param {Function} newTransport - The new transport class to instantiate
   *
   */
  replaceTransport(newTransport) {
    this.connectClock++;
    this.closeWasClean = true;
    clearTimeout(this.fallbackTimer);
    this.reconnectTimer.reset();
    if (this.conn) {
      this.conn.close();
      this.conn = null;
    }
    this.transport = newTransport;
  }
  /**
   * Returns the socket protocol
   *
   * @returns {string}
   */
  protocol() {
    return location.protocol.match(/^https/) ? "wss" : "ws";
  }
  /**
   * The fully qualified socket url
   *
   * @returns {string}
   */
  endPointURL() {
    let uri = Ajax.appendParams(
      Ajax.appendParams(this.endPoint, this.params()),
      { vsn: this.vsn }
    );
    if (uri.charAt(0) !== "/") {
      return uri;
    }
    if (uri.charAt(1) === "/") {
      return `${this.protocol()}:${uri}`;
    }
    return `${this.protocol()}://${location.host}${uri}`;
  }
  /**
   * Disconnects the socket
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes for valid status codes.
   *
   * @param {Function} callback - Optional callback which is called after socket is disconnected.
   * @param {integer} code - A status code for disconnection (Optional).
   * @param {string} reason - A textual description of the reason to disconnect. (Optional)
   */
  disconnect(callback, code, reason) {
    this.connectClock++;
    this.disconnecting = true;
    this.closeWasClean = true;
    clearTimeout(this.fallbackTimer);
    this.reconnectTimer.reset();
    this.teardown(() => {
      this.disconnecting = false;
      callback && callback();
    }, code, reason);
  }
  /**
   *
   * @param {Object} params - The params to send when connecting, for example `{user_id: userToken}`
   *
   * Passing params to connect is deprecated; pass them in the Socket constructor instead:
   * `new Socket("/socket", {params: {user_id: userToken}})`.
   */
  connect(params) {
    if (params) {
      console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
      this.params = closure(params);
    }
    if (this.conn && !this.disconnecting) {
      return;
    }
    if (this.longPollFallbackMs && this.transport !== LongPoll) {
      this.connectWithFallback(LongPoll, this.longPollFallbackMs);
    } else {
      this.transportConnect();
    }
  }
  /**
   * Logs the message. Override `this.logger` for specialized logging. noops by default
   * @param {string} kind
   * @param {string} msg
   * @param {Object} data
   */
  log(kind, msg, data) {
    this.logger && this.logger(kind, msg, data);
  }
  /**
   * Returns true if a logger has been set on this socket.
   */
  hasLogger() {
    return this.logger !== null;
  }
  /**
   * Registers callbacks for connection open events
   *
   * @example socket.onOpen(function(){ console.info("the socket was opened") })
   *
   * @param {Function} callback
   */
  onOpen(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.open.push([ref, callback]);
    return ref;
  }
  /**
   * Registers callbacks for connection close events
   * @param {Function} callback
   */
  onClose(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.close.push([ref, callback]);
    return ref;
  }
  /**
   * Registers callbacks for connection error events
   *
   * @example socket.onError(function(error){ alert("An error occurred") })
   *
   * @param {Function} callback
   */
  onError(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.error.push([ref, callback]);
    return ref;
  }
  /**
   * Registers callbacks for connection message events
   * @param {Function} callback
   */
  onMessage(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.message.push([ref, callback]);
    return ref;
  }
  /**
   * Pings the server and invokes the callback with the RTT in milliseconds
   * @param {Function} callback
   *
   * Returns true if the ping was pushed or false if unable to be pushed.
   */
  ping(callback) {
    if (!this.isConnected()) {
      return false;
    }
    let ref = this.makeRef();
    let startTime = Date.now();
    this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref });
    let onMsgRef = this.onMessage((msg) => {
      if (msg.ref === ref) {
        this.off([onMsgRef]);
        callback(Date.now() - startTime);
      }
    });
    return true;
  }
  /**
   * @private
   */
  transportConnect() {
    this.connectClock++;
    this.closeWasClean = false;
    this.conn = new this.transport(this.endPointURL());
    this.conn.binaryType = this.binaryType;
    this.conn.timeout = this.longpollerTimeout;
    this.conn.onopen = () => this.onConnOpen();
    this.conn.onerror = (error) => this.onConnError(error);
    this.conn.onmessage = (event2) => this.onConnMessage(event2);
    this.conn.onclose = (event2) => this.onConnClose(event2);
  }
  getSession(key) {
    return this.sessionStore && this.sessionStore.getItem(key);
  }
  storeSession(key, val) {
    this.sessionStore && this.sessionStore.setItem(key, val);
  }
  connectWithFallback(fallbackTransport, fallbackThreshold = 2500) {
    clearTimeout(this.fallbackTimer);
    let established = false;
    let primaryTransport = true;
    let openRef, errorRef;
    let fallback2 = (reason) => {
      this.log("transport", `falling back to ${fallbackTransport.name}...`, reason);
      this.off([openRef, errorRef]);
      primaryTransport = false;
      this.replaceTransport(fallbackTransport);
      this.transportConnect();
    };
    if (this.getSession(`phx:fallback:${fallbackTransport.name}`)) {
      return fallback2("memorized");
    }
    this.fallbackTimer = setTimeout(fallback2, fallbackThreshold);
    errorRef = this.onError((reason) => {
      this.log("transport", "error", reason);
      if (primaryTransport && !established) {
        clearTimeout(this.fallbackTimer);
        fallback2(reason);
      }
    });
    this.onOpen(() => {
      established = true;
      if (!primaryTransport) {
        if (!this.primaryPassedHealthCheck) {
          this.storeSession(`phx:fallback:${fallbackTransport.name}`, "true");
        }
        return this.log("transport", `established ${fallbackTransport.name} fallback`);
      }
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = setTimeout(fallback2, fallbackThreshold);
      this.ping((rtt) => {
        this.log("transport", "connected to primary after", rtt);
        this.primaryPassedHealthCheck = true;
        clearTimeout(this.fallbackTimer);
      });
    });
    this.transportConnect();
  }
  clearHeartbeats() {
    clearTimeout(this.heartbeatTimer);
    clearTimeout(this.heartbeatTimeoutTimer);
  }
  onConnOpen() {
    if (this.hasLogger())
      this.log("transport", `${this.transport.name} connected to ${this.endPointURL()}`);
    this.closeWasClean = false;
    this.disconnecting = false;
    this.establishedConnections++;
    this.flushSendBuffer();
    this.reconnectTimer.reset();
    this.resetHeartbeat();
    this.stateChangeCallbacks.open.forEach(([, callback]) => callback());
  }
  /**
   * @private
   */
  heartbeatTimeout() {
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null;
      if (this.hasLogger()) {
        this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      }
      this.triggerChanError();
      this.closeWasClean = false;
      this.teardown(() => this.reconnectTimer.scheduleTimeout(), WS_CLOSE_NORMAL, "heartbeat timeout");
    }
  }
  resetHeartbeat() {
    if (this.conn && this.conn.skipHeartbeat) {
      return;
    }
    this.pendingHeartbeatRef = null;
    this.clearHeartbeats();
    this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  teardown(callback, code, reason) {
    if (!this.conn) {
      return callback && callback();
    }
    let connectClock = this.connectClock;
    this.waitForBufferDone(() => {
      if (connectClock !== this.connectClock) {
        return;
      }
      if (this.conn) {
        if (code) {
          this.conn.close(code, reason || "");
        } else {
          this.conn.close();
        }
      }
      this.waitForSocketClosed(() => {
        if (connectClock !== this.connectClock) {
          return;
        }
        if (this.conn) {
          this.conn.onopen = function() {
          };
          this.conn.onerror = function() {
          };
          this.conn.onmessage = function() {
          };
          this.conn.onclose = function() {
          };
          this.conn = null;
        }
        callback && callback();
      });
    });
  }
  waitForBufferDone(callback, tries = 1) {
    if (tries === 5 || !this.conn || !this.conn.bufferedAmount) {
      callback();
      return;
    }
    setTimeout(() => {
      this.waitForBufferDone(callback, tries + 1);
    }, 150 * tries);
  }
  waitForSocketClosed(callback, tries = 1) {
    if (tries === 5 || !this.conn || this.conn.readyState === SOCKET_STATES.closed) {
      callback();
      return;
    }
    setTimeout(() => {
      this.waitForSocketClosed(callback, tries + 1);
    }, 150 * tries);
  }
  onConnClose(event2) {
    let closeCode = event2 && event2.code;
    if (this.hasLogger())
      this.log("transport", "close", event2);
    this.triggerChanError();
    this.clearHeartbeats();
    if (!this.closeWasClean && closeCode !== 1e3) {
      this.reconnectTimer.scheduleTimeout();
    }
    this.stateChangeCallbacks.close.forEach(([, callback]) => callback(event2));
  }
  /**
   * @private
   */
  onConnError(error) {
    if (this.hasLogger())
      this.log("transport", error);
    let transportBefore = this.transport;
    let establishedBefore = this.establishedConnections;
    this.stateChangeCallbacks.error.forEach(([, callback]) => {
      callback(error, transportBefore, establishedBefore);
    });
    if (transportBefore === this.transport || establishedBefore > 0) {
      this.triggerChanError();
    }
  }
  /**
   * @private
   */
  triggerChanError() {
    this.channels.forEach((channel) => {
      if (!(channel.isErrored() || channel.isLeaving() || channel.isClosed())) {
        channel.trigger(CHANNEL_EVENTS.error);
      }
    });
  }
  /**
   * @returns {string}
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case SOCKET_STATES.connecting:
        return "connecting";
      case SOCKET_STATES.open:
        return "open";
      case SOCKET_STATES.closing:
        return "closing";
      default:
        return "closed";
    }
  }
  /**
   * @returns {boolean}
   */
  isConnected() {
    return this.connectionState() === "open";
  }
  /**
   * @private
   *
   * @param {Channel}
   */
  remove(channel) {
    this.off(channel.stateChangeRefs);
    this.channels = this.channels.filter((c) => c !== channel);
  }
  /**
   * Removes `onOpen`, `onClose`, `onError,` and `onMessage` registrations.
   *
   * @param {refs} - list of refs returned by calls to
   *                 `onOpen`, `onClose`, `onError,` and `onMessage`
   */
  off(refs) {
    for (let key in this.stateChangeCallbacks) {
      this.stateChangeCallbacks[key] = this.stateChangeCallbacks[key].filter(([ref]) => {
        return refs.indexOf(ref) === -1;
      });
    }
  }
  /**
   * Initiates a new channel for the given topic
   *
   * @param {string} topic
   * @param {Object} chanParams - Parameters for the channel
   * @returns {Channel}
   */
  channel(topic, chanParams = {}) {
    let chan = new Channel(topic, chanParams, this);
    this.channels.push(chan);
    return chan;
  }
  /**
   * @param {Object} data
   */
  push(data) {
    if (this.hasLogger()) {
      let { topic, event: event2, payload, ref, join_ref } = data;
      this.log("push", `${topic} ${event2} (${join_ref}, ${ref})`, payload);
    }
    if (this.isConnected()) {
      this.encode(data, (result) => this.conn.send(result));
    } else {
      this.sendBuffer.push(() => this.encode(data, (result) => this.conn.send(result)));
    }
  }
  /**
   * Return the next message ref, accounting for overflows
   * @returns {string}
   */
  makeRef() {
    let newRef = this.ref + 1;
    if (newRef === this.ref) {
      this.ref = 0;
    } else {
      this.ref = newRef;
    }
    return this.ref.toString();
  }
  sendHeartbeat() {
    if (this.pendingHeartbeatRef && !this.isConnected()) {
      return;
    }
    this.pendingHeartbeatRef = this.makeRef();
    this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
    this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
  }
  flushSendBuffer() {
    if (this.isConnected() && this.sendBuffer.length > 0) {
      this.sendBuffer.forEach((callback) => callback());
      this.sendBuffer = [];
    }
  }
  onConnMessage(rawMessage) {
    this.decode(rawMessage.data, (msg) => {
      let { topic, event: event2, payload, ref, join_ref } = msg;
      if (ref && ref === this.pendingHeartbeatRef) {
        this.clearHeartbeats();
        this.pendingHeartbeatRef = null;
        this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
      }
      if (this.hasLogger())
        this.log("receive", `${payload.status || ""} ${topic} ${event2} ${ref && "(" + ref + ")" || ""}`, payload);
      for (let i = 0; i < this.channels.length; i++) {
        const channel = this.channels[i];
        if (!channel.isMember(topic, event2, payload, join_ref)) {
          continue;
        }
        channel.trigger(event2, payload, ref, join_ref);
      }
      for (let i = 0; i < this.stateChangeCallbacks.message.length; i++) {
        let [, callback] = this.stateChangeCallbacks.message[i];
        callback(msg);
      }
    });
  }
  leaveOpenTopic(topic) {
    let dupChannel = this.channels.find((c) => c.topic === topic && (c.isJoined() || c.isJoining()));
    if (dupChannel) {
      if (this.hasLogger())
        this.log("transport", `leaving duplicate topic "${topic}"`);
      dupChannel.leave();
    }
  }
};

// node_modules/svelte/src/internal/server/blocks/snippet.js
function createRawSnippet2(fn) {
  return (payload, ...args) => {
    var getters = (
      /** @type {Getters<Params>} */
      args.map((value) => () => value)
    );
    payload.out += fn(...getters).render().trim();
  };
}

// stores/liveViewSockets.js
var liveViewSockets = writable();

// svelte/Game.svelte
Game[FILENAME] = "svelte/Game.svelte";
var $$css = {
  hash: "svelte-9erqw3",
  code: "\n  .tictactoe-cell.svelte-9erqw3 {\n    &:disabled {\n      pointer-events: none;\n    }\n    &[data-cell=''] {\n      background-color: white;\n      color: black;\n    }\n\n    &[data-cell='O'][data-winning='false'] {\n      background-color: #dc2626; /* Tailwind red-600 */\n    }\n\n    &[data-cell='X'][data-winning='false'] {\n      background-color: #134e4a; /* Tailwind teal-900 */\n    }\n\n    &[data-cell='O'][data-winning='true'] {\n      background-color: #facc15; /* Tailwind yellow-400 */\n      animation: svelte-9erqw3-pulse-win 1s infinite;\n    }\n\n    &[data-cell='X'][data-winning='true'] {\n      background-color: #4ade80; /* Tailwind green-400 */\n      animation: svelte-9erqw3-pulse-win 1s infinite;\n    }\n  }\n\n  @keyframes svelte-9erqw3-pulse-win {\n    0%,\n    100% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n  }\n\n  .tictactoe-id.svelte-9erqw3 {\n    background-color: #4f46e5; /* Tailwind indigo-600 */\n    color: white;\n    &[data-cell='O'] {\n      background-color: #dc2626; /* Tailwind red-600 */\n    }\n\n    &[data-cell='X'] {\n      background-color: #134e4a; /* Tailwind teal-900 */\n    }\n  }\n\n  .in-turn.svelte-9erqw3 {\n    background-color: #4f46e5; /* Tailwind indigo-600 */\n  }\n  .banner.svelte-9erqw3 {\n    background-color: gray; /* Tailwind indigo-600 */\n    z-index: 1;\n    &[data-winner='true'] {\n      background-color: #4ade80; /* Tailwind green-400 */\n    }\n\n    &[data-winner='false'] {\n      background-color: #dc2626; /* Tailwind red-600 */\n    }\n  }\n  .board.svelte-9erqw3 {\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5zdmVsdGUiLCJtYXBwaW5ncyI6IjtBQXVOQSxFQUFFLDZCQUFlLENBQUM7QUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUNmLE1BQU0sb0JBQW9CO0FBQzFCO0FBQ0EsSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUNwQixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLFlBQVk7QUFDbEI7O0FBRUEsSUFBSSxDQUFDLGVBQWUsc0JBQXNCLENBQUM7QUFDM0MsTUFBTSx5QkFBeUI7QUFDL0I7O0FBRUEsSUFBSSxDQUFDLGVBQWUsc0JBQXNCLENBQUM7QUFDM0MsTUFBTSx5QkFBeUI7QUFDL0I7O0FBRUEsSUFBSSxDQUFDLGVBQWUscUJBQXFCLENBQUM7QUFDMUMsTUFBTSx5QkFBeUI7QUFDL0IsTUFBTSx5QkFBVyxxQkFBcUI7QUFDdEM7O0FBRUEsSUFBSSxDQUFDLGVBQWUscUJBQXFCLENBQUM7QUFDMUMsTUFBTSx5QkFBeUI7QUFDL0IsTUFBTSx5QkFBVyxxQkFBcUI7QUFDdEM7QUFDQTs7QUFFQSxFQUFFLHlCQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJCQUFhLENBQUM7QUFDaEIsSUFBSSx5QkFBeUI7QUFDN0IsSUFBSSxZQUFZO0FBQ2hCLElBQUksQ0FBQyxlQUFlLENBQUM7QUFDckIsTUFBTSx5QkFBeUI7QUFDL0I7O0FBRUEsSUFBSSxDQUFDLGVBQWUsQ0FBQztBQUNyQixNQUFNLHlCQUF5QjtBQUMvQjtBQUNBOztBQUVBLEVBQUUsc0JBQVEsQ0FBQztBQUNYLElBQUkseUJBQXlCO0FBQzdCO0FBQ0EsRUFBRSxxQkFBTyxDQUFDO0FBQ1YsSUFBSSxzQkFBc0I7QUFDMUIsSUFBSSxVQUFVO0FBQ2QsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0FBQzFCLE1BQU0seUJBQXlCO0FBQy9COztBQUVBLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztBQUMzQixNQUFNLHlCQUF5QjtBQUMvQjtBQUNBO0FBQ0EsRUFBRSxvQkFBTSxDQUFDO0FBQ1QiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkdhbWUuc3ZlbHRlIl19 */"
};
function Game($$payload, $$props) {
  $$payload.css.add($$css);
  push2(Game);
  var $$store_subs;
  let { room_name } = $$props;
  let channel;
  let presence;
  let board = [];
  let socket;
  let player = void 0;
  let container = null;
  let showLeft = false;
  let showRight = false;
  let waiting = true;
  let turn = "X";
  let winningCells = [];
  let winner = void 0;
  function updateShadows() {
    if (!container) return;
    showLeft = container.scrollLeft > 0;
    showRight = container.scrollLeft + container.clientWidth < container.scrollWidth;
  }
  noop(() => {
    let token = sessionStorage.getItem("token");
    if (!token) {
      token = ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, (c) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
      sessionStorage.setItem("token", token);
    }
    socket = new Socket("/socket", { params: { token } });
    socket.connect();
    join();
    if (store_get2($$store_subs ??= {}, "$liveViewSockets", liveViewSockets)) {
      console.log("Connected to live view socket");
    }
  });
  function generateTicTacToeBoard(height, width) {
    for (let i = 0; i < height; i++) {
      board.push([]);
      for (let j = 0; j < width; j++) {
        board[i].push("");
      }
    }
  }
  function join() {
    channel = socket.channel(`room:${room_name}`, { token: sessionStorage.getItem("token") });
    let token = sessionStorage.getItem("token");
    presence = new Presence(channel);
    channel.join().receive("ok", (resp) => {
      console.log("Joined successfully", resp);
      channel.on("played", (payload) => {
        board = payload.board;
        turn = payload.turn;
        const element2 = document.getElementById(`${payload.x}-${payload.y}`);
        const rect = element2.getBoundingClientRect();
        const isVerticallyOutOfView = rect.top <= 0 || rect.bottom >= window.innerHeight;
        const isHorizontallyOutOfView = rect.left < 0 || rect.right > window.innerWidth;
        if (isVerticallyOutOfView || isHorizontallyOutOfView) {
          document.getElementById(`${payload.x}-${payload.y}`).scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
          });
        }
      });
      channel.on("board_created", (payload) => {
        board = payload.board;
      });
      channel.on("game_over", (payload) => {
        board = payload.board;
        winningCells = payload.win_coords;
        if (payload?.winner) {
          winner = payload.winner;
        }
      });
    }).receive("error", (resp) => {
      console.log("Unable to join", resp);
      alert("Unable to join");
      window.location.href = "/lobby";
    });
    presence.onSync(() => {
      presence.list((id, meta) => {
        console.log("Presence list", id, meta);
        if (meta.metas.length < 2) {
          waiting = true;
        } else {
          waiting = false;
        }
        if (meta.metas.findIndex((m) => m.token == token) == 0) {
          player = "X";
        } else {
          player = "O";
        }
      });
    });
  }
  function ping(room) {
    channel.push("ping", {});
  }
  function play(x, y) {
    channel.push("play", { x, y, player }).receive("ok", (payload) => {
      board = payload.board;
      turn = payload.turn;
      if (payload?.game_over) {
        winningCells = payload.win_coords;
        if (payload?.winner) {
          winner = payload.winner;
        }
      }
    }).receive("error", (err) => console.log("phoenix errored", err)).receive("timeout", () => console.log("timed out pushing"));
  }
  function isWinningCell(col, row) {
    return winningCells.some(([winCol, winRow]) => winCol === col && winRow === row);
  }
  function translate_room_name(room_name2) {
    return room_name2.split("_").reduce((acc, cur) => acc + " " + cur[0].toUpperCase() + cur.slice(1), "");
  }
  $$payload.out += `<div class="flex items-center justify-between gap-2 py-2 svelte-9erqw3">`;
  push_element($$payload, "div", 141, 0);
  $$payload.out += `<h2 class="text-2xl font-semibold svelte-9erqw3">`;
  push_element($$payload, "h2", 142, 2);
  $$payload.out += `Room: ${escape_html(translate_room_name(room_name))}</h2>`;
  pop_element();
  $$payload.out += ` <button class="rounded-lg bg-red-600 px-4 py-2 text-white svelte-9erqw3">`;
  push_element($$payload, "button", 143, 2);
  $$payload.out += `Leave</button>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` `;
  if (board.length > 0 && player && !waiting) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(board);
    $$payload.out += `<div class="banner sticky inset-x-0 top-2 flex w-full items-center justify-between rounded-lg p-4 svelte-9erqw3"${attr("data-winner", winner && player == winner)}>`;
    push_element($$payload, "div", 148, 2);
    if (winner) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex w-full justify-center svelte-9erqw3">`;
      push_element($$payload, "div", 152, 6);
      $$payload.out += `<p class="text-xl font-semibold text-white svelte-9erqw3">`;
      push_element($$payload, "p", 154, 8);
      if (player == winner) {
        $$payload.out += "<!--[-->";
        $$payload.out += `You win!`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `Player ${escape_html(winner)} Wins!`;
      }
      $$payload.out += `<!--]--></p>`;
      pop_element();
      $$payload.out += `</div>`;
      pop_element();
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="flex w-full items-center justify-between gap-4 svelte-9erqw3">`;
      push_element($$payload, "div", 161, 6);
      $$payload.out += `<p${attr_class("rounded-lg bg-amber-600 px-4 py-2 text-white svelte-9erqw3", void 0, { "in-turn": turn == player })}>`;
      push_element($$payload, "p", 162, 8);
      if (turn == player) {
        $$payload.out += "<!--[-->";
        $$payload.out += `Your turn!`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `Waiting for your turn...`;
      }
      $$payload.out += `<!--]--></p>`;
      pop_element();
      $$payload.out += ` <p class="text-white svelte-9erqw3">`;
      push_element($$payload, "p", 168, 8);
      $$payload.out += `Player: <span class="tictactoe-id ml-2 inline-block rounded-lg bg-white px-2 py-1 text-black svelte-9erqw3"${attr("data-cell", player)}>`;
      push_element($$payload, "span", 170, 10);
      $$payload.out += `${escape_html(player)}</span>`;
      pop_element();
      $$payload.out += `</p>`;
      pop_element();
      $$payload.out += `</div>`;
      pop_element();
    }
    $$payload.out += `<!--]--></div>`;
    pop_element();
    $$payload.out += ` <div class="board relative mt-2 rounded-lg bg-black p-2 svelte-9erqw3">`;
    push_element($$payload, "div", 177, 2);
    if (showLeft) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="pointer-events-none absolute top-0 left-0 z-10 h-full w-6 bg-gradient-to-r from-black/20 to-transparent svelte-9erqw3">`;
      push_element($$payload, "div", 180, 6);
      $$payload.out += `</div>`;
      pop_element();
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (showRight) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="pointer-events-none absolute top-0 right-0 z-10 h-full w-6 bg-gradient-to-l from-black/20 to-transparent svelte-9erqw3">`;
      push_element($$payload, "div", 185, 6);
      $$payload.out += `</div>`;
      pop_element();
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="flex flex-col gap-2 overflow-x-auto svelte-9erqw3">`;
    push_element($$payload, "div", 189, 4);
    $$payload.out += `<!--[-->`;
    for (let col_index = 0, $$length = each_array.length; col_index < $$length; col_index++) {
      let row = each_array[col_index];
      const each_array_1 = ensure_array_like(row);
      $$payload.out += `<div class="flex min-w-max gap-2 svelte-9erqw3">`;
      push_element($$payload, "div", 193, 8);
      $$payload.out += `<!--[-->`;
      for (let row_index = 0, $$length2 = each_array_1.length; row_index < $$length2; row_index++) {
        let cell = each_array_1[row_index];
        $$payload.out += `<button${attr("disabled", turn != player || cell != "" || winningCells.length > 0, true)}${attr("id", `${stringify(col_index)}-${stringify(row_index)}`)} class="tictactoe-cell aspect-square min-h-[32px] w-full cursor-pointer rounded-md text-white svelte-9erqw3"${attr("aria-label", `${stringify(col_index)}, ${stringify(row_index)}`)}${attr("data-cell", cell)}${attr("data-winning", isWinningCell(col_index, row_index) ? "true" : "false")}>`;
        push_element($$payload, "button", 195, 12);
        $$payload.out += `${escape_html(cell)}</button>`;
        pop_element();
      }
      $$payload.out += `<!--]--></div>`;
      pop_element();
    }
    $$payload.out += `<!--]--></div>`;
    pop_element();
    $$payload.out += `</div>`;
    pop_element();
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="grid gap-2 svelte-9erqw3">`;
  push_element($$payload, "div", 209, 0);
  if (player && waiting) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="svelte-9erqw3">`;
    push_element($$payload, "p", 211, 4);
    $$payload.out += `Waiting for another player...</p>`;
    pop_element();
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop_element();
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop2();
}
Game.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
var Game_default = Game;

// svelte/GameLobby.svelte
var GameLobby_exports = {};
__export(GameLobby_exports, {
  default: () => GameLobby_default
});
GameLobby[FILENAME] = "svelte/GameLobby.svelte";
function GameLobby($$payload, $$props) {
  push2(GameLobby);
  let rooms = {};
  let socket;
  let channel;
  let presence;
  function join() {
    channel = socket.channel("lobby", { token: sessionStorage.getItem("token") });
    presence = new Presence(channel);
    channel.join().receive("ok", (resp) => {
      console.log("Joined successfully", resp);
      channel.on("channel_list", (payload) => {
        console.log("channel_list", payload);
        rooms = payload.rooms;
      });
      channel.on("room_changed", (payload) => {
        console.log("room_created", payload);
        rooms = payload.rooms;
      });
    }).receive("error", (resp) => {
      console.log("Unable to join", resp);
    });
    presence.onSync(() => {
      presence.list((id, meta) => {
      });
    });
  }
  async function create_and_join_room() {
    channel.push("create_room", { height: 20, width: 20, winning: 5 }).receive("ok", (payload) => {
      window.location.href = "/game/" + payload.room;
    }).receive("error", (err) => console.log("phoenix errored", err));
  }
  function join_room(room) {
    window.location.href = "/game/" + room;
  }
  const each_array = ensure_array_like(Object.entries(rooms));
  $$payload.out += `<div class="grid gap-2">`;
  push_element($$payload, "div", 63, 0);
  $$payload.out += `<!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [room, data] = each_array[$$index];
    if (data.count <= 1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button>`;
      push_element($$payload, "button", 66, 6);
      $$payload.out += `Join ${escape_html(room)} [${escape_html(data.height)}x${escape_html(data.width)}]</button>`;
      pop_element();
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> <button>`;
  push_element($$payload, "button", 69, 2);
  $$payload.out += `Create Room!</button>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  pop2();
}
GameLobby.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
var GameLobby_default = GameLobby;

// svelte/LiveViewSocket.svelte
var LiveViewSocket_exports = {};
__export(LiveViewSocket_exports, {
  default: () => LiveViewSocket_default
});
LiveViewSocket[FILENAME] = "svelte/LiveViewSocket.svelte";
function LiveViewSocket($$payload, $$props) {
  push2(LiveViewSocket);
  let { live, socket } = $$props;
  pop2();
}
LiveViewSocket.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
var LiveViewSocket_default = LiveViewSocket;

// svelte/_build/Elixir.DoQuickieWeb.ExampleSvelteLive.svelte
var Elixir_DoQuickieWeb_ExampleSvelteLive_exports = {};
__export(Elixir_DoQuickieWeb_ExampleSvelteLive_exports, {
  default: () => Elixir_DoQuickieWeb_ExampleSvelteLive_default
});
Elixir_DoQuickieWeb_ExampleSvelteLive[FILENAME] = "svelte/_build/Elixir.DoQuickieWeb.ExampleSvelteLive.svelte";
function Elixir_DoQuickieWeb_ExampleSvelteLive($$payload, $$props) {
  push2(Elixir_DoQuickieWeb_ExampleSvelteLive);
  pop2();
}
Elixir_DoQuickieWeb_ExampleSvelteLive.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
var Elixir_DoQuickieWeb_ExampleSvelteLive_default = Elixir_DoQuickieWeb_ExampleSvelteLive;

// import-glob:../svelte/**/*.svelte
var modules = [Game_exports, GameLobby_exports, LiveViewSocket_exports, Elixir_DoQuickieWeb_ExampleSvelteLive_exports];
var __default = modules;
var filenames = ["../svelte/Game.svelte", "../svelte/GameLobby.svelte", "../svelte/LiveViewSocket.svelte", "../svelte/_build/Elixir.DoQuickieWeb.ExampleSvelteLive.svelte"];

// ../deps/live_svelte/priv/static/live_svelte.esm.js
function normalizeComponents(components) {
  if (!Array.isArray(components.default) || !Array.isArray(components.filenames)) return components;
  const normalized = {};
  for (const [index2, module2] of components.default.entries()) {
    const Component = module2.default;
    const name = components.filenames[index2].replace("../svelte/", "").replace(".svelte", "");
    normalized[name] = Component;
  }
  return normalized;
}
function getRender(components) {
  components = normalizeComponents(components);
  return function r(name, props, slots) {
    const snippets = Object.fromEntries(
      Object.entries(slots).map(([slotName, v]) => {
        const snippet2 = createRawSnippet2((name2) => {
          return {
            render: () => v
          };
        });
        if (slotName === "default") return ["children", snippet2];
        else return [slotName, snippet2];
      })
    );
    return render(components[name], { props: { ...props, ...snippets } });
  };
}

// js/server.js
var render2 = getRender(__exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  render
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vYXNzZXRzL2pzL3NlcnZlci5qcyIsICJpbXBvcnQtZ2xvYjouLi9zdmVsdGUvKiovKi5zdmVsdGUiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvZXNjYXBpbmcuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL3NoYXJlZC9hdHRyaWJ1dGVzLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9zaGFyZWQvdXRpbHMuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9lc20tZW52L3RydWUuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9jb25zdGFudHMuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9yZWFjdGl2aXR5L2VxdWFsaXR5LmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvZXJyb3JzLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9mbGFncy9pbmRleC5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2Rldi90cmFjaW5nLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9zaGFyZWQvZXJyb3JzLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvY29udGV4dC5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L3Byb3h5LmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvcmVhY3Rpdml0eS9kZXJpdmVkcy5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L3JlYWN0aXZpdHkvc291cmNlcy5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L3dhcm5pbmdzLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvZG9tL2h5ZHJhdGlvbi5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2Rldi9lcXVhbGl0eS5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2RvbS9vcGVyYXRpb25zLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvcmVhY3Rpdml0eS9lZmZlY3RzLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvZG9tL3Rhc2suanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9ydW50aW1lLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy91dGlscy5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2RvbS9lbGVtZW50cy9ldmVudHMuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9kb20vYmxvY2tzL3N2ZWx0ZS1oZWFkLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvZG9tL3RlbXBsYXRlLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvcmVuZGVyLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9zaGFyZWQvdmFsaWRhdGUuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9kb20vZWxlbWVudHMvYXR0cmlidXRlcy5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvc3RvcmUvc2hhcmVkL2luZGV4LmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvcmVhY3Rpdml0eS9zdG9yZS5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvbGVnYWN5L2xlZ2FjeS1jbGllbnQuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9kb20vZWxlbWVudHMvY3VzdG9tLWVsZW1lbnQuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2luZGV4LWNsaWVudC5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvc3RvcmUvdXRpbHMuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL3NlcnZlci9jb250ZXh0LmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9zZXJ2ZXIvaHlkcmF0aW9uLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9odG1sLXRyZWUtdmFsaWRhdGlvbi5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvc2VydmVyL3BheWxvYWQuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL3NlcnZlci9kZXYuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL3NlcnZlci9pbmRleC5qcyIsICIuLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvdXRpbHMuanMiLCAiLi4vLi4vZGVwcy9waG9lbml4L2Fzc2V0cy9qcy9waG9lbml4L2NvbnN0YW50cy5qcyIsICIuLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvcHVzaC5qcyIsICIuLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvdGltZXIuanMiLCAiLi4vLi4vZGVwcy9waG9lbml4L2Fzc2V0cy9qcy9waG9lbml4L2NoYW5uZWwuanMiLCAiLi4vLi4vZGVwcy9waG9lbml4L2Fzc2V0cy9qcy9waG9lbml4L2FqYXguanMiLCAiLi4vLi4vZGVwcy9waG9lbml4L2Fzc2V0cy9qcy9waG9lbml4L2xvbmdwb2xsLmpzIiwgIi4uLy4uL2RlcHMvcGhvZW5peC9hc3NldHMvanMvcGhvZW5peC9wcmVzZW5jZS5qcyIsICIuLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvc2VyaWFsaXplci5qcyIsICIuLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvc29ja2V0LmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9zZXJ2ZXIvYmxvY2tzL3NuaXBwZXQuanMiLCAiLi4vLi4vYXNzZXRzL3N0b3Jlcy9saXZlVmlld1NvY2tldHMuanMiLCAiLi4vLi4vYXNzZXRzL3N2ZWx0ZS9HYW1lLnN2ZWx0ZSIsICIuLi8uLi9hc3NldHMvc3ZlbHRlL0dhbWVMb2JieS5zdmVsdGUiLCAiLi4vLi4vYXNzZXRzL3N2ZWx0ZS9MaXZlVmlld1NvY2tldC5zdmVsdGUiLCAiLi4vLi4vYXNzZXRzL3N2ZWx0ZS9fYnVpbGQvRWxpeGlyLkRvUXVpY2tpZVdlYi5FeGFtcGxlU3ZlbHRlTGl2ZS5zdmVsdGUiLCAiLi4vLi4vZGVwcy9saXZlX3N2ZWx0ZS9hc3NldHMvanMvbGl2ZV9zdmVsdGUvdXRpbHMuanMiLCAiLi4vLi4vZGVwcy9saXZlX3N2ZWx0ZS9hc3NldHMvanMvbGl2ZV9zdmVsdGUvcmVuZGVyLmpzIiwgIi4uLy4uL2RlcHMvbGl2ZV9zdmVsdGUvYXNzZXRzL2pzL2xpdmVfc3ZlbHRlL2hvb2tzLnN2ZWx0ZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgQ29tcG9uZW50cyBmcm9tIFwiLi4vc3ZlbHRlLyoqLyouc3ZlbHRlXCJcbmltcG9ydCB7Z2V0UmVuZGVyfSBmcm9tIFwibGl2ZV9zdmVsdGVcIlxuXG5leHBvcnQgY29uc3QgcmVuZGVyID0gZ2V0UmVuZGVyKENvbXBvbmVudHMpXG4iLCAiXG4gICAgICAgIGltcG9ydCAqIGFzIG1vZHVsZTAgZnJvbSAnLi4vc3ZlbHRlL0dhbWUuc3ZlbHRlJztpbXBvcnQgKiBhcyBtb2R1bGUxIGZyb20gJy4uL3N2ZWx0ZS9HYW1lTG9iYnkuc3ZlbHRlJztpbXBvcnQgKiBhcyBtb2R1bGUyIGZyb20gJy4uL3N2ZWx0ZS9MaXZlVmlld1NvY2tldC5zdmVsdGUnO2ltcG9ydCAqIGFzIG1vZHVsZTMgZnJvbSAnLi4vc3ZlbHRlL19idWlsZC9FbGl4aXIuRG9RdWlja2llV2ViLkV4YW1wbGVTdmVsdGVMaXZlLnN2ZWx0ZSdcblxuICAgICAgICBjb25zdCBtb2R1bGVzID0gW21vZHVsZTAsbW9kdWxlMSxtb2R1bGUyLG1vZHVsZTNdO1xuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IG1vZHVsZXM7XG4gICAgICAgIGV4cG9ydCBjb25zdCBmaWxlbmFtZXMgPSBbJy4uL3N2ZWx0ZS9HYW1lLnN2ZWx0ZScsJy4uL3N2ZWx0ZS9HYW1lTG9iYnkuc3ZlbHRlJywnLi4vc3ZlbHRlL0xpdmVWaWV3U29ja2V0LnN2ZWx0ZScsJy4uL3N2ZWx0ZS9fYnVpbGQvRWxpeGlyLkRvUXVpY2tpZVdlYi5FeGFtcGxlU3ZlbHRlTGl2ZS5zdmVsdGUnXVxuICAgICAgIiwgImV4cG9ydCBjb25zdCBFQUNIX0lURU1fUkVBQ1RJVkUgPSAxO1xuZXhwb3J0IGNvbnN0IEVBQ0hfSU5ERVhfUkVBQ1RJVkUgPSAxIDw8IDE7XG4vKiogU2VlIEVhY2hCbG9jayBpbnRlcmZhY2UgbWV0YWRhdGEuaXNfY29udHJvbGxlZCBmb3IgYW4gZXhwbGFuYXRpb24gd2hhdCB0aGlzIGlzICovXG5leHBvcnQgY29uc3QgRUFDSF9JU19DT05UUk9MTEVEID0gMSA8PCAyO1xuZXhwb3J0IGNvbnN0IEVBQ0hfSVNfQU5JTUFURUQgPSAxIDw8IDM7XG5leHBvcnQgY29uc3QgRUFDSF9JVEVNX0lNTVVUQUJMRSA9IDEgPDwgNDtcblxuZXhwb3J0IGNvbnN0IFBST1BTX0lTX0lNTVVUQUJMRSA9IDE7XG5leHBvcnQgY29uc3QgUFJPUFNfSVNfUlVORVMgPSAxIDw8IDE7XG5leHBvcnQgY29uc3QgUFJPUFNfSVNfVVBEQVRFRCA9IDEgPDwgMjtcbmV4cG9ydCBjb25zdCBQUk9QU19JU19CSU5EQUJMRSA9IDEgPDwgMztcbmV4cG9ydCBjb25zdCBQUk9QU19JU19MQVpZX0lOSVRJQUwgPSAxIDw8IDQ7XG5cbmV4cG9ydCBjb25zdCBUUkFOU0lUSU9OX0lOID0gMTtcbmV4cG9ydCBjb25zdCBUUkFOU0lUSU9OX09VVCA9IDEgPDwgMTtcbmV4cG9ydCBjb25zdCBUUkFOU0lUSU9OX0dMT0JBTCA9IDEgPDwgMjtcblxuZXhwb3J0IGNvbnN0IFRFTVBMQVRFX0ZSQUdNRU5UID0gMTtcbmV4cG9ydCBjb25zdCBURU1QTEFURV9VU0VfSU1QT1JUX05PREUgPSAxIDw8IDE7XG5cbmV4cG9ydCBjb25zdCBIWURSQVRJT05fU1RBUlQgPSAnWyc7XG4vKiogdXNlZCB0byBpbmRpY2F0ZSB0aGF0IGFuIGB7OmVsc2V9Li4uYCBibG9jayB3YXMgcmVuZGVyZWQgKi9cbmV4cG9ydCBjb25zdCBIWURSQVRJT05fU1RBUlRfRUxTRSA9ICdbISc7XG5leHBvcnQgY29uc3QgSFlEUkFUSU9OX0VORCA9ICddJztcbmV4cG9ydCBjb25zdCBIWURSQVRJT05fRVJST1IgPSB7fTtcblxuZXhwb3J0IGNvbnN0IEVMRU1FTlRfSVNfTkFNRVNQQUNFRCA9IDE7XG5leHBvcnQgY29uc3QgRUxFTUVOVF9QUkVTRVJWRV9BVFRSSUJVVEVfQ0FTRSA9IDEgPDwgMTtcblxuZXhwb3J0IGNvbnN0IFVOSU5JVElBTElaRUQgPSBTeW1ib2woKTtcblxuLy8gRGV2LXRpbWUgY29tcG9uZW50IHByb3BlcnRpZXNcbmV4cG9ydCBjb25zdCBGSUxFTkFNRSA9IFN5bWJvbCgnZmlsZW5hbWUnKTtcbmV4cG9ydCBjb25zdCBITVIgPSBTeW1ib2woJ2htcicpO1xuXG5leHBvcnQgY29uc3QgTkFNRVNQQUNFX0hUTUwgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5leHBvcnQgY29uc3QgTkFNRVNQQUNFX1NWRyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5leHBvcnQgY29uc3QgTkFNRVNQQUNFX01BVEhNTCA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcblxuLy8gd2UgdXNlIGEgbGlzdCBvZiBpZ25vcmFibGUgcnVudGltZSB3YXJuaW5ncyBiZWNhdXNlIG5vdCBldmVyeSBydW50aW1lIHdhcm5pbmdcbi8vIGNhbiBiZSBpZ25vcmVkIGFuZCB3ZSB3YW50IHRvIGtlZXAgdGhlIHZhbGlkYXRpb24gZm9yIHN2ZWx0ZS1pZ25vcmUgaW4gcGxhY2VcbmV4cG9ydCBjb25zdCBJR05PUkFCTEVfUlVOVElNRV9XQVJOSU5HUyA9IC8qKiBAdHlwZSB7Y29uc3R9ICovIChbXG5cdCdzdGF0ZV9zbmFwc2hvdF91bmNsb25lYWJsZScsXG5cdCdiaW5kaW5nX3Byb3BlcnR5X25vbl9yZWFjdGl2ZScsXG5cdCdoeWRyYXRpb25fYXR0cmlidXRlX2NoYW5nZWQnLFxuXHQnaHlkcmF0aW9uX2h0bWxfY2hhbmdlZCcsXG5cdCdvd25lcnNoaXBfaW52YWxpZF9iaW5kaW5nJyxcblx0J293bmVyc2hpcF9pbnZhbGlkX211dGF0aW9uJ1xuXSk7XG5cbi8qKlxuICogV2hpdGVzcGFjZSBpbnNpZGUgb25lIG9mIHRoZXNlIGVsZW1lbnRzIHdpbGwgbm90IHJlc3VsdCBpblxuICogYSB3aGl0ZXNwYWNlIG5vZGUgYmVpbmcgY3JlYXRlZCBpbiBhbnkgY2lyY3Vtc3RhbmNlcy4gKFRoaXNcbiAqIGxpc3QgaXMgYWxtb3N0IGNlcnRhaW5seSB2ZXJ5IGluY29tcGxldGUpXG4gKiBUT0RPIHRoaXMgaXMgY3VycmVudGx5IHVudXNlZFxuICovXG5leHBvcnQgY29uc3QgRUxFTUVOVFNfV0lUSE9VVF9URVhUID0gWydhdWRpbycsICdkYXRhbGlzdCcsICdkbCcsICdvcHRncm91cCcsICdzZWxlY3QnLCAndmlkZW8nXTtcbiIsICJjb25zdCBBVFRSX1JFR0VYID0gL1smXCI8XS9nO1xuY29uc3QgQ09OVEVOVF9SRUdFWCA9IC9bJjxdL2c7XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7Vn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzX2F0dHJdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVfaHRtbCh2YWx1ZSwgaXNfYXR0cikge1xuXHRjb25zdCBzdHIgPSBTdHJpbmcodmFsdWUgPz8gJycpO1xuXG5cdGNvbnN0IHBhdHRlcm4gPSBpc19hdHRyID8gQVRUUl9SRUdFWCA6IENPTlRFTlRfUkVHRVg7XG5cdHBhdHRlcm4ubGFzdEluZGV4ID0gMDtcblxuXHRsZXQgZXNjYXBlZCA9ICcnO1xuXHRsZXQgbGFzdCA9IDA7XG5cblx0d2hpbGUgKHBhdHRlcm4udGVzdChzdHIpKSB7XG5cdFx0Y29uc3QgaSA9IHBhdHRlcm4ubGFzdEluZGV4IC0gMTtcblx0XHRjb25zdCBjaCA9IHN0cltpXTtcblx0XHRlc2NhcGVkICs9IHN0ci5zdWJzdHJpbmcobGFzdCwgaSkgKyAoY2ggPT09ICcmJyA/ICcmYW1wOycgOiBjaCA9PT0gJ1wiJyA/ICcmcXVvdDsnIDogJyZsdDsnKTtcblx0XHRsYXN0ID0gaSArIDE7XG5cdH1cblxuXHRyZXR1cm4gZXNjYXBlZCArIHN0ci5zdWJzdHJpbmcobGFzdCk7XG59XG4iLCAiaW1wb3J0IHsgZXNjYXBlX2h0bWwgfSBmcm9tICcuLi8uLi9lc2NhcGluZy5qcyc7XG5pbXBvcnQgeyBjbHN4IGFzIF9jbHN4IH0gZnJvbSAnY2xzeCc7XG5cbi8qKlxuICogYDxkaXYgdHJhbnNsYXRlPXtmYWxzZX0+YCBzaG91bGQgYmUgcmVuZGVyZWQgYXMgYDxkaXYgdHJhbnNsYXRlPVwibm9cIj5gIGFuZCBfbm90X1xuICogYDxkaXYgdHJhbnNsYXRlPVwiZmFsc2VcIj5gLCB3aGljaCBpcyBlcXVpdmFsZW50IHRvIGA8ZGl2IHRyYW5zbGF0ZT1cInllc1wiPmAuIFRoZXJlXG4gKiBtYXkgYmUgb3RoZXIgb2RkIGNhc2VzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGlzIGxpc3QgaW4gZnV0dXJlXG4gKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgTWFwPGFueSwgc3RyaW5nPj59XG4gKi9cbmNvbnN0IHJlcGxhY2VtZW50cyA9IHtcblx0dHJhbnNsYXRlOiBuZXcgTWFwKFtcblx0XHRbdHJ1ZSwgJ3llcyddLFxuXHRcdFtmYWxzZSwgJ25vJ11cblx0XSlcbn07XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1Z9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc19ib29sZWFuXVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dHIobmFtZSwgdmFsdWUsIGlzX2Jvb2xlYW4gPSBmYWxzZSkge1xuXHRpZiAodmFsdWUgPT0gbnVsbCB8fCAoIXZhbHVlICYmIGlzX2Jvb2xlYW4pKSByZXR1cm4gJyc7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSAobmFtZSBpbiByZXBsYWNlbWVudHMgJiYgcmVwbGFjZW1lbnRzW25hbWVdLmdldCh2YWx1ZSkpIHx8IHZhbHVlO1xuXHRjb25zdCBhc3NpZ25tZW50ID0gaXNfYm9vbGVhbiA/ICcnIDogYD1cIiR7ZXNjYXBlX2h0bWwobm9ybWFsaXplZCwgdHJ1ZSl9XCJgO1xuXHRyZXR1cm4gYCAke25hbWV9JHthc3NpZ25tZW50fWA7XG59XG5cbi8qKlxuICogU21hbGwgd3JhcHBlciBhcm91bmQgY2xzeCB0byBwcmVzZXJ2ZSBTdmVsdGUncyAod2VpcmQpIGhhbmRsaW5nIG9mIGZhbHN5IHZhbHVlcy5cbiAqIFRPRE8gU3ZlbHRlIDYgcmV2aXNpdCB0aGlzLCBhbmQgbGlrZWx5IHR1cm4gYWxsIGZhbHN5IHZhbHVlcyBpbnRvIHRoZSBlbXB0eSBzdHJpbmcgKHdoYXQgY2xzeCBhbHNvIGRvZXMpXG4gKiBAcGFyYW0gIHthbnl9IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbHN4KHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIF9jbHN4KHZhbHVlKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gdmFsdWUgPz8gJyc7XG5cdH1cbn1cblxuY29uc3Qgd2hpdGVzcGFjZSA9IFsuLi4nIFxcdFxcblxcclxcZlxcdTAwYTBcXHUwMDBiXFx1ZmVmZiddO1xuXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSBbaGFzaF1cbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYm9vbGVhbj59IFtkaXJlY3RpdmVzXVxuICogQHJldHVybnMge3N0cmluZyB8IG51bGx9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b19jbGFzcyh2YWx1ZSwgaGFzaCwgZGlyZWN0aXZlcykge1xuXHR2YXIgY2xhc3NuYW1lID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogJycgKyB2YWx1ZTtcblxuXHRpZiAoaGFzaCkge1xuXHRcdGNsYXNzbmFtZSA9IGNsYXNzbmFtZSA/IGNsYXNzbmFtZSArICcgJyArIGhhc2ggOiBoYXNoO1xuXHR9XG5cblx0aWYgKGRpcmVjdGl2ZXMpIHtcblx0XHRmb3IgKHZhciBrZXkgaW4gZGlyZWN0aXZlcykge1xuXHRcdFx0aWYgKGRpcmVjdGl2ZXNba2V5XSkge1xuXHRcdFx0XHRjbGFzc25hbWUgPSBjbGFzc25hbWUgPyBjbGFzc25hbWUgKyAnICcgKyBrZXkgOiBrZXk7XG5cdFx0XHR9IGVsc2UgaWYgKGNsYXNzbmFtZS5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGxlbiA9IGtleS5sZW5ndGg7XG5cdFx0XHRcdHZhciBhID0gMDtcblxuXHRcdFx0XHR3aGlsZSAoKGEgPSBjbGFzc25hbWUuaW5kZXhPZihrZXksIGEpKSA+PSAwKSB7XG5cdFx0XHRcdFx0dmFyIGIgPSBhICsgbGVuO1xuXG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0KGEgPT09IDAgfHwgd2hpdGVzcGFjZS5pbmNsdWRlcyhjbGFzc25hbWVbYSAtIDFdKSkgJiZcblx0XHRcdFx0XHRcdChiID09PSBjbGFzc25hbWUubGVuZ3RoIHx8IHdoaXRlc3BhY2UuaW5jbHVkZXMoY2xhc3NuYW1lW2JdKSlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdGNsYXNzbmFtZSA9IChhID09PSAwID8gJycgOiBjbGFzc25hbWUuc3Vic3RyaW5nKDAsIGEpKSArIGNsYXNzbmFtZS5zdWJzdHJpbmcoYiArIDEpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhID0gYjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY2xhc3NuYW1lID09PSAnJyA/IG51bGwgOiBjbGFzc25hbWU7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZyxhbnk+fSBzdHlsZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW1wb3J0YW50XG4gKi9cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXMoc3R5bGVzLCBpbXBvcnRhbnQgPSBmYWxzZSkge1xuXHR2YXIgc2VwYXJhdG9yID0gaW1wb3J0YW50ID8gJyAhaW1wb3J0YW50OycgOiAnOyc7XG5cdHZhciBjc3MgPSAnJztcblxuXHRmb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG5cdFx0dmFyIHZhbHVlID0gc3R5bGVzW2tleV07XG5cdFx0aWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09ICcnKSB7XG5cdFx0XHRjc3MgKz0gJyAnICsga2V5ICsgJzogJyArIHZhbHVlICsgc2VwYXJhdG9yO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjc3M7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRvX2Nzc19uYW1lKG5hbWUpIHtcblx0aWYgKG5hbWVbMF0gIT09ICctJyB8fCBuYW1lWzFdICE9PSAnLScpIHtcblx0XHRyZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cdHJldHVybiBuYW1lO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgW1JlY29yZDxzdHJpbmcsIGFueT4sIFJlY29yZDxzdHJpbmcsIGFueT5dfSBbc3R5bGVzXVxuICogQHJldHVybnMge3N0cmluZyB8IG51bGx9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b19zdHlsZSh2YWx1ZSwgc3R5bGVzKSB7XG5cdGlmIChzdHlsZXMpIHtcblx0XHR2YXIgbmV3X3N0eWxlID0gJyc7XG5cblx0XHQvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsYW55PiB8IHVuZGVmaW5lZH0gKi9cblx0XHR2YXIgbm9ybWFsX3N0eWxlcztcblxuXHRcdC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZyxhbnk+IHwgdW5kZWZpbmVkfSAqL1xuXHRcdHZhciBpbXBvcnRhbnRfc3R5bGVzO1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoc3R5bGVzKSkge1xuXHRcdFx0bm9ybWFsX3N0eWxlcyA9IHN0eWxlc1swXTtcblx0XHRcdGltcG9ydGFudF9zdHlsZXMgPSBzdHlsZXNbMV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vcm1hbF9zdHlsZXMgPSBzdHlsZXM7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHR2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcblx0XHRcdFx0LnJlcGxhY2VBbGwoL1xccypcXC9cXCouKj9cXCpcXC9cXHMqL2csICcnKVxuXHRcdFx0XHQudHJpbSgpO1xuXG5cdFx0XHQvKiogQHR5cGUge2Jvb2xlYW4gfCAnXCInIHwgXCInXCJ9ICovXG5cdFx0XHR2YXIgaW5fc3RyID0gZmFsc2U7XG5cdFx0XHR2YXIgaW5fYXBvID0gMDtcblx0XHRcdHZhciBpbl9jb21tZW50ID0gZmFsc2U7XG5cblx0XHRcdHZhciByZXNlcnZlZF9uYW1lcyA9IFtdO1xuXG5cdFx0XHRpZiAobm9ybWFsX3N0eWxlcykge1xuXHRcdFx0XHRyZXNlcnZlZF9uYW1lcy5wdXNoKC4uLk9iamVjdC5rZXlzKG5vcm1hbF9zdHlsZXMpLm1hcCh0b19jc3NfbmFtZSkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGltcG9ydGFudF9zdHlsZXMpIHtcblx0XHRcdFx0cmVzZXJ2ZWRfbmFtZXMucHVzaCguLi5PYmplY3Qua2V5cyhpbXBvcnRhbnRfc3R5bGVzKS5tYXAodG9fY3NzX25hbWUpKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHN0YXJ0X2luZGV4ID0gMDtcblx0XHRcdHZhciBuYW1lX2luZGV4ID0gLTE7XG5cblx0XHRcdGNvbnN0IGxlbiA9IHZhbHVlLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0dmFyIGMgPSB2YWx1ZVtpXTtcblxuXHRcdFx0XHRpZiAoaW5fY29tbWVudCkge1xuXHRcdFx0XHRcdGlmIChjID09PSAnLycgJiYgdmFsdWVbaSAtIDFdID09PSAnKicpIHtcblx0XHRcdFx0XHRcdGluX2NvbW1lbnQgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoaW5fc3RyKSB7XG5cdFx0XHRcdFx0aWYgKGluX3N0ciA9PT0gYykge1xuXHRcdFx0XHRcdFx0aW5fc3RyID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09ICcvJyAmJiB2YWx1ZVtpICsgMV0gPT09ICcqJykge1xuXHRcdFx0XHRcdGluX2NvbW1lbnQgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09ICdcIicgfHwgYyA9PT0gXCInXCIpIHtcblx0XHRcdFx0XHRpbl9zdHIgPSBjO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09ICcoJykge1xuXHRcdFx0XHRcdGluX2FwbysrO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09ICcpJykge1xuXHRcdFx0XHRcdGluX2Fwby0tO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCFpbl9jb21tZW50ICYmIGluX3N0ciA9PT0gZmFsc2UgJiYgaW5fYXBvID09PSAwKSB7XG5cdFx0XHRcdFx0aWYgKGMgPT09ICc6JyAmJiBuYW1lX2luZGV4ID09PSAtMSkge1xuXHRcdFx0XHRcdFx0bmFtZV9pbmRleCA9IGk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSAnOycgfHwgaSA9PT0gbGVuIC0gMSkge1xuXHRcdFx0XHRcdFx0aWYgKG5hbWVfaW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBuYW1lID0gdG9fY3NzX25hbWUodmFsdWUuc3Vic3RyaW5nKHN0YXJ0X2luZGV4LCBuYW1lX2luZGV4KS50cmltKCkpO1xuXG5cdFx0XHRcdFx0XHRcdGlmICghcmVzZXJ2ZWRfbmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoYyAhPT0gJzsnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHByb3BlcnR5ID0gdmFsdWUuc3Vic3RyaW5nKHN0YXJ0X2luZGV4LCBpKS50cmltKCk7XG5cdFx0XHRcdFx0XHRcdFx0bmV3X3N0eWxlICs9ICcgJyArIHByb3BlcnR5ICsgJzsnO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHN0YXJ0X2luZGV4ID0gaSArIDE7XG5cdFx0XHRcdFx0XHRuYW1lX2luZGV4ID0gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG5vcm1hbF9zdHlsZXMpIHtcblx0XHRcdG5ld19zdHlsZSArPSBhcHBlbmRfc3R5bGVzKG5vcm1hbF9zdHlsZXMpO1xuXHRcdH1cblxuXHRcdGlmIChpbXBvcnRhbnRfc3R5bGVzKSB7XG5cdFx0XHRuZXdfc3R5bGUgKz0gYXBwZW5kX3N0eWxlcyhpbXBvcnRhbnRfc3R5bGVzLCB0cnVlKTtcblx0XHR9XG5cblx0XHRuZXdfc3R5bGUgPSBuZXdfc3R5bGUudHJpbSgpO1xuXHRcdHJldHVybiBuZXdfc3R5bGUgPT09ICcnID8gbnVsbCA6IG5ld19zdHlsZTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IFN0cmluZyh2YWx1ZSk7XG59XG4iLCAiLy8gU3RvcmUgdGhlIHJlZmVyZW5jZXMgdG8gZ2xvYmFscyBpbiBjYXNlIHNvbWVvbmUgdHJpZXMgdG8gbW9ua2V5IHBhdGNoIHRoZXNlLCBjYXVzaW5nIHRoZSBiZWxvd1xuLy8gdG8gZGUtb3B0ICh0aGlzIG9jY3VycyBvZnRlbiB3aGVuIHVzaW5nIHBvcHVsYXIgZXh0ZW5zaW9ucykuXG5leHBvcnQgdmFyIGlzX2FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmV4cG9ydCB2YXIgaW5kZXhfb2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbmV4cG9ydCB2YXIgYXJyYXlfZnJvbSA9IEFycmF5LmZyb207XG5leHBvcnQgdmFyIG9iamVjdF9rZXlzID0gT2JqZWN0LmtleXM7XG5leHBvcnQgdmFyIGRlZmluZV9wcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbmV4cG9ydCB2YXIgZ2V0X2Rlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuZXhwb3J0IHZhciBnZXRfZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycztcbmV4cG9ydCB2YXIgb2JqZWN0X3Byb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5leHBvcnQgdmFyIGFycmF5X3Byb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcbmV4cG9ydCB2YXIgZ2V0X3Byb3RvdHlwZV9vZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbmV4cG9ydCB2YXIgaXNfZXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHRoaW5nXG4gKiBAcmV0dXJucyB7dGhpbmcgaXMgRnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuXHRyZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgTUlUIExpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbi8qKlxuICogQHRlbXBsYXRlIFtUPWFueV1cbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHJldHVybnMge3ZhbHVlIGlzIFByb21pc2VMaWtlPFQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuXHRyZXR1cm4gdHlwZW9mIHZhbHVlPy50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKiogQHBhcmFtIHtGdW5jdGlvbn0gZm4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW4oZm4pIHtcblx0cmV0dXJuIGZuKCk7XG59XG5cbi8qKiBAcGFyYW0ge0FycmF5PCgpID0+IHZvaWQ+fSBhcnIgKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5fYWxsKGFycikge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdGFycltpXSgpO1xuXHR9XG59XG5cbi8qKlxuICogVE9ETyByZXBsYWNlIHdpdGggUHJvbWlzZS53aXRoUmVzb2x2ZXJzIG9uY2Ugc3VwcG9ydGVkIHdpZGVseSBlbm91Z2hcbiAqIEB0ZW1wbGF0ZSBUXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZlcnJlZCgpIHtcblx0LyoqIEB0eXBlIHsodmFsdWU6IFQpID0+IHZvaWR9ICovXG5cdHZhciByZXNvbHZlO1xuXG5cdC8qKiBAdHlwZSB7KHJlYXNvbjogYW55KSA9PiB2b2lkfSAqL1xuXHR2YXIgcmVqZWN0O1xuXG5cdC8qKiBAdHlwZSB7UHJvbWlzZTxUPn0gKi9cblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcblx0XHRyZXNvbHZlID0gcmVzO1xuXHRcdHJlamVjdCA9IHJlajtcblx0fSk7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRyZXR1cm4geyBwcm9taXNlLCByZXNvbHZlLCByZWplY3QgfTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtWfSB2YWx1ZVxuICogQHBhcmFtIHtWIHwgKCgpID0+IFYpfSBmYWxsYmFja1xuICogQHBhcmFtIHtib29sZWFufSBbbGF6eV1cbiAqIEByZXR1cm5zIHtWfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFsbGJhY2sodmFsdWUsIGZhbGxiYWNrLCBsYXp5ID0gZmFsc2UpIHtcblx0cmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWRcblx0XHQ/IGxhenlcblx0XHRcdD8gLyoqIEB0eXBlIHsoKSA9PiBWfSAqLyAoZmFsbGJhY2spKClcblx0XHRcdDogLyoqIEB0eXBlIHtWfSAqLyAoZmFsbGJhY2spXG5cdFx0OiB2YWx1ZTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB0cnVlO1xuIiwgImV4cG9ydCBjb25zdCBERVJJVkVEID0gMSA8PCAxO1xuZXhwb3J0IGNvbnN0IEVGRkVDVCA9IDEgPDwgMjtcbmV4cG9ydCBjb25zdCBSRU5ERVJfRUZGRUNUID0gMSA8PCAzO1xuZXhwb3J0IGNvbnN0IEJMT0NLX0VGRkVDVCA9IDEgPDwgNDtcbmV4cG9ydCBjb25zdCBCUkFOQ0hfRUZGRUNUID0gMSA8PCA1O1xuZXhwb3J0IGNvbnN0IFJPT1RfRUZGRUNUID0gMSA8PCA2O1xuZXhwb3J0IGNvbnN0IEJPVU5EQVJZX0VGRkVDVCA9IDEgPDwgNztcbmV4cG9ydCBjb25zdCBVTk9XTkVEID0gMSA8PCA4O1xuZXhwb3J0IGNvbnN0IERJU0NPTk5FQ1RFRCA9IDEgPDwgOTtcbmV4cG9ydCBjb25zdCBDTEVBTiA9IDEgPDwgMTA7XG5leHBvcnQgY29uc3QgRElSVFkgPSAxIDw8IDExO1xuZXhwb3J0IGNvbnN0IE1BWUJFX0RJUlRZID0gMSA8PCAxMjtcbmV4cG9ydCBjb25zdCBJTkVSVCA9IDEgPDwgMTM7XG5leHBvcnQgY29uc3QgREVTVFJPWUVEID0gMSA8PCAxNDtcbmV4cG9ydCBjb25zdCBFRkZFQ1RfUkFOID0gMSA8PCAxNTtcbi8qKiAnVHJhbnNwYXJlbnQnIGVmZmVjdHMgZG8gbm90IGNyZWF0ZSBhIHRyYW5zaXRpb24gYm91bmRhcnkgKi9cbmV4cG9ydCBjb25zdCBFRkZFQ1RfVFJBTlNQQVJFTlQgPSAxIDw8IDE2O1xuLyoqIFN2ZWx0ZSA0IGxlZ2FjeSBtb2RlIHByb3BzIG5lZWQgdG8gYmUgaGFuZGxlZCB3aXRoIGRlcml2ZWRzIGFuZCBiZSByZWNvZ25pemVkIGVsc2V3aGVyZSwgaGVuY2UgdGhlIGRlZGljYXRlZCBmbGFnICovXG5leHBvcnQgY29uc3QgTEVHQUNZX0RFUklWRURfUFJPUCA9IDEgPDwgMTc7XG5leHBvcnQgY29uc3QgSU5TUEVDVF9FRkZFQ1QgPSAxIDw8IDE4O1xuZXhwb3J0IGNvbnN0IEhFQURfRUZGRUNUID0gMSA8PCAxOTtcbmV4cG9ydCBjb25zdCBFRkZFQ1RfSEFTX0RFUklWRUQgPSAxIDw8IDIwO1xuZXhwb3J0IGNvbnN0IEVGRkVDVF9JU19VUERBVElORyA9IDEgPDwgMjE7XG5cbmV4cG9ydCBjb25zdCBTVEFURV9TWU1CT0wgPSBTeW1ib2woJyRzdGF0ZScpO1xuZXhwb3J0IGNvbnN0IExFR0FDWV9QUk9QUyA9IFN5bWJvbCgnbGVnYWN5IHByb3BzJyk7XG5leHBvcnQgY29uc3QgTE9BRElOR19BVFRSX1NZTUJPTCA9IFN5bWJvbCgnJyk7XG4iLCAiLyoqIEBpbXBvcnQgeyBFcXVhbHMgfSBmcm9tICcjY2xpZW50JyAqL1xuXG4vKiogQHR5cGUge0VxdWFsc30gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHModmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSB0aGlzLnY7XG59XG5cbi8qKlxuICogQHBhcmFtIHt1bmtub3dufSBhXG4gKiBAcGFyYW0ge3Vua25vd259IGJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuXHRyZXR1cm4gYSAhPSBhXG5cdFx0PyBiID09IGJcblx0XHQ6IGEgIT09IGIgfHwgKGEgIT09IG51bGwgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3Vua25vd259IGFcbiAqIEBwYXJhbSB7dW5rbm93bn0gYlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuXHRyZXR1cm4gYSAhPT0gYjtcbn1cblxuLyoqIEB0eXBlIHtFcXVhbHN9ICovXG5leHBvcnQgZnVuY3Rpb24gc2FmZV9lcXVhbHModmFsdWUpIHtcblx0cmV0dXJuICFzYWZlX25vdF9lcXVhbCh2YWx1ZSwgdGhpcy52KTtcbn1cbiIsICIvKiBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IHNjcmlwdHMvcHJvY2Vzcy1tZXNzYWdlcy9pbmRleC5qcy4gRG8gbm90IGVkaXQhICovXG5cbmltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuXG4vKipcbiAqIFVzaW5nIGBiaW5kOnZhbHVlYCB0b2dldGhlciB3aXRoIGEgY2hlY2tib3ggaW5wdXQgaXMgbm90IGFsbG93ZWQuIFVzZSBgYmluZDpjaGVja2VkYCBpbnN0ZWFkXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kX2ludmFsaWRfY2hlY2tib3hfdmFsdWUoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgYmluZF9pbnZhbGlkX2NoZWNrYm94X3ZhbHVlXFxuVXNpbmcgXFxgYmluZDp2YWx1ZVxcYCB0b2dldGhlciB3aXRoIGEgY2hlY2tib3ggaW5wdXQgaXMgbm90IGFsbG93ZWQuIFVzZSBcXGBiaW5kOmNoZWNrZWRcXGAgaW5zdGVhZFxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2JpbmRfaW52YWxpZF9jaGVja2JveF92YWx1ZWApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYmluZF9pbnZhbGlkX2NoZWNrYm94X3ZhbHVlYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgJWNvbXBvbmVudCUgaGFzIGFuIGV4cG9ydCBuYW1lZCBgJWtleSVgIHRoYXQgYSBjb25zdW1lciBjb21wb25lbnQgaXMgdHJ5aW5nIHRvIGFjY2VzcyB1c2luZyBgYmluZDola2V5JWAsIHdoaWNoIGlzIGRpc2FsbG93ZWQuIEluc3RlYWQsIHVzZSBgYmluZDp0aGlzYCAoZS5nLiBgPCVuYW1lJSBiaW5kOnRoaXM9e2NvbXBvbmVudH0gLz5gKSBhbmQgdGhlbiBhY2Nlc3MgdGhlIHByb3BlcnR5IG9uIHRoZSBib3VuZCBjb21wb25lbnQgaW5zdGFuY2UgKGUuZy4gYGNvbXBvbmVudC4la2V5JWApXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZF9pbnZhbGlkX2V4cG9ydChjb21wb25lbnQsIGtleSwgbmFtZSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGJpbmRfaW52YWxpZF9leHBvcnRcXG5Db21wb25lbnQgJHtjb21wb25lbnR9IGhhcyBhbiBleHBvcnQgbmFtZWQgXFxgJHtrZXl9XFxgIHRoYXQgYSBjb25zdW1lciBjb21wb25lbnQgaXMgdHJ5aW5nIHRvIGFjY2VzcyB1c2luZyBcXGBiaW5kOiR7a2V5fVxcYCwgd2hpY2ggaXMgZGlzYWxsb3dlZC4gSW5zdGVhZCwgdXNlIFxcYGJpbmQ6dGhpc1xcYCAoZS5nLiBcXGA8JHtuYW1lfSBiaW5kOnRoaXM9e2NvbXBvbmVudH0gLz5cXGApIGFuZCB0aGVuIGFjY2VzcyB0aGUgcHJvcGVydHkgb24gdGhlIGJvdW5kIGNvbXBvbmVudCBpbnN0YW5jZSAoZS5nLiBcXGBjb21wb25lbnQuJHtrZXl9XFxgKVxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2JpbmRfaW52YWxpZF9leHBvcnRgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2JpbmRfaW52YWxpZF9leHBvcnRgKTtcblx0fVxufVxuXG4vKipcbiAqIEEgY29tcG9uZW50IGlzIGF0dGVtcHRpbmcgdG8gYmluZCB0byBhIG5vbi1iaW5kYWJsZSBwcm9wZXJ0eSBgJWtleSVgIGJlbG9uZ2luZyB0byAlY29tcG9uZW50JSAoaS5lLiBgPCVuYW1lJSBiaW5kOiVrZXklPXsuLi59PmApLiBUbyBtYXJrIGEgcHJvcGVydHkgYXMgYmluZGFibGU6IGBsZXQgeyAla2V5JSA9ICRiaW5kYWJsZSgpIH0gPSAkcHJvcHMoKWBcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kX25vdF9iaW5kYWJsZShrZXksIGNvbXBvbmVudCwgbmFtZSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGJpbmRfbm90X2JpbmRhYmxlXFxuQSBjb21wb25lbnQgaXMgYXR0ZW1wdGluZyB0byBiaW5kIHRvIGEgbm9uLWJpbmRhYmxlIHByb3BlcnR5IFxcYCR7a2V5fVxcYCBiZWxvbmdpbmcgdG8gJHtjb21wb25lbnR9IChpLmUuIFxcYDwke25hbWV9IGJpbmQ6JHtrZXl9PXsuLi59PlxcYCkuIFRvIG1hcmsgYSBwcm9wZXJ0eSBhcyBiaW5kYWJsZTogXFxgbGV0IHsgJHtrZXl9ID0gJGJpbmRhYmxlKCkgfSA9ICRwcm9wcygpXFxgXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYmluZF9ub3RfYmluZGFibGVgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2JpbmRfbm90X2JpbmRhYmxlYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBDYWxsaW5nIGAlbWV0aG9kJWAgb24gYSBjb21wb25lbnQgaW5zdGFuY2UgKG9mICVjb21wb25lbnQlKSBpcyBubyBsb25nZXIgdmFsaWQgaW4gU3ZlbHRlIDVcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudF9hcGlfY2hhbmdlZChtZXRob2QsIGNvbXBvbmVudCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGNvbXBvbmVudF9hcGlfY2hhbmdlZFxcbkNhbGxpbmcgXFxgJHttZXRob2R9XFxgIG9uIGEgY29tcG9uZW50IGluc3RhbmNlIChvZiAke2NvbXBvbmVudH0pIGlzIG5vIGxvbmdlciB2YWxpZCBpbiBTdmVsdGUgNVxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2NvbXBvbmVudF9hcGlfY2hhbmdlZGApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvY29tcG9uZW50X2FwaV9jaGFuZ2VkYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0ZWQgdG8gaW5zdGFudGlhdGUgJWNvbXBvbmVudCUgd2l0aCBgbmV3ICVuYW1lJWAsIHdoaWNoIGlzIG5vIGxvbmdlciB2YWxpZCBpbiBTdmVsdGUgNS4gSWYgdGhpcyBjb21wb25lbnQgaXMgbm90IHVuZGVyIHlvdXIgY29udHJvbCwgc2V0IHRoZSBgY29tcGF0aWJpbGl0eS5jb21wb25lbnRBcGlgIGNvbXBpbGVyIG9wdGlvbiB0byBgNGAgdG8ga2VlcCBpdCB3b3JraW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudF9hcGlfaW52YWxpZF9uZXcoY29tcG9uZW50LCBuYW1lKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgY29tcG9uZW50X2FwaV9pbnZhbGlkX25ld1xcbkF0dGVtcHRlZCB0byBpbnN0YW50aWF0ZSAke2NvbXBvbmVudH0gd2l0aCBcXGBuZXcgJHtuYW1lfVxcYCwgd2hpY2ggaXMgbm8gbG9uZ2VyIHZhbGlkIGluIFN2ZWx0ZSA1LiBJZiB0aGlzIGNvbXBvbmVudCBpcyBub3QgdW5kZXIgeW91ciBjb250cm9sLCBzZXQgdGhlIFxcYGNvbXBhdGliaWxpdHkuY29tcG9uZW50QXBpXFxgIGNvbXBpbGVyIG9wdGlvbiB0byBcXGA0XFxgIHRvIGtlZXAgaXQgd29ya2luZy5cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9jb21wb25lbnRfYXBpX2ludmFsaWRfbmV3YCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9jb21wb25lbnRfYXBpX2ludmFsaWRfbmV3YCk7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGRlcml2ZWQgdmFsdWUgY2Fubm90IHJlZmVyZW5jZSBpdHNlbGYgcmVjdXJzaXZlbHlcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZWRfcmVmZXJlbmNlc19zZWxmKCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGRlcml2ZWRfcmVmZXJlbmNlc19zZWxmXFxuQSBkZXJpdmVkIHZhbHVlIGNhbm5vdCByZWZlcmVuY2UgaXRzZWxmIHJlY3Vyc2l2ZWx5XFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZGVyaXZlZF9yZWZlcmVuY2VzX3NlbGZgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2Rlcml2ZWRfcmVmZXJlbmNlc19zZWxmYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBLZXllZCBlYWNoIGJsb2NrIGhhcyBkdXBsaWNhdGUga2V5IGAldmFsdWUlYCBhdCBpbmRleGVzICVhJSBhbmQgJWIlXG4gKiBAcGFyYW0ge3N0cmluZ30gYVxuICogQHBhcmFtIHtzdHJpbmd9IGJcbiAqIEBwYXJhbSB7c3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbH0gW3ZhbHVlXVxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWFjaF9rZXlfZHVwbGljYXRlKGEsIGIsIHZhbHVlKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgZWFjaF9rZXlfZHVwbGljYXRlXFxuJHt2YWx1ZSA/IGBLZXllZCBlYWNoIGJsb2NrIGhhcyBkdXBsaWNhdGUga2V5IFxcYCR7dmFsdWV9XFxgIGF0IGluZGV4ZXMgJHthfSBhbmQgJHtifWAgOiBgS2V5ZWQgZWFjaCBibG9jayBoYXMgZHVwbGljYXRlIGtleSBhdCBpbmRleGVzICR7YX0gYW5kICR7Yn1gfVxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2VhY2hfa2V5X2R1cGxpY2F0ZWApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZWFjaF9rZXlfZHVwbGljYXRlYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBgJXJ1bmUlYCBjYW5ub3QgYmUgdXNlZCBpbnNpZGUgYW4gZWZmZWN0IGNsZWFudXAgZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBydW5lXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlZmZlY3RfaW5fdGVhcmRvd24ocnVuZSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGVmZmVjdF9pbl90ZWFyZG93blxcblxcYCR7cnVuZX1cXGAgY2Fubm90IGJlIHVzZWQgaW5zaWRlIGFuIGVmZmVjdCBjbGVhbnVwIGZ1bmN0aW9uXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZWZmZWN0X2luX3RlYXJkb3duYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9lZmZlY3RfaW5fdGVhcmRvd25gKTtcblx0fVxufVxuXG4vKipcbiAqIEVmZmVjdCBjYW5ub3QgYmUgY3JlYXRlZCBpbnNpZGUgYSBgJGRlcml2ZWRgIHZhbHVlIHRoYXQgd2FzIG5vdCBpdHNlbGYgY3JlYXRlZCBpbnNpZGUgYW4gZWZmZWN0XG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlZmZlY3RfaW5fdW5vd25lZF9kZXJpdmVkKCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGVmZmVjdF9pbl91bm93bmVkX2Rlcml2ZWRcXG5FZmZlY3QgY2Fubm90IGJlIGNyZWF0ZWQgaW5zaWRlIGEgXFxgJGRlcml2ZWRcXGAgdmFsdWUgdGhhdCB3YXMgbm90IGl0c2VsZiBjcmVhdGVkIGluc2lkZSBhbiBlZmZlY3RcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9lZmZlY3RfaW5fdW5vd25lZF9kZXJpdmVkYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9lZmZlY3RfaW5fdW5vd25lZF9kZXJpdmVkYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBgJXJ1bmUlYCBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBhbiBlZmZlY3QgKGUuZy4gZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbilcbiAqIEBwYXJhbSB7c3RyaW5nfSBydW5lXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlZmZlY3Rfb3JwaGFuKHJ1bmUpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBlZmZlY3Rfb3JwaGFuXFxuXFxgJHtydW5lfVxcYCBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBhbiBlZmZlY3QgKGUuZy4gZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbilcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9lZmZlY3Rfb3JwaGFuYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9lZmZlY3Rfb3JwaGFuYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBNYXhpbXVtIHVwZGF0ZSBkZXB0aCBleGNlZWRlZC4gVGhpcyBjYW4gaGFwcGVuIHdoZW4gYSByZWFjdGl2ZSBibG9jayBvciBlZmZlY3QgcmVwZWF0ZWRseSBzZXRzIGEgbmV3IHZhbHVlLiBTdmVsdGUgbGltaXRzIHRoZSBudW1iZXIgb2YgbmVzdGVkIHVwZGF0ZXMgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wc1xuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWZmZWN0X3VwZGF0ZV9kZXB0aF9leGNlZWRlZCgpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBlZmZlY3RfdXBkYXRlX2RlcHRoX2V4Y2VlZGVkXFxuTWF4aW11bSB1cGRhdGUgZGVwdGggZXhjZWVkZWQuIFRoaXMgY2FuIGhhcHBlbiB3aGVuIGEgcmVhY3RpdmUgYmxvY2sgb3IgZWZmZWN0IHJlcGVhdGVkbHkgc2V0cyBhIG5ldyB2YWx1ZS4gU3ZlbHRlIGxpbWl0cyB0aGUgbnVtYmVyIG9mIG5lc3RlZCB1cGRhdGVzIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcHNcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9lZmZlY3RfdXBkYXRlX2RlcHRoX2V4Y2VlZGVkYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9lZmZlY3RfdXBkYXRlX2RlcHRoX2V4Y2VlZGVkYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBGYWlsZWQgdG8gaHlkcmF0ZSB0aGUgYXBwbGljYXRpb25cbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGlvbl9mYWlsZWQoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgaHlkcmF0aW9uX2ZhaWxlZFxcbkZhaWxlZCB0byBoeWRyYXRlIHRoZSBhcHBsaWNhdGlvblxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2h5ZHJhdGlvbl9mYWlsZWRgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2h5ZHJhdGlvbl9mYWlsZWRgKTtcblx0fVxufVxuXG4vKipcbiAqIENvdWxkIG5vdCBge0ByZW5kZXJ9YCBzbmlwcGV0IGR1ZSB0byB0aGUgZXhwcmVzc2lvbiBiZWluZyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAuIENvbnNpZGVyIHVzaW5nIG9wdGlvbmFsIGNoYWluaW5nIGB7QHJlbmRlciBzbmlwcGV0Py4oKX1gXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkX3NuaXBwZXQoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgaW52YWxpZF9zbmlwcGV0XFxuQ291bGQgbm90IFxcYHtAcmVuZGVyfVxcYCBzbmlwcGV0IGR1ZSB0byB0aGUgZXhwcmVzc2lvbiBiZWluZyBcXGBudWxsXFxgIG9yIFxcYHVuZGVmaW5lZFxcYC4gQ29uc2lkZXIgdXNpbmcgb3B0aW9uYWwgY2hhaW5pbmcgXFxge0ByZW5kZXIgc25pcHBldD8uKCl9XFxgXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaW52YWxpZF9zbmlwcGV0YCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9pbnZhbGlkX3NuaXBwZXRgKTtcblx0fVxufVxuXG4vKipcbiAqIGAlbmFtZSUoLi4uKWAgY2Fubm90IGJlIHVzZWQgaW4gcnVuZXMgbW9kZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpZmVjeWNsZV9sZWdhY3lfb25seShuYW1lKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgbGlmZWN5Y2xlX2xlZ2FjeV9vbmx5XFxuXFxgJHtuYW1lfSguLi4pXFxgIGNhbm5vdCBiZSB1c2VkIGluIHJ1bmVzIG1vZGVcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9saWZlY3ljbGVfbGVnYWN5X29ubHlgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2xpZmVjeWNsZV9sZWdhY3lfb25seWApO1xuXHR9XG59XG5cbi8qKlxuICogQ2Fubm90IGRvIGBiaW5kOiVrZXklPXt1bmRlZmluZWR9YCB3aGVuIGAla2V5JWAgaGFzIGEgZmFsbGJhY2sgdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3BzX2ludmFsaWRfdmFsdWUoa2V5KSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgcHJvcHNfaW52YWxpZF92YWx1ZVxcbkNhbm5vdCBkbyBcXGBiaW5kOiR7a2V5fT17dW5kZWZpbmVkfVxcYCB3aGVuIFxcYCR7a2V5fVxcYCBoYXMgYSBmYWxsYmFjayB2YWx1ZVxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL3Byb3BzX2ludmFsaWRfdmFsdWVgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL3Byb3BzX2ludmFsaWRfdmFsdWVgKTtcblx0fVxufVxuXG4vKipcbiAqIFJlc3QgZWxlbWVudCBwcm9wZXJ0aWVzIG9mIGAkcHJvcHMoKWAgc3VjaCBhcyBgJXByb3BlcnR5JWAgYXJlIHJlYWRvbmx5XG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3BzX3Jlc3RfcmVhZG9ubHkocHJvcGVydHkpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBwcm9wc19yZXN0X3JlYWRvbmx5XFxuUmVzdCBlbGVtZW50IHByb3BlcnRpZXMgb2YgXFxgJHByb3BzKClcXGAgc3VjaCBhcyBcXGAke3Byb3BlcnR5fVxcYCBhcmUgcmVhZG9ubHlcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9wcm9wc19yZXN0X3JlYWRvbmx5YCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9wcm9wc19yZXN0X3JlYWRvbmx5YCk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgYCVydW5lJWAgcnVuZSBpcyBvbmx5IGF2YWlsYWJsZSBpbnNpZGUgYC5zdmVsdGVgIGFuZCBgLnN2ZWx0ZS5qcy90c2AgZmlsZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBydW5lXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5lX291dHNpZGVfc3ZlbHRlKHJ1bmUpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBydW5lX291dHNpZGVfc3ZlbHRlXFxuVGhlIFxcYCR7cnVuZX1cXGAgcnVuZSBpcyBvbmx5IGF2YWlsYWJsZSBpbnNpZGUgXFxgLnN2ZWx0ZVxcYCBhbmQgXFxgLnN2ZWx0ZS5qcy90c1xcYCBmaWxlc1xcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL3J1bmVfb3V0c2lkZV9zdmVsdGVgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL3J1bmVfb3V0c2lkZV9zdmVsdGVgKTtcblx0fVxufVxuXG4vKipcbiAqIFByb3BlcnR5IGRlc2NyaXB0b3JzIGRlZmluZWQgb24gYCRzdGF0ZWAgb2JqZWN0cyBtdXN0IGNvbnRhaW4gYHZhbHVlYCBhbmQgYWx3YXlzIGJlIGBlbnVtZXJhYmxlYCwgYGNvbmZpZ3VyYWJsZWAgYW5kIGB3cml0YWJsZWAuXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZV9kZXNjcmlwdG9yc19maXhlZCgpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBzdGF0ZV9kZXNjcmlwdG9yc19maXhlZFxcblByb3BlcnR5IGRlc2NyaXB0b3JzIGRlZmluZWQgb24gXFxgJHN0YXRlXFxgIG9iamVjdHMgbXVzdCBjb250YWluIFxcYHZhbHVlXFxgIGFuZCBhbHdheXMgYmUgXFxgZW51bWVyYWJsZVxcYCwgXFxgY29uZmlndXJhYmxlXFxgIGFuZCBcXGB3cml0YWJsZVxcYC5cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9zdGF0ZV9kZXNjcmlwdG9yc19maXhlZGApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvc3RhdGVfZGVzY3JpcHRvcnNfZml4ZWRgKTtcblx0fVxufVxuXG4vKipcbiAqIENhbm5vdCBzZXQgcHJvdG90eXBlIG9mIGAkc3RhdGVgIG9iamVjdFxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVfcHJvdG90eXBlX2ZpeGVkKCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYHN0YXRlX3Byb3RvdHlwZV9maXhlZFxcbkNhbm5vdCBzZXQgcHJvdG90eXBlIG9mIFxcYCRzdGF0ZVxcYCBvYmplY3RcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9zdGF0ZV9wcm90b3R5cGVfZml4ZWRgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL3N0YXRlX3Byb3RvdHlwZV9maXhlZGApO1xuXHR9XG59XG5cbi8qKlxuICogVXBkYXRpbmcgc3RhdGUgaW5zaWRlIGEgZGVyaXZlZCBvciBhIHRlbXBsYXRlIGV4cHJlc3Npb24gaXMgZm9yYmlkZGVuLiBJZiB0aGUgdmFsdWUgc2hvdWxkIG5vdCBiZSByZWFjdGl2ZSwgZGVjbGFyZSBpdCB3aXRob3V0IGAkc3RhdGVgXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZV91bnNhZmVfbXV0YXRpb24oKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgc3RhdGVfdW5zYWZlX211dGF0aW9uXFxuVXBkYXRpbmcgc3RhdGUgaW5zaWRlIGEgZGVyaXZlZCBvciBhIHRlbXBsYXRlIGV4cHJlc3Npb24gaXMgZm9yYmlkZGVuLiBJZiB0aGUgdmFsdWUgc2hvdWxkIG5vdCBiZSByZWFjdGl2ZSwgZGVjbGFyZSBpdCB3aXRob3V0IFxcYCRzdGF0ZVxcYFxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL3N0YXRlX3Vuc2FmZV9tdXRhdGlvbmApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvc3RhdGVfdW5zYWZlX211dGF0aW9uYCk7XG5cdH1cbn0iLCAiZXhwb3J0IGxldCBsZWdhY3lfbW9kZV9mbGFnID0gZmFsc2U7XG5leHBvcnQgbGV0IHRyYWNpbmdfbW9kZV9mbGFnID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVfbGVnYWN5X21vZGVfZmxhZygpIHtcblx0bGVnYWN5X21vZGVfZmxhZyA9IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVfdHJhY2luZ19tb2RlX2ZsYWcoKSB7XG5cdHRyYWNpbmdfbW9kZV9mbGFnID0gdHJ1ZTtcbn1cbiIsICIvKiogQGltcG9ydCB7IERlcml2ZWQsIFJlYWN0aW9uLCBWYWx1ZSB9IGZyb20gJyNjbGllbnQnICovXG5pbXBvcnQgeyBVTklOSVRJQUxJWkVEIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IHNuYXBzaG90IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2Nsb25lLmpzJztcbmltcG9ydCB7IGRlZmluZV9wcm9wZXJ0eSB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQgeyBERVJJVkVELCBTVEFURV9TWU1CT0wgfSBmcm9tICcjY2xpZW50L2NvbnN0YW50cyc7XG5pbXBvcnQgeyBlZmZlY3RfdHJhY2tpbmcgfSBmcm9tICcuLi9yZWFjdGl2aXR5L2VmZmVjdHMuanMnO1xuaW1wb3J0IHsgYWN0aXZlX3JlYWN0aW9uLCBjYXB0dXJlZF9zaWduYWxzLCBzZXRfY2FwdHVyZWRfc2lnbmFscywgdW50cmFjayB9IGZyb20gJy4uL3J1bnRpbWUuanMnO1xuXG4vKiogQHR5cGUgeyBhbnkgfSAqL1xuZXhwb3J0IGxldCB0cmFjaW5nX2V4cHJlc3Npb25zID0gbnVsbDtcblxuLyoqXG4gKiBAcGFyYW0geyBWYWx1ZSB9IHNpZ25hbFxuICogQHBhcmFtIHsgeyByZWFkOiBFcnJvcltdIH0gfSBbZW50cnldXG4gKi9cbmZ1bmN0aW9uIGxvZ19lbnRyeShzaWduYWwsIGVudHJ5KSB7XG5cdGNvbnN0IGRlYnVnID0gc2lnbmFsLmRlYnVnO1xuXHRjb25zdCB2YWx1ZSA9IHNpZ25hbC50cmFjZV9uZWVkX2luY3JlYXNlID8gc2lnbmFsLnRyYWNlX3YgOiBzaWduYWwudjtcblxuXHRpZiAodmFsdWUgPT09IFVOSU5JVElBTElaRUQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoZGVidWcpIHtcblx0XHR2YXIgcHJldmlvdXNfY2FwdHVyZWRfc2lnbmFscyA9IGNhcHR1cmVkX3NpZ25hbHM7XG5cdFx0dmFyIGNhcHR1cmVkID0gbmV3IFNldCgpO1xuXHRcdHNldF9jYXB0dXJlZF9zaWduYWxzKGNhcHR1cmVkKTtcblx0XHR0cnkge1xuXHRcdFx0dW50cmFjaygoKSA9PiB7XG5cdFx0XHRcdGRlYnVnKCk7XG5cdFx0XHR9KTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0X2NhcHR1cmVkX3NpZ25hbHMocHJldmlvdXNfY2FwdHVyZWRfc2lnbmFscyk7XG5cdFx0fVxuXHRcdGlmIChjYXB0dXJlZC5zaXplID4gMCkge1xuXHRcdFx0Zm9yIChjb25zdCBkZXAgb2YgY2FwdHVyZWQpIHtcblx0XHRcdFx0bG9nX2VudHJ5KGRlcCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdHlwZSA9IChzaWduYWwuZiAmIERFUklWRUQpICE9PSAwID8gJyRkZXJpdmVkJyA6ICckc3RhdGUnO1xuXHRjb25zdCBjdXJyZW50X3JlYWN0aW9uID0gLyoqIEB0eXBlIHtSZWFjdGlvbn0gKi8gKGFjdGl2ZV9yZWFjdGlvbik7XG5cdGNvbnN0IGRpcnR5ID0gc2lnbmFsLnd2ID4gY3VycmVudF9yZWFjdGlvbi53diB8fCBjdXJyZW50X3JlYWN0aW9uLnd2ID09PSAwO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoXG5cdFx0YCVjJHt0eXBlfWAsXG5cdFx0ZGlydHkgPyAnY29sb3I6IENvcm5mbG93ZXJCbHVlOyBmb250LXdlaWdodDogYm9sZCcgOiAnY29sb3I6IGdyZXk7IGZvbnQtd2VpZ2h0OiBib2xkJyxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsICYmIFNUQVRFX1NZTUJPTCBpbiB2YWx1ZVxuXHRcdFx0PyBzbmFwc2hvdCh2YWx1ZSwgdHJ1ZSlcblx0XHRcdDogdmFsdWVcblx0KTtcblxuXHRpZiAodHlwZSA9PT0gJyRkZXJpdmVkJykge1xuXHRcdGNvbnN0IGRlcHMgPSBuZXcgU2V0KC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKHNpZ25hbCkuZGVwcyk7XG5cdFx0Zm9yIChjb25zdCBkZXAgb2YgZGVwcykge1xuXHRcdFx0bG9nX2VudHJ5KGRlcCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHNpZ25hbC5jcmVhdGVkKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRjb25zb2xlLmxvZyhzaWduYWwuY3JlYXRlZCk7XG5cdH1cblxuXHRpZiAoc2lnbmFsLnVwZGF0ZWQpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdGNvbnNvbGUubG9nKHNpZ25hbC51cGRhdGVkKTtcblx0fVxuXG5cdGNvbnN0IHJlYWQgPSBlbnRyeT8ucmVhZDtcblxuXHRpZiAocmVhZCAmJiByZWFkLmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKHZhciBzdGFjayBvZiByZWFkKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0Y29uc29sZS5sb2coc3RhY2spO1xuXHRcdH1cblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdGNvbnNvbGUuZ3JvdXBFbmQoKTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHsoKSA9PiBzdHJpbmd9IGxhYmVsXG4gKiBAcGFyYW0geygpID0+IFR9IGZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFjZShsYWJlbCwgZm4pIHtcblx0dmFyIHByZXZpb3VzbHlfdHJhY2luZ19leHByZXNzaW9ucyA9IHRyYWNpbmdfZXhwcmVzc2lvbnM7XG5cdHRyeSB7XG5cdFx0dHJhY2luZ19leHByZXNzaW9ucyA9IHsgZW50cmllczogbmV3IE1hcCgpLCByZWFjdGlvbjogYWN0aXZlX3JlYWN0aW9uIH07XG5cblx0XHR2YXIgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0XHR2YXIgdmFsdWUgPSBmbigpO1xuXHRcdHZhciB0aW1lID0gKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpLnRvRml4ZWQoMik7XG5cblx0XHRpZiAoIWVmZmVjdF90cmFja2luZygpKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0Y29uc29sZS5sb2coYCR7bGFiZWwoKX0gJWNyYW4gb3V0c2lkZSBvZiBhbiBlZmZlY3QgKCR7dGltZX1tcylgLCAnY29sb3I6IGdyZXknKTtcblx0XHR9IGVsc2UgaWYgKHRyYWNpbmdfZXhwcmVzc2lvbnMuZW50cmllcy5zaXplID09PSAwKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0Y29uc29sZS5sb2coYCR7bGFiZWwoKX0gJWNubyByZWFjdGl2ZSBkZXBlbmRlbmNpZXMgKCR7dGltZX1tcylgLCAnY29sb3I6IGdyZXknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdGNvbnNvbGUuZ3JvdXAoYCR7bGFiZWwoKX0gJWMoJHt0aW1lfW1zKWAsICdjb2xvcjogZ3JleScpO1xuXG5cdFx0XHR2YXIgZW50cmllcyA9IHRyYWNpbmdfZXhwcmVzc2lvbnMuZW50cmllcztcblxuXHRcdFx0dHJhY2luZ19leHByZXNzaW9ucyA9IG51bGw7XG5cblx0XHRcdGZvciAoY29uc3QgW3NpZ25hbCwgZW50cnldIG9mIGVudHJpZXMpIHtcblx0XHRcdFx0bG9nX2VudHJ5KHNpZ25hbCwgZW50cnkpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcblx0XHR9XG5cblx0XHRpZiAocHJldmlvdXNseV90cmFjaW5nX2V4cHJlc3Npb25zICE9PSBudWxsICYmIHRyYWNpbmdfZXhwcmVzc2lvbnMgIT09IG51bGwpIHtcblx0XHRcdGZvciAoY29uc3QgW3NpZ25hbCwgZW50cnldIG9mIHRyYWNpbmdfZXhwcmVzc2lvbnMuZW50cmllcykge1xuXHRcdFx0XHR2YXIgcHJldl9lbnRyeSA9IHByZXZpb3VzbHlfdHJhY2luZ19leHByZXNzaW9ucy5nZXQoc2lnbmFsKTtcblxuXHRcdFx0XHRpZiAocHJldl9lbnRyeSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cHJldmlvdXNseV90cmFjaW5nX2V4cHJlc3Npb25zLnNldChzaWduYWwsIGVudHJ5KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwcmV2X2VudHJ5LnJlYWQucHVzaCguLi5lbnRyeS5yZWFkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSBmaW5hbGx5IHtcblx0XHR0cmFjaW5nX2V4cHJlc3Npb25zID0gcHJldmlvdXNseV90cmFjaW5nX2V4cHJlc3Npb25zO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfc3RhY2sobGFiZWwpIHtcblx0bGV0IGVycm9yID0gRXJyb3IoKTtcblx0Y29uc3Qgc3RhY2sgPSBlcnJvci5zdGFjaztcblxuXHRpZiAoc3RhY2spIHtcblx0XHRjb25zdCBsaW5lcyA9IHN0YWNrLnNwbGl0KCdcXG4nKTtcblx0XHRjb25zdCBuZXdfbGluZXMgPSBbJ1xcbiddO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgbGluZSA9IGxpbmVzW2ldO1xuXG5cdFx0XHRpZiAobGluZSA9PT0gJ0Vycm9yJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmIChsaW5lLmluY2x1ZGVzKCd2YWxpZGF0ZV9lYWNoX2tleXMnKSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGlmIChsaW5lLmluY2x1ZGVzKCdzdmVsdGUvc3JjL2ludGVybmFsJykpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRuZXdfbGluZXMucHVzaChsaW5lKTtcblx0XHR9XG5cblx0XHRpZiAobmV3X2xpbmVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0ZGVmaW5lX3Byb3BlcnR5KGVycm9yLCAnc3RhY2snLCB7XG5cdFx0XHR2YWx1ZTogbmV3X2xpbmVzLmpvaW4oJ1xcbicpXG5cdFx0fSk7XG5cblx0XHRkZWZpbmVfcHJvcGVydHkoZXJyb3IsICduYW1lJywge1xuXHRcdFx0Ly8gJ0Vycm9yJyBzdWZmaXggaXMgcmVxdWlyZWQgZm9yIHN0YWNrIHRyYWNlcyB0byBiZSByZW5kZXJlZCBwcm9wZXJseVxuXHRcdFx0dmFsdWU6IGAke2xhYmVsfUVycm9yYFxuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBlcnJvcjtcbn1cbiIsICIvKiBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IHNjcmlwdHMvcHJvY2Vzcy1tZXNzYWdlcy9pbmRleC5qcy4gRG8gbm90IGVkaXQhICovXG5cbmltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuXG4vKipcbiAqIENhbm5vdCB1c2UgYHtAcmVuZGVyIGNoaWxkcmVuKC4uLil9YCBpZiB0aGUgcGFyZW50IGNvbXBvbmVudCB1c2VzIGBsZXQ6YCBkaXJlY3RpdmVzLiBDb25zaWRlciB1c2luZyBhIG5hbWVkIHNuaXBwZXQgaW5zdGVhZFxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZF9kZWZhdWx0X3NuaXBwZXQoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgaW52YWxpZF9kZWZhdWx0X3NuaXBwZXRcXG5DYW5ub3QgdXNlIFxcYHtAcmVuZGVyIGNoaWxkcmVuKC4uLil9XFxgIGlmIHRoZSBwYXJlbnQgY29tcG9uZW50IHVzZXMgXFxgbGV0OlxcYCBkaXJlY3RpdmVzLiBDb25zaWRlciB1c2luZyBhIG5hbWVkIHNuaXBwZXQgaW5zdGVhZFxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2ludmFsaWRfZGVmYXVsdF9zbmlwcGV0YCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9pbnZhbGlkX2RlZmF1bHRfc25pcHBldGApO1xuXHR9XG59XG5cbi8qKlxuICogQSBzbmlwcGV0IGZ1bmN0aW9uIHdhcyBwYXNzZWQgaW52YWxpZCBhcmd1bWVudHMuIFNuaXBwZXRzIHNob3VsZCBvbmx5IGJlIGluc3RhbnRpYXRlZCB2aWEgYHtAcmVuZGVyIC4uLn1gXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkX3NuaXBwZXRfYXJndW1lbnRzKCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGludmFsaWRfc25pcHBldF9hcmd1bWVudHNcXG5BIHNuaXBwZXQgZnVuY3Rpb24gd2FzIHBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cy4gU25pcHBldHMgc2hvdWxkIG9ubHkgYmUgaW5zdGFudGlhdGVkIHZpYSBcXGB7QHJlbmRlciAuLi59XFxgXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaW52YWxpZF9zbmlwcGV0X2FyZ3VtZW50c2ApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaW52YWxpZF9zbmlwcGV0X2FyZ3VtZW50c2ApO1xuXHR9XG59XG5cbi8qKlxuICogYCVuYW1lJSguLi4pYCBjYW4gb25seSBiZSB1c2VkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaWZlY3ljbGVfb3V0c2lkZV9jb21wb25lbnQobmFtZSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGxpZmVjeWNsZV9vdXRzaWRlX2NvbXBvbmVudFxcblxcYCR7bmFtZX0oLi4uKVxcYCBjYW4gb25seSBiZSB1c2VkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb25cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9saWZlY3ljbGVfb3V0c2lkZV9jb21wb25lbnRgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2xpZmVjeWNsZV9vdXRzaWRlX2NvbXBvbmVudGApO1xuXHR9XG59XG5cbi8qKlxuICogQXR0ZW1wdGVkIHRvIHJlbmRlciBhIHNuaXBwZXQgd2l0aG91dCBhIGB7QHJlbmRlcn1gIGJsb2NrLiBUaGlzIHdvdWxkIGNhdXNlIHRoZSBzbmlwcGV0IGNvZGUgdG8gYmUgc3RyaW5naWZpZWQgaW5zdGVhZCBvZiBpdHMgY29udGVudCBiZWluZyByZW5kZXJlZCB0byB0aGUgRE9NLiBUbyBmaXggdGhpcywgY2hhbmdlIGB7c25pcHBldH1gIHRvIGB7QHJlbmRlciBzbmlwcGV0KCl9YC5cbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNuaXBwZXRfd2l0aG91dF9yZW5kZXJfdGFnKCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYHNuaXBwZXRfd2l0aG91dF9yZW5kZXJfdGFnXFxuQXR0ZW1wdGVkIHRvIHJlbmRlciBhIHNuaXBwZXQgd2l0aG91dCBhIFxcYHtAcmVuZGVyfVxcYCBibG9jay4gVGhpcyB3b3VsZCBjYXVzZSB0aGUgc25pcHBldCBjb2RlIHRvIGJlIHN0cmluZ2lmaWVkIGluc3RlYWQgb2YgaXRzIGNvbnRlbnQgYmVpbmcgcmVuZGVyZWQgdG8gdGhlIERPTS4gVG8gZml4IHRoaXMsIGNoYW5nZSBcXGB7c25pcHBldH1cXGAgdG8gXFxge0ByZW5kZXIgc25pcHBldCgpfVxcYC5cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9zbmlwcGV0X3dpdGhvdXRfcmVuZGVyX3RhZ2ApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvc25pcHBldF93aXRob3V0X3JlbmRlcl90YWdgKTtcblx0fVxufVxuXG4vKipcbiAqIGAlbmFtZSVgIGlzIG5vdCBhIHN0b3JlIHdpdGggYSBgc3Vic2NyaWJlYCBtZXRob2RcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV9pbnZhbGlkX3NoYXBlKG5hbWUpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBzdG9yZV9pbnZhbGlkX3NoYXBlXFxuXFxgJHtuYW1lfVxcYCBpcyBub3QgYSBzdG9yZSB3aXRoIGEgXFxgc3Vic2NyaWJlXFxgIG1ldGhvZFxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL3N0b3JlX2ludmFsaWRfc2hhcGVgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL3N0b3JlX2ludmFsaWRfc2hhcGVgKTtcblx0fVxufVxuXG4vKipcbiAqIFRoZSBgdGhpc2AgcHJvcCBvbiBgPHN2ZWx0ZTplbGVtZW50PmAgbXVzdCBiZSBhIHN0cmluZywgaWYgZGVmaW5lZFxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3ZlbHRlX2VsZW1lbnRfaW52YWxpZF90aGlzX3ZhbHVlKCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYHN2ZWx0ZV9lbGVtZW50X2ludmFsaWRfdGhpc192YWx1ZVxcblRoZSBcXGB0aGlzXFxgIHByb3Agb24gXFxgPHN2ZWx0ZTplbGVtZW50PlxcYCBtdXN0IGJlIGEgc3RyaW5nLCBpZiBkZWZpbmVkXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvc3ZlbHRlX2VsZW1lbnRfaW52YWxpZF90aGlzX3ZhbHVlYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9zdmVsdGVfZWxlbWVudF9pbnZhbGlkX3RoaXNfdmFsdWVgKTtcblx0fVxufSIsICIvKiogQGltcG9ydCB7IENvbXBvbmVudENvbnRleHQgfSBmcm9tICcjY2xpZW50JyAqL1xuXG5pbXBvcnQgeyBERVYgfSBmcm9tICdlc20tZW52JztcbmltcG9ydCB7IGxpZmVjeWNsZV9vdXRzaWRlX2NvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9lcnJvcnMuanMnO1xuaW1wb3J0IHsgc291cmNlIH0gZnJvbSAnLi9yZWFjdGl2aXR5L3NvdXJjZXMuanMnO1xuaW1wb3J0IHtcblx0YWN0aXZlX2VmZmVjdCxcblx0YWN0aXZlX3JlYWN0aW9uLFxuXHRzZXRfYWN0aXZlX2VmZmVjdCxcblx0c2V0X2FjdGl2ZV9yZWFjdGlvblxufSBmcm9tICcuL3J1bnRpbWUuanMnO1xuaW1wb3J0IHsgZWZmZWN0LCB0ZWFyZG93biB9IGZyb20gJy4vcmVhY3Rpdml0eS9lZmZlY3RzLmpzJztcbmltcG9ydCB7IGxlZ2FjeV9tb2RlX2ZsYWcgfSBmcm9tICcuLi9mbGFncy9pbmRleC5qcyc7XG5cbi8qKiBAdHlwZSB7Q29tcG9uZW50Q29udGV4dCB8IG51bGx9ICovXG5leHBvcnQgbGV0IGNvbXBvbmVudF9jb250ZXh0ID0gbnVsbDtcblxuLyoqIEBwYXJhbSB7Q29tcG9uZW50Q29udGV4dCB8IG51bGx9IGNvbnRleHQgKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfY29tcG9uZW50X2NvbnRleHQoY29udGV4dCkge1xuXHRjb21wb25lbnRfY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbi8qKlxuICogVGhlIGN1cnJlbnQgY29tcG9uZW50IGZ1bmN0aW9uLiBEaWZmZXJlbnQgZnJvbSBjdXJyZW50IGNvbXBvbmVudCBjb250ZXh0OlxuICogYGBgaHRtbFxuICogPCEtLSBBcHAuc3ZlbHRlIC0tPlxuICogPEZvbz5cbiAqICAgPEJhciAvPiA8IS0tIGNvbnRleHQgPT0gRm9vLnN2ZWx0ZSwgZnVuY3Rpb24gPT0gQXBwLnN2ZWx0ZSAtLT5cbiAqIDwvRm9vPlxuICogYGBgXG4gKiBAdHlwZSB7Q29tcG9uZW50Q29udGV4dFsnZnVuY3Rpb24nXX1cbiAqL1xuZXhwb3J0IGxldCBkZXZfY3VycmVudF9jb21wb25lbnRfZnVuY3Rpb24gPSBudWxsO1xuXG4vKiogQHBhcmFtIHtDb21wb25lbnRDb250ZXh0WydmdW5jdGlvbiddfSBmbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9kZXZfY3VycmVudF9jb21wb25lbnRfZnVuY3Rpb24oZm4pIHtcblx0ZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uID0gZm47XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBjb250ZXh0IHRoYXQgYmVsb25ncyB0byB0aGUgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50IHdpdGggdGhlIHNwZWNpZmllZCBga2V5YC5cbiAqIE11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7YW55fSBrZXlcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dChrZXkpIHtcblx0Y29uc3QgY29udGV4dF9tYXAgPSBnZXRfb3JfaW5pdF9jb250ZXh0X21hcCgnZ2V0Q29udGV4dCcpO1xuXHRjb25zdCByZXN1bHQgPSAvKiogQHR5cGUge1R9ICovIChjb250ZXh0X21hcC5nZXQoa2V5KSk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQXNzb2NpYXRlcyBhbiBhcmJpdHJhcnkgYGNvbnRleHRgIG9iamVjdCB3aXRoIHRoZSBjdXJyZW50IGNvbXBvbmVudCBhbmQgdGhlIHNwZWNpZmllZCBga2V5YFxuICogYW5kIHJldHVybnMgdGhhdCBvYmplY3QuIFRoZSBjb250ZXh0IGlzIHRoZW4gYXZhaWxhYmxlIHRvIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnRcbiAqIChpbmNsdWRpbmcgc2xvdHRlZCBjb250ZW50KSB3aXRoIGBnZXRDb250ZXh0YC5cbiAqXG4gKiBMaWtlIGxpZmVjeWNsZSBmdW5jdGlvbnMsIHRoaXMgbXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHBhcmFtIHtUfSBjb250ZXh0XG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldENvbnRleHQoa2V5LCBjb250ZXh0KSB7XG5cdGNvbnN0IGNvbnRleHRfbWFwID0gZ2V0X29yX2luaXRfY29udGV4dF9tYXAoJ3NldENvbnRleHQnKTtcblx0Y29udGV4dF9tYXAuc2V0KGtleSwgY29udGV4dCk7XG5cdHJldHVybiBjb250ZXh0O1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGEgZ2l2ZW4gYGtleWAgaGFzIGJlZW4gc2V0IGluIHRoZSBjb250ZXh0IG9mIGEgcGFyZW50IGNvbXBvbmVudC5cbiAqIE11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuXHRjb25zdCBjb250ZXh0X21hcCA9IGdldF9vcl9pbml0X2NvbnRleHRfbWFwKCdoYXNDb250ZXh0Jyk7XG5cdHJldHVybiBjb250ZXh0X21hcC5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHdob2xlIGNvbnRleHQgbWFwIHRoYXQgYmVsb25ncyB0byB0aGUgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi4gVXNlZnVsLCBmb3IgZXhhbXBsZSwgaWYgeW91XG4gKiBwcm9ncmFtbWF0aWNhbGx5IGNyZWF0ZSBhIGNvbXBvbmVudCBhbmQgd2FudCB0byBwYXNzIHRoZSBleGlzdGluZyBjb250ZXh0IHRvIGl0LlxuICpcbiAqIEB0ZW1wbGF0ZSB7TWFwPGFueSwgYW55Pn0gW1Q9TWFwPGFueSwgYW55Pl1cbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQ29udGV4dHMoKSB7XG5cdGNvbnN0IGNvbnRleHRfbWFwID0gZ2V0X29yX2luaXRfY29udGV4dF9tYXAoJ2dldEFsbENvbnRleHRzJyk7XG5cdHJldHVybiAvKiogQHR5cGUge1R9ICovIChjb250ZXh0X21hcCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gcHJvcHNcbiAqIEBwYXJhbSB7YW55fSBydW5lc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKHByb3BzLCBydW5lcyA9IGZhbHNlLCBmbikge1xuXHR2YXIgY3R4ID0gKGNvbXBvbmVudF9jb250ZXh0ID0ge1xuXHRcdHA6IGNvbXBvbmVudF9jb250ZXh0LFxuXHRcdGM6IG51bGwsXG5cdFx0ZDogZmFsc2UsXG5cdFx0ZTogbnVsbCxcblx0XHRtOiBmYWxzZSxcblx0XHRzOiBwcm9wcyxcblx0XHR4OiBudWxsLFxuXHRcdGw6IG51bGxcblx0fSk7XG5cblx0aWYgKGxlZ2FjeV9tb2RlX2ZsYWcgJiYgIXJ1bmVzKSB7XG5cdFx0Y29tcG9uZW50X2NvbnRleHQubCA9IHtcblx0XHRcdHM6IG51bGwsXG5cdFx0XHR1OiBudWxsLFxuXHRcdFx0cjE6IFtdLFxuXHRcdFx0cjI6IHNvdXJjZShmYWxzZSlcblx0XHR9O1xuXHR9XG5cblx0dGVhcmRvd24oKCkgPT4ge1xuXHRcdC8qKiBAdHlwZSB7Q29tcG9uZW50Q29udGV4dH0gKi8gKGN0eCkuZCA9IHRydWU7XG5cdH0pO1xuXG5cdGlmIChERVYpIHtcblx0XHQvLyBjb21wb25lbnQgZnVuY3Rpb25cblx0XHRjb21wb25lbnRfY29udGV4dC5mdW5jdGlvbiA9IGZuO1xuXHRcdGRldl9jdXJyZW50X2NvbXBvbmVudF9mdW5jdGlvbiA9IGZuO1xuXHR9XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBUXG4gKiBAcGFyYW0ge1R9IFtjb21wb25lbnRdXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvcChjb21wb25lbnQpIHtcblx0Y29uc3QgY29udGV4dF9zdGFja19pdGVtID0gY29tcG9uZW50X2NvbnRleHQ7XG5cdGlmIChjb250ZXh0X3N0YWNrX2l0ZW0gIT09IG51bGwpIHtcblx0XHRpZiAoY29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnRleHRfc3RhY2tfaXRlbS54ID0gY29tcG9uZW50O1xuXHRcdH1cblx0XHRjb25zdCBjb21wb25lbnRfZWZmZWN0cyA9IGNvbnRleHRfc3RhY2tfaXRlbS5lO1xuXHRcdGlmIChjb21wb25lbnRfZWZmZWN0cyAhPT0gbnVsbCkge1xuXHRcdFx0dmFyIHByZXZpb3VzX2VmZmVjdCA9IGFjdGl2ZV9lZmZlY3Q7XG5cdFx0XHR2YXIgcHJldmlvdXNfcmVhY3Rpb24gPSBhY3RpdmVfcmVhY3Rpb247XG5cdFx0XHRjb250ZXh0X3N0YWNrX2l0ZW0uZSA9IG51bGw7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvbmVudF9lZmZlY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGNvbXBvbmVudF9lZmZlY3QgPSBjb21wb25lbnRfZWZmZWN0c1tpXTtcblx0XHRcdFx0XHRzZXRfYWN0aXZlX2VmZmVjdChjb21wb25lbnRfZWZmZWN0LmVmZmVjdCk7XG5cdFx0XHRcdFx0c2V0X2FjdGl2ZV9yZWFjdGlvbihjb21wb25lbnRfZWZmZWN0LnJlYWN0aW9uKTtcblx0XHRcdFx0XHRlZmZlY3QoY29tcG9uZW50X2VmZmVjdC5mbik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdHNldF9hY3RpdmVfZWZmZWN0KHByZXZpb3VzX2VmZmVjdCk7XG5cdFx0XHRcdHNldF9hY3RpdmVfcmVhY3Rpb24ocHJldmlvdXNfcmVhY3Rpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb21wb25lbnRfY29udGV4dCA9IGNvbnRleHRfc3RhY2tfaXRlbS5wO1xuXHRcdGlmIChERVYpIHtcblx0XHRcdGRldl9jdXJyZW50X2NvbXBvbmVudF9mdW5jdGlvbiA9IGNvbnRleHRfc3RhY2tfaXRlbS5wPy5mdW5jdGlvbiA/PyBudWxsO1xuXHRcdH1cblx0XHRjb250ZXh0X3N0YWNrX2l0ZW0ubSA9IHRydWU7XG5cdH1cblx0Ly8gTWljcm8tb3B0aW1pemF0aW9uOiBEb24ndCBzZXQgLmEgYWJvdmUgdG8gdGhlIGVtcHR5IG9iamVjdFxuXHQvLyBzbyBpdCBjYW4gYmUgZ2FyYmFnZS1jb2xsZWN0ZWQgd2hlbiB0aGUgcmV0dXJuIGhlcmUgaXMgdW51c2VkXG5cdHJldHVybiBjb21wb25lbnQgfHwgLyoqIEB0eXBlIHtUfSAqLyAoe30pO1xufVxuXG4vKiogQHJldHVybnMge2Jvb2xlYW59ICovXG5leHBvcnQgZnVuY3Rpb24gaXNfcnVuZXMoKSB7XG5cdHJldHVybiAhbGVnYWN5X21vZGVfZmxhZyB8fCAoY29tcG9uZW50X2NvbnRleHQgIT09IG51bGwgJiYgY29tcG9uZW50X2NvbnRleHQubCA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtNYXA8dW5rbm93biwgdW5rbm93bj59XG4gKi9cbmZ1bmN0aW9uIGdldF9vcl9pbml0X2NvbnRleHRfbWFwKG5hbWUpIHtcblx0aWYgKGNvbXBvbmVudF9jb250ZXh0ID09PSBudWxsKSB7XG5cdFx0bGlmZWN5Y2xlX291dHNpZGVfY29tcG9uZW50KG5hbWUpO1xuXHR9XG5cblx0cmV0dXJuIChjb21wb25lbnRfY29udGV4dC5jID8/PSBuZXcgTWFwKGdldF9wYXJlbnRfY29udGV4dChjb21wb25lbnRfY29udGV4dCkgfHwgdW5kZWZpbmVkKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDb21wb25lbnRDb250ZXh0fSBjb21wb25lbnRfY29udGV4dFxuICogQHJldHVybnMge01hcDx1bmtub3duLCB1bmtub3duPiB8IG51bGx9XG4gKi9cbmZ1bmN0aW9uIGdldF9wYXJlbnRfY29udGV4dChjb21wb25lbnRfY29udGV4dCkge1xuXHRsZXQgcGFyZW50ID0gY29tcG9uZW50X2NvbnRleHQucDtcblx0d2hpbGUgKHBhcmVudCAhPT0gbnVsbCkge1xuXHRcdGNvbnN0IGNvbnRleHRfbWFwID0gcGFyZW50LmM7XG5cdFx0aWYgKGNvbnRleHRfbWFwICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gY29udGV4dF9tYXA7XG5cdFx0fVxuXHRcdHBhcmVudCA9IHBhcmVudC5wO1xuXHR9XG5cdHJldHVybiBudWxsO1xufVxuIiwgIi8qKiBAaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnI2NsaWVudCcgKi9cbmltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuaW1wb3J0IHsgZ2V0LCBhY3RpdmVfZWZmZWN0LCBhY3RpdmVfcmVhY3Rpb24sIHNldF9hY3RpdmVfcmVhY3Rpb24gfSBmcm9tICcuL3J1bnRpbWUuanMnO1xuaW1wb3J0IHtcblx0YXJyYXlfcHJvdG90eXBlLFxuXHRnZXRfZGVzY3JpcHRvcixcblx0Z2V0X3Byb3RvdHlwZV9vZixcblx0aXNfYXJyYXksXG5cdG9iamVjdF9wcm90b3R5cGVcbn0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7IHN0YXRlIGFzIHNvdXJjZSwgc2V0IH0gZnJvbSAnLi9yZWFjdGl2aXR5L3NvdXJjZXMuanMnO1xuaW1wb3J0IHsgU1RBVEVfU1lNQk9MIH0gZnJvbSAnI2NsaWVudC9jb25zdGFudHMnO1xuaW1wb3J0IHsgVU5JTklUSUFMSVpFRCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgKiBhcyBlIGZyb20gJy4vZXJyb3JzLmpzJztcbmltcG9ydCB7IGdldF9zdGFjayB9IGZyb20gJy4vZGV2L3RyYWNpbmcuanMnO1xuaW1wb3J0IHsgdHJhY2luZ19tb2RlX2ZsYWcgfSBmcm9tICcuLi9mbGFncy9pbmRleC5qcyc7XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7VH0gdmFsdWVcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJveHkodmFsdWUpIHtcblx0Ly8gaWYgbm9uLXByb3h5YWJsZSwgb3IgaXMgYWxyZWFkeSBhIHByb3h5LCByZXR1cm4gYHZhbHVlYFxuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCBTVEFURV9TWU1CT0wgaW4gdmFsdWUpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRjb25zdCBwcm90b3R5cGUgPSBnZXRfcHJvdG90eXBlX29mKHZhbHVlKTtcblxuXHRpZiAocHJvdG90eXBlICE9PSBvYmplY3RfcHJvdG90eXBlICYmIHByb3RvdHlwZSAhPT0gYXJyYXlfcHJvdG90eXBlKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0LyoqIEB0eXBlIHtNYXA8YW55LCBTb3VyY2U8YW55Pj59ICovXG5cdHZhciBzb3VyY2VzID0gbmV3IE1hcCgpO1xuXHR2YXIgaXNfcHJveGllZF9hcnJheSA9IGlzX2FycmF5KHZhbHVlKTtcblx0dmFyIHZlcnNpb24gPSBzb3VyY2UoMCk7XG5cblx0dmFyIHN0YWNrID0gREVWICYmIHRyYWNpbmdfbW9kZV9mbGFnID8gZ2V0X3N0YWNrKCdDcmVhdGVkQXQnKSA6IG51bGw7XG5cdHZhciByZWFjdGlvbiA9IGFjdGl2ZV9yZWFjdGlvbjtcblxuXHQvKipcblx0ICogQHRlbXBsYXRlIFRcblx0ICogQHBhcmFtIHsoKSA9PiBUfSBmblxuXHQgKi9cblx0dmFyIHdpdGhfcGFyZW50ID0gKGZuKSA9PiB7XG5cdFx0dmFyIHByZXZpb3VzX3JlYWN0aW9uID0gYWN0aXZlX3JlYWN0aW9uO1xuXHRcdHNldF9hY3RpdmVfcmVhY3Rpb24ocmVhY3Rpb24pO1xuXG5cdFx0LyoqIEB0eXBlIHtUfSAqL1xuXHRcdHZhciByZXN1bHQgPSBmbigpO1xuXG5cdFx0c2V0X2FjdGl2ZV9yZWFjdGlvbihwcmV2aW91c19yZWFjdGlvbik7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHRpZiAoaXNfcHJveGllZF9hcnJheSkge1xuXHRcdC8vIFdlIG5lZWQgdG8gY3JlYXRlIHRoZSBsZW5ndGggc291cmNlIGVhZ2VybHkgdG8gZW5zdXJlIHRoYXRcblx0XHQvLyBtdXRhdGlvbnMgdG8gdGhlIGFycmF5IGFyZSBwcm9wZXJseSBzeW5jZWQgd2l0aCBvdXIgcHJveHlcblx0XHRzb3VyY2VzLnNldCgnbGVuZ3RoJywgc291cmNlKC8qKiBAdHlwZSB7YW55W119ICovICh2YWx1ZSkubGVuZ3RoLCBzdGFjaykpO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm94eSgvKiogQHR5cGUge2FueX0gKi8gKHZhbHVlKSwge1xuXHRcdGRlZmluZVByb3BlcnR5KF8sIHByb3AsIGRlc2NyaXB0b3IpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0ISgndmFsdWUnIGluIGRlc2NyaXB0b3IpIHx8XG5cdFx0XHRcdGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID09PSBmYWxzZSB8fFxuXHRcdFx0XHRkZXNjcmlwdG9yLmVudW1lcmFibGUgPT09IGZhbHNlIHx8XG5cdFx0XHRcdGRlc2NyaXB0b3Iud3JpdGFibGUgPT09IGZhbHNlXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gd2UgZGlzYWxsb3cgbm9uLWJhc2ljIGRlc2NyaXB0b3JzLCBiZWNhdXNlIHVubGVzcyB0aGV5IGFyZSBhcHBsaWVkIHRvIHRoZVxuXHRcdFx0XHQvLyB0YXJnZXQgb2JqZWN0IFx1MjAxNCB3aGljaCB3ZSBhdm9pZCwgc28gdGhhdCBzdGF0ZSBjYW4gYmUgZm9ya2VkIFx1MjAxNCB3ZSB3aWxsIHJ1blxuXHRcdFx0XHQvLyBhZm91bCBvZiB0aGUgdmFyaW91cyBpbnZhcmlhbnRzXG5cdFx0XHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1Byb3h5L1Byb3h5L2dldE93blByb3BlcnR5RGVzY3JpcHRvciNpbnZhcmlhbnRzXG5cdFx0XHRcdGUuc3RhdGVfZGVzY3JpcHRvcnNfZml4ZWQoKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHMgPSBzb3VyY2VzLmdldChwcm9wKTtcblxuXHRcdFx0aWYgKHMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRzID0gd2l0aF9wYXJlbnQoKCkgPT4gc291cmNlKGRlc2NyaXB0b3IudmFsdWUsIHN0YWNrKSk7XG5cdFx0XHRcdHNvdXJjZXMuc2V0KHByb3AsIHMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0KFxuXHRcdFx0XHRcdHMsXG5cdFx0XHRcdFx0d2l0aF9wYXJlbnQoKCkgPT4gcHJveHkoZGVzY3JpcHRvci52YWx1ZSkpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHRkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHtcblx0XHRcdHZhciBzID0gc291cmNlcy5nZXQocHJvcCk7XG5cblx0XHRcdGlmIChzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aWYgKHByb3AgaW4gdGFyZ2V0KSB7XG5cdFx0XHRcdFx0c291cmNlcy5zZXQoXG5cdFx0XHRcdFx0XHRwcm9wLFxuXHRcdFx0XHRcdFx0d2l0aF9wYXJlbnQoKCkgPT4gc291cmNlKFVOSU5JVElBTElaRUQsIHN0YWNrKSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHVwZGF0ZV92ZXJzaW9uKHZlcnNpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBXaGVuIHdvcmtpbmcgd2l0aCBhcnJheXMsIHdlIG5lZWQgdG8gYWxzbyBlbnN1cmUgd2UgdXBkYXRlIHRoZSBsZW5ndGggd2hlbiByZW1vdmluZ1xuXHRcdFx0XHQvLyBhbiBpbmRleGVkIHByb3BlcnR5XG5cdFx0XHRcdGlmIChpc19wcm94aWVkX2FycmF5ICYmIHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHZhciBscyA9IC8qKiBAdHlwZSB7U291cmNlPG51bWJlcj59ICovIChzb3VyY2VzLmdldCgnbGVuZ3RoJykpO1xuXHRcdFx0XHRcdHZhciBuID0gTnVtYmVyKHByb3ApO1xuXG5cdFx0XHRcdFx0aWYgKE51bWJlci5pc0ludGVnZXIobikgJiYgbiA8IGxzLnYpIHtcblx0XHRcdFx0XHRcdHNldChscywgbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHNldChzLCBVTklOSVRJQUxJWkVEKTtcblx0XHRcdFx0dXBkYXRlX3ZlcnNpb24odmVyc2lvbik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHRnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuXHRcdFx0aWYgKHByb3AgPT09IFNUQVRFX1NZTUJPTCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzID0gc291cmNlcy5nZXQocHJvcCk7XG5cdFx0XHR2YXIgZXhpc3RzID0gcHJvcCBpbiB0YXJnZXQ7XG5cblx0XHRcdC8vIGNyZWF0ZSBhIHNvdXJjZSwgYnV0IG9ubHkgaWYgaXQncyBhbiBvd24gcHJvcGVydHkgYW5kIG5vdCBhIHByb3RvdHlwZSBwcm9wZXJ0eVxuXHRcdFx0aWYgKHMgPT09IHVuZGVmaW5lZCAmJiAoIWV4aXN0cyB8fCBnZXRfZGVzY3JpcHRvcih0YXJnZXQsIHByb3ApPy53cml0YWJsZSkpIHtcblx0XHRcdFx0cyA9IHdpdGhfcGFyZW50KCgpID0+IHNvdXJjZShwcm94eShleGlzdHMgPyB0YXJnZXRbcHJvcF0gOiBVTklOSVRJQUxJWkVEKSwgc3RhY2spKTtcblx0XHRcdFx0c291cmNlcy5zZXQocHJvcCwgcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dmFyIHYgPSBnZXQocyk7XG5cdFx0XHRcdHJldHVybiB2ID09PSBVTklOSVRJQUxJWkVEID8gdW5kZWZpbmVkIDogdjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xuXHRcdH0sXG5cblx0XHRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wKSB7XG5cdFx0XHR2YXIgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcCk7XG5cblx0XHRcdGlmIChkZXNjcmlwdG9yICYmICd2YWx1ZScgaW4gZGVzY3JpcHRvcikge1xuXHRcdFx0XHR2YXIgcyA9IHNvdXJjZXMuZ2V0KHByb3ApO1xuXHRcdFx0XHRpZiAocykgZGVzY3JpcHRvci52YWx1ZSA9IGdldChzKTtcblx0XHRcdH0gZWxzZSBpZiAoZGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHZhciBzb3VyY2UgPSBzb3VyY2VzLmdldChwcm9wKTtcblx0XHRcdFx0dmFyIHZhbHVlID0gc291cmNlPy52O1xuXG5cdFx0XHRcdGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gVU5JTklUSUFMSVpFRCkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGRlc2NyaXB0b3I7XG5cdFx0fSxcblxuXHRcdGhhcyh0YXJnZXQsIHByb3ApIHtcblx0XHRcdGlmIChwcm9wID09PSBTVEFURV9TWU1CT0wpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzID0gc291cmNlcy5nZXQocHJvcCk7XG5cdFx0XHR2YXIgaGFzID0gKHMgIT09IHVuZGVmaW5lZCAmJiBzLnYgIT09IFVOSU5JVElBTElaRUQpIHx8IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcCk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0cyAhPT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdChhY3RpdmVfZWZmZWN0ICE9PSBudWxsICYmICghaGFzIHx8IGdldF9kZXNjcmlwdG9yKHRhcmdldCwgcHJvcCk/LndyaXRhYmxlKSlcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cyA9IHdpdGhfcGFyZW50KCgpID0+IHNvdXJjZShoYXMgPyBwcm94eSh0YXJnZXRbcHJvcF0pIDogVU5JTklUSUFMSVpFRCwgc3RhY2spKTtcblx0XHRcdFx0XHRzb3VyY2VzLnNldChwcm9wLCBzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB2YWx1ZSA9IGdldChzKTtcblx0XHRcdFx0aWYgKHZhbHVlID09PSBVTklOSVRJQUxJWkVEKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBoYXM7XG5cdFx0fSxcblxuXHRcdHNldCh0YXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuXHRcdFx0dmFyIHMgPSBzb3VyY2VzLmdldChwcm9wKTtcblx0XHRcdHZhciBoYXMgPSBwcm9wIGluIHRhcmdldDtcblxuXHRcdFx0Ly8gdmFyaWFibGUubGVuZ3RoID0gdmFsdWUgLT4gY2xlYXIgYWxsIHNpZ25hbHMgd2l0aCBpbmRleCA+PSB2YWx1ZVxuXHRcdFx0aWYgKGlzX3Byb3hpZWRfYXJyYXkgJiYgcHJvcCA9PT0gJ2xlbmd0aCcpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IHZhbHVlOyBpIDwgLyoqIEB0eXBlIHtTb3VyY2U8bnVtYmVyPn0gKi8gKHMpLnY7IGkgKz0gMSkge1xuXHRcdFx0XHRcdHZhciBvdGhlcl9zID0gc291cmNlcy5nZXQoaSArICcnKTtcblx0XHRcdFx0XHRpZiAob3RoZXJfcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRzZXQob3RoZXJfcywgVU5JTklUSUFMSVpFRCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChpIGluIHRhcmdldCkge1xuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlIGl0ZW0gZXhpc3RzIGluIHRoZSBvcmlnaW5hbCwgd2UgbmVlZCB0byBjcmVhdGUgYSB1bmluaXRpYWxpemVkIHNvdXJjZSxcblx0XHRcdFx0XHRcdC8vIGVsc2UgYSBsYXRlciByZWFkIG9mIHRoZSBwcm9wZXJ0eSB3b3VsZCByZXN1bHQgaW4gYSBzb3VyY2UgYmVpbmcgY3JlYXRlZCB3aXRoXG5cdFx0XHRcdFx0XHQvLyB0aGUgdmFsdWUgb2YgdGhlIG9yaWdpbmFsIGl0ZW0gYXQgdGhhdCBpbmRleC5cblx0XHRcdFx0XHRcdG90aGVyX3MgPSB3aXRoX3BhcmVudCgoKSA9PiBzb3VyY2UoVU5JTklUSUFMSVpFRCwgc3RhY2spKTtcblx0XHRcdFx0XHRcdHNvdXJjZXMuc2V0KGkgKyAnJywgb3RoZXJfcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHdlIGhhdmVuJ3QgeWV0IGNyZWF0ZWQgYSBzb3VyY2UgZm9yIHRoaXMgcHJvcGVydHksIHdlIG5lZWQgdG8gZW5zdXJlXG5cdFx0XHQvLyB3ZSBkbyBzbyBvdGhlcndpc2UgaWYgd2UgcmVhZCBpdCBsYXRlciwgdGhlbiB0aGUgd3JpdGUgd29uJ3QgYmUgdHJhY2tlZCBhbmRcblx0XHRcdC8vIHRoZSBoZXVyaXN0aWNzIG9mIGVmZmVjdHMgd2lsbCBiZSBkaWZmZXJlbnQgdnMgaWYgd2UgaGFkIHJlYWQgdGhlIHByb3hpZWRcblx0XHRcdC8vIG9iamVjdCBwcm9wZXJ0eSBiZWZvcmUgd3JpdGluZyB0byB0aGF0IHByb3BlcnR5LlxuXHRcdFx0aWYgKHMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAoIWhhcyB8fCBnZXRfZGVzY3JpcHRvcih0YXJnZXQsIHByb3ApPy53cml0YWJsZSkge1xuXHRcdFx0XHRcdHMgPSB3aXRoX3BhcmVudCgoKSA9PiBzb3VyY2UodW5kZWZpbmVkLCBzdGFjaykpO1xuXHRcdFx0XHRcdHNldChcblx0XHRcdFx0XHRcdHMsXG5cdFx0XHRcdFx0XHR3aXRoX3BhcmVudCgoKSA9PiBwcm94eSh2YWx1ZSkpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRzb3VyY2VzLnNldChwcm9wLCBzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFzID0gcy52ICE9PSBVTklOSVRJQUxJWkVEO1xuXHRcdFx0XHRzZXQoXG5cdFx0XHRcdFx0cyxcblx0XHRcdFx0XHR3aXRoX3BhcmVudCgoKSA9PiBwcm94eSh2YWx1ZSkpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSBuZXcgdmFsdWUgYmVmb3JlIHVwZGF0aW5nIGFueSBzaWduYWxzIHNvIHRoYXQgYW55IGxpc3RlbmVycyBnZXQgdGhlIG5ldyB2YWx1ZVxuXHRcdFx0aWYgKGRlc2NyaXB0b3I/LnNldCkge1xuXHRcdFx0XHRkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghaGFzKSB7XG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgbXV0YXRlZCBhbiBhcnJheSBkaXJlY3RseSwgd2UgbWlnaHQgbmVlZCB0b1xuXHRcdFx0XHQvLyBzaWduYWwgdGhhdCBsZW5ndGggaGFzIGFsc28gY2hhbmdlZC4gRG8gaXQgYmVmb3JlIHVwZGF0aW5nIG1ldGFkYXRhXG5cdFx0XHRcdC8vIHRvIGVuc3VyZSB0aGF0IGl0ZXJhdGluZyBvdmVyIHRoZSBhcnJheSBhcyBhIHJlc3VsdCBvZiBhIG1ldGFkYXRhIHVwZGF0ZVxuXHRcdFx0XHQvLyB3aWxsIG5vdCBjYXVzZSB0aGUgbGVuZ3RoIHRvIGJlIG91dCBvZiBzeW5jLlxuXHRcdFx0XHRpZiAoaXNfcHJveGllZF9hcnJheSAmJiB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHR2YXIgbHMgPSAvKiogQHR5cGUge1NvdXJjZTxudW1iZXI+fSAqLyAoc291cmNlcy5nZXQoJ2xlbmd0aCcpKTtcblx0XHRcdFx0XHR2YXIgbiA9IE51bWJlcihwcm9wKTtcblxuXHRcdFx0XHRcdGlmIChOdW1iZXIuaXNJbnRlZ2VyKG4pICYmIG4gPj0gbHMudikge1xuXHRcdFx0XHRcdFx0c2V0KGxzLCBuICsgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dXBkYXRlX3ZlcnNpb24odmVyc2lvbik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHRvd25LZXlzKHRhcmdldCkge1xuXHRcdFx0Z2V0KHZlcnNpb24pO1xuXG5cdFx0XHR2YXIgb3duX2tleXMgPSBSZWZsZWN0Lm93bktleXModGFyZ2V0KS5maWx0ZXIoKGtleSkgPT4ge1xuXHRcdFx0XHR2YXIgc291cmNlID0gc291cmNlcy5nZXQoa2V5KTtcblx0XHRcdFx0cmV0dXJuIHNvdXJjZSA9PT0gdW5kZWZpbmVkIHx8IHNvdXJjZS52ICE9PSBVTklOSVRJQUxJWkVEO1xuXHRcdFx0fSk7XG5cblx0XHRcdGZvciAodmFyIFtrZXksIHNvdXJjZV0gb2Ygc291cmNlcykge1xuXHRcdFx0XHRpZiAoc291cmNlLnYgIT09IFVOSU5JVElBTElaRUQgJiYgIShrZXkgaW4gdGFyZ2V0KSkge1xuXHRcdFx0XHRcdG93bl9rZXlzLnB1c2goa2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3duX2tleXM7XG5cdFx0fSxcblxuXHRcdHNldFByb3RvdHlwZU9mKCkge1xuXHRcdFx0ZS5zdGF0ZV9wcm90b3R5cGVfZml4ZWQoKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7U291cmNlPG51bWJlcj59IHNpZ25hbFxuICogQHBhcmFtIHsxIHwgLTF9IFtkXVxuICovXG5mdW5jdGlvbiB1cGRhdGVfdmVyc2lvbihzaWduYWwsIGQgPSAxKSB7XG5cdHNldChzaWduYWwsIHNpZ25hbC52ICsgZCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfcHJveGllZF92YWx1ZSh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIFNUQVRFX1NZTUJPTCBpbiB2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlW1NUQVRFX1NZTUJPTF07XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHQvLyB0aGUgYWJvdmUgaWYgY2hlY2sgY2FuIHRocm93IGFuIGVycm9yIGlmIHRoZSB2YWx1ZSBpbiBxdWVzdGlvblxuXHRcdC8vIGlzIHRoZSBjb250ZW50V2luZG93IG9mIGFuIGlmcmFtZSBvbiBhbm90aGVyIGRvbWFpbiwgaW4gd2hpY2hcblx0XHQvLyBjYXNlIHdlIHdhbnQgdG8ganVzdCByZXR1cm4gdGhlIHZhbHVlIChiZWNhdXNlIGl0J3MgZGVmaW5pdGVseVxuXHRcdC8vIG5vdCBhIHByb3hpZWQgdmFsdWUpIHNvIHdlIGRvbid0IGJyZWFrIGFueSBKYXZhU2NyaXB0IGludGVyYWN0aW5nXG5cdFx0Ly8gd2l0aCB0aGF0IGlmcmFtZSAoc3VjaCBhcyB2YXJpb3VzIHBheW1lbnQgY29tcGFuaWVzIGNsaWVudCBzaWRlXG5cdFx0Ly8gSmF2YVNjcmlwdCBsaWJyYXJpZXMgaW50ZXJhY3Rpbmcgd2l0aCB0aGVpciBpZnJhbWVzIG9uIHRoZSBzYW1lXG5cdFx0Ly8gZG9tYWluKVxuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBhXG4gKiBAcGFyYW0ge2FueX0gYlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXMoYSwgYikge1xuXHRyZXR1cm4gT2JqZWN0LmlzKGdldF9wcm94aWVkX3ZhbHVlKGEpLCBnZXRfcHJveGllZF92YWx1ZShiKSk7XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBEZXJpdmVkLCBFZmZlY3QgfSBmcm9tICcjY2xpZW50JyAqL1xuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5pbXBvcnQgeyBDTEVBTiwgREVSSVZFRCwgRElSVFksIEVGRkVDVF9IQVNfREVSSVZFRCwgTUFZQkVfRElSVFksIFVOT1dORUQgfSBmcm9tICcjY2xpZW50L2NvbnN0YW50cyc7XG5pbXBvcnQge1xuXHRhY3RpdmVfcmVhY3Rpb24sXG5cdGFjdGl2ZV9lZmZlY3QsXG5cdHNldF9zaWduYWxfc3RhdHVzLFxuXHRza2lwX3JlYWN0aW9uLFxuXHR1cGRhdGVfcmVhY3Rpb24sXG5cdGluY3JlbWVudF93cml0ZV92ZXJzaW9uLFxuXHRzZXRfYWN0aXZlX2VmZmVjdCxcblx0cHVzaF9yZWFjdGlvbl92YWx1ZVxufSBmcm9tICcuLi9ydW50aW1lLmpzJztcbmltcG9ydCB7IGVxdWFscywgc2FmZV9lcXVhbHMgfSBmcm9tICcuL2VxdWFsaXR5LmpzJztcbmltcG9ydCAqIGFzIGUgZnJvbSAnLi4vZXJyb3JzLmpzJztcbmltcG9ydCB7IGRlc3Ryb3lfZWZmZWN0IH0gZnJvbSAnLi9lZmZlY3RzLmpzJztcbmltcG9ydCB7IGluc3BlY3RfZWZmZWN0cywgc2V0X2luc3BlY3RfZWZmZWN0cyB9IGZyb20gJy4vc291cmNlcy5qcyc7XG5pbXBvcnQgeyBnZXRfc3RhY2sgfSBmcm9tICcuLi9kZXYvdHJhY2luZy5qcyc7XG5pbXBvcnQgeyB0cmFjaW5nX21vZGVfZmxhZyB9IGZyb20gJy4uLy4uL2ZsYWdzL2luZGV4LmpzJztcbmltcG9ydCB7IGNvbXBvbmVudF9jb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC5qcyc7XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7KCkgPT4gVn0gZm5cbiAqIEByZXR1cm5zIHtEZXJpdmVkPFY+fVxuICovXG4vKiNfX05PX1NJREVfRUZGRUNUU19fKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmVkKGZuKSB7XG5cdHZhciBmbGFncyA9IERFUklWRUQgfCBESVJUWTtcblx0dmFyIHBhcmVudF9kZXJpdmVkID1cblx0XHRhY3RpdmVfcmVhY3Rpb24gIT09IG51bGwgJiYgKGFjdGl2ZV9yZWFjdGlvbi5mICYgREVSSVZFRCkgIT09IDBcblx0XHRcdD8gLyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAoYWN0aXZlX3JlYWN0aW9uKVxuXHRcdFx0OiBudWxsO1xuXG5cdGlmIChhY3RpdmVfZWZmZWN0ID09PSBudWxsIHx8IChwYXJlbnRfZGVyaXZlZCAhPT0gbnVsbCAmJiAocGFyZW50X2Rlcml2ZWQuZiAmIFVOT1dORUQpICE9PSAwKSkge1xuXHRcdGZsYWdzIHw9IFVOT1dORUQ7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gU2luY2UgZGVyaXZlZHMgYXJlIGV2YWx1YXRlZCBsYXppbHksIGFueSBlZmZlY3RzIGNyZWF0ZWQgaW5zaWRlIHRoZW0gYXJlXG5cdFx0Ly8gY3JlYXRlZCB0b28gbGF0ZSB0byBlbnN1cmUgdGhhdCB0aGUgcGFyZW50IGVmZmVjdCBpcyBhZGRlZCB0byB0aGUgdHJlZVxuXHRcdGFjdGl2ZV9lZmZlY3QuZiB8PSBFRkZFQ1RfSEFTX0RFUklWRUQ7XG5cdH1cblxuXHQvKiogQHR5cGUge0Rlcml2ZWQ8Vj59ICovXG5cdGNvbnN0IHNpZ25hbCA9IHtcblx0XHRjdHg6IGNvbXBvbmVudF9jb250ZXh0LFxuXHRcdGRlcHM6IG51bGwsXG5cdFx0ZWZmZWN0czogbnVsbCxcblx0XHRlcXVhbHMsXG5cdFx0ZjogZmxhZ3MsXG5cdFx0Zm4sXG5cdFx0cmVhY3Rpb25zOiBudWxsLFxuXHRcdHJ2OiAwLFxuXHRcdHY6IC8qKiBAdHlwZSB7Vn0gKi8gKG51bGwpLFxuXHRcdHd2OiAwLFxuXHRcdHBhcmVudDogcGFyZW50X2Rlcml2ZWQgPz8gYWN0aXZlX2VmZmVjdFxuXHR9O1xuXG5cdGlmIChERVYgJiYgdHJhY2luZ19tb2RlX2ZsYWcpIHtcblx0XHRzaWduYWwuY3JlYXRlZCA9IGdldF9zdGFjaygnQ3JlYXRlZEF0Jyk7XG5cdH1cblxuXHRyZXR1cm4gc2lnbmFsO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0geygpID0+IFZ9IGZuXG4gKiBAcmV0dXJucyB7RGVyaXZlZDxWPn1cbiAqL1xuLyojX19OT19TSURFX0VGRkVDVFNfXyovXG5leHBvcnQgZnVuY3Rpb24gdXNlcl9kZXJpdmVkKGZuKSB7XG5cdGNvbnN0IGQgPSBkZXJpdmVkKGZuKTtcblxuXHRwdXNoX3JlYWN0aW9uX3ZhbHVlKGQpO1xuXG5cdHJldHVybiBkO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0geygpID0+IFZ9IGZuXG4gKiBAcmV0dXJucyB7RGVyaXZlZDxWPn1cbiAqL1xuLyojX19OT19TSURFX0VGRkVDVFNfXyovXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZlZF9zYWZlX2VxdWFsKGZuKSB7XG5cdGNvbnN0IHNpZ25hbCA9IGRlcml2ZWQoZm4pO1xuXHRzaWduYWwuZXF1YWxzID0gc2FmZV9lcXVhbHM7XG5cdHJldHVybiBzaWduYWw7XG59XG5cbi8qKlxuICogQHBhcmFtIHtEZXJpdmVkfSBkZXJpdmVkXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lfZGVyaXZlZF9lZmZlY3RzKGRlcml2ZWQpIHtcblx0dmFyIGVmZmVjdHMgPSBkZXJpdmVkLmVmZmVjdHM7XG5cblx0aWYgKGVmZmVjdHMgIT09IG51bGwpIHtcblx0XHRkZXJpdmVkLmVmZmVjdHMgPSBudWxsO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlZmZlY3RzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRkZXN0cm95X2VmZmVjdCgvKiogQHR5cGUge0VmZmVjdH0gKi8gKGVmZmVjdHNbaV0pKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IHVwZGF0aW5nIGRlcml2ZWRzLCB1c2VkIHRvIGRldGVjdCBpbmZpbml0ZSByZWN1cnNpb25cbiAqIGluIGRldiBtb2RlIGFuZCBwcm92aWRlIGEgbmljZXIgZXJyb3IgdGhhbiAndG9vIG11Y2ggcmVjdXJzaW9uJ1xuICogQHR5cGUge0Rlcml2ZWRbXX1cbiAqL1xubGV0IHN0YWNrID0gW107XG5cbi8qKlxuICogQHBhcmFtIHtEZXJpdmVkfSBkZXJpdmVkXG4gKiBAcmV0dXJucyB7RWZmZWN0IHwgbnVsbH1cbiAqL1xuZnVuY3Rpb24gZ2V0X2Rlcml2ZWRfcGFyZW50X2VmZmVjdChkZXJpdmVkKSB7XG5cdHZhciBwYXJlbnQgPSBkZXJpdmVkLnBhcmVudDtcblx0d2hpbGUgKHBhcmVudCAhPT0gbnVsbCkge1xuXHRcdGlmICgocGFyZW50LmYgJiBERVJJVkVEKSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAocGFyZW50KTtcblx0XHR9XG5cdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudDtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtEZXJpdmVkfSBkZXJpdmVkXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVfZGVyaXZlZChkZXJpdmVkKSB7XG5cdHZhciB2YWx1ZTtcblx0dmFyIHByZXZfYWN0aXZlX2VmZmVjdCA9IGFjdGl2ZV9lZmZlY3Q7XG5cblx0c2V0X2FjdGl2ZV9lZmZlY3QoZ2V0X2Rlcml2ZWRfcGFyZW50X2VmZmVjdChkZXJpdmVkKSk7XG5cblx0aWYgKERFVikge1xuXHRcdGxldCBwcmV2X2luc3BlY3RfZWZmZWN0cyA9IGluc3BlY3RfZWZmZWN0cztcblx0XHRzZXRfaW5zcGVjdF9lZmZlY3RzKG5ldyBTZXQoKSk7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChzdGFjay5pbmNsdWRlcyhkZXJpdmVkKSkge1xuXHRcdFx0XHRlLmRlcml2ZWRfcmVmZXJlbmNlc19zZWxmKCk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YWNrLnB1c2goZGVyaXZlZCk7XG5cblx0XHRcdGRlc3Ryb3lfZGVyaXZlZF9lZmZlY3RzKGRlcml2ZWQpO1xuXHRcdFx0dmFsdWUgPSB1cGRhdGVfcmVhY3Rpb24oZGVyaXZlZCk7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHNldF9hY3RpdmVfZWZmZWN0KHByZXZfYWN0aXZlX2VmZmVjdCk7XG5cdFx0XHRzZXRfaW5zcGVjdF9lZmZlY3RzKHByZXZfaW5zcGVjdF9lZmZlY3RzKTtcblx0XHRcdHN0YWNrLnBvcCgpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHR0cnkge1xuXHRcdFx0ZGVzdHJveV9kZXJpdmVkX2VmZmVjdHMoZGVyaXZlZCk7XG5cdFx0XHR2YWx1ZSA9IHVwZGF0ZV9yZWFjdGlvbihkZXJpdmVkKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0X2FjdGl2ZV9lZmZlY3QocHJldl9hY3RpdmVfZWZmZWN0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtEZXJpdmVkfSBkZXJpdmVkXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9kZXJpdmVkKGRlcml2ZWQpIHtcblx0dmFyIHZhbHVlID0gZXhlY3V0ZV9kZXJpdmVkKGRlcml2ZWQpO1xuXHR2YXIgc3RhdHVzID1cblx0XHQoc2tpcF9yZWFjdGlvbiB8fCAoZGVyaXZlZC5mICYgVU5PV05FRCkgIT09IDApICYmIGRlcml2ZWQuZGVwcyAhPT0gbnVsbCA/IE1BWUJFX0RJUlRZIDogQ0xFQU47XG5cblx0c2V0X3NpZ25hbF9zdGF0dXMoZGVyaXZlZCwgc3RhdHVzKTtcblxuXHRpZiAoIWRlcml2ZWQuZXF1YWxzKHZhbHVlKSkge1xuXHRcdGRlcml2ZWQudiA9IHZhbHVlO1xuXHRcdGRlcml2ZWQud3YgPSBpbmNyZW1lbnRfd3JpdGVfdmVyc2lvbigpO1xuXHR9XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBEZXJpdmVkLCBFZmZlY3QsIFNvdXJjZSwgVmFsdWUgfSBmcm9tICcjY2xpZW50JyAqL1xuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5pbXBvcnQge1xuXHRhY3RpdmVfcmVhY3Rpb24sXG5cdGFjdGl2ZV9lZmZlY3QsXG5cdHVudHJhY2tlZF93cml0ZXMsXG5cdGdldCxcblx0c2NoZWR1bGVfZWZmZWN0LFxuXHRzZXRfdW50cmFja2VkX3dyaXRlcyxcblx0c2V0X3NpZ25hbF9zdGF0dXMsXG5cdHVudHJhY2ssXG5cdGluY3JlbWVudF93cml0ZV92ZXJzaW9uLFxuXHR1cGRhdGVfZWZmZWN0LFxuXHRyZWFjdGlvbl9zb3VyY2VzLFxuXHRjaGVja19kaXJ0aW5lc3MsXG5cdHVudHJhY2tpbmcsXG5cdGlzX2Rlc3Ryb3lpbmdfZWZmZWN0LFxuXHRwdXNoX3JlYWN0aW9uX3ZhbHVlXG59IGZyb20gJy4uL3J1bnRpbWUuanMnO1xuaW1wb3J0IHsgZXF1YWxzLCBzYWZlX2VxdWFscyB9IGZyb20gJy4vZXF1YWxpdHkuanMnO1xuaW1wb3J0IHtcblx0Q0xFQU4sXG5cdERFUklWRUQsXG5cdERJUlRZLFxuXHRCUkFOQ0hfRUZGRUNULFxuXHRJTlNQRUNUX0VGRkVDVCxcblx0VU5PV05FRCxcblx0TUFZQkVfRElSVFksXG5cdEJMT0NLX0VGRkVDVCxcblx0Uk9PVF9FRkZFQ1Rcbn0gZnJvbSAnI2NsaWVudC9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgZSBmcm9tICcuLi9lcnJvcnMuanMnO1xuaW1wb3J0IHsgbGVnYWN5X21vZGVfZmxhZywgdHJhY2luZ19tb2RlX2ZsYWcgfSBmcm9tICcuLi8uLi9mbGFncy9pbmRleC5qcyc7XG5pbXBvcnQgeyBnZXRfc3RhY2sgfSBmcm9tICcuLi9kZXYvdHJhY2luZy5qcyc7XG5pbXBvcnQgeyBjb21wb25lbnRfY29udGV4dCwgaXNfcnVuZXMgfSBmcm9tICcuLi9jb250ZXh0LmpzJztcbmltcG9ydCB7IHByb3h5IH0gZnJvbSAnLi4vcHJveHkuanMnO1xuaW1wb3J0IHsgZXhlY3V0ZV9kZXJpdmVkIH0gZnJvbSAnLi9kZXJpdmVkcy5qcyc7XG5cbmV4cG9ydCBsZXQgaW5zcGVjdF9lZmZlY3RzID0gbmV3IFNldCgpO1xuZXhwb3J0IGNvbnN0IG9sZF92YWx1ZXMgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogQHBhcmFtIHtTZXQ8YW55Pn0gdlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2luc3BlY3RfZWZmZWN0cyh2KSB7XG5cdGluc3BlY3RfZWZmZWN0cyA9IHY7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7Vn0gdlxuICogQHBhcmFtIHtFcnJvciB8IG51bGx9IFtzdGFja11cbiAqIEByZXR1cm5zIHtTb3VyY2U8Vj59XG4gKi9cbi8vIFRPRE8gcmVuYW1lIHRoaXMgdG8gYHN0YXRlYCB0aHJvdWdob3V0IHRoZSBjb2RlYmFzZVxuZXhwb3J0IGZ1bmN0aW9uIHNvdXJjZSh2LCBzdGFjaykge1xuXHQvKiogQHR5cGUge1ZhbHVlfSAqL1xuXHR2YXIgc2lnbmFsID0ge1xuXHRcdGY6IDAsIC8vIFRPRE8gaWRlYWxseSB3ZSBjb3VsZCBza2lwIHRoaXMgYWx0b2dldGhlciwgYnV0IGl0IGNhdXNlcyB0eXBlIGVycm9yc1xuXHRcdHYsXG5cdFx0cmVhY3Rpb25zOiBudWxsLFxuXHRcdGVxdWFscyxcblx0XHRydjogMCxcblx0XHR3djogMFxuXHR9O1xuXG5cdGlmIChERVYgJiYgdHJhY2luZ19tb2RlX2ZsYWcpIHtcblx0XHRzaWduYWwuY3JlYXRlZCA9IHN0YWNrID8/IGdldF9zdGFjaygnQ3JlYXRlZEF0Jyk7XG5cdFx0c2lnbmFsLmRlYnVnID0gbnVsbDtcblx0fVxuXG5cdHJldHVybiBzaWduYWw7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7Vn0gdlxuICogQHBhcmFtIHtFcnJvciB8IG51bGx9IFtzdGFja11cbiAqL1xuLyojX19OT19TSURFX0VGRkVDVFNfXyovXG5leHBvcnQgZnVuY3Rpb24gc3RhdGUodiwgc3RhY2spIHtcblx0Y29uc3QgcyA9IHNvdXJjZSh2LCBzdGFjayk7XG5cblx0cHVzaF9yZWFjdGlvbl92YWx1ZShzKTtcblxuXHRyZXR1cm4gcztcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtWfSBpbml0aWFsX3ZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbW11dGFibGVdXG4gKiBAcmV0dXJucyB7U291cmNlPFY+fVxuICovXG4vKiNfX05PX1NJREVfRUZGRUNUU19fKi9cbmV4cG9ydCBmdW5jdGlvbiBtdXRhYmxlX3NvdXJjZShpbml0aWFsX3ZhbHVlLCBpbW11dGFibGUgPSBmYWxzZSkge1xuXHRjb25zdCBzID0gc291cmNlKGluaXRpYWxfdmFsdWUpO1xuXHRpZiAoIWltbXV0YWJsZSkge1xuXHRcdHMuZXF1YWxzID0gc2FmZV9lcXVhbHM7XG5cdH1cblxuXHQvLyBiaW5kIHRoZSBzaWduYWwgdG8gdGhlIGNvbXBvbmVudCBjb250ZXh0LCBpbiBjYXNlIHdlIG5lZWQgdG9cblx0Ly8gdHJhY2sgdXBkYXRlcyB0byB0cmlnZ2VyIGJlZm9yZVVwZGF0ZS9hZnRlclVwZGF0ZSBjYWxsYmFja3Ncblx0aWYgKGxlZ2FjeV9tb2RlX2ZsYWcgJiYgY29tcG9uZW50X2NvbnRleHQgIT09IG51bGwgJiYgY29tcG9uZW50X2NvbnRleHQubCAhPT0gbnVsbCkge1xuXHRcdChjb21wb25lbnRfY29udGV4dC5sLnMgPz89IFtdKS5wdXNoKHMpO1xuXHR9XG5cblx0cmV0dXJuIHM7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7VmFsdWU8Vj59IHNvdXJjZVxuICogQHBhcmFtIHtWfSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbXV0YXRlKHNvdXJjZSwgdmFsdWUpIHtcblx0c2V0KFxuXHRcdHNvdXJjZSxcblx0XHR1bnRyYWNrKCgpID0+IGdldChzb3VyY2UpKVxuXHQpO1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7U291cmNlPFY+fSBzb3VyY2VcbiAqIEBwYXJhbSB7Vn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Nob3VsZF9wcm94eV1cbiAqIEByZXR1cm5zIHtWfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KHNvdXJjZSwgdmFsdWUsIHNob3VsZF9wcm94eSA9IGZhbHNlKSB7XG5cdGlmIChcblx0XHRhY3RpdmVfcmVhY3Rpb24gIT09IG51bGwgJiZcblx0XHQhdW50cmFja2luZyAmJlxuXHRcdGlzX3J1bmVzKCkgJiZcblx0XHQoYWN0aXZlX3JlYWN0aW9uLmYgJiAoREVSSVZFRCB8IEJMT0NLX0VGRkVDVCkpICE9PSAwICYmXG5cdFx0IXJlYWN0aW9uX3NvdXJjZXM/LmluY2x1ZGVzKHNvdXJjZSlcblx0KSB7XG5cdFx0ZS5zdGF0ZV91bnNhZmVfbXV0YXRpb24oKTtcblx0fVxuXG5cdGxldCBuZXdfdmFsdWUgPSBzaG91bGRfcHJveHkgPyBwcm94eSh2YWx1ZSkgOiB2YWx1ZTtcblxuXHRyZXR1cm4gaW50ZXJuYWxfc2V0KHNvdXJjZSwgbmV3X3ZhbHVlKTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtTb3VyY2U8Vj59IHNvdXJjZVxuICogQHBhcmFtIHtWfSB2YWx1ZVxuICogQHJldHVybnMge1Z9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcm5hbF9zZXQoc291cmNlLCB2YWx1ZSkge1xuXHRpZiAoIXNvdXJjZS5lcXVhbHModmFsdWUpKSB7XG5cdFx0dmFyIG9sZF92YWx1ZSA9IHNvdXJjZS52O1xuXG5cdFx0aWYgKGlzX2Rlc3Ryb3lpbmdfZWZmZWN0KSB7XG5cdFx0XHRvbGRfdmFsdWVzLnNldChzb3VyY2UsIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b2xkX3ZhbHVlcy5zZXQoc291cmNlLCBvbGRfdmFsdWUpO1xuXHRcdH1cblxuXHRcdHNvdXJjZS52ID0gdmFsdWU7XG5cblx0XHRpZiAoREVWICYmIHRyYWNpbmdfbW9kZV9mbGFnKSB7XG5cdFx0XHRzb3VyY2UudXBkYXRlZCA9IGdldF9zdGFjaygnVXBkYXRlZEF0Jyk7XG5cdFx0XHRpZiAoYWN0aXZlX2VmZmVjdCAhPSBudWxsKSB7XG5cdFx0XHRcdHNvdXJjZS50cmFjZV9uZWVkX2luY3JlYXNlID0gdHJ1ZTtcblx0XHRcdFx0c291cmNlLnRyYWNlX3YgPz89IG9sZF92YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoKHNvdXJjZS5mICYgREVSSVZFRCkgIT09IDApIHtcblx0XHRcdC8vIGlmIHdlIGFyZSBhc3NpZ25pbmcgdG8gYSBkaXJ0eSBkZXJpdmVkIHdlIHNldCBpdCB0byBjbGVhbi9tYXliZSBkaXJ0eSBidXQgd2UgYWxzbyBlYWdlcmx5IGV4ZWN1dGUgaXQgdG8gdHJhY2sgdGhlIGRlcGVuZGVuY2llc1xuXHRcdFx0aWYgKChzb3VyY2UuZiAmIERJUlRZKSAhPT0gMCkge1xuXHRcdFx0XHRleGVjdXRlX2Rlcml2ZWQoLyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAoc291cmNlKSk7XG5cdFx0XHR9XG5cdFx0XHRzZXRfc2lnbmFsX3N0YXR1cyhzb3VyY2UsIChzb3VyY2UuZiAmIFVOT1dORUQpID09PSAwID8gQ0xFQU4gOiBNQVlCRV9ESVJUWSk7XG5cdFx0fVxuXG5cdFx0c291cmNlLnd2ID0gaW5jcmVtZW50X3dyaXRlX3ZlcnNpb24oKTtcblxuXHRcdG1hcmtfcmVhY3Rpb25zKHNvdXJjZSwgRElSVFkpO1xuXG5cdFx0Ly8gSXQncyBwb3NzaWJsZSB0aGF0IHRoZSBjdXJyZW50IHJlYWN0aW9uIG1pZ2h0IG5vdCBoYXZlIHVwLXRvLWRhdGUgZGVwZW5kZW5jaWVzXG5cdFx0Ly8gd2hpbHN0IGl0J3MgYWN0aXZlbHkgcnVubmluZy4gU28gaW4gdGhlIGNhc2Ugb2YgZW5zdXJpbmcgaXQgcmVnaXN0ZXJzIHRoZSByZWFjdGlvblxuXHRcdC8vIHByb3Blcmx5IGZvciBpdHNlbGYsIHdlIG5lZWQgdG8gZW5zdXJlIHRoZSBjdXJyZW50IGVmZmVjdCBhY3R1YWxseSBnZXRzXG5cdFx0Ly8gc2NoZWR1bGVkLiBpLmU6IGAkZWZmZWN0KCgpID0+IHgrKylgXG5cdFx0aWYgKFxuXHRcdFx0aXNfcnVuZXMoKSAmJlxuXHRcdFx0YWN0aXZlX2VmZmVjdCAhPT0gbnVsbCAmJlxuXHRcdFx0KGFjdGl2ZV9lZmZlY3QuZiAmIENMRUFOKSAhPT0gMCAmJlxuXHRcdFx0KGFjdGl2ZV9lZmZlY3QuZiAmIChCUkFOQ0hfRUZGRUNUIHwgUk9PVF9FRkZFQ1QpKSA9PT0gMFxuXHRcdCkge1xuXHRcdFx0aWYgKHVudHJhY2tlZF93cml0ZXMgPT09IG51bGwpIHtcblx0XHRcdFx0c2V0X3VudHJhY2tlZF93cml0ZXMoW3NvdXJjZV0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dW50cmFja2VkX3dyaXRlcy5wdXNoKHNvdXJjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKERFViAmJiBpbnNwZWN0X2VmZmVjdHMuc2l6ZSA+IDApIHtcblx0XHRcdGNvbnN0IGluc3BlY3RzID0gQXJyYXkuZnJvbShpbnNwZWN0X2VmZmVjdHMpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IGVmZmVjdCBvZiBpbnNwZWN0cykge1xuXHRcdFx0XHQvLyBNYXJrIGNsZWFuIGluc3BlY3QtZWZmZWN0cyBhcyBtYXliZSBkaXJ0eSBhbmQgdGhlbiBjaGVjayB0aGVpciBkaXJ0aW5lc3Ncblx0XHRcdFx0Ly8gaW5zdGVhZCBvZiBqdXN0IHVwZGF0aW5nIHRoZSBlZmZlY3RzIC0gdGhpcyB3YXkgd2UgYXZvaWQgb3ZlcmZpcmluZy5cblx0XHRcdFx0aWYgKChlZmZlY3QuZiAmIENMRUFOKSAhPT0gMCkge1xuXHRcdFx0XHRcdHNldF9zaWduYWxfc3RhdHVzKGVmZmVjdCwgTUFZQkVfRElSVFkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjaGVja19kaXJ0aW5lc3MoZWZmZWN0KSkge1xuXHRcdFx0XHRcdHVwZGF0ZV9lZmZlY3QoZWZmZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpbnNwZWN0X2VmZmVjdHMuY2xlYXIoKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHtudW1iZXIgfCBiaWdpbnR9IFRcbiAqIEBwYXJhbSB7U291cmNlPFQ+fSBzb3VyY2VcbiAqIEBwYXJhbSB7MSB8IC0xfSBbZF1cbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlKHNvdXJjZSwgZCA9IDEpIHtcblx0dmFyIHZhbHVlID0gZ2V0KHNvdXJjZSk7XG5cdHZhciByZXN1bHQgPSBkID09PSAxID8gdmFsdWUrKyA6IHZhbHVlLS07XG5cblx0c2V0KHNvdXJjZSwgdmFsdWUpO1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge251bWJlciB8IGJpZ2ludH0gVFxuICogQHBhcmFtIHtTb3VyY2U8VD59IHNvdXJjZVxuICogQHBhcmFtIHsxIHwgLTF9IFtkXVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfcHJlKHNvdXJjZSwgZCA9IDEpIHtcblx0dmFyIHZhbHVlID0gZ2V0KHNvdXJjZSk7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRyZXR1cm4gc2V0KHNvdXJjZSwgZCA9PT0gMSA/ICsrdmFsdWUgOiAtLXZhbHVlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZhbHVlfSBzaWduYWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0dXMgc2hvdWxkIGJlIERJUlRZIG9yIE1BWUJFX0RJUlRZXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gbWFya19yZWFjdGlvbnMoc2lnbmFsLCBzdGF0dXMpIHtcblx0dmFyIHJlYWN0aW9ucyA9IHNpZ25hbC5yZWFjdGlvbnM7XG5cdGlmIChyZWFjdGlvbnMgPT09IG51bGwpIHJldHVybjtcblxuXHR2YXIgcnVuZXMgPSBpc19ydW5lcygpO1xuXHR2YXIgbGVuZ3RoID0gcmVhY3Rpb25zLmxlbmd0aDtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHJlYWN0aW9uID0gcmVhY3Rpb25zW2ldO1xuXHRcdHZhciBmbGFncyA9IHJlYWN0aW9uLmY7XG5cblx0XHQvLyBTa2lwIGFueSBlZmZlY3RzIHRoYXQgYXJlIGFscmVhZHkgZGlydHlcblx0XHRpZiAoKGZsYWdzICYgRElSVFkpICE9PSAwKSBjb250aW51ZTtcblxuXHRcdC8vIEluIGxlZ2FjeSBtb2RlLCBza2lwIHRoZSBjdXJyZW50IGVmZmVjdCB0byBwcmV2ZW50IGluZmluaXRlIGxvb3BzXG5cdFx0aWYgKCFydW5lcyAmJiByZWFjdGlvbiA9PT0gYWN0aXZlX2VmZmVjdCkgY29udGludWU7XG5cblx0XHQvLyBJbnNwZWN0IGVmZmVjdHMgbmVlZCB0byBydW4gaW1tZWRpYXRlbHksIHNvIHRoYXQgdGhlIHN0YWNrIHRyYWNlIG1ha2VzIHNlbnNlXG5cdFx0aWYgKERFViAmJiAoZmxhZ3MgJiBJTlNQRUNUX0VGRkVDVCkgIT09IDApIHtcblx0XHRcdGluc3BlY3RfZWZmZWN0cy5hZGQocmVhY3Rpb24pO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0c2V0X3NpZ25hbF9zdGF0dXMocmVhY3Rpb24sIHN0YXR1cyk7XG5cblx0XHQvLyBJZiB0aGUgc2lnbmFsIGEpIHdhcyBwcmV2aW91c2x5IGNsZWFuIG9yIGIpIGlzIGFuIHVub3duZWQgZGVyaXZlZCwgdGhlbiBtYXJrIGl0XG5cdFx0aWYgKChmbGFncyAmIChDTEVBTiB8IFVOT1dORUQpKSAhPT0gMCkge1xuXHRcdFx0aWYgKChmbGFncyAmIERFUklWRUQpICE9PSAwKSB7XG5cdFx0XHRcdG1hcmtfcmVhY3Rpb25zKC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKHJlYWN0aW9uKSwgTUFZQkVfRElSVFkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2NoZWR1bGVfZWZmZWN0KC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAocmVhY3Rpb24pKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsICIvKiBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IHNjcmlwdHMvcHJvY2Vzcy1tZXNzYWdlcy9pbmRleC5qcy4gRG8gbm90IGVkaXQhICovXG5cbmltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuXG52YXIgYm9sZCA9ICdmb250LXdlaWdodDogYm9sZCc7XG52YXIgbm9ybWFsID0gJ2ZvbnQtd2VpZ2h0OiBub3JtYWwnO1xuXG4vKipcbiAqIEFzc2lnbm1lbnQgdG8gYCVwcm9wZXJ0eSVgIHByb3BlcnR5ICglbG9jYXRpb24lKSB3aWxsIGV2YWx1YXRlIHRvIHRoZSByaWdodC1oYW5kIHNpZGUsIG5vdCB0aGUgdmFsdWUgb2YgYCVwcm9wZXJ0eSVgIGZvbGxvd2luZyB0aGUgYXNzaWdubWVudC4gVGhpcyBtYXkgcmVzdWx0IGluIHVuZXhwZWN0ZWQgYmVoYXZpb3VyLlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbm1lbnRfdmFsdWVfc3RhbGUocHJvcGVydHksIGxvY2F0aW9uKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gYXNzaWdubWVudF92YWx1ZV9zdGFsZVxcbiVjQXNzaWdubWVudCB0byBcXGAke3Byb3BlcnR5fVxcYCBwcm9wZXJ0eSAoJHtsb2NhdGlvbn0pIHdpbGwgZXZhbHVhdGUgdG8gdGhlIHJpZ2h0LWhhbmQgc2lkZSwgbm90IHRoZSB2YWx1ZSBvZiBcXGAke3Byb3BlcnR5fVxcYCBmb2xsb3dpbmcgdGhlIGFzc2lnbm1lbnQuIFRoaXMgbWF5IHJlc3VsdCBpbiB1bmV4cGVjdGVkIGJlaGF2aW91ci5cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9hc3NpZ25tZW50X3ZhbHVlX3N0YWxlYCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2Fzc2lnbm1lbnRfdmFsdWVfc3RhbGVgKTtcblx0fVxufVxuXG4vKipcbiAqIGAlYmluZGluZyVgICglbG9jYXRpb24lKSBpcyBiaW5kaW5nIHRvIGEgbm9uLXJlYWN0aXZlIHByb3BlcnR5XG4gKiBAcGFyYW0ge3N0cmluZ30gYmluZGluZ1xuICogQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsfSBbbG9jYXRpb25dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kaW5nX3Byb3BlcnR5X25vbl9yZWFjdGl2ZShiaW5kaW5nLCBsb2NhdGlvbikge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc29sZS53YXJuKGAlY1tzdmVsdGVdIGJpbmRpbmdfcHJvcGVydHlfbm9uX3JlYWN0aXZlXFxuJWMke2xvY2F0aW9uID8gYFxcYCR7YmluZGluZ31cXGAgKCR7bG9jYXRpb259KSBpcyBiaW5kaW5nIHRvIGEgbm9uLXJlYWN0aXZlIHByb3BlcnR5YCA6IGBcXGAke2JpbmRpbmd9XFxgIGlzIGJpbmRpbmcgdG8gYSBub24tcmVhY3RpdmUgcHJvcGVydHlgfVxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2JpbmRpbmdfcHJvcGVydHlfbm9uX3JlYWN0aXZlYCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2JpbmRpbmdfcHJvcGVydHlfbm9uX3JlYWN0aXZlYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBZb3VyIGBjb25zb2xlLiVtZXRob2QlYCBjb250YWluZWQgYCRzdGF0ZWAgcHJveGllcy4gQ29uc2lkZXIgdXNpbmcgYCRpbnNwZWN0KC4uLilgIG9yIGAkc3RhdGUuc25hcHNob3QoLi4uKWAgaW5zdGVhZFxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc29sZV9sb2dfc3RhdGUobWV0aG9kKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gY29uc29sZV9sb2dfc3RhdGVcXG4lY1lvdXIgXFxgY29uc29sZS4ke21ldGhvZH1cXGAgY29udGFpbmVkIFxcYCRzdGF0ZVxcYCBwcm94aWVzLiBDb25zaWRlciB1c2luZyBcXGAkaW5zcGVjdCguLi4pXFxgIG9yIFxcYCRzdGF0ZS5zbmFwc2hvdCguLi4pXFxgIGluc3RlYWRcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9jb25zb2xlX2xvZ19zdGF0ZWAsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9jb25zb2xlX2xvZ19zdGF0ZWApO1xuXHR9XG59XG5cbi8qKlxuICogJWhhbmRsZXIlIHNob3VsZCBiZSBhIGZ1bmN0aW9uLiBEaWQgeW91IG1lYW4gdG8gJXN1Z2dlc3Rpb24lP1xuICogQHBhcmFtIHtzdHJpbmd9IGhhbmRsZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdWdnZXN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBldmVudF9oYW5kbGVyX2ludmFsaWQoaGFuZGxlciwgc3VnZ2VzdGlvbikge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc29sZS53YXJuKGAlY1tzdmVsdGVdIGV2ZW50X2hhbmRsZXJfaW52YWxpZFxcbiVjJHtoYW5kbGVyfSBzaG91bGQgYmUgYSBmdW5jdGlvbi4gRGlkIHlvdSBtZWFuIHRvICR7c3VnZ2VzdGlvbn0/XFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZXZlbnRfaGFuZGxlcl9pbnZhbGlkYCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2V2ZW50X2hhbmRsZXJfaW52YWxpZGApO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIGAlYXR0cmlidXRlJWAgYXR0cmlidXRlIG9uIGAlaHRtbCVgIGNoYW5nZWQgaXRzIHZhbHVlIGJldHdlZW4gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycy4gVGhlIGNsaWVudCB2YWx1ZSwgYCV2YWx1ZSVgLCB3aWxsIGJlIGlnbm9yZWQgaW4gZmF2b3VyIG9mIHRoZSBzZXJ2ZXIgdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGlvbl9hdHRyaWJ1dGVfY2hhbmdlZChhdHRyaWJ1dGUsIGh0bWwsIHZhbHVlKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gaHlkcmF0aW9uX2F0dHJpYnV0ZV9jaGFuZ2VkXFxuJWNUaGUgXFxgJHthdHRyaWJ1dGV9XFxgIGF0dHJpYnV0ZSBvbiBcXGAke2h0bWx9XFxgIGNoYW5nZWQgaXRzIHZhbHVlIGJldHdlZW4gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycy4gVGhlIGNsaWVudCB2YWx1ZSwgXFxgJHt2YWx1ZX1cXGAsIHdpbGwgYmUgaWdub3JlZCBpbiBmYXZvdXIgb2YgdGhlIHNlcnZlciB2YWx1ZVxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2h5ZHJhdGlvbl9hdHRyaWJ1dGVfY2hhbmdlZGAsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9oeWRyYXRpb25fYXR0cmlidXRlX2NoYW5nZWRgKTtcblx0fVxufVxuXG4vKipcbiAqIFRoZSB2YWx1ZSBvZiBhbiBge0BodG1sIC4uLn1gIGJsb2NrICVsb2NhdGlvbiUgY2hhbmdlZCBiZXR3ZWVuIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMuIFRoZSBjbGllbnQgdmFsdWUgd2lsbCBiZSBpZ25vcmVkIGluIGZhdm91ciBvZiB0aGUgc2VydmVyIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZCB8IG51bGx9IFtsb2NhdGlvbl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGlvbl9odG1sX2NoYW5nZWQobG9jYXRpb24pIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnNvbGUud2FybihgJWNbc3ZlbHRlXSBoeWRyYXRpb25faHRtbF9jaGFuZ2VkXFxuJWMke2xvY2F0aW9uID8gYFRoZSB2YWx1ZSBvZiBhbiBcXGB7QGh0bWwgLi4ufVxcYCBibG9jayAke2xvY2F0aW9ufSBjaGFuZ2VkIGJldHdlZW4gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycy4gVGhlIGNsaWVudCB2YWx1ZSB3aWxsIGJlIGlnbm9yZWQgaW4gZmF2b3VyIG9mIHRoZSBzZXJ2ZXIgdmFsdWVgIDogJ1RoZSB2YWx1ZSBvZiBhbiBge0BodG1sIC4uLn1gIGJsb2NrIGNoYW5nZWQgYmV0d2VlbiBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzLiBUaGUgY2xpZW50IHZhbHVlIHdpbGwgYmUgaWdub3JlZCBpbiBmYXZvdXIgb2YgdGhlIHNlcnZlciB2YWx1ZSd9XFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaHlkcmF0aW9uX2h0bWxfY2hhbmdlZGAsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9oeWRyYXRpb25faHRtbF9jaGFuZ2VkYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBIeWRyYXRpb24gZmFpbGVkIGJlY2F1c2UgdGhlIGluaXRpYWwgVUkgZG9lcyBub3QgbWF0Y2ggd2hhdCB3YXMgcmVuZGVyZWQgb24gdGhlIHNlcnZlci4gVGhlIGVycm9yIG9jY3VycmVkIG5lYXIgJWxvY2F0aW9uJVxuICogQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsfSBbbG9jYXRpb25dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRpb25fbWlzbWF0Y2gobG9jYXRpb24pIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnNvbGUud2FybihgJWNbc3ZlbHRlXSBoeWRyYXRpb25fbWlzbWF0Y2hcXG4lYyR7bG9jYXRpb24gPyBgSHlkcmF0aW9uIGZhaWxlZCBiZWNhdXNlIHRoZSBpbml0aWFsIFVJIGRvZXMgbm90IG1hdGNoIHdoYXQgd2FzIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIuIFRoZSBlcnJvciBvY2N1cnJlZCBuZWFyICR7bG9jYXRpb259YCA6ICdIeWRyYXRpb24gZmFpbGVkIGJlY2F1c2UgdGhlIGluaXRpYWwgVUkgZG9lcyBub3QgbWF0Y2ggd2hhdCB3YXMgcmVuZGVyZWQgb24gdGhlIHNlcnZlcid9XFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaHlkcmF0aW9uX21pc21hdGNoYCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2h5ZHJhdGlvbl9taXNtYXRjaGApO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIGByZW5kZXJgIGZ1bmN0aW9uIHBhc3NlZCB0byBgY3JlYXRlUmF3U25pcHBldGAgc2hvdWxkIHJldHVybiBIVE1MIGZvciBhIHNpbmdsZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkX3Jhd19zbmlwcGV0X3JlbmRlcigpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnNvbGUud2FybihgJWNbc3ZlbHRlXSBpbnZhbGlkX3Jhd19zbmlwcGV0X3JlbmRlclxcbiVjVGhlIFxcYHJlbmRlclxcYCBmdW5jdGlvbiBwYXNzZWQgdG8gXFxgY3JlYXRlUmF3U25pcHBldFxcYCBzaG91bGQgcmV0dXJuIEhUTUwgZm9yIGEgc2luZ2xlIGVsZW1lbnRcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9pbnZhbGlkX3Jhd19zbmlwcGV0X3JlbmRlcmAsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9pbnZhbGlkX3Jhd19zbmlwcGV0X3JlbmRlcmApO1xuXHR9XG59XG5cbi8qKlxuICogRGV0ZWN0ZWQgYSBtaWdyYXRlZCBgJDpgIHJlYWN0aXZlIGJsb2NrIGluIGAlZmlsZW5hbWUlYCB0aGF0IGJvdGggYWNjZXNzZXMgYW5kIHVwZGF0ZXMgdGhlIHNhbWUgcmVhY3RpdmUgdmFsdWUuIFRoaXMgbWF5IGNhdXNlIHJlY3Vyc2l2ZSB1cGRhdGVzIHdoZW4gY29udmVydGVkIHRvIGFuIGAkZWZmZWN0YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVnYWN5X3JlY3Vyc2l2ZV9yZWFjdGl2ZV9ibG9jayhmaWxlbmFtZSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc29sZS53YXJuKGAlY1tzdmVsdGVdIGxlZ2FjeV9yZWN1cnNpdmVfcmVhY3RpdmVfYmxvY2tcXG4lY0RldGVjdGVkIGEgbWlncmF0ZWQgXFxgJDpcXGAgcmVhY3RpdmUgYmxvY2sgaW4gXFxgJHtmaWxlbmFtZX1cXGAgdGhhdCBib3RoIGFjY2Vzc2VzIGFuZCB1cGRhdGVzIHRoZSBzYW1lIHJlYWN0aXZlIHZhbHVlLiBUaGlzIG1heSBjYXVzZSByZWN1cnNpdmUgdXBkYXRlcyB3aGVuIGNvbnZlcnRlZCB0byBhbiBcXGAkZWZmZWN0XFxgLlxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2xlZ2FjeV9yZWN1cnNpdmVfcmVhY3RpdmVfYmxvY2tgLCBib2xkLCBub3JtYWwpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvbGVnYWN5X3JlY3Vyc2l2ZV9yZWFjdGl2ZV9ibG9ja2ApO1xuXHR9XG59XG5cbi8qKlxuICogVHJpZWQgdG8gdW5tb3VudCBhIGNvbXBvbmVudCB0aGF0IHdhcyBub3QgbW91bnRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlmZWN5Y2xlX2RvdWJsZV91bm1vdW50KCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc29sZS53YXJuKGAlY1tzdmVsdGVdIGxpZmVjeWNsZV9kb3VibGVfdW5tb3VudFxcbiVjVHJpZWQgdG8gdW5tb3VudCBhIGNvbXBvbmVudCB0aGF0IHdhcyBub3QgbW91bnRlZFxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2xpZmVjeWNsZV9kb3VibGVfdW5tb3VudGAsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9saWZlY3ljbGVfZG91YmxlX3VubW91bnRgKTtcblx0fVxufVxuXG4vKipcbiAqICVwYXJlbnQlIHBhc3NlZCBwcm9wZXJ0eSBgJXByb3AlYCB0byAlY2hpbGQlIHdpdGggYGJpbmQ6YCwgYnV0IGl0cyBwYXJlbnQgY29tcG9uZW50ICVvd25lciUgZGlkIG5vdCBkZWNsYXJlIGAlcHJvcCVgIGFzIGEgYmluZGluZy4gQ29uc2lkZXIgY3JlYXRpbmcgYSBiaW5kaW5nIGJldHdlZW4gJW93bmVyJSBhbmQgJXBhcmVudCUgKGUuZy4gYGJpbmQ6JXByb3AlPXsuLi59YCBpbnN0ZWFkIG9mIGAlcHJvcCU9ey4uLn1gKVxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGlsZFxuICogQHBhcmFtIHtzdHJpbmd9IG93bmVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvd25lcnNoaXBfaW52YWxpZF9iaW5kaW5nKHBhcmVudCwgcHJvcCwgY2hpbGQsIG93bmVyKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gb3duZXJzaGlwX2ludmFsaWRfYmluZGluZ1xcbiVjJHtwYXJlbnR9IHBhc3NlZCBwcm9wZXJ0eSBcXGAke3Byb3B9XFxgIHRvICR7Y2hpbGR9IHdpdGggXFxgYmluZDpcXGAsIGJ1dCBpdHMgcGFyZW50IGNvbXBvbmVudCAke293bmVyfSBkaWQgbm90IGRlY2xhcmUgXFxgJHtwcm9wfVxcYCBhcyBhIGJpbmRpbmcuIENvbnNpZGVyIGNyZWF0aW5nIGEgYmluZGluZyBiZXR3ZWVuICR7b3duZXJ9IGFuZCAke3BhcmVudH0gKGUuZy4gXFxgYmluZDoke3Byb3B9PXsuLi59XFxgIGluc3RlYWQgb2YgXFxgJHtwcm9wfT17Li4ufVxcYClcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9vd25lcnNoaXBfaW52YWxpZF9iaW5kaW5nYCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL293bmVyc2hpcF9pbnZhbGlkX2JpbmRpbmdgKTtcblx0fVxufVxuXG4vKipcbiAqIE11dGF0aW5nIHVuYm91bmQgcHJvcHMgKGAlbmFtZSVgLCBhdCAlbG9jYXRpb24lKSBpcyBzdHJvbmdseSBkaXNjb3VyYWdlZC4gQ29uc2lkZXIgdXNpbmcgYGJpbmQ6JXByb3AlPXsuLi59YCBpbiAlcGFyZW50JSAob3IgdXNpbmcgYSBjYWxsYmFjaykgaW5zdGVhZFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG93bmVyc2hpcF9pbnZhbGlkX211dGF0aW9uKG5hbWUsIGxvY2F0aW9uLCBwcm9wLCBwYXJlbnQpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnNvbGUud2FybihgJWNbc3ZlbHRlXSBvd25lcnNoaXBfaW52YWxpZF9tdXRhdGlvblxcbiVjTXV0YXRpbmcgdW5ib3VuZCBwcm9wcyAoXFxgJHtuYW1lfVxcYCwgYXQgJHtsb2NhdGlvbn0pIGlzIHN0cm9uZ2x5IGRpc2NvdXJhZ2VkLiBDb25zaWRlciB1c2luZyBcXGBiaW5kOiR7cHJvcH09ey4uLn1cXGAgaW4gJHtwYXJlbnR9IChvciB1c2luZyBhIGNhbGxiYWNrKSBpbnN0ZWFkXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvb3duZXJzaGlwX2ludmFsaWRfbXV0YXRpb25gLCBib2xkLCBub3JtYWwpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihgaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvb3duZXJzaGlwX2ludmFsaWRfbXV0YXRpb25gKTtcblx0fVxufVxuXG4vKipcbiAqIFJlYWN0aXZlIGAkc3RhdGUoLi4uKWAgcHJveGllcyBhbmQgdGhlIHZhbHVlcyB0aGV5IHByb3h5IGhhdmUgZGlmZmVyZW50IGlkZW50aXRpZXMuIEJlY2F1c2Ugb2YgdGhpcywgY29tcGFyaXNvbnMgd2l0aCBgJW9wZXJhdG9yJWAgd2lsbCBwcm9kdWNlIHVuZXhwZWN0ZWQgcmVzdWx0c1xuICogQHBhcmFtIHtzdHJpbmd9IG9wZXJhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZV9wcm94eV9lcXVhbGl0eV9taXNtYXRjaChvcGVyYXRvcikge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc29sZS53YXJuKGAlY1tzdmVsdGVdIHN0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoXFxuJWNSZWFjdGl2ZSBcXGAkc3RhdGUoLi4uKVxcYCBwcm94aWVzIGFuZCB0aGUgdmFsdWVzIHRoZXkgcHJveHkgaGF2ZSBkaWZmZXJlbnQgaWRlbnRpdGllcy4gQmVjYXVzZSBvZiB0aGlzLCBjb21wYXJpc29ucyB3aXRoIFxcYCR7b3BlcmF0b3J9XFxgIHdpbGwgcHJvZHVjZSB1bmV4cGVjdGVkIHJlc3VsdHNcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9zdGF0ZV9wcm94eV9lcXVhbGl0eV9taXNtYXRjaGAsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9zdGF0ZV9wcm94eV9lcXVhbGl0eV9taXNtYXRjaGApO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIGBzbGlkZWAgdHJhbnNpdGlvbiBkb2VzIG5vdCB3b3JrIGNvcnJlY3RseSBmb3IgZWxlbWVudHMgd2l0aCBgZGlzcGxheTogJXZhbHVlJWBcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNpdGlvbl9zbGlkZV9kaXNwbGF5KHZhbHVlKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gdHJhbnNpdGlvbl9zbGlkZV9kaXNwbGF5XFxuJWNUaGUgXFxgc2xpZGVcXGAgdHJhbnNpdGlvbiBkb2VzIG5vdCB3b3JrIGNvcnJlY3RseSBmb3IgZWxlbWVudHMgd2l0aCBcXGBkaXNwbGF5OiAke3ZhbHVlfVxcYFxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL3RyYW5zaXRpb25fc2xpZGVfZGlzcGxheWAsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS90cmFuc2l0aW9uX3NsaWRlX2Rpc3BsYXlgKTtcblx0fVxufSIsICIvKiogQGltcG9ydCB7IFRlbXBsYXRlTm9kZSB9IGZyb20gJyNjbGllbnQnICovXG5cbmltcG9ydCB7XG5cdEhZRFJBVElPTl9FTkQsXG5cdEhZRFJBVElPTl9FUlJPUixcblx0SFlEUkFUSU9OX1NUQVJULFxuXHRIWURSQVRJT05fU1RBUlRfRUxTRVxufSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMuanMnO1xuaW1wb3J0ICogYXMgdyBmcm9tICcuLi93YXJuaW5ncy5qcyc7XG5pbXBvcnQgeyBnZXRfbmV4dF9zaWJsaW5nIH0gZnJvbSAnLi9vcGVyYXRpb25zLmpzJztcblxuLyoqXG4gKiBVc2UgdGhpcyB2YXJpYWJsZSB0byBndWFyZCBldmVyeXRoaW5nIHJlbGF0ZWQgdG8gaHlkcmF0aW9uIGNvZGUgc28gaXQgY2FuIGJlIHRyZWVzaGFrZW4gb3V0XG4gKiBpZiB0aGUgdXNlciBkb2Vzbid0IHVzZSB0aGUgYGh5ZHJhdGVgIG1ldGhvZCBhbmQgdGhlc2UgY29kZSBwYXRocyBhcmUgdGhlcmVmb3JlIG5vdCBuZWVkZWQuXG4gKi9cbmV4cG9ydCBsZXQgaHlkcmF0aW5nID0gZmFsc2U7XG5cbi8qKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2h5ZHJhdGluZyh2YWx1ZSkge1xuXHRoeWRyYXRpbmcgPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBUaGUgbm9kZSB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBoeWRyYXRlZC4gVGhpcyBzdGFydHMgb3V0IGFzIHRoZSBmaXJzdCBub2RlIGluc2lkZSB0aGUgb3BlbmluZ1xuICogPCEtLVstLT4gY29tbWVudCwgYW5kIHVwZGF0ZXMgZWFjaCB0aW1lIGEgY29tcG9uZW50IGNhbGxzIGAkLmNoaWxkKC4uLilgIG9yIGAkLnNpYmxpbmcoLi4uKWAuXG4gKiBXaGVuIGVudGVyaW5nIGEgYmxvY2sgKGUuZy4gYHsjaWYgLi4ufWApLCBgaHlkcmF0ZV9ub2RlYCBpcyB0aGUgYmxvY2sgb3BlbmluZyBjb21tZW50OyBieSB0aGVcbiAqIHRpbWUgd2UgbGVhdmUgdGhlIGJsb2NrIGl0IGlzIHRoZSBjbG9zaW5nIGNvbW1lbnQsIHdoaWNoIHNlcnZlcyBhcyB0aGUgYmxvY2sncyBhbmNob3IuXG4gKiBAdHlwZSB7VGVtcGxhdGVOb2RlfVxuICovXG5leHBvcnQgbGV0IGh5ZHJhdGVfbm9kZTtcblxuLyoqIEBwYXJhbSB7VGVtcGxhdGVOb2RlfSBub2RlICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2h5ZHJhdGVfbm9kZShub2RlKSB7XG5cdGlmIChub2RlID09PSBudWxsKSB7XG5cdFx0dy5oeWRyYXRpb25fbWlzbWF0Y2goKTtcblx0XHR0aHJvdyBIWURSQVRJT05fRVJST1I7XG5cdH1cblxuXHRyZXR1cm4gKGh5ZHJhdGVfbm9kZSA9IG5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZV9uZXh0KCkge1xuXHRyZXR1cm4gc2V0X2h5ZHJhdGVfbm9kZSgvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9uZXh0X3NpYmxpbmcoaHlkcmF0ZV9ub2RlKSkpO1xufVxuXG4vKiogQHBhcmFtIHtUZW1wbGF0ZU5vZGV9IG5vZGUgKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldChub2RlKSB7XG5cdGlmICghaHlkcmF0aW5nKSByZXR1cm47XG5cblx0Ly8gSWYgdGhlIG5vZGUgaGFzIHJlbWFpbmluZyBzaWJsaW5ncywgc29tZXRoaW5nIGhhcyBnb25lIHdyb25nXG5cdGlmIChnZXRfbmV4dF9zaWJsaW5nKGh5ZHJhdGVfbm9kZSkgIT09IG51bGwpIHtcblx0XHR3Lmh5ZHJhdGlvbl9taXNtYXRjaCgpO1xuXHRcdHRocm93IEhZRFJBVElPTl9FUlJPUjtcblx0fVxuXG5cdGh5ZHJhdGVfbm9kZSA9IG5vZGU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MVGVtcGxhdGVFbGVtZW50fSB0ZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZV90ZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuXHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUZW1wbGF0ZU5vZGUgZG9lc24ndCBpbmNsdWRlIERvY3VtZW50RnJhZ21lbnQsIGJ1dCBpdCdzIGFjdHVhbGx5IGZpbmVcblx0XHRoeWRyYXRlX25vZGUgPSB0ZW1wbGF0ZS5jb250ZW50O1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0KGNvdW50ID0gMSkge1xuXHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0dmFyIGkgPSBjb3VudDtcblx0XHR2YXIgbm9kZSA9IGh5ZHJhdGVfbm9kZTtcblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdG5vZGUgPSAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9uZXh0X3NpYmxpbmcobm9kZSkpO1xuXHRcdH1cblxuXHRcdGh5ZHJhdGVfbm9kZSA9IG5vZGU7XG5cdH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBub2RlcyBzdGFydGluZyBhdCBgaHlkcmF0ZV9ub2RlYCB1cCB1bnRpbCB0aGUgbmV4dCBoeWRyYXRpb24gZW5kIGNvbW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZV9ub2RlcygpIHtcblx0dmFyIGRlcHRoID0gMDtcblx0dmFyIG5vZGUgPSBoeWRyYXRlX25vZGU7XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCkge1xuXHRcdFx0dmFyIGRhdGEgPSAvKiogQHR5cGUge0NvbW1lbnR9ICovIChub2RlKS5kYXRhO1xuXG5cdFx0XHRpZiAoZGF0YSA9PT0gSFlEUkFUSU9OX0VORCkge1xuXHRcdFx0XHRpZiAoZGVwdGggPT09IDApIHJldHVybiBub2RlO1xuXHRcdFx0XHRkZXB0aCAtPSAxO1xuXHRcdFx0fSBlbHNlIGlmIChkYXRhID09PSBIWURSQVRJT05fU1RBUlQgfHwgZGF0YSA9PT0gSFlEUkFUSU9OX1NUQVJUX0VMU0UpIHtcblx0XHRcdFx0ZGVwdGggKz0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgbmV4dCA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZ2V0X25leHRfc2libGluZyhub2RlKSk7XG5cdFx0bm9kZS5yZW1vdmUoKTtcblx0XHRub2RlID0gbmV4dDtcblx0fVxufVxuIiwgImltcG9ydCAqIGFzIHcgZnJvbSAnLi4vd2FybmluZ3MuanMnO1xuaW1wb3J0IHsgZ2V0X3Byb3hpZWRfdmFsdWUgfSBmcm9tICcuLi9wcm94eS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0X2FycmF5X3Byb3RvdHlwZV93YXJuaW5ncygpIHtcblx0Y29uc3QgYXJyYXlfcHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXHQvLyBUaGUgUkVQTCBlbmRzIHVwIGhlcmUgb3ZlciBhbmQgb3ZlciwgYW5kIHRoaXMgcHJldmVudHMgaXQgZnJvbSBhZGRpbmcgbW9yZSBhbmQgbW9yZSBwYXRjaGVzXG5cdC8vIG9mIHRoZSBzYW1lIGtpbmQgdG8gdGhlIHByb3RvdHlwZSwgd2hpY2ggd291bGQgc2xvdyBkb3duIGV2ZXJ5dGhpbmcgb3ZlciB0aW1lLlxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdGNvbnN0IGNsZWFudXAgPSBBcnJheS5fX3N2ZWx0ZV9jbGVhbnVwO1xuXHRpZiAoY2xlYW51cCkge1xuXHRcdGNsZWFudXAoKTtcblx0fVxuXG5cdGNvbnN0IHsgaW5kZXhPZiwgbGFzdEluZGV4T2YsIGluY2x1ZGVzIH0gPSBhcnJheV9wcm90b3R5cGU7XG5cblx0YXJyYXlfcHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiAoaXRlbSwgZnJvbV9pbmRleCkge1xuXHRcdGNvbnN0IGluZGV4ID0gaW5kZXhPZi5jYWxsKHRoaXMsIGl0ZW0sIGZyb21faW5kZXgpO1xuXG5cdFx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IGZyb21faW5kZXggPz8gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0aWYgKGdldF9wcm94aWVkX3ZhbHVlKHRoaXNbaV0pID09PSBpdGVtKSB7XG5cdFx0XHRcdFx0dy5zdGF0ZV9wcm94eV9lcXVhbGl0eV9taXNtYXRjaCgnYXJyYXkuaW5kZXhPZiguLi4pJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH07XG5cblx0YXJyYXlfcHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gKGl0ZW0sIGZyb21faW5kZXgpIHtcblx0XHQvLyB3ZSBuZWVkIHRvIHNwZWNpZnkgdGhpcy5sZW5ndGggLSAxIGJlY2F1c2UgaXQncyBwcm9iYWJseSB1c2luZyBzb21ldGhpbmcgbGlrZVxuXHRcdC8vIGBhcmd1bWVudHNgIGluc2lkZSBzbyBwYXNzaW5nIHVuZGVmaW5lZCBpcyBkaWZmZXJlbnQgZnJvbSBub3QgcGFzc2luZyBhbnl0aGluZ1xuXHRcdGNvbnN0IGluZGV4ID0gbGFzdEluZGV4T2YuY2FsbCh0aGlzLCBpdGVtLCBmcm9tX2luZGV4ID8/IHRoaXMubGVuZ3RoIC0gMSk7XG5cblx0XHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSAoZnJvbV9pbmRleCA/PyB0aGlzLmxlbmd0aCAtIDEpOyBpICs9IDEpIHtcblx0XHRcdFx0aWYgKGdldF9wcm94aWVkX3ZhbHVlKHRoaXNbaV0pID09PSBpdGVtKSB7XG5cdFx0XHRcdFx0dy5zdGF0ZV9wcm94eV9lcXVhbGl0eV9taXNtYXRjaCgnYXJyYXkubGFzdEluZGV4T2YoLi4uKScpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluZGV4O1xuXHR9O1xuXG5cdGFycmF5X3Byb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIChpdGVtLCBmcm9tX2luZGV4KSB7XG5cdFx0Y29uc3QgaGFzID0gaW5jbHVkZXMuY2FsbCh0aGlzLCBpdGVtLCBmcm9tX2luZGV4KTtcblxuXHRcdGlmICghaGFzKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0aWYgKGdldF9wcm94aWVkX3ZhbHVlKHRoaXNbaV0pID09PSBpdGVtKSB7XG5cdFx0XHRcdFx0dy5zdGF0ZV9wcm94eV9lcXVhbGl0eV9taXNtYXRjaCgnYXJyYXkuaW5jbHVkZXMoLi4uKScpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhhcztcblx0fTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdEFycmF5Ll9fc3ZlbHRlX2NsZWFudXAgPSAoKSA9PiB7XG5cdFx0YXJyYXlfcHJvdG90eXBlLmluZGV4T2YgPSBpbmRleE9mO1xuXHRcdGFycmF5X3Byb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGxhc3RJbmRleE9mO1xuXHRcdGFycmF5X3Byb3RvdHlwZS5pbmNsdWRlcyA9IGluY2x1ZGVzO1xuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBhXG4gKiBAcGFyYW0ge2FueX0gYlxuICogQHBhcmFtIHtib29sZWFufSBlcXVhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpY3RfZXF1YWxzKGEsIGIsIGVxdWFsID0gdHJ1ZSkge1xuXHQvLyB0cnktY2F0Y2ggbmVlZGVkIGJlY2F1c2UgdGhpcyB0cmllcyB0byByZWFkIHByb3BlcnRpZXMgb2YgYGFgIGFuZCBgYmAsXG5cdC8vIHdoaWNoIGNvdWxkIGJlIGRpc2FsbG93ZWQgZm9yIGV4YW1wbGUgaW4gYSBzZWN1cmUgY29udGV4dFxuXHR0cnkge1xuXHRcdGlmICgoYSA9PT0gYikgIT09IChnZXRfcHJveGllZF92YWx1ZShhKSA9PT0gZ2V0X3Byb3hpZWRfdmFsdWUoYikpKSB7XG5cdFx0XHR3LnN0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoKGVxdWFsID8gJz09PScgOiAnIT09Jyk7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cblx0cmV0dXJuIChhID09PSBiKSA9PT0gZXF1YWw7XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IGFcbiAqIEBwYXJhbSB7YW55fSBiXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGVxdWFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiLCBlcXVhbCA9IHRydWUpIHtcblx0aWYgKChhID09IGIpICE9PSAoZ2V0X3Byb3hpZWRfdmFsdWUoYSkgPT0gZ2V0X3Byb3hpZWRfdmFsdWUoYikpKSB7XG5cdFx0dy5zdGF0ZV9wcm94eV9lcXVhbGl0eV9taXNtYXRjaChlcXVhbCA/ICc9PScgOiAnIT0nKTtcblx0fVxuXG5cdHJldHVybiAoYSA9PSBiKSA9PT0gZXF1YWw7XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBUZW1wbGF0ZU5vZGUgfSBmcm9tICcjY2xpZW50JyAqL1xuaW1wb3J0IHsgaHlkcmF0ZV9ub2RlLCBoeWRyYXRpbmcsIHNldF9oeWRyYXRlX25vZGUgfSBmcm9tICcuL2h5ZHJhdGlvbi5qcyc7XG5pbXBvcnQgeyBERVYgfSBmcm9tICdlc20tZW52JztcbmltcG9ydCB7IGluaXRfYXJyYXlfcHJvdG90eXBlX3dhcm5pbmdzIH0gZnJvbSAnLi4vZGV2L2VxdWFsaXR5LmpzJztcbmltcG9ydCB7IGdldF9kZXNjcmlwdG9yLCBpc19leHRlbnNpYmxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcblxuLy8gZXhwb3J0IHRoZXNlIGZvciByZWZlcmVuY2UgaW4gdGhlIGNvbXBpbGVkIGNvZGUsIG1ha2luZyBnbG9iYWwgbmFtZSBkZWR1cGxpY2F0aW9uIHVubmVjZXNzYXJ5XG4vKiogQHR5cGUge1dpbmRvd30gKi9cbmV4cG9ydCB2YXIgJHdpbmRvdztcblxuLyoqIEB0eXBlIHtEb2N1bWVudH0gKi9cbmV4cG9ydCB2YXIgJGRvY3VtZW50O1xuXG4vKiogQHR5cGUge2Jvb2xlYW59ICovXG5leHBvcnQgdmFyIGlzX2ZpcmVmb3g7XG5cbi8qKiBAdHlwZSB7KCkgPT4gTm9kZSB8IG51bGx9ICovXG52YXIgZmlyc3RfY2hpbGRfZ2V0dGVyO1xuLyoqIEB0eXBlIHsoKSA9PiBOb2RlIHwgbnVsbH0gKi9cbnZhciBuZXh0X3NpYmxpbmdfZ2V0dGVyO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlc2UgbGF6aWx5IHRvIGF2b2lkIGlzc3VlcyB3aGVuIHVzaW5nIHRoZSBydW50aW1lIGluIGEgc2VydmVyIGNvbnRleHRcbiAqIHdoZXJlIHRoZXNlIGdsb2JhbHMgYXJlIG5vdCBhdmFpbGFibGUgd2hpbGUgYXZvaWRpbmcgYSBzZXBhcmF0ZSBzZXJ2ZXIgZW50cnkgcG9pbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRfb3BlcmF0aW9ucygpIHtcblx0aWYgKCR3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdCR3aW5kb3cgPSB3aW5kb3c7XG5cdCRkb2N1bWVudCA9IGRvY3VtZW50O1xuXHRpc19maXJlZm94ID0gL0ZpcmVmb3gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblx0dmFyIGVsZW1lbnRfcHJvdG90eXBlID0gRWxlbWVudC5wcm90b3R5cGU7XG5cdHZhciBub2RlX3Byb3RvdHlwZSA9IE5vZGUucHJvdG90eXBlO1xuXHR2YXIgdGV4dF9wcm90b3R5cGUgPSBUZXh0LnByb3RvdHlwZTtcblxuXHQvLyBAdHMtaWdub3JlXG5cdGZpcnN0X2NoaWxkX2dldHRlciA9IGdldF9kZXNjcmlwdG9yKG5vZGVfcHJvdG90eXBlLCAnZmlyc3RDaGlsZCcpLmdldDtcblx0Ly8gQHRzLWlnbm9yZVxuXHRuZXh0X3NpYmxpbmdfZ2V0dGVyID0gZ2V0X2Rlc2NyaXB0b3Iobm9kZV9wcm90b3R5cGUsICduZXh0U2libGluZycpLmdldDtcblxuXHRpZiAoaXNfZXh0ZW5zaWJsZShlbGVtZW50X3Byb3RvdHlwZSkpIHtcblx0XHQvLyB0aGUgZm9sbG93aW5nIGFzc2lnbm1lbnRzIGltcHJvdmUgcGVyZiBvZiBsb29rdXBzIG9uIERPTSBub2Rlc1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRlbGVtZW50X3Byb3RvdHlwZS5fX2NsaWNrID0gdW5kZWZpbmVkO1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRlbGVtZW50X3Byb3RvdHlwZS5fX2NsYXNzTmFtZSA9IHVuZGVmaW5lZDtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0ZWxlbWVudF9wcm90b3R5cGUuX19hdHRyaWJ1dGVzID0gbnVsbDtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0ZWxlbWVudF9wcm90b3R5cGUuX19zdHlsZSA9IHVuZGVmaW5lZDtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0ZWxlbWVudF9wcm90b3R5cGUuX19lID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aWYgKGlzX2V4dGVuc2libGUodGV4dF9wcm90b3R5cGUpKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdHRleHRfcHJvdG90eXBlLl9fdCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdGlmIChERVYpIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0ZWxlbWVudF9wcm90b3R5cGUuX19zdmVsdGVfbWV0YSA9IG51bGw7XG5cblx0XHRpbml0X2FycmF5X3Byb3RvdHlwZV93YXJuaW5ncygpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7VGV4dH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZV90ZXh0KHZhbHVlID0gJycpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge05vZGV9IE5cbiAqIEBwYXJhbSB7Tn0gbm9kZVxuICogQHJldHVybnMge05vZGUgfCBudWxsfVxuICovXG4vKkBfX05PX1NJREVfRUZGRUNUU19fKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfZmlyc3RfY2hpbGQobm9kZSkge1xuXHRyZXR1cm4gZmlyc3RfY2hpbGRfZ2V0dGVyLmNhbGwobm9kZSk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHtOb2RlfSBOXG4gKiBAcGFyYW0ge059IG5vZGVcbiAqIEByZXR1cm5zIHtOb2RlIHwgbnVsbH1cbiAqL1xuLypAX19OT19TSURFX0VGRkVDVFNfXyovXG5leHBvcnQgZnVuY3Rpb24gZ2V0X25leHRfc2libGluZyhub2RlKSB7XG5cdHJldHVybiBuZXh0X3NpYmxpbmdfZ2V0dGVyLmNhbGwobm9kZSk7XG59XG5cbi8qKlxuICogRG9uJ3QgbWFyayB0aGlzIGFzIHNpZGUtZWZmZWN0LWZyZWUsIGh5ZHJhdGlvbiBuZWVkcyB0byB3YWxrIGFsbCBub2Rlc1xuICogQHRlbXBsYXRlIHtOb2RlfSBOXG4gKiBAcGFyYW0ge059IG5vZGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNfdGV4dFxuICogQHJldHVybnMge05vZGUgfCBudWxsfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hpbGQobm9kZSwgaXNfdGV4dCkge1xuXHRpZiAoIWh5ZHJhdGluZykge1xuXHRcdHJldHVybiBnZXRfZmlyc3RfY2hpbGQobm9kZSk7XG5cdH1cblxuXHR2YXIgY2hpbGQgPSAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9maXJzdF9jaGlsZChoeWRyYXRlX25vZGUpKTtcblxuXHQvLyBDaGlsZCBjYW4gYmUgbnVsbCBpZiB3ZSBoYXZlIGFuIGVsZW1lbnQgd2l0aCBhIHNpbmdsZSBjaGlsZCwgbGlrZSBgPHA+e3RleHR9PC9wPmAsIHdoZXJlIGB0ZXh0YCBpcyBlbXB0eVxuXHRpZiAoY2hpbGQgPT09IG51bGwpIHtcblx0XHRjaGlsZCA9IGh5ZHJhdGVfbm9kZS5hcHBlbmRDaGlsZChjcmVhdGVfdGV4dCgpKTtcblx0fSBlbHNlIGlmIChpc190ZXh0ICYmIGNoaWxkLm5vZGVUeXBlICE9PSAzKSB7XG5cdFx0dmFyIHRleHQgPSBjcmVhdGVfdGV4dCgpO1xuXHRcdGNoaWxkPy5iZWZvcmUodGV4dCk7XG5cdFx0c2V0X2h5ZHJhdGVfbm9kZSh0ZXh0KTtcblx0XHRyZXR1cm4gdGV4dDtcblx0fVxuXG5cdHNldF9oeWRyYXRlX25vZGUoY2hpbGQpO1xuXHRyZXR1cm4gY2hpbGQ7XG59XG5cbi8qKlxuICogRG9uJ3QgbWFyayB0aGlzIGFzIHNpZGUtZWZmZWN0LWZyZWUsIGh5ZHJhdGlvbiBuZWVkcyB0byB3YWxrIGFsbCBub2Rlc1xuICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50IHwgVGVtcGxhdGVOb2RlW119IGZyYWdtZW50XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzX3RleHRcbiAqIEByZXR1cm5zIHtOb2RlIHwgbnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0X2NoaWxkKGZyYWdtZW50LCBpc190ZXh0KSB7XG5cdGlmICghaHlkcmF0aW5nKSB7XG5cdFx0Ly8gd2hlbiBub3QgaHlkcmF0aW5nLCBgZnJhZ21lbnRgIGlzIGEgYERvY3VtZW50RnJhZ21lbnRgICh0aGUgcmVzdWx0IG9mIGNhbGxpbmcgYG9wZW5fZnJhZ2ApXG5cdFx0dmFyIGZpcnN0ID0gLyoqIEB0eXBlIHtEb2N1bWVudEZyYWdtZW50fSAqLyAoZ2V0X2ZpcnN0X2NoaWxkKC8qKiBAdHlwZSB7Tm9kZX0gKi8gKGZyYWdtZW50KSkpO1xuXG5cdFx0Ly8gVE9ETyBwcmV2ZW50IHVzZXIgY29tbWVudHMgd2l0aCB0aGUgZW1wdHkgc3RyaW5nIHdoZW4gcHJlc2VydmVDb21tZW50cyBpcyB0cnVlXG5cdFx0aWYgKGZpcnN0IGluc3RhbmNlb2YgQ29tbWVudCAmJiBmaXJzdC5kYXRhID09PSAnJykgcmV0dXJuIGdldF9uZXh0X3NpYmxpbmcoZmlyc3QpO1xuXG5cdFx0cmV0dXJuIGZpcnN0O1xuXHR9XG5cblx0Ly8gaWYgYW4ge2V4cHJlc3Npb259IGlzIGVtcHR5IGR1cmluZyBTU1IsIHRoZXJlIG1pZ2h0IGJlIG5vXG5cdC8vIHRleHQgbm9kZSB0byBoeWRyYXRlIFx1MjAxNCB3ZSBtdXN0IHRoZXJlZm9yZSBjcmVhdGUgb25lXG5cdGlmIChpc190ZXh0ICYmIGh5ZHJhdGVfbm9kZT8ubm9kZVR5cGUgIT09IDMpIHtcblx0XHR2YXIgdGV4dCA9IGNyZWF0ZV90ZXh0KCk7XG5cblx0XHRoeWRyYXRlX25vZGU/LmJlZm9yZSh0ZXh0KTtcblx0XHRzZXRfaHlkcmF0ZV9ub2RlKHRleHQpO1xuXHRcdHJldHVybiB0ZXh0O1xuXHR9XG5cblx0cmV0dXJuIGh5ZHJhdGVfbm9kZTtcbn1cblxuLyoqXG4gKiBEb24ndCBtYXJrIHRoaXMgYXMgc2lkZS1lZmZlY3QtZnJlZSwgaHlkcmF0aW9uIG5lZWRzIHRvIHdhbGsgYWxsIG5vZGVzXG4gKiBAcGFyYW0ge1RlbXBsYXRlTm9kZX0gbm9kZVxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzX3RleHRcbiAqIEByZXR1cm5zIHtOb2RlIHwgbnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpYmxpbmcobm9kZSwgY291bnQgPSAxLCBpc190ZXh0ID0gZmFsc2UpIHtcblx0bGV0IG5leHRfc2libGluZyA9IGh5ZHJhdGluZyA/IGh5ZHJhdGVfbm9kZSA6IG5vZGU7XG5cdHZhciBsYXN0X3NpYmxpbmc7XG5cblx0d2hpbGUgKGNvdW50LS0pIHtcblx0XHRsYXN0X3NpYmxpbmcgPSBuZXh0X3NpYmxpbmc7XG5cdFx0bmV4dF9zaWJsaW5nID0gLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChnZXRfbmV4dF9zaWJsaW5nKG5leHRfc2libGluZykpO1xuXHR9XG5cblx0aWYgKCFoeWRyYXRpbmcpIHtcblx0XHRyZXR1cm4gbmV4dF9zaWJsaW5nO1xuXHR9XG5cblx0dmFyIHR5cGUgPSBuZXh0X3NpYmxpbmc/Lm5vZGVUeXBlO1xuXG5cdC8vIGlmIGEgc2libGluZyB7ZXhwcmVzc2lvbn0gaXMgZW1wdHkgZHVyaW5nIFNTUiwgdGhlcmUgbWlnaHQgYmUgbm9cblx0Ly8gdGV4dCBub2RlIHRvIGh5ZHJhdGUgXHUyMDE0IHdlIG11c3QgdGhlcmVmb3JlIGNyZWF0ZSBvbmVcblx0aWYgKGlzX3RleHQgJiYgdHlwZSAhPT0gMykge1xuXHRcdHZhciB0ZXh0ID0gY3JlYXRlX3RleHQoKTtcblx0XHQvLyBJZiB0aGUgbmV4dCBzaWJsaW5nIGlzIGBudWxsYCBhbmQgd2UncmUgaGFuZGxpbmcgdGV4dCB0aGVuIGl0J3MgYmVjYXVzZVxuXHRcdC8vIHRoZSBTU1IgY29udGVudCB3YXMgZW1wdHkgZm9yIHRoZSB0ZXh0LCBzbyB3ZSBuZWVkIHRvIGdlbmVyYXRlIGEgbmV3IHRleHRcblx0XHQvLyBub2RlIGFuZCBpbnNlcnQgaXQgYWZ0ZXIgdGhlIGxhc3Qgc2libGluZ1xuXHRcdGlmIChuZXh0X3NpYmxpbmcgPT09IG51bGwpIHtcblx0XHRcdGxhc3Rfc2libGluZz8uYWZ0ZXIodGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5leHRfc2libGluZy5iZWZvcmUodGV4dCk7XG5cdFx0fVxuXHRcdHNldF9oeWRyYXRlX25vZGUodGV4dCk7XG5cdFx0cmV0dXJuIHRleHQ7XG5cdH1cblxuXHRzZXRfaHlkcmF0ZV9ub2RlKG5leHRfc2libGluZyk7XG5cdHJldHVybiAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKG5leHRfc2libGluZyk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHtOb2RlfSBOXG4gKiBAcGFyYW0ge059IG5vZGVcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJfdGV4dF9jb250ZW50KG5vZGUpIHtcblx0bm9kZS50ZXh0Q29udGVudCA9ICcnO1xufVxuIiwgIi8qKiBAaW1wb3J0IHsgQ29tcG9uZW50Q29udGV4dCwgQ29tcG9uZW50Q29udGV4dExlZ2FjeSwgRGVyaXZlZCwgRWZmZWN0LCBUZW1wbGF0ZU5vZGUsIFRyYW5zaXRpb25NYW5hZ2VyIH0gZnJvbSAnI2NsaWVudCcgKi9cbmltcG9ydCB7XG5cdGNoZWNrX2RpcnRpbmVzcyxcblx0YWN0aXZlX2VmZmVjdCxcblx0YWN0aXZlX3JlYWN0aW9uLFxuXHR1cGRhdGVfZWZmZWN0LFxuXHRnZXQsXG5cdGlzX2Rlc3Ryb3lpbmdfZWZmZWN0LFxuXHRyZW1vdmVfcmVhY3Rpb25zLFxuXHRzY2hlZHVsZV9lZmZlY3QsXG5cdHNldF9hY3RpdmVfcmVhY3Rpb24sXG5cdHNldF9pc19kZXN0cm95aW5nX2VmZmVjdCxcblx0c2V0X3NpZ25hbF9zdGF0dXMsXG5cdHVudHJhY2ssXG5cdHVudHJhY2tpbmdcbn0gZnJvbSAnLi4vcnVudGltZS5qcyc7XG5pbXBvcnQge1xuXHRESVJUWSxcblx0QlJBTkNIX0VGRkVDVCxcblx0UkVOREVSX0VGRkVDVCxcblx0RUZGRUNULFxuXHRERVNUUk9ZRUQsXG5cdElORVJULFxuXHRFRkZFQ1RfUkFOLFxuXHRCTE9DS19FRkZFQ1QsXG5cdFJPT1RfRUZGRUNULFxuXHRFRkZFQ1RfVFJBTlNQQVJFTlQsXG5cdERFUklWRUQsXG5cdFVOT1dORUQsXG5cdENMRUFOLFxuXHRJTlNQRUNUX0VGRkVDVCxcblx0SEVBRF9FRkZFQ1QsXG5cdE1BWUJFX0RJUlRZLFxuXHRFRkZFQ1RfSEFTX0RFUklWRUQsXG5cdEJPVU5EQVJZX0VGRkVDVFxufSBmcm9tICcjY2xpZW50L2NvbnN0YW50cyc7XG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL3NvdXJjZXMuanMnO1xuaW1wb3J0ICogYXMgZSBmcm9tICcuLi9lcnJvcnMuanMnO1xuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5pbXBvcnQgeyBkZWZpbmVfcHJvcGVydHkgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHsgZ2V0X25leHRfc2libGluZyB9IGZyb20gJy4uL2RvbS9vcGVyYXRpb25zLmpzJztcbmltcG9ydCB7IGRlcml2ZWQgfSBmcm9tICcuL2Rlcml2ZWRzLmpzJztcbmltcG9ydCB7IGNvbXBvbmVudF9jb250ZXh0LCBkZXZfY3VycmVudF9jb21wb25lbnRfZnVuY3Rpb24gfSBmcm9tICcuLi9jb250ZXh0LmpzJztcblxuLyoqXG4gKiBAcGFyYW0geyckZWZmZWN0JyB8ICckZWZmZWN0LnByZScgfCAnJGluc3BlY3QnfSBydW5lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZV9lZmZlY3QocnVuZSkge1xuXHRpZiAoYWN0aXZlX2VmZmVjdCA9PT0gbnVsbCAmJiBhY3RpdmVfcmVhY3Rpb24gPT09IG51bGwpIHtcblx0XHRlLmVmZmVjdF9vcnBoYW4ocnVuZSk7XG5cdH1cblxuXHRpZiAoYWN0aXZlX3JlYWN0aW9uICE9PSBudWxsICYmIChhY3RpdmVfcmVhY3Rpb24uZiAmIFVOT1dORUQpICE9PSAwICYmIGFjdGl2ZV9lZmZlY3QgPT09IG51bGwpIHtcblx0XHRlLmVmZmVjdF9pbl91bm93bmVkX2Rlcml2ZWQoKTtcblx0fVxuXG5cdGlmIChpc19kZXN0cm95aW5nX2VmZmVjdCkge1xuXHRcdGUuZWZmZWN0X2luX3RlYXJkb3duKHJ1bmUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICogQHBhcmFtIHtFZmZlY3R9IHBhcmVudF9lZmZlY3RcbiAqL1xuZnVuY3Rpb24gcHVzaF9lZmZlY3QoZWZmZWN0LCBwYXJlbnRfZWZmZWN0KSB7XG5cdHZhciBwYXJlbnRfbGFzdCA9IHBhcmVudF9lZmZlY3QubGFzdDtcblx0aWYgKHBhcmVudF9sYXN0ID09PSBudWxsKSB7XG5cdFx0cGFyZW50X2VmZmVjdC5sYXN0ID0gcGFyZW50X2VmZmVjdC5maXJzdCA9IGVmZmVjdDtcblx0fSBlbHNlIHtcblx0XHRwYXJlbnRfbGFzdC5uZXh0ID0gZWZmZWN0O1xuXHRcdGVmZmVjdC5wcmV2ID0gcGFyZW50X2xhc3Q7XG5cdFx0cGFyZW50X2VmZmVjdC5sYXN0ID0gZWZmZWN0O1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEBwYXJhbSB7bnVsbCB8ICgoKSA9PiB2b2lkIHwgKCgpID0+IHZvaWQpKX0gZm5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3luY1xuICogQHBhcmFtIHtib29sZWFufSBwdXNoXG4gKiBAcmV0dXJucyB7RWZmZWN0fVxuICovXG5mdW5jdGlvbiBjcmVhdGVfZWZmZWN0KHR5cGUsIGZuLCBzeW5jLCBwdXNoID0gdHJ1ZSkge1xuXHR2YXIgcGFyZW50ID0gYWN0aXZlX2VmZmVjdDtcblxuXHRpZiAoREVWKSB7XG5cdFx0Ly8gRW5zdXJlIHRoZSBwYXJlbnQgaXMgbmV2ZXIgYW4gaW5zcGVjdCBlZmZlY3Rcblx0XHR3aGlsZSAocGFyZW50ICE9PSBudWxsICYmIChwYXJlbnQuZiAmIElOU1BFQ1RfRUZGRUNUKSAhPT0gMCkge1xuXHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudDtcblx0XHR9XG5cdH1cblxuXHQvKiogQHR5cGUge0VmZmVjdH0gKi9cblx0dmFyIGVmZmVjdCA9IHtcblx0XHRjdHg6IGNvbXBvbmVudF9jb250ZXh0LFxuXHRcdGRlcHM6IG51bGwsXG5cdFx0bm9kZXNfc3RhcnQ6IG51bGwsXG5cdFx0bm9kZXNfZW5kOiBudWxsLFxuXHRcdGY6IHR5cGUgfCBESVJUWSxcblx0XHRmaXJzdDogbnVsbCxcblx0XHRmbixcblx0XHRsYXN0OiBudWxsLFxuXHRcdG5leHQ6IG51bGwsXG5cdFx0cGFyZW50LFxuXHRcdHByZXY6IG51bGwsXG5cdFx0dGVhcmRvd246IG51bGwsXG5cdFx0dHJhbnNpdGlvbnM6IG51bGwsXG5cdFx0d3Y6IDBcblx0fTtcblxuXHRpZiAoREVWKSB7XG5cdFx0ZWZmZWN0LmNvbXBvbmVudF9mdW5jdGlvbiA9IGRldl9jdXJyZW50X2NvbXBvbmVudF9mdW5jdGlvbjtcblx0fVxuXG5cdGlmIChzeW5jKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHVwZGF0ZV9lZmZlY3QoZWZmZWN0KTtcblx0XHRcdGVmZmVjdC5mIHw9IEVGRkVDVF9SQU47XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0ZGVzdHJveV9lZmZlY3QoZWZmZWN0KTtcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGZuICE9PSBudWxsKSB7XG5cdFx0c2NoZWR1bGVfZWZmZWN0KGVmZmVjdCk7XG5cdH1cblxuXHQvLyBpZiBhbiBlZmZlY3QgaGFzIG5vIGRlcGVuZGVuY2llcywgbm8gRE9NIGFuZCBubyB0ZWFyZG93biBmdW5jdGlvbixcblx0Ly8gZG9uJ3QgYm90aGVyIGFkZGluZyBpdCB0byB0aGUgZWZmZWN0IHRyZWVcblx0dmFyIGluZXJ0ID1cblx0XHRzeW5jICYmXG5cdFx0ZWZmZWN0LmRlcHMgPT09IG51bGwgJiZcblx0XHRlZmZlY3QuZmlyc3QgPT09IG51bGwgJiZcblx0XHRlZmZlY3Qubm9kZXNfc3RhcnQgPT09IG51bGwgJiZcblx0XHRlZmZlY3QudGVhcmRvd24gPT09IG51bGwgJiZcblx0XHQoZWZmZWN0LmYgJiAoRUZGRUNUX0hBU19ERVJJVkVEIHwgQk9VTkRBUllfRUZGRUNUKSkgPT09IDA7XG5cblx0aWYgKCFpbmVydCAmJiBwdXNoKSB7XG5cdFx0aWYgKHBhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0cHVzaF9lZmZlY3QoZWZmZWN0LCBwYXJlbnQpO1xuXHRcdH1cblxuXHRcdC8vIGlmIHdlJ3JlIGluIGEgZGVyaXZlZCwgYWRkIHRoZSBlZmZlY3QgdGhlcmUgdG9vXG5cdFx0aWYgKGFjdGl2ZV9yZWFjdGlvbiAhPT0gbnVsbCAmJiAoYWN0aXZlX3JlYWN0aW9uLmYgJiBERVJJVkVEKSAhPT0gMCkge1xuXHRcdFx0dmFyIGRlcml2ZWQgPSAvKiogQHR5cGUge0Rlcml2ZWR9ICovIChhY3RpdmVfcmVhY3Rpb24pO1xuXHRcdFx0KGRlcml2ZWQuZWZmZWN0cyA/Pz0gW10pLnB1c2goZWZmZWN0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWZmZWN0O1xufVxuXG4vKipcbiAqIEludGVybmFsIHJlcHJlc2VudGF0aW9uIG9mIGAkZWZmZWN0LnRyYWNraW5nKClgXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVmZmVjdF90cmFja2luZygpIHtcblx0cmV0dXJuIGFjdGl2ZV9yZWFjdGlvbiAhPT0gbnVsbCAmJiAhdW50cmFja2luZztcbn1cblxuLyoqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZWFyZG93bihmbikge1xuXHRjb25zdCBlZmZlY3QgPSBjcmVhdGVfZWZmZWN0KFJFTkRFUl9FRkZFQ1QsIG51bGwsIGZhbHNlKTtcblx0c2V0X3NpZ25hbF9zdGF0dXMoZWZmZWN0LCBDTEVBTik7XG5cdGVmZmVjdC50ZWFyZG93biA9IGZuO1xuXHRyZXR1cm4gZWZmZWN0O1xufVxuXG4vKipcbiAqIEludGVybmFsIHJlcHJlc2VudGF0aW9uIG9mIGAkZWZmZWN0KC4uLilgXG4gKiBAcGFyYW0geygpID0+IHZvaWQgfCAoKCkgPT4gdm9pZCl9IGZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VyX2VmZmVjdChmbikge1xuXHR2YWxpZGF0ZV9lZmZlY3QoJyRlZmZlY3QnKTtcblxuXHQvLyBOb24tbmVzdGVkIGAkZWZmZWN0KC4uLilgIGluIGEgY29tcG9uZW50IHNob3VsZCBiZSBkZWZlcnJlZFxuXHQvLyB1bnRpbCB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcblx0dmFyIGRlZmVyID1cblx0XHRhY3RpdmVfZWZmZWN0ICE9PSBudWxsICYmXG5cdFx0KGFjdGl2ZV9lZmZlY3QuZiAmIEJSQU5DSF9FRkZFQ1QpICE9PSAwICYmXG5cdFx0Y29tcG9uZW50X2NvbnRleHQgIT09IG51bGwgJiZcblx0XHQhY29tcG9uZW50X2NvbnRleHQubTtcblxuXHRpZiAoREVWKSB7XG5cdFx0ZGVmaW5lX3Byb3BlcnR5KGZuLCAnbmFtZScsIHtcblx0XHRcdHZhbHVlOiAnJGVmZmVjdCdcblx0XHR9KTtcblx0fVxuXG5cdGlmIChkZWZlcikge1xuXHRcdHZhciBjb250ZXh0ID0gLyoqIEB0eXBlIHtDb21wb25lbnRDb250ZXh0fSAqLyAoY29tcG9uZW50X2NvbnRleHQpO1xuXHRcdChjb250ZXh0LmUgPz89IFtdKS5wdXNoKHtcblx0XHRcdGZuLFxuXHRcdFx0ZWZmZWN0OiBhY3RpdmVfZWZmZWN0LFxuXHRcdFx0cmVhY3Rpb246IGFjdGl2ZV9yZWFjdGlvblxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBzaWduYWwgPSBlZmZlY3QoZm4pO1xuXHRcdHJldHVybiBzaWduYWw7XG5cdH1cbn1cblxuLyoqXG4gKiBJbnRlcm5hbCByZXByZXNlbnRhdGlvbiBvZiBgJGVmZmVjdC5wcmUoLi4uKWBcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZCB8ICgoKSA9PiB2b2lkKX0gZm5cbiAqIEByZXR1cm5zIHtFZmZlY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VyX3ByZV9lZmZlY3QoZm4pIHtcblx0dmFsaWRhdGVfZWZmZWN0KCckZWZmZWN0LnByZScpO1xuXHRpZiAoREVWKSB7XG5cdFx0ZGVmaW5lX3Byb3BlcnR5KGZuLCAnbmFtZScsIHtcblx0XHRcdHZhbHVlOiAnJGVmZmVjdC5wcmUnXG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIHJlbmRlcl9lZmZlY3QoZm4pO1xufVxuXG4vKiogQHBhcmFtIHsoKSA9PiB2b2lkIHwgKCgpID0+IHZvaWQpfSBmbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3BlY3RfZWZmZWN0KGZuKSB7XG5cdHJldHVybiBjcmVhdGVfZWZmZWN0KElOU1BFQ1RfRUZGRUNULCBmbiwgdHJ1ZSk7XG59XG5cbi8qKlxuICogSW50ZXJuYWwgcmVwcmVzZW50YXRpb24gb2YgYCRlZmZlY3Qucm9vdCguLi4pYFxuICogQHBhcmFtIHsoKSA9PiB2b2lkIHwgKCgpID0+IHZvaWQpfSBmblxuICogQHJldHVybnMgeygpID0+IHZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlZmZlY3Rfcm9vdChmbikge1xuXHRjb25zdCBlZmZlY3QgPSBjcmVhdGVfZWZmZWN0KFJPT1RfRUZGRUNULCBmbiwgdHJ1ZSk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRkZXN0cm95X2VmZmVjdChlZmZlY3QpO1xuXHR9O1xufVxuXG4vKipcbiAqIEFuIGVmZmVjdCByb290IHdob3NlIGNoaWxkcmVuIGNhbiB0cmFuc2l0aW9uIG91dFxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBmblxuICogQHJldHVybnMgeyhvcHRpb25zPzogeyBvdXRybz86IGJvb2xlYW4gfSkgPT4gUHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudF9yb290KGZuKSB7XG5cdGNvbnN0IGVmZmVjdCA9IGNyZWF0ZV9lZmZlY3QoUk9PVF9FRkZFQ1QsIGZuLCB0cnVlKTtcblxuXHRyZXR1cm4gKG9wdGlvbnMgPSB7fSkgPT4ge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsKSA9PiB7XG5cdFx0XHRpZiAob3B0aW9ucy5vdXRybykge1xuXHRcdFx0XHRwYXVzZV9lZmZlY3QoZWZmZWN0LCAoKSA9PiB7XG5cdFx0XHRcdFx0ZGVzdHJveV9lZmZlY3QoZWZmZWN0KTtcblx0XHRcdFx0XHRmdWxmaWwodW5kZWZpbmVkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZXN0cm95X2VmZmVjdChlZmZlY3QpO1xuXHRcdFx0XHRmdWxmaWwodW5kZWZpbmVkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygpID0+IHZvaWQgfCAoKCkgPT4gdm9pZCl9IGZuXG4gKiBAcmV0dXJucyB7RWZmZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWZmZWN0KGZuKSB7XG5cdHJldHVybiBjcmVhdGVfZWZmZWN0KEVGRkVDVCwgZm4sIGZhbHNlKTtcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCByZXByZXNlbnRhdGlvbiBvZiBgJDogLi5gXG4gKiBAcGFyYW0geygpID0+IGFueX0gZGVwc1xuICogQHBhcmFtIHsoKSA9PiB2b2lkIHwgKCgpID0+IHZvaWQpfSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVnYWN5X3ByZV9lZmZlY3QoZGVwcywgZm4pIHtcblx0dmFyIGNvbnRleHQgPSAvKiogQHR5cGUge0NvbXBvbmVudENvbnRleHRMZWdhY3l9ICovIChjb21wb25lbnRfY29udGV4dCk7XG5cblx0LyoqIEB0eXBlIHt7IGVmZmVjdDogbnVsbCB8IEVmZmVjdCwgcmFuOiBib29sZWFuIH19ICovXG5cdHZhciB0b2tlbiA9IHsgZWZmZWN0OiBudWxsLCByYW46IGZhbHNlIH07XG5cdGNvbnRleHQubC5yMS5wdXNoKHRva2VuKTtcblxuXHR0b2tlbi5lZmZlY3QgPSByZW5kZXJfZWZmZWN0KCgpID0+IHtcblx0XHRkZXBzKCk7XG5cblx0XHQvLyBJZiB0aGlzIGxlZ2FjeSBwcmUgZWZmZWN0IGhhcyBhbHJlYWR5IHJ1biBiZWZvcmUgdGhlIGVuZCBvZiB0aGUgcmVzZXQsIHRoZW5cblx0XHQvLyBiYWlsIG91dCB0byBlbXVsYXRlIHRoZSBzYW1lIGJlaGF2aW9yLlxuXHRcdGlmICh0b2tlbi5yYW4pIHJldHVybjtcblxuXHRcdHRva2VuLnJhbiA9IHRydWU7XG5cdFx0c2V0KGNvbnRleHQubC5yMiwgdHJ1ZSk7XG5cdFx0dW50cmFjayhmbik7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVnYWN5X3ByZV9lZmZlY3RfcmVzZXQoKSB7XG5cdHZhciBjb250ZXh0ID0gLyoqIEB0eXBlIHtDb21wb25lbnRDb250ZXh0TGVnYWN5fSAqLyAoY29tcG9uZW50X2NvbnRleHQpO1xuXG5cdHJlbmRlcl9lZmZlY3QoKCkgPT4ge1xuXHRcdGlmICghZ2V0KGNvbnRleHQubC5yMikpIHJldHVybjtcblxuXHRcdC8vIFJ1biBkaXJ0eSBgJDpgIHN0YXRlbWVudHNcblx0XHRmb3IgKHZhciB0b2tlbiBvZiBjb250ZXh0LmwucjEpIHtcblx0XHRcdHZhciBlZmZlY3QgPSB0b2tlbi5lZmZlY3Q7XG5cblx0XHRcdC8vIElmIHRoZSBlZmZlY3QgaXMgQ0xFQU4sIHRoZW4gbWFrZSBpdCBNQVlCRV9ESVJUWS4gVGhpcyBlbnN1cmVzIHdlIHRyYXZlcnNlIHRocm91Z2hcblx0XHRcdC8vIHRoZSBlZmZlY3RzIGRlcGVuZGVuY2llcyBhbmQgY29ycmVjdGx5IGVuc3VyZSBlYWNoIGRlcGVuZGVuY3kgaXMgdXAtdG8tZGF0ZS5cblx0XHRcdGlmICgoZWZmZWN0LmYgJiBDTEVBTikgIT09IDApIHtcblx0XHRcdFx0c2V0X3NpZ25hbF9zdGF0dXMoZWZmZWN0LCBNQVlCRV9ESVJUWSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjaGVja19kaXJ0aW5lc3MoZWZmZWN0KSkge1xuXHRcdFx0XHR1cGRhdGVfZWZmZWN0KGVmZmVjdCk7XG5cdFx0XHR9XG5cblx0XHRcdHRva2VuLnJhbiA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnRleHQubC5yMi52ID0gZmFsc2U7IC8vIHNldCBkaXJlY3RseSB0byBhdm9pZCByZXJ1bm5pbmcgdGhpcyBlZmZlY3Rcblx0fSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsoKSA9PiB2b2lkIHwgKCgpID0+IHZvaWQpfSBmblxuICogQHJldHVybnMge0VmZmVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcl9lZmZlY3QoZm4pIHtcblx0cmV0dXJuIGNyZWF0ZV9lZmZlY3QoUkVOREVSX0VGRkVDVCwgZm4sIHRydWUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KC4uLmV4cHJlc3Npb25zOiBhbnkpID0+IHZvaWQgfCAoKCkgPT4gdm9pZCl9IGZuXG4gKiBAcGFyYW0ge0FycmF5PCgpID0+IGFueT59IHRodW5rc1xuICogQHJldHVybnMge0VmZmVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlX2VmZmVjdChmbiwgdGh1bmtzID0gW10sIGQgPSBkZXJpdmVkKSB7XG5cdGNvbnN0IGRlcml2ZWRzID0gdGh1bmtzLm1hcChkKTtcblx0Y29uc3QgZWZmZWN0ID0gKCkgPT4gZm4oLi4uZGVyaXZlZHMubWFwKGdldCkpO1xuXG5cdGlmIChERVYpIHtcblx0XHRkZWZpbmVfcHJvcGVydHkoZWZmZWN0LCAnbmFtZScsIHtcblx0XHRcdHZhbHVlOiAne2V4cHJlc3Npb259J1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIGJsb2NrKGVmZmVjdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsoKCkgPT4gdm9pZCl9IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gZmxhZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrKGZuLCBmbGFncyA9IDApIHtcblx0cmV0dXJuIGNyZWF0ZV9lZmZlY3QoUkVOREVSX0VGRkVDVCB8IEJMT0NLX0VGRkVDVCB8IGZsYWdzLCBmbiwgdHJ1ZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsoKCkgPT4gdm9pZCl9IGZuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwdXNoXVxuICovXG5leHBvcnQgZnVuY3Rpb24gYnJhbmNoKGZuLCBwdXNoID0gdHJ1ZSkge1xuXHRyZXR1cm4gY3JlYXRlX2VmZmVjdChSRU5ERVJfRUZGRUNUIHwgQlJBTkNIX0VGRkVDVCwgZm4sIHRydWUsIHB1c2gpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVfZWZmZWN0X3RlYXJkb3duKGVmZmVjdCkge1xuXHR2YXIgdGVhcmRvd24gPSBlZmZlY3QudGVhcmRvd247XG5cdGlmICh0ZWFyZG93biAhPT0gbnVsbCkge1xuXHRcdGNvbnN0IHByZXZpb3VzbHlfZGVzdHJveWluZ19lZmZlY3QgPSBpc19kZXN0cm95aW5nX2VmZmVjdDtcblx0XHRjb25zdCBwcmV2aW91c19yZWFjdGlvbiA9IGFjdGl2ZV9yZWFjdGlvbjtcblx0XHRzZXRfaXNfZGVzdHJveWluZ19lZmZlY3QodHJ1ZSk7XG5cdFx0c2V0X2FjdGl2ZV9yZWFjdGlvbihudWxsKTtcblx0XHR0cnkge1xuXHRcdFx0dGVhcmRvd24uY2FsbChudWxsKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0X2lzX2Rlc3Ryb3lpbmdfZWZmZWN0KHByZXZpb3VzbHlfZGVzdHJveWluZ19lZmZlY3QpO1xuXHRcdFx0c2V0X2FjdGl2ZV9yZWFjdGlvbihwcmV2aW91c19yZWFjdGlvbik7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFZmZlY3R9IHNpZ25hbFxuICogQHBhcmFtIHtib29sZWFufSByZW1vdmVfZG9tXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lfZWZmZWN0X2NoaWxkcmVuKHNpZ25hbCwgcmVtb3ZlX2RvbSA9IGZhbHNlKSB7XG5cdHZhciBlZmZlY3QgPSBzaWduYWwuZmlyc3Q7XG5cdHNpZ25hbC5maXJzdCA9IHNpZ25hbC5sYXN0ID0gbnVsbDtcblxuXHR3aGlsZSAoZWZmZWN0ICE9PSBudWxsKSB7XG5cdFx0dmFyIG5leHQgPSBlZmZlY3QubmV4dDtcblxuXHRcdGlmICgoZWZmZWN0LmYgJiBST09UX0VGRkVDVCkgIT09IDApIHtcblx0XHRcdC8vIHRoaXMgaXMgbm93IGFuIGluZGVwZW5kZW50IHJvb3Rcblx0XHRcdGVmZmVjdC5wYXJlbnQgPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0cm95X2VmZmVjdChlZmZlY3QsIHJlbW92ZV9kb20pO1xuXHRcdH1cblxuXHRcdGVmZmVjdCA9IG5leHQ7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VmZmVjdH0gc2lnbmFsXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lfYmxvY2tfZWZmZWN0X2NoaWxkcmVuKHNpZ25hbCkge1xuXHR2YXIgZWZmZWN0ID0gc2lnbmFsLmZpcnN0O1xuXG5cdHdoaWxlIChlZmZlY3QgIT09IG51bGwpIHtcblx0XHR2YXIgbmV4dCA9IGVmZmVjdC5uZXh0O1xuXHRcdGlmICgoZWZmZWN0LmYgJiBCUkFOQ0hfRUZGRUNUKSA9PT0gMCkge1xuXHRcdFx0ZGVzdHJveV9lZmZlY3QoZWZmZWN0KTtcblx0XHR9XG5cdFx0ZWZmZWN0ID0gbmV4dDtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbW92ZV9kb21dXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lfZWZmZWN0KGVmZmVjdCwgcmVtb3ZlX2RvbSA9IHRydWUpIHtcblx0dmFyIHJlbW92ZWQgPSBmYWxzZTtcblxuXHRpZiAoKHJlbW92ZV9kb20gfHwgKGVmZmVjdC5mICYgSEVBRF9FRkZFQ1QpICE9PSAwKSAmJiBlZmZlY3Qubm9kZXNfc3RhcnQgIT09IG51bGwpIHtcblx0XHRyZW1vdmVfZWZmZWN0X2RvbShlZmZlY3Qubm9kZXNfc3RhcnQsIC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZWZmZWN0Lm5vZGVzX2VuZCkpO1xuXHRcdHJlbW92ZWQgPSB0cnVlO1xuXHR9XG5cblx0ZGVzdHJveV9lZmZlY3RfY2hpbGRyZW4oZWZmZWN0LCByZW1vdmVfZG9tICYmICFyZW1vdmVkKTtcblx0cmVtb3ZlX3JlYWN0aW9ucyhlZmZlY3QsIDApO1xuXHRzZXRfc2lnbmFsX3N0YXR1cyhlZmZlY3QsIERFU1RST1lFRCk7XG5cblx0dmFyIHRyYW5zaXRpb25zID0gZWZmZWN0LnRyYW5zaXRpb25zO1xuXG5cdGlmICh0cmFuc2l0aW9ucyAhPT0gbnVsbCkge1xuXHRcdGZvciAoY29uc3QgdHJhbnNpdGlvbiBvZiB0cmFuc2l0aW9ucykge1xuXHRcdFx0dHJhbnNpdGlvbi5zdG9wKCk7XG5cdFx0fVxuXHR9XG5cblx0ZXhlY3V0ZV9lZmZlY3RfdGVhcmRvd24oZWZmZWN0KTtcblxuXHR2YXIgcGFyZW50ID0gZWZmZWN0LnBhcmVudDtcblxuXHQvLyBJZiB0aGUgcGFyZW50IGRvZXNuJ3QgaGF2ZSBhbnkgY2hpbGRyZW4sIHRoZW4gc2tpcCB0aGlzIHdvcmsgYWx0b2dldGhlclxuXHRpZiAocGFyZW50ICE9PSBudWxsICYmIHBhcmVudC5maXJzdCAhPT0gbnVsbCkge1xuXHRcdHVubGlua19lZmZlY3QoZWZmZWN0KTtcblx0fVxuXG5cdGlmIChERVYpIHtcblx0XHRlZmZlY3QuY29tcG9uZW50X2Z1bmN0aW9uID0gbnVsbDtcblx0fVxuXG5cdC8vIGBmaXJzdGAgYW5kIGBjaGlsZGAgYXJlIG51bGxlZCBvdXQgaW4gZGVzdHJveV9lZmZlY3RfY2hpbGRyZW5cblx0Ly8gd2UgZG9uJ3QgbnVsbCBvdXQgYHBhcmVudGAgc28gdGhhdCBlcnJvciBwcm9wYWdhdGlvbiBjYW4gd29yayBjb3JyZWN0bHlcblx0ZWZmZWN0Lm5leHQgPVxuXHRcdGVmZmVjdC5wcmV2ID1cblx0XHRlZmZlY3QudGVhcmRvd24gPVxuXHRcdGVmZmVjdC5jdHggPVxuXHRcdGVmZmVjdC5kZXBzID1cblx0XHRlZmZlY3QuZm4gPVxuXHRcdGVmZmVjdC5ub2Rlc19zdGFydCA9XG5cdFx0ZWZmZWN0Lm5vZGVzX2VuZCA9XG5cdFx0XHRudWxsO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1RlbXBsYXRlTm9kZSB8IG51bGx9IG5vZGVcbiAqIEBwYXJhbSB7VGVtcGxhdGVOb2RlfSBlbmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZV9lZmZlY3RfZG9tKG5vZGUsIGVuZCkge1xuXHR3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuXHRcdC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlIHwgbnVsbH0gKi9cblx0XHR2YXIgbmV4dCA9IG5vZGUgPT09IGVuZCA/IG51bGwgOiAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9uZXh0X3NpYmxpbmcobm9kZSkpO1xuXG5cdFx0bm9kZS5yZW1vdmUoKTtcblx0XHRub2RlID0gbmV4dDtcblx0fVxufVxuXG4vKipcbiAqIERldGFjaCBhbiBlZmZlY3QgZnJvbSB0aGUgZWZmZWN0IHRyZWUsIGZyZWVpbmcgdXAgbWVtb3J5IGFuZFxuICogcmVkdWNpbmcgdGhlIGFtb3VudCBvZiB3b3JrIHRoYXQgaGFwcGVucyBvbiBzdWJzZXF1ZW50IHRyYXZlcnNhbHNcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVubGlua19lZmZlY3QoZWZmZWN0KSB7XG5cdHZhciBwYXJlbnQgPSBlZmZlY3QucGFyZW50O1xuXHR2YXIgcHJldiA9IGVmZmVjdC5wcmV2O1xuXHR2YXIgbmV4dCA9IGVmZmVjdC5uZXh0O1xuXG5cdGlmIChwcmV2ICE9PSBudWxsKSBwcmV2Lm5leHQgPSBuZXh0O1xuXHRpZiAobmV4dCAhPT0gbnVsbCkgbmV4dC5wcmV2ID0gcHJldjtcblxuXHRpZiAocGFyZW50ICE9PSBudWxsKSB7XG5cdFx0aWYgKHBhcmVudC5maXJzdCA9PT0gZWZmZWN0KSBwYXJlbnQuZmlyc3QgPSBuZXh0O1xuXHRcdGlmIChwYXJlbnQubGFzdCA9PT0gZWZmZWN0KSBwYXJlbnQubGFzdCA9IHByZXY7XG5cdH1cbn1cblxuLyoqXG4gKiBXaGVuIGEgYmxvY2sgZWZmZWN0IGlzIHJlbW92ZWQsIHdlIGRvbid0IGltbWVkaWF0ZWx5IGRlc3Ryb3kgaXQgb3IgeWFuayBpdFxuICogb3V0IG9mIHRoZSBET00sIGJlY2F1c2UgaXQgbWlnaHQgaGF2ZSB0cmFuc2l0aW9ucy4gSW5zdGVhZCwgd2UgJ3BhdXNlJyBpdC5cbiAqIEl0IHN0YXlzIGFyb3VuZCAoaW4gbWVtb3J5LCBhbmQgaW4gdGhlIERPTSkgdW50aWwgb3V0cm8gdHJhbnNpdGlvbnMgaGF2ZVxuICogY29tcGxldGVkLCBhbmQgaWYgdGhlIHN0YXRlIGNoYW5nZSBpcyByZXZlcnNlZCB0aGVuIHdlIF9yZXN1bWVfIGl0LlxuICogQSBwYXVzZWQgZWZmZWN0IGRvZXMgbm90IHVwZGF0ZSwgYW5kIHRoZSBET00gc3VidHJlZSBiZWNvbWVzIGluZXJ0LlxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXVzZV9lZmZlY3QoZWZmZWN0LCBjYWxsYmFjaykge1xuXHQvKiogQHR5cGUge1RyYW5zaXRpb25NYW5hZ2VyW119ICovXG5cdHZhciB0cmFuc2l0aW9ucyA9IFtdO1xuXG5cdHBhdXNlX2NoaWxkcmVuKGVmZmVjdCwgdHJhbnNpdGlvbnMsIHRydWUpO1xuXG5cdHJ1bl9vdXRfdHJhbnNpdGlvbnModHJhbnNpdGlvbnMsICgpID0+IHtcblx0XHRkZXN0cm95X2VmZmVjdChlZmZlY3QpO1xuXHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcblx0fSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUcmFuc2l0aW9uTWFuYWdlcltdfSB0cmFuc2l0aW9uc1xuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVuX291dF90cmFuc2l0aW9ucyh0cmFuc2l0aW9ucywgZm4pIHtcblx0dmFyIHJlbWFpbmluZyA9IHRyYW5zaXRpb25zLmxlbmd0aDtcblx0aWYgKHJlbWFpbmluZyA+IDApIHtcblx0XHR2YXIgY2hlY2sgPSAoKSA9PiAtLXJlbWFpbmluZyB8fCBmbigpO1xuXHRcdGZvciAodmFyIHRyYW5zaXRpb24gb2YgdHJhbnNpdGlvbnMpIHtcblx0XHRcdHRyYW5zaXRpb24ub3V0KGNoZWNrKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm4oKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbk1hbmFnZXJbXX0gdHJhbnNpdGlvbnNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9jYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlX2NoaWxkcmVuKGVmZmVjdCwgdHJhbnNpdGlvbnMsIGxvY2FsKSB7XG5cdGlmICgoZWZmZWN0LmYgJiBJTkVSVCkgIT09IDApIHJldHVybjtcblx0ZWZmZWN0LmYgXj0gSU5FUlQ7XG5cblx0aWYgKGVmZmVjdC50cmFuc2l0aW9ucyAhPT0gbnVsbCkge1xuXHRcdGZvciAoY29uc3QgdHJhbnNpdGlvbiBvZiBlZmZlY3QudHJhbnNpdGlvbnMpIHtcblx0XHRcdGlmICh0cmFuc2l0aW9uLmlzX2dsb2JhbCB8fCBsb2NhbCkge1xuXHRcdFx0XHR0cmFuc2l0aW9ucy5wdXNoKHRyYW5zaXRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHZhciBjaGlsZCA9IGVmZmVjdC5maXJzdDtcblxuXHR3aGlsZSAoY2hpbGQgIT09IG51bGwpIHtcblx0XHR2YXIgc2libGluZyA9IGNoaWxkLm5leHQ7XG5cdFx0dmFyIHRyYW5zcGFyZW50ID0gKGNoaWxkLmYgJiBFRkZFQ1RfVFJBTlNQQVJFTlQpICE9PSAwIHx8IChjaGlsZC5mICYgQlJBTkNIX0VGRkVDVCkgIT09IDA7XG5cdFx0Ly8gVE9ETyB3ZSBkb24ndCBuZWVkIHRvIGNhbGwgcGF1c2VfY2hpbGRyZW4gcmVjdXJzaXZlbHkgd2l0aCBhIGxpbmtlZCBsaXN0IGluIHBsYWNlXG5cdFx0Ly8gaXQncyBzbGlnaHRseSBtb3JlIGludm9sdmVkIHRob3VnaCBhcyB3ZSBoYXZlIHRvIGFjY291bnQgZm9yIGB0cmFuc3BhcmVudGAgY2hhbmdpbmdcblx0XHQvLyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRcdHBhdXNlX2NoaWxkcmVuKGNoaWxkLCB0cmFuc2l0aW9ucywgdHJhbnNwYXJlbnQgPyBsb2NhbCA6IGZhbHNlKTtcblx0XHRjaGlsZCA9IHNpYmxpbmc7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgb3Bwb3NpdGUgb2YgYHBhdXNlX2VmZmVjdGAuIFdlIGNhbGwgdGhpcyBpZiAoZm9yIGV4YW1wbGUpXG4gKiBgeGAgYmVjb21lcyBmYWxzeSB0aGVuIHRydXRoeTogYHsjaWYgeH0uLi57L2lmfWBcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3VtZV9lZmZlY3QoZWZmZWN0KSB7XG5cdHJlc3VtZV9jaGlsZHJlbihlZmZlY3QsIHRydWUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9jYWxcbiAqL1xuZnVuY3Rpb24gcmVzdW1lX2NoaWxkcmVuKGVmZmVjdCwgbG9jYWwpIHtcblx0aWYgKChlZmZlY3QuZiAmIElORVJUKSA9PT0gMCkgcmV0dXJuO1xuXHRlZmZlY3QuZiBePSBJTkVSVDtcblxuXHQvLyBFbnN1cmUgdGhlIGVmZmVjdCBpcyBtYXJrZWQgYXMgY2xlYW4gYWdhaW4gc28gdGhhdCBhbnkgZGlydHkgY2hpbGRcblx0Ly8gZWZmZWN0cyBjYW4gc2NoZWR1bGUgdGhlbXNlbHZlcyBmb3IgZXhlY3V0aW9uXG5cdGlmICgoZWZmZWN0LmYgJiBDTEVBTikgPT09IDApIHtcblx0XHRlZmZlY3QuZiBePSBDTEVBTjtcblx0fVxuXG5cdC8vIElmIGEgZGVwZW5kZW5jeSBvZiB0aGlzIGVmZmVjdCBjaGFuZ2VkIHdoaWxlIGl0IHdhcyBwYXVzZWQsXG5cdC8vIHNjaGVkdWxlIHRoZSBlZmZlY3QgdG8gdXBkYXRlXG5cdGlmIChjaGVja19kaXJ0aW5lc3MoZWZmZWN0KSkge1xuXHRcdHNldF9zaWduYWxfc3RhdHVzKGVmZmVjdCwgRElSVFkpO1xuXHRcdHNjaGVkdWxlX2VmZmVjdChlZmZlY3QpO1xuXHR9XG5cblx0dmFyIGNoaWxkID0gZWZmZWN0LmZpcnN0O1xuXG5cdHdoaWxlIChjaGlsZCAhPT0gbnVsbCkge1xuXHRcdHZhciBzaWJsaW5nID0gY2hpbGQubmV4dDtcblx0XHR2YXIgdHJhbnNwYXJlbnQgPSAoY2hpbGQuZiAmIEVGRkVDVF9UUkFOU1BBUkVOVCkgIT09IDAgfHwgKGNoaWxkLmYgJiBCUkFOQ0hfRUZGRUNUKSAhPT0gMDtcblx0XHQvLyBUT0RPIHdlIGRvbid0IG5lZWQgdG8gY2FsbCByZXN1bWVfY2hpbGRyZW4gcmVjdXJzaXZlbHkgd2l0aCBhIGxpbmtlZCBsaXN0IGluIHBsYWNlXG5cdFx0Ly8gaXQncyBzbGlnaHRseSBtb3JlIGludm9sdmVkIHRob3VnaCBhcyB3ZSBoYXZlIHRvIGFjY291bnQgZm9yIGB0cmFuc3BhcmVudGAgY2hhbmdpbmdcblx0XHQvLyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRcdHJlc3VtZV9jaGlsZHJlbihjaGlsZCwgdHJhbnNwYXJlbnQgPyBsb2NhbCA6IGZhbHNlKTtcblx0XHRjaGlsZCA9IHNpYmxpbmc7XG5cdH1cblxuXHRpZiAoZWZmZWN0LnRyYW5zaXRpb25zICE9PSBudWxsKSB7XG5cdFx0Zm9yIChjb25zdCB0cmFuc2l0aW9uIG9mIGVmZmVjdC50cmFuc2l0aW9ucykge1xuXHRcdFx0aWYgKHRyYW5zaXRpb24uaXNfZ2xvYmFsIHx8IGxvY2FsKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uaW4oKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsICJpbXBvcnQgeyBydW5fYWxsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcblxuLy8gRmFsbGJhY2sgZm9yIHdoZW4gcmVxdWVzdElkbGVDYWxsYmFjayBpcyBub3QgYXZhaWxhYmxlXG5jb25zdCByZXF1ZXN0X2lkbGVfY2FsbGJhY2sgPVxuXHR0eXBlb2YgcmVxdWVzdElkbGVDYWxsYmFjayA9PT0gJ3VuZGVmaW5lZCdcblx0XHQ/ICgvKiogQHR5cGUgeygpID0+IHZvaWR9ICovIGNiKSA9PiBzZXRUaW1lb3V0KGNiLCAxKVxuXHRcdDogcmVxdWVzdElkbGVDYWxsYmFjaztcblxuLyoqIEB0eXBlIHtBcnJheTwoKSA9PiB2b2lkPn0gKi9cbmxldCBtaWNyb190YXNrcyA9IFtdO1xuXG4vKiogQHR5cGUge0FycmF5PCgpID0+IHZvaWQ+fSAqL1xubGV0IGlkbGVfdGFza3MgPSBbXTtcblxuZnVuY3Rpb24gcnVuX21pY3JvX3Rhc2tzKCkge1xuXHR2YXIgdGFza3MgPSBtaWNyb190YXNrcztcblx0bWljcm9fdGFza3MgPSBbXTtcblx0cnVuX2FsbCh0YXNrcyk7XG59XG5cbmZ1bmN0aW9uIHJ1bl9pZGxlX3Rhc2tzKCkge1xuXHR2YXIgdGFza3MgPSBpZGxlX3Rhc2tzO1xuXHRpZGxlX3Rhc2tzID0gW107XG5cdHJ1bl9hbGwodGFza3MpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXVlX21pY3JvX3Rhc2soZm4pIHtcblx0aWYgKG1pY3JvX3Rhc2tzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHF1ZXVlTWljcm90YXNrKHJ1bl9taWNyb190YXNrcyk7XG5cdH1cblxuXHRtaWNyb190YXNrcy5wdXNoKGZuKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWV1ZV9pZGxlX3Rhc2soZm4pIHtcblx0aWYgKGlkbGVfdGFza3MubGVuZ3RoID09PSAwKSB7XG5cdFx0cmVxdWVzdF9pZGxlX2NhbGxiYWNrKHJ1bl9pZGxlX3Rhc2tzKTtcblx0fVxuXG5cdGlkbGVfdGFza3MucHVzaChmbik7XG59XG5cbi8qKlxuICogU3luY2hyb25vdXNseSBydW4gYW55IHF1ZXVlZCB0YXNrcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoX3Rhc2tzKCkge1xuXHRpZiAobWljcm9fdGFza3MubGVuZ3RoID4gMCkge1xuXHRcdHJ1bl9taWNyb190YXNrcygpO1xuXHR9XG5cblx0aWYgKGlkbGVfdGFza3MubGVuZ3RoID4gMCkge1xuXHRcdHJ1bl9pZGxlX3Rhc2tzKCk7XG5cdH1cbn1cbiIsICIvKiogQGltcG9ydCB7IENvbXBvbmVudENvbnRleHQsIERlcml2ZWQsIEVmZmVjdCwgUmVhY3Rpb24sIFNpZ25hbCwgU291cmNlLCBWYWx1ZSB9IGZyb20gJyNjbGllbnQnICovXG5pbXBvcnQgeyBERVYgfSBmcm9tICdlc20tZW52JztcbmltcG9ydCB7IGRlZmluZV9wcm9wZXJ0eSwgZ2V0X2Rlc2NyaXB0b3JzLCBnZXRfcHJvdG90eXBlX29mLCBpbmRleF9vZiB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQge1xuXHRkZXN0cm95X2Jsb2NrX2VmZmVjdF9jaGlsZHJlbixcblx0ZGVzdHJveV9lZmZlY3RfY2hpbGRyZW4sXG5cdGV4ZWN1dGVfZWZmZWN0X3RlYXJkb3duLFxuXHR1bmxpbmtfZWZmZWN0XG59IGZyb20gJy4vcmVhY3Rpdml0eS9lZmZlY3RzLmpzJztcbmltcG9ydCB7XG5cdEVGRkVDVCxcblx0RElSVFksXG5cdE1BWUJFX0RJUlRZLFxuXHRDTEVBTixcblx0REVSSVZFRCxcblx0VU5PV05FRCxcblx0REVTVFJPWUVELFxuXHRJTkVSVCxcblx0QlJBTkNIX0VGRkVDVCxcblx0U1RBVEVfU1lNQk9MLFxuXHRCTE9DS19FRkZFQ1QsXG5cdFJPT1RfRUZGRUNULFxuXHRMRUdBQ1lfREVSSVZFRF9QUk9QLFxuXHRESVNDT05ORUNURUQsXG5cdEJPVU5EQVJZX0VGRkVDVCxcblx0RUZGRUNUX0lTX1VQREFUSU5HXG59IGZyb20gJy4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGZsdXNoX3Rhc2tzIH0gZnJvbSAnLi9kb20vdGFzay5qcyc7XG5pbXBvcnQgeyBpbnRlcm5hbF9zZXQsIG9sZF92YWx1ZXMgfSBmcm9tICcuL3JlYWN0aXZpdHkvc291cmNlcy5qcyc7XG5pbXBvcnQgeyBkZXN0cm95X2Rlcml2ZWRfZWZmZWN0cywgdXBkYXRlX2Rlcml2ZWQgfSBmcm9tICcuL3JlYWN0aXZpdHkvZGVyaXZlZHMuanMnO1xuaW1wb3J0ICogYXMgZSBmcm9tICcuL2Vycm9ycy5qcyc7XG5pbXBvcnQgeyBGSUxFTkFNRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyB0cmFjaW5nX21vZGVfZmxhZyB9IGZyb20gJy4uL2ZsYWdzL2luZGV4LmpzJztcbmltcG9ydCB7IHRyYWNpbmdfZXhwcmVzc2lvbnMsIGdldF9zdGFjayB9IGZyb20gJy4vZGV2L3RyYWNpbmcuanMnO1xuaW1wb3J0IHtcblx0Y29tcG9uZW50X2NvbnRleHQsXG5cdGRldl9jdXJyZW50X2NvbXBvbmVudF9mdW5jdGlvbixcblx0aXNfcnVuZXMsXG5cdHNldF9jb21wb25lbnRfY29udGV4dCxcblx0c2V0X2Rldl9jdXJyZW50X2NvbXBvbmVudF9mdW5jdGlvblxufSBmcm9tICcuL2NvbnRleHQuanMnO1xuaW1wb3J0IHsgaXNfZmlyZWZveCB9IGZyb20gJy4vZG9tL29wZXJhdGlvbnMuanMnO1xuXG4vLyBVc2VkIGZvciBERVYgdGltZSBlcnJvciBoYW5kbGluZ1xuLyoqIEBwYXJhbSB7V2Vha1NldDxFcnJvcj59IHZhbHVlICovXG5jb25zdCBoYW5kbGVkX2Vycm9ycyA9IG5ldyBXZWFrU2V0KCk7XG5sZXQgaXNfdGhyb3dpbmdfZXJyb3IgPSBmYWxzZTtcblxubGV0IGlzX2ZsdXNoaW5nID0gZmFsc2U7XG5cbi8qKiBAdHlwZSB7RWZmZWN0IHwgbnVsbH0gKi9cbmxldCBsYXN0X3NjaGVkdWxlZF9lZmZlY3QgPSBudWxsO1xuXG5sZXQgaXNfdXBkYXRpbmdfZWZmZWN0ID0gZmFsc2U7XG5cbmV4cG9ydCBsZXQgaXNfZGVzdHJveWluZ19lZmZlY3QgPSBmYWxzZTtcblxuLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfaXNfZGVzdHJveWluZ19lZmZlY3QodmFsdWUpIHtcblx0aXNfZGVzdHJveWluZ19lZmZlY3QgPSB2YWx1ZTtcbn1cblxuLy8gSGFuZGxlIGVmZmVjdCBxdWV1ZXNcblxuLyoqIEB0eXBlIHtFZmZlY3RbXX0gKi9cbmxldCBxdWV1ZWRfcm9vdF9lZmZlY3RzID0gW107XG5cbi8qKiBAdHlwZSB7RWZmZWN0W119IFN0YWNrIG9mIGVmZmVjdHMsIGRldiBvbmx5ICovXG5sZXQgZGV2X2VmZmVjdF9zdGFjayA9IFtdO1xuLy8gSGFuZGxlIHNpZ25hbCByZWFjdGl2aXR5IHRyZWUgZGVwZW5kZW5jaWVzIGFuZCByZWFjdGlvbnNcblxuLyoqIEB0eXBlIHtudWxsIHwgUmVhY3Rpb259ICovXG5leHBvcnQgbGV0IGFjdGl2ZV9yZWFjdGlvbiA9IG51bGw7XG5cbmV4cG9ydCBsZXQgdW50cmFja2luZyA9IGZhbHNlO1xuXG4vKiogQHBhcmFtIHtudWxsIHwgUmVhY3Rpb259IHJlYWN0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2FjdGl2ZV9yZWFjdGlvbihyZWFjdGlvbikge1xuXHRhY3RpdmVfcmVhY3Rpb24gPSByZWFjdGlvbjtcbn1cblxuLyoqIEB0eXBlIHtudWxsIHwgRWZmZWN0fSAqL1xuZXhwb3J0IGxldCBhY3RpdmVfZWZmZWN0ID0gbnVsbDtcblxuLyoqIEBwYXJhbSB7bnVsbCB8IEVmZmVjdH0gZWZmZWN0ICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2FjdGl2ZV9lZmZlY3QoZWZmZWN0KSB7XG5cdGFjdGl2ZV9lZmZlY3QgPSBlZmZlY3Q7XG59XG5cbi8qKlxuICogV2hlbiBzb3VyY2VzIGFyZSBjcmVhdGVkIHdpdGhpbiBhIHJlYWN0aW9uLCByZWFkaW5nIGFuZCB3cml0aW5nXG4gKiB0aGVtIHNob3VsZCBub3QgY2F1c2UgYSByZS1ydW5cbiAqIEB0eXBlIHtudWxsIHwgU291cmNlW119XG4gKi9cbmV4cG9ydCBsZXQgcmVhY3Rpb25fc291cmNlcyA9IG51bGw7XG5cbi8qKiBAcGFyYW0ge1ZhbHVlfSB2YWx1ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1c2hfcmVhY3Rpb25fdmFsdWUodmFsdWUpIHtcblx0aWYgKGFjdGl2ZV9yZWFjdGlvbiAhPT0gbnVsbCAmJiBhY3RpdmVfcmVhY3Rpb24uZiAmIEVGRkVDVF9JU19VUERBVElORykge1xuXHRcdGlmIChyZWFjdGlvbl9zb3VyY2VzID09PSBudWxsKSB7XG5cdFx0XHRyZWFjdGlvbl9zb3VyY2VzID0gW3ZhbHVlXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVhY3Rpb25fc291cmNlcy5wdXNoKHZhbHVlKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgZGVwZW5kZW5jaWVzIG9mIHRoZSByZWFjdGlvbiB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBleGVjdXRlZC4gSW4gbWFueSBjYXNlcyxcbiAqIHRoZSBkZXBlbmRlbmNpZXMgYXJlIHVuY2hhbmdlZCBiZXR3ZWVuIHJ1bnMsIGFuZCBzbyB0aGlzIHdpbGwgYmUgYG51bGxgIHVubGVzc1xuICogYW5kIHVudGlsIGEgbmV3IGRlcGVuZGVuY3kgaXMgYWNjZXNzZWQgXHUyMDE0IHdlIHRyYWNrIHRoaXMgdmlhIGBza2lwcGVkX2RlcHNgXG4gKiBAdHlwZSB7bnVsbCB8IFZhbHVlW119XG4gKi9cbmxldCBuZXdfZGVwcyA9IG51bGw7XG5cbmxldCBza2lwcGVkX2RlcHMgPSAwO1xuXG4vKipcbiAqIFRyYWNrcyB3cml0ZXMgdGhhdCB0aGUgZWZmZWN0IGl0J3MgZXhlY3V0ZWQgaW4gZG9lc24ndCBsaXN0ZW4gdG8geWV0LFxuICogc28gdGhhdCB0aGUgZGVwZW5kZW5jeSBjYW4gYmUgYWRkZWQgdG8gdGhlIGVmZmVjdCBsYXRlciBvbiBpZiBpdCB0aGVuIHJlYWRzIGl0XG4gKiBAdHlwZSB7bnVsbCB8IFNvdXJjZVtdfVxuICovXG5leHBvcnQgbGV0IHVudHJhY2tlZF93cml0ZXMgPSBudWxsO1xuXG4vKiogQHBhcmFtIHtudWxsIHwgU291cmNlW119IHZhbHVlICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X3VudHJhY2tlZF93cml0ZXModmFsdWUpIHtcblx0dW50cmFja2VkX3dyaXRlcyA9IHZhbHVlO1xufVxuXG4vKipcbiAqIEB0eXBlIHtudW1iZXJ9IFVzZWQgYnkgc291cmNlcyBhbmQgZGVyaXZlZHMgZm9yIGhhbmRsaW5nIHVwZGF0ZXMuXG4gKiBWZXJzaW9uIHN0YXJ0cyBmcm9tIDEgc28gdGhhdCB1bm93bmVkIGRlcml2ZWRzIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBhIGNyZWF0ZWQgZWZmZWN0IGFuZCBhIHJ1biBvbmUgZm9yIHRyYWNpbmdcbiAqKi9cbmxldCB3cml0ZV92ZXJzaW9uID0gMTtcblxuLyoqIEB0eXBlIHtudW1iZXJ9IFVzZWQgdG8gdmVyc2lvbiBlYWNoIHJlYWQgb2YgYSBzb3VyY2Ugb2YgZGVyaXZlZCB0byBhdm9pZCBkdXBsaWNhdGluZyBkZXBlZGVuY2llcyBpbnNpZGUgYSByZWFjdGlvbiAqL1xubGV0IHJlYWRfdmVyc2lvbiA9IDA7XG5cbi8vIElmIHdlIGFyZSB3b3JraW5nIHdpdGggYSBnZXQoKSBjaGFpbiB0aGF0IGhhcyBubyBhY3RpdmUgY29udGFpbmVyLFxuLy8gdG8gcHJldmVudCBtZW1vcnkgbGVha3MsIHdlIHNraXAgYWRkaW5nIHRoZSByZWFjdGlvbi5cbmV4cG9ydCBsZXQgc2tpcF9yZWFjdGlvbiA9IGZhbHNlO1xuLy8gSGFuZGxlIGNvbGxlY3RpbmcgYWxsIHNpZ25hbHMgd2hpY2ggYXJlIHJlYWQgZHVyaW5nIGEgc3BlY2lmaWMgdGltZSBmcmFtZVxuLyoqIEB0eXBlIHtTZXQ8VmFsdWU+IHwgbnVsbH0gKi9cbmV4cG9ydCBsZXQgY2FwdHVyZWRfc2lnbmFscyA9IG51bGw7XG5cbi8qKiBAcGFyYW0ge1NldDxWYWx1ZT4gfCBudWxsfSB2YWx1ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9jYXB0dXJlZF9zaWduYWxzKHZhbHVlKSB7XG5cdGNhcHR1cmVkX3NpZ25hbHMgPSB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudF93cml0ZV92ZXJzaW9uKCkge1xuXHRyZXR1cm4gKyt3cml0ZV92ZXJzaW9uO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGRlcml2ZWQgb3IgZWZmZWN0IGlzIGRpcnR5LlxuICogSWYgaXQgaXMgTUFZQkVfRElSVFksIHdpbGwgc2V0IHRoZSBzdGF0dXMgdG8gQ0xFQU5cbiAqIEBwYXJhbSB7UmVhY3Rpb259IHJlYWN0aW9uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX2RpcnRpbmVzcyhyZWFjdGlvbikge1xuXHR2YXIgZmxhZ3MgPSByZWFjdGlvbi5mO1xuXG5cdGlmICgoZmxhZ3MgJiBESVJUWSkgIT09IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICgoZmxhZ3MgJiBNQVlCRV9ESVJUWSkgIT09IDApIHtcblx0XHR2YXIgZGVwZW5kZW5jaWVzID0gcmVhY3Rpb24uZGVwcztcblx0XHR2YXIgaXNfdW5vd25lZCA9IChmbGFncyAmIFVOT1dORUQpICE9PSAwO1xuXG5cdFx0aWYgKGRlcGVuZGVuY2llcyAhPT0gbnVsbCkge1xuXHRcdFx0dmFyIGk7XG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdHZhciBpc19kaXNjb25uZWN0ZWQgPSAoZmxhZ3MgJiBESVNDT05ORUNURUQpICE9PSAwO1xuXHRcdFx0dmFyIGlzX3Vub3duZWRfY29ubmVjdGVkID0gaXNfdW5vd25lZCAmJiBhY3RpdmVfZWZmZWN0ICE9PSBudWxsICYmICFza2lwX3JlYWN0aW9uO1xuXHRcdFx0dmFyIGxlbmd0aCA9IGRlcGVuZGVuY2llcy5sZW5ndGg7XG5cblx0XHRcdC8vIElmIHdlIGFyZSB3b3JraW5nIHdpdGggYSBkaXNjb25uZWN0ZWQgb3IgYW4gdW5vd25lZCBzaWduYWwgdGhhdCBpcyBub3cgY29ubmVjdGVkIChkdWUgdG8gYW4gYWN0aXZlIGVmZmVjdClcblx0XHRcdC8vIHRoZW4gd2UgbmVlZCB0byByZS1jb25uZWN0IHRoZSByZWFjdGlvbiB0byB0aGUgZGVwZW5kZW5jeVxuXHRcdFx0aWYgKGlzX2Rpc2Nvbm5lY3RlZCB8fCBpc191bm93bmVkX2Nvbm5lY3RlZCkge1xuXHRcdFx0XHR2YXIgZGVyaXZlZCA9IC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKHJlYWN0aW9uKTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IGRlcml2ZWQucGFyZW50O1xuXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBkZXBlbmRlbmNpZXNbaV07XG5cblx0XHRcdFx0XHQvLyBXZSBhbHdheXMgcmUtYWRkIGFsbCByZWFjdGlvbnMgKGV2ZW4gZHVwbGljYXRlcykgaWYgdGhlIGRlcml2ZWQgd2FzXG5cdFx0XHRcdFx0Ly8gcHJldmlvdXNseSBkaXNjb25uZWN0ZWQsIGhvd2V2ZXIgd2UgZG9uJ3QgaWYgaXQgd2FzIHVub3duZWQgYXMgd2Vcblx0XHRcdFx0XHQvLyBkZS1kdXBsaWNhdGUgZGVwZW5kZW5jaWVzIGluIHRoYXQgY2FzZVxuXHRcdFx0XHRcdGlmIChpc19kaXNjb25uZWN0ZWQgfHwgIWRlcGVuZGVuY3k/LnJlYWN0aW9ucz8uaW5jbHVkZXMoZGVyaXZlZCkpIHtcblx0XHRcdFx0XHRcdChkZXBlbmRlbmN5LnJlYWN0aW9ucyA/Pz0gW10pLnB1c2goZGVyaXZlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzX2Rpc2Nvbm5lY3RlZCkge1xuXHRcdFx0XHRcdGRlcml2ZWQuZiBePSBESVNDT05ORUNURUQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gSWYgdGhlIHVub3duZWQgZGVyaXZlZCBpcyBub3cgZnVsbHkgY29ubmVjdGVkIHRvIHRoZSBncmFwaCBhZ2FpbiAoaXQncyB1bm93bmVkIGFuZCByZWNvbm5lY3RlZCwgaGFzIGEgcGFyZW50XG5cdFx0XHRcdC8vIGFuZCB0aGUgcGFyZW50IGlzIG5vdCB1bm93bmVkKSwgdGhlbiB3ZSBjYW4gbWFyayBpdCBhcyBjb25uZWN0ZWQgYWdhaW4sIHJlbW92aW5nIHRoZSBuZWVkIGZvciB0aGUgdW5vd25lZFxuXHRcdFx0XHQvLyBmbGFnXG5cdFx0XHRcdGlmIChpc191bm93bmVkX2Nvbm5lY3RlZCAmJiBwYXJlbnQgIT09IG51bGwgJiYgKHBhcmVudC5mICYgVU5PV05FRCkgPT09IDApIHtcblx0XHRcdFx0XHRkZXJpdmVkLmYgXj0gVU5PV05FRDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZGVwZW5kZW5jeSA9IGRlcGVuZGVuY2llc1tpXTtcblxuXHRcdFx0XHRpZiAoY2hlY2tfZGlydGluZXNzKC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKGRlcGVuZGVuY3kpKSkge1xuXHRcdFx0XHRcdHVwZGF0ZV9kZXJpdmVkKC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKGRlcGVuZGVuY3kpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkZXBlbmRlbmN5Lnd2ID4gcmVhY3Rpb24ud3YpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFVub3duZWQgc2lnbmFscyBzaG91bGQgbmV2ZXIgYmUgbWFya2VkIGFzIGNsZWFuIHVubGVzcyB0aGV5XG5cdFx0Ly8gYXJlIHVzZWQgd2l0aGluIGFuIGFjdGl2ZV9lZmZlY3Qgd2l0aG91dCBza2lwX3JlYWN0aW9uXG5cdFx0aWYgKCFpc191bm93bmVkIHx8IChhY3RpdmVfZWZmZWN0ICE9PSBudWxsICYmICFza2lwX3JlYWN0aW9uKSkge1xuXHRcdFx0c2V0X3NpZ25hbF9zdGF0dXMocmVhY3Rpb24sIENMRUFOKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHt1bmtub3dufSBlcnJvclxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICovXG5mdW5jdGlvbiBwcm9wYWdhdGVfZXJyb3IoZXJyb3IsIGVmZmVjdCkge1xuXHQvKiogQHR5cGUge0VmZmVjdCB8IG51bGx9ICovXG5cdHZhciBjdXJyZW50ID0gZWZmZWN0O1xuXG5cdHdoaWxlIChjdXJyZW50ICE9PSBudWxsKSB7XG5cdFx0aWYgKChjdXJyZW50LmYgJiBCT1VOREFSWV9FRkZFQ1QpICE9PSAwKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0XHRcdGN1cnJlbnQuZm4oZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIGJvdW5kYXJ5IGZsYWcgZnJvbSBlZmZlY3Rcblx0XHRcdFx0Y3VycmVudC5mIF49IEJPVU5EQVJZX0VGRkVDVDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG5cdH1cblxuXHRpc190aHJvd2luZ19lcnJvciA9IGZhbHNlO1xuXHR0aHJvdyBlcnJvcjtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VmZmVjdH0gZWZmZWN0XG4gKi9cbmZ1bmN0aW9uIHNob3VsZF9yZXRocm93X2Vycm9yKGVmZmVjdCkge1xuXHRyZXR1cm4gKFxuXHRcdChlZmZlY3QuZiAmIERFU1RST1lFRCkgPT09IDAgJiZcblx0XHQoZWZmZWN0LnBhcmVudCA9PT0gbnVsbCB8fCAoZWZmZWN0LnBhcmVudC5mICYgQk9VTkRBUllfRUZGRUNUKSA9PT0gMClcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0X2lzX3Rocm93aW5nX2Vycm9yKCkge1xuXHRpc190aHJvd2luZ19lcnJvciA9IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bn0gZXJyb3JcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqIEBwYXJhbSB7RWZmZWN0IHwgbnVsbH0gcHJldmlvdXNfZWZmZWN0XG4gKiBAcGFyYW0ge0NvbXBvbmVudENvbnRleHQgfCBudWxsfSBjb21wb25lbnRfY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlX2Vycm9yKGVycm9yLCBlZmZlY3QsIHByZXZpb3VzX2VmZmVjdCwgY29tcG9uZW50X2NvbnRleHQpIHtcblx0aWYgKGlzX3Rocm93aW5nX2Vycm9yKSB7XG5cdFx0aWYgKHByZXZpb3VzX2VmZmVjdCA9PT0gbnVsbCkge1xuXHRcdFx0aXNfdGhyb3dpbmdfZXJyb3IgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoc2hvdWxkX3JldGhyb3dfZXJyb3IoZWZmZWN0KSkge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHByZXZpb3VzX2VmZmVjdCAhPT0gbnVsbCkge1xuXHRcdGlzX3Rocm93aW5nX2Vycm9yID0gdHJ1ZTtcblx0fVxuXG5cdGlmIChERVYgJiYgY29tcG9uZW50X2NvbnRleHQgIT09IG51bGwgJiYgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhaGFuZGxlZF9lcnJvcnMuaGFzKGVycm9yKSkge1xuXHRcdGhhbmRsZWRfZXJyb3JzLmFkZChlcnJvcik7XG5cblx0XHRjb25zdCBjb21wb25lbnRfc3RhY2sgPSBbXTtcblxuXHRcdGNvbnN0IGVmZmVjdF9uYW1lID0gZWZmZWN0LmZuPy5uYW1lO1xuXG5cdFx0aWYgKGVmZmVjdF9uYW1lKSB7XG5cdFx0XHRjb21wb25lbnRfc3RhY2sucHVzaChlZmZlY3RfbmFtZSk7XG5cdFx0fVxuXG5cdFx0LyoqIEB0eXBlIHtDb21wb25lbnRDb250ZXh0IHwgbnVsbH0gKi9cblx0XHRsZXQgY3VycmVudF9jb250ZXh0ID0gY29tcG9uZW50X2NvbnRleHQ7XG5cblx0XHR3aGlsZSAoY3VycmVudF9jb250ZXh0ICE9PSBudWxsKSB7XG5cdFx0XHQvKiogQHR5cGUge3N0cmluZ30gKi9cblx0XHRcdHZhciBmaWxlbmFtZSA9IGN1cnJlbnRfY29udGV4dC5mdW5jdGlvbj8uW0ZJTEVOQU1FXTtcblxuXHRcdFx0aWYgKGZpbGVuYW1lKSB7XG5cdFx0XHRcdGNvbnN0IGZpbGUgPSBmaWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xuXHRcdFx0XHRjb21wb25lbnRfc3RhY2sucHVzaChmaWxlKTtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudF9jb250ZXh0ID0gY3VycmVudF9jb250ZXh0LnA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5kZW50ID0gaXNfZmlyZWZveCA/ICcgICcgOiAnXFx0Jztcblx0XHRkZWZpbmVfcHJvcGVydHkoZXJyb3IsICdtZXNzYWdlJywge1xuXHRcdFx0dmFsdWU6XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgKyBgXFxuJHtjb21wb25lbnRfc3RhY2subWFwKChuYW1lKSA9PiBgXFxuJHtpbmRlbnR9aW4gJHtuYW1lfWApLmpvaW4oJycpfVxcbmBcblx0XHR9KTtcblx0XHRkZWZpbmVfcHJvcGVydHkoZXJyb3IsICdjb21wb25lbnRfc3RhY2snLCB7XG5cdFx0XHR2YWx1ZTogY29tcG9uZW50X3N0YWNrXG5cdFx0fSk7XG5cblx0XHRjb25zdCBzdGFjayA9IGVycm9yLnN0YWNrO1xuXG5cdFx0Ly8gRmlsdGVyIG91dCBpbnRlcm5hbCBmaWxlcyBmcm9tIGNhbGxzdGFja1xuXHRcdGlmIChzdGFjaykge1xuXHRcdFx0Y29uc3QgbGluZXMgPSBzdGFjay5zcGxpdCgnXFxuJyk7XG5cdFx0XHRjb25zdCBuZXdfbGluZXMgPSBbXTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgbGluZSA9IGxpbmVzW2ldO1xuXHRcdFx0XHRpZiAobGluZS5pbmNsdWRlcygnc3ZlbHRlL3NyYy9pbnRlcm5hbCcpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV3X2xpbmVzLnB1c2gobGluZSk7XG5cdFx0XHR9XG5cdFx0XHRkZWZpbmVfcHJvcGVydHkoZXJyb3IsICdzdGFjaycsIHtcblx0XHRcdFx0dmFsdWU6IG5ld19saW5lcy5qb2luKCdcXG4nKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cHJvcGFnYXRlX2Vycm9yKGVycm9yLCBlZmZlY3QpO1xuXG5cdGlmIChzaG91bGRfcmV0aHJvd19lcnJvcihlZmZlY3QpKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZhbHVlfSBzaWduYWxcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jvb3RdXG4gKi9cbmZ1bmN0aW9uIHNjaGVkdWxlX3Bvc3NpYmxlX2VmZmVjdF9zZWxmX2ludmFsaWRhdGlvbihzaWduYWwsIGVmZmVjdCwgcm9vdCA9IHRydWUpIHtcblx0dmFyIHJlYWN0aW9ucyA9IHNpZ25hbC5yZWFjdGlvbnM7XG5cdGlmIChyZWFjdGlvbnMgPT09IG51bGwpIHJldHVybjtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciByZWFjdGlvbiA9IHJlYWN0aW9uc1tpXTtcblxuXHRcdGlmIChyZWFjdGlvbl9zb3VyY2VzPy5pbmNsdWRlcyhzaWduYWwpKSBjb250aW51ZTtcblxuXHRcdGlmICgocmVhY3Rpb24uZiAmIERFUklWRUQpICE9PSAwKSB7XG5cdFx0XHRzY2hlZHVsZV9wb3NzaWJsZV9lZmZlY3Rfc2VsZl9pbnZhbGlkYXRpb24oLyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAocmVhY3Rpb24pLCBlZmZlY3QsIGZhbHNlKTtcblx0XHR9IGVsc2UgaWYgKGVmZmVjdCA9PT0gcmVhY3Rpb24pIHtcblx0XHRcdGlmIChyb290KSB7XG5cdFx0XHRcdHNldF9zaWduYWxfc3RhdHVzKHJlYWN0aW9uLCBESVJUWSk7XG5cdFx0XHR9IGVsc2UgaWYgKChyZWFjdGlvbi5mICYgQ0xFQU4pICE9PSAwKSB7XG5cdFx0XHRcdHNldF9zaWduYWxfc3RhdHVzKHJlYWN0aW9uLCBNQVlCRV9ESVJUWSk7XG5cdFx0XHR9XG5cdFx0XHRzY2hlZHVsZV9lZmZlY3QoLyoqIEB0eXBlIHtFZmZlY3R9ICovIChyZWFjdGlvbikpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1JlYWN0aW9ufSByZWFjdGlvblxuICogQHJldHVybnMge1Z9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfcmVhY3Rpb24ocmVhY3Rpb24pIHtcblx0dmFyIHByZXZpb3VzX2RlcHMgPSBuZXdfZGVwcztcblx0dmFyIHByZXZpb3VzX3NraXBwZWRfZGVwcyA9IHNraXBwZWRfZGVwcztcblx0dmFyIHByZXZpb3VzX3VudHJhY2tlZF93cml0ZXMgPSB1bnRyYWNrZWRfd3JpdGVzO1xuXHR2YXIgcHJldmlvdXNfcmVhY3Rpb24gPSBhY3RpdmVfcmVhY3Rpb247XG5cdHZhciBwcmV2aW91c19za2lwX3JlYWN0aW9uID0gc2tpcF9yZWFjdGlvbjtcblx0dmFyIHByZXZpb3VzX3JlYWN0aW9uX3NvdXJjZXMgPSByZWFjdGlvbl9zb3VyY2VzO1xuXHR2YXIgcHJldmlvdXNfY29tcG9uZW50X2NvbnRleHQgPSBjb21wb25lbnRfY29udGV4dDtcblx0dmFyIHByZXZpb3VzX3VudHJhY2tpbmcgPSB1bnRyYWNraW5nO1xuXG5cdHZhciBmbGFncyA9IHJlYWN0aW9uLmY7XG5cblx0bmV3X2RlcHMgPSAvKiogQHR5cGUge251bGwgfCBWYWx1ZVtdfSAqLyAobnVsbCk7XG5cdHNraXBwZWRfZGVwcyA9IDA7XG5cdHVudHJhY2tlZF93cml0ZXMgPSBudWxsO1xuXHRza2lwX3JlYWN0aW9uID1cblx0XHQoZmxhZ3MgJiBVTk9XTkVEKSAhPT0gMCAmJiAodW50cmFja2luZyB8fCAhaXNfdXBkYXRpbmdfZWZmZWN0IHx8IGFjdGl2ZV9yZWFjdGlvbiA9PT0gbnVsbCk7XG5cdGFjdGl2ZV9yZWFjdGlvbiA9IChmbGFncyAmIChCUkFOQ0hfRUZGRUNUIHwgUk9PVF9FRkZFQ1QpKSA9PT0gMCA/IHJlYWN0aW9uIDogbnVsbDtcblxuXHRyZWFjdGlvbl9zb3VyY2VzID0gbnVsbDtcblx0c2V0X2NvbXBvbmVudF9jb250ZXh0KHJlYWN0aW9uLmN0eCk7XG5cdHVudHJhY2tpbmcgPSBmYWxzZTtcblx0cmVhZF92ZXJzaW9uKys7XG5cblx0cmVhY3Rpb24uZiB8PSBFRkZFQ1RfSVNfVVBEQVRJTkc7XG5cblx0dHJ5IHtcblx0XHR2YXIgcmVzdWx0ID0gLyoqIEB0eXBlIHtGdW5jdGlvbn0gKi8gKDAsIHJlYWN0aW9uLmZuKSgpO1xuXHRcdHZhciBkZXBzID0gcmVhY3Rpb24uZGVwcztcblxuXHRcdGlmIChuZXdfZGVwcyAhPT0gbnVsbCkge1xuXHRcdFx0dmFyIGk7XG5cblx0XHRcdHJlbW92ZV9yZWFjdGlvbnMocmVhY3Rpb24sIHNraXBwZWRfZGVwcyk7XG5cblx0XHRcdGlmIChkZXBzICE9PSBudWxsICYmIHNraXBwZWRfZGVwcyA+IDApIHtcblx0XHRcdFx0ZGVwcy5sZW5ndGggPSBza2lwcGVkX2RlcHMgKyBuZXdfZGVwcy5sZW5ndGg7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBuZXdfZGVwcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGRlcHNbc2tpcHBlZF9kZXBzICsgaV0gPSBuZXdfZGVwc1tpXTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVhY3Rpb24uZGVwcyA9IGRlcHMgPSBuZXdfZGVwcztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFza2lwX3JlYWN0aW9uKSB7XG5cdFx0XHRcdGZvciAoaSA9IHNraXBwZWRfZGVwczsgaSA8IGRlcHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHQoZGVwc1tpXS5yZWFjdGlvbnMgPz89IFtdKS5wdXNoKHJlYWN0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZGVwcyAhPT0gbnVsbCAmJiBza2lwcGVkX2RlcHMgPCBkZXBzLmxlbmd0aCkge1xuXHRcdFx0cmVtb3ZlX3JlYWN0aW9ucyhyZWFjdGlvbiwgc2tpcHBlZF9kZXBzKTtcblx0XHRcdGRlcHMubGVuZ3RoID0gc2tpcHBlZF9kZXBzO1xuXHRcdH1cblxuXHRcdC8vIElmIHdlJ3JlIGluc2lkZSBhbiBlZmZlY3QgYW5kIHdlIGhhdmUgdW50cmFja2VkIHdyaXRlcywgdGhlbiB3ZSBuZWVkIHRvXG5cdFx0Ly8gZW5zdXJlIHRoYXQgaWYgYW55IG9mIHRob3NlIHVudHJhY2tlZCB3cml0ZXMgcmVzdWx0IGluIHJlLWludmFsaWRhdGlvblxuXHRcdC8vIG9mIHRoZSBjdXJyZW50IGVmZmVjdCwgdGhlbiB0aGF0IGhhcHBlbnMgYWNjb3JkaW5nbHlcblx0XHRpZiAoXG5cdFx0XHRpc19ydW5lcygpICYmXG5cdFx0XHR1bnRyYWNrZWRfd3JpdGVzICE9PSBudWxsICYmXG5cdFx0XHQhdW50cmFja2luZyAmJlxuXHRcdFx0ZGVwcyAhPT0gbnVsbCAmJlxuXHRcdFx0KHJlYWN0aW9uLmYgJiAoREVSSVZFRCB8IE1BWUJFX0RJUlRZIHwgRElSVFkpKSA9PT0gMFxuXHRcdCkge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IC8qKiBAdHlwZSB7U291cmNlW119ICovICh1bnRyYWNrZWRfd3JpdGVzKS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRzY2hlZHVsZV9wb3NzaWJsZV9lZmZlY3Rfc2VsZl9pbnZhbGlkYXRpb24oXG5cdFx0XHRcdFx0dW50cmFja2VkX3dyaXRlc1tpXSxcblx0XHRcdFx0XHQvKiogQHR5cGUge0VmZmVjdH0gKi8gKHJlYWN0aW9uKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIHdlIGFyZSByZXR1cm5pbmcgdG8gYW4gcHJldmlvdXMgcmVhY3Rpb24gdGhlblxuXHRcdC8vIHdlIG5lZWQgdG8gaW5jcmVtZW50IHRoZSByZWFkIHZlcnNpb24gdG8gZW5zdXJlIHRoYXRcblx0XHQvLyBhbnkgZGVwZW5kZW5jaWVzIGluIHRoaXMgcmVhY3Rpb24gYXJlbid0IG1hcmtlZCB3aXRoXG5cdFx0Ly8gdGhlIHNhbWUgdmVyc2lvblxuXHRcdGlmIChwcmV2aW91c19yZWFjdGlvbiAhPT0gbnVsbCAmJiBwcmV2aW91c19yZWFjdGlvbiAhPT0gcmVhY3Rpb24pIHtcblx0XHRcdHJlYWRfdmVyc2lvbisrO1xuXG5cdFx0XHRpZiAodW50cmFja2VkX3dyaXRlcyAhPT0gbnVsbCkge1xuXHRcdFx0XHRpZiAocHJldmlvdXNfdW50cmFja2VkX3dyaXRlcyA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHByZXZpb3VzX3VudHJhY2tlZF93cml0ZXMgPSB1bnRyYWNrZWRfd3JpdGVzO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHByZXZpb3VzX3VudHJhY2tlZF93cml0ZXMucHVzaCguLi4vKiogQHR5cGUge1NvdXJjZVtdfSAqLyAodW50cmFja2VkX3dyaXRlcykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSBmaW5hbGx5IHtcblx0XHRuZXdfZGVwcyA9IHByZXZpb3VzX2RlcHM7XG5cdFx0c2tpcHBlZF9kZXBzID0gcHJldmlvdXNfc2tpcHBlZF9kZXBzO1xuXHRcdHVudHJhY2tlZF93cml0ZXMgPSBwcmV2aW91c191bnRyYWNrZWRfd3JpdGVzO1xuXHRcdGFjdGl2ZV9yZWFjdGlvbiA9IHByZXZpb3VzX3JlYWN0aW9uO1xuXHRcdHNraXBfcmVhY3Rpb24gPSBwcmV2aW91c19za2lwX3JlYWN0aW9uO1xuXHRcdHJlYWN0aW9uX3NvdXJjZXMgPSBwcmV2aW91c19yZWFjdGlvbl9zb3VyY2VzO1xuXHRcdHNldF9jb21wb25lbnRfY29udGV4dChwcmV2aW91c19jb21wb25lbnRfY29udGV4dCk7XG5cdFx0dW50cmFja2luZyA9IHByZXZpb3VzX3VudHJhY2tpbmc7XG5cblx0XHRyZWFjdGlvbi5mIF49IEVGRkVDVF9JU19VUERBVElORztcblx0fVxufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1JlYWN0aW9ufSBzaWduYWxcbiAqIEBwYXJhbSB7VmFsdWU8Vj59IGRlcGVuZGVuY3lcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiByZW1vdmVfcmVhY3Rpb24oc2lnbmFsLCBkZXBlbmRlbmN5KSB7XG5cdGxldCByZWFjdGlvbnMgPSBkZXBlbmRlbmN5LnJlYWN0aW9ucztcblx0aWYgKHJlYWN0aW9ucyAhPT0gbnVsbCkge1xuXHRcdHZhciBpbmRleCA9IGluZGV4X29mLmNhbGwocmVhY3Rpb25zLCBzaWduYWwpO1xuXHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdHZhciBuZXdfbGVuZ3RoID0gcmVhY3Rpb25zLmxlbmd0aCAtIDE7XG5cdFx0XHRpZiAobmV3X2xlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZWFjdGlvbnMgPSBkZXBlbmRlbmN5LnJlYWN0aW9ucyA9IG51bGw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBTd2FwIHdpdGggbGFzdCBlbGVtZW50IGFuZCB0aGVuIHJlbW92ZS5cblx0XHRcdFx0cmVhY3Rpb25zW2luZGV4XSA9IHJlYWN0aW9uc1tuZXdfbGVuZ3RoXTtcblx0XHRcdFx0cmVhY3Rpb25zLnBvcCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyBJZiB0aGUgZGVyaXZlZCBoYXMgbm8gcmVhY3Rpb25zLCB0aGVuIHdlIGNhbiBkaXNjb25uZWN0IGl0IGZyb20gdGhlIGdyYXBoLFxuXHQvLyBhbGxvd2luZyBpdCB0byBlaXRoZXIgcmVjb25uZWN0IGluIHRoZSBmdXR1cmUsIG9yIGJlIEdDJ2QgYnkgdGhlIFZNLlxuXHRpZiAoXG5cdFx0cmVhY3Rpb25zID09PSBudWxsICYmXG5cdFx0KGRlcGVuZGVuY3kuZiAmIERFUklWRUQpICE9PSAwICYmXG5cdFx0Ly8gRGVzdHJveWluZyBhIGNoaWxkIGVmZmVjdCB3aGlsZSB1cGRhdGluZyBhIHBhcmVudCBlZmZlY3QgY2FuIGNhdXNlIGEgZGVwZW5kZW5jeSB0byBhcHBlYXJcblx0XHQvLyB0byBiZSB1bnVzZWQsIHdoZW4gaW4gZmFjdCBpdCBpcyB1c2VkIGJ5IHRoZSBjdXJyZW50bHktdXBkYXRpbmcgcGFyZW50LiBDaGVja2luZyBgbmV3X2RlcHNgXG5cdFx0Ly8gYWxsb3dzIHVzIHRvIHNraXAgdGhlIGV4cGVuc2l2ZSB3b3JrIG9mIGRpc2Nvbm5lY3RpbmcgYW5kIGltbWVkaWF0ZWx5IHJlY29ubmVjdGluZyBpdFxuXHRcdChuZXdfZGVwcyA9PT0gbnVsbCB8fCAhbmV3X2RlcHMuaW5jbHVkZXMoZGVwZW5kZW5jeSkpXG5cdCkge1xuXHRcdHNldF9zaWduYWxfc3RhdHVzKGRlcGVuZGVuY3ksIE1BWUJFX0RJUlRZKTtcblx0XHQvLyBJZiB3ZSBhcmUgd29ya2luZyB3aXRoIGEgZGVyaXZlZCB0aGF0IGlzIG93bmVkIGJ5IGFuIGVmZmVjdCwgdGhlbiBtYXJrIGl0IGFzIGJlaW5nXG5cdFx0Ly8gZGlzY29ubmVjdGVkLlxuXHRcdGlmICgoZGVwZW5kZW5jeS5mICYgKFVOT1dORUQgfCBESVNDT05ORUNURUQpKSA9PT0gMCkge1xuXHRcdFx0ZGVwZW5kZW5jeS5mIF49IERJU0NPTk5FQ1RFRDtcblx0XHR9XG5cdFx0Ly8gRGlzY29ubmVjdCBhbnkgcmVhY3Rpb25zIG93bmVkIGJ5IHRoaXMgcmVhY3Rpb25cblx0XHRkZXN0cm95X2Rlcml2ZWRfZWZmZWN0cygvKiogQHR5cGUge0Rlcml2ZWR9ICoqLyAoZGVwZW5kZW5jeSkpO1xuXHRcdHJlbW92ZV9yZWFjdGlvbnMoLyoqIEB0eXBlIHtEZXJpdmVkfSAqKi8gKGRlcGVuZGVuY3kpLCAwKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVhY3Rpb259IHNpZ25hbFxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0X2luZGV4XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZV9yZWFjdGlvbnMoc2lnbmFsLCBzdGFydF9pbmRleCkge1xuXHR2YXIgZGVwZW5kZW5jaWVzID0gc2lnbmFsLmRlcHM7XG5cdGlmIChkZXBlbmRlbmNpZXMgPT09IG51bGwpIHJldHVybjtcblxuXHRmb3IgKHZhciBpID0gc3RhcnRfaW5kZXg7IGkgPCBkZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRyZW1vdmVfcmVhY3Rpb24oc2lnbmFsLCBkZXBlbmRlbmNpZXNbaV0pO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfZWZmZWN0KGVmZmVjdCkge1xuXHR2YXIgZmxhZ3MgPSBlZmZlY3QuZjtcblxuXHRpZiAoKGZsYWdzICYgREVTVFJPWUVEKSAhPT0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHNldF9zaWduYWxfc3RhdHVzKGVmZmVjdCwgQ0xFQU4pO1xuXG5cdHZhciBwcmV2aW91c19lZmZlY3QgPSBhY3RpdmVfZWZmZWN0O1xuXHR2YXIgcHJldmlvdXNfY29tcG9uZW50X2NvbnRleHQgPSBjb21wb25lbnRfY29udGV4dDtcblx0dmFyIHdhc191cGRhdGluZ19lZmZlY3QgPSBpc191cGRhdGluZ19lZmZlY3Q7XG5cblx0YWN0aXZlX2VmZmVjdCA9IGVmZmVjdDtcblx0aXNfdXBkYXRpbmdfZWZmZWN0ID0gdHJ1ZTtcblxuXHRpZiAoREVWKSB7XG5cdFx0dmFyIHByZXZpb3VzX2NvbXBvbmVudF9mbiA9IGRldl9jdXJyZW50X2NvbXBvbmVudF9mdW5jdGlvbjtcblx0XHRzZXRfZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uKGVmZmVjdC5jb21wb25lbnRfZnVuY3Rpb24pO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRpZiAoKGZsYWdzICYgQkxPQ0tfRUZGRUNUKSAhPT0gMCkge1xuXHRcdFx0ZGVzdHJveV9ibG9ja19lZmZlY3RfY2hpbGRyZW4oZWZmZWN0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVzdHJveV9lZmZlY3RfY2hpbGRyZW4oZWZmZWN0KTtcblx0XHR9XG5cblx0XHRleGVjdXRlX2VmZmVjdF90ZWFyZG93bihlZmZlY3QpO1xuXHRcdHZhciB0ZWFyZG93biA9IHVwZGF0ZV9yZWFjdGlvbihlZmZlY3QpO1xuXHRcdGVmZmVjdC50ZWFyZG93biA9IHR5cGVvZiB0ZWFyZG93biA9PT0gJ2Z1bmN0aW9uJyA/IHRlYXJkb3duIDogbnVsbDtcblx0XHRlZmZlY3Qud3YgPSB3cml0ZV92ZXJzaW9uO1xuXG5cdFx0dmFyIGRlcHMgPSBlZmZlY3QuZGVwcztcblxuXHRcdC8vIEluIERFViwgd2UgbmVlZCB0byBoYW5kbGUgYSBjYXNlIHdoZXJlICRpbnNwZWN0LnRyYWNlKCkgbWlnaHRcblx0XHQvLyBpbmNvcnJlY3RseSBzdGF0ZSBhIHNvdXJjZSBkZXBlbmRlbmN5IGhhcyBub3QgY2hhbmdlZCB3aGVuIGl0IGhhcy5cblx0XHQvLyBUaGF0J3MgYmVhY3VzZSB0aGF0IHNvdXJjZSB3YXMgY2hhbmdlZCBieSB0aGUgc2FtZSBlZmZlY3QsIGNhdXNpbmdcblx0XHQvLyB0aGUgdmVyc2lvbnMgdG8gbWF0Y2guIFdlIGNhbiBhdm9pZCB0aGlzIGJ5IGluY3JlbWVudGluZyB0aGUgdmVyc2lvblxuXHRcdGlmIChERVYgJiYgdHJhY2luZ19tb2RlX2ZsYWcgJiYgKGVmZmVjdC5mICYgRElSVFkpICE9PSAwICYmIGRlcHMgIT09IG51bGwpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGVwcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgZGVwID0gZGVwc1tpXTtcblx0XHRcdFx0aWYgKGRlcC50cmFjZV9uZWVkX2luY3JlYXNlKSB7XG5cdFx0XHRcdFx0ZGVwLnd2ID0gaW5jcmVtZW50X3dyaXRlX3ZlcnNpb24oKTtcblx0XHRcdFx0XHRkZXAudHJhY2VfbmVlZF9pbmNyZWFzZSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRkZXAudHJhY2VfdiA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChERVYpIHtcblx0XHRcdGRldl9lZmZlY3Rfc3RhY2sucHVzaChlZmZlY3QpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRoYW5kbGVfZXJyb3IoZXJyb3IsIGVmZmVjdCwgcHJldmlvdXNfZWZmZWN0LCBwcmV2aW91c19jb21wb25lbnRfY29udGV4dCB8fCBlZmZlY3QuY3R4KTtcblx0fSBmaW5hbGx5IHtcblx0XHRpc191cGRhdGluZ19lZmZlY3QgPSB3YXNfdXBkYXRpbmdfZWZmZWN0O1xuXHRcdGFjdGl2ZV9lZmZlY3QgPSBwcmV2aW91c19lZmZlY3Q7XG5cblx0XHRpZiAoREVWKSB7XG5cdFx0XHRzZXRfZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uKHByZXZpb3VzX2NvbXBvbmVudF9mbik7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxvZ19lZmZlY3Rfc3RhY2soKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdGNvbnNvbGUuZXJyb3IoXG5cdFx0J0xhc3QgdGVuIGVmZmVjdHMgd2VyZTogJyxcblx0XHRkZXZfZWZmZWN0X3N0YWNrLnNsaWNlKC0xMCkubWFwKChkKSA9PiBkLmZuKVxuXHQpO1xuXHRkZXZfZWZmZWN0X3N0YWNrID0gW107XG59XG5cbmZ1bmN0aW9uIGluZmluaXRlX2xvb3BfZ3VhcmQoKSB7XG5cdHRyeSB7XG5cdFx0ZS5lZmZlY3RfdXBkYXRlX2RlcHRoX2V4Y2VlZGVkKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKERFVikge1xuXHRcdFx0Ly8gc3RhY2sgaXMgZ2FyYmFnZSwgaWdub3JlLiBJbnN0ZWFkIGFkZCBhIGNvbnNvbGUuZXJyb3IgbWVzc2FnZS5cblx0XHRcdGRlZmluZV9wcm9wZXJ0eShlcnJvciwgJ3N0YWNrJywge1xuXHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQvLyBUcnkgYW5kIGhhbmRsZSB0aGUgZXJyb3Igc28gaXQgY2FuIGJlIGNhdWdodCBhdCBhIGJvdW5kYXJ5LCB0aGF0J3Ncblx0XHQvLyBpZiB0aGVyZSdzIGFuIGVmZmVjdCBhdmFpbGFibGUgZnJvbSB3aGVuIGl0IHdhcyBsYXN0IHNjaGVkdWxlZFxuXHRcdGlmIChsYXN0X3NjaGVkdWxlZF9lZmZlY3QgIT09IG51bGwpIHtcblx0XHRcdGlmIChERVYpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRoYW5kbGVfZXJyb3IoZXJyb3IsIGxhc3Rfc2NoZWR1bGVkX2VmZmVjdCwgbnVsbCwgbnVsbCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHQvLyBPbmx5IGxvZyB0aGUgZWZmZWN0IHN0YWNrIGlmIHRoZSBlcnJvciBpcyByZS10aHJvd25cblx0XHRcdFx0XHRsb2dfZWZmZWN0X3N0YWNrKCk7XG5cdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlX2Vycm9yKGVycm9yLCBsYXN0X3NjaGVkdWxlZF9lZmZlY3QsIG51bGwsIG51bGwpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoREVWKSB7XG5cdFx0XHRcdGxvZ19lZmZlY3Rfc3RhY2soKTtcblx0XHRcdH1cblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBmbHVzaF9xdWV1ZWRfcm9vdF9lZmZlY3RzKCkge1xuXHR2YXIgd2FzX3VwZGF0aW5nX2VmZmVjdCA9IGlzX3VwZGF0aW5nX2VmZmVjdDtcblxuXHR0cnkge1xuXHRcdHZhciBmbHVzaF9jb3VudCA9IDA7XG5cdFx0aXNfdXBkYXRpbmdfZWZmZWN0ID0gdHJ1ZTtcblxuXHRcdHdoaWxlIChxdWV1ZWRfcm9vdF9lZmZlY3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdGlmIChmbHVzaF9jb3VudCsrID4gMTAwMCkge1xuXHRcdFx0XHRpbmZpbml0ZV9sb29wX2d1YXJkKCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciByb290X2VmZmVjdHMgPSBxdWV1ZWRfcm9vdF9lZmZlY3RzO1xuXHRcdFx0dmFyIGxlbmd0aCA9IHJvb3RfZWZmZWN0cy5sZW5ndGg7XG5cblx0XHRcdHF1ZXVlZF9yb290X2VmZmVjdHMgPSBbXTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgY29sbGVjdGVkX2VmZmVjdHMgPSBwcm9jZXNzX2VmZmVjdHMocm9vdF9lZmZlY3RzW2ldKTtcblx0XHRcdFx0Zmx1c2hfcXVldWVkX2VmZmVjdHMoY29sbGVjdGVkX2VmZmVjdHMpO1xuXHRcdFx0fVxuXHRcdFx0b2xkX3ZhbHVlcy5jbGVhcigpO1xuXHRcdH1cblx0fSBmaW5hbGx5IHtcblx0XHRpc19mbHVzaGluZyA9IGZhbHNlO1xuXHRcdGlzX3VwZGF0aW5nX2VmZmVjdCA9IHdhc191cGRhdGluZ19lZmZlY3Q7XG5cblx0XHRsYXN0X3NjaGVkdWxlZF9lZmZlY3QgPSBudWxsO1xuXHRcdGlmIChERVYpIHtcblx0XHRcdGRldl9lZmZlY3Rfc3RhY2sgPSBbXTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PEVmZmVjdD59IGVmZmVjdHNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBmbHVzaF9xdWV1ZWRfZWZmZWN0cyhlZmZlY3RzKSB7XG5cdHZhciBsZW5ndGggPSBlZmZlY3RzLmxlbmd0aDtcblx0aWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZWZmZWN0ID0gZWZmZWN0c1tpXTtcblxuXHRcdGlmICgoZWZmZWN0LmYgJiAoREVTVFJPWUVEIHwgSU5FUlQpKSA9PT0gMCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKGNoZWNrX2RpcnRpbmVzcyhlZmZlY3QpKSB7XG5cdFx0XHRcdFx0dXBkYXRlX2VmZmVjdChlZmZlY3QpO1xuXG5cdFx0XHRcdFx0Ly8gRWZmZWN0cyB3aXRoIG5vIGRlcGVuZGVuY2llcyBvciB0ZWFyZG93biBkbyBub3QgZ2V0IGFkZGVkIHRvIHRoZSBlZmZlY3QgdHJlZS5cblx0XHRcdFx0XHQvLyBEZWZlcnJlZCBlZmZlY3RzIChlLmcuIGAkZWZmZWN0KC4uLilgKSBfYXJlXyBhZGRlZCB0byB0aGUgdHJlZSBiZWNhdXNlIHdlXG5cdFx0XHRcdFx0Ly8gZG9uJ3Qga25vdyBpZiB3ZSBuZWVkIHRvIGtlZXAgdGhlbSB1bnRpbCB0aGV5IGFyZSBleGVjdXRlZC4gRG9pbmcgdGhlIGNoZWNrXG5cdFx0XHRcdFx0Ly8gaGVyZSAocmF0aGVyIHRoYW4gaW4gYHVwZGF0ZV9lZmZlY3RgKSBhbGxvd3MgdXMgdG8gc2tpcCB0aGUgd29yayBmb3Jcblx0XHRcdFx0XHQvLyBpbW1lZGlhdGUgZWZmZWN0cy5cblx0XHRcdFx0XHRpZiAoZWZmZWN0LmRlcHMgPT09IG51bGwgJiYgZWZmZWN0LmZpcnN0ID09PSBudWxsICYmIGVmZmVjdC5ub2Rlc19zdGFydCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0aWYgKGVmZmVjdC50ZWFyZG93biA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHQvLyByZW1vdmUgdGhpcyBlZmZlY3QgZnJvbSB0aGUgZ3JhcGhcblx0XHRcdFx0XHRcdFx0dW5saW5rX2VmZmVjdChlZmZlY3QpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8ga2VlcCB0aGUgZWZmZWN0IGluIHRoZSBncmFwaCwgYnV0IGZyZWUgdXAgc29tZSBtZW1vcnlcblx0XHRcdFx0XHRcdFx0ZWZmZWN0LmZuID0gbnVsbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGhhbmRsZV9lcnJvcihlcnJvciwgZWZmZWN0LCBudWxsLCBlZmZlY3QuY3R4KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VmZmVjdH0gc2lnbmFsXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlX2VmZmVjdChzaWduYWwpIHtcblx0aWYgKCFpc19mbHVzaGluZykge1xuXHRcdGlzX2ZsdXNoaW5nID0gdHJ1ZTtcblx0XHRxdWV1ZU1pY3JvdGFzayhmbHVzaF9xdWV1ZWRfcm9vdF9lZmZlY3RzKTtcblx0fVxuXG5cdHZhciBlZmZlY3QgPSAobGFzdF9zY2hlZHVsZWRfZWZmZWN0ID0gc2lnbmFsKTtcblxuXHR3aGlsZSAoZWZmZWN0LnBhcmVudCAhPT0gbnVsbCkge1xuXHRcdGVmZmVjdCA9IGVmZmVjdC5wYXJlbnQ7XG5cdFx0dmFyIGZsYWdzID0gZWZmZWN0LmY7XG5cblx0XHRpZiAoKGZsYWdzICYgKFJPT1RfRUZGRUNUIHwgQlJBTkNIX0VGRkVDVCkpICE9PSAwKSB7XG5cdFx0XHRpZiAoKGZsYWdzICYgQ0xFQU4pID09PSAwKSByZXR1cm47XG5cdFx0XHRlZmZlY3QuZiBePSBDTEVBTjtcblx0XHR9XG5cdH1cblxuXHRxdWV1ZWRfcm9vdF9lZmZlY3RzLnB1c2goZWZmZWN0KTtcbn1cblxuLyoqXG4gKlxuICogVGhpcyBmdW5jdGlvbiBib3RoIHJ1bnMgcmVuZGVyIGVmZmVjdHMgYW5kIGNvbGxlY3RzIHVzZXIgZWZmZWN0cyBpbiB0b3BvbG9naWNhbCBvcmRlclxuICogZnJvbSB0aGUgc3RhcnRpbmcgZWZmZWN0IHBhc3NlZCBpbi4gRWZmZWN0cyB3aWxsIGJlIGNvbGxlY3RlZCB3aGVuIHRoZXkgbWF0Y2ggdGhlIGZpbHRlcmVkXG4gKiBiaXR3aXNlIGZsYWcgcGFzc2VkIGluIG9ubHkuIFRoZSBjb2xsZWN0ZWQgZWZmZWN0cyBhcnJheSB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIGFsbCB0aGUgdXNlclxuICogZWZmZWN0cyB0byBiZSBmbHVzaGVkLlxuICpcbiAqIEBwYXJhbSB7RWZmZWN0fSByb290XG4gKiBAcmV0dXJucyB7RWZmZWN0W119XG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NfZWZmZWN0cyhyb290KSB7XG5cdC8qKiBAdHlwZSB7RWZmZWN0W119ICovXG5cdHZhciBlZmZlY3RzID0gW107XG5cblx0LyoqIEB0eXBlIHtFZmZlY3QgfCBudWxsfSAqL1xuXHR2YXIgZWZmZWN0ID0gcm9vdDtcblxuXHR3aGlsZSAoZWZmZWN0ICE9PSBudWxsKSB7XG5cdFx0dmFyIGZsYWdzID0gZWZmZWN0LmY7XG5cdFx0dmFyIGlzX2JyYW5jaCA9IChmbGFncyAmIChCUkFOQ0hfRUZGRUNUIHwgUk9PVF9FRkZFQ1QpKSAhPT0gMDtcblx0XHR2YXIgaXNfc2tpcHBhYmxlX2JyYW5jaCA9IGlzX2JyYW5jaCAmJiAoZmxhZ3MgJiBDTEVBTikgIT09IDA7XG5cblx0XHRpZiAoIWlzX3NraXBwYWJsZV9icmFuY2ggJiYgKGZsYWdzICYgSU5FUlQpID09PSAwKSB7XG5cdFx0XHRpZiAoKGZsYWdzICYgRUZGRUNUKSAhPT0gMCkge1xuXHRcdFx0XHRlZmZlY3RzLnB1c2goZWZmZWN0KTtcblx0XHRcdH0gZWxzZSBpZiAoaXNfYnJhbmNoKSB7XG5cdFx0XHRcdGVmZmVjdC5mIF49IENMRUFOO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoY2hlY2tfZGlydGluZXNzKGVmZmVjdCkpIHtcblx0XHRcdFx0XHRcdHVwZGF0ZV9lZmZlY3QoZWZmZWN0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0aGFuZGxlX2Vycm9yKGVycm9yLCBlZmZlY3QsIG51bGwsIGVmZmVjdC5jdHgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qKiBAdHlwZSB7RWZmZWN0IHwgbnVsbH0gKi9cblx0XHRcdHZhciBjaGlsZCA9IGVmZmVjdC5maXJzdDtcblxuXHRcdFx0aWYgKGNoaWxkICE9PSBudWxsKSB7XG5cdFx0XHRcdGVmZmVjdCA9IGNoaWxkO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgcGFyZW50ID0gZWZmZWN0LnBhcmVudDtcblx0XHRlZmZlY3QgPSBlZmZlY3QubmV4dDtcblxuXHRcdHdoaWxlIChlZmZlY3QgPT09IG51bGwgJiYgcGFyZW50ICE9PSBudWxsKSB7XG5cdFx0XHRlZmZlY3QgPSBwYXJlbnQubmV4dDtcblx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVmZmVjdHM7XG59XG5cbi8qKlxuICogU3luY2hyb25vdXNseSBmbHVzaCBhbnkgcGVuZGluZyB1cGRhdGVzLlxuICogUmV0dXJucyB2b2lkIGlmIG5vIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBvdGhlcndpc2UgcmV0dXJucyB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIGNhbGxiYWNrLlxuICogQHRlbXBsYXRlIFtUPXZvaWRdXG4gKiBAcGFyYW0geygoKSA9PiBUKSB8IHVuZGVmaW5lZH0gW2ZuXVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbHVzaFN5bmMoZm4pIHtcblx0dmFyIHJlc3VsdDtcblxuXHRpZiAoZm4pIHtcblx0XHRpc19mbHVzaGluZyA9IHRydWU7XG5cdFx0Zmx1c2hfcXVldWVkX3Jvb3RfZWZmZWN0cygpO1xuXHRcdHJlc3VsdCA9IGZuKCk7XG5cdH1cblxuXHRmbHVzaF90YXNrcygpO1xuXG5cdHdoaWxlIChxdWV1ZWRfcm9vdF9lZmZlY3RzLmxlbmd0aCA+IDApIHtcblx0XHRpc19mbHVzaGluZyA9IHRydWU7XG5cdFx0Zmx1c2hfcXVldWVkX3Jvb3RfZWZmZWN0cygpO1xuXHRcdGZsdXNoX3Rhc2tzKCk7XG5cdH1cblxuXHRyZXR1cm4gLyoqIEB0eXBlIHtUfSAqLyAocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uY2UgYW55IHBlbmRpbmcgc3RhdGUgY2hhbmdlcyBoYXZlIGJlZW4gYXBwbGllZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGljaygpIHtcblx0YXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG5cdC8vIEJ5IGNhbGxpbmcgZmx1c2hTeW5jIHdlIGd1YXJhbnRlZSB0aGF0IGFueSBwZW5kaW5nIHN0YXRlIGNoYW5nZXMgYXJlIGFwcGxpZWQgYWZ0ZXIgb25lIHRpY2suXG5cdC8vIFRPRE8gbG9vayBpbnRvIHdoZXRoZXIgd2UgY2FuIG1ha2UgZmx1c2hpbmcgc3Vic2VxdWVudCB1cGRhdGVzIHN5bmNocm9ub3VzbHkgaW4gdGhlIGZ1dHVyZS5cblx0Zmx1c2hTeW5jKCk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7VmFsdWU8Vj59IHNpZ25hbFxuICogQHJldHVybnMge1Z9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQoc2lnbmFsKSB7XG5cdHZhciBmbGFncyA9IHNpZ25hbC5mO1xuXHR2YXIgaXNfZGVyaXZlZCA9IChmbGFncyAmIERFUklWRUQpICE9PSAwO1xuXG5cdGlmIChjYXB0dXJlZF9zaWduYWxzICE9PSBudWxsKSB7XG5cdFx0Y2FwdHVyZWRfc2lnbmFscy5hZGQoc2lnbmFsKTtcblx0fVxuXG5cdC8vIFJlZ2lzdGVyIHRoZSBkZXBlbmRlbmN5IG9uIHRoZSBjdXJyZW50IHJlYWN0aW9uIHNpZ25hbC5cblx0aWYgKGFjdGl2ZV9yZWFjdGlvbiAhPT0gbnVsbCAmJiAhdW50cmFja2luZykge1xuXHRcdGlmICghcmVhY3Rpb25fc291cmNlcz8uaW5jbHVkZXMoc2lnbmFsKSkge1xuXHRcdFx0dmFyIGRlcHMgPSBhY3RpdmVfcmVhY3Rpb24uZGVwcztcblx0XHRcdGlmIChzaWduYWwucnYgPCByZWFkX3ZlcnNpb24pIHtcblx0XHRcdFx0c2lnbmFsLnJ2ID0gcmVhZF92ZXJzaW9uO1xuXHRcdFx0XHQvLyBJZiB0aGUgc2lnbmFsIGlzIGFjY2Vzc2luZyB0aGUgc2FtZSBkZXBlbmRlbmNpZXMgaW4gdGhlIHNhbWVcblx0XHRcdFx0Ly8gb3JkZXIgYXMgaXQgZGlkIGxhc3QgdGltZSwgaW5jcmVtZW50IGBza2lwcGVkX2RlcHNgXG5cdFx0XHRcdC8vIHJhdGhlciB0aGFuIHVwZGF0aW5nIGBuZXdfZGVwc2AsIHdoaWNoIGNyZWF0ZXMgR0MgY29zdFxuXHRcdFx0XHRpZiAobmV3X2RlcHMgPT09IG51bGwgJiYgZGVwcyAhPT0gbnVsbCAmJiBkZXBzW3NraXBwZWRfZGVwc10gPT09IHNpZ25hbCkge1xuXHRcdFx0XHRcdHNraXBwZWRfZGVwcysrO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5ld19kZXBzID09PSBudWxsKSB7XG5cdFx0XHRcdFx0bmV3X2RlcHMgPSBbc2lnbmFsXTtcblx0XHRcdFx0fSBlbHNlIGlmICghc2tpcF9yZWFjdGlvbiB8fCAhbmV3X2RlcHMuaW5jbHVkZXMoc2lnbmFsKSkge1xuXHRcdFx0XHRcdC8vIE5vcm1hbGx5IHdlIGNhbiBwdXNoIGR1cGxpY2F0ZWQgZGVwZW5kZW5jaWVzIHRvIGBuZXdfZGVwc2AsIGJ1dCBpZiB3ZSdyZSBpbnNpZGVcblx0XHRcdFx0XHQvLyBhbiB1bm93bmVkIGRlcml2ZWQgYmVjYXVzZSBza2lwX3JlYWN0aW9uIGlzIHRydWUsIHRoZW4gd2UgbmVlZCB0byBlbnN1cmUgdGhhdFxuXHRcdFx0XHRcdC8vIHdlIGRvbid0IGhhdmUgZHVwbGljYXRlc1xuXHRcdFx0XHRcdG5ld19kZXBzLnB1c2goc2lnbmFsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmIChcblx0XHRpc19kZXJpdmVkICYmXG5cdFx0LyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAoc2lnbmFsKS5kZXBzID09PSBudWxsICYmXG5cdFx0LyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAoc2lnbmFsKS5lZmZlY3RzID09PSBudWxsXG5cdCkge1xuXHRcdHZhciBkZXJpdmVkID0gLyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAoc2lnbmFsKTtcblx0XHR2YXIgcGFyZW50ID0gZGVyaXZlZC5wYXJlbnQ7XG5cblx0XHRpZiAocGFyZW50ICE9PSBudWxsICYmIChwYXJlbnQuZiAmIFVOT1dORUQpID09PSAwKSB7XG5cdFx0XHQvLyBJZiB0aGUgZGVyaXZlZCBpcyBvd25lZCBieSBhbm90aGVyIGRlcml2ZWQgdGhlbiBtYXJrIGl0IGFzIHVub3duZWRcblx0XHRcdC8vIGFzIHRoZSBkZXJpdmVkIHZhbHVlIG1pZ2h0IGhhdmUgYmVlbiByZWZlcmVuY2VkIGluIGEgZGlmZmVyZW50IGNvbnRleHRcblx0XHRcdC8vIHNpbmNlIGFuZCB0aHVzIGl0cyBwYXJlbnQgbWlnaHQgbm90IGJlIGl0cyB0cnVlIG93bmVyIGFueW1vcmVcblx0XHRcdGRlcml2ZWQuZiBePSBVTk9XTkVEO1xuXHRcdH1cblx0fVxuXG5cdGlmIChpc19kZXJpdmVkKSB7XG5cdFx0ZGVyaXZlZCA9IC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKHNpZ25hbCk7XG5cblx0XHRpZiAoY2hlY2tfZGlydGluZXNzKGRlcml2ZWQpKSB7XG5cdFx0XHR1cGRhdGVfZGVyaXZlZChkZXJpdmVkKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoXG5cdFx0REVWICYmXG5cdFx0dHJhY2luZ19tb2RlX2ZsYWcgJiZcblx0XHR0cmFjaW5nX2V4cHJlc3Npb25zICE9PSBudWxsICYmXG5cdFx0YWN0aXZlX3JlYWN0aW9uICE9PSBudWxsICYmXG5cdFx0dHJhY2luZ19leHByZXNzaW9ucy5yZWFjdGlvbiA9PT0gYWN0aXZlX3JlYWN0aW9uXG5cdCkge1xuXHRcdC8vIFVzZWQgd2hlbiBtYXBwaW5nIHN0YXRlIGJldHdlZW4gc3BlY2lhbCBibG9ja3MgbGlrZSBgZWFjaGBcblx0XHRpZiAoc2lnbmFsLmRlYnVnKSB7XG5cdFx0XHRzaWduYWwuZGVidWcoKTtcblx0XHR9IGVsc2UgaWYgKHNpZ25hbC5jcmVhdGVkKSB7XG5cdFx0XHR2YXIgZW50cnkgPSB0cmFjaW5nX2V4cHJlc3Npb25zLmVudHJpZXMuZ2V0KHNpZ25hbCk7XG5cblx0XHRcdGlmIChlbnRyeSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGVudHJ5ID0geyByZWFkOiBbXSB9O1xuXHRcdFx0XHR0cmFjaW5nX2V4cHJlc3Npb25zLmVudHJpZXMuc2V0KHNpZ25hbCwgZW50cnkpO1xuXHRcdFx0fVxuXG5cdFx0XHRlbnRyeS5yZWFkLnB1c2goZ2V0X3N0YWNrKCdUcmFjZWRBdCcpKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoaXNfZGVzdHJveWluZ19lZmZlY3QgJiYgb2xkX3ZhbHVlcy5oYXMoc2lnbmFsKSkge1xuXHRcdHJldHVybiBvbGRfdmFsdWVzLmdldChzaWduYWwpO1xuXHR9XG5cblx0cmV0dXJuIHNpZ25hbC52O1xufVxuXG4vKipcbiAqIExpa2UgYGdldGAsIGJ1dCBjaGVja3MgZm9yIGB1bmRlZmluZWRgLiBVc2VkIGZvciBgdmFyYCBkZWNsYXJhdGlvbnMgYmVjYXVzZSB0aGV5IGNhbiBiZSBhY2Nlc3NlZCBiZWZvcmUgYmVpbmcgZGVjbGFyZWRcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1ZhbHVlPFY+IHwgdW5kZWZpbmVkfSBzaWduYWxcbiAqIEByZXR1cm5zIHtWIHwgdW5kZWZpbmVkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2FmZV9nZXQoc2lnbmFsKSB7XG5cdHJldHVybiBzaWduYWwgJiYgZ2V0KHNpZ25hbCk7XG59XG5cbi8qKlxuICogQ2FwdHVyZSBhbiBhcnJheSBvZiBhbGwgdGhlIHNpZ25hbHMgdGhhdCBhcmUgcmVhZCB3aGVuIGBmbmAgaXMgY2FsbGVkXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHsoKSA9PiBUfSBmblxuICovXG5mdW5jdGlvbiBjYXB0dXJlX3NpZ25hbHMoZm4pIHtcblx0dmFyIHByZXZpb3VzX2NhcHR1cmVkX3NpZ25hbHMgPSBjYXB0dXJlZF9zaWduYWxzO1xuXHRjYXB0dXJlZF9zaWduYWxzID0gbmV3IFNldCgpO1xuXG5cdHZhciBjYXB0dXJlZCA9IGNhcHR1cmVkX3NpZ25hbHM7XG5cdHZhciBzaWduYWw7XG5cblx0dHJ5IHtcblx0XHR1bnRyYWNrKGZuKTtcblx0XHRpZiAocHJldmlvdXNfY2FwdHVyZWRfc2lnbmFscyAhPT0gbnVsbCkge1xuXHRcdFx0Zm9yIChzaWduYWwgb2YgY2FwdHVyZWRfc2lnbmFscykge1xuXHRcdFx0XHRwcmV2aW91c19jYXB0dXJlZF9zaWduYWxzLmFkZChzaWduYWwpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBmaW5hbGx5IHtcblx0XHRjYXB0dXJlZF9zaWduYWxzID0gcHJldmlvdXNfY2FwdHVyZWRfc2lnbmFscztcblx0fVxuXG5cdHJldHVybiBjYXB0dXJlZDtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGEgZnVuY3Rpb24gYW5kIGNhcHR1cmVzIGFsbCBzaWduYWxzIHRoYXQgYXJlIHJlYWQgZHVyaW5nIHRoZSBpbnZvY2F0aW9uLFxuICogdGhlbiBpbnZhbGlkYXRlcyB0aGVtLlxuICogQHBhcmFtIHsoKSA9PiBhbnl9IGZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlX2lubmVyX3NpZ25hbHMoZm4pIHtcblx0dmFyIGNhcHR1cmVkID0gY2FwdHVyZV9zaWduYWxzKCgpID0+IHVudHJhY2soZm4pKTtcblxuXHRmb3IgKHZhciBzaWduYWwgb2YgY2FwdHVyZWQpIHtcblx0XHQvLyBHbyBvbmUgbGV2ZWwgdXAgYmVjYXVzZSBkZXJpdmVkIHNpZ25hbHMgY3JlYXRlZCBhcyBwYXJ0IG9mIHByb3BzIGluIGxlZ2FjeSBtb2RlXG5cdFx0aWYgKChzaWduYWwuZiAmIExFR0FDWV9ERVJJVkVEX1BST1ApICE9PSAwKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGRlcCBvZiAvKiogQHR5cGUge0Rlcml2ZWR9ICovIChzaWduYWwpLmRlcHMgfHwgW10pIHtcblx0XHRcdFx0aWYgKChkZXAuZiAmIERFUklWRUQpID09PSAwKSB7XG5cdFx0XHRcdFx0Ly8gVXNlIGludGVybmFsX3NldCBpbnN0ZWFkIG9mIHNldCBoZXJlIGFuZCBiZWxvdyB0byBhdm9pZCBtdXRhdGlvbiB2YWxpZGF0aW9uXG5cdFx0XHRcdFx0aW50ZXJuYWxfc2V0KGRlcCwgZGVwLnYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGludGVybmFsX3NldChzaWduYWwsIHNpZ25hbC52KTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBXaGVuIHVzZWQgaW5zaWRlIGEgW2AkZGVyaXZlZGBdKGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS8kZGVyaXZlZCkgb3IgW2AkZWZmZWN0YF0oaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLyRlZmZlY3QpLFxuICogYW55IHN0YXRlIHJlYWQgaW5zaWRlIGBmbmAgd2lsbCBub3QgYmUgdHJlYXRlZCBhcyBhIGRlcGVuZGVuY3kuXG4gKlxuICogYGBgdHNcbiAqICRlZmZlY3QoKCkgPT4ge1xuICogICAvLyB0aGlzIHdpbGwgcnVuIHdoZW4gYGRhdGFgIGNoYW5nZXMsIGJ1dCBub3Qgd2hlbiBgdGltZWAgY2hhbmdlc1xuICogICBzYXZlKGRhdGEsIHtcbiAqICAgICB0aW1lc3RhbXA6IHVudHJhY2soKCkgPT4gdGltZSlcbiAqICAgfSk7XG4gKiB9KTtcbiAqIGBgYFxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7KCkgPT4gVH0gZm5cbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdW50cmFjayhmbikge1xuXHR2YXIgcHJldmlvdXNfdW50cmFja2luZyA9IHVudHJhY2tpbmc7XG5cdHRyeSB7XG5cdFx0dW50cmFja2luZyA9IHRydWU7XG5cdFx0cmV0dXJuIGZuKCk7XG5cdH0gZmluYWxseSB7XG5cdFx0dW50cmFja2luZyA9IHByZXZpb3VzX3VudHJhY2tpbmc7XG5cdH1cbn1cblxuY29uc3QgU1RBVFVTX01BU0sgPSB+KERJUlRZIHwgTUFZQkVfRElSVFkgfCBDTEVBTik7XG5cbi8qKlxuICogQHBhcmFtIHtTaWduYWx9IHNpZ25hbFxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1c1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfc2lnbmFsX3N0YXR1cyhzaWduYWwsIHN0YXR1cykge1xuXHRzaWduYWwuZiA9IChzaWduYWwuZiAmIFNUQVRVU19NQVNLKSB8IHN0YXR1cztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEByZXR1cm5zIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4Y2x1ZGVfZnJvbV9vYmplY3Qob2JqLCBrZXlzKSB7XG5cdC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59ICovXG5cdHZhciByZXN1bHQgPSB7fTtcblxuXHRmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG5cdFx0aWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcblx0XHRcdHJlc3VsdFtrZXldID0gb2JqW2tleV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBQb3NzaWJseSB0cmF2ZXJzZSBhbiBvYmplY3QgYW5kIHJlYWQgYWxsIGl0cyBwcm9wZXJ0aWVzIHNvIHRoYXQgdGhleSdyZSBhbGwgcmVhY3RpdmUgaW4gY2FzZSB0aGlzIGlzIGAkc3RhdGVgLlxuICogRG9lcyBvbmx5IGNoZWNrIGZpcnN0IGxldmVsIG9mIGFuIG9iamVjdCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyAoaGV1cmlzdGljIHNob3VsZCBiZSBnb29kIGZvciA5OSUgb2YgYWxsIGNhc2VzKS5cbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwX3JlYWRfc3RhdGUodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgIXZhbHVlIHx8IHZhbHVlIGluc3RhbmNlb2YgRXZlbnRUYXJnZXQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoU1RBVEVfU1lNQk9MIGluIHZhbHVlKSB7XG5cdFx0ZGVlcF9yZWFkKHZhbHVlKTtcblx0fSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRmb3IgKGxldCBrZXkgaW4gdmFsdWUpIHtcblx0XHRcdGNvbnN0IHByb3AgPSB2YWx1ZVtrZXldO1xuXHRcdFx0aWYgKHR5cGVvZiBwcm9wID09PSAnb2JqZWN0JyAmJiBwcm9wICYmIFNUQVRFX1NZTUJPTCBpbiBwcm9wKSB7XG5cdFx0XHRcdGRlZXBfcmVhZChwcm9wKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBEZWVwbHkgdHJhdmVyc2UgYW4gb2JqZWN0IGFuZCByZWFkIGFsbCBpdHMgcHJvcGVydGllc1xuICogc28gdGhhdCB0aGV5J3JlIGFsbCByZWFjdGl2ZSBpbiBjYXNlIHRoaXMgaXMgYCRzdGF0ZWBcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtTZXQ8YW55Pn0gdmlzaXRlZFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwX3JlYWQodmFsdWUsIHZpc2l0ZWQgPSBuZXcgU2V0KCkpIHtcblx0aWYgKFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdC8vIFdlIGRvbid0IHdhbnQgdG8gdHJhdmVyc2UgRE9NIGVsZW1lbnRzXG5cdFx0ISh2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50VGFyZ2V0KSAmJlxuXHRcdCF2aXNpdGVkLmhhcyh2YWx1ZSlcblx0KSB7XG5cdFx0dmlzaXRlZC5hZGQodmFsdWUpO1xuXHRcdC8vIFdoZW4gd29ya2luZyB3aXRoIGEgcG9zc2libGUgU3ZlbHRlRGF0ZSwgdGhpc1xuXHRcdC8vIHdpbGwgZW5zdXJlIHdlIGNhcHR1cmUgY2hhbmdlcyB0byBpdC5cblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHR2YWx1ZS5nZXRUaW1lKCk7XG5cdFx0fVxuXHRcdGZvciAobGV0IGtleSBpbiB2YWx1ZSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZGVlcF9yZWFkKHZhbHVlW2tleV0sIHZpc2l0ZWQpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHQvLyBjb250aW51ZVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBwcm90byA9IGdldF9wcm90b3R5cGVfb2YodmFsdWUpO1xuXHRcdGlmIChcblx0XHRcdHByb3RvICE9PSBPYmplY3QucHJvdG90eXBlICYmXG5cdFx0XHRwcm90byAhPT0gQXJyYXkucHJvdG90eXBlICYmXG5cdFx0XHRwcm90byAhPT0gTWFwLnByb3RvdHlwZSAmJlxuXHRcdFx0cHJvdG8gIT09IFNldC5wcm90b3R5cGUgJiZcblx0XHRcdHByb3RvICE9PSBEYXRlLnByb3RvdHlwZVxuXHRcdCkge1xuXHRcdFx0Y29uc3QgZGVzY3JpcHRvcnMgPSBnZXRfZGVzY3JpcHRvcnMocHJvdG8pO1xuXHRcdFx0Zm9yIChsZXQga2V5IGluIGRlc2NyaXB0b3JzKSB7XG5cdFx0XHRcdGNvbnN0IGdldCA9IGRlc2NyaXB0b3JzW2tleV0uZ2V0O1xuXHRcdFx0XHRpZiAoZ2V0KSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGdldC5jYWxsKHZhbHVlKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHQvLyBjb250aW51ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwgImNvbnN0IHJlZ2V4X3JldHVybl9jaGFyYWN0ZXJzID0gL1xcci9nO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNoKHN0cikge1xuXHRzdHIgPSBzdHIucmVwbGFjZShyZWdleF9yZXR1cm5fY2hhcmFjdGVycywgJycpO1xuXHRsZXQgaGFzaCA9IDUzODE7XG5cdGxldCBpID0gc3RyLmxlbmd0aDtcblxuXHR3aGlsZSAoaS0tKSBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcblx0cmV0dXJuIChoYXNoID4+PiAwKS50b1N0cmluZygzNik7XG59XG5cbmNvbnN0IFZPSURfRUxFTUVOVF9OQU1FUyA9IFtcblx0J2FyZWEnLFxuXHQnYmFzZScsXG5cdCdicicsXG5cdCdjb2wnLFxuXHQnY29tbWFuZCcsXG5cdCdlbWJlZCcsXG5cdCdocicsXG5cdCdpbWcnLFxuXHQnaW5wdXQnLFxuXHQna2V5Z2VuJyxcblx0J2xpbmsnLFxuXHQnbWV0YScsXG5cdCdwYXJhbScsXG5cdCdzb3VyY2UnLFxuXHQndHJhY2snLFxuXHQnd2JyJ1xuXTtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBgbmFtZWAgaXMgb2YgYSB2b2lkIGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc192b2lkKG5hbWUpIHtcblx0cmV0dXJuIFZPSURfRUxFTUVOVF9OQU1FUy5pbmNsdWRlcyhuYW1lKSB8fCBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICchZG9jdHlwZSc7XG59XG5cbmNvbnN0IFJFU0VSVkVEX1dPUkRTID0gW1xuXHQnYXJndW1lbnRzJyxcblx0J2F3YWl0Jyxcblx0J2JyZWFrJyxcblx0J2Nhc2UnLFxuXHQnY2F0Y2gnLFxuXHQnY2xhc3MnLFxuXHQnY29uc3QnLFxuXHQnY29udGludWUnLFxuXHQnZGVidWdnZXInLFxuXHQnZGVmYXVsdCcsXG5cdCdkZWxldGUnLFxuXHQnZG8nLFxuXHQnZWxzZScsXG5cdCdlbnVtJyxcblx0J2V2YWwnLFxuXHQnZXhwb3J0Jyxcblx0J2V4dGVuZHMnLFxuXHQnZmFsc2UnLFxuXHQnZmluYWxseScsXG5cdCdmb3InLFxuXHQnZnVuY3Rpb24nLFxuXHQnaWYnLFxuXHQnaW1wbGVtZW50cycsXG5cdCdpbXBvcnQnLFxuXHQnaW4nLFxuXHQnaW5zdGFuY2VvZicsXG5cdCdpbnRlcmZhY2UnLFxuXHQnbGV0Jyxcblx0J25ldycsXG5cdCdudWxsJyxcblx0J3BhY2thZ2UnLFxuXHQncHJpdmF0ZScsXG5cdCdwcm90ZWN0ZWQnLFxuXHQncHVibGljJyxcblx0J3JldHVybicsXG5cdCdzdGF0aWMnLFxuXHQnc3VwZXInLFxuXHQnc3dpdGNoJyxcblx0J3RoaXMnLFxuXHQndGhyb3cnLFxuXHQndHJ1ZScsXG5cdCd0cnknLFxuXHQndHlwZW9mJyxcblx0J3ZhcicsXG5cdCd2b2lkJyxcblx0J3doaWxlJyxcblx0J3dpdGgnLFxuXHQneWllbGQnXG5dO1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGB3b3JkYCBpcyBhIHJlc2VydmVkIEphdmFTY3JpcHQga2V5d29yZFxuICogQHBhcmFtIHtzdHJpbmd9IHdvcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX3Jlc2VydmVkKHdvcmQpIHtcblx0cmV0dXJuIFJFU0VSVkVEX1dPUkRTLmluY2x1ZGVzKHdvcmQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19jYXB0dXJlX2V2ZW50KG5hbWUpIHtcblx0cmV0dXJuIG5hbWUuZW5kc1dpdGgoJ2NhcHR1cmUnKSAmJiBuYW1lICE9PSAnZ290cG9pbnRlcmNhcHR1cmUnICYmIG5hbWUgIT09ICdsb3N0cG9pbnRlcmNhcHR1cmUnO1xufVxuXG4vKiogTGlzdCBvZiBFbGVtZW50IGV2ZW50cyB0aGF0IHdpbGwgYmUgZGVsZWdhdGVkICovXG5jb25zdCBERUxFR0FURURfRVZFTlRTID0gW1xuXHQnYmVmb3JlaW5wdXQnLFxuXHQnY2xpY2snLFxuXHQnY2hhbmdlJyxcblx0J2RibGNsaWNrJyxcblx0J2NvbnRleHRtZW51Jyxcblx0J2ZvY3VzaW4nLFxuXHQnZm9jdXNvdXQnLFxuXHQnaW5wdXQnLFxuXHQna2V5ZG93bicsXG5cdCdrZXl1cCcsXG5cdCdtb3VzZWRvd24nLFxuXHQnbW91c2Vtb3ZlJyxcblx0J21vdXNlb3V0Jyxcblx0J21vdXNlb3ZlcicsXG5cdCdtb3VzZXVwJyxcblx0J3BvaW50ZXJkb3duJyxcblx0J3BvaW50ZXJtb3ZlJyxcblx0J3BvaW50ZXJvdXQnLFxuXHQncG9pbnRlcm92ZXInLFxuXHQncG9pbnRlcnVwJyxcblx0J3RvdWNoZW5kJyxcblx0J3RvdWNobW92ZScsXG5cdCd0b3VjaHN0YXJ0J1xuXTtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBgZXZlbnRfbmFtZWAgaXMgYSBkZWxlZ2F0ZWQgZXZlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudF9uYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19kZWxlZ2F0ZWQoZXZlbnRfbmFtZSkge1xuXHRyZXR1cm4gREVMRUdBVEVEX0VWRU5UUy5pbmNsdWRlcyhldmVudF9uYW1lKTtcbn1cblxuLyoqXG4gKiBBdHRyaWJ1dGVzIHRoYXQgYXJlIGJvb2xlYW4sIGkuZS4gdGhleSBhcmUgcHJlc2VudCBvciBub3QgcHJlc2VudC5cbiAqL1xuY29uc3QgRE9NX0JPT0xFQU5fQVRUUklCVVRFUyA9IFtcblx0J2FsbG93ZnVsbHNjcmVlbicsXG5cdCdhc3luYycsXG5cdCdhdXRvZm9jdXMnLFxuXHQnYXV0b3BsYXknLFxuXHQnY2hlY2tlZCcsXG5cdCdjb250cm9scycsXG5cdCdkZWZhdWx0Jyxcblx0J2Rpc2FibGVkJyxcblx0J2Zvcm1ub3ZhbGlkYXRlJyxcblx0J2hpZGRlbicsXG5cdCdpbmRldGVybWluYXRlJyxcblx0J2luZXJ0Jyxcblx0J2lzbWFwJyxcblx0J2xvb3AnLFxuXHQnbXVsdGlwbGUnLFxuXHQnbXV0ZWQnLFxuXHQnbm9tb2R1bGUnLFxuXHQnbm92YWxpZGF0ZScsXG5cdCdvcGVuJyxcblx0J3BsYXlzaW5saW5lJyxcblx0J3JlYWRvbmx5Jyxcblx0J3JlcXVpcmVkJyxcblx0J3JldmVyc2VkJyxcblx0J3NlYW1sZXNzJyxcblx0J3NlbGVjdGVkJyxcblx0J3dlYmtpdGRpcmVjdG9yeScsXG5cdCdkZWZlcicsXG5cdCdkaXNhYmxlcGljdHVyZWlucGljdHVyZScsXG5cdCdkaXNhYmxlcmVtb3RlcGxheWJhY2snXG5dO1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGBuYW1lYCBpcyBhIGJvb2xlYW4gYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfYm9vbGVhbl9hdHRyaWJ1dGUobmFtZSkge1xuXHRyZXR1cm4gRE9NX0JPT0xFQU5fQVRUUklCVVRFUy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuLyoqXG4gKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn1cbiAqIExpc3Qgb2YgYXR0cmlidXRlIG5hbWVzIHRoYXQgc2hvdWxkIGJlIGFsaWFzZWQgdG8gdGhlaXIgcHJvcGVydHkgbmFtZXNcbiAqIGJlY2F1c2UgdGhleSBiZWhhdmUgZGlmZmVyZW50bHkgYmV0d2VlbiBzZXR0aW5nIHRoZW0gYXMgYW4gYXR0cmlidXRlIGFuZFxuICogc2V0dGluZyB0aGVtIGFzIGEgcHJvcGVydHkuXG4gKi9cbmNvbnN0IEFUVFJJQlVURV9BTElBU0VTID0ge1xuXHQvLyBubyBgY2xhc3M6ICdjbGFzc05hbWUnYCBiZWNhdXNlIHdlIGhhbmRsZSB0aGF0IHNlcGFyYXRlbHlcblx0Zm9ybW5vdmFsaWRhdGU6ICdmb3JtTm9WYWxpZGF0ZScsXG5cdGlzbWFwOiAnaXNNYXAnLFxuXHRub21vZHVsZTogJ25vTW9kdWxlJyxcblx0cGxheXNpbmxpbmU6ICdwbGF5c0lubGluZScsXG5cdHJlYWRvbmx5OiAncmVhZE9ubHknLFxuXHRkZWZhdWx0dmFsdWU6ICdkZWZhdWx0VmFsdWUnLFxuXHRkZWZhdWx0Y2hlY2tlZDogJ2RlZmF1bHRDaGVja2VkJyxcblx0c3Jjb2JqZWN0OiAnc3JjT2JqZWN0Jyxcblx0bm92YWxpZGF0ZTogJ25vVmFsaWRhdGUnLFxuXHRhbGxvd2Z1bGxzY3JlZW46ICdhbGxvd0Z1bGxzY3JlZW4nLFxuXHRkaXNhYmxlcGljdHVyZWlucGljdHVyZTogJ2Rpc2FibGVQaWN0dXJlSW5QaWN0dXJlJyxcblx0ZGlzYWJsZXJlbW90ZXBsYXliYWNrOiAnZGlzYWJsZVJlbW90ZVBsYXliYWNrJ1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplX2F0dHJpYnV0ZShuYW1lKSB7XG5cdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cdHJldHVybiBBVFRSSUJVVEVfQUxJQVNFU1tuYW1lXSA/PyBuYW1lO1xufVxuXG5jb25zdCBET01fUFJPUEVSVElFUyA9IFtcblx0Li4uRE9NX0JPT0xFQU5fQVRUUklCVVRFUyxcblx0J2Zvcm1Ob1ZhbGlkYXRlJyxcblx0J2lzTWFwJyxcblx0J25vTW9kdWxlJyxcblx0J3BsYXlzSW5saW5lJyxcblx0J3JlYWRPbmx5Jyxcblx0J3ZhbHVlJyxcblx0J3ZvbHVtZScsXG5cdCdkZWZhdWx0VmFsdWUnLFxuXHQnZGVmYXVsdENoZWNrZWQnLFxuXHQnc3JjT2JqZWN0Jyxcblx0J25vVmFsaWRhdGUnLFxuXHQnYWxsb3dGdWxsc2NyZWVuJyxcblx0J2Rpc2FibGVQaWN0dXJlSW5QaWN0dXJlJyxcblx0J2Rpc2FibGVSZW1vdGVQbGF5YmFjaydcbl07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX2RvbV9wcm9wZXJ0eShuYW1lKSB7XG5cdHJldHVybiBET01fUFJPUEVSVElFUy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgTk9OX1NUQVRJQ19QUk9QRVJUSUVTID0gWydhdXRvZm9jdXMnLCAnbXV0ZWQnLCAnZGVmYXVsdFZhbHVlJywgJ2RlZmF1bHRDaGVja2VkJ107XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIGF0dHJpYnV0ZSBjYW5ub3QgYmUgc2V0IHRocm91Z2ggdGhlIHRlbXBsYXRlXG4gKiBzdHJpbmcsIGkuZS4gbmVlZHMgc29tZSBraW5kIG9mIEphdmFTY3JpcHQgaGFuZGxpbmcgdG8gd29yay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYW5ub3RfYmVfc2V0X3N0YXRpY2FsbHkobmFtZSkge1xuXHRyZXR1cm4gTk9OX1NUQVRJQ19QUk9QRVJUSUVTLmluY2x1ZGVzKG5hbWUpO1xufVxuXG4vKipcbiAqIFN1YnNldCBvZiBkZWxlZ2F0ZWQgZXZlbnRzIHdoaWNoIHNob3VsZCBiZSBwYXNzaXZlIGJ5IGRlZmF1bHQuXG4gKiBUaGVzZSB0d28gYXJlIGFscmVhZHkgcGFzc2l2ZSB2aWEgYnJvd3NlciBkZWZhdWx0cyBvbiB3aW5kb3csIGRvY3VtZW50IGFuZCBib2R5LlxuICogQnV0IHNpbmNlXG4gKiAtIHdlJ3JlIGRlbGVnYXRpbmcgdGhlbVxuICogLSB0aGV5IGhhcHBlbiBvZnRlblxuICogLSB0aGV5IGFwcGx5IHRvIG1vYmlsZSB3aGljaCBpcyBnZW5lcmFsbHkgbGVzcyBwZXJmb3JtYW50XG4gKiB3ZSdyZSBtYXJraW5nIHRoZW0gYXMgcGFzc2l2ZSBieSBkZWZhdWx0IGZvciBvdGhlciBlbGVtZW50cywgdG9vLlxuICovXG5jb25zdCBQQVNTSVZFX0VWRU5UUyA9IFsndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnXTtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBgbmFtZWAgaXMgYSBwYXNzaXZlIGV2ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfcGFzc2l2ZV9ldmVudChuYW1lKSB7XG5cdHJldHVybiBQQVNTSVZFX0VWRU5UUy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgQ09OVEVOVF9FRElUQUJMRV9CSU5ESU5HUyA9IFsndGV4dENvbnRlbnQnLCAnaW5uZXJIVE1MJywgJ2lubmVyVGV4dCddO1xuXG4vKiogQHBhcmFtIHtzdHJpbmd9IG5hbWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19jb250ZW50X2VkaXRhYmxlX2JpbmRpbmcobmFtZSkge1xuXHRyZXR1cm4gQ09OVEVOVF9FRElUQUJMRV9CSU5ESU5HUy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgTE9BRF9FUlJPUl9FTEVNRU5UUyA9IFtcblx0J2JvZHknLFxuXHQnZW1iZWQnLFxuXHQnaWZyYW1lJyxcblx0J2ltZycsXG5cdCdsaW5rJyxcblx0J29iamVjdCcsXG5cdCdzY3JpcHQnLFxuXHQnc3R5bGUnLFxuXHQndHJhY2snXG5dO1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBlbGVtZW50IGVtaXRzIGBsb2FkYCBhbmQgYGVycm9yYCBldmVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19sb2FkX2Vycm9yX2VsZW1lbnQobmFtZSkge1xuXHRyZXR1cm4gTE9BRF9FUlJPUl9FTEVNRU5UUy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgU1ZHX0VMRU1FTlRTID0gW1xuXHQnYWx0R2x5cGgnLFxuXHQnYWx0R2x5cGhEZWYnLFxuXHQnYWx0R2x5cGhJdGVtJyxcblx0J2FuaW1hdGUnLFxuXHQnYW5pbWF0ZUNvbG9yJyxcblx0J2FuaW1hdGVNb3Rpb24nLFxuXHQnYW5pbWF0ZVRyYW5zZm9ybScsXG5cdCdjaXJjbGUnLFxuXHQnY2xpcFBhdGgnLFxuXHQnY29sb3ItcHJvZmlsZScsXG5cdCdjdXJzb3InLFxuXHQnZGVmcycsXG5cdCdkZXNjJyxcblx0J2Rpc2NhcmQnLFxuXHQnZWxsaXBzZScsXG5cdCdmZUJsZW5kJyxcblx0J2ZlQ29sb3JNYXRyaXgnLFxuXHQnZmVDb21wb25lbnRUcmFuc2ZlcicsXG5cdCdmZUNvbXBvc2l0ZScsXG5cdCdmZUNvbnZvbHZlTWF0cml4Jyxcblx0J2ZlRGlmZnVzZUxpZ2h0aW5nJyxcblx0J2ZlRGlzcGxhY2VtZW50TWFwJyxcblx0J2ZlRGlzdGFudExpZ2h0Jyxcblx0J2ZlRHJvcFNoYWRvdycsXG5cdCdmZUZsb29kJyxcblx0J2ZlRnVuY0EnLFxuXHQnZmVGdW5jQicsXG5cdCdmZUZ1bmNHJyxcblx0J2ZlRnVuY1InLFxuXHQnZmVHYXVzc2lhbkJsdXInLFxuXHQnZmVJbWFnZScsXG5cdCdmZU1lcmdlJyxcblx0J2ZlTWVyZ2VOb2RlJyxcblx0J2ZlTW9ycGhvbG9neScsXG5cdCdmZU9mZnNldCcsXG5cdCdmZVBvaW50TGlnaHQnLFxuXHQnZmVTcGVjdWxhckxpZ2h0aW5nJyxcblx0J2ZlU3BvdExpZ2h0Jyxcblx0J2ZlVGlsZScsXG5cdCdmZVR1cmJ1bGVuY2UnLFxuXHQnZmlsdGVyJyxcblx0J2ZvbnQnLFxuXHQnZm9udC1mYWNlJyxcblx0J2ZvbnQtZmFjZS1mb3JtYXQnLFxuXHQnZm9udC1mYWNlLW5hbWUnLFxuXHQnZm9udC1mYWNlLXNyYycsXG5cdCdmb250LWZhY2UtdXJpJyxcblx0J2ZvcmVpZ25PYmplY3QnLFxuXHQnZycsXG5cdCdnbHlwaCcsXG5cdCdnbHlwaFJlZicsXG5cdCdoYXRjaCcsXG5cdCdoYXRjaHBhdGgnLFxuXHQnaGtlcm4nLFxuXHQnaW1hZ2UnLFxuXHQnbGluZScsXG5cdCdsaW5lYXJHcmFkaWVudCcsXG5cdCdtYXJrZXInLFxuXHQnbWFzaycsXG5cdCdtZXNoJyxcblx0J21lc2hncmFkaWVudCcsXG5cdCdtZXNocGF0Y2gnLFxuXHQnbWVzaHJvdycsXG5cdCdtZXRhZGF0YScsXG5cdCdtaXNzaW5nLWdseXBoJyxcblx0J21wYXRoJyxcblx0J3BhdGgnLFxuXHQncGF0dGVybicsXG5cdCdwb2x5Z29uJyxcblx0J3BvbHlsaW5lJyxcblx0J3JhZGlhbEdyYWRpZW50Jyxcblx0J3JlY3QnLFxuXHQnc2V0Jyxcblx0J3NvbGlkY29sb3InLFxuXHQnc3RvcCcsXG5cdCdzdmcnLFxuXHQnc3dpdGNoJyxcblx0J3N5bWJvbCcsXG5cdCd0ZXh0Jyxcblx0J3RleHRQYXRoJyxcblx0J3RyZWYnLFxuXHQndHNwYW4nLFxuXHQndW5rbm93bicsXG5cdCd1c2UnLFxuXHQndmlldycsXG5cdCd2a2Vybidcbl07XG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX3N2ZyhuYW1lKSB7XG5cdHJldHVybiBTVkdfRUxFTUVOVFMuaW5jbHVkZXMobmFtZSk7XG59XG5cbmNvbnN0IE1BVEhNTF9FTEVNRU5UUyA9IFtcblx0J2Fubm90YXRpb24nLFxuXHQnYW5ub3RhdGlvbi14bWwnLFxuXHQnbWFjdGlvbicsXG5cdCdtYXRoJyxcblx0J21lcnJvcicsXG5cdCdtZnJhYycsXG5cdCdtaScsXG5cdCdtbXVsdGlzY3JpcHRzJyxcblx0J21uJyxcblx0J21vJyxcblx0J21vdmVyJyxcblx0J21wYWRkZWQnLFxuXHQnbXBoYW50b20nLFxuXHQnbXByZXNjcmlwdHMnLFxuXHQnbXJvb3QnLFxuXHQnbXJvdycsXG5cdCdtcycsXG5cdCdtc3BhY2UnLFxuXHQnbXNxcnQnLFxuXHQnbXN0eWxlJyxcblx0J21zdWInLFxuXHQnbXN1YnN1cCcsXG5cdCdtc3VwJyxcblx0J210YWJsZScsXG5cdCdtdGQnLFxuXHQnbXRleHQnLFxuXHQnbXRyJyxcblx0J211bmRlcicsXG5cdCdtdW5kZXJvdmVyJyxcblx0J3NlbWFudGljcydcbl07XG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX21hdGhtbChuYW1lKSB7XG5cdHJldHVybiBNQVRITUxfRUxFTUVOVFMuaW5jbHVkZXMobmFtZSk7XG59XG5cbmNvbnN0IFJVTkVTID0gLyoqIEB0eXBlIHtjb25zdH0gKi8gKFtcblx0JyRzdGF0ZScsXG5cdCckc3RhdGUucmF3Jyxcblx0JyRzdGF0ZS5zbmFwc2hvdCcsXG5cdCckcHJvcHMnLFxuXHQnJHByb3BzLmlkJyxcblx0JyRiaW5kYWJsZScsXG5cdCckZGVyaXZlZCcsXG5cdCckZGVyaXZlZC5ieScsXG5cdCckZWZmZWN0Jyxcblx0JyRlZmZlY3QucHJlJyxcblx0JyRlZmZlY3QudHJhY2tpbmcnLFxuXHQnJGVmZmVjdC5yb290Jyxcblx0JyRpbnNwZWN0Jyxcblx0JyRpbnNwZWN0KCkud2l0aCcsXG5cdCckaW5zcGVjdC50cmFjZScsXG5cdCckaG9zdCdcbl0pO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7bmFtZSBpcyBSVU5FU1tudW1iZXJdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfcnVuZShuYW1lKSB7XG5cdHJldHVybiBSVU5FUy5pbmNsdWRlcygvKiogQHR5cGUge1JVTkVTW251bWJlcl19ICovIChuYW1lKSk7XG59XG5cbi8qKiBMaXN0IG9mIGVsZW1lbnRzIHRoYXQgcmVxdWlyZSByYXcgY29udGVudHMgYW5kIHNob3VsZCBub3QgaGF2ZSBTU1IgY29tbWVudHMgcHV0IGluIHRoZW0gKi9cbmNvbnN0IFJBV19URVhUX0VMRU1FTlRTID0gLyoqIEB0eXBlIHtjb25zdH0gKi8gKFsndGV4dGFyZWEnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3RpdGxlJ10pO1xuXG4vKiogQHBhcmFtIHtzdHJpbmd9IG5hbWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19yYXdfdGV4dF9lbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIFJBV19URVhUX0VMRU1FTlRTLmluY2x1ZGVzKC8qKiBAdHlwZSB7UkFXX1RFWFRfRUxFTUVOVFNbbnVtYmVyXX0gKi8gKG5hbWUpKTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IGRldnRvb2xzIHRyeWluZyB0byBtYWtlIGBsb2NhdGlvbmAgYSBjbGlja2FibGUgbGluayBieSBpbnNlcnRpbmcgYSB6ZXJvLXdpZHRoIHNwYWNlXG4gKiBAdGVtcGxhdGUge3N0cmluZyB8IHVuZGVmaW5lZH0gVFxuICogQHBhcmFtIHtUfSBsb2NhdGlvblxuICogQHJldHVybnMge1R9O1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVfbG9jYXRpb24obG9jYXRpb24pIHtcblx0cmV0dXJuIC8qKiBAdHlwZSB7VH0gKi8gKGxvY2F0aW9uPy5yZXBsYWNlKC9cXC8vZywgJy9cXHUyMDBiJykpO1xufVxuIiwgImltcG9ydCB7IHRlYXJkb3duIH0gZnJvbSAnLi4vLi4vcmVhY3Rpdml0eS9lZmZlY3RzLmpzJztcbmltcG9ydCB7IGRlZmluZV9wcm9wZXJ0eSwgaXNfYXJyYXkgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHsgaHlkcmF0aW5nIH0gZnJvbSAnLi4vaHlkcmF0aW9uLmpzJztcbmltcG9ydCB7IHF1ZXVlX21pY3JvX3Rhc2sgfSBmcm9tICcuLi90YXNrLmpzJztcbmltcG9ydCB7IEZJTEVOQU1FIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCAqIGFzIHcgZnJvbSAnLi4vLi4vd2FybmluZ3MuanMnO1xuaW1wb3J0IHtcblx0YWN0aXZlX2VmZmVjdCxcblx0YWN0aXZlX3JlYWN0aW9uLFxuXHRzZXRfYWN0aXZlX2VmZmVjdCxcblx0c2V0X2FjdGl2ZV9yZWFjdGlvblxufSBmcm9tICcuLi8uLi9ydW50aW1lLmpzJztcbmltcG9ydCB7IHdpdGhvdXRfcmVhY3RpdmVfY29udGV4dCB9IGZyb20gJy4vYmluZGluZ3Mvc2hhcmVkLmpzJztcblxuLyoqIEB0eXBlIHtTZXQ8c3RyaW5nPn0gKi9cbmV4cG9ydCBjb25zdCBhbGxfcmVnaXN0ZXJlZF9ldmVudHMgPSBuZXcgU2V0KCk7XG5cbi8qKiBAdHlwZSB7U2V0PChldmVudHM6IEFycmF5PHN0cmluZz4pID0+IHZvaWQ+fSAqL1xuZXhwb3J0IGNvbnN0IHJvb3RfZXZlbnRfaGFuZGxlcyA9IG5ldyBTZXQoKTtcblxuLyoqXG4gKiBTU1IgYWRkcyBvbmxvYWQgYW5kIG9uZXJyb3IgYXR0cmlidXRlcyB0byBjYXRjaCB0aG9zZSBldmVudHMgYmVmb3JlIHRoZSBoeWRyYXRpb24uXG4gKiBUaGlzIGZ1bmN0aW9uIGRldGVjdHMgdGhvc2UgY2FzZXMsIHJlbW92ZXMgdGhlIGF0dHJpYnV0ZXMgYW5kIHJlcGxheXMgdGhlIGV2ZW50cy5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwbGF5X2V2ZW50cyhkb20pIHtcblx0aWYgKCFoeWRyYXRpbmcpIHJldHVybjtcblxuXHRpZiAoZG9tLm9ubG9hZCkge1xuXHRcdGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ29ubG9hZCcpO1xuXHR9XG5cdGlmIChkb20ub25lcnJvcikge1xuXHRcdGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ29uZXJyb3InKTtcblx0fVxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdGNvbnN0IGV2ZW50ID0gZG9tLl9fZTtcblx0aWYgKGV2ZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0ZG9tLl9fZSA9IHVuZGVmaW5lZDtcblx0XHRxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG5cdFx0XHRpZiAoZG9tLmlzQ29ubmVjdGVkKSB7XG5cdFx0XHRcdGRvbS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudF9uYW1lXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBkb21cbiAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lcn0gW2hhbmRsZXJdXG4gKiBAcGFyYW0ge0FkZEV2ZW50TGlzdGVuZXJPcHRpb25zfSBbb3B0aW9uc11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZV9ldmVudChldmVudF9uYW1lLCBkb20sIGhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuXHQvKipcblx0ICogQHRoaXMge0V2ZW50VGFyZ2V0fVxuXHQgKi9cblx0ZnVuY3Rpb24gdGFyZ2V0X2hhbmRsZXIoLyoqIEB0eXBlIHtFdmVudH0gKi8gZXZlbnQpIHtcblx0XHRpZiAoIW9wdGlvbnMuY2FwdHVyZSkge1xuXHRcdFx0Ly8gT25seSBjYWxsIGluIHRoZSBidWJibGUgcGhhc2UsIGVsc2UgZGVsZWdhdGVkIGV2ZW50cyB3b3VsZCBiZSBjYWxsZWQgYmVmb3JlIHRoZSBjYXB0dXJpbmcgZXZlbnRzXG5cdFx0XHRoYW5kbGVfZXZlbnRfcHJvcGFnYXRpb24uY2FsbChkb20sIGV2ZW50KTtcblx0XHR9XG5cdFx0aWYgKCFldmVudC5jYW5jZWxCdWJibGUpIHtcblx0XHRcdHJldHVybiB3aXRob3V0X3JlYWN0aXZlX2NvbnRleHQoKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gaGFuZGxlcj8uY2FsbCh0aGlzLCBldmVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvLyBDaHJvbWUgaGFzIGEgYnVnIHdoZXJlIHBvaW50ZXIgZXZlbnRzIGRvbid0IHdvcmsgd2hlbiBhdHRhY2hlZCB0byBhIERPTSBlbGVtZW50IHRoYXQgaGFzIGJlZW4gY2xvbmVkXG5cdC8vIHdpdGggY2xvbmVOb2RlKCkgYW5kIHRoZSBET00gZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgZG9jdW1lbnQuIFRvIGVuc3VyZSB0aGUgZXZlbnQgd29ya3MsIHdlXG5cdC8vIGRlZmVyIHRoZSBhdHRhY2htZW50IHRpbGwgYWZ0ZXIgaXQncyBiZWVuIGFwcGVuZGVkIHRvIHRoZSBkb2N1bWVudC4gVE9ETzogcmVtb3ZlIHRoaXMgb25jZSBDaHJvbWUgZml4ZXNcblx0Ly8gdGhpcyBidWcuIFRoZSBzYW1lIGFwcGxpZXMgdG8gd2hlZWwgZXZlbnRzIGFuZCB0b3VjaCBldmVudHMuXG5cdGlmIChcblx0XHRldmVudF9uYW1lLnN0YXJ0c1dpdGgoJ3BvaW50ZXInKSB8fFxuXHRcdGV2ZW50X25hbWUuc3RhcnRzV2l0aCgndG91Y2gnKSB8fFxuXHRcdGV2ZW50X25hbWUgPT09ICd3aGVlbCdcblx0KSB7XG5cdFx0cXVldWVfbWljcm9fdGFzaygoKSA9PiB7XG5cdFx0XHRkb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudF9uYW1lLCB0YXJnZXRfaGFuZGxlciwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0ZG9tLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgdGFyZ2V0X2hhbmRsZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0cmV0dXJuIHRhcmdldF9oYW5kbGVyO1xufVxuXG4vKipcbiAqIEF0dGFjaGVzIGFuIGV2ZW50IGhhbmRsZXIgdG8gYW4gZWxlbWVudCBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgaGFuZGxlci4gVXNpbmcgdGhpc1xuICogcmF0aGVyIHRoYW4gYGFkZEV2ZW50TGlzdGVuZXJgIHdpbGwgcHJlc2VydmUgdGhlIGNvcnJlY3Qgb3JkZXIgcmVsYXRpdmUgdG8gaGFuZGxlcnMgYWRkZWQgZGVjbGFyYXRpdmVseVxuICogKHdpdGggYXR0cmlidXRlcyBsaWtlIGBvbmNsaWNrYCksIHdoaWNoIHVzZSBldmVudCBkZWxlZ2F0aW9uIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gKlxuICogQHBhcmFtIHtFdmVudFRhcmdldH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lcn0gaGFuZGxlclxuICogQHBhcmFtIHtBZGRFdmVudExpc3RlbmVyT3B0aW9uc30gW29wdGlvbnNdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbihlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcHRpb25zID0ge30pIHtcblx0dmFyIHRhcmdldF9oYW5kbGVyID0gY3JlYXRlX2V2ZW50KHR5cGUsIGVsZW1lbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIHRhcmdldF9oYW5kbGVyLCBvcHRpb25zKTtcblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRfbmFtZVxuICogQHBhcmFtIHtFbGVtZW50fSBkb21cbiAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lcn0gW2hhbmRsZXJdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjYXB0dXJlXVxuICogQHBhcmFtIHtib29sZWFufSBbcGFzc2l2ZV1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlbnQoZXZlbnRfbmFtZSwgZG9tLCBoYW5kbGVyLCBjYXB0dXJlLCBwYXNzaXZlKSB7XG5cdHZhciBvcHRpb25zID0geyBjYXB0dXJlLCBwYXNzaXZlIH07XG5cdHZhciB0YXJnZXRfaGFuZGxlciA9IGNyZWF0ZV9ldmVudChldmVudF9uYW1lLCBkb20sIGhhbmRsZXIsIG9wdGlvbnMpO1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0aWYgKGRvbSA9PT0gZG9jdW1lbnQuYm9keSB8fCBkb20gPT09IHdpbmRvdyB8fCBkb20gPT09IGRvY3VtZW50KSB7XG5cdFx0dGVhcmRvd24oKCkgPT4ge1xuXHRcdFx0ZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgdGFyZ2V0X2hhbmRsZXIsIG9wdGlvbnMpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBldmVudHNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZWdhdGUoZXZlbnRzKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0YWxsX3JlZ2lzdGVyZWRfZXZlbnRzLmFkZChldmVudHNbaV0pO1xuXHR9XG5cblx0Zm9yICh2YXIgZm4gb2Ygcm9vdF9ldmVudF9oYW5kbGVzKSB7XG5cdFx0Zm4oZXZlbnRzKTtcblx0fVxufVxuXG4vKipcbiAqIEB0aGlzIHtFdmVudFRhcmdldH1cbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZV9ldmVudF9wcm9wYWdhdGlvbihldmVudCkge1xuXHR2YXIgaGFuZGxlcl9lbGVtZW50ID0gdGhpcztcblx0dmFyIG93bmVyX2RvY3VtZW50ID0gLyoqIEB0eXBlIHtOb2RlfSAqLyAoaGFuZGxlcl9lbGVtZW50KS5vd25lckRvY3VtZW50O1xuXHR2YXIgZXZlbnRfbmFtZSA9IGV2ZW50LnR5cGU7XG5cdHZhciBwYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoPy4oKSB8fCBbXTtcblx0dmFyIGN1cnJlbnRfdGFyZ2V0ID0gLyoqIEB0eXBlIHtudWxsIHwgRWxlbWVudH0gKi8gKHBhdGhbMF0gfHwgZXZlbnQudGFyZ2V0KTtcblxuXHQvLyBjb21wb3NlZFBhdGggY29udGFpbnMgbGlzdCBvZiBub2RlcyB0aGUgZXZlbnQgaGFzIHByb3BhZ2F0ZWQgdGhyb3VnaC5cblx0Ly8gV2UgY2hlY2sgX19yb290IHRvIHNraXAgYWxsIG5vZGVzIGJlbG93IGl0IGluIGNhc2UgdGhpcyBpcyBhXG5cdC8vIHBhcmVudCBvZiB0aGUgX19yb290IG5vZGUsIHdoaWNoIGluZGljYXRlcyB0aGF0IHRoZXJlJ3MgbmVzdGVkXG5cdC8vIG1vdW50ZWQgYXBwcy4gSW4gdGhpcyBjYXNlIHdlIGRvbid0IHdhbnQgdG8gdHJpZ2dlciBldmVudHMgbXVsdGlwbGUgdGltZXMuXG5cdHZhciBwYXRoX2lkeCA9IDA7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBpcyBhZGRlZCBiZWxvd1xuXHR2YXIgaGFuZGxlZF9hdCA9IGV2ZW50Ll9fcm9vdDtcblxuXHRpZiAoaGFuZGxlZF9hdCkge1xuXHRcdHZhciBhdF9pZHggPSBwYXRoLmluZGV4T2YoaGFuZGxlZF9hdCk7XG5cdFx0aWYgKFxuXHRcdFx0YXRfaWR4ICE9PSAtMSAmJlxuXHRcdFx0KGhhbmRsZXJfZWxlbWVudCA9PT0gZG9jdW1lbnQgfHwgaGFuZGxlcl9lbGVtZW50ID09PSAvKiogQHR5cGUge2FueX0gKi8gKHdpbmRvdykpXG5cdFx0KSB7XG5cdFx0XHQvLyBUaGlzIGlzIHRoZSBmYWxsYmFjayBkb2N1bWVudCBsaXN0ZW5lciBvciBhIHdpbmRvdyBsaXN0ZW5lciwgYnV0IHRoZSBldmVudCB3YXMgYWxyZWFkeSBoYW5kbGVkXG5cdFx0XHQvLyAtPiBpZ25vcmUsIGJ1dCBzZXQgaGFuZGxlX2F0IHRvIGRvY3VtZW50L3dpbmRvdyBzbyB0aGF0IHdlJ3JlIHJlc2V0dGluZyB0aGUgZXZlbnRcblx0XHRcdC8vIGNoYWluIGluIGNhc2Ugc29tZW9uZSBtYW51YWxseSBkaXNwYXRjaGVzIHRoZSBzYW1lIGV2ZW50IG9iamVjdCBhZ2Fpbi5cblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdGV2ZW50Ll9fcm9vdCA9IGhhbmRsZXJfZWxlbWVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBXZSdyZSBkZWxpYmVyYXRlbHkgbm90IHNraXBwaW5nIGlmIHRoZSBpbmRleCBpcyBoaWdoZXIsIGJlY2F1c2Vcblx0XHQvLyBzb21lb25lIGNvdWxkIGNyZWF0ZSBhbiBldmVudCBwcm9ncmFtbWF0aWNhbGx5IGFuZCBlbWl0IGl0IG11bHRpcGxlIHRpbWVzLFxuXHRcdC8vIGluIHdoaWNoIGNhc2Ugd2Ugd2FudCB0byBoYW5kbGUgdGhlIHdob2xlIHByb3BhZ2F0aW9uIGNoYWluIHByb3Blcmx5IGVhY2ggdGltZS5cblx0XHQvLyAodGhpcyB3aWxsIG9ubHkgYmUgYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGUgZXZlbnQgaXMgZGlzcGF0Y2hlZCBtdWx0aXBsZSB0aW1lcyBhbmRcblx0XHQvLyB0aGUgZmFsbGJhY2sgZG9jdW1lbnQgbGlzdGVuZXIgaXNuJ3QgcmVhY2hlZCBpbiBiZXR3ZWVuLCBidXQgdGhhdCdzIHN1cGVyIHJhcmUpXG5cdFx0dmFyIGhhbmRsZXJfaWR4ID0gcGF0aC5pbmRleE9mKGhhbmRsZXJfZWxlbWVudCk7XG5cdFx0aWYgKGhhbmRsZXJfaWR4ID09PSAtMSkge1xuXHRcdFx0Ly8gaGFuZGxlX2lkeCBjYW4gdGhlb3JldGljYWxseSBiZSAtMSAoaGFwcGVuZWQgaW4gc29tZSBKU0RPTSB0ZXN0aW5nIHNjZW5hcmlvcyB3aXRoIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSB3aW5kb3cgb2JqZWN0KVxuXHRcdFx0Ly8gc28gZ3VhcmQgYWdhaW5zdCB0aGF0LCB0b28sIGFuZCBhc3N1bWUgdGhhdCBldmVyeXRoaW5nIHdhcyBoYW5kbGVkIGF0IHRoaXMgcG9pbnQuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGF0X2lkeCA8PSBoYW5kbGVyX2lkeCkge1xuXHRcdFx0cGF0aF9pZHggPSBhdF9pZHg7XG5cdFx0fVxuXHR9XG5cblx0Y3VycmVudF90YXJnZXQgPSAvKiogQHR5cGUge0VsZW1lbnR9ICovIChwYXRoW3BhdGhfaWR4XSB8fCBldmVudC50YXJnZXQpO1xuXHQvLyB0aGVyZSBjYW4gb25seSBiZSBvbmUgZGVsZWdhdGVkIGV2ZW50IHBlciBlbGVtZW50LCBhbmQgd2UgZWl0aGVyIGFscmVhZHkgaGFuZGxlZCB0aGUgY3VycmVudCB0YXJnZXQsXG5cdC8vIG9yIHRoaXMgaXMgdGhlIHZlcnkgZmlyc3QgdGFyZ2V0IGluIHRoZSBjaGFpbiB3aGljaCBoYXMgYSBub24tZGVsZWdhdGVkIGxpc3RlbmVyLCBpbiB3aGljaCBjYXNlIGl0J3Mgc2FmZVxuXHQvLyB0byBoYW5kbGUgYSBwb3NzaWJsZSBkZWxlZ2F0ZWQgZXZlbnQgb24gaXQgbGF0ZXIgKHRocm91Z2ggdGhlIHJvb3QgZGVsZWdhdGlvbiBsaXN0ZW5lciBmb3IgZXhhbXBsZSkuXG5cdGlmIChjdXJyZW50X3RhcmdldCA9PT0gaGFuZGxlcl9lbGVtZW50KSByZXR1cm47XG5cblx0Ly8gUHJveHkgY3VycmVudFRhcmdldCB0byBjb3JyZWN0IHRhcmdldFxuXHRkZWZpbmVfcHJvcGVydHkoZXZlbnQsICdjdXJyZW50VGFyZ2V0Jywge1xuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gY3VycmVudF90YXJnZXQgfHwgb3duZXJfZG9jdW1lbnQ7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBUaGlzIHN0YXJ0ZWQgYmVjYXVzZSBvZiBDaHJvbWl1bSBpc3N1ZSBodHRwczovL2Nocm9tZXN0YXR1cy5jb20vZmVhdHVyZS81MTI4Njk2ODIzNTQ1ODU2LFxuXHQvLyB3aGVyZSByZW1vdmFsIG9yIG1vdmluZyBvZiBvZiB0aGUgRE9NIGNhbiBjYXVzZSBzeW5jIGBibHVyYCBldmVudHMgdG8gZmlyZSwgd2hpY2ggY2FuIGNhdXNlIGxvZ2ljXG5cdC8vIHRvIHJ1biBpbnNpZGUgdGhlIGN1cnJlbnQgYGFjdGl2ZV9yZWFjdGlvbmAsIHdoaWNoIGlzbid0IHdoYXQgd2Ugd2FudCBhdCBhbGwuIEhvd2V2ZXIsIG9uIHJlZmxlY3Rpb24sXG5cdC8vIGl0J3MgcHJvYmFibHkgYmVzdCB0aGF0IGFsbCBldmVudCBoYW5kbGVkIGJ5IFN2ZWx0ZSBoYXZlIHRoaXMgYmVoYXZpb3VyLCBhcyB3ZSBkb24ndCByZWFsbHkgd2FudFxuXHQvLyBhbiBldmVudCBoYW5kbGVyIHRvIHJ1biBpbiB0aGUgY29udGV4dCBvZiBhbm90aGVyIHJlYWN0aW9uIG9yIGVmZmVjdC5cblx0dmFyIHByZXZpb3VzX3JlYWN0aW9uID0gYWN0aXZlX3JlYWN0aW9uO1xuXHR2YXIgcHJldmlvdXNfZWZmZWN0ID0gYWN0aXZlX2VmZmVjdDtcblx0c2V0X2FjdGl2ZV9yZWFjdGlvbihudWxsKTtcblx0c2V0X2FjdGl2ZV9lZmZlY3QobnVsbCk7XG5cblx0dHJ5IHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7dW5rbm93bn1cblx0XHQgKi9cblx0XHR2YXIgdGhyb3dfZXJyb3I7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3Vua25vd25bXX1cblx0XHQgKi9cblx0XHR2YXIgb3RoZXJfZXJyb3JzID0gW107XG5cblx0XHR3aGlsZSAoY3VycmVudF90YXJnZXQgIT09IG51bGwpIHtcblx0XHRcdC8qKiBAdHlwZSB7bnVsbCB8IEVsZW1lbnR9ICovXG5cdFx0XHR2YXIgcGFyZW50X2VsZW1lbnQgPVxuXHRcdFx0XHRjdXJyZW50X3RhcmdldC5hc3NpZ25lZFNsb3QgfHxcblx0XHRcdFx0Y3VycmVudF90YXJnZXQucGFyZW50Tm9kZSB8fFxuXHRcdFx0XHQvKiogQHR5cGUge2FueX0gKi8gKGN1cnJlbnRfdGFyZ2V0KS5ob3N0IHx8XG5cdFx0XHRcdG51bGw7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0dmFyIGRlbGVnYXRlZCA9IGN1cnJlbnRfdGFyZ2V0WydfXycgKyBldmVudF9uYW1lXTtcblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0ZGVsZWdhdGVkICE9IG51bGwgJiZcblx0XHRcdFx0XHQoISgvKiogQHR5cGUge2FueX0gKi8gKGN1cnJlbnRfdGFyZ2V0KS5kaXNhYmxlZCkgfHxcblx0XHRcdFx0XHRcdC8vIERPTSBjb3VsZCd2ZSBiZWVuIHVwZGF0ZWQgYWxyZWFkeSBieSB0aGUgdGltZSB0aGlzIGlzIHJlYWNoZWQsIHNvIHdlIGNoZWNrIHRoaXMgYXMgd2VsbFxuXHRcdFx0XHRcdFx0Ly8gLT4gdGhlIHRhcmdldCBjb3VsZCBub3QgaGF2ZSBiZWVuIGRpc2FibGVkIGJlY2F1c2UgaXQgZW1pdHMgdGhlIGV2ZW50IGluIHRoZSBmaXJzdCBwbGFjZVxuXHRcdFx0XHRcdFx0ZXZlbnQudGFyZ2V0ID09PSBjdXJyZW50X3RhcmdldClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0aWYgKGlzX2FycmF5KGRlbGVnYXRlZCkpIHtcblx0XHRcdFx0XHRcdHZhciBbZm4sIC4uLmRhdGFdID0gZGVsZWdhdGVkO1xuXHRcdFx0XHRcdFx0Zm4uYXBwbHkoY3VycmVudF90YXJnZXQsIFtldmVudCwgLi4uZGF0YV0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkZWxlZ2F0ZWQuY2FsbChjdXJyZW50X3RhcmdldCwgZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0aWYgKHRocm93X2Vycm9yKSB7XG5cdFx0XHRcdFx0b3RoZXJfZXJyb3JzLnB1c2goZXJyb3IpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93X2Vycm9yID0gZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChldmVudC5jYW5jZWxCdWJibGUgfHwgcGFyZW50X2VsZW1lbnQgPT09IGhhbmRsZXJfZWxlbWVudCB8fCBwYXJlbnRfZWxlbWVudCA9PT0gbnVsbCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGN1cnJlbnRfdGFyZ2V0ID0gcGFyZW50X2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0aWYgKHRocm93X2Vycm9yKSB7XG5cdFx0XHRmb3IgKGxldCBlcnJvciBvZiBvdGhlcl9lcnJvcnMpIHtcblx0XHRcdFx0Ly8gVGhyb3cgdGhlIHJlc3Qgb2YgdGhlIGVycm9ycywgb25lLWJ5LW9uZSBvbiBhIG1pY3JvdGFza1xuXHRcdFx0XHRxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3cgdGhyb3dfZXJyb3I7XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgaXMgdXNlZCBhYm92ZVxuXHRcdGV2ZW50Ll9fcm9vdCA9IGhhbmRsZXJfZWxlbWVudDtcblx0XHQvLyBAdHMtaWdub3JlIHJlbW92ZSBwcm94eSBvbiBjdXJyZW50VGFyZ2V0XG5cdFx0ZGVsZXRlIGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cdFx0c2V0X2FjdGl2ZV9yZWFjdGlvbihwcmV2aW91c19yZWFjdGlvbik7XG5cdFx0c2V0X2FjdGl2ZV9lZmZlY3QocHJldmlvdXNfZWZmZWN0KTtcblx0fVxufVxuXG4vKipcbiAqIEluIGRldiwgd2FybiBpZiBhbiBldmVudCBoYW5kbGVyIGlzIG5vdCBhIGZ1bmN0aW9uLCBhcyBpdCBtZWFucyB0aGVcbiAqIHVzZXIgcHJvYmFibHkgY2FsbGVkIHRoZSBoYW5kbGVyIG9yIGZvcmdvdCB0byBhZGQgYSBgKCkgPT5gXG4gKiBAcGFyYW0geygpID0+IChldmVudDogRXZlbnQsIC4uLmFyZ3M6IGFueSkgPT4gdm9pZH0gdGh1bmtcbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7W0V2ZW50LCAuLi5hbnldfSBhcmdzXG4gKiBAcGFyYW0ge2FueX0gY29tcG9uZW50XG4gKiBAcGFyYW0ge1tudW1iZXIsIG51bWJlcl19IFtsb2NdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtyZW1vdmVfcGFyZW5zXVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkoXG5cdHRodW5rLFxuXHRlbGVtZW50LFxuXHRhcmdzLFxuXHRjb21wb25lbnQsXG5cdGxvYyxcblx0aGFzX3NpZGVfZWZmZWN0cyA9IGZhbHNlLFxuXHRyZW1vdmVfcGFyZW5zID0gZmFsc2Vcbikge1xuXHRsZXQgaGFuZGxlcjtcblx0bGV0IGVycm9yO1xuXG5cdHRyeSB7XG5cdFx0aGFuZGxlciA9IHRodW5rKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRlcnJvciA9IGU7XG5cdH1cblxuXHRpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicgJiYgKGhhc19zaWRlX2VmZmVjdHMgfHwgaGFuZGxlciAhPSBudWxsIHx8IGVycm9yKSkge1xuXHRcdGNvbnN0IGZpbGVuYW1lID0gY29tcG9uZW50Py5bRklMRU5BTUVdO1xuXHRcdGNvbnN0IGxvY2F0aW9uID0gbG9jID8gYCBhdCAke2ZpbGVuYW1lfToke2xvY1swXX06JHtsb2NbMV19YCA6IGAgaW4gJHtmaWxlbmFtZX1gO1xuXHRcdGNvbnN0IHBoYXNlID0gYXJnc1swXT8uZXZlbnRQaGFzZSA8IEV2ZW50LkJVQkJMSU5HX1BIQVNFID8gJ2NhcHR1cmUnIDogJyc7XG5cdFx0Y29uc3QgZXZlbnRfbmFtZSA9IGFyZ3NbMF0/LnR5cGUgKyBwaGFzZTtcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGBcXGAke2V2ZW50X25hbWV9XFxgIGhhbmRsZXIke2xvY2F0aW9ufWA7XG5cdFx0Y29uc3Qgc3VnZ2VzdGlvbiA9IHJlbW92ZV9wYXJlbnMgPyAncmVtb3ZlIHRoZSB0cmFpbGluZyBgKClgJyA6ICdhZGQgYSBsZWFkaW5nIGAoKSA9PmAnO1xuXG5cdFx0dy5ldmVudF9oYW5kbGVyX2ludmFsaWQoZGVzY3JpcHRpb24sIHN1Z2dlc3Rpb24pO1xuXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH1cblx0aGFuZGxlcj8uYXBwbHkoZWxlbWVudCwgYXJncyk7XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBUZW1wbGF0ZU5vZGUgfSBmcm9tICcjY2xpZW50JyAqL1xuaW1wb3J0IHsgaHlkcmF0ZV9ub2RlLCBoeWRyYXRpbmcsIHNldF9oeWRyYXRlX25vZGUsIHNldF9oeWRyYXRpbmcgfSBmcm9tICcuLi9oeWRyYXRpb24uanMnO1xuaW1wb3J0IHsgY3JlYXRlX3RleHQsIGdldF9maXJzdF9jaGlsZCwgZ2V0X25leHRfc2libGluZyB9IGZyb20gJy4uL29wZXJhdGlvbnMuanMnO1xuaW1wb3J0IHsgYmxvY2sgfSBmcm9tICcuLi8uLi9yZWFjdGl2aXR5L2VmZmVjdHMuanMnO1xuaW1wb3J0IHsgSEVBRF9FRkZFQ1QgfSBmcm9tICcjY2xpZW50L2NvbnN0YW50cyc7XG5pbXBvcnQgeyBIWURSQVRJT05fU1RBUlQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMuanMnO1xuXG4vKipcbiAqIEB0eXBlIHtOb2RlIHwgdW5kZWZpbmVkfVxuICovXG5sZXQgaGVhZF9hbmNob3I7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldF9oZWFkX2FuY2hvcigpIHtcblx0aGVhZF9hbmNob3IgPSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHsoYW5jaG9yOiBOb2RlKSA9PiB2b2lkfSByZW5kZXJfZm5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGVhZChyZW5kZXJfZm4pIHtcblx0Ly8gVGhlIGhlYWQgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciB0aGUgZmlyc3QgaHlkcmF0aW9uIHBhc3MgYW5kIHNzciBjb21tZW50IG5vZGVzIG1heSBzdGlsbCBiZSBwcmVzZW50LFxuXHQvLyB0aGVyZWZvcmUgd2UgbmVlZCB0byBza2lwIHRoYXQgd2hlbiB3ZSBkZXRlY3QgdGhhdCB3ZSdyZSBub3QgaW4gaHlkcmF0aW9uIG1vZGUuXG5cdGxldCBwcmV2aW91c19oeWRyYXRlX25vZGUgPSBudWxsO1xuXHRsZXQgd2FzX2h5ZHJhdGluZyA9IGh5ZHJhdGluZztcblxuXHQvKiogQHR5cGUge0NvbW1lbnQgfCBUZXh0fSAqL1xuXHR2YXIgYW5jaG9yO1xuXG5cdGlmIChoeWRyYXRpbmcpIHtcblx0XHRwcmV2aW91c19oeWRyYXRlX25vZGUgPSBoeWRyYXRlX25vZGU7XG5cblx0XHQvLyBUaGVyZSBtaWdodCBiZSBtdWx0aXBsZSBoZWFkIGJsb2NrcyBpbiBvdXIgYXBwLCBzbyB3ZSBuZWVkIHRvIGFjY291bnQgZm9yIGVhY2ggb25lIG5lZWRpbmcgaW5kZXBlbmRlbnQgaHlkcmF0aW9uLlxuXHRcdGlmIChoZWFkX2FuY2hvciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRoZWFkX2FuY2hvciA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZ2V0X2ZpcnN0X2NoaWxkKGRvY3VtZW50LmhlYWQpKTtcblx0XHR9XG5cblx0XHR3aGlsZSAoXG5cdFx0XHRoZWFkX2FuY2hvciAhPT0gbnVsbCAmJlxuXHRcdFx0KGhlYWRfYW5jaG9yLm5vZGVUeXBlICE9PSA4IHx8IC8qKiBAdHlwZSB7Q29tbWVudH0gKi8gKGhlYWRfYW5jaG9yKS5kYXRhICE9PSBIWURSQVRJT05fU1RBUlQpXG5cdFx0KSB7XG5cdFx0XHRoZWFkX2FuY2hvciA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZ2V0X25leHRfc2libGluZyhoZWFkX2FuY2hvcikpO1xuXHRcdH1cblxuXHRcdC8vIElmIHdlIGNhbid0IGZpbmQgYW4gb3BlbmluZyBoeWRyYXRpb24gbWFya2VyLCBza2lwIGh5ZHJhdGlvbiAodGhpcyBjYW4gaGFwcGVuXG5cdFx0Ly8gaWYgYSBmcmFtZXdvcmsgcmVuZGVyZWQgYm9keSBidXQgbm90IGhlYWQgY29udGVudClcblx0XHRpZiAoaGVhZF9hbmNob3IgPT09IG51bGwpIHtcblx0XHRcdHNldF9oeWRyYXRpbmcoZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkX2FuY2hvciA9IHNldF9oeWRyYXRlX25vZGUoLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChnZXRfbmV4dF9zaWJsaW5nKGhlYWRfYW5jaG9yKSkpO1xuXHRcdH1cblx0fVxuXG5cdGlmICghaHlkcmF0aW5nKSB7XG5cdFx0YW5jaG9yID0gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjcmVhdGVfdGV4dCgpKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0YmxvY2soKCkgPT4gcmVuZGVyX2ZuKGFuY2hvciksIEhFQURfRUZGRUNUKTtcblx0fSBmaW5hbGx5IHtcblx0XHRpZiAod2FzX2h5ZHJhdGluZykge1xuXHRcdFx0c2V0X2h5ZHJhdGluZyh0cnVlKTtcblx0XHRcdGhlYWRfYW5jaG9yID0gaHlkcmF0ZV9ub2RlOyAvLyBzbyB0aGF0IG5leHQgaGVhZCBibG9jayBzdGFydHMgZnJvbSB0aGUgY29ycmVjdCBub2RlXG5cdFx0XHRzZXRfaHlkcmF0ZV9ub2RlKC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAocHJldmlvdXNfaHlkcmF0ZV9ub2RlKSk7XG5cdFx0fVxuXHR9XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBFZmZlY3QsIFRlbXBsYXRlTm9kZSB9IGZyb20gJyNjbGllbnQnICovXG5pbXBvcnQgeyBoeWRyYXRlX25leHQsIGh5ZHJhdGVfbm9kZSwgaHlkcmF0aW5nLCBzZXRfaHlkcmF0ZV9ub2RlIH0gZnJvbSAnLi9oeWRyYXRpb24uanMnO1xuaW1wb3J0IHsgY3JlYXRlX3RleHQsIGdldF9maXJzdF9jaGlsZCwgaXNfZmlyZWZveCB9IGZyb20gJy4vb3BlcmF0aW9ucy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVfZnJhZ21lbnRfZnJvbV9odG1sIH0gZnJvbSAnLi9yZWNvbmNpbGVyLmpzJztcbmltcG9ydCB7IGFjdGl2ZV9lZmZlY3QgfSBmcm9tICcuLi9ydW50aW1lLmpzJztcbmltcG9ydCB7IFRFTVBMQVRFX0ZSQUdNRU5ULCBURU1QTEFURV9VU0VfSU1QT1JUX05PREUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMuanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7VGVtcGxhdGVOb2RlfSBzdGFydFxuICogQHBhcmFtIHtUZW1wbGF0ZU5vZGUgfCBudWxsfSBlbmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbl9ub2RlcyhzdGFydCwgZW5kKSB7XG5cdHZhciBlZmZlY3QgPSAvKiogQHR5cGUge0VmZmVjdH0gKi8gKGFjdGl2ZV9lZmZlY3QpO1xuXHRpZiAoZWZmZWN0Lm5vZGVzX3N0YXJ0ID09PSBudWxsKSB7XG5cdFx0ZWZmZWN0Lm5vZGVzX3N0YXJ0ID0gc3RhcnQ7XG5cdFx0ZWZmZWN0Lm5vZGVzX2VuZCA9IGVuZDtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcGFyYW0ge251bWJlcn0gZmxhZ3NcbiAqIEByZXR1cm5zIHsoKSA9PiBOb2RlIHwgTm9kZVtdfVxuICovXG4vKiNfX05PX1NJREVfRUZGRUNUU19fKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZShjb250ZW50LCBmbGFncykge1xuXHR2YXIgaXNfZnJhZ21lbnQgPSAoZmxhZ3MgJiBURU1QTEFURV9GUkFHTUVOVCkgIT09IDA7XG5cdHZhciB1c2VfaW1wb3J0X25vZGUgPSAoZmxhZ3MgJiBURU1QTEFURV9VU0VfSU1QT1JUX05PREUpICE9PSAwO1xuXG5cdC8qKiBAdHlwZSB7Tm9kZX0gKi9cblx0dmFyIG5vZGU7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgb3Igbm90IHRoZSBmaXJzdCBpdGVtIGlzIGEgdGV4dC9lbGVtZW50IG5vZGUuIElmIG5vdCwgd2UgbmVlZCB0b1xuXHQgKiBjcmVhdGUgYW4gYWRkaXRpb25hbCBjb21tZW50IG5vZGUgdG8gYWN0IGFzIGBlZmZlY3Qubm9kZXMuc3RhcnRgXG5cdCAqL1xuXHR2YXIgaGFzX3N0YXJ0ID0gIWNvbnRlbnQuc3RhcnRzV2l0aCgnPCE+Jyk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0XHRhc3NpZ25fbm9kZXMoaHlkcmF0ZV9ub2RlLCBudWxsKTtcblx0XHRcdHJldHVybiBoeWRyYXRlX25vZGU7XG5cdFx0fVxuXG5cdFx0aWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bm9kZSA9IGNyZWF0ZV9mcmFnbWVudF9mcm9tX2h0bWwoaGFzX3N0YXJ0ID8gY29udGVudCA6ICc8IT4nICsgY29udGVudCk7XG5cdFx0XHRpZiAoIWlzX2ZyYWdtZW50KSBub2RlID0gLyoqIEB0eXBlIHtOb2RlfSAqLyAoZ2V0X2ZpcnN0X2NoaWxkKG5vZGUpKTtcblx0XHR9XG5cblx0XHR2YXIgY2xvbmUgPSAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKFxuXHRcdFx0dXNlX2ltcG9ydF9ub2RlIHx8IGlzX2ZpcmVmb3ggPyBkb2N1bWVudC5pbXBvcnROb2RlKG5vZGUsIHRydWUpIDogbm9kZS5jbG9uZU5vZGUodHJ1ZSlcblx0XHQpO1xuXG5cdFx0aWYgKGlzX2ZyYWdtZW50KSB7XG5cdFx0XHR2YXIgc3RhcnQgPSAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9maXJzdF9jaGlsZChjbG9uZSkpO1xuXHRcdFx0dmFyIGVuZCA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoY2xvbmUubGFzdENoaWxkKTtcblxuXHRcdFx0YXNzaWduX25vZGVzKHN0YXJ0LCBlbmQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhc3NpZ25fbm9kZXMoY2xvbmUsIGNsb25lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2xvbmU7XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnc1xuICogQHJldHVybnMgeygpID0+IE5vZGUgfCBOb2RlW119XG4gKi9cbi8qI19fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlX3dpdGhfc2NyaXB0KGNvbnRlbnQsIGZsYWdzKSB7XG5cdHZhciBmbiA9IHRlbXBsYXRlKGNvbnRlbnQsIGZsYWdzKTtcblx0cmV0dXJuICgpID0+IHJ1bl9zY3JpcHRzKC8qKiBAdHlwZSB7RWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnR9ICovIChmbigpKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnc1xuICogQHBhcmFtIHsnc3ZnJyB8ICdtYXRoJ30gbnNcbiAqIEByZXR1cm5zIHsoKSA9PiBOb2RlIHwgTm9kZVtdfVxuICovXG4vKiNfX05PX1NJREVfRUZGRUNUU19fKi9cbmV4cG9ydCBmdW5jdGlvbiBuc190ZW1wbGF0ZShjb250ZW50LCBmbGFncywgbnMgPSAnc3ZnJykge1xuXHQvKipcblx0ICogV2hldGhlciBvciBub3QgdGhlIGZpcnN0IGl0ZW0gaXMgYSB0ZXh0L2VsZW1lbnQgbm9kZS4gSWYgbm90LCB3ZSBuZWVkIHRvXG5cdCAqIGNyZWF0ZSBhbiBhZGRpdGlvbmFsIGNvbW1lbnQgbm9kZSB0byBhY3QgYXMgYGVmZmVjdC5ub2Rlcy5zdGFydGBcblx0ICovXG5cdHZhciBoYXNfc3RhcnQgPSAhY29udGVudC5zdGFydHNXaXRoKCc8IT4nKTtcblxuXHR2YXIgaXNfZnJhZ21lbnQgPSAoZmxhZ3MgJiBURU1QTEFURV9GUkFHTUVOVCkgIT09IDA7XG5cdHZhciB3cmFwcGVkID0gYDwke25zfT4ke2hhc19zdGFydCA/IGNvbnRlbnQgOiAnPCE+JyArIGNvbnRlbnR9PC8ke25zfT5gO1xuXG5cdC8qKiBAdHlwZSB7RWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnR9ICovXG5cdHZhciBub2RlO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0aWYgKGh5ZHJhdGluZykge1xuXHRcdFx0YXNzaWduX25vZGVzKGh5ZHJhdGVfbm9kZSwgbnVsbCk7XG5cdFx0XHRyZXR1cm4gaHlkcmF0ZV9ub2RlO1xuXHRcdH1cblxuXHRcdGlmICghbm9kZSkge1xuXHRcdFx0dmFyIGZyYWdtZW50ID0gLyoqIEB0eXBlIHtEb2N1bWVudEZyYWdtZW50fSAqLyAoY3JlYXRlX2ZyYWdtZW50X2Zyb21faHRtbCh3cmFwcGVkKSk7XG5cdFx0XHR2YXIgcm9vdCA9IC8qKiBAdHlwZSB7RWxlbWVudH0gKi8gKGdldF9maXJzdF9jaGlsZChmcmFnbWVudCkpO1xuXG5cdFx0XHRpZiAoaXNfZnJhZ21lbnQpIHtcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcdFx0d2hpbGUgKGdldF9maXJzdF9jaGlsZChyb290KSkge1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoLyoqIEB0eXBlIHtOb2RlfSAqLyAoZ2V0X2ZpcnN0X2NoaWxkKHJvb3QpKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5vZGUgPSAvKiogQHR5cGUge0VsZW1lbnR9ICovIChnZXRfZmlyc3RfY2hpbGQocm9vdCkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBjbG9uZSA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuXG5cdFx0aWYgKGlzX2ZyYWdtZW50KSB7XG5cdFx0XHR2YXIgc3RhcnQgPSAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9maXJzdF9jaGlsZChjbG9uZSkpO1xuXHRcdFx0dmFyIGVuZCA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoY2xvbmUubGFzdENoaWxkKTtcblxuXHRcdFx0YXNzaWduX25vZGVzKHN0YXJ0LCBlbmQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhc3NpZ25fbm9kZXMoY2xvbmUsIGNsb25lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2xvbmU7XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnc1xuICogQHJldHVybnMgeygpID0+IE5vZGUgfCBOb2RlW119XG4gKi9cbi8qI19fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIHN2Z190ZW1wbGF0ZV93aXRoX3NjcmlwdChjb250ZW50LCBmbGFncykge1xuXHR2YXIgZm4gPSBuc190ZW1wbGF0ZShjb250ZW50LCBmbGFncyk7XG5cdHJldHVybiAoKSA9PiBydW5fc2NyaXB0cygvKiogQHR5cGUge0VsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50fSAqLyAoZm4oKSkpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcGFyYW0ge251bWJlcn0gZmxhZ3NcbiAqIEByZXR1cm5zIHsoKSA9PiBOb2RlIHwgTm9kZVtdfVxuICovXG4vKiNfX05PX1NJREVfRUZGRUNUU19fKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXRobWxfdGVtcGxhdGUoY29udGVudCwgZmxhZ3MpIHtcblx0cmV0dXJuIG5zX3RlbXBsYXRlKGNvbnRlbnQsIGZsYWdzLCAnbWF0aCcpO1xufVxuXG4vKipcbiAqIENyZWF0aW5nIGEgZG9jdW1lbnQgZnJhZ21lbnQgZnJvbSBIVE1MIHRoYXQgY29udGFpbnMgc2NyaXB0IHRhZ3Mgd2lsbCBub3QgZXhlY3V0ZVxuICogdGhlIHNjcmlwdHMuIFdlIG5lZWQgdG8gcmVwbGFjZSB0aGUgc2NyaXB0IHRhZ3Mgd2l0aCBuZXcgb25lcyBzbyB0aGF0IHRoZXkgYXJlIGV4ZWN1dGVkLlxuICogQHBhcmFtIHtFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudH0gbm9kZVxuICogQHJldHVybnMge05vZGUgfCBOb2RlW119XG4gKi9cbmZ1bmN0aW9uIHJ1bl9zY3JpcHRzKG5vZGUpIHtcblx0Ly8gc2NyaXB0cyB3ZXJlIFNTUidkLCBpbiB3aGljaCBjYXNlIHRoZXkgd2lsbCBydW5cblx0aWYgKGh5ZHJhdGluZykgcmV0dXJuIG5vZGU7XG5cblx0Y29uc3QgaXNfZnJhZ21lbnQgPSBub2RlLm5vZGVUeXBlID09PSAxMTtcblx0Y29uc3Qgc2NyaXB0cyA9XG5cdFx0LyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8gKG5vZGUpLnRhZ05hbWUgPT09ICdTQ1JJUFQnXG5cdFx0XHQ/IFsvKiogQHR5cGUge0hUTUxTY3JpcHRFbGVtZW50fSAqLyAobm9kZSldXG5cdFx0XHQ6IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0Jyk7XG5cdGNvbnN0IGVmZmVjdCA9IC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAoYWN0aXZlX2VmZmVjdCk7XG5cblx0Zm9yIChjb25zdCBzY3JpcHQgb2Ygc2NyaXB0cykge1xuXHRcdGNvbnN0IGNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0Zm9yICh2YXIgYXR0cmlidXRlIG9mIHNjcmlwdC5hdHRyaWJ1dGVzKSB7XG5cdFx0XHRjbG9uZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUsIGF0dHJpYnV0ZS52YWx1ZSk7XG5cdFx0fVxuXG5cdFx0Y2xvbmUudGV4dENvbnRlbnQgPSBzY3JpcHQudGV4dENvbnRlbnQ7XG5cblx0XHQvLyBUaGUgc2NyaXB0IGhhcyBjaGFuZ2VkIC0gaWYgaXQncyBhdCB0aGUgZWRnZXMsIHRoZSBlZmZlY3Qgbm93IHBvaW50cyBhdCBkZWFkIG5vZGVzXG5cdFx0aWYgKGlzX2ZyYWdtZW50ID8gbm9kZS5maXJzdENoaWxkID09PSBzY3JpcHQgOiBub2RlID09PSBzY3JpcHQpIHtcblx0XHRcdGVmZmVjdC5ub2Rlc19zdGFydCA9IGNsb25lO1xuXHRcdH1cblx0XHRpZiAoaXNfZnJhZ21lbnQgPyBub2RlLmxhc3RDaGlsZCA9PT0gc2NyaXB0IDogbm9kZSA9PT0gc2NyaXB0KSB7XG5cdFx0XHRlZmZlY3Qubm9kZXNfZW5kID0gY2xvbmU7XG5cdFx0fVxuXG5cdFx0c2NyaXB0LnJlcGxhY2VXaXRoKGNsb25lKTtcblx0fVxuXHRyZXR1cm4gbm9kZTtcbn1cblxuLyoqXG4gKiBEb24ndCBtYXJrIHRoaXMgYXMgc2lkZS1lZmZlY3QtZnJlZSwgaHlkcmF0aW9uIG5lZWRzIHRvIHdhbGsgYWxsIG5vZGVzXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRleHQodmFsdWUgPSAnJykge1xuXHRpZiAoIWh5ZHJhdGluZykge1xuXHRcdHZhciB0ID0gY3JlYXRlX3RleHQodmFsdWUgKyAnJyk7XG5cdFx0YXNzaWduX25vZGVzKHQsIHQpO1xuXHRcdHJldHVybiB0O1xuXHR9XG5cblx0dmFyIG5vZGUgPSBoeWRyYXRlX25vZGU7XG5cblx0aWYgKG5vZGUubm9kZVR5cGUgIT09IDMpIHtcblx0XHQvLyBpZiBhbiB7ZXhwcmVzc2lvbn0gaXMgZW1wdHkgZHVyaW5nIFNTUiwgd2UgbmVlZCB0byBpbnNlcnQgYW4gZW1wdHkgdGV4dCBub2RlXG5cdFx0bm9kZS5iZWZvcmUoKG5vZGUgPSBjcmVhdGVfdGV4dCgpKSk7XG5cdFx0c2V0X2h5ZHJhdGVfbm9kZShub2RlKTtcblx0fVxuXG5cdGFzc2lnbl9ub2Rlcyhub2RlLCBub2RlKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21tZW50KCkge1xuXHQvLyB3ZSdyZSBub3QgZGVsZWdhdGluZyB0byBgdGVtcGxhdGVgIGhlcmUgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcblx0aWYgKGh5ZHJhdGluZykge1xuXHRcdGFzc2lnbl9ub2RlcyhoeWRyYXRlX25vZGUsIG51bGwpO1xuXHRcdHJldHVybiBoeWRyYXRlX25vZGU7XG5cdH1cblxuXHR2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0dmFyIHN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cdHZhciBhbmNob3IgPSBjcmVhdGVfdGV4dCgpO1xuXHRmcmFnLmFwcGVuZChzdGFydCwgYW5jaG9yKTtcblxuXHRhc3NpZ25fbm9kZXMoc3RhcnQsIGFuY2hvcik7XG5cblx0cmV0dXJuIGZyYWc7XG59XG5cbi8qKlxuICogQXNzaWduIHRoZSBjcmVhdGVkIChvciBpbiBoeWRyYXRpb24gbW9kZSwgdHJhdmVyc2VkKSBkb20gZWxlbWVudHMgdG8gdGhlIGN1cnJlbnQgYmxvY2tcbiAqIGFuZCBpbnNlcnQgdGhlIGVsZW1lbnRzIGludG8gdGhlIGRvbSAoaW4gY2xpZW50IG1vZGUpLlxuICogQHBhcmFtIHtUZXh0IHwgQ29tbWVudCB8IEVsZW1lbnR9IGFuY2hvclxuICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50IHwgRWxlbWVudH0gZG9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmQoYW5jaG9yLCBkb20pIHtcblx0aWYgKGh5ZHJhdGluZykge1xuXHRcdC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAoYWN0aXZlX2VmZmVjdCkubm9kZXNfZW5kID0gaHlkcmF0ZV9ub2RlO1xuXHRcdGh5ZHJhdGVfbmV4dCgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChhbmNob3IgPT09IG51bGwpIHtcblx0XHQvLyBlZGdlIGNhc2UgXHUyMDE0IHZvaWQgYDxzdmVsdGU6ZWxlbWVudD5gIHdpdGggY29udGVudFxuXHRcdHJldHVybjtcblx0fVxuXG5cdGFuY2hvci5iZWZvcmUoLyoqIEB0eXBlIHtOb2RlfSAqLyAoZG9tKSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIChvciBoeWRyYXRlKSBhbiB1bmlxdWUgVUlEIGZvciB0aGUgY29tcG9uZW50IGluc3RhbmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvcHNfaWQoKSB7XG5cdGlmIChcblx0XHRoeWRyYXRpbmcgJiZcblx0XHRoeWRyYXRlX25vZGUgJiZcblx0XHRoeWRyYXRlX25vZGUubm9kZVR5cGUgPT09IDggJiZcblx0XHRoeWRyYXRlX25vZGUudGV4dENvbnRlbnQ/LnN0YXJ0c1dpdGgoYCNgKVxuXHQpIHtcblx0XHRjb25zdCBpZCA9IGh5ZHJhdGVfbm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoMSk7XG5cdFx0aHlkcmF0ZV9uZXh0KCk7XG5cdFx0cmV0dXJuIGlkO1xuXHR9XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUaGlzIHdheSB3ZSBlbnN1cmUgdGhlIGlkIGlzIHVuaXF1ZSBldmVuIGFjcm9zcyBTdmVsdGUgcnVudGltZXNcblx0KHdpbmRvdy5fX3N2ZWx0ZSA/Pz0ge30pLnVpZCA/Pz0gMTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdHJldHVybiBgYyR7d2luZG93Ll9fc3ZlbHRlLnVpZCsrfWA7XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBDb21wb25lbnRDb250ZXh0LCBFZmZlY3QsIFRlbXBsYXRlTm9kZSB9IGZyb20gJyNjbGllbnQnICovXG4vKiogQGltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50VHlwZSwgU3ZlbHRlQ29tcG9uZW50LCBNb3VudE9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbmRleC5qcycgKi9cbmltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuaW1wb3J0IHtcblx0Y2xlYXJfdGV4dF9jb250ZW50LFxuXHRjcmVhdGVfdGV4dCxcblx0Z2V0X2ZpcnN0X2NoaWxkLFxuXHRnZXRfbmV4dF9zaWJsaW5nLFxuXHRpbml0X29wZXJhdGlvbnNcbn0gZnJvbSAnLi9kb20vb3BlcmF0aW9ucy5qcyc7XG5pbXBvcnQgeyBIWURSQVRJT05fRU5ELCBIWURSQVRJT05fRVJST1IsIEhZRFJBVElPTl9TVEFSVCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyBhY3RpdmVfZWZmZWN0IH0gZnJvbSAnLi9ydW50aW1lLmpzJztcbmltcG9ydCB7IHB1c2gsIHBvcCwgY29tcG9uZW50X2NvbnRleHQgfSBmcm9tICcuL2NvbnRleHQuanMnO1xuaW1wb3J0IHsgY29tcG9uZW50X3Jvb3QsIGJyYW5jaCB9IGZyb20gJy4vcmVhY3Rpdml0eS9lZmZlY3RzLmpzJztcbmltcG9ydCB7XG5cdGh5ZHJhdGVfbmV4dCxcblx0aHlkcmF0ZV9ub2RlLFxuXHRoeWRyYXRpbmcsXG5cdHNldF9oeWRyYXRlX25vZGUsXG5cdHNldF9oeWRyYXRpbmdcbn0gZnJvbSAnLi9kb20vaHlkcmF0aW9uLmpzJztcbmltcG9ydCB7IGFycmF5X2Zyb20gfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHtcblx0YWxsX3JlZ2lzdGVyZWRfZXZlbnRzLFxuXHRoYW5kbGVfZXZlbnRfcHJvcGFnYXRpb24sXG5cdHJvb3RfZXZlbnRfaGFuZGxlc1xufSBmcm9tICcuL2RvbS9lbGVtZW50cy9ldmVudHMuanMnO1xuaW1wb3J0IHsgcmVzZXRfaGVhZF9hbmNob3IgfSBmcm9tICcuL2RvbS9ibG9ja3Mvc3ZlbHRlLWhlYWQuanMnO1xuaW1wb3J0ICogYXMgdyBmcm9tICcuL3dhcm5pbmdzLmpzJztcbmltcG9ydCAqIGFzIGUgZnJvbSAnLi9lcnJvcnMuanMnO1xuaW1wb3J0IHsgYXNzaWduX25vZGVzIH0gZnJvbSAnLi9kb20vdGVtcGxhdGUuanMnO1xuaW1wb3J0IHsgaXNfcGFzc2l2ZV9ldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBUaGlzIGlzIG5vcm1hbGx5IHRydWUgXHUyMDE0IGJsb2NrIGVmZmVjdHMgc2hvdWxkIHJ1biB0aGVpciBpbnRybyB0cmFuc2l0aW9ucyBcdTIwMTRcbiAqIGJ1dCBpcyBmYWxzZSBkdXJpbmcgaHlkcmF0aW9uICh1bmxlc3MgYG9wdGlvbnMuaW50cm9gIGlzIGB0cnVlYCkgYW5kXG4gKiB3aGVuIGNyZWF0aW5nIHRoZSBjaGlsZHJlbiBvZiBhIGA8c3ZlbHRlOmVsZW1lbnQ+YCB0aGF0IGp1c3QgY2hhbmdlZCB0YWdcbiAqL1xuZXhwb3J0IGxldCBzaG91bGRfaW50cm8gPSB0cnVlO1xuXG4vKiogQHBhcmFtIHtib29sZWFufSB2YWx1ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9zaG91bGRfaW50cm8odmFsdWUpIHtcblx0c2hvdWxkX2ludHJvID0gdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSB0ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X3RleHQodGV4dCwgdmFsdWUpIHtcblx0Ly8gRm9yIG9iamVjdHMsIHdlIGFwcGx5IHN0cmluZyBjb2VyY2lvbiAod2hpY2ggbWlnaHQgbWFrZSB0aGluZ3MgbGlrZSAkc3RhdGUgYXJyYXkgcmVmZXJlbmNlcyBpbiB0aGUgdGVtcGxhdGUgcmVhY3RpdmUpIGJlZm9yZSBkaWZmaW5nXG5cdHZhciBzdHIgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgKyAnJyA6IHZhbHVlO1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdGlmIChzdHIgIT09ICh0ZXh0Ll9fdCA/Pz0gdGV4dC5ub2RlVmFsdWUpKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdHRleHQuX190ID0gc3RyO1xuXHRcdHRleHQubm9kZVZhbHVlID0gc3RyICsgJyc7XG5cdH1cbn1cblxuLyoqXG4gKiBNb3VudHMgYSBjb21wb25lbnQgdG8gdGhlIGdpdmVuIHRhcmdldCBhbmQgcmV0dXJucyB0aGUgZXhwb3J0cyBhbmQgcG90ZW50aWFsbHkgdGhlIHByb3BzIChpZiBjb21waWxlZCB3aXRoIGBhY2Nlc3NvcnM6IHRydWVgKSBvZiB0aGUgY29tcG9uZW50LlxuICogVHJhbnNpdGlvbnMgd2lsbCBwbGF5IGR1cmluZyB0aGUgaW5pdGlhbCByZW5kZXIgdW5sZXNzIHRoZSBgaW50cm9gIG9wdGlvbiBpcyBzZXQgdG8gYGZhbHNlYC5cbiAqXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IFByb3BzXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IEV4cG9ydHNcbiAqIEBwYXJhbSB7Q29tcG9uZW50VHlwZTxTdmVsdGVDb21wb25lbnQ8UHJvcHM+PiB8IENvbXBvbmVudDxQcm9wcywgRXhwb3J0cywgYW55Pn0gY29tcG9uZW50XG4gKiBAcGFyYW0ge01vdW50T3B0aW9uczxQcm9wcz59IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtFeHBvcnRzfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbW91bnQoY29tcG9uZW50LCBvcHRpb25zKSB7XG5cdHJldHVybiBfbW91bnQoY29tcG9uZW50LCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBIeWRyYXRlcyBhIGNvbXBvbmVudCBvbiB0aGUgZ2l2ZW4gdGFyZ2V0IGFuZCByZXR1cm5zIHRoZSBleHBvcnRzIGFuZCBwb3RlbnRpYWxseSB0aGUgcHJvcHMgKGlmIGNvbXBpbGVkIHdpdGggYGFjY2Vzc29yczogdHJ1ZWApIG9mIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IFByb3BzXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IEV4cG9ydHNcbiAqIEBwYXJhbSB7Q29tcG9uZW50VHlwZTxTdmVsdGVDb21wb25lbnQ8UHJvcHM+PiB8IENvbXBvbmVudDxQcm9wcywgRXhwb3J0cywgYW55Pn0gY29tcG9uZW50XG4gKiBAcGFyYW0ge3t9IGV4dGVuZHMgUHJvcHMgPyB7XG4gKiBcdFx0dGFyZ2V0OiBEb2N1bWVudCB8IEVsZW1lbnQgfCBTaGFkb3dSb290O1xuICogXHRcdHByb3BzPzogUHJvcHM7XG4gKiBcdFx0ZXZlbnRzPzogUmVjb3JkPHN0cmluZywgKGU6IGFueSkgPT4gYW55PjtcbiAqICBcdGNvbnRleHQ/OiBNYXA8YW55LCBhbnk+O1xuICogXHRcdGludHJvPzogYm9vbGVhbjtcbiAqIFx0XHRyZWNvdmVyPzogYm9vbGVhbjtcbiAqIFx0fSA6IHtcbiAqIFx0XHR0YXJnZXQ6IERvY3VtZW50IHwgRWxlbWVudCB8IFNoYWRvd1Jvb3Q7XG4gKiBcdFx0cHJvcHM6IFByb3BzO1xuICogXHRcdGV2ZW50cz86IFJlY29yZDxzdHJpbmcsIChlOiBhbnkpID0+IGFueT47XG4gKiAgXHRjb250ZXh0PzogTWFwPGFueSwgYW55PjtcbiAqIFx0XHRpbnRybz86IGJvb2xlYW47XG4gKiBcdFx0cmVjb3Zlcj86IGJvb2xlYW47XG4gKiBcdH19IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtFeHBvcnRzfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZShjb21wb25lbnQsIG9wdGlvbnMpIHtcblx0aW5pdF9vcGVyYXRpb25zKCk7XG5cdG9wdGlvbnMuaW50cm8gPSBvcHRpb25zLmludHJvID8/IGZhbHNlO1xuXHRjb25zdCB0YXJnZXQgPSBvcHRpb25zLnRhcmdldDtcblx0Y29uc3Qgd2FzX2h5ZHJhdGluZyA9IGh5ZHJhdGluZztcblx0Y29uc3QgcHJldmlvdXNfaHlkcmF0ZV9ub2RlID0gaHlkcmF0ZV9ub2RlO1xuXG5cdHRyeSB7XG5cdFx0dmFyIGFuY2hvciA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZ2V0X2ZpcnN0X2NoaWxkKHRhcmdldCkpO1xuXHRcdHdoaWxlIChcblx0XHRcdGFuY2hvciAmJlxuXHRcdFx0KGFuY2hvci5ub2RlVHlwZSAhPT0gOCB8fCAvKiogQHR5cGUge0NvbW1lbnR9ICovIChhbmNob3IpLmRhdGEgIT09IEhZRFJBVElPTl9TVEFSVClcblx0XHQpIHtcblx0XHRcdGFuY2hvciA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZ2V0X25leHRfc2libGluZyhhbmNob3IpKTtcblx0XHR9XG5cblx0XHRpZiAoIWFuY2hvcikge1xuXHRcdFx0dGhyb3cgSFlEUkFUSU9OX0VSUk9SO1xuXHRcdH1cblxuXHRcdHNldF9oeWRyYXRpbmcodHJ1ZSk7XG5cdFx0c2V0X2h5ZHJhdGVfbm9kZSgvKiogQHR5cGUge0NvbW1lbnR9ICovIChhbmNob3IpKTtcblx0XHRoeWRyYXRlX25leHQoKTtcblxuXHRcdGNvbnN0IGluc3RhbmNlID0gX21vdW50KGNvbXBvbmVudCwgeyAuLi5vcHRpb25zLCBhbmNob3IgfSk7XG5cblx0XHRpZiAoXG5cdFx0XHRoeWRyYXRlX25vZGUgPT09IG51bGwgfHxcblx0XHRcdGh5ZHJhdGVfbm9kZS5ub2RlVHlwZSAhPT0gOCB8fFxuXHRcdFx0LyoqIEB0eXBlIHtDb21tZW50fSAqLyAoaHlkcmF0ZV9ub2RlKS5kYXRhICE9PSBIWURSQVRJT05fRU5EXG5cdFx0KSB7XG5cdFx0XHR3Lmh5ZHJhdGlvbl9taXNtYXRjaCgpO1xuXHRcdFx0dGhyb3cgSFlEUkFUSU9OX0VSUk9SO1xuXHRcdH1cblxuXHRcdHNldF9oeWRyYXRpbmcoZmFsc2UpO1xuXG5cdFx0cmV0dXJuIC8qKiAgQHR5cGUge0V4cG9ydHN9ICovIChpbnN0YW5jZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yID09PSBIWURSQVRJT05fRVJST1IpIHtcblx0XHRcdGlmIChvcHRpb25zLnJlY292ZXIgPT09IGZhbHNlKSB7XG5cdFx0XHRcdGUuaHlkcmF0aW9uX2ZhaWxlZCgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBhbiBlcnJvciBvY2N1cmVkIGFib3ZlLCB0aGUgb3BlcmF0aW9ucyBtaWdodCBub3QgeWV0IGhhdmUgYmVlbiBpbml0aWFsaXNlZC5cblx0XHRcdGluaXRfb3BlcmF0aW9ucygpO1xuXHRcdFx0Y2xlYXJfdGV4dF9jb250ZW50KHRhcmdldCk7XG5cblx0XHRcdHNldF9oeWRyYXRpbmcoZmFsc2UpO1xuXHRcdFx0cmV0dXJuIG1vdW50KGNvbXBvbmVudCwgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZmluYWxseSB7XG5cdFx0c2V0X2h5ZHJhdGluZyh3YXNfaHlkcmF0aW5nKTtcblx0XHRzZXRfaHlkcmF0ZV9ub2RlKHByZXZpb3VzX2h5ZHJhdGVfbm9kZSk7XG5cdFx0cmVzZXRfaGVhZF9hbmNob3IoKTtcblx0fVxufVxuXG4vKiogQHR5cGUge01hcDxzdHJpbmcsIG51bWJlcj59ICovXG5jb25zdCBkb2N1bWVudF9saXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBFeHBvcnRzXG4gKiBAcGFyYW0ge0NvbXBvbmVudFR5cGU8U3ZlbHRlQ29tcG9uZW50PGFueT4+IHwgQ29tcG9uZW50PGFueT59IENvbXBvbmVudFxuICogQHBhcmFtIHtNb3VudE9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtFeHBvcnRzfVxuICovXG5mdW5jdGlvbiBfbW91bnQoQ29tcG9uZW50LCB7IHRhcmdldCwgYW5jaG9yLCBwcm9wcyA9IHt9LCBldmVudHMsIGNvbnRleHQsIGludHJvID0gdHJ1ZSB9KSB7XG5cdGluaXRfb3BlcmF0aW9ucygpO1xuXG5cdHZhciByZWdpc3RlcmVkX2V2ZW50cyA9IG5ldyBTZXQoKTtcblxuXHQvKiogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBldmVudHMgKi9cblx0dmFyIGV2ZW50X2hhbmRsZSA9IChldmVudHMpID0+IHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGV2ZW50X25hbWUgPSBldmVudHNbaV07XG5cblx0XHRcdGlmIChyZWdpc3RlcmVkX2V2ZW50cy5oYXMoZXZlbnRfbmFtZSkpIGNvbnRpbnVlO1xuXHRcdFx0cmVnaXN0ZXJlZF9ldmVudHMuYWRkKGV2ZW50X25hbWUpO1xuXG5cdFx0XHR2YXIgcGFzc2l2ZSA9IGlzX3Bhc3NpdmVfZXZlbnQoZXZlbnRfbmFtZSk7XG5cblx0XHRcdC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gYm90aCB0aGUgY29udGFpbmVyIGFuZCB0aGUgZG9jdW1lbnQuXG5cdFx0XHQvLyBUaGUgY29udGFpbmVyIGxpc3RlbmVyIGVuc3VyZXMgd2UgY2F0Y2ggZXZlbnRzIGZyb20gd2l0aGluIGluIGNhc2Vcblx0XHRcdC8vIHRoZSBvdXRlciBjb250ZW50IHN0b3BzIHByb3BhZ2F0aW9uIG9mIHRoZSBldmVudC5cblx0XHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50X25hbWUsIGhhbmRsZV9ldmVudF9wcm9wYWdhdGlvbiwgeyBwYXNzaXZlIH0pO1xuXG5cdFx0XHR2YXIgbiA9IGRvY3VtZW50X2xpc3RlbmVycy5nZXQoZXZlbnRfbmFtZSk7XG5cblx0XHRcdGlmIChuID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gVGhlIGRvY3VtZW50IGxpc3RlbmVyIGVuc3VyZXMgd2UgY2F0Y2ggZXZlbnRzIHRoYXQgb3JpZ2luYXRlIGZyb20gZWxlbWVudHMgdGhhdCB3ZXJlXG5cdFx0XHRcdC8vIG1hbnVhbGx5IG1vdmVkIG91dHNpZGUgb2YgdGhlIGNvbnRhaW5lciAoZS5nLiB2aWEgbWFudWFsIHBvcnRhbHMpLlxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50X25hbWUsIGhhbmRsZV9ldmVudF9wcm9wYWdhdGlvbiwgeyBwYXNzaXZlIH0pO1xuXHRcdFx0XHRkb2N1bWVudF9saXN0ZW5lcnMuc2V0KGV2ZW50X25hbWUsIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG9jdW1lbnRfbGlzdGVuZXJzLnNldChldmVudF9uYW1lLCBuICsgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGV2ZW50X2hhbmRsZShhcnJheV9mcm9tKGFsbF9yZWdpc3RlcmVkX2V2ZW50cykpO1xuXHRyb290X2V2ZW50X2hhbmRsZXMuYWRkKGV2ZW50X2hhbmRsZSk7XG5cblx0LyoqIEB0eXBlIHtFeHBvcnRzfSAqL1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIHdpbGwgYmUgZGVmaW5lZCBiZWNhdXNlIHRoZSByZW5kZXIgZWZmZWN0IHJ1bnMgc3luY2hyb25vdXNseVxuXHR2YXIgY29tcG9uZW50ID0gdW5kZWZpbmVkO1xuXG5cdHZhciB1bm1vdW50ID0gY29tcG9uZW50X3Jvb3QoKCkgPT4ge1xuXHRcdHZhciBhbmNob3Jfbm9kZSA9IGFuY2hvciA/PyB0YXJnZXQuYXBwZW5kQ2hpbGQoY3JlYXRlX3RleHQoKSk7XG5cblx0XHRicmFuY2goKCkgPT4ge1xuXHRcdFx0aWYgKGNvbnRleHQpIHtcblx0XHRcdFx0cHVzaCh7fSk7XG5cdFx0XHRcdHZhciBjdHggPSAvKiogQHR5cGUge0NvbXBvbmVudENvbnRleHR9ICovIChjb21wb25lbnRfY29udGV4dCk7XG5cdFx0XHRcdGN0eC5jID0gY29udGV4dDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGV2ZW50cykge1xuXHRcdFx0XHQvLyBXZSBjYW4ndCBzcHJlYWQgdGhlIG9iamVjdCBvciBlbHNlIHdlJ2QgbG9zZSB0aGUgc3RhdGUgcHJveHkgc3R1ZmYsIGlmIGl0IGlzIG9uZVxuXHRcdFx0XHQvKiogQHR5cGUge2FueX0gKi8gKHByb3BzKS4kJGV2ZW50cyA9IGV2ZW50cztcblx0XHRcdH1cblxuXHRcdFx0aWYgKGh5ZHJhdGluZykge1xuXHRcdFx0XHRhc3NpZ25fbm9kZXMoLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChhbmNob3Jfbm9kZSksIG51bGwpO1xuXHRcdFx0fVxuXG5cdFx0XHRzaG91bGRfaW50cm8gPSBpbnRybztcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgdGhlIHB1YmxpYyB0eXBpbmdzIGFyZSBub3Qgd2hhdCB0aGUgYWN0dWFsIGZ1bmN0aW9uIGxvb2tzIGxpa2Vcblx0XHRcdGNvbXBvbmVudCA9IENvbXBvbmVudChhbmNob3Jfbm9kZSwgcHJvcHMpIHx8IHt9O1xuXHRcdFx0c2hvdWxkX2ludHJvID0gdHJ1ZTtcblxuXHRcdFx0aWYgKGh5ZHJhdGluZykge1xuXHRcdFx0XHQvKiogQHR5cGUge0VmZmVjdH0gKi8gKGFjdGl2ZV9lZmZlY3QpLm5vZGVzX2VuZCA9IGh5ZHJhdGVfbm9kZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbnRleHQpIHtcblx0XHRcdFx0cG9wKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0Zm9yICh2YXIgZXZlbnRfbmFtZSBvZiByZWdpc3RlcmVkX2V2ZW50cykge1xuXHRcdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudF9uYW1lLCBoYW5kbGVfZXZlbnRfcHJvcGFnYXRpb24pO1xuXG5cdFx0XHRcdHZhciBuID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChkb2N1bWVudF9saXN0ZW5lcnMuZ2V0KGV2ZW50X25hbWUpKTtcblxuXHRcdFx0XHRpZiAoLS1uID09PSAwKSB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudF9uYW1lLCBoYW5kbGVfZXZlbnRfcHJvcGFnYXRpb24pO1xuXHRcdFx0XHRcdGRvY3VtZW50X2xpc3RlbmVycy5kZWxldGUoZXZlbnRfbmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZG9jdW1lbnRfbGlzdGVuZXJzLnNldChldmVudF9uYW1lLCBuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyb290X2V2ZW50X2hhbmRsZXMuZGVsZXRlKGV2ZW50X2hhbmRsZSk7XG5cblx0XHRcdGlmIChhbmNob3Jfbm9kZSAhPT0gYW5jaG9yKSB7XG5cdFx0XHRcdGFuY2hvcl9ub2RlLnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKGFuY2hvcl9ub2RlKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9KTtcblxuXHRtb3VudGVkX2NvbXBvbmVudHMuc2V0KGNvbXBvbmVudCwgdW5tb3VudCk7XG5cdHJldHVybiBjb21wb25lbnQ7XG59XG5cbi8qKlxuICogUmVmZXJlbmNlcyBvZiB0aGUgY29tcG9uZW50cyB0aGF0IHdlcmUgbW91bnRlZCBvciBoeWRyYXRlZC5cbiAqIFVzZXMgYSBgV2Vha01hcGAgdG8gYXZvaWQgbWVtb3J5IGxlYWtzLlxuICovXG5sZXQgbW91bnRlZF9jb21wb25lbnRzID0gbmV3IFdlYWtNYXAoKTtcblxuLyoqXG4gKiBVbm1vdW50cyBhIGNvbXBvbmVudCB0aGF0IHdhcyBwcmV2aW91c2x5IG1vdW50ZWQgdXNpbmcgYG1vdW50YCBvciBgaHlkcmF0ZWAuXG4gKlxuICogU2luY2UgNS4xMy4wLCBpZiBgb3B0aW9ucy5vdXRyb2AgaXMgYHRydWVgLCBbdHJhbnNpdGlvbnNdKGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS90cmFuc2l0aW9uKSB3aWxsIHBsYXkgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00uXG4gKlxuICogUmV0dXJucyBhIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIGFmdGVyIHRyYW5zaXRpb25zIGhhdmUgY29tcGxldGVkIGlmIGBvcHRpb25zLm91dHJvYCBpcyB0cnVlLCBvciBpbW1lZGlhdGVseSBvdGhlcndpc2UgKHByaW9yIHRvIDUuMTMuMCwgcmV0dXJucyBgdm9pZGApLlxuICpcbiAqIGBgYGpzXG4gKiBpbXBvcnQgeyBtb3VudCwgdW5tb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG4gKiBpbXBvcnQgQXBwIGZyb20gJy4vQXBwLnN2ZWx0ZSc7XG4gKlxuICogY29uc3QgYXBwID0gbW91bnQoQXBwLCB7IHRhcmdldDogZG9jdW1lbnQuYm9keSB9KTtcbiAqXG4gKiAvLyBsYXRlci4uLlxuICogdW5tb3VudChhcHAsIHsgb3V0cm86IHRydWUgfSk7XG4gKiBgYGBcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gY29tcG9uZW50XG4gKiBAcGFyYW0ge3sgb3V0cm8/OiBib29sZWFuIH19IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50KGNvbXBvbmVudCwgb3B0aW9ucykge1xuXHRjb25zdCBmbiA9IG1vdW50ZWRfY29tcG9uZW50cy5nZXQoY29tcG9uZW50KTtcblxuXHRpZiAoZm4pIHtcblx0XHRtb3VudGVkX2NvbXBvbmVudHMuZGVsZXRlKGNvbXBvbmVudCk7XG5cdFx0cmV0dXJuIGZuKG9wdGlvbnMpO1xuXHR9XG5cblx0aWYgKERFVikge1xuXHRcdHcubGlmZWN5Y2xlX2RvdWJsZV91bm1vdW50KCk7XG5cdH1cblxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBUZW1wbGF0ZU5vZGUgfSBmcm9tICcjY2xpZW50JyAqL1xuLyoqIEBpbXBvcnQgeyBHZXR0ZXJzIH0gZnJvbSAnI3NoYXJlZCcgKi9cbmltcG9ydCB7IGlzX3ZvaWQgfSBmcm9tICcuLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgKiBhcyB3IGZyb20gJy4vd2FybmluZ3MuanMnO1xuaW1wb3J0ICogYXMgZSBmcm9tICcuL2Vycm9ycy5qcyc7XG5cbmV4cG9ydCB7IGludmFsaWRfZGVmYXVsdF9zbmlwcGV0IH0gZnJvbSAnLi9lcnJvcnMuanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gc3RyaW5nfSB0YWdfZm5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVfdm9pZF9keW5hbWljX2VsZW1lbnQodGFnX2ZuKSB7XG5cdGNvbnN0IHRhZyA9IHRhZ19mbigpO1xuXHRpZiAodGFnICYmIGlzX3ZvaWQodGFnKSkge1xuXHRcdHcuZHluYW1pY192b2lkX2VsZW1lbnRfY29udGVudCh0YWcpO1xuXHR9XG59XG5cbi8qKiBAcGFyYW0geygpID0+IHVua25vd259IHRhZ19mbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlX2R5bmFtaWNfZWxlbWVudF90YWcodGFnX2ZuKSB7XG5cdGNvbnN0IHRhZyA9IHRhZ19mbigpO1xuXHRjb25zdCBpc19zdHJpbmcgPSB0eXBlb2YgdGFnID09PSAnc3RyaW5nJztcblx0aWYgKHRhZyAmJiAhaXNfc3RyaW5nKSB7XG5cdFx0ZS5zdmVsdGVfZWxlbWVudF9pbnZhbGlkX3RoaXNfdmFsdWUoKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBzdG9yZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlX3N0b3JlKHN0b3JlLCBuYW1lKSB7XG5cdGlmIChzdG9yZSAhPSBudWxsICYmIHR5cGVvZiBzdG9yZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcblx0XHRlLnN0b3JlX2ludmFsaWRfc2hhcGUobmFtZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgeygpID0+IHVua25vd259IFRcbiAqIEBwYXJhbSB7VH0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXZlbnRfc25pcHBldF9zdHJpbmdpZmljYXRpb24oZm4pIHtcblx0Zm4udG9TdHJpbmcgPSAoKSA9PiB7XG5cdFx0ZS5zbmlwcGV0X3dpdGhvdXRfcmVuZGVyX3RhZygpO1xuXHRcdHJldHVybiAnJztcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuIiwgImltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuaW1wb3J0IHsgaHlkcmF0aW5nLCBzZXRfaHlkcmF0aW5nIH0gZnJvbSAnLi4vaHlkcmF0aW9uLmpzJztcbmltcG9ydCB7IGdldF9kZXNjcmlwdG9ycywgZ2V0X3Byb3RvdHlwZV9vZiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVfZXZlbnQsIGRlbGVnYXRlIH0gZnJvbSAnLi9ldmVudHMuanMnO1xuaW1wb3J0IHsgYWRkX2Zvcm1fcmVzZXRfbGlzdGVuZXIsIGF1dG9mb2N1cyB9IGZyb20gJy4vbWlzYy5qcyc7XG5pbXBvcnQgKiBhcyB3IGZyb20gJy4uLy4uL3dhcm5pbmdzLmpzJztcbmltcG9ydCB7IExPQURJTkdfQVRUUl9TWU1CT0wgfSBmcm9tICcjY2xpZW50L2NvbnN0YW50cyc7XG5pbXBvcnQgeyBxdWV1ZV9pZGxlX3Rhc2sgfSBmcm9tICcuLi90YXNrLmpzJztcbmltcG9ydCB7IGlzX2NhcHR1cmVfZXZlbnQsIGlzX2RlbGVnYXRlZCwgbm9ybWFsaXplX2F0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzLmpzJztcbmltcG9ydCB7XG5cdGFjdGl2ZV9lZmZlY3QsXG5cdGFjdGl2ZV9yZWFjdGlvbixcblx0c2V0X2FjdGl2ZV9lZmZlY3QsXG5cdHNldF9hY3RpdmVfcmVhY3Rpb25cbn0gZnJvbSAnLi4vLi4vcnVudGltZS5qcyc7XG5pbXBvcnQgeyBjbHN4IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2F0dHJpYnV0ZXMuanMnO1xuaW1wb3J0IHsgc2V0X2NsYXNzIH0gZnJvbSAnLi9jbGFzcy5qcyc7XG5pbXBvcnQgeyBzZXRfc3R5bGUgfSBmcm9tICcuL3N0eWxlLmpzJztcbmltcG9ydCB7IE5BTUVTUEFDRV9IVE1MIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnRzLmpzJztcblxuZXhwb3J0IGNvbnN0IENMQVNTID0gU3ltYm9sKCdjbGFzcycpO1xuZXhwb3J0IGNvbnN0IFNUWUxFID0gU3ltYm9sKCdzdHlsZScpO1xuXG5jb25zdCBJU19DVVNUT01fRUxFTUVOVCA9IFN5bWJvbCgnaXMgY3VzdG9tIGVsZW1lbnQnKTtcbmNvbnN0IElTX0hUTUwgPSBTeW1ib2woJ2lzIGh0bWwnKTtcblxuLyoqXG4gKiBUaGUgdmFsdWUvY2hlY2tlZCBhdHRyaWJ1dGUgaW4gdGhlIHRlbXBsYXRlIGFjdHVhbGx5IGNvcnJlc3BvbmRzIHRvIHRoZSBkZWZhdWx0VmFsdWUgcHJvcGVydHksIHNvIHdlIG5lZWRcbiAqIHRvIHJlbW92ZSBpdCB1cG9uIGh5ZHJhdGlvbiB0byBhdm9pZCBhIGJ1ZyB3aGVuIHNvbWVvbmUgcmVzZXRzIHRoZSBmb3JtIHZhbHVlLlxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBpbnB1dFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVfaW5wdXRfZGVmYXVsdHMoaW5wdXQpIHtcblx0aWYgKCFoeWRyYXRpbmcpIHJldHVybjtcblxuXHR2YXIgYWxyZWFkeV9yZW1vdmVkID0gZmFsc2U7XG5cblx0Ly8gV2UgdHJ5IGFuZCByZW1vdmUgdGhlIGRlZmF1bHQgYXR0cmlidXRlcyBsYXRlciwgcmF0aGVyIHRoYW4gc3luYyBkdXJpbmcgaHlkcmF0aW9uLlxuXHQvLyBEb2luZyBpdCBzeW5jIGR1cmluZyBoeWRyYXRpb24gaGFzIGEgbmVnYXRpdmUgaW1wYWN0IG9uIHBlcmZvcm1hbmNlLCBidXQgZGVmZXJyaW5nIHRoZVxuXHQvLyB3b3JrIGluIGFuIGlkbGUgdGFzayBhbGxldmlhdGVzIHRoaXMgZ3JlYXRseS4gSWYgYSBmb3JtIHJlc2V0IGV2ZW50IGNvbWVzIGluIGJlZm9yZVxuXHQvLyB0aGUgaWRsZSBjYWxsYmFjaywgdGhlbiB3ZSBlbnN1cmUgdGhlIGlucHV0IGRlZmF1bHRzIGFyZSBjbGVhcmVkIGp1c3QgYmVmb3JlLlxuXHR2YXIgcmVtb3ZlX2RlZmF1bHRzID0gKCkgPT4ge1xuXHRcdGlmIChhbHJlYWR5X3JlbW92ZWQpIHJldHVybjtcblx0XHRhbHJlYWR5X3JlbW92ZWQgPSB0cnVlO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBhdHRyaWJ1dGVzIGJ1dCBwcmVzZXJ2ZSB0aGUgdmFsdWVzXG5cdFx0aWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuXHRcdFx0dmFyIHZhbHVlID0gaW5wdXQudmFsdWU7XG5cdFx0XHRzZXRfYXR0cmlidXRlKGlucHV0LCAndmFsdWUnLCBudWxsKTtcblx0XHRcdGlucHV0LnZhbHVlID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgnY2hlY2tlZCcpKSB7XG5cdFx0XHR2YXIgY2hlY2tlZCA9IGlucHV0LmNoZWNrZWQ7XG5cdFx0XHRzZXRfYXR0cmlidXRlKGlucHV0LCAnY2hlY2tlZCcsIG51bGwpO1xuXHRcdFx0aW5wdXQuY2hlY2tlZCA9IGNoZWNrZWQ7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0aW5wdXQuX19vbl9yID0gcmVtb3ZlX2RlZmF1bHRzO1xuXHRxdWV1ZV9pZGxlX3Rhc2socmVtb3ZlX2RlZmF1bHRzKTtcblx0YWRkX2Zvcm1fcmVzZXRfbGlzdGVuZXIoKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X3ZhbHVlKGVsZW1lbnQsIHZhbHVlKSB7XG5cdHZhciBhdHRyaWJ1dGVzID0gZ2V0X2F0dHJpYnV0ZXMoZWxlbWVudCk7XG5cblx0aWYgKFxuXHRcdGF0dHJpYnV0ZXMudmFsdWUgPT09XG5cdFx0XHQoYXR0cmlidXRlcy52YWx1ZSA9XG5cdFx0XHRcdC8vIHRyZWF0IG51bGwgYW5kIHVuZGVmaW5lZCB0aGUgc2FtZSBmb3IgdGhlIGluaXRpYWwgdmFsdWVcblx0XHRcdFx0dmFsdWUgPz8gdW5kZWZpbmVkKSB8fFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHQvLyBgcHJvZ3Jlc3NgIGVsZW1lbnRzIGFsd2F5cyBuZWVkIHRoZWlyIHZhbHVlIHNldCB3aGVuIGl0J3MgYDBgXG5cdFx0KGVsZW1lbnQudmFsdWUgPT09IHZhbHVlICYmICh2YWx1ZSAhPT0gMCB8fCBlbGVtZW50Lm5vZGVOYW1lICE9PSAnUFJPR1JFU1MnKSlcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRlbGVtZW50LnZhbHVlID0gdmFsdWUgPz8gJyc7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNoZWNrZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9jaGVja2VkKGVsZW1lbnQsIGNoZWNrZWQpIHtcblx0dmFyIGF0dHJpYnV0ZXMgPSBnZXRfYXR0cmlidXRlcyhlbGVtZW50KTtcblxuXHRpZiAoXG5cdFx0YXR0cmlidXRlcy5jaGVja2VkID09PVxuXHRcdChhdHRyaWJ1dGVzLmNoZWNrZWQgPVxuXHRcdFx0Ly8gdHJlYXQgbnVsbCBhbmQgdW5kZWZpbmVkIHRoZSBzYW1lIGZvciB0aGUgaW5pdGlhbCB2YWx1ZVxuXHRcdFx0Y2hlY2tlZCA/PyB1bmRlZmluZWQpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0ZWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBgc2VsZWN0ZWRgIGF0dHJpYnV0ZSBvbiBhbiBgb3B0aW9uYCBlbGVtZW50LlxuICogTm90IHNldCB0aHJvdWdoIHRoZSBwcm9wZXJ0eSBiZWNhdXNlIHRoYXQgZG9lc24ndCByZWZsZWN0IHRvIHRoZSBET00sXG4gKiB3aGljaCBtZWFucyBpdCB3b3VsZG4ndCBiZSB0YWtlbiBpbnRvIGFjY291bnQgd2hlbiBhIGZvcm0gaXMgcmVzZXQuXG4gKiBAcGFyYW0ge0hUTUxPcHRpb25FbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfc2VsZWN0ZWQoZWxlbWVudCwgc2VsZWN0ZWQpIHtcblx0aWYgKHNlbGVjdGVkKSB7XG5cdFx0Ly8gVGhlIHNlbGVjdGVkIG9wdGlvbiBjb3VsZCd2ZSBjaGFuZ2VkIHZpYSB1c2VyIHNlbGVjdGlvbiwgYW5kXG5cdFx0Ly8gc2V0dGluZyB0aGUgdmFsdWUgd2l0aG91dCB0aGlzIGNoZWNrIHdvdWxkIHNldCBpdCBiYWNrLlxuXHRcdGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3NlbGVjdGVkJykpIHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG5cdH1cbn1cblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBkZWZhdWx0IGNoZWNrZWQgcHJvcGVydHkgd2l0aG91dCBpbmZsdWVuY2luZyB0aGUgY3VycmVudCBjaGVja2VkIHByb3BlcnR5LlxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNoZWNrZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9kZWZhdWx0X2NoZWNrZWQoZWxlbWVudCwgY2hlY2tlZCkge1xuXHRjb25zdCBleGlzdGluZ192YWx1ZSA9IGVsZW1lbnQuY2hlY2tlZDtcblx0ZWxlbWVudC5kZWZhdWx0Q2hlY2tlZCA9IGNoZWNrZWQ7XG5cdGVsZW1lbnQuY2hlY2tlZCA9IGV4aXN0aW5nX3ZhbHVlO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgdGhlIGRlZmF1bHQgdmFsdWUgcHJvcGVydHkgd2l0aG91dCBpbmZsdWVuY2luZyB0aGUgY3VycmVudCB2YWx1ZSBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2RlZmF1bHRfdmFsdWUoZWxlbWVudCwgdmFsdWUpIHtcblx0Y29uc3QgZXhpc3RpbmdfdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuXHRlbGVtZW50LmRlZmF1bHRWYWx1ZSA9IHZhbHVlO1xuXHRlbGVtZW50LnZhbHVlID0gZXhpc3RpbmdfdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bGx9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwX3dhcm5pbmddXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfYXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUsIHNraXBfd2FybmluZykge1xuXHR2YXIgYXR0cmlidXRlcyA9IGdldF9hdHRyaWJ1dGVzKGVsZW1lbnQpO1xuXG5cdGlmIChoeWRyYXRpbmcpIHtcblx0XHRhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXG5cdFx0aWYgKFxuXHRcdFx0YXR0cmlidXRlID09PSAnc3JjJyB8fFxuXHRcdFx0YXR0cmlidXRlID09PSAnc3Jjc2V0JyB8fFxuXHRcdFx0KGF0dHJpYnV0ZSA9PT0gJ2hyZWYnICYmIGVsZW1lbnQubm9kZU5hbWUgPT09ICdMSU5LJylcblx0XHQpIHtcblx0XHRcdGlmICghc2tpcF93YXJuaW5nKSB7XG5cdFx0XHRcdGNoZWNrX3NyY19pbl9kZXZfaHlkcmF0aW9uKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUgPz8gJycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB3ZSByZXNldCB0aGVzZSBhdHRyaWJ1dGVzLCB0aGV5IHdvdWxkIHJlc3VsdCBpbiBhbm90aGVyIG5ldHdvcmsgcmVxdWVzdCwgd2hpY2ggd2Ugd2FudCB0byBhdm9pZC5cblx0XHRcdC8vIFdlIGFzc3VtZSB0aGV5IGFyZSB0aGUgc2FtZSBiZXR3ZWVuIGNsaWVudCBhbmQgc2VydmVyIGFzIGNoZWNraW5nIGlmIHRoZXkgYXJlIGVxdWFsIGlzIGV4cGVuc2l2ZVxuXHRcdFx0Ly8gKHdlIGNhbid0IGp1c3QgY29tcGFyZSB0aGUgc3RyaW5ncyBhcyB0aGV5IGNhbiBiZSBkaWZmZXJlbnQgYmV0d2VlbiBjbGllbnQgYW5kIHNlcnZlciBidXQgcmVzdWx0IGluIHRoZVxuXHRcdFx0Ly8gc2FtZSB1cmwsIHNvIHdlIHdvdWxkIG5lZWQgdG8gY3JlYXRlIGhpZGRlbiBhbmNob3IgZWxlbWVudHMgdG8gY29tcGFyZSB0aGVtKVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPT09IChhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPSB2YWx1ZSkpIHJldHVybjtcblxuXHRpZiAoYXR0cmlidXRlID09PSAnbG9hZGluZycpIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0ZWxlbWVudFtMT0FESU5HX0FUVFJfU1lNQk9MXSA9IHZhbHVlO1xuXHR9XG5cblx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgJiYgZ2V0X3NldHRlcnMoZWxlbWVudCkuaW5jbHVkZXMoYXR0cmlidXRlKSkge1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRlbGVtZW50W2F0dHJpYnV0ZV0gPSB2YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZG9tXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF94bGlua19hdHRyaWJ1dGUoZG9tLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG5cdGRvbS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIHByb3AsIHZhbHVlKSB7XG5cdC8vIFdlIG5lZWQgdG8gZW5zdXJlIHRoYXQgc2V0dGluZyBjdXN0b20gZWxlbWVudCBwcm9wcywgd2hpY2ggY2FuXG5cdC8vIGludm9rZSBsaWZlY3ljbGUgbWV0aG9kcyBvbiBvdGhlciBjdXN0b20gZWxlbWVudHMsIGRvZXMgbm90IGFsc29cblx0Ly8gYXNzb2NpYXRlIHRob3NlIGxpZmVjeWNsZSBtZXRob2RzIHdpdGggdGhlIGN1cnJlbnQgYWN0aXZlIHJlYWN0aW9uXG5cdC8vIG9yIGVmZmVjdFxuXHR2YXIgcHJldmlvdXNfcmVhY3Rpb24gPSBhY3RpdmVfcmVhY3Rpb247XG5cdHZhciBwcmV2aW91c19lZmZlY3QgPSBhY3RpdmVfZWZmZWN0O1xuXG5cdC8vIElmIHdlJ3JlIGh5ZHJhdGluZyBidXQgdGhlIGN1c3RvbSBlbGVtZW50IGlzIGZyb20gU3ZlbHRlLCBhbmQgaXQgYWxyZWFkeSBzY2FmZm9sZGVkLFxuXHQvLyB0aGVuIGl0IG1pZ2h0IHJ1biBibG9jayBsb2dpYyBpbiBoeWRyYXRpb24gbW9kZSwgd2hpY2ggd2UgaGF2ZSB0byBwcmV2ZW50LlxuXHRsZXQgd2FzX2h5ZHJhdGluZyA9IGh5ZHJhdGluZztcblx0aWYgKGh5ZHJhdGluZykge1xuXHRcdHNldF9oeWRyYXRpbmcoZmFsc2UpO1xuXHR9XG5cblx0c2V0X2FjdGl2ZV9yZWFjdGlvbihudWxsKTtcblx0c2V0X2FjdGl2ZV9lZmZlY3QobnVsbCk7XG5cblx0dHJ5IHtcblx0XHRpZiAoXG5cdFx0XHQvLyBgc3R5bGVgIHNob3VsZCB1c2UgYHNldF9hdHRyaWJ1dGVgIHJhdGhlciB0aGFuIHRoZSBzZXR0ZXJcblx0XHRcdHByb3AgIT09ICdzdHlsZScgJiZcblx0XHRcdC8vIERvbid0IGNvbXB1dGUgc2V0dGVycyBmb3IgY3VzdG9tIGVsZW1lbnRzIHdoaWxlIHRoZXkgYXJlbid0IHJlZ2lzdGVyZWQgeWV0LFxuXHRcdFx0Ly8gYmVjYXVzZSBkdXJpbmcgdGhlaXIgdXBncmFkZS9pbnN0YW50aWF0aW9uIHRoZXkgbWlnaHQgYWRkIG1vcmUgc2V0dGVycy5cblx0XHRcdC8vIEluc3RlYWQsIGZhbGwgYmFjayB0byBhIHNpbXBsZSBcImFuIG9iamVjdCwgdGhlbiBzZXQgYXMgcHJvcGVydHlcIiBoZXVyaXN0aWMuXG5cdFx0XHQoc2V0dGVyc19jYWNoZS5oYXMobm9kZS5ub2RlTmFtZSkgfHxcblx0XHRcdC8vIGN1c3RvbUVsZW1lbnRzIG1heSBub3QgYmUgYXZhaWxhYmxlIGluIGJyb3dzZXIgZXh0ZW5zaW9uIGNvbnRleHRzXG5cdFx0XHQhY3VzdG9tRWxlbWVudHMgfHxcblx0XHRcdGN1c3RvbUVsZW1lbnRzLmdldChub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSlcblx0XHRcdFx0PyBnZXRfc2V0dGVycyhub2RlKS5pbmNsdWRlcyhwcm9wKVxuXHRcdFx0XHQ6IHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG5cdFx0KSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0XHRub2RlW3Byb3BdID0gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFdlIGRpZCBnZXR0ZXJzIGV0YyBjaGVja3MgYWxyZWFkeSwgc3RyaW5naWZ5IGJlZm9yZSBwYXNzaW5nIHRvIHNldF9hdHRyaWJ1dGVcblx0XHRcdC8vIHRvIGVuc3VyZSBpdCBkb2Vzbid0IGludm9rZSB0aGUgc2FtZSBsb2dpYyBhZ2FpbiwgYW5kIHBvdGVudGlhbGx5IHBvcHVsYXRpbmdcblx0XHRcdC8vIHRoZSBzZXR0ZXJzIGNhY2hlIHRvbyBlYXJseS5cblx0XHRcdHNldF9hdHRyaWJ1dGUobm9kZSwgcHJvcCwgdmFsdWUgPT0gbnVsbCA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKSk7XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdHNldF9hY3RpdmVfcmVhY3Rpb24ocHJldmlvdXNfcmVhY3Rpb24pO1xuXHRcdHNldF9hY3RpdmVfZWZmZWN0KHByZXZpb3VzX2VmZmVjdCk7XG5cdFx0aWYgKHdhc19oeWRyYXRpbmcpIHtcblx0XHRcdHNldF9oeWRyYXRpbmcodHJ1ZSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogU3ByZWFkcyBhdHRyaWJ1dGVzIG9udG8gYSBET00gZWxlbWVudCwgdGFraW5nIGludG8gYWNjb3VudCB0aGUgY3VycmVudGx5IHNldCBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge0VsZW1lbnQgJiBFbGVtZW50Q1NTSW5saW5lU3R5bGV9IGVsZW1lbnRcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZyB8IHN5bWJvbCwgYW55PiB8IHVuZGVmaW5lZH0gcHJldlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nIHwgc3ltYm9sLCBhbnk+fSBuZXh0IE5ldyBhdHRyaWJ1dGVzIC0gdGhpcyBmdW5jdGlvbiBtdXRhdGVzIHRoaXMgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gW2Nzc19oYXNoXVxuICogQHBhcmFtIHtib29sZWFufSBbc2tpcF93YXJuaW5nXVxuICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIGFueT59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfYXR0cmlidXRlcyhlbGVtZW50LCBwcmV2LCBuZXh0LCBjc3NfaGFzaCwgc2tpcF93YXJuaW5nID0gZmFsc2UpIHtcblx0dmFyIGF0dHJpYnV0ZXMgPSBnZXRfYXR0cmlidXRlcyhlbGVtZW50KTtcblxuXHR2YXIgaXNfY3VzdG9tX2VsZW1lbnQgPSBhdHRyaWJ1dGVzW0lTX0NVU1RPTV9FTEVNRU5UXTtcblx0dmFyIHByZXNlcnZlX2F0dHJpYnV0ZV9jYXNlID0gIWF0dHJpYnV0ZXNbSVNfSFRNTF07XG5cblx0Ly8gSWYgd2UncmUgaHlkcmF0aW5nIGJ1dCB0aGUgY3VzdG9tIGVsZW1lbnQgaXMgZnJvbSBTdmVsdGUsIGFuZCBpdCBhbHJlYWR5IHNjYWZmb2xkZWQsXG5cdC8vIHRoZW4gaXQgbWlnaHQgcnVuIGJsb2NrIGxvZ2ljIGluIGh5ZHJhdGlvbiBtb2RlLCB3aGljaCB3ZSBoYXZlIHRvIHByZXZlbnQuXG5cdGxldCBpc19oeWRyYXRpbmdfY3VzdG9tX2VsZW1lbnQgPSBoeWRyYXRpbmcgJiYgaXNfY3VzdG9tX2VsZW1lbnQ7XG5cdGlmIChpc19oeWRyYXRpbmdfY3VzdG9tX2VsZW1lbnQpIHtcblx0XHRzZXRfaHlkcmF0aW5nKGZhbHNlKTtcblx0fVxuXG5cdHZhciBjdXJyZW50ID0gcHJldiB8fCB7fTtcblx0dmFyIGlzX29wdGlvbl9lbGVtZW50ID0gZWxlbWVudC50YWdOYW1lID09PSAnT1BUSU9OJztcblxuXHRmb3IgKHZhciBrZXkgaW4gcHJldikge1xuXHRcdGlmICghKGtleSBpbiBuZXh0KSkge1xuXHRcdFx0bmV4dFtrZXldID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRpZiAobmV4dC5jbGFzcykge1xuXHRcdG5leHQuY2xhc3MgPSBjbHN4KG5leHQuY2xhc3MpO1xuXHR9IGVsc2UgaWYgKGNzc19oYXNoIHx8IG5leHRbQ0xBU1NdKSB7XG5cdFx0bmV4dC5jbGFzcyA9IG51bGw7IC8qIGZvcmNlIGNhbGwgdG8gc2V0X2NsYXNzKCkgKi9cblx0fVxuXG5cdGlmIChuZXh0W1NUWUxFXSkge1xuXHRcdG5leHQuc3R5bGUgPz89IG51bGw7IC8qIGZvcmNlIGNhbGwgdG8gc2V0X3N0eWxlKCkgKi9cblx0fVxuXG5cdHZhciBzZXR0ZXJzID0gZ2V0X3NldHRlcnMoZWxlbWVudCk7XG5cblx0Ly8gc2luY2Uga2V5IGlzIGNhcHR1cmVkIHdlIHVzZSBjb25zdFxuXHRmb3IgKGNvbnN0IGtleSBpbiBuZXh0KSB7XG5cdFx0Ly8gbGV0IGluc3RlYWQgb2YgdmFyIGJlY2F1c2UgcmVmZXJlbmNlZCBpbiBhIGNsb3N1cmVcblx0XHRsZXQgdmFsdWUgPSBuZXh0W2tleV07XG5cblx0XHQvLyBVcCBoZXJlIGJlY2F1c2Ugd2Ugd2FudCB0byBkbyB0aGlzIGZvciB0aGUgaW5pdGlhbCB2YWx1ZSwgdG9vLCBldmVuIGlmIGl0J3MgdW5kZWZpbmVkLFxuXHRcdC8vIGFuZCB0aGlzIHdvdWxkbid0IGJlIHJlYWNoZWQgaW4gY2FzZSBvZiB1bmRlZmluZWQgYmVjYXVzZSBvZiB0aGUgZXF1YWxpdHkgY2hlY2sgYmVsb3dcblx0XHRpZiAoaXNfb3B0aW9uX2VsZW1lbnQgJiYga2V5ID09PSAndmFsdWUnICYmIHZhbHVlID09IG51bGwpIHtcblx0XHRcdC8vIFRoZSA8b3B0aW9uPiBlbGVtZW50IGlzIGEgc3BlY2lhbCBjYXNlIGJlY2F1c2UgcmVtb3ZpbmcgdGhlIHZhbHVlIGF0dHJpYnV0ZSBtZWFuc1xuXHRcdFx0Ly8gdGhlIHZhbHVlIGlzIHNldCB0byB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBvcHRpb24gZWxlbWVudCwgYW5kIHNldHRpbmcgdGhlIHZhbHVlXG5cdFx0XHQvLyB0byBudWxsIG9yIHVuZGVmaW5lZCBtZWFucyB0aGUgdmFsdWUgaXMgc2V0IHRvIHRoZSBzdHJpbmcgXCJudWxsXCIgb3IgXCJ1bmRlZmluZWRcIi5cblx0XHRcdC8vIFRvIGFsaWduIHdpdGggaG93IHdlIGhhbmRsZSB0aGlzIGNhc2UgaW4gbm9uLXNwcmVhZC1zY2VuYXJpb3MsIHRoaXMgbG9naWMgaXMgbmVlZGVkLlxuXHRcdFx0Ly8gVGhlcmUncyBhIHN1cGVyLWVkZ2UtY2FzZSBidWcgaGVyZSB0aGF0IGlzIGxlZnQgaW4gaW4gZmF2b3Igb2Ygc21hbGxlciBjb2RlIHNpemU6XG5cdFx0XHQvLyBCZWNhdXNlIG9mIHRoZSBcInNldCBtaXNzaW5nIHByb3BzIHRvIG51bGxcIiBsb2dpYyBhYm92ZSwgd2UgY2FuJ3QgZGlmZmVyZW50aWF0ZVxuXHRcdFx0Ly8gYmV0d2VlbiBhIG1pc3NpbmcgdmFsdWUgYW5kIGFuIGV4cGxpY2l0bHkgc2V0IHZhbHVlIG9mIG51bGwgb3IgdW5kZWZpbmVkLiBUaGF0IG1lYW5zXG5cdFx0XHQvLyB0aGF0IG9uY2Ugc2V0LCB0aGUgdmFsdWUgYXR0cmlidXRlIG9mIGFuIDxvcHRpb24+IGVsZW1lbnQgY2FuJ3QgYmUgcmVtb3ZlZC4gVGhpcyBpc1xuXHRcdFx0Ly8gYSB2ZXJ5IHJhcmUgZWRnZSBjYXNlLCBhbmQgcmVtb3ZpbmcgdGhlIGF0dHJpYnV0ZSBhbHRvZ2V0aGVyIGlzbid0IHBvc3NpYmxlIGVpdGhlclxuXHRcdFx0Ly8gZm9yIHRoZSA8b3B0aW9uIHZhbHVlPXt1bmRlZmluZWR9PiBjYXNlLCBzbyB3ZSdyZSBub3QgbG9zaW5nIGFueSBmdW5jdGlvbmFsaXR5IGhlcmUuXG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRlbGVtZW50LnZhbHVlID0gZWxlbWVudC5fX3ZhbHVlID0gJyc7XG5cdFx0XHRjdXJyZW50W2tleV0gPSB2YWx1ZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChrZXkgPT09ICdjbGFzcycpIHtcblx0XHRcdHZhciBpc19odG1sID0gZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcblx0XHRcdHNldF9jbGFzcyhlbGVtZW50LCBpc19odG1sLCB2YWx1ZSwgY3NzX2hhc2gsIHByZXY/LltDTEFTU10sIG5leHRbQ0xBU1NdKTtcblx0XHRcdGN1cnJlbnRba2V5XSA9IHZhbHVlO1xuXHRcdFx0Y3VycmVudFtDTEFTU10gPSBuZXh0W0NMQVNTXTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChrZXkgPT09ICdzdHlsZScpIHtcblx0XHRcdHNldF9zdHlsZShlbGVtZW50LCB2YWx1ZSwgcHJldj8uW1NUWUxFXSwgbmV4dFtTVFlMRV0pO1xuXHRcdFx0Y3VycmVudFtrZXldID0gdmFsdWU7XG5cdFx0XHRjdXJyZW50W1NUWUxFXSA9IG5leHRbU1RZTEVdO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dmFyIHByZXZfdmFsdWUgPSBjdXJyZW50W2tleV07XG5cdFx0aWYgKHZhbHVlID09PSBwcmV2X3ZhbHVlKSBjb250aW51ZTtcblxuXHRcdGN1cnJlbnRba2V5XSA9IHZhbHVlO1xuXG5cdFx0dmFyIHByZWZpeCA9IGtleVswXSArIGtleVsxXTsgLy8gdGhpcyBpcyBmYXN0ZXIgdGhhbiBrZXkuc2xpY2UoMCwgMilcblx0XHRpZiAocHJlZml4ID09PSAnJCQnKSBjb250aW51ZTtcblxuXHRcdGlmIChwcmVmaXggPT09ICdvbicpIHtcblx0XHRcdC8qKiBAdHlwZSB7eyBjYXB0dXJlPzogdHJ1ZSB9fSAqL1xuXHRcdFx0Y29uc3Qgb3B0cyA9IHt9O1xuXHRcdFx0Y29uc3QgZXZlbnRfaGFuZGxlX2tleSA9ICckJCcgKyBrZXk7XG5cdFx0XHRsZXQgZXZlbnRfbmFtZSA9IGtleS5zbGljZSgyKTtcblx0XHRcdHZhciBkZWxlZ2F0ZWQgPSBpc19kZWxlZ2F0ZWQoZXZlbnRfbmFtZSk7XG5cblx0XHRcdGlmIChpc19jYXB0dXJlX2V2ZW50KGV2ZW50X25hbWUpKSB7XG5cdFx0XHRcdGV2ZW50X25hbWUgPSBldmVudF9uYW1lLnNsaWNlKDAsIC03KTtcblx0XHRcdFx0b3B0cy5jYXB0dXJlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFkZWxlZ2F0ZWQgJiYgcHJldl92YWx1ZSkge1xuXHRcdFx0XHQvLyBMaXN0ZW5pbmcgdG8gc2FtZSBldmVudCBidXQgZGlmZmVyZW50IGhhbmRsZXIgLT4gb3VyIGhhbmRsZSBmdW5jdGlvbiBiZWxvdyB0YWtlcyBjYXJlIG9mIHRoaXNcblx0XHRcdFx0Ly8gSWYgd2Ugd2VyZSB0byByZW1vdmUgYW5kIGFkZCBsaXN0ZW5lcnMgaW4gdGhpcyBjYXNlLCBpdCBjb3VsZCBoYXBwZW4gdGhhdCB0aGUgZXZlbnQgaXMgXCJzd2FsbG93ZWRcIlxuXHRcdFx0XHQvLyAodGhlIGJyb3dzZXIgc2VlbXMgdG8gbm90IGtub3cgeWV0IHRoYXQgYSBuZXcgb25lIGV4aXN0cyBub3cpIGFuZCBkb2Vzbid0IHJlYWNoIHRoZSBoYW5kbGVyXG5cdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvaXNzdWVzLzExOTAzXG5cdFx0XHRcdGlmICh2YWx1ZSAhPSBudWxsKSBjb250aW51ZTtcblxuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgY3VycmVudFtldmVudF9oYW5kbGVfa2V5XSwgb3B0cyk7XG5cdFx0XHRcdGN1cnJlbnRbZXZlbnRfaGFuZGxlX2tleV0gPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoIWRlbGVnYXRlZCkge1xuXHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdCAqIEB0aGlzIHthbnl9XG5cdFx0XHRcdFx0ICogQHBhcmFtIHtFdmVudH0gZXZ0XG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0ZnVuY3Rpb24gaGFuZGxlKGV2dCkge1xuXHRcdFx0XHRcdFx0Y3VycmVudFtrZXldLmNhbGwodGhpcywgZXZ0KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjdXJyZW50W2V2ZW50X2hhbmRsZV9rZXldID0gY3JlYXRlX2V2ZW50KGV2ZW50X25hbWUsIGVsZW1lbnQsIGhhbmRsZSwgb3B0cyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdGVsZW1lbnRbYF9fJHtldmVudF9uYW1lfWBdID0gdmFsdWU7XG5cdFx0XHRcdFx0ZGVsZWdhdGUoW2V2ZW50X25hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChkZWxlZ2F0ZWQpIHtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRlbGVtZW50W2BfXyR7ZXZlbnRfbmFtZX1gXSA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0Ly8gYXZvaWQgdXNpbmcgdGhlIHNldHRlclxuXHRcdFx0c2V0X2F0dHJpYnV0ZShlbGVtZW50LCBrZXksIHZhbHVlKTtcblx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ2F1dG9mb2N1cycpIHtcblx0XHRcdGF1dG9mb2N1cygvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAoZWxlbWVudCksIEJvb2xlYW4odmFsdWUpKTtcblx0XHR9IGVsc2UgaWYgKCFpc19jdXN0b21fZWxlbWVudCAmJiAoa2V5ID09PSAnX192YWx1ZScgfHwgKGtleSA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZSAhPSBudWxsKSkpIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgV2UncmUgbm90IHJ1bm5pbmcgdGhpcyBmb3IgY3VzdG9tIGVsZW1lbnRzIGJlY2F1c2UgX192YWx1ZSBpcyBhY3R1YWxseVxuXHRcdFx0Ly8gaG93IExpdCBzdG9yZXMgdGhlIGN1cnJlbnQgdmFsdWUgb24gdGhlIGVsZW1lbnQsIGFuZCBtZXNzaW5nIHdpdGggdGhhdCB3b3VsZCBicmVhayB0aGluZ3MuXG5cdFx0XHRlbGVtZW50LnZhbHVlID0gZWxlbWVudC5fX3ZhbHVlID0gdmFsdWU7XG5cdFx0fSBlbHNlIGlmIChrZXkgPT09ICdzZWxlY3RlZCcgJiYgaXNfb3B0aW9uX2VsZW1lbnQpIHtcblx0XHRcdHNldF9zZWxlY3RlZCgvKiogQHR5cGUge0hUTUxPcHRpb25FbGVtZW50fSAqLyAoZWxlbWVudCksIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIG5hbWUgPSBrZXk7XG5cdFx0XHRpZiAoIXByZXNlcnZlX2F0dHJpYnV0ZV9jYXNlKSB7XG5cdFx0XHRcdG5hbWUgPSBub3JtYWxpemVfYXR0cmlidXRlKG5hbWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaXNfZGVmYXVsdCA9IG5hbWUgPT09ICdkZWZhdWx0VmFsdWUnIHx8IG5hbWUgPT09ICdkZWZhdWx0Q2hlY2tlZCc7XG5cblx0XHRcdGlmICh2YWx1ZSA9PSBudWxsICYmICFpc19jdXN0b21fZWxlbWVudCAmJiAhaXNfZGVmYXVsdCkge1xuXHRcdFx0XHRhdHRyaWJ1dGVzW2tleV0gPSBudWxsO1xuXG5cdFx0XHRcdGlmIChuYW1lID09PSAndmFsdWUnIHx8IG5hbWUgPT09ICdjaGVja2VkJykge1xuXHRcdFx0XHRcdC8vIHJlbW92aW5nIHZhbHVlL2NoZWNrZWQgYWxzbyByZW1vdmVzIGRlZmF1bHRWYWx1ZS9kZWZhdWx0Q2hlY2tlZCBcdTIwMTQgcHJlc2VydmVcblx0XHRcdFx0XHRsZXQgaW5wdXQgPSAvKiogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnR9ICovIChlbGVtZW50KTtcblx0XHRcdFx0XHRjb25zdCB1c2VfZGVmYXVsdCA9IHByZXYgPT09IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRpZiAobmFtZSA9PT0gJ3ZhbHVlJykge1xuXHRcdFx0XHRcdFx0bGV0IHByZXZpb3VzID0gaW5wdXQuZGVmYXVsdFZhbHVlO1xuXHRcdFx0XHRcdFx0aW5wdXQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdFx0XHRcdFx0aW5wdXQuZGVmYXVsdFZhbHVlID0gcHJldmlvdXM7XG5cdFx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IGlucHV0Ll9fdmFsdWUgPSB1c2VfZGVmYXVsdCA/IHByZXZpb3VzIDogbnVsbDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bGV0IHByZXZpb3VzID0gaW5wdXQuZGVmYXVsdENoZWNrZWQ7XG5cdFx0XHRcdFx0XHRpbnB1dC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0XHRcdFx0XHRpbnB1dC5kZWZhdWx0Q2hlY2tlZCA9IHByZXZpb3VzO1xuXHRcdFx0XHRcdFx0aW5wdXQuY2hlY2tlZCA9IHVzZV9kZWZhdWx0ID8gcHJldmlvdXMgOiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0aXNfZGVmYXVsdCB8fFxuXHRcdFx0XHQoc2V0dGVycy5pbmNsdWRlcyhuYW1lKSAmJiAoaXNfY3VzdG9tX2VsZW1lbnQgfHwgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykpXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRlbGVtZW50W25hbWVdID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRzZXRfYXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBza2lwX3dhcm5pbmcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChpc19oeWRyYXRpbmdfY3VzdG9tX2VsZW1lbnQpIHtcblx0XHRzZXRfaHlkcmF0aW5nKHRydWUpO1xuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnQ7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICovXG5mdW5jdGlvbiBnZXRfYXR0cmlidXRlcyhlbGVtZW50KSB7XG5cdHJldHVybiAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcgfCBzeW1ib2wsIHVua25vd24+fSAqKi8gKFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRlbGVtZW50Ll9fYXR0cmlidXRlcyA/Pz0ge1xuXHRcdFx0W0lTX0NVU1RPTV9FTEVNRU5UXTogZWxlbWVudC5ub2RlTmFtZS5pbmNsdWRlcygnLScpLFxuXHRcdFx0W0lTX0hUTUxdOiBlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gTkFNRVNQQUNFX0hUTUxcblx0XHR9XG5cdCk7XG59XG5cbi8qKiBAdHlwZSB7TWFwPHN0cmluZywgc3RyaW5nW10+fSAqL1xudmFyIHNldHRlcnNfY2FjaGUgPSBuZXcgTWFwKCk7XG5cbi8qKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgKi9cbmZ1bmN0aW9uIGdldF9zZXR0ZXJzKGVsZW1lbnQpIHtcblx0dmFyIHNldHRlcnMgPSBzZXR0ZXJzX2NhY2hlLmdldChlbGVtZW50Lm5vZGVOYW1lKTtcblx0aWYgKHNldHRlcnMpIHJldHVybiBzZXR0ZXJzO1xuXHRzZXR0ZXJzX2NhY2hlLnNldChlbGVtZW50Lm5vZGVOYW1lLCAoc2V0dGVycyA9IFtdKSk7XG5cblx0dmFyIGRlc2NyaXB0b3JzO1xuXHR2YXIgcHJvdG8gPSBlbGVtZW50OyAvLyBJbiB0aGUgY2FzZSBvZiBjdXN0b20gZWxlbWVudHMgdGhlcmUgbWlnaHQgYmUgc2V0dGVycyBvbiB0aGUgaW5zdGFuY2Vcblx0dmFyIGVsZW1lbnRfcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblxuXHQvLyBTdG9wIGF0IEVsZW1lbnQsIGZyb20gdGhlcmUgb24gdGhlcmUncyBvbmx5IHVubmVjZXNzYXJ5IHNldHRlcnMgd2UncmUgbm90IGludGVyZXN0ZWQgaW5cblx0Ly8gRG8gbm90IHVzZSBjb250cnVjdG9yLm5hbWUgaGVyZSBhcyB0aGF0J3MgdW5yZWxpYWJsZSBpbiBzb21lIGJyb3dzZXIgZW52aXJvbm1lbnRzXG5cdHdoaWxlIChlbGVtZW50X3Byb3RvICE9PSBwcm90bykge1xuXHRcdGRlc2NyaXB0b3JzID0gZ2V0X2Rlc2NyaXB0b3JzKHByb3RvKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBkZXNjcmlwdG9ycykge1xuXHRcdFx0aWYgKGRlc2NyaXB0b3JzW2tleV0uc2V0KSB7XG5cdFx0XHRcdHNldHRlcnMucHVzaChrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHByb3RvID0gZ2V0X3Byb3RvdHlwZV9vZihwcm90byk7XG5cdH1cblxuXHRyZXR1cm4gc2V0dGVycztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrX3NyY19pbl9kZXZfaHlkcmF0aW9uKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0aWYgKCFERVYpIHJldHVybjtcblx0aWYgKGF0dHJpYnV0ZSA9PT0gJ3NyY3NldCcgJiYgc3Jjc2V0X3VybF9lcXVhbChlbGVtZW50LCB2YWx1ZSkpIHJldHVybjtcblx0aWYgKHNyY191cmxfZXF1YWwoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSA/PyAnJywgdmFsdWUpKSByZXR1cm47XG5cblx0dy5oeWRyYXRpb25fYXR0cmlidXRlX2NoYW5nZWQoXG5cdFx0YXR0cmlidXRlLFxuXHRcdGVsZW1lbnQub3V0ZXJIVE1MLnJlcGxhY2UoZWxlbWVudC5pbm5lckhUTUwsIGVsZW1lbnQuaW5uZXJIVE1MICYmICcuLi4nKSxcblx0XHRTdHJpbmcodmFsdWUpXG5cdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRfc3JjXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gc3JjX3VybF9lcXVhbChlbGVtZW50X3NyYywgdXJsKSB7XG5cdGlmIChlbGVtZW50X3NyYyA9PT0gdXJsKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIG5ldyBVUkwoZWxlbWVudF9zcmMsIGRvY3VtZW50LmJhc2VVUkkpLmhyZWYgPT09IG5ldyBVUkwodXJsLCBkb2N1bWVudC5iYXNlVVJJKS5ocmVmO1xufVxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHNyY3NldCAqL1xuZnVuY3Rpb24gc3BsaXRfc3Jjc2V0KHNyY3NldCkge1xuXHRyZXR1cm4gc3Jjc2V0LnNwbGl0KCcsJykubWFwKChzcmMpID0+IHNyYy50cmltKCkuc3BsaXQoJyAnKS5maWx0ZXIoQm9vbGVhbikpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTFNvdXJjZUVsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gc3Jjc2V0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gc3Jjc2V0X3VybF9lcXVhbChlbGVtZW50LCBzcmNzZXQpIHtcblx0dmFyIGVsZW1lbnRfdXJscyA9IHNwbGl0X3NyY3NldChlbGVtZW50LnNyY3NldCk7XG5cdHZhciB1cmxzID0gc3BsaXRfc3Jjc2V0KHNyY3NldCk7XG5cblx0cmV0dXJuIChcblx0XHR1cmxzLmxlbmd0aCA9PT0gZWxlbWVudF91cmxzLmxlbmd0aCAmJlxuXHRcdHVybHMuZXZlcnkoXG5cdFx0XHQoW3VybCwgd2lkdGhdLCBpKSA9PlxuXHRcdFx0XHR3aWR0aCA9PT0gZWxlbWVudF91cmxzW2ldWzFdICYmXG5cdFx0XHRcdC8vIFdlIG5lZWQgdG8gdGVzdCBib3RoIHdheXMgYmVjYXVzZSBWaXRlIHdpbGwgY3JlYXRlIGFuIGEgZnVsbCBVUkwgd2l0aFxuXHRcdFx0XHQvLyBgbmV3IFVSTChhc3NldCwgaW1wb3J0Lm1ldGEudXJsKS5ocmVmYCBmb3IgdGhlIGNsaWVudCB3aGVuIGBiYXNlOiAnLi8nYCwgYW5kIHRoZVxuXHRcdFx0XHQvLyByZWxhdGl2ZSBVUkxzIGluc2lkZSBzcmNzZXQgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IHJlc29sdmVkIHRvIGFic29sdXRlIFVSTHMgYnlcblx0XHRcdFx0Ly8gYnJvd3NlcnMgKGluIGNvbnRyYXN0IHRvIGltZy5zcmMpLiBUaGlzIG1lYW5zIGJvdGggU1NSIGFuZCBET00gY29kZSBjb3VsZFxuXHRcdFx0XHQvLyBjb250YWluIHJlbGF0aXZlIG9yIGFic29sdXRlIFVSTHMuXG5cdFx0XHRcdChzcmNfdXJsX2VxdWFsKGVsZW1lbnRfdXJsc1tpXVswXSwgdXJsKSB8fCBzcmNfdXJsX2VxdWFsKHVybCwgZWxlbWVudF91cmxzW2ldWzBdKSlcblx0XHQpXG5cdCk7XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBSZWFkYWJsZSwgU3RhcnRTdG9wTm90aWZpZXIsIFN1YnNjcmliZXIsIFVuc3Vic2NyaWJlciwgVXBkYXRlciwgV3JpdGFibGUgfSBmcm9tICcuLi9wdWJsaWMuanMnICovXG4vKiogQGltcG9ydCB7IFN0b3JlcywgU3RvcmVzVmFsdWVzLCBTdWJzY3JpYmVJbnZhbGlkYXRlVHVwbGUgfSBmcm9tICcuLi9wcml2YXRlLmpzJyAqL1xuaW1wb3J0IHsgbm9vcCwgcnVuX2FsbCB9IGZyb20gJy4uLy4uL2ludGVybmFsL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQgeyBzYWZlX25vdF9lcXVhbCB9IGZyb20gJy4uLy4uL2ludGVybmFsL2NsaWVudC9yZWFjdGl2aXR5L2VxdWFsaXR5LmpzJztcbmltcG9ydCB7IHN1YnNjcmliZV90b19zdG9yZSB9IGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBAdHlwZSB7QXJyYXk8U3Vic2NyaWJlSW52YWxpZGF0ZVR1cGxlPGFueT4gfCBhbnk+fVxuICovXG5jb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBSZWFkYWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7VH0gW3ZhbHVlXSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyPFQ+fSBbc3RhcnRdXG4gKiBAcmV0dXJucyB7UmVhZGFibGU8VD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkYWJsZSh2YWx1ZSwgc3RhcnQpIHtcblx0cmV0dXJuIHtcblx0XHRzdWJzY3JpYmU6IHdyaXRhYmxlKHZhbHVlLCBzdGFydCkuc3Vic2NyaWJlXG5cdH07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYFdyaXRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtUfSBbdmFsdWVdIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXI8VD59IFtzdGFydF1cbiAqIEByZXR1cm5zIHtXcml0YWJsZTxUPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyaXRhYmxlKHZhbHVlLCBzdGFydCA9IG5vb3ApIHtcblx0LyoqIEB0eXBlIHtVbnN1YnNjcmliZXIgfCBudWxsfSAqL1xuXHRsZXQgc3RvcCA9IG51bGw7XG5cblx0LyoqIEB0eXBlIHtTZXQ8U3Vic2NyaWJlSW52YWxpZGF0ZVR1cGxlPFQ+Pn0gKi9cblx0Y29uc3Qgc3Vic2NyaWJlcnMgPSBuZXcgU2V0KCk7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7VH0gbmV3X3ZhbHVlXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0ZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuXHRcdGlmIChzYWZlX25vdF9lcXVhbCh2YWx1ZSwgbmV3X3ZhbHVlKSkge1xuXHRcdFx0dmFsdWUgPSBuZXdfdmFsdWU7XG5cdFx0XHRpZiAoc3RvcCkge1xuXHRcdFx0XHQvLyBzdG9yZSBpcyByZWFkeVxuXHRcdFx0XHRjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG5cdFx0XHRcdGZvciAoY29uc3Qgc3Vic2NyaWJlciBvZiBzdWJzY3JpYmVycykge1xuXHRcdFx0XHRcdHN1YnNjcmliZXJbMV0oKTtcblx0XHRcdFx0XHRzdWJzY3JpYmVyX3F1ZXVlLnB1c2goc3Vic2NyaWJlciwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChydW5fcXVldWUpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdFx0XHRcdHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aCA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtVcGRhdGVyPFQ+fSBmblxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZShmbikge1xuXHRcdHNldChmbigvKiogQHR5cGUge1R9ICovICh2YWx1ZSkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1N1YnNjcmliZXI8VD59IHJ1blxuXHQgKiBAcGFyYW0geygpID0+IHZvaWR9IFtpbnZhbGlkYXRlXVxuXHQgKiBAcmV0dXJucyB7VW5zdWJzY3JpYmVyfVxuXHQgKi9cblx0ZnVuY3Rpb24gc3Vic2NyaWJlKHJ1biwgaW52YWxpZGF0ZSA9IG5vb3ApIHtcblx0XHQvKiogQHR5cGUge1N1YnNjcmliZUludmFsaWRhdGVUdXBsZTxUPn0gKi9cblx0XHRjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG5cdFx0c3Vic2NyaWJlcnMuYWRkKHN1YnNjcmliZXIpO1xuXHRcdGlmIChzdWJzY3JpYmVycy5zaXplID09PSAxKSB7XG5cdFx0XHRzdG9wID0gc3RhcnQoc2V0LCB1cGRhdGUpIHx8IG5vb3A7XG5cdFx0fVxuXHRcdHJ1bigvKiogQHR5cGUge1R9ICovICh2YWx1ZSkpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRzdWJzY3JpYmVycy5kZWxldGUoc3Vic2NyaWJlcik7XG5cdFx0XHRpZiAoc3Vic2NyaWJlcnMuc2l6ZSA9PT0gMCAmJiBzdG9wKSB7XG5cdFx0XHRcdHN0b3AoKTtcblx0XHRcdFx0c3RvcCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG59XG5cbi8qKlxuICogRGVyaXZlZCB2YWx1ZSBzdG9yZSBieSBzeW5jaHJvbml6aW5nIG9uZSBvciBtb3JlIHJlYWRhYmxlIHN0b3JlcyBhbmRcbiAqIGFwcGx5aW5nIGFuIGFnZ3JlZ2F0aW9uIGZ1bmN0aW9uIG92ZXIgaXRzIGlucHV0IHZhbHVlcy5cbiAqXG4gKiBAdGVtcGxhdGUge1N0b3Jlc30gU1xuICogQHRlbXBsYXRlIFRcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtIHtTfSBzdG9yZXNcbiAqIEBwYXJhbSB7KHZhbHVlczogU3RvcmVzVmFsdWVzPFM+LCBzZXQ6ICh2YWx1ZTogVCkgPT4gdm9pZCwgdXBkYXRlOiAoZm46IFVwZGF0ZXI8VD4pID0+IHZvaWQpID0+IFVuc3Vic2NyaWJlciB8IHZvaWR9IGZuXG4gKiBAcGFyYW0ge1R9IFtpbml0aWFsX3ZhbHVlXVxuICogQHJldHVybnMge1JlYWRhYmxlPFQ+fVxuICovXG4vKipcbiAqIERlcml2ZWQgdmFsdWUgc3RvcmUgYnkgc3luY2hyb25pemluZyBvbmUgb3IgbW9yZSByZWFkYWJsZSBzdG9yZXMgYW5kXG4gKiBhcHBseWluZyBhbiBhZ2dyZWdhdGlvbiBmdW5jdGlvbiBvdmVyIGl0cyBpbnB1dCB2YWx1ZXMuXG4gKlxuICogQHRlbXBsYXRlIHtTdG9yZXN9IFNcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSB7U30gc3RvcmVzXG4gKiBAcGFyYW0geyh2YWx1ZXM6IFN0b3Jlc1ZhbHVlczxTPikgPT4gVH0gZm5cbiAqIEBwYXJhbSB7VH0gW2luaXRpYWxfdmFsdWVdXG4gKiBAcmV0dXJucyB7UmVhZGFibGU8VD59XG4gKi9cbi8qKlxuICogQHRlbXBsYXRlIHtTdG9yZXN9IFNcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1N9IHN0b3Jlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7VH0gW2luaXRpYWxfdmFsdWVdXG4gKiBAcmV0dXJucyB7UmVhZGFibGU8VD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmVkKHN0b3JlcywgZm4sIGluaXRpYWxfdmFsdWUpIHtcblx0Y29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoc3RvcmVzKTtcblx0LyoqIEB0eXBlIHtBcnJheTxSZWFkYWJsZTxhbnk+Pn0gKi9cblx0Y29uc3Qgc3RvcmVzX2FycmF5ID0gc2luZ2xlID8gW3N0b3Jlc10gOiBzdG9yZXM7XG5cdGlmICghc3RvcmVzX2FycmF5LmV2ZXJ5KEJvb2xlYW4pKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdkZXJpdmVkKCkgZXhwZWN0cyBzdG9yZXMgYXMgaW5wdXQsIGdvdCBhIGZhbHN5IHZhbHVlJyk7XG5cdH1cblx0Y29uc3QgYXV0byA9IGZuLmxlbmd0aCA8IDI7XG5cdHJldHVybiByZWFkYWJsZShpbml0aWFsX3ZhbHVlLCAoc2V0LCB1cGRhdGUpID0+IHtcblx0XHRsZXQgc3RhcnRlZCA9IGZhbHNlO1xuXHRcdC8qKiBAdHlwZSB7VFtdfSAqL1xuXHRcdGNvbnN0IHZhbHVlcyA9IFtdO1xuXHRcdGxldCBwZW5kaW5nID0gMDtcblx0XHRsZXQgY2xlYW51cCA9IG5vb3A7XG5cdFx0Y29uc3Qgc3luYyA9ICgpID0+IHtcblx0XHRcdGlmIChwZW5kaW5nKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNsZWFudXAoKTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGZuKHNpbmdsZSA/IHZhbHVlc1swXSA6IHZhbHVlcywgc2V0LCB1cGRhdGUpO1xuXHRcdFx0aWYgKGF1dG8pIHtcblx0XHRcdFx0c2V0KHJlc3VsdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGVhbnVwID0gdHlwZW9mIHJlc3VsdCA9PT0gJ2Z1bmN0aW9uJyA/IHJlc3VsdCA6IG5vb3A7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCB1bnN1YnNjcmliZXJzID0gc3RvcmVzX2FycmF5Lm1hcCgoc3RvcmUsIGkpID0+XG5cdFx0XHRzdWJzY3JpYmVfdG9fc3RvcmUoXG5cdFx0XHRcdHN0b3JlLFxuXHRcdFx0XHQodmFsdWUpID0+IHtcblx0XHRcdFx0XHR2YWx1ZXNbaV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRwZW5kaW5nICY9IH4oMSA8PCBpKTtcblx0XHRcdFx0XHRpZiAoc3RhcnRlZCkge1xuXHRcdFx0XHRcdFx0c3luYygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdHBlbmRpbmcgfD0gMSA8PCBpO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHRzdGFydGVkID0gdHJ1ZTtcblx0XHRzeW5jKCk7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHN0b3AoKSB7XG5cdFx0XHRydW5fYWxsKHVuc3Vic2NyaWJlcnMpO1xuXHRcdFx0Y2xlYW51cCgpO1xuXHRcdFx0Ly8gV2UgbmVlZCB0byBzZXQgdGhpcyB0byBmYWxzZSBiZWNhdXNlIGNhbGxiYWNrcyBjYW4gc3RpbGwgaGFwcGVuIGRlc3BpdGUgaGF2aW5nIHVuc3Vic2NyaWJlZDpcblx0XHRcdC8vIENhbGxiYWNrcyBtaWdodCBhbHJlYWR5IGJlIHBsYWNlZCBpbiB0aGUgcXVldWUgd2hpY2ggZG9lc24ndCBrbm93IGl0IHNob3VsZCBubyBsb25nZXJcblx0XHRcdC8vIGludm9rZSB0aGlzIGRlcml2ZWQgc3RvcmUuXG5cdFx0XHRzdGFydGVkID0gZmFsc2U7XG5cdFx0fTtcblx0fSk7XG59XG5cbi8qKlxuICogVGFrZXMgYSBzdG9yZSBhbmQgcmV0dXJucyBhIG5ldyBvbmUgZGVyaXZlZCBmcm9tIHRoZSBvbGQgb25lIHRoYXQgaXMgcmVhZGFibGUuXG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7UmVhZGFibGU8VD59IHN0b3JlICAtIHN0b3JlIHRvIG1ha2UgcmVhZG9ubHlcbiAqIEByZXR1cm5zIHtSZWFkYWJsZTxUPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRvbmx5KHN0b3JlKSB7XG5cdHJldHVybiB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUT0RPIGkgc3VzcGVjdCB0aGUgYmluZCBpcyB1bm5lY2Vzc2FyeVxuXHRcdHN1YnNjcmliZTogc3RvcmUuc3Vic2NyaWJlLmJpbmQoc3RvcmUpXG5cdH07XG59XG5cbi8qKlxuICogR2V0IHRoZSBjdXJyZW50IHZhbHVlIGZyb20gYSBzdG9yZSBieSBzdWJzY3JpYmluZyBhbmQgaW1tZWRpYXRlbHkgdW5zdWJzY3JpYmluZy5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtSZWFkYWJsZTxUPn0gc3RvcmVcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0KHN0b3JlKSB7XG5cdGxldCB2YWx1ZTtcblx0c3Vic2NyaWJlX3RvX3N0b3JlKHN0b3JlLCAoXykgPT4gKHZhbHVlID0gXykpKCk7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0cmV0dXJuIHZhbHVlO1xufVxuIiwgIi8qKiBAaW1wb3J0IHsgU3RvcmVSZWZlcmVuY2VzQ29udGFpbmVyIH0gZnJvbSAnI2NsaWVudCcgKi9cbi8qKiBAaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcjc2hhcmVkJyAqL1xuaW1wb3J0IHsgc3Vic2NyaWJlX3RvX3N0b3JlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvdXRpbHMuanMnO1xuaW1wb3J0IHsgZ2V0IGFzIGdldF9zdG9yZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3NoYXJlZC9pbmRleC5qcyc7XG5pbXBvcnQgeyBkZWZpbmVfcHJvcGVydHksIG5vb3AgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vcnVudGltZS5qcyc7XG5pbXBvcnQgeyB0ZWFyZG93biB9IGZyb20gJy4vZWZmZWN0cy5qcyc7XG5pbXBvcnQgeyBtdXRhYmxlX3NvdXJjZSwgc2V0IH0gZnJvbSAnLi9zb3VyY2VzLmpzJztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvcCBjdXJyZW50bHkgYmVpbmcgcmVhZCBpcyBhIHN0b3JlIGJpbmRpbmcsIGFzIGluXG4gKiBgPENoaWxkIGJpbmQ6eD17JHl9IC8+YC4gSWYgaXQgaXMsIHdlIHRyZWF0IHRoZSBwcm9wIGFzIG11dGFibGUgZXZlbiBpblxuICogcnVuZXMgbW9kZSwgYW5kIHNraXAgYGJpbmRpbmdfcHJvcGVydHlfbm9uX3JlYWN0aXZlYCB2YWxpZGF0aW9uXG4gKi9cbmxldCBpc19zdG9yZV9iaW5kaW5nID0gZmFsc2U7XG5cbmxldCBJU19VTk1PVU5URUQgPSBTeW1ib2woKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBjdXJyZW50IHZhbHVlIG9mIGEgc3RvcmUuIElmIHRoZSBzdG9yZSBpc24ndCBzdWJzY3JpYmVkIHRvIHlldCwgaXQgd2lsbCBjcmVhdGUgYSBwcm94eVxuICogc2lnbmFsIHRoYXQgd2lsbCBiZSB1cGRhdGVkIHdoZW4gdGhlIHN0b3JlIGlzLiBUaGUgc3RvcmUgcmVmZXJlbmNlcyBjb250YWluZXIgaXMgbmVlZGVkIHRvXG4gKiB0cmFjayByZWFzc2lnbm1lbnRzIHRvIHN0b3JlcyBhbmQgdG8gdHJhY2sgdGhlIGNvcnJlY3QgY29tcG9uZW50IGNvbnRleHQuXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtTdG9yZTxWPiB8IG51bGwgfCB1bmRlZmluZWR9IHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVfbmFtZVxuICogQHBhcmFtIHtTdG9yZVJlZmVyZW5jZXNDb250YWluZXJ9IHN0b3Jlc1xuICogQHJldHVybnMge1Z9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV9nZXQoc3RvcmUsIHN0b3JlX25hbWUsIHN0b3Jlcykge1xuXHRjb25zdCBlbnRyeSA9IChzdG9yZXNbc3RvcmVfbmFtZV0gPz89IHtcblx0XHRzdG9yZTogbnVsbCxcblx0XHRzb3VyY2U6IG11dGFibGVfc291cmNlKHVuZGVmaW5lZCksXG5cdFx0dW5zdWJzY3JpYmU6IG5vb3Bcblx0fSk7XG5cblx0Ly8gaWYgdGhlIGNvbXBvbmVudCB0aGF0IHNldHVwIHRoaXMgaXMgYWxyZWFkeSB1bm1vdW50ZWQgd2UgZG9uJ3Qgd2FudCB0byByZWdpc3RlciBhIHN1YnNjcmlwdGlvblxuXHRpZiAoZW50cnkuc3RvcmUgIT09IHN0b3JlICYmICEoSVNfVU5NT1VOVEVEIGluIHN0b3JlcykpIHtcblx0XHRlbnRyeS51bnN1YnNjcmliZSgpO1xuXHRcdGVudHJ5LnN0b3JlID0gc3RvcmUgPz8gbnVsbDtcblxuXHRcdGlmIChzdG9yZSA9PSBudWxsKSB7XG5cdFx0XHRlbnRyeS5zb3VyY2UudiA9IHVuZGVmaW5lZDsgLy8gc2VlIHN5bmNocm9ub3VzIGNhbGxiYWNrIGNvbW1lbnQgYmVsb3dcblx0XHRcdGVudHJ5LnVuc3Vic2NyaWJlID0gbm9vcDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGlzX3N5bmNocm9ub3VzX2NhbGxiYWNrID0gdHJ1ZTtcblxuXHRcdFx0ZW50cnkudW5zdWJzY3JpYmUgPSBzdWJzY3JpYmVfdG9fc3RvcmUoc3RvcmUsICh2KSA9PiB7XG5cdFx0XHRcdGlmIChpc19zeW5jaHJvbm91c19jYWxsYmFjaykge1xuXHRcdFx0XHRcdC8vIElmIHRoZSBmaXJzdCB1cGRhdGVzIHRvIHRoZSBzdG9yZSB2YWx1ZSAocG9zc2libHkgbXVsdGlwbGUgb2YgdGhlbSkgYXJlIHN5bmNocm9ub3VzbHlcblx0XHRcdFx0XHQvLyBpbnNpZGUgYSBkZXJpdmVkLCB3ZSB3aWxsIGhpdCB0aGUgYHN0YXRlX3Vuc2FmZV9tdXRhdGlvbmAgZXJyb3IgaWYgd2UgYHNldGAgdGhlIHZhbHVlXG5cdFx0XHRcdFx0ZW50cnkuc291cmNlLnYgPSB2O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNldChlbnRyeS5zb3VyY2UsIHYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0aXNfc3luY2hyb25vdXNfY2FsbGJhY2sgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvLyBpZiB0aGUgY29tcG9uZW50IHRoYXQgc2V0dXAgdGhpcyBzdG9yZXMgaXMgYWxyZWFkeSB1bm1vdW50ZWQgdGhlIHNvdXJjZSB3aWxsIGJlIG91dCBvZiBzeW5jXG5cdC8vIHNvIHdlIGp1c3QgdXNlIHRoZSBgZ2V0YCBmb3IgdGhlIHN0b3JlcywgbGVzcyBwZXJmb3JtYW50IGJ1dCBpdCBhdm9pZHMgdG8gY3JlYXRlIGEgbWVtb3J5IGxlYWtcblx0Ly8gYW5kIGl0IHdpbGwga2VlcCB0aGUgdmFsdWUgY29uc2lzdGVudFxuXHRpZiAoc3RvcmUgJiYgSVNfVU5NT1VOVEVEIGluIHN0b3Jlcykge1xuXHRcdHJldHVybiBnZXRfc3RvcmUoc3RvcmUpO1xuXHR9XG5cblx0cmV0dXJuIGdldChlbnRyeS5zb3VyY2UpO1xufVxuXG4vKipcbiAqIFVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBpZiBpdCdzIG5vdCB0aGUgc2FtZSBhcyB0aGUgb25lIGluIHRoZSBzdG9yZSByZWZlcmVuY2VzIGNvbnRhaW5lci5cbiAqIFdlIG5lZWQgdGhpcyBpbiBhZGRpdGlvbiB0byBgc3RvcmVfZ2V0YCBiZWNhdXNlIHNvbWVvbmUgY291bGQgdW5zdWJzY3JpYmUgZnJvbSBhIHN0b3JlIGJ1dFxuICogdGhlbiBuZXZlciBzdWJzY3JpYmUgdG8gdGhlIG5ldyBvbmUgKGlmIGFueSksIGNhdXNpbmcgdGhlIHN1YnNjcmlwdGlvbiB0byBzdGF5IG9wZW4gd3JvbmdmdWxseS5cbiAqIEBwYXJhbSB7U3RvcmU8YW55PiB8IG51bGwgfCB1bmRlZmluZWR9IHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVfbmFtZVxuICogQHBhcmFtIHtTdG9yZVJlZmVyZW5jZXNDb250YWluZXJ9IHN0b3Jlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVfdW5zdWIoc3RvcmUsIHN0b3JlX25hbWUsIHN0b3Jlcykge1xuXHQvKiogQHR5cGUge1N0b3JlUmVmZXJlbmNlc0NvbnRhaW5lclsnJ10gfCB1bmRlZmluZWR9ICovXG5cdGxldCBlbnRyeSA9IHN0b3Jlc1tzdG9yZV9uYW1lXTtcblxuXHRpZiAoZW50cnkgJiYgZW50cnkuc3RvcmUgIT09IHN0b3JlKSB7XG5cdFx0Ly8gRG9uJ3QgcmVzZXQgc3RvcmUgeWV0LCBzbyB0aGF0IHN0b3JlX2dldCBhYm92ZSBjYW4gcmVzdWJzY3JpYmUgdG8gbmV3IHN0b3JlIGlmIG5lY2Vzc2FyeVxuXHRcdGVudHJ5LnVuc3Vic2NyaWJlKCk7XG5cdFx0ZW50cnkudW5zdWJzY3JpYmUgPSBub29wO1xuXHR9XG5cblx0cmV0dXJuIHN0b3JlO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG5ldyB2YWx1ZSBvZiBhIHN0b3JlIGFuZCByZXR1cm5zIHRoYXQgdmFsdWUuXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtTdG9yZTxWPn0gc3RvcmVcbiAqIEBwYXJhbSB7Vn0gdmFsdWVcbiAqIEByZXR1cm5zIHtWfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVfc2V0KHN0b3JlLCB2YWx1ZSkge1xuXHRzdG9yZS5zZXQodmFsdWUpO1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtTdG9yZVJlZmVyZW5jZXNDb250YWluZXJ9IHN0b3Jlc1xuICogQHBhcmFtIHtzdHJpbmd9IHN0b3JlX25hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRhdGVfc3RvcmUoc3RvcmVzLCBzdG9yZV9uYW1lKSB7XG5cdHZhciBlbnRyeSA9IHN0b3Jlc1tzdG9yZV9uYW1lXTtcblx0aWYgKGVudHJ5LnN0b3JlICE9PSBudWxsKSB7XG5cdFx0c3RvcmVfc2V0KGVudHJ5LnN0b3JlLCBlbnRyeS5zb3VyY2Uudik7XG5cdH1cbn1cblxuLyoqXG4gKiBVbnN1YnNjcmliZXMgZnJvbSBhbGwgYXV0by1zdWJzY3JpYmVkIHN0b3JlcyBvbiBkZXN0cm95XG4gKiBAcmV0dXJucyB7W1N0b3JlUmVmZXJlbmNlc0NvbnRhaW5lciwgKCk9PnZvaWRdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBfc3RvcmVzKCkge1xuXHQvKiogQHR5cGUge1N0b3JlUmVmZXJlbmNlc0NvbnRhaW5lcn0gKi9cblx0Y29uc3Qgc3RvcmVzID0ge307XG5cblx0ZnVuY3Rpb24gY2xlYW51cCgpIHtcblx0XHR0ZWFyZG93bigoKSA9PiB7XG5cdFx0XHRmb3IgKHZhciBzdG9yZV9uYW1lIGluIHN0b3Jlcykge1xuXHRcdFx0XHRjb25zdCByZWYgPSBzdG9yZXNbc3RvcmVfbmFtZV07XG5cdFx0XHRcdHJlZi51bnN1YnNjcmliZSgpO1xuXHRcdFx0fVxuXHRcdFx0ZGVmaW5lX3Byb3BlcnR5KHN0b3JlcywgSVNfVU5NT1VOVEVELCB7XG5cdFx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0XHR2YWx1ZTogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gW3N0b3JlcywgY2xlYW51cF07XG59XG5cbi8qKlxuICogVXBkYXRlcyBhIHN0b3JlIHdpdGggYSBuZXcgdmFsdWUuXG4gKiBAcGFyYW0ge1N0b3JlPFY+fSBzdG9yZSAgdGhlIHN0b3JlIHRvIHVwZGF0ZVxuICogQHBhcmFtIHthbnl9IGV4cHJlc3Npb24gIHRoZSBleHByZXNzaW9uIHRoYXQgbXV0YXRlcyB0aGUgc3RvcmVcbiAqIEBwYXJhbSB7Vn0gbmV3X3ZhbHVlICB0aGUgbmV3IHN0b3JlIHZhbHVlXG4gKiBAdGVtcGxhdGUgVlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVfbXV0YXRlKHN0b3JlLCBleHByZXNzaW9uLCBuZXdfdmFsdWUpIHtcblx0c3RvcmUuc2V0KG5ld192YWx1ZSk7XG5cdHJldHVybiBleHByZXNzaW9uO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7U3RvcmU8bnVtYmVyPn0gc3RvcmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdG9yZV92YWx1ZVxuICogQHBhcmFtIHsxIHwgLTF9IFtkXVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9zdG9yZShzdG9yZSwgc3RvcmVfdmFsdWUsIGQgPSAxKSB7XG5cdHN0b3JlLnNldChzdG9yZV92YWx1ZSArIGQpO1xuXHRyZXR1cm4gc3RvcmVfdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtTdG9yZTxudW1iZXI+fSBzdG9yZVxuICogQHBhcmFtIHtudW1iZXJ9IHN0b3JlX3ZhbHVlXG4gKiBAcGFyYW0gezEgfCAtMX0gW2RdXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX3ByZV9zdG9yZShzdG9yZSwgc3RvcmVfdmFsdWUsIGQgPSAxKSB7XG5cdGNvbnN0IHZhbHVlID0gc3RvcmVfdmFsdWUgKyBkO1xuXHRzdG9yZS5zZXQodmFsdWUpO1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogQ2FsbGVkIGluc2lkZSBwcm9wIGdldHRlcnMgdG8gY29tbXVuaWNhdGUgdGhhdCB0aGUgcHJvcCBpcyBhIHN0b3JlIGJpbmRpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtfc3RvcmVfYmluZGluZygpIHtcblx0aXNfc3RvcmVfYmluZGluZyA9IHRydWU7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHR1cGxlIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgYGZuKClgIHJlYWRzIGEgcHJvcCB0aGF0IGlzIGEgc3RvcmUgYmluZGluZy5cbiAqIFVzZWQgdG8gcHJldmVudCBgYmluZGluZ19wcm9wZXJ0eV9ub25fcmVhY3RpdmVgIHZhbGlkYXRpb24gZmFsc2UgcG9zaXRpdmVzIGFuZFxuICogZW5zdXJlIHRoYXQgdGhlc2UgcHJvcHMgYXJlIHRyZWF0ZWQgYXMgbXV0YWJsZSBldmVuIGluIHJ1bmVzIG1vZGVcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0geygpID0+IFR9IGZuXG4gKiBAcmV0dXJucyB7W1QsIGJvb2xlYW5dfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZV9zdG9yZV9iaW5kaW5nKGZuKSB7XG5cdHZhciBwcmV2aW91c19pc19zdG9yZV9iaW5kaW5nID0gaXNfc3RvcmVfYmluZGluZztcblxuXHR0cnkge1xuXHRcdGlzX3N0b3JlX2JpbmRpbmcgPSBmYWxzZTtcblx0XHRyZXR1cm4gW2ZuKCksIGlzX3N0b3JlX2JpbmRpbmddO1xuXHR9IGZpbmFsbHkge1xuXHRcdGlzX3N0b3JlX2JpbmRpbmcgPSBwcmV2aW91c19pc19zdG9yZV9iaW5kaW5nO1xuXHR9XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBDb21wb25lbnRDb25zdHJ1Y3Rvck9wdGlvbnMsIENvbXBvbmVudFR5cGUsIFN2ZWx0ZUNvbXBvbmVudCwgQ29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlJyAqL1xuaW1wb3J0IHsgRElSVFksIExFR0FDWV9QUk9QUywgTUFZQkVfRElSVFkgfSBmcm9tICcuLi9pbnRlcm5hbC9jbGllbnQvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IHVzZXJfcHJlX2VmZmVjdCB9IGZyb20gJy4uL2ludGVybmFsL2NsaWVudC9yZWFjdGl2aXR5L2VmZmVjdHMuanMnO1xuaW1wb3J0IHsgbXV0YWJsZV9zb3VyY2UsIHNldCB9IGZyb20gJy4uL2ludGVybmFsL2NsaWVudC9yZWFjdGl2aXR5L3NvdXJjZXMuanMnO1xuaW1wb3J0IHsgaHlkcmF0ZSwgbW91bnQsIHVubW91bnQgfSBmcm9tICcuLi9pbnRlcm5hbC9jbGllbnQvcmVuZGVyLmpzJztcbmltcG9ydCB7IGFjdGl2ZV9lZmZlY3QsIGZsdXNoU3luYywgZ2V0LCBzZXRfc2lnbmFsX3N0YXR1cyB9IGZyb20gJy4uL2ludGVybmFsL2NsaWVudC9ydW50aW1lLmpzJztcbmltcG9ydCB7IGxpZmVjeWNsZV9vdXRzaWRlX2NvbXBvbmVudCB9IGZyb20gJy4uL2ludGVybmFsL3NoYXJlZC9lcnJvcnMuanMnO1xuaW1wb3J0IHsgZGVmaW5lX3Byb3BlcnR5LCBpc19hcnJheSB9IGZyb20gJy4uL2ludGVybmFsL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQgKiBhcyB3IGZyb20gJy4uL2ludGVybmFsL2NsaWVudC93YXJuaW5ncy5qcyc7XG5pbXBvcnQgeyBERVYgfSBmcm9tICdlc20tZW52JztcbmltcG9ydCB7IEZJTEVOQU1FIH0gZnJvbSAnLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGNvbXBvbmVudF9jb250ZXh0LCBkZXZfY3VycmVudF9jb21wb25lbnRfZnVuY3Rpb24gfSBmcm9tICcuLi9pbnRlcm5hbC9jbGllbnQvY29udGV4dC5qcyc7XG5cbi8qKlxuICogVGFrZXMgdGhlIHNhbWUgb3B0aW9ucyBhcyBhIFN2ZWx0ZSA0IGNvbXBvbmVudCBhbmQgdGhlIGNvbXBvbmVudCBmdW5jdGlvbiBhbmQgcmV0dXJucyBhIFN2ZWx0ZSA0IGNvbXBhdGlibGUgY29tcG9uZW50LlxuICpcbiAqIEBkZXByZWNhdGVkIFVzZSB0aGlzIG9ubHkgYXMgYSB0ZW1wb3Jhcnkgc29sdXRpb24gdG8gbWlncmF0ZSB5b3VyIGltcGVyYXRpdmUgY29tcG9uZW50IGNvZGUgdG8gU3ZlbHRlIDUuXG4gKlxuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBQcm9wc1xuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBFeHBvcnRzXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IEV2ZW50c1xuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBTbG90c1xuICpcbiAqIEBwYXJhbSB7Q29tcG9uZW50Q29uc3RydWN0b3JPcHRpb25zPFByb3BzPiAmIHtcbiAqIFx0Y29tcG9uZW50OiBDb21wb25lbnRUeXBlPFN2ZWx0ZUNvbXBvbmVudDxQcm9wcywgRXZlbnRzLCBTbG90cz4+IHwgQ29tcG9uZW50PFByb3BzPjtcbiAqIH19IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtTdmVsdGVDb21wb25lbnQ8UHJvcHMsIEV2ZW50cywgU2xvdHM+ICYgRXhwb3J0c31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNsYXNzQ29tcG9uZW50KG9wdGlvbnMpIHtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciAkJHByb3BfZGVmIGV0YyBhcmUgbm90IGFjdHVhbGx5IGRlZmluZWRcblx0cmV0dXJuIG5ldyBTdmVsdGU0Q29tcG9uZW50KG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFRha2VzIHRoZSBjb21wb25lbnQgZnVuY3Rpb24gYW5kIHJldHVybnMgYSBTdmVsdGUgNCBjb21wYXRpYmxlIGNvbXBvbmVudCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAZGVwcmVjYXRlZCBVc2UgdGhpcyBvbmx5IGFzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uIHRvIG1pZ3JhdGUgeW91ciBpbXBlcmF0aXZlIGNvbXBvbmVudCBjb2RlIHRvIFN2ZWx0ZSA1LlxuICpcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gUHJvcHNcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gRXhwb3J0c1xuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBFdmVudHNcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gU2xvdHNcbiAqXG4gKiBAcGFyYW0ge1N2ZWx0ZUNvbXBvbmVudDxQcm9wcywgRXZlbnRzLCBTbG90cz4gfCBDb21wb25lbnQ8UHJvcHM+fSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtDb21wb25lbnRUeXBlPFN2ZWx0ZUNvbXBvbmVudDxQcm9wcywgRXZlbnRzLCBTbG90cz4gJiBFeHBvcnRzPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzQ2xhc3NDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgJCRwcm9wX2RlZiBldGMgYXJlIG5vdCBhY3R1YWxseSBkZWZpbmVkXG5cdHJldHVybiBjbGFzcyBleHRlbmRzIFN2ZWx0ZTRDb21wb25lbnQge1xuXHRcdC8qKiBAcGFyYW0ge2FueX0gb3B0aW9ucyAqL1xuXHRcdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHRcdHN1cGVyKHtcblx0XHRcdFx0Y29tcG9uZW50LFxuXHRcdFx0XHQuLi5vcHRpb25zXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG59XG5cbi8qKlxuICogU3VwcG9ydCB1c2luZyB0aGUgY29tcG9uZW50IGFzIGJvdGggYSBjbGFzcyBhbmQgZnVuY3Rpb24gZHVyaW5nIHRoZSB0cmFuc2l0aW9uIHBlcmlvZFxuICogQHR5cGVkZWYgIHt7bmV3IChvOiBDb21wb25lbnRDb25zdHJ1Y3Rvck9wdGlvbnMpOiBTdmVsdGVDb21wb25lbnQ7KC4uLmFyZ3M6IFBhcmFtZXRlcnM8Q29tcG9uZW50PFJlY29yZDxzdHJpbmcsIGFueT4+Pik6IFJldHVyblR5cGU8Q29tcG9uZW50PFJlY29yZDxzdHJpbmcsIGFueT4sIFJlY29yZDxzdHJpbmcsIGFueT4+Pjt9fSBMZWdhY3lDb21wb25lbnRUeXBlXG4gKi9cblxuY2xhc3MgU3ZlbHRlNENvbXBvbmVudCB7XG5cdC8qKiBAdHlwZSB7YW55fSAqL1xuXHQjZXZlbnRzO1xuXG5cdC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gKi9cblx0I2luc3RhbmNlO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0NvbXBvbmVudENvbnN0cnVjdG9yT3B0aW9ucyAmIHtcblx0ICogIGNvbXBvbmVudDogYW55O1xuXHQgKiB9fSBvcHRpb25zXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0dmFyIHNvdXJjZXMgPSBuZXcgTWFwKCk7XG5cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZyB8IHN5bWJvbH0ga2V5XG5cdFx0ICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZVxuXHRcdCAqL1xuXHRcdHZhciBhZGRfc291cmNlID0gKGtleSwgdmFsdWUpID0+IHtcblx0XHRcdHZhciBzID0gbXV0YWJsZV9zb3VyY2UodmFsdWUpO1xuXHRcdFx0c291cmNlcy5zZXQoa2V5LCBzKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdH07XG5cblx0XHQvLyBSZXBsaWNhdGUgY29hcnNlLWdyYWluZWQgcHJvcHMgdGhyb3VnaCBhIHByb3h5IHRoYXQgaGFzIGEgdmVyc2lvbiBzb3VyY2UgZm9yXG5cdFx0Ly8gZWFjaCBwcm9wZXJ0eSwgd2hpY2ggaXMgaW5jcmVtZW50ZWQgb24gdXBkYXRlcyB0byB0aGUgcHJvcGVydHkgaXRzZWxmLiBEbyBub3Rcblx0XHQvLyB1c2Ugb3VyICRzdGF0ZSBwcm94eSBiZWNhdXNlIHRoYXQgb25lIGhhcyBmaW5lLWdyYWluZWQgcmVhY3Rpdml0eS5cblx0XHRjb25zdCBwcm9wcyA9IG5ldyBQcm94eShcblx0XHRcdHsgLi4uKG9wdGlvbnMucHJvcHMgfHwge30pLCAkJGV2ZW50czoge30gfSxcblx0XHRcdHtcblx0XHRcdFx0Z2V0KHRhcmdldCwgcHJvcCkge1xuXHRcdFx0XHRcdHJldHVybiBnZXQoc291cmNlcy5nZXQocHJvcCkgPz8gYWRkX3NvdXJjZShwcm9wLCBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3ApKSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGhhcyh0YXJnZXQsIHByb3ApIHtcblx0XHRcdFx0XHQvLyBOZWNlc3NhcnkgdG8gbm90IHRocm93IFwiaW52YWxpZCBiaW5kaW5nXCIgdmFsaWRhdGlvbiBlcnJvcnMgb24gdGhlIGNvbXBvbmVudCBzaWRlXG5cdFx0XHRcdFx0aWYgKHByb3AgPT09IExFR0FDWV9QUk9QUykgcmV0dXJuIHRydWU7XG5cblx0XHRcdFx0XHRnZXQoc291cmNlcy5nZXQocHJvcCkgPz8gYWRkX3NvdXJjZShwcm9wLCBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3ApKSk7XG5cdFx0XHRcdFx0cmV0dXJuIFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG5cdFx0XHRcdFx0c2V0KHNvdXJjZXMuZ2V0KHByb3ApID8/IGFkZF9zb3VyY2UocHJvcCwgdmFsdWUpLCB2YWx1ZSk7XG5cdFx0XHRcdFx0cmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuI2luc3RhbmNlID0gKG9wdGlvbnMuaHlkcmF0ZSA/IGh5ZHJhdGUgOiBtb3VudCkob3B0aW9ucy5jb21wb25lbnQsIHtcblx0XHRcdHRhcmdldDogb3B0aW9ucy50YXJnZXQsXG5cdFx0XHRhbmNob3I6IG9wdGlvbnMuYW5jaG9yLFxuXHRcdFx0cHJvcHMsXG5cdFx0XHRjb250ZXh0OiBvcHRpb25zLmNvbnRleHQsXG5cdFx0XHRpbnRybzogb3B0aW9ucy5pbnRybyA/PyBmYWxzZSxcblx0XHRcdHJlY292ZXI6IG9wdGlvbnMucmVjb3ZlclxuXHRcdH0pO1xuXG5cdFx0Ly8gV2UgZG9uJ3QgZmx1c2hTeW5jIGZvciBjdXN0b20gZWxlbWVudCB3cmFwcGVycyBvciBpZiB0aGUgdXNlciBkb2Vzbid0IHdhbnQgaXRcblx0XHRpZiAoIW9wdGlvbnM/LnByb3BzPy4kJGhvc3QgfHwgb3B0aW9ucy5zeW5jID09PSBmYWxzZSkge1xuXHRcdFx0Zmx1c2hTeW5jKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy4jZXZlbnRzID0gcHJvcHMuJCRldmVudHM7XG5cblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLiNpbnN0YW5jZSkpIHtcblx0XHRcdGlmIChrZXkgPT09ICckc2V0JyB8fCBrZXkgPT09ICckZGVzdHJveScgfHwga2V5ID09PSAnJG9uJykgY29udGludWU7XG5cdFx0XHRkZWZpbmVfcHJvcGVydHkodGhpcywga2V5LCB7XG5cdFx0XHRcdGdldCgpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy4jaW5zdGFuY2Vba2V5XTtcblx0XHRcdFx0fSxcblx0XHRcdFx0LyoqIEBwYXJhbSB7YW55fSB2YWx1ZSAqL1xuXHRcdFx0XHRzZXQodmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLiNpbnN0YW5jZVtrZXldID0gdmFsdWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHRoaXMuI2luc3RhbmNlLiRzZXQgPSAvKiogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBuZXh0ICovIChuZXh0KSA9PiB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHByb3BzLCBuZXh0KTtcblx0XHR9O1xuXG5cdFx0dGhpcy4jaW5zdGFuY2UuJGRlc3Ryb3kgPSAoKSA9PiB7XG5cdFx0XHR1bm1vdW50KHRoaXMuI2luc3RhbmNlKTtcblx0XHR9O1xuXHR9XG5cblx0LyoqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gcHJvcHMgKi9cblx0JHNldChwcm9wcykge1xuXHRcdHRoaXMuI2luc3RhbmNlLiRzZXQocHJvcHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuXHQgKiBAcGFyYW0geyguLi5hcmdzOiBhbnlbXSkgPT4gYW55fSBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7YW55fVxuXHQgKi9cblx0JG9uKGV2ZW50LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuI2V2ZW50c1tldmVudF0gPSB0aGlzLiNldmVudHNbZXZlbnRdIHx8IFtdO1xuXG5cdFx0LyoqIEBwYXJhbSB7YW55W119IGFyZ3MgKi9cblx0XHRjb25zdCBjYiA9ICguLi5hcmdzKSA9PiBjYWxsYmFjay5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuXHRcdHRoaXMuI2V2ZW50c1tldmVudF0ucHVzaChjYik7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHRoaXMuI2V2ZW50c1tldmVudF0gPSB0aGlzLiNldmVudHNbZXZlbnRdLmZpbHRlcigvKiogQHBhcmFtIHthbnl9IGZuICovIChmbikgPT4gZm4gIT09IGNiKTtcblx0XHR9O1xuXHR9XG5cblx0JGRlc3Ryb3koKSB7XG5cdFx0dGhpcy4jaW5zdGFuY2UuJGRlc3Ryb3koKTtcblx0fVxufVxuXG4vKipcbiAqIFJ1bnMgdGhlIGdpdmVuIGZ1bmN0aW9uIG9uY2UgaW1tZWRpYXRlbHkgb24gdGhlIHNlcnZlciwgYW5kIHdvcmtzIGxpa2UgYCRlZmZlY3QucHJlYCBvbiB0aGUgY2xpZW50LlxuICpcbiAqIEBkZXByZWNhdGVkIFVzZSB0aGlzIG9ubHkgYXMgYSB0ZW1wb3Jhcnkgc29sdXRpb24gdG8gbWlncmF0ZSB5b3VyIGNvbXBvbmVudCBjb2RlIHRvIFN2ZWx0ZSA1LlxuICogQHBhcmFtIHsoKSA9PiB2b2lkIHwgKCgpID0+IHZvaWQpfSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW4oZm4pIHtcblx0dXNlcl9wcmVfZWZmZWN0KCgpID0+IHtcblx0XHRmbigpO1xuXHRcdHZhciBlZmZlY3QgPSAvKiogQHR5cGUge2ltcG9ydCgnI2NsaWVudCcpLkVmZmVjdH0gKi8gKGFjdGl2ZV9lZmZlY3QpO1xuXHRcdC8vIElmIHRoZSBlZmZlY3QgaXMgaW1tZWRpYXRlbHkgbWFkZSBkaXJ0eSBhZ2FpbiwgbWFyayBpdCBhcyBtYXliZSBkaXJ0eSB0byBlbXVsYXRlIGxlZ2FjeSBiZWhhdmlvdXJcblx0XHRpZiAoKGVmZmVjdC5mICYgRElSVFkpICE9PSAwKSB7XG5cdFx0XHRsZXQgZmlsZW5hbWUgPSBcImEgZmlsZSAod2UgY2FuJ3Qga25vdyB3aGljaCBvbmUpXCI7XG5cdFx0XHRpZiAoREVWKSB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0ZmlsZW5hbWUgPSBkZXZfY3VycmVudF9jb21wb25lbnRfZnVuY3Rpb24/LltGSUxFTkFNRV0gPz8gZmlsZW5hbWU7XG5cdFx0XHR9XG5cdFx0XHR3LmxlZ2FjeV9yZWN1cnNpdmVfcmVhY3RpdmVfYmxvY2soZmlsZW5hbWUpO1xuXHRcdFx0c2V0X3NpZ25hbF9zdGF0dXMoZWZmZWN0LCBNQVlCRV9ESVJUWSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBtaW1pYyB0aGUgbXVsdGlwbGUgbGlzdGVuZXJzIGF2YWlsYWJsZSBpbiBzdmVsdGUgNFxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lcltdfSBoYW5kbGVyc1xuICogQHJldHVybnMge0V2ZW50TGlzdGVuZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVycyguLi5oYW5kbGVycykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Y29uc3QgeyBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gfSA9IGV2ZW50O1xuXHRcdGxldCBzdG9wcGVkID0gZmFsc2U7XG5cblx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPSAoKSA9PiB7XG5cdFx0XHRzdG9wcGVkID0gdHJ1ZTtcblx0XHRcdHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbi5jYWxsKGV2ZW50KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgZXJyb3JzID0gW107XG5cblx0XHRmb3IgKGNvbnN0IGhhbmRsZXIgb2YgaGFuZGxlcnMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgYHRoaXNgIGlzIG5vdCB0eXBlZFxuXHRcdFx0XHRoYW5kbGVyPy5jYWxsKHRoaXMsIGV2ZW50KTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0ZXJyb3JzLnB1c2goZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdG9wcGVkKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAobGV0IGVycm9yIG9mIGVycm9ycykge1xuXHRcdFx0cXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuXHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBjcmVhdGUgYSBgYnViYmxlYCBmdW5jdGlvbiB0aGF0IG1pbWljIHRoZSBiZWhhdmlvciBvZiBgb246Y2xpY2tgIHdpdGhvdXQgaGFuZGxlciBhdmFpbGFibGUgaW4gc3ZlbHRlIDQuXG4gKiBAZGVwcmVjYXRlZCBVc2UgdGhpcyBvbmx5IGFzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uIHRvIG1pZ3JhdGUgeW91ciBhdXRvbWF0aWNhbGx5IGRlbGVnYXRlZCBldmVudHMgaW4gU3ZlbHRlIDUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdWJibGVyKCkge1xuXHRjb25zdCBhY3RpdmVfY29tcG9uZW50X2NvbnRleHQgPSBjb21wb25lbnRfY29udGV4dDtcblx0aWYgKGFjdGl2ZV9jb21wb25lbnRfY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdGxpZmVjeWNsZV9vdXRzaWRlX2NvbXBvbmVudCgnY3JlYXRlQnViYmxlcicpO1xuXHR9XG5cblx0cmV0dXJuICgvKipAdHlwZSB7c3RyaW5nfSovIHR5cGUpID0+ICgvKipAdHlwZSB7RXZlbnR9Ki8gZXZlbnQpID0+IHtcblx0XHRjb25zdCBldmVudHMgPSAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIEZ1bmN0aW9uIHwgRnVuY3Rpb25bXT59ICovIChcblx0XHRcdGFjdGl2ZV9jb21wb25lbnRfY29udGV4dC5zLiQkZXZlbnRzXG5cdFx0KT8uWy8qKiBAdHlwZSB7YW55fSAqLyAodHlwZSldO1xuXG5cdFx0aWYgKGV2ZW50cykge1xuXHRcdFx0Y29uc3QgY2FsbGJhY2tzID0gaXNfYXJyYXkoZXZlbnRzKSA/IGV2ZW50cy5zbGljZSgpIDogW2V2ZW50c107XG5cdFx0XHRmb3IgKGNvbnN0IGZuIG9mIGNhbGxiYWNrcykge1xuXHRcdFx0XHRmbi5jYWxsKGFjdGl2ZV9jb21wb25lbnRfY29udGV4dC54LCBldmVudCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xufVxuXG5leHBvcnQge1xuXHRvbmNlLFxuXHRwcmV2ZW50RGVmYXVsdCxcblx0c2VsZixcblx0c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uLFxuXHRzdG9wUHJvcGFnYXRpb24sXG5cdHRydXN0ZWQsXG5cdHBhc3NpdmUsXG5cdG5vbnBhc3NpdmVcbn0gZnJvbSAnLi4vaW50ZXJuYWwvY2xpZW50L2RvbS9sZWdhY3kvZXZlbnQtbW9kaWZpZXJzLmpzJztcbiIsICJpbXBvcnQgeyBjcmVhdGVDbGFzc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2xlZ2FjeS9sZWdhY3ktY2xpZW50LmpzJztcbmltcG9ydCB7IGVmZmVjdF9yb290LCByZW5kZXJfZWZmZWN0IH0gZnJvbSAnLi4vLi4vcmVhY3Rpdml0eS9lZmZlY3RzLmpzJztcbmltcG9ydCB7IGFwcGVuZCB9IGZyb20gJy4uL3RlbXBsYXRlLmpzJztcbmltcG9ydCB7IGRlZmluZV9wcm9wZXJ0eSwgZ2V0X2Rlc2NyaXB0b3IsIG9iamVjdF9rZXlzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDdXN0b21FbGVtZW50UHJvcERlZmluaXRpb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbYXR0cmlidXRlXVxuICogQHByb3BlcnR5IHtib29sZWFufSBbcmVmbGVjdF1cbiAqIEBwcm9wZXJ0eSB7J1N0cmluZyd8J0Jvb2xlYW4nfCdOdW1iZXInfCdBcnJheSd8J09iamVjdCd9IFt0eXBlXVxuICovXG5cbi8qKiBAdHlwZSB7YW55fSAqL1xubGV0IFN2ZWx0ZUVsZW1lbnQ7XG5cbmlmICh0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcblx0U3ZlbHRlRWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRcdC8qKiBUaGUgU3ZlbHRlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciAqL1xuXHRcdCQkY3Rvcjtcblx0XHQvKiogU2xvdHMgKi9cblx0XHQkJHM7XG5cdFx0LyoqIEB0eXBlIHthbnl9IFRoZSBTdmVsdGUgY29tcG9uZW50IGluc3RhbmNlICovXG5cdFx0JCRjO1xuXHRcdC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgY3VzdG9tIGVsZW1lbnQgaXMgY29ubmVjdGVkICovXG5cdFx0JCRjbiA9IGZhbHNlO1xuXHRcdC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gQ29tcG9uZW50IHByb3BzIGRhdGEgKi9cblx0XHQkJGQgPSB7fTtcblx0XHQvKiogYHRydWVgIGlmIGN1cnJlbnRseSBpbiB0aGUgcHJvY2VzcyBvZiByZWZsZWN0aW5nIGNvbXBvbmVudCBwcm9wcyBiYWNrIHRvIGF0dHJpYnV0ZXMgKi9cblx0XHQkJHIgPSBmYWxzZTtcblx0XHQvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIEN1c3RvbUVsZW1lbnRQcm9wRGVmaW5pdGlvbj59IFByb3BzIGRlZmluaXRpb24gKG5hbWUsIHJlZmxlY3RlZCwgdHlwZSBldGMpICovXG5cdFx0JCRwX2QgPSB7fTtcblx0XHQvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3RbXT59IEV2ZW50IGxpc3RlbmVycyAqL1xuXHRcdCQkbCA9IHt9O1xuXHRcdC8qKiBAdHlwZSB7TWFwPEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIEZ1bmN0aW9uPn0gRXZlbnQgbGlzdGVuZXIgdW5zdWJzY3JpYmUgZnVuY3Rpb25zICovXG5cdFx0JCRsX3UgPSBuZXcgTWFwKCk7XG5cdFx0LyoqIEB0eXBlIHthbnl9IFRoZSBtYW5hZ2VkIHJlbmRlciBlZmZlY3QgZm9yIHJlZmxlY3RpbmcgYXR0cmlidXRlcyAqL1xuXHRcdCQkbWU7XG5cblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyp9ICQkY29tcG9uZW50Q3RvclxuXHRcdCAqIEBwYXJhbSB7Kn0gJCRzbG90c1xuXHRcdCAqIEBwYXJhbSB7Kn0gdXNlX3NoYWRvd19kb21cblx0XHQgKi9cblx0XHRjb25zdHJ1Y3RvcigkJGNvbXBvbmVudEN0b3IsICQkc2xvdHMsIHVzZV9zaGFkb3dfZG9tKSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0dGhpcy4kJGN0b3IgPSAkJGNvbXBvbmVudEN0b3I7XG5cdFx0XHR0aGlzLiQkcyA9ICQkc2xvdHM7XG5cdFx0XHRpZiAodXNlX3NoYWRvd19kb20pIHtcblx0XHRcdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcblx0XHQgKiBAcGFyYW0ge0V2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3R9IGxpc3RlbmVyXG5cdFx0ICogQHBhcmFtIHtib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnN9IFtvcHRpb25zXVxuXHRcdCAqL1xuXHRcdGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcblx0XHRcdC8vIFdlIGNhbid0IGRldGVybWluZSB1cGZyb250IGlmIHRoZSBldmVudCBpcyBhIGN1c3RvbSBldmVudCBvciBub3QsIHNvIHdlIGhhdmUgdG9cblx0XHRcdC8vIGxpc3RlbiB0byBib3RoLiBJZiBzb21lb25lIHVzZXMgYSBjdXN0b20gZXZlbnQgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGEgcmVndWxhclxuXHRcdFx0Ly8gYnJvd3NlciBldmVudCwgdGhpcyBmaXJlcyB0d2ljZSAtIHdlIGNhbid0IGF2b2lkIHRoYXQuXG5cdFx0XHR0aGlzLiQkbFt0eXBlXSA9IHRoaXMuJCRsW3R5cGVdIHx8IFtdO1xuXHRcdFx0dGhpcy4kJGxbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG5cdFx0XHRpZiAodGhpcy4kJGMpIHtcblx0XHRcdFx0Y29uc3QgdW5zdWIgPSB0aGlzLiQkYy4kb24odHlwZSwgbGlzdGVuZXIpO1xuXHRcdFx0XHR0aGlzLiQkbF91LnNldChsaXN0ZW5lciwgdW5zdWIpO1xuXHRcdFx0fVxuXHRcdFx0c3VwZXIuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcblx0XHQgKiBAcGFyYW0ge0V2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3R9IGxpc3RlbmVyXG5cdFx0ICogQHBhcmFtIHtib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnN9IFtvcHRpb25zXVxuXHRcdCAqL1xuXHRcdHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcblx0XHRcdHN1cGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuXHRcdFx0aWYgKHRoaXMuJCRjKSB7XG5cdFx0XHRcdGNvbnN0IHVuc3ViID0gdGhpcy4kJGxfdS5nZXQobGlzdGVuZXIpO1xuXHRcdFx0XHRpZiAodW5zdWIpIHtcblx0XHRcdFx0XHR1bnN1YigpO1xuXHRcdFx0XHRcdHRoaXMuJCRsX3UuZGVsZXRlKGxpc3RlbmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdFx0dGhpcy4kJGNuID0gdHJ1ZTtcblx0XHRcdGlmICghdGhpcy4kJGMpIHtcblx0XHRcdFx0Ly8gV2Ugd2FpdCBvbmUgdGljayB0byBsZXQgcG9zc2libGUgY2hpbGQgc2xvdCBlbGVtZW50cyBiZSBjcmVhdGVkL21vdW50ZWRcblx0XHRcdFx0YXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0XHRcdGlmICghdGhpcy4kJGNuIHx8IHRoaXMuJCRjKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAqL1xuXHRcdFx0XHRmdW5jdGlvbiBjcmVhdGVfc2xvdChuYW1lKSB7XG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0ICogQHBhcmFtIHtFbGVtZW50fSBhbmNob3Jcblx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHRyZXR1cm4gKGFuY2hvcikgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Nsb3QnKTtcblx0XHRcdFx0XHRcdGlmIChuYW1lICE9PSAnZGVmYXVsdCcpIHNsb3QubmFtZSA9IG5hbWU7XG5cblx0XHRcdFx0XHRcdGFwcGVuZChhbmNob3IsIHNsb3QpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0LyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSAqL1xuXHRcdFx0XHRjb25zdCAkJHNsb3RzID0ge307XG5cdFx0XHRcdGNvbnN0IGV4aXN0aW5nX3Nsb3RzID0gZ2V0X2N1c3RvbV9lbGVtZW50c19zbG90cyh0aGlzKTtcblx0XHRcdFx0Zm9yIChjb25zdCBuYW1lIG9mIHRoaXMuJCRzKSB7XG5cdFx0XHRcdFx0aWYgKG5hbWUgaW4gZXhpc3Rpbmdfc2xvdHMpIHtcblx0XHRcdFx0XHRcdGlmIChuYW1lID09PSAnZGVmYXVsdCcgJiYgIXRoaXMuJCRkLmNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuJCRkLmNoaWxkcmVuID0gY3JlYXRlX3Nsb3QobmFtZSk7XG5cdFx0XHRcdFx0XHRcdCQkc2xvdHMuZGVmYXVsdCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQkJHNsb3RzW25hbWVdID0gY3JlYXRlX3Nsb3QobmFtZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0cmlidXRlIG9mIHRoaXMuYXR0cmlidXRlcykge1xuXHRcdFx0XHRcdC8vIHRoaXMuJCRkYXRhIHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0aGlzLmF0dHJpYnV0ZXNcblx0XHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy4kJGdfcChhdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHRcdFx0aWYgKCEobmFtZSBpbiB0aGlzLiQkZCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuJCRkW25hbWVdID0gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKG5hbWUsIGF0dHJpYnV0ZS52YWx1ZSwgdGhpcy4kJHBfZCwgJ3RvUHJvcCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBQb3J0IG92ZXIgcHJvcHMgdGhhdCB3ZXJlIHNldCBwcm9ncmFtbWF0aWNhbGx5IGJlZm9yZSBjZSB3YXMgaW5pdGlhbGl6ZWRcblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gdGhpcy4kJHBfZCkge1xuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0XHRpZiAoIShrZXkgaW4gdGhpcy4kJGQpICYmIHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0XHRcdFx0XHR0aGlzLiQkZFtrZXldID0gdGhpc1trZXldOyAvLyBkb24ndCB0cmFuc2Zvcm0sIHRoZXNlIHdlcmUgc2V0IHRocm91Z2ggSmF2YVNjcmlwdFxuXHRcdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXNba2V5XTsgLy8gcmVtb3ZlIHRoZSBwcm9wZXJ0eSB0aGF0IHNoYWRvd3MgdGhlIGdldHRlci9zZXR0ZXJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kJGMgPSBjcmVhdGVDbGFzc0NvbXBvbmVudCh7XG5cdFx0XHRcdFx0Y29tcG9uZW50OiB0aGlzLiQkY3Rvcixcblx0XHRcdFx0XHR0YXJnZXQ6IHRoaXMuc2hhZG93Um9vdCB8fCB0aGlzLFxuXHRcdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0XHQuLi50aGlzLiQkZCxcblx0XHRcdFx0XHRcdCQkc2xvdHMsXG5cdFx0XHRcdFx0XHQkJGhvc3Q6IHRoaXNcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIFJlZmxlY3QgY29tcG9uZW50IHByb3BzIGFzIGF0dHJpYnV0ZXNcblx0XHRcdFx0dGhpcy4kJG1lID0gZWZmZWN0X3Jvb3QoKCkgPT4ge1xuXHRcdFx0XHRcdHJlbmRlcl9lZmZlY3QoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy4kJHIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBrZXkgb2Ygb2JqZWN0X2tleXModGhpcy4kJGMpKSB7XG5cdFx0XHRcdFx0XHRcdGlmICghdGhpcy4kJHBfZFtrZXldPy5yZWZsZWN0KSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0dGhpcy4kJGRba2V5XSA9IHRoaXMuJCRjW2tleV07XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZV92YWx1ZSA9IGdldF9jdXN0b21fZWxlbWVudF92YWx1ZShcblx0XHRcdFx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kJGRba2V5XSxcblx0XHRcdFx0XHRcdFx0XHR0aGlzLiQkcF9kLFxuXHRcdFx0XHRcdFx0XHRcdCd0b0F0dHJpYnV0ZSdcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0aWYgKGF0dHJpYnV0ZV92YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUodGhpcy4kJHBfZFtrZXldLmF0dHJpYnV0ZSB8fCBrZXkpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKHRoaXMuJCRwX2Rba2V5XS5hdHRyaWJ1dGUgfHwga2V5LCBhdHRyaWJ1dGVfdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLiQkciA9IGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHR5cGUgaW4gdGhpcy4kJGwpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMuJCRsW3R5cGVdKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB1bnN1YiA9IHRoaXMuJCRjLiRvbih0eXBlLCBsaXN0ZW5lcik7XG5cdFx0XHRcdFx0XHR0aGlzLiQkbF91LnNldChsaXN0ZW5lciwgdW5zdWIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLiQkbCA9IHt9O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFdlIGRvbid0IG5lZWQgdGhpcyB3aGVuIHdvcmtpbmcgd2l0aGluIFN2ZWx0ZSBjb2RlLCBidXQgZm9yIGNvbXBhdGliaWxpdHkgb2YgcGVvcGxlIHVzaW5nIHRoaXMgb3V0c2lkZSBvZiBTdmVsdGVcblx0XHQvLyBhbmQgc2V0dGluZyBhdHRyaWJ1dGVzIHRocm91Z2ggc2V0QXR0cmlidXRlIGV0YywgdGhpcyBpcyBoZWxwZnVsXG5cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBfb2xkVmFsdWVcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFsdWVcblx0XHQgKi9cblx0XHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0ciwgX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXHRcdFx0aWYgKHRoaXMuJCRyKSByZXR1cm47XG5cdFx0XHRhdHRyID0gdGhpcy4kJGdfcChhdHRyKTtcblx0XHRcdHRoaXMuJCRkW2F0dHJdID0gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKGF0dHIsIG5ld1ZhbHVlLCB0aGlzLiQkcF9kLCAndG9Qcm9wJyk7XG5cdFx0XHR0aGlzLiQkYz8uJHNldCh7IFthdHRyXTogdGhpcy4kJGRbYXR0cl0gfSk7XG5cdFx0fVxuXG5cdFx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLiQkY24gPSBmYWxzZTtcblx0XHRcdC8vIEluIGEgbWljcm90YXNrLCBiZWNhdXNlIHRoaXMgY291bGQgYmUgYSBtb3ZlIHdpdGhpbiB0aGUgRE9NXG5cdFx0XHRQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLiQkY24gJiYgdGhpcy4kJGMpIHtcblx0XHRcdFx0XHR0aGlzLiQkYy4kZGVzdHJveSgpO1xuXHRcdFx0XHRcdHRoaXMuJCRtZSgpO1xuXHRcdFx0XHRcdHRoaXMuJCRjID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlX25hbWVcblx0XHQgKi9cblx0XHQkJGdfcChhdHRyaWJ1dGVfbmFtZSkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0b2JqZWN0X2tleXModGhpcy4kJHBfZCkuZmluZChcblx0XHRcdFx0XHQoa2V5KSA9PlxuXHRcdFx0XHRcdFx0dGhpcy4kJHBfZFtrZXldLmF0dHJpYnV0ZSA9PT0gYXR0cmlidXRlX25hbWUgfHxcblx0XHRcdFx0XHRcdCghdGhpcy4kJHBfZFtrZXldLmF0dHJpYnV0ZSAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gYXR0cmlidXRlX25hbWUpXG5cdFx0XHRcdCkgfHwgYXR0cmlidXRlX25hbWVcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgQ3VzdG9tRWxlbWVudFByb3BEZWZpbml0aW9uPn0gcHJvcHNfZGVmaW5pdGlvblxuICogQHBhcmFtIHsndG9BdHRyaWJ1dGUnIHwgJ3RvUHJvcCd9IFt0cmFuc2Zvcm1dXG4gKi9cbmZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudF92YWx1ZShwcm9wLCB2YWx1ZSwgcHJvcHNfZGVmaW5pdGlvbiwgdHJhbnNmb3JtKSB7XG5cdGNvbnN0IHR5cGUgPSBwcm9wc19kZWZpbml0aW9uW3Byb3BdPy50eXBlO1xuXHR2YWx1ZSA9IHR5cGUgPT09ICdCb29sZWFuJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJyA/IHZhbHVlICE9IG51bGwgOiB2YWx1ZTtcblx0aWYgKCF0cmFuc2Zvcm0gfHwgIXByb3BzX2RlZmluaXRpb25bcHJvcF0pIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0gZWxzZSBpZiAodHJhbnNmb3JtID09PSAndG9BdHRyaWJ1dGUnKSB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdPYmplY3QnOlxuXHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT0gbnVsbCA/IG51bGwgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdFx0XHRjYXNlICdCb29sZWFuJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlID8gJycgOiBudWxsO1xuXHRcdFx0Y2FzZSAnTnVtYmVyJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09IG51bGwgPyBudWxsIDogdmFsdWU7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAnT2JqZWN0Jzpcblx0XHRcdGNhc2UgJ0FycmF5Jzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlICYmIEpTT04ucGFyc2UodmFsdWUpO1xuXHRcdFx0Y2FzZSAnQm9vbGVhbic6XG5cdFx0XHRcdHJldHVybiB2YWx1ZTsgLy8gY29udmVyc2lvbiBhbHJlYWR5IGhhbmRsZWQgYWJvdmVcblx0XHRcdGNhc2UgJ051bWJlcic6XG5cdFx0XHRcdHJldHVybiB2YWx1ZSAhPSBudWxsID8gK3ZhbHVlIDogdmFsdWU7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICovXG5mdW5jdGlvbiBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzKGVsZW1lbnQpIHtcblx0LyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB0cnVlPn0gKi9cblx0Y29uc3QgcmVzdWx0ID0ge307XG5cdGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG5cdFx0cmVzdWx0Wy8qKiBAdHlwZSB7RWxlbWVudH0gbm9kZSAqLyAobm9kZSkuc2xvdCB8fCAnZGVmYXVsdCddID0gdHJ1ZTtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQGludGVybmFsXG4gKlxuICogVHVybiBhIFN2ZWx0ZSBjb21wb25lbnQgaW50byBhIGN1c3RvbSBlbGVtZW50LlxuICogQHBhcmFtIHthbnl9IENvbXBvbmVudCAgQSBTdmVsdGUgY29tcG9uZW50IGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIEN1c3RvbUVsZW1lbnRQcm9wRGVmaW5pdGlvbj59IHByb3BzX2RlZmluaXRpb24gIFRoZSBwcm9wcyB0byBvYnNlcnZlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBzbG90cyAgVGhlIHNsb3RzIHRvIGNyZWF0ZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gZXhwb3J0cyAgRXhwbGljaXRseSBleHBvcnRlZCB2YWx1ZXMsIG90aGVyIHRoYW4gcHJvcHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlX3NoYWRvd19kb20gIFdoZXRoZXIgdG8gdXNlIHNoYWRvdyBET01cbiAqIEBwYXJhbSB7KGNlOiBuZXcgKCkgPT4gSFRNTEVsZW1lbnQpID0+IG5ldyAoKSA9PiBIVE1MRWxlbWVudH0gW2V4dGVuZF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZV9jdXN0b21fZWxlbWVudChcblx0Q29tcG9uZW50LFxuXHRwcm9wc19kZWZpbml0aW9uLFxuXHRzbG90cyxcblx0ZXhwb3J0cyxcblx0dXNlX3NoYWRvd19kb20sXG5cdGV4dGVuZFxuKSB7XG5cdGxldCBDbGFzcyA9IGNsYXNzIGV4dGVuZHMgU3ZlbHRlRWxlbWVudCB7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcihDb21wb25lbnQsIHNsb3RzLCB1c2Vfc2hhZG93X2RvbSk7XG5cdFx0XHR0aGlzLiQkcF9kID0gcHJvcHNfZGVmaW5pdGlvbjtcblx0XHR9XG5cdFx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0XHRyZXR1cm4gb2JqZWN0X2tleXMocHJvcHNfZGVmaW5pdGlvbikubWFwKChrZXkpID0+XG5cdFx0XHRcdChwcm9wc19kZWZpbml0aW9uW2tleV0uYXR0cmlidXRlIHx8IGtleSkudG9Mb3dlckNhc2UoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdG9iamVjdF9rZXlzKHByb3BzX2RlZmluaXRpb24pLmZvckVhY2goKHByb3ApID0+IHtcblx0XHRkZWZpbmVfcHJvcGVydHkoQ2xhc3MucHJvdG90eXBlLCBwcm9wLCB7XG5cdFx0XHRnZXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLiQkYyAmJiBwcm9wIGluIHRoaXMuJCRjID8gdGhpcy4kJGNbcHJvcF0gOiB0aGlzLiQkZFtwcm9wXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQodmFsdWUpIHtcblx0XHRcdFx0dmFsdWUgPSBnZXRfY3VzdG9tX2VsZW1lbnRfdmFsdWUocHJvcCwgdmFsdWUsIHByb3BzX2RlZmluaXRpb24pO1xuXHRcdFx0XHR0aGlzLiQkZFtwcm9wXSA9IHZhbHVlO1xuXHRcdFx0XHR2YXIgY29tcG9uZW50ID0gdGhpcy4kJGM7XG5cblx0XHRcdFx0aWYgKGNvbXBvbmVudCkge1xuXHRcdFx0XHRcdC8vIC8vIElmIHRoZSBpbnN0YW5jZSBoYXMgYW4gYWNjZXNzb3IsIHVzZSB0aGF0IGluc3RlYWRcblx0XHRcdFx0XHR2YXIgc2V0dGVyID0gZ2V0X2Rlc2NyaXB0b3IoY29tcG9uZW50LCBwcm9wKT8uZ2V0O1xuXG5cdFx0XHRcdFx0aWYgKHNldHRlcikge1xuXHRcdFx0XHRcdFx0Y29tcG9uZW50W3Byb3BdID0gdmFsdWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbXBvbmVudC4kc2V0KHsgW3Byb3BdOiB2YWx1ZSB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cdGV4cG9ydHMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcblx0XHRkZWZpbmVfcHJvcGVydHkoQ2xhc3MucHJvdG90eXBlLCBwcm9wZXJ0eSwge1xuXHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kJGM/Lltwcm9wZXJ0eV07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXHRpZiAoZXh0ZW5kKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciAtIGFzc2lnbmluZyBoZXJlIGlzIGZpbmVcblx0XHRDbGFzcyA9IGV4dGVuZChDbGFzcyk7XG5cdH1cblx0Q29tcG9uZW50LmVsZW1lbnQgPSAvKiogQHR5cGUge2FueX0gKi8gQ2xhc3M7XG5cdHJldHVybiBDbGFzcztcbn1cbiIsICIvKiogQGltcG9ydCB7IENvbXBvbmVudENvbnRleHQsIENvbXBvbmVudENvbnRleHRMZWdhY3kgfSBmcm9tICcjY2xpZW50JyAqL1xuLyoqIEBpbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuL2luZGV4LmpzJyAqL1xuLyoqIEBpbXBvcnQgeyBOb3RGdW5jdGlvbiB9IGZyb20gJy4vaW50ZXJuYWwvdHlwZXMuanMnICovXG5pbXBvcnQgeyB1bnRyYWNrIH0gZnJvbSAnLi9pbnRlcm5hbC9jbGllbnQvcnVudGltZS5qcyc7XG5pbXBvcnQgeyBpc19hcnJheSB9IGZyb20gJy4vaW50ZXJuYWwvc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7IHVzZXJfZWZmZWN0IH0gZnJvbSAnLi9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMnO1xuaW1wb3J0ICogYXMgZSBmcm9tICcuL2ludGVybmFsL2NsaWVudC9lcnJvcnMuanMnO1xuaW1wb3J0IHsgbGlmZWN5Y2xlX291dHNpZGVfY29tcG9uZW50IH0gZnJvbSAnLi9pbnRlcm5hbC9zaGFyZWQvZXJyb3JzLmpzJztcbmltcG9ydCB7IGxlZ2FjeV9tb2RlX2ZsYWcgfSBmcm9tICcuL2ludGVybmFsL2ZsYWdzL2luZGV4LmpzJztcbmltcG9ydCB7IGNvbXBvbmVudF9jb250ZXh0IH0gZnJvbSAnLi9pbnRlcm5hbC9jbGllbnQvY29udGV4dC5qcyc7XG5pbXBvcnQgeyBERVYgfSBmcm9tICdlc20tZW52JztcblxuaWYgKERFVikge1xuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJ1bmVcblx0ICovXG5cdGZ1bmN0aW9uIHRocm93X3J1bmVfZXJyb3IocnVuZSkge1xuXHRcdGlmICghKHJ1bmUgaW4gZ2xvYmFsVGhpcykpIHtcblx0XHRcdC8vIFRPRE8gaWYgcGVvcGxlIHN0YXJ0IGFkanVzdGluZyB0aGUgXCJ0aGlzIGNhbiBjb250YWluIHJ1bmVzXCIgY29uZmlnIHRocm91Z2ggdi1wLXMgbW9yZSwgYWRqdXN0IHRoaXMgbWVzc2FnZVxuXHRcdFx0LyoqIEB0eXBlIHthbnl9ICovXG5cdFx0XHRsZXQgdmFsdWU7IC8vIGxldCdzIGhvcGUgbm9vbmUgbW9kaWZpZXMgdGhpcyBnbG9iYWwsIGJ1dCBiZWx0cyBhbmQgYnJhY2VzXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywgcnVuZSwge1xuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnZXR0ZXItcmV0dXJuXG5cdFx0XHRcdGdldDogKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZS5ydW5lX291dHNpZGVfc3ZlbHRlKHJ1bmUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQ6ICh2KSA9PiB7XG5cdFx0XHRcdFx0dmFsdWUgPSB2O1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR0aHJvd19ydW5lX2Vycm9yKCckc3RhdGUnKTtcblx0dGhyb3dfcnVuZV9lcnJvcignJGVmZmVjdCcpO1xuXHR0aHJvd19ydW5lX2Vycm9yKCckZGVyaXZlZCcpO1xuXHR0aHJvd19ydW5lX2Vycm9yKCckaW5zcGVjdCcpO1xuXHR0aHJvd19ydW5lX2Vycm9yKCckcHJvcHMnKTtcblx0dGhyb3dfcnVuZV9lcnJvcignJGJpbmRhYmxlJyk7XG59XG5cbi8qKlxuICogYG9uTW91bnRgLCBsaWtlIFtgJGVmZmVjdGBdKGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS8kZWZmZWN0KSwgc2NoZWR1bGVzIGEgZnVuY3Rpb24gdG8gcnVuIGFzIHNvb24gYXMgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET00uXG4gKiBVbmxpa2UgYCRlZmZlY3RgLCB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25seSBydW5zIG9uY2UuXG4gKlxuICogSXQgbXVzdCBiZSBjYWxsZWQgZHVyaW5nIHRoZSBjb21wb25lbnQncyBpbml0aWFsaXNhdGlvbiAoYnV0IGRvZXNuJ3QgbmVlZCB0byBsaXZlIF9pbnNpZGVfIHRoZSBjb21wb25lbnQ7XG4gKiBpdCBjYW4gYmUgY2FsbGVkIGZyb20gYW4gZXh0ZXJuYWwgbW9kdWxlKS4gSWYgYSBmdW5jdGlvbiBpcyByZXR1cm5lZCBfc3luY2hyb25vdXNseV8gZnJvbSBgb25Nb3VudGAsXG4gKiBpdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxuICpcbiAqIGBvbk1vdW50YCBmdW5jdGlvbnMgZG8gbm90IHJ1biBkdXJpbmcgW3NlcnZlci1zaWRlIHJlbmRlcmluZ10oaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlL3N2ZWx0ZS1zZXJ2ZXIjcmVuZGVyKS5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHsoKSA9PiBOb3RGdW5jdGlvbjxUPiB8IFByb21pc2U8Tm90RnVuY3Rpb248VD4+IHwgKCgpID0+IGFueSl9IGZuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTW91bnQoZm4pIHtcblx0aWYgKGNvbXBvbmVudF9jb250ZXh0ID09PSBudWxsKSB7XG5cdFx0bGlmZWN5Y2xlX291dHNpZGVfY29tcG9uZW50KCdvbk1vdW50Jyk7XG5cdH1cblxuXHRpZiAobGVnYWN5X21vZGVfZmxhZyAmJiBjb21wb25lbnRfY29udGV4dC5sICE9PSBudWxsKSB7XG5cdFx0aW5pdF91cGRhdGVfY2FsbGJhY2tzKGNvbXBvbmVudF9jb250ZXh0KS5tLnB1c2goZm4pO1xuXHR9IGVsc2Uge1xuXHRcdHVzZXJfZWZmZWN0KCgpID0+IHtcblx0XHRcdGNvbnN0IGNsZWFudXAgPSB1bnRyYWNrKGZuKTtcblx0XHRcdGlmICh0eXBlb2YgY2xlYW51cCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIC8qKiBAdHlwZSB7KCkgPT4gdm9pZH0gKi8gKGNsZWFudXApO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cbiAqXG4gKiBPdXQgb2YgYG9uTW91bnRgLCBgYmVmb3JlVXBkYXRlYCwgYGFmdGVyVXBkYXRlYCBhbmQgYG9uRGVzdHJveWAsIHRoaXMgaXMgdGhlXG4gKiBvbmx5IG9uZSB0aGF0IHJ1bnMgaW5zaWRlIGEgc2VydmVyLXNpZGUgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkRlc3Ryb3koZm4pIHtcblx0aWYgKGNvbXBvbmVudF9jb250ZXh0ID09PSBudWxsKSB7XG5cdFx0bGlmZWN5Y2xlX291dHNpZGVfY29tcG9uZW50KCdvbkRlc3Ryb3knKTtcblx0fVxuXG5cdG9uTW91bnQoKCkgPT4gKCkgPT4gdW50cmFjayhmbikpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBbVD1hbnldXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtUfSBbZGV0YWlsXVxuICogQHBhcmFtIHthbnl9cGFyYW1zXzBcbiAqIEByZXR1cm5zIHtDdXN0b21FdmVudDxUPn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlX2N1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwsIHsgYnViYmxlcyA9IGZhbHNlLCBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSB7XG5cdHJldHVybiBuZXcgQ3VzdG9tRXZlbnQodHlwZSwgeyBkZXRhaWwsIGJ1YmJsZXMsIGNhbmNlbGFibGUgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBldmVudCBkaXNwYXRjaGVyIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGlzcGF0Y2ggW2NvbXBvbmVudCBldmVudHNdKGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS9sZWdhY3ktb24jQ29tcG9uZW50LWV2ZW50cykuXG4gKiBFdmVudCBkaXNwYXRjaGVycyBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHRha2UgdHdvIGFyZ3VtZW50czogYG5hbWVgIGFuZCBgZGV0YWlsYC5cbiAqXG4gKiBDb21wb25lbnQgZXZlbnRzIGNyZWF0ZWQgd2l0aCBgY3JlYXRlRXZlbnREaXNwYXRjaGVyYCBjcmVhdGUgYVxuICogW0N1c3RvbUV2ZW50XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQpLlxuICogVGhlc2UgZXZlbnRzIGRvIG5vdCBbYnViYmxlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0xlYXJuL0phdmFTY3JpcHQvQnVpbGRpbmdfYmxvY2tzL0V2ZW50cyNFdmVudF9idWJibGluZ19hbmRfY2FwdHVyZSkuXG4gKiBUaGUgYGRldGFpbGAgYXJndW1lbnQgY29ycmVzcG9uZHMgdG8gdGhlIFtDdXN0b21FdmVudC5kZXRhaWxdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC9kZXRhaWwpXG4gKiBwcm9wZXJ0eSBhbmQgY2FuIGNvbnRhaW4gYW55IHR5cGUgb2YgZGF0YS5cbiAqXG4gKiBUaGUgZXZlbnQgZGlzcGF0Y2hlciBjYW4gYmUgdHlwZWQgdG8gbmFycm93IHRoZSBhbGxvd2VkIGV2ZW50IG5hbWVzIGFuZCB0aGUgdHlwZSBvZiB0aGUgYGRldGFpbGAgYXJndW1lbnQ6XG4gKiBgYGB0c1xuICogY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXI8e1xuICogIGxvYWRlZDogbnVsbDsgLy8gZG9lcyBub3QgdGFrZSBhIGRldGFpbCBhcmd1bWVudFxuICogIGNoYW5nZTogc3RyaW5nOyAvLyB0YWtlcyBhIGRldGFpbCBhcmd1bWVudCBvZiB0eXBlIHN0cmluZywgd2hpY2ggaXMgcmVxdWlyZWRcbiAqICBvcHRpb25hbDogbnVtYmVyIHwgbnVsbDsgLy8gdGFrZXMgYW4gb3B0aW9uYWwgZGV0YWlsIGFyZ3VtZW50IG9mIHR5cGUgbnVtYmVyXG4gKiB9PigpO1xuICogYGBgXG4gKlxuICogQGRlcHJlY2F0ZWQgVXNlIGNhbGxiYWNrIHByb3BzIGFuZC9vciB0aGUgYCRob3N0KClgIHJ1bmUgaW5zdGVhZCBcdTIwMTQgc2VlIFttaWdyYXRpb24gZ3VpZGVdKGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS92NS1taWdyYXRpb24tZ3VpZGUjRXZlbnQtY2hhbmdlcy1Db21wb25lbnQtZXZlbnRzKVxuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBbRXZlbnRNYXAgPSBhbnldXG4gKiBAcmV0dXJucyB7RXZlbnREaXNwYXRjaGVyPEV2ZW50TWFwPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcblx0Y29uc3QgYWN0aXZlX2NvbXBvbmVudF9jb250ZXh0ID0gY29tcG9uZW50X2NvbnRleHQ7XG5cdGlmIChhY3RpdmVfY29tcG9uZW50X2NvbnRleHQgPT09IG51bGwpIHtcblx0XHRsaWZlY3ljbGVfb3V0c2lkZV9jb21wb25lbnQoJ2NyZWF0ZUV2ZW50RGlzcGF0Y2hlcicpO1xuXHR9XG5cblx0cmV0dXJuICh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpID0+IHtcblx0XHRjb25zdCBldmVudHMgPSAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIEZ1bmN0aW9uIHwgRnVuY3Rpb25bXT59ICovIChcblx0XHRcdGFjdGl2ZV9jb21wb25lbnRfY29udGV4dC5zLiQkZXZlbnRzXG5cdFx0KT8uWy8qKiBAdHlwZSB7YW55fSAqLyAodHlwZSldO1xuXG5cdFx0aWYgKGV2ZW50cykge1xuXHRcdFx0Y29uc3QgY2FsbGJhY2tzID0gaXNfYXJyYXkoZXZlbnRzKSA/IGV2ZW50cy5zbGljZSgpIDogW2V2ZW50c107XG5cdFx0XHQvLyBUT0RPIGFyZSB0aGVyZSBzaXR1YXRpb25zIHdoZXJlIGV2ZW50cyBjb3VsZCBiZSBkaXNwYXRjaGVkXG5cdFx0XHQvLyBpbiBhIHNlcnZlciAobm9uLURPTSkgZW52aXJvbm1lbnQ/XG5cdFx0XHRjb25zdCBldmVudCA9IGNyZWF0ZV9jdXN0b21fZXZlbnQoLyoqIEB0eXBlIHtzdHJpbmd9ICovICh0eXBlKSwgZGV0YWlsLCBvcHRpb25zKTtcblx0XHRcdGZvciAoY29uc3QgZm4gb2YgY2FsbGJhY2tzKSB7XG5cdFx0XHRcdGZuLmNhbGwoYWN0aXZlX2NvbXBvbmVudF9jb250ZXh0LngsIGV2ZW50KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcbn1cblxuLy8gVE9ETyBtYXJrIGJlZm9yZVVwZGF0ZSBhbmQgYWZ0ZXJVcGRhdGUgYXMgZGVwcmVjYXRlZCBpbiBTdmVsdGUgNlxuXG4vKipcbiAqIFNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyB1cGRhdGVkIGFmdGVyIGFueSBzdGF0ZSBjaGFuZ2UuXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIHJ1bnMgd2lsbCBiZSBiZWZvcmUgdGhlIGluaXRpYWwgYG9uTW91bnRgLlxuICpcbiAqIEluIHJ1bmVzIG1vZGUgdXNlIGAkZWZmZWN0LnByZWAgaW5zdGVhZC5cbiAqXG4gKiBAZGVwcmVjYXRlZCBVc2UgW2AkZWZmZWN0LnByZWBdKGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS8kZWZmZWN0IyRlZmZlY3QucHJlKSBpbnN0ZWFkXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGZuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJlZm9yZVVwZGF0ZShmbikge1xuXHRpZiAoY29tcG9uZW50X2NvbnRleHQgPT09IG51bGwpIHtcblx0XHRsaWZlY3ljbGVfb3V0c2lkZV9jb21wb25lbnQoJ2JlZm9yZVVwZGF0ZScpO1xuXHR9XG5cblx0aWYgKGNvbXBvbmVudF9jb250ZXh0LmwgPT09IG51bGwpIHtcblx0XHRlLmxpZmVjeWNsZV9sZWdhY3lfb25seSgnYmVmb3JlVXBkYXRlJyk7XG5cdH1cblxuXHRpbml0X3VwZGF0ZV9jYWxsYmFja3MoY29tcG9uZW50X2NvbnRleHQpLmIucHVzaChmbik7XG59XG5cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gdXBkYXRlZC5cbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgcnVucyB3aWxsIGJlIGFmdGVyIHRoZSBpbml0aWFsIGBvbk1vdW50YC5cbiAqXG4gKiBJbiBydW5lcyBtb2RlIHVzZSBgJGVmZmVjdGAgaW5zdGVhZC5cbiAqXG4gKiBAZGVwcmVjYXRlZCBVc2UgW2AkZWZmZWN0YF0oaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLyRlZmZlY3QpIGluc3RlYWRcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gZm5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWZ0ZXJVcGRhdGUoZm4pIHtcblx0aWYgKGNvbXBvbmVudF9jb250ZXh0ID09PSBudWxsKSB7XG5cdFx0bGlmZWN5Y2xlX291dHNpZGVfY29tcG9uZW50KCdhZnRlclVwZGF0ZScpO1xuXHR9XG5cblx0aWYgKGNvbXBvbmVudF9jb250ZXh0LmwgPT09IG51bGwpIHtcblx0XHRlLmxpZmVjeWNsZV9sZWdhY3lfb25seSgnYWZ0ZXJVcGRhdGUnKTtcblx0fVxuXG5cdGluaXRfdXBkYXRlX2NhbGxiYWNrcyhjb21wb25lbnRfY29udGV4dCkuYS5wdXNoKGZuKTtcbn1cblxuLyoqXG4gKiBMZWdhY3ktbW9kZTogSW5pdCBjYWxsYmFja3Mgb2JqZWN0IGZvciBvbk1vdW50L2JlZm9yZVVwZGF0ZS9hZnRlclVwZGF0ZVxuICogQHBhcmFtIHtDb21wb25lbnRDb250ZXh0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGluaXRfdXBkYXRlX2NhbGxiYWNrcyhjb250ZXh0KSB7XG5cdHZhciBsID0gLyoqIEB0eXBlIHtDb21wb25lbnRDb250ZXh0TGVnYWN5fSAqLyAoY29udGV4dCkubDtcblx0cmV0dXJuIChsLnUgPz89IHsgYTogW10sIGI6IFtdLCBtOiBbXSB9KTtcbn1cblxuZXhwb3J0IHsgZmx1c2hTeW5jIH0gZnJvbSAnLi9pbnRlcm5hbC9jbGllbnQvcnVudGltZS5qcyc7XG5leHBvcnQgeyBnZXRDb250ZXh0LCBnZXRBbGxDb250ZXh0cywgaGFzQ29udGV4dCwgc2V0Q29udGV4dCB9IGZyb20gJy4vaW50ZXJuYWwvY2xpZW50L2NvbnRleHQuanMnO1xuZXhwb3J0IHsgaHlkcmF0ZSwgbW91bnQsIHVubW91bnQgfSBmcm9tICcuL2ludGVybmFsL2NsaWVudC9yZW5kZXIuanMnO1xuZXhwb3J0IHsgdGljaywgdW50cmFjayB9IGZyb20gJy4vaW50ZXJuYWwvY2xpZW50L3J1bnRpbWUuanMnO1xuZXhwb3J0IHsgY3JlYXRlUmF3U25pcHBldCB9IGZyb20gJy4vaW50ZXJuYWwvY2xpZW50L2RvbS9ibG9ja3Mvc25pcHBldC5qcyc7XG4iLCAiLyoqIEBpbXBvcnQgeyBSZWFkYWJsZSB9IGZyb20gJy4vcHVibGljJyAqL1xuaW1wb3J0IHsgdW50cmFjayB9IGZyb20gJy4uL2luZGV4LWNsaWVudC5qcyc7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi4vaW50ZXJuYWwvc2hhcmVkL3V0aWxzLmpzJztcblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtSZWFkYWJsZTxUPiB8IG51bGwgfCB1bmRlZmluZWR9IHN0b3JlXG4gKiBAcGFyYW0geyh2YWx1ZTogVCkgPT4gdm9pZH0gcnVuXG4gKiBAcGFyYW0geyh2YWx1ZTogVCkgPT4gdm9pZH0gW2ludmFsaWRhdGVdXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZV90b19zdG9yZShzdG9yZSwgcnVuLCBpbnZhbGlkYXRlKSB7XG5cdGlmIChzdG9yZSA9PSBudWxsKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdHJ1bih1bmRlZmluZWQpO1xuXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdGlmIChpbnZhbGlkYXRlKSBpbnZhbGlkYXRlKHVuZGVmaW5lZCk7XG5cblx0XHRyZXR1cm4gbm9vcDtcblx0fVxuXG5cdC8vIFN2ZWx0ZSBzdG9yZSB0YWtlcyBhIHByaXZhdGUgc2Vjb25kIGFyZ3VtZW50XG5cdC8vIFN0YXJ0U3RvcE5vdGlmaWVyIGNvdWxkIG11dGF0ZSBzdGF0ZSwgYW5kIHdlIHdhbnQgdG8gc2lsZW5jZSB0aGUgY29ycmVzcG9uZGluZyB2YWxpZGF0aW9uIGVycm9yXG5cdGNvbnN0IHVuc3ViID0gdW50cmFjaygoKSA9PlxuXHRcdHN0b3JlLnN1YnNjcmliZShcblx0XHRcdHJ1bixcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdGludmFsaWRhdGVcblx0XHQpXG5cdCk7XG5cblx0Ly8gQWxzbyBzdXBwb3J0IFJ4SlNcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUT0RPIGZpeCB0aGlzIGluIHRoZSB0eXBlcz9cblx0cmV0dXJuIHVuc3ViLnVuc3Vic2NyaWJlID8gKCkgPT4gdW5zdWIudW5zdWJzY3JpYmUoKSA6IHVuc3ViO1xufVxuIiwgIi8qKiBAaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnI3NlcnZlcicgKi9cbmltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuaW1wb3J0IHsgb25fZGVzdHJveSB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0ICogYXMgZSBmcm9tICcuLi9zaGFyZWQvZXJyb3JzLmpzJztcblxuLyoqIEB0eXBlIHtDb21wb25lbnQgfCBudWxsfSAqL1xuZXhwb3J0IHZhciBjdXJyZW50X2NvbXBvbmVudCA9IG51bGw7XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7YW55fSBrZXlcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dChrZXkpIHtcblx0Y29uc3QgY29udGV4dF9tYXAgPSBnZXRfb3JfaW5pdF9jb250ZXh0X21hcCgnZ2V0Q29udGV4dCcpO1xuXHRjb25zdCByZXN1bHQgPSAvKiogQHR5cGUge1R9ICovIChjb250ZXh0X21hcC5nZXQoa2V5KSk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHBhcmFtIHtUfSBjb250ZXh0XG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldENvbnRleHQoa2V5LCBjb250ZXh0KSB7XG5cdGdldF9vcl9pbml0X2NvbnRleHRfbWFwKCdzZXRDb250ZXh0Jykuc2V0KGtleSwgY29udGV4dCk7XG5cdHJldHVybiBjb250ZXh0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBrZXlcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzQ29udGV4dChrZXkpIHtcblx0cmV0dXJuIGdldF9vcl9pbml0X2NvbnRleHRfbWFwKCdoYXNDb250ZXh0JykuaGFzKGtleSk7XG59XG5cbi8qKiBAcmV0dXJucyB7TWFwPGFueSwgYW55Pn0gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxDb250ZXh0cygpIHtcblx0cmV0dXJuIGdldF9vcl9pbml0X2NvbnRleHRfbWFwKCdnZXRBbGxDb250ZXh0cycpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7TWFwPHVua25vd24sIHVua25vd24+fVxuICovXG5mdW5jdGlvbiBnZXRfb3JfaW5pdF9jb250ZXh0X21hcChuYW1lKSB7XG5cdGlmIChjdXJyZW50X2NvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdGUubGlmZWN5Y2xlX291dHNpZGVfY29tcG9uZW50KG5hbWUpO1xuXHR9XG5cblx0cmV0dXJuIChjdXJyZW50X2NvbXBvbmVudC5jID8/PSBuZXcgTWFwKGdldF9wYXJlbnRfY29udGV4dChjdXJyZW50X2NvbXBvbmVudCkgfHwgdW5kZWZpbmVkKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHVzaChmbikge1xuXHRjdXJyZW50X2NvbXBvbmVudCA9IHsgcDogY3VycmVudF9jb21wb25lbnQsIGM6IG51bGwsIGQ6IG51bGwgfTtcblx0aWYgKERFVikge1xuXHRcdC8vIGNvbXBvbmVudCBmdW5jdGlvblxuXHRcdGN1cnJlbnRfY29tcG9uZW50LmZ1bmN0aW9uID0gZm47XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcCgpIHtcblx0dmFyIGNvbXBvbmVudCA9IC8qKiBAdHlwZSB7Q29tcG9uZW50fSAqLyAoY3VycmVudF9jb21wb25lbnQpO1xuXG5cdHZhciBvbmRlc3Ryb3kgPSBjb21wb25lbnQuZDtcblxuXHRpZiAob25kZXN0cm95KSB7XG5cdFx0b25fZGVzdHJveS5wdXNoKC4uLm9uZGVzdHJveSk7XG5cdH1cblxuXHRjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudC5wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRfY29udGV4dFxuICogQHJldHVybnMge01hcDx1bmtub3duLCB1bmtub3duPiB8IG51bGx9XG4gKi9cbmZ1bmN0aW9uIGdldF9wYXJlbnRfY29udGV4dChjb21wb25lbnRfY29udGV4dCkge1xuXHRsZXQgcGFyZW50ID0gY29tcG9uZW50X2NvbnRleHQucDtcblxuXHR3aGlsZSAocGFyZW50ICE9PSBudWxsKSB7XG5cdFx0Y29uc3QgY29udGV4dF9tYXAgPSBwYXJlbnQuYztcblx0XHRpZiAoY29udGV4dF9tYXAgIT09IG51bGwpIHtcblx0XHRcdHJldHVybiBjb250ZXh0X21hcDtcblx0XHR9XG5cdFx0cGFyZW50ID0gcGFyZW50LnA7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cbiIsICJpbXBvcnQgeyBIWURSQVRJT05fRU5ELCBIWURSQVRJT05fU1RBUlQsIEhZRFJBVElPTl9TVEFSVF9FTFNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcblxuZXhwb3J0IGNvbnN0IEJMT0NLX09QRU4gPSBgPCEtLSR7SFlEUkFUSU9OX1NUQVJUfS0tPmA7XG5leHBvcnQgY29uc3QgQkxPQ0tfT1BFTl9FTFNFID0gYDwhLS0ke0hZRFJBVElPTl9TVEFSVF9FTFNFfS0tPmA7XG5leHBvcnQgY29uc3QgQkxPQ0tfQ0xPU0UgPSBgPCEtLSR7SFlEUkFUSU9OX0VORH0tLT5gO1xuZXhwb3J0IGNvbnN0IEVNUFRZX0NPTU1FTlQgPSBgPCEtLS0tPmA7XG4iLCAiLyoqXG4gKiBNYXAgb2YgZWxlbWVudHMgdGhhdCBoYXZlIGNlcnRhaW4gZWxlbWVudHMgdGhhdCBhcmUgbm90IGFsbG93ZWQgaW5zaWRlIHRoZW0sIGluIHRoZSBzZW5zZSB0aGF0IHRoZXkgd2lsbCBhdXRvLWNsb3NlIHRoZSBwYXJlbnQvYW5jZXN0b3IgZWxlbWVudC5cbiAqIFRoZW9yZXRpY2FsbHkgb25lIGNvdWxkIHRha2UgYWR2YW50YWdlIG9mIGl0IGJ1dCBtb3N0IG9mIHRoZSB0aW1lIGl0IHdpbGwganVzdCByZXN1bHQgaW4gY29uZnVzaW5nIGJlaGF2aW9yIGFuZCBicmVhayB3aGVuIFNTUidkLlxuICogVGhlcmUgYXJlIG1vcmUgZWxlbWVudHMgdGhhdCBhcmUgaW52YWxpZCBpbnNpZGUgb3RoZXIgZWxlbWVudHMsIGJ1dCB0aGV5J3JlIG5vdCBhdXRvLWNsb3NlZCBhbmQgc28gZG9uJ3QgYnJlYWsgU1NSIGFuZCBhcmUgdGhlcmVmb3JlIG5vdCBsaXN0ZWQgaGVyZS5cbiAqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB7IGRpcmVjdDogc3RyaW5nW119IHwgeyBkZXNjZW5kYW50OiBzdHJpbmdbXTsgcmVzZXRfYnk/OiBzdHJpbmdbXSB9Pn1cbiAqL1xuY29uc3QgYXV0b2Nsb3NpbmdfY2hpbGRyZW4gPSB7XG5cdC8vIGJhc2VkIG9uIGh0dHA6Ly9kZXZlbG9wZXJzLndoYXR3Zy5vcmcvc3ludGF4Lmh0bWwjc3ludGF4LXRhZy1vbWlzc2lvblxuXHRsaTogeyBkaXJlY3Q6IFsnbGknXSB9LFxuXHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvZHQjdGVjaG5pY2FsX3N1bW1hcnlcblx0ZHQ6IHsgZGVzY2VuZGFudDogWydkdCcsICdkZCddLCByZXNldF9ieTogWydkbCddIH0sXG5cdGRkOiB7IGRlc2NlbmRhbnQ6IFsnZHQnLCAnZGQnXSwgcmVzZXRfYnk6IFsnZGwnXSB9LFxuXHRwOiB7XG5cdFx0ZGVzY2VuZGFudDogW1xuXHRcdFx0J2FkZHJlc3MnLFxuXHRcdFx0J2FydGljbGUnLFxuXHRcdFx0J2FzaWRlJyxcblx0XHRcdCdibG9ja3F1b3RlJyxcblx0XHRcdCdkaXYnLFxuXHRcdFx0J2RsJyxcblx0XHRcdCdmaWVsZHNldCcsXG5cdFx0XHQnZm9vdGVyJyxcblx0XHRcdCdmb3JtJyxcblx0XHRcdCdoMScsXG5cdFx0XHQnaDInLFxuXHRcdFx0J2gzJyxcblx0XHRcdCdoNCcsXG5cdFx0XHQnaDUnLFxuXHRcdFx0J2g2Jyxcblx0XHRcdCdoZWFkZXInLFxuXHRcdFx0J2hncm91cCcsXG5cdFx0XHQnaHInLFxuXHRcdFx0J21haW4nLFxuXHRcdFx0J21lbnUnLFxuXHRcdFx0J25hdicsXG5cdFx0XHQnb2wnLFxuXHRcdFx0J3AnLFxuXHRcdFx0J3ByZScsXG5cdFx0XHQnc2VjdGlvbicsXG5cdFx0XHQndGFibGUnLFxuXHRcdFx0J3VsJ1xuXHRcdF1cblx0fSxcblx0cnQ6IHsgZGVzY2VuZGFudDogWydydCcsICdycCddIH0sXG5cdHJwOiB7IGRlc2NlbmRhbnQ6IFsncnQnLCAncnAnXSB9LFxuXHRvcHRncm91cDogeyBkZXNjZW5kYW50OiBbJ29wdGdyb3VwJ10gfSxcblx0b3B0aW9uOiB7IGRlc2NlbmRhbnQ6IFsnb3B0aW9uJywgJ29wdGdyb3VwJ10gfSxcblx0dGhlYWQ6IHsgZGlyZWN0OiBbJ3Rib2R5JywgJ3Rmb290J10gfSxcblx0dGJvZHk6IHsgZGlyZWN0OiBbJ3Rib2R5JywgJ3Rmb290J10gfSxcblx0dGZvb3Q6IHsgZGlyZWN0OiBbJ3Rib2R5J10gfSxcblx0dHI6IHsgZGlyZWN0OiBbJ3RyJywgJ3Rib2R5J10gfSxcblx0dGQ6IHsgZGlyZWN0OiBbJ3RkJywgJ3RoJywgJ3RyJ10gfSxcblx0dGg6IHsgZGlyZWN0OiBbJ3RkJywgJ3RoJywgJ3RyJ10gfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHRhZyBpcyBlaXRoZXIgdGhlIGxhc3QgaW4gdGhlIGxpc3Qgb2Ygc2libGluZ3MgYW5kIHdpbGwgYmUgYXV0b2Nsb3NlZCxcbiAqIG9yIG5vdCBhbGxvd2VkIGluc2lkZSB0aGUgcGFyZW50IHRhZyBzdWNoIHRoYXQgaXQgd2lsbCBhdXRvLWNsb3NlIGl0LiBUaGUgbGF0dGVyIHJlc3VsdHNcbiAqIGluIHRoZSBicm93c2VyIHJlcGFpcmluZyB0aGUgSFRNTCwgd2hpY2ggd2lsbCBsaWtlbHkgcmVzdWx0IGluIGFuIGVycm9yIGR1cmluZyBoeWRyYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudFxuICogQHBhcmFtIHtzdHJpbmd9IFtuZXh0XVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2luZ190YWdfb21pdHRlZChjdXJyZW50LCBuZXh0KSB7XG5cdGNvbnN0IGRpc2FsbG93ZWQgPSBhdXRvY2xvc2luZ19jaGlsZHJlbltjdXJyZW50XTtcblx0aWYgKGRpc2FsbG93ZWQpIHtcblx0XHRpZiAoXG5cdFx0XHQhbmV4dCB8fFxuXHRcdFx0KCdkaXJlY3QnIGluIGRpc2FsbG93ZWQgPyBkaXNhbGxvd2VkLmRpcmVjdCA6IGRpc2FsbG93ZWQuZGVzY2VuZGFudCkuaW5jbHVkZXMobmV4dClcblx0XHQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTWFwIG9mIGVsZW1lbnRzIHRoYXQgaGF2ZSBjZXJ0YWluIGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBhbGxvd2VkIGluc2lkZSB0aGVtLCBpbiB0aGUgc2Vuc2UgdGhhdCB0aGUgYnJvd3NlciB3aWxsIHNvbWVob3cgcmVwYWlyIHRoZSBIVE1MLlxuICogVGhlcmUgYXJlIG1vcmUgZWxlbWVudHMgdGhhdCBhcmUgaW52YWxpZCBpbnNpZGUgb3RoZXIgZWxlbWVudHMsIGJ1dCB0aGV5J3JlIG5vdCByZXBhaXJlZCBhbmQgc28gZG9uJ3QgYnJlYWsgU1NSIGFuZCBhcmUgdGhlcmVmb3JlIG5vdCBsaXN0ZWQgaGVyZS5cbiAqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB7IGRpcmVjdDogc3RyaW5nW119IHwgeyBkZXNjZW5kYW50OiBzdHJpbmdbXTsgcmVzZXRfYnk/OiBzdHJpbmdbXTsgb25seT86IHN0cmluZ1tdIH0gfCB7IG9ubHk6IHN0cmluZ1tdIH0+fVxuICovXG5jb25zdCBkaXNhbGxvd2VkX2NoaWxkcmVuID0ge1xuXHQuLi5hdXRvY2xvc2luZ19jaGlsZHJlbixcblx0b3B0Z3JvdXA6IHsgb25seTogWydvcHRpb24nLCAnI3RleHQnXSB9LFxuXHQvLyBTdHJpY3RseSBzcGVha2luZywgc2VlaW5nIGFuIDxvcHRpb24+IGRvZXNuJ3QgbWVhbiB3ZSdyZSBpbiBhIDxzZWxlY3Q+LCBidXQgd2UgYXNzdW1lIGl0IGhlcmVcblx0b3B0aW9uOiB7IG9ubHk6IFsnI3RleHQnXSB9LFxuXHRmb3JtOiB7IGRlc2NlbmRhbnQ6IFsnZm9ybSddIH0sXG5cdGE6IHsgZGVzY2VuZGFudDogWydhJ10gfSxcblx0YnV0dG9uOiB7IGRlc2NlbmRhbnQ6IFsnYnV0dG9uJ10gfSxcblx0aDE6IHsgZGVzY2VuZGFudDogWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddIH0sXG5cdGgyOiB7IGRlc2NlbmRhbnQ6IFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXSB9LFxuXHRoMzogeyBkZXNjZW5kYW50OiBbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10gfSxcblx0aDQ6IHsgZGVzY2VuZGFudDogWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddIH0sXG5cdGg1OiB7IGRlc2NlbmRhbnQ6IFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXSB9LFxuXHRoNjogeyBkZXNjZW5kYW50OiBbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10gfSxcblx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjcGFyc2luZy1tYWluLWluc2VsZWN0XG5cdHNlbGVjdDogeyBvbmx5OiBbJ29wdGlvbicsICdvcHRncm91cCcsICcjdGV4dCcsICdocicsICdzY3JpcHQnLCAndGVtcGxhdGUnXSB9LFxuXG5cdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbnRkXG5cdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbmNhcHRpb25cblx0Ly8gTm8gc3BlY2lhbCBiZWhhdmlvciBzaW5jZSB0aGVzZSBydWxlcyBmYWxsIGJhY2sgdG8gXCJpbiBib2R5XCIgbW9kZSBmb3Jcblx0Ly8gYWxsIGV4Y2VwdCBzcGVjaWFsIHRhYmxlIG5vZGVzIHdoaWNoIGNhdXNlIGJhZCBwYXJzaW5nIGJlaGF2aW9yIGFueXdheS5cblxuXHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNwYXJzaW5nLW1haW4taW50ZFxuXHR0cjogeyBvbmx5OiBbJ3RoJywgJ3RkJywgJ3N0eWxlJywgJ3NjcmlwdCcsICd0ZW1wbGF0ZSddIH0sXG5cdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbnRib2R5XG5cdHRib2R5OiB7IG9ubHk6IFsndHInLCAnc3R5bGUnLCAnc2NyaXB0JywgJ3RlbXBsYXRlJ10gfSxcblx0dGhlYWQ6IHsgb25seTogWyd0cicsICdzdHlsZScsICdzY3JpcHQnLCAndGVtcGxhdGUnXSB9LFxuXHR0Zm9vdDogeyBvbmx5OiBbJ3RyJywgJ3N0eWxlJywgJ3NjcmlwdCcsICd0ZW1wbGF0ZSddIH0sXG5cdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbmNvbGdyb3VwXG5cdGNvbGdyb3VwOiB7IG9ubHk6IFsnY29sJywgJ3RlbXBsYXRlJ10gfSxcblx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjcGFyc2luZy1tYWluLWludGFibGVcblx0dGFibGU6IHtcblx0XHRvbmx5OiBbJ2NhcHRpb24nLCAnY29sZ3JvdXAnLCAndGJvZHknLCAndGhlYWQnLCAndGZvb3QnLCAnc3R5bGUnLCAnc2NyaXB0JywgJ3RlbXBsYXRlJ11cblx0fSxcblx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjcGFyc2luZy1tYWluLWluaGVhZFxuXHRoZWFkOiB7XG5cdFx0b25seTogW1xuXHRcdFx0J2Jhc2UnLFxuXHRcdFx0J2Jhc2Vmb250Jyxcblx0XHRcdCdiZ3NvdW5kJyxcblx0XHRcdCdsaW5rJyxcblx0XHRcdCdtZXRhJyxcblx0XHRcdCd0aXRsZScsXG5cdFx0XHQnbm9zY3JpcHQnLFxuXHRcdFx0J25vZnJhbWVzJyxcblx0XHRcdCdzdHlsZScsXG5cdFx0XHQnc2NyaXB0Jyxcblx0XHRcdCd0ZW1wbGF0ZSdcblx0XHRdXG5cdH0sXG5cdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI3RoZS1odG1sLWVsZW1lbnRcblx0aHRtbDogeyBvbmx5OiBbJ2hlYWQnLCAnYm9keScsICdmcmFtZXNldCddIH0sXG5cdGZyYW1lc2V0OiB7IG9ubHk6IFsnZnJhbWUnXSB9LFxuXHQnI2RvY3VtZW50JzogeyBvbmx5OiBbJ2h0bWwnXSB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gZXJyb3IgbWVzc2FnZSBpZiB0aGUgdGFnIGlzIG5vdCBhbGxvd2VkIGluc2lkZSB0aGUgYW5jZXN0b3IgdGFnICh3aGljaCBpcyBncmFuZHBhcmVudCBhbmQgYWJvdmUpIHN1Y2ggdGhhdCBpdCB3aWxsIHJlc3VsdFxuICogaW4gdGhlIGJyb3dzZXIgcmVwYWlyaW5nIHRoZSBIVE1MLCB3aGljaCB3aWxsIGxpa2VseSByZXN1bHQgaW4gYW4gZXJyb3IgZHVyaW5nIGh5ZHJhdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGlsZF90YWdcbiAqIEBwYXJhbSB7c3RyaW5nW119IGFuY2VzdG9ycyBBbGwgbm9kZXMgc3RhcnRpbmcgd2l0aCB0aGUgcGFyZW50LCB1cCB1bnRpbCB0aGUgYW5jZXN0b3IsIHdoaWNoIG1lYW5zIHR3byBlbnRyaWVzIG1pbmltdW1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY2hpbGRfbG9jXVxuICogQHBhcmFtIHtzdHJpbmd9IFthbmNlc3Rvcl9sb2NdXG4gKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX3RhZ192YWxpZF93aXRoX2FuY2VzdG9yKGNoaWxkX3RhZywgYW5jZXN0b3JzLCBjaGlsZF9sb2MsIGFuY2VzdG9yX2xvYykge1xuXHRpZiAoY2hpbGRfdGFnLmluY2x1ZGVzKCctJykpIHJldHVybiBudWxsOyAvLyBjdXN0b20gZWxlbWVudHMgY2FuIGJlIGFueXRoaW5nXG5cblx0Y29uc3QgYW5jZXN0b3JfdGFnID0gYW5jZXN0b3JzW2FuY2VzdG9ycy5sZW5ndGggLSAxXTtcblx0Y29uc3QgZGlzYWxsb3dlZCA9IGRpc2FsbG93ZWRfY2hpbGRyZW5bYW5jZXN0b3JfdGFnXTtcblx0aWYgKCFkaXNhbGxvd2VkKSByZXR1cm4gbnVsbDtcblxuXHRpZiAoJ3Jlc2V0X2J5JyBpbiBkaXNhbGxvd2VkICYmIGRpc2FsbG93ZWQucmVzZXRfYnkpIHtcblx0XHRmb3IgKGxldCBpID0gYW5jZXN0b3JzLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRjb25zdCBhbmNlc3RvciA9IGFuY2VzdG9yc1tpXTtcblx0XHRcdGlmIChhbmNlc3Rvci5pbmNsdWRlcygnLScpKSByZXR1cm4gbnVsbDsgLy8gY3VzdG9tIGVsZW1lbnRzIGNhbiBiZSBhbnl0aGluZ1xuXG5cdFx0XHQvLyBBIHJlc2V0IG1lYW5zIHRoYXQgZm9yYmlkZGVuIGRlc2NlbmRhbnRzIGFyZSBhbGxvd2VkIGFnYWluXG5cdFx0XHRpZiAoZGlzYWxsb3dlZC5yZXNldF9ieS5pbmNsdWRlcyhhbmNlc3RvcnNbaV0pKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICgnZGVzY2VuZGFudCcgaW4gZGlzYWxsb3dlZCAmJiBkaXNhbGxvd2VkLmRlc2NlbmRhbnQuaW5jbHVkZXMoY2hpbGRfdGFnKSkge1xuXHRcdGNvbnN0IGNoaWxkID0gY2hpbGRfbG9jID8gYFxcYDwke2NoaWxkX3RhZ30+XFxgICgke2NoaWxkX2xvY30pYCA6IGBcXGA8JHtjaGlsZF90YWd9PlxcYGA7XG5cdFx0Y29uc3QgYW5jZXN0b3IgPSBhbmNlc3Rvcl9sb2Ncblx0XHRcdD8gYFxcYDwke2FuY2VzdG9yX3RhZ30+XFxgICgke2FuY2VzdG9yX2xvY30pYFxuXHRcdFx0OiBgXFxgPCR7YW5jZXN0b3JfdGFnfT5cXGBgO1xuXG5cdFx0cmV0dXJuIGAke2NoaWxkfSBjYW5ub3QgYmUgYSBkZXNjZW5kYW50IG9mICR7YW5jZXN0b3J9YDtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gZXJyb3IgbWVzc2FnZSBpZiB0aGUgdGFnIGlzIG5vdCBhbGxvd2VkIGluc2lkZSB0aGUgcGFyZW50IHRhZyBzdWNoIHRoYXQgaXQgd2lsbCByZXN1bHRcbiAqIGluIHRoZSBicm93c2VyIHJlcGFpcmluZyB0aGUgSFRNTCwgd2hpY2ggd2lsbCBsaWtlbHkgcmVzdWx0IGluIGFuIGVycm9yIGR1cmluZyBoeWRyYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gY2hpbGRfdGFnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50X3RhZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtjaGlsZF9sb2NdXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmVudF9sb2NdXG4gKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX3RhZ192YWxpZF93aXRoX3BhcmVudChjaGlsZF90YWcsIHBhcmVudF90YWcsIGNoaWxkX2xvYywgcGFyZW50X2xvYykge1xuXHRpZiAoY2hpbGRfdGFnLmluY2x1ZGVzKCctJykgfHwgcGFyZW50X3RhZz8uaW5jbHVkZXMoJy0nKSkgcmV0dXJuIG51bGw7IC8vIGN1c3RvbSBlbGVtZW50cyBjYW4gYmUgYW55dGhpbmdcblxuXHRpZiAocGFyZW50X3RhZyA9PT0gJ3RlbXBsYXRlJykgcmV0dXJuIG51bGw7IC8vIG5vIGVycm9ycyBvciB3YXJuaW5nIHNob3VsZCBiZSB0aHJvd24gaW4gaW1tZWRpYXRlIGNoaWxkcmVuIG9mIHRlbXBsYXRlIHRhZ3NcblxuXHRjb25zdCBkaXNhbGxvd2VkID0gZGlzYWxsb3dlZF9jaGlsZHJlbltwYXJlbnRfdGFnXTtcblxuXHRjb25zdCBjaGlsZCA9IGNoaWxkX2xvYyA/IGBcXGA8JHtjaGlsZF90YWd9PlxcYCAoJHtjaGlsZF9sb2N9KWAgOiBgXFxgPCR7Y2hpbGRfdGFnfT5cXGBgO1xuXHRjb25zdCBwYXJlbnQgPSBwYXJlbnRfbG9jID8gYFxcYDwke3BhcmVudF90YWd9PlxcYCAoJHtwYXJlbnRfbG9jfSlgIDogYFxcYDwke3BhcmVudF90YWd9PlxcYGA7XG5cblx0aWYgKGRpc2FsbG93ZWQpIHtcblx0XHRpZiAoJ2RpcmVjdCcgaW4gZGlzYWxsb3dlZCAmJiBkaXNhbGxvd2VkLmRpcmVjdC5pbmNsdWRlcyhjaGlsZF90YWcpKSB7XG5cdFx0XHRyZXR1cm4gYCR7Y2hpbGR9IGNhbm5vdCBiZSBhIGRpcmVjdCBjaGlsZCBvZiAke3BhcmVudH1gO1xuXHRcdH1cblxuXHRcdGlmICgnZGVzY2VuZGFudCcgaW4gZGlzYWxsb3dlZCAmJiBkaXNhbGxvd2VkLmRlc2NlbmRhbnQuaW5jbHVkZXMoY2hpbGRfdGFnKSkge1xuXHRcdFx0cmV0dXJuIGAke2NoaWxkfSBjYW5ub3QgYmUgYSBjaGlsZCBvZiAke3BhcmVudH1gO1xuXHRcdH1cblxuXHRcdGlmICgnb25seScgaW4gZGlzYWxsb3dlZCAmJiBkaXNhbGxvd2VkLm9ubHkpIHtcblx0XHRcdGlmIChkaXNhbGxvd2VkLm9ubHkuaW5jbHVkZXMoY2hpbGRfdGFnKSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBgJHtjaGlsZH0gY2Fubm90IGJlIGEgY2hpbGQgb2YgJHtwYXJlbnR9LiBcXGA8JHtwYXJlbnRfdGFnfT5cXGAgb25seSBhbGxvd3MgdGhlc2UgY2hpbGRyZW46ICR7ZGlzYWxsb3dlZC5vbmx5Lm1hcCgoZCkgPT4gYFxcYDwke2R9PlxcYGApLmpvaW4oJywgJyl9YDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBUaGVzZSB0YWdzIGFyZSBvbmx5IHZhbGlkIHdpdGggYSBmZXcgcGFyZW50cyB0aGF0IGhhdmUgc3BlY2lhbCBjaGlsZFxuXHQvLyBwYXJzaW5nIHJ1bGVzIC0gaWYgd2UncmUgZG93biBoZXJlLCB0aGVuIG5vbmUgb2YgdGhvc2UgbWF0Y2hlZCBhbmRcblx0Ly8gc28gd2UgYWxsb3cgaXQgb25seSBpZiB3ZSBkb24ndCBrbm93IHdoYXQgdGhlIHBhcmVudCBpcywgYXMgYWxsIG90aGVyXG5cdC8vIGNhc2VzIGFyZSBpbnZhbGlkIChhbmQgd2Ugb25seSBnZXQgaW50byB0aGlzIGZ1bmN0aW9uIGlmIHdlIGtub3cgdGhlIHBhcmVudCkuXG5cdHN3aXRjaCAoY2hpbGRfdGFnKSB7XG5cdFx0Y2FzZSAnYm9keSc6XG5cdFx0Y2FzZSAnY2FwdGlvbic6XG5cdFx0Y2FzZSAnY29sJzpcblx0XHRjYXNlICdjb2xncm91cCc6XG5cdFx0Y2FzZSAnZnJhbWVzZXQnOlxuXHRcdGNhc2UgJ2ZyYW1lJzpcblx0XHRjYXNlICdoZWFkJzpcblx0XHRjYXNlICdodG1sJzpcblx0XHRcdHJldHVybiBgJHtjaGlsZH0gY2Fubm90IGJlIGEgY2hpbGQgb2YgJHtwYXJlbnR9YDtcblx0XHRjYXNlICd0aGVhZCc6XG5cdFx0Y2FzZSAndGJvZHknOlxuXHRcdGNhc2UgJ3Rmb290Jzpcblx0XHRcdHJldHVybiBgJHtjaGlsZH0gbXVzdCBiZSB0aGUgY2hpbGQgb2YgYSBcXGA8dGFibGU+XFxgLCBub3QgYSAke3BhcmVudH1gO1xuXHRcdGNhc2UgJ3RkJzpcblx0XHRjYXNlICd0aCc6XG5cdFx0XHRyZXR1cm4gYCR7Y2hpbGR9IG11c3QgYmUgdGhlIGNoaWxkIG9mIGEgXFxgPHRyPlxcYCwgbm90IGEgJHtwYXJlbnR9YDtcblx0XHRjYXNlICd0cic6XG5cdFx0XHRyZXR1cm4gYFxcYDx0cj5cXGAgbXVzdCBiZSB0aGUgY2hpbGQgb2YgYSBcXGA8dGhlYWQ+XFxgLCBcXGA8dGJvZHk+XFxgLCBvciBcXGA8dGZvb3Q+XFxgLCBub3QgYSAke3BhcmVudH1gO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG4iLCAiZXhwb3J0IGNsYXNzIEhlYWRQYXlsb2FkIHtcblx0LyoqIEB0eXBlIHtTZXQ8eyBoYXNoOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9Pn0gKi9cblx0Y3NzID0gbmV3IFNldCgpO1xuXHRvdXQgPSAnJztcblx0dWlkID0gKCkgPT4gJyc7XG5cdHRpdGxlID0gJyc7XG5cblx0Y29uc3RydWN0b3IoY3NzID0gbmV3IFNldCgpLCBvdXQgPSAnJywgdGl0bGUgPSAnJywgdWlkID0gKCkgPT4gJycpIHtcblx0XHR0aGlzLmNzcyA9IGNzcztcblx0XHR0aGlzLm91dCA9IG91dDtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy51aWQgPSB1aWQ7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFBheWxvYWQge1xuXHQvKiogQHR5cGUge1NldDx7IGhhc2g6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+fSAqL1xuXHRjc3MgPSBuZXcgU2V0KCk7XG5cdG91dCA9ICcnO1xuXHR1aWQgPSAoKSA9PiAnJztcblxuXHRoZWFkID0gbmV3IEhlYWRQYXlsb2FkKCk7XG5cblx0Y29uc3RydWN0b3IoaWRfcHJlZml4ID0gJycpIHtcblx0XHR0aGlzLnVpZCA9IHByb3BzX2lkX2dlbmVyYXRvcihpZF9wcmVmaXgpO1xuXHRcdHRoaXMuaGVhZC51aWQgPSB0aGlzLnVpZDtcblx0fVxufVxuXG4vKipcbiAqIFVzZWQgaW4gbGVnYWN5IG1vZGUgdG8gaGFuZGxlIGJpbmRpbmdzXG4gKiBAcGFyYW0ge1BheWxvYWR9IHRvX2NvcHlcbiAqIEByZXR1cm5zIHtQYXlsb2FkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weV9wYXlsb2FkKHsgb3V0LCBjc3MsIGhlYWQsIHVpZCB9KSB7XG5cdGNvbnN0IHBheWxvYWQgPSBuZXcgUGF5bG9hZCgpO1xuXG5cdHBheWxvYWQub3V0ID0gb3V0O1xuXHRwYXlsb2FkLmNzcyA9IG5ldyBTZXQoY3NzKTtcblx0cGF5bG9hZC51aWQgPSB1aWQ7XG5cblx0cGF5bG9hZC5oZWFkID0gbmV3IEhlYWRQYXlsb2FkKCk7XG5cdHBheWxvYWQuaGVhZC5vdXQgPSBoZWFkLm91dDtcblx0cGF5bG9hZC5oZWFkLmNzcyA9IG5ldyBTZXQoaGVhZC5jc3MpO1xuXHRwYXlsb2FkLmhlYWQudGl0bGUgPSBoZWFkLnRpdGxlO1xuXHRwYXlsb2FkLmhlYWQudWlkID0gaGVhZC51aWQ7XG5cblx0cmV0dXJuIHBheWxvYWQ7XG59XG5cbi8qKlxuICogQXNzaWducyBzZWNvbmQgcGF5bG9hZCB0byBmaXJzdFxuICogQHBhcmFtIHtQYXlsb2FkfSBwMVxuICogQHBhcmFtIHtQYXlsb2FkfSBwMlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25fcGF5bG9hZChwMSwgcDIpIHtcblx0cDEub3V0ID0gcDIub3V0O1xuXHRwMS5jc3MgPSBwMi5jc3M7XG5cdHAxLmhlYWQgPSBwMi5oZWFkO1xuXHRwMS51aWQgPSBwMi51aWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBJRCBnZW5lcmF0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAqIEByZXR1cm5zIHsoKSA9PiBzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHByb3BzX2lkX2dlbmVyYXRvcihwcmVmaXgpIHtcblx0bGV0IHVpZCA9IDE7XG5cdHJldHVybiAoKSA9PiBgJHtwcmVmaXh9cyR7dWlkKyt9YDtcbn1cbiIsICIvKiogQGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJyNzZXJ2ZXInICovXG5pbXBvcnQgeyBGSUxFTkFNRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQge1xuXHRpc190YWdfdmFsaWRfd2l0aF9hbmNlc3Rvcixcblx0aXNfdGFnX3ZhbGlkX3dpdGhfcGFyZW50XG59IGZyb20gJy4uLy4uL2h0bWwtdHJlZS12YWxpZGF0aW9uLmpzJztcbmltcG9ydCB7IGN1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnLi9jb250ZXh0LmpzJztcbmltcG9ydCB7IGludmFsaWRfc25pcHBldF9hcmd1bWVudHMgfSBmcm9tICcuLi9zaGFyZWQvZXJyb3JzLmpzJztcbmltcG9ydCB7IEhlYWRQYXlsb2FkLCBQYXlsb2FkIH0gZnJvbSAnLi9wYXlsb2FkLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogXHR0YWc6IHN0cmluZztcbiAqIFx0cGFyZW50OiBudWxsIHwgRWxlbWVudDtcbiAqICBmaWxlbmFtZTogbnVsbCB8IHN0cmluZztcbiAqICBsaW5lOiBudW1iZXI7XG4gKiAgY29sdW1uOiBudW1iZXI7XG4gKiB9fSBFbGVtZW50XG4gKi9cblxuLyoqXG4gKiBAdHlwZSB7RWxlbWVudCB8IG51bGx9XG4gKi9cbmxldCBwYXJlbnQgPSBudWxsO1xuXG4vKiogQHR5cGUge1NldDxzdHJpbmc+fSAqL1xubGV0IHNlZW47XG5cbi8qKlxuICogQHBhcmFtIHtQYXlsb2FkfSBwYXlsb2FkXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICovXG5mdW5jdGlvbiBwcmludF9lcnJvcihwYXlsb2FkLCBtZXNzYWdlKSB7XG5cdG1lc3NhZ2UgPVxuXHRcdGBub2RlX2ludmFsaWRfcGxhY2VtZW50X3NzcjogJHttZXNzYWdlfVxcblxcbmAgK1xuXHRcdCdUaGlzIGNhbiBjYXVzZSBjb250ZW50IHRvIHNoaWZ0IGFyb3VuZCBhcyB0aGUgYnJvd3NlciByZXBhaXJzIHRoZSBIVE1MLCBhbmQgd2lsbCBsaWtlbHkgcmVzdWx0IGluIGEgYGh5ZHJhdGlvbl9taXNtYXRjaGAgd2FybmluZy4nO1xuXG5cdGlmICgoc2VlbiA/Pz0gbmV3IFNldCgpKS5oYXMobWVzc2FnZSkpIHJldHVybjtcblx0c2Vlbi5hZGQobWVzc2FnZSk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0Y29uc29sZS5lcnJvcihtZXNzYWdlKTtcblx0cGF5bG9hZC5oZWFkLm91dCArPSBgPHNjcmlwdD5jb25zb2xlLmVycm9yKCR7SlNPTi5zdHJpbmdpZnkobWVzc2FnZSl9KTwvc2NyaXB0PmA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldF9lbGVtZW50cygpIHtcblx0bGV0IG9sZF9wYXJlbnQgPSBwYXJlbnQ7XG5cdHBhcmVudCA9IG51bGw7XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0cGFyZW50ID0gb2xkX3BhcmVudDtcblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1BheWxvYWR9IHBheWxvYWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lXG4gKiBAcGFyYW0ge251bWJlcn0gY29sdW1uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXNoX2VsZW1lbnQocGF5bG9hZCwgdGFnLCBsaW5lLCBjb2x1bW4pIHtcblx0dmFyIGZpbGVuYW1lID0gLyoqIEB0eXBlIHtDb21wb25lbnR9ICovIChjdXJyZW50X2NvbXBvbmVudCkuZnVuY3Rpb25bRklMRU5BTUVdO1xuXHR2YXIgY2hpbGQgPSB7IHRhZywgcGFyZW50LCBmaWxlbmFtZSwgbGluZSwgY29sdW1uIH07XG5cblx0aWYgKHBhcmVudCAhPT0gbnVsbCkge1xuXHRcdHZhciBhbmNlc3RvciA9IHBhcmVudC5wYXJlbnQ7XG5cdFx0dmFyIGFuY2VzdG9ycyA9IFtwYXJlbnQudGFnXTtcblxuXHRcdGNvbnN0IGNoaWxkX2xvYyA9IGZpbGVuYW1lID8gYCR7ZmlsZW5hbWV9OiR7bGluZX06JHtjb2x1bW59YCA6IHVuZGVmaW5lZDtcblx0XHRjb25zdCBwYXJlbnRfbG9jID0gcGFyZW50LmZpbGVuYW1lXG5cdFx0XHQ/IGAke3BhcmVudC5maWxlbmFtZX06JHtwYXJlbnQubGluZX06JHtwYXJlbnQuY29sdW1ufWBcblx0XHRcdDogdW5kZWZpbmVkO1xuXG5cdFx0Y29uc3QgbWVzc2FnZSA9IGlzX3RhZ192YWxpZF93aXRoX3BhcmVudCh0YWcsIHBhcmVudC50YWcsIGNoaWxkX2xvYywgcGFyZW50X2xvYyk7XG5cdFx0aWYgKG1lc3NhZ2UpIHByaW50X2Vycm9yKHBheWxvYWQsIG1lc3NhZ2UpO1xuXG5cdFx0d2hpbGUgKGFuY2VzdG9yICE9IG51bGwpIHtcblx0XHRcdGFuY2VzdG9ycy5wdXNoKGFuY2VzdG9yLnRhZyk7XG5cdFx0XHRjb25zdCBhbmNlc3Rvcl9sb2MgPSBhbmNlc3Rvci5maWxlbmFtZVxuXHRcdFx0XHQ/IGAke2FuY2VzdG9yLmZpbGVuYW1lfToke2FuY2VzdG9yLmxpbmV9OiR7YW5jZXN0b3IuY29sdW1ufWBcblx0XHRcdFx0OiB1bmRlZmluZWQ7XG5cblx0XHRcdGNvbnN0IG1lc3NhZ2UgPSBpc190YWdfdmFsaWRfd2l0aF9hbmNlc3Rvcih0YWcsIGFuY2VzdG9ycywgY2hpbGRfbG9jLCBhbmNlc3Rvcl9sb2MpO1xuXHRcdFx0aWYgKG1lc3NhZ2UpIHByaW50X2Vycm9yKHBheWxvYWQsIG1lc3NhZ2UpO1xuXG5cdFx0XHRhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudDtcblx0XHR9XG5cdH1cblxuXHRwYXJlbnQgPSBjaGlsZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcF9lbGVtZW50KCkge1xuXHRwYXJlbnQgPSAvKiogQHR5cGUge0VsZW1lbnR9ICovIChwYXJlbnQpLnBhcmVudDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1BheWxvYWR9IHBheWxvYWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlX3NuaXBwZXRfYXJncyhwYXlsb2FkKSB7XG5cdGlmIChcblx0XHR0eXBlb2YgcGF5bG9hZCAhPT0gJ29iamVjdCcgfHxcblx0XHQvLyBmb3Igc29tZSByZWFzb24gdHlwZXNjcmlwdCBjb25zaWRlciB0aGUgdHlwZSBvZiBwYXlsb2FkIGFzIG5ldmVyIGFmdGVyIHRoZSBmaXJzdCBpbnN0YW5jZW9mXG5cdFx0IShwYXlsb2FkIGluc3RhbmNlb2YgUGF5bG9hZCB8fCAvKiogQHR5cGUge2FueX0gKi8gKHBheWxvYWQpIGluc3RhbmNlb2YgSGVhZFBheWxvYWQpXG5cdCkge1xuXHRcdGludmFsaWRfc25pcHBldF9hcmd1bWVudHMoKTtcblx0fVxufVxuIiwgIi8qKiBAaW1wb3J0IHsgQ29tcG9uZW50VHlwZSwgU3ZlbHRlQ29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlJyAqL1xuLyoqIEBpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlck91dHB1dCB9IGZyb20gJyNzZXJ2ZXInICovXG4vKiogQGltcG9ydCB7IFN0b3JlIH0gZnJvbSAnI3NoYXJlZCcgKi9cbmV4cG9ydCB7IEZJTEVOQU1FLCBITVIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgYXR0ciwgY2xzeCwgdG9fY2xhc3MsIHRvX3N0eWxlIH0gZnJvbSAnLi4vc2hhcmVkL2F0dHJpYnV0ZXMuanMnO1xuaW1wb3J0IHsgaXNfcHJvbWlzZSwgbm9vcCB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQgeyBzdWJzY3JpYmVfdG9fc3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZS91dGlscy5qcyc7XG5pbXBvcnQge1xuXHRVTklOSVRJQUxJWkVELFxuXHRFTEVNRU5UX1BSRVNFUlZFX0FUVFJJQlVURV9DQVNFLFxuXHRFTEVNRU5UX0lTX05BTUVTUEFDRURcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGVzY2FwZV9odG1sIH0gZnJvbSAnLi4vLi4vZXNjYXBpbmcuanMnO1xuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5pbXBvcnQgeyBjdXJyZW50X2NvbXBvbmVudCwgcG9wLCBwdXNoIH0gZnJvbSAnLi9jb250ZXh0LmpzJztcbmltcG9ydCB7IEVNUFRZX0NPTU1FTlQsIEJMT0NLX0NMT1NFLCBCTE9DS19PUEVOLCBCTE9DS19PUEVOX0VMU0UgfSBmcm9tICcuL2h5ZHJhdGlvbi5qcyc7XG5pbXBvcnQgeyB2YWxpZGF0ZV9zdG9yZSB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0ZS5qcyc7XG5pbXBvcnQgeyBpc19ib29sZWFuX2F0dHJpYnV0ZSwgaXNfcmF3X3RleHRfZWxlbWVudCwgaXNfdm9pZCB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHJlc2V0X2VsZW1lbnRzIH0gZnJvbSAnLi9kZXYuanMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4vcGF5bG9hZC5qcyc7XG5cbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI25vbmNoYXJhY3RlclxuY29uc3QgSU5WQUxJRF9BVFRSX05BTUVfQ0hBUl9SRUdFWCA9XG5cdC9bXFxzJ1wiPi89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG5cbi8qKlxuICogQHBhcmFtIHtQYXlsb2FkfSBwYXlsb2FkXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGF0dHJpYnV0ZXNfZm5cbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2hpbGRyZW5fZm5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudChwYXlsb2FkLCB0YWcsIGF0dHJpYnV0ZXNfZm4gPSBub29wLCBjaGlsZHJlbl9mbiA9IG5vb3ApIHtcblx0cGF5bG9hZC5vdXQgKz0gJzwhLS0tLT4nO1xuXG5cdGlmICh0YWcpIHtcblx0XHRwYXlsb2FkLm91dCArPSBgPCR7dGFnfWA7XG5cdFx0YXR0cmlidXRlc19mbigpO1xuXHRcdHBheWxvYWQub3V0ICs9IGA+YDtcblxuXHRcdGlmICghaXNfdm9pZCh0YWcpKSB7XG5cdFx0XHRjaGlsZHJlbl9mbigpO1xuXHRcdFx0aWYgKCFpc19yYXdfdGV4dF9lbGVtZW50KHRhZykpIHtcblx0XHRcdFx0cGF5bG9hZC5vdXQgKz0gRU1QVFlfQ09NTUVOVDtcblx0XHRcdH1cblx0XHRcdHBheWxvYWQub3V0ICs9IGA8LyR7dGFnfT5gO1xuXHRcdH1cblx0fVxuXG5cdHBheWxvYWQub3V0ICs9ICc8IS0tLS0+Jztcbn1cblxuLyoqXG4gKiBBcnJheSBvZiBgb25EZXN0cm95YCBjYWxsYmFja3MgdGhhdCBzaG91bGQgYmUgY2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlIHNlcnZlciByZW5kZXIgZnVuY3Rpb25cbiAqIEB0eXBlIHtGdW5jdGlvbltdfVxuICovXG5leHBvcnQgbGV0IG9uX2Rlc3Ryb3kgPSBbXTtcblxuLyoqXG4gKiBPbmx5IGF2YWlsYWJsZSBvbiB0aGUgc2VydmVyIGFuZCB3aGVuIGNvbXBpbGluZyB3aXRoIHRoZSBgc2VydmVyYCBvcHRpb24uXG4gKiBUYWtlcyBhIGNvbXBvbmVudCBhbmQgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBgYm9keWAgYW5kIGBoZWFkYCBwcm9wZXJ0aWVzIG9uIGl0LCB3aGljaCB5b3UgY2FuIHVzZSB0byBwb3B1bGF0ZSB0aGUgSFRNTCB3aGVuIHNlcnZlci1yZW5kZXJpbmcgeW91ciBhcHAuXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IFByb3BzXG4gKiBAcGFyYW0ge2ltcG9ydCgnc3ZlbHRlJykuQ29tcG9uZW50PFByb3BzPiB8IENvbXBvbmVudFR5cGU8U3ZlbHRlQ29tcG9uZW50PFByb3BzPj59IGNvbXBvbmVudFxuICogQHBhcmFtIHt7IHByb3BzPzogT21pdDxQcm9wcywgJyQkc2xvdHMnIHwgJyQkZXZlbnRzJz47IGNvbnRleHQ/OiBNYXA8YW55LCBhbnk+OyBpZFByZWZpeD86IHN0cmluZyB9fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtSZW5kZXJPdXRwdXR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50LCBvcHRpb25zID0ge30pIHtcblx0Y29uc3QgcGF5bG9hZCA9IG5ldyBQYXlsb2FkKG9wdGlvbnMuaWRQcmVmaXggPyBvcHRpb25zLmlkUHJlZml4ICsgJy0nIDogJycpO1xuXG5cdGNvbnN0IHByZXZfb25fZGVzdHJveSA9IG9uX2Rlc3Ryb3k7XG5cdG9uX2Rlc3Ryb3kgPSBbXTtcblx0cGF5bG9hZC5vdXQgKz0gQkxPQ0tfT1BFTjtcblxuXHRsZXQgcmVzZXRfcmVzZXRfZWxlbWVudDtcblxuXHRpZiAoREVWKSB7XG5cdFx0Ly8gcHJldmVudCBwYXJlbnQvY2hpbGQgZWxlbWVudCBzdGF0ZSBiZWluZyBjb3JydXB0ZWQgYnkgYSBiYWQgcmVuZGVyXG5cdFx0cmVzZXRfcmVzZXRfZWxlbWVudCA9IHJlc2V0X2VsZW1lbnRzKCk7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5jb250ZXh0KSB7XG5cdFx0cHVzaCgpO1xuXHRcdC8qKiBAdHlwZSB7Q29tcG9uZW50fSAqLyAoY3VycmVudF9jb21wb25lbnQpLmMgPSBvcHRpb25zLmNvbnRleHQ7XG5cdH1cblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdGNvbXBvbmVudChwYXlsb2FkLCBvcHRpb25zLnByb3BzID8/IHt9LCB7fSwge30pO1xuXG5cdGlmIChvcHRpb25zLmNvbnRleHQpIHtcblx0XHRwb3AoKTtcblx0fVxuXG5cdGlmIChyZXNldF9yZXNldF9lbGVtZW50KSB7XG5cdFx0cmVzZXRfcmVzZXRfZWxlbWVudCgpO1xuXHR9XG5cblx0cGF5bG9hZC5vdXQgKz0gQkxPQ0tfQ0xPU0U7XG5cdGZvciAoY29uc3QgY2xlYW51cCBvZiBvbl9kZXN0cm95KSBjbGVhbnVwKCk7XG5cdG9uX2Rlc3Ryb3kgPSBwcmV2X29uX2Rlc3Ryb3k7XG5cblx0bGV0IGhlYWQgPSBwYXlsb2FkLmhlYWQub3V0ICsgcGF5bG9hZC5oZWFkLnRpdGxlO1xuXG5cdGZvciAoY29uc3QgeyBoYXNoLCBjb2RlIH0gb2YgcGF5bG9hZC5jc3MpIHtcblx0XHRoZWFkICs9IGA8c3R5bGUgaWQ9XCIke2hhc2h9XCI+JHtjb2RlfTwvc3R5bGU+YDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aGVhZCxcblx0XHRodG1sOiBwYXlsb2FkLm91dCxcblx0XHRib2R5OiBwYXlsb2FkLm91dFxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UGF5bG9hZH0gcGF5bG9hZFxuICogQHBhcmFtIHsoaGVhZF9wYXlsb2FkOiBQYXlsb2FkWydoZWFkJ10pID0+IHZvaWR9IGZuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlYWQocGF5bG9hZCwgZm4pIHtcblx0Y29uc3QgaGVhZF9wYXlsb2FkID0gcGF5bG9hZC5oZWFkO1xuXHRoZWFkX3BheWxvYWQub3V0ICs9IEJMT0NLX09QRU47XG5cdGZuKGhlYWRfcGF5bG9hZCk7XG5cdGhlYWRfcGF5bG9hZC5vdXQgKz0gQkxPQ0tfQ0xPU0U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtQYXlsb2FkfSBwYXlsb2FkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzX2h0bWxcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gcHJvcHNcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY29tcG9uZW50XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGR5bmFtaWNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3NzX3Byb3BzKHBheWxvYWQsIGlzX2h0bWwsIHByb3BzLCBjb21wb25lbnQsIGR5bmFtaWMgPSBmYWxzZSkge1xuXHRjb25zdCBzdHlsZXMgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHByb3BzKTtcblxuXHRpZiAoaXNfaHRtbCkge1xuXHRcdHBheWxvYWQub3V0ICs9IGA8c3ZlbHRlLWNzcy13cmFwcGVyIHN0eWxlPVwiZGlzcGxheTogY29udGVudHM7ICR7c3R5bGVzfVwiPmA7XG5cdH0gZWxzZSB7XG5cdFx0cGF5bG9hZC5vdXQgKz0gYDxnIHN0eWxlPVwiJHtzdHlsZXN9XCI+YDtcblx0fVxuXG5cdGlmIChkeW5hbWljKSB7XG5cdFx0cGF5bG9hZC5vdXQgKz0gJzwhLS0tLT4nO1xuXHR9XG5cblx0Y29tcG9uZW50KCk7XG5cblx0aWYgKGlzX2h0bWwpIHtcblx0XHRwYXlsb2FkLm91dCArPSBgPCEtLS0tPjwvc3ZlbHRlLWNzcy13cmFwcGVyPmA7XG5cdH0gZWxzZSB7XG5cdFx0cGF5bG9hZC5vdXQgKz0gYDwhLS0tLT48L2c+YDtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59IGF0dHJzXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bGx9IGNzc19oYXNoXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGJvb2xlYW4+fSBbY2xhc3Nlc11cbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gW3N0eWxlc11cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZmxhZ3NdXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3ByZWFkX2F0dHJpYnV0ZXMoYXR0cnMsIGNzc19oYXNoLCBjbGFzc2VzLCBzdHlsZXMsIGZsYWdzID0gMCkge1xuXHRpZiAoc3R5bGVzKSB7XG5cdFx0YXR0cnMuc3R5bGUgPSB0b19zdHlsZShhdHRycy5zdHlsZSwgc3R5bGVzKTtcblx0fVxuXG5cdGlmIChhdHRycy5jbGFzcykge1xuXHRcdGF0dHJzLmNsYXNzID0gY2xzeChhdHRycy5jbGFzcyk7XG5cdH1cblxuXHRpZiAoY3NzX2hhc2ggfHwgY2xhc3Nlcykge1xuXHRcdGF0dHJzLmNsYXNzID0gdG9fY2xhc3MoYXR0cnMuY2xhc3MsIGNzc19oYXNoLCBjbGFzc2VzKTtcblx0fVxuXG5cdGxldCBhdHRyX3N0ciA9ICcnO1xuXHRsZXQgbmFtZTtcblxuXHRjb25zdCBpc19odG1sID0gKGZsYWdzICYgRUxFTUVOVF9JU19OQU1FU1BBQ0VEKSA9PT0gMDtcblx0Y29uc3QgbG93ZXJjYXNlID0gKGZsYWdzICYgRUxFTUVOVF9QUkVTRVJWRV9BVFRSSUJVVEVfQ0FTRSkgPT09IDA7XG5cblx0Zm9yIChuYW1lIGluIGF0dHJzKSB7XG5cdFx0Ly8gb21pdCBmdW5jdGlvbnMsIGludGVybmFsIHN2ZWx0ZSBwcm9wZXJ0aWVzIGFuZCBpbnZhbGlkIGF0dHJpYnV0ZSBuYW1lc1xuXHRcdGlmICh0eXBlb2YgYXR0cnNbbmFtZV0gPT09ICdmdW5jdGlvbicpIGNvbnRpbnVlO1xuXHRcdGlmIChuYW1lWzBdID09PSAnJCcgJiYgbmFtZVsxXSA9PT0gJyQnKSBjb250aW51ZTsgLy8gZmFzdGVyIHRoYW4gbmFtZS5zdGFydHNXaXRoKCckJCcpXG5cdFx0aWYgKElOVkFMSURfQVRUUl9OQU1FX0NIQVJfUkVHRVgudGVzdChuYW1lKSkgY29udGludWU7XG5cblx0XHR2YXIgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblxuXHRcdGlmIChsb3dlcmNhc2UpIHtcblx0XHRcdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXG5cdFx0YXR0cl9zdHIgKz0gYXR0cihuYW1lLCB2YWx1ZSwgaXNfaHRtbCAmJiBpc19ib29sZWFuX2F0dHJpYnV0ZShuYW1lKSk7XG5cdH1cblxuXHRyZXR1cm4gYXR0cl9zdHI7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdfSBwcm9wc1xuICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIHVua25vd24+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3ByZWFkX3Byb3BzKHByb3BzKSB7XG5cdC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59ICovXG5cdGNvbnN0IG1lcmdlZF9wcm9wcyA9IHt9O1xuXHRsZXQga2V5O1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBvYmogPSBwcm9wc1tpXTtcblx0XHRmb3IgKGtleSBpbiBvYmopIHtcblx0XHRcdGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcblx0XHRcdGlmIChkZXNjKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXJnZWRfcHJvcHMsIGtleSwgZGVzYyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZXJnZWRfcHJvcHNba2V5XSA9IG9ialtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbWVyZ2VkX3Byb3BzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bn0gdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkodmFsdWUpIHtcblx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlICsgJyc7XG59XG5cbi8qKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IHN0eWxlX29iamVjdCAqL1xuZnVuY3Rpb24gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZV9vYmplY3QpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlX29iamVjdClcblx0XHQuZmlsdGVyKC8qKiBAcGFyYW0ge2FueX0ga2V5ICovIChrZXkpID0+IHN0eWxlX29iamVjdFtrZXldICE9IG51bGwgJiYgc3R5bGVfb2JqZWN0W2tleV0gIT09ICcnKVxuXHRcdC5tYXAoLyoqIEBwYXJhbSB7YW55fSBrZXkgKi8gKGtleSkgPT4gYCR7a2V5fTogJHtlc2NhcGVfaHRtbChzdHlsZV9vYmplY3Rba2V5XSwgdHJ1ZSl9O2ApXG5cdFx0LmpvaW4oJyAnKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nIHwgdW5kZWZpbmVkfSBbaGFzaF1cbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYm9vbGVhbj59IFtkaXJlY3RpdmVzXVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXR0cl9jbGFzcyh2YWx1ZSwgaGFzaCwgZGlyZWN0aXZlcykge1xuXHR2YXIgcmVzdWx0ID0gdG9fY2xhc3ModmFsdWUsIGhhc2gsIGRpcmVjdGl2ZXMpO1xuXHRyZXR1cm4gcmVzdWx0ID8gYCBjbGFzcz1cIiR7ZXNjYXBlX2h0bWwocmVzdWx0LCB0cnVlKX1cImAgOiAnJztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZyxhbnk+fFtSZWNvcmQ8c3RyaW5nLGFueT4sUmVjb3JkPHN0cmluZyxhbnk+XX0gW2RpcmVjdGl2ZXNdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRyX3N0eWxlKHZhbHVlLCBkaXJlY3RpdmVzKSB7XG5cdHZhciByZXN1bHQgPSB0b19zdHlsZSh2YWx1ZSwgZGlyZWN0aXZlcyk7XG5cdHJldHVybiByZXN1bHQgPyBgIHN0eWxlPVwiJHtlc2NhcGVfaHRtbChyZXN1bHQsIHRydWUpfVwiYCA6ICcnO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIFthbnksIGFueSwgYW55XT59IHN0b3JlX3ZhbHVlc1xuICogQHBhcmFtIHtzdHJpbmd9IHN0b3JlX25hbWVcbiAqIEBwYXJhbSB7U3RvcmU8Vj4gfCBudWxsIHwgdW5kZWZpbmVkfSBzdG9yZVxuICogQHJldHVybnMge1Z9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV9nZXQoc3RvcmVfdmFsdWVzLCBzdG9yZV9uYW1lLCBzdG9yZSkge1xuXHRpZiAoREVWKSB7XG5cdFx0dmFsaWRhdGVfc3RvcmUoc3RvcmUsIHN0b3JlX25hbWUuc2xpY2UoMSkpO1xuXHR9XG5cblx0Ly8gaXQgY291bGQgYmUgdGhhdCBzb21lb25lIGVhZ2VybHkgdXBkYXRlcyB0aGUgc3RvcmUgaW4gdGhlIGluc3RhbmNlIHNjcmlwdCwgc29cblx0Ly8gd2Ugc2hvdWxkIG9ubHkgcmV1c2UgdGhlIHN0b3JlIHZhbHVlIGluIHRoZSB0ZW1wbGF0ZVxuXHRpZiAoc3RvcmVfbmFtZSBpbiBzdG9yZV92YWx1ZXMgJiYgc3RvcmVfdmFsdWVzW3N0b3JlX25hbWVdWzBdID09PSBzdG9yZSkge1xuXHRcdHJldHVybiBzdG9yZV92YWx1ZXNbc3RvcmVfbmFtZV1bMl07XG5cdH1cblxuXHRzdG9yZV92YWx1ZXNbc3RvcmVfbmFtZV0/LlsxXSgpOyAvLyBpZiBzdG9yZSB3YXMgc3dpdGNoZWQsIHVuc3Vic2NyaWJlIGZyb20gb2xkIHN0b3JlXG5cdHN0b3JlX3ZhbHVlc1tzdG9yZV9uYW1lXSA9IFtzdG9yZSwgbnVsbCwgdW5kZWZpbmVkXTtcblx0Y29uc3QgdW5zdWIgPSBzdWJzY3JpYmVfdG9fc3RvcmUoXG5cdFx0c3RvcmUsXG5cdFx0LyoqIEBwYXJhbSB7YW55fSB2ICovICh2KSA9PiAoc3RvcmVfdmFsdWVzW3N0b3JlX25hbWVdWzJdID0gdilcblx0KTtcblx0c3RvcmVfdmFsdWVzW3N0b3JlX25hbWVdWzFdID0gdW5zdWI7XG5cdHJldHVybiBzdG9yZV92YWx1ZXNbc3RvcmVfbmFtZV1bMl07XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbmV3IHZhbHVlIG9mIGEgc3RvcmUgYW5kIHJldHVybnMgdGhhdCB2YWx1ZS5cbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1N0b3JlPFY+fSBzdG9yZVxuICogQHBhcmFtIHtWfSB2YWx1ZVxuICogQHJldHVybnMge1Z9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV9zZXQoc3RvcmUsIHZhbHVlKSB7XG5cdHN0b3JlLnNldCh2YWx1ZSk7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGEgc3RvcmUgd2l0aCBhIG5ldyB2YWx1ZS5cbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIFthbnksIGFueSwgYW55XT59IHN0b3JlX3ZhbHVlc1xuICogQHBhcmFtIHtzdHJpbmd9IHN0b3JlX25hbWVcbiAqIEBwYXJhbSB7U3RvcmU8Vj59IHN0b3JlXG4gKiBAcGFyYW0ge2FueX0gZXhwcmVzc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVfbXV0YXRlKHN0b3JlX3ZhbHVlcywgc3RvcmVfbmFtZSwgc3RvcmUsIGV4cHJlc3Npb24pIHtcblx0c3RvcmVfc2V0KHN0b3JlLCBzdG9yZV9nZXQoc3RvcmVfdmFsdWVzLCBzdG9yZV9uYW1lLCBzdG9yZSkpO1xuXHRyZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIFthbnksIGFueSwgYW55XT59IHN0b3JlX3ZhbHVlc1xuICogQHBhcmFtIHtzdHJpbmd9IHN0b3JlX25hbWVcbiAqIEBwYXJhbSB7U3RvcmU8bnVtYmVyPn0gc3RvcmVcbiAqIEBwYXJhbSB7MSB8IC0xfSBbZF1cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfc3RvcmUoc3RvcmVfdmFsdWVzLCBzdG9yZV9uYW1lLCBzdG9yZSwgZCA9IDEpIHtcblx0bGV0IHN0b3JlX3ZhbHVlID0gc3RvcmVfZ2V0KHN0b3JlX3ZhbHVlcywgc3RvcmVfbmFtZSwgc3RvcmUpO1xuXHRzdG9yZS5zZXQoc3RvcmVfdmFsdWUgKyBkKTtcblx0cmV0dXJuIHN0b3JlX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgW2FueSwgYW55LCBhbnldPn0gc3RvcmVfdmFsdWVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVfbmFtZVxuICogQHBhcmFtIHtTdG9yZTxudW1iZXI+fSBzdG9yZVxuICogQHBhcmFtIHsxIHwgLTF9IFtkXVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9zdG9yZV9wcmUoc3RvcmVfdmFsdWVzLCBzdG9yZV9uYW1lLCBzdG9yZSwgZCA9IDEpIHtcblx0Y29uc3QgdmFsdWUgPSBzdG9yZV9nZXQoc3RvcmVfdmFsdWVzLCBzdG9yZV9uYW1lLCBzdG9yZSkgKyBkO1xuXHRzdG9yZS5zZXQodmFsdWUpO1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8qKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIFthbnksIGFueSwgYW55XT59IHN0b3JlX3ZhbHVlcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuc3Vic2NyaWJlX3N0b3JlcyhzdG9yZV92YWx1ZXMpIHtcblx0Zm9yIChjb25zdCBzdG9yZV9uYW1lIGluIHN0b3JlX3ZhbHVlcykge1xuXHRcdHN0b3JlX3ZhbHVlc1tzdG9yZV9uYW1lXVsxXSgpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtQYXlsb2FkfSBwYXlsb2FkXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT59ICQkcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSBzbG90X3Byb3BzXG4gKiBAcGFyYW0ge251bGwgfCAoKCkgPT4gdm9pZCl9IGZhbGxiYWNrX2ZuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsb3QocGF5bG9hZCwgJCRwcm9wcywgbmFtZSwgc2xvdF9wcm9wcywgZmFsbGJhY2tfZm4pIHtcblx0dmFyIHNsb3RfZm4gPSAkJHByb3BzLiQkc2xvdHM/LltuYW1lXTtcblx0Ly8gSW50ZXJvcDogQ2FuIHVzZSBzbmlwcGV0cyB0byBmaWxsIHNsb3RzXG5cdGlmIChzbG90X2ZuID09PSB0cnVlKSB7XG5cdFx0c2xvdF9mbiA9ICQkcHJvcHNbbmFtZSA9PT0gJ2RlZmF1bHQnID8gJ2NoaWxkcmVuJyA6IG5hbWVdO1xuXHR9XG5cblx0aWYgKHNsb3RfZm4gIT09IHVuZGVmaW5lZCkge1xuXHRcdHNsb3RfZm4ocGF5bG9hZCwgc2xvdF9wcm9wcyk7XG5cdH0gZWxzZSB7XG5cdFx0ZmFsbGJhY2tfZm4/LigpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJlc3RcbiAqIEByZXR1cm5zIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RfcHJvcHMocHJvcHMsIHJlc3QpIHtcblx0LyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gKi9cblx0Y29uc3QgcmVzdF9wcm9wcyA9IHt9O1xuXHRsZXQga2V5O1xuXHRmb3IgKGtleSBpbiBwcm9wcykge1xuXHRcdGlmICghcmVzdC5pbmNsdWRlcyhrZXkpKSB7XG5cdFx0XHRyZXN0X3Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdF9wcm9wcztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSBwcm9wc1xuICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIHVua25vd24+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVfcHJvcHMocHJvcHMpIHtcblx0Y29uc3QgeyBjaGlsZHJlbiwgJCRzbG90cywgLi4uc2FuaXRpemVkIH0gPSBwcm9wcztcblx0cmV0dXJuIHNhbml0aXplZDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT59IHByb3BzXG4gKiBAcmV0dXJucyB7UmVjb3JkPHN0cmluZywgYm9vbGVhbj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZV9zbG90cyhwcm9wcykge1xuXHQvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIGJvb2xlYW4+fSAqL1xuXHRjb25zdCBzYW5pdGl6ZWQgPSB7fTtcblx0aWYgKHByb3BzLmNoaWxkcmVuKSBzYW5pdGl6ZWQuZGVmYXVsdCA9IHRydWU7XG5cdGZvciAoY29uc3Qga2V5IGluIHByb3BzLiQkc2xvdHMpIHtcblx0XHRzYW5pdGl6ZWRba2V5XSA9IHRydWU7XG5cdH1cblx0cmV0dXJuIHNhbml0aXplZDtcbn1cblxuLyoqXG4gKiBMZWdhY3kgbW9kZTogSWYgdGhlIHByb3AgaGFzIGEgZmFsbGJhY2sgYW5kIGlzIGJvdW5kIGluIHRoZVxuICogcGFyZW50IGNvbXBvbmVudCwgcHJvcGFnYXRlIHRoZSBmYWxsYmFjayB2YWx1ZSB1cHdhcmRzLlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gcHJvcHNfcGFyZW50XG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSBwcm9wc19ub3dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRfcHJvcHMocHJvcHNfcGFyZW50LCBwcm9wc19ub3cpIHtcblx0Zm9yIChjb25zdCBrZXkgaW4gcHJvcHNfbm93KSB7XG5cdFx0Y29uc3QgaW5pdGlhbF92YWx1ZSA9IHByb3BzX3BhcmVudFtrZXldO1xuXHRcdGNvbnN0IHZhbHVlID0gcHJvcHNfbm93W2tleV07XG5cdFx0aWYgKFxuXHRcdFx0aW5pdGlhbF92YWx1ZSA9PT0gdW5kZWZpbmVkICYmXG5cdFx0XHR2YWx1ZSAhPT0gdW5kZWZpbmVkICYmXG5cdFx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3BzX3BhcmVudCwga2V5KT8uc2V0XG5cdFx0KSB7XG5cdFx0XHRwcm9wc19wYXJlbnRba2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1BheWxvYWR9IHBheWxvYWRcbiAqIEBwYXJhbSB7UHJvbWlzZTxWPn0gcHJvbWlzZVxuICogQHBhcmFtIHtudWxsIHwgKCgpID0+IHZvaWQpfSBwZW5kaW5nX2ZuXG4gKiBAcGFyYW0geyh2YWx1ZTogVikgPT4gdm9pZH0gdGhlbl9mblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGF3YWl0X2Jsb2NrKHBheWxvYWQsIHByb21pc2UsIHBlbmRpbmdfZm4sIHRoZW5fZm4pIHtcblx0aWYgKGlzX3Byb21pc2UocHJvbWlzZSkpIHtcblx0XHRwYXlsb2FkLm91dCArPSBCTE9DS19PUEVOO1xuXHRcdHByb21pc2UudGhlbihudWxsLCBub29wKTtcblx0XHRpZiAocGVuZGluZ19mbiAhPT0gbnVsbCkge1xuXHRcdFx0cGVuZGluZ19mbigpO1xuXHRcdH1cblx0fSBlbHNlIGlmICh0aGVuX2ZuICE9PSBudWxsKSB7XG5cdFx0cGF5bG9hZC5vdXQgKz0gQkxPQ0tfT1BFTl9FTFNFO1xuXHRcdHRoZW5fZm4ocHJvbWlzZSk7XG5cdH1cbn1cblxuZXhwb3J0IHsgYXdhaXRfYmxvY2sgYXMgYXdhaXQgfTtcblxuLyoqIEBwYXJhbSB7YW55fSBhcnJheV9saWtlX29yX2l0ZXJhdG9yICovXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlX2FycmF5X2xpa2UoYXJyYXlfbGlrZV9vcl9pdGVyYXRvcikge1xuXHRpZiAoYXJyYXlfbGlrZV9vcl9pdGVyYXRvcikge1xuXHRcdHJldHVybiBhcnJheV9saWtlX29yX2l0ZXJhdG9yLmxlbmd0aCAhPT0gdW5kZWZpbmVkXG5cdFx0XHQ/IGFycmF5X2xpa2Vfb3JfaXRlcmF0b3Jcblx0XHRcdDogQXJyYXkuZnJvbShhcnJheV9saWtlX29yX2l0ZXJhdG9yKTtcblx0fVxuXHRyZXR1cm4gW107XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnlbXX0gYXJnc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2luc3BlY3RdXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5leHBvcnQgZnVuY3Rpb24gaW5zcGVjdChhcmdzLCBpbnNwZWN0ID0gY29uc29sZS5sb2cpIHtcblx0aW5zcGVjdCgnaW5pdCcsIC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0geygpID0+IFZ9IGdldF92YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gb25jZShnZXRfdmFsdWUpIHtcblx0bGV0IHZhbHVlID0gLyoqIEB0eXBlIHtWfSAqLyAoVU5JTklUSUFMSVpFRCk7XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0aWYgKHZhbHVlID09PSBVTklOSVRJQUxJWkVEKSB7XG5cdFx0XHR2YWx1ZSA9IGdldF92YWx1ZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH07XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIHVuaXF1ZSBJRFxuICogQHBhcmFtIHtQYXlsb2FkfSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvcHNfaWQocGF5bG9hZCkge1xuXHRjb25zdCB1aWQgPSBwYXlsb2FkLnVpZCgpO1xuXHRwYXlsb2FkLm91dCArPSAnPCEtLSMnICsgdWlkICsgJy0tPic7XG5cdHJldHVybiB1aWQ7XG59XG5cbmV4cG9ydCB7IGF0dHIsIGNsc3ggfTtcblxuZXhwb3J0IHsgaHRtbCB9IGZyb20gJy4vYmxvY2tzL2h0bWwuanMnO1xuXG5leHBvcnQgeyBwdXNoLCBwb3AgfSBmcm9tICcuL2NvbnRleHQuanMnO1xuXG5leHBvcnQgeyBwdXNoX2VsZW1lbnQsIHBvcF9lbGVtZW50LCB2YWxpZGF0ZV9zbmlwcGV0X2FyZ3MgfSBmcm9tICcuL2Rldi5qcyc7XG5cbmV4cG9ydCB7IGFzc2lnbl9wYXlsb2FkLCBjb3B5X3BheWxvYWQgfSBmcm9tICcuL3BheWxvYWQuanMnO1xuXG5leHBvcnQgeyBzbmFwc2hvdCB9IGZyb20gJy4uL3NoYXJlZC9jbG9uZS5qcyc7XG5cbmV4cG9ydCB7IGZhbGxiYWNrIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcblxuZXhwb3J0IHtcblx0aW52YWxpZF9kZWZhdWx0X3NuaXBwZXQsXG5cdHZhbGlkYXRlX2R5bmFtaWNfZWxlbWVudF90YWcsXG5cdHZhbGlkYXRlX3ZvaWRfZHluYW1pY19lbGVtZW50LFxuXHRwcmV2ZW50X3NuaXBwZXRfc3RyaW5naWZpY2F0aW9uXG59IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0ZS5qcyc7XG5cbmV4cG9ydCB7IGVzY2FwZV9odG1sIGFzIGVzY2FwZSB9O1xuIiwgIi8vIHdyYXBzIHZhbHVlIGluIGNsb3N1cmUgb3IgcmV0dXJucyBjbG9zdXJlXG5leHBvcnQgbGV0IGNsb3N1cmUgPSAodmFsdWUpID0+IHtcbiAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xuICAgIHJldHVybiB2YWx1ZVxuICB9IGVsc2Uge1xuICAgIGxldCBjbG9zdXJlID0gZnVuY3Rpb24gKCl7IHJldHVybiB2YWx1ZSB9XG4gICAgcmV0dXJuIGNsb3N1cmVcbiAgfVxufVxuIiwgImV4cG9ydCBjb25zdCBnbG9iYWxTZWxmID0gdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogbnVsbFxuZXhwb3J0IGNvbnN0IHBoeFdpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiBudWxsXG5leHBvcnQgY29uc3QgZ2xvYmFsID0gZ2xvYmFsU2VsZiB8fCBwaHhXaW5kb3cgfHwgZ2xvYmFsXG5leHBvcnQgY29uc3QgREVGQVVMVF9WU04gPSBcIjIuMC4wXCJcbmV4cG9ydCBjb25zdCBTT0NLRVRfU1RBVEVTID0ge2Nvbm5lY3Rpbmc6IDAsIG9wZW46IDEsIGNsb3Npbmc6IDIsIGNsb3NlZDogM31cbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJTUVPVVQgPSAxMDAwMFxuZXhwb3J0IGNvbnN0IFdTX0NMT1NFX05PUk1BTCA9IDEwMDBcbmV4cG9ydCBjb25zdCBDSEFOTkVMX1NUQVRFUyA9IHtcbiAgY2xvc2VkOiBcImNsb3NlZFwiLFxuICBlcnJvcmVkOiBcImVycm9yZWRcIixcbiAgam9pbmVkOiBcImpvaW5lZFwiLFxuICBqb2luaW5nOiBcImpvaW5pbmdcIixcbiAgbGVhdmluZzogXCJsZWF2aW5nXCIsXG59XG5leHBvcnQgY29uc3QgQ0hBTk5FTF9FVkVOVFMgPSB7XG4gIGNsb3NlOiBcInBoeF9jbG9zZVwiLFxuICBlcnJvcjogXCJwaHhfZXJyb3JcIixcbiAgam9pbjogXCJwaHhfam9pblwiLFxuICByZXBseTogXCJwaHhfcmVwbHlcIixcbiAgbGVhdmU6IFwicGh4X2xlYXZlXCJcbn1cblxuZXhwb3J0IGNvbnN0IFRSQU5TUE9SVFMgPSB7XG4gIGxvbmdwb2xsOiBcImxvbmdwb2xsXCIsXG4gIHdlYnNvY2tldDogXCJ3ZWJzb2NrZXRcIlxufVxuZXhwb3J0IGNvbnN0IFhIUl9TVEFURVMgPSB7XG4gIGNvbXBsZXRlOiA0XG59XG4iLCAiLyoqXG4gKiBJbml0aWFsaXplcyB0aGUgUHVzaFxuICogQHBhcmFtIHtDaGFubmVsfSBjaGFubmVsIC0gVGhlIENoYW5uZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIFRoZSBldmVudCwgZm9yIGV4YW1wbGUgYFwicGh4X2pvaW5cImBcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkIC0gVGhlIHBheWxvYWQsIGZvciBleGFtcGxlIGB7dXNlcl9pZDogMTIzfWBcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0IC0gVGhlIHB1c2ggdGltZW91dCBpbiBtaWxsaXNlY29uZHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVzaCB7XG4gIGNvbnN0cnVjdG9yKGNoYW5uZWwsIGV2ZW50LCBwYXlsb2FkLCB0aW1lb3V0KXtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsXG4gICAgdGhpcy5ldmVudCA9IGV2ZW50XG4gICAgdGhpcy5wYXlsb2FkID0gcGF5bG9hZCB8fCBmdW5jdGlvbiAoKXsgcmV0dXJuIHt9IH1cbiAgICB0aGlzLnJlY2VpdmVkUmVzcCA9IG51bGxcbiAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0XG4gICAgdGhpcy50aW1lb3V0VGltZXIgPSBudWxsXG4gICAgdGhpcy5yZWNIb29rcyA9IFtdXG4gICAgdGhpcy5zZW50ID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZW91dFxuICAgKi9cbiAgcmVzZW5kKHRpbWVvdXQpe1xuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXRcbiAgICB0aGlzLnJlc2V0KClcbiAgICB0aGlzLnNlbmQoKVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBzZW5kKCl7XG4gICAgaWYodGhpcy5oYXNSZWNlaXZlZChcInRpbWVvdXRcIikpeyByZXR1cm4gfVxuICAgIHRoaXMuc3RhcnRUaW1lb3V0KClcbiAgICB0aGlzLnNlbnQgPSB0cnVlXG4gICAgdGhpcy5jaGFubmVsLnNvY2tldC5wdXNoKHtcbiAgICAgIHRvcGljOiB0aGlzLmNoYW5uZWwudG9waWMsXG4gICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgIHBheWxvYWQ6IHRoaXMucGF5bG9hZCgpLFxuICAgICAgcmVmOiB0aGlzLnJlZixcbiAgICAgIGpvaW5fcmVmOiB0aGlzLmNoYW5uZWwuam9pblJlZigpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHN0YXR1c1xuICAgKiBAcGFyYW0geyp9IGNhbGxiYWNrXG4gICAqL1xuICByZWNlaXZlKHN0YXR1cywgY2FsbGJhY2spe1xuICAgIGlmKHRoaXMuaGFzUmVjZWl2ZWQoc3RhdHVzKSl7XG4gICAgICBjYWxsYmFjayh0aGlzLnJlY2VpdmVkUmVzcC5yZXNwb25zZSlcbiAgICB9XG5cbiAgICB0aGlzLnJlY0hvb2tzLnB1c2goe3N0YXR1cywgY2FsbGJhY2t9KVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlc2V0KCl7XG4gICAgdGhpcy5jYW5jZWxSZWZFdmVudCgpXG4gICAgdGhpcy5yZWYgPSBudWxsXG4gICAgdGhpcy5yZWZFdmVudCA9IG51bGxcbiAgICB0aGlzLnJlY2VpdmVkUmVzcCA9IG51bGxcbiAgICB0aGlzLnNlbnQgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBtYXRjaFJlY2VpdmUoe3N0YXR1cywgcmVzcG9uc2UsIF9yZWZ9KXtcbiAgICB0aGlzLnJlY0hvb2tzLmZpbHRlcihoID0+IGguc3RhdHVzID09PSBzdGF0dXMpXG4gICAgICAuZm9yRWFjaChoID0+IGguY2FsbGJhY2socmVzcG9uc2UpKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYW5jZWxSZWZFdmVudCgpe1xuICAgIGlmKCF0aGlzLnJlZkV2ZW50KXsgcmV0dXJuIH1cbiAgICB0aGlzLmNoYW5uZWwub2ZmKHRoaXMucmVmRXZlbnQpXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbmNlbFRpbWVvdXQoKXtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0VGltZXIpXG4gICAgdGhpcy50aW1lb3V0VGltZXIgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXJ0VGltZW91dCgpe1xuICAgIGlmKHRoaXMudGltZW91dFRpbWVyKXsgdGhpcy5jYW5jZWxUaW1lb3V0KCkgfVxuICAgIHRoaXMucmVmID0gdGhpcy5jaGFubmVsLnNvY2tldC5tYWtlUmVmKClcbiAgICB0aGlzLnJlZkV2ZW50ID0gdGhpcy5jaGFubmVsLnJlcGx5RXZlbnROYW1lKHRoaXMucmVmKVxuXG4gICAgdGhpcy5jaGFubmVsLm9uKHRoaXMucmVmRXZlbnQsIHBheWxvYWQgPT4ge1xuICAgICAgdGhpcy5jYW5jZWxSZWZFdmVudCgpXG4gICAgICB0aGlzLmNhbmNlbFRpbWVvdXQoKVxuICAgICAgdGhpcy5yZWNlaXZlZFJlc3AgPSBwYXlsb2FkXG4gICAgICB0aGlzLm1hdGNoUmVjZWl2ZShwYXlsb2FkKVxuICAgIH0pXG5cbiAgICB0aGlzLnRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VyKFwidGltZW91dFwiLCB7fSlcbiAgICB9LCB0aGlzLnRpbWVvdXQpXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhc1JlY2VpdmVkKHN0YXR1cyl7XG4gICAgcmV0dXJuIHRoaXMucmVjZWl2ZWRSZXNwICYmIHRoaXMucmVjZWl2ZWRSZXNwLnN0YXR1cyA9PT0gc3RhdHVzXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRyaWdnZXIoc3RhdHVzLCByZXNwb25zZSl7XG4gICAgdGhpcy5jaGFubmVsLnRyaWdnZXIodGhpcy5yZWZFdmVudCwge3N0YXR1cywgcmVzcG9uc2V9KVxuICB9XG59XG4iLCAiLyoqXG4gKlxuICogQ3JlYXRlcyBhIHRpbWVyIHRoYXQgYWNjZXB0cyBhIGB0aW1lckNhbGNgIGZ1bmN0aW9uIHRvIHBlcmZvcm1cbiAqIGNhbGN1bGF0ZWQgdGltZW91dCByZXRyaWVzLCBzdWNoIGFzIGV4cG9uZW50aWFsIGJhY2tvZmYuXG4gKlxuICogQGV4YW1wbGVcbiAqIGxldCByZWNvbm5lY3RUaW1lciA9IG5ldyBUaW1lcigoKSA9PiB0aGlzLmNvbm5lY3QoKSwgZnVuY3Rpb24odHJpZXMpe1xuICogICByZXR1cm4gWzEwMDAsIDUwMDAsIDEwMDAwXVt0cmllcyAtIDFdIHx8IDEwMDAwXG4gKiB9KVxuICogcmVjb25uZWN0VGltZXIuc2NoZWR1bGVUaW1lb3V0KCkgLy8gZmlyZXMgYWZ0ZXIgMTAwMFxuICogcmVjb25uZWN0VGltZXIuc2NoZWR1bGVUaW1lb3V0KCkgLy8gZmlyZXMgYWZ0ZXIgNTAwMFxuICogcmVjb25uZWN0VGltZXIucmVzZXQoKVxuICogcmVjb25uZWN0VGltZXIuc2NoZWR1bGVUaW1lb3V0KCkgLy8gZmlyZXMgYWZ0ZXIgMTAwMFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0aW1lckNhbGNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvcihjYWxsYmFjaywgdGltZXJDYWxjKXtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB0aGlzLnRpbWVyQ2FsYyA9IHRpbWVyQ2FsY1xuICAgIHRoaXMudGltZXIgPSBudWxsXG4gICAgdGhpcy50cmllcyA9IDBcbiAgfVxuXG4gIHJlc2V0KCl7XG4gICAgdGhpcy50cmllcyA9IDBcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcilcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIGFueSBwcmV2aW91cyBzY2hlZHVsZVRpbWVvdXQgYW5kIHNjaGVkdWxlcyBjYWxsYmFja1xuICAgKi9cbiAgc2NoZWR1bGVUaW1lb3V0KCl7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG5cbiAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRyaWVzID0gdGhpcy50cmllcyArIDFcbiAgICAgIHRoaXMuY2FsbGJhY2soKVxuICAgIH0sIHRoaXMudGltZXJDYWxjKHRoaXMudHJpZXMgKyAxKSlcbiAgfVxufVxuIiwgImltcG9ydCB7Y2xvc3VyZX0gZnJvbSBcIi4vdXRpbHNcIlxuaW1wb3J0IHtcbiAgQ0hBTk5FTF9FVkVOVFMsXG4gIENIQU5ORUxfU1RBVEVTLFxufSBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5pbXBvcnQgUHVzaCBmcm9tIFwiLi9wdXNoXCJcbmltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b3BpY1xuICogQHBhcmFtIHsoT2JqZWN0fGZ1bmN0aW9uKX0gcGFyYW1zXG4gKiBAcGFyYW0ge1NvY2tldH0gc29ja2V0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWwge1xuICBjb25zdHJ1Y3Rvcih0b3BpYywgcGFyYW1zLCBzb2NrZXQpe1xuICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5jbG9zZWRcbiAgICB0aGlzLnRvcGljID0gdG9waWNcbiAgICB0aGlzLnBhcmFtcyA9IGNsb3N1cmUocGFyYW1zIHx8IHt9KVxuICAgIHRoaXMuc29ja2V0ID0gc29ja2V0XG4gICAgdGhpcy5iaW5kaW5ncyA9IFtdXG4gICAgdGhpcy5iaW5kaW5nUmVmID0gMFxuICAgIHRoaXMudGltZW91dCA9IHRoaXMuc29ja2V0LnRpbWVvdXRcbiAgICB0aGlzLmpvaW5lZE9uY2UgPSBmYWxzZVxuICAgIHRoaXMuam9pblB1c2ggPSBuZXcgUHVzaCh0aGlzLCBDSEFOTkVMX0VWRU5UUy5qb2luLCB0aGlzLnBhcmFtcywgdGhpcy50aW1lb3V0KVxuICAgIHRoaXMucHVzaEJ1ZmZlciA9IFtdXG4gICAgdGhpcy5zdGF0ZUNoYW5nZVJlZnMgPSBbXVxuXG4gICAgdGhpcy5yZWpvaW5UaW1lciA9IG5ldyBUaW1lcigoKSA9PiB7XG4gICAgICBpZih0aGlzLnNvY2tldC5pc0Nvbm5lY3RlZCgpKXsgdGhpcy5yZWpvaW4oKSB9XG4gICAgfSwgdGhpcy5zb2NrZXQucmVqb2luQWZ0ZXJNcylcbiAgICB0aGlzLnN0YXRlQ2hhbmdlUmVmcy5wdXNoKHRoaXMuc29ja2V0Lm9uRXJyb3IoKCkgPT4gdGhpcy5yZWpvaW5UaW1lci5yZXNldCgpKSlcbiAgICB0aGlzLnN0YXRlQ2hhbmdlUmVmcy5wdXNoKHRoaXMuc29ja2V0Lm9uT3BlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlam9pblRpbWVyLnJlc2V0KClcbiAgICAgIGlmKHRoaXMuaXNFcnJvcmVkKCkpeyB0aGlzLnJlam9pbigpIH1cbiAgICB9KVxuICAgIClcbiAgICB0aGlzLmpvaW5QdXNoLnJlY2VpdmUoXCJva1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0gQ0hBTk5FTF9TVEFURVMuam9pbmVkXG4gICAgICB0aGlzLnJlam9pblRpbWVyLnJlc2V0KClcbiAgICAgIHRoaXMucHVzaEJ1ZmZlci5mb3JFYWNoKHB1c2hFdmVudCA9PiBwdXNoRXZlbnQuc2VuZCgpKVxuICAgICAgdGhpcy5wdXNoQnVmZmVyID0gW11cbiAgICB9KVxuICAgIHRoaXMuam9pblB1c2gucmVjZWl2ZShcImVycm9yXCIsICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5lcnJvcmVkXG4gICAgICBpZih0aGlzLnNvY2tldC5pc0Nvbm5lY3RlZCgpKXsgdGhpcy5yZWpvaW5UaW1lci5zY2hlZHVsZVRpbWVvdXQoKSB9XG4gICAgfSlcbiAgICB0aGlzLm9uQ2xvc2UoKCkgPT4ge1xuICAgICAgdGhpcy5yZWpvaW5UaW1lci5yZXNldCgpXG4gICAgICBpZih0aGlzLnNvY2tldC5oYXNMb2dnZXIoKSkgdGhpcy5zb2NrZXQubG9nKFwiY2hhbm5lbFwiLCBgY2xvc2UgJHt0aGlzLnRvcGljfSAke3RoaXMuam9pblJlZigpfWApXG4gICAgICB0aGlzLnN0YXRlID0gQ0hBTk5FTF9TVEFURVMuY2xvc2VkXG4gICAgICB0aGlzLnNvY2tldC5yZW1vdmUodGhpcylcbiAgICB9KVxuICAgIHRoaXMub25FcnJvcihyZWFzb24gPT4ge1xuICAgICAgaWYodGhpcy5zb2NrZXQuaGFzTG9nZ2VyKCkpIHRoaXMuc29ja2V0LmxvZyhcImNoYW5uZWxcIiwgYGVycm9yICR7dGhpcy50b3BpY31gLCByZWFzb24pXG4gICAgICBpZih0aGlzLmlzSm9pbmluZygpKXsgdGhpcy5qb2luUHVzaC5yZXNldCgpIH1cbiAgICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5lcnJvcmVkXG4gICAgICBpZih0aGlzLnNvY2tldC5pc0Nvbm5lY3RlZCgpKXsgdGhpcy5yZWpvaW5UaW1lci5zY2hlZHVsZVRpbWVvdXQoKSB9XG4gICAgfSlcbiAgICB0aGlzLmpvaW5QdXNoLnJlY2VpdmUoXCJ0aW1lb3V0XCIsICgpID0+IHtcbiAgICAgIGlmKHRoaXMuc29ja2V0Lmhhc0xvZ2dlcigpKSB0aGlzLnNvY2tldC5sb2coXCJjaGFubmVsXCIsIGB0aW1lb3V0ICR7dGhpcy50b3BpY30gKCR7dGhpcy5qb2luUmVmKCl9KWAsIHRoaXMuam9pblB1c2gudGltZW91dClcbiAgICAgIGxldCBsZWF2ZVB1c2ggPSBuZXcgUHVzaCh0aGlzLCBDSEFOTkVMX0VWRU5UUy5sZWF2ZSwgY2xvc3VyZSh7fSksIHRoaXMudGltZW91dClcbiAgICAgIGxlYXZlUHVzaC5zZW5kKClcbiAgICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5lcnJvcmVkXG4gICAgICB0aGlzLmpvaW5QdXNoLnJlc2V0KClcbiAgICAgIGlmKHRoaXMuc29ja2V0LmlzQ29ubmVjdGVkKCkpeyB0aGlzLnJlam9pblRpbWVyLnNjaGVkdWxlVGltZW91dCgpIH1cbiAgICB9KVxuICAgIHRoaXMub24oQ0hBTk5FTF9FVkVOVFMucmVwbHksIChwYXlsb2FkLCByZWYpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlcih0aGlzLnJlcGx5RXZlbnROYW1lKHJlZiksIHBheWxvYWQpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBKb2luIHRoZSBjaGFubmVsXG4gICAqIEBwYXJhbSB7aW50ZWdlcn0gdGltZW91dFxuICAgKiBAcmV0dXJucyB7UHVzaH1cbiAgICovXG4gIGpvaW4odGltZW91dCA9IHRoaXMudGltZW91dCl7XG4gICAgaWYodGhpcy5qb2luZWRPbmNlKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInRyaWVkIHRvIGpvaW4gbXVsdGlwbGUgdGltZXMuICdqb2luJyBjYW4gb25seSBiZSBjYWxsZWQgYSBzaW5nbGUgdGltZSBwZXIgY2hhbm5lbCBpbnN0YW5jZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0XG4gICAgICB0aGlzLmpvaW5lZE9uY2UgPSB0cnVlXG4gICAgICB0aGlzLnJlam9pbigpXG4gICAgICByZXR1cm4gdGhpcy5qb2luUHVzaFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIb29rIGludG8gY2hhbm5lbCBjbG9zZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKi9cbiAgb25DbG9zZShjYWxsYmFjayl7XG4gICAgdGhpcy5vbihDSEFOTkVMX0VWRU5UUy5jbG9zZSwgY2FsbGJhY2spXG4gIH1cblxuICAvKipcbiAgICogSG9vayBpbnRvIGNoYW5uZWwgZXJyb3JzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBvbkVycm9yKGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vbihDSEFOTkVMX0VWRU5UUy5lcnJvciwgcmVhc29uID0+IGNhbGxiYWNrKHJlYXNvbikpXG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlcyBvbiBjaGFubmVsIGV2ZW50c1xuICAgKlxuICAgKiBTdWJzY3JpcHRpb24gcmV0dXJucyBhIHJlZiBjb3VudGVyLCB3aGljaCBjYW4gYmUgdXNlZCBsYXRlciB0b1xuICAgKiB1bnN1YnNjcmliZSB0aGUgZXhhY3QgZXZlbnQgbGlzdGVuZXJcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY29uc3QgcmVmMSA9IGNoYW5uZWwub24oXCJldmVudFwiLCBkb19zdHVmZilcbiAgICogY29uc3QgcmVmMiA9IGNoYW5uZWwub24oXCJldmVudFwiLCBkb19vdGhlcl9zdHVmZilcbiAgICogY2hhbm5lbC5vZmYoXCJldmVudFwiLCByZWYxKVxuICAgKiAvLyBTaW5jZSB1bnN1YnNjcmlwdGlvbiwgZG9fc3R1ZmYgd29uJ3QgZmlyZSxcbiAgICogLy8gd2hpbGUgZG9fb3RoZXJfc3R1ZmYgd2lsbCBrZWVwIGZpcmluZyBvbiB0aGUgXCJldmVudFwiXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB7aW50ZWdlcn0gcmVmXG4gICAqL1xuICBvbihldmVudCwgY2FsbGJhY2spe1xuICAgIGxldCByZWYgPSB0aGlzLmJpbmRpbmdSZWYrK1xuICAgIHRoaXMuYmluZGluZ3MucHVzaCh7ZXZlbnQsIHJlZiwgY2FsbGJhY2t9KVxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZXMgb2ZmIG9mIGNoYW5uZWwgZXZlbnRzXG4gICAqXG4gICAqIFVzZSB0aGUgcmVmIHJldHVybmVkIGZyb20gYSBjaGFubmVsLm9uKCkgdG8gdW5zdWJzY3JpYmUgb25lXG4gICAqIGhhbmRsZXIsIG9yIHBhc3Mgbm90aGluZyBmb3IgdGhlIHJlZiB0byB1bnN1YnNjcmliZSBhbGxcbiAgICogaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiBldmVudC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogLy8gVW5zdWJzY3JpYmUgdGhlIGRvX3N0dWZmIGhhbmRsZXJcbiAgICogY29uc3QgcmVmMSA9IGNoYW5uZWwub24oXCJldmVudFwiLCBkb19zdHVmZilcbiAgICogY2hhbm5lbC5vZmYoXCJldmVudFwiLCByZWYxKVxuICAgKlxuICAgKiAvLyBVbnN1YnNjcmliZSBhbGwgaGFuZGxlcnMgZnJvbSBldmVudFxuICAgKiBjaGFubmVsLm9mZihcImV2ZW50XCIpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge2ludGVnZXJ9IHJlZlxuICAgKi9cbiAgb2ZmKGV2ZW50LCByZWYpe1xuICAgIHRoaXMuYmluZGluZ3MgPSB0aGlzLmJpbmRpbmdzLmZpbHRlcigoYmluZCkgPT4ge1xuICAgICAgcmV0dXJuICEoYmluZC5ldmVudCA9PT0gZXZlbnQgJiYgKHR5cGVvZiByZWYgPT09IFwidW5kZWZpbmVkXCIgfHwgcmVmID09PSBiaW5kLnJlZikpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FuUHVzaCgpeyByZXR1cm4gdGhpcy5zb2NrZXQuaXNDb25uZWN0ZWQoKSAmJiB0aGlzLmlzSm9pbmVkKCkgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIG1lc3NhZ2UgYGV2ZW50YCB0byBwaG9lbml4IHdpdGggdGhlIHBheWxvYWQgYHBheWxvYWRgLlxuICAgKiBQaG9lbml4IHJlY2VpdmVzIHRoaXMgaW4gdGhlIGBoYW5kbGVfaW4oZXZlbnQsIHBheWxvYWQsIHNvY2tldClgXG4gICAqIGZ1bmN0aW9uLiBpZiBwaG9lbml4IHJlcGxpZXMgb3IgaXQgdGltZXMgb3V0IChkZWZhdWx0IDEwMDAwbXMpLFxuICAgKiB0aGVuIG9wdGlvbmFsbHkgdGhlIHJlcGx5IGNhbiBiZSByZWNlaXZlZC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY2hhbm5lbC5wdXNoKFwiZXZlbnRcIilcbiAgICogICAucmVjZWl2ZShcIm9rXCIsIHBheWxvYWQgPT4gY29uc29sZS5sb2coXCJwaG9lbml4IHJlcGxpZWQ6XCIsIHBheWxvYWQpKVxuICAgKiAgIC5yZWNlaXZlKFwiZXJyb3JcIiwgZXJyID0+IGNvbnNvbGUubG9nKFwicGhvZW5peCBlcnJvcmVkXCIsIGVycikpXG4gICAqICAgLnJlY2VpdmUoXCJ0aW1lb3V0XCIsICgpID0+IGNvbnNvbGUubG9nKFwidGltZWQgb3V0IHB1c2hpbmdcIikpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW3RpbWVvdXRdXG4gICAqIEByZXR1cm5zIHtQdXNofVxuICAgKi9cbiAgcHVzaChldmVudCwgcGF5bG9hZCwgdGltZW91dCA9IHRoaXMudGltZW91dCl7XG4gICAgcGF5bG9hZCA9IHBheWxvYWQgfHwge31cbiAgICBpZighdGhpcy5qb2luZWRPbmNlKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdHJpZWQgdG8gcHVzaCAnJHtldmVudH0nIHRvICcke3RoaXMudG9waWN9JyBiZWZvcmUgam9pbmluZy4gVXNlIGNoYW5uZWwuam9pbigpIGJlZm9yZSBwdXNoaW5nIGV2ZW50c2ApXG4gICAgfVxuICAgIGxldCBwdXNoRXZlbnQgPSBuZXcgUHVzaCh0aGlzLCBldmVudCwgZnVuY3Rpb24gKCl7IHJldHVybiBwYXlsb2FkIH0sIHRpbWVvdXQpXG4gICAgaWYodGhpcy5jYW5QdXNoKCkpe1xuICAgICAgcHVzaEV2ZW50LnNlbmQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBwdXNoRXZlbnQuc3RhcnRUaW1lb3V0KClcbiAgICAgIHRoaXMucHVzaEJ1ZmZlci5wdXNoKHB1c2hFdmVudClcbiAgICB9XG5cbiAgICByZXR1cm4gcHVzaEV2ZW50XG4gIH1cblxuICAvKiogTGVhdmVzIHRoZSBjaGFubmVsXG4gICAqXG4gICAqIFVuc3Vic2NyaWJlcyBmcm9tIHNlcnZlciBldmVudHMsIGFuZFxuICAgKiBpbnN0cnVjdHMgY2hhbm5lbCB0byB0ZXJtaW5hdGUgb24gc2VydmVyXG4gICAqXG4gICAqIFRyaWdnZXJzIG9uQ2xvc2UoKSBob29rc1xuICAgKlxuICAgKiBUbyByZWNlaXZlIGxlYXZlIGFja25vd2xlZGdlbWVudHMsIHVzZSB0aGUgYHJlY2VpdmVgXG4gICAqIGhvb2sgdG8gYmluZCB0byB0aGUgc2VydmVyIGFjaywgaWU6XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNoYW5uZWwubGVhdmUoKS5yZWNlaXZlKFwib2tcIiwgKCkgPT4gYWxlcnQoXCJsZWZ0IVwiKSApXG4gICAqXG4gICAqIEBwYXJhbSB7aW50ZWdlcn0gdGltZW91dFxuICAgKiBAcmV0dXJucyB7UHVzaH1cbiAgICovXG4gIGxlYXZlKHRpbWVvdXQgPSB0aGlzLnRpbWVvdXQpe1xuICAgIHRoaXMucmVqb2luVGltZXIucmVzZXQoKVxuICAgIHRoaXMuam9pblB1c2guY2FuY2VsVGltZW91dCgpXG5cbiAgICB0aGlzLnN0YXRlID0gQ0hBTk5FTF9TVEFURVMubGVhdmluZ1xuICAgIGxldCBvbkNsb3NlID0gKCkgPT4ge1xuICAgICAgaWYodGhpcy5zb2NrZXQuaGFzTG9nZ2VyKCkpIHRoaXMuc29ja2V0LmxvZyhcImNoYW5uZWxcIiwgYGxlYXZlICR7dGhpcy50b3BpY31gKVxuICAgICAgdGhpcy50cmlnZ2VyKENIQU5ORUxfRVZFTlRTLmNsb3NlLCBcImxlYXZlXCIpXG4gICAgfVxuICAgIGxldCBsZWF2ZVB1c2ggPSBuZXcgUHVzaCh0aGlzLCBDSEFOTkVMX0VWRU5UUy5sZWF2ZSwgY2xvc3VyZSh7fSksIHRpbWVvdXQpXG4gICAgbGVhdmVQdXNoLnJlY2VpdmUoXCJva1wiLCAoKSA9PiBvbkNsb3NlKCkpXG4gICAgICAucmVjZWl2ZShcInRpbWVvdXRcIiwgKCkgPT4gb25DbG9zZSgpKVxuICAgIGxlYXZlUHVzaC5zZW5kKClcbiAgICBpZighdGhpcy5jYW5QdXNoKCkpeyBsZWF2ZVB1c2gudHJpZ2dlcihcIm9rXCIsIHt9KSB9XG5cbiAgICByZXR1cm4gbGVhdmVQdXNoXG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGFibGUgbWVzc2FnZSBob29rXG4gICAqXG4gICAqIFJlY2VpdmVzIGFsbCBldmVudHMgZm9yIHNwZWNpYWxpemVkIG1lc3NhZ2UgaGFuZGxpbmdcbiAgICogYmVmb3JlIGRpc3BhdGNoaW5nIHRvIHRoZSBjaGFubmVsIGNhbGxiYWNrcy5cbiAgICpcbiAgICogTXVzdCByZXR1cm4gdGhlIHBheWxvYWQsIG1vZGlmaWVkIG9yIHVubW9kaWZpZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXG4gICAqIEBwYXJhbSB7aW50ZWdlcn0gcmVmXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBvbk1lc3NhZ2UoX2V2ZW50LCBwYXlsb2FkLCBfcmVmKXsgcmV0dXJuIHBheWxvYWQgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNNZW1iZXIodG9waWMsIGV2ZW50LCBwYXlsb2FkLCBqb2luUmVmKXtcbiAgICBpZih0aGlzLnRvcGljICE9PSB0b3BpYyl7IHJldHVybiBmYWxzZSB9XG5cbiAgICBpZihqb2luUmVmICYmIGpvaW5SZWYgIT09IHRoaXMuam9pblJlZigpKXtcbiAgICAgIGlmKHRoaXMuc29ja2V0Lmhhc0xvZ2dlcigpKSB0aGlzLnNvY2tldC5sb2coXCJjaGFubmVsXCIsIFwiZHJvcHBpbmcgb3V0ZGF0ZWQgbWVzc2FnZVwiLCB7dG9waWMsIGV2ZW50LCBwYXlsb2FkLCBqb2luUmVmfSlcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgam9pblJlZigpeyByZXR1cm4gdGhpcy5qb2luUHVzaC5yZWYgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVqb2luKHRpbWVvdXQgPSB0aGlzLnRpbWVvdXQpe1xuICAgIGlmKHRoaXMuaXNMZWF2aW5nKCkpeyByZXR1cm4gfVxuICAgIHRoaXMuc29ja2V0LmxlYXZlT3BlblRvcGljKHRoaXMudG9waWMpXG4gICAgdGhpcy5zdGF0ZSA9IENIQU5ORUxfU1RBVEVTLmpvaW5pbmdcbiAgICB0aGlzLmpvaW5QdXNoLnJlc2VuZCh0aW1lb3V0KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0cmlnZ2VyKGV2ZW50LCBwYXlsb2FkLCByZWYsIGpvaW5SZWYpe1xuICAgIGxldCBoYW5kbGVkUGF5bG9hZCA9IHRoaXMub25NZXNzYWdlKGV2ZW50LCBwYXlsb2FkLCByZWYsIGpvaW5SZWYpXG4gICAgaWYocGF5bG9hZCAmJiAhaGFuZGxlZFBheWxvYWQpeyB0aHJvdyBuZXcgRXJyb3IoXCJjaGFubmVsIG9uTWVzc2FnZSBjYWxsYmFja3MgbXVzdCByZXR1cm4gdGhlIHBheWxvYWQsIG1vZGlmaWVkIG9yIHVubW9kaWZpZWRcIikgfVxuXG4gICAgbGV0IGV2ZW50QmluZGluZ3MgPSB0aGlzLmJpbmRpbmdzLmZpbHRlcihiaW5kID0+IGJpbmQuZXZlbnQgPT09IGV2ZW50KVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGV2ZW50QmluZGluZ3MubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IGJpbmQgPSBldmVudEJpbmRpbmdzW2ldXG4gICAgICBiaW5kLmNhbGxiYWNrKGhhbmRsZWRQYXlsb2FkLCByZWYsIGpvaW5SZWYgfHwgdGhpcy5qb2luUmVmKCkpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZXBseUV2ZW50TmFtZShyZWYpeyByZXR1cm4gYGNoYW5fcmVwbHlfJHtyZWZ9YCB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0Nsb3NlZCgpeyByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gQ0hBTk5FTF9TVEFURVMuY2xvc2VkIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzRXJyb3JlZCgpeyByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gQ0hBTk5FTF9TVEFURVMuZXJyb3JlZCB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0pvaW5lZCgpeyByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gQ0hBTk5FTF9TVEFURVMuam9pbmVkIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzSm9pbmluZygpeyByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gQ0hBTk5FTF9TVEFURVMuam9pbmluZyB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0xlYXZpbmcoKXsgcmV0dXJuIHRoaXMuc3RhdGUgPT09IENIQU5ORUxfU1RBVEVTLmxlYXZpbmcgfVxufVxuIiwgImltcG9ydCB7XG4gIGdsb2JhbCxcbiAgWEhSX1NUQVRFU1xufSBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4IHtcblxuICBzdGF0aWMgcmVxdWVzdChtZXRob2QsIGVuZFBvaW50LCBhY2NlcHQsIGJvZHksIHRpbWVvdXQsIG9udGltZW91dCwgY2FsbGJhY2spe1xuICAgIGlmKGdsb2JhbC5YRG9tYWluUmVxdWVzdCl7XG4gICAgICBsZXQgcmVxID0gbmV3IGdsb2JhbC5YRG9tYWluUmVxdWVzdCgpIC8vIElFOCwgSUU5XG4gICAgICByZXR1cm4gdGhpcy54ZG9tYWluUmVxdWVzdChyZXEsIG1ldGhvZCwgZW5kUG9pbnQsIGJvZHksIHRpbWVvdXQsIG9udGltZW91dCwgY2FsbGJhY2spXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXEgPSBuZXcgZ2xvYmFsLlhNTEh0dHBSZXF1ZXN0KCkgLy8gSUU3KywgRmlyZWZveCwgQ2hyb21lLCBPcGVyYSwgU2FmYXJpXG4gICAgICByZXR1cm4gdGhpcy54aHJSZXF1ZXN0KHJlcSwgbWV0aG9kLCBlbmRQb2ludCwgYWNjZXB0LCBib2R5LCB0aW1lb3V0LCBvbnRpbWVvdXQsIGNhbGxiYWNrKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB4ZG9tYWluUmVxdWVzdChyZXEsIG1ldGhvZCwgZW5kUG9pbnQsIGJvZHksIHRpbWVvdXQsIG9udGltZW91dCwgY2FsbGJhY2spe1xuICAgIHJlcS50aW1lb3V0ID0gdGltZW91dFxuICAgIHJlcS5vcGVuKG1ldGhvZCwgZW5kUG9pbnQpXG4gICAgcmVxLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGxldCByZXNwb25zZSA9IHRoaXMucGFyc2VKU09OKHJlcS5yZXNwb25zZVRleHQpXG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICB9XG4gICAgaWYob250aW1lb3V0KXsgcmVxLm9udGltZW91dCA9IG9udGltZW91dCB9XG5cbiAgICAvLyBXb3JrIGFyb3VuZCBidWcgaW4gSUU5IHRoYXQgcmVxdWlyZXMgYW4gYXR0YWNoZWQgb25wcm9ncmVzcyBoYW5kbGVyXG4gICAgcmVxLm9ucHJvZ3Jlc3MgPSAoKSA9PiB7IH1cblxuICAgIHJlcS5zZW5kKGJvZHkpXG4gICAgcmV0dXJuIHJlcVxuICB9XG5cbiAgc3RhdGljIHhoclJlcXVlc3QocmVxLCBtZXRob2QsIGVuZFBvaW50LCBhY2NlcHQsIGJvZHksIHRpbWVvdXQsIG9udGltZW91dCwgY2FsbGJhY2spe1xuICAgIHJlcS5vcGVuKG1ldGhvZCwgZW5kUG9pbnQsIHRydWUpXG4gICAgcmVxLnRpbWVvdXQgPSB0aW1lb3V0XG4gICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgYWNjZXB0KVxuICAgIHJlcS5vbmVycm9yID0gKCkgPT4gY2FsbGJhY2sgJiYgY2FsbGJhY2sobnVsbClcbiAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYocmVxLnJlYWR5U3RhdGUgPT09IFhIUl9TVEFURVMuY29tcGxldGUgJiYgY2FsbGJhY2spe1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLnBhcnNlSlNPTihyZXEucmVzcG9uc2VUZXh0KVxuICAgICAgICBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYob250aW1lb3V0KXsgcmVxLm9udGltZW91dCA9IG9udGltZW91dCB9XG5cbiAgICByZXEuc2VuZChib2R5KVxuICAgIHJldHVybiByZXFcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZUpTT04ocmVzcCl7XG4gICAgaWYoIXJlc3AgfHwgcmVzcCA9PT0gXCJcIil7IHJldHVybiBudWxsIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXNwKVxuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLmxvZyhcImZhaWxlZCB0byBwYXJzZSBKU09OIHJlc3BvbnNlXCIsIHJlc3ApXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzZXJpYWxpemUob2JqLCBwYXJlbnRLZXkpe1xuICAgIGxldCBxdWVyeVN0ciA9IFtdXG4gICAgZm9yKHZhciBrZXkgaW4gb2JqKXtcbiAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKXsgY29udGludWUgfVxuICAgICAgbGV0IHBhcmFtS2V5ID0gcGFyZW50S2V5ID8gYCR7cGFyZW50S2V5fVske2tleX1dYCA6IGtleVxuICAgICAgbGV0IHBhcmFtVmFsID0gb2JqW2tleV1cbiAgICAgIGlmKHR5cGVvZiBwYXJhbVZhbCA9PT0gXCJvYmplY3RcIil7XG4gICAgICAgIHF1ZXJ5U3RyLnB1c2godGhpcy5zZXJpYWxpemUocGFyYW1WYWwsIHBhcmFtS2V5KSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXJ5U3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtS2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtVmFsKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5U3RyLmpvaW4oXCImXCIpXG4gIH1cblxuICBzdGF0aWMgYXBwZW5kUGFyYW1zKHVybCwgcGFyYW1zKXtcbiAgICBpZihPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA9PT0gMCl7IHJldHVybiB1cmwgfVxuXG4gICAgbGV0IHByZWZpeCA9IHVybC5tYXRjaCgvXFw/LykgPyBcIiZcIiA6IFwiP1wiXG4gICAgcmV0dXJuIGAke3VybH0ke3ByZWZpeH0ke3RoaXMuc2VyaWFsaXplKHBhcmFtcyl9YFxuICB9XG59XG4iLCAiaW1wb3J0IHtcbiAgU09DS0VUX1NUQVRFUyxcbiAgVFJBTlNQT1JUU1xufSBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5pbXBvcnQgQWpheCBmcm9tIFwiLi9hamF4XCJcblxubGV0IGFycmF5QnVmZmVyVG9CYXNlNjQgPSAoYnVmZmVyKSA9PiB7XG4gIGxldCBiaW5hcnkgPSBcIlwiXG4gIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcilcbiAgbGV0IGxlbiA9IGJ5dGVzLmJ5dGVMZW5ndGhcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXsgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pIH1cbiAgcmV0dXJuIGJ0b2EoYmluYXJ5KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb25nUG9sbCB7XG5cbiAgY29uc3RydWN0b3IoZW5kUG9pbnQpe1xuICAgIHRoaXMuZW5kUG9pbnQgPSBudWxsXG4gICAgdGhpcy50b2tlbiA9IG51bGxcbiAgICB0aGlzLnNraXBIZWFydGJlYXQgPSB0cnVlXG4gICAgdGhpcy5yZXFzID0gbmV3IFNldCgpXG4gICAgdGhpcy5hd2FpdGluZ0JhdGNoQWNrID0gZmFsc2VcbiAgICB0aGlzLmN1cnJlbnRCYXRjaCA9IG51bGxcbiAgICB0aGlzLmN1cnJlbnRCYXRjaFRpbWVyID0gbnVsbFxuICAgIHRoaXMuYmF0Y2hCdWZmZXIgPSBbXVxuICAgIHRoaXMub25vcGVuID0gZnVuY3Rpb24gKCl7IH0gLy8gbm9vcFxuICAgIHRoaXMub25lcnJvciA9IGZ1bmN0aW9uICgpeyB9IC8vIG5vb3BcbiAgICB0aGlzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uICgpeyB9IC8vIG5vb3BcbiAgICB0aGlzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKXsgfSAvLyBub29wXG4gICAgdGhpcy5wb2xsRW5kcG9pbnQgPSB0aGlzLm5vcm1hbGl6ZUVuZHBvaW50KGVuZFBvaW50KVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFNPQ0tFVF9TVEFURVMuY29ubmVjdGluZ1xuICAgIC8vIHdlIG11c3Qgd2FpdCBmb3IgdGhlIGNhbGxlciB0byBmaW5pc2ggc2V0dGluZyB1cCBvdXIgY2FsbGJhY2tzIGFuZCB0aW1lb3V0IHByb3BlcnRpZXNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucG9sbCgpLCAwKVxuICB9XG5cbiAgbm9ybWFsaXplRW5kcG9pbnQoZW5kUG9pbnQpe1xuICAgIHJldHVybiAoZW5kUG9pbnRcbiAgICAgIC5yZXBsYWNlKFwid3M6Ly9cIiwgXCJodHRwOi8vXCIpXG4gICAgICAucmVwbGFjZShcIndzczovL1wiLCBcImh0dHBzOi8vXCIpXG4gICAgICAucmVwbGFjZShuZXcgUmVnRXhwKFwiKC4qKVxcL1wiICsgVFJBTlNQT1JUUy53ZWJzb2NrZXQpLCBcIiQxL1wiICsgVFJBTlNQT1JUUy5sb25ncG9sbCkpXG4gIH1cblxuICBlbmRwb2ludFVSTCgpe1xuICAgIHJldHVybiBBamF4LmFwcGVuZFBhcmFtcyh0aGlzLnBvbGxFbmRwb2ludCwge3Rva2VuOiB0aGlzLnRva2VufSlcbiAgfVxuXG4gIGNsb3NlQW5kUmV0cnkoY29kZSwgcmVhc29uLCB3YXNDbGVhbil7XG4gICAgdGhpcy5jbG9zZShjb2RlLCByZWFzb24sIHdhc0NsZWFuKVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFNPQ0tFVF9TVEFURVMuY29ubmVjdGluZ1xuICB9XG5cbiAgb250aW1lb3V0KCl7XG4gICAgdGhpcy5vbmVycm9yKFwidGltZW91dFwiKVxuICAgIHRoaXMuY2xvc2VBbmRSZXRyeSgxMDA1LCBcInRpbWVvdXRcIiwgZmFsc2UpXG4gIH1cblxuICBpc0FjdGl2ZSgpeyByZXR1cm4gdGhpcy5yZWFkeVN0YXRlID09PSBTT0NLRVRfU1RBVEVTLm9wZW4gfHwgdGhpcy5yZWFkeVN0YXRlID09PSBTT0NLRVRfU1RBVEVTLmNvbm5lY3RpbmcgfVxuXG4gIHBvbGwoKXtcbiAgICB0aGlzLmFqYXgoXCJHRVRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIsIG51bGwsICgpID0+IHRoaXMub250aW1lb3V0KCksIHJlc3AgPT4ge1xuICAgICAgaWYocmVzcCl7XG4gICAgICAgIHZhciB7c3RhdHVzLCB0b2tlbiwgbWVzc2FnZXN9ID0gcmVzcFxuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXR1cyA9IDBcbiAgICAgIH1cblxuICAgICAgc3dpdGNoKHN0YXR1cyl7XG4gICAgICAgIGNhc2UgMjAwOlxuICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2gobXNnID0+IHtcbiAgICAgICAgICAgIC8vIFRhc2tzIGFyZSB3aGF0IHRoaW5ncyBsaWtlIGV2ZW50IGhhbmRsZXJzLCBzZXRUaW1lb3V0IGNhbGxiYWNrcyxcbiAgICAgICAgICAgIC8vIHByb21pc2UgcmVzb2x2ZXMgYW5kIG1vcmUgYXJlIHJ1biB3aXRoaW4uXG4gICAgICAgICAgICAvLyBJbiBtb2Rlcm4gYnJvd3NlcnMsIHRoZXJlIGFyZSB0d28gZGlmZmVyZW50IGtpbmRzIG9mIHRhc2tzLFxuICAgICAgICAgICAgLy8gbWljcm90YXNrcyBhbmQgbWFjcm90YXNrcy5cbiAgICAgICAgICAgIC8vIE1pY3JvdGFza3MgYXJlIG1haW5seSB1c2VkIGZvciBQcm9taXNlcywgd2hpbGUgbWFjcm90YXNrcyBhcmVcbiAgICAgICAgICAgIC8vIHVzZWQgZm9yIGV2ZXJ5dGhpbmcgZWxzZS5cbiAgICAgICAgICAgIC8vIE1pY3JvdGFza3MgYWx3YXlzIGhhdmUgcHJpb3JpdHkgb3ZlciBtYWNyb3Rhc2tzLiBJZiB0aGUgSlMgZW5naW5lXG4gICAgICAgICAgICAvLyBpcyBsb29raW5nIGZvciBhIHRhc2sgdG8gcnVuLCBpdCB3aWxsIGFsd2F5cyB0cnkgdG8gZW1wdHkgdGhlXG4gICAgICAgICAgICAvLyBtaWNyb3Rhc2sgcXVldWUgYmVmb3JlIGF0dGVtcHRpbmcgdG8gcnVuIGFueXRoaW5nIGZyb20gdGhlXG4gICAgICAgICAgICAvLyBtYWNyb3Rhc2sgcXVldWUuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gRm9yIHRoZSBXZWJTb2NrZXQgdHJhbnNwb3J0LCBtZXNzYWdlcyBhbHdheXMgYXJyaXZlIGluIHRoZWlyIG93blxuICAgICAgICAgICAgLy8gZXZlbnQuIFRoaXMgbWVhbnMgdGhhdCBpZiBhbnkgcHJvbWlzZXMgYXJlIHJlc29sdmVkIGZyb20gd2l0aGluLFxuICAgICAgICAgICAgLy8gdGhlaXIgY2FsbGJhY2tzIHdpbGwgYWx3YXlzIGZpbmlzaCBleGVjdXRpb24gYnkgdGhlIHRpbWUgdGhlXG4gICAgICAgICAgICAvLyBuZXh0IG1lc3NhZ2UgZXZlbnQgaGFuZGxlciBpcyBydW4uXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSW4gb3JkZXIgdG8gZW11bGF0ZSB0aGlzIGJlaGF2aW91ciwgd2UgbmVlZCB0byBtYWtlIHN1cmUgZWFjaFxuICAgICAgICAgICAgLy8gb25tZXNzYWdlIGhhbmRsZXIgaXMgcnVuIHdpdGhpbiBpdHMgb3duIG1hY3JvdGFzay5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vbm1lc3NhZ2Uoe2RhdGE6IG1zZ30pLCAwKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5wb2xsKClcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDIwNDpcbiAgICAgICAgICB0aGlzLnBvbGwoKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDEwOlxuICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFNPQ0tFVF9TVEFURVMub3BlblxuICAgICAgICAgIHRoaXMub25vcGVuKHt9KVxuICAgICAgICAgIHRoaXMucG9sbCgpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgdGhpcy5vbmVycm9yKDQwMylcbiAgICAgICAgICB0aGlzLmNsb3NlKDEwMDgsIFwiZm9yYmlkZGVuXCIsIGZhbHNlKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgdGhpcy5vbmVycm9yKDUwMClcbiAgICAgICAgICB0aGlzLmNsb3NlQW5kUmV0cnkoMTAxMSwgXCJpbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiwgNTAwKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihgdW5oYW5kbGVkIHBvbGwgc3RhdHVzICR7c3RhdHVzfWApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIHdlIGNvbGxlY3QgYWxsIHB1c2hlcyB3aXRoaW4gdGhlIGN1cnJlbnQgZXZlbnQgbG9vcCBieVxuICAvLyBzZXRUaW1lb3V0IDAsIHdoaWNoIG9wdGltaXplcyBiYWNrLXRvLWJhY2sgcHJvY2VkdXJhbFxuICAvLyBwdXNoZXMgYWdhaW5zdCBhbiBlbXB0eSBidWZmZXJcblxuICBzZW5kKGJvZHkpe1xuICAgIGlmKHR5cGVvZihib2R5KSAhPT0gXCJzdHJpbmdcIil7IGJvZHkgPSBhcnJheUJ1ZmZlclRvQmFzZTY0KGJvZHkpIH1cbiAgICBpZih0aGlzLmN1cnJlbnRCYXRjaCl7XG4gICAgICB0aGlzLmN1cnJlbnRCYXRjaC5wdXNoKGJvZHkpXG4gICAgfSBlbHNlIGlmKHRoaXMuYXdhaXRpbmdCYXRjaEFjayl7XG4gICAgICB0aGlzLmJhdGNoQnVmZmVyLnB1c2goYm9keSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50QmF0Y2ggPSBbYm9keV1cbiAgICAgIHRoaXMuY3VycmVudEJhdGNoVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5iYXRjaFNlbmQodGhpcy5jdXJyZW50QmF0Y2gpXG4gICAgICAgIHRoaXMuY3VycmVudEJhdGNoID0gbnVsbFxuICAgICAgfSwgMClcbiAgICB9XG4gIH1cblxuICBiYXRjaFNlbmQobWVzc2FnZXMpe1xuICAgIHRoaXMuYXdhaXRpbmdCYXRjaEFjayA9IHRydWVcbiAgICB0aGlzLmFqYXgoXCJQT1NUXCIsIFwiYXBwbGljYXRpb24veC1uZGpzb25cIiwgbWVzc2FnZXMuam9pbihcIlxcblwiKSwgKCkgPT4gdGhpcy5vbmVycm9yKFwidGltZW91dFwiKSwgcmVzcCA9PiB7XG4gICAgICB0aGlzLmF3YWl0aW5nQmF0Y2hBY2sgPSBmYWxzZVxuICAgICAgaWYoIXJlc3AgfHwgcmVzcC5zdGF0dXMgIT09IDIwMCl7XG4gICAgICAgIHRoaXMub25lcnJvcihyZXNwICYmIHJlc3Auc3RhdHVzKVxuICAgICAgICB0aGlzLmNsb3NlQW5kUmV0cnkoMTAxMSwgXCJpbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiwgZmFsc2UpXG4gICAgICB9IGVsc2UgaWYodGhpcy5iYXRjaEJ1ZmZlci5sZW5ndGggPiAwKXtcbiAgICAgICAgdGhpcy5iYXRjaFNlbmQodGhpcy5iYXRjaEJ1ZmZlcilcbiAgICAgICAgdGhpcy5iYXRjaEJ1ZmZlciA9IFtdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNsb3NlKGNvZGUsIHJlYXNvbiwgd2FzQ2xlYW4pe1xuICAgIGZvcihsZXQgcmVxIG9mIHRoaXMucmVxcyl7IHJlcS5hYm9ydCgpIH1cbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBTT0NLRVRfU1RBVEVTLmNsb3NlZFxuICAgIGxldCBvcHRzID0gT2JqZWN0LmFzc2lnbih7Y29kZTogMTAwMCwgcmVhc29uOiB1bmRlZmluZWQsIHdhc0NsZWFuOiB0cnVlfSwge2NvZGUsIHJlYXNvbiwgd2FzQ2xlYW59KVxuICAgIHRoaXMuYmF0Y2hCdWZmZXIgPSBbXVxuICAgIGNsZWFyVGltZW91dCh0aGlzLmN1cnJlbnRCYXRjaFRpbWVyKVxuICAgIHRoaXMuY3VycmVudEJhdGNoVGltZXIgPSBudWxsXG4gICAgaWYodHlwZW9mKENsb3NlRXZlbnQpICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgIHRoaXMub25jbG9zZShuZXcgQ2xvc2VFdmVudChcImNsb3NlXCIsIG9wdHMpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uY2xvc2Uob3B0cylcbiAgICB9XG4gIH1cblxuICBhamF4KG1ldGhvZCwgY29udGVudFR5cGUsIGJvZHksIG9uQ2FsbGVyVGltZW91dCwgY2FsbGJhY2spe1xuICAgIGxldCByZXFcbiAgICBsZXQgb250aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZXFzLmRlbGV0ZShyZXEpXG4gICAgICBvbkNhbGxlclRpbWVvdXQoKVxuICAgIH1cbiAgICByZXEgPSBBamF4LnJlcXVlc3QobWV0aG9kLCB0aGlzLmVuZHBvaW50VVJMKCksIGNvbnRlbnRUeXBlLCBib2R5LCB0aGlzLnRpbWVvdXQsIG9udGltZW91dCwgcmVzcCA9PiB7XG4gICAgICB0aGlzLnJlcXMuZGVsZXRlKHJlcSlcbiAgICAgIGlmKHRoaXMuaXNBY3RpdmUoKSl7IGNhbGxiYWNrKHJlc3ApIH1cbiAgICB9KVxuICAgIHRoaXMucmVxcy5hZGQocmVxKVxuICB9XG59XG4iLCAiLyoqXG4gKiBJbml0aWFsaXplcyB0aGUgUHJlc2VuY2VcbiAqIEBwYXJhbSB7Q2hhbm5lbH0gY2hhbm5lbCAtIFRoZSBDaGFubmVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBvcHRpb25zLFxuICogICAgICAgIGZvciBleGFtcGxlIGB7ZXZlbnRzOiB7c3RhdGU6IFwic3RhdGVcIiwgZGlmZjogXCJkaWZmXCJ9fWBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlc2VuY2Uge1xuXG4gIGNvbnN0cnVjdG9yKGNoYW5uZWwsIG9wdHMgPSB7fSl7XG4gICAgbGV0IGV2ZW50cyA9IG9wdHMuZXZlbnRzIHx8IHtzdGF0ZTogXCJwcmVzZW5jZV9zdGF0ZVwiLCBkaWZmOiBcInByZXNlbmNlX2RpZmZcIn1cbiAgICB0aGlzLnN0YXRlID0ge31cbiAgICB0aGlzLnBlbmRpbmdEaWZmcyA9IFtdXG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbFxuICAgIHRoaXMuam9pblJlZiA9IG51bGxcbiAgICB0aGlzLmNhbGxlciA9IHtcbiAgICAgIG9uSm9pbjogZnVuY3Rpb24gKCl7IH0sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbiAoKXsgfSxcbiAgICAgIG9uU3luYzogZnVuY3Rpb24gKCl7IH1cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5uZWwub24oZXZlbnRzLnN0YXRlLCBuZXdTdGF0ZSA9PiB7XG4gICAgICBsZXQge29uSm9pbiwgb25MZWF2ZSwgb25TeW5jfSA9IHRoaXMuY2FsbGVyXG5cbiAgICAgIHRoaXMuam9pblJlZiA9IHRoaXMuY2hhbm5lbC5qb2luUmVmKClcbiAgICAgIHRoaXMuc3RhdGUgPSBQcmVzZW5jZS5zeW5jU3RhdGUodGhpcy5zdGF0ZSwgbmV3U3RhdGUsIG9uSm9pbiwgb25MZWF2ZSlcblxuICAgICAgdGhpcy5wZW5kaW5nRGlmZnMuZm9yRWFjaChkaWZmID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFByZXNlbmNlLnN5bmNEaWZmKHRoaXMuc3RhdGUsIGRpZmYsIG9uSm9pbiwgb25MZWF2ZSlcbiAgICAgIH0pXG4gICAgICB0aGlzLnBlbmRpbmdEaWZmcyA9IFtdXG4gICAgICBvblN5bmMoKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoYW5uZWwub24oZXZlbnRzLmRpZmYsIGRpZmYgPT4ge1xuICAgICAgbGV0IHtvbkpvaW4sIG9uTGVhdmUsIG9uU3luY30gPSB0aGlzLmNhbGxlclxuXG4gICAgICBpZih0aGlzLmluUGVuZGluZ1N5bmNTdGF0ZSgpKXtcbiAgICAgICAgdGhpcy5wZW5kaW5nRGlmZnMucHVzaChkaWZmKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFByZXNlbmNlLnN5bmNEaWZmKHRoaXMuc3RhdGUsIGRpZmYsIG9uSm9pbiwgb25MZWF2ZSlcbiAgICAgICAgb25TeW5jKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25Kb2luKGNhbGxiYWNrKXsgdGhpcy5jYWxsZXIub25Kb2luID0gY2FsbGJhY2sgfVxuXG4gIG9uTGVhdmUoY2FsbGJhY2speyB0aGlzLmNhbGxlci5vbkxlYXZlID0gY2FsbGJhY2sgfVxuXG4gIG9uU3luYyhjYWxsYmFjayl7IHRoaXMuY2FsbGVyLm9uU3luYyA9IGNhbGxiYWNrIH1cblxuICBsaXN0KGJ5KXsgcmV0dXJuIFByZXNlbmNlLmxpc3QodGhpcy5zdGF0ZSwgYnkpIH1cblxuICBpblBlbmRpbmdTeW5jU3RhdGUoKXtcbiAgICByZXR1cm4gIXRoaXMuam9pblJlZiB8fCAodGhpcy5qb2luUmVmICE9PSB0aGlzLmNoYW5uZWwuam9pblJlZigpKVxuICB9XG5cbiAgLy8gbG93ZXItbGV2ZWwgcHVibGljIHN0YXRpYyBBUElcblxuICAvKipcbiAgICogVXNlZCB0byBzeW5jIHRoZSBsaXN0IG9mIHByZXNlbmNlcyBvbiB0aGUgc2VydmVyXG4gICAqIHdpdGggdGhlIGNsaWVudCdzIHN0YXRlLiBBbiBvcHRpb25hbCBgb25Kb2luYCBhbmQgYG9uTGVhdmVgIGNhbGxiYWNrIGNhblxuICAgKiBiZSBwcm92aWRlZCB0byByZWFjdCB0byBjaGFuZ2VzIGluIHRoZSBjbGllbnQncyBsb2NhbCBwcmVzZW5jZXMgYWNyb3NzXG4gICAqIGRpc2Nvbm5lY3RzIGFuZCByZWNvbm5lY3RzIHdpdGggdGhlIHNlcnZlci5cbiAgICpcbiAgICogQHJldHVybnMge1ByZXNlbmNlfVxuICAgKi9cbiAgc3RhdGljIHN5bmNTdGF0ZShjdXJyZW50U3RhdGUsIG5ld1N0YXRlLCBvbkpvaW4sIG9uTGVhdmUpe1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuY2xvbmUoY3VycmVudFN0YXRlKVxuICAgIGxldCBqb2lucyA9IHt9XG4gICAgbGV0IGxlYXZlcyA9IHt9XG5cbiAgICB0aGlzLm1hcChzdGF0ZSwgKGtleSwgcHJlc2VuY2UpID0+IHtcbiAgICAgIGlmKCFuZXdTdGF0ZVtrZXldKXtcbiAgICAgICAgbGVhdmVzW2tleV0gPSBwcmVzZW5jZVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5tYXAobmV3U3RhdGUsIChrZXksIG5ld1ByZXNlbmNlKSA9PiB7XG4gICAgICBsZXQgY3VycmVudFByZXNlbmNlID0gc3RhdGVba2V5XVxuICAgICAgaWYoY3VycmVudFByZXNlbmNlKXtcbiAgICAgICAgbGV0IG5ld1JlZnMgPSBuZXdQcmVzZW5jZS5tZXRhcy5tYXAobSA9PiBtLnBoeF9yZWYpXG4gICAgICAgIGxldCBjdXJSZWZzID0gY3VycmVudFByZXNlbmNlLm1ldGFzLm1hcChtID0+IG0ucGh4X3JlZilcbiAgICAgICAgbGV0IGpvaW5lZE1ldGFzID0gbmV3UHJlc2VuY2UubWV0YXMuZmlsdGVyKG0gPT4gY3VyUmVmcy5pbmRleE9mKG0ucGh4X3JlZikgPCAwKVxuICAgICAgICBsZXQgbGVmdE1ldGFzID0gY3VycmVudFByZXNlbmNlLm1ldGFzLmZpbHRlcihtID0+IG5ld1JlZnMuaW5kZXhPZihtLnBoeF9yZWYpIDwgMClcbiAgICAgICAgaWYoam9pbmVkTWV0YXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgam9pbnNba2V5XSA9IG5ld1ByZXNlbmNlXG4gICAgICAgICAgam9pbnNba2V5XS5tZXRhcyA9IGpvaW5lZE1ldGFzXG4gICAgICAgIH1cbiAgICAgICAgaWYobGVmdE1ldGFzLmxlbmd0aCA+IDApe1xuICAgICAgICAgIGxlYXZlc1trZXldID0gdGhpcy5jbG9uZShjdXJyZW50UHJlc2VuY2UpXG4gICAgICAgICAgbGVhdmVzW2tleV0ubWV0YXMgPSBsZWZ0TWV0YXNcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgam9pbnNba2V5XSA9IG5ld1ByZXNlbmNlXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5zeW5jRGlmZihzdGF0ZSwge2pvaW5zOiBqb2lucywgbGVhdmVzOiBsZWF2ZXN9LCBvbkpvaW4sIG9uTGVhdmUpXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogVXNlZCB0byBzeW5jIGEgZGlmZiBvZiBwcmVzZW5jZSBqb2luIGFuZCBsZWF2ZVxuICAgKiBldmVudHMgZnJvbSB0aGUgc2VydmVyLCBhcyB0aGV5IGhhcHBlbi4gTGlrZSBgc3luY1N0YXRlYCwgYHN5bmNEaWZmYFxuICAgKiBhY2NlcHRzIG9wdGlvbmFsIGBvbkpvaW5gIGFuZCBgb25MZWF2ZWAgY2FsbGJhY2tzIHRvIHJlYWN0IHRvIGEgdXNlclxuICAgKiBqb2luaW5nIG9yIGxlYXZpbmcgZnJvbSBhIGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge1ByZXNlbmNlfVxuICAgKi9cbiAgc3RhdGljIHN5bmNEaWZmKHN0YXRlLCBkaWZmLCBvbkpvaW4sIG9uTGVhdmUpe1xuICAgIGxldCB7am9pbnMsIGxlYXZlc30gPSB0aGlzLmNsb25lKGRpZmYpXG4gICAgaWYoIW9uSm9pbil7IG9uSm9pbiA9IGZ1bmN0aW9uICgpeyB9IH1cbiAgICBpZighb25MZWF2ZSl7IG9uTGVhdmUgPSBmdW5jdGlvbiAoKXsgfSB9XG5cbiAgICB0aGlzLm1hcChqb2lucywgKGtleSwgbmV3UHJlc2VuY2UpID0+IHtcbiAgICAgIGxldCBjdXJyZW50UHJlc2VuY2UgPSBzdGF0ZVtrZXldXG4gICAgICBzdGF0ZVtrZXldID0gdGhpcy5jbG9uZShuZXdQcmVzZW5jZSlcbiAgICAgIGlmKGN1cnJlbnRQcmVzZW5jZSl7XG4gICAgICAgIGxldCBqb2luZWRSZWZzID0gc3RhdGVba2V5XS5tZXRhcy5tYXAobSA9PiBtLnBoeF9yZWYpXG4gICAgICAgIGxldCBjdXJNZXRhcyA9IGN1cnJlbnRQcmVzZW5jZS5tZXRhcy5maWx0ZXIobSA9PiBqb2luZWRSZWZzLmluZGV4T2YobS5waHhfcmVmKSA8IDApXG4gICAgICAgIHN0YXRlW2tleV0ubWV0YXMudW5zaGlmdCguLi5jdXJNZXRhcylcbiAgICAgIH1cbiAgICAgIG9uSm9pbihrZXksIGN1cnJlbnRQcmVzZW5jZSwgbmV3UHJlc2VuY2UpXG4gICAgfSlcbiAgICB0aGlzLm1hcChsZWF2ZXMsIChrZXksIGxlZnRQcmVzZW5jZSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnRQcmVzZW5jZSA9IHN0YXRlW2tleV1cbiAgICAgIGlmKCFjdXJyZW50UHJlc2VuY2UpeyByZXR1cm4gfVxuICAgICAgbGV0IHJlZnNUb1JlbW92ZSA9IGxlZnRQcmVzZW5jZS5tZXRhcy5tYXAobSA9PiBtLnBoeF9yZWYpXG4gICAgICBjdXJyZW50UHJlc2VuY2UubWV0YXMgPSBjdXJyZW50UHJlc2VuY2UubWV0YXMuZmlsdGVyKHAgPT4ge1xuICAgICAgICByZXR1cm4gcmVmc1RvUmVtb3ZlLmluZGV4T2YocC5waHhfcmVmKSA8IDBcbiAgICAgIH0pXG4gICAgICBvbkxlYXZlKGtleSwgY3VycmVudFByZXNlbmNlLCBsZWZ0UHJlc2VuY2UpXG4gICAgICBpZihjdXJyZW50UHJlc2VuY2UubWV0YXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgZGVsZXRlIHN0YXRlW2tleV1cbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFycmF5IG9mIHByZXNlbmNlcywgd2l0aCBzZWxlY3RlZCBtZXRhZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHByZXNlbmNlc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaG9vc2VyXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcmVzZW5jZX1cbiAgICovXG4gIHN0YXRpYyBsaXN0KHByZXNlbmNlcywgY2hvb3Nlcil7XG4gICAgaWYoIWNob29zZXIpeyBjaG9vc2VyID0gZnVuY3Rpb24gKGtleSwgcHJlcyl7IHJldHVybiBwcmVzIH0gfVxuXG4gICAgcmV0dXJuIHRoaXMubWFwKHByZXNlbmNlcywgKGtleSwgcHJlc2VuY2UpID0+IHtcbiAgICAgIHJldHVybiBjaG9vc2VyKGtleSwgcHJlc2VuY2UpXG4gICAgfSlcbiAgfVxuXG4gIC8vIHByaXZhdGVcblxuICBzdGF0aWMgbWFwKG9iaiwgZnVuYyl7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubWFwKGtleSA9PiBmdW5jKGtleSwgb2JqW2tleV0pKVxuICB9XG5cbiAgc3RhdGljIGNsb25lKG9iail7IHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpIH1cbn1cbiIsICIvKiBUaGUgZGVmYXVsdCBzZXJpYWxpemVyIGZvciBlbmNvZGluZyBhbmQgZGVjb2RpbmcgbWVzc2FnZXMgKi9cbmltcG9ydCB7XG4gIENIQU5ORUxfRVZFTlRTXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgSEVBREVSX0xFTkdUSDogMSxcbiAgTUVUQV9MRU5HVEg6IDQsXG4gIEtJTkRTOiB7cHVzaDogMCwgcmVwbHk6IDEsIGJyb2FkY2FzdDogMn0sXG5cbiAgZW5jb2RlKG1zZywgY2FsbGJhY2spe1xuICAgIGlmKG1zZy5wYXlsb2FkLmNvbnN0cnVjdG9yID09PSBBcnJheUJ1ZmZlcil7XG4gICAgICByZXR1cm4gY2FsbGJhY2sodGhpcy5iaW5hcnlFbmNvZGUobXNnKSlcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHBheWxvYWQgPSBbbXNnLmpvaW5fcmVmLCBtc2cucmVmLCBtc2cudG9waWMsIG1zZy5ldmVudCwgbXNnLnBheWxvYWRdXG4gICAgICByZXR1cm4gY2FsbGJhY2soSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpXG4gICAgfVxuICB9LFxuXG4gIGRlY29kZShyYXdQYXlsb2FkLCBjYWxsYmFjayl7XG4gICAgaWYocmF3UGF5bG9hZC5jb25zdHJ1Y3RvciA9PT0gQXJyYXlCdWZmZXIpe1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHRoaXMuYmluYXJ5RGVjb2RlKHJhd1BheWxvYWQpKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgW2pvaW5fcmVmLCByZWYsIHRvcGljLCBldmVudCwgcGF5bG9hZF0gPSBKU09OLnBhcnNlKHJhd1BheWxvYWQpXG4gICAgICByZXR1cm4gY2FsbGJhY2soe2pvaW5fcmVmLCByZWYsIHRvcGljLCBldmVudCwgcGF5bG9hZH0pXG4gICAgfVxuICB9LFxuXG4gIC8vIHByaXZhdGVcblxuICBiaW5hcnlFbmNvZGUobWVzc2FnZSl7XG4gICAgbGV0IHtqb2luX3JlZiwgcmVmLCBldmVudCwgdG9waWMsIHBheWxvYWR9ID0gbWVzc2FnZVxuICAgIGxldCBtZXRhTGVuZ3RoID0gdGhpcy5NRVRBX0xFTkdUSCArIGpvaW5fcmVmLmxlbmd0aCArIHJlZi5sZW5ndGggKyB0b3BpYy5sZW5ndGggKyBldmVudC5sZW5ndGhcbiAgICBsZXQgaGVhZGVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuSEVBREVSX0xFTkdUSCArIG1ldGFMZW5ndGgpXG4gICAgbGV0IHZpZXcgPSBuZXcgRGF0YVZpZXcoaGVhZGVyKVxuICAgIGxldCBvZmZzZXQgPSAwXG5cbiAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCB0aGlzLktJTkRTLnB1c2gpIC8vIGtpbmRcbiAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCBqb2luX3JlZi5sZW5ndGgpXG4gICAgdmlldy5zZXRVaW50OChvZmZzZXQrKywgcmVmLmxlbmd0aClcbiAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCB0b3BpYy5sZW5ndGgpXG4gICAgdmlldy5zZXRVaW50OChvZmZzZXQrKywgZXZlbnQubGVuZ3RoKVxuICAgIEFycmF5LmZyb20oam9pbl9yZWYsIGNoYXIgPT4gdmlldy5zZXRVaW50OChvZmZzZXQrKywgY2hhci5jaGFyQ29kZUF0KDApKSlcbiAgICBBcnJheS5mcm9tKHJlZiwgY2hhciA9PiB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCBjaGFyLmNoYXJDb2RlQXQoMCkpKVxuICAgIEFycmF5LmZyb20odG9waWMsIGNoYXIgPT4gdmlldy5zZXRVaW50OChvZmZzZXQrKywgY2hhci5jaGFyQ29kZUF0KDApKSlcbiAgICBBcnJheS5mcm9tKGV2ZW50LCBjaGFyID0+IHZpZXcuc2V0VWludDgob2Zmc2V0KyssIGNoYXIuY2hhckNvZGVBdCgwKSkpXG5cbiAgICB2YXIgY29tYmluZWQgPSBuZXcgVWludDhBcnJheShoZWFkZXIuYnl0ZUxlbmd0aCArIHBheWxvYWQuYnl0ZUxlbmd0aClcbiAgICBjb21iaW5lZC5zZXQobmV3IFVpbnQ4QXJyYXkoaGVhZGVyKSwgMClcbiAgICBjb21iaW5lZC5zZXQobmV3IFVpbnQ4QXJyYXkocGF5bG9hZCksIGhlYWRlci5ieXRlTGVuZ3RoKVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkLmJ1ZmZlclxuICB9LFxuXG4gIGJpbmFyeURlY29kZShidWZmZXIpe1xuICAgIGxldCB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcilcbiAgICBsZXQga2luZCA9IHZpZXcuZ2V0VWludDgoMClcbiAgICBsZXQgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSB0aGlzLktJTkRTLnB1c2g6IHJldHVybiB0aGlzLmRlY29kZVB1c2goYnVmZmVyLCB2aWV3LCBkZWNvZGVyKVxuICAgICAgY2FzZSB0aGlzLktJTkRTLnJlcGx5OiByZXR1cm4gdGhpcy5kZWNvZGVSZXBseShidWZmZXIsIHZpZXcsIGRlY29kZXIpXG4gICAgICBjYXNlIHRoaXMuS0lORFMuYnJvYWRjYXN0OiByZXR1cm4gdGhpcy5kZWNvZGVCcm9hZGNhc3QoYnVmZmVyLCB2aWV3LCBkZWNvZGVyKVxuICAgIH1cbiAgfSxcblxuICBkZWNvZGVQdXNoKGJ1ZmZlciwgdmlldywgZGVjb2Rlcil7XG4gICAgbGV0IGpvaW5SZWZTaXplID0gdmlldy5nZXRVaW50OCgxKVxuICAgIGxldCB0b3BpY1NpemUgPSB2aWV3LmdldFVpbnQ4KDIpXG4gICAgbGV0IGV2ZW50U2l6ZSA9IHZpZXcuZ2V0VWludDgoMylcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5IRUFERVJfTEVOR1RIICsgdGhpcy5NRVRBX0xFTkdUSCAtIDEgLy8gcHVzaGVzIGhhdmUgbm8gcmVmXG4gICAgbGV0IGpvaW5SZWYgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBqb2luUmVmU2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgam9pblJlZlNpemVcbiAgICBsZXQgdG9waWMgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyB0b3BpY1NpemUpKVxuICAgIG9mZnNldCA9IG9mZnNldCArIHRvcGljU2l6ZVxuICAgIGxldCBldmVudCA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGV2ZW50U2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgZXZlbnRTaXplXG4gICAgbGV0IGRhdGEgPSBidWZmZXIuc2xpY2Uob2Zmc2V0LCBidWZmZXIuYnl0ZUxlbmd0aClcbiAgICByZXR1cm4ge2pvaW5fcmVmOiBqb2luUmVmLCByZWY6IG51bGwsIHRvcGljOiB0b3BpYywgZXZlbnQ6IGV2ZW50LCBwYXlsb2FkOiBkYXRhfVxuICB9LFxuXG4gIGRlY29kZVJlcGx5KGJ1ZmZlciwgdmlldywgZGVjb2Rlcil7XG4gICAgbGV0IGpvaW5SZWZTaXplID0gdmlldy5nZXRVaW50OCgxKVxuICAgIGxldCByZWZTaXplID0gdmlldy5nZXRVaW50OCgyKVxuICAgIGxldCB0b3BpY1NpemUgPSB2aWV3LmdldFVpbnQ4KDMpXG4gICAgbGV0IGV2ZW50U2l6ZSA9IHZpZXcuZ2V0VWludDgoNClcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5IRUFERVJfTEVOR1RIICsgdGhpcy5NRVRBX0xFTkdUSFxuICAgIGxldCBqb2luUmVmID0gZGVjb2Rlci5kZWNvZGUoYnVmZmVyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgam9pblJlZlNpemUpKVxuICAgIG9mZnNldCA9IG9mZnNldCArIGpvaW5SZWZTaXplXG4gICAgbGV0IHJlZiA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIHJlZlNpemUpKVxuICAgIG9mZnNldCA9IG9mZnNldCArIHJlZlNpemVcbiAgICBsZXQgdG9waWMgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyB0b3BpY1NpemUpKVxuICAgIG9mZnNldCA9IG9mZnNldCArIHRvcGljU2l6ZVxuICAgIGxldCBldmVudCA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGV2ZW50U2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgZXZlbnRTaXplXG4gICAgbGV0IGRhdGEgPSBidWZmZXIuc2xpY2Uob2Zmc2V0LCBidWZmZXIuYnl0ZUxlbmd0aClcbiAgICBsZXQgcGF5bG9hZCA9IHtzdGF0dXM6IGV2ZW50LCByZXNwb25zZTogZGF0YX1cbiAgICByZXR1cm4ge2pvaW5fcmVmOiBqb2luUmVmLCByZWY6IHJlZiwgdG9waWM6IHRvcGljLCBldmVudDogQ0hBTk5FTF9FVkVOVFMucmVwbHksIHBheWxvYWQ6IHBheWxvYWR9XG4gIH0sXG5cbiAgZGVjb2RlQnJvYWRjYXN0KGJ1ZmZlciwgdmlldywgZGVjb2Rlcil7XG4gICAgbGV0IHRvcGljU2l6ZSA9IHZpZXcuZ2V0VWludDgoMSlcbiAgICBsZXQgZXZlbnRTaXplID0gdmlldy5nZXRVaW50OCgyKVxuICAgIGxldCBvZmZzZXQgPSB0aGlzLkhFQURFUl9MRU5HVEggKyAyXG4gICAgbGV0IHRvcGljID0gZGVjb2Rlci5kZWNvZGUoYnVmZmVyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgdG9waWNTaXplKSlcbiAgICBvZmZzZXQgPSBvZmZzZXQgKyB0b3BpY1NpemVcbiAgICBsZXQgZXZlbnQgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBldmVudFNpemUpKVxuICAgIG9mZnNldCA9IG9mZnNldCArIGV2ZW50U2l6ZVxuICAgIGxldCBkYXRhID0gYnVmZmVyLnNsaWNlKG9mZnNldCwgYnVmZmVyLmJ5dGVMZW5ndGgpXG5cbiAgICByZXR1cm4ge2pvaW5fcmVmOiBudWxsLCByZWY6IG51bGwsIHRvcGljOiB0b3BpYywgZXZlbnQ6IGV2ZW50LCBwYXlsb2FkOiBkYXRhfVxuICB9XG59XG4iLCAiaW1wb3J0IHtcbiAgZ2xvYmFsLFxuICBwaHhXaW5kb3csXG4gIENIQU5ORUxfRVZFTlRTLFxuICBERUZBVUxUX1RJTUVPVVQsXG4gIERFRkFVTFRfVlNOLFxuICBTT0NLRVRfU1RBVEVTLFxuICBUUkFOU1BPUlRTLFxuICBXU19DTE9TRV9OT1JNQUxcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCJcblxuaW1wb3J0IHtcbiAgY2xvc3VyZVxufSBmcm9tIFwiLi91dGlsc1wiXG5cbmltcG9ydCBBamF4IGZyb20gXCIuL2FqYXhcIlxuaW1wb3J0IENoYW5uZWwgZnJvbSBcIi4vY2hhbm5lbFwiXG5pbXBvcnQgTG9uZ1BvbGwgZnJvbSBcIi4vbG9uZ3BvbGxcIlxuaW1wb3J0IFNlcmlhbGl6ZXIgZnJvbSBcIi4vc2VyaWFsaXplclwiXG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vdGltZXJcIlxuXG4vKiogSW5pdGlhbGl6ZXMgdGhlIFNvY2tldCAqXG4gKlxuICogRm9yIElFOCBzdXBwb3J0IHVzZSBhbiBFUzUtc2hpbSAoaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbmRQb2ludCAtIFRoZSBzdHJpbmcgV2ViU29ja2V0IGVuZHBvaW50LCBpZSwgYFwid3M6Ly9leGFtcGxlLmNvbS9zb2NrZXRcImAsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFwid3NzOi8vZXhhbXBsZS5jb21cImBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXCIvc29ja2V0XCJgIChpbmhlcml0ZWQgaG9zdCAmIHByb3RvY29sKVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXSAtIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRzLnRyYW5zcG9ydF0gLSBUaGUgV2Vic29ja2V0IFRyYW5zcG9ydCwgZm9yIGV4YW1wbGUgV2ViU29ja2V0IG9yIFBob2VuaXguTG9uZ1BvbGwuXG4gKlxuICogRGVmYXVsdHMgdG8gV2ViU29ja2V0IHdpdGggYXV0b21hdGljIExvbmdQb2xsIGZhbGxiYWNrIGlmIFdlYlNvY2tldCBpcyBub3QgZGVmaW5lZC5cbiAqIFRvIGZhbGxiYWNrIHRvIExvbmdQb2xsIHdoZW4gV2ViU29ja2V0IGF0dGVtcHRzIGZhaWwsIHVzZSBgbG9uZ1BvbGxGYWxsYmFja01zOiAyNTAwYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0cy5sb25nUG9sbEZhbGxiYWNrTXNdIC0gVGhlIG1pbGxpc2Vjb25kIHRpbWUgdG8gYXR0ZW1wdCB0aGUgcHJpbWFyeSB0cmFuc3BvcnRcbiAqIGJlZm9yZSBmYWxsaW5nIGJhY2sgdG8gdGhlIExvbmdQb2xsIHRyYW5zcG9ydC4gRGlzYWJsZWQgYnkgZGVmYXVsdC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0cy5kZWJ1Z10gLSBXaGVuIHRydWUsIGVuYWJsZXMgZGVidWcgbG9nZ2luZy4gRGVmYXVsdCBmYWxzZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0cy5lbmNvZGVdIC0gVGhlIGZ1bmN0aW9uIHRvIGVuY29kZSBvdXRnb2luZyBtZXNzYWdlcy5cbiAqXG4gKiBEZWZhdWx0cyB0byBKU09OIGVuY29kZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdHMuZGVjb2RlXSAtIFRoZSBmdW5jdGlvbiB0byBkZWNvZGUgaW5jb21pbmcgbWVzc2FnZXMuXG4gKlxuICogRGVmYXVsdHMgdG8gSlNPTjpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiAocGF5bG9hZCwgY2FsbGJhY2spID0+IGNhbGxiYWNrKEpTT04ucGFyc2UocGF5bG9hZCkpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdHMudGltZW91dF0gLSBUaGUgZGVmYXVsdCB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byB0cmlnZ2VyIHB1c2ggdGltZW91dHMuXG4gKlxuICogRGVmYXVsdHMgYERFRkFVTFRfVElNRU9VVGBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5oZWFydGJlYXRJbnRlcnZhbE1zXSAtIFRoZSBtaWxsaXNlYyBpbnRlcnZhbCB0byBzZW5kIGEgaGVhcnRiZWF0IG1lc3NhZ2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5yZWNvbm5lY3RBZnRlck1zXSAtIFRoZSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1pbGxpc2VjXG4gKiBzb2NrZXQgcmVjb25uZWN0IGludGVydmFsLlxuICpcbiAqIERlZmF1bHRzIHRvIHN0ZXBwZWQgYmFja29mZiBvZjpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBmdW5jdGlvbih0cmllcyl7XG4gKiAgIHJldHVybiBbMTAsIDUwLCAxMDAsIDE1MCwgMjAwLCAyNTAsIDUwMCwgMTAwMCwgMjAwMF1bdHJpZXMgLSAxXSB8fCA1MDAwXG4gKiB9XG4gKiBgYGBgXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRzLnJlam9pbkFmdGVyTXNdIC0gVGhlIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbWlsbGlzZWNcbiAqIHJlam9pbiBpbnRlcnZhbCBmb3IgaW5kaXZpZHVhbCBjaGFubmVscy5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBmdW5jdGlvbih0cmllcyl7XG4gKiAgIHJldHVybiBbMTAwMCwgMjAwMCwgNTAwMF1bdHJpZXMgLSAxXSB8fCAxMDAwMFxuICogfVxuICogYGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRzLmxvZ2dlcl0gLSBUaGUgb3B0aW9uYWwgZnVuY3Rpb24gZm9yIHNwZWNpYWxpemVkIGxvZ2dpbmcsIGllOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGZ1bmN0aW9uKGtpbmQsIG1zZywgZGF0YSkge1xuICogICBjb25zb2xlLmxvZyhgJHtraW5kfTogJHttc2d9YCwgZGF0YSlcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5sb25ncG9sbGVyVGltZW91dF0gLSBUaGUgbWF4aW11bSB0aW1lb3V0IG9mIGEgbG9uZyBwb2xsIEFKQVggcmVxdWVzdC5cbiAqXG4gKiBEZWZhdWx0cyB0byAyMHMgKGRvdWJsZSB0aGUgc2VydmVyIGxvbmcgcG9sbCB0aW1lcikuXG4gKlxuICogQHBhcmFtIHsoT2JqZWN0fGZ1bmN0aW9uKX0gW29wdHMucGFyYW1zXSAtIFRoZSBvcHRpb25hbCBwYXJhbXMgdG8gcGFzcyB3aGVuIGNvbm5lY3RpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5iaW5hcnlUeXBlXSAtIFRoZSBiaW5hcnkgdHlwZSB0byB1c2UgZm9yIGJpbmFyeSBXZWJTb2NrZXQgZnJhbWVzLlxuICpcbiAqIERlZmF1bHRzIHRvIFwiYXJyYXlidWZmZXJcIlxuICpcbiAqIEBwYXJhbSB7dnNufSBbb3B0cy52c25dIC0gVGhlIHNlcmlhbGl6ZXIncyBwcm90b2NvbCB2ZXJzaW9uIHRvIHNlbmQgb24gY29ubmVjdC5cbiAqXG4gKiBEZWZhdWx0cyB0byBERUZBVUxUX1ZTTi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdHMuc2Vzc2lvblN0b3JhZ2VdIC0gQW4gb3B0aW9uYWwgU3RvcmFnZSBjb21wYXRpYmxlIG9iamVjdFxuICogUGhvZW5peCB1c2VzIHNlc3Npb25TdG9yYWdlIGZvciBsb25ncG9sbCBmYWxsYmFjayBoaXN0b3J5LiBPdmVycmlkaW5nIHRoZSBzdG9yZSBpc1xuICogdXNlZnVsIHdoZW4gUGhvZW5peCB3b24ndCBoYXZlIGFjY2VzcyB0byBgc2Vzc2lvblN0b3JhZ2VgLiBGb3IgZXhhbXBsZSwgVGhpcyBjb3VsZFxuICogaGFwcGVuIGlmIGEgc2l0ZSBsb2FkcyBhIGNyb3NzLWRvbWFpbiBjaGFubmVsIGluIGFuIGlmcmFtZS4gRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiAgICAgY2xhc3MgSW5NZW1vcnlTdG9yYWdlIHtcbiAqICAgICAgIGNvbnN0cnVjdG9yKCkgeyB0aGlzLnN0b3JhZ2UgPSB7fSB9XG4gKiAgICAgICBnZXRJdGVtKGtleU5hbWUpIHsgcmV0dXJuIHRoaXMuc3RvcmFnZVtrZXlOYW1lXSB8fCBudWxsIH1cbiAqICAgICAgIHJlbW92ZUl0ZW0oa2V5TmFtZSkgeyBkZWxldGUgdGhpcy5zdG9yYWdlW2tleU5hbWVdIH1cbiAqICAgICAgIHNldEl0ZW0oa2V5TmFtZSwga2V5VmFsdWUpIHsgdGhpcy5zdG9yYWdlW2tleU5hbWVdID0ga2V5VmFsdWUgfVxuICogICAgIH1cbiAqXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ja2V0IHtcbiAgY29uc3RydWN0b3IoZW5kUG9pbnQsIG9wdHMgPSB7fSl7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcyA9IHtvcGVuOiBbXSwgY2xvc2U6IFtdLCBlcnJvcjogW10sIG1lc3NhZ2U6IFtdfVxuICAgIHRoaXMuY2hhbm5lbHMgPSBbXVxuICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdXG4gICAgdGhpcy5yZWYgPSAwXG4gICAgdGhpcy50aW1lb3V0ID0gb3B0cy50aW1lb3V0IHx8IERFRkFVTFRfVElNRU9VVFxuICAgIHRoaXMudHJhbnNwb3J0ID0gb3B0cy50cmFuc3BvcnQgfHwgZ2xvYmFsLldlYlNvY2tldCB8fCBMb25nUG9sbFxuICAgIHRoaXMucHJpbWFyeVBhc3NlZEhlYWx0aENoZWNrID0gZmFsc2VcbiAgICB0aGlzLmxvbmdQb2xsRmFsbGJhY2tNcyA9IG9wdHMubG9uZ1BvbGxGYWxsYmFja01zXG4gICAgdGhpcy5mYWxsYmFja1RpbWVyID0gbnVsbFxuICAgIHRoaXMuc2Vzc2lvblN0b3JlID0gb3B0cy5zZXNzaW9uU3RvcmFnZSB8fCAoZ2xvYmFsICYmIGdsb2JhbC5zZXNzaW9uU3RvcmFnZSlcbiAgICB0aGlzLmVzdGFibGlzaGVkQ29ubmVjdGlvbnMgPSAwXG4gICAgdGhpcy5kZWZhdWx0RW5jb2RlciA9IFNlcmlhbGl6ZXIuZW5jb2RlLmJpbmQoU2VyaWFsaXplcilcbiAgICB0aGlzLmRlZmF1bHREZWNvZGVyID0gU2VyaWFsaXplci5kZWNvZGUuYmluZChTZXJpYWxpemVyKVxuICAgIHRoaXMuY2xvc2VXYXNDbGVhbiA9IGZhbHNlXG4gICAgdGhpcy5kaXNjb25uZWN0aW5nID0gZmFsc2VcbiAgICB0aGlzLmJpbmFyeVR5cGUgPSBvcHRzLmJpbmFyeVR5cGUgfHwgXCJhcnJheWJ1ZmZlclwiXG4gICAgdGhpcy5jb25uZWN0Q2xvY2sgPSAxXG4gICAgaWYodGhpcy50cmFuc3BvcnQgIT09IExvbmdQb2xsKXtcbiAgICAgIHRoaXMuZW5jb2RlID0gb3B0cy5lbmNvZGUgfHwgdGhpcy5kZWZhdWx0RW5jb2RlclxuICAgICAgdGhpcy5kZWNvZGUgPSBvcHRzLmRlY29kZSB8fCB0aGlzLmRlZmF1bHREZWNvZGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5jb2RlID0gdGhpcy5kZWZhdWx0RW5jb2RlclxuICAgICAgdGhpcy5kZWNvZGUgPSB0aGlzLmRlZmF1bHREZWNvZGVyXG4gICAgfVxuICAgIGxldCBhd2FpdGluZ0Nvbm5lY3Rpb25PblBhZ2VTaG93ID0gbnVsbFxuICAgIGlmKHBoeFdpbmRvdyAmJiBwaHhXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcil7XG4gICAgICBwaHhXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsIF9lID0+IHtcbiAgICAgICAgaWYodGhpcy5jb25uKXtcbiAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKVxuICAgICAgICAgIGF3YWl0aW5nQ29ubmVjdGlvbk9uUGFnZVNob3cgPSB0aGlzLmNvbm5lY3RDbG9ja1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcGh4V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlc2hvd1wiLCBfZSA9PiB7XG4gICAgICAgIGlmKGF3YWl0aW5nQ29ubmVjdGlvbk9uUGFnZVNob3cgPT09IHRoaXMuY29ubmVjdENsb2NrKXtcbiAgICAgICAgICBhd2FpdGluZ0Nvbm5lY3Rpb25PblBhZ2VTaG93ID0gbnVsbFxuICAgICAgICAgIHRoaXMuY29ubmVjdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMuaGVhcnRiZWF0SW50ZXJ2YWxNcyA9IG9wdHMuaGVhcnRiZWF0SW50ZXJ2YWxNcyB8fCAzMDAwMFxuICAgIHRoaXMucmVqb2luQWZ0ZXJNcyA9ICh0cmllcykgPT4ge1xuICAgICAgaWYob3B0cy5yZWpvaW5BZnRlck1zKXtcbiAgICAgICAgcmV0dXJuIG9wdHMucmVqb2luQWZ0ZXJNcyh0cmllcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbMTAwMCwgMjAwMCwgNTAwMF1bdHJpZXMgLSAxXSB8fCAxMDAwMFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlY29ubmVjdEFmdGVyTXMgPSAodHJpZXMpID0+IHtcbiAgICAgIGlmKG9wdHMucmVjb25uZWN0QWZ0ZXJNcyl7XG4gICAgICAgIHJldHVybiBvcHRzLnJlY29ubmVjdEFmdGVyTXModHJpZXMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gWzEwLCA1MCwgMTAwLCAxNTAsIDIwMCwgMjUwLCA1MDAsIDEwMDAsIDIwMDBdW3RyaWVzIC0gMV0gfHwgNTAwMFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxvZ2dlciA9IG9wdHMubG9nZ2VyIHx8IG51bGxcbiAgICBpZighdGhpcy5sb2dnZXIgJiYgb3B0cy5kZWJ1Zyl7XG4gICAgICB0aGlzLmxvZ2dlciA9IChraW5kLCBtc2csIGRhdGEpID0+IHsgY29uc29sZS5sb2coYCR7a2luZH06ICR7bXNnfWAsIGRhdGEpIH1cbiAgICB9XG4gICAgdGhpcy5sb25ncG9sbGVyVGltZW91dCA9IG9wdHMubG9uZ3BvbGxlclRpbWVvdXQgfHwgMjAwMDBcbiAgICB0aGlzLnBhcmFtcyA9IGNsb3N1cmUob3B0cy5wYXJhbXMgfHwge30pXG4gICAgdGhpcy5lbmRQb2ludCA9IGAke2VuZFBvaW50fS8ke1RSQU5TUE9SVFMud2Vic29ja2V0fWBcbiAgICB0aGlzLnZzbiA9IG9wdHMudnNuIHx8IERFRkFVTFRfVlNOXG4gICAgdGhpcy5oZWFydGJlYXRUaW1lb3V0VGltZXIgPSBudWxsXG4gICAgdGhpcy5oZWFydGJlYXRUaW1lciA9IG51bGxcbiAgICB0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYgPSBudWxsXG4gICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IG5ldyBUaW1lcigoKSA9PiB7XG4gICAgICB0aGlzLnRlYXJkb3duKCgpID0+IHRoaXMuY29ubmVjdCgpKVxuICAgIH0sIHRoaXMucmVjb25uZWN0QWZ0ZXJNcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBMb25nUG9sbCB0cmFuc3BvcnQgcmVmZXJlbmNlXG4gICAqL1xuICBnZXRMb25nUG9sbFRyYW5zcG9ydCgpeyByZXR1cm4gTG9uZ1BvbGwgfVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0cyBhbmQgcmVwbGFjZXMgdGhlIGFjdGl2ZSB0cmFuc3BvcnRcbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV3VHJhbnNwb3J0IC0gVGhlIG5ldyB0cmFuc3BvcnQgY2xhc3MgdG8gaW5zdGFudGlhdGVcbiAgICpcbiAgICovXG4gIHJlcGxhY2VUcmFuc3BvcnQobmV3VHJhbnNwb3J0KXtcbiAgICB0aGlzLmNvbm5lY3RDbG9jaysrXG4gICAgdGhpcy5jbG9zZVdhc0NsZWFuID0gdHJ1ZVxuICAgIGNsZWFyVGltZW91dCh0aGlzLmZhbGxiYWNrVGltZXIpXG4gICAgdGhpcy5yZWNvbm5lY3RUaW1lci5yZXNldCgpXG4gICAgaWYodGhpcy5jb25uKXtcbiAgICAgIHRoaXMuY29ubi5jbG9zZSgpXG4gICAgICB0aGlzLmNvbm4gPSBudWxsXG4gICAgfVxuICAgIHRoaXMudHJhbnNwb3J0ID0gbmV3VHJhbnNwb3J0XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc29ja2V0IHByb3RvY29sXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwcm90b2NvbCgpeyByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wubWF0Y2goL15odHRwcy8pID8gXCJ3c3NcIiA6IFwid3NcIiB9XG5cbiAgLyoqXG4gICAqIFRoZSBmdWxseSBxdWFsaWZpZWQgc29ja2V0IHVybFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZW5kUG9pbnRVUkwoKXtcbiAgICBsZXQgdXJpID0gQWpheC5hcHBlbmRQYXJhbXMoXG4gICAgICBBamF4LmFwcGVuZFBhcmFtcyh0aGlzLmVuZFBvaW50LCB0aGlzLnBhcmFtcygpKSwge3ZzbjogdGhpcy52c259KVxuICAgIGlmKHVyaS5jaGFyQXQoMCkgIT09IFwiL1wiKXsgcmV0dXJuIHVyaSB9XG4gICAgaWYodXJpLmNoYXJBdCgxKSA9PT0gXCIvXCIpeyByZXR1cm4gYCR7dGhpcy5wcm90b2NvbCgpfToke3VyaX1gIH1cblxuICAgIHJldHVybiBgJHt0aGlzLnByb3RvY29sKCl9Oi8vJHtsb2NhdGlvbi5ob3N0fSR7dXJpfWBcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0cyB0aGUgc29ja2V0XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2xvc2VFdmVudCNTdGF0dXNfY29kZXMgZm9yIHZhbGlkIHN0YXR1cyBjb2Rlcy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBPcHRpb25hbCBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgc29ja2V0IGlzIGRpc2Nvbm5lY3RlZC5cbiAgICogQHBhcmFtIHtpbnRlZ2VyfSBjb2RlIC0gQSBzdGF0dXMgY29kZSBmb3IgZGlzY29ubmVjdGlvbiAoT3B0aW9uYWwpLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gQSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoZSByZWFzb24gdG8gZGlzY29ubmVjdC4gKE9wdGlvbmFsKVxuICAgKi9cbiAgZGlzY29ubmVjdChjYWxsYmFjaywgY29kZSwgcmVhc29uKXtcbiAgICB0aGlzLmNvbm5lY3RDbG9jaysrXG4gICAgdGhpcy5kaXNjb25uZWN0aW5nID0gdHJ1ZVxuICAgIHRoaXMuY2xvc2VXYXNDbGVhbiA9IHRydWVcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mYWxsYmFja1RpbWVyKVxuICAgIHRoaXMucmVjb25uZWN0VGltZXIucmVzZXQoKVxuICAgIHRoaXMudGVhcmRvd24oKCkgPT4ge1xuICAgICAgdGhpcy5kaXNjb25uZWN0aW5nID0gZmFsc2VcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICB9LCBjb2RlLCByZWFzb24pXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyAtIFRoZSBwYXJhbXMgdG8gc2VuZCB3aGVuIGNvbm5lY3RpbmcsIGZvciBleGFtcGxlIGB7dXNlcl9pZDogdXNlclRva2VufWBcbiAgICpcbiAgICogUGFzc2luZyBwYXJhbXMgdG8gY29ubmVjdCBpcyBkZXByZWNhdGVkOyBwYXNzIHRoZW0gaW4gdGhlIFNvY2tldCBjb25zdHJ1Y3RvciBpbnN0ZWFkOlxuICAgKiBgbmV3IFNvY2tldChcIi9zb2NrZXRcIiwge3BhcmFtczoge3VzZXJfaWQ6IHVzZXJUb2tlbn19KWAuXG4gICAqL1xuICBjb25uZWN0KHBhcmFtcyl7XG4gICAgaWYocGFyYW1zKXtcbiAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5sb2coXCJwYXNzaW5nIHBhcmFtcyB0byBjb25uZWN0IGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQgcGFzcyA6cGFyYW1zIHRvIHRoZSBTb2NrZXQgY29uc3RydWN0b3JcIilcbiAgICAgIHRoaXMucGFyYW1zID0gY2xvc3VyZShwYXJhbXMpXG4gICAgfVxuICAgIGlmKHRoaXMuY29ubiAmJiAhdGhpcy5kaXNjb25uZWN0aW5nKXsgcmV0dXJuIH1cbiAgICBpZih0aGlzLmxvbmdQb2xsRmFsbGJhY2tNcyAmJiB0aGlzLnRyYW5zcG9ydCAhPT0gTG9uZ1BvbGwpe1xuICAgICAgdGhpcy5jb25uZWN0V2l0aEZhbGxiYWNrKExvbmdQb2xsLCB0aGlzLmxvbmdQb2xsRmFsbGJhY2tNcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50cmFuc3BvcnRDb25uZWN0KClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9ncyB0aGUgbWVzc2FnZS4gT3ZlcnJpZGUgYHRoaXMubG9nZ2VyYCBmb3Igc3BlY2lhbGl6ZWQgbG9nZ2luZy4gbm9vcHMgYnkgZGVmYXVsdFxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2luZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbXNnXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqL1xuICBsb2coa2luZCwgbXNnLCBkYXRhKXsgdGhpcy5sb2dnZXIgJiYgdGhpcy5sb2dnZXIoa2luZCwgbXNnLCBkYXRhKSB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhIGxvZ2dlciBoYXMgYmVlbiBzZXQgb24gdGhpcyBzb2NrZXQuXG4gICAqL1xuICBoYXNMb2dnZXIoKXsgcmV0dXJuIHRoaXMubG9nZ2VyICE9PSBudWxsIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGNhbGxiYWNrcyBmb3IgY29ubmVjdGlvbiBvcGVuIGV2ZW50c1xuICAgKlxuICAgKiBAZXhhbXBsZSBzb2NrZXQub25PcGVuKGZ1bmN0aW9uKCl7IGNvbnNvbGUuaW5mbyhcInRoZSBzb2NrZXQgd2FzIG9wZW5lZFwiKSB9KVxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKi9cbiAgb25PcGVuKGNhbGxiYWNrKXtcbiAgICBsZXQgcmVmID0gdGhpcy5tYWtlUmVmKClcbiAgICB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLm9wZW4ucHVzaChbcmVmLCBjYWxsYmFja10pXG4gICAgcmV0dXJuIHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjYWxsYmFja3MgZm9yIGNvbm5lY3Rpb24gY2xvc2UgZXZlbnRzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBvbkNsb3NlKGNhbGxiYWNrKXtcbiAgICBsZXQgcmVmID0gdGhpcy5tYWtlUmVmKClcbiAgICB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLmNsb3NlLnB1c2goW3JlZiwgY2FsbGJhY2tdKVxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY2FsbGJhY2tzIGZvciBjb25uZWN0aW9uIGVycm9yIGV2ZW50c1xuICAgKlxuICAgKiBAZXhhbXBsZSBzb2NrZXQub25FcnJvcihmdW5jdGlvbihlcnJvcil7IGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWRcIikgfSlcbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gIG9uRXJyb3IoY2FsbGJhY2spe1xuICAgIGxldCByZWYgPSB0aGlzLm1ha2VSZWYoKVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3MuZXJyb3IucHVzaChbcmVmLCBjYWxsYmFja10pXG4gICAgcmV0dXJuIHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjYWxsYmFja3MgZm9yIGNvbm5lY3Rpb24gbWVzc2FnZSBldmVudHNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gIG9uTWVzc2FnZShjYWxsYmFjayl7XG4gICAgbGV0IHJlZiA9IHRoaXMubWFrZVJlZigpXG4gICAgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5tZXNzYWdlLnB1c2goW3JlZiwgY2FsbGJhY2tdKVxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQaW5ncyB0aGUgc2VydmVyIGFuZCBpbnZva2VzIHRoZSBjYWxsYmFjayB3aXRoIHRoZSBSVFQgaW4gbWlsbGlzZWNvbmRzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGluZyB3YXMgcHVzaGVkIG9yIGZhbHNlIGlmIHVuYWJsZSB0byBiZSBwdXNoZWQuXG4gICAqL1xuICBwaW5nKGNhbGxiYWNrKXtcbiAgICBpZighdGhpcy5pc0Nvbm5lY3RlZCgpKXsgcmV0dXJuIGZhbHNlIH1cbiAgICBsZXQgcmVmID0gdGhpcy5tYWtlUmVmKClcbiAgICBsZXQgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICAgIHRoaXMucHVzaCh7dG9waWM6IFwicGhvZW5peFwiLCBldmVudDogXCJoZWFydGJlYXRcIiwgcGF5bG9hZDoge30sIHJlZjogcmVmfSlcbiAgICBsZXQgb25Nc2dSZWYgPSB0aGlzLm9uTWVzc2FnZShtc2cgPT4ge1xuICAgICAgaWYobXNnLnJlZiA9PT0gcmVmKXtcbiAgICAgICAgdGhpcy5vZmYoW29uTXNnUmVmXSlcbiAgICAgICAgY2FsbGJhY2soRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG5cbiAgdHJhbnNwb3J0Q29ubmVjdCgpe1xuICAgIHRoaXMuY29ubmVjdENsb2NrKytcbiAgICB0aGlzLmNsb3NlV2FzQ2xlYW4gPSBmYWxzZVxuICAgIHRoaXMuY29ubiA9IG5ldyB0aGlzLnRyYW5zcG9ydCh0aGlzLmVuZFBvaW50VVJMKCkpXG4gICAgdGhpcy5jb25uLmJpbmFyeVR5cGUgPSB0aGlzLmJpbmFyeVR5cGVcbiAgICB0aGlzLmNvbm4udGltZW91dCA9IHRoaXMubG9uZ3BvbGxlclRpbWVvdXRcbiAgICB0aGlzLmNvbm4ub25vcGVuID0gKCkgPT4gdGhpcy5vbkNvbm5PcGVuKClcbiAgICB0aGlzLmNvbm4ub25lcnJvciA9IGVycm9yID0+IHRoaXMub25Db25uRXJyb3IoZXJyb3IpXG4gICAgdGhpcy5jb25uLm9ubWVzc2FnZSA9IGV2ZW50ID0+IHRoaXMub25Db25uTWVzc2FnZShldmVudClcbiAgICB0aGlzLmNvbm4ub25jbG9zZSA9IGV2ZW50ID0+IHRoaXMub25Db25uQ2xvc2UoZXZlbnQpXG4gIH1cblxuICBnZXRTZXNzaW9uKGtleSl7IHJldHVybiB0aGlzLnNlc3Npb25TdG9yZSAmJiB0aGlzLnNlc3Npb25TdG9yZS5nZXRJdGVtKGtleSkgfVxuXG4gIHN0b3JlU2Vzc2lvbihrZXksIHZhbCl7IHRoaXMuc2Vzc2lvblN0b3JlICYmIHRoaXMuc2Vzc2lvblN0b3JlLnNldEl0ZW0oa2V5LCB2YWwpIH1cblxuICBjb25uZWN0V2l0aEZhbGxiYWNrKGZhbGxiYWNrVHJhbnNwb3J0LCBmYWxsYmFja1RocmVzaG9sZCA9IDI1MDApe1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZhbGxiYWNrVGltZXIpXG4gICAgbGV0IGVzdGFibGlzaGVkID0gZmFsc2VcbiAgICBsZXQgcHJpbWFyeVRyYW5zcG9ydCA9IHRydWVcbiAgICBsZXQgb3BlblJlZiwgZXJyb3JSZWZcbiAgICBsZXQgZmFsbGJhY2sgPSAocmVhc29uKSA9PiB7XG4gICAgICB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBgZmFsbGluZyBiYWNrIHRvICR7ZmFsbGJhY2tUcmFuc3BvcnQubmFtZX0uLi5gLCByZWFzb24pXG4gICAgICB0aGlzLm9mZihbb3BlblJlZiwgZXJyb3JSZWZdKVxuICAgICAgcHJpbWFyeVRyYW5zcG9ydCA9IGZhbHNlXG4gICAgICB0aGlzLnJlcGxhY2VUcmFuc3BvcnQoZmFsbGJhY2tUcmFuc3BvcnQpXG4gICAgICB0aGlzLnRyYW5zcG9ydENvbm5lY3QoKVxuICAgIH1cbiAgICBpZih0aGlzLmdldFNlc3Npb24oYHBoeDpmYWxsYmFjazoke2ZhbGxiYWNrVHJhbnNwb3J0Lm5hbWV9YCkpeyByZXR1cm4gZmFsbGJhY2soXCJtZW1vcml6ZWRcIikgfVxuXG4gICAgdGhpcy5mYWxsYmFja1RpbWVyID0gc2V0VGltZW91dChmYWxsYmFjaywgZmFsbGJhY2tUaHJlc2hvbGQpXG5cbiAgICBlcnJvclJlZiA9IHRoaXMub25FcnJvcihyZWFzb24gPT4ge1xuICAgICAgdGhpcy5sb2coXCJ0cmFuc3BvcnRcIiwgXCJlcnJvclwiLCByZWFzb24pXG4gICAgICBpZihwcmltYXJ5VHJhbnNwb3J0ICYmICFlc3RhYmxpc2hlZCl7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZhbGxiYWNrVGltZXIpXG4gICAgICAgIGZhbGxiYWNrKHJlYXNvbilcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMub25PcGVuKCgpID0+IHtcbiAgICAgIGVzdGFibGlzaGVkID0gdHJ1ZVxuICAgICAgaWYoIXByaW1hcnlUcmFuc3BvcnQpe1xuICAgICAgICAvLyBvbmx5IG1lbW9yaXplIExQIGlmIHdlIG5ldmVyIGNvbm5lY3RlZCB0byBwcmltYXJ5XG4gICAgICAgIGlmKCF0aGlzLnByaW1hcnlQYXNzZWRIZWFsdGhDaGVjayl7IHRoaXMuc3RvcmVTZXNzaW9uKGBwaHg6ZmFsbGJhY2s6JHtmYWxsYmFja1RyYW5zcG9ydC5uYW1lfWAsIFwidHJ1ZVwiKSB9XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBgZXN0YWJsaXNoZWQgJHtmYWxsYmFja1RyYW5zcG9ydC5uYW1lfSBmYWxsYmFja2ApXG4gICAgICB9XG4gICAgICAvLyBpZiB3ZSd2ZSBlc3RhYmxpc2hlZCBwcmltYXJ5LCBnaXZlIHRoZSBmYWxsYmFjayBhIG5ldyBwZXJpb2QgdG8gYXR0ZW1wdCBwaW5nXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5mYWxsYmFja1RpbWVyKVxuICAgICAgdGhpcy5mYWxsYmFja1RpbWVyID0gc2V0VGltZW91dChmYWxsYmFjaywgZmFsbGJhY2tUaHJlc2hvbGQpXG4gICAgICB0aGlzLnBpbmcocnR0ID0+IHtcbiAgICAgICAgdGhpcy5sb2coXCJ0cmFuc3BvcnRcIiwgXCJjb25uZWN0ZWQgdG8gcHJpbWFyeSBhZnRlclwiLCBydHQpXG4gICAgICAgIHRoaXMucHJpbWFyeVBhc3NlZEhlYWx0aENoZWNrID0gdHJ1ZVxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mYWxsYmFja1RpbWVyKVxuICAgICAgfSlcbiAgICB9KVxuICAgIHRoaXMudHJhbnNwb3J0Q29ubmVjdCgpXG4gIH1cblxuICBjbGVhckhlYXJ0YmVhdHMoKXtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5oZWFydGJlYXRUaW1lcilcbiAgICBjbGVhclRpbWVvdXQodGhpcy5oZWFydGJlYXRUaW1lb3V0VGltZXIpXG4gIH1cblxuICBvbkNvbm5PcGVuKCl7XG4gICAgaWYodGhpcy5oYXNMb2dnZXIoKSkgdGhpcy5sb2coXCJ0cmFuc3BvcnRcIiwgYCR7dGhpcy50cmFuc3BvcnQubmFtZX0gY29ubmVjdGVkIHRvICR7dGhpcy5lbmRQb2ludFVSTCgpfWApXG4gICAgdGhpcy5jbG9zZVdhc0NsZWFuID0gZmFsc2VcbiAgICB0aGlzLmRpc2Nvbm5lY3RpbmcgPSBmYWxzZVxuICAgIHRoaXMuZXN0YWJsaXNoZWRDb25uZWN0aW9ucysrXG4gICAgdGhpcy5mbHVzaFNlbmRCdWZmZXIoKVxuICAgIHRoaXMucmVjb25uZWN0VGltZXIucmVzZXQoKVxuICAgIHRoaXMucmVzZXRIZWFydGJlYXQoKVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3Mub3Blbi5mb3JFYWNoKChbLCBjYWxsYmFja10pID0+IGNhbGxiYWNrKCkpXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG5cbiAgaGVhcnRiZWF0VGltZW91dCgpe1xuICAgIGlmKHRoaXMucGVuZGluZ0hlYXJ0YmVhdFJlZil7XG4gICAgICB0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYgPSBudWxsXG4gICAgICBpZih0aGlzLmhhc0xvZ2dlcigpKXsgdGhpcy5sb2coXCJ0cmFuc3BvcnRcIiwgXCJoZWFydGJlYXQgdGltZW91dC4gQXR0ZW1wdGluZyB0byByZS1lc3RhYmxpc2ggY29ubmVjdGlvblwiKSB9XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuRXJyb3IoKVxuICAgICAgdGhpcy5jbG9zZVdhc0NsZWFuID0gZmFsc2VcbiAgICAgIHRoaXMudGVhcmRvd24oKCkgPT4gdGhpcy5yZWNvbm5lY3RUaW1lci5zY2hlZHVsZVRpbWVvdXQoKSwgV1NfQ0xPU0VfTk9STUFMLCBcImhlYXJ0YmVhdCB0aW1lb3V0XCIpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRIZWFydGJlYXQoKXtcbiAgICBpZih0aGlzLmNvbm4gJiYgdGhpcy5jb25uLnNraXBIZWFydGJlYXQpeyByZXR1cm4gfVxuICAgIHRoaXMucGVuZGluZ0hlYXJ0YmVhdFJlZiA9IG51bGxcbiAgICB0aGlzLmNsZWFySGVhcnRiZWF0cygpXG4gICAgdGhpcy5oZWFydGJlYXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZW5kSGVhcnRiZWF0KCksIHRoaXMuaGVhcnRiZWF0SW50ZXJ2YWxNcylcbiAgfVxuXG4gIHRlYXJkb3duKGNhbGxiYWNrLCBjb2RlLCByZWFzb24pe1xuICAgIGlmKCF0aGlzLmNvbm4pe1xuICAgICAgcmV0dXJuIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICB9XG4gICAgbGV0IGNvbm5lY3RDbG9jayA9IHRoaXMuY29ubmVjdENsb2NrXG5cbiAgICB0aGlzLndhaXRGb3JCdWZmZXJEb25lKCgpID0+IHtcbiAgICAgIGlmKGNvbm5lY3RDbG9jayAhPT0gdGhpcy5jb25uZWN0Q2xvY2speyByZXR1cm4gfVxuICAgICAgaWYodGhpcy5jb25uKXtcbiAgICAgICAgaWYoY29kZSl7IHRoaXMuY29ubi5jbG9zZShjb2RlLCByZWFzb24gfHwgXCJcIikgfSBlbHNlIHsgdGhpcy5jb25uLmNsb3NlKCkgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLndhaXRGb3JTb2NrZXRDbG9zZWQoKCkgPT4ge1xuICAgICAgICBpZihjb25uZWN0Q2xvY2sgIT09IHRoaXMuY29ubmVjdENsb2NrKXsgcmV0dXJuIH1cbiAgICAgICAgaWYodGhpcy5jb25uKXtcbiAgICAgICAgICB0aGlzLmNvbm4ub25vcGVuID0gZnVuY3Rpb24gKCl7IH0gLy8gbm9vcFxuICAgICAgICAgIHRoaXMuY29ubi5vbmVycm9yID0gZnVuY3Rpb24gKCl7IH0gLy8gbm9vcFxuICAgICAgICAgIHRoaXMuY29ubi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoKXsgfSAvLyBub29wXG4gICAgICAgICAgdGhpcy5jb25uLm9uY2xvc2UgPSBmdW5jdGlvbiAoKXsgfSAvLyBub29wXG4gICAgICAgICAgdGhpcy5jb25uID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgd2FpdEZvckJ1ZmZlckRvbmUoY2FsbGJhY2ssIHRyaWVzID0gMSl7XG4gICAgaWYodHJpZXMgPT09IDUgfHwgIXRoaXMuY29ubiB8fCAhdGhpcy5jb25uLmJ1ZmZlcmVkQW1vdW50KXtcbiAgICAgIGNhbGxiYWNrKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy53YWl0Rm9yQnVmZmVyRG9uZShjYWxsYmFjaywgdHJpZXMgKyAxKVxuICAgIH0sIDE1MCAqIHRyaWVzKVxuICB9XG5cbiAgd2FpdEZvclNvY2tldENsb3NlZChjYWxsYmFjaywgdHJpZXMgPSAxKXtcbiAgICBpZih0cmllcyA9PT0gNSB8fCAhdGhpcy5jb25uIHx8IHRoaXMuY29ubi5yZWFkeVN0YXRlID09PSBTT0NLRVRfU1RBVEVTLmNsb3NlZCl7XG4gICAgICBjYWxsYmFjaygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMud2FpdEZvclNvY2tldENsb3NlZChjYWxsYmFjaywgdHJpZXMgKyAxKVxuICAgIH0sIDE1MCAqIHRyaWVzKVxuICB9XG5cbiAgb25Db25uQ2xvc2UoZXZlbnQpe1xuICAgIGxldCBjbG9zZUNvZGUgPSBldmVudCAmJiBldmVudC5jb2RlXG4gICAgaWYodGhpcy5oYXNMb2dnZXIoKSkgdGhpcy5sb2coXCJ0cmFuc3BvcnRcIiwgXCJjbG9zZVwiLCBldmVudClcbiAgICB0aGlzLnRyaWdnZXJDaGFuRXJyb3IoKVxuICAgIHRoaXMuY2xlYXJIZWFydGJlYXRzKClcbiAgICBpZighdGhpcy5jbG9zZVdhc0NsZWFuICYmIGNsb3NlQ29kZSAhPT0gMTAwMCl7XG4gICAgICB0aGlzLnJlY29ubmVjdFRpbWVyLnNjaGVkdWxlVGltZW91dCgpXG4gICAgfVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3MuY2xvc2UuZm9yRWFjaCgoWywgY2FsbGJhY2tdKSA9PiBjYWxsYmFjayhldmVudCkpXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG9uQ29ubkVycm9yKGVycm9yKXtcbiAgICBpZih0aGlzLmhhc0xvZ2dlcigpKSB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBlcnJvcilcbiAgICBsZXQgdHJhbnNwb3J0QmVmb3JlID0gdGhpcy50cmFuc3BvcnRcbiAgICBsZXQgZXN0YWJsaXNoZWRCZWZvcmUgPSB0aGlzLmVzdGFibGlzaGVkQ29ubmVjdGlvbnNcbiAgICB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLmVycm9yLmZvckVhY2goKFssIGNhbGxiYWNrXSkgPT4ge1xuICAgICAgY2FsbGJhY2soZXJyb3IsIHRyYW5zcG9ydEJlZm9yZSwgZXN0YWJsaXNoZWRCZWZvcmUpXG4gICAgfSlcbiAgICBpZih0cmFuc3BvcnRCZWZvcmUgPT09IHRoaXMudHJhbnNwb3J0IHx8IGVzdGFibGlzaGVkQmVmb3JlID4gMCl7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuRXJyb3IoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdHJpZ2dlckNoYW5FcnJvcigpe1xuICAgIHRoaXMuY2hhbm5lbHMuZm9yRWFjaChjaGFubmVsID0+IHtcbiAgICAgIGlmKCEoY2hhbm5lbC5pc0Vycm9yZWQoKSB8fCBjaGFubmVsLmlzTGVhdmluZygpIHx8IGNoYW5uZWwuaXNDbG9zZWQoKSkpe1xuICAgICAgICBjaGFubmVsLnRyaWdnZXIoQ0hBTk5FTF9FVkVOVFMuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY29ubmVjdGlvblN0YXRlKCl7XG4gICAgc3dpdGNoKHRoaXMuY29ubiAmJiB0aGlzLmNvbm4ucmVhZHlTdGF0ZSl7XG4gICAgICBjYXNlIFNPQ0tFVF9TVEFURVMuY29ubmVjdGluZzogcmV0dXJuIFwiY29ubmVjdGluZ1wiXG4gICAgICBjYXNlIFNPQ0tFVF9TVEFURVMub3BlbjogcmV0dXJuIFwib3BlblwiXG4gICAgICBjYXNlIFNPQ0tFVF9TVEFURVMuY2xvc2luZzogcmV0dXJuIFwiY2xvc2luZ1wiXG4gICAgICBkZWZhdWx0OiByZXR1cm4gXCJjbG9zZWRcIlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ29ubmVjdGVkKCl7IHJldHVybiB0aGlzLmNvbm5lY3Rpb25TdGF0ZSgpID09PSBcIm9wZW5cIiB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7Q2hhbm5lbH1cbiAgICovXG4gIHJlbW92ZShjaGFubmVsKXtcbiAgICB0aGlzLm9mZihjaGFubmVsLnN0YXRlQ2hhbmdlUmVmcylcbiAgICB0aGlzLmNoYW5uZWxzID0gdGhpcy5jaGFubmVscy5maWx0ZXIoYyA9PiBjICE9PSBjaGFubmVsKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYG9uT3BlbmAsIGBvbkNsb3NlYCwgYG9uRXJyb3IsYCBhbmQgYG9uTWVzc2FnZWAgcmVnaXN0cmF0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtyZWZzfSAtIGxpc3Qgb2YgcmVmcyByZXR1cm5lZCBieSBjYWxscyB0b1xuICAgKiAgICAgICAgICAgICAgICAgYG9uT3BlbmAsIGBvbkNsb3NlYCwgYG9uRXJyb3IsYCBhbmQgYG9uTWVzc2FnZWBcbiAgICovXG4gIG9mZihyZWZzKXtcbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzKXtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3Nba2V5XSA9IHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3Nba2V5XS5maWx0ZXIoKFtyZWZdKSA9PiB7XG4gICAgICAgIHJldHVybiByZWZzLmluZGV4T2YocmVmKSA9PT0gLTFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYXRlcyBhIG5ldyBjaGFubmVsIGZvciB0aGUgZ2l2ZW4gdG9waWNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRvcGljXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuUGFyYW1zIC0gUGFyYW1ldGVycyBmb3IgdGhlIGNoYW5uZWxcbiAgICogQHJldHVybnMge0NoYW5uZWx9XG4gICAqL1xuICBjaGFubmVsKHRvcGljLCBjaGFuUGFyYW1zID0ge30pe1xuICAgIGxldCBjaGFuID0gbmV3IENoYW5uZWwodG9waWMsIGNoYW5QYXJhbXMsIHRoaXMpXG4gICAgdGhpcy5jaGFubmVscy5wdXNoKGNoYW4pXG4gICAgcmV0dXJuIGNoYW5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKi9cbiAgcHVzaChkYXRhKXtcbiAgICBpZih0aGlzLmhhc0xvZ2dlcigpKXtcbiAgICAgIGxldCB7dG9waWMsIGV2ZW50LCBwYXlsb2FkLCByZWYsIGpvaW5fcmVmfSA9IGRhdGFcbiAgICAgIHRoaXMubG9nKFwicHVzaFwiLCBgJHt0b3BpY30gJHtldmVudH0gKCR7am9pbl9yZWZ9LCAke3JlZn0pYCwgcGF5bG9hZClcbiAgICB9XG5cbiAgICBpZih0aGlzLmlzQ29ubmVjdGVkKCkpe1xuICAgICAgdGhpcy5lbmNvZGUoZGF0YSwgcmVzdWx0ID0+IHRoaXMuY29ubi5zZW5kKHJlc3VsdCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VuZEJ1ZmZlci5wdXNoKCgpID0+IHRoaXMuZW5jb2RlKGRhdGEsIHJlc3VsdCA9PiB0aGlzLmNvbm4uc2VuZChyZXN1bHQpKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBuZXh0IG1lc3NhZ2UgcmVmLCBhY2NvdW50aW5nIGZvciBvdmVyZmxvd3NcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIG1ha2VSZWYoKXtcbiAgICBsZXQgbmV3UmVmID0gdGhpcy5yZWYgKyAxXG4gICAgaWYobmV3UmVmID09PSB0aGlzLnJlZil7IHRoaXMucmVmID0gMCB9IGVsc2UgeyB0aGlzLnJlZiA9IG5ld1JlZiB9XG5cbiAgICByZXR1cm4gdGhpcy5yZWYudG9TdHJpbmcoKVxuICB9XG5cbiAgc2VuZEhlYXJ0YmVhdCgpe1xuICAgIGlmKHRoaXMucGVuZGluZ0hlYXJ0YmVhdFJlZiAmJiAhdGhpcy5pc0Nvbm5lY3RlZCgpKXsgcmV0dXJuIH1cbiAgICB0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYgPSB0aGlzLm1ha2VSZWYoKVxuICAgIHRoaXMucHVzaCh7dG9waWM6IFwicGhvZW5peFwiLCBldmVudDogXCJoZWFydGJlYXRcIiwgcGF5bG9hZDoge30sIHJlZjogdGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmfSlcbiAgICB0aGlzLmhlYXJ0YmVhdFRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oZWFydGJlYXRUaW1lb3V0KCksIHRoaXMuaGVhcnRiZWF0SW50ZXJ2YWxNcylcbiAgfVxuXG4gIGZsdXNoU2VuZEJ1ZmZlcigpe1xuICAgIGlmKHRoaXMuaXNDb25uZWN0ZWQoKSAmJiB0aGlzLnNlbmRCdWZmZXIubGVuZ3RoID4gMCl7XG4gICAgICB0aGlzLnNlbmRCdWZmZXIuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKVxuICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW11cbiAgICB9XG4gIH1cblxuICBvbkNvbm5NZXNzYWdlKHJhd01lc3NhZ2Upe1xuICAgIHRoaXMuZGVjb2RlKHJhd01lc3NhZ2UuZGF0YSwgbXNnID0+IHtcbiAgICAgIGxldCB7dG9waWMsIGV2ZW50LCBwYXlsb2FkLCByZWYsIGpvaW5fcmVmfSA9IG1zZ1xuICAgICAgaWYocmVmICYmIHJlZiA9PT0gdGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmKXtcbiAgICAgICAgdGhpcy5jbGVhckhlYXJ0YmVhdHMoKVxuICAgICAgICB0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYgPSBudWxsXG4gICAgICAgIHRoaXMuaGVhcnRiZWF0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VuZEhlYXJ0YmVhdCgpLCB0aGlzLmhlYXJ0YmVhdEludGVydmFsTXMpXG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuaGFzTG9nZ2VyKCkpIHRoaXMubG9nKFwicmVjZWl2ZVwiLCBgJHtwYXlsb2FkLnN0YXR1cyB8fCBcIlwifSAke3RvcGljfSAke2V2ZW50fSAke3JlZiAmJiBcIihcIiArIHJlZiArIFwiKVwiIHx8IFwiXCJ9YCwgcGF5bG9hZClcblxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2hhbm5lbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBjaGFubmVsID0gdGhpcy5jaGFubmVsc1tpXVxuICAgICAgICBpZighY2hhbm5lbC5pc01lbWJlcih0b3BpYywgZXZlbnQsIHBheWxvYWQsIGpvaW5fcmVmKSl7IGNvbnRpbnVlIH1cbiAgICAgICAgY2hhbm5lbC50cmlnZ2VyKGV2ZW50LCBwYXlsb2FkLCByZWYsIGpvaW5fcmVmKVxuICAgICAgfVxuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5tZXNzYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IFssIGNhbGxiYWNrXSA9IHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3MubWVzc2FnZVtpXVxuICAgICAgICBjYWxsYmFjayhtc2cpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGxlYXZlT3BlblRvcGljKHRvcGljKXtcbiAgICBsZXQgZHVwQ2hhbm5lbCA9IHRoaXMuY2hhbm5lbHMuZmluZChjID0+IGMudG9waWMgPT09IHRvcGljICYmIChjLmlzSm9pbmVkKCkgfHwgYy5pc0pvaW5pbmcoKSkpXG4gICAgaWYoZHVwQ2hhbm5lbCl7XG4gICAgICBpZih0aGlzLmhhc0xvZ2dlcigpKSB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBgbGVhdmluZyBkdXBsaWNhdGUgdG9waWMgXCIke3RvcGljfVwiYClcbiAgICAgIGR1cENoYW5uZWwubGVhdmUoKVxuICAgIH1cbiAgfVxufVxuIiwgIi8qKiBAaW1wb3J0IHsgU25pcHBldCB9IGZyb20gJ3N2ZWx0ZScgKi9cbi8qKiBAaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uL3BheWxvYWQnICovXG4vKiogQGltcG9ydCB7IEdldHRlcnMgfSBmcm9tICcjc2hhcmVkJyAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIHNuaXBwZXQgcHJvZ3JhbW1hdGljYWxseVxuICogQHRlbXBsYXRlIHt1bmtub3duW119IFBhcmFtc1xuICogQHBhcmFtIHsoLi4ucGFyYW1zOiBHZXR0ZXJzPFBhcmFtcz4pID0+IHtcbiAqICAgcmVuZGVyOiAoKSA9PiBzdHJpbmdcbiAqICAgc2V0dXA/OiAoZWxlbWVudDogRWxlbWVudCkgPT4gdm9pZCB8ICgoKSA9PiB2b2lkKVxuICogfX0gZm5cbiAqIEByZXR1cm5zIHtTbmlwcGV0PFBhcmFtcz59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSYXdTbmlwcGV0KGZuKSB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgdGhlIHR5cGVzIGFyZSBhIGxpZVxuXHRyZXR1cm4gKC8qKiBAdHlwZSB7UGF5bG9hZH0gKi8gcGF5bG9hZCwgLyoqIEB0eXBlIHtQYXJhbXN9ICovIC4uLmFyZ3MpID0+IHtcblx0XHR2YXIgZ2V0dGVycyA9IC8qKiBAdHlwZSB7R2V0dGVyczxQYXJhbXM+fSAqLyAoYXJncy5tYXAoKHZhbHVlKSA9PiAoKSA9PiB2YWx1ZSkpO1xuXHRcdHBheWxvYWQub3V0ICs9IGZuKC4uLmdldHRlcnMpXG5cdFx0XHQucmVuZGVyKClcblx0XHRcdC50cmltKCk7XG5cdH07XG59XG4iLCAiaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5cbmV4cG9ydCBsZXQgbGl2ZVZpZXdTb2NrZXRzID0gd3JpdGFibGUoKTtcbiIsICI8c2NyaXB0PlxuICBpbXBvcnQgeyBQcmVzZW5jZSwgU29ja2V0IH0gZnJvbSAncGhvZW5peCc7XG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBsaXZlVmlld1NvY2tldHMgfSBmcm9tICcuLi9zdG9yZXMvbGl2ZVZpZXdTb2NrZXRzJztcbiAgbGV0IHsgcm9vbV9uYW1lIH0gPSAkcHJvcHMoKTtcbiAgbGV0IGNoYW5uZWw7XG4gIGxldCBwcmVzZW5jZTtcbiAgbGV0IGJvYXJkID0gJHN0YXRlKFtdKTtcbiAgbGV0IHNvY2tldDtcbiAgbGV0IHBsYXllciA9ICRzdGF0ZSgpO1xuICBsZXQgY29udGFpbmVyID0gJHN0YXRlKG51bGwpO1xuICBsZXQgc2hvd0xlZnQgPSAkc3RhdGUoZmFsc2UpOyAvLyBmYWxzZTtcbiAgbGV0IHNob3dSaWdodCA9ICRzdGF0ZShmYWxzZSk7IC8vIGZhbHNlO1xuICBsZXQgd2FpdGluZyA9ICRzdGF0ZSh0cnVlKTtcbiAgbGV0IHR1cm4gPSAkc3RhdGUoJ1gnKTtcbiAgbGV0IHdpbm5pbmdDZWxscyA9ICRzdGF0ZShbXSk7XG4gIGxldCB3aW5uZXIgPSAkc3RhdGUoKTtcblxuICBmdW5jdGlvbiB1cGRhdGVTaGFkb3dzKCkge1xuICAgIGlmICghY29udGFpbmVyKSByZXR1cm47XG4gICAgc2hvd0xlZnQgPSBjb250YWluZXIuc2Nyb2xsTGVmdCA+IDA7XG4gICAgc2hvd1JpZ2h0ID0gY29udGFpbmVyLnNjcm9sbExlZnQgKyBjb250YWluZXIuY2xpZW50V2lkdGggPCBjb250YWluZXIuc2Nyb2xsV2lkdGg7XG4gIH1cblxuICAkZWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnSm9pbmluZyByb29tJywgcm9vbV9uYW1lKTtcbiAgfSk7XG4gICRlZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGluZyBzaGFkb3dzJyk7XG4gICAgICB1cGRhdGVTaGFkb3dzKCk7XG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlU2hhZG93cyk7XG4gICAgfVxuICB9KTtcbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgbGV0IHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICAvLyB0b2tlbiA9IHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgIHRva2VuID0gKFsxZTddICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIChjKSA9PiAoYyBeIChjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmICgxNSA+PiAoYyAvIDQpKSkpLnRvU3RyaW5nKDE2KSk7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgICB9XG4gICAgc29ja2V0ID0gbmV3IFNvY2tldCgnL3NvY2tldCcsIHsgcGFyYW1zOiB7IHRva2VuOiB0b2tlbiB9IH0pO1xuICAgIHNvY2tldC5jb25uZWN0KCk7XG4gICAgam9pbigpO1xuICAgIGlmICgkbGl2ZVZpZXdTb2NrZXRzKSB7XG4gICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIGxpdmUgdmlldyBzb2NrZXQnKTtcbiAgICB9XG4gIH0pO1xuICBmdW5jdGlvbiBnZW5lcmF0ZVRpY1RhY1RvZUJvYXJkKGhlaWdodCwgd2lkdGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XG4gICAgICBib2FyZC5wdXNoKFtdKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICBib2FyZFtpXS5wdXNoKCcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gam9pbigpIHtcbiAgICBjaGFubmVsID0gc29ja2V0LmNoYW5uZWwoYHJvb206JHtyb29tX25hbWV9YCwgeyB0b2tlbjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSB9KTtcbiAgICBsZXQgdG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIHByZXNlbmNlID0gbmV3IFByZXNlbmNlKGNoYW5uZWwpO1xuICAgIGNoYW5uZWxcbiAgICAgIC5qb2luKClcbiAgICAgIC5yZWNlaXZlKCdvaycsIChyZXNwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdKb2luZWQgc3VjY2Vzc2Z1bGx5JywgcmVzcCk7XG4gICAgICAgIGNoYW5uZWwub24oJ3BsYXllZCcsIChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgYm9hcmQgPSBwYXlsb2FkLmJvYXJkO1xuICAgICAgICAgIHR1cm4gPSBwYXlsb2FkLnR1cm47XG4gICAgICAgICAgLy8gY2hlY2sgaWYgbmVlZCB0byBzY3JvbGxcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGF5bG9hZC54fS0ke3BheWxvYWQueX1gKTtcbiAgICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBpc1ZlcnRpY2FsbHlPdXRPZlZpZXcgPSByZWN0LnRvcCA8PSAwIHx8IHJlY3QuYm90dG9tID49IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgIC8vIENoZWNrIGhvcml6b250YWwgdmlzaWJpbGl0eVxuICAgICAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbGx5T3V0T2ZWaWV3ID0gcmVjdC5sZWZ0IDwgMCB8fCByZWN0LnJpZ2h0ID4gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgaWYgKGlzVmVydGljYWxseU91dE9mVmlldyB8fCBpc0hvcml6b250YWxseU91dE9mVmlldykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGF5bG9hZC54fS0ke3BheWxvYWQueX1gKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInLCBpbmxpbmU6ICdjZW50ZXInIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNoYW5uZWwub24oJ2JvYXJkX2NyZWF0ZWQnLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgIGJvYXJkID0gcGF5bG9hZC5ib2FyZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoYW5uZWwub24oJ2dhbWVfb3ZlcicsIChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgYm9hcmQgPSBwYXlsb2FkLmJvYXJkO1xuICAgICAgICAgIHdpbm5pbmdDZWxscyA9IHBheWxvYWQud2luX2Nvb3JkcztcbiAgICAgICAgICBpZiAocGF5bG9hZD8ud2lubmVyKSB7XG4gICAgICAgICAgICB3aW5uZXIgPSBwYXlsb2FkLndpbm5lcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5yZWNlaXZlKCdlcnJvcicsIChyZXNwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVbmFibGUgdG8gam9pbicsIHJlc3ApO1xuICAgICAgICBhbGVydCgnVW5hYmxlIHRvIGpvaW4nKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvYmJ5JztcbiAgICAgIH0pO1xuICAgIHByZXNlbmNlLm9uU3luYygoKSA9PiB7XG4gICAgICBwcmVzZW5jZS5saXN0KChpZCwgbWV0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnUHJlc2VuY2UgbGlzdCcsIGlkLCBtZXRhKTtcbiAgICAgICAgaWYgKG1ldGEubWV0YXMubGVuZ3RoIDwgMikge1xuICAgICAgICAgIHdhaXRpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdhaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0YS5tZXRhcy5maW5kSW5kZXgoKG0pID0+IG0udG9rZW4gPT0gdG9rZW4pID09IDApIHtcbiAgICAgICAgICBwbGF5ZXIgPSAnWCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheWVyID0gJ08nO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBnZW5lcmF0ZVRpY1RhY1RvZUJvYXJkKDIwLCAyMCk7XG4gICAgLy8gY2hhbm5lbC5wdXNoKCdzdGFydF9ib2FyZCcsIHsgYm9hcmQ6IGJvYXJkIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHBpbmcocm9vbSkge1xuICAgIGNoYW5uZWwucHVzaCgncGluZycsIHt9KTtcbiAgfVxuICBmdW5jdGlvbiBwbGF5KHgsIHkpIHtcbiAgICBjaGFubmVsXG4gICAgICAucHVzaCgncGxheScsIHsgeDogeCwgeTogeSwgcGxheWVyOiBwbGF5ZXIgfSlcbiAgICAgIC5yZWNlaXZlKCdvaycsIChwYXlsb2FkKSA9PiB7XG4gICAgICAgIGJvYXJkID0gcGF5bG9hZC5ib2FyZDtcbiAgICAgICAgdHVybiA9IHBheWxvYWQudHVybjtcbiAgICAgICAgaWYgKHBheWxvYWQ/LmdhbWVfb3Zlcikge1xuICAgICAgICAgIHdpbm5pbmdDZWxscyA9IHBheWxvYWQud2luX2Nvb3JkcztcbiAgICAgICAgICBpZiAocGF5bG9hZD8ud2lubmVyKSB7XG4gICAgICAgICAgICB3aW5uZXIgPSBwYXlsb2FkLndpbm5lcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAucmVjZWl2ZSgnZXJyb3InLCAoZXJyKSA9PiBjb25zb2xlLmxvZygncGhvZW5peCBlcnJvcmVkJywgZXJyKSlcbiAgICAgIC5yZWNlaXZlKCd0aW1lb3V0JywgKCkgPT4gY29uc29sZS5sb2coJ3RpbWVkIG91dCBwdXNoaW5nJykpO1xuICB9XG4gIGZ1bmN0aW9uIGlzV2lubmluZ0NlbGwoY29sLCByb3cpIHtcbiAgICByZXR1cm4gd2lubmluZ0NlbGxzLnNvbWUoKFt3aW5Db2wsIHdpblJvd10pID0+IHdpbkNvbCA9PT0gY29sICYmIHdpblJvdyA9PT0gcm93KTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2xhdGVfcm9vbV9uYW1lKHJvb21fbmFtZSkge1xuICAgIHJldHVybiByb29tX25hbWUuc3BsaXQoJ18nKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyAnICcgKyBjdXJbMF0udG9VcHBlckNhc2UoKSArIGN1ci5zbGljZSgxKSwgJycpO1xuICB9XG48L3NjcmlwdD5cblxuPCEtLSA8U2VydmljZVdvcmtlciBiaW5kOnNlcnZpY2VXb3JrZXJWZXJzaW9uPjwvU2VydmljZVdvcmtlcj4gLS0+XG48ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIHB5LTJcIj5cbiAgPGgyIGNsYXNzPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPlJvb206IHt0cmFuc2xhdGVfcm9vbV9uYW1lKHJvb21fbmFtZSl9PC9oMj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwicm91bmRlZC1sZyBiZy1yZWQtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCJcbiAgICBvbmNsaWNrPXsoKSA9PiAod2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvYmJ5Jyl9PkxlYXZlPC9idXR0b24+XG48L2Rpdj5cbnsjaWYgYm9hcmQubGVuZ3RoID4gMCAmJiBwbGF5ZXIgJiYgIXdhaXRpbmd9XG4gIDxkaXZcbiAgICBjbGFzcz1cImJhbm5lciBzdGlja3kgaW5zZXQteC0wIHRvcC0yIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC1sZyBwLTRcIlxuICAgIGRhdGEtd2lubmVyPXt3aW5uZXIgJiYgcGxheWVyID09IHdpbm5lcn0+XG4gICAgeyNpZiB3aW5uZXJ9XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPCEtLSBXaW5uZXIgdGV4dCByZWNlaXZlcyBmcm9tIGJvdGggc2lkZXMgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7I2lmIHBsYXllciA9PSB3aW5uZXJ9WW91IHdpbiFcbiAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICBQbGF5ZXIge3dpbm5lcn0gV2lucyF7L2lmfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICB7OmVsc2V9XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1sZyBiZy1hbWJlci02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIlxuICAgICAgICAgIGNsYXNzOmluLXR1cm49e3R1cm4gPT0gcGxheWVyfT5cbiAgICAgICAgICB7I2lmIHR1cm4gPT0gcGxheWVyfVlvdXIgdHVybiF7OmVsc2V9V2FpdGluZyBmb3IgeW91ciB0dXJuLi4uey9pZn1cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgIFBsYXllcjpcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3M9XCJ0aWN0YWN0b2UtaWQgbWwtMiBpbmxpbmUtYmxvY2sgcm91bmRlZC1sZyBiZy13aGl0ZSBweC0yIHB5LTEgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICBkYXRhLWNlbGw9e3BsYXllcn0+e3BsYXllcn08L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIHsvaWZ9XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYm9hcmQgcmVsYXRpdmUgbXQtMiByb3VuZGVkLWxnIGJnLWJsYWNrIHAtMlwiPlxuICAgIDwhLS0gU2hhZG93IGxlZnQgLS0+XG4gICAgeyNpZiBzaG93TGVmdH1cbiAgICAgIDxkaXYgY2xhc3M9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIHRvcC0wIGxlZnQtMCB6LTEwIGgtZnVsbCB3LTYgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrLzIwIHRvLXRyYW5zcGFyZW50XCI+PC9kaXY+XG4gICAgey9pZn1cblxuICAgIDwhLS0gU2hhZG93IHJpZ2h0IC0tPlxuICAgIHsjaWYgc2hvd1JpZ2h0fVxuICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB6LTEwIGgtZnVsbCB3LTYgYmctZ3JhZGllbnQtdG8tbCBmcm9tLWJsYWNrLzIwIHRvLXRyYW5zcGFyZW50XCI+PC9kaXY+XG4gICAgey9pZn1cblxuICAgIDwhLS0gU2Nyb2xsYWJsZSBjb250ZW50IC0tPlxuICAgIDxkaXZcbiAgICAgIGJpbmQ6dGhpcz17Y29udGFpbmVyfVxuICAgICAgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGdhcC0yIG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgeyNlYWNoIGJvYXJkIGFzIHJvdywgY29sX2luZGV4IChjb2xfaW5kZXgpfVxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBtaW4tdy1tYXggZ2FwLTJcIj5cbiAgICAgICAgICB7I2VhY2ggcm93IGFzIGNlbGwsIHJvd19pbmRleCAocm93X2luZGV4KX1cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3R1cm4gIT0gcGxheWVyIHx8IGNlbGwgIT0gJycgfHwgd2lubmluZ0NlbGxzLmxlbmd0aCA+IDB9XG4gICAgICAgICAgICAgIGlkPVwie2NvbF9pbmRleH0te3Jvd19pbmRleH1cIlxuICAgICAgICAgICAgICBjbGFzcz1cInRpY3RhY3RvZS1jZWxsIGFzcGVjdC1zcXVhcmUgbWluLWgtWzMycHhdIHctZnVsbCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLW1kIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwie2NvbF9pbmRleH0sIHtyb3dfaW5kZXh9XCJcbiAgICAgICAgICAgICAgZGF0YS1jZWxsPXtjZWxsfVxuICAgICAgICAgICAgICBkYXRhLXdpbm5pbmc9e2lzV2lubmluZ0NlbGwoY29sX2luZGV4LCByb3dfaW5kZXgpID8gJ3RydWUnIDogJ2ZhbHNlJ31cbiAgICAgICAgICAgICAgb25jbGljaz17KCkgPT4gcGxheShjb2xfaW5kZXgsIHJvd19pbmRleCl9PntjZWxsfTwvYnV0dG9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgICB7L2VhY2h9XG4gICAgPC9kaXY+XG4gIDwvZGl2Plxuey9pZn1cbjxkaXYgY2xhc3M9XCJncmlkIGdhcC0yXCI+XG4gIHsjaWYgcGxheWVyICYmIHdhaXRpbmd9XG4gICAgPHA+V2FpdGluZyBmb3IgYW5vdGhlciBwbGF5ZXIuLi48L3A+XG4gIHsvaWZ9XG48L2Rpdj5cblxuPHN0eWxlPlxuICAudGljdGFjdG9lLWNlbGwge1xuICAgICY6ZGlzYWJsZWQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICAgICZbZGF0YS1jZWxsPScnXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5cbiAgICAmW2RhdGEtY2VsbD0nTyddW2RhdGEtd2lubmluZz0nZmFsc2UnXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2OyAvKiBUYWlsd2luZCByZWQtNjAwICovXG4gICAgfVxuXG4gICAgJltkYXRhLWNlbGw9J1gnXVtkYXRhLXdpbm5pbmc9J2ZhbHNlJ10ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzNGU0YTsgLyogVGFpbHdpbmQgdGVhbC05MDAgKi9cbiAgICB9XG5cbiAgICAmW2RhdGEtY2VsbD0nTyddW2RhdGEtd2lubmluZz0ndHJ1ZSddIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWNjMTU7IC8qIFRhaWx3aW5kIHllbGxvdy00MDAgKi9cbiAgICAgIGFuaW1hdGlvbjogcHVsc2Utd2luIDFzIGluZmluaXRlO1xuICAgIH1cblxuICAgICZbZGF0YS1jZWxsPSdYJ11bZGF0YS13aW5uaW5nPSd0cnVlJ10ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRhZGU4MDsgLyogVGFpbHdpbmQgZ3JlZW4tNDAwICovXG4gICAgICBhbmltYXRpb246IHB1bHNlLXdpbiAxcyBpbmZpbml0ZTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHB1bHNlLXdpbiB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cbiAgfVxuXG4gIC50aWN0YWN0b2UtaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjQ2ZTU7IC8qIFRhaWx3aW5kIGluZGlnby02MDAgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgJltkYXRhLWNlbGw9J08nXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2OyAvKiBUYWlsd2luZCByZWQtNjAwICovXG4gICAgfVxuXG4gICAgJltkYXRhLWNlbGw9J1gnXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM0ZTRhOyAvKiBUYWlsd2luZCB0ZWFsLTkwMCAqL1xuICAgIH1cbiAgfVxuXG4gIC5pbi10dXJuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0NmU1OyAvKiBUYWlsd2luZCBpbmRpZ28tNjAwICovXG4gIH1cbiAgLmJhbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgLyogVGFpbHdpbmQgaW5kaWdvLTYwMCAqL1xuICAgIHotaW5kZXg6IDE7XG4gICAgJltkYXRhLXdpbm5lcj0ndHJ1ZSddIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YWRlODA7IC8qIFRhaWx3aW5kIGdyZWVuLTQwMCAqL1xuICAgIH1cblxuICAgICZbZGF0YS13aW5uZXI9J2ZhbHNlJ10ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjsgLyogVGFpbHdpbmQgcmVkLTYwMCAqL1xuICAgIH1cbiAgfVxuICAuYm9hcmQge1xuICB9XG48L3N0eWxlPlxuIiwgIjxzY3JpcHQ+XG4gIGltcG9ydCB7IFByZXNlbmNlLCBTb2NrZXQgfSBmcm9tICdwaG9lbml4JztcbiAgaW1wb3J0IHsgbGl2ZVZpZXdTb2NrZXRzIH0gZnJvbSAnLi4vc3RvcmVzL2xpdmVWaWV3U29ja2V0cyc7XG4gIGxldCByb29tcyA9ICRzdGF0ZSh7fSk7XG4gIGxldCBzb2NrZXQ7XG4gIGxldCBjaGFubmVsO1xuICBsZXQgcHJlc2VuY2U7XG5cbiAgJGVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICAvLyB0b2tlbiA9IHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgIHRva2VuID0gKFsxZTddICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIChjKSA9PiAoYyBeIChjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmICgxNSA+PiAoYyAvIDQpKSkpLnRvU3RyaW5nKDE2KSk7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgICB9XG4gICAgc29ja2V0ID0gbmV3IFNvY2tldCgnL3NvY2tldCcsIHsgcGFyYW1zOiB7IHRva2VuOiB0b2tlbiB9IH0pO1xuICAgIHNvY2tldC5jb25uZWN0KCk7XG4gICAgam9pbigpO1xuICB9KTtcbiAgZnVuY3Rpb24gam9pbigpIHtcbiAgICBjaGFubmVsID0gc29ja2V0LmNoYW5uZWwoJ2xvYmJ5JywgeyB0b2tlbjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSB9KTtcbiAgICBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZShjaGFubmVsKTtcbiAgICBjaGFubmVsXG4gICAgICAuam9pbigpXG4gICAgICAucmVjZWl2ZSgnb2snLCAocmVzcCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnSm9pbmVkIHN1Y2Nlc3NmdWxseScsIHJlc3ApO1xuICAgICAgICBjaGFubmVsLm9uKCdjaGFubmVsX2xpc3QnLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFubmVsX2xpc3QnLCBwYXlsb2FkKTtcbiAgICAgICAgICByb29tcyA9IHBheWxvYWQucm9vbXM7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGFubmVsLm9uKCdyb29tX2NoYW5nZWQnLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyb29tX2NyZWF0ZWQnLCBwYXlsb2FkKTtcbiAgICAgICAgICByb29tcyA9IHBheWxvYWQucm9vbXM7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGNoYW5uZWwub24oJ3VzZXJfam9pbmVkJywgKHBheWxvYWQpID0+IHtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygndXNlcl9qb2luZWRfcm9vbScsIHBheWxvYWQpO1xuICAgICAgICAvLyAgIHJvb21zID0gcGF5bG9hZC5yb29tcztcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gY2hhbm5lbC5vbigndXNlcl9sZWZ0JywgKHBheWxvYWQpID0+IHtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygndXNlcl9sZWZ0X3Jvb20nLCBwYXlsb2FkKTtcbiAgICAgICAgLy8gICByb29tcyA9IHBheWxvYWQucm9vbXM7XG4gICAgICAgIC8vIH0pXG4gICAgICB9KVxuICAgICAgLnJlY2VpdmUoJ2Vycm9yJywgKHJlc3ApID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBqb2luJywgcmVzcCk7XG4gICAgICB9KTtcbiAgICBwcmVzZW5jZS5vblN5bmMoKCkgPT4ge1xuICAgICAgcHJlc2VuY2UubGlzdCgoaWQsIG1ldGEpID0+IHt9KTtcbiAgICB9KTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVfYW5kX2pvaW5fcm9vbSgpIHtcbiAgICBjaGFubmVsLnB1c2goJ2NyZWF0ZV9yb29tJywgeyBoZWlnaHQ6IDIwLCB3aWR0aDogMjAsIHdpbm5pbmc6IDUgfSlcbiAgICAucmVjZWl2ZSgnb2snLCAocGF5bG9hZCkgPT4ge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2dhbWUvJyArIHBheWxvYWQucm9vbTsgICAgICBcbiAgICB9KVxuICAgIC5yZWNlaXZlKCdlcnJvcicsIChlcnIpID0+IGNvbnNvbGUubG9nKCdwaG9lbml4IGVycm9yZWQnLCBlcnIpKTtcbiAgfVxuICBmdW5jdGlvbiBqb2luX3Jvb20ocm9vbSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9nYW1lLycgKyByb29tO1xuICB9XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cImdyaWQgZ2FwLTJcIj5cbiAgeyNlYWNoIE9iamVjdC5lbnRyaWVzKHJvb21zKSBhcyBbcm9vbSwgZGF0YV19XG4gICAgeyNpZiBkYXRhLmNvdW50IDw9IDF9XG4gICAgICA8YnV0dG9uIG9uY2xpY2s9eygpID0+IGpvaW5fcm9vbShyb29tKX0+Sm9pbiB7cm9vbX0gW3tkYXRhLmhlaWdodH14e2RhdGEud2lkdGh9XTwvYnV0dG9uPlxuICAgIHsvaWZ9XG4gIHsvZWFjaH1cbiAgPGJ1dHRvbiBvbmNsaWNrPXtjcmVhdGVfYW5kX2pvaW5fcm9vbX0+Q3JlYXRlIFJvb20hPC9idXR0b24+XG48L2Rpdj5cbiIsICI8c2NyaXB0PlxuICBpbXBvcnQgeyBTb2NrZXQgfSBmcm9tIFwicGhvZW5peFwiO1xuICBpbXBvcnQgeyBsaXZlVmlld1NvY2tldHMgfSBmcm9tIFwiLi4vc3RvcmVzL2xpdmVWaWV3U29ja2V0c1wiXG5cbiAgbGV0IHsgbGl2ZSwgc29ja2V0IH0gPSAkcHJvcHMoKTtcbiAgJGVmZmVjdCgoKSA9PiB7XG4gICAgbGl2ZVZpZXdTb2NrZXRzLnNldChsaXZlKVxuICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIilcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICB0b2tlbiA9IHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbilcbiAgICB9XG4gICAgc29ja2V0ID0gKG5ldyBTb2NrZXQoXCIvc29ja2V0XCIsIHtwYXJhbXM6IHt0b2tlbjogdG9rZW59fSkpXG4gICAgc29ja2V0LmNvbm5lY3QoKVxuICB9KVxuPC9zY3JpcHQ+XG4iLCAiRWxpeGlyX0RvUXVpY2tpZVdlYl9FeGFtcGxlU3ZlbHRlTGl2ZVskLkZJTEVOQU1FXSA9ICdzdmVsdGUvX2J1aWxkL0VsaXhpci5Eb1F1aWNraWVXZWIuRXhhbXBsZVN2ZWx0ZUxpdmUuc3ZlbHRlJztcblxuaW1wb3J0ICogYXMgJCBmcm9tICdzdmVsdGUvaW50ZXJuYWwvc2VydmVyJztcblxuZnVuY3Rpb24gRWxpeGlyX0RvUXVpY2tpZVdlYl9FeGFtcGxlU3ZlbHRlTGl2ZSgkJHBheWxvYWQsICQkcHJvcHMpIHtcblx0JC5wdXNoKEVsaXhpcl9Eb1F1aWNraWVXZWJfRXhhbXBsZVN2ZWx0ZUxpdmUpO1xuXHQkLnBvcCgpO1xufVxuXG5FbGl4aXJfRG9RdWlja2llV2ViX0V4YW1wbGVTdmVsdGVMaXZlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQucmVuZGVyKC4uLikgaXMgbm8gbG9uZ2VyIHZhbGlkIGluIFN2ZWx0ZSA1LiBTZWUgaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlL3Y1LW1pZ3JhdGlvbi1ndWlkZSNDb21wb25lbnRzLWFyZS1uby1sb25nZXItY2xhc3NlcyBmb3IgbW9yZSBpbmZvcm1hdGlvbicpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWxpeGlyX0RvUXVpY2tpZVdlYl9FeGFtcGxlU3ZlbHRlTGl2ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdFlYQndhVzVuY3lJNklpSXNJbTVoYldWeklqcGJYU3dpYVdkdWIzSmxUR2x6ZENJNlcxMHNJbk52ZFhKalpYTWlPbHNpUld4cGVHbHlMa1J2VVhWcFkydHBaVmRsWWk1RmVHRnRjR3hsVTNabGJIUmxUR2wyWlM1emRtVnNkR1VpWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVhHNGlYWDA9IiwgImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29tcG9uZW50cy5kZWZhdWx0KSB8fCAhQXJyYXkuaXNBcnJheShjb21wb25lbnRzLmZpbGVuYW1lcykpIHJldHVybiBjb21wb25lbnRzXG5cbiAgICBjb25zdCBub3JtYWxpemVkID0ge31cbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgbW9kdWxlXSBvZiBjb21wb25lbnRzLmRlZmF1bHQuZW50cmllcygpKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZHVsZS5kZWZhdWx0XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wb25lbnRzLmZpbGVuYW1lc1tpbmRleF0ucmVwbGFjZShcIi4uL3N2ZWx0ZS9cIiwgXCJcIikucmVwbGFjZShcIi5zdmVsdGVcIiwgXCJcIilcbiAgICAgICAgbm9ybWFsaXplZFtuYW1lXSA9IENvbXBvbmVudFxuICAgIH1cbiAgICByZXR1cm4gbm9ybWFsaXplZFxufVxuIiwgImltcG9ydCB7bm9ybWFsaXplQ29tcG9uZW50c30gZnJvbSBcIi4vdXRpbHNcIlxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gXCJzdmVsdGUvc2VydmVyXCJcbmltcG9ydCB7Y3JlYXRlUmF3U25pcHBldH0gZnJvbSBcInN2ZWx0ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZW5kZXIoY29tcG9uZW50cykge1xuICAgIGNvbXBvbmVudHMgPSBub3JtYWxpemVDb21wb25lbnRzKGNvbXBvbmVudHMpXG5cbiAgICByZXR1cm4gZnVuY3Rpb24gcihuYW1lLCBwcm9wcywgc2xvdHMpIHtcbiAgICAgICAgY29uc3Qgc25pcHBldHMgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhzbG90cykubWFwKChbc2xvdE5hbWUsIHZdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc25pcHBldCA9IGNyZWF0ZVJhd1NuaXBwZXQobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6ICgpID0+IHYsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmIChzbG90TmFtZSA9PT0gXCJkZWZhdWx0XCIpIHJldHVybiBbXCJjaGlsZHJlblwiLCBzbmlwcGV0XVxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIFtzbG90TmFtZSwgc25pcHBldF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gcmVuZGVyKGNvbXBvbmVudHNbbmFtZV0sIHtwcm9wczogey4uLnByb3BzLCAuLi5zbmlwcGV0c319KVxuICAgIH1cbn1cbiIsICJpbXBvcnQge25vcm1hbGl6ZUNvbXBvbmVudHN9IGZyb20gXCIuL3V0aWxzXCJcbmltcG9ydCB7bW91bnQsIGh5ZHJhdGUsIHVubW91bnQsIGNyZWF0ZVJhd1NuaXBwZXR9IGZyb20gXCJzdmVsdGVcIlxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVKc29uKHJlZiwgYXR0cmlidXRlTmFtZSkge1xuICAgIGNvbnN0IGRhdGEgPSByZWYuZWwuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpXG4gICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDoge31cbn1cblxuZnVuY3Rpb24gZ2V0U2xvdHMocmVmKSB7XG4gICAgbGV0IHNuaXBwZXRzID0ge31cblxuICAgIGZvciAoY29uc3Qgc2xvdE5hbWUgaW4gZ2V0QXR0cmlidXRlSnNvbihyZWYsIFwiZGF0YS1zbG90c1wiKSkge1xuICAgICAgICBjb25zdCBiYXNlNjQgPSBnZXRBdHRyaWJ1dGVKc29uKHJlZiwgXCJkYXRhLXNsb3RzXCIpW3Nsb3ROYW1lXVxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGF0b2IoYmFzZTY0KS50cmltKClcblxuICAgICAgICBjb25zdCBzbmlwcGV0ID0gY3JlYXRlUmF3U25pcHBldChuYW1lID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVuZGVyOiAoKSA9PiBlbGVtZW50Lm91dGVySFRNTCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoc2xvdE5hbWUgPT09IFwiZGVmYXVsdFwiKSBzbmlwcGV0c1tcImNoaWxkcmVuXCJdID0gc25pcHBldFxuICAgICAgICBlbHNlIHNuaXBwZXRzW3Nsb3ROYW1lXSA9IHNuaXBwZXRcbiAgICB9XG5cbiAgICByZXR1cm4gc25pcHBldHNcbn1cblxuZnVuY3Rpb24gZ2V0TGl2ZUpzb25Qcm9wcyhyZWYpIHtcbiAgICBjb25zdCBqc29uID0gZ2V0QXR0cmlidXRlSnNvbihyZWYsIFwiZGF0YS1saXZlLWpzb25cIilcblxuICAgIC8vIE9uIFNTUiwgZGF0YS1saXZlLWpzb24gaXMgdGhlIGZ1bGwgb2JqZWN0IHdlIHdhbnRcbiAgICAvLyBBZnRlciBTU1IsIGRhdGEtbGl2ZS1qc29uIGlzIGFuIGFycmF5IG9mIGtleXMsIGFuZCB3ZSdsbCBnZXQgdGhlIGRhdGEgZnJvbSB0aGUgd2luZG93XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGpzb24pKSByZXR1cm4ganNvblxuXG4gICAgY29uc3QgbGl2ZUpzb25EYXRhID0ge31cbiAgICBmb3IgKGNvbnN0IGxpdmVKc29uVmFyaWFibGUgb2YganNvbikge1xuICAgICAgICBjb25zdCBkYXRhID0gd2luZG93W2xpdmVKc29uVmFyaWFibGVdXG4gICAgICAgIGlmIChkYXRhKSBsaXZlSnNvbkRhdGFbbGl2ZUpzb25WYXJpYWJsZV0gPSBkYXRhXG4gICAgfVxuICAgIHJldHVybiBsaXZlSnNvbkRhdGFcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcHMocmVmKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZ2V0QXR0cmlidXRlSnNvbihyZWYsIFwiZGF0YS1wcm9wc1wiKSxcbiAgICAgICAgLi4uZ2V0TGl2ZUpzb25Qcm9wcyhyZWYpLFxuICAgICAgICAuLi5nZXRTbG90cyhyZWYpLFxuICAgICAgICBsaXZlOiByZWYsXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaW5kU2xvdEN0eChjb21wb25lbnQpIHtcbiAgICAvLyBUaGUgZGVmYXVsdCBzbG90IGFsd2F5cyBleGlzdHMgaWYgdGhlcmUncyBhIHNsb3Qgc2V0XG4gICAgLy8gZXZlbiBpZiBubyBzbG90IGlzIHNldCBmb3IgdGhlIGV4cGxpY2l0IGRlZmF1bHQgc2xvdFxuICAgIHJldHVybiBjb21wb25lbnQuJCQuY3R4LmZpbmQoY3R4RWxlbWVudCA9PiBjdHhFbGVtZW50Py5kZWZhdWx0KVxufVxuXG5mdW5jdGlvbiB1cGRhdGVfc3RhdGUocmVmKSB7XG4gICAgY29uc3QgbmV3UHJvcHMgPSBnZXRQcm9wcyhyZWYpXG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3UHJvcHMpIHtcbiAgICAgICAgcmVmLl9pbnN0YW5jZS5zdGF0ZVtrZXldID0gbmV3UHJvcHNba2V5XVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvb2tzKGNvbXBvbmVudHMpIHtcbiAgICBjb21wb25lbnRzID0gbm9ybWFsaXplQ29tcG9uZW50cyhjb21wb25lbnRzKVxuXG4gICAgY29uc3QgU3ZlbHRlSG9vayA9IHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9ICRzdGF0ZShnZXRQcm9wcyh0aGlzKSlcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKVxuICAgICAgICAgICAgaWYgKCFjb21wb25lbnROYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJDb21wb25lbnQgbmFtZSBtdXN0IGJlIHByb3ZpZGVkXCIpXG5cbiAgICAgICAgICAgIGNvbnN0IENvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50TmFtZV1cbiAgICAgICAgICAgIGlmICghQ29tcG9uZW50KSB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kICR7Y29tcG9uZW50TmFtZX0gY29tcG9uZW50LmApXG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgbGl2ZUpzb25FbGVtZW50IG9mIE9iamVjdC5rZXlzKGdldEF0dHJpYnV0ZUpzb24odGhpcywgXCJkYXRhLWxpdmUtanNvblwiKSkpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihgJHtsaXZlSnNvbkVsZW1lbnR9X2luaXRpYWxpemVkYCwgX2V2ZW50ID0+IHVwZGF0ZV9zdGF0ZSh0aGlzKSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYCR7bGl2ZUpzb25FbGVtZW50fV9wYXRjaGVkYCwgX2V2ZW50ID0+IHVwZGF0ZV9zdGF0ZSh0aGlzKSwgZmFsc2UpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgZm9yIHRoZSBsb2FkaW5nIHNsb3QgdG8gYmUgY2xlYXJlZCBvbmNlIHdlIG1vdW50IHRoZSBjb21wb25lbnRcbiAgICAgICAgICAgIGlmICghdGhpcy5lbC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNzclwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBoeWRyYXRlT3JNb3VudCA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKFwiZGF0YS1zc3JcIikgPyBoeWRyYXRlIDogbW91bnRcblxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBoeWRyYXRlT3JNb3VudChDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZWwsXG4gICAgICAgICAgICAgICAgcHJvcHM6IHN0YXRlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLnN0YXRlID0gc3RhdGVcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVkKCkge1xuICAgICAgICAgICAgdXBkYXRlX3N0YXRlKHRoaXMpXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVzdHJveWVkKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBoeDpwYWdlLWxvYWRpbmctc3RvcFwiLCAoKSA9PiB1bm1vdW50KHRoaXMuX2luc3RhbmNlKSwge29uY2U6IHRydWV9KVxuICAgICAgICB9LFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIFN2ZWx0ZUhvb2ssXG4gICAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7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Q0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNO0FBQ3pDLGNBQU1FLFdBQVVDLGtCQUFpQixDQUFBQyxVQUFRO0FBQ3JDLGlCQUFPO1lBQ0gsUUFBUSxNQUFNO1VBQ2xCO1FBQ0osQ0FBQztBQUNELFlBQUksYUFBYSxVQUFXLFFBQU8sQ0FBQyxZQUFZRixRQUFPO1lBQ2xELFFBQU8sQ0FBQyxVQUFVQSxRQUFPO01BQ2xDLENBQUM7SUFDTDtBQUVBLFdBQU8sT0FBTyxXQUFXLElBQUksR0FBRyxFQUFDLE9BQU8sRUFBQyxHQUFHLE9BQU8sR0FBRyxTQUFRLEVBQUMsQ0FBQztFQUNwRTtBQUNKOzs7QTVEbkJPLElBQU1HLFVBQVMsVUFBVSxTQUFVOyIsCiAgIm5hbWVzIjogWyJzZXJ2ZXJfZXhwb3J0cyIsICJyZW5kZXIiLCAiaGFzaCIsICJzdGFjayIsICJjb21wb25lbnQiLCAic3RhY2siLCAicHJvcCIsICJzb3VyY2UiLCAidmFsdWUiLCAia2V5IiwgImRlcml2ZWQiLCAicGFyZW50IiwgInN0YWNrIiwgInNvdXJjZSIsICJlZmZlY3QiLCAibG9jYXRpb24iLCAiYXJyYXlfcHJvdG90eXBlIiwgImluZGV4IiwgImVmZmVjdCIsICJwdXNoIiwgInBhcmVudCIsICJkZXJpdmVkIiwgImVmZmVjdCIsICJlZmZlY3QiLCAicHVzaCIsICJlZmZlY3QiLCAidGVhcmRvd24iLCAibmV4dCIsICJ0cmFuc2l0aW9uIiwgInBhcmVudCIsICJjaGlsZCIsICJzaWJsaW5nIiwgImVmZmVjdCIsICJkZXJpdmVkIiwgInBhcmVudCIsICJlZmZlY3QiLCAiZWZmZWN0IiwgImNvbXBvbmVudF9jb250ZXh0IiwgInN0YWNrIiwgImluZGV4IiwgInRlYXJkb3duIiwgImNoaWxkIiwgInBhcmVudCIsICJkZXJpdmVkIiwgInBhcmVudCIsICJldmVudCIsICJlZmZlY3QiLCAiY29tcG9uZW50IiwgImV2ZW50cyIsICJwYXNzaXZlIiwgInVubW91bnQiLCAic2V0IiwgInVwZGF0ZSIsICJydW4iLCAicHJvcCIsICJuZXh0IiwgImV2ZW50IiwgInNsb3QiLCAiYXR0ciIsICJwcm9wIiwgImVsZW1lbnQiLCAicnVuIiwgInB1c2giLCAicG9wIiwgImNvbXBvbmVudCIsICJjaGlsZCIsICJwYXJlbnQiLCAiY2hpbGQiLCAibWVzc2FnZSIsICJjb21wb25lbnQiLCAicHVzaCIsICJwb3AiLCAiaGVhZCIsICJoYXNoIiwgImhhc2giLCAic3RvcmVfZ2V0IiwgImNsb3N1cmUiLCAiZXZlbnQiLCAic3RhdGUiLCAiZmFsbGJhY2siLCAiY3JlYXRlUmF3U25pcHBldCIsICJlbGVtZW50IiwgInJvb21fbmFtZSIsICJwdXNoIiwgInBvcCIsICJpbmRleCIsICJtb2R1bGUiLCAic25pcHBldCIsICJjcmVhdGVSYXdTbmlwcGV0IiwgIm5hbWUiLCAicmVuZGVyIl0KfQo=

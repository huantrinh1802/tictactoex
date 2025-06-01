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

// lib/utils.js
function translate_room_name(room_name) {
  return room_name.split("_").reduce((acc, cur) => acc + " " + cur[0].toUpperCase() + cur.slice(1), "");
}
function initialise_socket(token) {
  if (token) {
    let socket = new Socket("/socket", { params: { token } });
    socket.connect();
    return socket;
  }
  return;
}

// svelte/Game.svelte
Game[FILENAME] = "svelte/Game.svelte";
var $$css = {
  hash: "svelte-9erqw3",
  code: "\n  .tictactoe-cell.svelte-9erqw3 {\n    &:disabled {\n      pointer-events: none;\n    }\n    &[data-cell=''] {\n      background-color: white;\n      color: black;\n    }\n\n    &[data-cell='O'][data-winning='false'] {\n      background-color: #dc2626; /* Tailwind red-600 */\n    }\n\n    &[data-cell='X'][data-winning='false'] {\n      background-color: #134e4a; /* Tailwind teal-900 */\n    }\n\n    &[data-cell='O'][data-winning='true'] {\n      background-color: #facc15; /* Tailwind yellow-400 */\n      animation: svelte-9erqw3-pulse-win 1s infinite;\n    }\n\n    &[data-cell='X'][data-winning='true'] {\n      background-color: #4ade80; /* Tailwind green-400 */\n      animation: svelte-9erqw3-pulse-win 1s infinite;\n    }\n  }\n\n  @keyframes svelte-9erqw3-pulse-win {\n    0%,\n    100% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n  }\n\n  .tictactoe-id.svelte-9erqw3 {\n    background-color: #4f46e5; /* Tailwind indigo-600 */\n    color: white;\n    &[data-cell='O'] {\n      background-color: #dc2626; /* Tailwind red-600 */\n    }\n\n    &[data-cell='X'] {\n      background-color: #134e4a; /* Tailwind teal-900 */\n    }\n  }\n\n  .in-turn.svelte-9erqw3 {\n    background-color: #4f46e5; /* Tailwind indigo-600 */\n  }\n  .banner.svelte-9erqw3 {\n    background-color: gray; /* Tailwind indigo-600 */\n    z-index: 1;\n    &[data-winner='true'] {\n      background-color: #4ade80; /* Tailwind green-400 */\n    }\n\n    &[data-winner='false'] {\n      background-color: #dc2626; /* Tailwind red-600 */\n    }\n  }\n  .board.svelte-9erqw3 {\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5zdmVsdGUiLCJtYXBwaW5ncyI6IjtBQWtNQSxFQUFFLDZCQUFlLENBQUM7QUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUNmLE1BQU0sb0JBQW9CO0FBQzFCO0FBQ0EsSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUNwQixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLFlBQVk7QUFDbEI7O0FBRUEsSUFBSSxDQUFDLGVBQWUsc0JBQXNCLENBQUM7QUFDM0MsTUFBTSx5QkFBeUI7QUFDL0I7O0FBRUEsSUFBSSxDQUFDLGVBQWUsc0JBQXNCLENBQUM7QUFDM0MsTUFBTSx5QkFBeUI7QUFDL0I7O0FBRUEsSUFBSSxDQUFDLGVBQWUscUJBQXFCLENBQUM7QUFDMUMsTUFBTSx5QkFBeUI7QUFDL0IsTUFBTSx5QkFBVyxxQkFBcUI7QUFDdEM7O0FBRUEsSUFBSSxDQUFDLGVBQWUscUJBQXFCLENBQUM7QUFDMUMsTUFBTSx5QkFBeUI7QUFDL0IsTUFBTSx5QkFBVyxxQkFBcUI7QUFDdEM7QUFDQTs7QUFFQSxFQUFFLHlCQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJCQUFhLENBQUM7QUFDaEIsSUFBSSx5QkFBeUI7QUFDN0IsSUFBSSxZQUFZO0FBQ2hCLElBQUksQ0FBQyxlQUFlLENBQUM7QUFDckIsTUFBTSx5QkFBeUI7QUFDL0I7O0FBRUEsSUFBSSxDQUFDLGVBQWUsQ0FBQztBQUNyQixNQUFNLHlCQUF5QjtBQUMvQjtBQUNBOztBQUVBLEVBQUUsc0JBQVEsQ0FBQztBQUNYLElBQUkseUJBQXlCO0FBQzdCO0FBQ0EsRUFBRSxxQkFBTyxDQUFDO0FBQ1YsSUFBSSxzQkFBc0I7QUFDMUIsSUFBSSxVQUFVO0FBQ2QsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0FBQzFCLE1BQU0seUJBQXlCO0FBQy9COztBQUVBLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztBQUMzQixNQUFNLHlCQUF5QjtBQUMvQjtBQUNBO0FBQ0EsRUFBRSxvQkFBTSxDQUFDO0FBQ1QiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkdhbWUuc3ZlbHRlIl19 */"
};
function Game($$payload, $$props) {
  $$payload.css.add($$css);
  push2(Game);
  var $$store_subs;
  let { room_name, user } = $$props;
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
  let opponent = "";
  function updateShadows() {
    if (!container) return;
    showLeft = container.scrollLeft > 0;
    showRight = container.scrollLeft + container.clientWidth < container.scrollWidth;
  }
  noop(() => {
    socket = initialise_socket(user.email);
    if (!socket) {
      console.log("No socket");
    } else {
      join();
      if (store_get2($$store_subs ??= {}, "$liveViewSockets", liveViewSockets)) {
        console.log("Connected to live view socket");
      }
    }
  });
  function join() {
    channel = socket.channel(`room:${room_name}`, { token: user?.email, name: user?.name });
    let token = user?.email;
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
        opponent = meta.metas.find((m) => m.token != token).name;
      });
    });
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
  $$payload.out += `<div class="flex items-center justify-between gap-2 py-2 svelte-9erqw3">`;
  push_element($$payload, "div", 120, 0);
  $$payload.out += `<h2 class="text-2xl font-semibold svelte-9erqw3">`;
  push_element($$payload, "h2", 121, 2);
  $$payload.out += `Room: ${escape_html(translate_room_name(room_name))}</h2>`;
  pop_element();
  $$payload.out += ` <button class="rounded-lg bg-red-600 px-4 py-2 text-white svelte-9erqw3">`;
  push_element($$payload, "button", 122, 2);
  $$payload.out += `Leave</button>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += ` `;
  if (board.length > 0 && player && !waiting) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(board);
    $$payload.out += `<div class="banner sticky inset-x-0 top-2 flex w-full items-center justify-between rounded-lg p-4 svelte-9erqw3"${attr("data-winner", winner && player == winner)}>`;
    push_element($$payload, "div", 127, 2);
    if (winner) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex w-full justify-center svelte-9erqw3">`;
      push_element($$payload, "div", 131, 6);
      $$payload.out += `<p class="text-xl font-semibold text-white svelte-9erqw3">`;
      push_element($$payload, "p", 133, 8);
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
      push_element($$payload, "div", 140, 6);
      $$payload.out += `<p${attr_class("rounded-lg bg-amber-600 px-4 py-2 text-white svelte-9erqw3", void 0, { "in-turn": turn == player })}>`;
      push_element($$payload, "p", 141, 8);
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
      push_element($$payload, "p", 147, 8);
      $$payload.out += `Player: <span class="tictactoe-id ml-2 inline-block rounded-lg bg-white px-2 py-1 text-black svelte-9erqw3"${attr("data-cell", player)}>`;
      push_element($$payload, "span", 149, 10);
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
    push_element($$payload, "div", 156, 2);
    if (showLeft) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="pointer-events-none absolute top-0 left-0 z-10 h-full w-6 bg-gradient-to-r from-black/20 to-transparent svelte-9erqw3">`;
      push_element($$payload, "div", 159, 6);
      $$payload.out += `</div>`;
      pop_element();
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (showRight) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="pointer-events-none absolute top-0 right-0 z-10 h-full w-6 bg-gradient-to-l from-black/20 to-transparent svelte-9erqw3">`;
      push_element($$payload, "div", 164, 6);
      $$payload.out += `</div>`;
      pop_element();
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="flex flex-col gap-2 overflow-x-auto svelte-9erqw3">`;
    push_element($$payload, "div", 168, 4);
    $$payload.out += `<!--[-->`;
    for (let col_index = 0, $$length = each_array.length; col_index < $$length; col_index++) {
      let row = each_array[col_index];
      const each_array_1 = ensure_array_like(row);
      $$payload.out += `<div class="flex min-w-max gap-2 svelte-9erqw3">`;
      push_element($$payload, "div", 172, 8);
      $$payload.out += `<!--[-->`;
      for (let row_index = 0, $$length2 = each_array_1.length; row_index < $$length2; row_index++) {
        let cell = each_array_1[row_index];
        $$payload.out += `<button${attr("disabled", turn != player || cell != "" || winningCells.length > 0, true)}${attr("id", `${stringify(col_index)}-${stringify(row_index)}`)} class="tictactoe-cell aspect-square min-h-[32px] w-full cursor-pointer rounded-md text-white svelte-9erqw3"${attr("aria-label", `${stringify(col_index)}, ${stringify(row_index)}`)}${attr("data-cell", cell)}${attr("data-winning", isWinningCell(col_index, row_index) ? "true" : "false")}>`;
        push_element($$payload, "button", 174, 12);
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
  push_element($$payload, "div", 188, 0);
  if (player && waiting) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="svelte-9erqw3">`;
    push_element($$payload, "p", 190, 4);
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
var $$css2 = {
  hash: "svelte-1lfrdk0",
  code: "\n  .rooms-list.svelte-1lfrdk0 {\n    grid-template-columns: 1fr auto;\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZUxvYmJ5LnN2ZWx0ZSIsIm1hcHBpbmdzIjoiO0FBaUVBLEVBQUUsMEJBQVcsQ0FBQztBQUNkLElBQUksK0JBQStCO0FBQ25DIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJHYW1lTG9iYnkuc3ZlbHRlIl19 */"
};
function GameLobby($$payload, $$props) {
  $$payload.css.add($$css2);
  push2(GameLobby);
  let { user } = $$props;
  let rooms = {};
  let socket;
  let channel;
  let presence;
  function join() {
    channel = socket.channel("lobby", { token: user?.email });
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
  $$payload.out += `<div class="grid w-full gap-4">`;
  push_element($$payload, "div", 49, 0);
  $$payload.out += `<button class="mx-auto w-fit rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">`;
  push_element($$payload, "button", 50, 2);
  $$payload.out += `Create Room!</button>`;
  pop_element();
  $$payload.out += ` <div class="rooms-list grid grid-cols-2 items-center justify-center gap-2 svelte-1lfrdk0">`;
  push_element($$payload, "div", 53, 2);
  $$payload.out += `<!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [room, data] = each_array[$$index];
    if (data.count <= 1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p>`;
      push_element($$payload, "p", 56, 8);
      $$payload.out += `${escape_html(translate_room_name(room))} [${escape_html(data.height)}x${escape_html(data.width)}]</p>`;
      pop_element();
      $$payload.out += ` <button class="w-fit rounded bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-700">`;
      push_element($$payload, "button", 57, 8);
      $$payload.out += `Join!</button>`;
      pop_element();
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div>`;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vYXNzZXRzL2pzL3NlcnZlci5qcyIsICJpbXBvcnQtZ2xvYjouLi9zdmVsdGUvKiovKi5zdmVsdGUiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvZXNjYXBpbmcuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL3NoYXJlZC9hdHRyaWJ1dGVzLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9zaGFyZWQvdXRpbHMuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9lc20tZW52L3RydWUuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9jb25zdGFudHMuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9yZWFjdGl2aXR5L2VxdWFsaXR5LmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvZXJyb3JzLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9mbGFncy9pbmRleC5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2Rldi90cmFjaW5nLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9zaGFyZWQvZXJyb3JzLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvY29udGV4dC5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L3Byb3h5LmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvcmVhY3Rpdml0eS9kZXJpdmVkcy5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L3JlYWN0aXZpdHkvc291cmNlcy5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L3dhcm5pbmdzLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvZG9tL2h5ZHJhdGlvbi5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2Rldi9lcXVhbGl0eS5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2RvbS9vcGVyYXRpb25zLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvcmVhY3Rpdml0eS9lZmZlY3RzLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvZG9tL3Rhc2suanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9ydW50aW1lLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy91dGlscy5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2RvbS9lbGVtZW50cy9ldmVudHMuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9kb20vYmxvY2tzL3N2ZWx0ZS1oZWFkLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvZG9tL3RlbXBsYXRlLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvcmVuZGVyLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9zaGFyZWQvdmFsaWRhdGUuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9kb20vZWxlbWVudHMvYXR0cmlidXRlcy5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvc3RvcmUvc2hhcmVkL2luZGV4LmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvcmVhY3Rpdml0eS9zdG9yZS5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvbGVnYWN5L2xlZ2FjeS1jbGllbnQuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9kb20vZWxlbWVudHMvY3VzdG9tLWVsZW1lbnQuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2luZGV4LWNsaWVudC5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvc3RvcmUvdXRpbHMuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL3NlcnZlci9jb250ZXh0LmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9zZXJ2ZXIvaHlkcmF0aW9uLmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9odG1sLXRyZWUtdmFsaWRhdGlvbi5qcyIsICIuLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvc2VydmVyL3BheWxvYWQuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL3NlcnZlci9kZXYuanMiLCAiLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL3NlcnZlci9pbmRleC5qcyIsICIuLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvdXRpbHMuanMiLCAiLi4vLi4vZGVwcy9waG9lbml4L2Fzc2V0cy9qcy9waG9lbml4L2NvbnN0YW50cy5qcyIsICIuLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvcHVzaC5qcyIsICIuLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvdGltZXIuanMiLCAiLi4vLi4vZGVwcy9waG9lbml4L2Fzc2V0cy9qcy9waG9lbml4L2NoYW5uZWwuanMiLCAiLi4vLi4vZGVwcy9waG9lbml4L2Fzc2V0cy9qcy9waG9lbml4L2FqYXguanMiLCAiLi4vLi4vZGVwcy9waG9lbml4L2Fzc2V0cy9qcy9waG9lbml4L2xvbmdwb2xsLmpzIiwgIi4uLy4uL2RlcHMvcGhvZW5peC9hc3NldHMvanMvcGhvZW5peC9wcmVzZW5jZS5qcyIsICIuLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvc2VyaWFsaXplci5qcyIsICIuLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvc29ja2V0LmpzIiwgIi4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9zZXJ2ZXIvYmxvY2tzL3NuaXBwZXQuanMiLCAiLi4vLi4vYXNzZXRzL3N0b3Jlcy9saXZlVmlld1NvY2tldHMuanMiLCAiLi4vLi4vYXNzZXRzL2xpYi91dGlscy5qcyIsICIuLi8uLi9hc3NldHMvc3ZlbHRlL0dhbWUuc3ZlbHRlIiwgIi4uLy4uL2Fzc2V0cy9zdmVsdGUvR2FtZUxvYmJ5LnN2ZWx0ZSIsICIuLi8uLi9hc3NldHMvc3ZlbHRlL0xpdmVWaWV3U29ja2V0LnN2ZWx0ZSIsICIuLi8uLi9hc3NldHMvc3ZlbHRlL19idWlsZC9FbGl4aXIuRG9RdWlja2llV2ViLkV4YW1wbGVTdmVsdGVMaXZlLnN2ZWx0ZSIsICIuLi8uLi9kZXBzL2xpdmVfc3ZlbHRlL2Fzc2V0cy9qcy9saXZlX3N2ZWx0ZS91dGlscy5qcyIsICIuLi8uLi9kZXBzL2xpdmVfc3ZlbHRlL2Fzc2V0cy9qcy9saXZlX3N2ZWx0ZS9yZW5kZXIuanMiLCAiLi4vLi4vZGVwcy9saXZlX3N2ZWx0ZS9hc3NldHMvanMvbGl2ZV9zdmVsdGUvaG9va3Muc3ZlbHRlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBDb21wb25lbnRzIGZyb20gXCIuLi9zdmVsdGUvKiovKi5zdmVsdGVcIlxuaW1wb3J0IHtnZXRSZW5kZXJ9IGZyb20gXCJsaXZlX3N2ZWx0ZVwiXG5cbmV4cG9ydCBjb25zdCByZW5kZXIgPSBnZXRSZW5kZXIoQ29tcG9uZW50cylcbiIsICJcbiAgICAgICAgaW1wb3J0ICogYXMgbW9kdWxlMCBmcm9tICcuLi9zdmVsdGUvR2FtZS5zdmVsdGUnO2ltcG9ydCAqIGFzIG1vZHVsZTEgZnJvbSAnLi4vc3ZlbHRlL0dhbWVMb2JieS5zdmVsdGUnO2ltcG9ydCAqIGFzIG1vZHVsZTIgZnJvbSAnLi4vc3ZlbHRlL0xpdmVWaWV3U29ja2V0LnN2ZWx0ZSc7aW1wb3J0ICogYXMgbW9kdWxlMyBmcm9tICcuLi9zdmVsdGUvX2J1aWxkL0VsaXhpci5Eb1F1aWNraWVXZWIuRXhhbXBsZVN2ZWx0ZUxpdmUuc3ZlbHRlJ1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZXMgPSBbbW9kdWxlMCxtb2R1bGUxLG1vZHVsZTIsbW9kdWxlM107XG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgbW9kdWxlcztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGZpbGVuYW1lcyA9IFsnLi4vc3ZlbHRlL0dhbWUuc3ZlbHRlJywnLi4vc3ZlbHRlL0dhbWVMb2JieS5zdmVsdGUnLCcuLi9zdmVsdGUvTGl2ZVZpZXdTb2NrZXQuc3ZlbHRlJywnLi4vc3ZlbHRlL19idWlsZC9FbGl4aXIuRG9RdWlja2llV2ViLkV4YW1wbGVTdmVsdGVMaXZlLnN2ZWx0ZSddXG4gICAgICAiLCAiZXhwb3J0IGNvbnN0IEVBQ0hfSVRFTV9SRUFDVElWRSA9IDE7XG5leHBvcnQgY29uc3QgRUFDSF9JTkRFWF9SRUFDVElWRSA9IDEgPDwgMTtcbi8qKiBTZWUgRWFjaEJsb2NrIGludGVyZmFjZSBtZXRhZGF0YS5pc19jb250cm9sbGVkIGZvciBhbiBleHBsYW5hdGlvbiB3aGF0IHRoaXMgaXMgKi9cbmV4cG9ydCBjb25zdCBFQUNIX0lTX0NPTlRST0xMRUQgPSAxIDw8IDI7XG5leHBvcnQgY29uc3QgRUFDSF9JU19BTklNQVRFRCA9IDEgPDwgMztcbmV4cG9ydCBjb25zdCBFQUNIX0lURU1fSU1NVVRBQkxFID0gMSA8PCA0O1xuXG5leHBvcnQgY29uc3QgUFJPUFNfSVNfSU1NVVRBQkxFID0gMTtcbmV4cG9ydCBjb25zdCBQUk9QU19JU19SVU5FUyA9IDEgPDwgMTtcbmV4cG9ydCBjb25zdCBQUk9QU19JU19VUERBVEVEID0gMSA8PCAyO1xuZXhwb3J0IGNvbnN0IFBST1BTX0lTX0JJTkRBQkxFID0gMSA8PCAzO1xuZXhwb3J0IGNvbnN0IFBST1BTX0lTX0xBWllfSU5JVElBTCA9IDEgPDwgNDtcblxuZXhwb3J0IGNvbnN0IFRSQU5TSVRJT05fSU4gPSAxO1xuZXhwb3J0IGNvbnN0IFRSQU5TSVRJT05fT1VUID0gMSA8PCAxO1xuZXhwb3J0IGNvbnN0IFRSQU5TSVRJT05fR0xPQkFMID0gMSA8PCAyO1xuXG5leHBvcnQgY29uc3QgVEVNUExBVEVfRlJBR01FTlQgPSAxO1xuZXhwb3J0IGNvbnN0IFRFTVBMQVRFX1VTRV9JTVBPUlRfTk9ERSA9IDEgPDwgMTtcblxuZXhwb3J0IGNvbnN0IEhZRFJBVElPTl9TVEFSVCA9ICdbJztcbi8qKiB1c2VkIHRvIGluZGljYXRlIHRoYXQgYW4gYHs6ZWxzZX0uLi5gIGJsb2NrIHdhcyByZW5kZXJlZCAqL1xuZXhwb3J0IGNvbnN0IEhZRFJBVElPTl9TVEFSVF9FTFNFID0gJ1shJztcbmV4cG9ydCBjb25zdCBIWURSQVRJT05fRU5EID0gJ10nO1xuZXhwb3J0IGNvbnN0IEhZRFJBVElPTl9FUlJPUiA9IHt9O1xuXG5leHBvcnQgY29uc3QgRUxFTUVOVF9JU19OQU1FU1BBQ0VEID0gMTtcbmV4cG9ydCBjb25zdCBFTEVNRU5UX1BSRVNFUlZFX0FUVFJJQlVURV9DQVNFID0gMSA8PCAxO1xuXG5leHBvcnQgY29uc3QgVU5JTklUSUFMSVpFRCA9IFN5bWJvbCgpO1xuXG4vLyBEZXYtdGltZSBjb21wb25lbnQgcHJvcGVydGllc1xuZXhwb3J0IGNvbnN0IEZJTEVOQU1FID0gU3ltYm9sKCdmaWxlbmFtZScpO1xuZXhwb3J0IGNvbnN0IEhNUiA9IFN5bWJvbCgnaG1yJyk7XG5cbmV4cG9ydCBjb25zdCBOQU1FU1BBQ0VfSFRNTCA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbmV4cG9ydCBjb25zdCBOQU1FU1BBQ0VfU1ZHID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmV4cG9ydCBjb25zdCBOQU1FU1BBQ0VfTUFUSE1MID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuXG4vLyB3ZSB1c2UgYSBsaXN0IG9mIGlnbm9yYWJsZSBydW50aW1lIHdhcm5pbmdzIGJlY2F1c2Ugbm90IGV2ZXJ5IHJ1bnRpbWUgd2FybmluZ1xuLy8gY2FuIGJlIGlnbm9yZWQgYW5kIHdlIHdhbnQgdG8ga2VlcCB0aGUgdmFsaWRhdGlvbiBmb3Igc3ZlbHRlLWlnbm9yZSBpbiBwbGFjZVxuZXhwb3J0IGNvbnN0IElHTk9SQUJMRV9SVU5USU1FX1dBUk5JTkdTID0gLyoqIEB0eXBlIHtjb25zdH0gKi8gKFtcblx0J3N0YXRlX3NuYXBzaG90X3VuY2xvbmVhYmxlJyxcblx0J2JpbmRpbmdfcHJvcGVydHlfbm9uX3JlYWN0aXZlJyxcblx0J2h5ZHJhdGlvbl9hdHRyaWJ1dGVfY2hhbmdlZCcsXG5cdCdoeWRyYXRpb25faHRtbF9jaGFuZ2VkJyxcblx0J293bmVyc2hpcF9pbnZhbGlkX2JpbmRpbmcnLFxuXHQnb3duZXJzaGlwX2ludmFsaWRfbXV0YXRpb24nXG5dKTtcblxuLyoqXG4gKiBXaGl0ZXNwYWNlIGluc2lkZSBvbmUgb2YgdGhlc2UgZWxlbWVudHMgd2lsbCBub3QgcmVzdWx0IGluXG4gKiBhIHdoaXRlc3BhY2Ugbm9kZSBiZWluZyBjcmVhdGVkIGluIGFueSBjaXJjdW1zdGFuY2VzLiAoVGhpc1xuICogbGlzdCBpcyBhbG1vc3QgY2VydGFpbmx5IHZlcnkgaW5jb21wbGV0ZSlcbiAqIFRPRE8gdGhpcyBpcyBjdXJyZW50bHkgdW51c2VkXG4gKi9cbmV4cG9ydCBjb25zdCBFTEVNRU5UU19XSVRIT1VUX1RFWFQgPSBbJ2F1ZGlvJywgJ2RhdGFsaXN0JywgJ2RsJywgJ29wdGdyb3VwJywgJ3NlbGVjdCcsICd2aWRlbyddO1xuIiwgImNvbnN0IEFUVFJfUkVHRVggPSAvWyZcIjxdL2c7XG5jb25zdCBDT05URU5UX1JFR0VYID0gL1smPF0vZztcblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtWfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbaXNfYXR0cl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZV9odG1sKHZhbHVlLCBpc19hdHRyKSB7XG5cdGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSA/PyAnJyk7XG5cblx0Y29uc3QgcGF0dGVybiA9IGlzX2F0dHIgPyBBVFRSX1JFR0VYIDogQ09OVEVOVF9SRUdFWDtcblx0cGF0dGVybi5sYXN0SW5kZXggPSAwO1xuXG5cdGxldCBlc2NhcGVkID0gJyc7XG5cdGxldCBsYXN0ID0gMDtcblxuXHR3aGlsZSAocGF0dGVybi50ZXN0KHN0cikpIHtcblx0XHRjb25zdCBpID0gcGF0dGVybi5sYXN0SW5kZXggLSAxO1xuXHRcdGNvbnN0IGNoID0gc3RyW2ldO1xuXHRcdGVzY2FwZWQgKz0gc3RyLnN1YnN0cmluZyhsYXN0LCBpKSArIChjaCA9PT0gJyYnID8gJyZhbXA7JyA6IGNoID09PSAnXCInID8gJyZxdW90OycgOiAnJmx0OycpO1xuXHRcdGxhc3QgPSBpICsgMTtcblx0fVxuXG5cdHJldHVybiBlc2NhcGVkICsgc3RyLnN1YnN0cmluZyhsYXN0KTtcbn1cbiIsICJpbXBvcnQgeyBlc2NhcGVfaHRtbCB9IGZyb20gJy4uLy4uL2VzY2FwaW5nLmpzJztcbmltcG9ydCB7IGNsc3ggYXMgX2Nsc3ggfSBmcm9tICdjbHN4JztcblxuLyoqXG4gKiBgPGRpdiB0cmFuc2xhdGU9e2ZhbHNlfT5gIHNob3VsZCBiZSByZW5kZXJlZCBhcyBgPGRpdiB0cmFuc2xhdGU9XCJub1wiPmAgYW5kIF9ub3RfXG4gKiBgPGRpdiB0cmFuc2xhdGU9XCJmYWxzZVwiPmAsIHdoaWNoIGlzIGVxdWl2YWxlbnQgdG8gYDxkaXYgdHJhbnNsYXRlPVwieWVzXCI+YC4gVGhlcmVcbiAqIG1heSBiZSBvdGhlciBvZGQgY2FzZXMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoaXMgbGlzdCBpbiBmdXR1cmVcbiAqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBNYXA8YW55LCBzdHJpbmc+Pn1cbiAqL1xuY29uc3QgcmVwbGFjZW1lbnRzID0ge1xuXHR0cmFuc2xhdGU6IG5ldyBNYXAoW1xuXHRcdFt0cnVlLCAneWVzJ10sXG5cdFx0W2ZhbHNlLCAnbm8nXVxuXHRdKVxufTtcblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Vn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzX2Jvb2xlYW5dXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXR0cihuYW1lLCB2YWx1ZSwgaXNfYm9vbGVhbiA9IGZhbHNlKSB7XG5cdGlmICh2YWx1ZSA9PSBudWxsIHx8ICghdmFsdWUgJiYgaXNfYm9vbGVhbikpIHJldHVybiAnJztcblx0Y29uc3Qgbm9ybWFsaXplZCA9IChuYW1lIGluIHJlcGxhY2VtZW50cyAmJiByZXBsYWNlbWVudHNbbmFtZV0uZ2V0KHZhbHVlKSkgfHwgdmFsdWU7XG5cdGNvbnN0IGFzc2lnbm1lbnQgPSBpc19ib29sZWFuID8gJycgOiBgPVwiJHtlc2NhcGVfaHRtbChub3JtYWxpemVkLCB0cnVlKX1cImA7XG5cdHJldHVybiBgICR7bmFtZX0ke2Fzc2lnbm1lbnR9YDtcbn1cblxuLyoqXG4gKiBTbWFsbCB3cmFwcGVyIGFyb3VuZCBjbHN4IHRvIHByZXNlcnZlIFN2ZWx0ZSdzICh3ZWlyZCkgaGFuZGxpbmcgb2YgZmFsc3kgdmFsdWVzLlxuICogVE9ETyBTdmVsdGUgNiByZXZpc2l0IHRoaXMsIGFuZCBsaWtlbHkgdHVybiBhbGwgZmFsc3kgdmFsdWVzIGludG8gdGhlIGVtcHR5IHN0cmluZyAod2hhdCBjbHN4IGFsc28gZG9lcylcbiAqIEBwYXJhbSAge2FueX0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsc3godmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4gX2Nsc3godmFsdWUpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB2YWx1ZSA/PyAnJztcblx0fVxufVxuXG5jb25zdCB3aGl0ZXNwYWNlID0gWy4uLicgXFx0XFxuXFxyXFxmXFx1MDBhMFxcdTAwMGJcXHVmZWZmJ107XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bGx9IFtoYXNoXVxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBib29sZWFuPn0gW2RpcmVjdGl2ZXNdXG4gKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvX2NsYXNzKHZhbHVlLCBoYXNoLCBkaXJlY3RpdmVzKSB7XG5cdHZhciBjbGFzc25hbWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiAnJyArIHZhbHVlO1xuXG5cdGlmIChoYXNoKSB7XG5cdFx0Y2xhc3NuYW1lID0gY2xhc3NuYW1lID8gY2xhc3NuYW1lICsgJyAnICsgaGFzaCA6IGhhc2g7XG5cdH1cblxuXHRpZiAoZGlyZWN0aXZlcykge1xuXHRcdGZvciAodmFyIGtleSBpbiBkaXJlY3RpdmVzKSB7XG5cdFx0XHRpZiAoZGlyZWN0aXZlc1trZXldKSB7XG5cdFx0XHRcdGNsYXNzbmFtZSA9IGNsYXNzbmFtZSA/IGNsYXNzbmFtZSArICcgJyArIGtleSA6IGtleTtcblx0XHRcdH0gZWxzZSBpZiAoY2xhc3NuYW1lLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgbGVuID0ga2V5Lmxlbmd0aDtcblx0XHRcdFx0dmFyIGEgPSAwO1xuXG5cdFx0XHRcdHdoaWxlICgoYSA9IGNsYXNzbmFtZS5pbmRleE9mKGtleSwgYSkpID49IDApIHtcblx0XHRcdFx0XHR2YXIgYiA9IGEgKyBsZW47XG5cblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHQoYSA9PT0gMCB8fCB3aGl0ZXNwYWNlLmluY2x1ZGVzKGNsYXNzbmFtZVthIC0gMV0pKSAmJlxuXHRcdFx0XHRcdFx0KGIgPT09IGNsYXNzbmFtZS5sZW5ndGggfHwgd2hpdGVzcGFjZS5pbmNsdWRlcyhjbGFzc25hbWVbYl0pKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0Y2xhc3NuYW1lID0gKGEgPT09IDAgPyAnJyA6IGNsYXNzbmFtZS5zdWJzdHJpbmcoMCwgYSkpICsgY2xhc3NuYW1lLnN1YnN0cmluZyhiICsgMSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGEgPSBiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjbGFzc25hbWUgPT09ICcnID8gbnVsbCA6IGNsYXNzbmFtZTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLGFueT59IHN0eWxlc1xuICogQHBhcmFtIHtib29sZWFufSBpbXBvcnRhbnRcbiAqL1xuZnVuY3Rpb24gYXBwZW5kX3N0eWxlcyhzdHlsZXMsIGltcG9ydGFudCA9IGZhbHNlKSB7XG5cdHZhciBzZXBhcmF0b3IgPSBpbXBvcnRhbnQgPyAnICFpbXBvcnRhbnQ7JyA6ICc7Jztcblx0dmFyIGNzcyA9ICcnO1xuXG5cdGZvciAodmFyIGtleSBpbiBzdHlsZXMpIHtcblx0XHR2YXIgdmFsdWUgPSBzdHlsZXNba2V5XTtcblx0XHRpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gJycpIHtcblx0XHRcdGNzcyArPSAnICcgKyBrZXkgKyAnOiAnICsgdmFsdWUgKyBzZXBhcmF0b3I7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNzcztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9fY3NzX25hbWUobmFtZSkge1xuXHRpZiAobmFtZVswXSAhPT0gJy0nIHx8IG5hbWVbMV0gIT09ICctJykge1xuXHRcdHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cdH1cblx0cmV0dXJuIG5hbWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT4gfCBbUmVjb3JkPHN0cmluZywgYW55PiwgUmVjb3JkPHN0cmluZywgYW55Pl19IFtzdHlsZXNdXG4gKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvX3N0eWxlKHZhbHVlLCBzdHlsZXMpIHtcblx0aWYgKHN0eWxlcykge1xuXHRcdHZhciBuZXdfc3R5bGUgPSAnJztcblxuXHRcdC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZyxhbnk+IHwgdW5kZWZpbmVkfSAqL1xuXHRcdHZhciBub3JtYWxfc3R5bGVzO1xuXG5cdFx0LyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLGFueT4gfCB1bmRlZmluZWR9ICovXG5cdFx0dmFyIGltcG9ydGFudF9zdHlsZXM7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShzdHlsZXMpKSB7XG5cdFx0XHRub3JtYWxfc3R5bGVzID0gc3R5bGVzWzBdO1xuXHRcdFx0aW1wb3J0YW50X3N0eWxlcyA9IHN0eWxlc1sxXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9ybWFsX3N0eWxlcyA9IHN0eWxlcztcblx0XHR9XG5cblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuXHRcdFx0XHQucmVwbGFjZUFsbCgvXFxzKlxcL1xcKi4qP1xcKlxcL1xccyovZywgJycpXG5cdFx0XHRcdC50cmltKCk7XG5cblx0XHRcdC8qKiBAdHlwZSB7Ym9vbGVhbiB8ICdcIicgfCBcIidcIn0gKi9cblx0XHRcdHZhciBpbl9zdHIgPSBmYWxzZTtcblx0XHRcdHZhciBpbl9hcG8gPSAwO1xuXHRcdFx0dmFyIGluX2NvbW1lbnQgPSBmYWxzZTtcblxuXHRcdFx0dmFyIHJlc2VydmVkX25hbWVzID0gW107XG5cblx0XHRcdGlmIChub3JtYWxfc3R5bGVzKSB7XG5cdFx0XHRcdHJlc2VydmVkX25hbWVzLnB1c2goLi4uT2JqZWN0LmtleXMobm9ybWFsX3N0eWxlcykubWFwKHRvX2Nzc19uYW1lKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaW1wb3J0YW50X3N0eWxlcykge1xuXHRcdFx0XHRyZXNlcnZlZF9uYW1lcy5wdXNoKC4uLk9iamVjdC5rZXlzKGltcG9ydGFudF9zdHlsZXMpLm1hcCh0b19jc3NfbmFtZSkpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc3RhcnRfaW5kZXggPSAwO1xuXHRcdFx0dmFyIG5hbWVfaW5kZXggPSAtMTtcblxuXHRcdFx0Y29uc3QgbGVuID0gdmFsdWUubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHR2YXIgYyA9IHZhbHVlW2ldO1xuXG5cdFx0XHRcdGlmIChpbl9jb21tZW50KSB7XG5cdFx0XHRcdFx0aWYgKGMgPT09ICcvJyAmJiB2YWx1ZVtpIC0gMV0gPT09ICcqJykge1xuXHRcdFx0XHRcdFx0aW5fY29tbWVudCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChpbl9zdHIpIHtcblx0XHRcdFx0XHRpZiAoaW5fc3RyID09PSBjKSB7XG5cdFx0XHRcdFx0XHRpbl9zdHIgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gJy8nICYmIHZhbHVlW2kgKyAxXSA9PT0gJyonKSB7XG5cdFx0XHRcdFx0aW5fY29tbWVudCA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gJ1wiJyB8fCBjID09PSBcIidcIikge1xuXHRcdFx0XHRcdGluX3N0ciA9IGM7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gJygnKSB7XG5cdFx0XHRcdFx0aW5fYXBvKys7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gJyknKSB7XG5cdFx0XHRcdFx0aW5fYXBvLS07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIWluX2NvbW1lbnQgJiYgaW5fc3RyID09PSBmYWxzZSAmJiBpbl9hcG8gPT09IDApIHtcblx0XHRcdFx0XHRpZiAoYyA9PT0gJzonICYmIG5hbWVfaW5kZXggPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRuYW1lX2luZGV4ID0gaTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09ICc7JyB8fCBpID09PSBsZW4gLSAxKSB7XG5cdFx0XHRcdFx0XHRpZiAobmFtZV9pbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG5hbWUgPSB0b19jc3NfbmFtZSh2YWx1ZS5zdWJzdHJpbmcoc3RhcnRfaW5kZXgsIG5hbWVfaW5kZXgpLnRyaW0oKSk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCFyZXNlcnZlZF9uYW1lcy5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjICE9PSAnOycpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHR2YXIgcHJvcGVydHkgPSB2YWx1ZS5zdWJzdHJpbmcoc3RhcnRfaW5kZXgsIGkpLnRyaW0oKTtcblx0XHRcdFx0XHRcdFx0XHRuZXdfc3R5bGUgKz0gJyAnICsgcHJvcGVydHkgKyAnOyc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c3RhcnRfaW5kZXggPSBpICsgMTtcblx0XHRcdFx0XHRcdG5hbWVfaW5kZXggPSAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobm9ybWFsX3N0eWxlcykge1xuXHRcdFx0bmV3X3N0eWxlICs9IGFwcGVuZF9zdHlsZXMobm9ybWFsX3N0eWxlcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGltcG9ydGFudF9zdHlsZXMpIHtcblx0XHRcdG5ld19zdHlsZSArPSBhcHBlbmRfc3R5bGVzKGltcG9ydGFudF9zdHlsZXMsIHRydWUpO1xuXHRcdH1cblxuXHRcdG5ld19zdHlsZSA9IG5ld19zdHlsZS50cmltKCk7XG5cdFx0cmV0dXJuIG5ld19zdHlsZSA9PT0gJycgPyBudWxsIDogbmV3X3N0eWxlO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlID09IG51bGwgPyBudWxsIDogU3RyaW5nKHZhbHVlKTtcbn1cbiIsICIvLyBTdG9yZSB0aGUgcmVmZXJlbmNlcyB0byBnbG9iYWxzIGluIGNhc2Ugc29tZW9uZSB0cmllcyB0byBtb25rZXkgcGF0Y2ggdGhlc2UsIGNhdXNpbmcgdGhlIGJlbG93XG4vLyB0byBkZS1vcHQgKHRoaXMgb2NjdXJzIG9mdGVuIHdoZW4gdXNpbmcgcG9wdWxhciBleHRlbnNpb25zKS5cbmV4cG9ydCB2YXIgaXNfYXJyYXkgPSBBcnJheS5pc0FycmF5O1xuZXhwb3J0IHZhciBpbmRleF9vZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuZXhwb3J0IHZhciBhcnJheV9mcm9tID0gQXJyYXkuZnJvbTtcbmV4cG9ydCB2YXIgb2JqZWN0X2tleXMgPSBPYmplY3Qua2V5cztcbmV4cG9ydCB2YXIgZGVmaW5lX3Byb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuZXhwb3J0IHZhciBnZXRfZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5leHBvcnQgdmFyIGdldF9kZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzO1xuZXhwb3J0IHZhciBvYmplY3RfcHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmV4cG9ydCB2YXIgYXJyYXlfcHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuZXhwb3J0IHZhciBnZXRfcHJvdG90eXBlX29mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuZXhwb3J0IHZhciBpc19leHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdGhpbmdcbiAqIEByZXR1cm5zIHt0aGluZyBpcyBGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHRoaW5nKSB7XG5cdHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCBjb25zdCBub29wID0gKCkgPT4ge307XG5cbi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdGhlbi9pcy1wcm9taXNlL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBNSVQgTGljZW5zZSBodHRwczovL2dpdGh1Yi5jb20vdGhlbi9pcy1wcm9taXNlL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuLyoqXG4gKiBAdGVtcGxhdGUgW1Q9YW55XVxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJucyB7dmFsdWUgaXMgUHJvbWlzZUxpa2U8VD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG5cdHJldHVybiB0eXBlb2YgdmFsdWU/LnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bihmbikge1xuXHRyZXR1cm4gZm4oKTtcbn1cblxuLyoqIEBwYXJhbSB7QXJyYXk8KCkgPT4gdm9pZD59IGFyciAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bl9hbGwoYXJyKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0YXJyW2ldKCk7XG5cdH1cbn1cblxuLyoqXG4gKiBUT0RPIHJlcGxhY2Ugd2l0aCBQcm9taXNlLndpdGhSZXNvbHZlcnMgb25jZSBzdXBwb3J0ZWQgd2lkZWx5IGVub3VnaFxuICogQHRlbXBsYXRlIFRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmVycmVkKCkge1xuXHQvKiogQHR5cGUgeyh2YWx1ZTogVCkgPT4gdm9pZH0gKi9cblx0dmFyIHJlc29sdmU7XG5cblx0LyoqIEB0eXBlIHsocmVhc29uOiBhbnkpID0+IHZvaWR9ICovXG5cdHZhciByZWplY3Q7XG5cblx0LyoqIEB0eXBlIHtQcm9taXNlPFQ+fSAqL1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuXHRcdHJlc29sdmUgPSByZXM7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHR9KTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdHJldHVybiB7IHByb21pc2UsIHJlc29sdmUsIHJlamVjdCB9O1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1Z9IHZhbHVlXG4gKiBAcGFyYW0ge1YgfCAoKCkgPT4gVil9IGZhbGxiYWNrXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtsYXp5XVxuICogQHJldHVybnMge1Z9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWxsYmFjayh2YWx1ZSwgZmFsbGJhY2ssIGxhenkgPSBmYWxzZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZFxuXHRcdD8gbGF6eVxuXHRcdFx0PyAvKiogQHR5cGUgeygpID0+IFZ9ICovIChmYWxsYmFjaykoKVxuXHRcdFx0OiAvKiogQHR5cGUge1Z9ICovIChmYWxsYmFjaylcblx0XHQ6IHZhbHVlO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHRydWU7XG4iLCAiZXhwb3J0IGNvbnN0IERFUklWRUQgPSAxIDw8IDE7XG5leHBvcnQgY29uc3QgRUZGRUNUID0gMSA8PCAyO1xuZXhwb3J0IGNvbnN0IFJFTkRFUl9FRkZFQ1QgPSAxIDw8IDM7XG5leHBvcnQgY29uc3QgQkxPQ0tfRUZGRUNUID0gMSA8PCA0O1xuZXhwb3J0IGNvbnN0IEJSQU5DSF9FRkZFQ1QgPSAxIDw8IDU7XG5leHBvcnQgY29uc3QgUk9PVF9FRkZFQ1QgPSAxIDw8IDY7XG5leHBvcnQgY29uc3QgQk9VTkRBUllfRUZGRUNUID0gMSA8PCA3O1xuZXhwb3J0IGNvbnN0IFVOT1dORUQgPSAxIDw8IDg7XG5leHBvcnQgY29uc3QgRElTQ09OTkVDVEVEID0gMSA8PCA5O1xuZXhwb3J0IGNvbnN0IENMRUFOID0gMSA8PCAxMDtcbmV4cG9ydCBjb25zdCBESVJUWSA9IDEgPDwgMTE7XG5leHBvcnQgY29uc3QgTUFZQkVfRElSVFkgPSAxIDw8IDEyO1xuZXhwb3J0IGNvbnN0IElORVJUID0gMSA8PCAxMztcbmV4cG9ydCBjb25zdCBERVNUUk9ZRUQgPSAxIDw8IDE0O1xuZXhwb3J0IGNvbnN0IEVGRkVDVF9SQU4gPSAxIDw8IDE1O1xuLyoqICdUcmFuc3BhcmVudCcgZWZmZWN0cyBkbyBub3QgY3JlYXRlIGEgdHJhbnNpdGlvbiBib3VuZGFyeSAqL1xuZXhwb3J0IGNvbnN0IEVGRkVDVF9UUkFOU1BBUkVOVCA9IDEgPDwgMTY7XG4vKiogU3ZlbHRlIDQgbGVnYWN5IG1vZGUgcHJvcHMgbmVlZCB0byBiZSBoYW5kbGVkIHdpdGggZGVyaXZlZHMgYW5kIGJlIHJlY29nbml6ZWQgZWxzZXdoZXJlLCBoZW5jZSB0aGUgZGVkaWNhdGVkIGZsYWcgKi9cbmV4cG9ydCBjb25zdCBMRUdBQ1lfREVSSVZFRF9QUk9QID0gMSA8PCAxNztcbmV4cG9ydCBjb25zdCBJTlNQRUNUX0VGRkVDVCA9IDEgPDwgMTg7XG5leHBvcnQgY29uc3QgSEVBRF9FRkZFQ1QgPSAxIDw8IDE5O1xuZXhwb3J0IGNvbnN0IEVGRkVDVF9IQVNfREVSSVZFRCA9IDEgPDwgMjA7XG5leHBvcnQgY29uc3QgRUZGRUNUX0lTX1VQREFUSU5HID0gMSA8PCAyMTtcblxuZXhwb3J0IGNvbnN0IFNUQVRFX1NZTUJPTCA9IFN5bWJvbCgnJHN0YXRlJyk7XG5leHBvcnQgY29uc3QgTEVHQUNZX1BST1BTID0gU3ltYm9sKCdsZWdhY3kgcHJvcHMnKTtcbmV4cG9ydCBjb25zdCBMT0FESU5HX0FUVFJfU1lNQk9MID0gU3ltYm9sKCcnKTtcbiIsICIvKiogQGltcG9ydCB7IEVxdWFscyB9IGZyb20gJyNjbGllbnQnICovXG5cbi8qKiBAdHlwZSB7RXF1YWxzfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09IHRoaXMudjtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3Vua25vd259IGFcbiAqIEBwYXJhbSB7dW5rbm93bn0gYlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG5cdHJldHVybiBhICE9IGFcblx0XHQ/IGIgPT0gYlxuXHRcdDogYSAhPT0gYiB8fCAoYSAhPT0gbnVsbCAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bn0gYVxuICogQHBhcmFtIHt1bmtub3dufSBiXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG5cdHJldHVybiBhICE9PSBiO1xufVxuXG4vKiogQHR5cGUge0VxdWFsc30gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYWZlX2VxdWFscyh2YWx1ZSkge1xuXHRyZXR1cm4gIXNhZmVfbm90X2VxdWFsKHZhbHVlLCB0aGlzLnYpO1xufVxuIiwgIi8qIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgc2NyaXB0cy9wcm9jZXNzLW1lc3NhZ2VzL2luZGV4LmpzLiBEbyBub3QgZWRpdCEgKi9cblxuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5cbi8qKlxuICogVXNpbmcgYGJpbmQ6dmFsdWVgIHRvZ2V0aGVyIHdpdGggYSBjaGVja2JveCBpbnB1dCBpcyBub3QgYWxsb3dlZC4gVXNlIGBiaW5kOmNoZWNrZWRgIGluc3RlYWRcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRfaW52YWxpZF9jaGVja2JveF92YWx1ZSgpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBiaW5kX2ludmFsaWRfY2hlY2tib3hfdmFsdWVcXG5Vc2luZyBcXGBiaW5kOnZhbHVlXFxgIHRvZ2V0aGVyIHdpdGggYSBjaGVja2JveCBpbnB1dCBpcyBub3QgYWxsb3dlZC4gVXNlIFxcYGJpbmQ6Y2hlY2tlZFxcYCBpbnN0ZWFkXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYmluZF9pbnZhbGlkX2NoZWNrYm94X3ZhbHVlYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9iaW5kX2ludmFsaWRfY2hlY2tib3hfdmFsdWVgKTtcblx0fVxufVxuXG4vKipcbiAqIENvbXBvbmVudCAlY29tcG9uZW50JSBoYXMgYW4gZXhwb3J0IG5hbWVkIGAla2V5JWAgdGhhdCBhIGNvbnN1bWVyIGNvbXBvbmVudCBpcyB0cnlpbmcgdG8gYWNjZXNzIHVzaW5nIGBiaW5kOiVrZXklYCwgd2hpY2ggaXMgZGlzYWxsb3dlZC4gSW5zdGVhZCwgdXNlIGBiaW5kOnRoaXNgIChlLmcuIGA8JW5hbWUlIGJpbmQ6dGhpcz17Y29tcG9uZW50fSAvPmApIGFuZCB0aGVuIGFjY2VzcyB0aGUgcHJvcGVydHkgb24gdGhlIGJvdW5kIGNvbXBvbmVudCBpbnN0YW5jZSAoZS5nLiBgY29tcG9uZW50LiVrZXklYClcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kX2ludmFsaWRfZXhwb3J0KGNvbXBvbmVudCwga2V5LCBuYW1lKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgYmluZF9pbnZhbGlkX2V4cG9ydFxcbkNvbXBvbmVudCAke2NvbXBvbmVudH0gaGFzIGFuIGV4cG9ydCBuYW1lZCBcXGAke2tleX1cXGAgdGhhdCBhIGNvbnN1bWVyIGNvbXBvbmVudCBpcyB0cnlpbmcgdG8gYWNjZXNzIHVzaW5nIFxcYGJpbmQ6JHtrZXl9XFxgLCB3aGljaCBpcyBkaXNhbGxvd2VkLiBJbnN0ZWFkLCB1c2UgXFxgYmluZDp0aGlzXFxgIChlLmcuIFxcYDwke25hbWV9IGJpbmQ6dGhpcz17Y29tcG9uZW50fSAvPlxcYCkgYW5kIHRoZW4gYWNjZXNzIHRoZSBwcm9wZXJ0eSBvbiB0aGUgYm91bmQgY29tcG9uZW50IGluc3RhbmNlIChlLmcuIFxcYGNvbXBvbmVudC4ke2tleX1cXGApXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYmluZF9pbnZhbGlkX2V4cG9ydGApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYmluZF9pbnZhbGlkX2V4cG9ydGApO1xuXHR9XG59XG5cbi8qKlxuICogQSBjb21wb25lbnQgaXMgYXR0ZW1wdGluZyB0byBiaW5kIHRvIGEgbm9uLWJpbmRhYmxlIHByb3BlcnR5IGAla2V5JWAgYmVsb25naW5nIHRvICVjb21wb25lbnQlIChpLmUuIGA8JW5hbWUlIGJpbmQ6JWtleSU9ey4uLn0+YCkuIFRvIG1hcmsgYSBwcm9wZXJ0eSBhcyBiaW5kYWJsZTogYGxldCB7ICVrZXklID0gJGJpbmRhYmxlKCkgfSA9ICRwcm9wcygpYFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRfbm90X2JpbmRhYmxlKGtleSwgY29tcG9uZW50LCBuYW1lKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgYmluZF9ub3RfYmluZGFibGVcXG5BIGNvbXBvbmVudCBpcyBhdHRlbXB0aW5nIHRvIGJpbmQgdG8gYSBub24tYmluZGFibGUgcHJvcGVydHkgXFxgJHtrZXl9XFxgIGJlbG9uZ2luZyB0byAke2NvbXBvbmVudH0gKGkuZS4gXFxgPCR7bmFtZX0gYmluZDoke2tleX09ey4uLn0+XFxgKS4gVG8gbWFyayBhIHByb3BlcnR5IGFzIGJpbmRhYmxlOiBcXGBsZXQgeyAke2tleX0gPSAkYmluZGFibGUoKSB9ID0gJHByb3BzKClcXGBcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9iaW5kX25vdF9iaW5kYWJsZWApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYmluZF9ub3RfYmluZGFibGVgKTtcblx0fVxufVxuXG4vKipcbiAqIENhbGxpbmcgYCVtZXRob2QlYCBvbiBhIGNvbXBvbmVudCBpbnN0YW5jZSAob2YgJWNvbXBvbmVudCUpIGlzIG5vIGxvbmdlciB2YWxpZCBpbiBTdmVsdGUgNVxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudFxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50X2FwaV9jaGFuZ2VkKG1ldGhvZCwgY29tcG9uZW50KSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgY29tcG9uZW50X2FwaV9jaGFuZ2VkXFxuQ2FsbGluZyBcXGAke21ldGhvZH1cXGAgb24gYSBjb21wb25lbnQgaW5zdGFuY2UgKG9mICR7Y29tcG9uZW50fSkgaXMgbm8gbG9uZ2VyIHZhbGlkIGluIFN2ZWx0ZSA1XFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvY29tcG9uZW50X2FwaV9jaGFuZ2VkYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9jb21wb25lbnRfYXBpX2NoYW5nZWRgKTtcblx0fVxufVxuXG4vKipcbiAqIEF0dGVtcHRlZCB0byBpbnN0YW50aWF0ZSAlY29tcG9uZW50JSB3aXRoIGBuZXcgJW5hbWUlYCwgd2hpY2ggaXMgbm8gbG9uZ2VyIHZhbGlkIGluIFN2ZWx0ZSA1LiBJZiB0aGlzIGNvbXBvbmVudCBpcyBub3QgdW5kZXIgeW91ciBjb250cm9sLCBzZXQgdGhlIGBjb21wYXRpYmlsaXR5LmNvbXBvbmVudEFwaWAgY29tcGlsZXIgb3B0aW9uIHRvIGA0YCB0byBrZWVwIGl0IHdvcmtpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50X2FwaV9pbnZhbGlkX25ldyhjb21wb25lbnQsIG5hbWUpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBjb21wb25lbnRfYXBpX2ludmFsaWRfbmV3XFxuQXR0ZW1wdGVkIHRvIGluc3RhbnRpYXRlICR7Y29tcG9uZW50fSB3aXRoIFxcYG5ldyAke25hbWV9XFxgLCB3aGljaCBpcyBubyBsb25nZXIgdmFsaWQgaW4gU3ZlbHRlIDUuIElmIHRoaXMgY29tcG9uZW50IGlzIG5vdCB1bmRlciB5b3VyIGNvbnRyb2wsIHNldCB0aGUgXFxgY29tcGF0aWJpbGl0eS5jb21wb25lbnRBcGlcXGAgY29tcGlsZXIgb3B0aW9uIHRvIFxcYDRcXGAgdG8ga2VlcCBpdCB3b3JraW5nLlxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2NvbXBvbmVudF9hcGlfaW52YWxpZF9uZXdgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2NvbXBvbmVudF9hcGlfaW52YWxpZF9uZXdgKTtcblx0fVxufVxuXG4vKipcbiAqIEEgZGVyaXZlZCB2YWx1ZSBjYW5ub3QgcmVmZXJlbmNlIGl0c2VsZiByZWN1cnNpdmVseVxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZlZF9yZWZlcmVuY2VzX3NlbGYoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgZGVyaXZlZF9yZWZlcmVuY2VzX3NlbGZcXG5BIGRlcml2ZWQgdmFsdWUgY2Fubm90IHJlZmVyZW5jZSBpdHNlbGYgcmVjdXJzaXZlbHlcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9kZXJpdmVkX3JlZmVyZW5jZXNfc2VsZmApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZGVyaXZlZF9yZWZlcmVuY2VzX3NlbGZgKTtcblx0fVxufVxuXG4vKipcbiAqIEtleWVkIGVhY2ggYmxvY2sgaGFzIGR1cGxpY2F0ZSBrZXkgYCV2YWx1ZSVgIGF0IGluZGV4ZXMgJWElIGFuZCAlYiVcbiAqIEBwYXJhbSB7c3RyaW5nfSBhXG4gKiBAcGFyYW0ge3N0cmluZ30gYlxuICogQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsfSBbdmFsdWVdXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlYWNoX2tleV9kdXBsaWNhdGUoYSwgYiwgdmFsdWUpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBlYWNoX2tleV9kdXBsaWNhdGVcXG4ke3ZhbHVlID8gYEtleWVkIGVhY2ggYmxvY2sgaGFzIGR1cGxpY2F0ZSBrZXkgXFxgJHt2YWx1ZX1cXGAgYXQgaW5kZXhlcyAke2F9IGFuZCAke2J9YCA6IGBLZXllZCBlYWNoIGJsb2NrIGhhcyBkdXBsaWNhdGUga2V5IGF0IGluZGV4ZXMgJHthfSBhbmQgJHtifWB9XFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZWFjaF9rZXlfZHVwbGljYXRlYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9lYWNoX2tleV9kdXBsaWNhdGVgKTtcblx0fVxufVxuXG4vKipcbiAqIGAlcnVuZSVgIGNhbm5vdCBiZSB1c2VkIGluc2lkZSBhbiBlZmZlY3QgY2xlYW51cCBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHJ1bmVcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVmZmVjdF9pbl90ZWFyZG93bihydW5lKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgZWZmZWN0X2luX3RlYXJkb3duXFxuXFxgJHtydW5lfVxcYCBjYW5ub3QgYmUgdXNlZCBpbnNpZGUgYW4gZWZmZWN0IGNsZWFudXAgZnVuY3Rpb25cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9lZmZlY3RfaW5fdGVhcmRvd25gKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2VmZmVjdF9pbl90ZWFyZG93bmApO1xuXHR9XG59XG5cbi8qKlxuICogRWZmZWN0IGNhbm5vdCBiZSBjcmVhdGVkIGluc2lkZSBhIGAkZGVyaXZlZGAgdmFsdWUgdGhhdCB3YXMgbm90IGl0c2VsZiBjcmVhdGVkIGluc2lkZSBhbiBlZmZlY3RcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVmZmVjdF9pbl91bm93bmVkX2Rlcml2ZWQoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgZWZmZWN0X2luX3Vub3duZWRfZGVyaXZlZFxcbkVmZmVjdCBjYW5ub3QgYmUgY3JlYXRlZCBpbnNpZGUgYSBcXGAkZGVyaXZlZFxcYCB2YWx1ZSB0aGF0IHdhcyBub3QgaXRzZWxmIGNyZWF0ZWQgaW5zaWRlIGFuIGVmZmVjdFxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2VmZmVjdF9pbl91bm93bmVkX2Rlcml2ZWRgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2VmZmVjdF9pbl91bm93bmVkX2Rlcml2ZWRgKTtcblx0fVxufVxuXG4vKipcbiAqIGAlcnVuZSVgIGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIGFuIGVmZmVjdCAoZS5nLiBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uKVxuICogQHBhcmFtIHtzdHJpbmd9IHJ1bmVcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVmZmVjdF9vcnBoYW4ocnVuZSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGVmZmVjdF9vcnBoYW5cXG5cXGAke3J1bmV9XFxgIGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIGFuIGVmZmVjdCAoZS5nLiBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uKVxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2VmZmVjdF9vcnBoYW5gKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2VmZmVjdF9vcnBoYW5gKTtcblx0fVxufVxuXG4vKipcbiAqIE1heGltdW0gdXBkYXRlIGRlcHRoIGV4Y2VlZGVkLiBUaGlzIGNhbiBoYXBwZW4gd2hlbiBhIHJlYWN0aXZlIGJsb2NrIG9yIGVmZmVjdCByZXBlYXRlZGx5IHNldHMgYSBuZXcgdmFsdWUuIFN2ZWx0ZSBsaW1pdHMgdGhlIG51bWJlciBvZiBuZXN0ZWQgdXBkYXRlcyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3BzXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlZmZlY3RfdXBkYXRlX2RlcHRoX2V4Y2VlZGVkKCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGVmZmVjdF91cGRhdGVfZGVwdGhfZXhjZWVkZWRcXG5NYXhpbXVtIHVwZGF0ZSBkZXB0aCBleGNlZWRlZC4gVGhpcyBjYW4gaGFwcGVuIHdoZW4gYSByZWFjdGl2ZSBibG9jayBvciBlZmZlY3QgcmVwZWF0ZWRseSBzZXRzIGEgbmV3IHZhbHVlLiBTdmVsdGUgbGltaXRzIHRoZSBudW1iZXIgb2YgbmVzdGVkIHVwZGF0ZXMgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wc1xcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2VmZmVjdF91cGRhdGVfZGVwdGhfZXhjZWVkZWRgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2VmZmVjdF91cGRhdGVfZGVwdGhfZXhjZWVkZWRgKTtcblx0fVxufVxuXG4vKipcbiAqIEZhaWxlZCB0byBoeWRyYXRlIHRoZSBhcHBsaWNhdGlvblxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0aW9uX2ZhaWxlZCgpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBoeWRyYXRpb25fZmFpbGVkXFxuRmFpbGVkIHRvIGh5ZHJhdGUgdGhlIGFwcGxpY2F0aW9uXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaHlkcmF0aW9uX2ZhaWxlZGApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaHlkcmF0aW9uX2ZhaWxlZGApO1xuXHR9XG59XG5cbi8qKlxuICogQ291bGQgbm90IGB7QHJlbmRlcn1gIHNuaXBwZXQgZHVlIHRvIHRoZSBleHByZXNzaW9uIGJlaW5nIGBudWxsYCBvciBgdW5kZWZpbmVkYC4gQ29uc2lkZXIgdXNpbmcgb3B0aW9uYWwgY2hhaW5pbmcgYHtAcmVuZGVyIHNuaXBwZXQ/LigpfWBcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRfc25pcHBldCgpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBpbnZhbGlkX3NuaXBwZXRcXG5Db3VsZCBub3QgXFxge0ByZW5kZXJ9XFxgIHNuaXBwZXQgZHVlIHRvIHRoZSBleHByZXNzaW9uIGJlaW5nIFxcYG51bGxcXGAgb3IgXFxgdW5kZWZpbmVkXFxgLiBDb25zaWRlciB1c2luZyBvcHRpb25hbCBjaGFpbmluZyBcXGB7QHJlbmRlciBzbmlwcGV0Py4oKX1cXGBcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9pbnZhbGlkX3NuaXBwZXRgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2ludmFsaWRfc25pcHBldGApO1xuXHR9XG59XG5cbi8qKlxuICogYCVuYW1lJSguLi4pYCBjYW5ub3QgYmUgdXNlZCBpbiBydW5lcyBtb2RlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlmZWN5Y2xlX2xlZ2FjeV9vbmx5KG5hbWUpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBsaWZlY3ljbGVfbGVnYWN5X29ubHlcXG5cXGAke25hbWV9KC4uLilcXGAgY2Fubm90IGJlIHVzZWQgaW4gcnVuZXMgbW9kZVxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2xpZmVjeWNsZV9sZWdhY3lfb25seWApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvbGlmZWN5Y2xlX2xlZ2FjeV9vbmx5YCk7XG5cdH1cbn1cblxuLyoqXG4gKiBDYW5ub3QgZG8gYGJpbmQ6JWtleSU9e3VuZGVmaW5lZH1gIHdoZW4gYCVrZXklYCBoYXMgYSBmYWxsYmFjayB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvcHNfaW52YWxpZF92YWx1ZShrZXkpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBwcm9wc19pbnZhbGlkX3ZhbHVlXFxuQ2Fubm90IGRvIFxcYGJpbmQ6JHtrZXl9PXt1bmRlZmluZWR9XFxgIHdoZW4gXFxgJHtrZXl9XFxgIGhhcyBhIGZhbGxiYWNrIHZhbHVlXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvcHJvcHNfaW52YWxpZF92YWx1ZWApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvcHJvcHNfaW52YWxpZF92YWx1ZWApO1xuXHR9XG59XG5cbi8qKlxuICogUmVzdCBlbGVtZW50IHByb3BlcnRpZXMgb2YgYCRwcm9wcygpYCBzdWNoIGFzIGAlcHJvcGVydHklYCBhcmUgcmVhZG9ubHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eVxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvcHNfcmVzdF9yZWFkb25seShwcm9wZXJ0eSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYHByb3BzX3Jlc3RfcmVhZG9ubHlcXG5SZXN0IGVsZW1lbnQgcHJvcGVydGllcyBvZiBcXGAkcHJvcHMoKVxcYCBzdWNoIGFzIFxcYCR7cHJvcGVydHl9XFxgIGFyZSByZWFkb25seVxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL3Byb3BzX3Jlc3RfcmVhZG9ubHlgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL3Byb3BzX3Jlc3RfcmVhZG9ubHlgKTtcblx0fVxufVxuXG4vKipcbiAqIFRoZSBgJXJ1bmUlYCBydW5lIGlzIG9ubHkgYXZhaWxhYmxlIGluc2lkZSBgLnN2ZWx0ZWAgYW5kIGAuc3ZlbHRlLmpzL3RzYCBmaWxlc1xuICogQHBhcmFtIHtzdHJpbmd9IHJ1bmVcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bmVfb3V0c2lkZV9zdmVsdGUocnVuZSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYHJ1bmVfb3V0c2lkZV9zdmVsdGVcXG5UaGUgXFxgJHtydW5lfVxcYCBydW5lIGlzIG9ubHkgYXZhaWxhYmxlIGluc2lkZSBcXGAuc3ZlbHRlXFxgIGFuZCBcXGAuc3ZlbHRlLmpzL3RzXFxgIGZpbGVzXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvcnVuZV9vdXRzaWRlX3N2ZWx0ZWApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvcnVuZV9vdXRzaWRlX3N2ZWx0ZWApO1xuXHR9XG59XG5cbi8qKlxuICogUHJvcGVydHkgZGVzY3JpcHRvcnMgZGVmaW5lZCBvbiBgJHN0YXRlYCBvYmplY3RzIG11c3QgY29udGFpbiBgdmFsdWVgIGFuZCBhbHdheXMgYmUgYGVudW1lcmFibGVgLCBgY29uZmlndXJhYmxlYCBhbmQgYHdyaXRhYmxlYC5cbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlX2Rlc2NyaXB0b3JzX2ZpeGVkKCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYHN0YXRlX2Rlc2NyaXB0b3JzX2ZpeGVkXFxuUHJvcGVydHkgZGVzY3JpcHRvcnMgZGVmaW5lZCBvbiBcXGAkc3RhdGVcXGAgb2JqZWN0cyBtdXN0IGNvbnRhaW4gXFxgdmFsdWVcXGAgYW5kIGFsd2F5cyBiZSBcXGBlbnVtZXJhYmxlXFxgLCBcXGBjb25maWd1cmFibGVcXGAgYW5kIFxcYHdyaXRhYmxlXFxgLlxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL3N0YXRlX2Rlc2NyaXB0b3JzX2ZpeGVkYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9zdGF0ZV9kZXNjcmlwdG9yc19maXhlZGApO1xuXHR9XG59XG5cbi8qKlxuICogQ2Fubm90IHNldCBwcm90b3R5cGUgb2YgYCRzdGF0ZWAgb2JqZWN0XG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZV9wcm90b3R5cGVfZml4ZWQoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgc3RhdGVfcHJvdG90eXBlX2ZpeGVkXFxuQ2Fubm90IHNldCBwcm90b3R5cGUgb2YgXFxgJHN0YXRlXFxgIG9iamVjdFxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL3N0YXRlX3Byb3RvdHlwZV9maXhlZGApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvc3RhdGVfcHJvdG90eXBlX2ZpeGVkYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGluZyBzdGF0ZSBpbnNpZGUgYSBkZXJpdmVkIG9yIGEgdGVtcGxhdGUgZXhwcmVzc2lvbiBpcyBmb3JiaWRkZW4uIElmIHRoZSB2YWx1ZSBzaG91bGQgbm90IGJlIHJlYWN0aXZlLCBkZWNsYXJlIGl0IHdpdGhvdXQgYCRzdGF0ZWBcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlX3Vuc2FmZV9tdXRhdGlvbigpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBzdGF0ZV91bnNhZmVfbXV0YXRpb25cXG5VcGRhdGluZyBzdGF0ZSBpbnNpZGUgYSBkZXJpdmVkIG9yIGEgdGVtcGxhdGUgZXhwcmVzc2lvbiBpcyBmb3JiaWRkZW4uIElmIHRoZSB2YWx1ZSBzaG91bGQgbm90IGJlIHJlYWN0aXZlLCBkZWNsYXJlIGl0IHdpdGhvdXQgXFxgJHN0YXRlXFxgXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvc3RhdGVfdW5zYWZlX211dGF0aW9uYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9zdGF0ZV91bnNhZmVfbXV0YXRpb25gKTtcblx0fVxufSIsICJleHBvcnQgbGV0IGxlZ2FjeV9tb2RlX2ZsYWcgPSBmYWxzZTtcbmV4cG9ydCBsZXQgdHJhY2luZ19tb2RlX2ZsYWcgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZV9sZWdhY3lfbW9kZV9mbGFnKCkge1xuXHRsZWdhY3lfbW9kZV9mbGFnID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZV90cmFjaW5nX21vZGVfZmxhZygpIHtcblx0dHJhY2luZ19tb2RlX2ZsYWcgPSB0cnVlO1xufVxuIiwgIi8qKiBAaW1wb3J0IHsgRGVyaXZlZCwgUmVhY3Rpb24sIFZhbHVlIH0gZnJvbSAnI2NsaWVudCcgKi9cbmltcG9ydCB7IFVOSU5JVElBTElaRUQgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgc25hcHNob3QgfSBmcm9tICcuLi8uLi9zaGFyZWQvY2xvbmUuanMnO1xuaW1wb3J0IHsgZGVmaW5lX3Byb3BlcnR5IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7IERFUklWRUQsIFNUQVRFX1NZTUJPTCB9IGZyb20gJyNjbGllbnQvY29uc3RhbnRzJztcbmltcG9ydCB7IGVmZmVjdF90cmFja2luZyB9IGZyb20gJy4uL3JlYWN0aXZpdHkvZWZmZWN0cy5qcyc7XG5pbXBvcnQgeyBhY3RpdmVfcmVhY3Rpb24sIGNhcHR1cmVkX3NpZ25hbHMsIHNldF9jYXB0dXJlZF9zaWduYWxzLCB1bnRyYWNrIH0gZnJvbSAnLi4vcnVudGltZS5qcyc7XG5cbi8qKiBAdHlwZSB7IGFueSB9ICovXG5leHBvcnQgbGV0IHRyYWNpbmdfZXhwcmVzc2lvbnMgPSBudWxsO1xuXG4vKipcbiAqIEBwYXJhbSB7IFZhbHVlIH0gc2lnbmFsXG4gKiBAcGFyYW0geyB7IHJlYWQ6IEVycm9yW10gfSB9IFtlbnRyeV1cbiAqL1xuZnVuY3Rpb24gbG9nX2VudHJ5KHNpZ25hbCwgZW50cnkpIHtcblx0Y29uc3QgZGVidWcgPSBzaWduYWwuZGVidWc7XG5cdGNvbnN0IHZhbHVlID0gc2lnbmFsLnRyYWNlX25lZWRfaW5jcmVhc2UgPyBzaWduYWwudHJhY2VfdiA6IHNpZ25hbC52O1xuXG5cdGlmICh2YWx1ZSA9PT0gVU5JTklUSUFMSVpFRCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChkZWJ1Zykge1xuXHRcdHZhciBwcmV2aW91c19jYXB0dXJlZF9zaWduYWxzID0gY2FwdHVyZWRfc2lnbmFscztcblx0XHR2YXIgY2FwdHVyZWQgPSBuZXcgU2V0KCk7XG5cdFx0c2V0X2NhcHR1cmVkX3NpZ25hbHMoY2FwdHVyZWQpO1xuXHRcdHRyeSB7XG5cdFx0XHR1bnRyYWNrKCgpID0+IHtcblx0XHRcdFx0ZGVidWcoKTtcblx0XHRcdH0pO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRzZXRfY2FwdHVyZWRfc2lnbmFscyhwcmV2aW91c19jYXB0dXJlZF9zaWduYWxzKTtcblx0XHR9XG5cdFx0aWYgKGNhcHR1cmVkLnNpemUgPiAwKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGRlcCBvZiBjYXB0dXJlZCkge1xuXHRcdFx0XHRsb2dfZW50cnkoZGVwKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHRjb25zdCB0eXBlID0gKHNpZ25hbC5mICYgREVSSVZFRCkgIT09IDAgPyAnJGRlcml2ZWQnIDogJyRzdGF0ZSc7XG5cdGNvbnN0IGN1cnJlbnRfcmVhY3Rpb24gPSAvKiogQHR5cGUge1JlYWN0aW9ufSAqLyAoYWN0aXZlX3JlYWN0aW9uKTtcblx0Y29uc3QgZGlydHkgPSBzaWduYWwud3YgPiBjdXJyZW50X3JlYWN0aW9uLnd2IHx8IGN1cnJlbnRfcmVhY3Rpb24ud3YgPT09IDA7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0Y29uc29sZS5ncm91cENvbGxhcHNlZChcblx0XHRgJWMke3R5cGV9YCxcblx0XHRkaXJ0eSA/ICdjb2xvcjogQ29ybmZsb3dlckJsdWU7IGZvbnQtd2VpZ2h0OiBib2xkJyA6ICdjb2xvcjogZ3JleTsgZm9udC13ZWlnaHQ6IGJvbGQnLFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwgJiYgU1RBVEVfU1lNQk9MIGluIHZhbHVlXG5cdFx0XHQ/IHNuYXBzaG90KHZhbHVlLCB0cnVlKVxuXHRcdFx0OiB2YWx1ZVxuXHQpO1xuXG5cdGlmICh0eXBlID09PSAnJGRlcml2ZWQnKSB7XG5cdFx0Y29uc3QgZGVwcyA9IG5ldyBTZXQoLyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAoc2lnbmFsKS5kZXBzKTtcblx0XHRmb3IgKGNvbnN0IGRlcCBvZiBkZXBzKSB7XG5cdFx0XHRsb2dfZW50cnkoZGVwKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoc2lnbmFsLmNyZWF0ZWQpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdGNvbnNvbGUubG9nKHNpZ25hbC5jcmVhdGVkKTtcblx0fVxuXG5cdGlmIChzaWduYWwudXBkYXRlZCkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0Y29uc29sZS5sb2coc2lnbmFsLnVwZGF0ZWQpO1xuXHR9XG5cblx0Y29uc3QgcmVhZCA9IGVudHJ5Py5yZWFkO1xuXG5cdGlmIChyZWFkICYmIHJlYWQubGVuZ3RoID4gMCkge1xuXHRcdGZvciAodmFyIHN0YWNrIG9mIHJlYWQpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0XHRjb25zb2xlLmxvZyhzdGFjayk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0Y29uc29sZS5ncm91cEVuZCgpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0geygpID0+IHN0cmluZ30gbGFiZWxcbiAqIEBwYXJhbSB7KCkgPT4gVH0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYWNlKGxhYmVsLCBmbikge1xuXHR2YXIgcHJldmlvdXNseV90cmFjaW5nX2V4cHJlc3Npb25zID0gdHJhY2luZ19leHByZXNzaW9ucztcblx0dHJ5IHtcblx0XHR0cmFjaW5nX2V4cHJlc3Npb25zID0geyBlbnRyaWVzOiBuZXcgTWFwKCksIHJlYWN0aW9uOiBhY3RpdmVfcmVhY3Rpb24gfTtcblxuXHRcdHZhciBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdHZhciB2YWx1ZSA9IGZuKCk7XG5cdFx0dmFyIHRpbWUgPSAocGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCkudG9GaXhlZCgyKTtcblxuXHRcdGlmICghZWZmZWN0X3RyYWNraW5nKCkpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0XHRjb25zb2xlLmxvZyhgJHtsYWJlbCgpfSAlY3JhbiBvdXRzaWRlIG9mIGFuIGVmZmVjdCAoJHt0aW1lfW1zKWAsICdjb2xvcjogZ3JleScpO1xuXHRcdH0gZWxzZSBpZiAodHJhY2luZ19leHByZXNzaW9ucy5lbnRyaWVzLnNpemUgPT09IDApIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0XHRjb25zb2xlLmxvZyhgJHtsYWJlbCgpfSAlY25vIHJlYWN0aXZlIGRlcGVuZGVuY2llcyAoJHt0aW1lfW1zKWAsICdjb2xvcjogZ3JleScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0Y29uc29sZS5ncm91cChgJHtsYWJlbCgpfSAlYygke3RpbWV9bXMpYCwgJ2NvbG9yOiBncmV5Jyk7XG5cblx0XHRcdHZhciBlbnRyaWVzID0gdHJhY2luZ19leHByZXNzaW9ucy5lbnRyaWVzO1xuXG5cdFx0XHR0cmFjaW5nX2V4cHJlc3Npb25zID0gbnVsbDtcblxuXHRcdFx0Zm9yIChjb25zdCBbc2lnbmFsLCBlbnRyeV0gb2YgZW50cmllcykge1xuXHRcdFx0XHRsb2dfZW50cnkoc2lnbmFsLCBlbnRyeSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0Y29uc29sZS5ncm91cEVuZCgpO1xuXHRcdH1cblxuXHRcdGlmIChwcmV2aW91c2x5X3RyYWNpbmdfZXhwcmVzc2lvbnMgIT09IG51bGwgJiYgdHJhY2luZ19leHByZXNzaW9ucyAhPT0gbnVsbCkge1xuXHRcdFx0Zm9yIChjb25zdCBbc2lnbmFsLCBlbnRyeV0gb2YgdHJhY2luZ19leHByZXNzaW9ucy5lbnRyaWVzKSB7XG5cdFx0XHRcdHZhciBwcmV2X2VudHJ5ID0gcHJldmlvdXNseV90cmFjaW5nX2V4cHJlc3Npb25zLmdldChzaWduYWwpO1xuXG5cdFx0XHRcdGlmIChwcmV2X2VudHJ5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRwcmV2aW91c2x5X3RyYWNpbmdfZXhwcmVzc2lvbnMuc2V0KHNpZ25hbCwgZW50cnkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHByZXZfZW50cnkucmVhZC5wdXNoKC4uLmVudHJ5LnJlYWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9IGZpbmFsbHkge1xuXHRcdHRyYWNpbmdfZXhwcmVzc2lvbnMgPSBwcmV2aW91c2x5X3RyYWNpbmdfZXhwcmVzc2lvbnM7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9zdGFjayhsYWJlbCkge1xuXHRsZXQgZXJyb3IgPSBFcnJvcigpO1xuXHRjb25zdCBzdGFjayA9IGVycm9yLnN0YWNrO1xuXG5cdGlmIChzdGFjaykge1xuXHRcdGNvbnN0IGxpbmVzID0gc3RhY2suc3BsaXQoJ1xcbicpO1xuXHRcdGNvbnN0IG5ld19saW5lcyA9IFsnXFxuJ107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBsaW5lID0gbGluZXNbaV07XG5cblx0XHRcdGlmIChsaW5lID09PSAnRXJyb3InKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxpbmUuaW5jbHVkZXMoJ3ZhbGlkYXRlX2VhY2hfa2V5cycpKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxpbmUuaW5jbHVkZXMoJ3N2ZWx0ZS9zcmMvaW50ZXJuYWwnKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdG5ld19saW5lcy5wdXNoKGxpbmUpO1xuXHRcdH1cblxuXHRcdGlmIChuZXdfbGluZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRkZWZpbmVfcHJvcGVydHkoZXJyb3IsICdzdGFjaycsIHtcblx0XHRcdHZhbHVlOiBuZXdfbGluZXMuam9pbignXFxuJylcblx0XHR9KTtcblxuXHRcdGRlZmluZV9wcm9wZXJ0eShlcnJvciwgJ25hbWUnLCB7XG5cdFx0XHQvLyAnRXJyb3InIHN1ZmZpeCBpcyByZXF1aXJlZCBmb3Igc3RhY2sgdHJhY2VzIHRvIGJlIHJlbmRlcmVkIHByb3Blcmx5XG5cdFx0XHR2YWx1ZTogYCR7bGFiZWx9RXJyb3JgXG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGVycm9yO1xufVxuIiwgIi8qIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgc2NyaXB0cy9wcm9jZXNzLW1lc3NhZ2VzL2luZGV4LmpzLiBEbyBub3QgZWRpdCEgKi9cblxuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5cbi8qKlxuICogQ2Fubm90IHVzZSBge0ByZW5kZXIgY2hpbGRyZW4oLi4uKX1gIGlmIHRoZSBwYXJlbnQgY29tcG9uZW50IHVzZXMgYGxldDpgIGRpcmVjdGl2ZXMuIENvbnNpZGVyIHVzaW5nIGEgbmFtZWQgc25pcHBldCBpbnN0ZWFkXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkX2RlZmF1bHRfc25pcHBldCgpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBpbnZhbGlkX2RlZmF1bHRfc25pcHBldFxcbkNhbm5vdCB1c2UgXFxge0ByZW5kZXIgY2hpbGRyZW4oLi4uKX1cXGAgaWYgdGhlIHBhcmVudCBjb21wb25lbnQgdXNlcyBcXGBsZXQ6XFxgIGRpcmVjdGl2ZXMuIENvbnNpZGVyIHVzaW5nIGEgbmFtZWQgc25pcHBldCBpbnN0ZWFkXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaW52YWxpZF9kZWZhdWx0X3NuaXBwZXRgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2ludmFsaWRfZGVmYXVsdF9zbmlwcGV0YCk7XG5cdH1cbn1cblxuLyoqXG4gKiBBIHNuaXBwZXQgZnVuY3Rpb24gd2FzIHBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cy4gU25pcHBldHMgc2hvdWxkIG9ubHkgYmUgaW5zdGFudGlhdGVkIHZpYSBge0ByZW5kZXIgLi4ufWBcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRfc25pcHBldF9hcmd1bWVudHMoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgaW52YWxpZF9zbmlwcGV0X2FyZ3VtZW50c1xcbkEgc25pcHBldCBmdW5jdGlvbiB3YXMgcGFzc2VkIGludmFsaWQgYXJndW1lbnRzLiBTbmlwcGV0cyBzaG91bGQgb25seSBiZSBpbnN0YW50aWF0ZWQgdmlhIFxcYHtAcmVuZGVyIC4uLn1cXGBcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9pbnZhbGlkX3NuaXBwZXRfYXJndW1lbnRzYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9pbnZhbGlkX3NuaXBwZXRfYXJndW1lbnRzYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBgJW5hbWUlKC4uLilgIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpZmVjeWNsZV9vdXRzaWRlX2NvbXBvbmVudChuYW1lKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgbGlmZWN5Y2xlX291dHNpZGVfY29tcG9uZW50XFxuXFxgJHtuYW1lfSguLi4pXFxgIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvblxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2xpZmVjeWNsZV9vdXRzaWRlX2NvbXBvbmVudGApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvbGlmZWN5Y2xlX291dHNpZGVfY29tcG9uZW50YCk7XG5cdH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0ZWQgdG8gcmVuZGVyIGEgc25pcHBldCB3aXRob3V0IGEgYHtAcmVuZGVyfWAgYmxvY2suIFRoaXMgd291bGQgY2F1c2UgdGhlIHNuaXBwZXQgY29kZSB0byBiZSBzdHJpbmdpZmllZCBpbnN0ZWFkIG9mIGl0cyBjb250ZW50IGJlaW5nIHJlbmRlcmVkIHRvIHRoZSBET00uIFRvIGZpeCB0aGlzLCBjaGFuZ2UgYHtzbmlwcGV0fWAgdG8gYHtAcmVuZGVyIHNuaXBwZXQoKX1gLlxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc25pcHBldF93aXRob3V0X3JlbmRlcl90YWcoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgc25pcHBldF93aXRob3V0X3JlbmRlcl90YWdcXG5BdHRlbXB0ZWQgdG8gcmVuZGVyIGEgc25pcHBldCB3aXRob3V0IGEgXFxge0ByZW5kZXJ9XFxgIGJsb2NrLiBUaGlzIHdvdWxkIGNhdXNlIHRoZSBzbmlwcGV0IGNvZGUgdG8gYmUgc3RyaW5naWZpZWQgaW5zdGVhZCBvZiBpdHMgY29udGVudCBiZWluZyByZW5kZXJlZCB0byB0aGUgRE9NLiBUbyBmaXggdGhpcywgY2hhbmdlIFxcYHtzbmlwcGV0fVxcYCB0byBcXGB7QHJlbmRlciBzbmlwcGV0KCl9XFxgLlxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL3NuaXBwZXRfd2l0aG91dF9yZW5kZXJfdGFnYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9zbmlwcGV0X3dpdGhvdXRfcmVuZGVyX3RhZ2ApO1xuXHR9XG59XG5cbi8qKlxuICogYCVuYW1lJWAgaXMgbm90IGEgc3RvcmUgd2l0aCBhIGBzdWJzY3JpYmVgIG1ldGhvZFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX2ludmFsaWRfc2hhcGUobmFtZSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYHN0b3JlX2ludmFsaWRfc2hhcGVcXG5cXGAke25hbWV9XFxgIGlzIG5vdCBhIHN0b3JlIHdpdGggYSBcXGBzdWJzY3JpYmVcXGAgbWV0aG9kXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvc3RvcmVfaW52YWxpZF9zaGFwZWApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvc3RvcmVfaW52YWxpZF9zaGFwZWApO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIGB0aGlzYCBwcm9wIG9uIGA8c3ZlbHRlOmVsZW1lbnQ+YCBtdXN0IGJlIGEgc3RyaW5nLCBpZiBkZWZpbmVkXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdmVsdGVfZWxlbWVudF9pbnZhbGlkX3RoaXNfdmFsdWUoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgc3ZlbHRlX2VsZW1lbnRfaW52YWxpZF90aGlzX3ZhbHVlXFxuVGhlIFxcYHRoaXNcXGAgcHJvcCBvbiBcXGA8c3ZlbHRlOmVsZW1lbnQ+XFxgIG11c3QgYmUgYSBzdHJpbmcsIGlmIGRlZmluZWRcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9zdmVsdGVfZWxlbWVudF9pbnZhbGlkX3RoaXNfdmFsdWVgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL3N2ZWx0ZV9lbGVtZW50X2ludmFsaWRfdGhpc192YWx1ZWApO1xuXHR9XG59IiwgIi8qKiBAaW1wb3J0IHsgQ29tcG9uZW50Q29udGV4dCB9IGZyb20gJyNjbGllbnQnICovXG5cbmltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuaW1wb3J0IHsgbGlmZWN5Y2xlX291dHNpZGVfY29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2Vycm9ycy5qcyc7XG5pbXBvcnQgeyBzb3VyY2UgfSBmcm9tICcuL3JlYWN0aXZpdHkvc291cmNlcy5qcyc7XG5pbXBvcnQge1xuXHRhY3RpdmVfZWZmZWN0LFxuXHRhY3RpdmVfcmVhY3Rpb24sXG5cdHNldF9hY3RpdmVfZWZmZWN0LFxuXHRzZXRfYWN0aXZlX3JlYWN0aW9uXG59IGZyb20gJy4vcnVudGltZS5qcyc7XG5pbXBvcnQgeyBlZmZlY3QsIHRlYXJkb3duIH0gZnJvbSAnLi9yZWFjdGl2aXR5L2VmZmVjdHMuanMnO1xuaW1wb3J0IHsgbGVnYWN5X21vZGVfZmxhZyB9IGZyb20gJy4uL2ZsYWdzL2luZGV4LmpzJztcblxuLyoqIEB0eXBlIHtDb21wb25lbnRDb250ZXh0IHwgbnVsbH0gKi9cbmV4cG9ydCBsZXQgY29tcG9uZW50X2NvbnRleHQgPSBudWxsO1xuXG4vKiogQHBhcmFtIHtDb21wb25lbnRDb250ZXh0IHwgbnVsbH0gY29udGV4dCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9jb21wb25lbnRfY29udGV4dChjb250ZXh0KSB7XG5cdGNvbXBvbmVudF9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuLyoqXG4gKiBUaGUgY3VycmVudCBjb21wb25lbnQgZnVuY3Rpb24uIERpZmZlcmVudCBmcm9tIGN1cnJlbnQgY29tcG9uZW50IGNvbnRleHQ6XG4gKiBgYGBodG1sXG4gKiA8IS0tIEFwcC5zdmVsdGUgLS0+XG4gKiA8Rm9vPlxuICogICA8QmFyIC8+IDwhLS0gY29udGV4dCA9PSBGb28uc3ZlbHRlLCBmdW5jdGlvbiA9PSBBcHAuc3ZlbHRlIC0tPlxuICogPC9Gb28+XG4gKiBgYGBcbiAqIEB0eXBlIHtDb21wb25lbnRDb250ZXh0WydmdW5jdGlvbiddfVxuICovXG5leHBvcnQgbGV0IGRldl9jdXJyZW50X2NvbXBvbmVudF9mdW5jdGlvbiA9IG51bGw7XG5cbi8qKiBAcGFyYW0ge0NvbXBvbmVudENvbnRleHRbJ2Z1bmN0aW9uJ119IGZuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2Rldl9jdXJyZW50X2NvbXBvbmVudF9mdW5jdGlvbihmbikge1xuXHRkZXZfY3VycmVudF9jb21wb25lbnRfZnVuY3Rpb24gPSBmbjtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGNvbnRleHQgdGhhdCBiZWxvbmdzIHRvIHRoZSBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGBrZXlgLlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuXHRjb25zdCBjb250ZXh0X21hcCA9IGdldF9vcl9pbml0X2NvbnRleHRfbWFwKCdnZXRDb250ZXh0Jyk7XG5cdGNvbnN0IHJlc3VsdCA9IC8qKiBAdHlwZSB7VH0gKi8gKGNvbnRleHRfbWFwLmdldChrZXkpKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBc3NvY2lhdGVzIGFuIGFyYml0cmFyeSBgY29udGV4dGAgb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgY29tcG9uZW50IGFuZCB0aGUgc3BlY2lmaWVkIGBrZXlgXG4gKiBhbmQgcmV0dXJucyB0aGF0IG9iamVjdC4gVGhlIGNvbnRleHQgaXMgdGhlbiBhdmFpbGFibGUgdG8gY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudFxuICogKGluY2x1ZGluZyBzbG90dGVkIGNvbnRlbnQpIHdpdGggYGdldENvbnRleHRgLlxuICpcbiAqIExpa2UgbGlmZWN5Y2xlIGZ1bmN0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge2FueX0ga2V5XG4gKiBAcGFyYW0ge1R9IGNvbnRleHRcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29udGV4dChrZXksIGNvbnRleHQpIHtcblx0Y29uc3QgY29udGV4dF9tYXAgPSBnZXRfb3JfaW5pdF9jb250ZXh0X21hcCgnc2V0Q29udGV4dCcpO1xuXHRjb250ZXh0X21hcC5zZXQoa2V5LCBjb250ZXh0KTtcblx0cmV0dXJuIGNvbnRleHQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBnaXZlbiBga2V5YCBoYXMgYmVlbiBzZXQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge2FueX0ga2V5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0NvbnRleHQoa2V5KSB7XG5cdGNvbnN0IGNvbnRleHRfbWFwID0gZ2V0X29yX2luaXRfY29udGV4dF9tYXAoJ2hhc0NvbnRleHQnKTtcblx0cmV0dXJuIGNvbnRleHRfbWFwLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgd2hvbGUgY29udGV4dCBtYXAgdGhhdCBiZWxvbmdzIHRvIHRoZSBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLiBVc2VmdWwsIGZvciBleGFtcGxlLCBpZiB5b3VcbiAqIHByb2dyYW1tYXRpY2FsbHkgY3JlYXRlIGEgY29tcG9uZW50IGFuZCB3YW50IHRvIHBhc3MgdGhlIGV4aXN0aW5nIGNvbnRleHQgdG8gaXQuXG4gKlxuICogQHRlbXBsYXRlIHtNYXA8YW55LCBhbnk+fSBbVD1NYXA8YW55LCBhbnk+XVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxDb250ZXh0cygpIHtcblx0Y29uc3QgY29udGV4dF9tYXAgPSBnZXRfb3JfaW5pdF9jb250ZXh0X21hcCgnZ2V0QWxsQ29udGV4dHMnKTtcblx0cmV0dXJuIC8qKiBAdHlwZSB7VH0gKi8gKGNvbnRleHRfbWFwKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSBwcm9wc1xuICogQHBhcmFtIHthbnl9IHJ1bmVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1c2gocHJvcHMsIHJ1bmVzID0gZmFsc2UsIGZuKSB7XG5cdHZhciBjdHggPSAoY29tcG9uZW50X2NvbnRleHQgPSB7XG5cdFx0cDogY29tcG9uZW50X2NvbnRleHQsXG5cdFx0YzogbnVsbCxcblx0XHRkOiBmYWxzZSxcblx0XHRlOiBudWxsLFxuXHRcdG06IGZhbHNlLFxuXHRcdHM6IHByb3BzLFxuXHRcdHg6IG51bGwsXG5cdFx0bDogbnVsbFxuXHR9KTtcblxuXHRpZiAobGVnYWN5X21vZGVfZmxhZyAmJiAhcnVuZXMpIHtcblx0XHRjb21wb25lbnRfY29udGV4dC5sID0ge1xuXHRcdFx0czogbnVsbCxcblx0XHRcdHU6IG51bGwsXG5cdFx0XHRyMTogW10sXG5cdFx0XHRyMjogc291cmNlKGZhbHNlKVxuXHRcdH07XG5cdH1cblxuXHR0ZWFyZG93bigoKSA9PiB7XG5cdFx0LyoqIEB0eXBlIHtDb21wb25lbnRDb250ZXh0fSAqLyAoY3R4KS5kID0gdHJ1ZTtcblx0fSk7XG5cblx0aWYgKERFVikge1xuXHRcdC8vIGNvbXBvbmVudCBmdW5jdGlvblxuXHRcdGNvbXBvbmVudF9jb250ZXh0LmZ1bmN0aW9uID0gZm47XG5cdFx0ZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uID0gZm47XG5cdH1cbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IFRcbiAqIEBwYXJhbSB7VH0gW2NvbXBvbmVudF1cbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9wKGNvbXBvbmVudCkge1xuXHRjb25zdCBjb250ZXh0X3N0YWNrX2l0ZW0gPSBjb21wb25lbnRfY29udGV4dDtcblx0aWYgKGNvbnRleHRfc3RhY2tfaXRlbSAhPT0gbnVsbCkge1xuXHRcdGlmIChjb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29udGV4dF9zdGFja19pdGVtLnggPSBjb21wb25lbnQ7XG5cdFx0fVxuXHRcdGNvbnN0IGNvbXBvbmVudF9lZmZlY3RzID0gY29udGV4dF9zdGFja19pdGVtLmU7XG5cdFx0aWYgKGNvbXBvbmVudF9lZmZlY3RzICE9PSBudWxsKSB7XG5cdFx0XHR2YXIgcHJldmlvdXNfZWZmZWN0ID0gYWN0aXZlX2VmZmVjdDtcblx0XHRcdHZhciBwcmV2aW91c19yZWFjdGlvbiA9IGFjdGl2ZV9yZWFjdGlvbjtcblx0XHRcdGNvbnRleHRfc3RhY2tfaXRlbS5lID0gbnVsbDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9uZW50X2VmZmVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgY29tcG9uZW50X2VmZmVjdCA9IGNvbXBvbmVudF9lZmZlY3RzW2ldO1xuXHRcdFx0XHRcdHNldF9hY3RpdmVfZWZmZWN0KGNvbXBvbmVudF9lZmZlY3QuZWZmZWN0KTtcblx0XHRcdFx0XHRzZXRfYWN0aXZlX3JlYWN0aW9uKGNvbXBvbmVudF9lZmZlY3QucmVhY3Rpb24pO1xuXHRcdFx0XHRcdGVmZmVjdChjb21wb25lbnRfZWZmZWN0LmZuKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0c2V0X2FjdGl2ZV9lZmZlY3QocHJldmlvdXNfZWZmZWN0KTtcblx0XHRcdFx0c2V0X2FjdGl2ZV9yZWFjdGlvbihwcmV2aW91c19yZWFjdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbXBvbmVudF9jb250ZXh0ID0gY29udGV4dF9zdGFja19pdGVtLnA7XG5cdFx0aWYgKERFVikge1xuXHRcdFx0ZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uID0gY29udGV4dF9zdGFja19pdGVtLnA/LmZ1bmN0aW9uID8/IG51bGw7XG5cdFx0fVxuXHRcdGNvbnRleHRfc3RhY2tfaXRlbS5tID0gdHJ1ZTtcblx0fVxuXHQvLyBNaWNyby1vcHRpbWl6YXRpb246IERvbid0IHNldCAuYSBhYm92ZSB0byB0aGUgZW1wdHkgb2JqZWN0XG5cdC8vIHNvIGl0IGNhbiBiZSBnYXJiYWdlLWNvbGxlY3RlZCB3aGVuIHRoZSByZXR1cm4gaGVyZSBpcyB1bnVzZWRcblx0cmV0dXJuIGNvbXBvbmVudCB8fCAvKiogQHR5cGUge1R9ICovICh7fSk7XG59XG5cbi8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19ydW5lcygpIHtcblx0cmV0dXJuICFsZWdhY3lfbW9kZV9mbGFnIHx8IChjb21wb25lbnRfY29udGV4dCAhPT0gbnVsbCAmJiBjb21wb25lbnRfY29udGV4dC5sID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge01hcDx1bmtub3duLCB1bmtub3duPn1cbiAqL1xuZnVuY3Rpb24gZ2V0X29yX2luaXRfY29udGV4dF9tYXAobmFtZSkge1xuXHRpZiAoY29tcG9uZW50X2NvbnRleHQgPT09IG51bGwpIHtcblx0XHRsaWZlY3ljbGVfb3V0c2lkZV9jb21wb25lbnQobmFtZSk7XG5cdH1cblxuXHRyZXR1cm4gKGNvbXBvbmVudF9jb250ZXh0LmMgPz89IG5ldyBNYXAoZ2V0X3BhcmVudF9jb250ZXh0KGNvbXBvbmVudF9jb250ZXh0KSB8fCB1bmRlZmluZWQpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NvbXBvbmVudENvbnRleHR9IGNvbXBvbmVudF9jb250ZXh0XG4gKiBAcmV0dXJucyB7TWFwPHVua25vd24sIHVua25vd24+IHwgbnVsbH1cbiAqL1xuZnVuY3Rpb24gZ2V0X3BhcmVudF9jb250ZXh0KGNvbXBvbmVudF9jb250ZXh0KSB7XG5cdGxldCBwYXJlbnQgPSBjb21wb25lbnRfY29udGV4dC5wO1xuXHR3aGlsZSAocGFyZW50ICE9PSBudWxsKSB7XG5cdFx0Y29uc3QgY29udGV4dF9tYXAgPSBwYXJlbnQuYztcblx0XHRpZiAoY29udGV4dF9tYXAgIT09IG51bGwpIHtcblx0XHRcdHJldHVybiBjb250ZXh0X21hcDtcblx0XHR9XG5cdFx0cGFyZW50ID0gcGFyZW50LnA7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBTb3VyY2UgfSBmcm9tICcjY2xpZW50JyAqL1xuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5pbXBvcnQgeyBnZXQsIGFjdGl2ZV9lZmZlY3QsIGFjdGl2ZV9yZWFjdGlvbiwgc2V0X2FjdGl2ZV9yZWFjdGlvbiB9IGZyb20gJy4vcnVudGltZS5qcyc7XG5pbXBvcnQge1xuXHRhcnJheV9wcm90b3R5cGUsXG5cdGdldF9kZXNjcmlwdG9yLFxuXHRnZXRfcHJvdG90eXBlX29mLFxuXHRpc19hcnJheSxcblx0b2JqZWN0X3Byb3RvdHlwZVxufSBmcm9tICcuLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHsgc3RhdGUgYXMgc291cmNlLCBzZXQgfSBmcm9tICcuL3JlYWN0aXZpdHkvc291cmNlcy5qcyc7XG5pbXBvcnQgeyBTVEFURV9TWU1CT0wgfSBmcm9tICcjY2xpZW50L2NvbnN0YW50cyc7XG5pbXBvcnQgeyBVTklOSVRJQUxJWkVEIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCAqIGFzIGUgZnJvbSAnLi9lcnJvcnMuanMnO1xuaW1wb3J0IHsgZ2V0X3N0YWNrIH0gZnJvbSAnLi9kZXYvdHJhY2luZy5qcyc7XG5pbXBvcnQgeyB0cmFjaW5nX21vZGVfZmxhZyB9IGZyb20gJy4uL2ZsYWdzL2luZGV4LmpzJztcblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtUfSB2YWx1ZVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm94eSh2YWx1ZSkge1xuXHQvLyBpZiBub24tcHJveHlhYmxlLCBvciBpcyBhbHJlYWR5IGEgcHJveHksIHJldHVybiBgdmFsdWVgXG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsIHx8IFNUQVRFX1NZTUJPTCBpbiB2YWx1ZSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGNvbnN0IHByb3RvdHlwZSA9IGdldF9wcm90b3R5cGVfb2YodmFsdWUpO1xuXG5cdGlmIChwcm90b3R5cGUgIT09IG9iamVjdF9wcm90b3R5cGUgJiYgcHJvdG90eXBlICE9PSBhcnJheV9wcm90b3R5cGUpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHQvKiogQHR5cGUge01hcDxhbnksIFNvdXJjZTxhbnk+Pn0gKi9cblx0dmFyIHNvdXJjZXMgPSBuZXcgTWFwKCk7XG5cdHZhciBpc19wcm94aWVkX2FycmF5ID0gaXNfYXJyYXkodmFsdWUpO1xuXHR2YXIgdmVyc2lvbiA9IHNvdXJjZSgwKTtcblxuXHR2YXIgc3RhY2sgPSBERVYgJiYgdHJhY2luZ19tb2RlX2ZsYWcgPyBnZXRfc3RhY2soJ0NyZWF0ZWRBdCcpIDogbnVsbDtcblx0dmFyIHJlYWN0aW9uID0gYWN0aXZlX3JlYWN0aW9uO1xuXG5cdC8qKlxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKiBAcGFyYW0geygpID0+IFR9IGZuXG5cdCAqL1xuXHR2YXIgd2l0aF9wYXJlbnQgPSAoZm4pID0+IHtcblx0XHR2YXIgcHJldmlvdXNfcmVhY3Rpb24gPSBhY3RpdmVfcmVhY3Rpb247XG5cdFx0c2V0X2FjdGl2ZV9yZWFjdGlvbihyZWFjdGlvbik7XG5cblx0XHQvKiogQHR5cGUge1R9ICovXG5cdFx0dmFyIHJlc3VsdCA9IGZuKCk7XG5cblx0XHRzZXRfYWN0aXZlX3JlYWN0aW9uKHByZXZpb3VzX3JlYWN0aW9uKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdGlmIChpc19wcm94aWVkX2FycmF5KSB7XG5cdFx0Ly8gV2UgbmVlZCB0byBjcmVhdGUgdGhlIGxlbmd0aCBzb3VyY2UgZWFnZXJseSB0byBlbnN1cmUgdGhhdFxuXHRcdC8vIG11dGF0aW9ucyB0byB0aGUgYXJyYXkgYXJlIHByb3Blcmx5IHN5bmNlZCB3aXRoIG91ciBwcm94eVxuXHRcdHNvdXJjZXMuc2V0KCdsZW5ndGgnLCBzb3VyY2UoLyoqIEB0eXBlIHthbnlbXX0gKi8gKHZhbHVlKS5sZW5ndGgsIHN0YWNrKSk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb3h5KC8qKiBAdHlwZSB7YW55fSAqLyAodmFsdWUpLCB7XG5cdFx0ZGVmaW5lUHJvcGVydHkoXywgcHJvcCwgZGVzY3JpcHRvcikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgfHxcblx0XHRcdFx0ZGVzY3JpcHRvci5jb25maWd1cmFibGUgPT09IGZhbHNlIHx8XG5cdFx0XHRcdGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9PT0gZmFsc2UgfHxcblx0XHRcdFx0ZGVzY3JpcHRvci53cml0YWJsZSA9PT0gZmFsc2Vcblx0XHRcdCkge1xuXHRcdFx0XHQvLyB3ZSBkaXNhbGxvdyBub24tYmFzaWMgZGVzY3JpcHRvcnMsIGJlY2F1c2UgdW5sZXNzIHRoZXkgYXJlIGFwcGxpZWQgdG8gdGhlXG5cdFx0XHRcdC8vIHRhcmdldCBvYmplY3QgXHUyMDE0IHdoaWNoIHdlIGF2b2lkLCBzbyB0aGF0IHN0YXRlIGNhbiBiZSBmb3JrZWQgXHUyMDE0IHdlIHdpbGwgcnVuXG5cdFx0XHRcdC8vIGFmb3VsIG9mIHRoZSB2YXJpb3VzIGludmFyaWFudHNcblx0XHRcdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvUHJveHkvUHJveHkvZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yI2ludmFyaWFudHNcblx0XHRcdFx0ZS5zdGF0ZV9kZXNjcmlwdG9yc19maXhlZCgpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcyA9IHNvdXJjZXMuZ2V0KHByb3ApO1xuXG5cdFx0XHRpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHMgPSB3aXRoX3BhcmVudCgoKSA9PiBzb3VyY2UoZGVzY3JpcHRvci52YWx1ZSwgc3RhY2spKTtcblx0XHRcdFx0c291cmNlcy5zZXQocHJvcCwgcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXQoXG5cdFx0XHRcdFx0cyxcblx0XHRcdFx0XHR3aXRoX3BhcmVudCgoKSA9PiBwcm94eShkZXNjcmlwdG9yLnZhbHVlKSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcCkge1xuXHRcdFx0dmFyIHMgPSBzb3VyY2VzLmdldChwcm9wKTtcblxuXHRcdFx0aWYgKHMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAocHJvcCBpbiB0YXJnZXQpIHtcblx0XHRcdFx0XHRzb3VyY2VzLnNldChcblx0XHRcdFx0XHRcdHByb3AsXG5cdFx0XHRcdFx0XHR3aXRoX3BhcmVudCgoKSA9PiBzb3VyY2UoVU5JTklUSUFMSVpFRCwgc3RhY2spKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dXBkYXRlX3ZlcnNpb24odmVyc2lvbik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFdoZW4gd29ya2luZyB3aXRoIGFycmF5cywgd2UgbmVlZCB0byBhbHNvIGVuc3VyZSB3ZSB1cGRhdGUgdGhlIGxlbmd0aCB3aGVuIHJlbW92aW5nXG5cdFx0XHRcdC8vIGFuIGluZGV4ZWQgcHJvcGVydHlcblx0XHRcdFx0aWYgKGlzX3Byb3hpZWRfYXJyYXkgJiYgdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0dmFyIGxzID0gLyoqIEB0eXBlIHtTb3VyY2U8bnVtYmVyPn0gKi8gKHNvdXJjZXMuZ2V0KCdsZW5ndGgnKSk7XG5cdFx0XHRcdFx0dmFyIG4gPSBOdW1iZXIocHJvcCk7XG5cblx0XHRcdFx0XHRpZiAoTnVtYmVyLmlzSW50ZWdlcihuKSAmJiBuIDwgbHMudikge1xuXHRcdFx0XHRcdFx0c2V0KGxzLCBuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c2V0KHMsIFVOSU5JVElBTElaRUQpO1xuXHRcdFx0XHR1cGRhdGVfdmVyc2lvbih2ZXJzaW9uKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG5cdFx0XHRpZiAocHJvcCA9PT0gU1RBVEVfU1lNQk9MKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHMgPSBzb3VyY2VzLmdldChwcm9wKTtcblx0XHRcdHZhciBleGlzdHMgPSBwcm9wIGluIHRhcmdldDtcblxuXHRcdFx0Ly8gY3JlYXRlIGEgc291cmNlLCBidXQgb25seSBpZiBpdCdzIGFuIG93biBwcm9wZXJ0eSBhbmQgbm90IGEgcHJvdG90eXBlIHByb3BlcnR5XG5cdFx0XHRpZiAocyA9PT0gdW5kZWZpbmVkICYmICghZXhpc3RzIHx8IGdldF9kZXNjcmlwdG9yKHRhcmdldCwgcHJvcCk/LndyaXRhYmxlKSkge1xuXHRcdFx0XHRzID0gd2l0aF9wYXJlbnQoKCkgPT4gc291cmNlKHByb3h5KGV4aXN0cyA/IHRhcmdldFtwcm9wXSA6IFVOSU5JVElBTElaRUQpLCBzdGFjaykpO1xuXHRcdFx0XHRzb3VyY2VzLnNldChwcm9wLCBzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR2YXIgdiA9IGdldChzKTtcblx0XHRcdFx0cmV0dXJuIHYgPT09IFVOSU5JVElBTElaRUQgPyB1bmRlZmluZWQgOiB2O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG5cdFx0fSxcblxuXHRcdGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3ApIHtcblx0XHRcdHZhciBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wKTtcblxuXHRcdFx0aWYgKGRlc2NyaXB0b3IgJiYgJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSB7XG5cdFx0XHRcdHZhciBzID0gc291cmNlcy5nZXQocHJvcCk7XG5cdFx0XHRcdGlmIChzKSBkZXNjcmlwdG9yLnZhbHVlID0gZ2V0KHMpO1xuXHRcdFx0fSBlbHNlIGlmIChkZXNjcmlwdG9yID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dmFyIHNvdXJjZSA9IHNvdXJjZXMuZ2V0KHByb3ApO1xuXHRcdFx0XHR2YXIgdmFsdWUgPSBzb3VyY2U/LnY7XG5cblx0XHRcdFx0aWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBVTklOSVRJQUxJWkVEKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGVzY3JpcHRvcjtcblx0XHR9LFxuXG5cdFx0aGFzKHRhcmdldCwgcHJvcCkge1xuXHRcdFx0aWYgKHByb3AgPT09IFNUQVRFX1NZTUJPTCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHMgPSBzb3VyY2VzLmdldChwcm9wKTtcblx0XHRcdHZhciBoYXMgPSAocyAhPT0gdW5kZWZpbmVkICYmIHMudiAhPT0gVU5JTklUSUFMSVpFRCkgfHwgUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wKTtcblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRzICE9PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0KGFjdGl2ZV9lZmZlY3QgIT09IG51bGwgJiYgKCFoYXMgfHwgZ2V0X2Rlc2NyaXB0b3IodGFyZ2V0LCBwcm9wKT8ud3JpdGFibGUpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGlmIChzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRzID0gd2l0aF9wYXJlbnQoKCkgPT4gc291cmNlKGhhcyA/IHByb3h5KHRhcmdldFtwcm9wXSkgOiBVTklOSVRJQUxJWkVELCBzdGFjaykpO1xuXHRcdFx0XHRcdHNvdXJjZXMuc2V0KHByb3AsIHMpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHZhbHVlID0gZ2V0KHMpO1xuXHRcdFx0XHRpZiAodmFsdWUgPT09IFVOSU5JVElBTElaRUQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGhhcztcblx0XHR9LFxuXG5cdFx0c2V0KHRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG5cdFx0XHR2YXIgcyA9IHNvdXJjZXMuZ2V0KHByb3ApO1xuXHRcdFx0dmFyIGhhcyA9IHByb3AgaW4gdGFyZ2V0O1xuXG5cdFx0XHQvLyB2YXJpYWJsZS5sZW5ndGggPSB2YWx1ZSAtPiBjbGVhciBhbGwgc2lnbmFscyB3aXRoIGluZGV4ID49IHZhbHVlXG5cdFx0XHRpZiAoaXNfcHJveGllZF9hcnJheSAmJiBwcm9wID09PSAnbGVuZ3RoJykge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gdmFsdWU7IGkgPCAvKiogQHR5cGUge1NvdXJjZTxudW1iZXI+fSAqLyAocykudjsgaSArPSAxKSB7XG5cdFx0XHRcdFx0dmFyIG90aGVyX3MgPSBzb3VyY2VzLmdldChpICsgJycpO1xuXHRcdFx0XHRcdGlmIChvdGhlcl9zICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHNldChvdGhlcl9zLCBVTklOSVRJQUxJWkVEKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGkgaW4gdGFyZ2V0KSB7XG5cdFx0XHRcdFx0XHQvLyBJZiB0aGUgaXRlbSBleGlzdHMgaW4gdGhlIG9yaWdpbmFsLCB3ZSBuZWVkIHRvIGNyZWF0ZSBhIHVuaW5pdGlhbGl6ZWQgc291cmNlLFxuXHRcdFx0XHRcdFx0Ly8gZWxzZSBhIGxhdGVyIHJlYWQgb2YgdGhlIHByb3BlcnR5IHdvdWxkIHJlc3VsdCBpbiBhIHNvdXJjZSBiZWluZyBjcmVhdGVkIHdpdGhcblx0XHRcdFx0XHRcdC8vIHRoZSB2YWx1ZSBvZiB0aGUgb3JpZ2luYWwgaXRlbSBhdCB0aGF0IGluZGV4LlxuXHRcdFx0XHRcdFx0b3RoZXJfcyA9IHdpdGhfcGFyZW50KCgpID0+IHNvdXJjZShVTklOSVRJQUxJWkVELCBzdGFjaykpO1xuXHRcdFx0XHRcdFx0c291cmNlcy5zZXQoaSArICcnLCBvdGhlcl9zKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgaGF2ZW4ndCB5ZXQgY3JlYXRlZCBhIHNvdXJjZSBmb3IgdGhpcyBwcm9wZXJ0eSwgd2UgbmVlZCB0byBlbnN1cmVcblx0XHRcdC8vIHdlIGRvIHNvIG90aGVyd2lzZSBpZiB3ZSByZWFkIGl0IGxhdGVyLCB0aGVuIHRoZSB3cml0ZSB3b24ndCBiZSB0cmFja2VkIGFuZFxuXHRcdFx0Ly8gdGhlIGhldXJpc3RpY3Mgb2YgZWZmZWN0cyB3aWxsIGJlIGRpZmZlcmVudCB2cyBpZiB3ZSBoYWQgcmVhZCB0aGUgcHJveGllZFxuXHRcdFx0Ly8gb2JqZWN0IHByb3BlcnR5IGJlZm9yZSB3cml0aW5nIHRvIHRoYXQgcHJvcGVydHkuXG5cdFx0XHRpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmICghaGFzIHx8IGdldF9kZXNjcmlwdG9yKHRhcmdldCwgcHJvcCk/LndyaXRhYmxlKSB7XG5cdFx0XHRcdFx0cyA9IHdpdGhfcGFyZW50KCgpID0+IHNvdXJjZSh1bmRlZmluZWQsIHN0YWNrKSk7XG5cdFx0XHRcdFx0c2V0KFxuXHRcdFx0XHRcdFx0cyxcblx0XHRcdFx0XHRcdHdpdGhfcGFyZW50KCgpID0+IHByb3h5KHZhbHVlKSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHNvdXJjZXMuc2V0KHByb3AsIHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYXMgPSBzLnYgIT09IFVOSU5JVElBTElaRUQ7XG5cdFx0XHRcdHNldChcblx0XHRcdFx0XHRzLFxuXHRcdFx0XHRcdHdpdGhfcGFyZW50KCgpID0+IHByb3h5KHZhbHVlKSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3ApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIG5ldyB2YWx1ZSBiZWZvcmUgdXBkYXRpbmcgYW55IHNpZ25hbHMgc28gdGhhdCBhbnkgbGlzdGVuZXJzIGdldCB0aGUgbmV3IHZhbHVlXG5cdFx0XHRpZiAoZGVzY3JpcHRvcj8uc2V0KSB7XG5cdFx0XHRcdGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFoYXMpIHtcblx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBtdXRhdGVkIGFuIGFycmF5IGRpcmVjdGx5LCB3ZSBtaWdodCBuZWVkIHRvXG5cdFx0XHRcdC8vIHNpZ25hbCB0aGF0IGxlbmd0aCBoYXMgYWxzbyBjaGFuZ2VkLiBEbyBpdCBiZWZvcmUgdXBkYXRpbmcgbWV0YWRhdGFcblx0XHRcdFx0Ly8gdG8gZW5zdXJlIHRoYXQgaXRlcmF0aW5nIG92ZXIgdGhlIGFycmF5IGFzIGEgcmVzdWx0IG9mIGEgbWV0YWRhdGEgdXBkYXRlXG5cdFx0XHRcdC8vIHdpbGwgbm90IGNhdXNlIHRoZSBsZW5ndGggdG8gYmUgb3V0IG9mIHN5bmMuXG5cdFx0XHRcdGlmIChpc19wcm94aWVkX2FycmF5ICYmIHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHZhciBscyA9IC8qKiBAdHlwZSB7U291cmNlPG51bWJlcj59ICovIChzb3VyY2VzLmdldCgnbGVuZ3RoJykpO1xuXHRcdFx0XHRcdHZhciBuID0gTnVtYmVyKHByb3ApO1xuXG5cdFx0XHRcdFx0aWYgKE51bWJlci5pc0ludGVnZXIobikgJiYgbiA+PSBscy52KSB7XG5cdFx0XHRcdFx0XHRzZXQobHMsIG4gKyAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1cGRhdGVfdmVyc2lvbih2ZXJzaW9uKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdG93bktleXModGFyZ2V0KSB7XG5cdFx0XHRnZXQodmVyc2lvbik7XG5cblx0XHRcdHZhciBvd25fa2V5cyA9IFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpLmZpbHRlcigoa2V5KSA9PiB7XG5cdFx0XHRcdHZhciBzb3VyY2UgPSBzb3VyY2VzLmdldChrZXkpO1xuXHRcdFx0XHRyZXR1cm4gc291cmNlID09PSB1bmRlZmluZWQgfHwgc291cmNlLnYgIT09IFVOSU5JVElBTElaRUQ7XG5cdFx0XHR9KTtcblxuXHRcdFx0Zm9yICh2YXIgW2tleSwgc291cmNlXSBvZiBzb3VyY2VzKSB7XG5cdFx0XHRcdGlmIChzb3VyY2UudiAhPT0gVU5JTklUSUFMSVpFRCAmJiAhKGtleSBpbiB0YXJnZXQpKSB7XG5cdFx0XHRcdFx0b3duX2tleXMucHVzaChrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvd25fa2V5cztcblx0XHR9LFxuXG5cdFx0c2V0UHJvdG90eXBlT2YoKSB7XG5cdFx0XHRlLnN0YXRlX3Byb3RvdHlwZV9maXhlZCgpO1xuXHRcdH1cblx0fSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtTb3VyY2U8bnVtYmVyPn0gc2lnbmFsXG4gKiBAcGFyYW0gezEgfCAtMX0gW2RdXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZV92ZXJzaW9uKHNpZ25hbCwgZCA9IDEpIHtcblx0c2V0KHNpZ25hbCwgc2lnbmFsLnYgKyBkKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9wcm94aWVkX3ZhbHVlKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgU1RBVEVfU1lNQk9MIGluIHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWVbU1RBVEVfU1lNQk9MXTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdC8vIHRoZSBhYm92ZSBpZiBjaGVjayBjYW4gdGhyb3cgYW4gZXJyb3IgaWYgdGhlIHZhbHVlIGluIHF1ZXN0aW9uXG5cdFx0Ly8gaXMgdGhlIGNvbnRlbnRXaW5kb3cgb2YgYW4gaWZyYW1lIG9uIGFub3RoZXIgZG9tYWluLCBpbiB3aGljaFxuXHRcdC8vIGNhc2Ugd2Ugd2FudCB0byBqdXN0IHJldHVybiB0aGUgdmFsdWUgKGJlY2F1c2UgaXQncyBkZWZpbml0ZWx5XG5cdFx0Ly8gbm90IGEgcHJveGllZCB2YWx1ZSkgc28gd2UgZG9uJ3QgYnJlYWsgYW55IEphdmFTY3JpcHQgaW50ZXJhY3Rpbmdcblx0XHQvLyB3aXRoIHRoYXQgaWZyYW1lIChzdWNoIGFzIHZhcmlvdXMgcGF5bWVudCBjb21wYW5pZXMgY2xpZW50IHNpZGVcblx0XHQvLyBKYXZhU2NyaXB0IGxpYnJhcmllcyBpbnRlcmFjdGluZyB3aXRoIHRoZWlyIGlmcmFtZXMgb24gdGhlIHNhbWVcblx0XHQvLyBkb21haW4pXG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IGFcbiAqIEBwYXJhbSB7YW55fSBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpcyhhLCBiKSB7XG5cdHJldHVybiBPYmplY3QuaXMoZ2V0X3Byb3hpZWRfdmFsdWUoYSksIGdldF9wcm94aWVkX3ZhbHVlKGIpKTtcbn1cbiIsICIvKiogQGltcG9ydCB7IERlcml2ZWQsIEVmZmVjdCB9IGZyb20gJyNjbGllbnQnICovXG5pbXBvcnQgeyBERVYgfSBmcm9tICdlc20tZW52JztcbmltcG9ydCB7IENMRUFOLCBERVJJVkVELCBESVJUWSwgRUZGRUNUX0hBU19ERVJJVkVELCBNQVlCRV9ESVJUWSwgVU5PV05FRCB9IGZyb20gJyNjbGllbnQvY29uc3RhbnRzJztcbmltcG9ydCB7XG5cdGFjdGl2ZV9yZWFjdGlvbixcblx0YWN0aXZlX2VmZmVjdCxcblx0c2V0X3NpZ25hbF9zdGF0dXMsXG5cdHNraXBfcmVhY3Rpb24sXG5cdHVwZGF0ZV9yZWFjdGlvbixcblx0aW5jcmVtZW50X3dyaXRlX3ZlcnNpb24sXG5cdHNldF9hY3RpdmVfZWZmZWN0LFxuXHRwdXNoX3JlYWN0aW9uX3ZhbHVlXG59IGZyb20gJy4uL3J1bnRpbWUuanMnO1xuaW1wb3J0IHsgZXF1YWxzLCBzYWZlX2VxdWFscyB9IGZyb20gJy4vZXF1YWxpdHkuanMnO1xuaW1wb3J0ICogYXMgZSBmcm9tICcuLi9lcnJvcnMuanMnO1xuaW1wb3J0IHsgZGVzdHJveV9lZmZlY3QgfSBmcm9tICcuL2VmZmVjdHMuanMnO1xuaW1wb3J0IHsgaW5zcGVjdF9lZmZlY3RzLCBzZXRfaW5zcGVjdF9lZmZlY3RzIH0gZnJvbSAnLi9zb3VyY2VzLmpzJztcbmltcG9ydCB7IGdldF9zdGFjayB9IGZyb20gJy4uL2Rldi90cmFjaW5nLmpzJztcbmltcG9ydCB7IHRyYWNpbmdfbW9kZV9mbGFnIH0gZnJvbSAnLi4vLi4vZmxhZ3MvaW5kZXguanMnO1xuaW1wb3J0IHsgY29tcG9uZW50X2NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0LmpzJztcblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHsoKSA9PiBWfSBmblxuICogQHJldHVybnMge0Rlcml2ZWQ8Vj59XG4gKi9cbi8qI19fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZWQoZm4pIHtcblx0dmFyIGZsYWdzID0gREVSSVZFRCB8IERJUlRZO1xuXHR2YXIgcGFyZW50X2Rlcml2ZWQgPVxuXHRcdGFjdGl2ZV9yZWFjdGlvbiAhPT0gbnVsbCAmJiAoYWN0aXZlX3JlYWN0aW9uLmYgJiBERVJJVkVEKSAhPT0gMFxuXHRcdFx0PyAvKiogQHR5cGUge0Rlcml2ZWR9ICovIChhY3RpdmVfcmVhY3Rpb24pXG5cdFx0XHQ6IG51bGw7XG5cblx0aWYgKGFjdGl2ZV9lZmZlY3QgPT09IG51bGwgfHwgKHBhcmVudF9kZXJpdmVkICE9PSBudWxsICYmIChwYXJlbnRfZGVyaXZlZC5mICYgVU5PV05FRCkgIT09IDApKSB7XG5cdFx0ZmxhZ3MgfD0gVU5PV05FRDtcblx0fSBlbHNlIHtcblx0XHQvLyBTaW5jZSBkZXJpdmVkcyBhcmUgZXZhbHVhdGVkIGxhemlseSwgYW55IGVmZmVjdHMgY3JlYXRlZCBpbnNpZGUgdGhlbSBhcmVcblx0XHQvLyBjcmVhdGVkIHRvbyBsYXRlIHRvIGVuc3VyZSB0aGF0IHRoZSBwYXJlbnQgZWZmZWN0IGlzIGFkZGVkIHRvIHRoZSB0cmVlXG5cdFx0YWN0aXZlX2VmZmVjdC5mIHw9IEVGRkVDVF9IQVNfREVSSVZFRDtcblx0fVxuXG5cdC8qKiBAdHlwZSB7RGVyaXZlZDxWPn0gKi9cblx0Y29uc3Qgc2lnbmFsID0ge1xuXHRcdGN0eDogY29tcG9uZW50X2NvbnRleHQsXG5cdFx0ZGVwczogbnVsbCxcblx0XHRlZmZlY3RzOiBudWxsLFxuXHRcdGVxdWFscyxcblx0XHRmOiBmbGFncyxcblx0XHRmbixcblx0XHRyZWFjdGlvbnM6IG51bGwsXG5cdFx0cnY6IDAsXG5cdFx0djogLyoqIEB0eXBlIHtWfSAqLyAobnVsbCksXG5cdFx0d3Y6IDAsXG5cdFx0cGFyZW50OiBwYXJlbnRfZGVyaXZlZCA/PyBhY3RpdmVfZWZmZWN0XG5cdH07XG5cblx0aWYgKERFViAmJiB0cmFjaW5nX21vZGVfZmxhZykge1xuXHRcdHNpZ25hbC5jcmVhdGVkID0gZ2V0X3N0YWNrKCdDcmVhdGVkQXQnKTtcblx0fVxuXG5cdHJldHVybiBzaWduYWw7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7KCkgPT4gVn0gZm5cbiAqIEByZXR1cm5zIHtEZXJpdmVkPFY+fVxuICovXG4vKiNfX05PX1NJREVfRUZGRUNUU19fKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VyX2Rlcml2ZWQoZm4pIHtcblx0Y29uc3QgZCA9IGRlcml2ZWQoZm4pO1xuXG5cdHB1c2hfcmVhY3Rpb25fdmFsdWUoZCk7XG5cblx0cmV0dXJuIGQ7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7KCkgPT4gVn0gZm5cbiAqIEByZXR1cm5zIHtEZXJpdmVkPFY+fVxuICovXG4vKiNfX05PX1NJREVfRUZGRUNUU19fKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmVkX3NhZmVfZXF1YWwoZm4pIHtcblx0Y29uc3Qgc2lnbmFsID0gZGVyaXZlZChmbik7XG5cdHNpZ25hbC5lcXVhbHMgPSBzYWZlX2VxdWFscztcblx0cmV0dXJuIHNpZ25hbDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Rlcml2ZWR9IGRlcml2ZWRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveV9kZXJpdmVkX2VmZmVjdHMoZGVyaXZlZCkge1xuXHR2YXIgZWZmZWN0cyA9IGRlcml2ZWQuZWZmZWN0cztcblxuXHRpZiAoZWZmZWN0cyAhPT0gbnVsbCkge1xuXHRcdGRlcml2ZWQuZWZmZWN0cyA9IG51bGw7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVmZmVjdHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdGRlc3Ryb3lfZWZmZWN0KC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAoZWZmZWN0c1tpXSkpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgdXBkYXRpbmcgZGVyaXZlZHMsIHVzZWQgdG8gZGV0ZWN0IGluZmluaXRlIHJlY3Vyc2lvblxuICogaW4gZGV2IG1vZGUgYW5kIHByb3ZpZGUgYSBuaWNlciBlcnJvciB0aGFuICd0b28gbXVjaCByZWN1cnNpb24nXG4gKiBAdHlwZSB7RGVyaXZlZFtdfVxuICovXG5sZXQgc3RhY2sgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0ge0Rlcml2ZWR9IGRlcml2ZWRcbiAqIEByZXR1cm5zIHtFZmZlY3QgfCBudWxsfVxuICovXG5mdW5jdGlvbiBnZXRfZGVyaXZlZF9wYXJlbnRfZWZmZWN0KGRlcml2ZWQpIHtcblx0dmFyIHBhcmVudCA9IGRlcml2ZWQucGFyZW50O1xuXHR3aGlsZSAocGFyZW50ICE9PSBudWxsKSB7XG5cdFx0aWYgKChwYXJlbnQuZiAmIERFUklWRUQpID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gLyoqIEB0eXBlIHtFZmZlY3R9ICovIChwYXJlbnQpO1xuXHRcdH1cblx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuXHR9XG5cdHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge0Rlcml2ZWR9IGRlcml2ZWRcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZV9kZXJpdmVkKGRlcml2ZWQpIHtcblx0dmFyIHZhbHVlO1xuXHR2YXIgcHJldl9hY3RpdmVfZWZmZWN0ID0gYWN0aXZlX2VmZmVjdDtcblxuXHRzZXRfYWN0aXZlX2VmZmVjdChnZXRfZGVyaXZlZF9wYXJlbnRfZWZmZWN0KGRlcml2ZWQpKTtcblxuXHRpZiAoREVWKSB7XG5cdFx0bGV0IHByZXZfaW5zcGVjdF9lZmZlY3RzID0gaW5zcGVjdF9lZmZlY3RzO1xuXHRcdHNldF9pbnNwZWN0X2VmZmVjdHMobmV3IFNldCgpKTtcblx0XHR0cnkge1xuXHRcdFx0aWYgKHN0YWNrLmluY2x1ZGVzKGRlcml2ZWQpKSB7XG5cdFx0XHRcdGUuZGVyaXZlZF9yZWZlcmVuY2VzX3NlbGYoKTtcblx0XHRcdH1cblxuXHRcdFx0c3RhY2sucHVzaChkZXJpdmVkKTtcblxuXHRcdFx0ZGVzdHJveV9kZXJpdmVkX2VmZmVjdHMoZGVyaXZlZCk7XG5cdFx0XHR2YWx1ZSA9IHVwZGF0ZV9yZWFjdGlvbihkZXJpdmVkKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0X2FjdGl2ZV9lZmZlY3QocHJldl9hY3RpdmVfZWZmZWN0KTtcblx0XHRcdHNldF9pbnNwZWN0X2VmZmVjdHMocHJldl9pbnNwZWN0X2VmZmVjdHMpO1xuXHRcdFx0c3RhY2sucG9wKCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHRyeSB7XG5cdFx0XHRkZXN0cm95X2Rlcml2ZWRfZWZmZWN0cyhkZXJpdmVkKTtcblx0XHRcdHZhbHVlID0gdXBkYXRlX3JlYWN0aW9uKGRlcml2ZWQpO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRzZXRfYWN0aXZlX2VmZmVjdChwcmV2X2FjdGl2ZV9lZmZlY3QpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Rlcml2ZWR9IGRlcml2ZWRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX2Rlcml2ZWQoZGVyaXZlZCkge1xuXHR2YXIgdmFsdWUgPSBleGVjdXRlX2Rlcml2ZWQoZGVyaXZlZCk7XG5cdHZhciBzdGF0dXMgPVxuXHRcdChza2lwX3JlYWN0aW9uIHx8IChkZXJpdmVkLmYgJiBVTk9XTkVEKSAhPT0gMCkgJiYgZGVyaXZlZC5kZXBzICE9PSBudWxsID8gTUFZQkVfRElSVFkgOiBDTEVBTjtcblxuXHRzZXRfc2lnbmFsX3N0YXR1cyhkZXJpdmVkLCBzdGF0dXMpO1xuXG5cdGlmICghZGVyaXZlZC5lcXVhbHModmFsdWUpKSB7XG5cdFx0ZGVyaXZlZC52ID0gdmFsdWU7XG5cdFx0ZGVyaXZlZC53diA9IGluY3JlbWVudF93cml0ZV92ZXJzaW9uKCk7XG5cdH1cbn1cbiIsICIvKiogQGltcG9ydCB7IERlcml2ZWQsIEVmZmVjdCwgU291cmNlLCBWYWx1ZSB9IGZyb20gJyNjbGllbnQnICovXG5pbXBvcnQgeyBERVYgfSBmcm9tICdlc20tZW52JztcbmltcG9ydCB7XG5cdGFjdGl2ZV9yZWFjdGlvbixcblx0YWN0aXZlX2VmZmVjdCxcblx0dW50cmFja2VkX3dyaXRlcyxcblx0Z2V0LFxuXHRzY2hlZHVsZV9lZmZlY3QsXG5cdHNldF91bnRyYWNrZWRfd3JpdGVzLFxuXHRzZXRfc2lnbmFsX3N0YXR1cyxcblx0dW50cmFjayxcblx0aW5jcmVtZW50X3dyaXRlX3ZlcnNpb24sXG5cdHVwZGF0ZV9lZmZlY3QsXG5cdHJlYWN0aW9uX3NvdXJjZXMsXG5cdGNoZWNrX2RpcnRpbmVzcyxcblx0dW50cmFja2luZyxcblx0aXNfZGVzdHJveWluZ19lZmZlY3QsXG5cdHB1c2hfcmVhY3Rpb25fdmFsdWVcbn0gZnJvbSAnLi4vcnVudGltZS5qcyc7XG5pbXBvcnQgeyBlcXVhbHMsIHNhZmVfZXF1YWxzIH0gZnJvbSAnLi9lcXVhbGl0eS5qcyc7XG5pbXBvcnQge1xuXHRDTEVBTixcblx0REVSSVZFRCxcblx0RElSVFksXG5cdEJSQU5DSF9FRkZFQ1QsXG5cdElOU1BFQ1RfRUZGRUNULFxuXHRVTk9XTkVELFxuXHRNQVlCRV9ESVJUWSxcblx0QkxPQ0tfRUZGRUNULFxuXHRST09UX0VGRkVDVFxufSBmcm9tICcjY2xpZW50L2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBlIGZyb20gJy4uL2Vycm9ycy5qcyc7XG5pbXBvcnQgeyBsZWdhY3lfbW9kZV9mbGFnLCB0cmFjaW5nX21vZGVfZmxhZyB9IGZyb20gJy4uLy4uL2ZsYWdzL2luZGV4LmpzJztcbmltcG9ydCB7IGdldF9zdGFjayB9IGZyb20gJy4uL2Rldi90cmFjaW5nLmpzJztcbmltcG9ydCB7IGNvbXBvbmVudF9jb250ZXh0LCBpc19ydW5lcyB9IGZyb20gJy4uL2NvbnRleHQuanMnO1xuaW1wb3J0IHsgcHJveHkgfSBmcm9tICcuLi9wcm94eS5qcyc7XG5pbXBvcnQgeyBleGVjdXRlX2Rlcml2ZWQgfSBmcm9tICcuL2Rlcml2ZWRzLmpzJztcblxuZXhwb3J0IGxldCBpbnNwZWN0X2VmZmVjdHMgPSBuZXcgU2V0KCk7XG5leHBvcnQgY29uc3Qgb2xkX3ZhbHVlcyA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBAcGFyYW0ge1NldDxhbnk+fSB2XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfaW5zcGVjdF9lZmZlY3RzKHYpIHtcblx0aW5zcGVjdF9lZmZlY3RzID0gdjtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtWfSB2XG4gKiBAcGFyYW0ge0Vycm9yIHwgbnVsbH0gW3N0YWNrXVxuICogQHJldHVybnMge1NvdXJjZTxWPn1cbiAqL1xuLy8gVE9ETyByZW5hbWUgdGhpcyB0byBgc3RhdGVgIHRocm91Z2hvdXQgdGhlIGNvZGViYXNlXG5leHBvcnQgZnVuY3Rpb24gc291cmNlKHYsIHN0YWNrKSB7XG5cdC8qKiBAdHlwZSB7VmFsdWV9ICovXG5cdHZhciBzaWduYWwgPSB7XG5cdFx0ZjogMCwgLy8gVE9ETyBpZGVhbGx5IHdlIGNvdWxkIHNraXAgdGhpcyBhbHRvZ2V0aGVyLCBidXQgaXQgY2F1c2VzIHR5cGUgZXJyb3JzXG5cdFx0dixcblx0XHRyZWFjdGlvbnM6IG51bGwsXG5cdFx0ZXF1YWxzLFxuXHRcdHJ2OiAwLFxuXHRcdHd2OiAwXG5cdH07XG5cblx0aWYgKERFViAmJiB0cmFjaW5nX21vZGVfZmxhZykge1xuXHRcdHNpZ25hbC5jcmVhdGVkID0gc3RhY2sgPz8gZ2V0X3N0YWNrKCdDcmVhdGVkQXQnKTtcblx0XHRzaWduYWwuZGVidWcgPSBudWxsO1xuXHR9XG5cblx0cmV0dXJuIHNpZ25hbDtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtWfSB2XG4gKiBAcGFyYW0ge0Vycm9yIHwgbnVsbH0gW3N0YWNrXVxuICovXG4vKiNfX05PX1NJREVfRUZGRUNUU19fKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZSh2LCBzdGFjaykge1xuXHRjb25zdCBzID0gc291cmNlKHYsIHN0YWNrKTtcblxuXHRwdXNoX3JlYWN0aW9uX3ZhbHVlKHMpO1xuXG5cdHJldHVybiBzO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1Z9IGluaXRpYWxfdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbXV0YWJsZV1cbiAqIEByZXR1cm5zIHtTb3VyY2U8Vj59XG4gKi9cbi8qI19fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIG11dGFibGVfc291cmNlKGluaXRpYWxfdmFsdWUsIGltbXV0YWJsZSA9IGZhbHNlKSB7XG5cdGNvbnN0IHMgPSBzb3VyY2UoaW5pdGlhbF92YWx1ZSk7XG5cdGlmICghaW1tdXRhYmxlKSB7XG5cdFx0cy5lcXVhbHMgPSBzYWZlX2VxdWFscztcblx0fVxuXG5cdC8vIGJpbmQgdGhlIHNpZ25hbCB0byB0aGUgY29tcG9uZW50IGNvbnRleHQsIGluIGNhc2Ugd2UgbmVlZCB0b1xuXHQvLyB0cmFjayB1cGRhdGVzIHRvIHRyaWdnZXIgYmVmb3JlVXBkYXRlL2FmdGVyVXBkYXRlIGNhbGxiYWNrc1xuXHRpZiAobGVnYWN5X21vZGVfZmxhZyAmJiBjb21wb25lbnRfY29udGV4dCAhPT0gbnVsbCAmJiBjb21wb25lbnRfY29udGV4dC5sICE9PSBudWxsKSB7XG5cdFx0KGNvbXBvbmVudF9jb250ZXh0LmwucyA/Pz0gW10pLnB1c2gocyk7XG5cdH1cblxuXHRyZXR1cm4gcztcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtWYWx1ZTxWPn0gc291cmNlXG4gKiBAcGFyYW0ge1Z9IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdXRhdGUoc291cmNlLCB2YWx1ZSkge1xuXHRzZXQoXG5cdFx0c291cmNlLFxuXHRcdHVudHJhY2soKCkgPT4gZ2V0KHNvdXJjZSkpXG5cdCk7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtTb3VyY2U8Vj59IHNvdXJjZVxuICogQHBhcmFtIHtWfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbc2hvdWxkX3Byb3h5XVxuICogQHJldHVybnMge1Z9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQoc291cmNlLCB2YWx1ZSwgc2hvdWxkX3Byb3h5ID0gZmFsc2UpIHtcblx0aWYgKFxuXHRcdGFjdGl2ZV9yZWFjdGlvbiAhPT0gbnVsbCAmJlxuXHRcdCF1bnRyYWNraW5nICYmXG5cdFx0aXNfcnVuZXMoKSAmJlxuXHRcdChhY3RpdmVfcmVhY3Rpb24uZiAmIChERVJJVkVEIHwgQkxPQ0tfRUZGRUNUKSkgIT09IDAgJiZcblx0XHQhcmVhY3Rpb25fc291cmNlcz8uaW5jbHVkZXMoc291cmNlKVxuXHQpIHtcblx0XHRlLnN0YXRlX3Vuc2FmZV9tdXRhdGlvbigpO1xuXHR9XG5cblx0bGV0IG5ld192YWx1ZSA9IHNob3VsZF9wcm94eSA/IHByb3h5KHZhbHVlKSA6IHZhbHVlO1xuXG5cdHJldHVybiBpbnRlcm5hbF9zZXQoc291cmNlLCBuZXdfdmFsdWUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1NvdXJjZTxWPn0gc291cmNlXG4gKiBAcGFyYW0ge1Z9IHZhbHVlXG4gKiBAcmV0dXJucyB7Vn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVybmFsX3NldChzb3VyY2UsIHZhbHVlKSB7XG5cdGlmICghc291cmNlLmVxdWFscyh2YWx1ZSkpIHtcblx0XHR2YXIgb2xkX3ZhbHVlID0gc291cmNlLnY7XG5cblx0XHRpZiAoaXNfZGVzdHJveWluZ19lZmZlY3QpIHtcblx0XHRcdG9sZF92YWx1ZXMuc2V0KHNvdXJjZSwgdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvbGRfdmFsdWVzLnNldChzb3VyY2UsIG9sZF92YWx1ZSk7XG5cdFx0fVxuXG5cdFx0c291cmNlLnYgPSB2YWx1ZTtcblxuXHRcdGlmIChERVYgJiYgdHJhY2luZ19tb2RlX2ZsYWcpIHtcblx0XHRcdHNvdXJjZS51cGRhdGVkID0gZ2V0X3N0YWNrKCdVcGRhdGVkQXQnKTtcblx0XHRcdGlmIChhY3RpdmVfZWZmZWN0ICE9IG51bGwpIHtcblx0XHRcdFx0c291cmNlLnRyYWNlX25lZWRfaW5jcmVhc2UgPSB0cnVlO1xuXHRcdFx0XHRzb3VyY2UudHJhY2VfdiA/Pz0gb2xkX3ZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICgoc291cmNlLmYgJiBERVJJVkVEKSAhPT0gMCkge1xuXHRcdFx0Ly8gaWYgd2UgYXJlIGFzc2lnbmluZyB0byBhIGRpcnR5IGRlcml2ZWQgd2Ugc2V0IGl0IHRvIGNsZWFuL21heWJlIGRpcnR5IGJ1dCB3ZSBhbHNvIGVhZ2VybHkgZXhlY3V0ZSBpdCB0byB0cmFjayB0aGUgZGVwZW5kZW5jaWVzXG5cdFx0XHRpZiAoKHNvdXJjZS5mICYgRElSVFkpICE9PSAwKSB7XG5cdFx0XHRcdGV4ZWN1dGVfZGVyaXZlZCgvKiogQHR5cGUge0Rlcml2ZWR9ICovIChzb3VyY2UpKTtcblx0XHRcdH1cblx0XHRcdHNldF9zaWduYWxfc3RhdHVzKHNvdXJjZSwgKHNvdXJjZS5mICYgVU5PV05FRCkgPT09IDAgPyBDTEVBTiA6IE1BWUJFX0RJUlRZKTtcblx0XHR9XG5cblx0XHRzb3VyY2Uud3YgPSBpbmNyZW1lbnRfd3JpdGVfdmVyc2lvbigpO1xuXG5cdFx0bWFya19yZWFjdGlvbnMoc291cmNlLCBESVJUWSk7XG5cblx0XHQvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhlIGN1cnJlbnQgcmVhY3Rpb24gbWlnaHQgbm90IGhhdmUgdXAtdG8tZGF0ZSBkZXBlbmRlbmNpZXNcblx0XHQvLyB3aGlsc3QgaXQncyBhY3RpdmVseSBydW5uaW5nLiBTbyBpbiB0aGUgY2FzZSBvZiBlbnN1cmluZyBpdCByZWdpc3RlcnMgdGhlIHJlYWN0aW9uXG5cdFx0Ly8gcHJvcGVybHkgZm9yIGl0c2VsZiwgd2UgbmVlZCB0byBlbnN1cmUgdGhlIGN1cnJlbnQgZWZmZWN0IGFjdHVhbGx5IGdldHNcblx0XHQvLyBzY2hlZHVsZWQuIGkuZTogYCRlZmZlY3QoKCkgPT4geCsrKWBcblx0XHRpZiAoXG5cdFx0XHRpc19ydW5lcygpICYmXG5cdFx0XHRhY3RpdmVfZWZmZWN0ICE9PSBudWxsICYmXG5cdFx0XHQoYWN0aXZlX2VmZmVjdC5mICYgQ0xFQU4pICE9PSAwICYmXG5cdFx0XHQoYWN0aXZlX2VmZmVjdC5mICYgKEJSQU5DSF9FRkZFQ1QgfCBST09UX0VGRkVDVCkpID09PSAwXG5cdFx0KSB7XG5cdFx0XHRpZiAodW50cmFja2VkX3dyaXRlcyA9PT0gbnVsbCkge1xuXHRcdFx0XHRzZXRfdW50cmFja2VkX3dyaXRlcyhbc291cmNlXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR1bnRyYWNrZWRfd3JpdGVzLnB1c2goc291cmNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoREVWICYmIGluc3BlY3RfZWZmZWN0cy5zaXplID4gMCkge1xuXHRcdFx0Y29uc3QgaW5zcGVjdHMgPSBBcnJheS5mcm9tKGluc3BlY3RfZWZmZWN0cyk7XG5cblx0XHRcdGZvciAoY29uc3QgZWZmZWN0IG9mIGluc3BlY3RzKSB7XG5cdFx0XHRcdC8vIE1hcmsgY2xlYW4gaW5zcGVjdC1lZmZlY3RzIGFzIG1heWJlIGRpcnR5IGFuZCB0aGVuIGNoZWNrIHRoZWlyIGRpcnRpbmVzc1xuXHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGp1c3QgdXBkYXRpbmcgdGhlIGVmZmVjdHMgLSB0aGlzIHdheSB3ZSBhdm9pZCBvdmVyZmlyaW5nLlxuXHRcdFx0XHRpZiAoKGVmZmVjdC5mICYgQ0xFQU4pICE9PSAwKSB7XG5cdFx0XHRcdFx0c2V0X3NpZ25hbF9zdGF0dXMoZWZmZWN0LCBNQVlCRV9ESVJUWSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoZWNrX2RpcnRpbmVzcyhlZmZlY3QpKSB7XG5cdFx0XHRcdFx0dXBkYXRlX2VmZmVjdChlZmZlY3QpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGluc3BlY3RfZWZmZWN0cy5jbGVhcigpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge251bWJlciB8IGJpZ2ludH0gVFxuICogQHBhcmFtIHtTb3VyY2U8VD59IHNvdXJjZVxuICogQHBhcmFtIHsxIHwgLTF9IFtkXVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUoc291cmNlLCBkID0gMSkge1xuXHR2YXIgdmFsdWUgPSBnZXQoc291cmNlKTtcblx0dmFyIHJlc3VsdCA9IGQgPT09IDEgPyB2YWx1ZSsrIDogdmFsdWUtLTtcblxuXHRzZXQoc291cmNlLCB2YWx1ZSk7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7bnVtYmVyIHwgYmlnaW50fSBUXG4gKiBAcGFyYW0ge1NvdXJjZTxUPn0gc291cmNlXG4gKiBAcGFyYW0gezEgfCAtMX0gW2RdXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9wcmUoc291cmNlLCBkID0gMSkge1xuXHR2YXIgdmFsdWUgPSBnZXQoc291cmNlKTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdHJldHVybiBzZXQoc291cmNlLCBkID09PSAxID8gKyt2YWx1ZSA6IC0tdmFsdWUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VmFsdWV9IHNpZ25hbFxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1cyBzaG91bGQgYmUgRElSVFkgb3IgTUFZQkVfRElSVFlcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBtYXJrX3JlYWN0aW9ucyhzaWduYWwsIHN0YXR1cykge1xuXHR2YXIgcmVhY3Rpb25zID0gc2lnbmFsLnJlYWN0aW9ucztcblx0aWYgKHJlYWN0aW9ucyA9PT0gbnVsbCkgcmV0dXJuO1xuXG5cdHZhciBydW5lcyA9IGlzX3J1bmVzKCk7XG5cdHZhciBsZW5ndGggPSByZWFjdGlvbnMubGVuZ3RoO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgcmVhY3Rpb24gPSByZWFjdGlvbnNbaV07XG5cdFx0dmFyIGZsYWdzID0gcmVhY3Rpb24uZjtcblxuXHRcdC8vIFNraXAgYW55IGVmZmVjdHMgdGhhdCBhcmUgYWxyZWFkeSBkaXJ0eVxuXHRcdGlmICgoZmxhZ3MgJiBESVJUWSkgIT09IDApIGNvbnRpbnVlO1xuXG5cdFx0Ly8gSW4gbGVnYWN5IG1vZGUsIHNraXAgdGhlIGN1cnJlbnQgZWZmZWN0IHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcHNcblx0XHRpZiAoIXJ1bmVzICYmIHJlYWN0aW9uID09PSBhY3RpdmVfZWZmZWN0KSBjb250aW51ZTtcblxuXHRcdC8vIEluc3BlY3QgZWZmZWN0cyBuZWVkIHRvIHJ1biBpbW1lZGlhdGVseSwgc28gdGhhdCB0aGUgc3RhY2sgdHJhY2UgbWFrZXMgc2Vuc2Vcblx0XHRpZiAoREVWICYmIChmbGFncyAmIElOU1BFQ1RfRUZGRUNUKSAhPT0gMCkge1xuXHRcdFx0aW5zcGVjdF9lZmZlY3RzLmFkZChyZWFjdGlvbik7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRzZXRfc2lnbmFsX3N0YXR1cyhyZWFjdGlvbiwgc3RhdHVzKTtcblxuXHRcdC8vIElmIHRoZSBzaWduYWwgYSkgd2FzIHByZXZpb3VzbHkgY2xlYW4gb3IgYikgaXMgYW4gdW5vd25lZCBkZXJpdmVkLCB0aGVuIG1hcmsgaXRcblx0XHRpZiAoKGZsYWdzICYgKENMRUFOIHwgVU5PV05FRCkpICE9PSAwKSB7XG5cdFx0XHRpZiAoKGZsYWdzICYgREVSSVZFRCkgIT09IDApIHtcblx0XHRcdFx0bWFya19yZWFjdGlvbnMoLyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAocmVhY3Rpb24pLCBNQVlCRV9ESVJUWSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzY2hlZHVsZV9lZmZlY3QoLyoqIEB0eXBlIHtFZmZlY3R9ICovIChyZWFjdGlvbikpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwgIi8qIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgc2NyaXB0cy9wcm9jZXNzLW1lc3NhZ2VzL2luZGV4LmpzLiBEbyBub3QgZWRpdCEgKi9cblxuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5cbnZhciBib2xkID0gJ2ZvbnQtd2VpZ2h0OiBib2xkJztcbnZhciBub3JtYWwgPSAnZm9udC13ZWlnaHQ6IG5vcm1hbCc7XG5cbi8qKlxuICogQXNzaWdubWVudCB0byBgJXByb3BlcnR5JWAgcHJvcGVydHkgKCVsb2NhdGlvbiUpIHdpbGwgZXZhbHVhdGUgdG8gdGhlIHJpZ2h0LWhhbmQgc2lkZSwgbm90IHRoZSB2YWx1ZSBvZiBgJXByb3BlcnR5JWAgZm9sbG93aW5nIHRoZSBhc3NpZ25tZW50LiBUaGlzIG1heSByZXN1bHQgaW4gdW5leHBlY3RlZCBiZWhhdmlvdXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWdubWVudF92YWx1ZV9zdGFsZShwcm9wZXJ0eSwgbG9jYXRpb24pIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnNvbGUud2FybihgJWNbc3ZlbHRlXSBhc3NpZ25tZW50X3ZhbHVlX3N0YWxlXFxuJWNBc3NpZ25tZW50IHRvIFxcYCR7cHJvcGVydHl9XFxgIHByb3BlcnR5ICgke2xvY2F0aW9ufSkgd2lsbCBldmFsdWF0ZSB0byB0aGUgcmlnaHQtaGFuZCBzaWRlLCBub3QgdGhlIHZhbHVlIG9mIFxcYCR7cHJvcGVydHl9XFxgIGZvbGxvd2luZyB0aGUgYXNzaWdubWVudC4gVGhpcyBtYXkgcmVzdWx0IGluIHVuZXhwZWN0ZWQgYmVoYXZpb3VyLlxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2Fzc2lnbm1lbnRfdmFsdWVfc3RhbGVgLCBib2xkLCBub3JtYWwpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYXNzaWdubWVudF92YWx1ZV9zdGFsZWApO1xuXHR9XG59XG5cbi8qKlxuICogYCViaW5kaW5nJWAgKCVsb2NhdGlvbiUpIGlzIGJpbmRpbmcgdG8gYSBub24tcmVhY3RpdmUgcHJvcGVydHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBiaW5kaW5nXG4gKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZCB8IG51bGx9IFtsb2NhdGlvbl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRpbmdfcHJvcGVydHlfbm9uX3JlYWN0aXZlKGJpbmRpbmcsIGxvY2F0aW9uKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gYmluZGluZ19wcm9wZXJ0eV9ub25fcmVhY3RpdmVcXG4lYyR7bG9jYXRpb24gPyBgXFxgJHtiaW5kaW5nfVxcYCAoJHtsb2NhdGlvbn0pIGlzIGJpbmRpbmcgdG8gYSBub24tcmVhY3RpdmUgcHJvcGVydHlgIDogYFxcYCR7YmluZGluZ31cXGAgaXMgYmluZGluZyB0byBhIG5vbi1yZWFjdGl2ZSBwcm9wZXJ0eWB9XFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYmluZGluZ19wcm9wZXJ0eV9ub25fcmVhY3RpdmVgLCBib2xkLCBub3JtYWwpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYmluZGluZ19wcm9wZXJ0eV9ub25fcmVhY3RpdmVgKTtcblx0fVxufVxuXG4vKipcbiAqIFlvdXIgYGNvbnNvbGUuJW1ldGhvZCVgIGNvbnRhaW5lZCBgJHN0YXRlYCBwcm94aWVzLiBDb25zaWRlciB1c2luZyBgJGluc3BlY3QoLi4uKWAgb3IgYCRzdGF0ZS5zbmFwc2hvdCguLi4pYCBpbnN0ZWFkXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zb2xlX2xvZ19zdGF0ZShtZXRob2QpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnNvbGUud2FybihgJWNbc3ZlbHRlXSBjb25zb2xlX2xvZ19zdGF0ZVxcbiVjWW91ciBcXGBjb25zb2xlLiR7bWV0aG9kfVxcYCBjb250YWluZWQgXFxgJHN0YXRlXFxgIHByb3hpZXMuIENvbnNpZGVyIHVzaW5nIFxcYCRpbnNwZWN0KC4uLilcXGAgb3IgXFxgJHN0YXRlLnNuYXBzaG90KC4uLilcXGAgaW5zdGVhZFxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2NvbnNvbGVfbG9nX3N0YXRlYCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2NvbnNvbGVfbG9nX3N0YXRlYCk7XG5cdH1cbn1cblxuLyoqXG4gKiAlaGFuZGxlciUgc2hvdWxkIGJlIGEgZnVuY3Rpb24uIERpZCB5b3UgbWVhbiB0byAlc3VnZ2VzdGlvbiU/XG4gKiBAcGFyYW0ge3N0cmluZ30gaGFuZGxlclxuICogQHBhcmFtIHtzdHJpbmd9IHN1Z2dlc3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50X2hhbmRsZXJfaW52YWxpZChoYW5kbGVyLCBzdWdnZXN0aW9uKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gZXZlbnRfaGFuZGxlcl9pbnZhbGlkXFxuJWMke2hhbmRsZXJ9IHNob3VsZCBiZSBhIGZ1bmN0aW9uLiBEaWQgeW91IG1lYW4gdG8gJHtzdWdnZXN0aW9ufT9cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9ldmVudF9oYW5kbGVyX2ludmFsaWRgLCBib2xkLCBub3JtYWwpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZXZlbnRfaGFuZGxlcl9pbnZhbGlkYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgYCVhdHRyaWJ1dGUlYCBhdHRyaWJ1dGUgb24gYCVodG1sJWAgY2hhbmdlZCBpdHMgdmFsdWUgYmV0d2VlbiBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzLiBUaGUgY2xpZW50IHZhbHVlLCBgJXZhbHVlJWAsIHdpbGwgYmUgaWdub3JlZCBpbiBmYXZvdXIgb2YgdGhlIHNlcnZlciB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0aW9uX2F0dHJpYnV0ZV9jaGFuZ2VkKGF0dHJpYnV0ZSwgaHRtbCwgdmFsdWUpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnNvbGUud2FybihgJWNbc3ZlbHRlXSBoeWRyYXRpb25fYXR0cmlidXRlX2NoYW5nZWRcXG4lY1RoZSBcXGAke2F0dHJpYnV0ZX1cXGAgYXR0cmlidXRlIG9uIFxcYCR7aHRtbH1cXGAgY2hhbmdlZCBpdHMgdmFsdWUgYmV0d2VlbiBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzLiBUaGUgY2xpZW50IHZhbHVlLCBcXGAke3ZhbHVlfVxcYCwgd2lsbCBiZSBpZ25vcmVkIGluIGZhdm91ciBvZiB0aGUgc2VydmVyIHZhbHVlXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaHlkcmF0aW9uX2F0dHJpYnV0ZV9jaGFuZ2VkYCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2h5ZHJhdGlvbl9hdHRyaWJ1dGVfY2hhbmdlZGApO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIHZhbHVlIG9mIGFuIGB7QGh0bWwgLi4ufWAgYmxvY2sgJWxvY2F0aW9uJSBjaGFuZ2VkIGJldHdlZW4gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycy4gVGhlIGNsaWVudCB2YWx1ZSB3aWxsIGJlIGlnbm9yZWQgaW4gZmF2b3VyIG9mIHRoZSBzZXJ2ZXIgdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbH0gW2xvY2F0aW9uXVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0aW9uX2h0bWxfY2hhbmdlZChsb2NhdGlvbikge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc29sZS53YXJuKGAlY1tzdmVsdGVdIGh5ZHJhdGlvbl9odG1sX2NoYW5nZWRcXG4lYyR7bG9jYXRpb24gPyBgVGhlIHZhbHVlIG9mIGFuIFxcYHtAaHRtbCAuLi59XFxgIGJsb2NrICR7bG9jYXRpb259IGNoYW5nZWQgYmV0d2VlbiBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzLiBUaGUgY2xpZW50IHZhbHVlIHdpbGwgYmUgaWdub3JlZCBpbiBmYXZvdXIgb2YgdGhlIHNlcnZlciB2YWx1ZWAgOiAnVGhlIHZhbHVlIG9mIGFuIGB7QGh0bWwgLi4ufWAgYmxvY2sgY2hhbmdlZCBiZXR3ZWVuIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMuIFRoZSBjbGllbnQgdmFsdWUgd2lsbCBiZSBpZ25vcmVkIGluIGZhdm91ciBvZiB0aGUgc2VydmVyIHZhbHVlJ31cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9oeWRyYXRpb25faHRtbF9jaGFuZ2VkYCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2h5ZHJhdGlvbl9odG1sX2NoYW5nZWRgKTtcblx0fVxufVxuXG4vKipcbiAqIEh5ZHJhdGlvbiBmYWlsZWQgYmVjYXVzZSB0aGUgaW5pdGlhbCBVSSBkb2VzIG5vdCBtYXRjaCB3aGF0IHdhcyByZW5kZXJlZCBvbiB0aGUgc2VydmVyLiBUaGUgZXJyb3Igb2NjdXJyZWQgbmVhciAlbG9jYXRpb24lXG4gKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZCB8IG51bGx9IFtsb2NhdGlvbl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGlvbl9taXNtYXRjaChsb2NhdGlvbikge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc29sZS53YXJuKGAlY1tzdmVsdGVdIGh5ZHJhdGlvbl9taXNtYXRjaFxcbiVjJHtsb2NhdGlvbiA/IGBIeWRyYXRpb24gZmFpbGVkIGJlY2F1c2UgdGhlIGluaXRpYWwgVUkgZG9lcyBub3QgbWF0Y2ggd2hhdCB3YXMgcmVuZGVyZWQgb24gdGhlIHNlcnZlci4gVGhlIGVycm9yIG9jY3VycmVkIG5lYXIgJHtsb2NhdGlvbn1gIDogJ0h5ZHJhdGlvbiBmYWlsZWQgYmVjYXVzZSB0aGUgaW5pdGlhbCBVSSBkb2VzIG5vdCBtYXRjaCB3aGF0IHdhcyByZW5kZXJlZCBvbiB0aGUgc2VydmVyJ31cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9oeWRyYXRpb25fbWlzbWF0Y2hgLCBib2xkLCBub3JtYWwpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaHlkcmF0aW9uX21pc21hdGNoYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgYHJlbmRlcmAgZnVuY3Rpb24gcGFzc2VkIHRvIGBjcmVhdGVSYXdTbmlwcGV0YCBzaG91bGQgcmV0dXJuIEhUTUwgZm9yIGEgc2luZ2xlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRfcmF3X3NuaXBwZXRfcmVuZGVyKCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc29sZS53YXJuKGAlY1tzdmVsdGVdIGludmFsaWRfcmF3X3NuaXBwZXRfcmVuZGVyXFxuJWNUaGUgXFxgcmVuZGVyXFxgIGZ1bmN0aW9uIHBhc3NlZCB0byBcXGBjcmVhdGVSYXdTbmlwcGV0XFxgIHNob3VsZCByZXR1cm4gSFRNTCBmb3IgYSBzaW5nbGUgZWxlbWVudFxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2ludmFsaWRfcmF3X3NuaXBwZXRfcmVuZGVyYCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2ludmFsaWRfcmF3X3NuaXBwZXRfcmVuZGVyYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBEZXRlY3RlZCBhIG1pZ3JhdGVkIGAkOmAgcmVhY3RpdmUgYmxvY2sgaW4gYCVmaWxlbmFtZSVgIHRoYXQgYm90aCBhY2Nlc3NlcyBhbmQgdXBkYXRlcyB0aGUgc2FtZSByZWFjdGl2ZSB2YWx1ZS4gVGhpcyBtYXkgY2F1c2UgcmVjdXJzaXZlIHVwZGF0ZXMgd2hlbiBjb252ZXJ0ZWQgdG8gYW4gYCRlZmZlY3RgLlxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZWdhY3lfcmVjdXJzaXZlX3JlYWN0aXZlX2Jsb2NrKGZpbGVuYW1lKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gbGVnYWN5X3JlY3Vyc2l2ZV9yZWFjdGl2ZV9ibG9ja1xcbiVjRGV0ZWN0ZWQgYSBtaWdyYXRlZCBcXGAkOlxcYCByZWFjdGl2ZSBibG9jayBpbiBcXGAke2ZpbGVuYW1lfVxcYCB0aGF0IGJvdGggYWNjZXNzZXMgYW5kIHVwZGF0ZXMgdGhlIHNhbWUgcmVhY3RpdmUgdmFsdWUuIFRoaXMgbWF5IGNhdXNlIHJlY3Vyc2l2ZSB1cGRhdGVzIHdoZW4gY29udmVydGVkIHRvIGFuIFxcYCRlZmZlY3RcXGAuXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvbGVnYWN5X3JlY3Vyc2l2ZV9yZWFjdGl2ZV9ibG9ja2AsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9sZWdhY3lfcmVjdXJzaXZlX3JlYWN0aXZlX2Jsb2NrYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBUcmllZCB0byB1bm1vdW50IGEgY29tcG9uZW50IHRoYXQgd2FzIG5vdCBtb3VudGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaWZlY3ljbGVfZG91YmxlX3VubW91bnQoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gbGlmZWN5Y2xlX2RvdWJsZV91bm1vdW50XFxuJWNUcmllZCB0byB1bm1vdW50IGEgY29tcG9uZW50IHRoYXQgd2FzIG5vdCBtb3VudGVkXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvbGlmZWN5Y2xlX2RvdWJsZV91bm1vdW50YCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2xpZmVjeWNsZV9kb3VibGVfdW5tb3VudGApO1xuXHR9XG59XG5cbi8qKlxuICogJXBhcmVudCUgcGFzc2VkIHByb3BlcnR5IGAlcHJvcCVgIHRvICVjaGlsZCUgd2l0aCBgYmluZDpgLCBidXQgaXRzIHBhcmVudCBjb21wb25lbnQgJW93bmVyJSBkaWQgbm90IGRlY2xhcmUgYCVwcm9wJWAgYXMgYSBiaW5kaW5nLiBDb25zaWRlciBjcmVhdGluZyBhIGJpbmRpbmcgYmV0d2VlbiAlb3duZXIlIGFuZCAlcGFyZW50JSAoZS5nLiBgYmluZDolcHJvcCU9ey4uLn1gIGluc3RlYWQgb2YgYCVwcm9wJT17Li4ufWApXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcFxuICogQHBhcmFtIHtzdHJpbmd9IGNoaWxkXG4gKiBAcGFyYW0ge3N0cmluZ30gb3duZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG93bmVyc2hpcF9pbnZhbGlkX2JpbmRpbmcocGFyZW50LCBwcm9wLCBjaGlsZCwgb3duZXIpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnNvbGUud2FybihgJWNbc3ZlbHRlXSBvd25lcnNoaXBfaW52YWxpZF9iaW5kaW5nXFxuJWMke3BhcmVudH0gcGFzc2VkIHByb3BlcnR5IFxcYCR7cHJvcH1cXGAgdG8gJHtjaGlsZH0gd2l0aCBcXGBiaW5kOlxcYCwgYnV0IGl0cyBwYXJlbnQgY29tcG9uZW50ICR7b3duZXJ9IGRpZCBub3QgZGVjbGFyZSBcXGAke3Byb3B9XFxgIGFzIGEgYmluZGluZy4gQ29uc2lkZXIgY3JlYXRpbmcgYSBiaW5kaW5nIGJldHdlZW4gJHtvd25lcn0gYW5kICR7cGFyZW50fSAoZS5nLiBcXGBiaW5kOiR7cHJvcH09ey4uLn1cXGAgaW5zdGVhZCBvZiBcXGAke3Byb3B9PXsuLi59XFxgKVxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL293bmVyc2hpcF9pbnZhbGlkX2JpbmRpbmdgLCBib2xkLCBub3JtYWwpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihgaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvb3duZXJzaGlwX2ludmFsaWRfYmluZGluZ2ApO1xuXHR9XG59XG5cbi8qKlxuICogTXV0YXRpbmcgdW5ib3VuZCBwcm9wcyAoYCVuYW1lJWAsIGF0ICVsb2NhdGlvbiUpIGlzIHN0cm9uZ2x5IGRpc2NvdXJhZ2VkLiBDb25zaWRlciB1c2luZyBgYmluZDolcHJvcCU9ey4uLn1gIGluICVwYXJlbnQlIChvciB1c2luZyBhIGNhbGxiYWNrKSBpbnN0ZWFkXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcFxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3duZXJzaGlwX2ludmFsaWRfbXV0YXRpb24obmFtZSwgbG9jYXRpb24sIHByb3AsIHBhcmVudCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc29sZS53YXJuKGAlY1tzdmVsdGVdIG93bmVyc2hpcF9pbnZhbGlkX211dGF0aW9uXFxuJWNNdXRhdGluZyB1bmJvdW5kIHByb3BzIChcXGAke25hbWV9XFxgLCBhdCAke2xvY2F0aW9ufSkgaXMgc3Ryb25nbHkgZGlzY291cmFnZWQuIENvbnNpZGVyIHVzaW5nIFxcYGJpbmQ6JHtwcm9wfT17Li4ufVxcYCBpbiAke3BhcmVudH0gKG9yIHVzaW5nIGEgY2FsbGJhY2spIGluc3RlYWRcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9vd25lcnNoaXBfaW52YWxpZF9tdXRhdGlvbmAsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9vd25lcnNoaXBfaW52YWxpZF9tdXRhdGlvbmApO1xuXHR9XG59XG5cbi8qKlxuICogUmVhY3RpdmUgYCRzdGF0ZSguLi4pYCBwcm94aWVzIGFuZCB0aGUgdmFsdWVzIHRoZXkgcHJveHkgaGF2ZSBkaWZmZXJlbnQgaWRlbnRpdGllcy4gQmVjYXVzZSBvZiB0aGlzLCBjb21wYXJpc29ucyB3aXRoIGAlb3BlcmF0b3IlYCB3aWxsIHByb2R1Y2UgdW5leHBlY3RlZCByZXN1bHRzXG4gKiBAcGFyYW0ge3N0cmluZ30gb3BlcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoKG9wZXJhdG9yKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gc3RhdGVfcHJveHlfZXF1YWxpdHlfbWlzbWF0Y2hcXG4lY1JlYWN0aXZlIFxcYCRzdGF0ZSguLi4pXFxgIHByb3hpZXMgYW5kIHRoZSB2YWx1ZXMgdGhleSBwcm94eSBoYXZlIGRpZmZlcmVudCBpZGVudGl0aWVzLiBCZWNhdXNlIG9mIHRoaXMsIGNvbXBhcmlzb25zIHdpdGggXFxgJHtvcGVyYXRvcn1cXGAgd2lsbCBwcm9kdWNlIHVuZXhwZWN0ZWQgcmVzdWx0c1xcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL3N0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoYCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL3N0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgYHNsaWRlYCB0cmFuc2l0aW9uIGRvZXMgbm90IHdvcmsgY29ycmVjdGx5IGZvciBlbGVtZW50cyB3aXRoIGBkaXNwbGF5OiAldmFsdWUlYFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uX3NsaWRlX2Rpc3BsYXkodmFsdWUpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnNvbGUud2FybihgJWNbc3ZlbHRlXSB0cmFuc2l0aW9uX3NsaWRlX2Rpc3BsYXlcXG4lY1RoZSBcXGBzbGlkZVxcYCB0cmFuc2l0aW9uIGRvZXMgbm90IHdvcmsgY29ycmVjdGx5IGZvciBlbGVtZW50cyB3aXRoIFxcYGRpc3BsYXk6ICR7dmFsdWV9XFxgXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvdHJhbnNpdGlvbl9zbGlkZV9kaXNwbGF5YCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL3RyYW5zaXRpb25fc2xpZGVfZGlzcGxheWApO1xuXHR9XG59IiwgIi8qKiBAaW1wb3J0IHsgVGVtcGxhdGVOb2RlIH0gZnJvbSAnI2NsaWVudCcgKi9cblxuaW1wb3J0IHtcblx0SFlEUkFUSU9OX0VORCxcblx0SFlEUkFUSU9OX0VSUk9SLFxuXHRIWURSQVRJT05fU1RBUlQsXG5cdEhZRFJBVElPTl9TVEFSVF9FTFNFXG59IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgKiBhcyB3IGZyb20gJy4uL3dhcm5pbmdzLmpzJztcbmltcG9ydCB7IGdldF9uZXh0X3NpYmxpbmcgfSBmcm9tICcuL29wZXJhdGlvbnMuanMnO1xuXG4vKipcbiAqIFVzZSB0aGlzIHZhcmlhYmxlIHRvIGd1YXJkIGV2ZXJ5dGhpbmcgcmVsYXRlZCB0byBoeWRyYXRpb24gY29kZSBzbyBpdCBjYW4gYmUgdHJlZXNoYWtlbiBvdXRcbiAqIGlmIHRoZSB1c2VyIGRvZXNuJ3QgdXNlIHRoZSBgaHlkcmF0ZWAgbWV0aG9kIGFuZCB0aGVzZSBjb2RlIHBhdGhzIGFyZSB0aGVyZWZvcmUgbm90IG5lZWRlZC5cbiAqL1xuZXhwb3J0IGxldCBoeWRyYXRpbmcgPSBmYWxzZTtcblxuLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfaHlkcmF0aW5nKHZhbHVlKSB7XG5cdGh5ZHJhdGluZyA9IHZhbHVlO1xufVxuXG4vKipcbiAqIFRoZSBub2RlIHRoYXQgaXMgY3VycmVudGx5IGJlaW5nIGh5ZHJhdGVkLiBUaGlzIHN0YXJ0cyBvdXQgYXMgdGhlIGZpcnN0IG5vZGUgaW5zaWRlIHRoZSBvcGVuaW5nXG4gKiA8IS0tWy0tPiBjb21tZW50LCBhbmQgdXBkYXRlcyBlYWNoIHRpbWUgYSBjb21wb25lbnQgY2FsbHMgYCQuY2hpbGQoLi4uKWAgb3IgYCQuc2libGluZyguLi4pYC5cbiAqIFdoZW4gZW50ZXJpbmcgYSBibG9jayAoZS5nLiBgeyNpZiAuLi59YCksIGBoeWRyYXRlX25vZGVgIGlzIHRoZSBibG9jayBvcGVuaW5nIGNvbW1lbnQ7IGJ5IHRoZVxuICogdGltZSB3ZSBsZWF2ZSB0aGUgYmxvY2sgaXQgaXMgdGhlIGNsb3NpbmcgY29tbWVudCwgd2hpY2ggc2VydmVzIGFzIHRoZSBibG9jaydzIGFuY2hvci5cbiAqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9XG4gKi9cbmV4cG9ydCBsZXQgaHlkcmF0ZV9ub2RlO1xuXG4vKiogQHBhcmFtIHtUZW1wbGF0ZU5vZGV9IG5vZGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfaHlkcmF0ZV9ub2RlKG5vZGUpIHtcblx0aWYgKG5vZGUgPT09IG51bGwpIHtcblx0XHR3Lmh5ZHJhdGlvbl9taXNtYXRjaCgpO1xuXHRcdHRocm93IEhZRFJBVElPTl9FUlJPUjtcblx0fVxuXG5cdHJldHVybiAoaHlkcmF0ZV9ub2RlID0gbm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlX25leHQoKSB7XG5cdHJldHVybiBzZXRfaHlkcmF0ZV9ub2RlKC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZ2V0X25leHRfc2libGluZyhoeWRyYXRlX25vZGUpKSk7XG59XG5cbi8qKiBAcGFyYW0ge1RlbXBsYXRlTm9kZX0gbm9kZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0KG5vZGUpIHtcblx0aWYgKCFoeWRyYXRpbmcpIHJldHVybjtcblxuXHQvLyBJZiB0aGUgbm9kZSBoYXMgcmVtYWluaW5nIHNpYmxpbmdzLCBzb21ldGhpbmcgaGFzIGdvbmUgd3Jvbmdcblx0aWYgKGdldF9uZXh0X3NpYmxpbmcoaHlkcmF0ZV9ub2RlKSAhPT0gbnVsbCkge1xuXHRcdHcuaHlkcmF0aW9uX21pc21hdGNoKCk7XG5cdFx0dGhyb3cgSFlEUkFUSU9OX0VSUk9SO1xuXHR9XG5cblx0aHlkcmF0ZV9ub2RlID0gbm9kZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxUZW1wbGF0ZUVsZW1lbnR9IHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlX3RlbXBsYXRlKHRlbXBsYXRlKSB7XG5cdGlmIChoeWRyYXRpbmcpIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRlbXBsYXRlTm9kZSBkb2Vzbid0IGluY2x1ZGUgRG9jdW1lbnRGcmFnbWVudCwgYnV0IGl0J3MgYWN0dWFsbHkgZmluZVxuXHRcdGh5ZHJhdGVfbm9kZSA9IHRlbXBsYXRlLmNvbnRlbnQ7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHQoY291bnQgPSAxKSB7XG5cdGlmIChoeWRyYXRpbmcpIHtcblx0XHR2YXIgaSA9IGNvdW50O1xuXHRcdHZhciBub2RlID0gaHlkcmF0ZV9ub2RlO1xuXG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0bm9kZSA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZ2V0X25leHRfc2libGluZyhub2RlKSk7XG5cdFx0fVxuXG5cdFx0aHlkcmF0ZV9ub2RlID0gbm9kZTtcblx0fVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIG5vZGVzIHN0YXJ0aW5nIGF0IGBoeWRyYXRlX25vZGVgIHVwIHVudGlsIHRoZSBuZXh0IGh5ZHJhdGlvbiBlbmQgY29tbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlX25vZGVzKCkge1xuXHR2YXIgZGVwdGggPSAwO1xuXHR2YXIgbm9kZSA9IGh5ZHJhdGVfbm9kZTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSA4KSB7XG5cdFx0XHR2YXIgZGF0YSA9IC8qKiBAdHlwZSB7Q29tbWVudH0gKi8gKG5vZGUpLmRhdGE7XG5cblx0XHRcdGlmIChkYXRhID09PSBIWURSQVRJT05fRU5EKSB7XG5cdFx0XHRcdGlmIChkZXB0aCA9PT0gMCkgcmV0dXJuIG5vZGU7XG5cdFx0XHRcdGRlcHRoIC09IDE7XG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEgPT09IEhZRFJBVElPTl9TVEFSVCB8fCBkYXRhID09PSBIWURSQVRJT05fU1RBUlRfRUxTRSkge1xuXHRcdFx0XHRkZXB0aCArPSAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBuZXh0ID0gLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChnZXRfbmV4dF9zaWJsaW5nKG5vZGUpKTtcblx0XHRub2RlLnJlbW92ZSgpO1xuXHRcdG5vZGUgPSBuZXh0O1xuXHR9XG59XG4iLCAiaW1wb3J0ICogYXMgdyBmcm9tICcuLi93YXJuaW5ncy5qcyc7XG5pbXBvcnQgeyBnZXRfcHJveGllZF92YWx1ZSB9IGZyb20gJy4uL3Byb3h5LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfYXJyYXlfcHJvdG90eXBlX3dhcm5pbmdzKCkge1xuXHRjb25zdCBhcnJheV9wcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cdC8vIFRoZSBSRVBMIGVuZHMgdXAgaGVyZSBvdmVyIGFuZCBvdmVyLCBhbmQgdGhpcyBwcmV2ZW50cyBpdCBmcm9tIGFkZGluZyBtb3JlIGFuZCBtb3JlIHBhdGNoZXNcblx0Ly8gb2YgdGhlIHNhbWUga2luZCB0byB0aGUgcHJvdG90eXBlLCB3aGljaCB3b3VsZCBzbG93IGRvd24gZXZlcnl0aGluZyBvdmVyIHRpbWUuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0Y29uc3QgY2xlYW51cCA9IEFycmF5Ll9fc3ZlbHRlX2NsZWFudXA7XG5cdGlmIChjbGVhbnVwKSB7XG5cdFx0Y2xlYW51cCgpO1xuXHR9XG5cblx0Y29uc3QgeyBpbmRleE9mLCBsYXN0SW5kZXhPZiwgaW5jbHVkZXMgfSA9IGFycmF5X3Byb3RvdHlwZTtcblxuXHRhcnJheV9wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChpdGVtLCBmcm9tX2luZGV4KSB7XG5cdFx0Y29uc3QgaW5kZXggPSBpbmRleE9mLmNhbGwodGhpcywgaXRlbSwgZnJvbV9pbmRleCk7XG5cblx0XHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gZnJvbV9pbmRleCA/PyAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRpZiAoZ2V0X3Byb3hpZWRfdmFsdWUodGhpc1tpXSkgPT09IGl0ZW0pIHtcblx0XHRcdFx0XHR3LnN0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoKCdhcnJheS5pbmRleE9mKC4uLiknKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBpbmRleDtcblx0fTtcblxuXHRhcnJheV9wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiAoaXRlbSwgZnJvbV9pbmRleCkge1xuXHRcdC8vIHdlIG5lZWQgdG8gc3BlY2lmeSB0aGlzLmxlbmd0aCAtIDEgYmVjYXVzZSBpdCdzIHByb2JhYmx5IHVzaW5nIHNvbWV0aGluZyBsaWtlXG5cdFx0Ly8gYGFyZ3VtZW50c2AgaW5zaWRlIHNvIHBhc3NpbmcgdW5kZWZpbmVkIGlzIGRpZmZlcmVudCBmcm9tIG5vdCBwYXNzaW5nIGFueXRoaW5nXG5cdFx0Y29uc3QgaW5kZXggPSBsYXN0SW5kZXhPZi5jYWxsKHRoaXMsIGl0ZW0sIGZyb21faW5kZXggPz8gdGhpcy5sZW5ndGggLSAxKTtcblxuXHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IChmcm9tX2luZGV4ID8/IHRoaXMubGVuZ3RoIC0gMSk7IGkgKz0gMSkge1xuXHRcdFx0XHRpZiAoZ2V0X3Byb3hpZWRfdmFsdWUodGhpc1tpXSkgPT09IGl0ZW0pIHtcblx0XHRcdFx0XHR3LnN0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoKCdhcnJheS5sYXN0SW5kZXhPZiguLi4pJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH07XG5cblx0YXJyYXlfcHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gKGl0ZW0sIGZyb21faW5kZXgpIHtcblx0XHRjb25zdCBoYXMgPSBpbmNsdWRlcy5jYWxsKHRoaXMsIGl0ZW0sIGZyb21faW5kZXgpO1xuXG5cdFx0aWYgKCFoYXMpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRpZiAoZ2V0X3Byb3hpZWRfdmFsdWUodGhpc1tpXSkgPT09IGl0ZW0pIHtcblx0XHRcdFx0XHR3LnN0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoKCdhcnJheS5pbmNsdWRlcyguLi4pJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaGFzO1xuXHR9O1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0QXJyYXkuX19zdmVsdGVfY2xlYW51cCA9ICgpID0+IHtcblx0XHRhcnJheV9wcm90b3R5cGUuaW5kZXhPZiA9IGluZGV4T2Y7XG5cdFx0YXJyYXlfcHJvdG90eXBlLmxhc3RJbmRleE9mID0gbGFzdEluZGV4T2Y7XG5cdFx0YXJyYXlfcHJvdG90eXBlLmluY2x1ZGVzID0gaW5jbHVkZXM7XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IGFcbiAqIEBwYXJhbSB7YW55fSBiXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGVxdWFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmljdF9lcXVhbHMoYSwgYiwgZXF1YWwgPSB0cnVlKSB7XG5cdC8vIHRyeS1jYXRjaCBuZWVkZWQgYmVjYXVzZSB0aGlzIHRyaWVzIHRvIHJlYWQgcHJvcGVydGllcyBvZiBgYWAgYW5kIGBiYCxcblx0Ly8gd2hpY2ggY291bGQgYmUgZGlzYWxsb3dlZCBmb3IgZXhhbXBsZSBpbiBhIHNlY3VyZSBjb250ZXh0XG5cdHRyeSB7XG5cdFx0aWYgKChhID09PSBiKSAhPT0gKGdldF9wcm94aWVkX3ZhbHVlKGEpID09PSBnZXRfcHJveGllZF92YWx1ZShiKSkpIHtcblx0XHRcdHcuc3RhdGVfcHJveHlfZXF1YWxpdHlfbWlzbWF0Y2goZXF1YWwgPyAnPT09JyA6ICchPT0nKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cblxuXHRyZXR1cm4gKGEgPT09IGIpID09PSBlcXVhbDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gYVxuICogQHBhcmFtIHthbnl9IGJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZXF1YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIsIGVxdWFsID0gdHJ1ZSkge1xuXHRpZiAoKGEgPT0gYikgIT09IChnZXRfcHJveGllZF92YWx1ZShhKSA9PSBnZXRfcHJveGllZF92YWx1ZShiKSkpIHtcblx0XHR3LnN0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoKGVxdWFsID8gJz09JyA6ICchPScpO1xuXHR9XG5cblx0cmV0dXJuIChhID09IGIpID09PSBlcXVhbDtcbn1cbiIsICIvKiogQGltcG9ydCB7IFRlbXBsYXRlTm9kZSB9IGZyb20gJyNjbGllbnQnICovXG5pbXBvcnQgeyBoeWRyYXRlX25vZGUsIGh5ZHJhdGluZywgc2V0X2h5ZHJhdGVfbm9kZSB9IGZyb20gJy4vaHlkcmF0aW9uLmpzJztcbmltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuaW1wb3J0IHsgaW5pdF9hcnJheV9wcm90b3R5cGVfd2FybmluZ3MgfSBmcm9tICcuLi9kZXYvZXF1YWxpdHkuanMnO1xuaW1wb3J0IHsgZ2V0X2Rlc2NyaXB0b3IsIGlzX2V4dGVuc2libGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuXG4vLyBleHBvcnQgdGhlc2UgZm9yIHJlZmVyZW5jZSBpbiB0aGUgY29tcGlsZWQgY29kZSwgbWFraW5nIGdsb2JhbCBuYW1lIGRlZHVwbGljYXRpb24gdW5uZWNlc3Nhcnlcbi8qKiBAdHlwZSB7V2luZG93fSAqL1xuZXhwb3J0IHZhciAkd2luZG93O1xuXG4vKiogQHR5cGUge0RvY3VtZW50fSAqL1xuZXhwb3J0IHZhciAkZG9jdW1lbnQ7XG5cbi8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbmV4cG9ydCB2YXIgaXNfZmlyZWZveDtcblxuLyoqIEB0eXBlIHsoKSA9PiBOb2RlIHwgbnVsbH0gKi9cbnZhciBmaXJzdF9jaGlsZF9nZXR0ZXI7XG4vKiogQHR5cGUgeygpID0+IE5vZGUgfCBudWxsfSAqL1xudmFyIG5leHRfc2libGluZ19nZXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGVzZSBsYXppbHkgdG8gYXZvaWQgaXNzdWVzIHdoZW4gdXNpbmcgdGhlIHJ1bnRpbWUgaW4gYSBzZXJ2ZXIgY29udGV4dFxuICogd2hlcmUgdGhlc2UgZ2xvYmFscyBhcmUgbm90IGF2YWlsYWJsZSB3aGlsZSBhdm9pZGluZyBhIHNlcGFyYXRlIHNlcnZlciBlbnRyeSBwb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9vcGVyYXRpb25zKCkge1xuXHRpZiAoJHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0JHdpbmRvdyA9IHdpbmRvdztcblx0JGRvY3VtZW50ID0gZG9jdW1lbnQ7XG5cdGlzX2ZpcmVmb3ggPSAvRmlyZWZveC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuXHR2YXIgZWxlbWVudF9wcm90b3R5cGUgPSBFbGVtZW50LnByb3RvdHlwZTtcblx0dmFyIG5vZGVfcHJvdG90eXBlID0gTm9kZS5wcm90b3R5cGU7XG5cdHZhciB0ZXh0X3Byb3RvdHlwZSA9IFRleHQucHJvdG90eXBlO1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0Zmlyc3RfY2hpbGRfZ2V0dGVyID0gZ2V0X2Rlc2NyaXB0b3Iobm9kZV9wcm90b3R5cGUsICdmaXJzdENoaWxkJykuZ2V0O1xuXHQvLyBAdHMtaWdub3JlXG5cdG5leHRfc2libGluZ19nZXR0ZXIgPSBnZXRfZGVzY3JpcHRvcihub2RlX3Byb3RvdHlwZSwgJ25leHRTaWJsaW5nJykuZ2V0O1xuXG5cdGlmIChpc19leHRlbnNpYmxlKGVsZW1lbnRfcHJvdG90eXBlKSkge1xuXHRcdC8vIHRoZSBmb2xsb3dpbmcgYXNzaWdubWVudHMgaW1wcm92ZSBwZXJmIG9mIGxvb2t1cHMgb24gRE9NIG5vZGVzXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdGVsZW1lbnRfcHJvdG90eXBlLl9fY2xpY2sgPSB1bmRlZmluZWQ7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdGVsZW1lbnRfcHJvdG90eXBlLl9fY2xhc3NOYW1lID0gdW5kZWZpbmVkO1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRlbGVtZW50X3Byb3RvdHlwZS5fX2F0dHJpYnV0ZXMgPSBudWxsO1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRlbGVtZW50X3Byb3RvdHlwZS5fX3N0eWxlID0gdW5kZWZpbmVkO1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRlbGVtZW50X3Byb3RvdHlwZS5fX2UgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpZiAoaXNfZXh0ZW5zaWJsZSh0ZXh0X3Byb3RvdHlwZSkpIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0dGV4dF9wcm90b3R5cGUuX190ID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aWYgKERFVikge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRlbGVtZW50X3Byb3RvdHlwZS5fX3N2ZWx0ZV9tZXRhID0gbnVsbDtcblxuXHRcdGluaXRfYXJyYXlfcHJvdG90eXBlX3dhcm5pbmdzKCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtUZXh0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX3RleHQodmFsdWUgPSAnJykge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gTlxuICogQHBhcmFtIHtOfSBub2RlXG4gKiBAcmV0dXJucyB7Tm9kZSB8IG51bGx9XG4gKi9cbi8qQF9fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9maXJzdF9jaGlsZChub2RlKSB7XG5cdHJldHVybiBmaXJzdF9jaGlsZF9nZXR0ZXIuY2FsbChub2RlKTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge05vZGV9IE5cbiAqIEBwYXJhbSB7Tn0gbm9kZVxuICogQHJldHVybnMge05vZGUgfCBudWxsfVxuICovXG4vKkBfX05PX1NJREVfRUZGRUNUU19fKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfbmV4dF9zaWJsaW5nKG5vZGUpIHtcblx0cmV0dXJuIG5leHRfc2libGluZ19nZXR0ZXIuY2FsbChub2RlKTtcbn1cblxuLyoqXG4gKiBEb24ndCBtYXJrIHRoaXMgYXMgc2lkZS1lZmZlY3QtZnJlZSwgaHlkcmF0aW9uIG5lZWRzIHRvIHdhbGsgYWxsIG5vZGVzXG4gKiBAdGVtcGxhdGUge05vZGV9IE5cbiAqIEBwYXJhbSB7Tn0gbm9kZVxuICogQHBhcmFtIHtib29sZWFufSBpc190ZXh0XG4gKiBAcmV0dXJucyB7Tm9kZSB8IG51bGx9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZChub2RlLCBpc190ZXh0KSB7XG5cdGlmICghaHlkcmF0aW5nKSB7XG5cdFx0cmV0dXJuIGdldF9maXJzdF9jaGlsZChub2RlKTtcblx0fVxuXG5cdHZhciBjaGlsZCA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZ2V0X2ZpcnN0X2NoaWxkKGh5ZHJhdGVfbm9kZSkpO1xuXG5cdC8vIENoaWxkIGNhbiBiZSBudWxsIGlmIHdlIGhhdmUgYW4gZWxlbWVudCB3aXRoIGEgc2luZ2xlIGNoaWxkLCBsaWtlIGA8cD57dGV4dH08L3A+YCwgd2hlcmUgYHRleHRgIGlzIGVtcHR5XG5cdGlmIChjaGlsZCA9PT0gbnVsbCkge1xuXHRcdGNoaWxkID0gaHlkcmF0ZV9ub2RlLmFwcGVuZENoaWxkKGNyZWF0ZV90ZXh0KCkpO1xuXHR9IGVsc2UgaWYgKGlzX3RleHQgJiYgY2hpbGQubm9kZVR5cGUgIT09IDMpIHtcblx0XHR2YXIgdGV4dCA9IGNyZWF0ZV90ZXh0KCk7XG5cdFx0Y2hpbGQ/LmJlZm9yZSh0ZXh0KTtcblx0XHRzZXRfaHlkcmF0ZV9ub2RlKHRleHQpO1xuXHRcdHJldHVybiB0ZXh0O1xuXHR9XG5cblx0c2V0X2h5ZHJhdGVfbm9kZShjaGlsZCk7XG5cdHJldHVybiBjaGlsZDtcbn1cblxuLyoqXG4gKiBEb24ndCBtYXJrIHRoaXMgYXMgc2lkZS1lZmZlY3QtZnJlZSwgaHlkcmF0aW9uIG5lZWRzIHRvIHdhbGsgYWxsIG5vZGVzXG4gKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnQgfCBUZW1wbGF0ZU5vZGVbXX0gZnJhZ21lbnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNfdGV4dFxuICogQHJldHVybnMge05vZGUgfCBudWxsfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RfY2hpbGQoZnJhZ21lbnQsIGlzX3RleHQpIHtcblx0aWYgKCFoeWRyYXRpbmcpIHtcblx0XHQvLyB3aGVuIG5vdCBoeWRyYXRpbmcsIGBmcmFnbWVudGAgaXMgYSBgRG9jdW1lbnRGcmFnbWVudGAgKHRoZSByZXN1bHQgb2YgY2FsbGluZyBgb3Blbl9mcmFnYClcblx0XHR2YXIgZmlyc3QgPSAvKiogQHR5cGUge0RvY3VtZW50RnJhZ21lbnR9ICovIChnZXRfZmlyc3RfY2hpbGQoLyoqIEB0eXBlIHtOb2RlfSAqLyAoZnJhZ21lbnQpKSk7XG5cblx0XHQvLyBUT0RPIHByZXZlbnQgdXNlciBjb21tZW50cyB3aXRoIHRoZSBlbXB0eSBzdHJpbmcgd2hlbiBwcmVzZXJ2ZUNvbW1lbnRzIGlzIHRydWVcblx0XHRpZiAoZmlyc3QgaW5zdGFuY2VvZiBDb21tZW50ICYmIGZpcnN0LmRhdGEgPT09ICcnKSByZXR1cm4gZ2V0X25leHRfc2libGluZyhmaXJzdCk7XG5cblx0XHRyZXR1cm4gZmlyc3Q7XG5cdH1cblxuXHQvLyBpZiBhbiB7ZXhwcmVzc2lvbn0gaXMgZW1wdHkgZHVyaW5nIFNTUiwgdGhlcmUgbWlnaHQgYmUgbm9cblx0Ly8gdGV4dCBub2RlIHRvIGh5ZHJhdGUgXHUyMDE0IHdlIG11c3QgdGhlcmVmb3JlIGNyZWF0ZSBvbmVcblx0aWYgKGlzX3RleHQgJiYgaHlkcmF0ZV9ub2RlPy5ub2RlVHlwZSAhPT0gMykge1xuXHRcdHZhciB0ZXh0ID0gY3JlYXRlX3RleHQoKTtcblxuXHRcdGh5ZHJhdGVfbm9kZT8uYmVmb3JlKHRleHQpO1xuXHRcdHNldF9oeWRyYXRlX25vZGUodGV4dCk7XG5cdFx0cmV0dXJuIHRleHQ7XG5cdH1cblxuXHRyZXR1cm4gaHlkcmF0ZV9ub2RlO1xufVxuXG4vKipcbiAqIERvbid0IG1hcmsgdGhpcyBhcyBzaWRlLWVmZmVjdC1mcmVlLCBoeWRyYXRpb24gbmVlZHMgdG8gd2FsayBhbGwgbm9kZXNcbiAqIEBwYXJhbSB7VGVtcGxhdGVOb2RlfSBub2RlXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNfdGV4dFxuICogQHJldHVybnMge05vZGUgfCBudWxsfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2libGluZyhub2RlLCBjb3VudCA9IDEsIGlzX3RleHQgPSBmYWxzZSkge1xuXHRsZXQgbmV4dF9zaWJsaW5nID0gaHlkcmF0aW5nID8gaHlkcmF0ZV9ub2RlIDogbm9kZTtcblx0dmFyIGxhc3Rfc2libGluZztcblxuXHR3aGlsZSAoY291bnQtLSkge1xuXHRcdGxhc3Rfc2libGluZyA9IG5leHRfc2libGluZztcblx0XHRuZXh0X3NpYmxpbmcgPSAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9uZXh0X3NpYmxpbmcobmV4dF9zaWJsaW5nKSk7XG5cdH1cblxuXHRpZiAoIWh5ZHJhdGluZykge1xuXHRcdHJldHVybiBuZXh0X3NpYmxpbmc7XG5cdH1cblxuXHR2YXIgdHlwZSA9IG5leHRfc2libGluZz8ubm9kZVR5cGU7XG5cblx0Ly8gaWYgYSBzaWJsaW5nIHtleHByZXNzaW9ufSBpcyBlbXB0eSBkdXJpbmcgU1NSLCB0aGVyZSBtaWdodCBiZSBub1xuXHQvLyB0ZXh0IG5vZGUgdG8gaHlkcmF0ZSBcdTIwMTQgd2UgbXVzdCB0aGVyZWZvcmUgY3JlYXRlIG9uZVxuXHRpZiAoaXNfdGV4dCAmJiB0eXBlICE9PSAzKSB7XG5cdFx0dmFyIHRleHQgPSBjcmVhdGVfdGV4dCgpO1xuXHRcdC8vIElmIHRoZSBuZXh0IHNpYmxpbmcgaXMgYG51bGxgIGFuZCB3ZSdyZSBoYW5kbGluZyB0ZXh0IHRoZW4gaXQncyBiZWNhdXNlXG5cdFx0Ly8gdGhlIFNTUiBjb250ZW50IHdhcyBlbXB0eSBmb3IgdGhlIHRleHQsIHNvIHdlIG5lZWQgdG8gZ2VuZXJhdGUgYSBuZXcgdGV4dFxuXHRcdC8vIG5vZGUgYW5kIGluc2VydCBpdCBhZnRlciB0aGUgbGFzdCBzaWJsaW5nXG5cdFx0aWYgKG5leHRfc2libGluZyA9PT0gbnVsbCkge1xuXHRcdFx0bGFzdF9zaWJsaW5nPy5hZnRlcih0ZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV4dF9zaWJsaW5nLmJlZm9yZSh0ZXh0KTtcblx0XHR9XG5cdFx0c2V0X2h5ZHJhdGVfbm9kZSh0ZXh0KTtcblx0XHRyZXR1cm4gdGV4dDtcblx0fVxuXG5cdHNldF9oeWRyYXRlX25vZGUobmV4dF9zaWJsaW5nKTtcblx0cmV0dXJuIC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAobmV4dF9zaWJsaW5nKTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge05vZGV9IE5cbiAqIEBwYXJhbSB7Tn0gbm9kZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcl90ZXh0X2NvbnRlbnQobm9kZSkge1xuXHRub2RlLnRleHRDb250ZW50ID0gJyc7XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBDb21wb25lbnRDb250ZXh0LCBDb21wb25lbnRDb250ZXh0TGVnYWN5LCBEZXJpdmVkLCBFZmZlY3QsIFRlbXBsYXRlTm9kZSwgVHJhbnNpdGlvbk1hbmFnZXIgfSBmcm9tICcjY2xpZW50JyAqL1xuaW1wb3J0IHtcblx0Y2hlY2tfZGlydGluZXNzLFxuXHRhY3RpdmVfZWZmZWN0LFxuXHRhY3RpdmVfcmVhY3Rpb24sXG5cdHVwZGF0ZV9lZmZlY3QsXG5cdGdldCxcblx0aXNfZGVzdHJveWluZ19lZmZlY3QsXG5cdHJlbW92ZV9yZWFjdGlvbnMsXG5cdHNjaGVkdWxlX2VmZmVjdCxcblx0c2V0X2FjdGl2ZV9yZWFjdGlvbixcblx0c2V0X2lzX2Rlc3Ryb3lpbmdfZWZmZWN0LFxuXHRzZXRfc2lnbmFsX3N0YXR1cyxcblx0dW50cmFjayxcblx0dW50cmFja2luZ1xufSBmcm9tICcuLi9ydW50aW1lLmpzJztcbmltcG9ydCB7XG5cdERJUlRZLFxuXHRCUkFOQ0hfRUZGRUNULFxuXHRSRU5ERVJfRUZGRUNULFxuXHRFRkZFQ1QsXG5cdERFU1RST1lFRCxcblx0SU5FUlQsXG5cdEVGRkVDVF9SQU4sXG5cdEJMT0NLX0VGRkVDVCxcblx0Uk9PVF9FRkZFQ1QsXG5cdEVGRkVDVF9UUkFOU1BBUkVOVCxcblx0REVSSVZFRCxcblx0VU5PV05FRCxcblx0Q0xFQU4sXG5cdElOU1BFQ1RfRUZGRUNULFxuXHRIRUFEX0VGRkVDVCxcblx0TUFZQkVfRElSVFksXG5cdEVGRkVDVF9IQVNfREVSSVZFRCxcblx0Qk9VTkRBUllfRUZGRUNUXG59IGZyb20gJyNjbGllbnQvY29uc3RhbnRzJztcbmltcG9ydCB7IHNldCB9IGZyb20gJy4vc291cmNlcy5qcyc7XG5pbXBvcnQgKiBhcyBlIGZyb20gJy4uL2Vycm9ycy5qcyc7XG5pbXBvcnQgeyBERVYgfSBmcm9tICdlc20tZW52JztcbmltcG9ydCB7IGRlZmluZV9wcm9wZXJ0eSB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQgeyBnZXRfbmV4dF9zaWJsaW5nIH0gZnJvbSAnLi4vZG9tL29wZXJhdGlvbnMuanMnO1xuaW1wb3J0IHsgZGVyaXZlZCB9IGZyb20gJy4vZGVyaXZlZHMuanMnO1xuaW1wb3J0IHsgY29tcG9uZW50X2NvbnRleHQsIGRldl9jdXJyZW50X2NvbXBvbmVudF9mdW5jdGlvbiB9IGZyb20gJy4uL2NvbnRleHQuanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7JyRlZmZlY3QnIHwgJyRlZmZlY3QucHJlJyB8ICckaW5zcGVjdCd9IHJ1bmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlX2VmZmVjdChydW5lKSB7XG5cdGlmIChhY3RpdmVfZWZmZWN0ID09PSBudWxsICYmIGFjdGl2ZV9yZWFjdGlvbiA9PT0gbnVsbCkge1xuXHRcdGUuZWZmZWN0X29ycGhhbihydW5lKTtcblx0fVxuXG5cdGlmIChhY3RpdmVfcmVhY3Rpb24gIT09IG51bGwgJiYgKGFjdGl2ZV9yZWFjdGlvbi5mICYgVU5PV05FRCkgIT09IDAgJiYgYWN0aXZlX2VmZmVjdCA9PT0gbnVsbCkge1xuXHRcdGUuZWZmZWN0X2luX3Vub3duZWRfZGVyaXZlZCgpO1xuXHR9XG5cblx0aWYgKGlzX2Rlc3Ryb3lpbmdfZWZmZWN0KSB7XG5cdFx0ZS5lZmZlY3RfaW5fdGVhcmRvd24ocnVuZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VmZmVjdH0gZWZmZWN0XG4gKiBAcGFyYW0ge0VmZmVjdH0gcGFyZW50X2VmZmVjdFxuICovXG5mdW5jdGlvbiBwdXNoX2VmZmVjdChlZmZlY3QsIHBhcmVudF9lZmZlY3QpIHtcblx0dmFyIHBhcmVudF9sYXN0ID0gcGFyZW50X2VmZmVjdC5sYXN0O1xuXHRpZiAocGFyZW50X2xhc3QgPT09IG51bGwpIHtcblx0XHRwYXJlbnRfZWZmZWN0Lmxhc3QgPSBwYXJlbnRfZWZmZWN0LmZpcnN0ID0gZWZmZWN0O1xuXHR9IGVsc2Uge1xuXHRcdHBhcmVudF9sYXN0Lm5leHQgPSBlZmZlY3Q7XG5cdFx0ZWZmZWN0LnByZXYgPSBwYXJlbnRfbGFzdDtcblx0XHRwYXJlbnRfZWZmZWN0Lmxhc3QgPSBlZmZlY3Q7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHBhcmFtIHtudWxsIHwgKCgpID0+IHZvaWQgfCAoKCkgPT4gdm9pZCkpfSBmblxuICogQHBhcmFtIHtib29sZWFufSBzeW5jXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHB1c2hcbiAqIEByZXR1cm5zIHtFZmZlY3R9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZV9lZmZlY3QodHlwZSwgZm4sIHN5bmMsIHB1c2ggPSB0cnVlKSB7XG5cdHZhciBwYXJlbnQgPSBhY3RpdmVfZWZmZWN0O1xuXG5cdGlmIChERVYpIHtcblx0XHQvLyBFbnN1cmUgdGhlIHBhcmVudCBpcyBuZXZlciBhbiBpbnNwZWN0IGVmZmVjdFxuXHRcdHdoaWxlIChwYXJlbnQgIT09IG51bGwgJiYgKHBhcmVudC5mICYgSU5TUEVDVF9FRkZFQ1QpICE9PSAwKSB7XG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuXHRcdH1cblx0fVxuXG5cdC8qKiBAdHlwZSB7RWZmZWN0fSAqL1xuXHR2YXIgZWZmZWN0ID0ge1xuXHRcdGN0eDogY29tcG9uZW50X2NvbnRleHQsXG5cdFx0ZGVwczogbnVsbCxcblx0XHRub2Rlc19zdGFydDogbnVsbCxcblx0XHRub2Rlc19lbmQ6IG51bGwsXG5cdFx0ZjogdHlwZSB8IERJUlRZLFxuXHRcdGZpcnN0OiBudWxsLFxuXHRcdGZuLFxuXHRcdGxhc3Q6IG51bGwsXG5cdFx0bmV4dDogbnVsbCxcblx0XHRwYXJlbnQsXG5cdFx0cHJldjogbnVsbCxcblx0XHR0ZWFyZG93bjogbnVsbCxcblx0XHR0cmFuc2l0aW9uczogbnVsbCxcblx0XHR3djogMFxuXHR9O1xuXG5cdGlmIChERVYpIHtcblx0XHRlZmZlY3QuY29tcG9uZW50X2Z1bmN0aW9uID0gZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uO1xuXHR9XG5cblx0aWYgKHN5bmMpIHtcblx0XHR0cnkge1xuXHRcdFx0dXBkYXRlX2VmZmVjdChlZmZlY3QpO1xuXHRcdFx0ZWZmZWN0LmYgfD0gRUZGRUNUX1JBTjtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRkZXN0cm95X2VmZmVjdChlZmZlY3QpO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoZm4gIT09IG51bGwpIHtcblx0XHRzY2hlZHVsZV9lZmZlY3QoZWZmZWN0KTtcblx0fVxuXG5cdC8vIGlmIGFuIGVmZmVjdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBubyBET00gYW5kIG5vIHRlYXJkb3duIGZ1bmN0aW9uLFxuXHQvLyBkb24ndCBib3RoZXIgYWRkaW5nIGl0IHRvIHRoZSBlZmZlY3QgdHJlZVxuXHR2YXIgaW5lcnQgPVxuXHRcdHN5bmMgJiZcblx0XHRlZmZlY3QuZGVwcyA9PT0gbnVsbCAmJlxuXHRcdGVmZmVjdC5maXJzdCA9PT0gbnVsbCAmJlxuXHRcdGVmZmVjdC5ub2Rlc19zdGFydCA9PT0gbnVsbCAmJlxuXHRcdGVmZmVjdC50ZWFyZG93biA9PT0gbnVsbCAmJlxuXHRcdChlZmZlY3QuZiAmIChFRkZFQ1RfSEFTX0RFUklWRUQgfCBCT1VOREFSWV9FRkZFQ1QpKSA9PT0gMDtcblxuXHRpZiAoIWluZXJ0ICYmIHB1c2gpIHtcblx0XHRpZiAocGFyZW50ICE9PSBudWxsKSB7XG5cdFx0XHRwdXNoX2VmZmVjdChlZmZlY3QsIHBhcmVudCk7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgd2UncmUgaW4gYSBkZXJpdmVkLCBhZGQgdGhlIGVmZmVjdCB0aGVyZSB0b29cblx0XHRpZiAoYWN0aXZlX3JlYWN0aW9uICE9PSBudWxsICYmIChhY3RpdmVfcmVhY3Rpb24uZiAmIERFUklWRUQpICE9PSAwKSB7XG5cdFx0XHR2YXIgZGVyaXZlZCA9IC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKGFjdGl2ZV9yZWFjdGlvbik7XG5cdFx0XHQoZGVyaXZlZC5lZmZlY3RzID8/PSBbXSkucHVzaChlZmZlY3QpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlZmZlY3Q7XG59XG5cbi8qKlxuICogSW50ZXJuYWwgcmVwcmVzZW50YXRpb24gb2YgYCRlZmZlY3QudHJhY2tpbmcoKWBcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWZmZWN0X3RyYWNraW5nKCkge1xuXHRyZXR1cm4gYWN0aXZlX3JlYWN0aW9uICE9PSBudWxsICYmICF1bnRyYWNraW5nO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlYXJkb3duKGZuKSB7XG5cdGNvbnN0IGVmZmVjdCA9IGNyZWF0ZV9lZmZlY3QoUkVOREVSX0VGRkVDVCwgbnVsbCwgZmFsc2UpO1xuXHRzZXRfc2lnbmFsX3N0YXR1cyhlZmZlY3QsIENMRUFOKTtcblx0ZWZmZWN0LnRlYXJkb3duID0gZm47XG5cdHJldHVybiBlZmZlY3Q7XG59XG5cbi8qKlxuICogSW50ZXJuYWwgcmVwcmVzZW50YXRpb24gb2YgYCRlZmZlY3QoLi4uKWBcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZCB8ICgoKSA9PiB2b2lkKX0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZXJfZWZmZWN0KGZuKSB7XG5cdHZhbGlkYXRlX2VmZmVjdCgnJGVmZmVjdCcpO1xuXG5cdC8vIE5vbi1uZXN0ZWQgYCRlZmZlY3QoLi4uKWAgaW4gYSBjb21wb25lbnQgc2hvdWxkIGJlIGRlZmVycmVkXG5cdC8vIHVudGlsIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxuXHR2YXIgZGVmZXIgPVxuXHRcdGFjdGl2ZV9lZmZlY3QgIT09IG51bGwgJiZcblx0XHQoYWN0aXZlX2VmZmVjdC5mICYgQlJBTkNIX0VGRkVDVCkgIT09IDAgJiZcblx0XHRjb21wb25lbnRfY29udGV4dCAhPT0gbnVsbCAmJlxuXHRcdCFjb21wb25lbnRfY29udGV4dC5tO1xuXG5cdGlmIChERVYpIHtcblx0XHRkZWZpbmVfcHJvcGVydHkoZm4sICduYW1lJywge1xuXHRcdFx0dmFsdWU6ICckZWZmZWN0J1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKGRlZmVyKSB7XG5cdFx0dmFyIGNvbnRleHQgPSAvKiogQHR5cGUge0NvbXBvbmVudENvbnRleHR9ICovIChjb21wb25lbnRfY29udGV4dCk7XG5cdFx0KGNvbnRleHQuZSA/Pz0gW10pLnB1c2goe1xuXHRcdFx0Zm4sXG5cdFx0XHRlZmZlY3Q6IGFjdGl2ZV9lZmZlY3QsXG5cdFx0XHRyZWFjdGlvbjogYWN0aXZlX3JlYWN0aW9uXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIHNpZ25hbCA9IGVmZmVjdChmbik7XG5cdFx0cmV0dXJuIHNpZ25hbDtcblx0fVxufVxuXG4vKipcbiAqIEludGVybmFsIHJlcHJlc2VudGF0aW9uIG9mIGAkZWZmZWN0LnByZSguLi4pYFxuICogQHBhcmFtIHsoKSA9PiB2b2lkIHwgKCgpID0+IHZvaWQpfSBmblxuICogQHJldHVybnMge0VmZmVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZXJfcHJlX2VmZmVjdChmbikge1xuXHR2YWxpZGF0ZV9lZmZlY3QoJyRlZmZlY3QucHJlJyk7XG5cdGlmIChERVYpIHtcblx0XHRkZWZpbmVfcHJvcGVydHkoZm4sICduYW1lJywge1xuXHRcdFx0dmFsdWU6ICckZWZmZWN0LnByZSdcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gcmVuZGVyX2VmZmVjdChmbik7XG59XG5cbi8qKiBAcGFyYW0geygpID0+IHZvaWQgfCAoKCkgPT4gdm9pZCl9IGZuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zcGVjdF9lZmZlY3QoZm4pIHtcblx0cmV0dXJuIGNyZWF0ZV9lZmZlY3QoSU5TUEVDVF9FRkZFQ1QsIGZuLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCByZXByZXNlbnRhdGlvbiBvZiBgJGVmZmVjdC5yb290KC4uLilgXG4gKiBAcGFyYW0geygpID0+IHZvaWQgfCAoKCkgPT4gdm9pZCl9IGZuXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVmZmVjdF9yb290KGZuKSB7XG5cdGNvbnN0IGVmZmVjdCA9IGNyZWF0ZV9lZmZlY3QoUk9PVF9FRkZFQ1QsIGZuLCB0cnVlKTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGRlc3Ryb3lfZWZmZWN0KGVmZmVjdCk7XG5cdH07XG59XG5cbi8qKlxuICogQW4gZWZmZWN0IHJvb3Qgd2hvc2UgY2hpbGRyZW4gY2FuIHRyYW5zaXRpb24gb3V0XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGZuXG4gKiBAcmV0dXJucyB7KG9wdGlvbnM/OiB7IG91dHJvPzogYm9vbGVhbiB9KSA9PiBQcm9taXNlPHZvaWQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50X3Jvb3QoZm4pIHtcblx0Y29uc3QgZWZmZWN0ID0gY3JlYXRlX2VmZmVjdChST09UX0VGRkVDVCwgZm4sIHRydWUpO1xuXG5cdHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChmdWxmaWwpID0+IHtcblx0XHRcdGlmIChvcHRpb25zLm91dHJvKSB7XG5cdFx0XHRcdHBhdXNlX2VmZmVjdChlZmZlY3QsICgpID0+IHtcblx0XHRcdFx0XHRkZXN0cm95X2VmZmVjdChlZmZlY3QpO1xuXHRcdFx0XHRcdGZ1bGZpbCh1bmRlZmluZWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlc3Ryb3lfZWZmZWN0KGVmZmVjdCk7XG5cdFx0XHRcdGZ1bGZpbCh1bmRlZmluZWQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZCB8ICgoKSA9PiB2b2lkKX0gZm5cbiAqIEByZXR1cm5zIHtFZmZlY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlZmZlY3QoZm4pIHtcblx0cmV0dXJuIGNyZWF0ZV9lZmZlY3QoRUZGRUNULCBmbiwgZmFsc2UpO1xufVxuXG4vKipcbiAqIEludGVybmFsIHJlcHJlc2VudGF0aW9uIG9mIGAkOiAuLmBcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBkZXBzXG4gKiBAcGFyYW0geygpID0+IHZvaWQgfCAoKCkgPT4gdm9pZCl9IGZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZWdhY3lfcHJlX2VmZmVjdChkZXBzLCBmbikge1xuXHR2YXIgY29udGV4dCA9IC8qKiBAdHlwZSB7Q29tcG9uZW50Q29udGV4dExlZ2FjeX0gKi8gKGNvbXBvbmVudF9jb250ZXh0KTtcblxuXHQvKiogQHR5cGUge3sgZWZmZWN0OiBudWxsIHwgRWZmZWN0LCByYW46IGJvb2xlYW4gfX0gKi9cblx0dmFyIHRva2VuID0geyBlZmZlY3Q6IG51bGwsIHJhbjogZmFsc2UgfTtcblx0Y29udGV4dC5sLnIxLnB1c2godG9rZW4pO1xuXG5cdHRva2VuLmVmZmVjdCA9IHJlbmRlcl9lZmZlY3QoKCkgPT4ge1xuXHRcdGRlcHMoKTtcblxuXHRcdC8vIElmIHRoaXMgbGVnYWN5IHByZSBlZmZlY3QgaGFzIGFscmVhZHkgcnVuIGJlZm9yZSB0aGUgZW5kIG9mIHRoZSByZXNldCwgdGhlblxuXHRcdC8vIGJhaWwgb3V0IHRvIGVtdWxhdGUgdGhlIHNhbWUgYmVoYXZpb3IuXG5cdFx0aWYgKHRva2VuLnJhbikgcmV0dXJuO1xuXG5cdFx0dG9rZW4ucmFuID0gdHJ1ZTtcblx0XHRzZXQoY29udGV4dC5sLnIyLCB0cnVlKTtcblx0XHR1bnRyYWNrKGZuKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWdhY3lfcHJlX2VmZmVjdF9yZXNldCgpIHtcblx0dmFyIGNvbnRleHQgPSAvKiogQHR5cGUge0NvbXBvbmVudENvbnRleHRMZWdhY3l9ICovIChjb21wb25lbnRfY29udGV4dCk7XG5cblx0cmVuZGVyX2VmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKCFnZXQoY29udGV4dC5sLnIyKSkgcmV0dXJuO1xuXG5cdFx0Ly8gUnVuIGRpcnR5IGAkOmAgc3RhdGVtZW50c1xuXHRcdGZvciAodmFyIHRva2VuIG9mIGNvbnRleHQubC5yMSkge1xuXHRcdFx0dmFyIGVmZmVjdCA9IHRva2VuLmVmZmVjdDtcblxuXHRcdFx0Ly8gSWYgdGhlIGVmZmVjdCBpcyBDTEVBTiwgdGhlbiBtYWtlIGl0IE1BWUJFX0RJUlRZLiBUaGlzIGVuc3VyZXMgd2UgdHJhdmVyc2UgdGhyb3VnaFxuXHRcdFx0Ly8gdGhlIGVmZmVjdHMgZGVwZW5kZW5jaWVzIGFuZCBjb3JyZWN0bHkgZW5zdXJlIGVhY2ggZGVwZW5kZW5jeSBpcyB1cC10by1kYXRlLlxuXHRcdFx0aWYgKChlZmZlY3QuZiAmIENMRUFOKSAhPT0gMCkge1xuXHRcdFx0XHRzZXRfc2lnbmFsX3N0YXR1cyhlZmZlY3QsIE1BWUJFX0RJUlRZKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNoZWNrX2RpcnRpbmVzcyhlZmZlY3QpKSB7XG5cdFx0XHRcdHVwZGF0ZV9lZmZlY3QoZWZmZWN0KTtcblx0XHRcdH1cblxuXHRcdFx0dG9rZW4ucmFuID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29udGV4dC5sLnIyLnYgPSBmYWxzZTsgLy8gc2V0IGRpcmVjdGx5IHRvIGF2b2lkIHJlcnVubmluZyB0aGlzIGVmZmVjdFxuXHR9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygpID0+IHZvaWQgfCAoKCkgPT4gdm9pZCl9IGZuXG4gKiBAcmV0dXJucyB7RWZmZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyX2VmZmVjdChmbikge1xuXHRyZXR1cm4gY3JlYXRlX2VmZmVjdChSRU5ERVJfRUZGRUNULCBmbiwgdHJ1ZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsoLi4uZXhwcmVzc2lvbnM6IGFueSkgPT4gdm9pZCB8ICgoKSA9PiB2b2lkKX0gZm5cbiAqIEBwYXJhbSB7QXJyYXk8KCkgPT4gYW55Pn0gdGh1bmtzXG4gKiBAcmV0dXJucyB7RWZmZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVfZWZmZWN0KGZuLCB0aHVua3MgPSBbXSwgZCA9IGRlcml2ZWQpIHtcblx0Y29uc3QgZGVyaXZlZHMgPSB0aHVua3MubWFwKGQpO1xuXHRjb25zdCBlZmZlY3QgPSAoKSA9PiBmbiguLi5kZXJpdmVkcy5tYXAoZ2V0KSk7XG5cblx0aWYgKERFVikge1xuXHRcdGRlZmluZV9wcm9wZXJ0eShlZmZlY3QsICduYW1lJywge1xuXHRcdFx0dmFsdWU6ICd7ZXhwcmVzc2lvbn0nXG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gYmxvY2soZWZmZWN0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygoKSA9PiB2b2lkKX0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gYmxvY2soZm4sIGZsYWdzID0gMCkge1xuXHRyZXR1cm4gY3JlYXRlX2VmZmVjdChSRU5ERVJfRUZGRUNUIHwgQkxPQ0tfRUZGRUNUIHwgZmxhZ3MsIGZuLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygoKSA9PiB2b2lkKX0gZm5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3B1c2hdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBicmFuY2goZm4sIHB1c2ggPSB0cnVlKSB7XG5cdHJldHVybiBjcmVhdGVfZWZmZWN0KFJFTkRFUl9FRkZFQ1QgfCBCUkFOQ0hfRUZGRUNULCBmbiwgdHJ1ZSwgcHVzaCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZV9lZmZlY3RfdGVhcmRvd24oZWZmZWN0KSB7XG5cdHZhciB0ZWFyZG93biA9IGVmZmVjdC50ZWFyZG93bjtcblx0aWYgKHRlYXJkb3duICE9PSBudWxsKSB7XG5cdFx0Y29uc3QgcHJldmlvdXNseV9kZXN0cm95aW5nX2VmZmVjdCA9IGlzX2Rlc3Ryb3lpbmdfZWZmZWN0O1xuXHRcdGNvbnN0IHByZXZpb3VzX3JlYWN0aW9uID0gYWN0aXZlX3JlYWN0aW9uO1xuXHRcdHNldF9pc19kZXN0cm95aW5nX2VmZmVjdCh0cnVlKTtcblx0XHRzZXRfYWN0aXZlX3JlYWN0aW9uKG51bGwpO1xuXHRcdHRyeSB7XG5cdFx0XHR0ZWFyZG93bi5jYWxsKG51bGwpO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRzZXRfaXNfZGVzdHJveWluZ19lZmZlY3QocHJldmlvdXNseV9kZXN0cm95aW5nX2VmZmVjdCk7XG5cdFx0XHRzZXRfYWN0aXZlX3JlYWN0aW9uKHByZXZpb3VzX3JlYWN0aW9uKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VmZmVjdH0gc2lnbmFsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHJlbW92ZV9kb21cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveV9lZmZlY3RfY2hpbGRyZW4oc2lnbmFsLCByZW1vdmVfZG9tID0gZmFsc2UpIHtcblx0dmFyIGVmZmVjdCA9IHNpZ25hbC5maXJzdDtcblx0c2lnbmFsLmZpcnN0ID0gc2lnbmFsLmxhc3QgPSBudWxsO1xuXG5cdHdoaWxlIChlZmZlY3QgIT09IG51bGwpIHtcblx0XHR2YXIgbmV4dCA9IGVmZmVjdC5uZXh0O1xuXG5cdFx0aWYgKChlZmZlY3QuZiAmIFJPT1RfRUZGRUNUKSAhPT0gMCkge1xuXHRcdFx0Ly8gdGhpcyBpcyBub3cgYW4gaW5kZXBlbmRlbnQgcm9vdFxuXHRcdFx0ZWZmZWN0LnBhcmVudCA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlc3Ryb3lfZWZmZWN0KGVmZmVjdCwgcmVtb3ZlX2RvbSk7XG5cdFx0fVxuXG5cdFx0ZWZmZWN0ID0gbmV4dDtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RWZmZWN0fSBzaWduYWxcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveV9ibG9ja19lZmZlY3RfY2hpbGRyZW4oc2lnbmFsKSB7XG5cdHZhciBlZmZlY3QgPSBzaWduYWwuZmlyc3Q7XG5cblx0d2hpbGUgKGVmZmVjdCAhPT0gbnVsbCkge1xuXHRcdHZhciBuZXh0ID0gZWZmZWN0Lm5leHQ7XG5cdFx0aWYgKChlZmZlY3QuZiAmIEJSQU5DSF9FRkZFQ1QpID09PSAwKSB7XG5cdFx0XHRkZXN0cm95X2VmZmVjdChlZmZlY3QpO1xuXHRcdH1cblx0XHRlZmZlY3QgPSBuZXh0O1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICogQHBhcmFtIHtib29sZWFufSBbcmVtb3ZlX2RvbV1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveV9lZmZlY3QoZWZmZWN0LCByZW1vdmVfZG9tID0gdHJ1ZSkge1xuXHR2YXIgcmVtb3ZlZCA9IGZhbHNlO1xuXG5cdGlmICgocmVtb3ZlX2RvbSB8fCAoZWZmZWN0LmYgJiBIRUFEX0VGRkVDVCkgIT09IDApICYmIGVmZmVjdC5ub2Rlc19zdGFydCAhPT0gbnVsbCkge1xuXHRcdHJlbW92ZV9lZmZlY3RfZG9tKGVmZmVjdC5ub2Rlc19zdGFydCwgLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChlZmZlY3Qubm9kZXNfZW5kKSk7XG5cdFx0cmVtb3ZlZCA9IHRydWU7XG5cdH1cblxuXHRkZXN0cm95X2VmZmVjdF9jaGlsZHJlbihlZmZlY3QsIHJlbW92ZV9kb20gJiYgIXJlbW92ZWQpO1xuXHRyZW1vdmVfcmVhY3Rpb25zKGVmZmVjdCwgMCk7XG5cdHNldF9zaWduYWxfc3RhdHVzKGVmZmVjdCwgREVTVFJPWUVEKTtcblxuXHR2YXIgdHJhbnNpdGlvbnMgPSBlZmZlY3QudHJhbnNpdGlvbnM7XG5cblx0aWYgKHRyYW5zaXRpb25zICE9PSBudWxsKSB7XG5cdFx0Zm9yIChjb25zdCB0cmFuc2l0aW9uIG9mIHRyYW5zaXRpb25zKSB7XG5cdFx0XHR0cmFuc2l0aW9uLnN0b3AoKTtcblx0XHR9XG5cdH1cblxuXHRleGVjdXRlX2VmZmVjdF90ZWFyZG93bihlZmZlY3QpO1xuXG5cdHZhciBwYXJlbnQgPSBlZmZlY3QucGFyZW50O1xuXG5cdC8vIElmIHRoZSBwYXJlbnQgZG9lc24ndCBoYXZlIGFueSBjaGlsZHJlbiwgdGhlbiBza2lwIHRoaXMgd29yayBhbHRvZ2V0aGVyXG5cdGlmIChwYXJlbnQgIT09IG51bGwgJiYgcGFyZW50LmZpcnN0ICE9PSBudWxsKSB7XG5cdFx0dW5saW5rX2VmZmVjdChlZmZlY3QpO1xuXHR9XG5cblx0aWYgKERFVikge1xuXHRcdGVmZmVjdC5jb21wb25lbnRfZnVuY3Rpb24gPSBudWxsO1xuXHR9XG5cblx0Ly8gYGZpcnN0YCBhbmQgYGNoaWxkYCBhcmUgbnVsbGVkIG91dCBpbiBkZXN0cm95X2VmZmVjdF9jaGlsZHJlblxuXHQvLyB3ZSBkb24ndCBudWxsIG91dCBgcGFyZW50YCBzbyB0aGF0IGVycm9yIHByb3BhZ2F0aW9uIGNhbiB3b3JrIGNvcnJlY3RseVxuXHRlZmZlY3QubmV4dCA9XG5cdFx0ZWZmZWN0LnByZXYgPVxuXHRcdGVmZmVjdC50ZWFyZG93biA9XG5cdFx0ZWZmZWN0LmN0eCA9XG5cdFx0ZWZmZWN0LmRlcHMgPVxuXHRcdGVmZmVjdC5mbiA9XG5cdFx0ZWZmZWN0Lm5vZGVzX3N0YXJ0ID1cblx0XHRlZmZlY3Qubm9kZXNfZW5kID1cblx0XHRcdG51bGw7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7VGVtcGxhdGVOb2RlIHwgbnVsbH0gbm9kZVxuICogQHBhcmFtIHtUZW1wbGF0ZU5vZGV9IGVuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlX2VmZmVjdF9kb20obm9kZSwgZW5kKSB7XG5cdHdoaWxlIChub2RlICE9PSBudWxsKSB7XG5cdFx0LyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGUgfCBudWxsfSAqL1xuXHRcdHZhciBuZXh0ID0gbm9kZSA9PT0gZW5kID8gbnVsbCA6IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZ2V0X25leHRfc2libGluZyhub2RlKSk7XG5cblx0XHRub2RlLnJlbW92ZSgpO1xuXHRcdG5vZGUgPSBuZXh0O1xuXHR9XG59XG5cbi8qKlxuICogRGV0YWNoIGFuIGVmZmVjdCBmcm9tIHRoZSBlZmZlY3QgdHJlZSwgZnJlZWluZyB1cCBtZW1vcnkgYW5kXG4gKiByZWR1Y2luZyB0aGUgYW1vdW50IG9mIHdvcmsgdGhhdCBoYXBwZW5zIG9uIHN1YnNlcXVlbnQgdHJhdmVyc2Fsc1xuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5saW5rX2VmZmVjdChlZmZlY3QpIHtcblx0dmFyIHBhcmVudCA9IGVmZmVjdC5wYXJlbnQ7XG5cdHZhciBwcmV2ID0gZWZmZWN0LnByZXY7XG5cdHZhciBuZXh0ID0gZWZmZWN0Lm5leHQ7XG5cblx0aWYgKHByZXYgIT09IG51bGwpIHByZXYubmV4dCA9IG5leHQ7XG5cdGlmIChuZXh0ICE9PSBudWxsKSBuZXh0LnByZXYgPSBwcmV2O1xuXG5cdGlmIChwYXJlbnQgIT09IG51bGwpIHtcblx0XHRpZiAocGFyZW50LmZpcnN0ID09PSBlZmZlY3QpIHBhcmVudC5maXJzdCA9IG5leHQ7XG5cdFx0aWYgKHBhcmVudC5sYXN0ID09PSBlZmZlY3QpIHBhcmVudC5sYXN0ID0gcHJldjtcblx0fVxufVxuXG4vKipcbiAqIFdoZW4gYSBibG9jayBlZmZlY3QgaXMgcmVtb3ZlZCwgd2UgZG9uJ3QgaW1tZWRpYXRlbHkgZGVzdHJveSBpdCBvciB5YW5rIGl0XG4gKiBvdXQgb2YgdGhlIERPTSwgYmVjYXVzZSBpdCBtaWdodCBoYXZlIHRyYW5zaXRpb25zLiBJbnN0ZWFkLCB3ZSAncGF1c2UnIGl0LlxuICogSXQgc3RheXMgYXJvdW5kIChpbiBtZW1vcnksIGFuZCBpbiB0aGUgRE9NKSB1bnRpbCBvdXRybyB0cmFuc2l0aW9ucyBoYXZlXG4gKiBjb21wbGV0ZWQsIGFuZCBpZiB0aGUgc3RhdGUgY2hhbmdlIGlzIHJldmVyc2VkIHRoZW4gd2UgX3Jlc3VtZV8gaXQuXG4gKiBBIHBhdXNlZCBlZmZlY3QgZG9lcyBub3QgdXBkYXRlLCBhbmQgdGhlIERPTSBzdWJ0cmVlIGJlY29tZXMgaW5lcnQuXG4gKiBAcGFyYW0ge0VmZmVjdH0gZWZmZWN0XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlX2VmZmVjdChlZmZlY3QsIGNhbGxiYWNrKSB7XG5cdC8qKiBAdHlwZSB7VHJhbnNpdGlvbk1hbmFnZXJbXX0gKi9cblx0dmFyIHRyYW5zaXRpb25zID0gW107XG5cblx0cGF1c2VfY2hpbGRyZW4oZWZmZWN0LCB0cmFuc2l0aW9ucywgdHJ1ZSk7XG5cblx0cnVuX291dF90cmFuc2l0aW9ucyh0cmFuc2l0aW9ucywgKCkgPT4ge1xuXHRcdGRlc3Ryb3lfZWZmZWN0KGVmZmVjdCk7XG5cdFx0aWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RyYW5zaXRpb25NYW5hZ2VyW119IHRyYW5zaXRpb25zXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5fb3V0X3RyYW5zaXRpb25zKHRyYW5zaXRpb25zLCBmbikge1xuXHR2YXIgcmVtYWluaW5nID0gdHJhbnNpdGlvbnMubGVuZ3RoO1xuXHRpZiAocmVtYWluaW5nID4gMCkge1xuXHRcdHZhciBjaGVjayA9ICgpID0+IC0tcmVtYWluaW5nIHx8IGZuKCk7XG5cdFx0Zm9yICh2YXIgdHJhbnNpdGlvbiBvZiB0cmFuc2l0aW9ucykge1xuXHRcdFx0dHJhbnNpdGlvbi5vdXQoY2hlY2spO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmbigpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICogQHBhcmFtIHtUcmFuc2l0aW9uTWFuYWdlcltdfSB0cmFuc2l0aW9uc1xuICogQHBhcmFtIHtib29sZWFufSBsb2NhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF1c2VfY2hpbGRyZW4oZWZmZWN0LCB0cmFuc2l0aW9ucywgbG9jYWwpIHtcblx0aWYgKChlZmZlY3QuZiAmIElORVJUKSAhPT0gMCkgcmV0dXJuO1xuXHRlZmZlY3QuZiBePSBJTkVSVDtcblxuXHRpZiAoZWZmZWN0LnRyYW5zaXRpb25zICE9PSBudWxsKSB7XG5cdFx0Zm9yIChjb25zdCB0cmFuc2l0aW9uIG9mIGVmZmVjdC50cmFuc2l0aW9ucykge1xuXHRcdFx0aWYgKHRyYW5zaXRpb24uaXNfZ2xvYmFsIHx8IGxvY2FsKSB7XG5cdFx0XHRcdHRyYW5zaXRpb25zLnB1c2godHJhbnNpdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dmFyIGNoaWxkID0gZWZmZWN0LmZpcnN0O1xuXG5cdHdoaWxlIChjaGlsZCAhPT0gbnVsbCkge1xuXHRcdHZhciBzaWJsaW5nID0gY2hpbGQubmV4dDtcblx0XHR2YXIgdHJhbnNwYXJlbnQgPSAoY2hpbGQuZiAmIEVGRkVDVF9UUkFOU1BBUkVOVCkgIT09IDAgfHwgKGNoaWxkLmYgJiBCUkFOQ0hfRUZGRUNUKSAhPT0gMDtcblx0XHQvLyBUT0RPIHdlIGRvbid0IG5lZWQgdG8gY2FsbCBwYXVzZV9jaGlsZHJlbiByZWN1cnNpdmVseSB3aXRoIGEgbGlua2VkIGxpc3QgaW4gcGxhY2Vcblx0XHQvLyBpdCdzIHNsaWdodGx5IG1vcmUgaW52b2x2ZWQgdGhvdWdoIGFzIHdlIGhhdmUgdG8gYWNjb3VudCBmb3IgYHRyYW5zcGFyZW50YCBjaGFuZ2luZ1xuXHRcdC8vIHRocm91Z2ggdGhlIHRyZWUuXG5cdFx0cGF1c2VfY2hpbGRyZW4oY2hpbGQsIHRyYW5zaXRpb25zLCB0cmFuc3BhcmVudCA/IGxvY2FsIDogZmFsc2UpO1xuXHRcdGNoaWxkID0gc2libGluZztcblx0fVxufVxuXG4vKipcbiAqIFRoZSBvcHBvc2l0ZSBvZiBgcGF1c2VfZWZmZWN0YC4gV2UgY2FsbCB0aGlzIGlmIChmb3IgZXhhbXBsZSlcbiAqIGB4YCBiZWNvbWVzIGZhbHN5IHRoZW4gdHJ1dGh5OiBgeyNpZiB4fS4uLnsvaWZ9YFxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzdW1lX2VmZmVjdChlZmZlY3QpIHtcblx0cmVzdW1lX2NoaWxkcmVuKGVmZmVjdCwgdHJ1ZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICogQHBhcmFtIHtib29sZWFufSBsb2NhbFxuICovXG5mdW5jdGlvbiByZXN1bWVfY2hpbGRyZW4oZWZmZWN0LCBsb2NhbCkge1xuXHRpZiAoKGVmZmVjdC5mICYgSU5FUlQpID09PSAwKSByZXR1cm47XG5cdGVmZmVjdC5mIF49IElORVJUO1xuXG5cdC8vIEVuc3VyZSB0aGUgZWZmZWN0IGlzIG1hcmtlZCBhcyBjbGVhbiBhZ2FpbiBzbyB0aGF0IGFueSBkaXJ0eSBjaGlsZFxuXHQvLyBlZmZlY3RzIGNhbiBzY2hlZHVsZSB0aGVtc2VsdmVzIGZvciBleGVjdXRpb25cblx0aWYgKChlZmZlY3QuZiAmIENMRUFOKSA9PT0gMCkge1xuXHRcdGVmZmVjdC5mIF49IENMRUFOO1xuXHR9XG5cblx0Ly8gSWYgYSBkZXBlbmRlbmN5IG9mIHRoaXMgZWZmZWN0IGNoYW5nZWQgd2hpbGUgaXQgd2FzIHBhdXNlZCxcblx0Ly8gc2NoZWR1bGUgdGhlIGVmZmVjdCB0byB1cGRhdGVcblx0aWYgKGNoZWNrX2RpcnRpbmVzcyhlZmZlY3QpKSB7XG5cdFx0c2V0X3NpZ25hbF9zdGF0dXMoZWZmZWN0LCBESVJUWSk7XG5cdFx0c2NoZWR1bGVfZWZmZWN0KGVmZmVjdCk7XG5cdH1cblxuXHR2YXIgY2hpbGQgPSBlZmZlY3QuZmlyc3Q7XG5cblx0d2hpbGUgKGNoaWxkICE9PSBudWxsKSB7XG5cdFx0dmFyIHNpYmxpbmcgPSBjaGlsZC5uZXh0O1xuXHRcdHZhciB0cmFuc3BhcmVudCA9IChjaGlsZC5mICYgRUZGRUNUX1RSQU5TUEFSRU5UKSAhPT0gMCB8fCAoY2hpbGQuZiAmIEJSQU5DSF9FRkZFQ1QpICE9PSAwO1xuXHRcdC8vIFRPRE8gd2UgZG9uJ3QgbmVlZCB0byBjYWxsIHJlc3VtZV9jaGlsZHJlbiByZWN1cnNpdmVseSB3aXRoIGEgbGlua2VkIGxpc3QgaW4gcGxhY2Vcblx0XHQvLyBpdCdzIHNsaWdodGx5IG1vcmUgaW52b2x2ZWQgdGhvdWdoIGFzIHdlIGhhdmUgdG8gYWNjb3VudCBmb3IgYHRyYW5zcGFyZW50YCBjaGFuZ2luZ1xuXHRcdC8vIHRocm91Z2ggdGhlIHRyZWUuXG5cdFx0cmVzdW1lX2NoaWxkcmVuKGNoaWxkLCB0cmFuc3BhcmVudCA/IGxvY2FsIDogZmFsc2UpO1xuXHRcdGNoaWxkID0gc2libGluZztcblx0fVxuXG5cdGlmIChlZmZlY3QudHJhbnNpdGlvbnMgIT09IG51bGwpIHtcblx0XHRmb3IgKGNvbnN0IHRyYW5zaXRpb24gb2YgZWZmZWN0LnRyYW5zaXRpb25zKSB7XG5cdFx0XHRpZiAodHJhbnNpdGlvbi5pc19nbG9iYWwgfHwgbG9jYWwpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5pbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwgImltcG9ydCB7IHJ1bl9hbGwgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuXG4vLyBGYWxsYmFjayBmb3Igd2hlbiByZXF1ZXN0SWRsZUNhbGxiYWNrIGlzIG5vdCBhdmFpbGFibGVcbmNvbnN0IHJlcXVlc3RfaWRsZV9jYWxsYmFjayA9XG5cdHR5cGVvZiByZXF1ZXN0SWRsZUNhbGxiYWNrID09PSAndW5kZWZpbmVkJ1xuXHRcdD8gKC8qKiBAdHlwZSB7KCkgPT4gdm9pZH0gKi8gY2IpID0+IHNldFRpbWVvdXQoY2IsIDEpXG5cdFx0OiByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuXG4vKiogQHR5cGUge0FycmF5PCgpID0+IHZvaWQ+fSAqL1xubGV0IG1pY3JvX3Rhc2tzID0gW107XG5cbi8qKiBAdHlwZSB7QXJyYXk8KCkgPT4gdm9pZD59ICovXG5sZXQgaWRsZV90YXNrcyA9IFtdO1xuXG5mdW5jdGlvbiBydW5fbWljcm9fdGFza3MoKSB7XG5cdHZhciB0YXNrcyA9IG1pY3JvX3Rhc2tzO1xuXHRtaWNyb190YXNrcyA9IFtdO1xuXHRydW5fYWxsKHRhc2tzKTtcbn1cblxuZnVuY3Rpb24gcnVuX2lkbGVfdGFza3MoKSB7XG5cdHZhciB0YXNrcyA9IGlkbGVfdGFza3M7XG5cdGlkbGVfdGFza3MgPSBbXTtcblx0cnVuX2FsbCh0YXNrcyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVldWVfbWljcm9fdGFzayhmbikge1xuXHRpZiAobWljcm9fdGFza3MubGVuZ3RoID09PSAwKSB7XG5cdFx0cXVldWVNaWNyb3Rhc2socnVuX21pY3JvX3Rhc2tzKTtcblx0fVxuXG5cdG1pY3JvX3Rhc2tzLnB1c2goZm4pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXVlX2lkbGVfdGFzayhmbikge1xuXHRpZiAoaWRsZV90YXNrcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXF1ZXN0X2lkbGVfY2FsbGJhY2socnVuX2lkbGVfdGFza3MpO1xuXHR9XG5cblx0aWRsZV90YXNrcy5wdXNoKGZuKTtcbn1cblxuLyoqXG4gKiBTeW5jaHJvbm91c2x5IHJ1biBhbnkgcXVldWVkIHRhc2tzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmx1c2hfdGFza3MoKSB7XG5cdGlmIChtaWNyb190YXNrcy5sZW5ndGggPiAwKSB7XG5cdFx0cnVuX21pY3JvX3Rhc2tzKCk7XG5cdH1cblxuXHRpZiAoaWRsZV90YXNrcy5sZW5ndGggPiAwKSB7XG5cdFx0cnVuX2lkbGVfdGFza3MoKTtcblx0fVxufVxuIiwgIi8qKiBAaW1wb3J0IHsgQ29tcG9uZW50Q29udGV4dCwgRGVyaXZlZCwgRWZmZWN0LCBSZWFjdGlvbiwgU2lnbmFsLCBTb3VyY2UsIFZhbHVlIH0gZnJvbSAnI2NsaWVudCcgKi9cbmltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuaW1wb3J0IHsgZGVmaW5lX3Byb3BlcnR5LCBnZXRfZGVzY3JpcHRvcnMsIGdldF9wcm90b3R5cGVfb2YsIGluZGV4X29mIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7XG5cdGRlc3Ryb3lfYmxvY2tfZWZmZWN0X2NoaWxkcmVuLFxuXHRkZXN0cm95X2VmZmVjdF9jaGlsZHJlbixcblx0ZXhlY3V0ZV9lZmZlY3RfdGVhcmRvd24sXG5cdHVubGlua19lZmZlY3Rcbn0gZnJvbSAnLi9yZWFjdGl2aXR5L2VmZmVjdHMuanMnO1xuaW1wb3J0IHtcblx0RUZGRUNULFxuXHRESVJUWSxcblx0TUFZQkVfRElSVFksXG5cdENMRUFOLFxuXHRERVJJVkVELFxuXHRVTk9XTkVELFxuXHRERVNUUk9ZRUQsXG5cdElORVJULFxuXHRCUkFOQ0hfRUZGRUNULFxuXHRTVEFURV9TWU1CT0wsXG5cdEJMT0NLX0VGRkVDVCxcblx0Uk9PVF9FRkZFQ1QsXG5cdExFR0FDWV9ERVJJVkVEX1BST1AsXG5cdERJU0NPTk5FQ1RFRCxcblx0Qk9VTkRBUllfRUZGRUNULFxuXHRFRkZFQ1RfSVNfVVBEQVRJTkdcbn0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgZmx1c2hfdGFza3MgfSBmcm9tICcuL2RvbS90YXNrLmpzJztcbmltcG9ydCB7IGludGVybmFsX3NldCwgb2xkX3ZhbHVlcyB9IGZyb20gJy4vcmVhY3Rpdml0eS9zb3VyY2VzLmpzJztcbmltcG9ydCB7IGRlc3Ryb3lfZGVyaXZlZF9lZmZlY3RzLCB1cGRhdGVfZGVyaXZlZCB9IGZyb20gJy4vcmVhY3Rpdml0eS9kZXJpdmVkcy5qcyc7XG5pbXBvcnQgKiBhcyBlIGZyb20gJy4vZXJyb3JzLmpzJztcbmltcG9ydCB7IEZJTEVOQU1FIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IHRyYWNpbmdfbW9kZV9mbGFnIH0gZnJvbSAnLi4vZmxhZ3MvaW5kZXguanMnO1xuaW1wb3J0IHsgdHJhY2luZ19leHByZXNzaW9ucywgZ2V0X3N0YWNrIH0gZnJvbSAnLi9kZXYvdHJhY2luZy5qcyc7XG5pbXBvcnQge1xuXHRjb21wb25lbnRfY29udGV4dCxcblx0ZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uLFxuXHRpc19ydW5lcyxcblx0c2V0X2NvbXBvbmVudF9jb250ZXh0LFxuXHRzZXRfZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uXG59IGZyb20gJy4vY29udGV4dC5qcyc7XG5pbXBvcnQgeyBpc19maXJlZm94IH0gZnJvbSAnLi9kb20vb3BlcmF0aW9ucy5qcyc7XG5cbi8vIFVzZWQgZm9yIERFViB0aW1lIGVycm9yIGhhbmRsaW5nXG4vKiogQHBhcmFtIHtXZWFrU2V0PEVycm9yPn0gdmFsdWUgKi9cbmNvbnN0IGhhbmRsZWRfZXJyb3JzID0gbmV3IFdlYWtTZXQoKTtcbmxldCBpc190aHJvd2luZ19lcnJvciA9IGZhbHNlO1xuXG5sZXQgaXNfZmx1c2hpbmcgPSBmYWxzZTtcblxuLyoqIEB0eXBlIHtFZmZlY3QgfCBudWxsfSAqL1xubGV0IGxhc3Rfc2NoZWR1bGVkX2VmZmVjdCA9IG51bGw7XG5cbmxldCBpc191cGRhdGluZ19lZmZlY3QgPSBmYWxzZTtcblxuZXhwb3J0IGxldCBpc19kZXN0cm95aW5nX2VmZmVjdCA9IGZhbHNlO1xuXG4vKiogQHBhcmFtIHtib29sZWFufSB2YWx1ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9pc19kZXN0cm95aW5nX2VmZmVjdCh2YWx1ZSkge1xuXHRpc19kZXN0cm95aW5nX2VmZmVjdCA9IHZhbHVlO1xufVxuXG4vLyBIYW5kbGUgZWZmZWN0IHF1ZXVlc1xuXG4vKiogQHR5cGUge0VmZmVjdFtdfSAqL1xubGV0IHF1ZXVlZF9yb290X2VmZmVjdHMgPSBbXTtcblxuLyoqIEB0eXBlIHtFZmZlY3RbXX0gU3RhY2sgb2YgZWZmZWN0cywgZGV2IG9ubHkgKi9cbmxldCBkZXZfZWZmZWN0X3N0YWNrID0gW107XG4vLyBIYW5kbGUgc2lnbmFsIHJlYWN0aXZpdHkgdHJlZSBkZXBlbmRlbmNpZXMgYW5kIHJlYWN0aW9uc1xuXG4vKiogQHR5cGUge251bGwgfCBSZWFjdGlvbn0gKi9cbmV4cG9ydCBsZXQgYWN0aXZlX3JlYWN0aW9uID0gbnVsbDtcblxuZXhwb3J0IGxldCB1bnRyYWNraW5nID0gZmFsc2U7XG5cbi8qKiBAcGFyYW0ge251bGwgfCBSZWFjdGlvbn0gcmVhY3Rpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfYWN0aXZlX3JlYWN0aW9uKHJlYWN0aW9uKSB7XG5cdGFjdGl2ZV9yZWFjdGlvbiA9IHJlYWN0aW9uO1xufVxuXG4vKiogQHR5cGUge251bGwgfCBFZmZlY3R9ICovXG5leHBvcnQgbGV0IGFjdGl2ZV9lZmZlY3QgPSBudWxsO1xuXG4vKiogQHBhcmFtIHtudWxsIHwgRWZmZWN0fSBlZmZlY3QgKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfYWN0aXZlX2VmZmVjdChlZmZlY3QpIHtcblx0YWN0aXZlX2VmZmVjdCA9IGVmZmVjdDtcbn1cblxuLyoqXG4gKiBXaGVuIHNvdXJjZXMgYXJlIGNyZWF0ZWQgd2l0aGluIGEgcmVhY3Rpb24sIHJlYWRpbmcgYW5kIHdyaXRpbmdcbiAqIHRoZW0gc2hvdWxkIG5vdCBjYXVzZSBhIHJlLXJ1blxuICogQHR5cGUge251bGwgfCBTb3VyY2VbXX1cbiAqL1xuZXhwb3J0IGxldCByZWFjdGlvbl9zb3VyY2VzID0gbnVsbDtcblxuLyoqIEBwYXJhbSB7VmFsdWV9IHZhbHVlICovXG5leHBvcnQgZnVuY3Rpb24gcHVzaF9yZWFjdGlvbl92YWx1ZSh2YWx1ZSkge1xuXHRpZiAoYWN0aXZlX3JlYWN0aW9uICE9PSBudWxsICYmIGFjdGl2ZV9yZWFjdGlvbi5mICYgRUZGRUNUX0lTX1VQREFUSU5HKSB7XG5cdFx0aWYgKHJlYWN0aW9uX3NvdXJjZXMgPT09IG51bGwpIHtcblx0XHRcdHJlYWN0aW9uX3NvdXJjZXMgPSBbdmFsdWVdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWFjdGlvbl9zb3VyY2VzLnB1c2godmFsdWUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFRoZSBkZXBlbmRlbmNpZXMgb2YgdGhlIHJlYWN0aW9uIHRoYXQgaXMgY3VycmVudGx5IGJlaW5nIGV4ZWN1dGVkLiBJbiBtYW55IGNhc2VzLFxuICogdGhlIGRlcGVuZGVuY2llcyBhcmUgdW5jaGFuZ2VkIGJldHdlZW4gcnVucywgYW5kIHNvIHRoaXMgd2lsbCBiZSBgbnVsbGAgdW5sZXNzXG4gKiBhbmQgdW50aWwgYSBuZXcgZGVwZW5kZW5jeSBpcyBhY2Nlc3NlZCBcdTIwMTQgd2UgdHJhY2sgdGhpcyB2aWEgYHNraXBwZWRfZGVwc2BcbiAqIEB0eXBlIHtudWxsIHwgVmFsdWVbXX1cbiAqL1xubGV0IG5ld19kZXBzID0gbnVsbDtcblxubGV0IHNraXBwZWRfZGVwcyA9IDA7XG5cbi8qKlxuICogVHJhY2tzIHdyaXRlcyB0aGF0IHRoZSBlZmZlY3QgaXQncyBleGVjdXRlZCBpbiBkb2Vzbid0IGxpc3RlbiB0byB5ZXQsXG4gKiBzbyB0aGF0IHRoZSBkZXBlbmRlbmN5IGNhbiBiZSBhZGRlZCB0byB0aGUgZWZmZWN0IGxhdGVyIG9uIGlmIGl0IHRoZW4gcmVhZHMgaXRcbiAqIEB0eXBlIHtudWxsIHwgU291cmNlW119XG4gKi9cbmV4cG9ydCBsZXQgdW50cmFja2VkX3dyaXRlcyA9IG51bGw7XG5cbi8qKiBAcGFyYW0ge251bGwgfCBTb3VyY2VbXX0gdmFsdWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfdW50cmFja2VkX3dyaXRlcyh2YWx1ZSkge1xuXHR1bnRyYWNrZWRfd3JpdGVzID0gdmFsdWU7XG59XG5cbi8qKlxuICogQHR5cGUge251bWJlcn0gVXNlZCBieSBzb3VyY2VzIGFuZCBkZXJpdmVkcyBmb3IgaGFuZGxpbmcgdXBkYXRlcy5cbiAqIFZlcnNpb24gc3RhcnRzIGZyb20gMSBzbyB0aGF0IHVub3duZWQgZGVyaXZlZHMgZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGEgY3JlYXRlZCBlZmZlY3QgYW5kIGEgcnVuIG9uZSBmb3IgdHJhY2luZ1xuICoqL1xubGV0IHdyaXRlX3ZlcnNpb24gPSAxO1xuXG4vKiogQHR5cGUge251bWJlcn0gVXNlZCB0byB2ZXJzaW9uIGVhY2ggcmVhZCBvZiBhIHNvdXJjZSBvZiBkZXJpdmVkIHRvIGF2b2lkIGR1cGxpY2F0aW5nIGRlcGVkZW5jaWVzIGluc2lkZSBhIHJlYWN0aW9uICovXG5sZXQgcmVhZF92ZXJzaW9uID0gMDtcblxuLy8gSWYgd2UgYXJlIHdvcmtpbmcgd2l0aCBhIGdldCgpIGNoYWluIHRoYXQgaGFzIG5vIGFjdGl2ZSBjb250YWluZXIsXG4vLyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcywgd2Ugc2tpcCBhZGRpbmcgdGhlIHJlYWN0aW9uLlxuZXhwb3J0IGxldCBza2lwX3JlYWN0aW9uID0gZmFsc2U7XG4vLyBIYW5kbGUgY29sbGVjdGluZyBhbGwgc2lnbmFscyB3aGljaCBhcmUgcmVhZCBkdXJpbmcgYSBzcGVjaWZpYyB0aW1lIGZyYW1lXG4vKiogQHR5cGUge1NldDxWYWx1ZT4gfCBudWxsfSAqL1xuZXhwb3J0IGxldCBjYXB0dXJlZF9zaWduYWxzID0gbnVsbDtcblxuLyoqIEBwYXJhbSB7U2V0PFZhbHVlPiB8IG51bGx9IHZhbHVlICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2NhcHR1cmVkX3NpZ25hbHModmFsdWUpIHtcblx0Y2FwdHVyZWRfc2lnbmFscyA9IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50X3dyaXRlX3ZlcnNpb24oKSB7XG5cdHJldHVybiArK3dyaXRlX3ZlcnNpb247XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgZGVyaXZlZCBvciBlZmZlY3QgaXMgZGlydHkuXG4gKiBJZiBpdCBpcyBNQVlCRV9ESVJUWSwgd2lsbCBzZXQgdGhlIHN0YXR1cyB0byBDTEVBTlxuICogQHBhcmFtIHtSZWFjdGlvbn0gcmVhY3Rpb25cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfZGlydGluZXNzKHJlYWN0aW9uKSB7XG5cdHZhciBmbGFncyA9IHJlYWN0aW9uLmY7XG5cblx0aWYgKChmbGFncyAmIERJUlRZKSAhPT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKChmbGFncyAmIE1BWUJFX0RJUlRZKSAhPT0gMCkge1xuXHRcdHZhciBkZXBlbmRlbmNpZXMgPSByZWFjdGlvbi5kZXBzO1xuXHRcdHZhciBpc191bm93bmVkID0gKGZsYWdzICYgVU5PV05FRCkgIT09IDA7XG5cblx0XHRpZiAoZGVwZW5kZW5jaWVzICE9PSBudWxsKSB7XG5cdFx0XHR2YXIgaTtcblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0dmFyIGlzX2Rpc2Nvbm5lY3RlZCA9IChmbGFncyAmIERJU0NPTk5FQ1RFRCkgIT09IDA7XG5cdFx0XHR2YXIgaXNfdW5vd25lZF9jb25uZWN0ZWQgPSBpc191bm93bmVkICYmIGFjdGl2ZV9lZmZlY3QgIT09IG51bGwgJiYgIXNraXBfcmVhY3Rpb247XG5cdFx0XHR2YXIgbGVuZ3RoID0gZGVwZW5kZW5jaWVzLmxlbmd0aDtcblxuXHRcdFx0Ly8gSWYgd2UgYXJlIHdvcmtpbmcgd2l0aCBhIGRpc2Nvbm5lY3RlZCBvciBhbiB1bm93bmVkIHNpZ25hbCB0aGF0IGlzIG5vdyBjb25uZWN0ZWQgKGR1ZSB0byBhbiBhY3RpdmUgZWZmZWN0KVxuXHRcdFx0Ly8gdGhlbiB3ZSBuZWVkIHRvIHJlLWNvbm5lY3QgdGhlIHJlYWN0aW9uIHRvIHRoZSBkZXBlbmRlbmN5XG5cdFx0XHRpZiAoaXNfZGlzY29ubmVjdGVkIHx8IGlzX3Vub3duZWRfY29ubmVjdGVkKSB7XG5cdFx0XHRcdHZhciBkZXJpdmVkID0gLyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAocmVhY3Rpb24pO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gZGVyaXZlZC5wYXJlbnQ7XG5cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IGRlcGVuZGVuY2llc1tpXTtcblxuXHRcdFx0XHRcdC8vIFdlIGFsd2F5cyByZS1hZGQgYWxsIHJlYWN0aW9ucyAoZXZlbiBkdXBsaWNhdGVzKSBpZiB0aGUgZGVyaXZlZCB3YXNcblx0XHRcdFx0XHQvLyBwcmV2aW91c2x5IGRpc2Nvbm5lY3RlZCwgaG93ZXZlciB3ZSBkb24ndCBpZiBpdCB3YXMgdW5vd25lZCBhcyB3ZVxuXHRcdFx0XHRcdC8vIGRlLWR1cGxpY2F0ZSBkZXBlbmRlbmNpZXMgaW4gdGhhdCBjYXNlXG5cdFx0XHRcdFx0aWYgKGlzX2Rpc2Nvbm5lY3RlZCB8fCAhZGVwZW5kZW5jeT8ucmVhY3Rpb25zPy5pbmNsdWRlcyhkZXJpdmVkKSkge1xuXHRcdFx0XHRcdFx0KGRlcGVuZGVuY3kucmVhY3Rpb25zID8/PSBbXSkucHVzaChkZXJpdmVkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNfZGlzY29ubmVjdGVkKSB7XG5cdFx0XHRcdFx0ZGVyaXZlZC5mIF49IERJU0NPTk5FQ1RFRDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBJZiB0aGUgdW5vd25lZCBkZXJpdmVkIGlzIG5vdyBmdWxseSBjb25uZWN0ZWQgdG8gdGhlIGdyYXBoIGFnYWluIChpdCdzIHVub3duZWQgYW5kIHJlY29ubmVjdGVkLCBoYXMgYSBwYXJlbnRcblx0XHRcdFx0Ly8gYW5kIHRoZSBwYXJlbnQgaXMgbm90IHVub3duZWQpLCB0aGVuIHdlIGNhbiBtYXJrIGl0IGFzIGNvbm5lY3RlZCBhZ2FpbiwgcmVtb3ZpbmcgdGhlIG5lZWQgZm9yIHRoZSB1bm93bmVkXG5cdFx0XHRcdC8vIGZsYWdcblx0XHRcdFx0aWYgKGlzX3Vub3duZWRfY29ubmVjdGVkICYmIHBhcmVudCAhPT0gbnVsbCAmJiAocGFyZW50LmYgJiBVTk9XTkVEKSA9PT0gMCkge1xuXHRcdFx0XHRcdGRlcml2ZWQuZiBePSBVTk9XTkVEO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHRkZXBlbmRlbmN5ID0gZGVwZW5kZW5jaWVzW2ldO1xuXG5cdFx0XHRcdGlmIChjaGVja19kaXJ0aW5lc3MoLyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAoZGVwZW5kZW5jeSkpKSB7XG5cdFx0XHRcdFx0dXBkYXRlX2Rlcml2ZWQoLyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAoZGVwZW5kZW5jeSkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGRlcGVuZGVuY3kud3YgPiByZWFjdGlvbi53dikge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gVW5vd25lZCBzaWduYWxzIHNob3VsZCBuZXZlciBiZSBtYXJrZWQgYXMgY2xlYW4gdW5sZXNzIHRoZXlcblx0XHQvLyBhcmUgdXNlZCB3aXRoaW4gYW4gYWN0aXZlX2VmZmVjdCB3aXRob3V0IHNraXBfcmVhY3Rpb25cblx0XHRpZiAoIWlzX3Vub3duZWQgfHwgKGFjdGl2ZV9lZmZlY3QgIT09IG51bGwgJiYgIXNraXBfcmVhY3Rpb24pKSB7XG5cdFx0XHRzZXRfc2lnbmFsX3N0YXR1cyhyZWFjdGlvbiwgQ0xFQU4pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3Vua25vd259IGVycm9yXG4gKiBAcGFyYW0ge0VmZmVjdH0gZWZmZWN0XG4gKi9cbmZ1bmN0aW9uIHByb3BhZ2F0ZV9lcnJvcihlcnJvciwgZWZmZWN0KSB7XG5cdC8qKiBAdHlwZSB7RWZmZWN0IHwgbnVsbH0gKi9cblx0dmFyIGN1cnJlbnQgPSBlZmZlY3Q7XG5cblx0d2hpbGUgKGN1cnJlbnQgIT09IG51bGwpIHtcblx0XHRpZiAoKGN1cnJlbnQuZiAmIEJPVU5EQVJZX0VGRkVDVCkgIT09IDApIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0Y3VycmVudC5mbihlcnJvcik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvLyBSZW1vdmUgYm91bmRhcnkgZmxhZyBmcm9tIGVmZmVjdFxuXHRcdFx0XHRjdXJyZW50LmYgXj0gQk9VTkRBUllfRUZGRUNUO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcblx0fVxuXG5cdGlzX3Rocm93aW5nX2Vycm9yID0gZmFsc2U7XG5cdHRocm93IGVycm9yO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqL1xuZnVuY3Rpb24gc2hvdWxkX3JldGhyb3dfZXJyb3IoZWZmZWN0KSB7XG5cdHJldHVybiAoXG5cdFx0KGVmZmVjdC5mICYgREVTVFJPWUVEKSA9PT0gMCAmJlxuXHRcdChlZmZlY3QucGFyZW50ID09PSBudWxsIHx8IChlZmZlY3QucGFyZW50LmYgJiBCT1VOREFSWV9FRkZFQ1QpID09PSAwKVxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRfaXNfdGhyb3dpbmdfZXJyb3IoKSB7XG5cdGlzX3Rocm93aW5nX2Vycm9yID0gZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHt1bmtub3dufSBlcnJvclxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICogQHBhcmFtIHtFZmZlY3QgfCBudWxsfSBwcmV2aW91c19lZmZlY3RcbiAqIEBwYXJhbSB7Q29tcG9uZW50Q29udGV4dCB8IG51bGx9IGNvbXBvbmVudF9jb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVfZXJyb3IoZXJyb3IsIGVmZmVjdCwgcHJldmlvdXNfZWZmZWN0LCBjb21wb25lbnRfY29udGV4dCkge1xuXHRpZiAoaXNfdGhyb3dpbmdfZXJyb3IpIHtcblx0XHRpZiAocHJldmlvdXNfZWZmZWN0ID09PSBudWxsKSB7XG5cdFx0XHRpc190aHJvd2luZ19lcnJvciA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChzaG91bGRfcmV0aHJvd19lcnJvcihlZmZlY3QpKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAocHJldmlvdXNfZWZmZWN0ICE9PSBudWxsKSB7XG5cdFx0aXNfdGhyb3dpbmdfZXJyb3IgPSB0cnVlO1xuXHR9XG5cblx0aWYgKERFViAmJiBjb21wb25lbnRfY29udGV4dCAhPT0gbnVsbCAmJiBlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICFoYW5kbGVkX2Vycm9ycy5oYXMoZXJyb3IpKSB7XG5cdFx0aGFuZGxlZF9lcnJvcnMuYWRkKGVycm9yKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudF9zdGFjayA9IFtdO1xuXG5cdFx0Y29uc3QgZWZmZWN0X25hbWUgPSBlZmZlY3QuZm4/Lm5hbWU7XG5cblx0XHRpZiAoZWZmZWN0X25hbWUpIHtcblx0XHRcdGNvbXBvbmVudF9zdGFjay5wdXNoKGVmZmVjdF9uYW1lKTtcblx0XHR9XG5cblx0XHQvKiogQHR5cGUge0NvbXBvbmVudENvbnRleHQgfCBudWxsfSAqL1xuXHRcdGxldCBjdXJyZW50X2NvbnRleHQgPSBjb21wb25lbnRfY29udGV4dDtcblxuXHRcdHdoaWxlIChjdXJyZW50X2NvbnRleHQgIT09IG51bGwpIHtcblx0XHRcdC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuXHRcdFx0dmFyIGZpbGVuYW1lID0gY3VycmVudF9jb250ZXh0LmZ1bmN0aW9uPy5bRklMRU5BTUVdO1xuXG5cdFx0XHRpZiAoZmlsZW5hbWUpIHtcblx0XHRcdFx0Y29uc3QgZmlsZSA9IGZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XG5cdFx0XHRcdGNvbXBvbmVudF9zdGFjay5wdXNoKGZpbGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50X2NvbnRleHQgPSBjdXJyZW50X2NvbnRleHQucDtcblx0XHR9XG5cblx0XHRjb25zdCBpbmRlbnQgPSBpc19maXJlZm94ID8gJyAgJyA6ICdcXHQnO1xuXHRcdGRlZmluZV9wcm9wZXJ0eShlcnJvciwgJ21lc3NhZ2UnLCB7XG5cdFx0XHR2YWx1ZTpcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSArIGBcXG4ke2NvbXBvbmVudF9zdGFjay5tYXAoKG5hbWUpID0+IGBcXG4ke2luZGVudH1pbiAke25hbWV9YCkuam9pbignJyl9XFxuYFxuXHRcdH0pO1xuXHRcdGRlZmluZV9wcm9wZXJ0eShlcnJvciwgJ2NvbXBvbmVudF9zdGFjaycsIHtcblx0XHRcdHZhbHVlOiBjb21wb25lbnRfc3RhY2tcblx0XHR9KTtcblxuXHRcdGNvbnN0IHN0YWNrID0gZXJyb3Iuc3RhY2s7XG5cblx0XHQvLyBGaWx0ZXIgb3V0IGludGVybmFsIGZpbGVzIGZyb20gY2FsbHN0YWNrXG5cdFx0aWYgKHN0YWNrKSB7XG5cdFx0XHRjb25zdCBsaW5lcyA9IHN0YWNrLnNwbGl0KCdcXG4nKTtcblx0XHRcdGNvbnN0IG5ld19saW5lcyA9IFtdO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBsaW5lID0gbGluZXNbaV07XG5cdFx0XHRcdGlmIChsaW5lLmluY2x1ZGVzKCdzdmVsdGUvc3JjL2ludGVybmFsJykpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdfbGluZXMucHVzaChsaW5lKTtcblx0XHRcdH1cblx0XHRcdGRlZmluZV9wcm9wZXJ0eShlcnJvciwgJ3N0YWNrJywge1xuXHRcdFx0XHR2YWx1ZTogbmV3X2xpbmVzLmpvaW4oJ1xcbicpXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRwcm9wYWdhdGVfZXJyb3IoZXJyb3IsIGVmZmVjdCk7XG5cblx0aWYgKHNob3VsZF9yZXRocm93X2Vycm9yKGVmZmVjdCkpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7VmFsdWV9IHNpZ25hbFxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICogQHBhcmFtIHtib29sZWFufSBbcm9vdF1cbiAqL1xuZnVuY3Rpb24gc2NoZWR1bGVfcG9zc2libGVfZWZmZWN0X3NlbGZfaW52YWxpZGF0aW9uKHNpZ25hbCwgZWZmZWN0LCByb290ID0gdHJ1ZSkge1xuXHR2YXIgcmVhY3Rpb25zID0gc2lnbmFsLnJlYWN0aW9ucztcblx0aWYgKHJlYWN0aW9ucyA9PT0gbnVsbCkgcmV0dXJuO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHJlYWN0aW9uID0gcmVhY3Rpb25zW2ldO1xuXG5cdFx0aWYgKHJlYWN0aW9uX3NvdXJjZXM/LmluY2x1ZGVzKHNpZ25hbCkpIGNvbnRpbnVlO1xuXG5cdFx0aWYgKChyZWFjdGlvbi5mICYgREVSSVZFRCkgIT09IDApIHtcblx0XHRcdHNjaGVkdWxlX3Bvc3NpYmxlX2VmZmVjdF9zZWxmX2ludmFsaWRhdGlvbigvKiogQHR5cGUge0Rlcml2ZWR9ICovIChyZWFjdGlvbiksIGVmZmVjdCwgZmFsc2UpO1xuXHRcdH0gZWxzZSBpZiAoZWZmZWN0ID09PSByZWFjdGlvbikge1xuXHRcdFx0aWYgKHJvb3QpIHtcblx0XHRcdFx0c2V0X3NpZ25hbF9zdGF0dXMocmVhY3Rpb24sIERJUlRZKTtcblx0XHRcdH0gZWxzZSBpZiAoKHJlYWN0aW9uLmYgJiBDTEVBTikgIT09IDApIHtcblx0XHRcdFx0c2V0X3NpZ25hbF9zdGF0dXMocmVhY3Rpb24sIE1BWUJFX0RJUlRZKTtcblx0XHRcdH1cblx0XHRcdHNjaGVkdWxlX2VmZmVjdCgvKiogQHR5cGUge0VmZmVjdH0gKi8gKHJlYWN0aW9uKSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7UmVhY3Rpb259IHJlYWN0aW9uXG4gKiBAcmV0dXJucyB7Vn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9yZWFjdGlvbihyZWFjdGlvbikge1xuXHR2YXIgcHJldmlvdXNfZGVwcyA9IG5ld19kZXBzO1xuXHR2YXIgcHJldmlvdXNfc2tpcHBlZF9kZXBzID0gc2tpcHBlZF9kZXBzO1xuXHR2YXIgcHJldmlvdXNfdW50cmFja2VkX3dyaXRlcyA9IHVudHJhY2tlZF93cml0ZXM7XG5cdHZhciBwcmV2aW91c19yZWFjdGlvbiA9IGFjdGl2ZV9yZWFjdGlvbjtcblx0dmFyIHByZXZpb3VzX3NraXBfcmVhY3Rpb24gPSBza2lwX3JlYWN0aW9uO1xuXHR2YXIgcHJldmlvdXNfcmVhY3Rpb25fc291cmNlcyA9IHJlYWN0aW9uX3NvdXJjZXM7XG5cdHZhciBwcmV2aW91c19jb21wb25lbnRfY29udGV4dCA9IGNvbXBvbmVudF9jb250ZXh0O1xuXHR2YXIgcHJldmlvdXNfdW50cmFja2luZyA9IHVudHJhY2tpbmc7XG5cblx0dmFyIGZsYWdzID0gcmVhY3Rpb24uZjtcblxuXHRuZXdfZGVwcyA9IC8qKiBAdHlwZSB7bnVsbCB8IFZhbHVlW119ICovIChudWxsKTtcblx0c2tpcHBlZF9kZXBzID0gMDtcblx0dW50cmFja2VkX3dyaXRlcyA9IG51bGw7XG5cdHNraXBfcmVhY3Rpb24gPVxuXHRcdChmbGFncyAmIFVOT1dORUQpICE9PSAwICYmICh1bnRyYWNraW5nIHx8ICFpc191cGRhdGluZ19lZmZlY3QgfHwgYWN0aXZlX3JlYWN0aW9uID09PSBudWxsKTtcblx0YWN0aXZlX3JlYWN0aW9uID0gKGZsYWdzICYgKEJSQU5DSF9FRkZFQ1QgfCBST09UX0VGRkVDVCkpID09PSAwID8gcmVhY3Rpb24gOiBudWxsO1xuXG5cdHJlYWN0aW9uX3NvdXJjZXMgPSBudWxsO1xuXHRzZXRfY29tcG9uZW50X2NvbnRleHQocmVhY3Rpb24uY3R4KTtcblx0dW50cmFja2luZyA9IGZhbHNlO1xuXHRyZWFkX3ZlcnNpb24rKztcblxuXHRyZWFjdGlvbi5mIHw9IEVGRkVDVF9JU19VUERBVElORztcblxuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSAvKiogQHR5cGUge0Z1bmN0aW9ufSAqLyAoMCwgcmVhY3Rpb24uZm4pKCk7XG5cdFx0dmFyIGRlcHMgPSByZWFjdGlvbi5kZXBzO1xuXG5cdFx0aWYgKG5ld19kZXBzICE9PSBudWxsKSB7XG5cdFx0XHR2YXIgaTtcblxuXHRcdFx0cmVtb3ZlX3JlYWN0aW9ucyhyZWFjdGlvbiwgc2tpcHBlZF9kZXBzKTtcblxuXHRcdFx0aWYgKGRlcHMgIT09IG51bGwgJiYgc2tpcHBlZF9kZXBzID4gMCkge1xuXHRcdFx0XHRkZXBzLmxlbmd0aCA9IHNraXBwZWRfZGVwcyArIG5ld19kZXBzLmxlbmd0aDtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG5ld19kZXBzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0ZGVwc1tza2lwcGVkX2RlcHMgKyBpXSA9IG5ld19kZXBzW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZWFjdGlvbi5kZXBzID0gZGVwcyA9IG5ld19kZXBzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXNraXBfcmVhY3Rpb24pIHtcblx0XHRcdFx0Zm9yIChpID0gc2tpcHBlZF9kZXBzOyBpIDwgZGVwcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdChkZXBzW2ldLnJlYWN0aW9ucyA/Pz0gW10pLnB1c2gocmVhY3Rpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChkZXBzICE9PSBudWxsICYmIHNraXBwZWRfZGVwcyA8IGRlcHMubGVuZ3RoKSB7XG5cdFx0XHRyZW1vdmVfcmVhY3Rpb25zKHJlYWN0aW9uLCBza2lwcGVkX2RlcHMpO1xuXHRcdFx0ZGVwcy5sZW5ndGggPSBza2lwcGVkX2RlcHM7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UncmUgaW5zaWRlIGFuIGVmZmVjdCBhbmQgd2UgaGF2ZSB1bnRyYWNrZWQgd3JpdGVzLCB0aGVuIHdlIG5lZWQgdG9cblx0XHQvLyBlbnN1cmUgdGhhdCBpZiBhbnkgb2YgdGhvc2UgdW50cmFja2VkIHdyaXRlcyByZXN1bHQgaW4gcmUtaW52YWxpZGF0aW9uXG5cdFx0Ly8gb2YgdGhlIGN1cnJlbnQgZWZmZWN0LCB0aGVuIHRoYXQgaGFwcGVucyBhY2NvcmRpbmdseVxuXHRcdGlmIChcblx0XHRcdGlzX3J1bmVzKCkgJiZcblx0XHRcdHVudHJhY2tlZF93cml0ZXMgIT09IG51bGwgJiZcblx0XHRcdCF1bnRyYWNraW5nICYmXG5cdFx0XHRkZXBzICE9PSBudWxsICYmXG5cdFx0XHQocmVhY3Rpb24uZiAmIChERVJJVkVEIHwgTUFZQkVfRElSVFkgfCBESVJUWSkpID09PSAwXG5cdFx0KSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgLyoqIEB0eXBlIHtTb3VyY2VbXX0gKi8gKHVudHJhY2tlZF93cml0ZXMpLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHNjaGVkdWxlX3Bvc3NpYmxlX2VmZmVjdF9zZWxmX2ludmFsaWRhdGlvbihcblx0XHRcdFx0XHR1bnRyYWNrZWRfd3JpdGVzW2ldLFxuXHRcdFx0XHRcdC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAocmVhY3Rpb24pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgYXJlIHJldHVybmluZyB0byBhbiBwcmV2aW91cyByZWFjdGlvbiB0aGVuXG5cdFx0Ly8gd2UgbmVlZCB0byBpbmNyZW1lbnQgdGhlIHJlYWQgdmVyc2lvbiB0byBlbnN1cmUgdGhhdFxuXHRcdC8vIGFueSBkZXBlbmRlbmNpZXMgaW4gdGhpcyByZWFjdGlvbiBhcmVuJ3QgbWFya2VkIHdpdGhcblx0XHQvLyB0aGUgc2FtZSB2ZXJzaW9uXG5cdFx0aWYgKHByZXZpb3VzX3JlYWN0aW9uICE9PSBudWxsICYmIHByZXZpb3VzX3JlYWN0aW9uICE9PSByZWFjdGlvbikge1xuXHRcdFx0cmVhZF92ZXJzaW9uKys7XG5cblx0XHRcdGlmICh1bnRyYWNrZWRfd3JpdGVzICE9PSBudWxsKSB7XG5cdFx0XHRcdGlmIChwcmV2aW91c191bnRyYWNrZWRfd3JpdGVzID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cHJldmlvdXNfdW50cmFja2VkX3dyaXRlcyA9IHVudHJhY2tlZF93cml0ZXM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHJldmlvdXNfdW50cmFja2VkX3dyaXRlcy5wdXNoKC4uLi8qKiBAdHlwZSB7U291cmNlW119ICovICh1bnRyYWNrZWRfd3JpdGVzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9IGZpbmFsbHkge1xuXHRcdG5ld19kZXBzID0gcHJldmlvdXNfZGVwcztcblx0XHRza2lwcGVkX2RlcHMgPSBwcmV2aW91c19za2lwcGVkX2RlcHM7XG5cdFx0dW50cmFja2VkX3dyaXRlcyA9IHByZXZpb3VzX3VudHJhY2tlZF93cml0ZXM7XG5cdFx0YWN0aXZlX3JlYWN0aW9uID0gcHJldmlvdXNfcmVhY3Rpb247XG5cdFx0c2tpcF9yZWFjdGlvbiA9IHByZXZpb3VzX3NraXBfcmVhY3Rpb247XG5cdFx0cmVhY3Rpb25fc291cmNlcyA9IHByZXZpb3VzX3JlYWN0aW9uX3NvdXJjZXM7XG5cdFx0c2V0X2NvbXBvbmVudF9jb250ZXh0KHByZXZpb3VzX2NvbXBvbmVudF9jb250ZXh0KTtcblx0XHR1bnRyYWNraW5nID0gcHJldmlvdXNfdW50cmFja2luZztcblxuXHRcdHJlYWN0aW9uLmYgXj0gRUZGRUNUX0lTX1VQREFUSU5HO1xuXHR9XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7UmVhY3Rpb259IHNpZ25hbFxuICogQHBhcmFtIHtWYWx1ZTxWPn0gZGVwZW5kZW5jeVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZV9yZWFjdGlvbihzaWduYWwsIGRlcGVuZGVuY3kpIHtcblx0bGV0IHJlYWN0aW9ucyA9IGRlcGVuZGVuY3kucmVhY3Rpb25zO1xuXHRpZiAocmVhY3Rpb25zICE9PSBudWxsKSB7XG5cdFx0dmFyIGluZGV4ID0gaW5kZXhfb2YuY2FsbChyZWFjdGlvbnMsIHNpZ25hbCk7XG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0dmFyIG5ld19sZW5ndGggPSByZWFjdGlvbnMubGVuZ3RoIC0gMTtcblx0XHRcdGlmIChuZXdfbGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJlYWN0aW9ucyA9IGRlcGVuZGVuY3kucmVhY3Rpb25zID0gbnVsbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFN3YXAgd2l0aCBsYXN0IGVsZW1lbnQgYW5kIHRoZW4gcmVtb3ZlLlxuXHRcdFx0XHRyZWFjdGlvbnNbaW5kZXhdID0gcmVhY3Rpb25zW25ld19sZW5ndGhdO1xuXHRcdFx0XHRyZWFjdGlvbnMucG9wKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIElmIHRoZSBkZXJpdmVkIGhhcyBubyByZWFjdGlvbnMsIHRoZW4gd2UgY2FuIGRpc2Nvbm5lY3QgaXQgZnJvbSB0aGUgZ3JhcGgsXG5cdC8vIGFsbG93aW5nIGl0IHRvIGVpdGhlciByZWNvbm5lY3QgaW4gdGhlIGZ1dHVyZSwgb3IgYmUgR0MnZCBieSB0aGUgVk0uXG5cdGlmIChcblx0XHRyZWFjdGlvbnMgPT09IG51bGwgJiZcblx0XHQoZGVwZW5kZW5jeS5mICYgREVSSVZFRCkgIT09IDAgJiZcblx0XHQvLyBEZXN0cm95aW5nIGEgY2hpbGQgZWZmZWN0IHdoaWxlIHVwZGF0aW5nIGEgcGFyZW50IGVmZmVjdCBjYW4gY2F1c2UgYSBkZXBlbmRlbmN5IHRvIGFwcGVhclxuXHRcdC8vIHRvIGJlIHVudXNlZCwgd2hlbiBpbiBmYWN0IGl0IGlzIHVzZWQgYnkgdGhlIGN1cnJlbnRseS11cGRhdGluZyBwYXJlbnQuIENoZWNraW5nIGBuZXdfZGVwc2Bcblx0XHQvLyBhbGxvd3MgdXMgdG8gc2tpcCB0aGUgZXhwZW5zaXZlIHdvcmsgb2YgZGlzY29ubmVjdGluZyBhbmQgaW1tZWRpYXRlbHkgcmVjb25uZWN0aW5nIGl0XG5cdFx0KG5ld19kZXBzID09PSBudWxsIHx8ICFuZXdfZGVwcy5pbmNsdWRlcyhkZXBlbmRlbmN5KSlcblx0KSB7XG5cdFx0c2V0X3NpZ25hbF9zdGF0dXMoZGVwZW5kZW5jeSwgTUFZQkVfRElSVFkpO1xuXHRcdC8vIElmIHdlIGFyZSB3b3JraW5nIHdpdGggYSBkZXJpdmVkIHRoYXQgaXMgb3duZWQgYnkgYW4gZWZmZWN0LCB0aGVuIG1hcmsgaXQgYXMgYmVpbmdcblx0XHQvLyBkaXNjb25uZWN0ZWQuXG5cdFx0aWYgKChkZXBlbmRlbmN5LmYgJiAoVU5PV05FRCB8IERJU0NPTk5FQ1RFRCkpID09PSAwKSB7XG5cdFx0XHRkZXBlbmRlbmN5LmYgXj0gRElTQ09OTkVDVEVEO1xuXHRcdH1cblx0XHQvLyBEaXNjb25uZWN0IGFueSByZWFjdGlvbnMgb3duZWQgYnkgdGhpcyByZWFjdGlvblxuXHRcdGRlc3Ryb3lfZGVyaXZlZF9lZmZlY3RzKC8qKiBAdHlwZSB7RGVyaXZlZH0gKiovIChkZXBlbmRlbmN5KSk7XG5cdFx0cmVtb3ZlX3JlYWN0aW9ucygvKiogQHR5cGUge0Rlcml2ZWR9ICoqLyAoZGVwZW5kZW5jeSksIDApO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWFjdGlvbn0gc2lnbmFsXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnRfaW5kZXhcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlX3JlYWN0aW9ucyhzaWduYWwsIHN0YXJ0X2luZGV4KSB7XG5cdHZhciBkZXBlbmRlbmNpZXMgPSBzaWduYWwuZGVwcztcblx0aWYgKGRlcGVuZGVuY2llcyA9PT0gbnVsbCkgcmV0dXJuO1xuXG5cdGZvciAodmFyIGkgPSBzdGFydF9pbmRleDsgaSA8IGRlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuXHRcdHJlbW92ZV9yZWFjdGlvbihzaWduYWwsIGRlcGVuZGVuY2llc1tpXSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VmZmVjdH0gZWZmZWN0XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9lZmZlY3QoZWZmZWN0KSB7XG5cdHZhciBmbGFncyA9IGVmZmVjdC5mO1xuXG5cdGlmICgoZmxhZ3MgJiBERVNUUk9ZRUQpICE9PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0c2V0X3NpZ25hbF9zdGF0dXMoZWZmZWN0LCBDTEVBTik7XG5cblx0dmFyIHByZXZpb3VzX2VmZmVjdCA9IGFjdGl2ZV9lZmZlY3Q7XG5cdHZhciBwcmV2aW91c19jb21wb25lbnRfY29udGV4dCA9IGNvbXBvbmVudF9jb250ZXh0O1xuXHR2YXIgd2FzX3VwZGF0aW5nX2VmZmVjdCA9IGlzX3VwZGF0aW5nX2VmZmVjdDtcblxuXHRhY3RpdmVfZWZmZWN0ID0gZWZmZWN0O1xuXHRpc191cGRhdGluZ19lZmZlY3QgPSB0cnVlO1xuXG5cdGlmIChERVYpIHtcblx0XHR2YXIgcHJldmlvdXNfY29tcG9uZW50X2ZuID0gZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uO1xuXHRcdHNldF9kZXZfY3VycmVudF9jb21wb25lbnRfZnVuY3Rpb24oZWZmZWN0LmNvbXBvbmVudF9mdW5jdGlvbik7XG5cdH1cblxuXHR0cnkge1xuXHRcdGlmICgoZmxhZ3MgJiBCTE9DS19FRkZFQ1QpICE9PSAwKSB7XG5cdFx0XHRkZXN0cm95X2Jsb2NrX2VmZmVjdF9jaGlsZHJlbihlZmZlY3QpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0cm95X2VmZmVjdF9jaGlsZHJlbihlZmZlY3QpO1xuXHRcdH1cblxuXHRcdGV4ZWN1dGVfZWZmZWN0X3RlYXJkb3duKGVmZmVjdCk7XG5cdFx0dmFyIHRlYXJkb3duID0gdXBkYXRlX3JlYWN0aW9uKGVmZmVjdCk7XG5cdFx0ZWZmZWN0LnRlYXJkb3duID0gdHlwZW9mIHRlYXJkb3duID09PSAnZnVuY3Rpb24nID8gdGVhcmRvd24gOiBudWxsO1xuXHRcdGVmZmVjdC53diA9IHdyaXRlX3ZlcnNpb247XG5cblx0XHR2YXIgZGVwcyA9IGVmZmVjdC5kZXBzO1xuXG5cdFx0Ly8gSW4gREVWLCB3ZSBuZWVkIHRvIGhhbmRsZSBhIGNhc2Ugd2hlcmUgJGluc3BlY3QudHJhY2UoKSBtaWdodFxuXHRcdC8vIGluY29ycmVjdGx5IHN0YXRlIGEgc291cmNlIGRlcGVuZGVuY3kgaGFzIG5vdCBjaGFuZ2VkIHdoZW4gaXQgaGFzLlxuXHRcdC8vIFRoYXQncyBiZWFjdXNlIHRoYXQgc291cmNlIHdhcyBjaGFuZ2VkIGJ5IHRoZSBzYW1lIGVmZmVjdCwgY2F1c2luZ1xuXHRcdC8vIHRoZSB2ZXJzaW9ucyB0byBtYXRjaC4gV2UgY2FuIGF2b2lkIHRoaXMgYnkgaW5jcmVtZW50aW5nIHRoZSB2ZXJzaW9uXG5cdFx0aWYgKERFViAmJiB0cmFjaW5nX21vZGVfZmxhZyAmJiAoZWZmZWN0LmYgJiBESVJUWSkgIT09IDAgJiYgZGVwcyAhPT0gbnVsbCkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkZXBzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBkZXAgPSBkZXBzW2ldO1xuXHRcdFx0XHRpZiAoZGVwLnRyYWNlX25lZWRfaW5jcmVhc2UpIHtcblx0XHRcdFx0XHRkZXAud3YgPSBpbmNyZW1lbnRfd3JpdGVfdmVyc2lvbigpO1xuXHRcdFx0XHRcdGRlcC50cmFjZV9uZWVkX2luY3JlYXNlID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdGRlcC50cmFjZV92ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKERFVikge1xuXHRcdFx0ZGV2X2VmZmVjdF9zdGFjay5wdXNoKGVmZmVjdCk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGhhbmRsZV9lcnJvcihlcnJvciwgZWZmZWN0LCBwcmV2aW91c19lZmZlY3QsIHByZXZpb3VzX2NvbXBvbmVudF9jb250ZXh0IHx8IGVmZmVjdC5jdHgpO1xuXHR9IGZpbmFsbHkge1xuXHRcdGlzX3VwZGF0aW5nX2VmZmVjdCA9IHdhc191cGRhdGluZ19lZmZlY3Q7XG5cdFx0YWN0aXZlX2VmZmVjdCA9IHByZXZpb3VzX2VmZmVjdDtcblxuXHRcdGlmIChERVYpIHtcblx0XHRcdHNldF9kZXZfY3VycmVudF9jb21wb25lbnRfZnVuY3Rpb24ocHJldmlvdXNfY29tcG9uZW50X2ZuKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbG9nX2VmZmVjdF9zdGFjaygpIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0Y29uc29sZS5lcnJvcihcblx0XHQnTGFzdCB0ZW4gZWZmZWN0cyB3ZXJlOiAnLFxuXHRcdGRldl9lZmZlY3Rfc3RhY2suc2xpY2UoLTEwKS5tYXAoKGQpID0+IGQuZm4pXG5cdCk7XG5cdGRldl9lZmZlY3Rfc3RhY2sgPSBbXTtcbn1cblxuZnVuY3Rpb24gaW5maW5pdGVfbG9vcF9ndWFyZCgpIHtcblx0dHJ5IHtcblx0XHRlLmVmZmVjdF91cGRhdGVfZGVwdGhfZXhjZWVkZWQoKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoREVWKSB7XG5cdFx0XHQvLyBzdGFjayBpcyBnYXJiYWdlLCBpZ25vcmUuIEluc3RlYWQgYWRkIGEgY29uc29sZS5lcnJvciBtZXNzYWdlLlxuXHRcdFx0ZGVmaW5lX3Byb3BlcnR5KGVycm9yLCAnc3RhY2snLCB7XG5cdFx0XHRcdHZhbHVlOiAnJ1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIFRyeSBhbmQgaGFuZGxlIHRoZSBlcnJvciBzbyBpdCBjYW4gYmUgY2F1Z2h0IGF0IGEgYm91bmRhcnksIHRoYXQnc1xuXHRcdC8vIGlmIHRoZXJlJ3MgYW4gZWZmZWN0IGF2YWlsYWJsZSBmcm9tIHdoZW4gaXQgd2FzIGxhc3Qgc2NoZWR1bGVkXG5cdFx0aWYgKGxhc3Rfc2NoZWR1bGVkX2VmZmVjdCAhPT0gbnVsbCkge1xuXHRcdFx0aWYgKERFVikge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGhhbmRsZV9lcnJvcihlcnJvciwgbGFzdF9zY2hlZHVsZWRfZWZmZWN0LCBudWxsLCBudWxsKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdC8vIE9ubHkgbG9nIHRoZSBlZmZlY3Qgc3RhY2sgaWYgdGhlIGVycm9yIGlzIHJlLXRocm93blxuXHRcdFx0XHRcdGxvZ19lZmZlY3Rfc3RhY2soKTtcblx0XHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVfZXJyb3IoZXJyb3IsIGxhc3Rfc2NoZWR1bGVkX2VmZmVjdCwgbnVsbCwgbnVsbCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChERVYpIHtcblx0XHRcdFx0bG9nX2VmZmVjdF9zdGFjaygpO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGZsdXNoX3F1ZXVlZF9yb290X2VmZmVjdHMoKSB7XG5cdHZhciB3YXNfdXBkYXRpbmdfZWZmZWN0ID0gaXNfdXBkYXRpbmdfZWZmZWN0O1xuXG5cdHRyeSB7XG5cdFx0dmFyIGZsdXNoX2NvdW50ID0gMDtcblx0XHRpc191cGRhdGluZ19lZmZlY3QgPSB0cnVlO1xuXG5cdFx0d2hpbGUgKHF1ZXVlZF9yb290X2VmZmVjdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKGZsdXNoX2NvdW50KysgPiAxMDAwKSB7XG5cdFx0XHRcdGluZmluaXRlX2xvb3BfZ3VhcmQoKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHJvb3RfZWZmZWN0cyA9IHF1ZXVlZF9yb290X2VmZmVjdHM7XG5cdFx0XHR2YXIgbGVuZ3RoID0gcm9vdF9lZmZlY3RzLmxlbmd0aDtcblxuXHRcdFx0cXVldWVkX3Jvb3RfZWZmZWN0cyA9IFtdO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBjb2xsZWN0ZWRfZWZmZWN0cyA9IHByb2Nlc3NfZWZmZWN0cyhyb290X2VmZmVjdHNbaV0pO1xuXHRcdFx0XHRmbHVzaF9xdWV1ZWRfZWZmZWN0cyhjb2xsZWN0ZWRfZWZmZWN0cyk7XG5cdFx0XHR9XG5cdFx0XHRvbGRfdmFsdWVzLmNsZWFyKCk7XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdGlzX2ZsdXNoaW5nID0gZmFsc2U7XG5cdFx0aXNfdXBkYXRpbmdfZWZmZWN0ID0gd2FzX3VwZGF0aW5nX2VmZmVjdDtcblxuXHRcdGxhc3Rfc2NoZWR1bGVkX2VmZmVjdCA9IG51bGw7XG5cdFx0aWYgKERFVikge1xuXHRcdFx0ZGV2X2VmZmVjdF9zdGFjayA9IFtdO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8RWZmZWN0Pn0gZWZmZWN0c1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGZsdXNoX3F1ZXVlZF9lZmZlY3RzKGVmZmVjdHMpIHtcblx0dmFyIGxlbmd0aCA9IGVmZmVjdHMubGVuZ3RoO1xuXHRpZiAobGVuZ3RoID09PSAwKSByZXR1cm47XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdHZhciBlZmZlY3QgPSBlZmZlY3RzW2ldO1xuXG5cdFx0aWYgKChlZmZlY3QuZiAmIChERVNUUk9ZRUQgfCBJTkVSVCkpID09PSAwKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoY2hlY2tfZGlydGluZXNzKGVmZmVjdCkpIHtcblx0XHRcdFx0XHR1cGRhdGVfZWZmZWN0KGVmZmVjdCk7XG5cblx0XHRcdFx0XHQvLyBFZmZlY3RzIHdpdGggbm8gZGVwZW5kZW5jaWVzIG9yIHRlYXJkb3duIGRvIG5vdCBnZXQgYWRkZWQgdG8gdGhlIGVmZmVjdCB0cmVlLlxuXHRcdFx0XHRcdC8vIERlZmVycmVkIGVmZmVjdHMgKGUuZy4gYCRlZmZlY3QoLi4uKWApIF9hcmVfIGFkZGVkIHRvIHRoZSB0cmVlIGJlY2F1c2Ugd2Vcblx0XHRcdFx0XHQvLyBkb24ndCBrbm93IGlmIHdlIG5lZWQgdG8ga2VlcCB0aGVtIHVudGlsIHRoZXkgYXJlIGV4ZWN1dGVkLiBEb2luZyB0aGUgY2hlY2tcblx0XHRcdFx0XHQvLyBoZXJlIChyYXRoZXIgdGhhbiBpbiBgdXBkYXRlX2VmZmVjdGApIGFsbG93cyB1cyB0byBza2lwIHRoZSB3b3JrIGZvclxuXHRcdFx0XHRcdC8vIGltbWVkaWF0ZSBlZmZlY3RzLlxuXHRcdFx0XHRcdGlmIChlZmZlY3QuZGVwcyA9PT0gbnVsbCAmJiBlZmZlY3QuZmlyc3QgPT09IG51bGwgJiYgZWZmZWN0Lm5vZGVzX3N0YXJ0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRpZiAoZWZmZWN0LnRlYXJkb3duID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHJlbW92ZSB0aGlzIGVmZmVjdCBmcm9tIHRoZSBncmFwaFxuXHRcdFx0XHRcdFx0XHR1bmxpbmtfZWZmZWN0KGVmZmVjdCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBrZWVwIHRoZSBlZmZlY3QgaW4gdGhlIGdyYXBoLCBidXQgZnJlZSB1cCBzb21lIG1lbW9yeVxuXHRcdFx0XHRcdFx0XHRlZmZlY3QuZm4gPSBudWxsO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0aGFuZGxlX2Vycm9yKGVycm9yLCBlZmZlY3QsIG51bGwsIGVmZmVjdC5jdHgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RWZmZWN0fSBzaWduYWxcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVfZWZmZWN0KHNpZ25hbCkge1xuXHRpZiAoIWlzX2ZsdXNoaW5nKSB7XG5cdFx0aXNfZmx1c2hpbmcgPSB0cnVlO1xuXHRcdHF1ZXVlTWljcm90YXNrKGZsdXNoX3F1ZXVlZF9yb290X2VmZmVjdHMpO1xuXHR9XG5cblx0dmFyIGVmZmVjdCA9IChsYXN0X3NjaGVkdWxlZF9lZmZlY3QgPSBzaWduYWwpO1xuXG5cdHdoaWxlIChlZmZlY3QucGFyZW50ICE9PSBudWxsKSB7XG5cdFx0ZWZmZWN0ID0gZWZmZWN0LnBhcmVudDtcblx0XHR2YXIgZmxhZ3MgPSBlZmZlY3QuZjtcblxuXHRcdGlmICgoZmxhZ3MgJiAoUk9PVF9FRkZFQ1QgfCBCUkFOQ0hfRUZGRUNUKSkgIT09IDApIHtcblx0XHRcdGlmICgoZmxhZ3MgJiBDTEVBTikgPT09IDApIHJldHVybjtcblx0XHRcdGVmZmVjdC5mIF49IENMRUFOO1xuXHRcdH1cblx0fVxuXG5cdHF1ZXVlZF9yb290X2VmZmVjdHMucHVzaChlZmZlY3QpO1xufVxuXG4vKipcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGJvdGggcnVucyByZW5kZXIgZWZmZWN0cyBhbmQgY29sbGVjdHMgdXNlciBlZmZlY3RzIGluIHRvcG9sb2dpY2FsIG9yZGVyXG4gKiBmcm9tIHRoZSBzdGFydGluZyBlZmZlY3QgcGFzc2VkIGluLiBFZmZlY3RzIHdpbGwgYmUgY29sbGVjdGVkIHdoZW4gdGhleSBtYXRjaCB0aGUgZmlsdGVyZWRcbiAqIGJpdHdpc2UgZmxhZyBwYXNzZWQgaW4gb25seS4gVGhlIGNvbGxlY3RlZCBlZmZlY3RzIGFycmF5IHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggYWxsIHRoZSB1c2VyXG4gKiBlZmZlY3RzIHRvIGJlIGZsdXNoZWQuXG4gKlxuICogQHBhcmFtIHtFZmZlY3R9IHJvb3RcbiAqIEByZXR1cm5zIHtFZmZlY3RbXX1cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc19lZmZlY3RzKHJvb3QpIHtcblx0LyoqIEB0eXBlIHtFZmZlY3RbXX0gKi9cblx0dmFyIGVmZmVjdHMgPSBbXTtcblxuXHQvKiogQHR5cGUge0VmZmVjdCB8IG51bGx9ICovXG5cdHZhciBlZmZlY3QgPSByb290O1xuXG5cdHdoaWxlIChlZmZlY3QgIT09IG51bGwpIHtcblx0XHR2YXIgZmxhZ3MgPSBlZmZlY3QuZjtcblx0XHR2YXIgaXNfYnJhbmNoID0gKGZsYWdzICYgKEJSQU5DSF9FRkZFQ1QgfCBST09UX0VGRkVDVCkpICE9PSAwO1xuXHRcdHZhciBpc19za2lwcGFibGVfYnJhbmNoID0gaXNfYnJhbmNoICYmIChmbGFncyAmIENMRUFOKSAhPT0gMDtcblxuXHRcdGlmICghaXNfc2tpcHBhYmxlX2JyYW5jaCAmJiAoZmxhZ3MgJiBJTkVSVCkgPT09IDApIHtcblx0XHRcdGlmICgoZmxhZ3MgJiBFRkZFQ1QpICE9PSAwKSB7XG5cdFx0XHRcdGVmZmVjdHMucHVzaChlZmZlY3QpO1xuXHRcdFx0fSBlbHNlIGlmIChpc19icmFuY2gpIHtcblx0XHRcdFx0ZWZmZWN0LmYgXj0gQ0xFQU47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmIChjaGVja19kaXJ0aW5lc3MoZWZmZWN0KSkge1xuXHRcdFx0XHRcdFx0dXBkYXRlX2VmZmVjdChlZmZlY3QpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRoYW5kbGVfZXJyb3IoZXJyb3IsIGVmZmVjdCwgbnVsbCwgZWZmZWN0LmN0eCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqIEB0eXBlIHtFZmZlY3QgfCBudWxsfSAqL1xuXHRcdFx0dmFyIGNoaWxkID0gZWZmZWN0LmZpcnN0O1xuXG5cdFx0XHRpZiAoY2hpbGQgIT09IG51bGwpIHtcblx0XHRcdFx0ZWZmZWN0ID0gY2hpbGQ7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBwYXJlbnQgPSBlZmZlY3QucGFyZW50O1xuXHRcdGVmZmVjdCA9IGVmZmVjdC5uZXh0O1xuXG5cdFx0d2hpbGUgKGVmZmVjdCA9PT0gbnVsbCAmJiBwYXJlbnQgIT09IG51bGwpIHtcblx0XHRcdGVmZmVjdCA9IHBhcmVudC5uZXh0O1xuXHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWZmZWN0cztcbn1cblxuLyoqXG4gKiBTeW5jaHJvbm91c2x5IGZsdXNoIGFueSBwZW5kaW5nIHVwZGF0ZXMuXG4gKiBSZXR1cm5zIHZvaWQgaWYgbm8gY2FsbGJhY2sgaXMgcHJvdmlkZWQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgY2FsbGJhY2suXG4gKiBAdGVtcGxhdGUgW1Q9dm9pZF1cbiAqIEBwYXJhbSB7KCgpID0+IFQpIHwgdW5kZWZpbmVkfSBbZm5dXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoU3luYyhmbikge1xuXHR2YXIgcmVzdWx0O1xuXG5cdGlmIChmbikge1xuXHRcdGlzX2ZsdXNoaW5nID0gdHJ1ZTtcblx0XHRmbHVzaF9xdWV1ZWRfcm9vdF9lZmZlY3RzKCk7XG5cdFx0cmVzdWx0ID0gZm4oKTtcblx0fVxuXG5cdGZsdXNoX3Rhc2tzKCk7XG5cblx0d2hpbGUgKHF1ZXVlZF9yb290X2VmZmVjdHMubGVuZ3RoID4gMCkge1xuXHRcdGlzX2ZsdXNoaW5nID0gdHJ1ZTtcblx0XHRmbHVzaF9xdWV1ZWRfcm9vdF9lZmZlY3RzKCk7XG5cdFx0Zmx1c2hfdGFza3MoKTtcblx0fVxuXG5cdHJldHVybiAvKiogQHR5cGUge1R9ICovIChyZXN1bHQpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb25jZSBhbnkgcGVuZGluZyBzdGF0ZSBjaGFuZ2VzIGhhdmUgYmVlbiBhcHBsaWVkLlxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0aWNrKCkge1xuXHRhd2FpdCBQcm9taXNlLnJlc29sdmUoKTtcblx0Ly8gQnkgY2FsbGluZyBmbHVzaFN5bmMgd2UgZ3VhcmFudGVlIHRoYXQgYW55IHBlbmRpbmcgc3RhdGUgY2hhbmdlcyBhcmUgYXBwbGllZCBhZnRlciBvbmUgdGljay5cblx0Ly8gVE9ETyBsb29rIGludG8gd2hldGhlciB3ZSBjYW4gbWFrZSBmbHVzaGluZyBzdWJzZXF1ZW50IHVwZGF0ZXMgc3luY2hyb25vdXNseSBpbiB0aGUgZnV0dXJlLlxuXHRmbHVzaFN5bmMoKTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtWYWx1ZTxWPn0gc2lnbmFsXG4gKiBAcmV0dXJucyB7Vn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldChzaWduYWwpIHtcblx0dmFyIGZsYWdzID0gc2lnbmFsLmY7XG5cdHZhciBpc19kZXJpdmVkID0gKGZsYWdzICYgREVSSVZFRCkgIT09IDA7XG5cblx0aWYgKGNhcHR1cmVkX3NpZ25hbHMgIT09IG51bGwpIHtcblx0XHRjYXB0dXJlZF9zaWduYWxzLmFkZChzaWduYWwpO1xuXHR9XG5cblx0Ly8gUmVnaXN0ZXIgdGhlIGRlcGVuZGVuY3kgb24gdGhlIGN1cnJlbnQgcmVhY3Rpb24gc2lnbmFsLlxuXHRpZiAoYWN0aXZlX3JlYWN0aW9uICE9PSBudWxsICYmICF1bnRyYWNraW5nKSB7XG5cdFx0aWYgKCFyZWFjdGlvbl9zb3VyY2VzPy5pbmNsdWRlcyhzaWduYWwpKSB7XG5cdFx0XHR2YXIgZGVwcyA9IGFjdGl2ZV9yZWFjdGlvbi5kZXBzO1xuXHRcdFx0aWYgKHNpZ25hbC5ydiA8IHJlYWRfdmVyc2lvbikge1xuXHRcdFx0XHRzaWduYWwucnYgPSByZWFkX3ZlcnNpb247XG5cdFx0XHRcdC8vIElmIHRoZSBzaWduYWwgaXMgYWNjZXNzaW5nIHRoZSBzYW1lIGRlcGVuZGVuY2llcyBpbiB0aGUgc2FtZVxuXHRcdFx0XHQvLyBvcmRlciBhcyBpdCBkaWQgbGFzdCB0aW1lLCBpbmNyZW1lbnQgYHNraXBwZWRfZGVwc2Bcblx0XHRcdFx0Ly8gcmF0aGVyIHRoYW4gdXBkYXRpbmcgYG5ld19kZXBzYCwgd2hpY2ggY3JlYXRlcyBHQyBjb3N0XG5cdFx0XHRcdGlmIChuZXdfZGVwcyA9PT0gbnVsbCAmJiBkZXBzICE9PSBudWxsICYmIGRlcHNbc2tpcHBlZF9kZXBzXSA9PT0gc2lnbmFsKSB7XG5cdFx0XHRcdFx0c2tpcHBlZF9kZXBzKys7XG5cdFx0XHRcdH0gZWxzZSBpZiAobmV3X2RlcHMgPT09IG51bGwpIHtcblx0XHRcdFx0XHRuZXdfZGVwcyA9IFtzaWduYWxdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFza2lwX3JlYWN0aW9uIHx8ICFuZXdfZGVwcy5pbmNsdWRlcyhzaWduYWwpKSB7XG5cdFx0XHRcdFx0Ly8gTm9ybWFsbHkgd2UgY2FuIHB1c2ggZHVwbGljYXRlZCBkZXBlbmRlbmNpZXMgdG8gYG5ld19kZXBzYCwgYnV0IGlmIHdlJ3JlIGluc2lkZVxuXHRcdFx0XHRcdC8vIGFuIHVub3duZWQgZGVyaXZlZCBiZWNhdXNlIHNraXBfcmVhY3Rpb24gaXMgdHJ1ZSwgdGhlbiB3ZSBuZWVkIHRvIGVuc3VyZSB0aGF0XG5cdFx0XHRcdFx0Ly8gd2UgZG9uJ3QgaGF2ZSBkdXBsaWNhdGVzXG5cdFx0XHRcdFx0bmV3X2RlcHMucHVzaChzaWduYWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgaWYgKFxuXHRcdGlzX2Rlcml2ZWQgJiZcblx0XHQvKiogQHR5cGUge0Rlcml2ZWR9ICovIChzaWduYWwpLmRlcHMgPT09IG51bGwgJiZcblx0XHQvKiogQHR5cGUge0Rlcml2ZWR9ICovIChzaWduYWwpLmVmZmVjdHMgPT09IG51bGxcblx0KSB7XG5cdFx0dmFyIGRlcml2ZWQgPSAvKiogQHR5cGUge0Rlcml2ZWR9ICovIChzaWduYWwpO1xuXHRcdHZhciBwYXJlbnQgPSBkZXJpdmVkLnBhcmVudDtcblxuXHRcdGlmIChwYXJlbnQgIT09IG51bGwgJiYgKHBhcmVudC5mICYgVU5PV05FRCkgPT09IDApIHtcblx0XHRcdC8vIElmIHRoZSBkZXJpdmVkIGlzIG93bmVkIGJ5IGFub3RoZXIgZGVyaXZlZCB0aGVuIG1hcmsgaXQgYXMgdW5vd25lZFxuXHRcdFx0Ly8gYXMgdGhlIGRlcml2ZWQgdmFsdWUgbWlnaHQgaGF2ZSBiZWVuIHJlZmVyZW5jZWQgaW4gYSBkaWZmZXJlbnQgY29udGV4dFxuXHRcdFx0Ly8gc2luY2UgYW5kIHRodXMgaXRzIHBhcmVudCBtaWdodCBub3QgYmUgaXRzIHRydWUgb3duZXIgYW55bW9yZVxuXHRcdFx0ZGVyaXZlZC5mIF49IFVOT1dORUQ7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGlzX2Rlcml2ZWQpIHtcblx0XHRkZXJpdmVkID0gLyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAoc2lnbmFsKTtcblxuXHRcdGlmIChjaGVja19kaXJ0aW5lc3MoZGVyaXZlZCkpIHtcblx0XHRcdHVwZGF0ZV9kZXJpdmVkKGRlcml2ZWQpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChcblx0XHRERVYgJiZcblx0XHR0cmFjaW5nX21vZGVfZmxhZyAmJlxuXHRcdHRyYWNpbmdfZXhwcmVzc2lvbnMgIT09IG51bGwgJiZcblx0XHRhY3RpdmVfcmVhY3Rpb24gIT09IG51bGwgJiZcblx0XHR0cmFjaW5nX2V4cHJlc3Npb25zLnJlYWN0aW9uID09PSBhY3RpdmVfcmVhY3Rpb25cblx0KSB7XG5cdFx0Ly8gVXNlZCB3aGVuIG1hcHBpbmcgc3RhdGUgYmV0d2VlbiBzcGVjaWFsIGJsb2NrcyBsaWtlIGBlYWNoYFxuXHRcdGlmIChzaWduYWwuZGVidWcpIHtcblx0XHRcdHNpZ25hbC5kZWJ1ZygpO1xuXHRcdH0gZWxzZSBpZiAoc2lnbmFsLmNyZWF0ZWQpIHtcblx0XHRcdHZhciBlbnRyeSA9IHRyYWNpbmdfZXhwcmVzc2lvbnMuZW50cmllcy5nZXQoc2lnbmFsKTtcblxuXHRcdFx0aWYgKGVudHJ5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZW50cnkgPSB7IHJlYWQ6IFtdIH07XG5cdFx0XHRcdHRyYWNpbmdfZXhwcmVzc2lvbnMuZW50cmllcy5zZXQoc2lnbmFsLCBlbnRyeSk7XG5cdFx0XHR9XG5cblx0XHRcdGVudHJ5LnJlYWQucHVzaChnZXRfc3RhY2soJ1RyYWNlZEF0JykpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChpc19kZXN0cm95aW5nX2VmZmVjdCAmJiBvbGRfdmFsdWVzLmhhcyhzaWduYWwpKSB7XG5cdFx0cmV0dXJuIG9sZF92YWx1ZXMuZ2V0KHNpZ25hbCk7XG5cdH1cblxuXHRyZXR1cm4gc2lnbmFsLnY7XG59XG5cbi8qKlxuICogTGlrZSBgZ2V0YCwgYnV0IGNoZWNrcyBmb3IgYHVuZGVmaW5lZGAuIFVzZWQgZm9yIGB2YXJgIGRlY2xhcmF0aW9ucyBiZWNhdXNlIHRoZXkgY2FuIGJlIGFjY2Vzc2VkIGJlZm9yZSBiZWluZyBkZWNsYXJlZFxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7VmFsdWU8Vj4gfCB1bmRlZmluZWR9IHNpZ25hbFxuICogQHJldHVybnMge1YgfCB1bmRlZmluZWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYWZlX2dldChzaWduYWwpIHtcblx0cmV0dXJuIHNpZ25hbCAmJiBnZXQoc2lnbmFsKTtcbn1cblxuLyoqXG4gKiBDYXB0dXJlIGFuIGFycmF5IG9mIGFsbCB0aGUgc2lnbmFscyB0aGF0IGFyZSByZWFkIHdoZW4gYGZuYCBpcyBjYWxsZWRcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0geygpID0+IFR9IGZuXG4gKi9cbmZ1bmN0aW9uIGNhcHR1cmVfc2lnbmFscyhmbikge1xuXHR2YXIgcHJldmlvdXNfY2FwdHVyZWRfc2lnbmFscyA9IGNhcHR1cmVkX3NpZ25hbHM7XG5cdGNhcHR1cmVkX3NpZ25hbHMgPSBuZXcgU2V0KCk7XG5cblx0dmFyIGNhcHR1cmVkID0gY2FwdHVyZWRfc2lnbmFscztcblx0dmFyIHNpZ25hbDtcblxuXHR0cnkge1xuXHRcdHVudHJhY2soZm4pO1xuXHRcdGlmIChwcmV2aW91c19jYXB0dXJlZF9zaWduYWxzICE9PSBudWxsKSB7XG5cdFx0XHRmb3IgKHNpZ25hbCBvZiBjYXB0dXJlZF9zaWduYWxzKSB7XG5cdFx0XHRcdHByZXZpb3VzX2NhcHR1cmVkX3NpZ25hbHMuYWRkKHNpZ25hbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdGNhcHR1cmVkX3NpZ25hbHMgPSBwcmV2aW91c19jYXB0dXJlZF9zaWduYWxzO1xuXHR9XG5cblx0cmV0dXJuIGNhcHR1cmVkO1xufVxuXG4vKipcbiAqIEludm9rZXMgYSBmdW5jdGlvbiBhbmQgY2FwdHVyZXMgYWxsIHNpZ25hbHMgdGhhdCBhcmUgcmVhZCBkdXJpbmcgdGhlIGludm9jYXRpb24sXG4gKiB0aGVuIGludmFsaWRhdGVzIHRoZW0uXG4gKiBAcGFyYW0geygpID0+IGFueX0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRhdGVfaW5uZXJfc2lnbmFscyhmbikge1xuXHR2YXIgY2FwdHVyZWQgPSBjYXB0dXJlX3NpZ25hbHMoKCkgPT4gdW50cmFjayhmbikpO1xuXG5cdGZvciAodmFyIHNpZ25hbCBvZiBjYXB0dXJlZCkge1xuXHRcdC8vIEdvIG9uZSBsZXZlbCB1cCBiZWNhdXNlIGRlcml2ZWQgc2lnbmFscyBjcmVhdGVkIGFzIHBhcnQgb2YgcHJvcHMgaW4gbGVnYWN5IG1vZGVcblx0XHRpZiAoKHNpZ25hbC5mICYgTEVHQUNZX0RFUklWRURfUFJPUCkgIT09IDApIHtcblx0XHRcdGZvciAoY29uc3QgZGVwIG9mIC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKHNpZ25hbCkuZGVwcyB8fCBbXSkge1xuXHRcdFx0XHRpZiAoKGRlcC5mICYgREVSSVZFRCkgPT09IDApIHtcblx0XHRcdFx0XHQvLyBVc2UgaW50ZXJuYWxfc2V0IGluc3RlYWQgb2Ygc2V0IGhlcmUgYW5kIGJlbG93IHRvIGF2b2lkIG11dGF0aW9uIHZhbGlkYXRpb25cblx0XHRcdFx0XHRpbnRlcm5hbF9zZXQoZGVwLCBkZXAudik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aW50ZXJuYWxfc2V0KHNpZ25hbCwgc2lnbmFsLnYpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFdoZW4gdXNlZCBpbnNpZGUgYSBbYCRkZXJpdmVkYF0oaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLyRkZXJpdmVkKSBvciBbYCRlZmZlY3RgXShodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUvJGVmZmVjdCksXG4gKiBhbnkgc3RhdGUgcmVhZCBpbnNpZGUgYGZuYCB3aWxsIG5vdCBiZSB0cmVhdGVkIGFzIGEgZGVwZW5kZW5jeS5cbiAqXG4gKiBgYGB0c1xuICogJGVmZmVjdCgoKSA9PiB7XG4gKiAgIC8vIHRoaXMgd2lsbCBydW4gd2hlbiBgZGF0YWAgY2hhbmdlcywgYnV0IG5vdCB3aGVuIGB0aW1lYCBjaGFuZ2VzXG4gKiAgIHNhdmUoZGF0YSwge1xuICogICAgIHRpbWVzdGFtcDogdW50cmFjaygoKSA9PiB0aW1lKVxuICogICB9KTtcbiAqIH0pO1xuICogYGBgXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHsoKSA9PiBUfSBmblxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bnRyYWNrKGZuKSB7XG5cdHZhciBwcmV2aW91c191bnRyYWNraW5nID0gdW50cmFja2luZztcblx0dHJ5IHtcblx0XHR1bnRyYWNraW5nID0gdHJ1ZTtcblx0XHRyZXR1cm4gZm4oKTtcblx0fSBmaW5hbGx5IHtcblx0XHR1bnRyYWNraW5nID0gcHJldmlvdXNfdW50cmFja2luZztcblx0fVxufVxuXG5jb25zdCBTVEFUVVNfTUFTSyA9IH4oRElSVFkgfCBNQVlCRV9ESVJUWSB8IENMRUFOKTtcblxuLyoqXG4gKiBAcGFyYW0ge1NpZ25hbH0gc2lnbmFsXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9zaWduYWxfc3RhdHVzKHNpZ25hbCwgc3RhdHVzKSB7XG5cdHNpZ25hbC5mID0gKHNpZ25hbC5mICYgU1RBVFVTX01BU0spIHwgc3RhdHVzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIHVua25vd24+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVkZV9mcm9tX29iamVjdChvYmosIGtleXMpIHtcblx0LyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gKi9cblx0dmFyIHJlc3VsdCA9IHt9O1xuXG5cdGZvciAodmFyIGtleSBpbiBvYmopIHtcblx0XHRpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuXHRcdFx0cmVzdWx0W2tleV0gPSBvYmpba2V5XTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFBvc3NpYmx5IHRyYXZlcnNlIGFuIG9iamVjdCBhbmQgcmVhZCBhbGwgaXRzIHByb3BlcnRpZXMgc28gdGhhdCB0aGV5J3JlIGFsbCByZWFjdGl2ZSBpbiBjYXNlIHRoaXMgaXMgYCRzdGF0ZWAuXG4gKiBEb2VzIG9ubHkgY2hlY2sgZmlyc3QgbGV2ZWwgb2YgYW4gb2JqZWN0IGZvciBwZXJmb3JtYW5jZSByZWFzb25zIChoZXVyaXN0aWMgc2hvdWxkIGJlIGdvb2QgZm9yIDk5JSBvZiBhbGwgY2FzZXMpLlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBfcmVhZF9zdGF0ZSh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCAhdmFsdWUgfHwgdmFsdWUgaW5zdGFuY2VvZiBFdmVudFRhcmdldCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChTVEFURV9TWU1CT0wgaW4gdmFsdWUpIHtcblx0XHRkZWVwX3JlYWQodmFsdWUpO1xuXHR9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdGZvciAobGV0IGtleSBpbiB2YWx1ZSkge1xuXHRcdFx0Y29uc3QgcHJvcCA9IHZhbHVlW2tleV07XG5cdFx0XHRpZiAodHlwZW9mIHByb3AgPT09ICdvYmplY3QnICYmIHByb3AgJiYgU1RBVEVfU1lNQk9MIGluIHByb3ApIHtcblx0XHRcdFx0ZGVlcF9yZWFkKHByb3ApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIERlZXBseSB0cmF2ZXJzZSBhbiBvYmplY3QgYW5kIHJlYWQgYWxsIGl0cyBwcm9wZXJ0aWVzXG4gKiBzbyB0aGF0IHRoZXkncmUgYWxsIHJlYWN0aXZlIGluIGNhc2UgdGhpcyBpcyBgJHN0YXRlYFxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1NldDxhbnk+fSB2aXNpdGVkXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBfcmVhZCh2YWx1ZSwgdmlzaXRlZCA9IG5ldyBTZXQoKSkge1xuXHRpZiAoXG5cdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdHZhbHVlICE9PSBudWxsICYmXG5cdFx0Ly8gV2UgZG9uJ3Qgd2FudCB0byB0cmF2ZXJzZSBET00gZWxlbWVudHNcblx0XHQhKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRUYXJnZXQpICYmXG5cdFx0IXZpc2l0ZWQuaGFzKHZhbHVlKVxuXHQpIHtcblx0XHR2aXNpdGVkLmFkZCh2YWx1ZSk7XG5cdFx0Ly8gV2hlbiB3b3JraW5nIHdpdGggYSBwb3NzaWJsZSBTdmVsdGVEYXRlLCB0aGlzXG5cdFx0Ly8gd2lsbCBlbnN1cmUgd2UgY2FwdHVyZSBjaGFuZ2VzIHRvIGl0LlxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdHZhbHVlLmdldFRpbWUoKTtcblx0XHR9XG5cdFx0Zm9yIChsZXQga2V5IGluIHZhbHVlKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkZWVwX3JlYWQodmFsdWVba2V5XSwgdmlzaXRlZCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdC8vIGNvbnRpbnVlXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHByb3RvID0gZ2V0X3Byb3RvdHlwZV9vZih2YWx1ZSk7XG5cdFx0aWYgKFxuXHRcdFx0cHJvdG8gIT09IE9iamVjdC5wcm90b3R5cGUgJiZcblx0XHRcdHByb3RvICE9PSBBcnJheS5wcm90b3R5cGUgJiZcblx0XHRcdHByb3RvICE9PSBNYXAucHJvdG90eXBlICYmXG5cdFx0XHRwcm90byAhPT0gU2V0LnByb3RvdHlwZSAmJlxuXHRcdFx0cHJvdG8gIT09IERhdGUucHJvdG90eXBlXG5cdFx0KSB7XG5cdFx0XHRjb25zdCBkZXNjcmlwdG9ycyA9IGdldF9kZXNjcmlwdG9ycyhwcm90byk7XG5cdFx0XHRmb3IgKGxldCBrZXkgaW4gZGVzY3JpcHRvcnMpIHtcblx0XHRcdFx0Y29uc3QgZ2V0ID0gZGVzY3JpcHRvcnNba2V5XS5nZXQ7XG5cdFx0XHRcdGlmIChnZXQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0Z2V0LmNhbGwodmFsdWUpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRcdC8vIGNvbnRpbnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCAiY29uc3QgcmVnZXhfcmV0dXJuX2NoYXJhY3RlcnMgPSAvXFxyL2c7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc2goc3RyKSB7XG5cdHN0ciA9IHN0ci5yZXBsYWNlKHJlZ2V4X3JldHVybl9jaGFyYWN0ZXJzLCAnJyk7XG5cdGxldCBoYXNoID0gNTM4MTtcblx0bGV0IGkgPSBzdHIubGVuZ3RoO1xuXG5cdHdoaWxlIChpLS0pIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuXHRyZXR1cm4gKGhhc2ggPj4+IDApLnRvU3RyaW5nKDM2KTtcbn1cblxuY29uc3QgVk9JRF9FTEVNRU5UX05BTUVTID0gW1xuXHQnYXJlYScsXG5cdCdiYXNlJyxcblx0J2JyJyxcblx0J2NvbCcsXG5cdCdjb21tYW5kJyxcblx0J2VtYmVkJyxcblx0J2hyJyxcblx0J2ltZycsXG5cdCdpbnB1dCcsXG5cdCdrZXlnZW4nLFxuXHQnbGluaycsXG5cdCdtZXRhJyxcblx0J3BhcmFtJyxcblx0J3NvdXJjZScsXG5cdCd0cmFjaycsXG5cdCd3YnInXG5dO1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGBuYW1lYCBpcyBvZiBhIHZvaWQgZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX3ZvaWQobmFtZSkge1xuXHRyZXR1cm4gVk9JRF9FTEVNRU5UX05BTUVTLmluY2x1ZGVzKG5hbWUpIHx8IG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJyFkb2N0eXBlJztcbn1cblxuY29uc3QgUkVTRVJWRURfV09SRFMgPSBbXG5cdCdhcmd1bWVudHMnLFxuXHQnYXdhaXQnLFxuXHQnYnJlYWsnLFxuXHQnY2FzZScsXG5cdCdjYXRjaCcsXG5cdCdjbGFzcycsXG5cdCdjb25zdCcsXG5cdCdjb250aW51ZScsXG5cdCdkZWJ1Z2dlcicsXG5cdCdkZWZhdWx0Jyxcblx0J2RlbGV0ZScsXG5cdCdkbycsXG5cdCdlbHNlJyxcblx0J2VudW0nLFxuXHQnZXZhbCcsXG5cdCdleHBvcnQnLFxuXHQnZXh0ZW5kcycsXG5cdCdmYWxzZScsXG5cdCdmaW5hbGx5Jyxcblx0J2ZvcicsXG5cdCdmdW5jdGlvbicsXG5cdCdpZicsXG5cdCdpbXBsZW1lbnRzJyxcblx0J2ltcG9ydCcsXG5cdCdpbicsXG5cdCdpbnN0YW5jZW9mJyxcblx0J2ludGVyZmFjZScsXG5cdCdsZXQnLFxuXHQnbmV3Jyxcblx0J251bGwnLFxuXHQncGFja2FnZScsXG5cdCdwcml2YXRlJyxcblx0J3Byb3RlY3RlZCcsXG5cdCdwdWJsaWMnLFxuXHQncmV0dXJuJyxcblx0J3N0YXRpYycsXG5cdCdzdXBlcicsXG5cdCdzd2l0Y2gnLFxuXHQndGhpcycsXG5cdCd0aHJvdycsXG5cdCd0cnVlJyxcblx0J3RyeScsXG5cdCd0eXBlb2YnLFxuXHQndmFyJyxcblx0J3ZvaWQnLFxuXHQnd2hpbGUnLFxuXHQnd2l0aCcsXG5cdCd5aWVsZCdcbl07XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYHdvcmRgIGlzIGEgcmVzZXJ2ZWQgSmF2YVNjcmlwdCBrZXl3b3JkXG4gKiBAcGFyYW0ge3N0cmluZ30gd29yZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfcmVzZXJ2ZWQod29yZCkge1xuXHRyZXR1cm4gUkVTRVJWRURfV09SRFMuaW5jbHVkZXMod29yZCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX2NhcHR1cmVfZXZlbnQobmFtZSkge1xuXHRyZXR1cm4gbmFtZS5lbmRzV2l0aCgnY2FwdHVyZScpICYmIG5hbWUgIT09ICdnb3Rwb2ludGVyY2FwdHVyZScgJiYgbmFtZSAhPT0gJ2xvc3Rwb2ludGVyY2FwdHVyZSc7XG59XG5cbi8qKiBMaXN0IG9mIEVsZW1lbnQgZXZlbnRzIHRoYXQgd2lsbCBiZSBkZWxlZ2F0ZWQgKi9cbmNvbnN0IERFTEVHQVRFRF9FVkVOVFMgPSBbXG5cdCdiZWZvcmVpbnB1dCcsXG5cdCdjbGljaycsXG5cdCdjaGFuZ2UnLFxuXHQnZGJsY2xpY2snLFxuXHQnY29udGV4dG1lbnUnLFxuXHQnZm9jdXNpbicsXG5cdCdmb2N1c291dCcsXG5cdCdpbnB1dCcsXG5cdCdrZXlkb3duJyxcblx0J2tleXVwJyxcblx0J21vdXNlZG93bicsXG5cdCdtb3VzZW1vdmUnLFxuXHQnbW91c2VvdXQnLFxuXHQnbW91c2VvdmVyJyxcblx0J21vdXNldXAnLFxuXHQncG9pbnRlcmRvd24nLFxuXHQncG9pbnRlcm1vdmUnLFxuXHQncG9pbnRlcm91dCcsXG5cdCdwb2ludGVyb3ZlcicsXG5cdCdwb2ludGVydXAnLFxuXHQndG91Y2hlbmQnLFxuXHQndG91Y2htb3ZlJyxcblx0J3RvdWNoc3RhcnQnXG5dO1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGBldmVudF9uYW1lYCBpcyBhIGRlbGVnYXRlZCBldmVudFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50X25hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX2RlbGVnYXRlZChldmVudF9uYW1lKSB7XG5cdHJldHVybiBERUxFR0FURURfRVZFTlRTLmluY2x1ZGVzKGV2ZW50X25hbWUpO1xufVxuXG4vKipcbiAqIEF0dHJpYnV0ZXMgdGhhdCBhcmUgYm9vbGVhbiwgaS5lLiB0aGV5IGFyZSBwcmVzZW50IG9yIG5vdCBwcmVzZW50LlxuICovXG5jb25zdCBET01fQk9PTEVBTl9BVFRSSUJVVEVTID0gW1xuXHQnYWxsb3dmdWxsc2NyZWVuJyxcblx0J2FzeW5jJyxcblx0J2F1dG9mb2N1cycsXG5cdCdhdXRvcGxheScsXG5cdCdjaGVja2VkJyxcblx0J2NvbnRyb2xzJyxcblx0J2RlZmF1bHQnLFxuXHQnZGlzYWJsZWQnLFxuXHQnZm9ybW5vdmFsaWRhdGUnLFxuXHQnaGlkZGVuJyxcblx0J2luZGV0ZXJtaW5hdGUnLFxuXHQnaW5lcnQnLFxuXHQnaXNtYXAnLFxuXHQnbG9vcCcsXG5cdCdtdWx0aXBsZScsXG5cdCdtdXRlZCcsXG5cdCdub21vZHVsZScsXG5cdCdub3ZhbGlkYXRlJyxcblx0J29wZW4nLFxuXHQncGxheXNpbmxpbmUnLFxuXHQncmVhZG9ubHknLFxuXHQncmVxdWlyZWQnLFxuXHQncmV2ZXJzZWQnLFxuXHQnc2VhbWxlc3MnLFxuXHQnc2VsZWN0ZWQnLFxuXHQnd2Via2l0ZGlyZWN0b3J5Jyxcblx0J2RlZmVyJyxcblx0J2Rpc2FibGVwaWN0dXJlaW5waWN0dXJlJyxcblx0J2Rpc2FibGVyZW1vdGVwbGF5YmFjaydcbl07XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYG5hbWVgIGlzIGEgYm9vbGVhbiBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19ib29sZWFuX2F0dHJpYnV0ZShuYW1lKSB7XG5cdHJldHVybiBET01fQk9PTEVBTl9BVFRSSUJVVEVTLmluY2x1ZGVzKG5hbWUpO1xufVxuXG4vKipcbiAqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fVxuICogTGlzdCBvZiBhdHRyaWJ1dGUgbmFtZXMgdGhhdCBzaG91bGQgYmUgYWxpYXNlZCB0byB0aGVpciBwcm9wZXJ0eSBuYW1lc1xuICogYmVjYXVzZSB0aGV5IGJlaGF2ZSBkaWZmZXJlbnRseSBiZXR3ZWVuIHNldHRpbmcgdGhlbSBhcyBhbiBhdHRyaWJ1dGUgYW5kXG4gKiBzZXR0aW5nIHRoZW0gYXMgYSBwcm9wZXJ0eS5cbiAqL1xuY29uc3QgQVRUUklCVVRFX0FMSUFTRVMgPSB7XG5cdC8vIG5vIGBjbGFzczogJ2NsYXNzTmFtZSdgIGJlY2F1c2Ugd2UgaGFuZGxlIHRoYXQgc2VwYXJhdGVseVxuXHRmb3Jtbm92YWxpZGF0ZTogJ2Zvcm1Ob1ZhbGlkYXRlJyxcblx0aXNtYXA6ICdpc01hcCcsXG5cdG5vbW9kdWxlOiAnbm9Nb2R1bGUnLFxuXHRwbGF5c2lubGluZTogJ3BsYXlzSW5saW5lJyxcblx0cmVhZG9ubHk6ICdyZWFkT25seScsXG5cdGRlZmF1bHR2YWx1ZTogJ2RlZmF1bHRWYWx1ZScsXG5cdGRlZmF1bHRjaGVja2VkOiAnZGVmYXVsdENoZWNrZWQnLFxuXHRzcmNvYmplY3Q6ICdzcmNPYmplY3QnLFxuXHRub3ZhbGlkYXRlOiAnbm9WYWxpZGF0ZScsXG5cdGFsbG93ZnVsbHNjcmVlbjogJ2FsbG93RnVsbHNjcmVlbicsXG5cdGRpc2FibGVwaWN0dXJlaW5waWN0dXJlOiAnZGlzYWJsZVBpY3R1cmVJblBpY3R1cmUnLFxuXHRkaXNhYmxlcmVtb3RlcGxheWJhY2s6ICdkaXNhYmxlUmVtb3RlUGxheWJhY2snXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVfYXR0cmlidXRlKG5hbWUpIHtcblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0cmV0dXJuIEFUVFJJQlVURV9BTElBU0VTW25hbWVdID8/IG5hbWU7XG59XG5cbmNvbnN0IERPTV9QUk9QRVJUSUVTID0gW1xuXHQuLi5ET01fQk9PTEVBTl9BVFRSSUJVVEVTLFxuXHQnZm9ybU5vVmFsaWRhdGUnLFxuXHQnaXNNYXAnLFxuXHQnbm9Nb2R1bGUnLFxuXHQncGxheXNJbmxpbmUnLFxuXHQncmVhZE9ubHknLFxuXHQndmFsdWUnLFxuXHQndm9sdW1lJyxcblx0J2RlZmF1bHRWYWx1ZScsXG5cdCdkZWZhdWx0Q2hlY2tlZCcsXG5cdCdzcmNPYmplY3QnLFxuXHQnbm9WYWxpZGF0ZScsXG5cdCdhbGxvd0Z1bGxzY3JlZW4nLFxuXHQnZGlzYWJsZVBpY3R1cmVJblBpY3R1cmUnLFxuXHQnZGlzYWJsZVJlbW90ZVBsYXliYWNrJ1xuXTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfZG9tX3Byb3BlcnR5KG5hbWUpIHtcblx0cmV0dXJuIERPTV9QUk9QRVJUSUVTLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5jb25zdCBOT05fU1RBVElDX1BST1BFUlRJRVMgPSBbJ2F1dG9mb2N1cycsICdtdXRlZCcsICdkZWZhdWx0VmFsdWUnLCAnZGVmYXVsdENoZWNrZWQnXTtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gYXR0cmlidXRlIGNhbm5vdCBiZSBzZXQgdGhyb3VnaCB0aGUgdGVtcGxhdGVcbiAqIHN0cmluZywgaS5lLiBuZWVkcyBzb21lIGtpbmQgb2YgSmF2YVNjcmlwdCBoYW5kbGluZyB0byB3b3JrLlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbm5vdF9iZV9zZXRfc3RhdGljYWxseShuYW1lKSB7XG5cdHJldHVybiBOT05fU1RBVElDX1BST1BFUlRJRVMuaW5jbHVkZXMobmFtZSk7XG59XG5cbi8qKlxuICogU3Vic2V0IG9mIGRlbGVnYXRlZCBldmVudHMgd2hpY2ggc2hvdWxkIGJlIHBhc3NpdmUgYnkgZGVmYXVsdC5cbiAqIFRoZXNlIHR3byBhcmUgYWxyZWFkeSBwYXNzaXZlIHZpYSBicm93c2VyIGRlZmF1bHRzIG9uIHdpbmRvdywgZG9jdW1lbnQgYW5kIGJvZHkuXG4gKiBCdXQgc2luY2VcbiAqIC0gd2UncmUgZGVsZWdhdGluZyB0aGVtXG4gKiAtIHRoZXkgaGFwcGVuIG9mdGVuXG4gKiAtIHRoZXkgYXBwbHkgdG8gbW9iaWxlIHdoaWNoIGlzIGdlbmVyYWxseSBsZXNzIHBlcmZvcm1hbnRcbiAqIHdlJ3JlIG1hcmtpbmcgdGhlbSBhcyBwYXNzaXZlIGJ5IGRlZmF1bHQgZm9yIG90aGVyIGVsZW1lbnRzLCB0b28uXG4gKi9cbmNvbnN0IFBBU1NJVkVfRVZFTlRTID0gWyd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZSddO1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGBuYW1lYCBpcyBhIHBhc3NpdmUgZXZlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19wYXNzaXZlX2V2ZW50KG5hbWUpIHtcblx0cmV0dXJuIFBBU1NJVkVfRVZFTlRTLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5jb25zdCBDT05URU5UX0VESVRBQkxFX0JJTkRJTkdTID0gWyd0ZXh0Q29udGVudCcsICdpbm5lckhUTUwnLCAnaW5uZXJUZXh0J107XG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX2NvbnRlbnRfZWRpdGFibGVfYmluZGluZyhuYW1lKSB7XG5cdHJldHVybiBDT05URU5UX0VESVRBQkxFX0JJTkRJTkdTLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5jb25zdCBMT0FEX0VSUk9SX0VMRU1FTlRTID0gW1xuXHQnYm9keScsXG5cdCdlbWJlZCcsXG5cdCdpZnJhbWUnLFxuXHQnaW1nJyxcblx0J2xpbmsnLFxuXHQnb2JqZWN0Jyxcblx0J3NjcmlwdCcsXG5cdCdzdHlsZScsXG5cdCd0cmFjaydcbl07XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgZW1pdHMgYGxvYWRgIGFuZCBgZXJyb3JgIGV2ZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX2xvYWRfZXJyb3JfZWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBMT0FEX0VSUk9SX0VMRU1FTlRTLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5jb25zdCBTVkdfRUxFTUVOVFMgPSBbXG5cdCdhbHRHbHlwaCcsXG5cdCdhbHRHbHlwaERlZicsXG5cdCdhbHRHbHlwaEl0ZW0nLFxuXHQnYW5pbWF0ZScsXG5cdCdhbmltYXRlQ29sb3InLFxuXHQnYW5pbWF0ZU1vdGlvbicsXG5cdCdhbmltYXRlVHJhbnNmb3JtJyxcblx0J2NpcmNsZScsXG5cdCdjbGlwUGF0aCcsXG5cdCdjb2xvci1wcm9maWxlJyxcblx0J2N1cnNvcicsXG5cdCdkZWZzJyxcblx0J2Rlc2MnLFxuXHQnZGlzY2FyZCcsXG5cdCdlbGxpcHNlJyxcblx0J2ZlQmxlbmQnLFxuXHQnZmVDb2xvck1hdHJpeCcsXG5cdCdmZUNvbXBvbmVudFRyYW5zZmVyJyxcblx0J2ZlQ29tcG9zaXRlJyxcblx0J2ZlQ29udm9sdmVNYXRyaXgnLFxuXHQnZmVEaWZmdXNlTGlnaHRpbmcnLFxuXHQnZmVEaXNwbGFjZW1lbnRNYXAnLFxuXHQnZmVEaXN0YW50TGlnaHQnLFxuXHQnZmVEcm9wU2hhZG93Jyxcblx0J2ZlRmxvb2QnLFxuXHQnZmVGdW5jQScsXG5cdCdmZUZ1bmNCJyxcblx0J2ZlRnVuY0cnLFxuXHQnZmVGdW5jUicsXG5cdCdmZUdhdXNzaWFuQmx1cicsXG5cdCdmZUltYWdlJyxcblx0J2ZlTWVyZ2UnLFxuXHQnZmVNZXJnZU5vZGUnLFxuXHQnZmVNb3JwaG9sb2d5Jyxcblx0J2ZlT2Zmc2V0Jyxcblx0J2ZlUG9pbnRMaWdodCcsXG5cdCdmZVNwZWN1bGFyTGlnaHRpbmcnLFxuXHQnZmVTcG90TGlnaHQnLFxuXHQnZmVUaWxlJyxcblx0J2ZlVHVyYnVsZW5jZScsXG5cdCdmaWx0ZXInLFxuXHQnZm9udCcsXG5cdCdmb250LWZhY2UnLFxuXHQnZm9udC1mYWNlLWZvcm1hdCcsXG5cdCdmb250LWZhY2UtbmFtZScsXG5cdCdmb250LWZhY2Utc3JjJyxcblx0J2ZvbnQtZmFjZS11cmknLFxuXHQnZm9yZWlnbk9iamVjdCcsXG5cdCdnJyxcblx0J2dseXBoJyxcblx0J2dseXBoUmVmJyxcblx0J2hhdGNoJyxcblx0J2hhdGNocGF0aCcsXG5cdCdoa2VybicsXG5cdCdpbWFnZScsXG5cdCdsaW5lJyxcblx0J2xpbmVhckdyYWRpZW50Jyxcblx0J21hcmtlcicsXG5cdCdtYXNrJyxcblx0J21lc2gnLFxuXHQnbWVzaGdyYWRpZW50Jyxcblx0J21lc2hwYXRjaCcsXG5cdCdtZXNocm93Jyxcblx0J21ldGFkYXRhJyxcblx0J21pc3NpbmctZ2x5cGgnLFxuXHQnbXBhdGgnLFxuXHQncGF0aCcsXG5cdCdwYXR0ZXJuJyxcblx0J3BvbHlnb24nLFxuXHQncG9seWxpbmUnLFxuXHQncmFkaWFsR3JhZGllbnQnLFxuXHQncmVjdCcsXG5cdCdzZXQnLFxuXHQnc29saWRjb2xvcicsXG5cdCdzdG9wJyxcblx0J3N2ZycsXG5cdCdzd2l0Y2gnLFxuXHQnc3ltYm9sJyxcblx0J3RleHQnLFxuXHQndGV4dFBhdGgnLFxuXHQndHJlZicsXG5cdCd0c3BhbicsXG5cdCd1bmtub3duJyxcblx0J3VzZScsXG5cdCd2aWV3Jyxcblx0J3ZrZXJuJ1xuXTtcblxuLyoqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICovXG5leHBvcnQgZnVuY3Rpb24gaXNfc3ZnKG5hbWUpIHtcblx0cmV0dXJuIFNWR19FTEVNRU5UUy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgTUFUSE1MX0VMRU1FTlRTID0gW1xuXHQnYW5ub3RhdGlvbicsXG5cdCdhbm5vdGF0aW9uLXhtbCcsXG5cdCdtYWN0aW9uJyxcblx0J21hdGgnLFxuXHQnbWVycm9yJyxcblx0J21mcmFjJyxcblx0J21pJyxcblx0J21tdWx0aXNjcmlwdHMnLFxuXHQnbW4nLFxuXHQnbW8nLFxuXHQnbW92ZXInLFxuXHQnbXBhZGRlZCcsXG5cdCdtcGhhbnRvbScsXG5cdCdtcHJlc2NyaXB0cycsXG5cdCdtcm9vdCcsXG5cdCdtcm93Jyxcblx0J21zJyxcblx0J21zcGFjZScsXG5cdCdtc3FydCcsXG5cdCdtc3R5bGUnLFxuXHQnbXN1YicsXG5cdCdtc3Vic3VwJyxcblx0J21zdXAnLFxuXHQnbXRhYmxlJyxcblx0J210ZCcsXG5cdCdtdGV4dCcsXG5cdCdtdHInLFxuXHQnbXVuZGVyJyxcblx0J211bmRlcm92ZXInLFxuXHQnc2VtYW50aWNzJ1xuXTtcblxuLyoqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICovXG5leHBvcnQgZnVuY3Rpb24gaXNfbWF0aG1sKG5hbWUpIHtcblx0cmV0dXJuIE1BVEhNTF9FTEVNRU5UUy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgUlVORVMgPSAvKiogQHR5cGUge2NvbnN0fSAqLyAoW1xuXHQnJHN0YXRlJyxcblx0JyRzdGF0ZS5yYXcnLFxuXHQnJHN0YXRlLnNuYXBzaG90Jyxcblx0JyRwcm9wcycsXG5cdCckcHJvcHMuaWQnLFxuXHQnJGJpbmRhYmxlJyxcblx0JyRkZXJpdmVkJyxcblx0JyRkZXJpdmVkLmJ5Jyxcblx0JyRlZmZlY3QnLFxuXHQnJGVmZmVjdC5wcmUnLFxuXHQnJGVmZmVjdC50cmFja2luZycsXG5cdCckZWZmZWN0LnJvb3QnLFxuXHQnJGluc3BlY3QnLFxuXHQnJGluc3BlY3QoKS53aXRoJyxcblx0JyRpbnNwZWN0LnRyYWNlJyxcblx0JyRob3N0J1xuXSk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtuYW1lIGlzIFJVTkVTW251bWJlcl19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19ydW5lKG5hbWUpIHtcblx0cmV0dXJuIFJVTkVTLmluY2x1ZGVzKC8qKiBAdHlwZSB7UlVORVNbbnVtYmVyXX0gKi8gKG5hbWUpKTtcbn1cblxuLyoqIExpc3Qgb2YgZWxlbWVudHMgdGhhdCByZXF1aXJlIHJhdyBjb250ZW50cyBhbmQgc2hvdWxkIG5vdCBoYXZlIFNTUiBjb21tZW50cyBwdXQgaW4gdGhlbSAqL1xuY29uc3QgUkFXX1RFWFRfRUxFTUVOVFMgPSAvKiogQHR5cGUge2NvbnN0fSAqLyAoWyd0ZXh0YXJlYScsICdzY3JpcHQnLCAnc3R5bGUnLCAndGl0bGUnXSk7XG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX3Jhd190ZXh0X2VsZW1lbnQobmFtZSkge1xuXHRyZXR1cm4gUkFXX1RFWFRfRUxFTUVOVFMuaW5jbHVkZXMoLyoqIEB0eXBlIHtSQVdfVEVYVF9FTEVNRU5UU1tudW1iZXJdfSAqLyAobmFtZSkpO1xufVxuXG4vKipcbiAqIFByZXZlbnQgZGV2dG9vbHMgdHJ5aW5nIHRvIG1ha2UgYGxvY2F0aW9uYCBhIGNsaWNrYWJsZSBsaW5rIGJ5IGluc2VydGluZyBhIHplcm8td2lkdGggc3BhY2VcbiAqIEB0ZW1wbGF0ZSB7c3RyaW5nIHwgdW5kZWZpbmVkfSBUXG4gKiBAcGFyYW0ge1R9IGxvY2F0aW9uXG4gKiBAcmV0dXJucyB7VH07XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZV9sb2NhdGlvbihsb2NhdGlvbikge1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtUfSAqLyAobG9jYXRpb24/LnJlcGxhY2UoL1xcLy9nLCAnL1xcdTIwMGInKSk7XG59XG4iLCAiaW1wb3J0IHsgdGVhcmRvd24gfSBmcm9tICcuLi8uLi9yZWFjdGl2aXR5L2VmZmVjdHMuanMnO1xuaW1wb3J0IHsgZGVmaW5lX3Byb3BlcnR5LCBpc19hcnJheSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQgeyBoeWRyYXRpbmcgfSBmcm9tICcuLi9oeWRyYXRpb24uanMnO1xuaW1wb3J0IHsgcXVldWVfbWljcm9fdGFzayB9IGZyb20gJy4uL3Rhc2suanMnO1xuaW1wb3J0IHsgRklMRU5BTUUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMuanMnO1xuaW1wb3J0ICogYXMgdyBmcm9tICcuLi8uLi93YXJuaW5ncy5qcyc7XG5pbXBvcnQge1xuXHRhY3RpdmVfZWZmZWN0LFxuXHRhY3RpdmVfcmVhY3Rpb24sXG5cdHNldF9hY3RpdmVfZWZmZWN0LFxuXHRzZXRfYWN0aXZlX3JlYWN0aW9uXG59IGZyb20gJy4uLy4uL3J1bnRpbWUuanMnO1xuaW1wb3J0IHsgd2l0aG91dF9yZWFjdGl2ZV9jb250ZXh0IH0gZnJvbSAnLi9iaW5kaW5ncy9zaGFyZWQuanMnO1xuXG4vKiogQHR5cGUge1NldDxzdHJpbmc+fSAqL1xuZXhwb3J0IGNvbnN0IGFsbF9yZWdpc3RlcmVkX2V2ZW50cyA9IG5ldyBTZXQoKTtcblxuLyoqIEB0eXBlIHtTZXQ8KGV2ZW50czogQXJyYXk8c3RyaW5nPikgPT4gdm9pZD59ICovXG5leHBvcnQgY29uc3Qgcm9vdF9ldmVudF9oYW5kbGVzID0gbmV3IFNldCgpO1xuXG4vKipcbiAqIFNTUiBhZGRzIG9ubG9hZCBhbmQgb25lcnJvciBhdHRyaWJ1dGVzIHRvIGNhdGNoIHRob3NlIGV2ZW50cyBiZWZvcmUgdGhlIGh5ZHJhdGlvbi5cbiAqIFRoaXMgZnVuY3Rpb24gZGV0ZWN0cyB0aG9zZSBjYXNlcywgcmVtb3ZlcyB0aGUgYXR0cmlidXRlcyBhbmQgcmVwbGF5cyB0aGUgZXZlbnRzLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZG9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYXlfZXZlbnRzKGRvbSkge1xuXHRpZiAoIWh5ZHJhdGluZykgcmV0dXJuO1xuXG5cdGlmIChkb20ub25sb2FkKSB7XG5cdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZSgnb25sb2FkJyk7XG5cdH1cblx0aWYgKGRvbS5vbmVycm9yKSB7XG5cdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZSgnb25lcnJvcicpO1xuXHR9XG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0Y29uc3QgZXZlbnQgPSBkb20uX19lO1xuXHRpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRkb20uX19lID0gdW5kZWZpbmVkO1xuXHRcdHF1ZXVlTWljcm90YXNrKCgpID0+IHtcblx0XHRcdGlmIChkb20uaXNDb25uZWN0ZWQpIHtcblx0XHRcdFx0ZG9tLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50X25hbWVcbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGRvbVxuICogQHBhcmFtIHtFdmVudExpc3RlbmVyfSBbaGFuZGxlcl1cbiAqIEBwYXJhbSB7QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnN9IFtvcHRpb25zXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX2V2ZW50KGV2ZW50X25hbWUsIGRvbSwgaGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG5cdC8qKlxuXHQgKiBAdGhpcyB7RXZlbnRUYXJnZXR9XG5cdCAqL1xuXHRmdW5jdGlvbiB0YXJnZXRfaGFuZGxlcigvKiogQHR5cGUge0V2ZW50fSAqLyBldmVudCkge1xuXHRcdGlmICghb3B0aW9ucy5jYXB0dXJlKSB7XG5cdFx0XHQvLyBPbmx5IGNhbGwgaW4gdGhlIGJ1YmJsZSBwaGFzZSwgZWxzZSBkZWxlZ2F0ZWQgZXZlbnRzIHdvdWxkIGJlIGNhbGxlZCBiZWZvcmUgdGhlIGNhcHR1cmluZyBldmVudHNcblx0XHRcdGhhbmRsZV9ldmVudF9wcm9wYWdhdGlvbi5jYWxsKGRvbSwgZXZlbnQpO1xuXHRcdH1cblx0XHRpZiAoIWV2ZW50LmNhbmNlbEJ1YmJsZSkge1xuXHRcdFx0cmV0dXJuIHdpdGhvdXRfcmVhY3RpdmVfY29udGV4dCgoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBoYW5kbGVyPy5jYWxsKHRoaXMsIGV2ZW50KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIENocm9tZSBoYXMgYSBidWcgd2hlcmUgcG9pbnRlciBldmVudHMgZG9uJ3Qgd29yayB3aGVuIGF0dGFjaGVkIHRvIGEgRE9NIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBjbG9uZWRcblx0Ly8gd2l0aCBjbG9uZU5vZGUoKSBhbmQgdGhlIERPTSBlbGVtZW50IGlzIGRpc2Nvbm5lY3RlZCBmcm9tIHRoZSBkb2N1bWVudC4gVG8gZW5zdXJlIHRoZSBldmVudCB3b3Jrcywgd2Vcblx0Ly8gZGVmZXIgdGhlIGF0dGFjaG1lbnQgdGlsbCBhZnRlciBpdCdzIGJlZW4gYXBwZW5kZWQgdG8gdGhlIGRvY3VtZW50LiBUT0RPOiByZW1vdmUgdGhpcyBvbmNlIENocm9tZSBmaXhlc1xuXHQvLyB0aGlzIGJ1Zy4gVGhlIHNhbWUgYXBwbGllcyB0byB3aGVlbCBldmVudHMgYW5kIHRvdWNoIGV2ZW50cy5cblx0aWYgKFxuXHRcdGV2ZW50X25hbWUuc3RhcnRzV2l0aCgncG9pbnRlcicpIHx8XG5cdFx0ZXZlbnRfbmFtZS5zdGFydHNXaXRoKCd0b3VjaCcpIHx8XG5cdFx0ZXZlbnRfbmFtZSA9PT0gJ3doZWVsJ1xuXHQpIHtcblx0XHRxdWV1ZV9taWNyb190YXNrKCgpID0+IHtcblx0XHRcdGRvbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50X25hbWUsIHRhcmdldF9oYW5kbGVyLCBvcHRpb25zKTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRkb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudF9uYW1lLCB0YXJnZXRfaGFuZGxlciwgb3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4gdGFyZ2V0X2hhbmRsZXI7XG59XG5cbi8qKlxuICogQXR0YWNoZXMgYW4gZXZlbnQgaGFuZGxlciB0byBhbiBlbGVtZW50IGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSBoYW5kbGVyLiBVc2luZyB0aGlzXG4gKiByYXRoZXIgdGhhbiBgYWRkRXZlbnRMaXN0ZW5lcmAgd2lsbCBwcmVzZXJ2ZSB0aGUgY29ycmVjdCBvcmRlciByZWxhdGl2ZSB0byBoYW5kbGVycyBhZGRlZCBkZWNsYXJhdGl2ZWx5XG4gKiAod2l0aCBhdHRyaWJ1dGVzIGxpa2UgYG9uY2xpY2tgKSwgd2hpY2ggdXNlIGV2ZW50IGRlbGVnYXRpb24gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAqXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtFdmVudExpc3RlbmVyfSBoYW5kbGVyXG4gKiBAcGFyYW0ge0FkZEV2ZW50TGlzdGVuZXJPcHRpb25zfSBbb3B0aW9uc11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuXHR2YXIgdGFyZ2V0X2hhbmRsZXIgPSBjcmVhdGVfZXZlbnQodHlwZSwgZWxlbWVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgdGFyZ2V0X2hhbmRsZXIsIG9wdGlvbnMpO1xuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudF9uYW1lXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGRvbVxuICogQHBhcmFtIHtFdmVudExpc3RlbmVyfSBbaGFuZGxlcl1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NhcHR1cmVdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwYXNzaXZlXVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBldmVudChldmVudF9uYW1lLCBkb20sIGhhbmRsZXIsIGNhcHR1cmUsIHBhc3NpdmUpIHtcblx0dmFyIG9wdGlvbnMgPSB7IGNhcHR1cmUsIHBhc3NpdmUgfTtcblx0dmFyIHRhcmdldF9oYW5kbGVyID0gY3JlYXRlX2V2ZW50KGV2ZW50X25hbWUsIGRvbSwgaGFuZGxlciwgb3B0aW9ucyk7XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRpZiAoZG9tID09PSBkb2N1bWVudC5ib2R5IHx8IGRvbSA9PT0gd2luZG93IHx8IGRvbSA9PT0gZG9jdW1lbnQpIHtcblx0XHR0ZWFyZG93bigoKSA9PiB7XG5cdFx0XHRkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudF9uYW1lLCB0YXJnZXRfaGFuZGxlciwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGV2ZW50c1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxlZ2F0ZShldmVudHMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRhbGxfcmVnaXN0ZXJlZF9ldmVudHMuYWRkKGV2ZW50c1tpXSk7XG5cdH1cblxuXHRmb3IgKHZhciBmbiBvZiByb290X2V2ZW50X2hhbmRsZXMpIHtcblx0XHRmbihldmVudHMpO1xuXHR9XG59XG5cbi8qKlxuICogQHRoaXMge0V2ZW50VGFyZ2V0fVxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlX2V2ZW50X3Byb3BhZ2F0aW9uKGV2ZW50KSB7XG5cdHZhciBoYW5kbGVyX2VsZW1lbnQgPSB0aGlzO1xuXHR2YXIgb3duZXJfZG9jdW1lbnQgPSAvKiogQHR5cGUge05vZGV9ICovIChoYW5kbGVyX2VsZW1lbnQpLm93bmVyRG9jdW1lbnQ7XG5cdHZhciBldmVudF9uYW1lID0gZXZlbnQudHlwZTtcblx0dmFyIHBhdGggPSBldmVudC5jb21wb3NlZFBhdGg/LigpIHx8IFtdO1xuXHR2YXIgY3VycmVudF90YXJnZXQgPSAvKiogQHR5cGUge251bGwgfCBFbGVtZW50fSAqLyAocGF0aFswXSB8fCBldmVudC50YXJnZXQpO1xuXG5cdC8vIGNvbXBvc2VkUGF0aCBjb250YWlucyBsaXN0IG9mIG5vZGVzIHRoZSBldmVudCBoYXMgcHJvcGFnYXRlZCB0aHJvdWdoLlxuXHQvLyBXZSBjaGVjayBfX3Jvb3QgdG8gc2tpcCBhbGwgbm9kZXMgYmVsb3cgaXQgaW4gY2FzZSB0aGlzIGlzIGFcblx0Ly8gcGFyZW50IG9mIHRoZSBfX3Jvb3Qgbm9kZSwgd2hpY2ggaW5kaWNhdGVzIHRoYXQgdGhlcmUncyBuZXN0ZWRcblx0Ly8gbW91bnRlZCBhcHBzLiBJbiB0aGlzIGNhc2Ugd2UgZG9uJ3Qgd2FudCB0byB0cmlnZ2VyIGV2ZW50cyBtdWx0aXBsZSB0aW1lcy5cblx0dmFyIHBhdGhfaWR4ID0gMDtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIGlzIGFkZGVkIGJlbG93XG5cdHZhciBoYW5kbGVkX2F0ID0gZXZlbnQuX19yb290O1xuXG5cdGlmIChoYW5kbGVkX2F0KSB7XG5cdFx0dmFyIGF0X2lkeCA9IHBhdGguaW5kZXhPZihoYW5kbGVkX2F0KTtcblx0XHRpZiAoXG5cdFx0XHRhdF9pZHggIT09IC0xICYmXG5cdFx0XHQoaGFuZGxlcl9lbGVtZW50ID09PSBkb2N1bWVudCB8fCBoYW5kbGVyX2VsZW1lbnQgPT09IC8qKiBAdHlwZSB7YW55fSAqLyAod2luZG93KSlcblx0XHQpIHtcblx0XHRcdC8vIFRoaXMgaXMgdGhlIGZhbGxiYWNrIGRvY3VtZW50IGxpc3RlbmVyIG9yIGEgd2luZG93IGxpc3RlbmVyLCBidXQgdGhlIGV2ZW50IHdhcyBhbHJlYWR5IGhhbmRsZWRcblx0XHRcdC8vIC0+IGlnbm9yZSwgYnV0IHNldCBoYW5kbGVfYXQgdG8gZG9jdW1lbnQvd2luZG93IHNvIHRoYXQgd2UncmUgcmVzZXR0aW5nIHRoZSBldmVudFxuXHRcdFx0Ly8gY2hhaW4gaW4gY2FzZSBzb21lb25lIG1hbnVhbGx5IGRpc3BhdGNoZXMgdGhlIHNhbWUgZXZlbnQgb2JqZWN0IGFnYWluLlxuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdFx0ZXZlbnQuX19yb290ID0gaGFuZGxlcl9lbGVtZW50O1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFdlJ3JlIGRlbGliZXJhdGVseSBub3Qgc2tpcHBpbmcgaWYgdGhlIGluZGV4IGlzIGhpZ2hlciwgYmVjYXVzZVxuXHRcdC8vIHNvbWVvbmUgY291bGQgY3JlYXRlIGFuIGV2ZW50IHByb2dyYW1tYXRpY2FsbHkgYW5kIGVtaXQgaXQgbXVsdGlwbGUgdGltZXMsXG5cdFx0Ly8gaW4gd2hpY2ggY2FzZSB3ZSB3YW50IHRvIGhhbmRsZSB0aGUgd2hvbGUgcHJvcGFnYXRpb24gY2hhaW4gcHJvcGVybHkgZWFjaCB0aW1lLlxuXHRcdC8vICh0aGlzIHdpbGwgb25seSBiZSBhIGZhbHNlIG5lZ2F0aXZlIGlmIHRoZSBldmVudCBpcyBkaXNwYXRjaGVkIG11bHRpcGxlIHRpbWVzIGFuZFxuXHRcdC8vIHRoZSBmYWxsYmFjayBkb2N1bWVudCBsaXN0ZW5lciBpc24ndCByZWFjaGVkIGluIGJldHdlZW4sIGJ1dCB0aGF0J3Mgc3VwZXIgcmFyZSlcblx0XHR2YXIgaGFuZGxlcl9pZHggPSBwYXRoLmluZGV4T2YoaGFuZGxlcl9lbGVtZW50KTtcblx0XHRpZiAoaGFuZGxlcl9pZHggPT09IC0xKSB7XG5cdFx0XHQvLyBoYW5kbGVfaWR4IGNhbiB0aGVvcmV0aWNhbGx5IGJlIC0xIChoYXBwZW5lZCBpbiBzb21lIEpTRE9NIHRlc3Rpbmcgc2NlbmFyaW9zIHdpdGggYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIHdpbmRvdyBvYmplY3QpXG5cdFx0XHQvLyBzbyBndWFyZCBhZ2FpbnN0IHRoYXQsIHRvbywgYW5kIGFzc3VtZSB0aGF0IGV2ZXJ5dGhpbmcgd2FzIGhhbmRsZWQgYXQgdGhpcyBwb2ludC5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoYXRfaWR4IDw9IGhhbmRsZXJfaWR4KSB7XG5cdFx0XHRwYXRoX2lkeCA9IGF0X2lkeDtcblx0XHR9XG5cdH1cblxuXHRjdXJyZW50X3RhcmdldCA9IC8qKiBAdHlwZSB7RWxlbWVudH0gKi8gKHBhdGhbcGF0aF9pZHhdIHx8IGV2ZW50LnRhcmdldCk7XG5cdC8vIHRoZXJlIGNhbiBvbmx5IGJlIG9uZSBkZWxlZ2F0ZWQgZXZlbnQgcGVyIGVsZW1lbnQsIGFuZCB3ZSBlaXRoZXIgYWxyZWFkeSBoYW5kbGVkIHRoZSBjdXJyZW50IHRhcmdldCxcblx0Ly8gb3IgdGhpcyBpcyB0aGUgdmVyeSBmaXJzdCB0YXJnZXQgaW4gdGhlIGNoYWluIHdoaWNoIGhhcyBhIG5vbi1kZWxlZ2F0ZWQgbGlzdGVuZXIsIGluIHdoaWNoIGNhc2UgaXQncyBzYWZlXG5cdC8vIHRvIGhhbmRsZSBhIHBvc3NpYmxlIGRlbGVnYXRlZCBldmVudCBvbiBpdCBsYXRlciAodGhyb3VnaCB0aGUgcm9vdCBkZWxlZ2F0aW9uIGxpc3RlbmVyIGZvciBleGFtcGxlKS5cblx0aWYgKGN1cnJlbnRfdGFyZ2V0ID09PSBoYW5kbGVyX2VsZW1lbnQpIHJldHVybjtcblxuXHQvLyBQcm94eSBjdXJyZW50VGFyZ2V0IHRvIGNvcnJlY3QgdGFyZ2V0XG5cdGRlZmluZV9wcm9wZXJ0eShldmVudCwgJ2N1cnJlbnRUYXJnZXQnLCB7XG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiBjdXJyZW50X3RhcmdldCB8fCBvd25lcl9kb2N1bWVudDtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIFRoaXMgc3RhcnRlZCBiZWNhdXNlIG9mIENocm9taXVtIGlzc3VlIGh0dHBzOi8vY2hyb21lc3RhdHVzLmNvbS9mZWF0dXJlLzUxMjg2OTY4MjM1NDU4NTYsXG5cdC8vIHdoZXJlIHJlbW92YWwgb3IgbW92aW5nIG9mIG9mIHRoZSBET00gY2FuIGNhdXNlIHN5bmMgYGJsdXJgIGV2ZW50cyB0byBmaXJlLCB3aGljaCBjYW4gY2F1c2UgbG9naWNcblx0Ly8gdG8gcnVuIGluc2lkZSB0aGUgY3VycmVudCBgYWN0aXZlX3JlYWN0aW9uYCwgd2hpY2ggaXNuJ3Qgd2hhdCB3ZSB3YW50IGF0IGFsbC4gSG93ZXZlciwgb24gcmVmbGVjdGlvbixcblx0Ly8gaXQncyBwcm9iYWJseSBiZXN0IHRoYXQgYWxsIGV2ZW50IGhhbmRsZWQgYnkgU3ZlbHRlIGhhdmUgdGhpcyBiZWhhdmlvdXIsIGFzIHdlIGRvbid0IHJlYWxseSB3YW50XG5cdC8vIGFuIGV2ZW50IGhhbmRsZXIgdG8gcnVuIGluIHRoZSBjb250ZXh0IG9mIGFub3RoZXIgcmVhY3Rpb24gb3IgZWZmZWN0LlxuXHR2YXIgcHJldmlvdXNfcmVhY3Rpb24gPSBhY3RpdmVfcmVhY3Rpb247XG5cdHZhciBwcmV2aW91c19lZmZlY3QgPSBhY3RpdmVfZWZmZWN0O1xuXHRzZXRfYWN0aXZlX3JlYWN0aW9uKG51bGwpO1xuXHRzZXRfYWN0aXZlX2VmZmVjdChudWxsKTtcblxuXHR0cnkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHt1bmtub3dufVxuXHRcdCAqL1xuXHRcdHZhciB0aHJvd19lcnJvcjtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7dW5rbm93bltdfVxuXHRcdCAqL1xuXHRcdHZhciBvdGhlcl9lcnJvcnMgPSBbXTtcblxuXHRcdHdoaWxlIChjdXJyZW50X3RhcmdldCAhPT0gbnVsbCkge1xuXHRcdFx0LyoqIEB0eXBlIHtudWxsIHwgRWxlbWVudH0gKi9cblx0XHRcdHZhciBwYXJlbnRfZWxlbWVudCA9XG5cdFx0XHRcdGN1cnJlbnRfdGFyZ2V0LmFzc2lnbmVkU2xvdCB8fFxuXHRcdFx0XHRjdXJyZW50X3RhcmdldC5wYXJlbnROb2RlIHx8XG5cdFx0XHRcdC8qKiBAdHlwZSB7YW55fSAqLyAoY3VycmVudF90YXJnZXQpLmhvc3QgfHxcblx0XHRcdFx0bnVsbDtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdFx0XHR2YXIgZGVsZWdhdGVkID0gY3VycmVudF90YXJnZXRbJ19fJyArIGV2ZW50X25hbWVdO1xuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRkZWxlZ2F0ZWQgIT0gbnVsbCAmJlxuXHRcdFx0XHRcdCghKC8qKiBAdHlwZSB7YW55fSAqLyAoY3VycmVudF90YXJnZXQpLmRpc2FibGVkKSB8fFxuXHRcdFx0XHRcdFx0Ly8gRE9NIGNvdWxkJ3ZlIGJlZW4gdXBkYXRlZCBhbHJlYWR5IGJ5IHRoZSB0aW1lIHRoaXMgaXMgcmVhY2hlZCwgc28gd2UgY2hlY2sgdGhpcyBhcyB3ZWxsXG5cdFx0XHRcdFx0XHQvLyAtPiB0aGUgdGFyZ2V0IGNvdWxkIG5vdCBoYXZlIGJlZW4gZGlzYWJsZWQgYmVjYXVzZSBpdCBlbWl0cyB0aGUgZXZlbnQgaW4gdGhlIGZpcnN0IHBsYWNlXG5cdFx0XHRcdFx0XHRldmVudC50YXJnZXQgPT09IGN1cnJlbnRfdGFyZ2V0KVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRpZiAoaXNfYXJyYXkoZGVsZWdhdGVkKSkge1xuXHRcdFx0XHRcdFx0dmFyIFtmbiwgLi4uZGF0YV0gPSBkZWxlZ2F0ZWQ7XG5cdFx0XHRcdFx0XHRmbi5hcHBseShjdXJyZW50X3RhcmdldCwgW2V2ZW50LCAuLi5kYXRhXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRlbGVnYXRlZC5jYWxsKGN1cnJlbnRfdGFyZ2V0LCBldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRpZiAodGhyb3dfZXJyb3IpIHtcblx0XHRcdFx0XHRvdGhlcl9lcnJvcnMucHVzaChlcnJvcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3dfZXJyb3IgPSBlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGV2ZW50LmNhbmNlbEJ1YmJsZSB8fCBwYXJlbnRfZWxlbWVudCA9PT0gaGFuZGxlcl9lbGVtZW50IHx8IHBhcmVudF9lbGVtZW50ID09PSBudWxsKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y3VycmVudF90YXJnZXQgPSBwYXJlbnRfZWxlbWVudDtcblx0XHR9XG5cblx0XHRpZiAodGhyb3dfZXJyb3IpIHtcblx0XHRcdGZvciAobGV0IGVycm9yIG9mIG90aGVyX2Vycm9ycykge1xuXHRcdFx0XHQvLyBUaHJvdyB0aGUgcmVzdCBvZiB0aGUgZXJyb3JzLCBvbmUtYnktb25lIG9uIGEgbWljcm90YXNrXG5cdFx0XHRcdHF1ZXVlTWljcm90YXNrKCgpID0+IHtcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyB0aHJvd19lcnJvcjtcblx0XHR9XG5cdH0gZmluYWxseSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBpcyB1c2VkIGFib3ZlXG5cdFx0ZXZlbnQuX19yb290ID0gaGFuZGxlcl9lbGVtZW50O1xuXHRcdC8vIEB0cy1pZ25vcmUgcmVtb3ZlIHByb3h5IG9uIGN1cnJlbnRUYXJnZXRcblx0XHRkZWxldGUgZXZlbnQuY3VycmVudFRhcmdldDtcblx0XHRzZXRfYWN0aXZlX3JlYWN0aW9uKHByZXZpb3VzX3JlYWN0aW9uKTtcblx0XHRzZXRfYWN0aXZlX2VmZmVjdChwcmV2aW91c19lZmZlY3QpO1xuXHR9XG59XG5cbi8qKlxuICogSW4gZGV2LCB3YXJuIGlmIGFuIGV2ZW50IGhhbmRsZXIgaXMgbm90IGEgZnVuY3Rpb24sIGFzIGl0IG1lYW5zIHRoZVxuICogdXNlciBwcm9iYWJseSBjYWxsZWQgdGhlIGhhbmRsZXIgb3IgZm9yZ290IHRvIGFkZCBhIGAoKSA9PmBcbiAqIEBwYXJhbSB7KCkgPT4gKGV2ZW50OiBFdmVudCwgLi4uYXJnczogYW55KSA9PiB2b2lkfSB0aHVua1xuICogQHBhcmFtIHtFdmVudFRhcmdldH0gZWxlbWVudFxuICogQHBhcmFtIHtbRXZlbnQsIC4uLmFueV19IGFyZ3NcbiAqIEBwYXJhbSB7YW55fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7W251bWJlciwgbnVtYmVyXX0gW2xvY11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbW92ZV9wYXJlbnNdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseShcblx0dGh1bmssXG5cdGVsZW1lbnQsXG5cdGFyZ3MsXG5cdGNvbXBvbmVudCxcblx0bG9jLFxuXHRoYXNfc2lkZV9lZmZlY3RzID0gZmFsc2UsXG5cdHJlbW92ZV9wYXJlbnMgPSBmYWxzZVxuKSB7XG5cdGxldCBoYW5kbGVyO1xuXHRsZXQgZXJyb3I7XG5cblx0dHJ5IHtcblx0XHRoYW5kbGVyID0gdGh1bmsoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGVycm9yID0gZTtcblx0fVxuXG5cdGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJyAmJiAoaGFzX3NpZGVfZWZmZWN0cyB8fCBoYW5kbGVyICE9IG51bGwgfHwgZXJyb3IpKSB7XG5cdFx0Y29uc3QgZmlsZW5hbWUgPSBjb21wb25lbnQ/LltGSUxFTkFNRV07XG5cdFx0Y29uc3QgbG9jYXRpb24gPSBsb2MgPyBgIGF0ICR7ZmlsZW5hbWV9OiR7bG9jWzBdfToke2xvY1sxXX1gIDogYCBpbiAke2ZpbGVuYW1lfWA7XG5cdFx0Y29uc3QgcGhhc2UgPSBhcmdzWzBdPy5ldmVudFBoYXNlIDwgRXZlbnQuQlVCQkxJTkdfUEhBU0UgPyAnY2FwdHVyZScgOiAnJztcblx0XHRjb25zdCBldmVudF9uYW1lID0gYXJnc1swXT8udHlwZSArIHBoYXNlO1xuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gYFxcYCR7ZXZlbnRfbmFtZX1cXGAgaGFuZGxlciR7bG9jYXRpb259YDtcblx0XHRjb25zdCBzdWdnZXN0aW9uID0gcmVtb3ZlX3BhcmVucyA/ICdyZW1vdmUgdGhlIHRyYWlsaW5nIGAoKWAnIDogJ2FkZCBhIGxlYWRpbmcgYCgpID0+YCc7XG5cblx0XHR3LmV2ZW50X2hhbmRsZXJfaW52YWxpZChkZXNjcmlwdGlvbiwgc3VnZ2VzdGlvbik7XG5cblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxuXHRoYW5kbGVyPy5hcHBseShlbGVtZW50LCBhcmdzKTtcbn1cbiIsICIvKiogQGltcG9ydCB7IFRlbXBsYXRlTm9kZSB9IGZyb20gJyNjbGllbnQnICovXG5pbXBvcnQgeyBoeWRyYXRlX25vZGUsIGh5ZHJhdGluZywgc2V0X2h5ZHJhdGVfbm9kZSwgc2V0X2h5ZHJhdGluZyB9IGZyb20gJy4uL2h5ZHJhdGlvbi5qcyc7XG5pbXBvcnQgeyBjcmVhdGVfdGV4dCwgZ2V0X2ZpcnN0X2NoaWxkLCBnZXRfbmV4dF9zaWJsaW5nIH0gZnJvbSAnLi4vb3BlcmF0aW9ucy5qcyc7XG5pbXBvcnQgeyBibG9jayB9IGZyb20gJy4uLy4uL3JlYWN0aXZpdHkvZWZmZWN0cy5qcyc7XG5pbXBvcnQgeyBIRUFEX0VGRkVDVCB9IGZyb20gJyNjbGllbnQvY29uc3RhbnRzJztcbmltcG9ydCB7IEhZRFJBVElPTl9TVEFSVCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0YW50cy5qcyc7XG5cbi8qKlxuICogQHR5cGUge05vZGUgfCB1bmRlZmluZWR9XG4gKi9cbmxldCBoZWFkX2FuY2hvcjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0X2hlYWRfYW5jaG9yKCkge1xuXHRoZWFkX2FuY2hvciA9IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyhhbmNob3I6IE5vZGUpID0+IHZvaWR9IHJlbmRlcl9mblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKHJlbmRlcl9mbikge1xuXHQvLyBUaGUgaGVhZCBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHRoZSBmaXJzdCBoeWRyYXRpb24gcGFzcyBhbmQgc3NyIGNvbW1lbnQgbm9kZXMgbWF5IHN0aWxsIGJlIHByZXNlbnQsXG5cdC8vIHRoZXJlZm9yZSB3ZSBuZWVkIHRvIHNraXAgdGhhdCB3aGVuIHdlIGRldGVjdCB0aGF0IHdlJ3JlIG5vdCBpbiBoeWRyYXRpb24gbW9kZS5cblx0bGV0IHByZXZpb3VzX2h5ZHJhdGVfbm9kZSA9IG51bGw7XG5cdGxldCB3YXNfaHlkcmF0aW5nID0gaHlkcmF0aW5nO1xuXG5cdC8qKiBAdHlwZSB7Q29tbWVudCB8IFRleHR9ICovXG5cdHZhciBhbmNob3I7XG5cblx0aWYgKGh5ZHJhdGluZykge1xuXHRcdHByZXZpb3VzX2h5ZHJhdGVfbm9kZSA9IGh5ZHJhdGVfbm9kZTtcblxuXHRcdC8vIFRoZXJlIG1pZ2h0IGJlIG11bHRpcGxlIGhlYWQgYmxvY2tzIGluIG91ciBhcHAsIHNvIHdlIG5lZWQgdG8gYWNjb3VudCBmb3IgZWFjaCBvbmUgbmVlZGluZyBpbmRlcGVuZGVudCBoeWRyYXRpb24uXG5cdFx0aWYgKGhlYWRfYW5jaG9yID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGhlYWRfYW5jaG9yID0gLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChnZXRfZmlyc3RfY2hpbGQoZG9jdW1lbnQuaGVhZCkpO1xuXHRcdH1cblxuXHRcdHdoaWxlIChcblx0XHRcdGhlYWRfYW5jaG9yICE9PSBudWxsICYmXG5cdFx0XHQoaGVhZF9hbmNob3Iubm9kZVR5cGUgIT09IDggfHwgLyoqIEB0eXBlIHtDb21tZW50fSAqLyAoaGVhZF9hbmNob3IpLmRhdGEgIT09IEhZRFJBVElPTl9TVEFSVClcblx0XHQpIHtcblx0XHRcdGhlYWRfYW5jaG9yID0gLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChnZXRfbmV4dF9zaWJsaW5nKGhlYWRfYW5jaG9yKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgY2FuJ3QgZmluZCBhbiBvcGVuaW5nIGh5ZHJhdGlvbiBtYXJrZXIsIHNraXAgaHlkcmF0aW9uICh0aGlzIGNhbiBoYXBwZW5cblx0XHQvLyBpZiBhIGZyYW1ld29yayByZW5kZXJlZCBib2R5IGJ1dCBub3QgaGVhZCBjb250ZW50KVxuXHRcdGlmIChoZWFkX2FuY2hvciA9PT0gbnVsbCkge1xuXHRcdFx0c2V0X2h5ZHJhdGluZyhmYWxzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWRfYW5jaG9yID0gc2V0X2h5ZHJhdGVfbm9kZSgvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9uZXh0X3NpYmxpbmcoaGVhZF9hbmNob3IpKSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFoeWRyYXRpbmcpIHtcblx0XHRhbmNob3IgPSBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGNyZWF0ZV90ZXh0KCkpO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRibG9jaygoKSA9PiByZW5kZXJfZm4oYW5jaG9yKSwgSEVBRF9FRkZFQ1QpO1xuXHR9IGZpbmFsbHkge1xuXHRcdGlmICh3YXNfaHlkcmF0aW5nKSB7XG5cdFx0XHRzZXRfaHlkcmF0aW5nKHRydWUpO1xuXHRcdFx0aGVhZF9hbmNob3IgPSBoeWRyYXRlX25vZGU7IC8vIHNvIHRoYXQgbmV4dCBoZWFkIGJsb2NrIHN0YXJ0cyBmcm9tIHRoZSBjb3JyZWN0IG5vZGVcblx0XHRcdHNldF9oeWRyYXRlX25vZGUoLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChwcmV2aW91c19oeWRyYXRlX25vZGUpKTtcblx0XHR9XG5cdH1cbn1cbiIsICIvKiogQGltcG9ydCB7IEVmZmVjdCwgVGVtcGxhdGVOb2RlIH0gZnJvbSAnI2NsaWVudCcgKi9cbmltcG9ydCB7IGh5ZHJhdGVfbmV4dCwgaHlkcmF0ZV9ub2RlLCBoeWRyYXRpbmcsIHNldF9oeWRyYXRlX25vZGUgfSBmcm9tICcuL2h5ZHJhdGlvbi5qcyc7XG5pbXBvcnQgeyBjcmVhdGVfdGV4dCwgZ2V0X2ZpcnN0X2NoaWxkLCBpc19maXJlZm94IH0gZnJvbSAnLi9vcGVyYXRpb25zLmpzJztcbmltcG9ydCB7IGNyZWF0ZV9mcmFnbWVudF9mcm9tX2h0bWwgfSBmcm9tICcuL3JlY29uY2lsZXIuanMnO1xuaW1wb3J0IHsgYWN0aXZlX2VmZmVjdCB9IGZyb20gJy4uL3J1bnRpbWUuanMnO1xuaW1wb3J0IHsgVEVNUExBVEVfRlJBR01FTlQsIFRFTVBMQVRFX1VTRV9JTVBPUlRfTk9ERSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHtUZW1wbGF0ZU5vZGV9IHN0YXJ0XG4gKiBAcGFyYW0ge1RlbXBsYXRlTm9kZSB8IG51bGx9IGVuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduX25vZGVzKHN0YXJ0LCBlbmQpIHtcblx0dmFyIGVmZmVjdCA9IC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAoYWN0aXZlX2VmZmVjdCk7XG5cdGlmIChlZmZlY3Qubm9kZXNfc3RhcnQgPT09IG51bGwpIHtcblx0XHRlZmZlY3Qubm9kZXNfc3RhcnQgPSBzdGFydDtcblx0XHRlZmZlY3Qubm9kZXNfZW5kID0gZW5kO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnc1xuICogQHJldHVybnMgeygpID0+IE5vZGUgfCBOb2RlW119XG4gKi9cbi8qI19fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlKGNvbnRlbnQsIGZsYWdzKSB7XG5cdHZhciBpc19mcmFnbWVudCA9IChmbGFncyAmIFRFTVBMQVRFX0ZSQUdNRU5UKSAhPT0gMDtcblx0dmFyIHVzZV9pbXBvcnRfbm9kZSA9IChmbGFncyAmIFRFTVBMQVRFX1VTRV9JTVBPUlRfTk9ERSkgIT09IDA7XG5cblx0LyoqIEB0eXBlIHtOb2RlfSAqL1xuXHR2YXIgbm9kZTtcblxuXHQvKipcblx0ICogV2hldGhlciBvciBub3QgdGhlIGZpcnN0IGl0ZW0gaXMgYSB0ZXh0L2VsZW1lbnQgbm9kZS4gSWYgbm90LCB3ZSBuZWVkIHRvXG5cdCAqIGNyZWF0ZSBhbiBhZGRpdGlvbmFsIGNvbW1lbnQgbm9kZSB0byBhY3QgYXMgYGVmZmVjdC5ub2Rlcy5zdGFydGBcblx0ICovXG5cdHZhciBoYXNfc3RhcnQgPSAhY29udGVudC5zdGFydHNXaXRoKCc8IT4nKTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmIChoeWRyYXRpbmcpIHtcblx0XHRcdGFzc2lnbl9ub2RlcyhoeWRyYXRlX25vZGUsIG51bGwpO1xuXHRcdFx0cmV0dXJuIGh5ZHJhdGVfbm9kZTtcblx0XHR9XG5cblx0XHRpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRub2RlID0gY3JlYXRlX2ZyYWdtZW50X2Zyb21faHRtbChoYXNfc3RhcnQgPyBjb250ZW50IDogJzwhPicgKyBjb250ZW50KTtcblx0XHRcdGlmICghaXNfZnJhZ21lbnQpIG5vZGUgPSAvKiogQHR5cGUge05vZGV9ICovIChnZXRfZmlyc3RfY2hpbGQobm9kZSkpO1xuXHRcdH1cblxuXHRcdHZhciBjbG9uZSA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoXG5cdFx0XHR1c2VfaW1wb3J0X25vZGUgfHwgaXNfZmlyZWZveCA/IGRvY3VtZW50LmltcG9ydE5vZGUobm9kZSwgdHJ1ZSkgOiBub2RlLmNsb25lTm9kZSh0cnVlKVxuXHRcdCk7XG5cblx0XHRpZiAoaXNfZnJhZ21lbnQpIHtcblx0XHRcdHZhciBzdGFydCA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZ2V0X2ZpcnN0X2NoaWxkKGNsb25lKSk7XG5cdFx0XHR2YXIgZW5kID0gLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChjbG9uZS5sYXN0Q2hpbGQpO1xuXG5cdFx0XHRhc3NpZ25fbm9kZXMoc3RhcnQsIGVuZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFzc2lnbl9ub2RlcyhjbG9uZSwgY2xvbmUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjbG9uZTtcblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzXG4gKiBAcmV0dXJucyB7KCkgPT4gTm9kZSB8IE5vZGVbXX1cbiAqL1xuLyojX19OT19TSURFX0VGRkVDVFNfXyovXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVfd2l0aF9zY3JpcHQoY29udGVudCwgZmxhZ3MpIHtcblx0dmFyIGZuID0gdGVtcGxhdGUoY29udGVudCwgZmxhZ3MpO1xuXHRyZXR1cm4gKCkgPT4gcnVuX3NjcmlwdHMoLyoqIEB0eXBlIHtFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudH0gKi8gKGZuKCkpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzXG4gKiBAcGFyYW0geydzdmcnIHwgJ21hdGgnfSBuc1xuICogQHJldHVybnMgeygpID0+IE5vZGUgfCBOb2RlW119XG4gKi9cbi8qI19fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIG5zX3RlbXBsYXRlKGNvbnRlbnQsIGZsYWdzLCBucyA9ICdzdmcnKSB7XG5cdC8qKlxuXHQgKiBXaGV0aGVyIG9yIG5vdCB0aGUgZmlyc3QgaXRlbSBpcyBhIHRleHQvZWxlbWVudCBub2RlLiBJZiBub3QsIHdlIG5lZWQgdG9cblx0ICogY3JlYXRlIGFuIGFkZGl0aW9uYWwgY29tbWVudCBub2RlIHRvIGFjdCBhcyBgZWZmZWN0Lm5vZGVzLnN0YXJ0YFxuXHQgKi9cblx0dmFyIGhhc19zdGFydCA9ICFjb250ZW50LnN0YXJ0c1dpdGgoJzwhPicpO1xuXG5cdHZhciBpc19mcmFnbWVudCA9IChmbGFncyAmIFRFTVBMQVRFX0ZSQUdNRU5UKSAhPT0gMDtcblx0dmFyIHdyYXBwZWQgPSBgPCR7bnN9PiR7aGFzX3N0YXJ0ID8gY29udGVudCA6ICc8IT4nICsgY29udGVudH08LyR7bnN9PmA7XG5cblx0LyoqIEB0eXBlIHtFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudH0gKi9cblx0dmFyIG5vZGU7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0XHRhc3NpZ25fbm9kZXMoaHlkcmF0ZV9ub2RlLCBudWxsKTtcblx0XHRcdHJldHVybiBoeWRyYXRlX25vZGU7XG5cdFx0fVxuXG5cdFx0aWYgKCFub2RlKSB7XG5cdFx0XHR2YXIgZnJhZ21lbnQgPSAvKiogQHR5cGUge0RvY3VtZW50RnJhZ21lbnR9ICovIChjcmVhdGVfZnJhZ21lbnRfZnJvbV9odG1sKHdyYXBwZWQpKTtcblx0XHRcdHZhciByb290ID0gLyoqIEB0eXBlIHtFbGVtZW50fSAqLyAoZ2V0X2ZpcnN0X2NoaWxkKGZyYWdtZW50KSk7XG5cblx0XHRcdGlmIChpc19mcmFnbWVudCkge1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFx0XHR3aGlsZSAoZ2V0X2ZpcnN0X2NoaWxkKHJvb3QpKSB7XG5cdFx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZCgvKiogQHR5cGUge05vZGV9ICovIChnZXRfZmlyc3RfY2hpbGQocm9vdCkpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bm9kZSA9IC8qKiBAdHlwZSB7RWxlbWVudH0gKi8gKGdldF9maXJzdF9jaGlsZChyb290KSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIGNsb25lID0gLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChub2RlLmNsb25lTm9kZSh0cnVlKSk7XG5cblx0XHRpZiAoaXNfZnJhZ21lbnQpIHtcblx0XHRcdHZhciBzdGFydCA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZ2V0X2ZpcnN0X2NoaWxkKGNsb25lKSk7XG5cdFx0XHR2YXIgZW5kID0gLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChjbG9uZS5sYXN0Q2hpbGQpO1xuXG5cdFx0XHRhc3NpZ25fbm9kZXMoc3RhcnQsIGVuZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFzc2lnbl9ub2RlcyhjbG9uZSwgY2xvbmUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjbG9uZTtcblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzXG4gKiBAcmV0dXJucyB7KCkgPT4gTm9kZSB8IE5vZGVbXX1cbiAqL1xuLyojX19OT19TSURFX0VGRkVDVFNfXyovXG5leHBvcnQgZnVuY3Rpb24gc3ZnX3RlbXBsYXRlX3dpdGhfc2NyaXB0KGNvbnRlbnQsIGZsYWdzKSB7XG5cdHZhciBmbiA9IG5zX3RlbXBsYXRlKGNvbnRlbnQsIGZsYWdzKTtcblx0cmV0dXJuICgpID0+IHJ1bl9zY3JpcHRzKC8qKiBAdHlwZSB7RWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnR9ICovIChmbigpKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnc1xuICogQHJldHVybnMgeygpID0+IE5vZGUgfCBOb2RlW119XG4gKi9cbi8qI19fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGhtbF90ZW1wbGF0ZShjb250ZW50LCBmbGFncykge1xuXHRyZXR1cm4gbnNfdGVtcGxhdGUoY29udGVudCwgZmxhZ3MsICdtYXRoJyk7XG59XG5cbi8qKlxuICogQ3JlYXRpbmcgYSBkb2N1bWVudCBmcmFnbWVudCBmcm9tIEhUTUwgdGhhdCBjb250YWlucyBzY3JpcHQgdGFncyB3aWxsIG5vdCBleGVjdXRlXG4gKiB0aGUgc2NyaXB0cy4gV2UgbmVlZCB0byByZXBsYWNlIHRoZSBzY3JpcHQgdGFncyB3aXRoIG5ldyBvbmVzIHNvIHRoYXQgdGhleSBhcmUgZXhlY3V0ZWQuXG4gKiBAcGFyYW0ge0VsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7Tm9kZSB8IE5vZGVbXX1cbiAqL1xuZnVuY3Rpb24gcnVuX3NjcmlwdHMobm9kZSkge1xuXHQvLyBzY3JpcHRzIHdlcmUgU1NSJ2QsIGluIHdoaWNoIGNhc2UgdGhleSB3aWxsIHJ1blxuXHRpZiAoaHlkcmF0aW5nKSByZXR1cm4gbm9kZTtcblxuXHRjb25zdCBpc19mcmFnbWVudCA9IG5vZGUubm9kZVR5cGUgPT09IDExO1xuXHRjb25zdCBzY3JpcHRzID1cblx0XHQvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAobm9kZSkudGFnTmFtZSA9PT0gJ1NDUklQVCdcblx0XHRcdD8gWy8qKiBAdHlwZSB7SFRNTFNjcmlwdEVsZW1lbnR9ICovIChub2RlKV1cblx0XHRcdDogbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKTtcblx0Y29uc3QgZWZmZWN0ID0gLyoqIEB0eXBlIHtFZmZlY3R9ICovIChhY3RpdmVfZWZmZWN0KTtcblxuXHRmb3IgKGNvbnN0IHNjcmlwdCBvZiBzY3JpcHRzKSB7XG5cdFx0Y29uc3QgY2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRmb3IgKHZhciBhdHRyaWJ1dGUgb2Ygc2NyaXB0LmF0dHJpYnV0ZXMpIHtcblx0XHRcdGNsb25lLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbHVlKTtcblx0XHR9XG5cblx0XHRjbG9uZS50ZXh0Q29udGVudCA9IHNjcmlwdC50ZXh0Q29udGVudDtcblxuXHRcdC8vIFRoZSBzY3JpcHQgaGFzIGNoYW5nZWQgLSBpZiBpdCdzIGF0IHRoZSBlZGdlcywgdGhlIGVmZmVjdCBub3cgcG9pbnRzIGF0IGRlYWQgbm9kZXNcblx0XHRpZiAoaXNfZnJhZ21lbnQgPyBub2RlLmZpcnN0Q2hpbGQgPT09IHNjcmlwdCA6IG5vZGUgPT09IHNjcmlwdCkge1xuXHRcdFx0ZWZmZWN0Lm5vZGVzX3N0YXJ0ID0gY2xvbmU7XG5cdFx0fVxuXHRcdGlmIChpc19mcmFnbWVudCA/IG5vZGUubGFzdENoaWxkID09PSBzY3JpcHQgOiBub2RlID09PSBzY3JpcHQpIHtcblx0XHRcdGVmZmVjdC5ub2Rlc19lbmQgPSBjbG9uZTtcblx0XHR9XG5cblx0XHRzY3JpcHQucmVwbGFjZVdpdGgoY2xvbmUpO1xuXHR9XG5cdHJldHVybiBub2RlO1xufVxuXG4vKipcbiAqIERvbid0IG1hcmsgdGhpcyBhcyBzaWRlLWVmZmVjdC1mcmVlLCBoeWRyYXRpb24gbmVlZHMgdG8gd2FsayBhbGwgbm9kZXNcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGV4dCh2YWx1ZSA9ICcnKSB7XG5cdGlmICghaHlkcmF0aW5nKSB7XG5cdFx0dmFyIHQgPSBjcmVhdGVfdGV4dCh2YWx1ZSArICcnKTtcblx0XHRhc3NpZ25fbm9kZXModCwgdCk7XG5cdFx0cmV0dXJuIHQ7XG5cdH1cblxuXHR2YXIgbm9kZSA9IGh5ZHJhdGVfbm9kZTtcblxuXHRpZiAobm9kZS5ub2RlVHlwZSAhPT0gMykge1xuXHRcdC8vIGlmIGFuIHtleHByZXNzaW9ufSBpcyBlbXB0eSBkdXJpbmcgU1NSLCB3ZSBuZWVkIHRvIGluc2VydCBhbiBlbXB0eSB0ZXh0IG5vZGVcblx0XHRub2RlLmJlZm9yZSgobm9kZSA9IGNyZWF0ZV90ZXh0KCkpKTtcblx0XHRzZXRfaHlkcmF0ZV9ub2RlKG5vZGUpO1xuXHR9XG5cblx0YXNzaWduX25vZGVzKG5vZGUsIG5vZGUpO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnQoKSB7XG5cdC8vIHdlJ3JlIG5vdCBkZWxlZ2F0aW5nIHRvIGB0ZW1wbGF0ZWAgaGVyZSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuXHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0YXNzaWduX25vZGVzKGh5ZHJhdGVfbm9kZSwgbnVsbCk7XG5cdFx0cmV0dXJuIGh5ZHJhdGVfbm9kZTtcblx0fVxuXG5cdHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHR2YXIgc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblx0dmFyIGFuY2hvciA9IGNyZWF0ZV90ZXh0KCk7XG5cdGZyYWcuYXBwZW5kKHN0YXJ0LCBhbmNob3IpO1xuXG5cdGFzc2lnbl9ub2RlcyhzdGFydCwgYW5jaG9yKTtcblxuXHRyZXR1cm4gZnJhZztcbn1cblxuLyoqXG4gKiBBc3NpZ24gdGhlIGNyZWF0ZWQgKG9yIGluIGh5ZHJhdGlvbiBtb2RlLCB0cmF2ZXJzZWQpIGRvbSBlbGVtZW50cyB0byB0aGUgY3VycmVudCBibG9ja1xuICogYW5kIGluc2VydCB0aGUgZWxlbWVudHMgaW50byB0aGUgZG9tIChpbiBjbGllbnQgbW9kZSkuXG4gKiBAcGFyYW0ge1RleHQgfCBDb21tZW50IHwgRWxlbWVudH0gYW5jaG9yXG4gKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnQgfCBFbGVtZW50fSBkb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZChhbmNob3IsIGRvbSkge1xuXHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0LyoqIEB0eXBlIHtFZmZlY3R9ICovIChhY3RpdmVfZWZmZWN0KS5ub2Rlc19lbmQgPSBoeWRyYXRlX25vZGU7XG5cdFx0aHlkcmF0ZV9uZXh0KCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGFuY2hvciA9PT0gbnVsbCkge1xuXHRcdC8vIGVkZ2UgY2FzZSBcdTIwMTQgdm9pZCBgPHN2ZWx0ZTplbGVtZW50PmAgd2l0aCBjb250ZW50XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YW5jaG9yLmJlZm9yZSgvKiogQHR5cGUge05vZGV9ICovIChkb20pKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgKG9yIGh5ZHJhdGUpIGFuIHVuaXF1ZSBVSUQgZm9yIHRoZSBjb21wb25lbnQgaW5zdGFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9wc19pZCgpIHtcblx0aWYgKFxuXHRcdGh5ZHJhdGluZyAmJlxuXHRcdGh5ZHJhdGVfbm9kZSAmJlxuXHRcdGh5ZHJhdGVfbm9kZS5ub2RlVHlwZSA9PT0gOCAmJlxuXHRcdGh5ZHJhdGVfbm9kZS50ZXh0Q29udGVudD8uc3RhcnRzV2l0aChgI2ApXG5cdCkge1xuXHRcdGNvbnN0IGlkID0gaHlkcmF0ZV9ub2RlLnRleHRDb250ZW50LnN1YnN0cmluZygxKTtcblx0XHRoeWRyYXRlX25leHQoKTtcblx0XHRyZXR1cm4gaWQ7XG5cdH1cblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRoaXMgd2F5IHdlIGVuc3VyZSB0aGUgaWQgaXMgdW5pcXVlIGV2ZW4gYWNyb3NzIFN2ZWx0ZSBydW50aW1lc1xuXHQod2luZG93Ll9fc3ZlbHRlID8/PSB7fSkudWlkID8/PSAxO1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0cmV0dXJuIGBjJHt3aW5kb3cuX19zdmVsdGUudWlkKyt9YDtcbn1cbiIsICIvKiogQGltcG9ydCB7IENvbXBvbmVudENvbnRleHQsIEVmZmVjdCwgVGVtcGxhdGVOb2RlIH0gZnJvbSAnI2NsaWVudCcgKi9cbi8qKiBAaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRUeXBlLCBTdmVsdGVDb21wb25lbnQsIE1vdW50T3B0aW9ucyB9IGZyb20gJy4uLy4uL2luZGV4LmpzJyAqL1xuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5pbXBvcnQge1xuXHRjbGVhcl90ZXh0X2NvbnRlbnQsXG5cdGNyZWF0ZV90ZXh0LFxuXHRnZXRfZmlyc3RfY2hpbGQsXG5cdGdldF9uZXh0X3NpYmxpbmcsXG5cdGluaXRfb3BlcmF0aW9uc1xufSBmcm9tICcuL2RvbS9vcGVyYXRpb25zLmpzJztcbmltcG9ydCB7IEhZRFJBVElPTl9FTkQsIEhZRFJBVElPTl9FUlJPUiwgSFlEUkFUSU9OX1NUQVJUIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGFjdGl2ZV9lZmZlY3QgfSBmcm9tICcuL3J1bnRpbWUuanMnO1xuaW1wb3J0IHsgcHVzaCwgcG9wLCBjb21wb25lbnRfY29udGV4dCB9IGZyb20gJy4vY29udGV4dC5qcyc7XG5pbXBvcnQgeyBjb21wb25lbnRfcm9vdCwgYnJhbmNoIH0gZnJvbSAnLi9yZWFjdGl2aXR5L2VmZmVjdHMuanMnO1xuaW1wb3J0IHtcblx0aHlkcmF0ZV9uZXh0LFxuXHRoeWRyYXRlX25vZGUsXG5cdGh5ZHJhdGluZyxcblx0c2V0X2h5ZHJhdGVfbm9kZSxcblx0c2V0X2h5ZHJhdGluZ1xufSBmcm9tICcuL2RvbS9oeWRyYXRpb24uanMnO1xuaW1wb3J0IHsgYXJyYXlfZnJvbSB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQge1xuXHRhbGxfcmVnaXN0ZXJlZF9ldmVudHMsXG5cdGhhbmRsZV9ldmVudF9wcm9wYWdhdGlvbixcblx0cm9vdF9ldmVudF9oYW5kbGVzXG59IGZyb20gJy4vZG9tL2VsZW1lbnRzL2V2ZW50cy5qcyc7XG5pbXBvcnQgeyByZXNldF9oZWFkX2FuY2hvciB9IGZyb20gJy4vZG9tL2Jsb2Nrcy9zdmVsdGUtaGVhZC5qcyc7XG5pbXBvcnQgKiBhcyB3IGZyb20gJy4vd2FybmluZ3MuanMnO1xuaW1wb3J0ICogYXMgZSBmcm9tICcuL2Vycm9ycy5qcyc7XG5pbXBvcnQgeyBhc3NpZ25fbm9kZXMgfSBmcm9tICcuL2RvbS90ZW1wbGF0ZS5qcyc7XG5pbXBvcnQgeyBpc19wYXNzaXZlX2V2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFRoaXMgaXMgbm9ybWFsbHkgdHJ1ZSBcdTIwMTQgYmxvY2sgZWZmZWN0cyBzaG91bGQgcnVuIHRoZWlyIGludHJvIHRyYW5zaXRpb25zIFx1MjAxNFxuICogYnV0IGlzIGZhbHNlIGR1cmluZyBoeWRyYXRpb24gKHVubGVzcyBgb3B0aW9ucy5pbnRyb2AgaXMgYHRydWVgKSBhbmRcbiAqIHdoZW4gY3JlYXRpbmcgdGhlIGNoaWxkcmVuIG9mIGEgYDxzdmVsdGU6ZWxlbWVudD5gIHRoYXQganVzdCBjaGFuZ2VkIHRhZ1xuICovXG5leHBvcnQgbGV0IHNob3VsZF9pbnRybyA9IHRydWU7XG5cbi8qKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X3Nob3VsZF9pbnRybyh2YWx1ZSkge1xuXHRzaG91bGRfaW50cm8gPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfdGV4dCh0ZXh0LCB2YWx1ZSkge1xuXHQvLyBGb3Igb2JqZWN0cywgd2UgYXBwbHkgc3RyaW5nIGNvZXJjaW9uICh3aGljaCBtaWdodCBtYWtlIHRoaW5ncyBsaWtlICRzdGF0ZSBhcnJheSByZWZlcmVuY2VzIGluIHRoZSB0ZW1wbGF0ZSByZWFjdGl2ZSkgYmVmb3JlIGRpZmZpbmdcblx0dmFyIHN0ciA9IHZhbHVlID09IG51bGwgPyAnJyA6IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSArICcnIDogdmFsdWU7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0aWYgKHN0ciAhPT0gKHRleHQuX190ID8/PSB0ZXh0Lm5vZGVWYWx1ZSkpIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0dGV4dC5fX3QgPSBzdHI7XG5cdFx0dGV4dC5ub2RlVmFsdWUgPSBzdHIgKyAnJztcblx0fVxufVxuXG4vKipcbiAqIE1vdW50cyBhIGNvbXBvbmVudCB0byB0aGUgZ2l2ZW4gdGFyZ2V0IGFuZCByZXR1cm5zIHRoZSBleHBvcnRzIGFuZCBwb3RlbnRpYWxseSB0aGUgcHJvcHMgKGlmIGNvbXBpbGVkIHdpdGggYGFjY2Vzc29yczogdHJ1ZWApIG9mIHRoZSBjb21wb25lbnQuXG4gKiBUcmFuc2l0aW9ucyB3aWxsIHBsYXkgZHVyaW5nIHRoZSBpbml0aWFsIHJlbmRlciB1bmxlc3MgdGhlIGBpbnRyb2Agb3B0aW9uIGlzIHNldCB0byBgZmFsc2VgLlxuICpcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gUHJvcHNcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gRXhwb3J0c1xuICogQHBhcmFtIHtDb21wb25lbnRUeXBlPFN2ZWx0ZUNvbXBvbmVudDxQcm9wcz4+IHwgQ29tcG9uZW50PFByb3BzLCBFeHBvcnRzLCBhbnk+fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TW91bnRPcHRpb25zPFByb3BzPn0gb3B0aW9uc1xuICogQHJldHVybnMge0V4cG9ydHN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3VudChjb21wb25lbnQsIG9wdGlvbnMpIHtcblx0cmV0dXJuIF9tb3VudChjb21wb25lbnQsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIEh5ZHJhdGVzIGEgY29tcG9uZW50IG9uIHRoZSBnaXZlbiB0YXJnZXQgYW5kIHJldHVybnMgdGhlIGV4cG9ydHMgYW5kIHBvdGVudGlhbGx5IHRoZSBwcm9wcyAoaWYgY29tcGlsZWQgd2l0aCBgYWNjZXNzb3JzOiB0cnVlYCkgb2YgdGhlIGNvbXBvbmVudFxuICpcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gUHJvcHNcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gRXhwb3J0c1xuICogQHBhcmFtIHtDb21wb25lbnRUeXBlPFN2ZWx0ZUNvbXBvbmVudDxQcm9wcz4+IHwgQ29tcG9uZW50PFByb3BzLCBFeHBvcnRzLCBhbnk+fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7e30gZXh0ZW5kcyBQcm9wcyA/IHtcbiAqIFx0XHR0YXJnZXQ6IERvY3VtZW50IHwgRWxlbWVudCB8IFNoYWRvd1Jvb3Q7XG4gKiBcdFx0cHJvcHM/OiBQcm9wcztcbiAqIFx0XHRldmVudHM/OiBSZWNvcmQ8c3RyaW5nLCAoZTogYW55KSA9PiBhbnk+O1xuICogIFx0Y29udGV4dD86IE1hcDxhbnksIGFueT47XG4gKiBcdFx0aW50cm8/OiBib29sZWFuO1xuICogXHRcdHJlY292ZXI/OiBib29sZWFuO1xuICogXHR9IDoge1xuICogXHRcdHRhcmdldDogRG9jdW1lbnQgfCBFbGVtZW50IHwgU2hhZG93Um9vdDtcbiAqIFx0XHRwcm9wczogUHJvcHM7XG4gKiBcdFx0ZXZlbnRzPzogUmVjb3JkPHN0cmluZywgKGU6IGFueSkgPT4gYW55PjtcbiAqICBcdGNvbnRleHQ/OiBNYXA8YW55LCBhbnk+O1xuICogXHRcdGludHJvPzogYm9vbGVhbjtcbiAqIFx0XHRyZWNvdmVyPzogYm9vbGVhbjtcbiAqIFx0fX0gb3B0aW9uc1xuICogQHJldHVybnMge0V4cG9ydHN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKGNvbXBvbmVudCwgb3B0aW9ucykge1xuXHRpbml0X29wZXJhdGlvbnMoKTtcblx0b3B0aW9ucy5pbnRybyA9IG9wdGlvbnMuaW50cm8gPz8gZmFsc2U7XG5cdGNvbnN0IHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xuXHRjb25zdCB3YXNfaHlkcmF0aW5nID0gaHlkcmF0aW5nO1xuXHRjb25zdCBwcmV2aW91c19oeWRyYXRlX25vZGUgPSBoeWRyYXRlX25vZGU7XG5cblx0dHJ5IHtcblx0XHR2YXIgYW5jaG9yID0gLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChnZXRfZmlyc3RfY2hpbGQodGFyZ2V0KSk7XG5cdFx0d2hpbGUgKFxuXHRcdFx0YW5jaG9yICYmXG5cdFx0XHQoYW5jaG9yLm5vZGVUeXBlICE9PSA4IHx8IC8qKiBAdHlwZSB7Q29tbWVudH0gKi8gKGFuY2hvcikuZGF0YSAhPT0gSFlEUkFUSU9OX1NUQVJUKVxuXHRcdCkge1xuXHRcdFx0YW5jaG9yID0gLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChnZXRfbmV4dF9zaWJsaW5nKGFuY2hvcikpO1xuXHRcdH1cblxuXHRcdGlmICghYW5jaG9yKSB7XG5cdFx0XHR0aHJvdyBIWURSQVRJT05fRVJST1I7XG5cdFx0fVxuXG5cdFx0c2V0X2h5ZHJhdGluZyh0cnVlKTtcblx0XHRzZXRfaHlkcmF0ZV9ub2RlKC8qKiBAdHlwZSB7Q29tbWVudH0gKi8gKGFuY2hvcikpO1xuXHRcdGh5ZHJhdGVfbmV4dCgpO1xuXG5cdFx0Y29uc3QgaW5zdGFuY2UgPSBfbW91bnQoY29tcG9uZW50LCB7IC4uLm9wdGlvbnMsIGFuY2hvciB9KTtcblxuXHRcdGlmIChcblx0XHRcdGh5ZHJhdGVfbm9kZSA9PT0gbnVsbCB8fFxuXHRcdFx0aHlkcmF0ZV9ub2RlLm5vZGVUeXBlICE9PSA4IHx8XG5cdFx0XHQvKiogQHR5cGUge0NvbW1lbnR9ICovIChoeWRyYXRlX25vZGUpLmRhdGEgIT09IEhZRFJBVElPTl9FTkRcblx0XHQpIHtcblx0XHRcdHcuaHlkcmF0aW9uX21pc21hdGNoKCk7XG5cdFx0XHR0aHJvdyBIWURSQVRJT05fRVJST1I7XG5cdFx0fVxuXG5cdFx0c2V0X2h5ZHJhdGluZyhmYWxzZSk7XG5cblx0XHRyZXR1cm4gLyoqICBAdHlwZSB7RXhwb3J0c30gKi8gKGluc3RhbmNlKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgPT09IEhZRFJBVElPTl9FUlJPUikge1xuXHRcdFx0aWYgKG9wdGlvbnMucmVjb3ZlciA9PT0gZmFsc2UpIHtcblx0XHRcdFx0ZS5oeWRyYXRpb25fZmFpbGVkKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGFuIGVycm9yIG9jY3VyZWQgYWJvdmUsIHRoZSBvcGVyYXRpb25zIG1pZ2h0IG5vdCB5ZXQgaGF2ZSBiZWVuIGluaXRpYWxpc2VkLlxuXHRcdFx0aW5pdF9vcGVyYXRpb25zKCk7XG5cdFx0XHRjbGVhcl90ZXh0X2NvbnRlbnQodGFyZ2V0KTtcblxuXHRcdFx0c2V0X2h5ZHJhdGluZyhmYWxzZSk7XG5cdFx0XHRyZXR1cm4gbW91bnQoY29tcG9uZW50LCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHR0aHJvdyBlcnJvcjtcblx0fSBmaW5hbGx5IHtcblx0XHRzZXRfaHlkcmF0aW5nKHdhc19oeWRyYXRpbmcpO1xuXHRcdHNldF9oeWRyYXRlX25vZGUocHJldmlvdXNfaHlkcmF0ZV9ub2RlKTtcblx0XHRyZXNldF9oZWFkX2FuY2hvcigpO1xuXHR9XG59XG5cbi8qKiBAdHlwZSB7TWFwPHN0cmluZywgbnVtYmVyPn0gKi9cbmNvbnN0IGRvY3VtZW50X2xpc3RlbmVycyA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IEV4cG9ydHNcbiAqIEBwYXJhbSB7Q29tcG9uZW50VHlwZTxTdmVsdGVDb21wb25lbnQ8YW55Pj4gfCBDb21wb25lbnQ8YW55Pn0gQ29tcG9uZW50XG4gKiBAcGFyYW0ge01vdW50T3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge0V4cG9ydHN9XG4gKi9cbmZ1bmN0aW9uIF9tb3VudChDb21wb25lbnQsIHsgdGFyZ2V0LCBhbmNob3IsIHByb3BzID0ge30sIGV2ZW50cywgY29udGV4dCwgaW50cm8gPSB0cnVlIH0pIHtcblx0aW5pdF9vcGVyYXRpb25zKCk7XG5cblx0dmFyIHJlZ2lzdGVyZWRfZXZlbnRzID0gbmV3IFNldCgpO1xuXG5cdC8qKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGV2ZW50cyAqL1xuXHR2YXIgZXZlbnRfaGFuZGxlID0gKGV2ZW50cykgPT4ge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZXZlbnRfbmFtZSA9IGV2ZW50c1tpXTtcblxuXHRcdFx0aWYgKHJlZ2lzdGVyZWRfZXZlbnRzLmhhcyhldmVudF9uYW1lKSkgY29udGludWU7XG5cdFx0XHRyZWdpc3RlcmVkX2V2ZW50cy5hZGQoZXZlbnRfbmFtZSk7XG5cblx0XHRcdHZhciBwYXNzaXZlID0gaXNfcGFzc2l2ZV9ldmVudChldmVudF9uYW1lKTtcblxuXHRcdFx0Ly8gQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byBib3RoIHRoZSBjb250YWluZXIgYW5kIHRoZSBkb2N1bWVudC5cblx0XHRcdC8vIFRoZSBjb250YWluZXIgbGlzdGVuZXIgZW5zdXJlcyB3ZSBjYXRjaCBldmVudHMgZnJvbSB3aXRoaW4gaW4gY2FzZVxuXHRcdFx0Ly8gdGhlIG91dGVyIGNvbnRlbnQgc3RvcHMgcHJvcGFnYXRpb24gb2YgdGhlIGV2ZW50LlxuXHRcdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgaGFuZGxlX2V2ZW50X3Byb3BhZ2F0aW9uLCB7IHBhc3NpdmUgfSk7XG5cblx0XHRcdHZhciBuID0gZG9jdW1lbnRfbGlzdGVuZXJzLmdldChldmVudF9uYW1lKTtcblxuXHRcdFx0aWYgKG4gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBUaGUgZG9jdW1lbnQgbGlzdGVuZXIgZW5zdXJlcyB3ZSBjYXRjaCBldmVudHMgdGhhdCBvcmlnaW5hdGUgZnJvbSBlbGVtZW50cyB0aGF0IHdlcmVcblx0XHRcdFx0Ly8gbWFudWFsbHkgbW92ZWQgb3V0c2lkZSBvZiB0aGUgY29udGFpbmVyIChlLmcuIHZpYSBtYW51YWwgcG9ydGFscykuXG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgaGFuZGxlX2V2ZW50X3Byb3BhZ2F0aW9uLCB7IHBhc3NpdmUgfSk7XG5cdFx0XHRcdGRvY3VtZW50X2xpc3RlbmVycy5zZXQoZXZlbnRfbmFtZSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudF9saXN0ZW5lcnMuc2V0KGV2ZW50X25hbWUsIG4gKyAxKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0ZXZlbnRfaGFuZGxlKGFycmF5X2Zyb20oYWxsX3JlZ2lzdGVyZWRfZXZlbnRzKSk7XG5cdHJvb3RfZXZlbnRfaGFuZGxlcy5hZGQoZXZlbnRfaGFuZGxlKTtcblxuXHQvKiogQHR5cGUge0V4cG9ydHN9ICovXG5cdC8vIEB0cy1leHBlY3QtZXJyb3Igd2lsbCBiZSBkZWZpbmVkIGJlY2F1c2UgdGhlIHJlbmRlciBlZmZlY3QgcnVucyBzeW5jaHJvbm91c2x5XG5cdHZhciBjb21wb25lbnQgPSB1bmRlZmluZWQ7XG5cblx0dmFyIHVubW91bnQgPSBjb21wb25lbnRfcm9vdCgoKSA9PiB7XG5cdFx0dmFyIGFuY2hvcl9ub2RlID0gYW5jaG9yID8/IHRhcmdldC5hcHBlbmRDaGlsZChjcmVhdGVfdGV4dCgpKTtcblxuXHRcdGJyYW5jaCgoKSA9PiB7XG5cdFx0XHRpZiAoY29udGV4dCkge1xuXHRcdFx0XHRwdXNoKHt9KTtcblx0XHRcdFx0dmFyIGN0eCA9IC8qKiBAdHlwZSB7Q29tcG9uZW50Q29udGV4dH0gKi8gKGNvbXBvbmVudF9jb250ZXh0KTtcblx0XHRcdFx0Y3R4LmMgPSBjb250ZXh0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZXZlbnRzKSB7XG5cdFx0XHRcdC8vIFdlIGNhbid0IHNwcmVhZCB0aGUgb2JqZWN0IG9yIGVsc2Ugd2UnZCBsb3NlIHRoZSBzdGF0ZSBwcm94eSBzdHVmZiwgaWYgaXQgaXMgb25lXG5cdFx0XHRcdC8qKiBAdHlwZSB7YW55fSAqLyAocHJvcHMpLiQkZXZlbnRzID0gZXZlbnRzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0XHRcdGFzc2lnbl9ub2RlcygvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGFuY2hvcl9ub2RlKSwgbnVsbCk7XG5cdFx0XHR9XG5cblx0XHRcdHNob3VsZF9pbnRybyA9IGludHJvO1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciB0aGUgcHVibGljIHR5cGluZ3MgYXJlIG5vdCB3aGF0IHRoZSBhY3R1YWwgZnVuY3Rpb24gbG9va3MgbGlrZVxuXHRcdFx0Y29tcG9uZW50ID0gQ29tcG9uZW50KGFuY2hvcl9ub2RlLCBwcm9wcykgfHwge307XG5cdFx0XHRzaG91bGRfaW50cm8gPSB0cnVlO1xuXG5cdFx0XHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0XHRcdC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAoYWN0aXZlX2VmZmVjdCkubm9kZXNfZW5kID0gaHlkcmF0ZV9ub2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29udGV4dCkge1xuXHRcdFx0XHRwb3AoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRmb3IgKHZhciBldmVudF9uYW1lIG9mIHJlZ2lzdGVyZWRfZXZlbnRzKSB7XG5cdFx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50X25hbWUsIGhhbmRsZV9ldmVudF9wcm9wYWdhdGlvbik7XG5cblx0XHRcdFx0dmFyIG4gPSAvKiogQHR5cGUge251bWJlcn0gKi8gKGRvY3VtZW50X2xpc3RlbmVycy5nZXQoZXZlbnRfbmFtZSkpO1xuXG5cdFx0XHRcdGlmICgtLW4gPT09IDApIHtcblx0XHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50X25hbWUsIGhhbmRsZV9ldmVudF9wcm9wYWdhdGlvbik7XG5cdFx0XHRcdFx0ZG9jdW1lbnRfbGlzdGVuZXJzLmRlbGV0ZShldmVudF9uYW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkb2N1bWVudF9saXN0ZW5lcnMuc2V0KGV2ZW50X25hbWUsIG4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJvb3RfZXZlbnRfaGFuZGxlcy5kZWxldGUoZXZlbnRfaGFuZGxlKTtcblxuXHRcdFx0aWYgKGFuY2hvcl9ub2RlICE9PSBhbmNob3IpIHtcblx0XHRcdFx0YW5jaG9yX25vZGUucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQoYW5jaG9yX25vZGUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xuXG5cdG1vdW50ZWRfY29tcG9uZW50cy5zZXQoY29tcG9uZW50LCB1bm1vdW50KTtcblx0cmV0dXJuIGNvbXBvbmVudDtcbn1cblxuLyoqXG4gKiBSZWZlcmVuY2VzIG9mIHRoZSBjb21wb25lbnRzIHRoYXQgd2VyZSBtb3VudGVkIG9yIGh5ZHJhdGVkLlxuICogVXNlcyBhIGBXZWFrTWFwYCB0byBhdm9pZCBtZW1vcnkgbGVha3MuXG4gKi9cbmxldCBtb3VudGVkX2NvbXBvbmVudHMgPSBuZXcgV2Vha01hcCgpO1xuXG4vKipcbiAqIFVubW91bnRzIGEgY29tcG9uZW50IHRoYXQgd2FzIHByZXZpb3VzbHkgbW91bnRlZCB1c2luZyBgbW91bnRgIG9yIGBoeWRyYXRlYC5cbiAqXG4gKiBTaW5jZSA1LjEzLjAsIGlmIGBvcHRpb25zLm91dHJvYCBpcyBgdHJ1ZWAsIFt0cmFuc2l0aW9uc10oaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlL3RyYW5zaXRpb24pIHdpbGwgcGxheSBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAqXG4gKiBSZXR1cm5zIGEgYFByb21pc2VgIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdHJhbnNpdGlvbnMgaGF2ZSBjb21wbGV0ZWQgaWYgYG9wdGlvbnMub3V0cm9gIGlzIHRydWUsIG9yIGltbWVkaWF0ZWx5IG90aGVyd2lzZSAocHJpb3IgdG8gNS4xMy4wLCByZXR1cm5zIGB2b2lkYCkuXG4gKlxuICogYGBganNcbiAqIGltcG9ydCB7IG1vdW50LCB1bm1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAqIGltcG9ydCBBcHAgZnJvbSAnLi9BcHAuc3ZlbHRlJztcbiAqXG4gKiBjb25zdCBhcHAgPSBtb3VudChBcHAsIHsgdGFyZ2V0OiBkb2N1bWVudC5ib2R5IH0pO1xuICpcbiAqIC8vIGxhdGVyLi4uXG4gKiB1bm1vdW50KGFwcCwgeyBvdXRybzogdHJ1ZSB9KTtcbiAqIGBgYFxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7eyBvdXRybz86IGJvb2xlYW4gfX0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQoY29tcG9uZW50LCBvcHRpb25zKSB7XG5cdGNvbnN0IGZuID0gbW91bnRlZF9jb21wb25lbnRzLmdldChjb21wb25lbnQpO1xuXG5cdGlmIChmbikge1xuXHRcdG1vdW50ZWRfY29tcG9uZW50cy5kZWxldGUoY29tcG9uZW50KTtcblx0XHRyZXR1cm4gZm4ob3B0aW9ucyk7XG5cdH1cblxuXHRpZiAoREVWKSB7XG5cdFx0dy5saWZlY3ljbGVfZG91YmxlX3VubW91bnQoKTtcblx0fVxuXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn1cbiIsICIvKiogQGltcG9ydCB7IFRlbXBsYXRlTm9kZSB9IGZyb20gJyNjbGllbnQnICovXG4vKiogQGltcG9ydCB7IEdldHRlcnMgfSBmcm9tICcjc2hhcmVkJyAqL1xuaW1wb3J0IHsgaXNfdm9pZCB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJztcbmltcG9ydCAqIGFzIHcgZnJvbSAnLi93YXJuaW5ncy5qcyc7XG5pbXBvcnQgKiBhcyBlIGZyb20gJy4vZXJyb3JzLmpzJztcblxuZXhwb3J0IHsgaW52YWxpZF9kZWZhdWx0X3NuaXBwZXQgfSBmcm9tICcuL2Vycm9ycy5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHsoKSA9PiBzdHJpbmd9IHRhZ19mblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZV92b2lkX2R5bmFtaWNfZWxlbWVudCh0YWdfZm4pIHtcblx0Y29uc3QgdGFnID0gdGFnX2ZuKCk7XG5cdGlmICh0YWcgJiYgaXNfdm9pZCh0YWcpKSB7XG5cdFx0dy5keW5hbWljX3ZvaWRfZWxlbWVudF9jb250ZW50KHRhZyk7XG5cdH1cbn1cblxuLyoqIEBwYXJhbSB7KCkgPT4gdW5rbm93bn0gdGFnX2ZuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVfZHluYW1pY19lbGVtZW50X3RhZyh0YWdfZm4pIHtcblx0Y29uc3QgdGFnID0gdGFnX2ZuKCk7XG5cdGNvbnN0IGlzX3N0cmluZyA9IHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnO1xuXHRpZiAodGFnICYmICFpc19zdHJpbmcpIHtcblx0XHRlLnN2ZWx0ZV9lbGVtZW50X2ludmFsaWRfdGhpc192YWx1ZSgpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVfc3RvcmUoc3RvcmUsIG5hbWUpIHtcblx0aWYgKHN0b3JlICE9IG51bGwgJiYgdHlwZW9mIHN0b3JlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGUuc3RvcmVfaW52YWxpZF9zaGFwZShuYW1lKTtcblx0fVxufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7KCkgPT4gdW5rbm93bn0gVFxuICogQHBhcmFtIHtUfSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJldmVudF9zbmlwcGV0X3N0cmluZ2lmaWNhdGlvbihmbikge1xuXHRmbi50b1N0cmluZyA9ICgpID0+IHtcblx0XHRlLnNuaXBwZXRfd2l0aG91dF9yZW5kZXJfdGFnKCk7XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXHRyZXR1cm4gZm47XG59XG4iLCAiaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5pbXBvcnQgeyBoeWRyYXRpbmcsIHNldF9oeWRyYXRpbmcgfSBmcm9tICcuLi9oeWRyYXRpb24uanMnO1xuaW1wb3J0IHsgZ2V0X2Rlc2NyaXB0b3JzLCBnZXRfcHJvdG90eXBlX29mIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7IGNyZWF0ZV9ldmVudCwgZGVsZWdhdGUgfSBmcm9tICcuL2V2ZW50cy5qcyc7XG5pbXBvcnQgeyBhZGRfZm9ybV9yZXNldF9saXN0ZW5lciwgYXV0b2ZvY3VzIH0gZnJvbSAnLi9taXNjLmpzJztcbmltcG9ydCAqIGFzIHcgZnJvbSAnLi4vLi4vd2FybmluZ3MuanMnO1xuaW1wb3J0IHsgTE9BRElOR19BVFRSX1NZTUJPTCB9IGZyb20gJyNjbGllbnQvY29uc3RhbnRzJztcbmltcG9ydCB7IHF1ZXVlX2lkbGVfdGFzayB9IGZyb20gJy4uL3Rhc2suanMnO1xuaW1wb3J0IHsgaXNfY2FwdHVyZV9ldmVudCwgaXNfZGVsZWdhdGVkLCBub3JtYWxpemVfYXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHtcblx0YWN0aXZlX2VmZmVjdCxcblx0YWN0aXZlX3JlYWN0aW9uLFxuXHRzZXRfYWN0aXZlX2VmZmVjdCxcblx0c2V0X2FjdGl2ZV9yZWFjdGlvblxufSBmcm9tICcuLi8uLi9ydW50aW1lLmpzJztcbmltcG9ydCB7IGNsc3ggfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvYXR0cmlidXRlcy5qcyc7XG5pbXBvcnQgeyBzZXRfY2xhc3MgfSBmcm9tICcuL2NsYXNzLmpzJztcbmltcG9ydCB7IHNldF9zdHlsZSB9IGZyb20gJy4vc3R5bGUuanMnO1xuaW1wb3J0IHsgTkFNRVNQQUNFX0hUTUwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMuanMnO1xuXG5leHBvcnQgY29uc3QgQ0xBU1MgPSBTeW1ib2woJ2NsYXNzJyk7XG5leHBvcnQgY29uc3QgU1RZTEUgPSBTeW1ib2woJ3N0eWxlJyk7XG5cbmNvbnN0IElTX0NVU1RPTV9FTEVNRU5UID0gU3ltYm9sKCdpcyBjdXN0b20gZWxlbWVudCcpO1xuY29uc3QgSVNfSFRNTCA9IFN5bWJvbCgnaXMgaHRtbCcpO1xuXG4vKipcbiAqIFRoZSB2YWx1ZS9jaGVja2VkIGF0dHJpYnV0ZSBpbiB0aGUgdGVtcGxhdGUgYWN0dWFsbHkgY29ycmVzcG9uZHMgdG8gdGhlIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eSwgc28gd2UgbmVlZFxuICogdG8gcmVtb3ZlIGl0IHVwb24gaHlkcmF0aW9uIHRvIGF2b2lkIGEgYnVnIHdoZW4gc29tZW9uZSByZXNldHMgdGhlIGZvcm0gdmFsdWUuXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGlucHV0XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZV9pbnB1dF9kZWZhdWx0cyhpbnB1dCkge1xuXHRpZiAoIWh5ZHJhdGluZykgcmV0dXJuO1xuXG5cdHZhciBhbHJlYWR5X3JlbW92ZWQgPSBmYWxzZTtcblxuXHQvLyBXZSB0cnkgYW5kIHJlbW92ZSB0aGUgZGVmYXVsdCBhdHRyaWJ1dGVzIGxhdGVyLCByYXRoZXIgdGhhbiBzeW5jIGR1cmluZyBoeWRyYXRpb24uXG5cdC8vIERvaW5nIGl0IHN5bmMgZHVyaW5nIGh5ZHJhdGlvbiBoYXMgYSBuZWdhdGl2ZSBpbXBhY3Qgb24gcGVyZm9ybWFuY2UsIGJ1dCBkZWZlcnJpbmcgdGhlXG5cdC8vIHdvcmsgaW4gYW4gaWRsZSB0YXNrIGFsbGV2aWF0ZXMgdGhpcyBncmVhdGx5LiBJZiBhIGZvcm0gcmVzZXQgZXZlbnQgY29tZXMgaW4gYmVmb3JlXG5cdC8vIHRoZSBpZGxlIGNhbGxiYWNrLCB0aGVuIHdlIGVuc3VyZSB0aGUgaW5wdXQgZGVmYXVsdHMgYXJlIGNsZWFyZWQganVzdCBiZWZvcmUuXG5cdHZhciByZW1vdmVfZGVmYXVsdHMgPSAoKSA9PiB7XG5cdFx0aWYgKGFscmVhZHlfcmVtb3ZlZCkgcmV0dXJuO1xuXHRcdGFscmVhZHlfcmVtb3ZlZCA9IHRydWU7XG5cblx0XHQvLyBSZW1vdmUgdGhlIGF0dHJpYnV0ZXMgYnV0IHByZXNlcnZlIHRoZSB2YWx1ZXNcblx0XHRpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG5cdFx0XHR2YXIgdmFsdWUgPSBpbnB1dC52YWx1ZTtcblx0XHRcdHNldF9hdHRyaWJ1dGUoaW5wdXQsICd2YWx1ZScsIG51bGwpO1xuXHRcdFx0aW5wdXQudmFsdWUgPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdjaGVja2VkJykpIHtcblx0XHRcdHZhciBjaGVja2VkID0gaW5wdXQuY2hlY2tlZDtcblx0XHRcdHNldF9hdHRyaWJ1dGUoaW5wdXQsICdjaGVja2VkJywgbnVsbCk7XG5cdFx0XHRpbnB1dC5jaGVja2VkID0gY2hlY2tlZDtcblx0XHR9XG5cdH07XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRpbnB1dC5fX29uX3IgPSByZW1vdmVfZGVmYXVsdHM7XG5cdHF1ZXVlX2lkbGVfdGFzayhyZW1vdmVfZGVmYXVsdHMpO1xuXHRhZGRfZm9ybV9yZXNldF9saXN0ZW5lcigpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfdmFsdWUoZWxlbWVudCwgdmFsdWUpIHtcblx0dmFyIGF0dHJpYnV0ZXMgPSBnZXRfYXR0cmlidXRlcyhlbGVtZW50KTtcblxuXHRpZiAoXG5cdFx0YXR0cmlidXRlcy52YWx1ZSA9PT1cblx0XHRcdChhdHRyaWJ1dGVzLnZhbHVlID1cblx0XHRcdFx0Ly8gdHJlYXQgbnVsbCBhbmQgdW5kZWZpbmVkIHRoZSBzYW1lIGZvciB0aGUgaW5pdGlhbCB2YWx1ZVxuXHRcdFx0XHR2YWx1ZSA/PyB1bmRlZmluZWQpIHx8XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdC8vIGBwcm9ncmVzc2AgZWxlbWVudHMgYWx3YXlzIG5lZWQgdGhlaXIgdmFsdWUgc2V0IHdoZW4gaXQncyBgMGBcblx0XHQoZWxlbWVudC52YWx1ZSA9PT0gdmFsdWUgJiYgKHZhbHVlICE9PSAwIHx8IGVsZW1lbnQubm9kZU5hbWUgIT09ICdQUk9HUkVTUycpKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdGVsZW1lbnQudmFsdWUgPSB2YWx1ZSA/PyAnJztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hlY2tlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2NoZWNrZWQoZWxlbWVudCwgY2hlY2tlZCkge1xuXHR2YXIgYXR0cmlidXRlcyA9IGdldF9hdHRyaWJ1dGVzKGVsZW1lbnQpO1xuXG5cdGlmIChcblx0XHRhdHRyaWJ1dGVzLmNoZWNrZWQgPT09XG5cdFx0KGF0dHJpYnV0ZXMuY2hlY2tlZCA9XG5cdFx0XHQvLyB0cmVhdCBudWxsIGFuZCB1bmRlZmluZWQgdGhlIHNhbWUgZm9yIHRoZSBpbml0aWFsIHZhbHVlXG5cdFx0XHRjaGVja2VkID8/IHVuZGVmaW5lZClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRlbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGBzZWxlY3RlZGAgYXR0cmlidXRlIG9uIGFuIGBvcHRpb25gIGVsZW1lbnQuXG4gKiBOb3Qgc2V0IHRocm91Z2ggdGhlIHByb3BlcnR5IGJlY2F1c2UgdGhhdCBkb2Vzbid0IHJlZmxlY3QgdG8gdGhlIERPTSxcbiAqIHdoaWNoIG1lYW5zIGl0IHdvdWxkbid0IGJlIHRha2VuIGludG8gYWNjb3VudCB3aGVuIGEgZm9ybSBpcyByZXNldC5cbiAqIEBwYXJhbSB7SFRNTE9wdGlvbkVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9zZWxlY3RlZChlbGVtZW50LCBzZWxlY3RlZCkge1xuXHRpZiAoc2VsZWN0ZWQpIHtcblx0XHQvLyBUaGUgc2VsZWN0ZWQgb3B0aW9uIGNvdWxkJ3ZlIGNoYW5nZWQgdmlhIHVzZXIgc2VsZWN0aW9uLCBhbmRcblx0XHQvLyBzZXR0aW5nIHRoZSB2YWx1ZSB3aXRob3V0IHRoaXMgY2hlY2sgd291bGQgc2V0IGl0IGJhY2suXG5cdFx0aWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnc2VsZWN0ZWQnKSkge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcblx0fVxufVxuXG4vKipcbiAqIEFwcGxpZXMgdGhlIGRlZmF1bHQgY2hlY2tlZCBwcm9wZXJ0eSB3aXRob3V0IGluZmx1ZW5jaW5nIHRoZSBjdXJyZW50IGNoZWNrZWQgcHJvcGVydHkuXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hlY2tlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2RlZmF1bHRfY2hlY2tlZChlbGVtZW50LCBjaGVja2VkKSB7XG5cdGNvbnN0IGV4aXN0aW5nX3ZhbHVlID0gZWxlbWVudC5jaGVja2VkO1xuXHRlbGVtZW50LmRlZmF1bHRDaGVja2VkID0gY2hlY2tlZDtcblx0ZWxlbWVudC5jaGVja2VkID0gZXhpc3RpbmdfdmFsdWU7XG59XG5cbi8qKlxuICogQXBwbGllcyB0aGUgZGVmYXVsdCB2YWx1ZSBwcm9wZXJ0eSB3aXRob3V0IGluZmx1ZW5jaW5nIHRoZSBjdXJyZW50IHZhbHVlIHByb3BlcnR5LlxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfZGVmYXVsdF92YWx1ZShlbGVtZW50LCB2YWx1ZSkge1xuXHRjb25zdCBleGlzdGluZ192YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG5cdGVsZW1lbnQuZGVmYXVsdFZhbHVlID0gdmFsdWU7XG5cdGVsZW1lbnQudmFsdWUgPSBleGlzdGluZ192YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBfd2FybmluZ11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9hdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSwgc2tpcF93YXJuaW5nKSB7XG5cdHZhciBhdHRyaWJ1dGVzID0gZ2V0X2F0dHJpYnV0ZXMoZWxlbWVudCk7XG5cblx0aWYgKGh5ZHJhdGluZykge1xuXHRcdGF0dHJpYnV0ZXNbYXR0cmlidXRlXSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XG5cblx0XHRpZiAoXG5cdFx0XHRhdHRyaWJ1dGUgPT09ICdzcmMnIHx8XG5cdFx0XHRhdHRyaWJ1dGUgPT09ICdzcmNzZXQnIHx8XG5cdFx0XHQoYXR0cmlidXRlID09PSAnaHJlZicgJiYgZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0xJTksnKVxuXHRcdCkge1xuXHRcdFx0aWYgKCFza2lwX3dhcm5pbmcpIHtcblx0XHRcdFx0Y2hlY2tfc3JjX2luX2Rldl9oeWRyYXRpb24oZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSA/PyAnJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHdlIHJlc2V0IHRoZXNlIGF0dHJpYnV0ZXMsIHRoZXkgd291bGQgcmVzdWx0IGluIGFub3RoZXIgbmV0d29yayByZXF1ZXN0LCB3aGljaCB3ZSB3YW50IHRvIGF2b2lkLlxuXHRcdFx0Ly8gV2UgYXNzdW1lIHRoZXkgYXJlIHRoZSBzYW1lIGJldHdlZW4gY2xpZW50IGFuZCBzZXJ2ZXIgYXMgY2hlY2tpbmcgaWYgdGhleSBhcmUgZXF1YWwgaXMgZXhwZW5zaXZlXG5cdFx0XHQvLyAod2UgY2FuJ3QganVzdCBjb21wYXJlIHRoZSBzdHJpbmdzIGFzIHRoZXkgY2FuIGJlIGRpZmZlcmVudCBiZXR3ZWVuIGNsaWVudCBhbmQgc2VydmVyIGJ1dCByZXN1bHQgaW4gdGhlXG5cdFx0XHQvLyBzYW1lIHVybCwgc28gd2Ugd291bGQgbmVlZCB0byBjcmVhdGUgaGlkZGVuIGFuY2hvciBlbGVtZW50cyB0byBjb21wYXJlIHRoZW0pXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0aWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlXSA9PT0gKGF0dHJpYnV0ZXNbYXR0cmlidXRlXSA9IHZhbHVlKSkgcmV0dXJuO1xuXG5cdGlmIChhdHRyaWJ1dGUgPT09ICdsb2FkaW5nJykge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRlbGVtZW50W0xPQURJTkdfQVRUUl9TWU1CT0xdID0gdmFsdWU7XG5cdH1cblxuXHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyAmJiBnZXRfc2V0dGVycyhlbGVtZW50KS5pbmNsdWRlcyhhdHRyaWJ1dGUpKSB7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGVsZW1lbnRbYXR0cmlidXRlXSA9IHZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBkb21cbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X3hsaW5rX2F0dHJpYnV0ZShkb20sIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0ZG9tLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcblx0Ly8gV2UgbmVlZCB0byBlbnN1cmUgdGhhdCBzZXR0aW5nIGN1c3RvbSBlbGVtZW50IHByb3BzLCB3aGljaCBjYW5cblx0Ly8gaW52b2tlIGxpZmVjeWNsZSBtZXRob2RzIG9uIG90aGVyIGN1c3RvbSBlbGVtZW50cywgZG9lcyBub3QgYWxzb1xuXHQvLyBhc3NvY2lhdGUgdGhvc2UgbGlmZWN5Y2xlIG1ldGhvZHMgd2l0aCB0aGUgY3VycmVudCBhY3RpdmUgcmVhY3Rpb25cblx0Ly8gb3IgZWZmZWN0XG5cdHZhciBwcmV2aW91c19yZWFjdGlvbiA9IGFjdGl2ZV9yZWFjdGlvbjtcblx0dmFyIHByZXZpb3VzX2VmZmVjdCA9IGFjdGl2ZV9lZmZlY3Q7XG5cblx0Ly8gSWYgd2UncmUgaHlkcmF0aW5nIGJ1dCB0aGUgY3VzdG9tIGVsZW1lbnQgaXMgZnJvbSBTdmVsdGUsIGFuZCBpdCBhbHJlYWR5IHNjYWZmb2xkZWQsXG5cdC8vIHRoZW4gaXQgbWlnaHQgcnVuIGJsb2NrIGxvZ2ljIGluIGh5ZHJhdGlvbiBtb2RlLCB3aGljaCB3ZSBoYXZlIHRvIHByZXZlbnQuXG5cdGxldCB3YXNfaHlkcmF0aW5nID0gaHlkcmF0aW5nO1xuXHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0c2V0X2h5ZHJhdGluZyhmYWxzZSk7XG5cdH1cblxuXHRzZXRfYWN0aXZlX3JlYWN0aW9uKG51bGwpO1xuXHRzZXRfYWN0aXZlX2VmZmVjdChudWxsKTtcblxuXHR0cnkge1xuXHRcdGlmIChcblx0XHRcdC8vIGBzdHlsZWAgc2hvdWxkIHVzZSBgc2V0X2F0dHJpYnV0ZWAgcmF0aGVyIHRoYW4gdGhlIHNldHRlclxuXHRcdFx0cHJvcCAhPT0gJ3N0eWxlJyAmJlxuXHRcdFx0Ly8gRG9uJ3QgY29tcHV0ZSBzZXR0ZXJzIGZvciBjdXN0b20gZWxlbWVudHMgd2hpbGUgdGhleSBhcmVuJ3QgcmVnaXN0ZXJlZCB5ZXQsXG5cdFx0XHQvLyBiZWNhdXNlIGR1cmluZyB0aGVpciB1cGdyYWRlL2luc3RhbnRpYXRpb24gdGhleSBtaWdodCBhZGQgbW9yZSBzZXR0ZXJzLlxuXHRcdFx0Ly8gSW5zdGVhZCwgZmFsbCBiYWNrIHRvIGEgc2ltcGxlIFwiYW4gb2JqZWN0LCB0aGVuIHNldCBhcyBwcm9wZXJ0eVwiIGhldXJpc3RpYy5cblx0XHRcdChzZXR0ZXJzX2NhY2hlLmhhcyhub2RlLm5vZGVOYW1lKSB8fFxuXHRcdFx0Ly8gY3VzdG9tRWxlbWVudHMgbWF5IG5vdCBiZSBhdmFpbGFibGUgaW4gYnJvd3NlciBleHRlbnNpb24gY29udGV4dHNcblx0XHRcdCFjdXN0b21FbGVtZW50cyB8fFxuXHRcdFx0Y3VzdG9tRWxlbWVudHMuZ2V0KG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0XHQ/IGdldF9zZXR0ZXJzKG5vZGUpLmluY2x1ZGVzKHByb3ApXG5cdFx0XHRcdDogdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jylcblx0XHQpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdG5vZGVbcHJvcF0gPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gV2UgZGlkIGdldHRlcnMgZXRjIGNoZWNrcyBhbHJlYWR5LCBzdHJpbmdpZnkgYmVmb3JlIHBhc3NpbmcgdG8gc2V0X2F0dHJpYnV0ZVxuXHRcdFx0Ly8gdG8gZW5zdXJlIGl0IGRvZXNuJ3QgaW52b2tlIHRoZSBzYW1lIGxvZ2ljIGFnYWluLCBhbmQgcG90ZW50aWFsbHkgcG9wdWxhdGluZ1xuXHRcdFx0Ly8gdGhlIHNldHRlcnMgY2FjaGUgdG9vIGVhcmx5LlxuXHRcdFx0c2V0X2F0dHJpYnV0ZShub2RlLCBwcm9wLCB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpKTtcblx0XHR9XG5cdH0gZmluYWxseSB7XG5cdFx0c2V0X2FjdGl2ZV9yZWFjdGlvbihwcmV2aW91c19yZWFjdGlvbik7XG5cdFx0c2V0X2FjdGl2ZV9lZmZlY3QocHJldmlvdXNfZWZmZWN0KTtcblx0XHRpZiAod2FzX2h5ZHJhdGluZykge1xuXHRcdFx0c2V0X2h5ZHJhdGluZyh0cnVlKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBTcHJlYWRzIGF0dHJpYnV0ZXMgb250byBhIERPTSBlbGVtZW50LCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBjdXJyZW50bHkgc2V0IGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7RWxlbWVudCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZX0gZWxlbWVudFxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nIHwgc3ltYm9sLCBhbnk+IHwgdW5kZWZpbmVkfSBwcmV2XG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcgfCBzeW1ib2wsIGFueT59IG5leHQgTmV3IGF0dHJpYnV0ZXMgLSB0aGlzIGZ1bmN0aW9uIG11dGF0ZXMgdGhpcyBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY3NzX2hhc2hdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwX3dhcm5pbmddXG4gKiBAcmV0dXJucyB7UmVjb3JkPHN0cmluZywgYW55Pn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKGVsZW1lbnQsIHByZXYsIG5leHQsIGNzc19oYXNoLCBza2lwX3dhcm5pbmcgPSBmYWxzZSkge1xuXHR2YXIgYXR0cmlidXRlcyA9IGdldF9hdHRyaWJ1dGVzKGVsZW1lbnQpO1xuXG5cdHZhciBpc19jdXN0b21fZWxlbWVudCA9IGF0dHJpYnV0ZXNbSVNfQ1VTVE9NX0VMRU1FTlRdO1xuXHR2YXIgcHJlc2VydmVfYXR0cmlidXRlX2Nhc2UgPSAhYXR0cmlidXRlc1tJU19IVE1MXTtcblxuXHQvLyBJZiB3ZSdyZSBoeWRyYXRpbmcgYnV0IHRoZSBjdXN0b20gZWxlbWVudCBpcyBmcm9tIFN2ZWx0ZSwgYW5kIGl0IGFscmVhZHkgc2NhZmZvbGRlZCxcblx0Ly8gdGhlbiBpdCBtaWdodCBydW4gYmxvY2sgbG9naWMgaW4gaHlkcmF0aW9uIG1vZGUsIHdoaWNoIHdlIGhhdmUgdG8gcHJldmVudC5cblx0bGV0IGlzX2h5ZHJhdGluZ19jdXN0b21fZWxlbWVudCA9IGh5ZHJhdGluZyAmJiBpc19jdXN0b21fZWxlbWVudDtcblx0aWYgKGlzX2h5ZHJhdGluZ19jdXN0b21fZWxlbWVudCkge1xuXHRcdHNldF9oeWRyYXRpbmcoZmFsc2UpO1xuXHR9XG5cblx0dmFyIGN1cnJlbnQgPSBwcmV2IHx8IHt9O1xuXHR2YXIgaXNfb3B0aW9uX2VsZW1lbnQgPSBlbGVtZW50LnRhZ05hbWUgPT09ICdPUFRJT04nO1xuXG5cdGZvciAodmFyIGtleSBpbiBwcmV2KSB7XG5cdFx0aWYgKCEoa2V5IGluIG5leHQpKSB7XG5cdFx0XHRuZXh0W2tleV0gPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdGlmIChuZXh0LmNsYXNzKSB7XG5cdFx0bmV4dC5jbGFzcyA9IGNsc3gobmV4dC5jbGFzcyk7XG5cdH0gZWxzZSBpZiAoY3NzX2hhc2ggfHwgbmV4dFtDTEFTU10pIHtcblx0XHRuZXh0LmNsYXNzID0gbnVsbDsgLyogZm9yY2UgY2FsbCB0byBzZXRfY2xhc3MoKSAqL1xuXHR9XG5cblx0aWYgKG5leHRbU1RZTEVdKSB7XG5cdFx0bmV4dC5zdHlsZSA/Pz0gbnVsbDsgLyogZm9yY2UgY2FsbCB0byBzZXRfc3R5bGUoKSAqL1xuXHR9XG5cblx0dmFyIHNldHRlcnMgPSBnZXRfc2V0dGVycyhlbGVtZW50KTtcblxuXHQvLyBzaW5jZSBrZXkgaXMgY2FwdHVyZWQgd2UgdXNlIGNvbnN0XG5cdGZvciAoY29uc3Qga2V5IGluIG5leHQpIHtcblx0XHQvLyBsZXQgaW5zdGVhZCBvZiB2YXIgYmVjYXVzZSByZWZlcmVuY2VkIGluIGEgY2xvc3VyZVxuXHRcdGxldCB2YWx1ZSA9IG5leHRba2V5XTtcblxuXHRcdC8vIFVwIGhlcmUgYmVjYXVzZSB3ZSB3YW50IHRvIGRvIHRoaXMgZm9yIHRoZSBpbml0aWFsIHZhbHVlLCB0b28sIGV2ZW4gaWYgaXQncyB1bmRlZmluZWQsXG5cdFx0Ly8gYW5kIHRoaXMgd291bGRuJ3QgYmUgcmVhY2hlZCBpbiBjYXNlIG9mIHVuZGVmaW5lZCBiZWNhdXNlIG9mIHRoZSBlcXVhbGl0eSBjaGVjayBiZWxvd1xuXHRcdGlmIChpc19vcHRpb25fZWxlbWVudCAmJiBrZXkgPT09ICd2YWx1ZScgJiYgdmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhlIDxvcHRpb24+IGVsZW1lbnQgaXMgYSBzcGVjaWFsIGNhc2UgYmVjYXVzZSByZW1vdmluZyB0aGUgdmFsdWUgYXR0cmlidXRlIG1lYW5zXG5cdFx0XHQvLyB0aGUgdmFsdWUgaXMgc2V0IHRvIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIG9wdGlvbiBlbGVtZW50LCBhbmQgc2V0dGluZyB0aGUgdmFsdWVcblx0XHRcdC8vIHRvIG51bGwgb3IgdW5kZWZpbmVkIG1lYW5zIHRoZSB2YWx1ZSBpcyBzZXQgdG8gdGhlIHN0cmluZyBcIm51bGxcIiBvciBcInVuZGVmaW5lZFwiLlxuXHRcdFx0Ly8gVG8gYWxpZ24gd2l0aCBob3cgd2UgaGFuZGxlIHRoaXMgY2FzZSBpbiBub24tc3ByZWFkLXNjZW5hcmlvcywgdGhpcyBsb2dpYyBpcyBuZWVkZWQuXG5cdFx0XHQvLyBUaGVyZSdzIGEgc3VwZXItZWRnZS1jYXNlIGJ1ZyBoZXJlIHRoYXQgaXMgbGVmdCBpbiBpbiBmYXZvciBvZiBzbWFsbGVyIGNvZGUgc2l6ZTpcblx0XHRcdC8vIEJlY2F1c2Ugb2YgdGhlIFwic2V0IG1pc3NpbmcgcHJvcHMgdG8gbnVsbFwiIGxvZ2ljIGFib3ZlLCB3ZSBjYW4ndCBkaWZmZXJlbnRpYXRlXG5cdFx0XHQvLyBiZXR3ZWVuIGEgbWlzc2luZyB2YWx1ZSBhbmQgYW4gZXhwbGljaXRseSBzZXQgdmFsdWUgb2YgbnVsbCBvciB1bmRlZmluZWQuIFRoYXQgbWVhbnNcblx0XHRcdC8vIHRoYXQgb25jZSBzZXQsIHRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgYW4gPG9wdGlvbj4gZWxlbWVudCBjYW4ndCBiZSByZW1vdmVkLiBUaGlzIGlzXG5cdFx0XHQvLyBhIHZlcnkgcmFyZSBlZGdlIGNhc2UsIGFuZCByZW1vdmluZyB0aGUgYXR0cmlidXRlIGFsdG9nZXRoZXIgaXNuJ3QgcG9zc2libGUgZWl0aGVyXG5cdFx0XHQvLyBmb3IgdGhlIDxvcHRpb24gdmFsdWU9e3VuZGVmaW5lZH0+IGNhc2UsIHNvIHdlJ3JlIG5vdCBsb3NpbmcgYW55IGZ1bmN0aW9uYWxpdHkgaGVyZS5cblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdGVsZW1lbnQudmFsdWUgPSBlbGVtZW50Ll9fdmFsdWUgPSAnJztcblx0XHRcdGN1cnJlbnRba2V5XSA9IHZhbHVlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGtleSA9PT0gJ2NsYXNzJykge1xuXHRcdFx0dmFyIGlzX2h0bWwgPSBlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuXHRcdFx0c2V0X2NsYXNzKGVsZW1lbnQsIGlzX2h0bWwsIHZhbHVlLCBjc3NfaGFzaCwgcHJldj8uW0NMQVNTXSwgbmV4dFtDTEFTU10pO1xuXHRcdFx0Y3VycmVudFtrZXldID0gdmFsdWU7XG5cdFx0XHRjdXJyZW50W0NMQVNTXSA9IG5leHRbQ0xBU1NdO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGtleSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0c2V0X3N0eWxlKGVsZW1lbnQsIHZhbHVlLCBwcmV2Py5bU1RZTEVdLCBuZXh0W1NUWUxFXSk7XG5cdFx0XHRjdXJyZW50W2tleV0gPSB2YWx1ZTtcblx0XHRcdGN1cnJlbnRbU1RZTEVdID0gbmV4dFtTVFlMRV07XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR2YXIgcHJldl92YWx1ZSA9IGN1cnJlbnRba2V5XTtcblx0XHRpZiAodmFsdWUgPT09IHByZXZfdmFsdWUpIGNvbnRpbnVlO1xuXG5cdFx0Y3VycmVudFtrZXldID0gdmFsdWU7XG5cblx0XHR2YXIgcHJlZml4ID0ga2V5WzBdICsga2V5WzFdOyAvLyB0aGlzIGlzIGZhc3RlciB0aGFuIGtleS5zbGljZSgwLCAyKVxuXHRcdGlmIChwcmVmaXggPT09ICckJCcpIGNvbnRpbnVlO1xuXG5cdFx0aWYgKHByZWZpeCA9PT0gJ29uJykge1xuXHRcdFx0LyoqIEB0eXBlIHt7IGNhcHR1cmU/OiB0cnVlIH19ICovXG5cdFx0XHRjb25zdCBvcHRzID0ge307XG5cdFx0XHRjb25zdCBldmVudF9oYW5kbGVfa2V5ID0gJyQkJyArIGtleTtcblx0XHRcdGxldCBldmVudF9uYW1lID0ga2V5LnNsaWNlKDIpO1xuXHRcdFx0dmFyIGRlbGVnYXRlZCA9IGlzX2RlbGVnYXRlZChldmVudF9uYW1lKTtcblxuXHRcdFx0aWYgKGlzX2NhcHR1cmVfZXZlbnQoZXZlbnRfbmFtZSkpIHtcblx0XHRcdFx0ZXZlbnRfbmFtZSA9IGV2ZW50X25hbWUuc2xpY2UoMCwgLTcpO1xuXHRcdFx0XHRvcHRzLmNhcHR1cmUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWRlbGVnYXRlZCAmJiBwcmV2X3ZhbHVlKSB7XG5cdFx0XHRcdC8vIExpc3RlbmluZyB0byBzYW1lIGV2ZW50IGJ1dCBkaWZmZXJlbnQgaGFuZGxlciAtPiBvdXIgaGFuZGxlIGZ1bmN0aW9uIGJlbG93IHRha2VzIGNhcmUgb2YgdGhpc1xuXHRcdFx0XHQvLyBJZiB3ZSB3ZXJlIHRvIHJlbW92ZSBhbmQgYWRkIGxpc3RlbmVycyBpbiB0aGlzIGNhc2UsIGl0IGNvdWxkIGhhcHBlbiB0aGF0IHRoZSBldmVudCBpcyBcInN3YWxsb3dlZFwiXG5cdFx0XHRcdC8vICh0aGUgYnJvd3NlciBzZWVtcyB0byBub3Qga25vdyB5ZXQgdGhhdCBhIG5ldyBvbmUgZXhpc3RzIG5vdykgYW5kIGRvZXNuJ3QgcmVhY2ggdGhlIGhhbmRsZXJcblx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9pc3N1ZXMvMTE5MDNcblx0XHRcdFx0aWYgKHZhbHVlICE9IG51bGwpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudF9uYW1lLCBjdXJyZW50W2V2ZW50X2hhbmRsZV9rZXldLCBvcHRzKTtcblx0XHRcdFx0Y3VycmVudFtldmVudF9oYW5kbGVfa2V5XSA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRcdGlmICghZGVsZWdhdGVkKSB7XG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0ICogQHRoaXMge2FueX1cblx0XHRcdFx0XHQgKiBAcGFyYW0ge0V2ZW50fSBldnRcblx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHRmdW5jdGlvbiBoYW5kbGUoZXZ0KSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50W2tleV0uY2FsbCh0aGlzLCBldnQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGN1cnJlbnRbZXZlbnRfaGFuZGxlX2tleV0gPSBjcmVhdGVfZXZlbnQoZXZlbnRfbmFtZSwgZWxlbWVudCwgaGFuZGxlLCBvcHRzKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0ZWxlbWVudFtgX18ke2V2ZW50X25hbWV9YF0gPSB2YWx1ZTtcblx0XHRcdFx0XHRkZWxlZ2F0ZShbZXZlbnRfbmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGRlbGVnYXRlZCkge1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdGVsZW1lbnRbYF9fJHtldmVudF9uYW1lfWBdID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG5cdFx0XHQvLyBhdm9pZCB1c2luZyB0aGUgc2V0dGVyXG5cdFx0XHRzZXRfYXR0cmlidXRlKGVsZW1lbnQsIGtleSwgdmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnYXV0b2ZvY3VzJykge1xuXHRcdFx0YXV0b2ZvY3VzKC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChlbGVtZW50KSwgQm9vbGVhbih2YWx1ZSkpO1xuXHRcdH0gZWxzZSBpZiAoIWlzX2N1c3RvbV9lbGVtZW50ICYmIChrZXkgPT09ICdfX3ZhbHVlJyB8fCAoa2V5ID09PSAndmFsdWUnICYmIHZhbHVlICE9IG51bGwpKSkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSBXZSdyZSBub3QgcnVubmluZyB0aGlzIGZvciBjdXN0b20gZWxlbWVudHMgYmVjYXVzZSBfX3ZhbHVlIGlzIGFjdHVhbGx5XG5cdFx0XHQvLyBob3cgTGl0IHN0b3JlcyB0aGUgY3VycmVudCB2YWx1ZSBvbiB0aGUgZWxlbWVudCwgYW5kIG1lc3Npbmcgd2l0aCB0aGF0IHdvdWxkIGJyZWFrIHRoaW5ncy5cblx0XHRcdGVsZW1lbnQudmFsdWUgPSBlbGVtZW50Ll9fdmFsdWUgPSB2YWx1ZTtcblx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ3NlbGVjdGVkJyAmJiBpc19vcHRpb25fZWxlbWVudCkge1xuXHRcdFx0c2V0X3NlbGVjdGVkKC8qKiBAdHlwZSB7SFRNTE9wdGlvbkVsZW1lbnR9ICovIChlbGVtZW50KSwgdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbmFtZSA9IGtleTtcblx0XHRcdGlmICghcHJlc2VydmVfYXR0cmlidXRlX2Nhc2UpIHtcblx0XHRcdFx0bmFtZSA9IG5vcm1hbGl6ZV9hdHRyaWJ1dGUobmFtZSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpc19kZWZhdWx0ID0gbmFtZSA9PT0gJ2RlZmF1bHRWYWx1ZScgfHwgbmFtZSA9PT0gJ2RlZmF1bHRDaGVja2VkJztcblxuXHRcdFx0aWYgKHZhbHVlID09IG51bGwgJiYgIWlzX2N1c3RvbV9lbGVtZW50ICYmICFpc19kZWZhdWx0KSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXNba2V5XSA9IG51bGw7XG5cblx0XHRcdFx0aWYgKG5hbWUgPT09ICd2YWx1ZScgfHwgbmFtZSA9PT0gJ2NoZWNrZWQnKSB7XG5cdFx0XHRcdFx0Ly8gcmVtb3ZpbmcgdmFsdWUvY2hlY2tlZCBhbHNvIHJlbW92ZXMgZGVmYXVsdFZhbHVlL2RlZmF1bHRDaGVja2VkIFx1MjAxNCBwcmVzZXJ2ZVxuXHRcdFx0XHRcdGxldCBpbnB1dCA9IC8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi8gKGVsZW1lbnQpO1xuXHRcdFx0XHRcdGNvbnN0IHVzZV9kZWZhdWx0ID0gcHJldiA9PT0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdGlmIChuYW1lID09PSAndmFsdWUnKSB7XG5cdFx0XHRcdFx0XHRsZXQgcHJldmlvdXMgPSBpbnB1dC5kZWZhdWx0VmFsdWU7XG5cdFx0XHRcdFx0XHRpbnB1dC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0XHRcdFx0XHRpbnB1dC5kZWZhdWx0VmFsdWUgPSBwcmV2aW91cztcblx0XHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRcdGlucHV0LnZhbHVlID0gaW5wdXQuX192YWx1ZSA9IHVzZV9kZWZhdWx0ID8gcHJldmlvdXMgOiBudWxsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsZXQgcHJldmlvdXMgPSBpbnB1dC5kZWZhdWx0Q2hlY2tlZDtcblx0XHRcdFx0XHRcdGlucHV0LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHRcdFx0XHRcdGlucHV0LmRlZmF1bHRDaGVja2VkID0gcHJldmlvdXM7XG5cdFx0XHRcdFx0XHRpbnB1dC5jaGVja2VkID0gdXNlX2RlZmF1bHQgPyBwcmV2aW91cyA6IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpc19kZWZhdWx0IHx8XG5cdFx0XHRcdChzZXR0ZXJzLmluY2x1ZGVzKG5hbWUpICYmIChpc19jdXN0b21fZWxlbWVudCB8fCB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSlcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdGVsZW1lbnRbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHNldF9hdHRyaWJ1dGUoZWxlbWVudCwgbmFtZSwgdmFsdWUsIHNraXBfd2FybmluZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGlzX2h5ZHJhdGluZ19jdXN0b21fZWxlbWVudCkge1xuXHRcdHNldF9oeWRyYXRpbmcodHJ1ZSk7XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudDtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGdldF9hdHRyaWJ1dGVzKGVsZW1lbnQpIHtcblx0cmV0dXJuIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZyB8IHN5bWJvbCwgdW5rbm93bj59ICoqLyAoXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdGVsZW1lbnQuX19hdHRyaWJ1dGVzID8/PSB7XG5cdFx0XHRbSVNfQ1VTVE9NX0VMRU1FTlRdOiBlbGVtZW50Lm5vZGVOYW1lLmluY2x1ZGVzKCctJyksXG5cdFx0XHRbSVNfSFRNTF06IGVsZW1lbnQubmFtZXNwYWNlVVJJID09PSBOQU1FU1BBQ0VfSFRNTFxuXHRcdH1cblx0KTtcbn1cblxuLyoqIEB0eXBlIHtNYXA8c3RyaW5nLCBzdHJpbmdbXT59ICovXG52YXIgc2V0dGVyc19jYWNoZSA9IG5ldyBNYXAoKTtcblxuLyoqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAqL1xuZnVuY3Rpb24gZ2V0X3NldHRlcnMoZWxlbWVudCkge1xuXHR2YXIgc2V0dGVycyA9IHNldHRlcnNfY2FjaGUuZ2V0KGVsZW1lbnQubm9kZU5hbWUpO1xuXHRpZiAoc2V0dGVycykgcmV0dXJuIHNldHRlcnM7XG5cdHNldHRlcnNfY2FjaGUuc2V0KGVsZW1lbnQubm9kZU5hbWUsIChzZXR0ZXJzID0gW10pKTtcblxuXHR2YXIgZGVzY3JpcHRvcnM7XG5cdHZhciBwcm90byA9IGVsZW1lbnQ7IC8vIEluIHRoZSBjYXNlIG9mIGN1c3RvbSBlbGVtZW50cyB0aGVyZSBtaWdodCBiZSBzZXR0ZXJzIG9uIHRoZSBpbnN0YW5jZVxuXHR2YXIgZWxlbWVudF9wcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG5cdC8vIFN0b3AgYXQgRWxlbWVudCwgZnJvbSB0aGVyZSBvbiB0aGVyZSdzIG9ubHkgdW5uZWNlc3Nhcnkgc2V0dGVycyB3ZSdyZSBub3QgaW50ZXJlc3RlZCBpblxuXHQvLyBEbyBub3QgdXNlIGNvbnRydWN0b3IubmFtZSBoZXJlIGFzIHRoYXQncyB1bnJlbGlhYmxlIGluIHNvbWUgYnJvd3NlciBlbnZpcm9ubWVudHNcblx0d2hpbGUgKGVsZW1lbnRfcHJvdG8gIT09IHByb3RvKSB7XG5cdFx0ZGVzY3JpcHRvcnMgPSBnZXRfZGVzY3JpcHRvcnMocHJvdG8pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGRlc2NyaXB0b3JzKSB7XG5cdFx0XHRpZiAoZGVzY3JpcHRvcnNba2V5XS5zZXQpIHtcblx0XHRcdFx0c2V0dGVycy5wdXNoKGtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJvdG8gPSBnZXRfcHJvdG90eXBlX29mKHByb3RvKTtcblx0fVxuXG5cdHJldHVybiBzZXR0ZXJzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqL1xuZnVuY3Rpb24gY2hlY2tfc3JjX2luX2Rldl9oeWRyYXRpb24oZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRpZiAoIURFVikgcmV0dXJuO1xuXHRpZiAoYXR0cmlidXRlID09PSAnc3Jjc2V0JyAmJiBzcmNzZXRfdXJsX2VxdWFsKGVsZW1lbnQsIHZhbHVlKSkgcmV0dXJuO1xuXHRpZiAoc3JjX3VybF9lcXVhbChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpID8/ICcnLCB2YWx1ZSkpIHJldHVybjtcblxuXHR3Lmh5ZHJhdGlvbl9hdHRyaWJ1dGVfY2hhbmdlZChcblx0XHRhdHRyaWJ1dGUsXG5cdFx0ZWxlbWVudC5vdXRlckhUTUwucmVwbGFjZShlbGVtZW50LmlubmVySFRNTCwgZWxlbWVudC5pbm5lckhUTUwgJiYgJy4uLicpLFxuXHRcdFN0cmluZyh2YWx1ZSlcblx0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudF9zcmNcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBzcmNfdXJsX2VxdWFsKGVsZW1lbnRfc3JjLCB1cmwpIHtcblx0aWYgKGVsZW1lbnRfc3JjID09PSB1cmwpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gbmV3IFVSTChlbGVtZW50X3NyYywgZG9jdW1lbnQuYmFzZVVSSSkuaHJlZiA9PT0gbmV3IFVSTCh1cmwsIGRvY3VtZW50LmJhc2VVUkkpLmhyZWY7XG59XG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gc3Jjc2V0ICovXG5mdW5jdGlvbiBzcGxpdF9zcmNzZXQoc3Jjc2V0KSB7XG5cdHJldHVybiBzcmNzZXQuc3BsaXQoJywnKS5tYXAoKHNyYykgPT4gc3JjLnRyaW0oKS5zcGxpdCgnICcpLmZpbHRlcihCb29sZWFuKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MU291cmNlRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzcmNzZXRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBzcmNzZXRfdXJsX2VxdWFsKGVsZW1lbnQsIHNyY3NldCkge1xuXHR2YXIgZWxlbWVudF91cmxzID0gc3BsaXRfc3Jjc2V0KGVsZW1lbnQuc3Jjc2V0KTtcblx0dmFyIHVybHMgPSBzcGxpdF9zcmNzZXQoc3Jjc2V0KTtcblxuXHRyZXR1cm4gKFxuXHRcdHVybHMubGVuZ3RoID09PSBlbGVtZW50X3VybHMubGVuZ3RoICYmXG5cdFx0dXJscy5ldmVyeShcblx0XHRcdChbdXJsLCB3aWR0aF0sIGkpID0+XG5cdFx0XHRcdHdpZHRoID09PSBlbGVtZW50X3VybHNbaV1bMV0gJiZcblx0XHRcdFx0Ly8gV2UgbmVlZCB0byB0ZXN0IGJvdGggd2F5cyBiZWNhdXNlIFZpdGUgd2lsbCBjcmVhdGUgYW4gYSBmdWxsIFVSTCB3aXRoXG5cdFx0XHRcdC8vIGBuZXcgVVJMKGFzc2V0LCBpbXBvcnQubWV0YS51cmwpLmhyZWZgIGZvciB0aGUgY2xpZW50IHdoZW4gYGJhc2U6ICcuLydgLCBhbmQgdGhlXG5cdFx0XHRcdC8vIHJlbGF0aXZlIFVSTHMgaW5zaWRlIHNyY3NldCBhcmUgbm90IGF1dG9tYXRpY2FsbHkgcmVzb2x2ZWQgdG8gYWJzb2x1dGUgVVJMcyBieVxuXHRcdFx0XHQvLyBicm93c2VycyAoaW4gY29udHJhc3QgdG8gaW1nLnNyYykuIFRoaXMgbWVhbnMgYm90aCBTU1IgYW5kIERPTSBjb2RlIGNvdWxkXG5cdFx0XHRcdC8vIGNvbnRhaW4gcmVsYXRpdmUgb3IgYWJzb2x1dGUgVVJMcy5cblx0XHRcdFx0KHNyY191cmxfZXF1YWwoZWxlbWVudF91cmxzW2ldWzBdLCB1cmwpIHx8IHNyY191cmxfZXF1YWwodXJsLCBlbGVtZW50X3VybHNbaV1bMF0pKVxuXHRcdClcblx0KTtcbn1cbiIsICIvKiogQGltcG9ydCB7IFJlYWRhYmxlLCBTdGFydFN0b3BOb3RpZmllciwgU3Vic2NyaWJlciwgVW5zdWJzY3JpYmVyLCBVcGRhdGVyLCBXcml0YWJsZSB9IGZyb20gJy4uL3B1YmxpYy5qcycgKi9cbi8qKiBAaW1wb3J0IHsgU3RvcmVzLCBTdG9yZXNWYWx1ZXMsIFN1YnNjcmliZUludmFsaWRhdGVUdXBsZSB9IGZyb20gJy4uL3ByaXZhdGUuanMnICovXG5pbXBvcnQgeyBub29wLCBydW5fYWxsIH0gZnJvbSAnLi4vLi4vaW50ZXJuYWwvc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7IHNhZmVfbm90X2VxdWFsIH0gZnJvbSAnLi4vLi4vaW50ZXJuYWwvY2xpZW50L3JlYWN0aXZpdHkvZXF1YWxpdHkuanMnO1xuaW1wb3J0IHsgc3Vic2NyaWJlX3RvX3N0b3JlIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIEB0eXBlIHtBcnJheTxTdWJzY3JpYmVJbnZhbGlkYXRlVHVwbGU8YW55PiB8IGFueT59XG4gKi9cbmNvbnN0IHN1YnNjcmliZXJfcXVldWUgPSBbXTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYFJlYWRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtUfSBbdmFsdWVdIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXI8VD59IFtzdGFydF1cbiAqIEByZXR1cm5zIHtSZWFkYWJsZTxUPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRhYmxlKHZhbHVlLCBzdGFydCkge1xuXHRyZXR1cm4ge1xuXHRcdHN1YnNjcmliZTogd3JpdGFibGUodmFsdWUsIHN0YXJ0KS5zdWJzY3JpYmVcblx0fTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgV3JpdGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIGJvdGggdXBkYXRpbmcgYW5kIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1R9IFt2YWx1ZV0gaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcjxUPn0gW3N0YXJ0XVxuICogQHJldHVybnMge1dyaXRhYmxlPFQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JpdGFibGUodmFsdWUsIHN0YXJ0ID0gbm9vcCkge1xuXHQvKiogQHR5cGUge1Vuc3Vic2NyaWJlciB8IG51bGx9ICovXG5cdGxldCBzdG9wID0gbnVsbDtcblxuXHQvKiogQHR5cGUge1NldDxTdWJzY3JpYmVJbnZhbGlkYXRlVHVwbGU8VD4+fSAqL1xuXHRjb25zdCBzdWJzY3JpYmVycyA9IG5ldyBTZXQoKTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtUfSBuZXdfdmFsdWVcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRmdW5jdGlvbiBzZXQobmV3X3ZhbHVlKSB7XG5cdFx0aWYgKHNhZmVfbm90X2VxdWFsKHZhbHVlLCBuZXdfdmFsdWUpKSB7XG5cdFx0XHR2YWx1ZSA9IG5ld192YWx1ZTtcblx0XHRcdGlmIChzdG9wKSB7XG5cdFx0XHRcdC8vIHN0b3JlIGlzIHJlYWR5XG5cdFx0XHRcdGNvbnN0IHJ1bl9xdWV1ZSA9ICFzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDtcblx0XHRcdFx0Zm9yIChjb25zdCBzdWJzY3JpYmVyIG9mIHN1YnNjcmliZXJzKSB7XG5cdFx0XHRcdFx0c3Vic2NyaWJlclsxXSgpO1xuXHRcdFx0XHRcdHN1YnNjcmliZXJfcXVldWUucHVzaChzdWJzY3JpYmVyLCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJ1bl9xdWV1ZSkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0XHRcdFx0c3Vic2NyaWJlcl9xdWV1ZVtpXVswXShzdWJzY3JpYmVyX3F1ZXVlW2kgKyAxXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1VwZGF0ZXI8VD59IGZuXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG5cdFx0c2V0KGZuKC8qKiBAdHlwZSB7VH0gKi8gKHZhbHVlKSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7U3Vic2NyaWJlcjxUPn0gcnVuXG5cdCAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2ludmFsaWRhdGVdXG5cdCAqIEByZXR1cm5zIHtVbnN1YnNjcmliZXJ9XG5cdCAqL1xuXHRmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuXHRcdC8qKiBAdHlwZSB7U3Vic2NyaWJlSW52YWxpZGF0ZVR1cGxlPFQ+fSAqL1xuXHRcdGNvbnN0IHN1YnNjcmliZXIgPSBbcnVuLCBpbnZhbGlkYXRlXTtcblx0XHRzdWJzY3JpYmVycy5hZGQoc3Vic2NyaWJlcik7XG5cdFx0aWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDEpIHtcblx0XHRcdHN0b3AgPSBzdGFydChzZXQsIHVwZGF0ZSkgfHwgbm9vcDtcblx0XHR9XG5cdFx0cnVuKC8qKiBAdHlwZSB7VH0gKi8gKHZhbHVlKSk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHN1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcblx0XHRcdGlmIChzdWJzY3JpYmVycy5zaXplID09PSAwICYmIHN0b3ApIHtcblx0XHRcdFx0c3RvcCgpO1xuXHRcdFx0XHRzdG9wID0gbnVsbDtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cdHJldHVybiB7IHNldCwgdXBkYXRlLCBzdWJzY3JpYmUgfTtcbn1cblxuLyoqXG4gKiBEZXJpdmVkIHZhbHVlIHN0b3JlIGJ5IHN5bmNocm9uaXppbmcgb25lIG9yIG1vcmUgcmVhZGFibGUgc3RvcmVzIGFuZFxuICogYXBwbHlpbmcgYW4gYWdncmVnYXRpb24gZnVuY3Rpb24gb3ZlciBpdHMgaW5wdXQgdmFsdWVzLlxuICpcbiAqIEB0ZW1wbGF0ZSB7U3RvcmVzfSBTXG4gKiBAdGVtcGxhdGUgVFxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0ge1N9IHN0b3Jlc1xuICogQHBhcmFtIHsodmFsdWVzOiBTdG9yZXNWYWx1ZXM8Uz4sIHNldDogKHZhbHVlOiBUKSA9PiB2b2lkLCB1cGRhdGU6IChmbjogVXBkYXRlcjxUPikgPT4gdm9pZCkgPT4gVW5zdWJzY3JpYmVyIHwgdm9pZH0gZm5cbiAqIEBwYXJhbSB7VH0gW2luaXRpYWxfdmFsdWVdXG4gKiBAcmV0dXJucyB7UmVhZGFibGU8VD59XG4gKi9cbi8qKlxuICogRGVyaXZlZCB2YWx1ZSBzdG9yZSBieSBzeW5jaHJvbml6aW5nIG9uZSBvciBtb3JlIHJlYWRhYmxlIHN0b3JlcyBhbmRcbiAqIGFwcGx5aW5nIGFuIGFnZ3JlZ2F0aW9uIGZ1bmN0aW9uIG92ZXIgaXRzIGlucHV0IHZhbHVlcy5cbiAqXG4gKiBAdGVtcGxhdGUge1N0b3Jlc30gU1xuICogQHRlbXBsYXRlIFRcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtIHtTfSBzdG9yZXNcbiAqIEBwYXJhbSB7KHZhbHVlczogU3RvcmVzVmFsdWVzPFM+KSA9PiBUfSBmblxuICogQHBhcmFtIHtUfSBbaW5pdGlhbF92YWx1ZV1cbiAqIEByZXR1cm5zIHtSZWFkYWJsZTxUPn1cbiAqL1xuLyoqXG4gKiBAdGVtcGxhdGUge1N0b3Jlc30gU1xuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7U30gc3RvcmVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtUfSBbaW5pdGlhbF92YWx1ZV1cbiAqIEByZXR1cm5zIHtSZWFkYWJsZTxUPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZWQoc3RvcmVzLCBmbiwgaW5pdGlhbF92YWx1ZSkge1xuXHRjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShzdG9yZXMpO1xuXHQvKiogQHR5cGUge0FycmF5PFJlYWRhYmxlPGFueT4+fSAqL1xuXHRjb25zdCBzdG9yZXNfYXJyYXkgPSBzaW5nbGUgPyBbc3RvcmVzXSA6IHN0b3Jlcztcblx0aWYgKCFzdG9yZXNfYXJyYXkuZXZlcnkoQm9vbGVhbikpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2Rlcml2ZWQoKSBleHBlY3RzIHN0b3JlcyBhcyBpbnB1dCwgZ290IGEgZmFsc3kgdmFsdWUnKTtcblx0fVxuXHRjb25zdCBhdXRvID0gZm4ubGVuZ3RoIDwgMjtcblx0cmV0dXJuIHJlYWRhYmxlKGluaXRpYWxfdmFsdWUsIChzZXQsIHVwZGF0ZSkgPT4ge1xuXHRcdGxldCBzdGFydGVkID0gZmFsc2U7XG5cdFx0LyoqIEB0eXBlIHtUW119ICovXG5cdFx0Y29uc3QgdmFsdWVzID0gW107XG5cdFx0bGV0IHBlbmRpbmcgPSAwO1xuXHRcdGxldCBjbGVhbnVwID0gbm9vcDtcblx0XHRjb25zdCBzeW5jID0gKCkgPT4ge1xuXHRcdFx0aWYgKHBlbmRpbmcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y2xlYW51cCgpO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZm4oc2luZ2xlID8gdmFsdWVzWzBdIDogdmFsdWVzLCBzZXQsIHVwZGF0ZSk7XG5cdFx0XHRpZiAoYXV0bykge1xuXHRcdFx0XHRzZXQocmVzdWx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsZWFudXAgPSB0eXBlb2YgcmVzdWx0ID09PSAnZnVuY3Rpb24nID8gcmVzdWx0IDogbm9vcDtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBzdG9yZXNfYXJyYXkubWFwKChzdG9yZSwgaSkgPT5cblx0XHRcdHN1YnNjcmliZV90b19zdG9yZShcblx0XHRcdFx0c3RvcmUsXG5cdFx0XHRcdCh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHZhbHVlc1tpXSA9IHZhbHVlO1xuXHRcdFx0XHRcdHBlbmRpbmcgJj0gfigxIDw8IGkpO1xuXHRcdFx0XHRcdGlmIChzdGFydGVkKSB7XG5cdFx0XHRcdFx0XHRzeW5jKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0cGVuZGluZyB8PSAxIDw8IGk7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHRcdHN0YXJ0ZWQgPSB0cnVlO1xuXHRcdHN5bmMoKTtcblx0XHRyZXR1cm4gZnVuY3Rpb24gc3RvcCgpIHtcblx0XHRcdHJ1bl9hbGwodW5zdWJzY3JpYmVycyk7XG5cdFx0XHRjbGVhbnVwKCk7XG5cdFx0XHQvLyBXZSBuZWVkIHRvIHNldCB0aGlzIHRvIGZhbHNlIGJlY2F1c2UgY2FsbGJhY2tzIGNhbiBzdGlsbCBoYXBwZW4gZGVzcGl0ZSBoYXZpbmcgdW5zdWJzY3JpYmVkOlxuXHRcdFx0Ly8gQ2FsbGJhY2tzIG1pZ2h0IGFscmVhZHkgYmUgcGxhY2VkIGluIHRoZSBxdWV1ZSB3aGljaCBkb2Vzbid0IGtub3cgaXQgc2hvdWxkIG5vIGxvbmdlclxuXHRcdFx0Ly8gaW52b2tlIHRoaXMgZGVyaXZlZCBzdG9yZS5cblx0XHRcdHN0YXJ0ZWQgPSBmYWxzZTtcblx0XHR9O1xuXHR9KTtcbn1cblxuLyoqXG4gKiBUYWtlcyBhIHN0b3JlIGFuZCByZXR1cm5zIGEgbmV3IG9uZSBkZXJpdmVkIGZyb20gdGhlIG9sZCBvbmUgdGhhdCBpcyByZWFkYWJsZS5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtSZWFkYWJsZTxUPn0gc3RvcmUgIC0gc3RvcmUgdG8gbWFrZSByZWFkb25seVxuICogQHJldHVybnMge1JlYWRhYmxlPFQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZG9ubHkoc3RvcmUpIHtcblx0cmV0dXJuIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE8gaSBzdXNwZWN0IHRoZSBiaW5kIGlzIHVubmVjZXNzYXJ5XG5cdFx0c3Vic2NyaWJlOiBzdG9yZS5zdWJzY3JpYmUuYmluZChzdG9yZSlcblx0fTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgZnJvbSBhIHN0b3JlIGJ5IHN1YnNjcmliaW5nIGFuZCBpbW1lZGlhdGVseSB1bnN1YnNjcmliaW5nLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1JlYWRhYmxlPFQ+fSBzdG9yZVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQoc3RvcmUpIHtcblx0bGV0IHZhbHVlO1xuXHRzdWJzY3JpYmVfdG9fc3RvcmUoc3RvcmUsIChfKSA9PiAodmFsdWUgPSBfKSkoKTtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRyZXR1cm4gdmFsdWU7XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBTdG9yZVJlZmVyZW5jZXNDb250YWluZXIgfSBmcm9tICcjY2xpZW50JyAqL1xuLyoqIEBpbXBvcnQgeyBTdG9yZSB9IGZyb20gJyNzaGFyZWQnICovXG5pbXBvcnQgeyBzdWJzY3JpYmVfdG9fc3RvcmUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS91dGlscy5qcyc7XG5pbXBvcnQgeyBnZXQgYXMgZ2V0X3N0b3JlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2hhcmVkL2luZGV4LmpzJztcbmltcG9ydCB7IGRlZmluZV9wcm9wZXJ0eSwgbm9vcCB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi9ydW50aW1lLmpzJztcbmltcG9ydCB7IHRlYXJkb3duIH0gZnJvbSAnLi9lZmZlY3RzLmpzJztcbmltcG9ydCB7IG11dGFibGVfc291cmNlLCBzZXQgfSBmcm9tICcuL3NvdXJjZXMuanMnO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9wIGN1cnJlbnRseSBiZWluZyByZWFkIGlzIGEgc3RvcmUgYmluZGluZywgYXMgaW5cbiAqIGA8Q2hpbGQgYmluZDp4PXskeX0gLz5gLiBJZiBpdCBpcywgd2UgdHJlYXQgdGhlIHByb3AgYXMgbXV0YWJsZSBldmVuIGluXG4gKiBydW5lcyBtb2RlLCBhbmQgc2tpcCBgYmluZGluZ19wcm9wZXJ0eV9ub25fcmVhY3RpdmVgIHZhbGlkYXRpb25cbiAqL1xubGV0IGlzX3N0b3JlX2JpbmRpbmcgPSBmYWxzZTtcblxubGV0IElTX1VOTU9VTlRFRCA9IFN5bWJvbCgpO1xuXG4vKipcbiAqIEdldHMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgYSBzdG9yZS4gSWYgdGhlIHN0b3JlIGlzbid0IHN1YnNjcmliZWQgdG8geWV0LCBpdCB3aWxsIGNyZWF0ZSBhIHByb3h5XG4gKiBzaWduYWwgdGhhdCB3aWxsIGJlIHVwZGF0ZWQgd2hlbiB0aGUgc3RvcmUgaXMuIFRoZSBzdG9yZSByZWZlcmVuY2VzIGNvbnRhaW5lciBpcyBuZWVkZWQgdG9cbiAqIHRyYWNrIHJlYXNzaWdubWVudHMgdG8gc3RvcmVzIGFuZCB0byB0cmFjayB0aGUgY29ycmVjdCBjb21wb25lbnQgY29udGV4dC5cbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1N0b3JlPFY+IHwgbnVsbCB8IHVuZGVmaW5lZH0gc3RvcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZV9uYW1lXG4gKiBAcGFyYW0ge1N0b3JlUmVmZXJlbmNlc0NvbnRhaW5lcn0gc3RvcmVzXG4gKiBAcmV0dXJucyB7Vn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX2dldChzdG9yZSwgc3RvcmVfbmFtZSwgc3RvcmVzKSB7XG5cdGNvbnN0IGVudHJ5ID0gKHN0b3Jlc1tzdG9yZV9uYW1lXSA/Pz0ge1xuXHRcdHN0b3JlOiBudWxsLFxuXHRcdHNvdXJjZTogbXV0YWJsZV9zb3VyY2UodW5kZWZpbmVkKSxcblx0XHR1bnN1YnNjcmliZTogbm9vcFxuXHR9KTtcblxuXHQvLyBpZiB0aGUgY29tcG9uZW50IHRoYXQgc2V0dXAgdGhpcyBpcyBhbHJlYWR5IHVubW91bnRlZCB3ZSBkb24ndCB3YW50IHRvIHJlZ2lzdGVyIGEgc3Vic2NyaXB0aW9uXG5cdGlmIChlbnRyeS5zdG9yZSAhPT0gc3RvcmUgJiYgIShJU19VTk1PVU5URUQgaW4gc3RvcmVzKSkge1xuXHRcdGVudHJ5LnVuc3Vic2NyaWJlKCk7XG5cdFx0ZW50cnkuc3RvcmUgPSBzdG9yZSA/PyBudWxsO1xuXG5cdFx0aWYgKHN0b3JlID09IG51bGwpIHtcblx0XHRcdGVudHJ5LnNvdXJjZS52ID0gdW5kZWZpbmVkOyAvLyBzZWUgc3luY2hyb25vdXMgY2FsbGJhY2sgY29tbWVudCBiZWxvd1xuXHRcdFx0ZW50cnkudW5zdWJzY3JpYmUgPSBub29wO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgaXNfc3luY2hyb25vdXNfY2FsbGJhY2sgPSB0cnVlO1xuXG5cdFx0XHRlbnRyeS51bnN1YnNjcmliZSA9IHN1YnNjcmliZV90b19zdG9yZShzdG9yZSwgKHYpID0+IHtcblx0XHRcdFx0aWYgKGlzX3N5bmNocm9ub3VzX2NhbGxiYWNrKSB7XG5cdFx0XHRcdFx0Ly8gSWYgdGhlIGZpcnN0IHVwZGF0ZXMgdG8gdGhlIHN0b3JlIHZhbHVlIChwb3NzaWJseSBtdWx0aXBsZSBvZiB0aGVtKSBhcmUgc3luY2hyb25vdXNseVxuXHRcdFx0XHRcdC8vIGluc2lkZSBhIGRlcml2ZWQsIHdlIHdpbGwgaGl0IHRoZSBgc3RhdGVfdW5zYWZlX211dGF0aW9uYCBlcnJvciBpZiB3ZSBgc2V0YCB0aGUgdmFsdWVcblx0XHRcdFx0XHRlbnRyeS5zb3VyY2UudiA9IHY7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2V0KGVudHJ5LnNvdXJjZSwgdik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRpc19zeW5jaHJvbm91c19jYWxsYmFjayA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8vIGlmIHRoZSBjb21wb25lbnQgdGhhdCBzZXR1cCB0aGlzIHN0b3JlcyBpcyBhbHJlYWR5IHVubW91bnRlZCB0aGUgc291cmNlIHdpbGwgYmUgb3V0IG9mIHN5bmNcblx0Ly8gc28gd2UganVzdCB1c2UgdGhlIGBnZXRgIGZvciB0aGUgc3RvcmVzLCBsZXNzIHBlcmZvcm1hbnQgYnV0IGl0IGF2b2lkcyB0byBjcmVhdGUgYSBtZW1vcnkgbGVha1xuXHQvLyBhbmQgaXQgd2lsbCBrZWVwIHRoZSB2YWx1ZSBjb25zaXN0ZW50XG5cdGlmIChzdG9yZSAmJiBJU19VTk1PVU5URUQgaW4gc3RvcmVzKSB7XG5cdFx0cmV0dXJuIGdldF9zdG9yZShzdG9yZSk7XG5cdH1cblxuXHRyZXR1cm4gZ2V0KGVudHJ5LnNvdXJjZSk7XG59XG5cbi8qKlxuICogVW5zdWJzY3JpYmUgZnJvbSBhIHN0b3JlIGlmIGl0J3Mgbm90IHRoZSBzYW1lIGFzIHRoZSBvbmUgaW4gdGhlIHN0b3JlIHJlZmVyZW5jZXMgY29udGFpbmVyLlxuICogV2UgbmVlZCB0aGlzIGluIGFkZGl0aW9uIHRvIGBzdG9yZV9nZXRgIGJlY2F1c2Ugc29tZW9uZSBjb3VsZCB1bnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgYnV0XG4gKiB0aGVuIG5ldmVyIHN1YnNjcmliZSB0byB0aGUgbmV3IG9uZSAoaWYgYW55KSwgY2F1c2luZyB0aGUgc3Vic2NyaXB0aW9uIHRvIHN0YXkgb3BlbiB3cm9uZ2Z1bGx5LlxuICogQHBhcmFtIHtTdG9yZTxhbnk+IHwgbnVsbCB8IHVuZGVmaW5lZH0gc3RvcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZV9uYW1lXG4gKiBAcGFyYW0ge1N0b3JlUmVmZXJlbmNlc0NvbnRhaW5lcn0gc3RvcmVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV91bnN1YihzdG9yZSwgc3RvcmVfbmFtZSwgc3RvcmVzKSB7XG5cdC8qKiBAdHlwZSB7U3RvcmVSZWZlcmVuY2VzQ29udGFpbmVyWycnXSB8IHVuZGVmaW5lZH0gKi9cblx0bGV0IGVudHJ5ID0gc3RvcmVzW3N0b3JlX25hbWVdO1xuXG5cdGlmIChlbnRyeSAmJiBlbnRyeS5zdG9yZSAhPT0gc3RvcmUpIHtcblx0XHQvLyBEb24ndCByZXNldCBzdG9yZSB5ZXQsIHNvIHRoYXQgc3RvcmVfZ2V0IGFib3ZlIGNhbiByZXN1YnNjcmliZSB0byBuZXcgc3RvcmUgaWYgbmVjZXNzYXJ5XG5cdFx0ZW50cnkudW5zdWJzY3JpYmUoKTtcblx0XHRlbnRyeS51bnN1YnNjcmliZSA9IG5vb3A7XG5cdH1cblxuXHRyZXR1cm4gc3RvcmU7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbmV3IHZhbHVlIG9mIGEgc3RvcmUgYW5kIHJldHVybnMgdGhhdCB2YWx1ZS5cbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1N0b3JlPFY+fSBzdG9yZVxuICogQHBhcmFtIHtWfSB2YWx1ZVxuICogQHJldHVybnMge1Z9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV9zZXQoc3RvcmUsIHZhbHVlKSB7XG5cdHN0b3JlLnNldCh2YWx1ZSk7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1N0b3JlUmVmZXJlbmNlc0NvbnRhaW5lcn0gc3RvcmVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVfbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZGF0ZV9zdG9yZShzdG9yZXMsIHN0b3JlX25hbWUpIHtcblx0dmFyIGVudHJ5ID0gc3RvcmVzW3N0b3JlX25hbWVdO1xuXHRpZiAoZW50cnkuc3RvcmUgIT09IG51bGwpIHtcblx0XHRzdG9yZV9zZXQoZW50cnkuc3RvcmUsIGVudHJ5LnNvdXJjZS52KTtcblx0fVxufVxuXG4vKipcbiAqIFVuc3Vic2NyaWJlcyBmcm9tIGFsbCBhdXRvLXN1YnNjcmliZWQgc3RvcmVzIG9uIGRlc3Ryb3lcbiAqIEByZXR1cm5zIHtbU3RvcmVSZWZlcmVuY2VzQ29udGFpbmVyLCAoKT0+dm9pZF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cF9zdG9yZXMoKSB7XG5cdC8qKiBAdHlwZSB7U3RvcmVSZWZlcmVuY2VzQ29udGFpbmVyfSAqL1xuXHRjb25zdCBzdG9yZXMgPSB7fTtcblxuXHRmdW5jdGlvbiBjbGVhbnVwKCkge1xuXHRcdHRlYXJkb3duKCgpID0+IHtcblx0XHRcdGZvciAodmFyIHN0b3JlX25hbWUgaW4gc3RvcmVzKSB7XG5cdFx0XHRcdGNvbnN0IHJlZiA9IHN0b3Jlc1tzdG9yZV9uYW1lXTtcblx0XHRcdFx0cmVmLnVuc3Vic2NyaWJlKCk7XG5cdFx0XHR9XG5cdFx0XHRkZWZpbmVfcHJvcGVydHkoc3RvcmVzLCBJU19VTk1PVU5URUQsIHtcblx0XHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdHZhbHVlOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBbc3RvcmVzLCBjbGVhbnVwXTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGEgc3RvcmUgd2l0aCBhIG5ldyB2YWx1ZS5cbiAqIEBwYXJhbSB7U3RvcmU8Vj59IHN0b3JlICB0aGUgc3RvcmUgdG8gdXBkYXRlXG4gKiBAcGFyYW0ge2FueX0gZXhwcmVzc2lvbiAgdGhlIGV4cHJlc3Npb24gdGhhdCBtdXRhdGVzIHRoZSBzdG9yZVxuICogQHBhcmFtIHtWfSBuZXdfdmFsdWUgIHRoZSBuZXcgc3RvcmUgdmFsdWVcbiAqIEB0ZW1wbGF0ZSBWXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV9tdXRhdGUoc3RvcmUsIGV4cHJlc3Npb24sIG5ld192YWx1ZSkge1xuXHRzdG9yZS5zZXQobmV3X3ZhbHVlKTtcblx0cmV0dXJuIGV4cHJlc3Npb247XG59XG5cbi8qKlxuICogQHBhcmFtIHtTdG9yZTxudW1iZXI+fSBzdG9yZVxuICogQHBhcmFtIHtudW1iZXJ9IHN0b3JlX3ZhbHVlXG4gKiBAcGFyYW0gezEgfCAtMX0gW2RdXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX3N0b3JlKHN0b3JlLCBzdG9yZV92YWx1ZSwgZCA9IDEpIHtcblx0c3RvcmUuc2V0KHN0b3JlX3ZhbHVlICsgZCk7XG5cdHJldHVybiBzdG9yZV92YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1N0b3JlPG51bWJlcj59IHN0b3JlXG4gKiBAcGFyYW0ge251bWJlcn0gc3RvcmVfdmFsdWVcbiAqIEBwYXJhbSB7MSB8IC0xfSBbZF1cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfcHJlX3N0b3JlKHN0b3JlLCBzdG9yZV92YWx1ZSwgZCA9IDEpIHtcblx0Y29uc3QgdmFsdWUgPSBzdG9yZV92YWx1ZSArIGQ7XG5cdHN0b3JlLnNldCh2YWx1ZSk7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBDYWxsZWQgaW5zaWRlIHByb3AgZ2V0dGVycyB0byBjb21tdW5pY2F0ZSB0aGF0IHRoZSBwcm9wIGlzIGEgc3RvcmUgYmluZGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya19zdG9yZV9iaW5kaW5nKCkge1xuXHRpc19zdG9yZV9iaW5kaW5nID0gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciBgZm4oKWAgcmVhZHMgYSBwcm9wIHRoYXQgaXMgYSBzdG9yZSBiaW5kaW5nLlxuICogVXNlZCB0byBwcmV2ZW50IGBiaW5kaW5nX3Byb3BlcnR5X25vbl9yZWFjdGl2ZWAgdmFsaWRhdGlvbiBmYWxzZSBwb3NpdGl2ZXMgYW5kXG4gKiBlbnN1cmUgdGhhdCB0aGVzZSBwcm9wcyBhcmUgdHJlYXRlZCBhcyBtdXRhYmxlIGV2ZW4gaW4gcnVuZXMgbW9kZVxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7KCkgPT4gVH0gZm5cbiAqIEByZXR1cm5zIHtbVCwgYm9vbGVhbl19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXB0dXJlX3N0b3JlX2JpbmRpbmcoZm4pIHtcblx0dmFyIHByZXZpb3VzX2lzX3N0b3JlX2JpbmRpbmcgPSBpc19zdG9yZV9iaW5kaW5nO1xuXG5cdHRyeSB7XG5cdFx0aXNfc3RvcmVfYmluZGluZyA9IGZhbHNlO1xuXHRcdHJldHVybiBbZm4oKSwgaXNfc3RvcmVfYmluZGluZ107XG5cdH0gZmluYWxseSB7XG5cdFx0aXNfc3RvcmVfYmluZGluZyA9IHByZXZpb3VzX2lzX3N0b3JlX2JpbmRpbmc7XG5cdH1cbn1cbiIsICIvKiogQGltcG9ydCB7IENvbXBvbmVudENvbnN0cnVjdG9yT3B0aW9ucywgQ29tcG9uZW50VHlwZSwgU3ZlbHRlQ29tcG9uZW50LCBDb21wb25lbnQgfSBmcm9tICdzdmVsdGUnICovXG5pbXBvcnQgeyBESVJUWSwgTEVHQUNZX1BST1BTLCBNQVlCRV9ESVJUWSB9IGZyb20gJy4uL2ludGVybmFsL2NsaWVudC9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgdXNlcl9wcmVfZWZmZWN0IH0gZnJvbSAnLi4vaW50ZXJuYWwvY2xpZW50L3JlYWN0aXZpdHkvZWZmZWN0cy5qcyc7XG5pbXBvcnQgeyBtdXRhYmxlX3NvdXJjZSwgc2V0IH0gZnJvbSAnLi4vaW50ZXJuYWwvY2xpZW50L3JlYWN0aXZpdHkvc291cmNlcy5qcyc7XG5pbXBvcnQgeyBoeWRyYXRlLCBtb3VudCwgdW5tb3VudCB9IGZyb20gJy4uL2ludGVybmFsL2NsaWVudC9yZW5kZXIuanMnO1xuaW1wb3J0IHsgYWN0aXZlX2VmZmVjdCwgZmx1c2hTeW5jLCBnZXQsIHNldF9zaWduYWxfc3RhdHVzIH0gZnJvbSAnLi4vaW50ZXJuYWwvY2xpZW50L3J1bnRpbWUuanMnO1xuaW1wb3J0IHsgbGlmZWN5Y2xlX291dHNpZGVfY29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJuYWwvc2hhcmVkL2Vycm9ycy5qcyc7XG5pbXBvcnQgeyBkZWZpbmVfcHJvcGVydHksIGlzX2FycmF5IH0gZnJvbSAnLi4vaW50ZXJuYWwvc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCAqIGFzIHcgZnJvbSAnLi4vaW50ZXJuYWwvY2xpZW50L3dhcm5pbmdzLmpzJztcbmltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuaW1wb3J0IHsgRklMRU5BTUUgfSBmcm9tICcuLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgY29tcG9uZW50X2NvbnRleHQsIGRldl9jdXJyZW50X2NvbXBvbmVudF9mdW5jdGlvbiB9IGZyb20gJy4uL2ludGVybmFsL2NsaWVudC9jb250ZXh0LmpzJztcblxuLyoqXG4gKiBUYWtlcyB0aGUgc2FtZSBvcHRpb25zIGFzIGEgU3ZlbHRlIDQgY29tcG9uZW50IGFuZCB0aGUgY29tcG9uZW50IGZ1bmN0aW9uIGFuZCByZXR1cm5zIGEgU3ZlbHRlIDQgY29tcGF0aWJsZSBjb21wb25lbnQuXG4gKlxuICogQGRlcHJlY2F0ZWQgVXNlIHRoaXMgb25seSBhcyBhIHRlbXBvcmFyeSBzb2x1dGlvbiB0byBtaWdyYXRlIHlvdXIgaW1wZXJhdGl2ZSBjb21wb25lbnQgY29kZSB0byBTdmVsdGUgNS5cbiAqXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IFByb3BzXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IEV4cG9ydHNcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gRXZlbnRzXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IFNsb3RzXG4gKlxuICogQHBhcmFtIHtDb21wb25lbnRDb25zdHJ1Y3Rvck9wdGlvbnM8UHJvcHM+ICYge1xuICogXHRjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8U3ZlbHRlQ29tcG9uZW50PFByb3BzLCBFdmVudHMsIFNsb3RzPj4gfCBDb21wb25lbnQ8UHJvcHM+O1xuICogfX0gb3B0aW9uc1xuICogQHJldHVybnMge1N2ZWx0ZUNvbXBvbmVudDxQcm9wcywgRXZlbnRzLCBTbG90cz4gJiBFeHBvcnRzfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2xhc3NDb21wb25lbnQob3B0aW9ucykge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yICQkcHJvcF9kZWYgZXRjIGFyZSBub3QgYWN0dWFsbHkgZGVmaW5lZFxuXHRyZXR1cm4gbmV3IFN2ZWx0ZTRDb21wb25lbnQob3B0aW9ucyk7XG59XG5cbi8qKlxuICogVGFrZXMgdGhlIGNvbXBvbmVudCBmdW5jdGlvbiBhbmQgcmV0dXJucyBhIFN2ZWx0ZSA0IGNvbXBhdGlibGUgY29tcG9uZW50IGNvbnN0cnVjdG9yLlxuICpcbiAqIEBkZXByZWNhdGVkIFVzZSB0aGlzIG9ubHkgYXMgYSB0ZW1wb3Jhcnkgc29sdXRpb24gdG8gbWlncmF0ZSB5b3VyIGltcGVyYXRpdmUgY29tcG9uZW50IGNvZGUgdG8gU3ZlbHRlIDUuXG4gKlxuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBQcm9wc1xuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBFeHBvcnRzXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IEV2ZW50c1xuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBTbG90c1xuICpcbiAqIEBwYXJhbSB7U3ZlbHRlQ29tcG9uZW50PFByb3BzLCBFdmVudHMsIFNsb3RzPiB8IENvbXBvbmVudDxQcm9wcz59IGNvbXBvbmVudFxuICogQHJldHVybnMge0NvbXBvbmVudFR5cGU8U3ZlbHRlQ29tcG9uZW50PFByb3BzLCBFdmVudHMsIFNsb3RzPiAmIEV4cG9ydHM+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNDbGFzc0NvbXBvbmVudChjb21wb25lbnQpIHtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciAkJHByb3BfZGVmIGV0YyBhcmUgbm90IGFjdHVhbGx5IGRlZmluZWRcblx0cmV0dXJuIGNsYXNzIGV4dGVuZHMgU3ZlbHRlNENvbXBvbmVudCB7XG5cdFx0LyoqIEBwYXJhbSB7YW55fSBvcHRpb25zICovXG5cdFx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdFx0c3VwZXIoe1xuXHRcdFx0XHRjb21wb25lbnQsXG5cdFx0XHRcdC4uLm9wdGlvbnNcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcbn1cblxuLyoqXG4gKiBTdXBwb3J0IHVzaW5nIHRoZSBjb21wb25lbnQgYXMgYm90aCBhIGNsYXNzIGFuZCBmdW5jdGlvbiBkdXJpbmcgdGhlIHRyYW5zaXRpb24gcGVyaW9kXG4gKiBAdHlwZWRlZiAge3tuZXcgKG86IENvbXBvbmVudENvbnN0cnVjdG9yT3B0aW9ucyk6IFN2ZWx0ZUNvbXBvbmVudDsoLi4uYXJnczogUGFyYW1ldGVyczxDb21wb25lbnQ8UmVjb3JkPHN0cmluZywgYW55Pj4+KTogUmV0dXJuVHlwZTxDb21wb25lbnQ8UmVjb3JkPHN0cmluZywgYW55PiwgUmVjb3JkPHN0cmluZywgYW55Pj4+O319IExlZ2FjeUNvbXBvbmVudFR5cGVcbiAqL1xuXG5jbGFzcyBTdmVsdGU0Q29tcG9uZW50IHtcblx0LyoqIEB0eXBlIHthbnl9ICovXG5cdCNldmVudHM7XG5cblx0LyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSAqL1xuXHQjaW5zdGFuY2U7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7Q29tcG9uZW50Q29uc3RydWN0b3JPcHRpb25zICYge1xuXHQgKiAgY29tcG9uZW50OiBhbnk7XG5cdCAqIH19IG9wdGlvbnNcblx0ICovXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHR2YXIgc291cmNlcyA9IG5ldyBNYXAoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nIHwgc3ltYm9sfSBrZXlcblx0XHQgKiBAcGFyYW0ge3Vua25vd259IHZhbHVlXG5cdFx0ICovXG5cdFx0dmFyIGFkZF9zb3VyY2UgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0dmFyIHMgPSBtdXRhYmxlX3NvdXJjZSh2YWx1ZSk7XG5cdFx0XHRzb3VyY2VzLnNldChrZXksIHMpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0fTtcblxuXHRcdC8vIFJlcGxpY2F0ZSBjb2Fyc2UtZ3JhaW5lZCBwcm9wcyB0aHJvdWdoIGEgcHJveHkgdGhhdCBoYXMgYSB2ZXJzaW9uIHNvdXJjZSBmb3Jcblx0XHQvLyBlYWNoIHByb3BlcnR5LCB3aGljaCBpcyBpbmNyZW1lbnRlZCBvbiB1cGRhdGVzIHRvIHRoZSBwcm9wZXJ0eSBpdHNlbGYuIERvIG5vdFxuXHRcdC8vIHVzZSBvdXIgJHN0YXRlIHByb3h5IGJlY2F1c2UgdGhhdCBvbmUgaGFzIGZpbmUtZ3JhaW5lZCByZWFjdGl2aXR5LlxuXHRcdGNvbnN0IHByb3BzID0gbmV3IFByb3h5KFxuXHRcdFx0eyAuLi4ob3B0aW9ucy5wcm9wcyB8fCB7fSksICQkZXZlbnRzOiB7fSB9LFxuXHRcdFx0e1xuXHRcdFx0XHRnZXQodGFyZ2V0LCBwcm9wKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGdldChzb3VyY2VzLmdldChwcm9wKSA/PyBhZGRfc291cmNlKHByb3AsIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCkpKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0aGFzKHRhcmdldCwgcHJvcCkge1xuXHRcdFx0XHRcdC8vIE5lY2Vzc2FyeSB0byBub3QgdGhyb3cgXCJpbnZhbGlkIGJpbmRpbmdcIiB2YWxpZGF0aW9uIGVycm9ycyBvbiB0aGUgY29tcG9uZW50IHNpZGVcblx0XHRcdFx0XHRpZiAocHJvcCA9PT0gTEVHQUNZX1BST1BTKSByZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHRcdGdldChzb3VyY2VzLmdldChwcm9wKSA/PyBhZGRfc291cmNlKHByb3AsIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCkpKTtcblx0XHRcdFx0XHRyZXR1cm4gUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcblx0XHRcdFx0XHRzZXQoc291cmNlcy5nZXQocHJvcCkgPz8gYWRkX3NvdXJjZShwcm9wLCB2YWx1ZSksIHZhbHVlKTtcblx0XHRcdFx0XHRyZXR1cm4gUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy4jaW5zdGFuY2UgPSAob3B0aW9ucy5oeWRyYXRlID8gaHlkcmF0ZSA6IG1vdW50KShvcHRpb25zLmNvbXBvbmVudCwge1xuXHRcdFx0dGFyZ2V0OiBvcHRpb25zLnRhcmdldCxcblx0XHRcdGFuY2hvcjogb3B0aW9ucy5hbmNob3IsXG5cdFx0XHRwcm9wcyxcblx0XHRcdGNvbnRleHQ6IG9wdGlvbnMuY29udGV4dCxcblx0XHRcdGludHJvOiBvcHRpb25zLmludHJvID8/IGZhbHNlLFxuXHRcdFx0cmVjb3Zlcjogb3B0aW9ucy5yZWNvdmVyXG5cdFx0fSk7XG5cblx0XHQvLyBXZSBkb24ndCBmbHVzaFN5bmMgZm9yIGN1c3RvbSBlbGVtZW50IHdyYXBwZXJzIG9yIGlmIHRoZSB1c2VyIGRvZXNuJ3Qgd2FudCBpdFxuXHRcdGlmICghb3B0aW9ucz8ucHJvcHM/LiQkaG9zdCB8fCBvcHRpb25zLnN5bmMgPT09IGZhbHNlKSB7XG5cdFx0XHRmbHVzaFN5bmMoKTtcblx0XHR9XG5cblx0XHR0aGlzLiNldmVudHMgPSBwcm9wcy4kJGV2ZW50cztcblxuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuI2luc3RhbmNlKSkge1xuXHRcdFx0aWYgKGtleSA9PT0gJyRzZXQnIHx8IGtleSA9PT0gJyRkZXN0cm95JyB8fCBrZXkgPT09ICckb24nKSBjb250aW51ZTtcblx0XHRcdGRlZmluZV9wcm9wZXJ0eSh0aGlzLCBrZXksIHtcblx0XHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLiNpbnN0YW5jZVtrZXldO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKiogQHBhcmFtIHthbnl9IHZhbHVlICovXG5cdFx0XHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuI2luc3RhbmNlW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGhpcy4jaW5zdGFuY2UuJHNldCA9IC8qKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT59IG5leHQgKi8gKG5leHQpID0+IHtcblx0XHRcdE9iamVjdC5hc3NpZ24ocHJvcHMsIG5leHQpO1xuXHRcdH07XG5cblx0XHR0aGlzLiNpbnN0YW5jZS4kZGVzdHJveSA9ICgpID0+IHtcblx0XHRcdHVubW91bnQodGhpcy4jaW5zdGFuY2UpO1xuXHRcdH07XG5cdH1cblxuXHQvKiogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBwcm9wcyAqL1xuXHQkc2V0KHByb3BzKSB7XG5cdFx0dGhpcy4jaW5zdGFuY2UuJHNldChwcm9wcyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG5cdCAqIEBwYXJhbSB7KC4uLmFyZ3M6IGFueVtdKSA9PiBhbnl9IGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHthbnl9XG5cdCAqL1xuXHQkb24oZXZlbnQsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy4jZXZlbnRzW2V2ZW50XSA9IHRoaXMuI2V2ZW50c1tldmVudF0gfHwgW107XG5cblx0XHQvKiogQHBhcmFtIHthbnlbXX0gYXJncyAqL1xuXHRcdGNvbnN0IGNiID0gKC4uLmFyZ3MpID0+IGNhbGxiYWNrLmNhbGwodGhpcywgLi4uYXJncyk7XG5cdFx0dGhpcy4jZXZlbnRzW2V2ZW50XS5wdXNoKGNiKTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0dGhpcy4jZXZlbnRzW2V2ZW50XSA9IHRoaXMuI2V2ZW50c1tldmVudF0uZmlsdGVyKC8qKiBAcGFyYW0ge2FueX0gZm4gKi8gKGZuKSA9PiBmbiAhPT0gY2IpO1xuXHRcdH07XG5cdH1cblxuXHQkZGVzdHJveSgpIHtcblx0XHR0aGlzLiNpbnN0YW5jZS4kZGVzdHJveSgpO1xuXHR9XG59XG5cbi8qKlxuICogUnVucyB0aGUgZ2l2ZW4gZnVuY3Rpb24gb25jZSBpbW1lZGlhdGVseSBvbiB0aGUgc2VydmVyLCBhbmQgd29ya3MgbGlrZSBgJGVmZmVjdC5wcmVgIG9uIHRoZSBjbGllbnQuXG4gKlxuICogQGRlcHJlY2F0ZWQgVXNlIHRoaXMgb25seSBhcyBhIHRlbXBvcmFyeSBzb2x1dGlvbiB0byBtaWdyYXRlIHlvdXIgY29tcG9uZW50IGNvZGUgdG8gU3ZlbHRlIDUuXG4gKiBAcGFyYW0geygpID0+IHZvaWQgfCAoKCkgPT4gdm9pZCl9IGZuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bihmbikge1xuXHR1c2VyX3ByZV9lZmZlY3QoKCkgPT4ge1xuXHRcdGZuKCk7XG5cdFx0dmFyIGVmZmVjdCA9IC8qKiBAdHlwZSB7aW1wb3J0KCcjY2xpZW50JykuRWZmZWN0fSAqLyAoYWN0aXZlX2VmZmVjdCk7XG5cdFx0Ly8gSWYgdGhlIGVmZmVjdCBpcyBpbW1lZGlhdGVseSBtYWRlIGRpcnR5IGFnYWluLCBtYXJrIGl0IGFzIG1heWJlIGRpcnR5IHRvIGVtdWxhdGUgbGVnYWN5IGJlaGF2aW91clxuXHRcdGlmICgoZWZmZWN0LmYgJiBESVJUWSkgIT09IDApIHtcblx0XHRcdGxldCBmaWxlbmFtZSA9IFwiYSBmaWxlICh3ZSBjYW4ndCBrbm93IHdoaWNoIG9uZSlcIjtcblx0XHRcdGlmIChERVYpIHtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRmaWxlbmFtZSA9IGRldl9jdXJyZW50X2NvbXBvbmVudF9mdW5jdGlvbj8uW0ZJTEVOQU1FXSA/PyBmaWxlbmFtZTtcblx0XHRcdH1cblx0XHRcdHcubGVnYWN5X3JlY3Vyc2l2ZV9yZWFjdGl2ZV9ibG9jayhmaWxlbmFtZSk7XG5cdFx0XHRzZXRfc2lnbmFsX3N0YXR1cyhlZmZlY3QsIE1BWUJFX0RJUlRZKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIG1pbWljIHRoZSBtdWx0aXBsZSBsaXN0ZW5lcnMgYXZhaWxhYmxlIGluIHN2ZWx0ZSA0XG4gKiBAZGVwcmVjYXRlZFxuICogQHBhcmFtIHtFdmVudExpc3RlbmVyW119IGhhbmRsZXJzXG4gKiBAcmV0dXJucyB7RXZlbnRMaXN0ZW5lcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZXJzKC4uLmhhbmRsZXJzKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRjb25zdCB7IHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiB9ID0gZXZlbnQ7XG5cdFx0bGV0IHN0b3BwZWQgPSBmYWxzZTtcblxuXHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiA9ICgpID0+IHtcblx0XHRcdHN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uLmNhbGwoZXZlbnQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBlcnJvcnMgPSBbXTtcblxuXHRcdGZvciAoY29uc3QgaGFuZGxlciBvZiBoYW5kbGVycykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBgdGhpc2AgaXMgbm90IHR5cGVkXG5cdFx0XHRcdGhhbmRsZXI/LmNhbGwodGhpcywgZXZlbnQpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRlcnJvcnMucHVzaChlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHN0b3BwZWQpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgZXJyb3Igb2YgZXJyb3JzKSB7XG5cdFx0XHRxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIGBidWJibGVgIGZ1bmN0aW9uIHRoYXQgbWltaWMgdGhlIGJlaGF2aW9yIG9mIGBvbjpjbGlja2Agd2l0aG91dCBoYW5kbGVyIGF2YWlsYWJsZSBpbiBzdmVsdGUgNC5cbiAqIEBkZXByZWNhdGVkIFVzZSB0aGlzIG9ubHkgYXMgYSB0ZW1wb3Jhcnkgc29sdXRpb24gdG8gbWlncmF0ZSB5b3VyIGF1dG9tYXRpY2FsbHkgZGVsZWdhdGVkIGV2ZW50cyBpbiBTdmVsdGUgNS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1YmJsZXIoKSB7XG5cdGNvbnN0IGFjdGl2ZV9jb21wb25lbnRfY29udGV4dCA9IGNvbXBvbmVudF9jb250ZXh0O1xuXHRpZiAoYWN0aXZlX2NvbXBvbmVudF9jb250ZXh0ID09PSBudWxsKSB7XG5cdFx0bGlmZWN5Y2xlX291dHNpZGVfY29tcG9uZW50KCdjcmVhdGVCdWJibGVyJyk7XG5cdH1cblxuXHRyZXR1cm4gKC8qKkB0eXBlIHtzdHJpbmd9Ki8gdHlwZSkgPT4gKC8qKkB0eXBlIHtFdmVudH0qLyBldmVudCkgPT4ge1xuXHRcdGNvbnN0IGV2ZW50cyA9IC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgRnVuY3Rpb24gfCBGdW5jdGlvbltdPn0gKi8gKFxuXHRcdFx0YWN0aXZlX2NvbXBvbmVudF9jb250ZXh0LnMuJCRldmVudHNcblx0XHQpPy5bLyoqIEB0eXBlIHthbnl9ICovICh0eXBlKV07XG5cblx0XHRpZiAoZXZlbnRzKSB7XG5cdFx0XHRjb25zdCBjYWxsYmFja3MgPSBpc19hcnJheShldmVudHMpID8gZXZlbnRzLnNsaWNlKCkgOiBbZXZlbnRzXTtcblx0XHRcdGZvciAoY29uc3QgZm4gb2YgY2FsbGJhY2tzKSB7XG5cdFx0XHRcdGZuLmNhbGwoYWN0aXZlX2NvbXBvbmVudF9jb250ZXh0LngsIGV2ZW50KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG59XG5cbmV4cG9ydCB7XG5cdG9uY2UsXG5cdHByZXZlbnREZWZhdWx0LFxuXHRzZWxmLFxuXHRzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24sXG5cdHN0b3BQcm9wYWdhdGlvbixcblx0dHJ1c3RlZCxcblx0cGFzc2l2ZSxcblx0bm9ucGFzc2l2ZVxufSBmcm9tICcuLi9pbnRlcm5hbC9jbGllbnQvZG9tL2xlZ2FjeS9ldmVudC1tb2RpZmllcnMuanMnO1xuIiwgImltcG9ydCB7IGNyZWF0ZUNsYXNzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGVnYWN5L2xlZ2FjeS1jbGllbnQuanMnO1xuaW1wb3J0IHsgZWZmZWN0X3Jvb3QsIHJlbmRlcl9lZmZlY3QgfSBmcm9tICcuLi8uLi9yZWFjdGl2aXR5L2VmZmVjdHMuanMnO1xuaW1wb3J0IHsgYXBwZW5kIH0gZnJvbSAnLi4vdGVtcGxhdGUuanMnO1xuaW1wb3J0IHsgZGVmaW5lX3Byb3BlcnR5LCBnZXRfZGVzY3JpcHRvciwgb2JqZWN0X2tleXMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEN1c3RvbUVsZW1lbnRQcm9wRGVmaW5pdGlvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFthdHRyaWJ1dGVdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtyZWZsZWN0XVxuICogQHByb3BlcnR5IHsnU3RyaW5nJ3wnQm9vbGVhbid8J051bWJlcid8J0FycmF5J3wnT2JqZWN0J30gW3R5cGVdXG4gKi9cblxuLyoqIEB0eXBlIHthbnl9ICovXG5sZXQgU3ZlbHRlRWxlbWVudDtcblxuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRTdmVsdGVFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdFx0LyoqIFRoZSBTdmVsdGUgY29tcG9uZW50IGNvbnN0cnVjdG9yICovXG5cdFx0JCRjdG9yO1xuXHRcdC8qKiBTbG90cyAqL1xuXHRcdCQkcztcblx0XHQvKiogQHR5cGUge2FueX0gVGhlIFN2ZWx0ZSBjb21wb25lbnQgaW5zdGFuY2UgKi9cblx0XHQkJGM7XG5cdFx0LyoqIFdoZXRoZXIgb3Igbm90IHRoZSBjdXN0b20gZWxlbWVudCBpcyBjb25uZWN0ZWQgKi9cblx0XHQkJGNuID0gZmFsc2U7XG5cdFx0LyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBDb21wb25lbnQgcHJvcHMgZGF0YSAqL1xuXHRcdCQkZCA9IHt9O1xuXHRcdC8qKiBgdHJ1ZWAgaWYgY3VycmVudGx5IGluIHRoZSBwcm9jZXNzIG9mIHJlZmxlY3RpbmcgY29tcG9uZW50IHByb3BzIGJhY2sgdG8gYXR0cmlidXRlcyAqL1xuXHRcdCQkciA9IGZhbHNlO1xuXHRcdC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgQ3VzdG9tRWxlbWVudFByb3BEZWZpbml0aW9uPn0gUHJvcHMgZGVmaW5pdGlvbiAobmFtZSwgcmVmbGVjdGVkLCB0eXBlIGV0YykgKi9cblx0XHQkJHBfZCA9IHt9O1xuXHRcdC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdFtdPn0gRXZlbnQgbGlzdGVuZXJzICovXG5cdFx0JCRsID0ge307XG5cdFx0LyoqIEB0eXBlIHtNYXA8RXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgRnVuY3Rpb24+fSBFdmVudCBsaXN0ZW5lciB1bnN1YnNjcmliZSBmdW5jdGlvbnMgKi9cblx0XHQkJGxfdSA9IG5ldyBNYXAoKTtcblx0XHQvKiogQHR5cGUge2FueX0gVGhlIG1hbmFnZWQgcmVuZGVyIGVmZmVjdCBmb3IgcmVmbGVjdGluZyBhdHRyaWJ1dGVzICovXG5cdFx0JCRtZTtcblxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7Kn0gJCRjb21wb25lbnRDdG9yXG5cdFx0ICogQHBhcmFtIHsqfSAkJHNsb3RzXG5cdFx0ICogQHBhcmFtIHsqfSB1c2Vfc2hhZG93X2RvbVxuXHRcdCAqL1xuXHRcdGNvbnN0cnVjdG9yKCQkY29tcG9uZW50Q3RvciwgJCRzbG90cywgdXNlX3NoYWRvd19kb20pIHtcblx0XHRcdHN1cGVyKCk7XG5cdFx0XHR0aGlzLiQkY3RvciA9ICQkY29tcG9uZW50Q3Rvcjtcblx0XHRcdHRoaXMuJCRzID0gJCRzbG90cztcblx0XHRcdGlmICh1c2Vfc2hhZG93X2RvbSkge1xuXHRcdFx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuXHRcdCAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdH0gbGlzdGVuZXJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9uc30gW29wdGlvbnNdXG5cdFx0ICovXG5cdFx0YWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuXHRcdFx0Ly8gV2UgY2FuJ3QgZGV0ZXJtaW5lIHVwZnJvbnQgaWYgdGhlIGV2ZW50IGlzIGEgY3VzdG9tIGV2ZW50IG9yIG5vdCwgc28gd2UgaGF2ZSB0b1xuXHRcdFx0Ly8gbGlzdGVuIHRvIGJvdGguIElmIHNvbWVvbmUgdXNlcyBhIGN1c3RvbSBldmVudCB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYSByZWd1bGFyXG5cdFx0XHQvLyBicm93c2VyIGV2ZW50LCB0aGlzIGZpcmVzIHR3aWNlIC0gd2UgY2FuJ3QgYXZvaWQgdGhhdC5cblx0XHRcdHRoaXMuJCRsW3R5cGVdID0gdGhpcy4kJGxbdHlwZV0gfHwgW107XG5cdFx0XHR0aGlzLiQkbFt0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblx0XHRcdGlmICh0aGlzLiQkYykge1xuXHRcdFx0XHRjb25zdCB1bnN1YiA9IHRoaXMuJCRjLiRvbih0eXBlLCBsaXN0ZW5lcik7XG5cdFx0XHRcdHRoaXMuJCRsX3Uuc2V0KGxpc3RlbmVyLCB1bnN1Yik7XG5cdFx0XHR9XG5cdFx0XHRzdXBlci5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuXHRcdCAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdH0gbGlzdGVuZXJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9uc30gW29wdGlvbnNdXG5cdFx0ICovXG5cdFx0cmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuXHRcdFx0c3VwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG5cdFx0XHRpZiAodGhpcy4kJGMpIHtcblx0XHRcdFx0Y29uc3QgdW5zdWIgPSB0aGlzLiQkbF91LmdldChsaXN0ZW5lcik7XG5cdFx0XHRcdGlmICh1bnN1Yikge1xuXHRcdFx0XHRcdHVuc3ViKCk7XG5cdFx0XHRcdFx0dGhpcy4kJGxfdS5kZWxldGUobGlzdGVuZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLiQkY24gPSB0cnVlO1xuXHRcdFx0aWYgKCF0aGlzLiQkYykge1xuXHRcdFx0XHQvLyBXZSB3YWl0IG9uZSB0aWNrIHRvIGxldCBwb3NzaWJsZSBjaGlsZCBzbG90IGVsZW1lbnRzIGJlIGNyZWF0ZWQvbW91bnRlZFxuXHRcdFx0XHRhd2FpdCBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRcdFx0aWYgKCF0aGlzLiQkY24gfHwgdGhpcy4kJGMpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICovXG5cdFx0XHRcdGZ1bmN0aW9uIGNyZWF0ZV9zbG90KG5hbWUpIHtcblx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGFuY2hvclxuXHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdHJldHVybiAoYW5jaG9yKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2xvdCcpO1xuXHRcdFx0XHRcdFx0aWYgKG5hbWUgIT09ICdkZWZhdWx0Jykgc2xvdC5uYW1lID0gbmFtZTtcblxuXHRcdFx0XHRcdFx0YXBwZW5kKGFuY2hvciwgc2xvdCk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIGFueT59ICovXG5cdFx0XHRcdGNvbnN0ICQkc2xvdHMgPSB7fTtcblx0XHRcdFx0Y29uc3QgZXhpc3Rpbmdfc2xvdHMgPSBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzKHRoaXMpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IG5hbWUgb2YgdGhpcy4kJHMpIHtcblx0XHRcdFx0XHRpZiAobmFtZSBpbiBleGlzdGluZ19zbG90cykge1xuXHRcdFx0XHRcdFx0aWYgKG5hbWUgPT09ICdkZWZhdWx0JyAmJiAhdGhpcy4kJGQuY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRcdFx0dGhpcy4kJGQuY2hpbGRyZW4gPSBjcmVhdGVfc2xvdChuYW1lKTtcblx0XHRcdFx0XHRcdFx0JCRzbG90cy5kZWZhdWx0ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCQkc2xvdHNbbmFtZV0gPSBjcmVhdGVfc2xvdChuYW1lKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgdGhpcy5hdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdFx0Ly8gdGhpcy4kJGRhdGEgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoaXMuYXR0cmlidXRlc1xuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLiQkZ19wKGF0dHJpYnV0ZS5uYW1lKTtcblx0XHRcdFx0XHRpZiAoIShuYW1lIGluIHRoaXMuJCRkKSkge1xuXHRcdFx0XHRcdFx0dGhpcy4kJGRbbmFtZV0gPSBnZXRfY3VzdG9tX2VsZW1lbnRfdmFsdWUobmFtZSwgYXR0cmlidXRlLnZhbHVlLCB0aGlzLiQkcF9kLCAndG9Qcm9wJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFBvcnQgb3ZlciBwcm9wcyB0aGF0IHdlcmUgc2V0IHByb2dyYW1tYXRpY2FsbHkgYmVmb3JlIGNlIHdhcyBpbml0aWFsaXplZFxuXHRcdFx0XHRmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkcF9kKSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdFx0XHRcdGlmICghKGtleSBpbiB0aGlzLiQkZCkgJiYgdGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0XHRcdHRoaXMuJCRkW2tleV0gPSB0aGlzW2tleV07IC8vIGRvbid0IHRyYW5zZm9ybSwgdGhlc2Ugd2VyZSBzZXQgdGhyb3VnaCBKYXZhU2NyaXB0XG5cdFx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpc1trZXldOyAvLyByZW1vdmUgdGhlIHByb3BlcnR5IHRoYXQgc2hhZG93cyB0aGUgZ2V0dGVyL3NldHRlclxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLiQkYyA9IGNyZWF0ZUNsYXNzQ29tcG9uZW50KHtcblx0XHRcdFx0XHRjb21wb25lbnQ6IHRoaXMuJCRjdG9yLFxuXHRcdFx0XHRcdHRhcmdldDogdGhpcy5zaGFkb3dSb290IHx8IHRoaXMsXG5cdFx0XHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0XHRcdC4uLnRoaXMuJCRkLFxuXHRcdFx0XHRcdFx0JCRzbG90cyxcblx0XHRcdFx0XHRcdCQkaG9zdDogdGhpc1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gUmVmbGVjdCBjb21wb25lbnQgcHJvcHMgYXMgYXR0cmlidXRlc1xuXHRcdFx0XHR0aGlzLiQkbWUgPSBlZmZlY3Rfcm9vdCgoKSA9PiB7XG5cdFx0XHRcdFx0cmVuZGVyX2VmZmVjdCgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLiQkciA9IHRydWU7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBvYmplY3Rfa2V5cyh0aGlzLiQkYykpIHtcblx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzLiQkcF9kW2tleV0/LnJlZmxlY3QpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHR0aGlzLiQkZFtrZXldID0gdGhpcy4kJGNba2V5XTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgYXR0cmlidXRlX3ZhbHVlID0gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKFxuXHRcdFx0XHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHRcdFx0XHR0aGlzLiQkZFtrZXldLFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuJCRwX2QsXG5cdFx0XHRcdFx0XHRcdFx0J3RvQXR0cmlidXRlJ1xuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRpZiAoYXR0cmlidXRlX3ZhbHVlID09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLiQkcF9kW2tleV0uYXR0cmlidXRlIHx8IGtleSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUodGhpcy4kJHBfZFtrZXldLmF0dHJpYnV0ZSB8fCBrZXksIGF0dHJpYnV0ZV92YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuJCRyID0gZmFsc2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgdHlwZSBpbiB0aGlzLiQkbCkge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy4kJGxbdHlwZV0pIHtcblx0XHRcdFx0XHRcdGNvbnN0IHVuc3ViID0gdGhpcy4kJGMuJG9uKHR5cGUsIGxpc3RlbmVyKTtcblx0XHRcdFx0XHRcdHRoaXMuJCRsX3Uuc2V0KGxpc3RlbmVyLCB1bnN1Yik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuJCRsID0ge307XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gV2UgZG9uJ3QgbmVlZCB0aGlzIHdoZW4gd29ya2luZyB3aXRoaW4gU3ZlbHRlIGNvZGUsIGJ1dCBmb3IgY29tcGF0aWJpbGl0eSBvZiBwZW9wbGUgdXNpbmcgdGhpcyBvdXRzaWRlIG9mIFN2ZWx0ZVxuXHRcdC8vIGFuZCBzZXR0aW5nIGF0dHJpYnV0ZXMgdGhyb3VnaCBzZXRBdHRyaWJ1dGUgZXRjLCB0aGlzIGlzIGhlbHBmdWxcblxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IF9vbGRWYWx1ZVxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZVxuXHRcdCAqL1xuXHRcdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0XHRpZiAodGhpcy4kJHIpIHJldHVybjtcblx0XHRcdGF0dHIgPSB0aGlzLiQkZ19wKGF0dHIpO1xuXHRcdFx0dGhpcy4kJGRbYXR0cl0gPSBnZXRfY3VzdG9tX2VsZW1lbnRfdmFsdWUoYXR0ciwgbmV3VmFsdWUsIHRoaXMuJCRwX2QsICd0b1Byb3AnKTtcblx0XHRcdHRoaXMuJCRjPy4kc2V0KHsgW2F0dHJdOiB0aGlzLiQkZFthdHRyXSB9KTtcblx0XHR9XG5cblx0XHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRcdHRoaXMuJCRjbiA9IGZhbHNlO1xuXHRcdFx0Ly8gSW4gYSBtaWNyb3Rhc2ssIGJlY2F1c2UgdGhpcyBjb3VsZCBiZSBhIG1vdmUgd2l0aGluIHRoZSBET01cblx0XHRcdFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuJCRjbiAmJiB0aGlzLiQkYykge1xuXHRcdFx0XHRcdHRoaXMuJCRjLiRkZXN0cm95KCk7XG5cdFx0XHRcdFx0dGhpcy4kJG1lKCk7XG5cdFx0XHRcdFx0dGhpcy4kJGMgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVfbmFtZVxuXHRcdCAqL1xuXHRcdCQkZ19wKGF0dHJpYnV0ZV9uYW1lKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRvYmplY3Rfa2V5cyh0aGlzLiQkcF9kKS5maW5kKFxuXHRcdFx0XHRcdChrZXkpID0+XG5cdFx0XHRcdFx0XHR0aGlzLiQkcF9kW2tleV0uYXR0cmlidXRlID09PSBhdHRyaWJ1dGVfbmFtZSB8fFxuXHRcdFx0XHRcdFx0KCF0aGlzLiQkcF9kW2tleV0uYXR0cmlidXRlICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSBhdHRyaWJ1dGVfbmFtZSlcblx0XHRcdFx0KSB8fCBhdHRyaWJ1dGVfbmFtZVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBDdXN0b21FbGVtZW50UHJvcERlZmluaXRpb24+fSBwcm9wc19kZWZpbml0aW9uXG4gKiBAcGFyYW0geyd0b0F0dHJpYnV0ZScgfCAndG9Qcm9wJ30gW3RyYW5zZm9ybV1cbiAqL1xuZnVuY3Rpb24gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKHByb3AsIHZhbHVlLCBwcm9wc19kZWZpbml0aW9uLCB0cmFuc2Zvcm0pIHtcblx0Y29uc3QgdHlwZSA9IHByb3BzX2RlZmluaXRpb25bcHJvcF0/LnR5cGU7XG5cdHZhbHVlID0gdHlwZSA9PT0gJ0Jvb2xlYW4nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nID8gdmFsdWUgIT0gbnVsbCA6IHZhbHVlO1xuXHRpZiAoIXRyYW5zZm9ybSB8fCAhcHJvcHNfZGVmaW5pdGlvbltwcm9wXSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fSBlbHNlIGlmICh0cmFuc2Zvcm0gPT09ICd0b0F0dHJpYnV0ZScpIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgJ09iamVjdCc6XG5cdFx0XHRjYXNlICdBcnJheSc6XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdGNhc2UgJ0Jvb2xlYW4nOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPyAnJyA6IG51bGw7XG5cdFx0XHRjYXNlICdOdW1iZXInOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT0gbnVsbCA/IG51bGwgOiB2YWx1ZTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdPYmplY3QnOlxuXHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgJiYgSlNPTi5wYXJzZSh2YWx1ZSk7XG5cdFx0XHRjYXNlICdCb29sZWFuJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlOyAvLyBjb252ZXJzaW9uIGFscmVhZHkgaGFuZGxlZCBhYm92ZVxuXHRcdFx0Y2FzZSAnTnVtYmVyJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlICE9IG51bGwgPyArdmFsdWUgOiB2YWx1ZTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMoZWxlbWVudCkge1xuXHQvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHRydWU+fSAqL1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblx0ZWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcblx0XHRyZXN1bHRbLyoqIEB0eXBlIHtFbGVtZW50fSBub2RlICovIChub2RlKS5zbG90IHx8ICdkZWZhdWx0J10gPSB0cnVlO1xuXHR9KTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqXG4gKiBUdXJuIGEgU3ZlbHRlIGNvbXBvbmVudCBpbnRvIGEgY3VzdG9tIGVsZW1lbnQuXG4gKiBAcGFyYW0ge2FueX0gQ29tcG9uZW50ICBBIFN2ZWx0ZSBjb21wb25lbnQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgQ3VzdG9tRWxlbWVudFByb3BEZWZpbml0aW9uPn0gcHJvcHNfZGVmaW5pdGlvbiAgVGhlIHByb3BzIHRvIG9ic2VydmVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHNsb3RzICBUaGUgc2xvdHMgdG8gY3JlYXRlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBleHBvcnRzICBFeHBsaWNpdGx5IGV4cG9ydGVkIHZhbHVlcywgb3RoZXIgdGhhbiBwcm9wc1xuICogQHBhcmFtIHtib29sZWFufSB1c2Vfc2hhZG93X2RvbSAgV2hldGhlciB0byB1c2Ugc2hhZG93IERPTVxuICogQHBhcmFtIHsoY2U6IG5ldyAoKSA9PiBIVE1MRWxlbWVudCkgPT4gbmV3ICgpID0+IEhUTUxFbGVtZW50fSBbZXh0ZW5kXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX2N1c3RvbV9lbGVtZW50KFxuXHRDb21wb25lbnQsXG5cdHByb3BzX2RlZmluaXRpb24sXG5cdHNsb3RzLFxuXHRleHBvcnRzLFxuXHR1c2Vfc2hhZG93X2RvbSxcblx0ZXh0ZW5kXG4pIHtcblx0bGV0IENsYXNzID0gY2xhc3MgZXh0ZW5kcyBTdmVsdGVFbGVtZW50IHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHN1cGVyKENvbXBvbmVudCwgc2xvdHMsIHVzZV9zaGFkb3dfZG9tKTtcblx0XHRcdHRoaXMuJCRwX2QgPSBwcm9wc19kZWZpbml0aW9uO1xuXHRcdH1cblx0XHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRcdHJldHVybiBvYmplY3Rfa2V5cyhwcm9wc19kZWZpbml0aW9uKS5tYXAoKGtleSkgPT5cblx0XHRcdFx0KHByb3BzX2RlZmluaXRpb25ba2V5XS5hdHRyaWJ1dGUgfHwga2V5KS50b0xvd2VyQ2FzZSgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0b2JqZWN0X2tleXMocHJvcHNfZGVmaW5pdGlvbikuZm9yRWFjaCgocHJvcCkgPT4ge1xuXHRcdGRlZmluZV9wcm9wZXJ0eShDbGFzcy5wcm90b3R5cGUsIHByb3AsIHtcblx0XHRcdGdldCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJCRjICYmIHByb3AgaW4gdGhpcy4kJGMgPyB0aGlzLiQkY1twcm9wXSA6IHRoaXMuJCRkW3Byb3BdO1xuXHRcdFx0fSxcblx0XHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0XHR2YWx1ZSA9IGdldF9jdXN0b21fZWxlbWVudF92YWx1ZShwcm9wLCB2YWx1ZSwgcHJvcHNfZGVmaW5pdGlvbik7XG5cdFx0XHRcdHRoaXMuJCRkW3Byb3BdID0gdmFsdWU7XG5cdFx0XHRcdHZhciBjb21wb25lbnQgPSB0aGlzLiQkYztcblxuXHRcdFx0XHRpZiAoY29tcG9uZW50KSB7XG5cdFx0XHRcdFx0Ly8gLy8gSWYgdGhlIGluc3RhbmNlIGhhcyBhbiBhY2Nlc3NvciwgdXNlIHRoYXQgaW5zdGVhZFxuXHRcdFx0XHRcdHZhciBzZXR0ZXIgPSBnZXRfZGVzY3JpcHRvcihjb21wb25lbnQsIHByb3ApPy5nZXQ7XG5cblx0XHRcdFx0XHRpZiAoc2V0dGVyKSB7XG5cdFx0XHRcdFx0XHRjb21wb25lbnRbcHJvcF0gPSB2YWx1ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29tcG9uZW50LiRzZXQoeyBbcHJvcF06IHZhbHVlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblx0ZXhwb3J0cy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuXHRcdGRlZmluZV9wcm9wZXJ0eShDbGFzcy5wcm90b3R5cGUsIHByb3BlcnR5LCB7XG5cdFx0XHRnZXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLiQkYz8uW3Byb3BlcnR5XTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cdGlmIChleHRlbmQpIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIC0gYXNzaWduaW5nIGhlcmUgaXMgZmluZVxuXHRcdENsYXNzID0gZXh0ZW5kKENsYXNzKTtcblx0fVxuXHRDb21wb25lbnQuZWxlbWVudCA9IC8qKiBAdHlwZSB7YW55fSAqLyBDbGFzcztcblx0cmV0dXJuIENsYXNzO1xufVxuIiwgIi8qKiBAaW1wb3J0IHsgQ29tcG9uZW50Q29udGV4dCwgQ29tcG9uZW50Q29udGV4dExlZ2FjeSB9IGZyb20gJyNjbGllbnQnICovXG4vKiogQGltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4vaW5kZXguanMnICovXG4vKiogQGltcG9ydCB7IE5vdEZ1bmN0aW9uIH0gZnJvbSAnLi9pbnRlcm5hbC90eXBlcy5qcycgKi9cbmltcG9ydCB7IHVudHJhY2sgfSBmcm9tICcuL2ludGVybmFsL2NsaWVudC9ydW50aW1lLmpzJztcbmltcG9ydCB7IGlzX2FycmF5IH0gZnJvbSAnLi9pbnRlcm5hbC9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHsgdXNlcl9lZmZlY3QgfSBmcm9tICcuL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyc7XG5pbXBvcnQgKiBhcyBlIGZyb20gJy4vaW50ZXJuYWwvY2xpZW50L2Vycm9ycy5qcyc7XG5pbXBvcnQgeyBsaWZlY3ljbGVfb3V0c2lkZV9jb21wb25lbnQgfSBmcm9tICcuL2ludGVybmFsL3NoYXJlZC9lcnJvcnMuanMnO1xuaW1wb3J0IHsgbGVnYWN5X21vZGVfZmxhZyB9IGZyb20gJy4vaW50ZXJuYWwvZmxhZ3MvaW5kZXguanMnO1xuaW1wb3J0IHsgY29tcG9uZW50X2NvbnRleHQgfSBmcm9tICcuL2ludGVybmFsL2NsaWVudC9jb250ZXh0LmpzJztcbmltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuXG5pZiAoREVWKSB7XG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcnVuZVxuXHQgKi9cblx0ZnVuY3Rpb24gdGhyb3dfcnVuZV9lcnJvcihydW5lKSB7XG5cdFx0aWYgKCEocnVuZSBpbiBnbG9iYWxUaGlzKSkge1xuXHRcdFx0Ly8gVE9ETyBpZiBwZW9wbGUgc3RhcnQgYWRqdXN0aW5nIHRoZSBcInRoaXMgY2FuIGNvbnRhaW4gcnVuZXNcIiBjb25maWcgdGhyb3VnaCB2LXAtcyBtb3JlLCBhZGp1c3QgdGhpcyBtZXNzYWdlXG5cdFx0XHQvKiogQHR5cGUge2FueX0gKi9cblx0XHRcdGxldCB2YWx1ZTsgLy8gbGV0J3MgaG9wZSBub29uZSBtb2RpZmllcyB0aGlzIGdsb2JhbCwgYnV0IGJlbHRzIGFuZCBicmFjZXNcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBydW5lLCB7XG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdldHRlci1yZXR1cm5cblx0XHRcdFx0Z2V0OiAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlLnJ1bmVfb3V0c2lkZV9zdmVsdGUocnVuZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogKHYpID0+IHtcblx0XHRcdFx0XHR2YWx1ZSA9IHY7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHRocm93X3J1bmVfZXJyb3IoJyRzdGF0ZScpO1xuXHR0aHJvd19ydW5lX2Vycm9yKCckZWZmZWN0Jyk7XG5cdHRocm93X3J1bmVfZXJyb3IoJyRkZXJpdmVkJyk7XG5cdHRocm93X3J1bmVfZXJyb3IoJyRpbnNwZWN0Jyk7XG5cdHRocm93X3J1bmVfZXJyb3IoJyRwcm9wcycpO1xuXHR0aHJvd19ydW5lX2Vycm9yKCckYmluZGFibGUnKTtcbn1cblxuLyoqXG4gKiBgb25Nb3VudGAsIGxpa2UgW2AkZWZmZWN0YF0oaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLyRlZmZlY3QpLCBzY2hlZHVsZXMgYSBmdW5jdGlvbiB0byBydW4gYXMgc29vbiBhcyB0aGUgY29tcG9uZW50IGhhcyBiZWVuIG1vdW50ZWQgdG8gdGhlIERPTS5cbiAqIFVubGlrZSBgJGVmZmVjdGAsIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmx5IHJ1bnMgb25jZS5cbiAqXG4gKiBJdCBtdXN0IGJlIGNhbGxlZCBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIGluaXRpYWxpc2F0aW9uIChidXQgZG9lc24ndCBuZWVkIHRvIGxpdmUgX2luc2lkZV8gdGhlIGNvbXBvbmVudDtcbiAqIGl0IGNhbiBiZSBjYWxsZWQgZnJvbSBhbiBleHRlcm5hbCBtb2R1bGUpLiBJZiBhIGZ1bmN0aW9uIGlzIHJldHVybmVkIF9zeW5jaHJvbm91c2x5XyBmcm9tIGBvbk1vdW50YCxcbiAqIGl0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXG4gKlxuICogYG9uTW91bnRgIGZ1bmN0aW9ucyBkbyBub3QgcnVuIGR1cmluZyBbc2VydmVyLXNpZGUgcmVuZGVyaW5nXShodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUvc3ZlbHRlLXNlcnZlciNyZW5kZXIpLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0geygpID0+IE5vdEZ1bmN0aW9uPFQ+IHwgUHJvbWlzZTxOb3RGdW5jdGlvbjxUPj4gfCAoKCkgPT4gYW55KX0gZm5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gb25Nb3VudChmbikge1xuXHRpZiAoY29tcG9uZW50X2NvbnRleHQgPT09IG51bGwpIHtcblx0XHRsaWZlY3ljbGVfb3V0c2lkZV9jb21wb25lbnQoJ29uTW91bnQnKTtcblx0fVxuXG5cdGlmIChsZWdhY3lfbW9kZV9mbGFnICYmIGNvbXBvbmVudF9jb250ZXh0LmwgIT09IG51bGwpIHtcblx0XHRpbml0X3VwZGF0ZV9jYWxsYmFja3MoY29tcG9uZW50X2NvbnRleHQpLm0ucHVzaChmbik7XG5cdH0gZWxzZSB7XG5cdFx0dXNlcl9lZmZlY3QoKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2xlYW51cCA9IHVudHJhY2soZm4pO1xuXHRcdFx0aWYgKHR5cGVvZiBjbGVhbnVwID09PSAnZnVuY3Rpb24nKSByZXR1cm4gLyoqIEB0eXBlIHsoKSA9PiB2b2lkfSAqLyAoY2xlYW51cCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxuICpcbiAqIE91dCBvZiBgb25Nb3VudGAsIGBiZWZvcmVVcGRhdGVgLCBgYWZ0ZXJVcGRhdGVgIGFuZCBgb25EZXN0cm95YCwgdGhpcyBpcyB0aGVcbiAqIG9ubHkgb25lIHRoYXQgcnVucyBpbnNpZGUgYSBzZXJ2ZXItc2lkZSBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHsoKSA9PiBhbnl9IGZuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uRGVzdHJveShmbikge1xuXHRpZiAoY29tcG9uZW50X2NvbnRleHQgPT09IG51bGwpIHtcblx0XHRsaWZlY3ljbGVfb3V0c2lkZV9jb21wb25lbnQoJ29uRGVzdHJveScpO1xuXHR9XG5cblx0b25Nb3VudCgoKSA9PiAoKSA9PiB1bnRyYWNrKGZuKSk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFtUPWFueV1cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1R9IFtkZXRhaWxdXG4gKiBAcGFyYW0ge2FueX1wYXJhbXNfMFxuICogQHJldHVybnMge0N1c3RvbUV2ZW50PFQ+fVxuICovXG5mdW5jdGlvbiBjcmVhdGVfY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgeyBidWJibGVzID0gZmFsc2UsIGNhbmNlbGFibGUgPSBmYWxzZSB9ID0ge30pIHtcblx0cmV0dXJuIG5ldyBDdXN0b21FdmVudCh0eXBlLCB7IGRldGFpbCwgYnViYmxlcywgY2FuY2VsYWJsZSB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGV2ZW50IGRpc3BhdGNoZXIgdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwYXRjaCBbY29tcG9uZW50IGV2ZW50c10oaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlL2xlZ2FjeS1vbiNDb21wb25lbnQtZXZlbnRzKS5cbiAqIEV2ZW50IGRpc3BhdGNoZXJzIGFyZSBmdW5jdGlvbnMgdGhhdCBjYW4gdGFrZSB0d28gYXJndW1lbnRzOiBgbmFtZWAgYW5kIGBkZXRhaWxgLlxuICpcbiAqIENvbXBvbmVudCBldmVudHMgY3JlYXRlZCB3aXRoIGBjcmVhdGVFdmVudERpc3BhdGNoZXJgIGNyZWF0ZSBhXG4gKiBbQ3VzdG9tRXZlbnRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudCkuXG4gKiBUaGVzZSBldmVudHMgZG8gbm90IFtidWJibGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTGVhcm4vSmF2YVNjcmlwdC9CdWlsZGluZ19ibG9ja3MvRXZlbnRzI0V2ZW50X2J1YmJsaW5nX2FuZF9jYXB0dXJlKS5cbiAqIFRoZSBgZGV0YWlsYCBhcmd1bWVudCBjb3JyZXNwb25kcyB0byB0aGUgW0N1c3RvbUV2ZW50LmRldGFpbF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50L2RldGFpbClcbiAqIHByb3BlcnR5IGFuZCBjYW4gY29udGFpbiBhbnkgdHlwZSBvZiBkYXRhLlxuICpcbiAqIFRoZSBldmVudCBkaXNwYXRjaGVyIGNhbiBiZSB0eXBlZCB0byBuYXJyb3cgdGhlIGFsbG93ZWQgZXZlbnQgbmFtZXMgYW5kIHRoZSB0eXBlIG9mIHRoZSBgZGV0YWlsYCBhcmd1bWVudDpcbiAqIGBgYHRzXG4gKiBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcjx7XG4gKiAgbG9hZGVkOiBudWxsOyAvLyBkb2VzIG5vdCB0YWtlIGEgZGV0YWlsIGFyZ3VtZW50XG4gKiAgY2hhbmdlOiBzdHJpbmc7IC8vIHRha2VzIGEgZGV0YWlsIGFyZ3VtZW50IG9mIHR5cGUgc3RyaW5nLCB3aGljaCBpcyByZXF1aXJlZFxuICogIG9wdGlvbmFsOiBudW1iZXIgfCBudWxsOyAvLyB0YWtlcyBhbiBvcHRpb25hbCBkZXRhaWwgYXJndW1lbnQgb2YgdHlwZSBudW1iZXJcbiAqIH0+KCk7XG4gKiBgYGBcbiAqXG4gKiBAZGVwcmVjYXRlZCBVc2UgY2FsbGJhY2sgcHJvcHMgYW5kL29yIHRoZSBgJGhvc3QoKWAgcnVuZSBpbnN0ZWFkIFx1MjAxNCBzZWUgW21pZ3JhdGlvbiBndWlkZV0oaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlL3Y1LW1pZ3JhdGlvbi1ndWlkZSNFdmVudC1jaGFuZ2VzLUNvbXBvbmVudC1ldmVudHMpXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IFtFdmVudE1hcCA9IGFueV1cbiAqIEByZXR1cm5zIHtFdmVudERpc3BhdGNoZXI8RXZlbnRNYXA+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCkge1xuXHRjb25zdCBhY3RpdmVfY29tcG9uZW50X2NvbnRleHQgPSBjb21wb25lbnRfY29udGV4dDtcblx0aWYgKGFjdGl2ZV9jb21wb25lbnRfY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdGxpZmVjeWNsZV9vdXRzaWRlX2NvbXBvbmVudCgnY3JlYXRlRXZlbnREaXNwYXRjaGVyJyk7XG5cdH1cblxuXHRyZXR1cm4gKHR5cGUsIGRldGFpbCwgb3B0aW9ucykgPT4ge1xuXHRcdGNvbnN0IGV2ZW50cyA9IC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgRnVuY3Rpb24gfCBGdW5jdGlvbltdPn0gKi8gKFxuXHRcdFx0YWN0aXZlX2NvbXBvbmVudF9jb250ZXh0LnMuJCRldmVudHNcblx0XHQpPy5bLyoqIEB0eXBlIHthbnl9ICovICh0eXBlKV07XG5cblx0XHRpZiAoZXZlbnRzKSB7XG5cdFx0XHRjb25zdCBjYWxsYmFja3MgPSBpc19hcnJheShldmVudHMpID8gZXZlbnRzLnNsaWNlKCkgOiBbZXZlbnRzXTtcblx0XHRcdC8vIFRPRE8gYXJlIHRoZXJlIHNpdHVhdGlvbnMgd2hlcmUgZXZlbnRzIGNvdWxkIGJlIGRpc3BhdGNoZWRcblx0XHRcdC8vIGluIGEgc2VydmVyIChub24tRE9NKSBlbnZpcm9ubWVudD9cblx0XHRcdGNvbnN0IGV2ZW50ID0gY3JlYXRlX2N1c3RvbV9ldmVudCgvKiogQHR5cGUge3N0cmluZ30gKi8gKHR5cGUpLCBkZXRhaWwsIG9wdGlvbnMpO1xuXHRcdFx0Zm9yIChjb25zdCBmbiBvZiBjYWxsYmFja3MpIHtcblx0XHRcdFx0Zm4uY2FsbChhY3RpdmVfY29tcG9uZW50X2NvbnRleHQueCwgZXZlbnQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICFldmVudC5kZWZhdWx0UHJldmVudGVkO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xufVxuXG4vLyBUT0RPIG1hcmsgYmVmb3JlVXBkYXRlIGFuZCBhZnRlclVwZGF0ZSBhcyBkZXByZWNhdGVkIGluIFN2ZWx0ZSA2XG5cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWQgYWZ0ZXIgYW55IHN0YXRlIGNoYW5nZS5cbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgcnVucyB3aWxsIGJlIGJlZm9yZSB0aGUgaW5pdGlhbCBgb25Nb3VudGAuXG4gKlxuICogSW4gcnVuZXMgbW9kZSB1c2UgYCRlZmZlY3QucHJlYCBpbnN0ZWFkLlxuICpcbiAqIEBkZXByZWNhdGVkIFVzZSBbYCRlZmZlY3QucHJlYF0oaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLyRlZmZlY3QjJGVmZmVjdC5wcmUpIGluc3RlYWRcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gZm5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmVmb3JlVXBkYXRlKGZuKSB7XG5cdGlmIChjb21wb25lbnRfY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdGxpZmVjeWNsZV9vdXRzaWRlX2NvbXBvbmVudCgnYmVmb3JlVXBkYXRlJyk7XG5cdH1cblxuXHRpZiAoY29tcG9uZW50X2NvbnRleHQubCA9PT0gbnVsbCkge1xuXHRcdGUubGlmZWN5Y2xlX2xlZ2FjeV9vbmx5KCdiZWZvcmVVcGRhdGUnKTtcblx0fVxuXG5cdGluaXRfdXBkYXRlX2NhbGxiYWNrcyhjb21wb25lbnRfY29udGV4dCkuYi5wdXNoKGZuKTtcbn1cblxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiB1cGRhdGVkLlxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBydW5zIHdpbGwgYmUgYWZ0ZXIgdGhlIGluaXRpYWwgYG9uTW91bnRgLlxuICpcbiAqIEluIHJ1bmVzIG1vZGUgdXNlIGAkZWZmZWN0YCBpbnN0ZWFkLlxuICpcbiAqIEBkZXByZWNhdGVkIFVzZSBbYCRlZmZlY3RgXShodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUvJGVmZmVjdCkgaW5zdGVhZFxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBmblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuXHRpZiAoY29tcG9uZW50X2NvbnRleHQgPT09IG51bGwpIHtcblx0XHRsaWZlY3ljbGVfb3V0c2lkZV9jb21wb25lbnQoJ2FmdGVyVXBkYXRlJyk7XG5cdH1cblxuXHRpZiAoY29tcG9uZW50X2NvbnRleHQubCA9PT0gbnVsbCkge1xuXHRcdGUubGlmZWN5Y2xlX2xlZ2FjeV9vbmx5KCdhZnRlclVwZGF0ZScpO1xuXHR9XG5cblx0aW5pdF91cGRhdGVfY2FsbGJhY2tzKGNvbXBvbmVudF9jb250ZXh0KS5hLnB1c2goZm4pO1xufVxuXG4vKipcbiAqIExlZ2FjeS1tb2RlOiBJbml0IGNhbGxiYWNrcyBvYmplY3QgZm9yIG9uTW91bnQvYmVmb3JlVXBkYXRlL2FmdGVyVXBkYXRlXG4gKiBAcGFyYW0ge0NvbXBvbmVudENvbnRleHR9IGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gaW5pdF91cGRhdGVfY2FsbGJhY2tzKGNvbnRleHQpIHtcblx0dmFyIGwgPSAvKiogQHR5cGUge0NvbXBvbmVudENvbnRleHRMZWdhY3l9ICovIChjb250ZXh0KS5sO1xuXHRyZXR1cm4gKGwudSA/Pz0geyBhOiBbXSwgYjogW10sIG06IFtdIH0pO1xufVxuXG5leHBvcnQgeyBmbHVzaFN5bmMgfSBmcm9tICcuL2ludGVybmFsL2NsaWVudC9ydW50aW1lLmpzJztcbmV4cG9ydCB7IGdldENvbnRleHQsIGdldEFsbENvbnRleHRzLCBoYXNDb250ZXh0LCBzZXRDb250ZXh0IH0gZnJvbSAnLi9pbnRlcm5hbC9jbGllbnQvY29udGV4dC5qcyc7XG5leHBvcnQgeyBoeWRyYXRlLCBtb3VudCwgdW5tb3VudCB9IGZyb20gJy4vaW50ZXJuYWwvY2xpZW50L3JlbmRlci5qcyc7XG5leHBvcnQgeyB0aWNrLCB1bnRyYWNrIH0gZnJvbSAnLi9pbnRlcm5hbC9jbGllbnQvcnVudGltZS5qcyc7XG5leHBvcnQgeyBjcmVhdGVSYXdTbmlwcGV0IH0gZnJvbSAnLi9pbnRlcm5hbC9jbGllbnQvZG9tL2Jsb2Nrcy9zbmlwcGV0LmpzJztcbiIsICIvKiogQGltcG9ydCB7IFJlYWRhYmxlIH0gZnJvbSAnLi9wdWJsaWMnICovXG5pbXBvcnQgeyB1bnRyYWNrIH0gZnJvbSAnLi4vaW5kZXgtY2xpZW50LmpzJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi9pbnRlcm5hbC9zaGFyZWQvdXRpbHMuanMnO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1JlYWRhYmxlPFQ+IHwgbnVsbCB8IHVuZGVmaW5lZH0gc3RvcmVcbiAqIEBwYXJhbSB7KHZhbHVlOiBUKSA9PiB2b2lkfSBydW5cbiAqIEBwYXJhbSB7KHZhbHVlOiBUKSA9PiB2b2lkfSBbaW52YWxpZGF0ZV1cbiAqIEByZXR1cm5zIHsoKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlX3RvX3N0b3JlKHN0b3JlLCBydW4sIGludmFsaWRhdGUpIHtcblx0aWYgKHN0b3JlID09IG51bGwpIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0cnVuKHVuZGVmaW5lZCk7XG5cblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0aWYgKGludmFsaWRhdGUpIGludmFsaWRhdGUodW5kZWZpbmVkKTtcblxuXHRcdHJldHVybiBub29wO1xuXHR9XG5cblx0Ly8gU3ZlbHRlIHN0b3JlIHRha2VzIGEgcHJpdmF0ZSBzZWNvbmQgYXJndW1lbnRcblx0Ly8gU3RhcnRTdG9wTm90aWZpZXIgY291bGQgbXV0YXRlIHN0YXRlLCBhbmQgd2Ugd2FudCB0byBzaWxlbmNlIHRoZSBjb3JyZXNwb25kaW5nIHZhbGlkYXRpb24gZXJyb3Jcblx0Y29uc3QgdW5zdWIgPSB1bnRyYWNrKCgpID0+XG5cdFx0c3RvcmUuc3Vic2NyaWJlKFxuXHRcdFx0cnVuLFxuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdFx0aW52YWxpZGF0ZVxuXHRcdClcblx0KTtcblxuXHQvLyBBbHNvIHN1cHBvcnQgUnhKU1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE8gZml4IHRoaXMgaW4gdGhlIHR5cGVzP1xuXHRyZXR1cm4gdW5zdWIudW5zdWJzY3JpYmUgPyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpIDogdW5zdWI7XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcjc2VydmVyJyAqL1xuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5pbXBvcnQgeyBvbl9kZXN0cm95IH0gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgKiBhcyBlIGZyb20gJy4uL3NoYXJlZC9lcnJvcnMuanMnO1xuXG4vKiogQHR5cGUge0NvbXBvbmVudCB8IG51bGx9ICovXG5leHBvcnQgdmFyIGN1cnJlbnRfY29tcG9uZW50ID0gbnVsbDtcblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuXHRjb25zdCBjb250ZXh0X21hcCA9IGdldF9vcl9pbml0X2NvbnRleHRfbWFwKCdnZXRDb250ZXh0Jyk7XG5cdGNvbnN0IHJlc3VsdCA9IC8qKiBAdHlwZSB7VH0gKi8gKGNvbnRleHRfbWFwLmdldChrZXkpKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge2FueX0ga2V5XG4gKiBAcGFyYW0ge1R9IGNvbnRleHRcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29udGV4dChrZXksIGNvbnRleHQpIHtcblx0Z2V0X29yX2luaXRfY29udGV4dF9tYXAoJ3NldENvbnRleHQnKS5zZXQoa2V5LCBjb250ZXh0KTtcblx0cmV0dXJuIGNvbnRleHQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IGtleVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuXHRyZXR1cm4gZ2V0X29yX2luaXRfY29udGV4dF9tYXAoJ2hhc0NvbnRleHQnKS5oYXMoa2V5KTtcbn1cblxuLyoqIEByZXR1cm5zIHtNYXA8YW55LCBhbnk+fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbENvbnRleHRzKCkge1xuXHRyZXR1cm4gZ2V0X29yX2luaXRfY29udGV4dF9tYXAoJ2dldEFsbENvbnRleHRzJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtNYXA8dW5rbm93biwgdW5rbm93bj59XG4gKi9cbmZ1bmN0aW9uIGdldF9vcl9pbml0X2NvbnRleHRfbWFwKG5hbWUpIHtcblx0aWYgKGN1cnJlbnRfY29tcG9uZW50ID09PSBudWxsKSB7XG5cdFx0ZS5saWZlY3ljbGVfb3V0c2lkZV9jb21wb25lbnQobmFtZSk7XG5cdH1cblxuXHRyZXR1cm4gKGN1cnJlbnRfY29tcG9uZW50LmMgPz89IG5ldyBNYXAoZ2V0X3BhcmVudF9jb250ZXh0KGN1cnJlbnRfY29tcG9uZW50KSB8fCB1bmRlZmluZWQpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGZuKSB7XG5cdGN1cnJlbnRfY29tcG9uZW50ID0geyBwOiBjdXJyZW50X2NvbXBvbmVudCwgYzogbnVsbCwgZDogbnVsbCB9O1xuXHRpZiAoREVWKSB7XG5cdFx0Ly8gY29tcG9uZW50IGZ1bmN0aW9uXG5cdFx0Y3VycmVudF9jb21wb25lbnQuZnVuY3Rpb24gPSBmbjtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wKCkge1xuXHR2YXIgY29tcG9uZW50ID0gLyoqIEB0eXBlIHtDb21wb25lbnR9ICovIChjdXJyZW50X2NvbXBvbmVudCk7XG5cblx0dmFyIG9uZGVzdHJveSA9IGNvbXBvbmVudC5kO1xuXG5cdGlmIChvbmRlc3Ryb3kpIHtcblx0XHRvbl9kZXN0cm95LnB1c2goLi4ub25kZXN0cm95KTtcblx0fVxuXG5cdGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50LnA7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudF9jb250ZXh0XG4gKiBAcmV0dXJucyB7TWFwPHVua25vd24sIHVua25vd24+IHwgbnVsbH1cbiAqL1xuZnVuY3Rpb24gZ2V0X3BhcmVudF9jb250ZXh0KGNvbXBvbmVudF9jb250ZXh0KSB7XG5cdGxldCBwYXJlbnQgPSBjb21wb25lbnRfY29udGV4dC5wO1xuXG5cdHdoaWxlIChwYXJlbnQgIT09IG51bGwpIHtcblx0XHRjb25zdCBjb250ZXh0X21hcCA9IHBhcmVudC5jO1xuXHRcdGlmIChjb250ZXh0X21hcCAhPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGNvbnRleHRfbWFwO1xuXHRcdH1cblx0XHRwYXJlbnQgPSBwYXJlbnQucDtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuIiwgImltcG9ydCB7IEhZRFJBVElPTl9FTkQsIEhZRFJBVElPTl9TVEFSVCwgSFlEUkFUSU9OX1NUQVJUX0VMU0UgfSBmcm9tICcuLi8uLi9jb25zdGFudHMuanMnO1xuXG5leHBvcnQgY29uc3QgQkxPQ0tfT1BFTiA9IGA8IS0tJHtIWURSQVRJT05fU1RBUlR9LS0+YDtcbmV4cG9ydCBjb25zdCBCTE9DS19PUEVOX0VMU0UgPSBgPCEtLSR7SFlEUkFUSU9OX1NUQVJUX0VMU0V9LS0+YDtcbmV4cG9ydCBjb25zdCBCTE9DS19DTE9TRSA9IGA8IS0tJHtIWURSQVRJT05fRU5EfS0tPmA7XG5leHBvcnQgY29uc3QgRU1QVFlfQ09NTUVOVCA9IGA8IS0tLS0+YDtcbiIsICIvKipcbiAqIE1hcCBvZiBlbGVtZW50cyB0aGF0IGhhdmUgY2VydGFpbiBlbGVtZW50cyB0aGF0IGFyZSBub3QgYWxsb3dlZCBpbnNpZGUgdGhlbSwgaW4gdGhlIHNlbnNlIHRoYXQgdGhleSB3aWxsIGF1dG8tY2xvc2UgdGhlIHBhcmVudC9hbmNlc3RvciBlbGVtZW50LlxuICogVGhlb3JldGljYWxseSBvbmUgY291bGQgdGFrZSBhZHZhbnRhZ2Ugb2YgaXQgYnV0IG1vc3Qgb2YgdGhlIHRpbWUgaXQgd2lsbCBqdXN0IHJlc3VsdCBpbiBjb25mdXNpbmcgYmVoYXZpb3IgYW5kIGJyZWFrIHdoZW4gU1NSJ2QuXG4gKiBUaGVyZSBhcmUgbW9yZSBlbGVtZW50cyB0aGF0IGFyZSBpbnZhbGlkIGluc2lkZSBvdGhlciBlbGVtZW50cywgYnV0IHRoZXkncmUgbm90IGF1dG8tY2xvc2VkIGFuZCBzbyBkb24ndCBicmVhayBTU1IgYW5kIGFyZSB0aGVyZWZvcmUgbm90IGxpc3RlZCBoZXJlLlxuICogQHR5cGUge1JlY29yZDxzdHJpbmcsIHsgZGlyZWN0OiBzdHJpbmdbXX0gfCB7IGRlc2NlbmRhbnQ6IHN0cmluZ1tdOyByZXNldF9ieT86IHN0cmluZ1tdIH0+fVxuICovXG5jb25zdCBhdXRvY2xvc2luZ19jaGlsZHJlbiA9IHtcblx0Ly8gYmFzZWQgb24gaHR0cDovL2RldmVsb3BlcnMud2hhdHdnLm9yZy9zeW50YXguaHRtbCNzeW50YXgtdGFnLW9taXNzaW9uXG5cdGxpOiB7IGRpcmVjdDogWydsaSddIH0sXG5cdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9kdCN0ZWNobmljYWxfc3VtbWFyeVxuXHRkdDogeyBkZXNjZW5kYW50OiBbJ2R0JywgJ2RkJ10sIHJlc2V0X2J5OiBbJ2RsJ10gfSxcblx0ZGQ6IHsgZGVzY2VuZGFudDogWydkdCcsICdkZCddLCByZXNldF9ieTogWydkbCddIH0sXG5cdHA6IHtcblx0XHRkZXNjZW5kYW50OiBbXG5cdFx0XHQnYWRkcmVzcycsXG5cdFx0XHQnYXJ0aWNsZScsXG5cdFx0XHQnYXNpZGUnLFxuXHRcdFx0J2Jsb2NrcXVvdGUnLFxuXHRcdFx0J2RpdicsXG5cdFx0XHQnZGwnLFxuXHRcdFx0J2ZpZWxkc2V0Jyxcblx0XHRcdCdmb290ZXInLFxuXHRcdFx0J2Zvcm0nLFxuXHRcdFx0J2gxJyxcblx0XHRcdCdoMicsXG5cdFx0XHQnaDMnLFxuXHRcdFx0J2g0Jyxcblx0XHRcdCdoNScsXG5cdFx0XHQnaDYnLFxuXHRcdFx0J2hlYWRlcicsXG5cdFx0XHQnaGdyb3VwJyxcblx0XHRcdCdocicsXG5cdFx0XHQnbWFpbicsXG5cdFx0XHQnbWVudScsXG5cdFx0XHQnbmF2Jyxcblx0XHRcdCdvbCcsXG5cdFx0XHQncCcsXG5cdFx0XHQncHJlJyxcblx0XHRcdCdzZWN0aW9uJyxcblx0XHRcdCd0YWJsZScsXG5cdFx0XHQndWwnXG5cdFx0XVxuXHR9LFxuXHRydDogeyBkZXNjZW5kYW50OiBbJ3J0JywgJ3JwJ10gfSxcblx0cnA6IHsgZGVzY2VuZGFudDogWydydCcsICdycCddIH0sXG5cdG9wdGdyb3VwOiB7IGRlc2NlbmRhbnQ6IFsnb3B0Z3JvdXAnXSB9LFxuXHRvcHRpb246IHsgZGVzY2VuZGFudDogWydvcHRpb24nLCAnb3B0Z3JvdXAnXSB9LFxuXHR0aGVhZDogeyBkaXJlY3Q6IFsndGJvZHknLCAndGZvb3QnXSB9LFxuXHR0Ym9keTogeyBkaXJlY3Q6IFsndGJvZHknLCAndGZvb3QnXSB9LFxuXHR0Zm9vdDogeyBkaXJlY3Q6IFsndGJvZHknXSB9LFxuXHR0cjogeyBkaXJlY3Q6IFsndHInLCAndGJvZHknXSB9LFxuXHR0ZDogeyBkaXJlY3Q6IFsndGQnLCAndGgnLCAndHInXSB9LFxuXHR0aDogeyBkaXJlY3Q6IFsndGQnLCAndGgnLCAndHInXSB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdGFnIGlzIGVpdGhlciB0aGUgbGFzdCBpbiB0aGUgbGlzdCBvZiBzaWJsaW5ncyBhbmQgd2lsbCBiZSBhdXRvY2xvc2VkLFxuICogb3Igbm90IGFsbG93ZWQgaW5zaWRlIHRoZSBwYXJlbnQgdGFnIHN1Y2ggdGhhdCBpdCB3aWxsIGF1dG8tY2xvc2UgaXQuIFRoZSBsYXR0ZXIgcmVzdWx0c1xuICogaW4gdGhlIGJyb3dzZXIgcmVwYWlyaW5nIHRoZSBIVE1MLCB3aGljaCB3aWxsIGxpa2VseSByZXN1bHQgaW4gYW4gZXJyb3IgZHVyaW5nIGh5ZHJhdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gW25leHRdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zaW5nX3RhZ19vbWl0dGVkKGN1cnJlbnQsIG5leHQpIHtcblx0Y29uc3QgZGlzYWxsb3dlZCA9IGF1dG9jbG9zaW5nX2NoaWxkcmVuW2N1cnJlbnRdO1xuXHRpZiAoZGlzYWxsb3dlZCkge1xuXHRcdGlmIChcblx0XHRcdCFuZXh0IHx8XG5cdFx0XHQoJ2RpcmVjdCcgaW4gZGlzYWxsb3dlZCA/IGRpc2FsbG93ZWQuZGlyZWN0IDogZGlzYWxsb3dlZC5kZXNjZW5kYW50KS5pbmNsdWRlcyhuZXh0KVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBNYXAgb2YgZWxlbWVudHMgdGhhdCBoYXZlIGNlcnRhaW4gZWxlbWVudHMgdGhhdCBhcmUgbm90IGFsbG93ZWQgaW5zaWRlIHRoZW0sIGluIHRoZSBzZW5zZSB0aGF0IHRoZSBicm93c2VyIHdpbGwgc29tZWhvdyByZXBhaXIgdGhlIEhUTUwuXG4gKiBUaGVyZSBhcmUgbW9yZSBlbGVtZW50cyB0aGF0IGFyZSBpbnZhbGlkIGluc2lkZSBvdGhlciBlbGVtZW50cywgYnV0IHRoZXkncmUgbm90IHJlcGFpcmVkIGFuZCBzbyBkb24ndCBicmVhayBTU1IgYW5kIGFyZSB0aGVyZWZvcmUgbm90IGxpc3RlZCBoZXJlLlxuICogQHR5cGUge1JlY29yZDxzdHJpbmcsIHsgZGlyZWN0OiBzdHJpbmdbXX0gfCB7IGRlc2NlbmRhbnQ6IHN0cmluZ1tdOyByZXNldF9ieT86IHN0cmluZ1tdOyBvbmx5Pzogc3RyaW5nW10gfSB8IHsgb25seTogc3RyaW5nW10gfT59XG4gKi9cbmNvbnN0IGRpc2FsbG93ZWRfY2hpbGRyZW4gPSB7XG5cdC4uLmF1dG9jbG9zaW5nX2NoaWxkcmVuLFxuXHRvcHRncm91cDogeyBvbmx5OiBbJ29wdGlvbicsICcjdGV4dCddIH0sXG5cdC8vIFN0cmljdGx5IHNwZWFraW5nLCBzZWVpbmcgYW4gPG9wdGlvbj4gZG9lc24ndCBtZWFuIHdlJ3JlIGluIGEgPHNlbGVjdD4sIGJ1dCB3ZSBhc3N1bWUgaXQgaGVyZVxuXHRvcHRpb246IHsgb25seTogWycjdGV4dCddIH0sXG5cdGZvcm06IHsgZGVzY2VuZGFudDogWydmb3JtJ10gfSxcblx0YTogeyBkZXNjZW5kYW50OiBbJ2EnXSB9LFxuXHRidXR0b246IHsgZGVzY2VuZGFudDogWydidXR0b24nXSB9LFxuXHRoMTogeyBkZXNjZW5kYW50OiBbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10gfSxcblx0aDI6IHsgZGVzY2VuZGFudDogWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddIH0sXG5cdGgzOiB7IGRlc2NlbmRhbnQ6IFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXSB9LFxuXHRoNDogeyBkZXNjZW5kYW50OiBbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10gfSxcblx0aDU6IHsgZGVzY2VuZGFudDogWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddIH0sXG5cdGg2OiB7IGRlc2NlbmRhbnQ6IFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXSB9LFxuXHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNwYXJzaW5nLW1haW4taW5zZWxlY3Rcblx0c2VsZWN0OiB7IG9ubHk6IFsnb3B0aW9uJywgJ29wdGdyb3VwJywgJyN0ZXh0JywgJ2hyJywgJ3NjcmlwdCcsICd0ZW1wbGF0ZSddIH0sXG5cblx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjcGFyc2luZy1tYWluLWludGRcblx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjcGFyc2luZy1tYWluLWluY2FwdGlvblxuXHQvLyBObyBzcGVjaWFsIGJlaGF2aW9yIHNpbmNlIHRoZXNlIHJ1bGVzIGZhbGwgYmFjayB0byBcImluIGJvZHlcIiBtb2RlIGZvclxuXHQvLyBhbGwgZXhjZXB0IHNwZWNpYWwgdGFibGUgbm9kZXMgd2hpY2ggY2F1c2UgYmFkIHBhcnNpbmcgYmVoYXZpb3IgYW55d2F5LlxuXG5cdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbnRkXG5cdHRyOiB7IG9ubHk6IFsndGgnLCAndGQnLCAnc3R5bGUnLCAnc2NyaXB0JywgJ3RlbXBsYXRlJ10gfSxcblx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjcGFyc2luZy1tYWluLWludGJvZHlcblx0dGJvZHk6IHsgb25seTogWyd0cicsICdzdHlsZScsICdzY3JpcHQnLCAndGVtcGxhdGUnXSB9LFxuXHR0aGVhZDogeyBvbmx5OiBbJ3RyJywgJ3N0eWxlJywgJ3NjcmlwdCcsICd0ZW1wbGF0ZSddIH0sXG5cdHRmb290OiB7IG9ubHk6IFsndHInLCAnc3R5bGUnLCAnc2NyaXB0JywgJ3RlbXBsYXRlJ10gfSxcblx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjcGFyc2luZy1tYWluLWluY29sZ3JvdXBcblx0Y29sZ3JvdXA6IHsgb25seTogWydjb2wnLCAndGVtcGxhdGUnXSB9LFxuXHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNwYXJzaW5nLW1haW4taW50YWJsZVxuXHR0YWJsZToge1xuXHRcdG9ubHk6IFsnY2FwdGlvbicsICdjb2xncm91cCcsICd0Ym9keScsICd0aGVhZCcsICd0Zm9vdCcsICdzdHlsZScsICdzY3JpcHQnLCAndGVtcGxhdGUnXVxuXHR9LFxuXHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNwYXJzaW5nLW1haW4taW5oZWFkXG5cdGhlYWQ6IHtcblx0XHRvbmx5OiBbXG5cdFx0XHQnYmFzZScsXG5cdFx0XHQnYmFzZWZvbnQnLFxuXHRcdFx0J2Jnc291bmQnLFxuXHRcdFx0J2xpbmsnLFxuXHRcdFx0J21ldGEnLFxuXHRcdFx0J3RpdGxlJyxcblx0XHRcdCdub3NjcmlwdCcsXG5cdFx0XHQnbm9mcmFtZXMnLFxuXHRcdFx0J3N0eWxlJyxcblx0XHRcdCdzY3JpcHQnLFxuXHRcdFx0J3RlbXBsYXRlJ1xuXHRcdF1cblx0fSxcblx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjdGhlLWh0bWwtZWxlbWVudFxuXHRodG1sOiB7IG9ubHk6IFsnaGVhZCcsICdib2R5JywgJ2ZyYW1lc2V0J10gfSxcblx0ZnJhbWVzZXQ6IHsgb25seTogWydmcmFtZSddIH0sXG5cdCcjZG9jdW1lbnQnOiB7IG9ubHk6IFsnaHRtbCddIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBlcnJvciBtZXNzYWdlIGlmIHRoZSB0YWcgaXMgbm90IGFsbG93ZWQgaW5zaWRlIHRoZSBhbmNlc3RvciB0YWcgKHdoaWNoIGlzIGdyYW5kcGFyZW50IGFuZCBhYm92ZSkgc3VjaCB0aGF0IGl0IHdpbGwgcmVzdWx0XG4gKiBpbiB0aGUgYnJvd3NlciByZXBhaXJpbmcgdGhlIEhUTUwsIHdoaWNoIHdpbGwgbGlrZWx5IHJlc3VsdCBpbiBhbiBlcnJvciBkdXJpbmcgaHlkcmF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IGNoaWxkX3RhZ1xuICogQHBhcmFtIHtzdHJpbmdbXX0gYW5jZXN0b3JzIEFsbCBub2RlcyBzdGFydGluZyB3aXRoIHRoZSBwYXJlbnQsIHVwIHVudGlsIHRoZSBhbmNlc3Rvciwgd2hpY2ggbWVhbnMgdHdvIGVudHJpZXMgbWluaW11bVxuICogQHBhcmFtIHtzdHJpbmd9IFtjaGlsZF9sb2NdXG4gKiBAcGFyYW0ge3N0cmluZ30gW2FuY2VzdG9yX2xvY11cbiAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfdGFnX3ZhbGlkX3dpdGhfYW5jZXN0b3IoY2hpbGRfdGFnLCBhbmNlc3RvcnMsIGNoaWxkX2xvYywgYW5jZXN0b3JfbG9jKSB7XG5cdGlmIChjaGlsZF90YWcuaW5jbHVkZXMoJy0nKSkgcmV0dXJuIG51bGw7IC8vIGN1c3RvbSBlbGVtZW50cyBjYW4gYmUgYW55dGhpbmdcblxuXHRjb25zdCBhbmNlc3Rvcl90YWcgPSBhbmNlc3RvcnNbYW5jZXN0b3JzLmxlbmd0aCAtIDFdO1xuXHRjb25zdCBkaXNhbGxvd2VkID0gZGlzYWxsb3dlZF9jaGlsZHJlblthbmNlc3Rvcl90YWddO1xuXHRpZiAoIWRpc2FsbG93ZWQpIHJldHVybiBudWxsO1xuXG5cdGlmICgncmVzZXRfYnknIGluIGRpc2FsbG93ZWQgJiYgZGlzYWxsb3dlZC5yZXNldF9ieSkge1xuXHRcdGZvciAobGV0IGkgPSBhbmNlc3RvcnMubGVuZ3RoIC0gMjsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGNvbnN0IGFuY2VzdG9yID0gYW5jZXN0b3JzW2ldO1xuXHRcdFx0aWYgKGFuY2VzdG9yLmluY2x1ZGVzKCctJykpIHJldHVybiBudWxsOyAvLyBjdXN0b20gZWxlbWVudHMgY2FuIGJlIGFueXRoaW5nXG5cblx0XHRcdC8vIEEgcmVzZXQgbWVhbnMgdGhhdCBmb3JiaWRkZW4gZGVzY2VuZGFudHMgYXJlIGFsbG93ZWQgYWdhaW5cblx0XHRcdGlmIChkaXNhbGxvd2VkLnJlc2V0X2J5LmluY2x1ZGVzKGFuY2VzdG9yc1tpXSkpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCdkZXNjZW5kYW50JyBpbiBkaXNhbGxvd2VkICYmIGRpc2FsbG93ZWQuZGVzY2VuZGFudC5pbmNsdWRlcyhjaGlsZF90YWcpKSB7XG5cdFx0Y29uc3QgY2hpbGQgPSBjaGlsZF9sb2MgPyBgXFxgPCR7Y2hpbGRfdGFnfT5cXGAgKCR7Y2hpbGRfbG9jfSlgIDogYFxcYDwke2NoaWxkX3RhZ30+XFxgYDtcblx0XHRjb25zdCBhbmNlc3RvciA9IGFuY2VzdG9yX2xvY1xuXHRcdFx0PyBgXFxgPCR7YW5jZXN0b3JfdGFnfT5cXGAgKCR7YW5jZXN0b3JfbG9jfSlgXG5cdFx0XHQ6IGBcXGA8JHthbmNlc3Rvcl90YWd9PlxcYGA7XG5cblx0XHRyZXR1cm4gYCR7Y2hpbGR9IGNhbm5vdCBiZSBhIGRlc2NlbmRhbnQgb2YgJHthbmNlc3Rvcn1gO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBlcnJvciBtZXNzYWdlIGlmIHRoZSB0YWcgaXMgbm90IGFsbG93ZWQgaW5zaWRlIHRoZSBwYXJlbnQgdGFnIHN1Y2ggdGhhdCBpdCB3aWxsIHJlc3VsdFxuICogaW4gdGhlIGJyb3dzZXIgcmVwYWlyaW5nIHRoZSBIVE1MLCB3aGljaCB3aWxsIGxpa2VseSByZXN1bHQgaW4gYW4gZXJyb3IgZHVyaW5nIGh5ZHJhdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGlsZF90YWdcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRfdGFnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NoaWxkX2xvY11cbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyZW50X2xvY11cbiAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfdGFnX3ZhbGlkX3dpdGhfcGFyZW50KGNoaWxkX3RhZywgcGFyZW50X3RhZywgY2hpbGRfbG9jLCBwYXJlbnRfbG9jKSB7XG5cdGlmIChjaGlsZF90YWcuaW5jbHVkZXMoJy0nKSB8fCBwYXJlbnRfdGFnPy5pbmNsdWRlcygnLScpKSByZXR1cm4gbnVsbDsgLy8gY3VzdG9tIGVsZW1lbnRzIGNhbiBiZSBhbnl0aGluZ1xuXG5cdGlmIChwYXJlbnRfdGFnID09PSAndGVtcGxhdGUnKSByZXR1cm4gbnVsbDsgLy8gbm8gZXJyb3JzIG9yIHdhcm5pbmcgc2hvdWxkIGJlIHRocm93biBpbiBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGVtcGxhdGUgdGFnc1xuXG5cdGNvbnN0IGRpc2FsbG93ZWQgPSBkaXNhbGxvd2VkX2NoaWxkcmVuW3BhcmVudF90YWddO1xuXG5cdGNvbnN0IGNoaWxkID0gY2hpbGRfbG9jID8gYFxcYDwke2NoaWxkX3RhZ30+XFxgICgke2NoaWxkX2xvY30pYCA6IGBcXGA8JHtjaGlsZF90YWd9PlxcYGA7XG5cdGNvbnN0IHBhcmVudCA9IHBhcmVudF9sb2MgPyBgXFxgPCR7cGFyZW50X3RhZ30+XFxgICgke3BhcmVudF9sb2N9KWAgOiBgXFxgPCR7cGFyZW50X3RhZ30+XFxgYDtcblxuXHRpZiAoZGlzYWxsb3dlZCkge1xuXHRcdGlmICgnZGlyZWN0JyBpbiBkaXNhbGxvd2VkICYmIGRpc2FsbG93ZWQuZGlyZWN0LmluY2x1ZGVzKGNoaWxkX3RhZykpIHtcblx0XHRcdHJldHVybiBgJHtjaGlsZH0gY2Fubm90IGJlIGEgZGlyZWN0IGNoaWxkIG9mICR7cGFyZW50fWA7XG5cdFx0fVxuXG5cdFx0aWYgKCdkZXNjZW5kYW50JyBpbiBkaXNhbGxvd2VkICYmIGRpc2FsbG93ZWQuZGVzY2VuZGFudC5pbmNsdWRlcyhjaGlsZF90YWcpKSB7XG5cdFx0XHRyZXR1cm4gYCR7Y2hpbGR9IGNhbm5vdCBiZSBhIGNoaWxkIG9mICR7cGFyZW50fWA7XG5cdFx0fVxuXG5cdFx0aWYgKCdvbmx5JyBpbiBkaXNhbGxvd2VkICYmIGRpc2FsbG93ZWQub25seSkge1xuXHRcdFx0aWYgKGRpc2FsbG93ZWQub25seS5pbmNsdWRlcyhjaGlsZF90YWcpKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGAke2NoaWxkfSBjYW5ub3QgYmUgYSBjaGlsZCBvZiAke3BhcmVudH0uIFxcYDwke3BhcmVudF90YWd9PlxcYCBvbmx5IGFsbG93cyB0aGVzZSBjaGlsZHJlbjogJHtkaXNhbGxvd2VkLm9ubHkubWFwKChkKSA9PiBgXFxgPCR7ZH0+XFxgYCkuam9pbignLCAnKX1gO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFRoZXNlIHRhZ3MgYXJlIG9ubHkgdmFsaWQgd2l0aCBhIGZldyBwYXJlbnRzIHRoYXQgaGF2ZSBzcGVjaWFsIGNoaWxkXG5cdC8vIHBhcnNpbmcgcnVsZXMgLSBpZiB3ZSdyZSBkb3duIGhlcmUsIHRoZW4gbm9uZSBvZiB0aG9zZSBtYXRjaGVkIGFuZFxuXHQvLyBzbyB3ZSBhbGxvdyBpdCBvbmx5IGlmIHdlIGRvbid0IGtub3cgd2hhdCB0aGUgcGFyZW50IGlzLCBhcyBhbGwgb3RoZXJcblx0Ly8gY2FzZXMgYXJlIGludmFsaWQgKGFuZCB3ZSBvbmx5IGdldCBpbnRvIHRoaXMgZnVuY3Rpb24gaWYgd2Uga25vdyB0aGUgcGFyZW50KS5cblx0c3dpdGNoIChjaGlsZF90YWcpIHtcblx0XHRjYXNlICdib2R5Jzpcblx0XHRjYXNlICdjYXB0aW9uJzpcblx0XHRjYXNlICdjb2wnOlxuXHRcdGNhc2UgJ2NvbGdyb3VwJzpcblx0XHRjYXNlICdmcmFtZXNldCc6XG5cdFx0Y2FzZSAnZnJhbWUnOlxuXHRcdGNhc2UgJ2hlYWQnOlxuXHRcdGNhc2UgJ2h0bWwnOlxuXHRcdFx0cmV0dXJuIGAke2NoaWxkfSBjYW5ub3QgYmUgYSBjaGlsZCBvZiAke3BhcmVudH1gO1xuXHRcdGNhc2UgJ3RoZWFkJzpcblx0XHRjYXNlICd0Ym9keSc6XG5cdFx0Y2FzZSAndGZvb3QnOlxuXHRcdFx0cmV0dXJuIGAke2NoaWxkfSBtdXN0IGJlIHRoZSBjaGlsZCBvZiBhIFxcYDx0YWJsZT5cXGAsIG5vdCBhICR7cGFyZW50fWA7XG5cdFx0Y2FzZSAndGQnOlxuXHRcdGNhc2UgJ3RoJzpcblx0XHRcdHJldHVybiBgJHtjaGlsZH0gbXVzdCBiZSB0aGUgY2hpbGQgb2YgYSBcXGA8dHI+XFxgLCBub3QgYSAke3BhcmVudH1gO1xuXHRcdGNhc2UgJ3RyJzpcblx0XHRcdHJldHVybiBgXFxgPHRyPlxcYCBtdXN0IGJlIHRoZSBjaGlsZCBvZiBhIFxcYDx0aGVhZD5cXGAsIFxcYDx0Ym9keT5cXGAsIG9yIFxcYDx0Zm9vdD5cXGAsIG5vdCBhICR7cGFyZW50fWA7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cbiIsICJleHBvcnQgY2xhc3MgSGVhZFBheWxvYWQge1xuXHQvKiogQHR5cGUge1NldDx7IGhhc2g6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+fSAqL1xuXHRjc3MgPSBuZXcgU2V0KCk7XG5cdG91dCA9ICcnO1xuXHR1aWQgPSAoKSA9PiAnJztcblx0dGl0bGUgPSAnJztcblxuXHRjb25zdHJ1Y3Rvcihjc3MgPSBuZXcgU2V0KCksIG91dCA9ICcnLCB0aXRsZSA9ICcnLCB1aWQgPSAoKSA9PiAnJykge1xuXHRcdHRoaXMuY3NzID0gY3NzO1xuXHRcdHRoaXMub3V0ID0gb3V0O1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLnVpZCA9IHVpZDtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGF5bG9hZCB7XG5cdC8qKiBAdHlwZSB7U2V0PHsgaGFzaDogc3RyaW5nOyBjb2RlOiBzdHJpbmcgfT59ICovXG5cdGNzcyA9IG5ldyBTZXQoKTtcblx0b3V0ID0gJyc7XG5cdHVpZCA9ICgpID0+ICcnO1xuXG5cdGhlYWQgPSBuZXcgSGVhZFBheWxvYWQoKTtcblxuXHRjb25zdHJ1Y3RvcihpZF9wcmVmaXggPSAnJykge1xuXHRcdHRoaXMudWlkID0gcHJvcHNfaWRfZ2VuZXJhdG9yKGlkX3ByZWZpeCk7XG5cdFx0dGhpcy5oZWFkLnVpZCA9IHRoaXMudWlkO1xuXHR9XG59XG5cbi8qKlxuICogVXNlZCBpbiBsZWdhY3kgbW9kZSB0byBoYW5kbGUgYmluZGluZ3NcbiAqIEBwYXJhbSB7UGF5bG9hZH0gdG9fY29weVxuICogQHJldHVybnMge1BheWxvYWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5X3BheWxvYWQoeyBvdXQsIGNzcywgaGVhZCwgdWlkIH0pIHtcblx0Y29uc3QgcGF5bG9hZCA9IG5ldyBQYXlsb2FkKCk7XG5cblx0cGF5bG9hZC5vdXQgPSBvdXQ7XG5cdHBheWxvYWQuY3NzID0gbmV3IFNldChjc3MpO1xuXHRwYXlsb2FkLnVpZCA9IHVpZDtcblxuXHRwYXlsb2FkLmhlYWQgPSBuZXcgSGVhZFBheWxvYWQoKTtcblx0cGF5bG9hZC5oZWFkLm91dCA9IGhlYWQub3V0O1xuXHRwYXlsb2FkLmhlYWQuY3NzID0gbmV3IFNldChoZWFkLmNzcyk7XG5cdHBheWxvYWQuaGVhZC50aXRsZSA9IGhlYWQudGl0bGU7XG5cdHBheWxvYWQuaGVhZC51aWQgPSBoZWFkLnVpZDtcblxuXHRyZXR1cm4gcGF5bG9hZDtcbn1cblxuLyoqXG4gKiBBc3NpZ25zIHNlY29uZCBwYXlsb2FkIHRvIGZpcnN0XG4gKiBAcGFyYW0ge1BheWxvYWR9IHAxXG4gKiBAcGFyYW0ge1BheWxvYWR9IHAyXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbl9wYXlsb2FkKHAxLCBwMikge1xuXHRwMS5vdXQgPSBwMi5vdXQ7XG5cdHAxLmNzcyA9IHAyLmNzcztcblx0cDEuaGVhZCA9IHAyLmhlYWQ7XG5cdHAxLnVpZCA9IHAyLnVpZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIElEIGdlbmVyYXRvclxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICogQHJldHVybnMgeygpID0+IHN0cmluZ31cbiAqL1xuZnVuY3Rpb24gcHJvcHNfaWRfZ2VuZXJhdG9yKHByZWZpeCkge1xuXHRsZXQgdWlkID0gMTtcblx0cmV0dXJuICgpID0+IGAke3ByZWZpeH1zJHt1aWQrK31gO1xufVxuIiwgIi8qKiBAaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnI3NlcnZlcicgKi9cbmltcG9ydCB7IEZJTEVOQU1FIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7XG5cdGlzX3RhZ192YWxpZF93aXRoX2FuY2VzdG9yLFxuXHRpc190YWdfdmFsaWRfd2l0aF9wYXJlbnRcbn0gZnJvbSAnLi4vLi4vaHRtbC10cmVlLXZhbGlkYXRpb24uanMnO1xuaW1wb3J0IHsgY3VycmVudF9jb21wb25lbnQgfSBmcm9tICcuL2NvbnRleHQuanMnO1xuaW1wb3J0IHsgaW52YWxpZF9zbmlwcGV0X2FyZ3VtZW50cyB9IGZyb20gJy4uL3NoYXJlZC9lcnJvcnMuanMnO1xuaW1wb3J0IHsgSGVhZFBheWxvYWQsIFBheWxvYWQgfSBmcm9tICcuL3BheWxvYWQuanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiBcdHRhZzogc3RyaW5nO1xuICogXHRwYXJlbnQ6IG51bGwgfCBFbGVtZW50O1xuICogIGZpbGVuYW1lOiBudWxsIHwgc3RyaW5nO1xuICogIGxpbmU6IG51bWJlcjtcbiAqICBjb2x1bW46IG51bWJlcjtcbiAqIH19IEVsZW1lbnRcbiAqL1xuXG4vKipcbiAqIEB0eXBlIHtFbGVtZW50IHwgbnVsbH1cbiAqL1xubGV0IHBhcmVudCA9IG51bGw7XG5cbi8qKiBAdHlwZSB7U2V0PHN0cmluZz59ICovXG5sZXQgc2VlbjtcblxuLyoqXG4gKiBAcGFyYW0ge1BheWxvYWR9IHBheWxvYWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKi9cbmZ1bmN0aW9uIHByaW50X2Vycm9yKHBheWxvYWQsIG1lc3NhZ2UpIHtcblx0bWVzc2FnZSA9XG5cdFx0YG5vZGVfaW52YWxpZF9wbGFjZW1lbnRfc3NyOiAke21lc3NhZ2V9XFxuXFxuYCArXG5cdFx0J1RoaXMgY2FuIGNhdXNlIGNvbnRlbnQgdG8gc2hpZnQgYXJvdW5kIGFzIHRoZSBicm93c2VyIHJlcGFpcnMgdGhlIEhUTUwsIGFuZCB3aWxsIGxpa2VseSByZXN1bHQgaW4gYSBgaHlkcmF0aW9uX21pc21hdGNoYCB3YXJuaW5nLic7XG5cblx0aWYgKChzZWVuID8/PSBuZXcgU2V0KCkpLmhhcyhtZXNzYWdlKSkgcmV0dXJuO1xuXHRzZWVuLmFkZChtZXNzYWdlKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuXHRwYXlsb2FkLmhlYWQub3V0ICs9IGA8c2NyaXB0PmNvbnNvbGUuZXJyb3IoJHtKU09OLnN0cmluZ2lmeShtZXNzYWdlKX0pPC9zY3JpcHQ+YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0X2VsZW1lbnRzKCkge1xuXHRsZXQgb2xkX3BhcmVudCA9IHBhcmVudDtcblx0cGFyZW50ID0gbnVsbDtcblx0cmV0dXJuICgpID0+IHtcblx0XHRwYXJlbnQgPSBvbGRfcGFyZW50O1xuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UGF5bG9hZH0gcGF5bG9hZFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtudW1iZXJ9IGxpbmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1c2hfZWxlbWVudChwYXlsb2FkLCB0YWcsIGxpbmUsIGNvbHVtbikge1xuXHR2YXIgZmlsZW5hbWUgPSAvKiogQHR5cGUge0NvbXBvbmVudH0gKi8gKGN1cnJlbnRfY29tcG9uZW50KS5mdW5jdGlvbltGSUxFTkFNRV07XG5cdHZhciBjaGlsZCA9IHsgdGFnLCBwYXJlbnQsIGZpbGVuYW1lLCBsaW5lLCBjb2x1bW4gfTtcblxuXHRpZiAocGFyZW50ICE9PSBudWxsKSB7XG5cdFx0dmFyIGFuY2VzdG9yID0gcGFyZW50LnBhcmVudDtcblx0XHR2YXIgYW5jZXN0b3JzID0gW3BhcmVudC50YWddO1xuXG5cdFx0Y29uc3QgY2hpbGRfbG9jID0gZmlsZW5hbWUgPyBgJHtmaWxlbmFtZX06JHtsaW5lfToke2NvbHVtbn1gIDogdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHBhcmVudF9sb2MgPSBwYXJlbnQuZmlsZW5hbWVcblx0XHRcdD8gYCR7cGFyZW50LmZpbGVuYW1lfToke3BhcmVudC5saW5lfToke3BhcmVudC5jb2x1bW59YFxuXHRcdFx0OiB1bmRlZmluZWQ7XG5cblx0XHRjb25zdCBtZXNzYWdlID0gaXNfdGFnX3ZhbGlkX3dpdGhfcGFyZW50KHRhZywgcGFyZW50LnRhZywgY2hpbGRfbG9jLCBwYXJlbnRfbG9jKTtcblx0XHRpZiAobWVzc2FnZSkgcHJpbnRfZXJyb3IocGF5bG9hZCwgbWVzc2FnZSk7XG5cblx0XHR3aGlsZSAoYW5jZXN0b3IgIT0gbnVsbCkge1xuXHRcdFx0YW5jZXN0b3JzLnB1c2goYW5jZXN0b3IudGFnKTtcblx0XHRcdGNvbnN0IGFuY2VzdG9yX2xvYyA9IGFuY2VzdG9yLmZpbGVuYW1lXG5cdFx0XHRcdD8gYCR7YW5jZXN0b3IuZmlsZW5hbWV9OiR7YW5jZXN0b3IubGluZX06JHthbmNlc3Rvci5jb2x1bW59YFxuXHRcdFx0XHQ6IHVuZGVmaW5lZDtcblxuXHRcdFx0Y29uc3QgbWVzc2FnZSA9IGlzX3RhZ192YWxpZF93aXRoX2FuY2VzdG9yKHRhZywgYW5jZXN0b3JzLCBjaGlsZF9sb2MsIGFuY2VzdG9yX2xvYyk7XG5cdFx0XHRpZiAobWVzc2FnZSkgcHJpbnRfZXJyb3IocGF5bG9hZCwgbWVzc2FnZSk7XG5cblx0XHRcdGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50O1xuXHRcdH1cblx0fVxuXG5cdHBhcmVudCA9IGNoaWxkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wX2VsZW1lbnQoKSB7XG5cdHBhcmVudCA9IC8qKiBAdHlwZSB7RWxlbWVudH0gKi8gKHBhcmVudCkucGFyZW50O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UGF5bG9hZH0gcGF5bG9hZFxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVfc25pcHBldF9hcmdzKHBheWxvYWQpIHtcblx0aWYgKFxuXHRcdHR5cGVvZiBwYXlsb2FkICE9PSAnb2JqZWN0JyB8fFxuXHRcdC8vIGZvciBzb21lIHJlYXNvbiB0eXBlc2NyaXB0IGNvbnNpZGVyIHRoZSB0eXBlIG9mIHBheWxvYWQgYXMgbmV2ZXIgYWZ0ZXIgdGhlIGZpcnN0IGluc3RhbmNlb2Zcblx0XHQhKHBheWxvYWQgaW5zdGFuY2VvZiBQYXlsb2FkIHx8IC8qKiBAdHlwZSB7YW55fSAqLyAocGF5bG9hZCkgaW5zdGFuY2VvZiBIZWFkUGF5bG9hZClcblx0KSB7XG5cdFx0aW52YWxpZF9zbmlwcGV0X2FyZ3VtZW50cygpO1xuXHR9XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBDb21wb25lbnRUeXBlLCBTdmVsdGVDb21wb25lbnQgfSBmcm9tICdzdmVsdGUnICovXG4vKiogQGltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyT3V0cHV0IH0gZnJvbSAnI3NlcnZlcicgKi9cbi8qKiBAaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcjc2hhcmVkJyAqL1xuZXhwb3J0IHsgRklMRU5BTUUsIEhNUiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyBhdHRyLCBjbHN4LCB0b19jbGFzcywgdG9fc3R5bGUgfSBmcm9tICcuLi9zaGFyZWQvYXR0cmlidXRlcy5qcyc7XG5pbXBvcnQgeyBpc19wcm9taXNlLCBub29wIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7IHN1YnNjcmliZV90b19zdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL3V0aWxzLmpzJztcbmltcG9ydCB7XG5cdFVOSU5JVElBTElaRUQsXG5cdEVMRU1FTlRfUFJFU0VSVkVfQVRUUklCVVRFX0NBU0UsXG5cdEVMRU1FTlRfSVNfTkFNRVNQQUNFRFxufSBmcm9tICcuLi8uLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgZXNjYXBlX2h0bWwgfSBmcm9tICcuLi8uLi9lc2NhcGluZy5qcyc7XG5pbXBvcnQgeyBERVYgfSBmcm9tICdlc20tZW52JztcbmltcG9ydCB7IGN1cnJlbnRfY29tcG9uZW50LCBwb3AsIHB1c2ggfSBmcm9tICcuL2NvbnRleHQuanMnO1xuaW1wb3J0IHsgRU1QVFlfQ09NTUVOVCwgQkxPQ0tfQ0xPU0UsIEJMT0NLX09QRU4sIEJMT0NLX09QRU5fRUxTRSB9IGZyb20gJy4vaHlkcmF0aW9uLmpzJztcbmltcG9ydCB7IHZhbGlkYXRlX3N0b3JlIH0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRlLmpzJztcbmltcG9ydCB7IGlzX2Jvb2xlYW5fYXR0cmlidXRlLCBpc19yYXdfdGV4dF9lbGVtZW50LCBpc192b2lkIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgcmVzZXRfZWxlbWVudHMgfSBmcm9tICcuL2Rldi5qcyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi9wYXlsb2FkLmpzJztcblxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0yXG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jbm9uY2hhcmFjdGVyXG5jb25zdCBJTlZBTElEX0FUVFJfTkFNRV9DSEFSX1JFR0VYID1cblx0L1tcXHMnXCI+Lz1cXHV7RkREMH0tXFx1e0ZERUZ9XFx1e0ZGRkV9XFx1e0ZGRkZ9XFx1ezFGRkZFfVxcdXsxRkZGRn1cXHV7MkZGRkV9XFx1ezJGRkZGfVxcdXszRkZGRX1cXHV7M0ZGRkZ9XFx1ezRGRkZFfVxcdXs0RkZGRn1cXHV7NUZGRkV9XFx1ezVGRkZGfVxcdXs2RkZGRX1cXHV7NkZGRkZ9XFx1ezdGRkZFfVxcdXs3RkZGRn1cXHV7OEZGRkV9XFx1ezhGRkZGfVxcdXs5RkZGRX1cXHV7OUZGRkZ9XFx1e0FGRkZFfVxcdXtBRkZGRn1cXHV7QkZGRkV9XFx1e0JGRkZGfVxcdXtDRkZGRX1cXHV7Q0ZGRkZ9XFx1e0RGRkZFfVxcdXtERkZGRn1cXHV7RUZGRkV9XFx1e0VGRkZGfVxcdXtGRkZGRX1cXHV7RkZGRkZ9XFx1ezEwRkZGRX1cXHV7MTBGRkZGfV0vdTtcblxuLyoqXG4gKiBAcGFyYW0ge1BheWxvYWR9IHBheWxvYWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gYXR0cmlidXRlc19mblxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjaGlsZHJlbl9mblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50KHBheWxvYWQsIHRhZywgYXR0cmlidXRlc19mbiA9IG5vb3AsIGNoaWxkcmVuX2ZuID0gbm9vcCkge1xuXHRwYXlsb2FkLm91dCArPSAnPCEtLS0tPic7XG5cblx0aWYgKHRhZykge1xuXHRcdHBheWxvYWQub3V0ICs9IGA8JHt0YWd9YDtcblx0XHRhdHRyaWJ1dGVzX2ZuKCk7XG5cdFx0cGF5bG9hZC5vdXQgKz0gYD5gO1xuXG5cdFx0aWYgKCFpc192b2lkKHRhZykpIHtcblx0XHRcdGNoaWxkcmVuX2ZuKCk7XG5cdFx0XHRpZiAoIWlzX3Jhd190ZXh0X2VsZW1lbnQodGFnKSkge1xuXHRcdFx0XHRwYXlsb2FkLm91dCArPSBFTVBUWV9DT01NRU5UO1xuXHRcdFx0fVxuXHRcdFx0cGF5bG9hZC5vdXQgKz0gYDwvJHt0YWd9PmA7XG5cdFx0fVxuXHR9XG5cblx0cGF5bG9hZC5vdXQgKz0gJzwhLS0tLT4nO1xufVxuXG4vKipcbiAqIEFycmF5IG9mIGBvbkRlc3Ryb3lgIGNhbGxiYWNrcyB0aGF0IHNob3VsZCBiZSBjYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGUgc2VydmVyIHJlbmRlciBmdW5jdGlvblxuICogQHR5cGUge0Z1bmN0aW9uW119XG4gKi9cbmV4cG9ydCBsZXQgb25fZGVzdHJveSA9IFtdO1xuXG4vKipcbiAqIE9ubHkgYXZhaWxhYmxlIG9uIHRoZSBzZXJ2ZXIgYW5kIHdoZW4gY29tcGlsaW5nIHdpdGggdGhlIGBzZXJ2ZXJgIG9wdGlvbi5cbiAqIFRha2VzIGEgY29tcG9uZW50IGFuZCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGBib2R5YCBhbmQgYGhlYWRgIHByb3BlcnRpZXMgb24gaXQsIHdoaWNoIHlvdSBjYW4gdXNlIHRvIHBvcHVsYXRlIHRoZSBIVE1MIHdoZW4gc2VydmVyLXJlbmRlcmluZyB5b3VyIGFwcC5cbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gUHJvcHNcbiAqIEBwYXJhbSB7aW1wb3J0KCdzdmVsdGUnKS5Db21wb25lbnQ8UHJvcHM+IHwgQ29tcG9uZW50VHlwZTxTdmVsdGVDb21wb25lbnQ8UHJvcHM+Pn0gY29tcG9uZW50XG4gKiBAcGFyYW0ge3sgcHJvcHM/OiBPbWl0PFByb3BzLCAnJCRzbG90cycgfCAnJCRldmVudHMnPjsgY29udGV4dD86IE1hcDxhbnksIGFueT47IGlkUHJlZml4Pzogc3RyaW5nIH19IFtvcHRpb25zXVxuICogQHJldHVybnMge1JlbmRlck91dHB1dH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQsIG9wdGlvbnMgPSB7fSkge1xuXHRjb25zdCBwYXlsb2FkID0gbmV3IFBheWxvYWQob3B0aW9ucy5pZFByZWZpeCA/IG9wdGlvbnMuaWRQcmVmaXggKyAnLScgOiAnJyk7XG5cblx0Y29uc3QgcHJldl9vbl9kZXN0cm95ID0gb25fZGVzdHJveTtcblx0b25fZGVzdHJveSA9IFtdO1xuXHRwYXlsb2FkLm91dCArPSBCTE9DS19PUEVOO1xuXG5cdGxldCByZXNldF9yZXNldF9lbGVtZW50O1xuXG5cdGlmIChERVYpIHtcblx0XHQvLyBwcmV2ZW50IHBhcmVudC9jaGlsZCBlbGVtZW50IHN0YXRlIGJlaW5nIGNvcnJ1cHRlZCBieSBhIGJhZCByZW5kZXJcblx0XHRyZXNldF9yZXNldF9lbGVtZW50ID0gcmVzZXRfZWxlbWVudHMoKTtcblx0fVxuXG5cdGlmIChvcHRpb25zLmNvbnRleHQpIHtcblx0XHRwdXNoKCk7XG5cdFx0LyoqIEB0eXBlIHtDb21wb25lbnR9ICovIChjdXJyZW50X2NvbXBvbmVudCkuYyA9IG9wdGlvbnMuY29udGV4dDtcblx0fVxuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0Y29tcG9uZW50KHBheWxvYWQsIG9wdGlvbnMucHJvcHMgPz8ge30sIHt9LCB7fSk7XG5cblx0aWYgKG9wdGlvbnMuY29udGV4dCkge1xuXHRcdHBvcCgpO1xuXHR9XG5cblx0aWYgKHJlc2V0X3Jlc2V0X2VsZW1lbnQpIHtcblx0XHRyZXNldF9yZXNldF9lbGVtZW50KCk7XG5cdH1cblxuXHRwYXlsb2FkLm91dCArPSBCTE9DS19DTE9TRTtcblx0Zm9yIChjb25zdCBjbGVhbnVwIG9mIG9uX2Rlc3Ryb3kpIGNsZWFudXAoKTtcblx0b25fZGVzdHJveSA9IHByZXZfb25fZGVzdHJveTtcblxuXHRsZXQgaGVhZCA9IHBheWxvYWQuaGVhZC5vdXQgKyBwYXlsb2FkLmhlYWQudGl0bGU7XG5cblx0Zm9yIChjb25zdCB7IGhhc2gsIGNvZGUgfSBvZiBwYXlsb2FkLmNzcykge1xuXHRcdGhlYWQgKz0gYDxzdHlsZSBpZD1cIiR7aGFzaH1cIj4ke2NvZGV9PC9zdHlsZT5gO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRoZWFkLFxuXHRcdGh0bWw6IHBheWxvYWQub3V0LFxuXHRcdGJvZHk6IHBheWxvYWQub3V0XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtQYXlsb2FkfSBwYXlsb2FkXG4gKiBAcGFyYW0geyhoZWFkX3BheWxvYWQ6IFBheWxvYWRbJ2hlYWQnXSkgPT4gdm9pZH0gZm5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGVhZChwYXlsb2FkLCBmbikge1xuXHRjb25zdCBoZWFkX3BheWxvYWQgPSBwYXlsb2FkLmhlYWQ7XG5cdGhlYWRfcGF5bG9hZC5vdXQgKz0gQkxPQ0tfT1BFTjtcblx0Zm4oaGVhZF9wYXlsb2FkKTtcblx0aGVhZF9wYXlsb2FkLm91dCArPSBCTE9DS19DTE9TRTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1BheWxvYWR9IHBheWxvYWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNfaHRtbFxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSBwcm9wc1xuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjb21wb25lbnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZHluYW1pY1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjc3NfcHJvcHMocGF5bG9hZCwgaXNfaHRtbCwgcHJvcHMsIGNvbXBvbmVudCwgZHluYW1pYyA9IGZhbHNlKSB7XG5cdGNvbnN0IHN0eWxlcyA9IHN0eWxlX29iamVjdF90b19zdHJpbmcocHJvcHMpO1xuXG5cdGlmIChpc19odG1sKSB7XG5cdFx0cGF5bG9hZC5vdXQgKz0gYDxzdmVsdGUtY3NzLXdyYXBwZXIgc3R5bGU9XCJkaXNwbGF5OiBjb250ZW50czsgJHtzdHlsZXN9XCI+YDtcblx0fSBlbHNlIHtcblx0XHRwYXlsb2FkLm91dCArPSBgPGcgc3R5bGU9XCIke3N0eWxlc31cIj5gO1xuXHR9XG5cblx0aWYgKGR5bmFtaWMpIHtcblx0XHRwYXlsb2FkLm91dCArPSAnPCEtLS0tPic7XG5cdH1cblxuXHRjb21wb25lbnQoKTtcblxuXHRpZiAoaXNfaHRtbCkge1xuXHRcdHBheWxvYWQub3V0ICs9IGA8IS0tLS0+PC9zdmVsdGUtY3NzLXdyYXBwZXI+YDtcblx0fSBlbHNlIHtcblx0XHRwYXlsb2FkLm91dCArPSBgPCEtLS0tPjwvZz5gO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gYXR0cnNcbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gY3NzX2hhc2hcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYm9vbGVhbj59IFtjbGFzc2VzXVxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSBbc3R5bGVzXVxuICogQHBhcmFtIHtudW1iZXJ9IFtmbGFnc11cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcHJlYWRfYXR0cmlidXRlcyhhdHRycywgY3NzX2hhc2gsIGNsYXNzZXMsIHN0eWxlcywgZmxhZ3MgPSAwKSB7XG5cdGlmIChzdHlsZXMpIHtcblx0XHRhdHRycy5zdHlsZSA9IHRvX3N0eWxlKGF0dHJzLnN0eWxlLCBzdHlsZXMpO1xuXHR9XG5cblx0aWYgKGF0dHJzLmNsYXNzKSB7XG5cdFx0YXR0cnMuY2xhc3MgPSBjbHN4KGF0dHJzLmNsYXNzKTtcblx0fVxuXG5cdGlmIChjc3NfaGFzaCB8fCBjbGFzc2VzKSB7XG5cdFx0YXR0cnMuY2xhc3MgPSB0b19jbGFzcyhhdHRycy5jbGFzcywgY3NzX2hhc2gsIGNsYXNzZXMpO1xuXHR9XG5cblx0bGV0IGF0dHJfc3RyID0gJyc7XG5cdGxldCBuYW1lO1xuXG5cdGNvbnN0IGlzX2h0bWwgPSAoZmxhZ3MgJiBFTEVNRU5UX0lTX05BTUVTUEFDRUQpID09PSAwO1xuXHRjb25zdCBsb3dlcmNhc2UgPSAoZmxhZ3MgJiBFTEVNRU5UX1BSRVNFUlZFX0FUVFJJQlVURV9DQVNFKSA9PT0gMDtcblxuXHRmb3IgKG5hbWUgaW4gYXR0cnMpIHtcblx0XHQvLyBvbWl0IGZ1bmN0aW9ucywgaW50ZXJuYWwgc3ZlbHRlIHByb3BlcnRpZXMgYW5kIGludmFsaWQgYXR0cmlidXRlIG5hbWVzXG5cdFx0aWYgKHR5cGVvZiBhdHRyc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJykgY29udGludWU7XG5cdFx0aWYgKG5hbWVbMF0gPT09ICckJyAmJiBuYW1lWzFdID09PSAnJCcpIGNvbnRpbnVlOyAvLyBmYXN0ZXIgdGhhbiBuYW1lLnN0YXJ0c1dpdGgoJyQkJylcblx0XHRpZiAoSU5WQUxJRF9BVFRSX05BTUVfQ0hBUl9SRUdFWC50ZXN0KG5hbWUpKSBjb250aW51ZTtcblxuXHRcdHZhciB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXG5cdFx0aWYgKGxvd2VyY2FzZSkge1xuXHRcdFx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHR9XG5cblx0XHRhdHRyX3N0ciArPSBhdHRyKG5hbWUsIHZhbHVlLCBpc19odG1sICYmIGlzX2Jvb2xlYW5fYXR0cmlidXRlKG5hbWUpKTtcblx0fVxuXG5cdHJldHVybiBhdHRyX3N0cjtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHVua25vd24+W119IHByb3BzXG4gKiBAcmV0dXJucyB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcHJlYWRfcHJvcHMocHJvcHMpIHtcblx0LyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gKi9cblx0Y29uc3QgbWVyZ2VkX3Byb3BzID0ge307XG5cdGxldCBrZXk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IG9iaiA9IHByb3BzW2ldO1xuXHRcdGZvciAoa2V5IGluIG9iaikge1xuXHRcdFx0Y29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuXHRcdFx0aWYgKGRlc2MpIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1lcmdlZF9wcm9wcywga2V5LCBkZXNjKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lcmdlZF9wcm9wc1trZXldID0gb2JqW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBtZXJnZWRfcHJvcHM7XG59XG5cbi8qKlxuICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSkge1xuXHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWUgKyAnJztcbn1cblxuLyoqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gc3R5bGVfb2JqZWN0ICovXG5mdW5jdGlvbiBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlX29iamVjdCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVfb2JqZWN0KVxuXHRcdC5maWx0ZXIoLyoqIEBwYXJhbSB7YW55fSBrZXkgKi8gKGtleSkgPT4gc3R5bGVfb2JqZWN0W2tleV0gIT0gbnVsbCAmJiBzdHlsZV9vYmplY3Rba2V5XSAhPT0gJycpXG5cdFx0Lm1hcCgvKiogQHBhcmFtIHthbnl9IGtleSAqLyAoa2V5KSA9PiBgJHtrZXl9OiAke2VzY2FwZV9odG1sKHN0eWxlX29iamVjdFtrZXldLCB0cnVlKX07YClcblx0XHQuam9pbignICcpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWR9IFtoYXNoXVxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBib29sZWFuPn0gW2RpcmVjdGl2ZXNdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRyX2NsYXNzKHZhbHVlLCBoYXNoLCBkaXJlY3RpdmVzKSB7XG5cdHZhciByZXN1bHQgPSB0b19jbGFzcyh2YWx1ZSwgaGFzaCwgZGlyZWN0aXZlcyk7XG5cdHJldHVybiByZXN1bHQgPyBgIGNsYXNzPVwiJHtlc2NhcGVfaHRtbChyZXN1bHQsIHRydWUpfVwiYCA6ICcnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLGFueT58W1JlY29yZDxzdHJpbmcsYW55PixSZWNvcmQ8c3RyaW5nLGFueT5dfSBbZGlyZWN0aXZlc11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dHJfc3R5bGUodmFsdWUsIGRpcmVjdGl2ZXMpIHtcblx0dmFyIHJlc3VsdCA9IHRvX3N0eWxlKHZhbHVlLCBkaXJlY3RpdmVzKTtcblx0cmV0dXJuIHJlc3VsdCA/IGAgc3R5bGU9XCIke2VzY2FwZV9odG1sKHJlc3VsdCwgdHJ1ZSl9XCJgIDogJyc7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgW2FueSwgYW55LCBhbnldPn0gc3RvcmVfdmFsdWVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVfbmFtZVxuICogQHBhcmFtIHtTdG9yZTxWPiB8IG51bGwgfCB1bmRlZmluZWR9IHN0b3JlXG4gKiBAcmV0dXJucyB7Vn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX2dldChzdG9yZV92YWx1ZXMsIHN0b3JlX25hbWUsIHN0b3JlKSB7XG5cdGlmIChERVYpIHtcblx0XHR2YWxpZGF0ZV9zdG9yZShzdG9yZSwgc3RvcmVfbmFtZS5zbGljZSgxKSk7XG5cdH1cblxuXHQvLyBpdCBjb3VsZCBiZSB0aGF0IHNvbWVvbmUgZWFnZXJseSB1cGRhdGVzIHRoZSBzdG9yZSBpbiB0aGUgaW5zdGFuY2Ugc2NyaXB0LCBzb1xuXHQvLyB3ZSBzaG91bGQgb25seSByZXVzZSB0aGUgc3RvcmUgdmFsdWUgaW4gdGhlIHRlbXBsYXRlXG5cdGlmIChzdG9yZV9uYW1lIGluIHN0b3JlX3ZhbHVlcyAmJiBzdG9yZV92YWx1ZXNbc3RvcmVfbmFtZV1bMF0gPT09IHN0b3JlKSB7XG5cdFx0cmV0dXJuIHN0b3JlX3ZhbHVlc1tzdG9yZV9uYW1lXVsyXTtcblx0fVxuXG5cdHN0b3JlX3ZhbHVlc1tzdG9yZV9uYW1lXT8uWzFdKCk7IC8vIGlmIHN0b3JlIHdhcyBzd2l0Y2hlZCwgdW5zdWJzY3JpYmUgZnJvbSBvbGQgc3RvcmVcblx0c3RvcmVfdmFsdWVzW3N0b3JlX25hbWVdID0gW3N0b3JlLCBudWxsLCB1bmRlZmluZWRdO1xuXHRjb25zdCB1bnN1YiA9IHN1YnNjcmliZV90b19zdG9yZShcblx0XHRzdG9yZSxcblx0XHQvKiogQHBhcmFtIHthbnl9IHYgKi8gKHYpID0+IChzdG9yZV92YWx1ZXNbc3RvcmVfbmFtZV1bMl0gPSB2KVxuXHQpO1xuXHRzdG9yZV92YWx1ZXNbc3RvcmVfbmFtZV1bMV0gPSB1bnN1Yjtcblx0cmV0dXJuIHN0b3JlX3ZhbHVlc1tzdG9yZV9uYW1lXVsyXTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBuZXcgdmFsdWUgb2YgYSBzdG9yZSBhbmQgcmV0dXJucyB0aGF0IHZhbHVlLlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7U3RvcmU8Vj59IHN0b3JlXG4gKiBAcGFyYW0ge1Z9IHZhbHVlXG4gKiBAcmV0dXJucyB7Vn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3NldChzdG9yZSwgdmFsdWUpIHtcblx0c3RvcmUuc2V0KHZhbHVlKTtcblx0cmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgYSBzdG9yZSB3aXRoIGEgbmV3IHZhbHVlLlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgW2FueSwgYW55LCBhbnldPn0gc3RvcmVfdmFsdWVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVfbmFtZVxuICogQHBhcmFtIHtTdG9yZTxWPn0gc3RvcmVcbiAqIEBwYXJhbSB7YW55fSBleHByZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV9tdXRhdGUoc3RvcmVfdmFsdWVzLCBzdG9yZV9uYW1lLCBzdG9yZSwgZXhwcmVzc2lvbikge1xuXHRzdG9yZV9zZXQoc3RvcmUsIHN0b3JlX2dldChzdG9yZV92YWx1ZXMsIHN0b3JlX25hbWUsIHN0b3JlKSk7XG5cdHJldHVybiBleHByZXNzaW9uO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgW2FueSwgYW55LCBhbnldPn0gc3RvcmVfdmFsdWVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVfbmFtZVxuICogQHBhcmFtIHtTdG9yZTxudW1iZXI+fSBzdG9yZVxuICogQHBhcmFtIHsxIHwgLTF9IFtkXVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9zdG9yZShzdG9yZV92YWx1ZXMsIHN0b3JlX25hbWUsIHN0b3JlLCBkID0gMSkge1xuXHRsZXQgc3RvcmVfdmFsdWUgPSBzdG9yZV9nZXQoc3RvcmVfdmFsdWVzLCBzdG9yZV9uYW1lLCBzdG9yZSk7XG5cdHN0b3JlLnNldChzdG9yZV92YWx1ZSArIGQpO1xuXHRyZXR1cm4gc3RvcmVfdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBbYW55LCBhbnksIGFueV0+fSBzdG9yZV92YWx1ZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZV9uYW1lXG4gKiBAcGFyYW0ge1N0b3JlPG51bWJlcj59IHN0b3JlXG4gKiBAcGFyYW0gezEgfCAtMX0gW2RdXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX3N0b3JlX3ByZShzdG9yZV92YWx1ZXMsIHN0b3JlX25hbWUsIHN0b3JlLCBkID0gMSkge1xuXHRjb25zdCB2YWx1ZSA9IHN0b3JlX2dldChzdG9yZV92YWx1ZXMsIHN0b3JlX25hbWUsIHN0b3JlKSArIGQ7XG5cdHN0b3JlLnNldCh2YWx1ZSk7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgW2FueSwgYW55LCBhbnldPn0gc3RvcmVfdmFsdWVzICovXG5leHBvcnQgZnVuY3Rpb24gdW5zdWJzY3JpYmVfc3RvcmVzKHN0b3JlX3ZhbHVlcykge1xuXHRmb3IgKGNvbnN0IHN0b3JlX25hbWUgaW4gc3RvcmVfdmFsdWVzKSB7XG5cdFx0c3RvcmVfdmFsdWVzW3N0b3JlX25hbWVdWzFdKCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1BheWxvYWR9IHBheWxvYWRcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gJCRwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59IHNsb3RfcHJvcHNcbiAqIEBwYXJhbSB7bnVsbCB8ICgoKSA9PiB2b2lkKX0gZmFsbGJhY2tfZm5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xvdChwYXlsb2FkLCAkJHByb3BzLCBuYW1lLCBzbG90X3Byb3BzLCBmYWxsYmFja19mbikge1xuXHR2YXIgc2xvdF9mbiA9ICQkcHJvcHMuJCRzbG90cz8uW25hbWVdO1xuXHQvLyBJbnRlcm9wOiBDYW4gdXNlIHNuaXBwZXRzIHRvIGZpbGwgc2xvdHNcblx0aWYgKHNsb3RfZm4gPT09IHRydWUpIHtcblx0XHRzbG90X2ZuID0gJCRwcm9wc1tuYW1lID09PSAnZGVmYXVsdCcgPyAnY2hpbGRyZW4nIDogbmFtZV07XG5cdH1cblxuXHRpZiAoc2xvdF9mbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0c2xvdF9mbihwYXlsb2FkLCBzbG90X3Byb3BzKTtcblx0fSBlbHNlIHtcblx0XHRmYWxsYmFja19mbj8uKCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gcmVzdFxuICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIHVua25vd24+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzdF9wcm9wcyhwcm9wcywgcmVzdCkge1xuXHQvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSAqL1xuXHRjb25zdCByZXN0X3Byb3BzID0ge307XG5cdGxldCBrZXk7XG5cdGZvciAoa2V5IGluIHByb3BzKSB7XG5cdFx0aWYgKCFyZXN0LmluY2x1ZGVzKGtleSkpIHtcblx0XHRcdHJlc3RfcHJvcHNba2V5XSA9IHByb3BzW2tleV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN0X3Byb3BzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59IHByb3BzXG4gKiBAcmV0dXJucyB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZV9wcm9wcyhwcm9wcykge1xuXHRjb25zdCB7IGNoaWxkcmVuLCAkJHNsb3RzLCAuLi5zYW5pdGl6ZWQgfSA9IHByb3BzO1xuXHRyZXR1cm4gc2FuaXRpemVkO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gcHJvcHNcbiAqIEByZXR1cm5zIHtSZWNvcmQ8c3RyaW5nLCBib29sZWFuPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplX3Nsb3RzKHByb3BzKSB7XG5cdC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgYm9vbGVhbj59ICovXG5cdGNvbnN0IHNhbml0aXplZCA9IHt9O1xuXHRpZiAocHJvcHMuY2hpbGRyZW4pIHNhbml0aXplZC5kZWZhdWx0ID0gdHJ1ZTtcblx0Zm9yIChjb25zdCBrZXkgaW4gcHJvcHMuJCRzbG90cykge1xuXHRcdHNhbml0aXplZFtrZXldID0gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gc2FuaXRpemVkO1xufVxuXG4vKipcbiAqIExlZ2FjeSBtb2RlOiBJZiB0aGUgcHJvcCBoYXMgYSBmYWxsYmFjayBhbmQgaXMgYm91bmQgaW4gdGhlXG4gKiBwYXJlbnQgY29tcG9uZW50LCBwcm9wYWdhdGUgdGhlIGZhbGxiYWNrIHZhbHVlIHVwd2FyZHMuXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSBwcm9wc19wYXJlbnRcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59IHByb3BzX25vd1xuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZF9wcm9wcyhwcm9wc19wYXJlbnQsIHByb3BzX25vdykge1xuXHRmb3IgKGNvbnN0IGtleSBpbiBwcm9wc19ub3cpIHtcblx0XHRjb25zdCBpbml0aWFsX3ZhbHVlID0gcHJvcHNfcGFyZW50W2tleV07XG5cdFx0Y29uc3QgdmFsdWUgPSBwcm9wc19ub3dba2V5XTtcblx0XHRpZiAoXG5cdFx0XHRpbml0aWFsX3ZhbHVlID09PSB1bmRlZmluZWQgJiZcblx0XHRcdHZhbHVlICE9PSB1bmRlZmluZWQgJiZcblx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvcHNfcGFyZW50LCBrZXkpPy5zZXRcblx0XHQpIHtcblx0XHRcdHByb3BzX3BhcmVudFtrZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7UGF5bG9hZH0gcGF5bG9hZFxuICogQHBhcmFtIHtQcm9taXNlPFY+fSBwcm9taXNlXG4gKiBAcGFyYW0ge251bGwgfCAoKCkgPT4gdm9pZCl9IHBlbmRpbmdfZm5cbiAqIEBwYXJhbSB7KHZhbHVlOiBWKSA9PiB2b2lkfSB0aGVuX2ZuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gYXdhaXRfYmxvY2socGF5bG9hZCwgcHJvbWlzZSwgcGVuZGluZ19mbiwgdGhlbl9mbikge1xuXHRpZiAoaXNfcHJvbWlzZShwcm9taXNlKSkge1xuXHRcdHBheWxvYWQub3V0ICs9IEJMT0NLX09QRU47XG5cdFx0cHJvbWlzZS50aGVuKG51bGwsIG5vb3ApO1xuXHRcdGlmIChwZW5kaW5nX2ZuICE9PSBudWxsKSB7XG5cdFx0XHRwZW5kaW5nX2ZuKCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHRoZW5fZm4gIT09IG51bGwpIHtcblx0XHRwYXlsb2FkLm91dCArPSBCTE9DS19PUEVOX0VMU0U7XG5cdFx0dGhlbl9mbihwcm9taXNlKTtcblx0fVxufVxuXG5leHBvcnQgeyBhd2FpdF9ibG9jayBhcyBhd2FpdCB9O1xuXG4vKiogQHBhcmFtIHthbnl9IGFycmF5X2xpa2Vfb3JfaXRlcmF0b3IgKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVfYXJyYXlfbGlrZShhcnJheV9saWtlX29yX2l0ZXJhdG9yKSB7XG5cdGlmIChhcnJheV9saWtlX29yX2l0ZXJhdG9yKSB7XG5cdFx0cmV0dXJuIGFycmF5X2xpa2Vfb3JfaXRlcmF0b3IubGVuZ3RoICE9PSB1bmRlZmluZWRcblx0XHRcdD8gYXJyYXlfbGlrZV9vcl9pdGVyYXRvclxuXHRcdFx0OiBBcnJheS5mcm9tKGFycmF5X2xpa2Vfb3JfaXRlcmF0b3IpO1xuXHR9XG5cdHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaW5zcGVjdF1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmV4cG9ydCBmdW5jdGlvbiBpbnNwZWN0KGFyZ3MsIGluc3BlY3QgPSBjb25zb2xlLmxvZykge1xuXHRpbnNwZWN0KCdpbml0JywgLi4uYXJncyk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7KCkgPT4gVn0gZ2V0X3ZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbmNlKGdldF92YWx1ZSkge1xuXHRsZXQgdmFsdWUgPSAvKiogQHR5cGUge1Z9ICovIChVTklOSVRJQUxJWkVEKTtcblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAodmFsdWUgPT09IFVOSU5JVElBTElaRUQpIHtcblx0XHRcdHZhbHVlID0gZ2V0X3ZhbHVlKCk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gdW5pcXVlIElEXG4gKiBAcGFyYW0ge1BheWxvYWR9IHBheWxvYWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9wc19pZChwYXlsb2FkKSB7XG5cdGNvbnN0IHVpZCA9IHBheWxvYWQudWlkKCk7XG5cdHBheWxvYWQub3V0ICs9ICc8IS0tIycgKyB1aWQgKyAnLS0+Jztcblx0cmV0dXJuIHVpZDtcbn1cblxuZXhwb3J0IHsgYXR0ciwgY2xzeCB9O1xuXG5leHBvcnQgeyBodG1sIH0gZnJvbSAnLi9ibG9ja3MvaHRtbC5qcyc7XG5cbmV4cG9ydCB7IHB1c2gsIHBvcCB9IGZyb20gJy4vY29udGV4dC5qcyc7XG5cbmV4cG9ydCB7IHB1c2hfZWxlbWVudCwgcG9wX2VsZW1lbnQsIHZhbGlkYXRlX3NuaXBwZXRfYXJncyB9IGZyb20gJy4vZGV2LmpzJztcblxuZXhwb3J0IHsgYXNzaWduX3BheWxvYWQsIGNvcHlfcGF5bG9hZCB9IGZyb20gJy4vcGF5bG9hZC5qcyc7XG5cbmV4cG9ydCB7IHNuYXBzaG90IH0gZnJvbSAnLi4vc2hhcmVkL2Nsb25lLmpzJztcblxuZXhwb3J0IHsgZmFsbGJhY2sgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMuanMnO1xuXG5leHBvcnQge1xuXHRpbnZhbGlkX2RlZmF1bHRfc25pcHBldCxcblx0dmFsaWRhdGVfZHluYW1pY19lbGVtZW50X3RhZyxcblx0dmFsaWRhdGVfdm9pZF9keW5hbWljX2VsZW1lbnQsXG5cdHByZXZlbnRfc25pcHBldF9zdHJpbmdpZmljYXRpb25cbn0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRlLmpzJztcblxuZXhwb3J0IHsgZXNjYXBlX2h0bWwgYXMgZXNjYXBlIH07XG4iLCAiLy8gd3JhcHMgdmFsdWUgaW4gY2xvc3VyZSBvciByZXR1cm5zIGNsb3N1cmVcbmV4cG9ydCBsZXQgY2xvc3VyZSA9ICh2YWx1ZSkgPT4ge1xuICBpZih0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0gZWxzZSB7XG4gICAgbGV0IGNsb3N1cmUgPSBmdW5jdGlvbiAoKXsgcmV0dXJuIHZhbHVlIH1cbiAgICByZXR1cm4gY2xvc3VyZVxuICB9XG59XG4iLCAiZXhwb3J0IGNvbnN0IGdsb2JhbFNlbGYgPSB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiBudWxsXG5leHBvcnQgY29uc3QgcGh4V2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IG51bGxcbmV4cG9ydCBjb25zdCBnbG9iYWwgPSBnbG9iYWxTZWxmIHx8IHBoeFdpbmRvdyB8fCBnbG9iYWxcbmV4cG9ydCBjb25zdCBERUZBVUxUX1ZTTiA9IFwiMi4wLjBcIlxuZXhwb3J0IGNvbnN0IFNPQ0tFVF9TVEFURVMgPSB7Y29ubmVjdGluZzogMCwgb3BlbjogMSwgY2xvc2luZzogMiwgY2xvc2VkOiAzfVxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDEwMDAwXG5leHBvcnQgY29uc3QgV1NfQ0xPU0VfTk9STUFMID0gMTAwMFxuZXhwb3J0IGNvbnN0IENIQU5ORUxfU1RBVEVTID0ge1xuICBjbG9zZWQ6IFwiY2xvc2VkXCIsXG4gIGVycm9yZWQ6IFwiZXJyb3JlZFwiLFxuICBqb2luZWQ6IFwiam9pbmVkXCIsXG4gIGpvaW5pbmc6IFwiam9pbmluZ1wiLFxuICBsZWF2aW5nOiBcImxlYXZpbmdcIixcbn1cbmV4cG9ydCBjb25zdCBDSEFOTkVMX0VWRU5UUyA9IHtcbiAgY2xvc2U6IFwicGh4X2Nsb3NlXCIsXG4gIGVycm9yOiBcInBoeF9lcnJvclwiLFxuICBqb2luOiBcInBoeF9qb2luXCIsXG4gIHJlcGx5OiBcInBoeF9yZXBseVwiLFxuICBsZWF2ZTogXCJwaHhfbGVhdmVcIlxufVxuXG5leHBvcnQgY29uc3QgVFJBTlNQT1JUUyA9IHtcbiAgbG9uZ3BvbGw6IFwibG9uZ3BvbGxcIixcbiAgd2Vic29ja2V0OiBcIndlYnNvY2tldFwiXG59XG5leHBvcnQgY29uc3QgWEhSX1NUQVRFUyA9IHtcbiAgY29tcGxldGU6IDRcbn1cbiIsICIvKipcbiAqIEluaXRpYWxpemVzIHRoZSBQdXNoXG4gKiBAcGFyYW0ge0NoYW5uZWx9IGNoYW5uZWwgLSBUaGUgQ2hhbm5lbFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50LCBmb3IgZXhhbXBsZSBgXCJwaHhfam9pblwiYFxuICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWQgLSBUaGUgcGF5bG9hZCwgZm9yIGV4YW1wbGUgYHt1c2VyX2lkOiAxMjN9YFxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVvdXQgLSBUaGUgcHVzaCB0aW1lb3V0IGluIG1pbGxpc2Vjb25kc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdXNoIHtcbiAgY29uc3RydWN0b3IoY2hhbm5lbCwgZXZlbnQsIHBheWxvYWQsIHRpbWVvdXQpe1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWxcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnRcbiAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkIHx8IGZ1bmN0aW9uICgpeyByZXR1cm4ge30gfVxuICAgIHRoaXMucmVjZWl2ZWRSZXNwID0gbnVsbFxuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXRcbiAgICB0aGlzLnRpbWVvdXRUaW1lciA9IG51bGxcbiAgICB0aGlzLnJlY0hvb2tzID0gW11cbiAgICB0aGlzLnNlbnQgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0XG4gICAqL1xuICByZXNlbmQodGltZW91dCl7XG4gICAgdGhpcy50aW1lb3V0ID0gdGltZW91dFxuICAgIHRoaXMucmVzZXQoKVxuICAgIHRoaXMuc2VuZCgpXG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHNlbmQoKXtcbiAgICBpZih0aGlzLmhhc1JlY2VpdmVkKFwidGltZW91dFwiKSl7IHJldHVybiB9XG4gICAgdGhpcy5zdGFydFRpbWVvdXQoKVxuICAgIHRoaXMuc2VudCA9IHRydWVcbiAgICB0aGlzLmNoYW5uZWwuc29ja2V0LnB1c2goe1xuICAgICAgdG9waWM6IHRoaXMuY2hhbm5lbC50b3BpYyxcbiAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgcGF5bG9hZDogdGhpcy5wYXlsb2FkKCksXG4gICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgam9pbl9yZWY6IHRoaXMuY2hhbm5lbC5qb2luUmVmKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gc3RhdHVzXG4gICAqIEBwYXJhbSB7Kn0gY2FsbGJhY2tcbiAgICovXG4gIHJlY2VpdmUoc3RhdHVzLCBjYWxsYmFjayl7XG4gICAgaWYodGhpcy5oYXNSZWNlaXZlZChzdGF0dXMpKXtcbiAgICAgIGNhbGxiYWNrKHRoaXMucmVjZWl2ZWRSZXNwLnJlc3BvbnNlKVxuICAgIH1cblxuICAgIHRoaXMucmVjSG9va3MucHVzaCh7c3RhdHVzLCBjYWxsYmFja30pXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVzZXQoKXtcbiAgICB0aGlzLmNhbmNlbFJlZkV2ZW50KClcbiAgICB0aGlzLnJlZiA9IG51bGxcbiAgICB0aGlzLnJlZkV2ZW50ID0gbnVsbFxuICAgIHRoaXMucmVjZWl2ZWRSZXNwID0gbnVsbFxuICAgIHRoaXMuc2VudCA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG1hdGNoUmVjZWl2ZSh7c3RhdHVzLCByZXNwb25zZSwgX3JlZn0pe1xuICAgIHRoaXMucmVjSG9va3MuZmlsdGVyKGggPT4gaC5zdGF0dXMgPT09IHN0YXR1cylcbiAgICAgIC5mb3JFYWNoKGggPT4gaC5jYWxsYmFjayhyZXNwb25zZSkpXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbmNlbFJlZkV2ZW50KCl7XG4gICAgaWYoIXRoaXMucmVmRXZlbnQpeyByZXR1cm4gfVxuICAgIHRoaXMuY2hhbm5lbC5vZmYodGhpcy5yZWZFdmVudClcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FuY2VsVGltZW91dCgpe1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRUaW1lcilcbiAgICB0aGlzLnRpbWVvdXRUaW1lciA9IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhcnRUaW1lb3V0KCl7XG4gICAgaWYodGhpcy50aW1lb3V0VGltZXIpeyB0aGlzLmNhbmNlbFRpbWVvdXQoKSB9XG4gICAgdGhpcy5yZWYgPSB0aGlzLmNoYW5uZWwuc29ja2V0Lm1ha2VSZWYoKVxuICAgIHRoaXMucmVmRXZlbnQgPSB0aGlzLmNoYW5uZWwucmVwbHlFdmVudE5hbWUodGhpcy5yZWYpXG5cbiAgICB0aGlzLmNoYW5uZWwub24odGhpcy5yZWZFdmVudCwgcGF5bG9hZCA9PiB7XG4gICAgICB0aGlzLmNhbmNlbFJlZkV2ZW50KClcbiAgICAgIHRoaXMuY2FuY2VsVGltZW91dCgpXG4gICAgICB0aGlzLnJlY2VpdmVkUmVzcCA9IHBheWxvYWRcbiAgICAgIHRoaXMubWF0Y2hSZWNlaXZlKHBheWxvYWQpXG4gICAgfSlcblxuICAgIHRoaXMudGltZW91dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXIoXCJ0aW1lb3V0XCIsIHt9KVxuICAgIH0sIHRoaXMudGltZW91dClcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFzUmVjZWl2ZWQoc3RhdHVzKXtcbiAgICByZXR1cm4gdGhpcy5yZWNlaXZlZFJlc3AgJiYgdGhpcy5yZWNlaXZlZFJlc3Auc3RhdHVzID09PSBzdGF0dXNcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdHJpZ2dlcihzdGF0dXMsIHJlc3BvbnNlKXtcbiAgICB0aGlzLmNoYW5uZWwudHJpZ2dlcih0aGlzLnJlZkV2ZW50LCB7c3RhdHVzLCByZXNwb25zZX0pXG4gIH1cbn1cbiIsICIvKipcbiAqXG4gKiBDcmVhdGVzIGEgdGltZXIgdGhhdCBhY2NlcHRzIGEgYHRpbWVyQ2FsY2AgZnVuY3Rpb24gdG8gcGVyZm9ybVxuICogY2FsY3VsYXRlZCB0aW1lb3V0IHJldHJpZXMsIHN1Y2ggYXMgZXhwb25lbnRpYWwgYmFja29mZi5cbiAqXG4gKiBAZXhhbXBsZVxuICogbGV0IHJlY29ubmVjdFRpbWVyID0gbmV3IFRpbWVyKCgpID0+IHRoaXMuY29ubmVjdCgpLCBmdW5jdGlvbih0cmllcyl7XG4gKiAgIHJldHVybiBbMTAwMCwgNTAwMCwgMTAwMDBdW3RyaWVzIC0gMV0gfHwgMTAwMDBcbiAqIH0pXG4gKiByZWNvbm5lY3RUaW1lci5zY2hlZHVsZVRpbWVvdXQoKSAvLyBmaXJlcyBhZnRlciAxMDAwXG4gKiByZWNvbm5lY3RUaW1lci5zY2hlZHVsZVRpbWVvdXQoKSAvLyBmaXJlcyBhZnRlciA1MDAwXG4gKiByZWNvbm5lY3RUaW1lci5yZXNldCgpXG4gKiByZWNvbm5lY3RUaW1lci5zY2hlZHVsZVRpbWVvdXQoKSAvLyBmaXJlcyBhZnRlciAxMDAwXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRpbWVyQ2FsY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gIGNvbnN0cnVjdG9yKGNhbGxiYWNrLCB0aW1lckNhbGMpe1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja1xuICAgIHRoaXMudGltZXJDYWxjID0gdGltZXJDYWxjXG4gICAgdGhpcy50aW1lciA9IG51bGxcbiAgICB0aGlzLnRyaWVzID0gMFxuICB9XG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLnRyaWVzID0gMFxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbHMgYW55IHByZXZpb3VzIHNjaGVkdWxlVGltZW91dCBhbmQgc2NoZWR1bGVzIGNhbGxiYWNrXG4gICAqL1xuICBzY2hlZHVsZVRpbWVvdXQoKXtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcilcblxuICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudHJpZXMgPSB0aGlzLnRyaWVzICsgMVxuICAgICAgdGhpcy5jYWxsYmFjaygpXG4gICAgfSwgdGhpcy50aW1lckNhbGModGhpcy50cmllcyArIDEpKVxuICB9XG59XG4iLCAiaW1wb3J0IHtjbG9zdXJlfSBmcm9tIFwiLi91dGlsc1wiXG5pbXBvcnQge1xuICBDSEFOTkVMX0VWRU5UUyxcbiAgQ0hBTk5FTF9TVEFURVMsXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5cbmltcG9ydCBQdXNoIGZyb20gXCIuL3B1c2hcIlxuaW1wb3J0IFRpbWVyIGZyb20gXCIuL3RpbWVyXCJcblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRvcGljXG4gKiBAcGFyYW0geyhPYmplY3R8ZnVuY3Rpb24pfSBwYXJhbXNcbiAqIEBwYXJhbSB7U29ja2V0fSBzb2NrZXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbm5lbCB7XG4gIGNvbnN0cnVjdG9yKHRvcGljLCBwYXJhbXMsIHNvY2tldCl7XG4gICAgdGhpcy5zdGF0ZSA9IENIQU5ORUxfU1RBVEVTLmNsb3NlZFxuICAgIHRoaXMudG9waWMgPSB0b3BpY1xuICAgIHRoaXMucGFyYW1zID0gY2xvc3VyZShwYXJhbXMgfHwge30pXG4gICAgdGhpcy5zb2NrZXQgPSBzb2NrZXRcbiAgICB0aGlzLmJpbmRpbmdzID0gW11cbiAgICB0aGlzLmJpbmRpbmdSZWYgPSAwXG4gICAgdGhpcy50aW1lb3V0ID0gdGhpcy5zb2NrZXQudGltZW91dFxuICAgIHRoaXMuam9pbmVkT25jZSA9IGZhbHNlXG4gICAgdGhpcy5qb2luUHVzaCA9IG5ldyBQdXNoKHRoaXMsIENIQU5ORUxfRVZFTlRTLmpvaW4sIHRoaXMucGFyYW1zLCB0aGlzLnRpbWVvdXQpXG4gICAgdGhpcy5wdXNoQnVmZmVyID0gW11cbiAgICB0aGlzLnN0YXRlQ2hhbmdlUmVmcyA9IFtdXG5cbiAgICB0aGlzLnJlam9pblRpbWVyID0gbmV3IFRpbWVyKCgpID0+IHtcbiAgICAgIGlmKHRoaXMuc29ja2V0LmlzQ29ubmVjdGVkKCkpeyB0aGlzLnJlam9pbigpIH1cbiAgICB9LCB0aGlzLnNvY2tldC5yZWpvaW5BZnRlck1zKVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VSZWZzLnB1c2godGhpcy5zb2NrZXQub25FcnJvcigoKSA9PiB0aGlzLnJlam9pblRpbWVyLnJlc2V0KCkpKVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VSZWZzLnB1c2godGhpcy5zb2NrZXQub25PcGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVqb2luVGltZXIucmVzZXQoKVxuICAgICAgaWYodGhpcy5pc0Vycm9yZWQoKSl7IHRoaXMucmVqb2luKCkgfVxuICAgIH0pXG4gICAgKVxuICAgIHRoaXMuam9pblB1c2gucmVjZWl2ZShcIm9rXCIsICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5qb2luZWRcbiAgICAgIHRoaXMucmVqb2luVGltZXIucmVzZXQoKVxuICAgICAgdGhpcy5wdXNoQnVmZmVyLmZvckVhY2gocHVzaEV2ZW50ID0+IHB1c2hFdmVudC5zZW5kKCkpXG4gICAgICB0aGlzLnB1c2hCdWZmZXIgPSBbXVxuICAgIH0pXG4gICAgdGhpcy5qb2luUHVzaC5yZWNlaXZlKFwiZXJyb3JcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IENIQU5ORUxfU1RBVEVTLmVycm9yZWRcbiAgICAgIGlmKHRoaXMuc29ja2V0LmlzQ29ubmVjdGVkKCkpeyB0aGlzLnJlam9pblRpbWVyLnNjaGVkdWxlVGltZW91dCgpIH1cbiAgICB9KVxuICAgIHRoaXMub25DbG9zZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlam9pblRpbWVyLnJlc2V0KClcbiAgICAgIGlmKHRoaXMuc29ja2V0Lmhhc0xvZ2dlcigpKSB0aGlzLnNvY2tldC5sb2coXCJjaGFubmVsXCIsIGBjbG9zZSAke3RoaXMudG9waWN9ICR7dGhpcy5qb2luUmVmKCl9YClcbiAgICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5jbG9zZWRcbiAgICAgIHRoaXMuc29ja2V0LnJlbW92ZSh0aGlzKVxuICAgIH0pXG4gICAgdGhpcy5vbkVycm9yKHJlYXNvbiA9PiB7XG4gICAgICBpZih0aGlzLnNvY2tldC5oYXNMb2dnZXIoKSkgdGhpcy5zb2NrZXQubG9nKFwiY2hhbm5lbFwiLCBgZXJyb3IgJHt0aGlzLnRvcGljfWAsIHJlYXNvbilcbiAgICAgIGlmKHRoaXMuaXNKb2luaW5nKCkpeyB0aGlzLmpvaW5QdXNoLnJlc2V0KCkgfVxuICAgICAgdGhpcy5zdGF0ZSA9IENIQU5ORUxfU1RBVEVTLmVycm9yZWRcbiAgICAgIGlmKHRoaXMuc29ja2V0LmlzQ29ubmVjdGVkKCkpeyB0aGlzLnJlam9pblRpbWVyLnNjaGVkdWxlVGltZW91dCgpIH1cbiAgICB9KVxuICAgIHRoaXMuam9pblB1c2gucmVjZWl2ZShcInRpbWVvdXRcIiwgKCkgPT4ge1xuICAgICAgaWYodGhpcy5zb2NrZXQuaGFzTG9nZ2VyKCkpIHRoaXMuc29ja2V0LmxvZyhcImNoYW5uZWxcIiwgYHRpbWVvdXQgJHt0aGlzLnRvcGljfSAoJHt0aGlzLmpvaW5SZWYoKX0pYCwgdGhpcy5qb2luUHVzaC50aW1lb3V0KVxuICAgICAgbGV0IGxlYXZlUHVzaCA9IG5ldyBQdXNoKHRoaXMsIENIQU5ORUxfRVZFTlRTLmxlYXZlLCBjbG9zdXJlKHt9KSwgdGhpcy50aW1lb3V0KVxuICAgICAgbGVhdmVQdXNoLnNlbmQoKVxuICAgICAgdGhpcy5zdGF0ZSA9IENIQU5ORUxfU1RBVEVTLmVycm9yZWRcbiAgICAgIHRoaXMuam9pblB1c2gucmVzZXQoKVxuICAgICAgaWYodGhpcy5zb2NrZXQuaXNDb25uZWN0ZWQoKSl7IHRoaXMucmVqb2luVGltZXIuc2NoZWR1bGVUaW1lb3V0KCkgfVxuICAgIH0pXG4gICAgdGhpcy5vbihDSEFOTkVMX0VWRU5UUy5yZXBseSwgKHBheWxvYWQsIHJlZikgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VyKHRoaXMucmVwbHlFdmVudE5hbWUocmVmKSwgcGF5bG9hZClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEpvaW4gdGhlIGNoYW5uZWxcbiAgICogQHBhcmFtIHtpbnRlZ2VyfSB0aW1lb3V0XG4gICAqIEByZXR1cm5zIHtQdXNofVxuICAgKi9cbiAgam9pbih0aW1lb3V0ID0gdGhpcy50aW1lb3V0KXtcbiAgICBpZih0aGlzLmpvaW5lZE9uY2Upe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJpZWQgdG8gam9pbiBtdWx0aXBsZSB0aW1lcy4gJ2pvaW4nIGNhbiBvbmx5IGJlIGNhbGxlZCBhIHNpbmdsZSB0aW1lIHBlciBjaGFubmVsIGluc3RhbmNlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXRcbiAgICAgIHRoaXMuam9pbmVkT25jZSA9IHRydWVcbiAgICAgIHRoaXMucmVqb2luKClcbiAgICAgIHJldHVybiB0aGlzLmpvaW5QdXNoXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhvb2sgaW50byBjaGFubmVsIGNsb3NlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBvbkNsb3NlKGNhbGxiYWNrKXtcbiAgICB0aGlzLm9uKENIQU5ORUxfRVZFTlRTLmNsb3NlLCBjYWxsYmFjaylcbiAgfVxuXG4gIC8qKlxuICAgKiBIb29rIGludG8gY2hhbm5lbCBlcnJvcnNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gIG9uRXJyb3IoY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9uKENIQU5ORUxfRVZFTlRTLmVycm9yLCByZWFzb24gPT4gY2FsbGJhY2socmVhc29uKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmVzIG9uIGNoYW5uZWwgZXZlbnRzXG4gICAqXG4gICAqIFN1YnNjcmlwdGlvbiByZXR1cm5zIGEgcmVmIGNvdW50ZXIsIHdoaWNoIGNhbiBiZSB1c2VkIGxhdGVyIHRvXG4gICAqIHVuc3Vic2NyaWJlIHRoZSBleGFjdCBldmVudCBsaXN0ZW5lclxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCByZWYxID0gY2hhbm5lbC5vbihcImV2ZW50XCIsIGRvX3N0dWZmKVxuICAgKiBjb25zdCByZWYyID0gY2hhbm5lbC5vbihcImV2ZW50XCIsIGRvX290aGVyX3N0dWZmKVxuICAgKiBjaGFubmVsLm9mZihcImV2ZW50XCIsIHJlZjEpXG4gICAqIC8vIFNpbmNlIHVuc3Vic2NyaXB0aW9uLCBkb19zdHVmZiB3b24ndCBmaXJlLFxuICAgKiAvLyB3aGlsZSBkb19vdGhlcl9zdHVmZiB3aWxsIGtlZXAgZmlyaW5nIG9uIHRoZSBcImV2ZW50XCJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtpbnRlZ2VyfSByZWZcbiAgICovXG4gIG9uKGV2ZW50LCBjYWxsYmFjayl7XG4gICAgbGV0IHJlZiA9IHRoaXMuYmluZGluZ1JlZisrXG4gICAgdGhpcy5iaW5kaW5ncy5wdXNoKHtldmVudCwgcmVmLCBjYWxsYmFja30pXG4gICAgcmV0dXJuIHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlcyBvZmYgb2YgY2hhbm5lbCBldmVudHNcbiAgICpcbiAgICogVXNlIHRoZSByZWYgcmV0dXJuZWQgZnJvbSBhIGNoYW5uZWwub24oKSB0byB1bnN1YnNjcmliZSBvbmVcbiAgICogaGFuZGxlciwgb3IgcGFzcyBub3RoaW5nIGZvciB0aGUgcmVmIHRvIHVuc3Vic2NyaWJlIGFsbFxuICAgKiBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIGV2ZW50LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBVbnN1YnNjcmliZSB0aGUgZG9fc3R1ZmYgaGFuZGxlclxuICAgKiBjb25zdCByZWYxID0gY2hhbm5lbC5vbihcImV2ZW50XCIsIGRvX3N0dWZmKVxuICAgKiBjaGFubmVsLm9mZihcImV2ZW50XCIsIHJlZjEpXG4gICAqXG4gICAqIC8vIFVuc3Vic2NyaWJlIGFsbCBoYW5kbGVycyBmcm9tIGV2ZW50XG4gICAqIGNoYW5uZWwub2ZmKFwiZXZlbnRcIilcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7aW50ZWdlcn0gcmVmXG4gICAqL1xuICBvZmYoZXZlbnQsIHJlZil7XG4gICAgdGhpcy5iaW5kaW5ncyA9IHRoaXMuYmluZGluZ3MuZmlsdGVyKChiaW5kKSA9PiB7XG4gICAgICByZXR1cm4gIShiaW5kLmV2ZW50ID09PSBldmVudCAmJiAodHlwZW9mIHJlZiA9PT0gXCJ1bmRlZmluZWRcIiB8fCByZWYgPT09IGJpbmQucmVmKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYW5QdXNoKCl7IHJldHVybiB0aGlzLnNvY2tldC5pc0Nvbm5lY3RlZCgpICYmIHRoaXMuaXNKb2luZWQoKSB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgbWVzc2FnZSBgZXZlbnRgIHRvIHBob2VuaXggd2l0aCB0aGUgcGF5bG9hZCBgcGF5bG9hZGAuXG4gICAqIFBob2VuaXggcmVjZWl2ZXMgdGhpcyBpbiB0aGUgYGhhbmRsZV9pbihldmVudCwgcGF5bG9hZCwgc29ja2V0KWBcbiAgICogZnVuY3Rpb24uIGlmIHBob2VuaXggcmVwbGllcyBvciBpdCB0aW1lcyBvdXQgKGRlZmF1bHQgMTAwMDBtcyksXG4gICAqIHRoZW4gb3B0aW9uYWxseSB0aGUgcmVwbHkgY2FuIGJlIHJlY2VpdmVkLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjaGFubmVsLnB1c2goXCJldmVudFwiKVxuICAgKiAgIC5yZWNlaXZlKFwib2tcIiwgcGF5bG9hZCA9PiBjb25zb2xlLmxvZyhcInBob2VuaXggcmVwbGllZDpcIiwgcGF5bG9hZCkpXG4gICAqICAgLnJlY2VpdmUoXCJlcnJvclwiLCBlcnIgPT4gY29uc29sZS5sb2coXCJwaG9lbml4IGVycm9yZWRcIiwgZXJyKSlcbiAgICogICAucmVjZWl2ZShcInRpbWVvdXRcIiwgKCkgPT4gY29uc29sZS5sb2coXCJ0aW1lZCBvdXQgcHVzaGluZ1wiKSlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZW91dF1cbiAgICogQHJldHVybnMge1B1c2h9XG4gICAqL1xuICBwdXNoKGV2ZW50LCBwYXlsb2FkLCB0aW1lb3V0ID0gdGhpcy50aW1lb3V0KXtcbiAgICBwYXlsb2FkID0gcGF5bG9hZCB8fCB7fVxuICAgIGlmKCF0aGlzLmpvaW5lZE9uY2Upe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0cmllZCB0byBwdXNoICcke2V2ZW50fScgdG8gJyR7dGhpcy50b3BpY30nIGJlZm9yZSBqb2luaW5nLiBVc2UgY2hhbm5lbC5qb2luKCkgYmVmb3JlIHB1c2hpbmcgZXZlbnRzYClcbiAgICB9XG4gICAgbGV0IHB1c2hFdmVudCA9IG5ldyBQdXNoKHRoaXMsIGV2ZW50LCBmdW5jdGlvbiAoKXsgcmV0dXJuIHBheWxvYWQgfSwgdGltZW91dClcbiAgICBpZih0aGlzLmNhblB1c2goKSl7XG4gICAgICBwdXNoRXZlbnQuc2VuZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHB1c2hFdmVudC5zdGFydFRpbWVvdXQoKVxuICAgICAgdGhpcy5wdXNoQnVmZmVyLnB1c2gocHVzaEV2ZW50KVxuICAgIH1cblxuICAgIHJldHVybiBwdXNoRXZlbnRcbiAgfVxuXG4gIC8qKiBMZWF2ZXMgdGhlIGNoYW5uZWxcbiAgICpcbiAgICogVW5zdWJzY3JpYmVzIGZyb20gc2VydmVyIGV2ZW50cywgYW5kXG4gICAqIGluc3RydWN0cyBjaGFubmVsIHRvIHRlcm1pbmF0ZSBvbiBzZXJ2ZXJcbiAgICpcbiAgICogVHJpZ2dlcnMgb25DbG9zZSgpIGhvb2tzXG4gICAqXG4gICAqIFRvIHJlY2VpdmUgbGVhdmUgYWNrbm93bGVkZ2VtZW50cywgdXNlIHRoZSBgcmVjZWl2ZWBcbiAgICogaG9vayB0byBiaW5kIHRvIHRoZSBzZXJ2ZXIgYWNrLCBpZTpcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY2hhbm5lbC5sZWF2ZSgpLnJlY2VpdmUoXCJva1wiLCAoKSA9PiBhbGVydChcImxlZnQhXCIpIClcbiAgICpcbiAgICogQHBhcmFtIHtpbnRlZ2VyfSB0aW1lb3V0XG4gICAqIEByZXR1cm5zIHtQdXNofVxuICAgKi9cbiAgbGVhdmUodGltZW91dCA9IHRoaXMudGltZW91dCl7XG4gICAgdGhpcy5yZWpvaW5UaW1lci5yZXNldCgpXG4gICAgdGhpcy5qb2luUHVzaC5jYW5jZWxUaW1lb3V0KClcblxuICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5sZWF2aW5nXG4gICAgbGV0IG9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLnNvY2tldC5oYXNMb2dnZXIoKSkgdGhpcy5zb2NrZXQubG9nKFwiY2hhbm5lbFwiLCBgbGVhdmUgJHt0aGlzLnRvcGljfWApXG4gICAgICB0aGlzLnRyaWdnZXIoQ0hBTk5FTF9FVkVOVFMuY2xvc2UsIFwibGVhdmVcIilcbiAgICB9XG4gICAgbGV0IGxlYXZlUHVzaCA9IG5ldyBQdXNoKHRoaXMsIENIQU5ORUxfRVZFTlRTLmxlYXZlLCBjbG9zdXJlKHt9KSwgdGltZW91dClcbiAgICBsZWF2ZVB1c2gucmVjZWl2ZShcIm9rXCIsICgpID0+IG9uQ2xvc2UoKSlcbiAgICAgIC5yZWNlaXZlKFwidGltZW91dFwiLCAoKSA9PiBvbkNsb3NlKCkpXG4gICAgbGVhdmVQdXNoLnNlbmQoKVxuICAgIGlmKCF0aGlzLmNhblB1c2goKSl7IGxlYXZlUHVzaC50cmlnZ2VyKFwib2tcIiwge30pIH1cblxuICAgIHJldHVybiBsZWF2ZVB1c2hcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkYWJsZSBtZXNzYWdlIGhvb2tcbiAgICpcbiAgICogUmVjZWl2ZXMgYWxsIGV2ZW50cyBmb3Igc3BlY2lhbGl6ZWQgbWVzc2FnZSBoYW5kbGluZ1xuICAgKiBiZWZvcmUgZGlzcGF0Y2hpbmcgdG8gdGhlIGNoYW5uZWwgY2FsbGJhY2tzLlxuICAgKlxuICAgKiBNdXN0IHJldHVybiB0aGUgcGF5bG9hZCwgbW9kaWZpZWQgb3IgdW5tb2RpZmllZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAgICogQHBhcmFtIHtpbnRlZ2VyfSByZWZcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIG9uTWVzc2FnZShfZXZlbnQsIHBheWxvYWQsIF9yZWYpeyByZXR1cm4gcGF5bG9hZCB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc01lbWJlcih0b3BpYywgZXZlbnQsIHBheWxvYWQsIGpvaW5SZWYpe1xuICAgIGlmKHRoaXMudG9waWMgIT09IHRvcGljKXsgcmV0dXJuIGZhbHNlIH1cblxuICAgIGlmKGpvaW5SZWYgJiYgam9pblJlZiAhPT0gdGhpcy5qb2luUmVmKCkpe1xuICAgICAgaWYodGhpcy5zb2NrZXQuaGFzTG9nZ2VyKCkpIHRoaXMuc29ja2V0LmxvZyhcImNoYW5uZWxcIiwgXCJkcm9wcGluZyBvdXRkYXRlZCBtZXNzYWdlXCIsIHt0b3BpYywgZXZlbnQsIHBheWxvYWQsIGpvaW5SZWZ9KVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBqb2luUmVmKCl7IHJldHVybiB0aGlzLmpvaW5QdXNoLnJlZiB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWpvaW4odGltZW91dCA9IHRoaXMudGltZW91dCl7XG4gICAgaWYodGhpcy5pc0xlYXZpbmcoKSl7IHJldHVybiB9XG4gICAgdGhpcy5zb2NrZXQubGVhdmVPcGVuVG9waWModGhpcy50b3BpYylcbiAgICB0aGlzLnN0YXRlID0gQ0hBTk5FTF9TVEFURVMuam9pbmluZ1xuICAgIHRoaXMuam9pblB1c2gucmVzZW5kKHRpbWVvdXQpXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRyaWdnZXIoZXZlbnQsIHBheWxvYWQsIHJlZiwgam9pblJlZil7XG4gICAgbGV0IGhhbmRsZWRQYXlsb2FkID0gdGhpcy5vbk1lc3NhZ2UoZXZlbnQsIHBheWxvYWQsIHJlZiwgam9pblJlZilcbiAgICBpZihwYXlsb2FkICYmICFoYW5kbGVkUGF5bG9hZCl7IHRocm93IG5ldyBFcnJvcihcImNoYW5uZWwgb25NZXNzYWdlIGNhbGxiYWNrcyBtdXN0IHJldHVybiB0aGUgcGF5bG9hZCwgbW9kaWZpZWQgb3IgdW5tb2RpZmllZFwiKSB9XG5cbiAgICBsZXQgZXZlbnRCaW5kaW5ncyA9IHRoaXMuYmluZGluZ3MuZmlsdGVyKGJpbmQgPT4gYmluZC5ldmVudCA9PT0gZXZlbnQpXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZXZlbnRCaW5kaW5ncy5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgYmluZCA9IGV2ZW50QmluZGluZ3NbaV1cbiAgICAgIGJpbmQuY2FsbGJhY2soaGFuZGxlZFBheWxvYWQsIHJlZiwgam9pblJlZiB8fCB0aGlzLmpvaW5SZWYoKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlcGx5RXZlbnROYW1lKHJlZil7IHJldHVybiBgY2hhbl9yZXBseV8ke3JlZn1gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzQ2xvc2VkKCl7IHJldHVybiB0aGlzLnN0YXRlID09PSBDSEFOTkVMX1NUQVRFUy5jbG9zZWQgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNFcnJvcmVkKCl7IHJldHVybiB0aGlzLnN0YXRlID09PSBDSEFOTkVMX1NUQVRFUy5lcnJvcmVkIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzSm9pbmVkKCl7IHJldHVybiB0aGlzLnN0YXRlID09PSBDSEFOTkVMX1NUQVRFUy5qb2luZWQgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNKb2luaW5nKCl7IHJldHVybiB0aGlzLnN0YXRlID09PSBDSEFOTkVMX1NUQVRFUy5qb2luaW5nIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzTGVhdmluZygpeyByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gQ0hBTk5FTF9TVEFURVMubGVhdmluZyB9XG59XG4iLCAiaW1wb3J0IHtcbiAgZ2xvYmFsLFxuICBYSFJfU1RBVEVTXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXgge1xuXG4gIHN0YXRpYyByZXF1ZXN0KG1ldGhvZCwgZW5kUG9pbnQsIGFjY2VwdCwgYm9keSwgdGltZW91dCwgb250aW1lb3V0LCBjYWxsYmFjayl7XG4gICAgaWYoZ2xvYmFsLlhEb21haW5SZXF1ZXN0KXtcbiAgICAgIGxldCByZXEgPSBuZXcgZ2xvYmFsLlhEb21haW5SZXF1ZXN0KCkgLy8gSUU4LCBJRTlcbiAgICAgIHJldHVybiB0aGlzLnhkb21haW5SZXF1ZXN0KHJlcSwgbWV0aG9kLCBlbmRQb2ludCwgYm9keSwgdGltZW91dCwgb250aW1lb3V0LCBjYWxsYmFjaylcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlcSA9IG5ldyBnbG9iYWwuWE1MSHR0cFJlcXVlc3QoKSAvLyBJRTcrLCBGaXJlZm94LCBDaHJvbWUsIE9wZXJhLCBTYWZhcmlcbiAgICAgIHJldHVybiB0aGlzLnhoclJlcXVlc3QocmVxLCBtZXRob2QsIGVuZFBvaW50LCBhY2NlcHQsIGJvZHksIHRpbWVvdXQsIG9udGltZW91dCwgY2FsbGJhY2spXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHhkb21haW5SZXF1ZXN0KHJlcSwgbWV0aG9kLCBlbmRQb2ludCwgYm9keSwgdGltZW91dCwgb250aW1lb3V0LCBjYWxsYmFjayl7XG4gICAgcmVxLnRpbWVvdXQgPSB0aW1lb3V0XG4gICAgcmVxLm9wZW4obWV0aG9kLCBlbmRQb2ludClcbiAgICByZXEub25sb2FkID0gKCkgPT4ge1xuICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy5wYXJzZUpTT04ocmVxLnJlc3BvbnNlVGV4dClcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgIH1cbiAgICBpZihvbnRpbWVvdXQpeyByZXEub250aW1lb3V0ID0gb250aW1lb3V0IH1cblxuICAgIC8vIFdvcmsgYXJvdW5kIGJ1ZyBpbiBJRTkgdGhhdCByZXF1aXJlcyBhbiBhdHRhY2hlZCBvbnByb2dyZXNzIGhhbmRsZXJcbiAgICByZXEub25wcm9ncmVzcyA9ICgpID0+IHsgfVxuXG4gICAgcmVxLnNlbmQoYm9keSlcbiAgICByZXR1cm4gcmVxXG4gIH1cblxuICBzdGF0aWMgeGhyUmVxdWVzdChyZXEsIG1ldGhvZCwgZW5kUG9pbnQsIGFjY2VwdCwgYm9keSwgdGltZW91dCwgb250aW1lb3V0LCBjYWxsYmFjayl7XG4gICAgcmVxLm9wZW4obWV0aG9kLCBlbmRQb2ludCwgdHJ1ZSlcbiAgICByZXEudGltZW91dCA9IHRpbWVvdXRcbiAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBhY2NlcHQpXG4gICAgcmVxLm9uZXJyb3IgPSAoKSA9PiBjYWxsYmFjayAmJiBjYWxsYmFjayhudWxsKVxuICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZihyZXEucmVhZHlTdGF0ZSA9PT0gWEhSX1NUQVRFUy5jb21wbGV0ZSAmJiBjYWxsYmFjayl7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMucGFyc2VKU09OKHJlcS5yZXNwb25zZVRleHQpXG4gICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgfVxuICAgIH1cbiAgICBpZihvbnRpbWVvdXQpeyByZXEub250aW1lb3V0ID0gb250aW1lb3V0IH1cblxuICAgIHJlcS5zZW5kKGJvZHkpXG4gICAgcmV0dXJuIHJlcVxuICB9XG5cbiAgc3RhdGljIHBhcnNlSlNPTihyZXNwKXtcbiAgICBpZighcmVzcCB8fCByZXNwID09PSBcIlwiKXsgcmV0dXJuIG51bGwgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3ApXG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKFwiZmFpbGVkIHRvIHBhcnNlIEpTT04gcmVzcG9uc2VcIiwgcmVzcClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNlcmlhbGl6ZShvYmosIHBhcmVudEtleSl7XG4gICAgbGV0IHF1ZXJ5U3RyID0gW11cbiAgICBmb3IodmFyIGtleSBpbiBvYmope1xuICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpeyBjb250aW51ZSB9XG4gICAgICBsZXQgcGFyYW1LZXkgPSBwYXJlbnRLZXkgPyBgJHtwYXJlbnRLZXl9WyR7a2V5fV1gIDoga2V5XG4gICAgICBsZXQgcGFyYW1WYWwgPSBvYmpba2V5XVxuICAgICAgaWYodHlwZW9mIHBhcmFtVmFsID09PSBcIm9iamVjdFwiKXtcbiAgICAgICAgcXVlcnlTdHIucHVzaCh0aGlzLnNlcmlhbGl6ZShwYXJhbVZhbCwgcGFyYW1LZXkpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVlcnlTdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocGFyYW1LZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1WYWwpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcXVlcnlTdHIuam9pbihcIiZcIilcbiAgfVxuXG4gIHN0YXRpYyBhcHBlbmRQYXJhbXModXJsLCBwYXJhbXMpe1xuICAgIGlmKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoID09PSAwKXsgcmV0dXJuIHVybCB9XG5cbiAgICBsZXQgcHJlZml4ID0gdXJsLm1hdGNoKC9cXD8vKSA/IFwiJlwiIDogXCI/XCJcbiAgICByZXR1cm4gYCR7dXJsfSR7cHJlZml4fSR7dGhpcy5zZXJpYWxpemUocGFyYW1zKX1gXG4gIH1cbn1cbiIsICJpbXBvcnQge1xuICBTT0NLRVRfU1RBVEVTLFxuICBUUkFOU1BPUlRTXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5cbmltcG9ydCBBamF4IGZyb20gXCIuL2FqYXhcIlxuXG5sZXQgYXJyYXlCdWZmZXJUb0Jhc2U2NCA9IChidWZmZXIpID0+IHtcbiAgbGV0IGJpbmFyeSA9IFwiXCJcbiAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKVxuICBsZXQgbGVuID0gYnl0ZXMuYnl0ZUxlbmd0aFxuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspeyBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSkgfVxuICByZXR1cm4gYnRvYShiaW5hcnkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvbmdQb2xsIHtcblxuICBjb25zdHJ1Y3RvcihlbmRQb2ludCl7XG4gICAgdGhpcy5lbmRQb2ludCA9IG51bGxcbiAgICB0aGlzLnRva2VuID0gbnVsbFxuICAgIHRoaXMuc2tpcEhlYXJ0YmVhdCA9IHRydWVcbiAgICB0aGlzLnJlcXMgPSBuZXcgU2V0KClcbiAgICB0aGlzLmF3YWl0aW5nQmF0Y2hBY2sgPSBmYWxzZVxuICAgIHRoaXMuY3VycmVudEJhdGNoID0gbnVsbFxuICAgIHRoaXMuY3VycmVudEJhdGNoVGltZXIgPSBudWxsXG4gICAgdGhpcy5iYXRjaEJ1ZmZlciA9IFtdXG4gICAgdGhpcy5vbm9wZW4gPSBmdW5jdGlvbiAoKXsgfSAvLyBub29wXG4gICAgdGhpcy5vbmVycm9yID0gZnVuY3Rpb24gKCl7IH0gLy8gbm9vcFxuICAgIHRoaXMub25tZXNzYWdlID0gZnVuY3Rpb24gKCl7IH0gLy8gbm9vcFxuICAgIHRoaXMub25jbG9zZSA9IGZ1bmN0aW9uICgpeyB9IC8vIG5vb3BcbiAgICB0aGlzLnBvbGxFbmRwb2ludCA9IHRoaXMubm9ybWFsaXplRW5kcG9pbnQoZW5kUG9pbnQpXG4gICAgdGhpcy5yZWFkeVN0YXRlID0gU09DS0VUX1NUQVRFUy5jb25uZWN0aW5nXG4gICAgLy8gd2UgbXVzdCB3YWl0IGZvciB0aGUgY2FsbGVyIHRvIGZpbmlzaCBzZXR0aW5nIHVwIG91ciBjYWxsYmFja3MgYW5kIHRpbWVvdXQgcHJvcGVydGllc1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wb2xsKCksIDApXG4gIH1cblxuICBub3JtYWxpemVFbmRwb2ludChlbmRQb2ludCl7XG4gICAgcmV0dXJuIChlbmRQb2ludFxuICAgICAgLnJlcGxhY2UoXCJ3czovL1wiLCBcImh0dHA6Ly9cIilcbiAgICAgIC5yZXBsYWNlKFwid3NzOi8vXCIsIFwiaHR0cHM6Ly9cIilcbiAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoLiopXFwvXCIgKyBUUkFOU1BPUlRTLndlYnNvY2tldCksIFwiJDEvXCIgKyBUUkFOU1BPUlRTLmxvbmdwb2xsKSlcbiAgfVxuXG4gIGVuZHBvaW50VVJMKCl7XG4gICAgcmV0dXJuIEFqYXguYXBwZW5kUGFyYW1zKHRoaXMucG9sbEVuZHBvaW50LCB7dG9rZW46IHRoaXMudG9rZW59KVxuICB9XG5cbiAgY2xvc2VBbmRSZXRyeShjb2RlLCByZWFzb24sIHdhc0NsZWFuKXtcbiAgICB0aGlzLmNsb3NlKGNvZGUsIHJlYXNvbiwgd2FzQ2xlYW4pXG4gICAgdGhpcy5yZWFkeVN0YXRlID0gU09DS0VUX1NUQVRFUy5jb25uZWN0aW5nXG4gIH1cblxuICBvbnRpbWVvdXQoKXtcbiAgICB0aGlzLm9uZXJyb3IoXCJ0aW1lb3V0XCIpXG4gICAgdGhpcy5jbG9zZUFuZFJldHJ5KDEwMDUsIFwidGltZW91dFwiLCBmYWxzZSlcbiAgfVxuXG4gIGlzQWN0aXZlKCl7IHJldHVybiB0aGlzLnJlYWR5U3RhdGUgPT09IFNPQ0tFVF9TVEFURVMub3BlbiB8fCB0aGlzLnJlYWR5U3RhdGUgPT09IFNPQ0tFVF9TVEFURVMuY29ubmVjdGluZyB9XG5cbiAgcG9sbCgpe1xuICAgIHRoaXMuYWpheChcIkdFVFwiLCBcImFwcGxpY2F0aW9uL2pzb25cIiwgbnVsbCwgKCkgPT4gdGhpcy5vbnRpbWVvdXQoKSwgcmVzcCA9PiB7XG4gICAgICBpZihyZXNwKXtcbiAgICAgICAgdmFyIHtzdGF0dXMsIHRva2VuLCBtZXNzYWdlc30gPSByZXNwXG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzID0gMFxuICAgICAgfVxuXG4gICAgICBzd2l0Y2goc3RhdHVzKXtcbiAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgbWVzc2FnZXMuZm9yRWFjaChtc2cgPT4ge1xuICAgICAgICAgICAgLy8gVGFza3MgYXJlIHdoYXQgdGhpbmdzIGxpa2UgZXZlbnQgaGFuZGxlcnMsIHNldFRpbWVvdXQgY2FsbGJhY2tzLFxuICAgICAgICAgICAgLy8gcHJvbWlzZSByZXNvbHZlcyBhbmQgbW9yZSBhcmUgcnVuIHdpdGhpbi5cbiAgICAgICAgICAgIC8vIEluIG1vZGVybiBicm93c2VycywgdGhlcmUgYXJlIHR3byBkaWZmZXJlbnQga2luZHMgb2YgdGFza3MsXG4gICAgICAgICAgICAvLyBtaWNyb3Rhc2tzIGFuZCBtYWNyb3Rhc2tzLlxuICAgICAgICAgICAgLy8gTWljcm90YXNrcyBhcmUgbWFpbmx5IHVzZWQgZm9yIFByb21pc2VzLCB3aGlsZSBtYWNyb3Rhc2tzIGFyZVxuICAgICAgICAgICAgLy8gdXNlZCBmb3IgZXZlcnl0aGluZyBlbHNlLlxuICAgICAgICAgICAgLy8gTWljcm90YXNrcyBhbHdheXMgaGF2ZSBwcmlvcml0eSBvdmVyIG1hY3JvdGFza3MuIElmIHRoZSBKUyBlbmdpbmVcbiAgICAgICAgICAgIC8vIGlzIGxvb2tpbmcgZm9yIGEgdGFzayB0byBydW4sIGl0IHdpbGwgYWx3YXlzIHRyeSB0byBlbXB0eSB0aGVcbiAgICAgICAgICAgIC8vIG1pY3JvdGFzayBxdWV1ZSBiZWZvcmUgYXR0ZW1wdGluZyB0byBydW4gYW55dGhpbmcgZnJvbSB0aGVcbiAgICAgICAgICAgIC8vIG1hY3JvdGFzayBxdWV1ZS5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBGb3IgdGhlIFdlYlNvY2tldCB0cmFuc3BvcnQsIG1lc3NhZ2VzIGFsd2F5cyBhcnJpdmUgaW4gdGhlaXIgb3duXG4gICAgICAgICAgICAvLyBldmVudC4gVGhpcyBtZWFucyB0aGF0IGlmIGFueSBwcm9taXNlcyBhcmUgcmVzb2x2ZWQgZnJvbSB3aXRoaW4sXG4gICAgICAgICAgICAvLyB0aGVpciBjYWxsYmFja3Mgd2lsbCBhbHdheXMgZmluaXNoIGV4ZWN1dGlvbiBieSB0aGUgdGltZSB0aGVcbiAgICAgICAgICAgIC8vIG5leHQgbWVzc2FnZSBldmVudCBoYW5kbGVyIGlzIHJ1bi5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBJbiBvcmRlciB0byBlbXVsYXRlIHRoaXMgYmVoYXZpb3VyLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSBlYWNoXG4gICAgICAgICAgICAvLyBvbm1lc3NhZ2UgaGFuZGxlciBpcyBydW4gd2l0aGluIGl0cyBvd24gbWFjcm90YXNrLlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9ubWVzc2FnZSh7ZGF0YTogbXNnfSksIDApXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnBvbGwoKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjA0OlxuICAgICAgICAgIHRoaXMucG9sbCgpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0MTA6XG4gICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gU09DS0VUX1NUQVRFUy5vcGVuXG4gICAgICAgICAgdGhpcy5vbm9wZW4oe30pXG4gICAgICAgICAgdGhpcy5wb2xsKClcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICB0aGlzLm9uZXJyb3IoNDAzKVxuICAgICAgICAgIHRoaXMuY2xvc2UoMTAwOCwgXCJmb3JiaWRkZW5cIiwgZmFsc2UpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICBjYXNlIDUwMDpcbiAgICAgICAgICB0aGlzLm9uZXJyb3IoNTAwKVxuICAgICAgICAgIHRoaXMuY2xvc2VBbmRSZXRyeSgxMDExLCBcImludGVybmFsIHNlcnZlciBlcnJvclwiLCA1MDApXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGB1bmhhbmRsZWQgcG9sbCBzdGF0dXMgJHtzdGF0dXN9YClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gd2UgY29sbGVjdCBhbGwgcHVzaGVzIHdpdGhpbiB0aGUgY3VycmVudCBldmVudCBsb29wIGJ5XG4gIC8vIHNldFRpbWVvdXQgMCwgd2hpY2ggb3B0aW1pemVzIGJhY2stdG8tYmFjayBwcm9jZWR1cmFsXG4gIC8vIHB1c2hlcyBhZ2FpbnN0IGFuIGVtcHR5IGJ1ZmZlclxuXG4gIHNlbmQoYm9keSl7XG4gICAgaWYodHlwZW9mKGJvZHkpICE9PSBcInN0cmluZ1wiKXsgYm9keSA9IGFycmF5QnVmZmVyVG9CYXNlNjQoYm9keSkgfVxuICAgIGlmKHRoaXMuY3VycmVudEJhdGNoKXtcbiAgICAgIHRoaXMuY3VycmVudEJhdGNoLnB1c2goYm9keSlcbiAgICB9IGVsc2UgaWYodGhpcy5hd2FpdGluZ0JhdGNoQWNrKXtcbiAgICAgIHRoaXMuYmF0Y2hCdWZmZXIucHVzaChib2R5KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRCYXRjaCA9IFtib2R5XVxuICAgICAgdGhpcy5jdXJyZW50QmF0Y2hUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmJhdGNoU2VuZCh0aGlzLmN1cnJlbnRCYXRjaClcbiAgICAgICAgdGhpcy5jdXJyZW50QmF0Y2ggPSBudWxsXG4gICAgICB9LCAwKVxuICAgIH1cbiAgfVxuXG4gIGJhdGNoU2VuZChtZXNzYWdlcyl7XG4gICAgdGhpcy5hd2FpdGluZ0JhdGNoQWNrID0gdHJ1ZVxuICAgIHRoaXMuYWpheChcIlBPU1RcIiwgXCJhcHBsaWNhdGlvbi94LW5kanNvblwiLCBtZXNzYWdlcy5qb2luKFwiXFxuXCIpLCAoKSA9PiB0aGlzLm9uZXJyb3IoXCJ0aW1lb3V0XCIpLCByZXNwID0+IHtcbiAgICAgIHRoaXMuYXdhaXRpbmdCYXRjaEFjayA9IGZhbHNlXG4gICAgICBpZighcmVzcCB8fCByZXNwLnN0YXR1cyAhPT0gMjAwKXtcbiAgICAgICAgdGhpcy5vbmVycm9yKHJlc3AgJiYgcmVzcC5zdGF0dXMpXG4gICAgICAgIHRoaXMuY2xvc2VBbmRSZXRyeSgxMDExLCBcImludGVybmFsIHNlcnZlciBlcnJvclwiLCBmYWxzZSlcbiAgICAgIH0gZWxzZSBpZih0aGlzLmJhdGNoQnVmZmVyLmxlbmd0aCA+IDApe1xuICAgICAgICB0aGlzLmJhdGNoU2VuZCh0aGlzLmJhdGNoQnVmZmVyKVxuICAgICAgICB0aGlzLmJhdGNoQnVmZmVyID0gW11cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY2xvc2UoY29kZSwgcmVhc29uLCB3YXNDbGVhbil7XG4gICAgZm9yKGxldCByZXEgb2YgdGhpcy5yZXFzKXsgcmVxLmFib3J0KCkgfVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFNPQ0tFVF9TVEFURVMuY2xvc2VkXG4gICAgbGV0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtjb2RlOiAxMDAwLCByZWFzb246IHVuZGVmaW5lZCwgd2FzQ2xlYW46IHRydWV9LCB7Y29kZSwgcmVhc29uLCB3YXNDbGVhbn0pXG4gICAgdGhpcy5iYXRjaEJ1ZmZlciA9IFtdXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY3VycmVudEJhdGNoVGltZXIpXG4gICAgdGhpcy5jdXJyZW50QmF0Y2hUaW1lciA9IG51bGxcbiAgICBpZih0eXBlb2YoQ2xvc2VFdmVudCkgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgdGhpcy5vbmNsb3NlKG5ldyBDbG9zZUV2ZW50KFwiY2xvc2VcIiwgb3B0cykpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25jbG9zZShvcHRzKVxuICAgIH1cbiAgfVxuXG4gIGFqYXgobWV0aG9kLCBjb250ZW50VHlwZSwgYm9keSwgb25DYWxsZXJUaW1lb3V0LCBjYWxsYmFjayl7XG4gICAgbGV0IHJlcVxuICAgIGxldCBvbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlcXMuZGVsZXRlKHJlcSlcbiAgICAgIG9uQ2FsbGVyVGltZW91dCgpXG4gICAgfVxuICAgIHJlcSA9IEFqYXgucmVxdWVzdChtZXRob2QsIHRoaXMuZW5kcG9pbnRVUkwoKSwgY29udGVudFR5cGUsIGJvZHksIHRoaXMudGltZW91dCwgb250aW1lb3V0LCByZXNwID0+IHtcbiAgICAgIHRoaXMucmVxcy5kZWxldGUocmVxKVxuICAgICAgaWYodGhpcy5pc0FjdGl2ZSgpKXsgY2FsbGJhY2socmVzcCkgfVxuICAgIH0pXG4gICAgdGhpcy5yZXFzLmFkZChyZXEpXG4gIH1cbn1cbiIsICIvKipcbiAqIEluaXRpYWxpemVzIHRoZSBQcmVzZW5jZVxuICogQHBhcmFtIHtDaGFubmVsfSBjaGFubmVsIC0gVGhlIENoYW5uZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gVGhlIG9wdGlvbnMsXG4gKiAgICAgICAgZm9yIGV4YW1wbGUgYHtldmVudHM6IHtzdGF0ZTogXCJzdGF0ZVwiLCBkaWZmOiBcImRpZmZcIn19YFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVzZW5jZSB7XG5cbiAgY29uc3RydWN0b3IoY2hhbm5lbCwgb3B0cyA9IHt9KXtcbiAgICBsZXQgZXZlbnRzID0gb3B0cy5ldmVudHMgfHwge3N0YXRlOiBcInByZXNlbmNlX3N0YXRlXCIsIGRpZmY6IFwicHJlc2VuY2VfZGlmZlwifVxuICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgIHRoaXMucGVuZGluZ0RpZmZzID0gW11cbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsXG4gICAgdGhpcy5qb2luUmVmID0gbnVsbFxuICAgIHRoaXMuY2FsbGVyID0ge1xuICAgICAgb25Kb2luOiBmdW5jdGlvbiAoKXsgfSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uICgpeyB9LFxuICAgICAgb25TeW5jOiBmdW5jdGlvbiAoKXsgfVxuICAgIH1cblxuICAgIHRoaXMuY2hhbm5lbC5vbihldmVudHMuc3RhdGUsIG5ld1N0YXRlID0+IHtcbiAgICAgIGxldCB7b25Kb2luLCBvbkxlYXZlLCBvblN5bmN9ID0gdGhpcy5jYWxsZXJcblxuICAgICAgdGhpcy5qb2luUmVmID0gdGhpcy5jaGFubmVsLmpvaW5SZWYoKVxuICAgICAgdGhpcy5zdGF0ZSA9IFByZXNlbmNlLnN5bmNTdGF0ZSh0aGlzLnN0YXRlLCBuZXdTdGF0ZSwgb25Kb2luLCBvbkxlYXZlKVxuXG4gICAgICB0aGlzLnBlbmRpbmdEaWZmcy5mb3JFYWNoKGRpZmYgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlID0gUHJlc2VuY2Uuc3luY0RpZmYodGhpcy5zdGF0ZSwgZGlmZiwgb25Kb2luLCBvbkxlYXZlKVxuICAgICAgfSlcbiAgICAgIHRoaXMucGVuZGluZ0RpZmZzID0gW11cbiAgICAgIG9uU3luYygpXG4gICAgfSlcblxuICAgIHRoaXMuY2hhbm5lbC5vbihldmVudHMuZGlmZiwgZGlmZiA9PiB7XG4gICAgICBsZXQge29uSm9pbiwgb25MZWF2ZSwgb25TeW5jfSA9IHRoaXMuY2FsbGVyXG5cbiAgICAgIGlmKHRoaXMuaW5QZW5kaW5nU3luY1N0YXRlKCkpe1xuICAgICAgICB0aGlzLnBlbmRpbmdEaWZmcy5wdXNoKGRpZmYpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlID0gUHJlc2VuY2Uuc3luY0RpZmYodGhpcy5zdGF0ZSwgZGlmZiwgb25Kb2luLCBvbkxlYXZlKVxuICAgICAgICBvblN5bmMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBvbkpvaW4oY2FsbGJhY2speyB0aGlzLmNhbGxlci5vbkpvaW4gPSBjYWxsYmFjayB9XG5cbiAgb25MZWF2ZShjYWxsYmFjayl7IHRoaXMuY2FsbGVyLm9uTGVhdmUgPSBjYWxsYmFjayB9XG5cbiAgb25TeW5jKGNhbGxiYWNrKXsgdGhpcy5jYWxsZXIub25TeW5jID0gY2FsbGJhY2sgfVxuXG4gIGxpc3QoYnkpeyByZXR1cm4gUHJlc2VuY2UubGlzdCh0aGlzLnN0YXRlLCBieSkgfVxuXG4gIGluUGVuZGluZ1N5bmNTdGF0ZSgpe1xuICAgIHJldHVybiAhdGhpcy5qb2luUmVmIHx8ICh0aGlzLmpvaW5SZWYgIT09IHRoaXMuY2hhbm5lbC5qb2luUmVmKCkpXG4gIH1cblxuICAvLyBsb3dlci1sZXZlbCBwdWJsaWMgc3RhdGljIEFQSVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHN5bmMgdGhlIGxpc3Qgb2YgcHJlc2VuY2VzIG9uIHRoZSBzZXJ2ZXJcbiAgICogd2l0aCB0aGUgY2xpZW50J3Mgc3RhdGUuIEFuIG9wdGlvbmFsIGBvbkpvaW5gIGFuZCBgb25MZWF2ZWAgY2FsbGJhY2sgY2FuXG4gICAqIGJlIHByb3ZpZGVkIHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gdGhlIGNsaWVudCdzIGxvY2FsIHByZXNlbmNlcyBhY3Jvc3NcbiAgICogZGlzY29ubmVjdHMgYW5kIHJlY29ubmVjdHMgd2l0aCB0aGUgc2VydmVyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJlc2VuY2V9XG4gICAqL1xuICBzdGF0aWMgc3luY1N0YXRlKGN1cnJlbnRTdGF0ZSwgbmV3U3RhdGUsIG9uSm9pbiwgb25MZWF2ZSl7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5jbG9uZShjdXJyZW50U3RhdGUpXG4gICAgbGV0IGpvaW5zID0ge31cbiAgICBsZXQgbGVhdmVzID0ge31cblxuICAgIHRoaXMubWFwKHN0YXRlLCAoa2V5LCBwcmVzZW5jZSkgPT4ge1xuICAgICAgaWYoIW5ld1N0YXRlW2tleV0pe1xuICAgICAgICBsZWF2ZXNba2V5XSA9IHByZXNlbmNlXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm1hcChuZXdTdGF0ZSwgKGtleSwgbmV3UHJlc2VuY2UpID0+IHtcbiAgICAgIGxldCBjdXJyZW50UHJlc2VuY2UgPSBzdGF0ZVtrZXldXG4gICAgICBpZihjdXJyZW50UHJlc2VuY2Upe1xuICAgICAgICBsZXQgbmV3UmVmcyA9IG5ld1ByZXNlbmNlLm1ldGFzLm1hcChtID0+IG0ucGh4X3JlZilcbiAgICAgICAgbGV0IGN1clJlZnMgPSBjdXJyZW50UHJlc2VuY2UubWV0YXMubWFwKG0gPT4gbS5waHhfcmVmKVxuICAgICAgICBsZXQgam9pbmVkTWV0YXMgPSBuZXdQcmVzZW5jZS5tZXRhcy5maWx0ZXIobSA9PiBjdXJSZWZzLmluZGV4T2YobS5waHhfcmVmKSA8IDApXG4gICAgICAgIGxldCBsZWZ0TWV0YXMgPSBjdXJyZW50UHJlc2VuY2UubWV0YXMuZmlsdGVyKG0gPT4gbmV3UmVmcy5pbmRleE9mKG0ucGh4X3JlZikgPCAwKVxuICAgICAgICBpZihqb2luZWRNZXRhcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICBqb2luc1trZXldID0gbmV3UHJlc2VuY2VcbiAgICAgICAgICBqb2luc1trZXldLm1ldGFzID0gam9pbmVkTWV0YXNcbiAgICAgICAgfVxuICAgICAgICBpZihsZWZ0TWV0YXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgbGVhdmVzW2tleV0gPSB0aGlzLmNsb25lKGN1cnJlbnRQcmVzZW5jZSlcbiAgICAgICAgICBsZWF2ZXNba2V5XS5tZXRhcyA9IGxlZnRNZXRhc1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqb2luc1trZXldID0gbmV3UHJlc2VuY2VcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnN5bmNEaWZmKHN0YXRlLCB7am9pbnM6IGpvaW5zLCBsZWF2ZXM6IGxlYXZlc30sIG9uSm9pbiwgb25MZWF2ZSlcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBVc2VkIHRvIHN5bmMgYSBkaWZmIG9mIHByZXNlbmNlIGpvaW4gYW5kIGxlYXZlXG4gICAqIGV2ZW50cyBmcm9tIHRoZSBzZXJ2ZXIsIGFzIHRoZXkgaGFwcGVuLiBMaWtlIGBzeW5jU3RhdGVgLCBgc3luY0RpZmZgXG4gICAqIGFjY2VwdHMgb3B0aW9uYWwgYG9uSm9pbmAgYW5kIGBvbkxlYXZlYCBjYWxsYmFja3MgdG8gcmVhY3QgdG8gYSB1c2VyXG4gICAqIGpvaW5pbmcgb3IgbGVhdmluZyBmcm9tIGEgZGV2aWNlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJlc2VuY2V9XG4gICAqL1xuICBzdGF0aWMgc3luY0RpZmYoc3RhdGUsIGRpZmYsIG9uSm9pbiwgb25MZWF2ZSl7XG4gICAgbGV0IHtqb2lucywgbGVhdmVzfSA9IHRoaXMuY2xvbmUoZGlmZilcbiAgICBpZighb25Kb2luKXsgb25Kb2luID0gZnVuY3Rpb24gKCl7IH0gfVxuICAgIGlmKCFvbkxlYXZlKXsgb25MZWF2ZSA9IGZ1bmN0aW9uICgpeyB9IH1cblxuICAgIHRoaXMubWFwKGpvaW5zLCAoa2V5LCBuZXdQcmVzZW5jZSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnRQcmVzZW5jZSA9IHN0YXRlW2tleV1cbiAgICAgIHN0YXRlW2tleV0gPSB0aGlzLmNsb25lKG5ld1ByZXNlbmNlKVxuICAgICAgaWYoY3VycmVudFByZXNlbmNlKXtcbiAgICAgICAgbGV0IGpvaW5lZFJlZnMgPSBzdGF0ZVtrZXldLm1ldGFzLm1hcChtID0+IG0ucGh4X3JlZilcbiAgICAgICAgbGV0IGN1ck1ldGFzID0gY3VycmVudFByZXNlbmNlLm1ldGFzLmZpbHRlcihtID0+IGpvaW5lZFJlZnMuaW5kZXhPZihtLnBoeF9yZWYpIDwgMClcbiAgICAgICAgc3RhdGVba2V5XS5tZXRhcy51bnNoaWZ0KC4uLmN1ck1ldGFzKVxuICAgICAgfVxuICAgICAgb25Kb2luKGtleSwgY3VycmVudFByZXNlbmNlLCBuZXdQcmVzZW5jZSlcbiAgICB9KVxuICAgIHRoaXMubWFwKGxlYXZlcywgKGtleSwgbGVmdFByZXNlbmNlKSA9PiB7XG4gICAgICBsZXQgY3VycmVudFByZXNlbmNlID0gc3RhdGVba2V5XVxuICAgICAgaWYoIWN1cnJlbnRQcmVzZW5jZSl7IHJldHVybiB9XG4gICAgICBsZXQgcmVmc1RvUmVtb3ZlID0gbGVmdFByZXNlbmNlLm1ldGFzLm1hcChtID0+IG0ucGh4X3JlZilcbiAgICAgIGN1cnJlbnRQcmVzZW5jZS5tZXRhcyA9IGN1cnJlbnRQcmVzZW5jZS5tZXRhcy5maWx0ZXIocCA9PiB7XG4gICAgICAgIHJldHVybiByZWZzVG9SZW1vdmUuaW5kZXhPZihwLnBoeF9yZWYpIDwgMFxuICAgICAgfSlcbiAgICAgIG9uTGVhdmUoa2V5LCBjdXJyZW50UHJlc2VuY2UsIGxlZnRQcmVzZW5jZSlcbiAgICAgIGlmKGN1cnJlbnRQcmVzZW5jZS5tZXRhcy5sZW5ndGggPT09IDApe1xuICAgICAgICBkZWxldGUgc3RhdGVba2V5XVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJlc2VuY2VzLCB3aXRoIHNlbGVjdGVkIG1ldGFkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJlc2VuY2VzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNob29zZXJcbiAgICpcbiAgICogQHJldHVybnMge1ByZXNlbmNlfVxuICAgKi9cbiAgc3RhdGljIGxpc3QocHJlc2VuY2VzLCBjaG9vc2VyKXtcbiAgICBpZighY2hvb3Nlcil7IGNob29zZXIgPSBmdW5jdGlvbiAoa2V5LCBwcmVzKXsgcmV0dXJuIHByZXMgfSB9XG5cbiAgICByZXR1cm4gdGhpcy5tYXAocHJlc2VuY2VzLCAoa2V5LCBwcmVzZW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGNob29zZXIoa2V5LCBwcmVzZW5jZSlcbiAgICB9KVxuICB9XG5cbiAgLy8gcHJpdmF0ZVxuXG4gIHN0YXRpYyBtYXAob2JqLCBmdW5jKXtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5tYXAoa2V5ID0+IGZ1bmMoa2V5LCBvYmpba2V5XSkpXG4gIH1cblxuICBzdGF0aWMgY2xvbmUob2JqKXsgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSkgfVxufVxuIiwgIi8qIFRoZSBkZWZhdWx0IHNlcmlhbGl6ZXIgZm9yIGVuY29kaW5nIGFuZCBkZWNvZGluZyBtZXNzYWdlcyAqL1xuaW1wb3J0IHtcbiAgQ0hBTk5FTF9FVkVOVFNcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBIRUFERVJfTEVOR1RIOiAxLFxuICBNRVRBX0xFTkdUSDogNCxcbiAgS0lORFM6IHtwdXNoOiAwLCByZXBseTogMSwgYnJvYWRjYXN0OiAyfSxcblxuICBlbmNvZGUobXNnLCBjYWxsYmFjayl7XG4gICAgaWYobXNnLnBheWxvYWQuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyKXtcbiAgICAgIHJldHVybiBjYWxsYmFjayh0aGlzLmJpbmFyeUVuY29kZShtc2cpKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGF5bG9hZCA9IFttc2cuam9pbl9yZWYsIG1zZy5yZWYsIG1zZy50b3BpYywgbXNnLmV2ZW50LCBtc2cucGF5bG9hZF1cbiAgICAgIHJldHVybiBjYWxsYmFjayhKU09OLnN0cmluZ2lmeShwYXlsb2FkKSlcbiAgICB9XG4gIH0sXG5cbiAgZGVjb2RlKHJhd1BheWxvYWQsIGNhbGxiYWNrKXtcbiAgICBpZihyYXdQYXlsb2FkLmNvbnN0cnVjdG9yID09PSBBcnJheUJ1ZmZlcil7XG4gICAgICByZXR1cm4gY2FsbGJhY2sodGhpcy5iaW5hcnlEZWNvZGUocmF3UGF5bG9hZCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBbam9pbl9yZWYsIHJlZiwgdG9waWMsIGV2ZW50LCBwYXlsb2FkXSA9IEpTT04ucGFyc2UocmF3UGF5bG9hZClcbiAgICAgIHJldHVybiBjYWxsYmFjayh7am9pbl9yZWYsIHJlZiwgdG9waWMsIGV2ZW50LCBwYXlsb2FkfSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gcHJpdmF0ZVxuXG4gIGJpbmFyeUVuY29kZShtZXNzYWdlKXtcbiAgICBsZXQge2pvaW5fcmVmLCByZWYsIGV2ZW50LCB0b3BpYywgcGF5bG9hZH0gPSBtZXNzYWdlXG4gICAgbGV0IG1ldGFMZW5ndGggPSB0aGlzLk1FVEFfTEVOR1RIICsgam9pbl9yZWYubGVuZ3RoICsgcmVmLmxlbmd0aCArIHRvcGljLmxlbmd0aCArIGV2ZW50Lmxlbmd0aFxuICAgIGxldCBoZWFkZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5IRUFERVJfTEVOR1RIICsgbWV0YUxlbmd0aClcbiAgICBsZXQgdmlldyA9IG5ldyBEYXRhVmlldyhoZWFkZXIpXG4gICAgbGV0IG9mZnNldCA9IDBcblxuICAgIHZpZXcuc2V0VWludDgob2Zmc2V0KyssIHRoaXMuS0lORFMucHVzaCkgLy8ga2luZFxuICAgIHZpZXcuc2V0VWludDgob2Zmc2V0KyssIGpvaW5fcmVmLmxlbmd0aClcbiAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCByZWYubGVuZ3RoKVxuICAgIHZpZXcuc2V0VWludDgob2Zmc2V0KyssIHRvcGljLmxlbmd0aClcbiAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCBldmVudC5sZW5ndGgpXG4gICAgQXJyYXkuZnJvbShqb2luX3JlZiwgY2hhciA9PiB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCBjaGFyLmNoYXJDb2RlQXQoMCkpKVxuICAgIEFycmF5LmZyb20ocmVmLCBjaGFyID0+IHZpZXcuc2V0VWludDgob2Zmc2V0KyssIGNoYXIuY2hhckNvZGVBdCgwKSkpXG4gICAgQXJyYXkuZnJvbSh0b3BpYywgY2hhciA9PiB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCBjaGFyLmNoYXJDb2RlQXQoMCkpKVxuICAgIEFycmF5LmZyb20oZXZlbnQsIGNoYXIgPT4gdmlldy5zZXRVaW50OChvZmZzZXQrKywgY2hhci5jaGFyQ29kZUF0KDApKSlcblxuICAgIHZhciBjb21iaW5lZCA9IG5ldyBVaW50OEFycmF5KGhlYWRlci5ieXRlTGVuZ3RoICsgcGF5bG9hZC5ieXRlTGVuZ3RoKVxuICAgIGNvbWJpbmVkLnNldChuZXcgVWludDhBcnJheShoZWFkZXIpLCAwKVxuICAgIGNvbWJpbmVkLnNldChuZXcgVWludDhBcnJheShwYXlsb2FkKSwgaGVhZGVyLmJ5dGVMZW5ndGgpXG5cbiAgICByZXR1cm4gY29tYmluZWQuYnVmZmVyXG4gIH0sXG5cbiAgYmluYXJ5RGVjb2RlKGJ1ZmZlcil7XG4gICAgbGV0IHZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKVxuICAgIGxldCBraW5kID0gdmlldy5nZXRVaW50OCgwKVxuICAgIGxldCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIHRoaXMuS0lORFMucHVzaDogcmV0dXJuIHRoaXMuZGVjb2RlUHVzaChidWZmZXIsIHZpZXcsIGRlY29kZXIpXG4gICAgICBjYXNlIHRoaXMuS0lORFMucmVwbHk6IHJldHVybiB0aGlzLmRlY29kZVJlcGx5KGJ1ZmZlciwgdmlldywgZGVjb2RlcilcbiAgICAgIGNhc2UgdGhpcy5LSU5EUy5icm9hZGNhc3Q6IHJldHVybiB0aGlzLmRlY29kZUJyb2FkY2FzdChidWZmZXIsIHZpZXcsIGRlY29kZXIpXG4gICAgfVxuICB9LFxuXG4gIGRlY29kZVB1c2goYnVmZmVyLCB2aWV3LCBkZWNvZGVyKXtcbiAgICBsZXQgam9pblJlZlNpemUgPSB2aWV3LmdldFVpbnQ4KDEpXG4gICAgbGV0IHRvcGljU2l6ZSA9IHZpZXcuZ2V0VWludDgoMilcbiAgICBsZXQgZXZlbnRTaXplID0gdmlldy5nZXRVaW50OCgzKVxuICAgIGxldCBvZmZzZXQgPSB0aGlzLkhFQURFUl9MRU5HVEggKyB0aGlzLk1FVEFfTEVOR1RIIC0gMSAvLyBwdXNoZXMgaGF2ZSBubyByZWZcbiAgICBsZXQgam9pblJlZiA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGpvaW5SZWZTaXplKSlcbiAgICBvZmZzZXQgPSBvZmZzZXQgKyBqb2luUmVmU2l6ZVxuICAgIGxldCB0b3BpYyA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIHRvcGljU2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgdG9waWNTaXplXG4gICAgbGV0IGV2ZW50ID0gZGVjb2Rlci5kZWNvZGUoYnVmZmVyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgZXZlbnRTaXplKSlcbiAgICBvZmZzZXQgPSBvZmZzZXQgKyBldmVudFNpemVcbiAgICBsZXQgZGF0YSA9IGJ1ZmZlci5zbGljZShvZmZzZXQsIGJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgIHJldHVybiB7am9pbl9yZWY6IGpvaW5SZWYsIHJlZjogbnVsbCwgdG9waWM6IHRvcGljLCBldmVudDogZXZlbnQsIHBheWxvYWQ6IGRhdGF9XG4gIH0sXG5cbiAgZGVjb2RlUmVwbHkoYnVmZmVyLCB2aWV3LCBkZWNvZGVyKXtcbiAgICBsZXQgam9pblJlZlNpemUgPSB2aWV3LmdldFVpbnQ4KDEpXG4gICAgbGV0IHJlZlNpemUgPSB2aWV3LmdldFVpbnQ4KDIpXG4gICAgbGV0IHRvcGljU2l6ZSA9IHZpZXcuZ2V0VWludDgoMylcbiAgICBsZXQgZXZlbnRTaXplID0gdmlldy5nZXRVaW50OCg0KVxuICAgIGxldCBvZmZzZXQgPSB0aGlzLkhFQURFUl9MRU5HVEggKyB0aGlzLk1FVEFfTEVOR1RIXG4gICAgbGV0IGpvaW5SZWYgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBqb2luUmVmU2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgam9pblJlZlNpemVcbiAgICBsZXQgcmVmID0gZGVjb2Rlci5kZWNvZGUoYnVmZmVyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgcmVmU2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgcmVmU2l6ZVxuICAgIGxldCB0b3BpYyA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIHRvcGljU2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgdG9waWNTaXplXG4gICAgbGV0IGV2ZW50ID0gZGVjb2Rlci5kZWNvZGUoYnVmZmVyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgZXZlbnRTaXplKSlcbiAgICBvZmZzZXQgPSBvZmZzZXQgKyBldmVudFNpemVcbiAgICBsZXQgZGF0YSA9IGJ1ZmZlci5zbGljZShvZmZzZXQsIGJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgIGxldCBwYXlsb2FkID0ge3N0YXR1czogZXZlbnQsIHJlc3BvbnNlOiBkYXRhfVxuICAgIHJldHVybiB7am9pbl9yZWY6IGpvaW5SZWYsIHJlZjogcmVmLCB0b3BpYzogdG9waWMsIGV2ZW50OiBDSEFOTkVMX0VWRU5UUy5yZXBseSwgcGF5bG9hZDogcGF5bG9hZH1cbiAgfSxcblxuICBkZWNvZGVCcm9hZGNhc3QoYnVmZmVyLCB2aWV3LCBkZWNvZGVyKXtcbiAgICBsZXQgdG9waWNTaXplID0gdmlldy5nZXRVaW50OCgxKVxuICAgIGxldCBldmVudFNpemUgPSB2aWV3LmdldFVpbnQ4KDIpXG4gICAgbGV0IG9mZnNldCA9IHRoaXMuSEVBREVSX0xFTkdUSCArIDJcbiAgICBsZXQgdG9waWMgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyB0b3BpY1NpemUpKVxuICAgIG9mZnNldCA9IG9mZnNldCArIHRvcGljU2l6ZVxuICAgIGxldCBldmVudCA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGV2ZW50U2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgZXZlbnRTaXplXG4gICAgbGV0IGRhdGEgPSBidWZmZXIuc2xpY2Uob2Zmc2V0LCBidWZmZXIuYnl0ZUxlbmd0aClcblxuICAgIHJldHVybiB7am9pbl9yZWY6IG51bGwsIHJlZjogbnVsbCwgdG9waWM6IHRvcGljLCBldmVudDogZXZlbnQsIHBheWxvYWQ6IGRhdGF9XG4gIH1cbn1cbiIsICJpbXBvcnQge1xuICBnbG9iYWwsXG4gIHBoeFdpbmRvdyxcbiAgQ0hBTk5FTF9FVkVOVFMsXG4gIERFRkFVTFRfVElNRU9VVCxcbiAgREVGQVVMVF9WU04sXG4gIFNPQ0tFVF9TVEFURVMsXG4gIFRSQU5TUE9SVFMsXG4gIFdTX0NMT1NFX05PUk1BTFxufSBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5pbXBvcnQge1xuICBjbG9zdXJlXG59IGZyb20gXCIuL3V0aWxzXCJcblxuaW1wb3J0IEFqYXggZnJvbSBcIi4vYWpheFwiXG5pbXBvcnQgQ2hhbm5lbCBmcm9tIFwiLi9jaGFubmVsXCJcbmltcG9ydCBMb25nUG9sbCBmcm9tIFwiLi9sb25ncG9sbFwiXG5pbXBvcnQgU2VyaWFsaXplciBmcm9tIFwiLi9zZXJpYWxpemVyXCJcbmltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiXG5cbi8qKiBJbml0aWFsaXplcyB0aGUgU29ja2V0ICpcbiAqXG4gKiBGb3IgSUU4IHN1cHBvcnQgdXNlIGFuIEVTNS1zaGltIChodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGVuZFBvaW50IC0gVGhlIHN0cmluZyBXZWJTb2NrZXQgZW5kcG9pbnQsIGllLCBgXCJ3czovL2V4YW1wbGUuY29tL3NvY2tldFwiYCxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXCJ3c3M6Ly9leGFtcGxlLmNvbVwiYFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcIi9zb2NrZXRcImAgKGluaGVyaXRlZCBob3N0ICYgcHJvdG9jb2wpXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdHNdIC0gT3B0aW9uYWwgY29uZmlndXJhdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdHMudHJhbnNwb3J0XSAtIFRoZSBXZWJzb2NrZXQgVHJhbnNwb3J0LCBmb3IgZXhhbXBsZSBXZWJTb2NrZXQgb3IgUGhvZW5peC5Mb25nUG9sbC5cbiAqXG4gKiBEZWZhdWx0cyB0byBXZWJTb2NrZXQgd2l0aCBhdXRvbWF0aWMgTG9uZ1BvbGwgZmFsbGJhY2sgaWYgV2ViU29ja2V0IGlzIG5vdCBkZWZpbmVkLlxuICogVG8gZmFsbGJhY2sgdG8gTG9uZ1BvbGwgd2hlbiBXZWJTb2NrZXQgYXR0ZW1wdHMgZmFpbCwgdXNlIGBsb25nUG9sbEZhbGxiYWNrTXM6IDI1MDBgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRzLmxvbmdQb2xsRmFsbGJhY2tNc10gLSBUaGUgbWlsbGlzZWNvbmQgdGltZSB0byBhdHRlbXB0IHRoZSBwcmltYXJ5IHRyYW5zcG9ydFxuICogYmVmb3JlIGZhbGxpbmcgYmFjayB0byB0aGUgTG9uZ1BvbGwgdHJhbnNwb3J0LiBEaXNhYmxlZCBieSBkZWZhdWx0LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRzLmRlYnVnXSAtIFdoZW4gdHJ1ZSwgZW5hYmxlcyBkZWJ1ZyBsb2dnaW5nLiBEZWZhdWx0IGZhbHNlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRzLmVuY29kZV0gLSBUaGUgZnVuY3Rpb24gdG8gZW5jb2RlIG91dGdvaW5nIG1lc3NhZ2VzLlxuICpcbiAqIERlZmF1bHRzIHRvIEpTT04gZW5jb2Rlci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0cy5kZWNvZGVdIC0gVGhlIGZ1bmN0aW9uIHRvIGRlY29kZSBpbmNvbWluZyBtZXNzYWdlcy5cbiAqXG4gKiBEZWZhdWx0cyB0byBKU09OOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIChwYXlsb2FkLCBjYWxsYmFjaykgPT4gY2FsbGJhY2soSlNPTi5wYXJzZShwYXlsb2FkKSlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy50aW1lb3V0XSAtIFRoZSBkZWZhdWx0IHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIHRyaWdnZXIgcHVzaCB0aW1lb3V0cy5cbiAqXG4gKiBEZWZhdWx0cyBgREVGQVVMVF9USU1FT1VUYFxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRzLmhlYXJ0YmVhdEludGVydmFsTXNdIC0gVGhlIG1pbGxpc2VjIGludGVydmFsIHRvIHNlbmQgYSBoZWFydGJlYXQgbWVzc2FnZVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRzLnJlY29ubmVjdEFmdGVyTXNdIC0gVGhlIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbWlsbGlzZWNcbiAqIHNvY2tldCByZWNvbm5lY3QgaW50ZXJ2YWwuXG4gKlxuICogRGVmYXVsdHMgdG8gc3RlcHBlZCBiYWNrb2ZmIG9mOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGZ1bmN0aW9uKHRyaWVzKXtcbiAqICAgcmV0dXJuIFsxMCwgNTAsIDEwMCwgMTUwLCAyMDAsIDI1MCwgNTAwLCAxMDAwLCAyMDAwXVt0cmllcyAtIDFdIHx8IDUwMDBcbiAqIH1cbiAqIGBgYGBcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdHMucmVqb2luQWZ0ZXJNc10gLSBUaGUgb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtaWxsaXNlY1xuICogcmVqb2luIGludGVydmFsIGZvciBpbmRpdmlkdWFsIGNoYW5uZWxzLlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGZ1bmN0aW9uKHRyaWVzKXtcbiAqICAgcmV0dXJuIFsxMDAwLCAyMDAwLCA1MDAwXVt0cmllcyAtIDFdIHx8IDEwMDAwXG4gKiB9XG4gKiBgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdHMubG9nZ2VyXSAtIFRoZSBvcHRpb25hbCBmdW5jdGlvbiBmb3Igc3BlY2lhbGl6ZWQgbG9nZ2luZywgaWU6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogZnVuY3Rpb24oa2luZCwgbXNnLCBkYXRhKSB7XG4gKiAgIGNvbnNvbGUubG9nKGAke2tpbmR9OiAke21zZ31gLCBkYXRhKVxuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRzLmxvbmdwb2xsZXJUaW1lb3V0XSAtIFRoZSBtYXhpbXVtIHRpbWVvdXQgb2YgYSBsb25nIHBvbGwgQUpBWCByZXF1ZXN0LlxuICpcbiAqIERlZmF1bHRzIHRvIDIwcyAoZG91YmxlIHRoZSBzZXJ2ZXIgbG9uZyBwb2xsIHRpbWVyKS5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3R8ZnVuY3Rpb24pfSBbb3B0cy5wYXJhbXNdIC0gVGhlIG9wdGlvbmFsIHBhcmFtcyB0byBwYXNzIHdoZW4gY29ubmVjdGluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmJpbmFyeVR5cGVdIC0gVGhlIGJpbmFyeSB0eXBlIHRvIHVzZSBmb3IgYmluYXJ5IFdlYlNvY2tldCBmcmFtZXMuXG4gKlxuICogRGVmYXVsdHMgdG8gXCJhcnJheWJ1ZmZlclwiXG4gKlxuICogQHBhcmFtIHt2c259IFtvcHRzLnZzbl0gLSBUaGUgc2VyaWFsaXplcidzIHByb3RvY29sIHZlcnNpb24gdG8gc2VuZCBvbiBjb25uZWN0LlxuICpcbiAqIERlZmF1bHRzIHRvIERFRkFVTFRfVlNOLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cy5zZXNzaW9uU3RvcmFnZV0gLSBBbiBvcHRpb25hbCBTdG9yYWdlIGNvbXBhdGlibGUgb2JqZWN0XG4gKiBQaG9lbml4IHVzZXMgc2Vzc2lvblN0b3JhZ2UgZm9yIGxvbmdwb2xsIGZhbGxiYWNrIGhpc3RvcnkuIE92ZXJyaWRpbmcgdGhlIHN0b3JlIGlzXG4gKiB1c2VmdWwgd2hlbiBQaG9lbml4IHdvbid0IGhhdmUgYWNjZXNzIHRvIGBzZXNzaW9uU3RvcmFnZWAuIEZvciBleGFtcGxlLCBUaGlzIGNvdWxkXG4gKiBoYXBwZW4gaWYgYSBzaXRlIGxvYWRzIGEgY3Jvc3MtZG9tYWluIGNoYW5uZWwgaW4gYW4gaWZyYW1lLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqICAgICBjbGFzcyBJbk1lbW9yeVN0b3JhZ2Uge1xuICogICAgICAgY29uc3RydWN0b3IoKSB7IHRoaXMuc3RvcmFnZSA9IHt9IH1cbiAqICAgICAgIGdldEl0ZW0oa2V5TmFtZSkgeyByZXR1cm4gdGhpcy5zdG9yYWdlW2tleU5hbWVdIHx8IG51bGwgfVxuICogICAgICAgcmVtb3ZlSXRlbShrZXlOYW1lKSB7IGRlbGV0ZSB0aGlzLnN0b3JhZ2Vba2V5TmFtZV0gfVxuICogICAgICAgc2V0SXRlbShrZXlOYW1lLCBrZXlWYWx1ZSkgeyB0aGlzLnN0b3JhZ2Vba2V5TmFtZV0gPSBrZXlWYWx1ZSB9XG4gKiAgICAgfVxuICpcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2NrZXQge1xuICBjb25zdHJ1Y3RvcihlbmRQb2ludCwgb3B0cyA9IHt9KXtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzID0ge29wZW46IFtdLCBjbG9zZTogW10sIGVycm9yOiBbXSwgbWVzc2FnZTogW119XG4gICAgdGhpcy5jaGFubmVscyA9IFtdXG4gICAgdGhpcy5zZW5kQnVmZmVyID0gW11cbiAgICB0aGlzLnJlZiA9IDBcbiAgICB0aGlzLnRpbWVvdXQgPSBvcHRzLnRpbWVvdXQgfHwgREVGQVVMVF9USU1FT1VUXG4gICAgdGhpcy50cmFuc3BvcnQgPSBvcHRzLnRyYW5zcG9ydCB8fCBnbG9iYWwuV2ViU29ja2V0IHx8IExvbmdQb2xsXG4gICAgdGhpcy5wcmltYXJ5UGFzc2VkSGVhbHRoQ2hlY2sgPSBmYWxzZVxuICAgIHRoaXMubG9uZ1BvbGxGYWxsYmFja01zID0gb3B0cy5sb25nUG9sbEZhbGxiYWNrTXNcbiAgICB0aGlzLmZhbGxiYWNrVGltZXIgPSBudWxsXG4gICAgdGhpcy5zZXNzaW9uU3RvcmUgPSBvcHRzLnNlc3Npb25TdG9yYWdlIHx8IChnbG9iYWwgJiYgZ2xvYmFsLnNlc3Npb25TdG9yYWdlKVxuICAgIHRoaXMuZXN0YWJsaXNoZWRDb25uZWN0aW9ucyA9IDBcbiAgICB0aGlzLmRlZmF1bHRFbmNvZGVyID0gU2VyaWFsaXplci5lbmNvZGUuYmluZChTZXJpYWxpemVyKVxuICAgIHRoaXMuZGVmYXVsdERlY29kZXIgPSBTZXJpYWxpemVyLmRlY29kZS5iaW5kKFNlcmlhbGl6ZXIpXG4gICAgdGhpcy5jbG9zZVdhc0NsZWFuID0gZmFsc2VcbiAgICB0aGlzLmRpc2Nvbm5lY3RpbmcgPSBmYWxzZVxuICAgIHRoaXMuYmluYXJ5VHlwZSA9IG9wdHMuYmluYXJ5VHlwZSB8fCBcImFycmF5YnVmZmVyXCJcbiAgICB0aGlzLmNvbm5lY3RDbG9jayA9IDFcbiAgICBpZih0aGlzLnRyYW5zcG9ydCAhPT0gTG9uZ1BvbGwpe1xuICAgICAgdGhpcy5lbmNvZGUgPSBvcHRzLmVuY29kZSB8fCB0aGlzLmRlZmF1bHRFbmNvZGVyXG4gICAgICB0aGlzLmRlY29kZSA9IG9wdHMuZGVjb2RlIHx8IHRoaXMuZGVmYXVsdERlY29kZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmNvZGUgPSB0aGlzLmRlZmF1bHRFbmNvZGVyXG4gICAgICB0aGlzLmRlY29kZSA9IHRoaXMuZGVmYXVsdERlY29kZXJcbiAgICB9XG4gICAgbGV0IGF3YWl0aW5nQ29ubmVjdGlvbk9uUGFnZVNob3cgPSBudWxsXG4gICAgaWYocGh4V2luZG93ICYmIHBoeFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKXtcbiAgICAgIHBoeFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIiwgX2UgPT4ge1xuICAgICAgICBpZih0aGlzLmNvbm4pe1xuICAgICAgICAgIHRoaXMuZGlzY29ubmVjdCgpXG4gICAgICAgICAgYXdhaXRpbmdDb25uZWN0aW9uT25QYWdlU2hvdyA9IHRoaXMuY29ubmVjdENsb2NrXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBwaHhXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VzaG93XCIsIF9lID0+IHtcbiAgICAgICAgaWYoYXdhaXRpbmdDb25uZWN0aW9uT25QYWdlU2hvdyA9PT0gdGhpcy5jb25uZWN0Q2xvY2spe1xuICAgICAgICAgIGF3YWl0aW5nQ29ubmVjdGlvbk9uUGFnZVNob3cgPSBudWxsXG4gICAgICAgICAgdGhpcy5jb25uZWN0KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5oZWFydGJlYXRJbnRlcnZhbE1zID0gb3B0cy5oZWFydGJlYXRJbnRlcnZhbE1zIHx8IDMwMDAwXG4gICAgdGhpcy5yZWpvaW5BZnRlck1zID0gKHRyaWVzKSA9PiB7XG4gICAgICBpZihvcHRzLnJlam9pbkFmdGVyTXMpe1xuICAgICAgICByZXR1cm4gb3B0cy5yZWpvaW5BZnRlck1zKHRyaWVzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFsxMDAwLCAyMDAwLCA1MDAwXVt0cmllcyAtIDFdIHx8IDEwMDAwXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVjb25uZWN0QWZ0ZXJNcyA9ICh0cmllcykgPT4ge1xuICAgICAgaWYob3B0cy5yZWNvbm5lY3RBZnRlck1zKXtcbiAgICAgICAgcmV0dXJuIG9wdHMucmVjb25uZWN0QWZ0ZXJNcyh0cmllcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbMTAsIDUwLCAxMDAsIDE1MCwgMjAwLCAyNTAsIDUwMCwgMTAwMCwgMjAwMF1bdHJpZXMgLSAxXSB8fCA1MDAwXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubG9nZ2VyID0gb3B0cy5sb2dnZXIgfHwgbnVsbFxuICAgIGlmKCF0aGlzLmxvZ2dlciAmJiBvcHRzLmRlYnVnKXtcbiAgICAgIHRoaXMubG9nZ2VyID0gKGtpbmQsIG1zZywgZGF0YSkgPT4geyBjb25zb2xlLmxvZyhgJHtraW5kfTogJHttc2d9YCwgZGF0YSkgfVxuICAgIH1cbiAgICB0aGlzLmxvbmdwb2xsZXJUaW1lb3V0ID0gb3B0cy5sb25ncG9sbGVyVGltZW91dCB8fCAyMDAwMFxuICAgIHRoaXMucGFyYW1zID0gY2xvc3VyZShvcHRzLnBhcmFtcyB8fCB7fSlcbiAgICB0aGlzLmVuZFBvaW50ID0gYCR7ZW5kUG9pbnR9LyR7VFJBTlNQT1JUUy53ZWJzb2NrZXR9YFxuICAgIHRoaXMudnNuID0gb3B0cy52c24gfHwgREVGQVVMVF9WU05cbiAgICB0aGlzLmhlYXJ0YmVhdFRpbWVvdXRUaW1lciA9IG51bGxcbiAgICB0aGlzLmhlYXJ0YmVhdFRpbWVyID0gbnVsbFxuICAgIHRoaXMucGVuZGluZ0hlYXJ0YmVhdFJlZiA9IG51bGxcbiAgICB0aGlzLnJlY29ubmVjdFRpbWVyID0gbmV3IFRpbWVyKCgpID0+IHtcbiAgICAgIHRoaXMudGVhcmRvd24oKCkgPT4gdGhpcy5jb25uZWN0KCkpXG4gICAgfSwgdGhpcy5yZWNvbm5lY3RBZnRlck1zKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIExvbmdQb2xsIHRyYW5zcG9ydCByZWZlcmVuY2VcbiAgICovXG4gIGdldExvbmdQb2xsVHJhbnNwb3J0KCl7IHJldHVybiBMb25nUG9sbCB9XG5cbiAgLyoqXG4gICAqIERpc2Nvbm5lY3RzIGFuZCByZXBsYWNlcyB0aGUgYWN0aXZlIHRyYW5zcG9ydFxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXdUcmFuc3BvcnQgLSBUaGUgbmV3IHRyYW5zcG9ydCBjbGFzcyB0byBpbnN0YW50aWF0ZVxuICAgKlxuICAgKi9cbiAgcmVwbGFjZVRyYW5zcG9ydChuZXdUcmFuc3BvcnQpe1xuICAgIHRoaXMuY29ubmVjdENsb2NrKytcbiAgICB0aGlzLmNsb3NlV2FzQ2xlYW4gPSB0cnVlXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZmFsbGJhY2tUaW1lcilcbiAgICB0aGlzLnJlY29ubmVjdFRpbWVyLnJlc2V0KClcbiAgICBpZih0aGlzLmNvbm4pe1xuICAgICAgdGhpcy5jb25uLmNsb3NlKClcbiAgICAgIHRoaXMuY29ubiA9IG51bGxcbiAgICB9XG4gICAgdGhpcy50cmFuc3BvcnQgPSBuZXdUcmFuc3BvcnRcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzb2NrZXQgcHJvdG9jb2xcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHByb3RvY29sKCl7IHJldHVybiBsb2NhdGlvbi5wcm90b2NvbC5tYXRjaCgvXmh0dHBzLykgPyBcIndzc1wiIDogXCJ3c1wiIH1cblxuICAvKipcbiAgICogVGhlIGZ1bGx5IHF1YWxpZmllZCBzb2NrZXQgdXJsXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBlbmRQb2ludFVSTCgpe1xuICAgIGxldCB1cmkgPSBBamF4LmFwcGVuZFBhcmFtcyhcbiAgICAgIEFqYXguYXBwZW5kUGFyYW1zKHRoaXMuZW5kUG9pbnQsIHRoaXMucGFyYW1zKCkpLCB7dnNuOiB0aGlzLnZzbn0pXG4gICAgaWYodXJpLmNoYXJBdCgwKSAhPT0gXCIvXCIpeyByZXR1cm4gdXJpIH1cbiAgICBpZih1cmkuY2hhckF0KDEpID09PSBcIi9cIil7IHJldHVybiBgJHt0aGlzLnByb3RvY29sKCl9OiR7dXJpfWAgfVxuXG4gICAgcmV0dXJuIGAke3RoaXMucHJvdG9jb2woKX06Ly8ke2xvY2F0aW9uLmhvc3R9JHt1cml9YFxuICB9XG5cbiAgLyoqXG4gICAqIERpc2Nvbm5lY3RzIHRoZSBzb2NrZXRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DbG9zZUV2ZW50I1N0YXR1c19jb2RlcyBmb3IgdmFsaWQgc3RhdHVzIGNvZGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIE9wdGlvbmFsIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBzb2NrZXQgaXMgZGlzY29ubmVjdGVkLlxuICAgKiBAcGFyYW0ge2ludGVnZXJ9IGNvZGUgLSBBIHN0YXR1cyBjb2RlIGZvciBkaXNjb25uZWN0aW9uIChPcHRpb25hbCkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBBIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhlIHJlYXNvbiB0byBkaXNjb25uZWN0LiAoT3B0aW9uYWwpXG4gICAqL1xuICBkaXNjb25uZWN0KGNhbGxiYWNrLCBjb2RlLCByZWFzb24pe1xuICAgIHRoaXMuY29ubmVjdENsb2NrKytcbiAgICB0aGlzLmRpc2Nvbm5lY3RpbmcgPSB0cnVlXG4gICAgdGhpcy5jbG9zZVdhc0NsZWFuID0gdHJ1ZVxuICAgIGNsZWFyVGltZW91dCh0aGlzLmZhbGxiYWNrVGltZXIpXG4gICAgdGhpcy5yZWNvbm5lY3RUaW1lci5yZXNldCgpXG4gICAgdGhpcy50ZWFyZG93bigoKSA9PiB7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3RpbmcgPSBmYWxzZVxuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICAgIH0sIGNvZGUsIHJlYXNvbilcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIC0gVGhlIHBhcmFtcyB0byBzZW5kIHdoZW4gY29ubmVjdGluZywgZm9yIGV4YW1wbGUgYHt1c2VyX2lkOiB1c2VyVG9rZW59YFxuICAgKlxuICAgKiBQYXNzaW5nIHBhcmFtcyB0byBjb25uZWN0IGlzIGRlcHJlY2F0ZWQ7IHBhc3MgdGhlbSBpbiB0aGUgU29ja2V0IGNvbnN0cnVjdG9yIGluc3RlYWQ6XG4gICAqIGBuZXcgU29ja2V0KFwiL3NvY2tldFwiLCB7cGFyYW1zOiB7dXNlcl9pZDogdXNlclRva2VufX0pYC5cbiAgICovXG4gIGNvbm5lY3QocGFyYW1zKXtcbiAgICBpZihwYXJhbXMpe1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLmxvZyhcInBhc3NpbmcgcGFyYW1zIHRvIGNvbm5lY3QgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCBwYXNzIDpwYXJhbXMgdG8gdGhlIFNvY2tldCBjb25zdHJ1Y3RvclwiKVxuICAgICAgdGhpcy5wYXJhbXMgPSBjbG9zdXJlKHBhcmFtcylcbiAgICB9XG4gICAgaWYodGhpcy5jb25uICYmICF0aGlzLmRpc2Nvbm5lY3RpbmcpeyByZXR1cm4gfVxuICAgIGlmKHRoaXMubG9uZ1BvbGxGYWxsYmFja01zICYmIHRoaXMudHJhbnNwb3J0ICE9PSBMb25nUG9sbCl7XG4gICAgICB0aGlzLmNvbm5lY3RXaXRoRmFsbGJhY2soTG9uZ1BvbGwsIHRoaXMubG9uZ1BvbGxGYWxsYmFja01zKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyYW5zcG9ydENvbm5lY3QoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dzIHRoZSBtZXNzYWdlLiBPdmVycmlkZSBgdGhpcy5sb2dnZXJgIGZvciBzcGVjaWFsaXplZCBsb2dnaW5nLiBub29wcyBieSBkZWZhdWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBraW5kXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtc2dcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICovXG4gIGxvZyhraW5kLCBtc2csIGRhdGEpeyB0aGlzLmxvZ2dlciAmJiB0aGlzLmxvZ2dlcihraW5kLCBtc2csIGRhdGEpIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGEgbG9nZ2VyIGhhcyBiZWVuIHNldCBvbiB0aGlzIHNvY2tldC5cbiAgICovXG4gIGhhc0xvZ2dlcigpeyByZXR1cm4gdGhpcy5sb2dnZXIgIT09IG51bGwgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY2FsbGJhY2tzIGZvciBjb25uZWN0aW9uIG9wZW4gZXZlbnRzXG4gICAqXG4gICAqIEBleGFtcGxlIHNvY2tldC5vbk9wZW4oZnVuY3Rpb24oKXsgY29uc29sZS5pbmZvKFwidGhlIHNvY2tldCB3YXMgb3BlbmVkXCIpIH0pXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBvbk9wZW4oY2FsbGJhY2spe1xuICAgIGxldCByZWYgPSB0aGlzLm1ha2VSZWYoKVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3Mub3Blbi5wdXNoKFtyZWYsIGNhbGxiYWNrXSlcbiAgICByZXR1cm4gcmVmXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGNhbGxiYWNrcyBmb3IgY29ubmVjdGlvbiBjbG9zZSBldmVudHNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gIG9uQ2xvc2UoY2FsbGJhY2spe1xuICAgIGxldCByZWYgPSB0aGlzLm1ha2VSZWYoKVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3MuY2xvc2UucHVzaChbcmVmLCBjYWxsYmFja10pXG4gICAgcmV0dXJuIHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjYWxsYmFja3MgZm9yIGNvbm5lY3Rpb24gZXJyb3IgZXZlbnRzXG4gICAqXG4gICAqIEBleGFtcGxlIHNvY2tldC5vbkVycm9yKGZ1bmN0aW9uKGVycm9yKXsgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZFwiKSB9KVxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKi9cbiAgb25FcnJvcihjYWxsYmFjayl7XG4gICAgbGV0IHJlZiA9IHRoaXMubWFrZVJlZigpXG4gICAgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5lcnJvci5wdXNoKFtyZWYsIGNhbGxiYWNrXSlcbiAgICByZXR1cm4gcmVmXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGNhbGxiYWNrcyBmb3IgY29ubmVjdGlvbiBtZXNzYWdlIGV2ZW50c1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKi9cbiAgb25NZXNzYWdlKGNhbGxiYWNrKXtcbiAgICBsZXQgcmVmID0gdGhpcy5tYWtlUmVmKClcbiAgICB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLm1lc3NhZ2UucHVzaChbcmVmLCBjYWxsYmFja10pXG4gICAgcmV0dXJuIHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFBpbmdzIHRoZSBzZXJ2ZXIgYW5kIGludm9rZXMgdGhlIGNhbGxiYWNrIHdpdGggdGhlIFJUVCBpbiBtaWxsaXNlY29uZHNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICpcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwaW5nIHdhcyBwdXNoZWQgb3IgZmFsc2UgaWYgdW5hYmxlIHRvIGJlIHB1c2hlZC5cbiAgICovXG4gIHBpbmcoY2FsbGJhY2spe1xuICAgIGlmKCF0aGlzLmlzQ29ubmVjdGVkKCkpeyByZXR1cm4gZmFsc2UgfVxuICAgIGxldCByZWYgPSB0aGlzLm1ha2VSZWYoKVxuICAgIGxldCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG4gICAgdGhpcy5wdXNoKHt0b3BpYzogXCJwaG9lbml4XCIsIGV2ZW50OiBcImhlYXJ0YmVhdFwiLCBwYXlsb2FkOiB7fSwgcmVmOiByZWZ9KVxuICAgIGxldCBvbk1zZ1JlZiA9IHRoaXMub25NZXNzYWdlKG1zZyA9PiB7XG4gICAgICBpZihtc2cucmVmID09PSByZWYpe1xuICAgICAgICB0aGlzLm9mZihbb25Nc2dSZWZdKVxuICAgICAgICBjYWxsYmFjayhEYXRlLm5vdygpIC0gc3RhcnRUaW1lKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuICB0cmFuc3BvcnRDb25uZWN0KCl7XG4gICAgdGhpcy5jb25uZWN0Q2xvY2srK1xuICAgIHRoaXMuY2xvc2VXYXNDbGVhbiA9IGZhbHNlXG4gICAgdGhpcy5jb25uID0gbmV3IHRoaXMudHJhbnNwb3J0KHRoaXMuZW5kUG9pbnRVUkwoKSlcbiAgICB0aGlzLmNvbm4uYmluYXJ5VHlwZSA9IHRoaXMuYmluYXJ5VHlwZVxuICAgIHRoaXMuY29ubi50aW1lb3V0ID0gdGhpcy5sb25ncG9sbGVyVGltZW91dFxuICAgIHRoaXMuY29ubi5vbm9wZW4gPSAoKSA9PiB0aGlzLm9uQ29ubk9wZW4oKVxuICAgIHRoaXMuY29ubi5vbmVycm9yID0gZXJyb3IgPT4gdGhpcy5vbkNvbm5FcnJvcihlcnJvcilcbiAgICB0aGlzLmNvbm4ub25tZXNzYWdlID0gZXZlbnQgPT4gdGhpcy5vbkNvbm5NZXNzYWdlKGV2ZW50KVxuICAgIHRoaXMuY29ubi5vbmNsb3NlID0gZXZlbnQgPT4gdGhpcy5vbkNvbm5DbG9zZShldmVudClcbiAgfVxuXG4gIGdldFNlc3Npb24oa2V5KXsgcmV0dXJuIHRoaXMuc2Vzc2lvblN0b3JlICYmIHRoaXMuc2Vzc2lvblN0b3JlLmdldEl0ZW0oa2V5KSB9XG5cbiAgc3RvcmVTZXNzaW9uKGtleSwgdmFsKXsgdGhpcy5zZXNzaW9uU3RvcmUgJiYgdGhpcy5zZXNzaW9uU3RvcmUuc2V0SXRlbShrZXksIHZhbCkgfVxuXG4gIGNvbm5lY3RXaXRoRmFsbGJhY2soZmFsbGJhY2tUcmFuc3BvcnQsIGZhbGxiYWNrVGhyZXNob2xkID0gMjUwMCl7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZmFsbGJhY2tUaW1lcilcbiAgICBsZXQgZXN0YWJsaXNoZWQgPSBmYWxzZVxuICAgIGxldCBwcmltYXJ5VHJhbnNwb3J0ID0gdHJ1ZVxuICAgIGxldCBvcGVuUmVmLCBlcnJvclJlZlxuICAgIGxldCBmYWxsYmFjayA9IChyZWFzb24pID0+IHtcbiAgICAgIHRoaXMubG9nKFwidHJhbnNwb3J0XCIsIGBmYWxsaW5nIGJhY2sgdG8gJHtmYWxsYmFja1RyYW5zcG9ydC5uYW1lfS4uLmAsIHJlYXNvbilcbiAgICAgIHRoaXMub2ZmKFtvcGVuUmVmLCBlcnJvclJlZl0pXG4gICAgICBwcmltYXJ5VHJhbnNwb3J0ID0gZmFsc2VcbiAgICAgIHRoaXMucmVwbGFjZVRyYW5zcG9ydChmYWxsYmFja1RyYW5zcG9ydClcbiAgICAgIHRoaXMudHJhbnNwb3J0Q29ubmVjdCgpXG4gICAgfVxuICAgIGlmKHRoaXMuZ2V0U2Vzc2lvbihgcGh4OmZhbGxiYWNrOiR7ZmFsbGJhY2tUcmFuc3BvcnQubmFtZX1gKSl7IHJldHVybiBmYWxsYmFjayhcIm1lbW9yaXplZFwiKSB9XG5cbiAgICB0aGlzLmZhbGxiYWNrVGltZXIgPSBzZXRUaW1lb3V0KGZhbGxiYWNrLCBmYWxsYmFja1RocmVzaG9sZClcblxuICAgIGVycm9yUmVmID0gdGhpcy5vbkVycm9yKHJlYXNvbiA9PiB7XG4gICAgICB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBcImVycm9yXCIsIHJlYXNvbilcbiAgICAgIGlmKHByaW1hcnlUcmFuc3BvcnQgJiYgIWVzdGFibGlzaGVkKXtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmFsbGJhY2tUaW1lcilcbiAgICAgICAgZmFsbGJhY2socmVhc29uKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5vbk9wZW4oKCkgPT4ge1xuICAgICAgZXN0YWJsaXNoZWQgPSB0cnVlXG4gICAgICBpZighcHJpbWFyeVRyYW5zcG9ydCl7XG4gICAgICAgIC8vIG9ubHkgbWVtb3JpemUgTFAgaWYgd2UgbmV2ZXIgY29ubmVjdGVkIHRvIHByaW1hcnlcbiAgICAgICAgaWYoIXRoaXMucHJpbWFyeVBhc3NlZEhlYWx0aENoZWNrKXsgdGhpcy5zdG9yZVNlc3Npb24oYHBoeDpmYWxsYmFjazoke2ZhbGxiYWNrVHJhbnNwb3J0Lm5hbWV9YCwgXCJ0cnVlXCIpIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKFwidHJhbnNwb3J0XCIsIGBlc3RhYmxpc2hlZCAke2ZhbGxiYWNrVHJhbnNwb3J0Lm5hbWV9IGZhbGxiYWNrYClcbiAgICAgIH1cbiAgICAgIC8vIGlmIHdlJ3ZlIGVzdGFibGlzaGVkIHByaW1hcnksIGdpdmUgdGhlIGZhbGxiYWNrIGEgbmV3IHBlcmlvZCB0byBhdHRlbXB0IHBpbmdcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZhbGxiYWNrVGltZXIpXG4gICAgICB0aGlzLmZhbGxiYWNrVGltZXIgPSBzZXRUaW1lb3V0KGZhbGxiYWNrLCBmYWxsYmFja1RocmVzaG9sZClcbiAgICAgIHRoaXMucGluZyhydHQgPT4ge1xuICAgICAgICB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBcImNvbm5lY3RlZCB0byBwcmltYXJ5IGFmdGVyXCIsIHJ0dClcbiAgICAgICAgdGhpcy5wcmltYXJ5UGFzc2VkSGVhbHRoQ2hlY2sgPSB0cnVlXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZhbGxiYWNrVGltZXIpXG4gICAgICB9KVxuICAgIH0pXG4gICAgdGhpcy50cmFuc3BvcnRDb25uZWN0KClcbiAgfVxuXG4gIGNsZWFySGVhcnRiZWF0cygpe1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmhlYXJ0YmVhdFRpbWVyKVxuICAgIGNsZWFyVGltZW91dCh0aGlzLmhlYXJ0YmVhdFRpbWVvdXRUaW1lcilcbiAgfVxuXG4gIG9uQ29ubk9wZW4oKXtcbiAgICBpZih0aGlzLmhhc0xvZ2dlcigpKSB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBgJHt0aGlzLnRyYW5zcG9ydC5uYW1lfSBjb25uZWN0ZWQgdG8gJHt0aGlzLmVuZFBvaW50VVJMKCl9YClcbiAgICB0aGlzLmNsb3NlV2FzQ2xlYW4gPSBmYWxzZVxuICAgIHRoaXMuZGlzY29ubmVjdGluZyA9IGZhbHNlXG4gICAgdGhpcy5lc3RhYmxpc2hlZENvbm5lY3Rpb25zKytcbiAgICB0aGlzLmZsdXNoU2VuZEJ1ZmZlcigpXG4gICAgdGhpcy5yZWNvbm5lY3RUaW1lci5yZXNldCgpXG4gICAgdGhpcy5yZXNldEhlYXJ0YmVhdCgpXG4gICAgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5vcGVuLmZvckVhY2goKFssIGNhbGxiYWNrXSkgPT4gY2FsbGJhY2soKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuICBoZWFydGJlYXRUaW1lb3V0KCl7XG4gICAgaWYodGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmKXtcbiAgICAgIHRoaXMucGVuZGluZ0hlYXJ0YmVhdFJlZiA9IG51bGxcbiAgICAgIGlmKHRoaXMuaGFzTG9nZ2VyKCkpeyB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBcImhlYXJ0YmVhdCB0aW1lb3V0LiBBdHRlbXB0aW5nIHRvIHJlLWVzdGFibGlzaCBjb25uZWN0aW9uXCIpIH1cbiAgICAgIHRoaXMudHJpZ2dlckNoYW5FcnJvcigpXG4gICAgICB0aGlzLmNsb3NlV2FzQ2xlYW4gPSBmYWxzZVxuICAgICAgdGhpcy50ZWFyZG93bigoKSA9PiB0aGlzLnJlY29ubmVjdFRpbWVyLnNjaGVkdWxlVGltZW91dCgpLCBXU19DTE9TRV9OT1JNQUwsIFwiaGVhcnRiZWF0IHRpbWVvdXRcIilcbiAgICB9XG4gIH1cblxuICByZXNldEhlYXJ0YmVhdCgpe1xuICAgIGlmKHRoaXMuY29ubiAmJiB0aGlzLmNvbm4uc2tpcEhlYXJ0YmVhdCl7IHJldHVybiB9XG4gICAgdGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmID0gbnVsbFxuICAgIHRoaXMuY2xlYXJIZWFydGJlYXRzKClcbiAgICB0aGlzLmhlYXJ0YmVhdFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnNlbmRIZWFydGJlYXQoKSwgdGhpcy5oZWFydGJlYXRJbnRlcnZhbE1zKVxuICB9XG5cbiAgdGVhcmRvd24oY2FsbGJhY2ssIGNvZGUsIHJlYXNvbil7XG4gICAgaWYoIXRoaXMuY29ubil7XG4gICAgICByZXR1cm4gY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICAgIH1cbiAgICBsZXQgY29ubmVjdENsb2NrID0gdGhpcy5jb25uZWN0Q2xvY2tcblxuICAgIHRoaXMud2FpdEZvckJ1ZmZlckRvbmUoKCkgPT4ge1xuICAgICAgaWYoY29ubmVjdENsb2NrICE9PSB0aGlzLmNvbm5lY3RDbG9jayl7IHJldHVybiB9XG4gICAgICBpZih0aGlzLmNvbm4pe1xuICAgICAgICBpZihjb2RlKXsgdGhpcy5jb25uLmNsb3NlKGNvZGUsIHJlYXNvbiB8fCBcIlwiKSB9IGVsc2UgeyB0aGlzLmNvbm4uY2xvc2UoKSB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMud2FpdEZvclNvY2tldENsb3NlZCgoKSA9PiB7XG4gICAgICAgIGlmKGNvbm5lY3RDbG9jayAhPT0gdGhpcy5jb25uZWN0Q2xvY2speyByZXR1cm4gfVxuICAgICAgICBpZih0aGlzLmNvbm4pe1xuICAgICAgICAgIHRoaXMuY29ubi5vbm9wZW4gPSBmdW5jdGlvbiAoKXsgfSAvLyBub29wXG4gICAgICAgICAgdGhpcy5jb25uLm9uZXJyb3IgPSBmdW5jdGlvbiAoKXsgfSAvLyBub29wXG4gICAgICAgICAgdGhpcy5jb25uLm9ubWVzc2FnZSA9IGZ1bmN0aW9uICgpeyB9IC8vIG5vb3BcbiAgICAgICAgICB0aGlzLmNvbm4ub25jbG9zZSA9IGZ1bmN0aW9uICgpeyB9IC8vIG5vb3BcbiAgICAgICAgICB0aGlzLmNvbm4gPSBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICB3YWl0Rm9yQnVmZmVyRG9uZShjYWxsYmFjaywgdHJpZXMgPSAxKXtcbiAgICBpZih0cmllcyA9PT0gNSB8fCAhdGhpcy5jb25uIHx8ICF0aGlzLmNvbm4uYnVmZmVyZWRBbW91bnQpe1xuICAgICAgY2FsbGJhY2soKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLndhaXRGb3JCdWZmZXJEb25lKGNhbGxiYWNrLCB0cmllcyArIDEpXG4gICAgfSwgMTUwICogdHJpZXMpXG4gIH1cblxuICB3YWl0Rm9yU29ja2V0Q2xvc2VkKGNhbGxiYWNrLCB0cmllcyA9IDEpe1xuICAgIGlmKHRyaWVzID09PSA1IHx8ICF0aGlzLmNvbm4gfHwgdGhpcy5jb25uLnJlYWR5U3RhdGUgPT09IFNPQ0tFVF9TVEFURVMuY2xvc2VkKXtcbiAgICAgIGNhbGxiYWNrKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy53YWl0Rm9yU29ja2V0Q2xvc2VkKGNhbGxiYWNrLCB0cmllcyArIDEpXG4gICAgfSwgMTUwICogdHJpZXMpXG4gIH1cblxuICBvbkNvbm5DbG9zZShldmVudCl7XG4gICAgbGV0IGNsb3NlQ29kZSA9IGV2ZW50ICYmIGV2ZW50LmNvZGVcbiAgICBpZih0aGlzLmhhc0xvZ2dlcigpKSB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBcImNsb3NlXCIsIGV2ZW50KVxuICAgIHRoaXMudHJpZ2dlckNoYW5FcnJvcigpXG4gICAgdGhpcy5jbGVhckhlYXJ0YmVhdHMoKVxuICAgIGlmKCF0aGlzLmNsb3NlV2FzQ2xlYW4gJiYgY2xvc2VDb2RlICE9PSAxMDAwKXtcbiAgICAgIHRoaXMucmVjb25uZWN0VGltZXIuc2NoZWR1bGVUaW1lb3V0KClcbiAgICB9XG4gICAgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5jbG9zZS5mb3JFYWNoKChbLCBjYWxsYmFja10pID0+IGNhbGxiYWNrKGV2ZW50KSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgb25Db25uRXJyb3IoZXJyb3Ipe1xuICAgIGlmKHRoaXMuaGFzTG9nZ2VyKCkpIHRoaXMubG9nKFwidHJhbnNwb3J0XCIsIGVycm9yKVxuICAgIGxldCB0cmFuc3BvcnRCZWZvcmUgPSB0aGlzLnRyYW5zcG9ydFxuICAgIGxldCBlc3RhYmxpc2hlZEJlZm9yZSA9IHRoaXMuZXN0YWJsaXNoZWRDb25uZWN0aW9uc1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3MuZXJyb3IuZm9yRWFjaCgoWywgY2FsbGJhY2tdKSA9PiB7XG4gICAgICBjYWxsYmFjayhlcnJvciwgdHJhbnNwb3J0QmVmb3JlLCBlc3RhYmxpc2hlZEJlZm9yZSlcbiAgICB9KVxuICAgIGlmKHRyYW5zcG9ydEJlZm9yZSA9PT0gdGhpcy50cmFuc3BvcnQgfHwgZXN0YWJsaXNoZWRCZWZvcmUgPiAwKXtcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5FcnJvcigpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0cmlnZ2VyQ2hhbkVycm9yKCl7XG4gICAgdGhpcy5jaGFubmVscy5mb3JFYWNoKGNoYW5uZWwgPT4ge1xuICAgICAgaWYoIShjaGFubmVsLmlzRXJyb3JlZCgpIHx8IGNoYW5uZWwuaXNMZWF2aW5nKCkgfHwgY2hhbm5lbC5pc0Nsb3NlZCgpKSl7XG4gICAgICAgIGNoYW5uZWwudHJpZ2dlcihDSEFOTkVMX0VWRU5UUy5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBjb25uZWN0aW9uU3RhdGUoKXtcbiAgICBzd2l0Y2godGhpcy5jb25uICYmIHRoaXMuY29ubi5yZWFkeVN0YXRlKXtcbiAgICAgIGNhc2UgU09DS0VUX1NUQVRFUy5jb25uZWN0aW5nOiByZXR1cm4gXCJjb25uZWN0aW5nXCJcbiAgICAgIGNhc2UgU09DS0VUX1NUQVRFUy5vcGVuOiByZXR1cm4gXCJvcGVuXCJcbiAgICAgIGNhc2UgU09DS0VUX1NUQVRFUy5jbG9zaW5nOiByZXR1cm4gXCJjbG9zaW5nXCJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBcImNsb3NlZFwiXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNDb25uZWN0ZWQoKXsgcmV0dXJuIHRoaXMuY29ubmVjdGlvblN0YXRlKCkgPT09IFwib3BlblwiIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogQHBhcmFtIHtDaGFubmVsfVxuICAgKi9cbiAgcmVtb3ZlKGNoYW5uZWwpe1xuICAgIHRoaXMub2ZmKGNoYW5uZWwuc3RhdGVDaGFuZ2VSZWZzKVxuICAgIHRoaXMuY2hhbm5lbHMgPSB0aGlzLmNoYW5uZWxzLmZpbHRlcihjID0+IGMgIT09IGNoYW5uZWwpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBgb25PcGVuYCwgYG9uQ2xvc2VgLCBgb25FcnJvcixgIGFuZCBgb25NZXNzYWdlYCByZWdpc3RyYXRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge3JlZnN9IC0gbGlzdCBvZiByZWZzIHJldHVybmVkIGJ5IGNhbGxzIHRvXG4gICAqICAgICAgICAgICAgICAgICBgb25PcGVuYCwgYG9uQ2xvc2VgLCBgb25FcnJvcixgIGFuZCBgb25NZXNzYWdlYFxuICAgKi9cbiAgb2ZmKHJlZnMpe1xuICAgIGZvcihsZXQga2V5IGluIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3Mpe1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrc1trZXldID0gdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrc1trZXldLmZpbHRlcigoW3JlZl0pID0+IHtcbiAgICAgICAgcmV0dXJuIHJlZnMuaW5kZXhPZihyZWYpID09PSAtMVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhdGVzIGEgbmV3IGNoYW5uZWwgZm9yIHRoZSBnaXZlbiB0b3BpY1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9waWNcbiAgICogQHBhcmFtIHtPYmplY3R9IGNoYW5QYXJhbXMgLSBQYXJhbWV0ZXJzIGZvciB0aGUgY2hhbm5lbFxuICAgKiBAcmV0dXJucyB7Q2hhbm5lbH1cbiAgICovXG4gIGNoYW5uZWwodG9waWMsIGNoYW5QYXJhbXMgPSB7fSl7XG4gICAgbGV0IGNoYW4gPSBuZXcgQ2hhbm5lbCh0b3BpYywgY2hhblBhcmFtcywgdGhpcylcbiAgICB0aGlzLmNoYW5uZWxzLnB1c2goY2hhbilcbiAgICByZXR1cm4gY2hhblxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqL1xuICBwdXNoKGRhdGEpe1xuICAgIGlmKHRoaXMuaGFzTG9nZ2VyKCkpe1xuICAgICAgbGV0IHt0b3BpYywgZXZlbnQsIHBheWxvYWQsIHJlZiwgam9pbl9yZWZ9ID0gZGF0YVxuICAgICAgdGhpcy5sb2coXCJwdXNoXCIsIGAke3RvcGljfSAke2V2ZW50fSAoJHtqb2luX3JlZn0sICR7cmVmfSlgLCBwYXlsb2FkKVxuICAgIH1cblxuICAgIGlmKHRoaXMuaXNDb25uZWN0ZWQoKSl7XG4gICAgICB0aGlzLmVuY29kZShkYXRhLCByZXN1bHQgPT4gdGhpcy5jb25uLnNlbmQocmVzdWx0KSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW5kQnVmZmVyLnB1c2goKCkgPT4gdGhpcy5lbmNvZGUoZGF0YSwgcmVzdWx0ID0+IHRoaXMuY29ubi5zZW5kKHJlc3VsdCkpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG5leHQgbWVzc2FnZSByZWYsIGFjY291bnRpbmcgZm9yIG92ZXJmbG93c1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgbWFrZVJlZigpe1xuICAgIGxldCBuZXdSZWYgPSB0aGlzLnJlZiArIDFcbiAgICBpZihuZXdSZWYgPT09IHRoaXMucmVmKXsgdGhpcy5yZWYgPSAwIH0gZWxzZSB7IHRoaXMucmVmID0gbmV3UmVmIH1cblxuICAgIHJldHVybiB0aGlzLnJlZi50b1N0cmluZygpXG4gIH1cblxuICBzZW5kSGVhcnRiZWF0KCl7XG4gICAgaWYodGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmICYmICF0aGlzLmlzQ29ubmVjdGVkKCkpeyByZXR1cm4gfVxuICAgIHRoaXMucGVuZGluZ0hlYXJ0YmVhdFJlZiA9IHRoaXMubWFrZVJlZigpXG4gICAgdGhpcy5wdXNoKHt0b3BpYzogXCJwaG9lbml4XCIsIGV2ZW50OiBcImhlYXJ0YmVhdFwiLCBwYXlsb2FkOiB7fSwgcmVmOiB0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWZ9KVxuICAgIHRoaXMuaGVhcnRiZWF0VGltZW91dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmhlYXJ0YmVhdFRpbWVvdXQoKSwgdGhpcy5oZWFydGJlYXRJbnRlcnZhbE1zKVxuICB9XG5cbiAgZmx1c2hTZW5kQnVmZmVyKCl7XG4gICAgaWYodGhpcy5pc0Nvbm5lY3RlZCgpICYmIHRoaXMuc2VuZEJ1ZmZlci5sZW5ndGggPiAwKXtcbiAgICAgIHRoaXMuc2VuZEJ1ZmZlci5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKCkpXG4gICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXVxuICAgIH1cbiAgfVxuXG4gIG9uQ29ubk1lc3NhZ2UocmF3TWVzc2FnZSl7XG4gICAgdGhpcy5kZWNvZGUocmF3TWVzc2FnZS5kYXRhLCBtc2cgPT4ge1xuICAgICAgbGV0IHt0b3BpYywgZXZlbnQsIHBheWxvYWQsIHJlZiwgam9pbl9yZWZ9ID0gbXNnXG4gICAgICBpZihyZWYgJiYgcmVmID09PSB0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYpe1xuICAgICAgICB0aGlzLmNsZWFySGVhcnRiZWF0cygpXG4gICAgICAgIHRoaXMucGVuZGluZ0hlYXJ0YmVhdFJlZiA9IG51bGxcbiAgICAgICAgdGhpcy5oZWFydGJlYXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZW5kSGVhcnRiZWF0KCksIHRoaXMuaGVhcnRiZWF0SW50ZXJ2YWxNcylcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5oYXNMb2dnZXIoKSkgdGhpcy5sb2coXCJyZWNlaXZlXCIsIGAke3BheWxvYWQuc3RhdHVzIHx8IFwiXCJ9ICR7dG9waWN9ICR7ZXZlbnR9ICR7cmVmICYmIFwiKFwiICsgcmVmICsgXCIpXCIgfHwgXCJcIn1gLCBwYXlsb2FkKVxuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGFubmVscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzW2ldXG4gICAgICAgIGlmKCFjaGFubmVsLmlzTWVtYmVyKHRvcGljLCBldmVudCwgcGF5bG9hZCwgam9pbl9yZWYpKXsgY29udGludWUgfVxuICAgICAgICBjaGFubmVsLnRyaWdnZXIoZXZlbnQsIHBheWxvYWQsIHJlZiwgam9pbl9yZWYpXG4gICAgICB9XG5cbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLm1lc3NhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgWywgY2FsbGJhY2tdID0gdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5tZXNzYWdlW2ldXG4gICAgICAgIGNhbGxiYWNrKG1zZylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgbGVhdmVPcGVuVG9waWModG9waWMpe1xuICAgIGxldCBkdXBDaGFubmVsID0gdGhpcy5jaGFubmVscy5maW5kKGMgPT4gYy50b3BpYyA9PT0gdG9waWMgJiYgKGMuaXNKb2luZWQoKSB8fCBjLmlzSm9pbmluZygpKSlcbiAgICBpZihkdXBDaGFubmVsKXtcbiAgICAgIGlmKHRoaXMuaGFzTG9nZ2VyKCkpIHRoaXMubG9nKFwidHJhbnNwb3J0XCIsIGBsZWF2aW5nIGR1cGxpY2F0ZSB0b3BpYyBcIiR7dG9waWN9XCJgKVxuICAgICAgZHVwQ2hhbm5lbC5sZWF2ZSgpXG4gICAgfVxuICB9XG59XG4iLCAiLyoqIEBpbXBvcnQgeyBTbmlwcGV0IH0gZnJvbSAnc3ZlbHRlJyAqL1xuLyoqIEBpbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vcGF5bG9hZCcgKi9cbi8qKiBAaW1wb3J0IHsgR2V0dGVycyB9IGZyb20gJyNzaGFyZWQnICovXG5cbi8qKlxuICogQ3JlYXRlIGEgc25pcHBldCBwcm9ncmFtbWF0aWNhbGx5XG4gKiBAdGVtcGxhdGUge3Vua25vd25bXX0gUGFyYW1zXG4gKiBAcGFyYW0geyguLi5wYXJhbXM6IEdldHRlcnM8UGFyYW1zPikgPT4ge1xuICogICByZW5kZXI6ICgpID0+IHN0cmluZ1xuICogICBzZXR1cD86IChlbGVtZW50OiBFbGVtZW50KSA9PiB2b2lkIHwgKCgpID0+IHZvaWQpXG4gKiB9fSBmblxuICogQHJldHVybnMge1NuaXBwZXQ8UGFyYW1zPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhd1NuaXBwZXQoZm4pIHtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciB0aGUgdHlwZXMgYXJlIGEgbGllXG5cdHJldHVybiAoLyoqIEB0eXBlIHtQYXlsb2FkfSAqLyBwYXlsb2FkLCAvKiogQHR5cGUge1BhcmFtc30gKi8gLi4uYXJncykgPT4ge1xuXHRcdHZhciBnZXR0ZXJzID0gLyoqIEB0eXBlIHtHZXR0ZXJzPFBhcmFtcz59ICovIChhcmdzLm1hcCgodmFsdWUpID0+ICgpID0+IHZhbHVlKSk7XG5cdFx0cGF5bG9hZC5vdXQgKz0gZm4oLi4uZ2V0dGVycylcblx0XHRcdC5yZW5kZXIoKVxuXHRcdFx0LnRyaW0oKTtcblx0fTtcbn1cbiIsICJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gXCJzdmVsdGUvc3RvcmVcIjtcblxuZXhwb3J0IGxldCBsaXZlVmlld1NvY2tldHMgPSB3cml0YWJsZSgpO1xuIiwgImltcG9ydCB7IFNvY2tldCB9IGZyb20gJ3Bob2VuaXgnO1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZV9yb29tX25hbWUocm9vbV9uYW1lKSB7XG4gIHJldHVybiByb29tX25hbWUuc3BsaXQoJ18nKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyAnICcgKyBjdXJbMF0udG9VcHBlckNhc2UoKSArIGN1ci5zbGljZSgxKSwgJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGlzZV9zb2NrZXQodG9rZW4pIHtcbiAgaWYgKHRva2VuKSB7XG4gICAgbGV0IHNvY2tldCA9IG5ldyBTb2NrZXQoJy9zb2NrZXQnLCB7IHBhcmFtczogeyB0b2tlbjogdG9rZW4gfSB9KTtcbiAgICBzb2NrZXQuY29ubmVjdCgpO1xuICAgIHJldHVybiBzb2NrZXQ7XG4gIH1cbiAgcmV0dXJuO1xufVxuIiwgIjxzY3JpcHQ+XG4gIGltcG9ydCB7IFByZXNlbmNlLCBTb2NrZXQgfSBmcm9tICdwaG9lbml4JztcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGxpdmVWaWV3U29ja2V0cyB9IGZyb20gJy4uL3N0b3Jlcy9saXZlVmlld1NvY2tldHMnO1xuICBpbXBvcnQgeyB0cmFuc2xhdGVfcm9vbV9uYW1lLCBpbml0aWFsaXNlX3NvY2tldCB9IGZyb20gJy4uL2xpYi91dGlscyc7XG4gIGxldCB7IHJvb21fbmFtZSwgdXNlciB9ID0gJHByb3BzKCk7XG4gIGxldCBjaGFubmVsO1xuICBsZXQgcHJlc2VuY2U7XG4gIGxldCBib2FyZCA9ICRzdGF0ZShbXSk7XG4gIGxldCBzb2NrZXQ7XG4gIGxldCBwbGF5ZXIgPSAkc3RhdGUoKTtcbiAgbGV0IGNvbnRhaW5lciA9ICRzdGF0ZShudWxsKTtcbiAgbGV0IHNob3dMZWZ0ID0gJHN0YXRlKGZhbHNlKTsgLy8gZmFsc2U7XG4gIGxldCBzaG93UmlnaHQgPSAkc3RhdGUoZmFsc2UpOyAvLyBmYWxzZTtcbiAgbGV0IHdhaXRpbmcgPSAkc3RhdGUodHJ1ZSk7XG4gIGxldCB0dXJuID0gJHN0YXRlKCdYJyk7XG4gIGxldCB3aW5uaW5nQ2VsbHMgPSAkc3RhdGUoW10pO1xuICBsZXQgd2lubmVyID0gJHN0YXRlKCk7XG4gIGxldCBvcHBvbmVudCA9ICRzdGF0ZSgnJyk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2hhZG93cygpIHtcbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuICAgIHNob3dMZWZ0ID0gY29udGFpbmVyLnNjcm9sbExlZnQgPiAwO1xuICAgIHNob3dSaWdodCA9IGNvbnRhaW5lci5zY3JvbGxMZWZ0ICsgY29udGFpbmVyLmNsaWVudFdpZHRoIDwgY29udGFpbmVyLnNjcm9sbFdpZHRoO1xuICB9XG4gICRlZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgIHVwZGF0ZVNoYWRvd3MoKTtcbiAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVTaGFkb3dzKTtcbiAgICB9XG4gIH0pO1xuICBvbk1vdW50KCgpID0+IHtcbiAgICBzb2NrZXQgPSBpbml0aWFsaXNlX3NvY2tldCh1c2VyLmVtYWlsKTtcbiAgICBpZiAoIXNvY2tldCkge1xuICAgICAgY29uc29sZS5sb2coJ05vIHNvY2tldCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBqb2luKCk7XG4gICAgICBpZiAoJGxpdmVWaWV3U29ja2V0cykge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIGxpdmUgdmlldyBzb2NrZXQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBmdW5jdGlvbiBqb2luKCkge1xuICAgIGNoYW5uZWwgPSBzb2NrZXQuY2hhbm5lbChgcm9vbToke3Jvb21fbmFtZX1gLCB7IHRva2VuOiB1c2VyPy5lbWFpbCwgbmFtZTogdXNlcj8ubmFtZSB9KTtcbiAgICBsZXQgdG9rZW4gPSB1c2VyPy5lbWFpbDtcbiAgICBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZShjaGFubmVsKTtcbiAgICBjaGFubmVsXG4gICAgICAuam9pbigpXG4gICAgICAucmVjZWl2ZSgnb2snLCAocmVzcCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnSm9pbmVkIHN1Y2Nlc3NmdWxseScsIHJlc3ApO1xuICAgICAgICBjaGFubmVsLm9uKCdwbGF5ZWQnLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgIGJvYXJkID0gcGF5bG9hZC5ib2FyZDtcbiAgICAgICAgICB0dXJuID0gcGF5bG9hZC50dXJuO1xuICAgICAgICAgIC8vIGNoZWNrIGlmIG5lZWQgdG8gc2Nyb2xsXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BheWxvYWQueH0tJHtwYXlsb2FkLnl9YCk7XG4gICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3QgaXNWZXJ0aWNhbGx5T3V0T2ZWaWV3ID0gcmVjdC50b3AgPD0gMCB8fCByZWN0LmJvdHRvbSA+PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgICAvLyBDaGVjayBob3Jpem9udGFsIHZpc2liaWxpdHlcbiAgICAgICAgICBjb25zdCBpc0hvcml6b250YWxseU91dE9mVmlldyA9IHJlY3QubGVmdCA8IDAgfHwgcmVjdC5yaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgIGlmIChpc1ZlcnRpY2FsbHlPdXRPZlZpZXcgfHwgaXNIb3Jpem9udGFsbHlPdXRPZlZpZXcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BheWxvYWQueH0tJHtwYXlsb2FkLnl9YCkuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJywgaW5saW5lOiAnY2VudGVyJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjaGFubmVsLm9uKCdib2FyZF9jcmVhdGVkJywgKHBheWxvYWQpID0+IHtcbiAgICAgICAgICBib2FyZCA9IHBheWxvYWQuYm9hcmQ7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGFubmVsLm9uKCdnYW1lX292ZXInLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgIGJvYXJkID0gcGF5bG9hZC5ib2FyZDtcbiAgICAgICAgICB3aW5uaW5nQ2VsbHMgPSBwYXlsb2FkLndpbl9jb29yZHM7XG4gICAgICAgICAgaWYgKHBheWxvYWQ/Lndpbm5lcikge1xuICAgICAgICAgICAgd2lubmVyID0gcGF5bG9hZC53aW5uZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAucmVjZWl2ZSgnZXJyb3InLCAocmVzcCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnVW5hYmxlIHRvIGpvaW4nLCByZXNwKTtcbiAgICAgICAgYWxlcnQoJ1VuYWJsZSB0byBqb2luJyk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2JieSc7XG4gICAgICB9KTtcbiAgICBwcmVzZW5jZS5vblN5bmMoKCkgPT4ge1xuICAgICAgcHJlc2VuY2UubGlzdCgoaWQsIG1ldGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1ByZXNlbmNlIGxpc3QnLCBpZCwgbWV0YSk7XG4gICAgICAgIGlmIChtZXRhLm1ldGFzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICB3YWl0aW5nID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YWl0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGEubWV0YXMuZmluZEluZGV4KChtKSA9PiBtLnRva2VuID09IHRva2VuKSA9PSAwKSB7XG4gICAgICAgICAgcGxheWVyID0gJ1gnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllciA9ICdPJztcbiAgICAgICAgfVxuICAgICAgICBvcHBvbmVudCA9IG1ldGEubWV0YXMuZmluZCgobSkgPT4gbS50b2tlbiAhPSB0b2tlbikubmFtZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHBsYXkoeCwgeSkge1xuICAgIGNoYW5uZWxcbiAgICAgIC5wdXNoKCdwbGF5JywgeyB4OiB4LCB5OiB5LCBwbGF5ZXI6IHBsYXllciB9KVxuICAgICAgLnJlY2VpdmUoJ29rJywgKHBheWxvYWQpID0+IHtcbiAgICAgICAgYm9hcmQgPSBwYXlsb2FkLmJvYXJkO1xuICAgICAgICB0dXJuID0gcGF5bG9hZC50dXJuO1xuICAgICAgICBpZiAocGF5bG9hZD8uZ2FtZV9vdmVyKSB7XG4gICAgICAgICAgd2lubmluZ0NlbGxzID0gcGF5bG9hZC53aW5fY29vcmRzO1xuICAgICAgICAgIGlmIChwYXlsb2FkPy53aW5uZXIpIHtcbiAgICAgICAgICAgIHdpbm5lciA9IHBheWxvYWQud2lubmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5yZWNlaXZlKCdlcnJvcicsIChlcnIpID0+IGNvbnNvbGUubG9nKCdwaG9lbml4IGVycm9yZWQnLCBlcnIpKVxuICAgICAgLnJlY2VpdmUoJ3RpbWVvdXQnLCAoKSA9PiBjb25zb2xlLmxvZygndGltZWQgb3V0IHB1c2hpbmcnKSk7XG4gIH1cbiAgZnVuY3Rpb24gaXNXaW5uaW5nQ2VsbChjb2wsIHJvdykge1xuICAgIHJldHVybiB3aW5uaW5nQ2VsbHMuc29tZSgoW3dpbkNvbCwgd2luUm93XSkgPT4gd2luQ29sID09PSBjb2wgJiYgd2luUm93ID09PSByb3cpO1xuICB9XG48L3NjcmlwdD5cblxuPCEtLSA8U2VydmljZVdvcmtlciBiaW5kOnNlcnZpY2VXb3JrZXJWZXJzaW9uPjwvU2VydmljZVdvcmtlcj4gLS0+XG48ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIHB5LTJcIj5cbiAgPGgyIGNsYXNzPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPlJvb206IHt0cmFuc2xhdGVfcm9vbV9uYW1lKHJvb21fbmFtZSl9PC9oMj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwicm91bmRlZC1sZyBiZy1yZWQtNjAwIHB4LTQgcHktMiB0ZXh0LXdoaXRlXCJcbiAgICBvbmNsaWNrPXsoKSA9PiAod2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvYmJ5Jyl9PkxlYXZlPC9idXR0b24+XG48L2Rpdj5cbnsjaWYgYm9hcmQubGVuZ3RoID4gMCAmJiBwbGF5ZXIgJiYgIXdhaXRpbmd9XG4gIDxkaXZcbiAgICBjbGFzcz1cImJhbm5lciBzdGlja3kgaW5zZXQteC0wIHRvcC0yIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC1sZyBwLTRcIlxuICAgIGRhdGEtd2lubmVyPXt3aW5uZXIgJiYgcGxheWVyID09IHdpbm5lcn0+XG4gICAgeyNpZiB3aW5uZXJ9XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPCEtLSBXaW5uZXIgdGV4dCByZWNlaXZlcyBmcm9tIGJvdGggc2lkZXMgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7I2lmIHBsYXllciA9PSB3aW5uZXJ9WW91IHdpbiFcbiAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICBQbGF5ZXIge3dpbm5lcn0gV2lucyF7L2lmfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICB7OmVsc2V9XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1sZyBiZy1hbWJlci02MDAgcHgtNCBweS0yIHRleHQtd2hpdGVcIlxuICAgICAgICAgIGNsYXNzOmluLXR1cm49e3R1cm4gPT0gcGxheWVyfT5cbiAgICAgICAgICB7I2lmIHR1cm4gPT0gcGxheWVyfVlvdXIgdHVybiF7OmVsc2V9V2FpdGluZyBmb3IgeW91ciB0dXJuLi4uey9pZn1cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgIFBsYXllcjpcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3M9XCJ0aWN0YWN0b2UtaWQgbWwtMiBpbmxpbmUtYmxvY2sgcm91bmRlZC1sZyBiZy13aGl0ZSBweC0yIHB5LTEgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICBkYXRhLWNlbGw9e3BsYXllcn0+e3BsYXllcn08L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIHsvaWZ9XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYm9hcmQgcmVsYXRpdmUgbXQtMiByb3VuZGVkLWxnIGJnLWJsYWNrIHAtMlwiPlxuICAgIDwhLS0gU2hhZG93IGxlZnQgLS0+XG4gICAgeyNpZiBzaG93TGVmdH1cbiAgICAgIDxkaXYgY2xhc3M9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIHRvcC0wIGxlZnQtMCB6LTEwIGgtZnVsbCB3LTYgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrLzIwIHRvLXRyYW5zcGFyZW50XCI+PC9kaXY+XG4gICAgey9pZn1cblxuICAgIDwhLS0gU2hhZG93IHJpZ2h0IC0tPlxuICAgIHsjaWYgc2hvd1JpZ2h0fVxuICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB6LTEwIGgtZnVsbCB3LTYgYmctZ3JhZGllbnQtdG8tbCBmcm9tLWJsYWNrLzIwIHRvLXRyYW5zcGFyZW50XCI+PC9kaXY+XG4gICAgey9pZn1cblxuICAgIDwhLS0gU2Nyb2xsYWJsZSBjb250ZW50IC0tPlxuICAgIDxkaXZcbiAgICAgIGJpbmQ6dGhpcz17Y29udGFpbmVyfVxuICAgICAgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGdhcC0yIG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgeyNlYWNoIGJvYXJkIGFzIHJvdywgY29sX2luZGV4IChjb2xfaW5kZXgpfVxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBtaW4tdy1tYXggZ2FwLTJcIj5cbiAgICAgICAgICB7I2VhY2ggcm93IGFzIGNlbGwsIHJvd19pbmRleCAocm93X2luZGV4KX1cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3R1cm4gIT0gcGxheWVyIHx8IGNlbGwgIT0gJycgfHwgd2lubmluZ0NlbGxzLmxlbmd0aCA+IDB9XG4gICAgICAgICAgICAgIGlkPVwie2NvbF9pbmRleH0te3Jvd19pbmRleH1cIlxuICAgICAgICAgICAgICBjbGFzcz1cInRpY3RhY3RvZS1jZWxsIGFzcGVjdC1zcXVhcmUgbWluLWgtWzMycHhdIHctZnVsbCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLW1kIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwie2NvbF9pbmRleH0sIHtyb3dfaW5kZXh9XCJcbiAgICAgICAgICAgICAgZGF0YS1jZWxsPXtjZWxsfVxuICAgICAgICAgICAgICBkYXRhLXdpbm5pbmc9e2lzV2lubmluZ0NlbGwoY29sX2luZGV4LCByb3dfaW5kZXgpID8gJ3RydWUnIDogJ2ZhbHNlJ31cbiAgICAgICAgICAgICAgb25jbGljaz17KCkgPT4gcGxheShjb2xfaW5kZXgsIHJvd19pbmRleCl9PntjZWxsfTwvYnV0dG9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgICB7L2VhY2h9XG4gICAgPC9kaXY+XG4gIDwvZGl2Plxuey9pZn1cbjxkaXYgY2xhc3M9XCJncmlkIGdhcC0yXCI+XG4gIHsjaWYgcGxheWVyICYmIHdhaXRpbmd9XG4gICAgPHA+V2FpdGluZyBmb3IgYW5vdGhlciBwbGF5ZXIuLi48L3A+XG4gIHsvaWZ9XG48L2Rpdj5cblxuPHN0eWxlPlxuICAudGljdGFjdG9lLWNlbGwge1xuICAgICY6ZGlzYWJsZWQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICAgICZbZGF0YS1jZWxsPScnXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5cbiAgICAmW2RhdGEtY2VsbD0nTyddW2RhdGEtd2lubmluZz0nZmFsc2UnXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2OyAvKiBUYWlsd2luZCByZWQtNjAwICovXG4gICAgfVxuXG4gICAgJltkYXRhLWNlbGw9J1gnXVtkYXRhLXdpbm5pbmc9J2ZhbHNlJ10ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzNGU0YTsgLyogVGFpbHdpbmQgdGVhbC05MDAgKi9cbiAgICB9XG5cbiAgICAmW2RhdGEtY2VsbD0nTyddW2RhdGEtd2lubmluZz0ndHJ1ZSddIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWNjMTU7IC8qIFRhaWx3aW5kIHllbGxvdy00MDAgKi9cbiAgICAgIGFuaW1hdGlvbjogcHVsc2Utd2luIDFzIGluZmluaXRlO1xuICAgIH1cblxuICAgICZbZGF0YS1jZWxsPSdYJ11bZGF0YS13aW5uaW5nPSd0cnVlJ10ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRhZGU4MDsgLyogVGFpbHdpbmQgZ3JlZW4tNDAwICovXG4gICAgICBhbmltYXRpb246IHB1bHNlLXdpbiAxcyBpbmZpbml0ZTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHB1bHNlLXdpbiB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cbiAgfVxuXG4gIC50aWN0YWN0b2UtaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjQ2ZTU7IC8qIFRhaWx3aW5kIGluZGlnby02MDAgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgJltkYXRhLWNlbGw9J08nXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2OyAvKiBUYWlsd2luZCByZWQtNjAwICovXG4gICAgfVxuXG4gICAgJltkYXRhLWNlbGw9J1gnXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM0ZTRhOyAvKiBUYWlsd2luZCB0ZWFsLTkwMCAqL1xuICAgIH1cbiAgfVxuXG4gIC5pbi10dXJuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0NmU1OyAvKiBUYWlsd2luZCBpbmRpZ28tNjAwICovXG4gIH1cbiAgLmJhbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgLyogVGFpbHdpbmQgaW5kaWdvLTYwMCAqL1xuICAgIHotaW5kZXg6IDE7XG4gICAgJltkYXRhLXdpbm5lcj0ndHJ1ZSddIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YWRlODA7IC8qIFRhaWx3aW5kIGdyZWVuLTQwMCAqL1xuICAgIH1cblxuICAgICZbZGF0YS13aW5uZXI9J2ZhbHNlJ10ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjsgLyogVGFpbHdpbmQgcmVkLTYwMCAqL1xuICAgIH1cbiAgfVxuICAuYm9hcmQge1xuICB9XG48L3N0eWxlPlxuIiwgIjxzY3JpcHQ+XG4gIGltcG9ydCB7IFByZXNlbmNlLCBTb2NrZXQgfSBmcm9tICdwaG9lbml4JztcbiAgaW1wb3J0IHsgdHJhbnNsYXRlX3Jvb21fbmFtZSwgaW5pdGlhbGlzZV9zb2NrZXQgfSBmcm9tICcuLi9saWIvdXRpbHMnO1xuICBsZXQgeyB1c2VyIH0gPSAkcHJvcHMoKTtcbiAgbGV0IHJvb21zID0gJHN0YXRlKHt9KTtcbiAgbGV0IHNvY2tldDtcbiAgbGV0IGNoYW5uZWw7XG4gIGxldCBwcmVzZW5jZTtcbiAgJGVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0ID0gaW5pdGlhbGlzZV9zb2NrZXQodXNlcj8uZW1haWwpO1xuICAgIGpvaW4oKTtcbiAgfSk7XG4gIGZ1bmN0aW9uIGpvaW4oKSB7XG4gICAgY2hhbm5lbCA9IHNvY2tldC5jaGFubmVsKCdsb2JieScsIHsgdG9rZW46IHVzZXI/LmVtYWlsIH0pO1xuICAgIHByZXNlbmNlID0gbmV3IFByZXNlbmNlKGNoYW5uZWwpO1xuICAgIGNoYW5uZWxcbiAgICAgIC5qb2luKClcbiAgICAgIC5yZWNlaXZlKCdvaycsIChyZXNwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdKb2luZWQgc3VjY2Vzc2Z1bGx5JywgcmVzcCk7XG4gICAgICAgIGNoYW5uZWwub24oJ2NoYW5uZWxfbGlzdCcsIChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5uZWxfbGlzdCcsIHBheWxvYWQpO1xuICAgICAgICAgIHJvb21zID0gcGF5bG9hZC5yb29tcztcbiAgICAgICAgfSk7XG4gICAgICAgIGNoYW5uZWwub24oJ3Jvb21fY2hhbmdlZCcsIChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3Jvb21fY3JlYXRlZCcsIHBheWxvYWQpO1xuICAgICAgICAgIHJvb21zID0gcGF5bG9hZC5yb29tcztcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnJlY2VpdmUoJ2Vycm9yJywgKHJlc3ApID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBqb2luJywgcmVzcCk7XG4gICAgICB9KTtcbiAgICBwcmVzZW5jZS5vblN5bmMoKCkgPT4ge1xuICAgICAgcHJlc2VuY2UubGlzdCgoaWQsIG1ldGEpID0+IHt9KTtcbiAgICB9KTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVfYW5kX2pvaW5fcm9vbSgpIHtcbiAgICBjaGFubmVsXG4gICAgICAucHVzaCgnY3JlYXRlX3Jvb20nLCB7IGhlaWdodDogMjAsIHdpZHRoOiAyMCwgd2lubmluZzogNSB9KVxuICAgICAgLnJlY2VpdmUoJ29rJywgKHBheWxvYWQpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2dhbWUvJyArIHBheWxvYWQucm9vbTtcbiAgICAgIH0pXG4gICAgICAucmVjZWl2ZSgnZXJyb3InLCAoZXJyKSA9PiBjb25zb2xlLmxvZygncGhvZW5peCBlcnJvcmVkJywgZXJyKSk7XG4gIH1cbiAgZnVuY3Rpb24gam9pbl9yb29tKHJvb20pIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZ2FtZS8nICsgcm9vbTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJncmlkIHctZnVsbCBnYXAtNFwiPlxuICA8YnV0dG9uXG4gICAgY2xhc3M9XCJteC1hdXRvIHctZml0IHJvdW5kZWQgYmctYmx1ZS01MDAgcHgtNCBweS0yIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWJsdWUtNzAwXCJcbiAgICBvbmNsaWNrPXtjcmVhdGVfYW5kX2pvaW5fcm9vbX0+Q3JlYXRlIFJvb20hPC9idXR0b24+XG4gIDxkaXYgY2xhc3M9XCJyb29tcy1saXN0IGdyaWQgZ3JpZC1jb2xzLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgeyNlYWNoIE9iamVjdC5lbnRyaWVzKHJvb21zKSBhcyBbcm9vbSwgZGF0YV19XG4gICAgICB7I2lmIGRhdGEuY291bnQgPD0gMX1cbiAgICAgICAgPHA+e3RyYW5zbGF0ZV9yb29tX25hbWUocm9vbSl9IFt7ZGF0YS5oZWlnaHR9eHtkYXRhLndpZHRofV08L3A+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cInctZml0IHJvdW5kZWQgYmctdGVhbC01MDAgcHgtNCBweS0yIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLXRlYWwtNzAwXCJcbiAgICAgICAgICBvbmNsaWNrPXsoKSA9PiBqb2luX3Jvb20ocm9vbSl9PkpvaW4hPC9idXR0b24+XG4gICAgICB7L2lmfVxuICAgIHsvZWFjaH1cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuICAucm9vbXMtbGlzdCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgfVxuPC9zdHlsZT5cbiIsICI8c2NyaXB0PlxuICBpbXBvcnQgeyBTb2NrZXQgfSBmcm9tIFwicGhvZW5peFwiO1xuICBpbXBvcnQgeyBsaXZlVmlld1NvY2tldHMgfSBmcm9tIFwiLi4vc3RvcmVzL2xpdmVWaWV3U29ja2V0c1wiXG5cbiAgbGV0IHsgbGl2ZSwgc29ja2V0IH0gPSAkcHJvcHMoKTtcbiAgJGVmZmVjdCgoKSA9PiB7XG4gICAgbGl2ZVZpZXdTb2NrZXRzLnNldChsaXZlKVxuICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIilcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICB0b2tlbiA9IHNlbGYuY3J5cHRvLnJhbmRvbVVVSUQoKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbilcbiAgICB9XG4gICAgc29ja2V0ID0gKG5ldyBTb2NrZXQoXCIvc29ja2V0XCIsIHtwYXJhbXM6IHt0b2tlbjogdG9rZW59fSkpXG4gICAgc29ja2V0LmNvbm5lY3QoKVxuICB9KVxuPC9zY3JpcHQ+XG4iLCAiRWxpeGlyX0RvUXVpY2tpZVdlYl9FeGFtcGxlU3ZlbHRlTGl2ZVskLkZJTEVOQU1FXSA9ICdzdmVsdGUvX2J1aWxkL0VsaXhpci5Eb1F1aWNraWVXZWIuRXhhbXBsZVN2ZWx0ZUxpdmUuc3ZlbHRlJztcblxuaW1wb3J0ICogYXMgJCBmcm9tICdzdmVsdGUvaW50ZXJuYWwvc2VydmVyJztcblxuZnVuY3Rpb24gRWxpeGlyX0RvUXVpY2tpZVdlYl9FeGFtcGxlU3ZlbHRlTGl2ZSgkJHBheWxvYWQsICQkcHJvcHMpIHtcblx0JC5wdXNoKEVsaXhpcl9Eb1F1aWNraWVXZWJfRXhhbXBsZVN2ZWx0ZUxpdmUpO1xuXHQkLnBvcCgpO1xufVxuXG5FbGl4aXJfRG9RdWlja2llV2ViX0V4YW1wbGVTdmVsdGVMaXZlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQucmVuZGVyKC4uLikgaXMgbm8gbG9uZ2VyIHZhbGlkIGluIFN2ZWx0ZSA1LiBTZWUgaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlL3Y1LW1pZ3JhdGlvbi1ndWlkZSNDb21wb25lbnRzLWFyZS1uby1sb25nZXItY2xhc3NlcyBmb3IgbW9yZSBpbmZvcm1hdGlvbicpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWxpeGlyX0RvUXVpY2tpZVdlYl9FeGFtcGxlU3ZlbHRlTGl2ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdFlYQndhVzVuY3lJNklpSXNJbTVoYldWeklqcGJYU3dpYVdkdWIzSmxUR2x6ZENJNlcxMHNJbk52ZFhKalpYTWlPbHNpUld4cGVHbHlMa1J2VVhWcFkydHBaVmRsWWk1RmVHRnRjR3hsVTNabGJIUmxUR2wyWlM1emRtVnNkR1VpWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVhHNGlYWDA9IiwgImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29tcG9uZW50cy5kZWZhdWx0KSB8fCAhQXJyYXkuaXNBcnJheShjb21wb25lbnRzLmZpbGVuYW1lcykpIHJldHVybiBjb21wb25lbnRzXG5cbiAgICBjb25zdCBub3JtYWxpemVkID0ge31cbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgbW9kdWxlXSBvZiBjb21wb25lbnRzLmRlZmF1bHQuZW50cmllcygpKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZHVsZS5kZWZhdWx0XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wb25lbnRzLmZpbGVuYW1lc1tpbmRleF0ucmVwbGFjZShcIi4uL3N2ZWx0ZS9cIiwgXCJcIikucmVwbGFjZShcIi5zdmVsdGVcIiwgXCJcIilcbiAgICAgICAgbm9ybWFsaXplZFtuYW1lXSA9IENvbXBvbmVudFxuICAgIH1cbiAgICByZXR1cm4gbm9ybWFsaXplZFxufVxuIiwgImltcG9ydCB7bm9ybWFsaXplQ29tcG9uZW50c30gZnJvbSBcIi4vdXRpbHNcIlxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gXCJzdmVsdGUvc2VydmVyXCJcbmltcG9ydCB7Y3JlYXRlUmF3U25pcHBldH0gZnJvbSBcInN2ZWx0ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZW5kZXIoY29tcG9uZW50cykge1xuICAgIGNvbXBvbmVudHMgPSBub3JtYWxpemVDb21wb25lbnRzKGNvbXBvbmVudHMpXG5cbiAgICByZXR1cm4gZnVuY3Rpb24gcihuYW1lLCBwcm9wcywgc2xvdHMpIHtcbiAgICAgICAgY29uc3Qgc25pcHBldHMgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhzbG90cykubWFwKChbc2xvdE5hbWUsIHZdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc25pcHBldCA9IGNyZWF0ZVJhd1NuaXBwZXQobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6ICgpID0+IHYsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmIChzbG90TmFtZSA9PT0gXCJkZWZhdWx0XCIpIHJldHVybiBbXCJjaGlsZHJlblwiLCBzbmlwcGV0XVxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIFtzbG90TmFtZSwgc25pcHBldF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gcmVuZGVyKGNvbXBvbmVudHNbbmFtZV0sIHtwcm9wczogey4uLnByb3BzLCAuLi5zbmlwcGV0c319KVxuICAgIH1cbn1cbiIsICJpbXBvcnQge25vcm1hbGl6ZUNvbXBvbmVudHN9IGZyb20gXCIuL3V0aWxzXCJcbmltcG9ydCB7bW91bnQsIGh5ZHJhdGUsIHVubW91bnQsIGNyZWF0ZVJhd1NuaXBwZXR9IGZyb20gXCJzdmVsdGVcIlxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVKc29uKHJlZiwgYXR0cmlidXRlTmFtZSkge1xuICAgIGNvbnN0IGRhdGEgPSByZWYuZWwuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpXG4gICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDoge31cbn1cblxuZnVuY3Rpb24gZ2V0U2xvdHMocmVmKSB7XG4gICAgbGV0IHNuaXBwZXRzID0ge31cblxuICAgIGZvciAoY29uc3Qgc2xvdE5hbWUgaW4gZ2V0QXR0cmlidXRlSnNvbihyZWYsIFwiZGF0YS1zbG90c1wiKSkge1xuICAgICAgICBjb25zdCBiYXNlNjQgPSBnZXRBdHRyaWJ1dGVKc29uKHJlZiwgXCJkYXRhLXNsb3RzXCIpW3Nsb3ROYW1lXVxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGF0b2IoYmFzZTY0KS50cmltKClcblxuICAgICAgICBjb25zdCBzbmlwcGV0ID0gY3JlYXRlUmF3U25pcHBldChuYW1lID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVuZGVyOiAoKSA9PiBlbGVtZW50Lm91dGVySFRNTCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoc2xvdE5hbWUgPT09IFwiZGVmYXVsdFwiKSBzbmlwcGV0c1tcImNoaWxkcmVuXCJdID0gc25pcHBldFxuICAgICAgICBlbHNlIHNuaXBwZXRzW3Nsb3ROYW1lXSA9IHNuaXBwZXRcbiAgICB9XG5cbiAgICByZXR1cm4gc25pcHBldHNcbn1cblxuZnVuY3Rpb24gZ2V0TGl2ZUpzb25Qcm9wcyhyZWYpIHtcbiAgICBjb25zdCBqc29uID0gZ2V0QXR0cmlidXRlSnNvbihyZWYsIFwiZGF0YS1saXZlLWpzb25cIilcblxuICAgIC8vIE9uIFNTUiwgZGF0YS1saXZlLWpzb24gaXMgdGhlIGZ1bGwgb2JqZWN0IHdlIHdhbnRcbiAgICAvLyBBZnRlciBTU1IsIGRhdGEtbGl2ZS1qc29uIGlzIGFuIGFycmF5IG9mIGtleXMsIGFuZCB3ZSdsbCBnZXQgdGhlIGRhdGEgZnJvbSB0aGUgd2luZG93XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGpzb24pKSByZXR1cm4ganNvblxuXG4gICAgY29uc3QgbGl2ZUpzb25EYXRhID0ge31cbiAgICBmb3IgKGNvbnN0IGxpdmVKc29uVmFyaWFibGUgb2YganNvbikge1xuICAgICAgICBjb25zdCBkYXRhID0gd2luZG93W2xpdmVKc29uVmFyaWFibGVdXG4gICAgICAgIGlmIChkYXRhKSBsaXZlSnNvbkRhdGFbbGl2ZUpzb25WYXJpYWJsZV0gPSBkYXRhXG4gICAgfVxuICAgIHJldHVybiBsaXZlSnNvbkRhdGFcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcHMocmVmKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZ2V0QXR0cmlidXRlSnNvbihyZWYsIFwiZGF0YS1wcm9wc1wiKSxcbiAgICAgICAgLi4uZ2V0TGl2ZUpzb25Qcm9wcyhyZWYpLFxuICAgICAgICAuLi5nZXRTbG90cyhyZWYpLFxuICAgICAgICBsaXZlOiByZWYsXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaW5kU2xvdEN0eChjb21wb25lbnQpIHtcbiAgICAvLyBUaGUgZGVmYXVsdCBzbG90IGFsd2F5cyBleGlzdHMgaWYgdGhlcmUncyBhIHNsb3Qgc2V0XG4gICAgLy8gZXZlbiBpZiBubyBzbG90IGlzIHNldCBmb3IgdGhlIGV4cGxpY2l0IGRlZmF1bHQgc2xvdFxuICAgIHJldHVybiBjb21wb25lbnQuJCQuY3R4LmZpbmQoY3R4RWxlbWVudCA9PiBjdHhFbGVtZW50Py5kZWZhdWx0KVxufVxuXG5mdW5jdGlvbiB1cGRhdGVfc3RhdGUocmVmKSB7XG4gICAgY29uc3QgbmV3UHJvcHMgPSBnZXRQcm9wcyhyZWYpXG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3UHJvcHMpIHtcbiAgICAgICAgcmVmLl9pbnN0YW5jZS5zdGF0ZVtrZXldID0gbmV3UHJvcHNba2V5XVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvb2tzKGNvbXBvbmVudHMpIHtcbiAgICBjb21wb25lbnRzID0gbm9ybWFsaXplQ29tcG9uZW50cyhjb21wb25lbnRzKVxuXG4gICAgY29uc3QgU3ZlbHRlSG9vayA9IHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9ICRzdGF0ZShnZXRQcm9wcyh0aGlzKSlcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKVxuICAgICAgICAgICAgaWYgKCFjb21wb25lbnROYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJDb21wb25lbnQgbmFtZSBtdXN0IGJlIHByb3ZpZGVkXCIpXG5cbiAgICAgICAgICAgIGNvbnN0IENvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50TmFtZV1cbiAgICAgICAgICAgIGlmICghQ29tcG9uZW50KSB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kICR7Y29tcG9uZW50TmFtZX0gY29tcG9uZW50LmApXG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgbGl2ZUpzb25FbGVtZW50IG9mIE9iamVjdC5rZXlzKGdldEF0dHJpYnV0ZUpzb24odGhpcywgXCJkYXRhLWxpdmUtanNvblwiKSkpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihgJHtsaXZlSnNvbkVsZW1lbnR9X2luaXRpYWxpemVkYCwgX2V2ZW50ID0+IHVwZGF0ZV9zdGF0ZSh0aGlzKSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYCR7bGl2ZUpzb25FbGVtZW50fV9wYXRjaGVkYCwgX2V2ZW50ID0+IHVwZGF0ZV9zdGF0ZSh0aGlzKSwgZmFsc2UpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgZm9yIHRoZSBsb2FkaW5nIHNsb3QgdG8gYmUgY2xlYXJlZCBvbmNlIHdlIG1vdW50IHRoZSBjb21wb25lbnRcbiAgICAgICAgICAgIGlmICghdGhpcy5lbC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNzclwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBoeWRyYXRlT3JNb3VudCA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKFwiZGF0YS1zc3JcIikgPyBoeWRyYXRlIDogbW91bnRcblxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBoeWRyYXRlT3JNb3VudChDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZWwsXG4gICAgICAgICAgICAgICAgcHJvcHM6IHN0YXRlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLnN0YXRlID0gc3RhdGVcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVkKCkge1xuICAgICAgICAgICAgdXBkYXRlX3N0YXRlKHRoaXMpXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVzdHJveWVkKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBoeDpwYWdlLWxvYWRpbmctc3RvcFwiLCAoKSA9PiB1bm1vdW50KHRoaXMuX2luc3RhbmNlKSwge29uY2U6IHRydWV9KVxuICAgICAgICB9LFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIFN2ZWx0ZUhvb2ssXG4gICAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUEsU0FBQUEsaUJBQUE7QUFBQSxnQkFBQUM7QUFBQTtBQUFBLDhCQUFBRDs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBOzs7Ozs7OztBQ0NPLElBQU0sc0JBQXNCLEtBQUs7QUFFakMsSUFBTSxxQkFBcUIsS0FBSztBQUNoQyxJQUFNLG1CQUFtQixLQUFLO0FBQzlCLElBQU0sc0JBQXNCLEtBQUs7QUFHakMsSUFBTSxpQkFBaUIsS0FBSztBQUM1QixJQUFNLG1CQUFtQixLQUFLO0FBQzlCLElBQU0sb0JBQW9CLEtBQUs7QUFDL0IsSUFBTSx3QkFBd0IsS0FBSztBQUduQyxJQUFNLGlCQUFpQixLQUFLO0FBQzVCLElBQU0sb0JBQW9CLEtBQUs7QUFHL0IsSUFBTSwyQkFBMkIsS0FBSztBQUV0QyxJQUFNLGtCQUFrQjtBQUV4QixJQUFNLHVCQUF1QjtBQUM3QixJQUFNLGdCQUFnQjtBQUN0QixJQUFNLGtCQUFrQixDQUFDO0FBR3pCLElBQU0sa0NBQWtDLEtBQUs7QUFFN0MsSUFBTSxnQkFBZ0IsT0FBTztBQUc3QixJQUFNLFdBQVcsT0FBTyxVQUFVO0FBQ2xDLElBQU0sTUFBTSxPQUFPLEtBQUs7OztBQ2pDL0IsSUFBTSxhQUFhO0FBQ25CLElBQU0sZ0JBQWdCO0FBT2YsU0FB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QyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sSUFBSSxFQUFFO0FBQUEsRUFDdkQsSUFBSSxFQUFFLFlBQVksQ0FBQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sSUFBSSxFQUFFO0FBQUEsRUFDdkQsSUFBSSxFQUFFLFlBQVksQ0FBQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sSUFBSSxFQUFFO0FBQUEsRUFDdkQsSUFBSSxFQUFFLFlBQVksQ0FBQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sSUFBSSxFQUFFO0FBQUEsRUFDdkQsSUFBSSxFQUFFLFlBQVksQ0FBQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sSUFBSSxFQUFFO0FBQUE7QUFBQSxFQUV2RCxRQUFRLEVBQUUsTUFBTSxDQUFDLFVBQVUsWUFBWSxTQUFTLE1BQU0sVUFBVSxVQUFVLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRNUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLE1BQU0sU0FBUyxVQUFVLFVBQVUsRUFBRTtBQUFBO0FBQUEsRUFFeEQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLFNBQVMsVUFBVSxVQUFVLEVBQUU7QUFBQSxFQUNyRCxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU0sU0FBUyxVQUFVLFVBQVUsRUFBRTtBQUFBLEVBQ3JELE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxTQUFTLFVBQVUsVUFBVSxFQUFFO0FBQUE7QUFBQSxFQUVyRCxVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sVUFBVSxFQUFFO0FBQUE7QUFBQSxFQUV0QyxPQUFPO0FBQUEsSUFDTixNQUFNLENBQUMsV0FBVyxZQUFZLFNBQVMsU0FBUyxTQUFTLFNBQVMsVUFBVSxVQUFVO0FBQUEsRUFDdkY7QUFBQTtBQUFBLEVBRUEsTUFBTTtBQUFBLElBQ0wsTUFBTTtBQUFBLE1BQ0w7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtB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VyxFQUFFO0FBQ3hGLGVBQVcsSUFBSSxJQUFJO0VBQ3ZCO0FBQ0EsU0FBTztBQUNYO0FDTk8sU0FBUyxVQUFVLFlBQVk7QUFDbEMsZUFBYSxvQkFBb0IsVUFBVTtBQUUzQyxTQUFPLFNBQVMsRUFBRSxNQUFNLE9BQU8sT0FBTztBQUNsQyxVQUFNLFdBQVcsT0FBTztNQUNwQixPQUFPLFFBQVEsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNO0FBQ3pDLGNBQU1FLFdBQVVDLGtCQUFpQixDQUFBQyxVQUFRO0FBQ3JDLGlCQUFPO1lBQ0gsUUFBUSxNQUFNO1VBQ2xCO1FBQ0osQ0FBQztBQUNELFlBQUksYUFBYSxVQUFXLFFBQU8sQ0FBQyxZQUFZRixRQUFPO1lBQ2xELFFBQU8sQ0FBQyxVQUFVQSxRQUFPO01BQ2xDLENBQUM7SUFDTDtBQUVBLFdBQU8sT0FBTyxXQUFXLElBQUksR0FBRyxFQUFDLE9BQU8sRUFBQyxHQUFHLE9BQU8sR0FBRyxTQUFRLEVBQUMsQ0FBQztFQUNwRTtBQUNKOzs7QTdEbkJPLElBQU1HLFVBQVMsVUFBVSxTQUFVOyIsCiAgIm5hbWVzIjogWyJzZXJ2ZXJfZXhwb3J0cyIsICJyZW5kZXIiLCAiaGFzaCIsICJzdGFjayIsICJjb21wb25lbnQiLCAic3RhY2siLCAicHJvcCIsICJzb3VyY2UiLCAidmFsdWUiLCAia2V5IiwgImRlcml2ZWQiLCAicGFyZW50IiwgInN0YWNrIiwgInNvdXJjZSIsICJlZmZlY3QiLCAibG9jYXRpb24iLCAiYXJyYXlfcHJvdG90eXBlIiwgImluZGV4IiwgImVmZmVjdCIsICJwdXNoIiwgInBhcmVudCIsICJkZXJpdmVkIiwgImVmZmVjdCIsICJlZmZlY3QiLCAicHVzaCIsICJlZmZlY3QiLCAidGVhcmRvd24iLCAibmV4dCIsICJ0cmFuc2l0aW9uIiwgInBhcmVudCIsICJjaGlsZCIsICJzaWJsaW5nIiwgImVmZmVjdCIsICJkZXJpdmVkIiwgInBhcmVudCIsICJlZmZlY3QiLCAiZWZmZWN0IiwgImNvbXBvbmVudF9jb250ZXh0IiwgInN0YWNrIiwgImluZGV4IiwgInRlYXJkb3duIiwgImNoaWxkIiwgInBhcmVudCIsICJkZXJpdmVkIiwgInBhcmVudCIsICJldmVudCIsICJlZmZlY3QiLCAiY29tcG9uZW50IiwgImV2ZW50cyIsICJwYXNzaXZlIiwgInVubW91bnQiLCAic2V0IiwgInVwZGF0ZSIsICJydW4iLCAicHJvcCIsICJuZXh0IiwgImV2ZW50IiwgInNsb3QiLCAiYXR0ciIsICJwcm9wIiwgImVsZW1lbnQiLCAicnVuIiwgInB1c2giLCAicG9wIiwgImNvbXBvbmVudCIsICJjaGlsZCIsICJwYXJlbnQiLCAiY2hpbGQiLCAibWVzc2FnZSIsICJjb21wb25lbnQiLCAicHVzaCIsICJwb3AiLCAiaGVhZCIsICJoYXNoIiwgImhhc2giLCAic3RvcmVfZ2V0IiwgImNsb3N1cmUiLCAiZXZlbnQiLCAic3RhdGUiLCAiZmFsbGJhY2siLCAiY3JlYXRlUmF3U25pcHBldCIsICJlbGVtZW50IiwgInB1c2giLCAicG9wIiwgImluZGV4IiwgIm1vZHVsZSIsICJzbmlwcGV0IiwgImNyZWF0ZVJhd1NuaXBwZXQiLCAibmFtZSIsICJyZW5kZXIiXQp9Cg==

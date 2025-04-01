// @ts-check

/**!
 * Dragonian Lua
 * @version 1.0
 * @copyright MIT & LGPLv3 License
 * @comment Main development by Drago Cuven
 * @comment With help from.. alot of people (check the code)
 * Do not remove this comment
 */
(async function (Scratch) {
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('"Dragonian Lua" must be ran unsandboxed.');
    }
  
    const menuIconURI = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijk0NyIgaGVpZ2h0PSI5NDciIHZpZXdCb3g9IjAgMCA5NDcgOTQ3IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSJuYXZ5IiBkPSJNODM1LjUgNDczLjZjMC0xOTkuOC0xNjIuMi0zNjItMzYyLTM2MnMtMzYyIDE2Mi4yLTM2MiAzNjIgMTYyLjIgMzYyIDM2MiAzNjIgMzYyLTE2Mi4yIDM2Mi0zNjIiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNzI5LjUgMzIzLjZjMC01OC41LTQ3LjUtMTA2LTEwNi0xMDZzLTEwNiA0Ny41LTEwNiAxMDYgNDcuNSAxMDYgMTA2IDEwNiAxMDYtNDcuNSAxMDYtMTA2Ii8+PHBhdGggZmlsbD0ibmF2eSIgZD0iTTk0MS41IDExMS41YzAtNTguNS00Ny41LTEwNi0xMDYtMTA2cy0xMDYgNDcuNS0xMDYgMTA2IDQ3LjUgMTA2IDEwNiAxMDYgMTA2LTQ3LjQgMTA2LTEwNiIvPjxwYXRoIGQ9Ik0yNTguMSA2MjcuOGgxMTcuM3YyNi43SDIyNy44VjQxN2gzMC4zem0yNTcuNCAyNi43di0yMy44Yy0xNiAyMi41LTMxLjkgMzEuMy01NyAzMS4zLTMzLjIgMC01NC40LTE4LjItNTQuNC00Ni42VjQ4My44aDI3djEyMC45YzAgMjAuNSAxMy43IDMzLjYgMzUuMiAzMy42IDI4LjMgMCA0Ni42LTIyLjggNDYuNi01Ny43di05Ni44aDI3djE3MC43em0yMjIuOSA0LjZjLTguOCAyLjMtMTMgMi45LTE4LjYgMi45LTE3LjYgMC0yNi4xLTcuOC0yOC0yNS4xLTE5LjIgMTcuNi0zNi41IDI1LjEtNTggMjUuMS0zNC41IDAtNTYtMTkuNS01Ni01MC41IDAtMjIuMiAxMC4xLTM3LjUgMzAtNDUuNiAxMC40LTQuMiAxNi4zLTUuNSA1NC43LTEwLjQgMjEuNS0yLjYgMjguMy03LjUgMjguMy0xOC45di03LjJjMC0xNi4zLTEzLjctMjUuNC0zOC4xLTI1LjQtMjUuNCAwLTM3LjggOS40LTQwLjEgMzAuM2gtMjcuNGMuNy0xNi45IDMuOS0yNi43IDExLjctMzUuNSAxMS40LTEyLjcgMzEuOS0xOS45IDU2LjctMTkuOSA0MiAwIDY0LjIgMTYuMyA2NC4yIDQ2LjZ2MTAwLjRjMCA4LjUgNS4yIDEzLjQgMTQuNyAxMy40IDEuNiAwIDIuOSAwIDUuOS0uN3ptLTQ3LjYtODljLTkuMSA0LjItMTUgNS41LTQzLjcgOS40LTI5IDQuMi00MS4xIDEzLjQtNDEuMSAzMS4zIDAgMTcuMyAxMi40IDI3LjQgMzMuNiAyNy40IDE2IDAgMjkuMy01LjIgNDAuNC0xNS4zIDguMS03LjUgMTAuOC0xMyAxMC44LTIyLjJ6IiBmaWxsPSIjRkZGIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJncmF5IiBzdHJva2Utd2lkdGg9IjEwLjg2MSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSI0MC44NDciIGQ9Ik04OTAuNiAyNjFjMzMuNSA2NS44IDUxIDEzOC42IDUxIDIxMi41IDAgMjU4LjQtMjA5LjcgNDY4LjEtNDY4LjEgNDY4LjFTNS40IDczMS45IDUuNCA0NzMuNSAyMTUuMSA1LjQgNDczLjUgNS40YzgzLjEgMCAxNjQuNiAyMi4xIDIzNi4yIDYzLjkiLz48L3N2Zz4=";

    const {Cast, BlockType, ArgumentType, vm} = Scratch,
      {runtime} = vm;
  
    // @todo Find a way to embed this so it works offline
    //       and prevent global leakage
    function waitFinish(script) {
      return new Promise((resolve) => {
        script.addEventListener('load', resolve);
      });
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/ace-builds@1.36.2/src-min/ace.js';
    document.head.appendChild(script);
    await waitFinish(script);
  
    const engine = "Turbowarp";
  
    // @todo Find a way to embed this so it works offline
    //       and prevent global leakage
    // @ts-ignore I know it exists so shut it TS
    const {LuaFactory} = await import('https://cdn.jsdelivr.net/npm/wasmoon/+esm');
    const factory = new LuaFactory();
    let lua = await factory.createEngine();
  
    // Utility functions
    const formatRes = (res) => {
      if (res === '') return '[empty String]';
      if (res === true) return '[boolean True]';
      if (res === false) return '[boolean False]';
      if (res === null) return '[empty Null]';
      if (res === undefined) return '[empty Undefined]';
      if (typeof res === 'object') {
        if (Array.isArray(res)) return '[object Array]';
        return '[object Object]';
      }
      if (typeof res === 'function') return '[object Function]';
      if (typeof res === 'number') return `[number ${res}]`;
      return `[string|empty <\n${res}\n>]`;
    };
    const _getVarObjectFromName = (name, util, type) => {
      const stageTarget = runtime.getTargetForStage();
      const target = util.target;
      let listObject = Object.create(null);
  
      listObject = stageTarget.lookupVariableByNameAndType(name, type);
      if (listObject) return listObject;
      listObject = target.lookupVariableByNameAndType(name, type);
      if (listObject) return listObject;
    };
    function _parseJSON(obj) {
      if (Array.isArray(obj)) return {};
      if (typeof obj === 'object') return obj;
      try {
        obj = JSON.parse(obj);
        if (Array.isArray(obj)) return {};
        if (typeof obj === 'object') return obj;
        return {};
      } catch {
        return {};
      }
    }
  
    // Resetting the lua runtime
    async function resetLua() {
      const threads = runtime.threads;
      const oldStatus = [];
      for (var i = 0; i < threads.length; i++) {
        const thisThread = threads[i];
        oldStatus.push(thisThread.status);
        thisThread.status = 5;
      }
      lua.global.close();
      lua = await factory.createEngine();
      for (var i = 0; i < threads.length; i++) {
        threads[i].status = oldStatus[i];
      }
    }
  
    const cbfsb = runtime._convertBlockForScratchBlocks.bind(runtime);
    runtime._convertBlockForScratchBlocks = function (blockInfo, categoryInfo) {
      const res = cbfsb(blockInfo, categoryInfo);
      if (blockInfo.outputShape) {
        res.json.outputShape = blockInfo.outputShape;
      }
      return res;
    };
  
    // Actual extension code
    class extension {
      get lua() {
        return lua;
      }
      static get MoreFields() {
        if (!runtime.ext_0znzwMoreFields) return false;
        if (!ArgumentType.INLINETEXTAREA) return false;
        if (!runtime.ext_0znzwMoreFields.constructor.customFieldTypes) return false;
        return true;
      }
      static get customFieldTypes() {
        return (extension.MoreFields ? runtime.ext_0znzwMoreFields.constructor.customFieldTypes : {});
      }
      constructor() {
        this.DEBUG = true;
        this.DO_INIT = true;
        // Some things may require util
        this.preservedUtil = null;
        this.setupClasses();
      }
      getInfo() {
        const MoreFields = extension.MoreFields;
        return {
          id: 'DragonianLua',
          name: 'Lua',
          color1: '#000080',
          color2: '#ffffff',
          color3: '#808080',
          menuIconURI,
          blocks: [
            {
              opcode: 'disableEnableInit',
              blockType: BlockType.COMMAND,
              text: 'perform scratch-runtime initilization on run: [INIT]',
              arguments: {
                INIT: {
                  type: ArgumentType.BOOLEAN,
                },
              },
            },
            {
              opcode: 'no_op_0',
              blockType: BlockType.COMMAND,
              text: 'run lua [CODE]',
              arguments: {
                CODE: {
                  type: MoreFields ? 'TextareaInputInline' : ArgumentType.STRING,
                  defaultValue: `--data.set("variable", "value", is a list?) \ndata.set("my variable", "It works!", false) \nprint(data.get("my variable"))`,
                },
              },
              func: 'runLua',
            },
            {
              opcode: 'no_op_1',
              blockType: BlockType.REPORTER,
              text: 'run lua [CODE]',
              arguments: {
                CODE: {
                  type: MoreFields ? 'TextareaInputInline' : ArgumentType.STRING,
                  defaultValue: `--data.set("variable", "value", is a list?) \ndata.set("my variable", "Success!", false) \nreturn(data.get("my variable"))`,
                },
              },
              func: 'runLua',
              outputShape: 3,
            },
            '---',
              {
                opcode: 'no_op_4',
                blockType: Scratch.BlockType.REPORTER,
                text: 'variable [VAR]',
                outputShape: Scratch.extensions.isPenguinmod ? 5 : 3,
                blockShape: Scratch.extensions.isPenguinmod ? 5 : 3,
                arguments: {
                  VAR: {
                    type: ArgumentType.STRING,
                  },
                },
                allowDropAnywhere: true,
                func: 'getLuaVar',
              },
              '---',
              {
                opcode: 'linkedFunctionCallback',
                blockType: BlockType.HAT,
                text: 'function [NAME] args [DATA] ', // please do not break the blocks array again - Mubi
                 arguments: {
                  NAME: {
                    type: ArgumentType.STRING,
                  },
                  DATA: {
                    // this will be a regenerating reporter onee would hope <3
                    type: null
                  },
                },
              },
          ],
          customFieldTypes: extension.customFieldTypes,
        };
      }
  
      // no-op functions ignore these and leave them blank
      no_op_0() {}
      no_op_1() {}
      no_op_2() {}
      no_op_3() {}
      no_op_4() {}
      no_op_5() {}
  
      _extensions() {
        const arr = Array.from(vm.extensionManager._loadedExtensions.keys());
        if (typeof arr[0] !== 'string') arr.push('');
        return arr;
      }
      runBlock({EXT, OPCODE, ARGS}, util, blockJSON) {
        /* @author https://github.com/TheShovel/ */
        /* @author https://scratch.mit.edu/users/0znzw/ */
        /* @link https://github.com/PenguinMod/PenguinMod-ExtensionsGallery/blob/main/static/extensions/TheShovel/extexp.js */
        // (and the subsequent custom functions ^)
        if ((EXT = Cast.toString(EXT)), ((!this._extensions().includes(EXT) || EXT === '') && !runtime[`ext_${EXT}`])) return '';
        const fn = runtime._primitives[`${EXT}_${Cast.toString(OPCODE)}`] || runtime[`ext_${EXT}`]?.[Cast.toString(OPCODE)];
        if (!fn) return '';
        // blockJSON is not "as" important as util
        // util is usually required for a block to even run
        // expect a lot of errors if it is missing
        const res = fn(_parseJSON(ARGS), this._util(util), blockJSON || {});
        if (this.DEBUG) console.trace(`runBlock_JS | Ran ${EXT}_${OPCODE} and got:\n`, formatRes(res));
        return res; 
      }
      async getLuaVar(args) {
        const luaVar = lua.global.get(args.VAR);
        return (typeof args.VAR === 'number' || luaVar instanceof Error || luaVar == null) ? "" : luaVar;
    }
    
    
  
      _util(util) {
        return this.preservedUtil || util;
      }
      _constructFakeUtil(realUtil) {
        return this._util(realUtil) || {
          target: vm.editingTarget,
          thread: runtime.threads[0],
          stackFrame: {},
        };
      }
      setupClasses() {
        const MathUtil = {
          PI: Math.PI,
          E: Math.E,
          degToRad: (deg) => deg * (Math.PI / 180),
          radToDeg: (rad) => rad * (180 / Math.PI),
        };
        this.MathUtil = MathUtil;
        this.Functions = {
          // Motion functions
          motion_moveSteps: (util, steps) => runtime.ext_scratch3_motion._moveSteps.call(runtime.ext_scratch3_motion, Cast.toNumber(steps), util.target),
          motion_turn: (util, deg) => util.target.setDirection(util.target.direction + Cast.toNumber(deg)),
          motion_goTo: (util, x, y) => util.target.setXY(Cast.toNumber(x), Cast.toNumber(y)),
          motion_changePos: (util, dx, dy) => util.target.setXY(util.target.x + Cast.toNumber(dx), util.target.y + Cast.toNumber(dy)),
          motion_setX: (util, x) => util.target.setXY(Cast.toNumber(x), util.target.y),
          motion_setY: (util, y) => util.target.setXY(util.target.x, Cast.toNumber(y)),
          motion_changeX: (util, dx) => util.target.setXY(util.target.x + Cast.toNumber(dx), util.target.y),
          motion_changeY: (util, dy) => util.target.setXY(util.target.x, util.target.y + Cast.toNumber(dy)),
          motion_pointInDir: (util, deg) => (util.target.direction = Cast.toNumber(deg)),
          motion_setRotationStyle: (util, style) => util.target.setRotationStyle(Cast.toString(style)),
          motion_ifOnEdgeBounce: (util) => runtime.ext_scratch3_motion._ifOnEdgeBounce.call(runtime.ext_scratch3_motion, util.target),
          
          // Looks
          looks_say: (util, msg) => runtime.ext_scratch3_looks._say.call(runtime.ext_scratch3_looks, Cast.toString(msg), util.target),
          looks_sayForSecs: (util, msg, secs) => runtime.ext_scratch3_looks.sayforsecs.call(runtime.ext_scratch3_looks, { MESSAGE: msg, SECS: secs }, util),
          looks_think: (util, msg) => runtime.emit(runtime.ext_scratch3_looks.SAY_OR_THINK, util.target, 'think', Cast.toString(msg)),
          looks_thinkForSecs: (util, msg, secs) => runtime.ext_scratch3_looks.thinkforsecs.call(runtime.ext_scratch3_looks, { MESSAGE: msg, SECS: secs }, util),
          looks_show: (util) => runtime.ext_scratch3_looks.show.call(runtime.ext_scratch3_looks, null, util),
          looks_hide: (util) => runtime.ext_scratch3_looks.hide.call(runtime.ext_scratch3_looks, null, util),
          
          //Events
          events_broadcast: (util, msg) => 0,
          events_broadcastandwait: (util, msg) => 0,
  
  
          // Control
          control_wait: (_, seconds) => new Promise(resolve => setTimeout(resolve, Cast.toNumber(seconds) * 1000)),
          control_clone: (util, spr) => 0,
          control_deleteClone: (util) => 0,
  
          //Sensing
          sensing_loudness: (util) => 0,
          sensing_loud: (util) => 0,
          sensing_mouseX: () => runtime.ioDevices.mouse._scratchX,
          sensing_mouseY: () => runtime.ioDevices.mouse._scratchY,
          sensing_mouseDown: (util) => runtime.ioDevices.mouse,
          sensing_timer: (util) => 0,
          sensing_resettimer: (util) => 0,
          sensing_username: (util) => 0,
          sensing_current: (util) => 0,
          sensing_dayssince2000: (util, datetype) => 0,
          sensing_distanceto: (util, sprite) => 0,
          sensing_colorIsTouchingColor: (util, colour1, colour2) => 0,
          sensing_touchingcolor: (util, color) => 0,
          sensing_touchingobject: (util, sprite) => 0,
          sensing_keypressed: (util, key) => 0,
          sensing_ask: (util) => 0,
          sensing_answer: (util) => 0,
  
          //Data
          data_setvar: (util, name, val) => (_getVarObjectFromName(Cast.toString(name), util, '').value = val),
          data_getvar: (util, name) => _getVarObjectFromName(Cast.toString(name), '').value,
          data_makevar: (util, name) => 0,
          data_deletevar: (util, name) => 0,
          data_changevar: (util, name, val) => 0,
          data_showvar: (util, name) => 0,
          data_hidevar: (util, name) => 0,
          data_setlist: (util, name, list) => 0,
          data_getlist: (util, name) => 0,
          data_addtolist: (util, name, value, pos) => 0,
          data_removefromlist: (util, name, pos) => 0,
          data_clearlist: (util, name) => 0,
          data_replacelistitem: (util, name, val, pos) => 0,
          data_listitem: (util, name, pos) => 0,
          data_listitemnum: (util, name, item) => 0,
          data_makelist: (util, name) => 0,
          data_deletelist: (util, name) => 0,
          data_getvars: (util) => 0,
          data_getlists: (util) => 0,
          data_listlength: (util, name) => 0,
        };
      }
  
      initLuaCommands(util) {
        // Register all the commands for lua.
        util = this._constructFakeUtil(util);
        // @ts-expect-error I know it "could" be undefined but it wont be
        const ref = (fn, fnn) => ((...args) => (this.Functions[fn || fnn](util, ...args)));
        const bindHere = fn => fn.bind(this);
  
        // Setting up the target
        lua.global.set('sprite', {
          switch: (name) => runtime.setEditingTarget(runtime.getSpriteTargetByName(Cast.toString(name)) || runtime.getTargetForStage()),
          x: () => util.target.x,
          y: () => util.target.y,
          direction: () => util.target.direction,
          size: () => Math.round(util.target.size),
          trueSize: () => util.target.size,
          rotationStyle: () => util.target.rotationStyle,
          costume: (type) => Cast.toString(type) === 'name' ? util.target.getCostumes()[util.target.currentCostume].name : util.target.currentCostume + 1,
        });
  
        // Custom category: MathUtil
        lua.global.set('MathUtil', this.MathUtil);
  
        // Category: motion
        lua.global.set('motion', {
          move: ref('motion_moveSteps'),
          moveSteps: ref('motion_moveSteps'),
          turn: ref('motion_turn'),
          rotate: ref('motion_turn'),
          goTo: ref('motion_goTo'),
          setPos: ref('motion_goTo'),
          set: ref('motion_goTo'),
          XY: ref('motion_goTo'),
          changePos: ref('motion_changePos'),
          change: ref('motion_changePos'),
          transform: ref('motion_changePos'),
          setX: ref('motion_setX'),
          X: ref('motion_setX'),
          setY: ref('motion_setY'),
          Y: ref('motion_setY'),
          changeX: ref('motion_changeX'),
          changeY: ref('motion_changeY'),
          pointInDir: ref('motion_pointInDir'),
          point: ref('motion_pointInDir'),
          setRotationStyle: ref('motion_setRotationStyle'),
          RotStyle: ref('motion_setRotationStyle'),
          RotationStyle: ref('motion_setRotationStyle'),
          ifOnEdgeBounce: ref('motion_ifOnEdgeBounce'),
        });
        // These require async support:
        //   motion_glideTo
        //   motion_glideSecsToXY
        // Category: looks
        lua.global.set('looks', {
          say: ref('looks_say'),
          sayForSecs: ref('looks_sayForSecs'),
          think: ref('looks_think'),
          thinkForSecs: ref('looks_thinkForSecs'),
          show: ref('looks_show'),
          hide: ref('looks_hide'),
        });
        // Category: control
        lua.global.set('control', {
          wait: ref('control_wait'),
        });
        // Category: data
        lua.global.set('data', {
          set(varName, value, isList) {
            _getVarObjectFromName(Cast.toString(varName), util, Cast.toBoolean(isList) ? 'list' : '').value = value;
          },
          get(varName, isList) {
            isList = Cast.toBoolean(isList);
            const varObject = _getVarObjectFromName(Cast.toString(varName), isList ? 'list' : '');
            if (isList) {
              return Array.isArray(varObject.value) ? varObject.value : [varObject.value];
            } else {
              return varObject.value;
            }
          },
        });
        
  
        // Custom category: Cast
        lua.global.set('Cast', Cast);
  
        // Custom category: JS
        lua.global.set('JS', {
          JSON: {
            parse(...args) {
              // @ts-expect-error
              return JSON.parse(...args);
            },
            stringify(...args) {
              // @ts-expect-error
              return JSON.stringify(...args);
            },
          },
          Array: {
            new(length) {
              return new Array(Cast.toNumber(length) || 0);
            },
            from(value) {
              return Array.from(value);
            },
            fromIndexed(object) {
              if (Array.isArray(object)) return object;
              if (typeof object !== 'object') return [];
              return [];
            },
            toIndexed(array) {
              if (!Array.isArray(array)) return {};
              return Object.fromEntries(array.map((v, i) => [i, v]))
            },
            isArray(value) {
              return Array.isArray(value);
            },
          },
          Object: {
            create(prototype) {
              return Object.create(prototype || {});
            },
            assign(a, b) {
              return Object.assign(a, b);
            },
            new() {
              return Object.create(null);
            },
          },
        });
        // Custom functions
        lua.global.set('scratch', {
          fetch(url, opts, ...args) {
            opts = opts || {};
            return Scratch.fetch(Cast.toString(url), opts, ...args);
          },
          preserveUtil: (function () {
            // Util may become outdated, use this with causion!
            this.extension.preservedUtil = this.util;
          }).bind({util, extension: this}),
          wipeUtil: bindHere(function () {
            this.preservedUtil = null;
          }),
          primitiveRunBlock: bindHere(this.runBlock),
          runBlock: async (EXT, OPCODE, ARGS) => {
            const res = await this.runBlock(
              {
                EXT: Cast.toString(EXT),
                OPCODE: Cast.toString(OPCODE),
                ARGS: Cast.toString(ARGS),
              },
              this.preservedUtil || util,
              // we dont have access to the REAL blockJSON
              {},
            );
            if (this.DEBUG) console.trace(`runBlock_LUA | Ran ${EXT}_${OPCODE} and got:\n`, formatRes(res));
            return res;
          },
          // This is just a cool novelty to show its possible :D
          _scratchLoader: `data:application/javascript;base64,${btoa(`
              (async function(Scratch) {
                const SafeScratch = {
                  extensions: {
                    unsandboxed: true,
                    register(object) {
                      Scratch.extensions.register(object);
                    }
                  },
                  Cast: Object.assign({}, Object.fromEntries(Object.getOwnPropertyNames(Scratch.Cast).flatMap(v => [
                    'constructor', 'prototype', 'name', 'length'
                  ].includes(v) ? [] : [[
                    v, Scratch.Cast[v]
                  ]]))),
                  BlockType: Object.assign({}, Scratch.BlockType),
                  ArgumentType: Object.assign({}, Scratch.ArgumentType),
                };
                await window._luaExtensionLoader(Scratch);
              })(Scratch);
          `)}`,
          async _loadHack(url) {
            const gsm = vm.extensionManager.securityManager.getSandboxMode;
            vm.extensionManager.securityManager.getSandboxMode = () => Promise.resolve('unsandboxed');
            try {
              await vm.extensionManager.loadExtensionURL(Cast.toString(url));
            } finally {
              vm.extensionManager.securityManager.getSandboxMode = gsm;
              // @ts-ignore
              delete window._luaExtensionLoader;
            }
          },
          _loadObject(object) {
            // @ts-ignore
            window._luaExtensionLoader = object;
            // A extension to load the LUA extension
            return this._loadHack(this._scratchLoader);
          },
        });
      }
  
      // Some "secret" stuff for lua to use :3
      async secret_load({ url }) {
        return await vm.extensionManager.loadExtensionURL(Cast.toString(url));
      }
      secret_injectFunction({ namespace, args, js }) {
        lua.global.set(Cast.toString(namespace), (new Function('lua', ...args.split(' '), js).bind(window, lua)))
      }
  
      // Running, etc...
      disableEnableInit({INIT}) {
        this.DO_INIT = Cast.toBoolean(INIT);
      }
      async runLua({CODE}, util) {
        console.log("test")
        if (this.DO_INIT) this.initLuaCommands(util);
        console.log("test2")
        // Command blocks don't show a visual report
        try {
          console.log("test3")
          return await lua.doString(Cast.toString(CODE));
        } finally {
          // lua.global.close();
        }
      }
    }
  
    runtime.on('PROJECT_START', () => resetLua());
    runtime.on('PROJECT_STOP_ALL', () => resetLua());
    Scratch.extensions.register((runtime.ext_secret_dragonianlua = new extension()));
    // @ts-ignore Don't care!
  })(Scratch);
    // Bepis -J.R.T.
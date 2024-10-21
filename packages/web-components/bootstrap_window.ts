import { Env } from "@stencil/core";

export default function() {
    // web components metadata
    window['IC_UI_KIT_WEB_COMPONENTS_VERSION'] = Object.freeze(Env.IC_UI_KIT_WEB_COMPONENTS_VERSION);
    window['IC_UI_KIT_WEB_COMPONENTS_BUILD_DATE'] = Object.freeze(Env.IC_UI_KIT_WEB_COMPONENTS_BUILD_DATE);
    window['IC_UI_KIT_WEB_COMPONENTS_BUILD_HASH'] = Object.freeze(Env.IC_UI_KIT_WEB_COMPONENTS_BUILD_HASH);

    Object.defineProperty(window, "IC_UI_KIT_WEB_COMPONENTS_VERSION", { configurable: false, writable: false });
    Object.defineProperty(window, "IC_UI_KIT_WEB_COMPONENTS_BUILD_DATE", { configurable: false, writable: false });
    Object.defineProperty(window, "IC_UI_KIT_WEB_COMPONENTS_BUILD_HASH", { configurable: false, writable: false });

    // canary web components metadata 
    window['IC_UI_KIT_CANARY_WEB_COMPONENTS_VERSION'] = Object.freeze(Env.IC_UI_KIT_CANARY_WEB_COMPONENTS_VERSION);
    window['IC_UI_KIT_CANARY_WEB_COMPONENTS_BUILD_DATE'] = Object.freeze(Env.IC_UI_KIT_CANARY_WEB_COMPONENTS_BUILD_DATE);
    window['IC_UI_KIT_CANARY_WEB_COMPONENTS_BUILD_HASH'] = Object.freeze(Env.IC_UI_KIT_CANARY_WEB_COMPONENTS_BUILD_HASH);
    Object.defineProperty(window, "IC_UI_KIT_CANARY_WEB_COMPONENTS_VERSION", { configurable: false, writable: false });
    Object.defineProperty(window, "IC_UI_KIT_CANARY_WEB_COMPONENTS_BUILD_DATE", { configurable: false, writable: false });
    Object.defineProperty(window, "IC_UI_KIT_CANARY_WEB_COMPONENTS_BUILD_HASH", { configurable: false, writable: false });

    // fonts metadata
    window['IC_UI_KIT_FONTS_VERSION'] = Object.freeze(Env.IC_UI_KIT_FONTS_VERSION);
    window['IC_UI_KIT_FONTS_BUILD_DATE'] = Object.freeze(Env.IC_UI_KIT_FONTS_BUILD_DATE);
    window['IC_UI_KIT_FONTS_BUILD_HASH'] = Object.freeze(Env.IC_UI_KIT_FONTS_BUILD_HASH);
    Object.defineProperty(window, "IC_UI_KIT_FONTS_VERSION", { configurable: false, writable: false });
    Object.defineProperty(window, "IC_UI_KIT_FONTS_BUILD_DATE", { configurable: false, writable: false });
    Object.defineProperty(window, "IC_UI_KIT_FONTS_BUILD_HASH", { configurable: false, writable: false });

    // nextjs metadata
    window['IC_UI_KIT_NEXTJS_VERSION'] = Object.freeze(Env.IC_UI_KIT_NEXTJS_VERSION);
    window['IC_UI_KIT_NEXTJS_BUILD_DATE'] = Object.freeze(Env.IC_UI_KIT_NEXTJS_BUILD_DATE);
    window['IC_UI_KIT_NEXTJS_BUILD_HASH'] = Object.freeze(Env.IC_UI_KIT_NEXTJS_BUILD_HASH);
    Object.defineProperty(window, "IC_UI_KIT_NEXTJS_VERSION", { configurable: false, writable: false });
    Object.defineProperty(window, "IC_UI_KIT_NEXTJS_BUILD_DATE", { configurable: false, writable: false });
    Object.defineProperty(window, "IC_UI_KIT_NEXTJS_BUILD_HASH", { configurable: false, writable: false });

    // reactjs metadata
    window['IC_UI_KIT_REACT_VERSION'] = Object.freeze(Env.IC_UI_KIT_REACT_VERSION);
    window['IC_UI_KIT_REACT_BUILD_DATE'] = Object.freeze(Env.IC_UI_KIT_REACT_BUILD_DATE);
    window['IC_UI_KIT_REACT_BUILD_HASH'] = Object.freeze(Env.IC_UI_KIT_REACT_BUILD_HASH);
    Object.defineProperty(window, "IC_UI_KIT_REACT_VERSION", { configurable: false, writable: false });
    Object.defineProperty(window, "IC_UI_KIT_REACT_BUILD_DATE", { configurable: false, writable: false });
    Object.defineProperty(window, "IC_UI_KIT_REACT_BUILD_HASH", { configurable: false, writable: false });

    // canary react metadata
    window['IC_UI_KIT_CANARY_REACT_VERSION'] = Object.freeze(Env.IC_UI_KIT_CANARY_REACT_VERSION);
    window['IC_UI_KIT_CANARY_REACT_BUILD_DATE'] = Object.freeze(Env.IC_UI_KIT_CANARY_REACT_BUILD_DATE);
    window['IC_UI_KIT_CANARY_REACT_BUILD_HASH'] = Object.freeze(Env.IC_UI_KIT_CANARY_REACT_BUILD_HASH);
    Object.defineProperty(window, "IC_UI_KIT_CANARY_REACT_VERSION", { configurable: false, writable: false });
    Object.defineProperty(window, "IC_UI_KIT_CANARY_REACT_BUILD_DATE", { configurable: false, writable: false });
    Object.defineProperty(window, "IC_UI_KIT_CANARY_REACT_BUILD_HASH", { configurable: false, writable: false });
}
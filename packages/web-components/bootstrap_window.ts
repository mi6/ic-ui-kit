import { Env } from "@stencil/core";

export default function() {
    // web components metadata
    Object.defineProperty(window, "IC_UI_KIT_WEB_COMPONENTS_VERSION", { configurable: false, writable: false, value: Env.IC_UI_KIT_WEB_COMPONENTS_VERSION});
    Object.defineProperty(window, "IC_UI_KIT_WEB_COMPONENTS_BUILD_DATE", { configurable: false, writable: false, value: Env.IC_UI_KIT_WEB_COMPONENTS_BUILD_DATE });
    Object.defineProperty(window, "IC_UI_KIT_WEB_COMPONENTS_BUILD_HASH", { configurable: false, writable: false, value: Env.IC_UI_KIT_WEB_COMPONENTS_BUILD_HASH });

    // canary web components metadata
    Object.defineProperty(window, "IC_UI_KIT_CANARY_WEB_COMPONENTS_VERSION", { configurable: false, writable: false, value: Env.IC_UI_KIT_CANARY_WEB_COMPONENTS_VERSION });
    Object.defineProperty(window, "IC_UI_KIT_CANARY_WEB_COMPONENTS_BUILD_DATE", { configurable: false, writable: false, value: Env.IC_UI_KIT_CANARY_WEB_COMPONENTS_BUILD_DATE });
    Object.defineProperty(window, "IC_UI_KIT_CANARY_WEB_COMPONENTS_BUILD_HASH", { configurable: false, writable: false, value: Env.IC_UI_KIT_CANARY_WEB_COMPONENTS_BUILD_HASH });

    // fonts metadata
    Object.defineProperty(window, "IC_UI_KIT_FONTS_VERSION", { configurable: false, writable: false, value: Env.IC_UI_KIT_FONTS_VERSION });
    Object.defineProperty(window, "IC_UI_KIT_FONTS_BUILD_DATE", { configurable: false, writable: false, value: Env.IC_UI_KIT_FONTS_BUILD_DATE });
    Object.defineProperty(window, "IC_UI_KIT_FONTS_BUILD_HASH", { configurable: false, writable: false, value: Env.IC_UI_KIT_FONTS_BUILD_HASH });

    // nextjs metadata
    Object.defineProperty(window, "IC_UI_KIT_NEXTJS_VERSION", { configurable: false, writable: false, value: Env.IC_UI_KIT_NEXTJS_VERSION });
    Object.defineProperty(window, "IC_UI_KIT_NEXTJS_BUILD_DATE", { configurable: false, writable: false, value: Env.IC_UI_KIT_NEXTJS_BUILD_DATE });
    Object.defineProperty(window, "IC_UI_KIT_NEXTJS_BUILD_HASH", { configurable: false, writable: false, value: Env.IC_UI_KIT_NEXTJS_BUILD_HASH });

    // react metadata
    Object.defineProperty(window, "IC_UI_KIT_REACT_VERSION", { configurable: false, writable: false, value: Env.IC_UI_KIT_REACT_VERSION });
    Object.defineProperty(window, "IC_UI_KIT_REACT_BUILD_DATE", { configurable: false, writable: false, value: Env.IC_UI_KIT_REACT_BUILD_DATE });
    Object.defineProperty(window, "IC_UI_KIT_REACT_BUILD_HASH", { configurable: false, writable: false, value: Env.IC_UI_KIT_REACT_BUILD_HASH });

    // canary react metadata
    Object.defineProperty(window, "IC_UI_KIT_CANARY_REACT_VERSION", { configurable: false, writable: false, value: Env.IC_UI_KIT_CANARY_REACT_VERSION });
    Object.defineProperty(window, "IC_UI_KIT_CANARY_REACT_BUILD_DATE", { configurable: false, writable: false, value: Env.IC_UI_KIT_CANARY_REACT_BUILD_DATE });
    Object.defineProperty(window, "IC_UI_KIT_CANARY_REACT_BUILD_HASH", { configurable: false, writable: false, value: Env.IC_UI_KIT_CANARY_REACT_BUILD_HASH });
}
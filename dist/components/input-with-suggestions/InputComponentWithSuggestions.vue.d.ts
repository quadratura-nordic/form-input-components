declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    placeHolder?: string | undefined;
    errorMessage?: string | undefined;
    modelValue: unknown;
    suggestions: unknown[] | null;
    valueKey?: string | undefined;
    displayKey?: string | undefined;
}>, {
    placeHolder: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    placeHolder?: string | undefined;
    errorMessage?: string | undefined;
    modelValue: unknown;
    suggestions: unknown[] | null;
    valueKey?: string | undefined;
    displayKey?: string | undefined;
}>, {
    placeHolder: string;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    placeHolder: string;
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
//# sourceMappingURL=InputComponentWithSuggestions.vue.d.ts.map
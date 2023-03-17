declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    placeHolder?: string | undefined;
    modelValue: unknown;
    options: unknown[] | null;
    displayFunction?: ((option: unknown) => string) | undefined;
    valueFunction?: ((option: unknown) => string) | undefined;
}>, {
    placeHolder: string;
    displayFunction: (option: any) => any;
    valueFunction: (option: any) => any;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    placeHolder?: string | undefined;
    modelValue: unknown;
    options: unknown[] | null;
    displayFunction?: ((option: unknown) => string) | undefined;
    valueFunction?: ((option: unknown) => string) | undefined;
}>, {
    placeHolder: string;
    displayFunction: (option: any) => any;
    valueFunction: (option: any) => any;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    placeHolder: string;
    displayFunction: (option: unknown) => string;
    valueFunction: (option: unknown) => string;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

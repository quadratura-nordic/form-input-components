declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    placeHolder?: string | undefined;
    errorMessage?: string | undefined;
    modelValue?: string | string[] | undefined;
    shouldResize?: boolean | undefined;
    readOnly?: boolean | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    placeHolder?: string | undefined;
    errorMessage?: string | undefined;
    modelValue?: string | string[] | undefined;
    shouldResize?: boolean | undefined;
    readOnly?: boolean | undefined;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}>;
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

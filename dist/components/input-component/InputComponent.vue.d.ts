declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    inputType?: string | undefined;
    placeHolder?: string | undefined;
    errorMessage?: string | undefined;
    modelValue?: unknown;
    readOnly?: boolean | undefined;
    minInput?: number | undefined;
    maxInput?: number | undefined;
    hideClearButton?: boolean | undefined;
    options?: string[] | undefined;
}>, {
    inputType: string;
    readOnly: boolean;
}>, {
    focusInput: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "blur")[], "update:modelValue" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    inputType?: string | undefined;
    placeHolder?: string | undefined;
    errorMessage?: string | undefined;
    modelValue?: unknown;
    readOnly?: boolean | undefined;
    minInput?: number | undefined;
    maxInput?: number | undefined;
    hideClearButton?: boolean | undefined;
    options?: string[] | undefined;
}>, {
    inputType: string;
    readOnly: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
}, {
    inputType: string;
    readOnly: boolean;
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

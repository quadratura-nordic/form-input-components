import type { DateTime } from "./QDateTime";
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: DateTime | null | undefined;
    format?: string | undefined;
    errorMessage?: string | undefined;
    disableFutureDates?: boolean | undefined;
    disablePastDates?: boolean | undefined;
    monthDropdown?: boolean | undefined;
    yearDropdown?: boolean | undefined;
}>, {
    format: string;
    disableFutureDates: boolean;
    disablePastDates: boolean;
    monthDropdown: boolean;
    yearDropdown: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: DateTime | null | undefined;
    format?: string | undefined;
    errorMessage?: string | undefined;
    disableFutureDates?: boolean | undefined;
    disablePastDates?: boolean | undefined;
    monthDropdown?: boolean | undefined;
    yearDropdown?: boolean | undefined;
}>, {
    format: string;
    disableFutureDates: boolean;
    disablePastDates: boolean;
    monthDropdown: boolean;
    yearDropdown: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    format: string;
    disableFutureDates: boolean;
    disablePastDates: boolean;
    monthDropdown: boolean;
    yearDropdown: boolean;
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

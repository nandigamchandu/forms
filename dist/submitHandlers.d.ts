import { FormikActions, FormikErrors } from 'formik';
export declare function consoleSubmit<Values extends {}>(milliseconds?: number): (values: Values, formikArgs: FormikActions<Values>) => Promise<void>;
interface APISubmitArgs<Values, Result extends Values> {
    readonly url: string;
    readonly action?: 'post' | 'put';
    readonly noResetOnSubmit?: boolean;
    errorsTransformer?(errors: unknown): FormikErrors<Values>;
    responseTransformer?(response: unknown): Result;
    valuesTransformer?(values: Values): unknown;
}
declare type APISubmitResult<Values extends {}, Result extends Values = Values> = (values: Values, actions: FormikActions<Values>) => Promise<Result>;
export declare type ApiSubmitAction = 'post' | 'put';
export declare function apiSubmit<Values extends {}, Result extends Values = Values>({ url, action, noResetOnSubmit, valuesTransformer, responseTransformer, errorsTransformer, }: APISubmitArgs<Values, Result>): APISubmitResult<Values, Result>;
export declare function formikSubmit<Values, Result extends Values>(asyncFn: (values: Values) => Promise<Result>, resetOnSubmit?: boolean): APISubmitResult<Values, Result>;
export {};
//# sourceMappingURL=submitHandlers.d.ts.map
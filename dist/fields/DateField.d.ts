import { FieldConfig } from 'formik';
import React from 'react';
import { DateInputProps } from '../components';
export declare type DateFieldProps = {
    readonly onChange?: DateInputProps['onChange'];
} & Omit<DateInputProps, 'onChange'> & FieldConfig;
export declare const DateField: React.FC<DateFieldProps>;
//# sourceMappingURL=DateField.d.ts.map
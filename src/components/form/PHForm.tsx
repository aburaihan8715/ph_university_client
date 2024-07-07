/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type TFormConfig = {
  defaultValues?: Record<string, unknown>;
};

type TPHFromProps = {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
} & TFormConfig;

const PHForm = ({ onSubmit, children, defaultValues }: TPHFromProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig['defaultValues'] = defaultValues;
  }
  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;

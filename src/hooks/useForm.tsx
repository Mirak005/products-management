import React from 'react';

const useForm = <T,>(initialState: T, onSubmit: (data: T) => void) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return { formData, handleInputChange, handleSubmit };
};

export default useForm;

import { useState, ChangeEvent, FormEvent } from 'react';

const useForm = <T,>(initialState: T, onSubmit: (data: T) => void) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return { formData, setFormData, handleInputChange, handleSubmit };
};

export default useForm;

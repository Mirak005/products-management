import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddEditForm from '../../components/AddEditForm';

import { IProduct } from '../../types';

function CreateEdit() {
  const { productId } = useParams();
  return (
    <main>
      <AddEditForm />
    </main>
  );
}

export default CreateEdit;

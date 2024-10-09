/// <reference path="./crud.d.ts" />

// Importing types from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create an object of type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert the row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with a new age property
const updatedRow: RowElement = {
  ...row,
  age: 23
};

// Update the row using the newRowID
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using the newRowID
CRUD.deleteRow(newRowID);


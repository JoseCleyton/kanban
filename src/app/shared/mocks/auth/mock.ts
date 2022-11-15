import { of } from 'rxjs';

export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Njg1MzE5ODUsImV4cCI6MTY2ODUzNTU4NX0.tPZGjTNnHT1Sbs8_eNxCOMEzKY2fEGfVjopDeiRdyaQ';

export const authServiceMock = {
  authenticate: jest.fn(() => of(token))
};

import { of } from 'rxjs';

export const toastrServiceMock = {
  success: jest.fn(() => of()),
  error: jest.fn(() => of())
};

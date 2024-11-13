import { useState } from 'react';
import { createContainer } from 'react-tracked';

export type State = {
  firstName?: string;
  lastName?: string;
};

const useValue = () => useState<State>({});

export const {
  Provider,
  useTrackedState,
  useUpdate: useSetState,
} = createContainer(useValue);

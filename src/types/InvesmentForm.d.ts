import React from 'react';
import { YearlyDataArray } from './App';

interface UserInput {
  currentSavings: string;
  yearlyContribution: string;
  expectedReturn: string;
  duration: string;
}

interface InvensmentFormProps {
  setYearlyData: React.Dispatch<React.SetStateAction<YearlyDataArray>>;
  setUserInput: React.Dispatch<React.SetStateAction<UserInput>>;
  userInput: UserInput;
}

export { InvensmentFormProps, UserInput };

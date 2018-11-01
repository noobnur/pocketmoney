# Pocket Money App

Published on https://noobnur.github.io/pocketmoney/

## Back story

This is a personal project for me to
1. Quickly calculate how much of my salary should be budgeted for saving and expense.
2. Learn how to use REACT.js library for the calculations part
3. Learn how to use Firebase as my database

## Some useful resources I've learnt from
1. React
- Thinking in REACT - https://reactjs.org/docs/thinking-in-react.html
- REACT lifecycle (super useful for newbies): https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/the_life_cycle_recap.html
- Passing Data between REACT components: https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17
- Persistant REACT Data to Firebase: https://www.youtube.com/watch?v=QY7Ibl37_08


## things to improve on
- The code has A LOT of repetition: will clean that up soon.
- Design elements: it really looks bare now.

## New problem statement
The current calculator works fine but it's really bare (and not aligned lol).
Problem: Sister is living paycheck to paycheck even though she earns a lot.
Her expenses are high and she has a lot of debts. She doesn't have good savings.
What she cannot see is how much her debts really are and how little she is saving,
or maybe how much she can actually save if she does.

Calculate
1. How much time it will take for her to finish her debts (large ones like Uni) on the amount she is paying now
2. How much each payment is actually deducting after we consider the interest on it
3. Edit the Savings and Expenses components
 1. Allow users to change a title for the amounts
 2. Allow users to add more titles and calculation parts
 

## Components
1. BudgetApp
 1. SalaryInput
 2. SavingsInput
    1. PersonalGoal
    2. JointGoal
    3. Emergency
 3. ExpensesInput
    1. TuitionFeeLoan
    2. GeneralAssemblyLoan
    3. PhoneBill

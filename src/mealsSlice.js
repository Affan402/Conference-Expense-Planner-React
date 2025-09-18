import { createSlice } from "@reduxjs/toolkit";

export const mealsSLice = createSlice({
    name: "meals",
    initialState: [
        { name: 'Breakfast', cost: 50,eselected: false},
        { name: 'High Tea', cost: 25, selected: false},
        { name: 'Lunch', cost: 65, selected: false},
        { name: 'Dinner', cost: 70, selected: false},
    ],
    reducers: {
        toggleMealSelection: (state, action) => {
            state[action.payload].selected = !state[action.payload].selected;
        },
    },
});

export const { toggleMealSelection } = mealsSLice.actions;
export default mealsSLice.reducer;
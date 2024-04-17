import { createSlice } from "@reduxjs/toolkit";
import { increment } from "../actions";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count++;
        }
    }
});


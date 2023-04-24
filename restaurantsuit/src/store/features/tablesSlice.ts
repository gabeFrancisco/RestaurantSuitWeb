import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";
import { Table } from "../../models/interfaces/Table";

interface TableState {
  table: Table;
  tableList: Array<Table>;
}

const initialState: TableState = {
	table: {
		id: -1,
		number: -1,
		chairs: 0,
		isBusy: false,
		createdAt: '',
		updatedAt: ''
	},
	tableList: new Array<Table>()
};

export const TableSlice = createSlice({
	name: 'Tables',
	initialState,
	reducers: {}
})

export default TableSlice.reducer;
export const {} = TableSlice.actions;

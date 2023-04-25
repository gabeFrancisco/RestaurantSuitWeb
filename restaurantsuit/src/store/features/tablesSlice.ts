import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";
import { Table } from "../../models/interfaces/Table";

interface TableState {
  table: Table;
	hasOrderSheet: boolean,
  tableList: Array<Table>;
}

const initialState: TableState = {
  table: {
    id: -1,
    number: -1,
    chairs: 0,
    isBusy: false,
    createdAt: "",
    updatedAt: "",
  },
	hasOrderSheet: false,
  tableList: new Array<Table>(),
};

export const fetchAllTables = createAsyncThunk("tables/fetchAll", async () => {
  const response = await apiService.get("/tables").then((res) => res.data);
  return response;
});

export const addTable = createAsyncThunk(
  "tables/add",
  async (data: {}, thunkAPI) => {
    const response = await apiService.post("/tables", data).then((res) => {
      if (res.status === 200) {
        thunkAPI.dispatch(fetchAllTables());
        return res.data;
      }
    });
    return response;
  }
);

export const updateTable = createAsyncThunk(
  "tables/update",
  async (data: {}, thunkAPI) => {
    const response = await apiService.put("/tables", data).then((res) => {
      if (res.status === 200) {
        thunkAPI.dispatch(fetchAllTables());
      }
    });
    return response;
  }
);

export const removeTable = createAsyncThunk(
  "tables/remove",
  async (data: number, thunkAPI) => {
    const response = await apiService
      .delete(`/products/${data}`)
      .then((res) => {
        if (res.status === 200) {
          thunkAPI.dispatch(fetchAllTables());
        }
      });
    return response;
  }
);

export const setBusyState = createAsyncThunk(
  "tables/setBusyState",
  async (
    data: {
      tableId: number;
      state: boolean;
      confirm: boolean;
    },
    thunkAPI
  ) => {
    const response = await apiService
      .get(
        `/tables/isBusy?tableId=${data.tableId}&state=${data.state}&confirm=${data.confirm}`
      )
      .then((res) => {
        if (res.status === 200) {
					thunkAPI.dispatch(fetchAllTables());
					return res.data
        }
      });
    return response;
  }
);

export const TableSlice = createSlice({
  name: "Tables",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTables.fulfilled, (state, action) => {
      state.tableList = action.payload;
    });
		builder.addCase(setBusyState.fulfilled, (state, action) => {
			state.hasOrderSheet = action.payload
		})
  },
});

export default TableSlice.reducer;
export const {} = TableSlice.actions;

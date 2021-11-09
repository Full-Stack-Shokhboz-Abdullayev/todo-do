import { createStore } from "vuex";
import { $axios } from "../plugins/axios";
import { FilterOptions } from "../types/filter.enum";
import { ITask } from "@/utils/task.interface";
import { IResponsePlural, IResponseSingular } from "../utils/reponse.interface";

export default createStore({
  state: {
    tasks: [] as ITask[],
    selectedFilter: FilterOptions.ALL,
    searchInput: "",
  },
  mutations: {
    SET_FILTER(state, payload: FilterOptions) {
      state.selectedFilter = payload;
    },
    SET_SEARCH(state, payload: string) {
      state.searchInput = payload;
    },
    SET_TASKS(state, payload: ITask[]) {
      state.tasks = payload;
    },
    ADD_TASK(state, payload: ITask) {
      state.tasks.push(payload);
    },
    DELETE_TASK(state, payload: number | string) {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    UPDATE_TASK(state, payload: ITask) {
      state.tasks = state.tasks.map((task) =>
        task.id === payload.id ? payload : task
      );
    },
  },
  actions: {
    async GET_TASKS({ commit }) {
      const {
        data: { data: tasks },
      } = await $axios.get<IResponsePlural>("/tasks");
      commit("SET_TASKS", tasks);
    },
    async ADD_TASK({ commit }, payload) {
      const {
        data: { data: task },
      } = await $axios.post<IResponseSingular>("/tasks", payload);
      commit("ADD_TASK", task);
    },
    async DELETE_TASK({ commit }, payload) {
      await $axios.delete("/tasks/" + payload);
      commit("DELETE_TASK", payload);
    },
    async UPDATE_TASK({ commit }, payload) {
      const {
        data: { data: updatedTask },
      } = await $axios.patch<IResponseSingular>(
        "/tasks/" + payload.id,
        payload
      );
      commit("UPDATE_TASK", updatedTask);
    },
  },
  modules: {},
});

import axios from "axios";
import {
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_REQUEST_FAIL,
  ADD_PROJECT_SUCCESS,
  GET_PROJECT_FAIL,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
} from "../constants/projectConstants";

// get all projects data from api
export const getListProjects = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECT_REQUEST });
    const { data } = await axios.get("http://127.0.0.1:8000/api/");
    dispatch({
      type: GET_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROJECT_FAIL,
      payload: error.response && error.response.data.message,
    });
  }
};

// ADD Projects Data into REACT to REST API
export const addProject = (projectData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PROJECT_REQUEST });

    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/",
      projectData
    );

    dispatch({
      type: ADD_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PROJECT_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

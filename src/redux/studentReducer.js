const initialState = [
    { id: 0, name: "Chandu", age: "11", Gender:'Male' ,classNum:'5'},
    { id: 1, name: "Ganesh", age: "12", Gender:'Male' ,classNum:'5'},
    { id: 2, name: "Vijaya", age: "14", Gender:'FeMale' ,classNum:'7'},
    { id: 3, name: "Rabbani", age: "12", Gender:'Male' ,classNum:'5'},
    { id: 4, name: "Nikhil", age: "15", Gender:'Male' ,classNum:'6'},
    { id: 5, name: "Rachana", age: "16", Gender:'FeMale' ,classNum:'6'},
  ];
  
  export const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_STUDENT":
        state = [...state, action.payload];
        return state;
      case "DELETE_STUDENT":
        const studentFilter = state.filter((student) =>
          student.id === action.payload ? null : student
        );
        state = studentFilter;
        return state;
      case "UPDATE_STUDENT":
        const studentUpdate = state.filter((student) =>
          student.id === action.payload.id
            ? Object.assign(student, action.payload)
            : student
        );
        state = studentUpdate;
        return state;
      case "RESET_STUDENT":
        state = [{ name: null, age: null, Gender: null , classNum:null }];
        return state;
      default:
        return state;
    }
  };
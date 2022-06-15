export const courseReducer = (courses = [], action) => {
    switch (action.type) {
      case "GET_COURSES":
        return 
      case "ADD_COURSE":
        return [action.course.data, ...courses];
      default:
        return courses;
    }
  };
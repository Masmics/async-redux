const logger = store => next => action => {
  console.log('Before reducer', store.getState());
  next(action);
  console.log('After reducer', store.getState());
};

export default logger;

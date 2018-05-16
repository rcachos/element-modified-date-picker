import NewDataPicker from './src/picker/date-picker';

/* istanbul ignore next */
NewDataPicker.install = function(Vue) {
  Vue.component(NewDataPicker.name, NewDataPicker);
};

export default NewDataPicker;

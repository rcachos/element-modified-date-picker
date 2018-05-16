import { createTest, destroyVM } from '../util';
import NewDataPicker from 'packages/new-data-picker';

describe('NewDataPicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(NewDataPicker, true);
    expect(vm.$el).to.exist;
  });
});


import {mount} from '@vue/test-utils'
import List from '../components/List'

describe('Given a empty list of items', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(List, {
            propsData: {
                listItems: []
            }
        });
    });
    it('renders empty state', () => {
        expect(wrapper.text()).toContain('The list is empty :(');
    })
})
describe('Given a non empty list of items', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(List, {
            propsData: {
                listItems: [
                    {
                        id: 0,
                        title: 'post 1',
                        votes: 0
                    },
                    {
                        id: 1,
                        title: 'post 2',
                        votes: 0
                    },
                    {
                        id: 2,
                        title: 'post 3',
                        votes: 1
                    }
                ],
            }
        });
    });
    it('renders each item', () => {
        expect(wrapper.text()).toContain('post 1');
        expect(wrapper.text()).toContain('post 2');
        expect(wrapper.text()).toContain('post 3');
    })
    describe('when pressing sort button', () => {
        beforeEach(() => {
            wrapper.find("button#button_sort").trigger('click')
        });
        it('sort method is emitted', () => {
            expect(wrapper.emitted("sort-list")).toBeTruthy();
        })
    });
})
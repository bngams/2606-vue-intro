import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue'
import { beforeEach, describe, expect, it } from 'vitest';

describe('HelloWorld.vue', () => {
    const defaultPropMsg = 'Testing msg';
    let wrapper = null; 

    beforeEach(() => {
        wrapper = mount(HelloWorld, {
            props: { msg: defaultPropMsg } 
        });
    })

    it('should handle the msg prop correctly', () => {
        // wanted result
        const wantedResult = defaultPropMsg.toUpperCase();
        // check component msg dipslay
        const msgFromComponentController = wrapper.getMethods().getMsg();
        // assertion
        expect(msgFromComponentController).toBe(wantedResult);
    })
    
    it('should display the msg prop in h1 title', () => {
        // wanted result
        const wantedResult = defaultPropMsg;
        // check component msg dipslay
        const h1FromComponentTemplate = wrapper.find('h1')?.text();
        // assertion
        expect(h1FromComponentTemplate).toContain(wantedResult);
    })

    it('increments counter', async () => {
        const button = wrapper.find('button'); // TODO: we can use a data testid attribute
        expect(button).toBeDefined();

        await button.trigger('click');
        
        expect(wrapper.vm.count).toBe(1);
        expect(button.text()).toBe('count is 1');
    })
});
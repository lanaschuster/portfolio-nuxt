import { mount } from '@vue/test-utils'
import Button from '@/components/atoms/Button/Button.vue'

describe('Button', () => {
  let wrapper
  
  beforeAll(() => {
    wrapper = mount(Button, {
      propsData: {
        text: 'Foo',
        iconClass: 'uil-message'
      }
    })
  })
  
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('has button class', () => {
    expect(wrapper.classes()).toContain('button')
  })

  it('renders the text', () => {
    expect(wrapper.find('a').text()).toBe('Foo')
  })

  it('renders the icon with the provided class', () => {
    expect(wrapper.find('a i').classes()).toContain('uil-message')
  })

  it('emits an event on click', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
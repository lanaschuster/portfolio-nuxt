import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import NavItem from '@/components/atoms/NavItem/NavItem.vue'

describe('NavItem', () => {
  let wrapper
  
  beforeAll(() => {
    wrapper = shallowMount(NavItem, {
      propsData: {
        text: 'Foo',
        iconClass: 'uil-message',
        to: '#foo',
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  it('has nav__item class', () => {
    expect(wrapper.classes()).toContain('nav__item')
  })

  it('renders the text', () => {
    expect(wrapper.findComponent(RouterLinkStub).text()).toBe('Foo')
  })

  it('renders the icon with the provided class', () => {
    expect(wrapper.find('i').classes()).toContain('uil-message')
  })

  it('emits an event on click', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})

import { mount } from '@vue/test-utils'
import DownloadButton from '@/components/atoms/DownloadButton/DownloadButton.vue'

describe('DownloadButton', () => {
  let wrapper
  
  beforeAll(() => {
    wrapper = mount(DownloadButton, {
      propsData: {
        text: 'Foo',
        iconClass: 'uil-message',
        target: '_blank',
        href: '/files/curriculo_Lana_2021.pdf',
        download: 'cv.pdf'
      }
    })
  })

  it('has button class', () => {
    expect(wrapper.classes()).toContain('button')
  })

  it('renders the text', () => {
    expect(wrapper.text()).toBe('Foo')
  })

  it('renders the icon with the provided class', () => {
    expect(wrapper.find('a i').classes()).toContain('uil-message')
  })

  it('renders the button with the provided target', () => {
    expect(wrapper.attributes('target')).toBe('_blank')
  })

  it('renders the button with the provided href', () => {
    expect(wrapper.attributes('href')).toBe('/files/curriculo_Lana_2021.pdf')
  })

  it('renders the button with the provided download attribute', () => {
    expect(wrapper.attributes('download')).toBe('cv.pdf')
  })

})
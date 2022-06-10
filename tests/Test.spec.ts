/*
 * @Description:
 * @version:
 * @Author: xiaowen
 * @Date: 2022-06-10 09:48:05
 */
import { mount } from '@vue/test-utils'
import Home from '../src/views/home/index.vue'

test('Home.vue', async () => {
  //   Wrapper：
  //     Wrapper 是一个包括了一个挂载组件或 vnode，以及测试该组件或 vnode 的方法。
  // Wrapper.vm：
  //     这是该 Vue 实例。你可以通过 wrapper.vm 访问一个实例所有的方法和属性。
  // Wrapper.classes:
  //     返回是否拥有该class的dom或者类名数组。
  // Wrapper.find：
  //     返回第一个满足条件的dom。
  // Wrapper.findAll：
  //     返回所有满足条件的dom。
  // Wrapper.html：
  //     返回html字符串。
  // Wrapper.text：
  //     返回内容字符串。
  // Wrapper.setData：
  //     设置该组件的初始data数据。
  // Wrapper.setProps：
  //     设置该组件的初始props数据。
  // Wrapper.trigger：
  //     用来触发事件。

  const wrapper = mount(Home)
  expect(wrapper.html()).toContain('Unit home')
  expect(wrapper.html()).toContain('count is: 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('count is: 1')
})

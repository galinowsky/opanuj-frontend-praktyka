// @vitest-environment jsdom

import { describe, test, expect } from 'vitest';
import { renderItems } from './renderer';

const users: User[] = [
  { id: 1, name: 'John', age: 30, role: 'user' },
  { id: 2, name: 'Jane', age: 25, role: 'admin' },
  { id: 3, name: 'Jack', age: 40, role: 'user' },
];

describe('User renderer', () => {
  test('should render all users if admin is rendering the list', () => {
    localStorage.setItem('userRole', 'admin'); // setting the user role to admin

    const container = document.createElement('div'); // creating a container
    renderItems(container, users); // using renderItems to render
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(3);
  });

  test('should render only regular users if non-admin is rendering the list', () => {
    localStorage.setItem('userRole', 'user');

    const container = document.createElement('div');
    renderItems(container, users);
    expect(Array.from(container.querySelectorAll('li'))).toHaveLength(2);
    //test if content of the items is proper
    

  });

  test('should render proper content for given data with admin permissions', ()=> {
    localStorage.setItem('userRole', 'admin'); // setting the user role to admin

    const container = document.createElement('div')
    renderItems(container,users)

    const expectedContent = [
      ' Name: John, Age: 30',
      '(Admin) Name: Jane, Age: 25',
      ' Name: Jack, Age: 40',
    ];

    renderItems(container, users);
expect(Array.from(container.querySelectorAll('li')).map((li) => li.textContent)).toEqual(expectedContent);

  })

  test('should render proper content for given data with user permissions', ()=> {
    localStorage.setItem('userRole', 'user'); // setting the user role to admin

    const container = document.createElement('div')
    renderItems(container,users)

    const expectedContent = [
      ' Name: John, Age: 30',
      ' Name: Jack, Age: 40',
    ];

    renderItems(container, users);
expect(Array.from(container.querySelectorAll('li')).map((li) => li.textContent)).toEqual(expectedContent);
  
    })
  
});

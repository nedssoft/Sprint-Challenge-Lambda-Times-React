# Question 1. 
### What are PropTypes used for? Please describe why it's important to type check our data in JavaScript

#Answer 1.
- In React, props refer to data passes to a component. PropTypes therefore refer to the type of data passed to a component. PropTypes can be any valid Javascript data type such as Number, String, Object, Array, Boolean etc.
  
- It is important to check our data to ensure that the right data required for the component to function correctly is passed to it at all times.
  
# Question 2.
### Describe a life-cycle event in React?

#Answer 2.
- A Component life-cycle is the activities that undergo in a component from it's creation to it's destruction. A life-cycle event therefore is one of the methods that is invoked during the component's life-cycle. A life-cycle event determines what happens at every stage of the component's life-cycle.
  
# Question 3
### Explain the details of a Higher Order Component?

# Answer 3.
- A Higher Order Component (HOC) is a special type of component that acts as a wrapper over another component and affects the behaviour of the wrapped component. An HOC affects the behaviour of the wrapped component in that a new component is returned from the wrapped component.
- An HOC essential is a concept that facilitates component's logic re-use. It can be likened to the parent Object in which other child Objects inherits from in Object-Oriented Programming.

# Question 4.
### What are three different ways to style components in React? Explain some of the benefits of each.

# Answer 4.
- The there different ways to style components in React Are:
  - 1. External CSS/ CSS modules
    - The benefits include:
      - It ensures that the styles are separated from the component's logic.
      - It also ensures that styles are scoped to the component it belongs to.
      - It reduces the risk of messing with global styles
  
  - 2. Inline CSS
    - The benefits include:
      - Since the styles are written in JavaScript Object format, it makes it easier to dynamically add style to a component via props.
  
  - 3. Styled Components
      - The benefits include:
        - It allows for styles to be written in JavaScript.
        - It prevent problems of global styles as each style is scoped to it's component.
        - It allows for styles to be easily re-used across components

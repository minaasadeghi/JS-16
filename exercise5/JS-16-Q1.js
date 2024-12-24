// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================
// it can sometimes lead to undesirable behavior.
//  This is particularly true when you have event listeners on multiple levels
//  of the DOM hierarchy.

// to prevent event bubbling, we can use the stopPropagation() 
// or stopImmediatePropagation()

// Event bubbling occurs when an event on a child element triggers events on parent elements. To prevent this:


// 1.event.stopPropagation(): Stops the event from reaching parent elements.
// 2.event.stopImmediatePropagation(): Stops the event and prevents other listeners on the same element from firing.

// These methods help avoid unwanted behavior caused by event bubbling.
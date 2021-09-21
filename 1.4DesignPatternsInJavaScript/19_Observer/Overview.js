
// * Observer *

// Motivation:
// - We need to be informed when certain things happen
//      - Object's property changes
//      - Object does something
//      - Some external event occurs
// - We want to listen to events and be notified when they occur
//      - Notifications should include useful data
// - Want to unsubscribe from events if we're no longer interested


// Observer: An observer is an object that wishes to be informated about events happening in the system.
// The entity generating the events is an observable.
// - Observer is an intrusive approach: an observable must provide an event to subscribe to
// - Subscription and unsubscription handled with addition/removal of items in a list
// - Property notifications are easy; dependent property notifications are tricky

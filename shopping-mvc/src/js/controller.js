/**
 * Controller for the shopping list application.
 */
class Controller {
  constructor() {
    console.log('Controller running!');
    /** @private {!Model} Application model */
    this.model_ = new Model(this);
  }

  /**
   * Add an item to the shopping list.
   *
   * @param name {string} Name of the item to add, may not be empty
   * @param quantity {string} The quantity if the item to add, may be empty
   */
  addItem(name, quantity) {
    const item = new ShoppingListItem(name, quantity);
    this.model_.append(item);
  }

  /**
   * Delete the i' the item from the list.
   *
   * @pram i {number}
   *
   */
  deleteItem(i) {
    this.model_.delete(i);
  }

  /**
   * Clear the shopping list.
   */
  clearList() {
    this.model_.clear();
  }
}
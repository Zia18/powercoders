/**
 * Shopping list model.
 *
 * The list is modelled as an array.
 */
class Model {
  /** @param controller {!Controller} App controller*/
  constructor(controller) {
    console.log('Model initialised');

    /** @private {!ShoppingListItem[]} Item in the list */
    this.item_ = [];

    /** @private {!View} View for this model. */
    this.view_ = new View(this, controller);
  }
}
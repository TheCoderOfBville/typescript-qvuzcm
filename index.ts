/**
 * Can an order be filled?
 * 
 * For a given part number, we have a quantity on hand.
 * There are some orders already pending for the part number.
 * These orders are not filled, but will be soon.
 * We can only accept a request for a quantity of parts that
 * are on hand and not pending.
 * 
 * Test parameter values for invalid values.
 * We don't have negative on hand and pending quantities.
 * We don't have pending quantities greater than what is on hand.
 * We don't request less than 1 part.
 * We have and fill orders with integer quantities.
 * 
 * For invalid scenarios, throw an error indicating the error.
 * 
 * @param onHand The number of parts on hand for a given part number.
 * @param pending The number of parts to be picked for the given part number.
 * @param requested The number of parts being requested for a part order. 
 */

function canFill(onHand:number, pending:number, requested:number):boolean {
  return false;
}

/**
 * The test method evaluates the canFill method's
 * exceptions and return values to see if the expected
 * results are achieved.
 */
function test(onHand:number, pending:number, requested:number, expected:boolean | string):void {
  try {
    const result = canFill(onHand, pending, requested);
    console.log(`canFill succeeded? ${result===expected}`);
  } catch (error) {
    console.log(`canFill erred correctly? ${error.message === expected}`);
  }
}

// Create more tests....
test(10, 5, 5, true);

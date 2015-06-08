import {selection} from "d3-selection";
import selection_transition from "./src/selection_transition";
import transition from "./src/transition";

selection.prototype.transition = selection_transition;

export {
  transition
};

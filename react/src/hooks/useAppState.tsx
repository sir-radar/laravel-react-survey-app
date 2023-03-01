import { useContext } from "react";
import { StateContext } from "../providers/ContextProvider";

export default function useAppState() {
  return useContext(StateContext);
}

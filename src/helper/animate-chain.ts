import { sleep } from "./client-utils";

type ChainParams = {
  name?: string;
  func: () => void;
  duration: number;
  delay?: number;
};

const chain = async (action: ChainParams) => {
  if (action.delay) {
    await sleep(action.delay);
  }
//   action.name && console.log(`running ${action.name}`);
  action.func();
  await sleep(action.duration);
};

export const chainAction = async (actions: ChainParams[]) => {
  for (let action of actions) {
    await chain(action);
  }
};

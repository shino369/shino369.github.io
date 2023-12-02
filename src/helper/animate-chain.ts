import { sleep } from "./client-utils";

type ChainParams = {
  name?: string;
  func: () => void;
  duration: number;
  delay?: number;
};

type RegisteredChainParams = ChainParams & { uuid: string };

export type RegisterMap = Map<string, RegisteredChainParams>;

const chain = async (actioMap: RegisterMap, action: RegisteredChainParams) => {
  if (!actioMap.has(action.uuid)) {
    // console.log('map cleared!')
    return;
  }
  if (action.delay) {
    await sleep(action.delay);
  }
  // action.name && console.log(`running ${action.name}`);
  action.func();
  await sleep(action.duration);
};

export const chainAction = async (actioMap: RegisterMap) => {
  const actions = Array.from(actioMap.values());
  // console.log(actions);
  for (let action of actions) {
    await chain(actioMap, action);
  }
};

export const initChain = (actions: ChainParams[]): RegisterMap => {
  const actioMap = new Map<string, RegisteredChainParams>();
  for (let action of actions) {
    const uuid = Math.random().toString(16).slice(2);
    actioMap.set(uuid, { ...action, uuid: uuid });
  }

  chainAction(actioMap);
  return actioMap;
};

import { AsyncEventEmitter } from "@vladfrangu/async_event_emitter";

export enum Events {
  SomeEvent = "someEvent",
}

export interface EventMap {
  [Events.SomeEvent]: [woah: number];
}

export class Something extends AsyncEventEmitter<EventMap> {
  public someMethod() {
    this.emit(Events.SomeEvent, "this is not a number");
  }
}

const instance = new Something();
// even this compiles?!?!?!
instance.on(Events.SomeEvent, (woah: string) => {});

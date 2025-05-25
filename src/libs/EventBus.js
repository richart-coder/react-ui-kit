class EventBus {
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    this.events.get(eventName).push(callback);

    return () => {
      const callbacks = this.events.get(eventName);
      if (callbacks) {
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      }
    };
  }

  publish(eventName, data) {
    const callbacks = this.events.get(eventName);
    if (callbacks) {
      callbacks.forEach((callback) => {
        try {
          callback(data);
        } catch (error) {
          console.error(`事件 ${eventName} 的回調函數發生錯誤:`, error);
        }
      });
    }
  }

  getEventNames() {
    return Array.from(this.events.keys());
  }
}

export default EventBus;

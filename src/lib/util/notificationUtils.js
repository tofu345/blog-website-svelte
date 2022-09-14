import notifications from "$lib/stores/notifications";

// Send Notification
export default (message, timeout) => {
  let newId, currentNotifications;
  const unsubscribe = notifications.subscribe(value => currentNotifications = value)

  if (currentNotifications && currentNotifications.length > 0) {
    // Get highest id
    const ids = currentNotifications.map((el) => el.id);
    newId = Math.max.apply(null, ids) + 1;

    notifications.update((currentData) => {
      return [...currentData, { message, id: newId }];
    });
  } else {
    newId = 1;
    notifications.set([{ message, id: newId }]);
  }

  if (timeout) {
    try {
      setTimeout(() => {
        notifications.update((currentData) => {
          return currentData.filter((el) => el.id != newId);
        });
      }, timeout);
    } catch {}
  }

  unsubscribe();
};

import moment from "moment";

export const formatTransaction = (transaction: Array<any>): Array<any> => {
  let array: any = [];
  const sorted = transaction?.map((element) => {
    const parsed = moment(
      `${element.transactionYear} ${element.transactionMonth}, ${element.transactionYear}`,
      "DD MMM, YYYY"
    );
    // const dates = ``
    // const parsed = moment(element.date, "DD-MMM-YYYY");
    return {
      date: parsed.format("MMM DD YYYY"),
      dayOfMonth: parsed.format("DD"),
      item: {
        id: element.transactionId,
        title: element.historyTitle,
        type: "bill",
        text: element.historyMessage,
        amount: element.amount,
        status: element.successful === true ? "success" : "failed",
      },
    };
  });
  for (let element of sorted) {
    const date = element.date;
    const items = sorted
      .map((element) => {
        if (element.date === date) {
          return element.item;
        }
      })
      .filter((element) => element !== undefined);

    const hasBeenAdded = array.some((element: any) => element?.date === date);
    if (!hasBeenAdded) {
      array.push({
        date,
        items,
      });
    }
  }
  return array;
};
export const formatNotification = (notifications: Array<any>) => {
  let array: any = [];
  const sorted = notifications.map((element) => {
    const parsed = moment(element.createdAt);
    return {
      date: parsed.format("MMM DD YYYY"),
      dayOfMonth: parsed.format("DD"),
      item: {
        id: element.id,
        title: element.title,
        type: "notification",
        description: element.description,
        createdAt: element.createdAt,
        status: "success", // Assuming all notifications are successful
      },
    };
  });

  sorted.forEach((element) => {
    const date = element.date;
    const items = sorted
      .filter((item) => item.date === date)
      .map((item) => item.item);

    if (!array.some((item: any) => item.date === date)) {
      array.push({
        date,
        items,
      });
    }
  });

  return array;
};

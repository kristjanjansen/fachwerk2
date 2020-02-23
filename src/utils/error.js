const log = error => {
  const parsedError = String(error)
    .split("\n")[0]
    .split(":")[1]
    .trim();
  console.log(
    `%cDocument error:%c ${parsedError}`,
    "color: orange",
    "color: inherit"
  );
};

export const onError = error => log(error);

export const onWarning = error => log(error);

export const onCompilerError = error => log(error);

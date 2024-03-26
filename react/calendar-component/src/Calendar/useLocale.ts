import allLocales from "./locale";
export const useLocale = (selectedLocale: string) => {
  const allLocalesKeys = Object.keys(allLocales);
  if (!allLocalesKeys.includes(selectedLocale)) {
    allLocalesKeys.forEach((item) => {
      if (item.startsWith(selectedLocale)) {
        selectedLocale = item;
      }
    });
  }
  const currentLocale = allLocales[selectedLocale] ?? allLocales["zh-CN"];
  return { currentLocale };
};

import { boot } from 'quasar/wrappers';
import { Dark } from 'quasar';
export default boot(({ app }) => {
  app.mixin({
    methods: {
      seperateNumber(number: number): string {
        return new Intl.NumberFormat().format(number);
      },
      subtractMinute(numOfMinutes: number): object {
        const date: Date = new Date();
        date.setMinutes(date.getMinutes() - numOfMinutes);
        return date;
      },
      getLocaleDate(date: object): string {
        return date.toLocaleString();
      },
      isDarkMode(): boolean {
        return Dark.isActive;
      },
    },
  });
});

import {TableBuilder} from './table-builder';
export function renderDailyShowGuestTable() {
  let url =
    'https://cdn.rawgit.com/fivethirtyeight/data/master/daily-show-guests/daily_show_guests.csv';

  let table = new TableBuilder(url);
}

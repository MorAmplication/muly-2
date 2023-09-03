import { MyDb as TMyDb } from "../api/myDb/MyDb";

export const MYDB_TITLE_FIELD = "name";

export const MyDbTitle = (record: TMyDb): string => {
  return record.name || String(record.id);
};

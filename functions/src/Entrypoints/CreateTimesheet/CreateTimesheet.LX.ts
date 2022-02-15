import axios from "axios";
import { TimeSheet_ } from "./main.spec";

/* <-- Import End --> */

const CONFIG = {
    url: "https://rest.tsheets.com/api/v1/timesheets",
    headers: {
        Authorization: "Bearer S.15__5463f8eadbf6b8749cb79719b967f54da30d402a",
    },
};

/* <-- Variable Definition End --> */

export function createTimesheetsInQuickbooks(input: TimeSheet_) {
    const { headers, url } = CONFIG;
    return axios.post(url, input, { headers });
}

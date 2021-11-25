import axios from "axios";

export const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyDt01Obpaja8FA4nuXfoN1CfkApyOX63nE",
    },
});

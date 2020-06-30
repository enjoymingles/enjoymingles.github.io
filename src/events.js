import moment from "moment";

const events = [
    {
        start: moment("20200701 22:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        end: moment("20200702 00:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        title: "하뚜 시그널 막방 빠띠",
        description: "하뚜 시그널 막방 보쟝",
        color: "#ff8484"
    },
    {
        start: moment("20200703 19:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        end: moment("20200704 00:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        title: "비어퐁&보드게임 빠띠",
        description: "불금 야외 비어퐁과 보드게임 빠띠 놀쟝",
        color: "#3CAEA3"
    },
    {
        start: moment("20200705 11:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        end: moment("20200705 14:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        title: "flutter 스터디",
        description: "flutter 스터디"
    },
]

export default events;

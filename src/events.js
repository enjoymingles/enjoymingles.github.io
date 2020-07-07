import moment from "moment";

const events = [
    {
        start: moment("20200702 12:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        end: moment("20200702 18:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        title: "김동은 공부공부",
        description: "고대 컴퓨터 김동은 공부공부",
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
    {
        start: moment("20200707 18:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        end: moment("20200707 24:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        title: "탐 타미",
        description: "탐 타미",
        color: "#0066CC"
    },
    {
        start: moment("20200708 19:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        end: moment("20200708 24:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        title: "수빈",
        description: "나윤 친구 수빈이가 쓰고싶다고 함",
        color: "#3CAEA3"
    },
    {
        start: moment("20200709 18:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        end: moment("20200709 24:00:00", "YYYYMMDD hh:mm:ss").toDate(),
        title: "탐 타미",
        description: "탐 타미",
        color: "#0066CC"
    },
]

export default events;

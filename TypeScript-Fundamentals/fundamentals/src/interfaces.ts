interface IMeetup {
    title: string;
    city: string;
}

function printMeetupTitle(meetup: IMeetup) {
    return meetup.title;
}

const nodeJsMeetup = { title: "Manchester Node Workshop", city: "Manchester", topic: "Node.js" };
const javascriptMeetup = { title: "JavaScript North West", city: "Manchester"};

printMeetupTitle(nodeJsMeetup);
printMeetupTitle(javascriptMeetup);
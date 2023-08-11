import React from "react";

import EventCheckInForm from "./EventCheckInForm";

export default function EventsForm() {
    const events = [{
        id: "meettheteam",
        name: "Meet the Team",
        timelocation: "7:30 - 8:30pm | September 13th | Room 1-190",
        description: "Meet current members of MCG and learn more about MCG's recruitment process during our first recruitment event of the semester."
    },
    {
        id: "deipanel",
        name: "DEI Panel",
        timelocation: "7:30 - 8:30pm | September 14th | Room 1-190",
        description: " Talk to current women and BIPOC within MCG. Hear about their experiences and how MCG is trying ot create a more inclusive environment."
    },
    {
        id: "resumereview",
        name: "Resume Review",
        timelocation: " 7-9pm | September 15th | Room 6-120",
        description: "Work on your resume with the help of MCG consultants who have landed offeres at top consulting, finance, and tech companies."
    },
    {
        id: "cheesecakesocial",
        name: "Cheesecake Social",
        timelocation: "7-9pm | September 15th | By Invitation Only",
        description: "Join us for a night of cheesecake and learn more about MCG and the work our members do in a casual setting."
    },
    {
        id: "caseworkshop",
        name: "Case Workshop",
        timelocation: "7-9pm | September 15th | By Invitation Only",
        description: "Learn more about consulting and prepare for MCG interviews by working through a mock case with MCG consultants."
    }]
    return (
        <div className="flex flex-wrap gap-8 px-10 justify-center">
            {events.map((event) => (
                <EventCheckInForm key={event.id} event={event} />))}
        </div>
    );
}

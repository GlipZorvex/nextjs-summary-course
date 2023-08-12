import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  function handleAddMeetup(meetup) {

  }

  return <NewMeetupForm onAddMeetup={handleAddMeetup}/>
}
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from "next/router";

export default function NewMeetupPage() {
  const router = useRouter();

  async function handleAddMeetup(meetup) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-type": "application/json",
      }
    });

    const data = await response.json();
    console.log(`data: ${data}`);

    router.replace("/");
  }
  return <NewMeetupForm onAddMeetup={handleAddMeetup}/>
}
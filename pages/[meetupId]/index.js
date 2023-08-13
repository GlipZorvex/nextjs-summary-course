import MeetupDetails from "../../components/meetups/MeetupDetails";

export default function MeetupDetailsPage(props) {
  return <MeetupDetails {...props.meetup}/>
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      }
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetup: {
        id: meetupId,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sukiennice_and_Main_Market_Square_Krakow_Poland.JPG/1920px-Sukiennice_and_Main_Market_Square_Krakow_Poland.JPG",
        title: "A First Meetup",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
      }
    }
  }
}
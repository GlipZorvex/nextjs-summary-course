import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sukiennice_and_Main_Market_Square_Krakow_Poland.JPG/1920px-Sukiennice_and_Main_Market_Square_Krakow_Poland.JPG",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://www.european-games.org/wp-content/uploads/2022/12/Krakow-Mainsquare-st-mary-s-basilica-in-main-square-of-krakow-wawel-castle-historic-center-city-with-ancient-architecture.jpeg",
    address: "Some address 10, 54321 Some City",
    description: "This is a Second meetup!",
  },
]


export default function HomePage(props) {
  return <MeetupList meetups={props.meetups}/>
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   }
// }

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  }
}

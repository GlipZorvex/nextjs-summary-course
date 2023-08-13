import MeetupDetails from "../../components/meetups/MeetupDetails";
import {MongoClient, ObjectId} from "mongodb";
import Head from "next/head";

export default function MeetupDetailsPage(props) {
  const meetup = props.meetup;
  return <>
    <Head>
      <title>{meetup.title}</title>
      <meta name="description" content={meetup.description}/>
    </Head>
    <MeetupDetails {...meetup}/>
  </>
}

export async function getStaticPaths() {
  const client = await MongoClient.connect("mongodb+srv://developer:developer@cluster0.hjqnpqa.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
  await client.close();
  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: {meetupId: meetup._id.toString(),}
    }))
    // paths: [
    //   {
    //     params: {
    //       meetupId: 'm1',
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: 'm2',
    //     },
    //   }
    // ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect("mongodb+srv://developer:developer@cluster0.hjqnpqa.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)});
  await client.close();
  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      },
      // meetup: {
      //   id: meetupId,
      //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sukiennice_and_Main_Market_Square_Krakow_Poland.JPG/1920px-Sukiennice_and_Main_Market_Square_Krakow_Poland.JPG",
      //   title: "A First Meetup",
      //   address: "Some address 5, 12345 Some City",
      //   description: "This is a first meetup!",
      // }
    }
  }
}
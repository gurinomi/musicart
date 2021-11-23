import axios from "axios";

export default function Home({ messageData }) {
  const { message } = messageData;

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  const messageData = await axios
    .get("http://api:3000/api/v1/test")
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return {
    props: { messageData },
  };
};

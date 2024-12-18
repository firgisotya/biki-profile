import Image from "next/image";

export default function Product(props) {
  console.log(props.src);
  return (
    <div>
      <div className="imageContainer">
        <Image src={"/images/Apple.webp"} alt="hello" width={500} height={100} />
      </div>
      <div className="name">
        <h1>{props.name}</h1>
      </div>
      <div className="country">
        <p>{props.country}</p>
      </div>
    </div>
  );
}

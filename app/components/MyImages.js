import Image from "next/image";

export default function MyImage(props) {

  const { src, width, className } = props;


  return (
    <div className={className}>
      {/* this is conditional rendering. If width is given then this will run */}
      {width && <Image
        src={src}
        width={width}
        height={"100%"}
        alt="backgruond"
        quality={100}

/>}
      <Image
        src={src}
        fill
        alt="backgruond"
        quality={100}
        className={className}
      />
      
    </div>
  );
}

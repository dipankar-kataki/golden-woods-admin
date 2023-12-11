interface CardProps {
  id: number;
  image: string;
  title: string;
  value: number;
}

const Card = ({ image, title, value }: CardProps) => {
  return (
    <article className="flex items-center bg-white px-8 rounded-xl shadow w-fit-content text-black">
      <img src={image} alt="icon image" className="w-24 h-24" />
      <div className="px-12 py-12">
        <h2 className="font-semibold text-[16px] text-[#808191] text-gray mb-4">
          {title}
        </h2>
        <p className="font-semibold text-[22px]">{value}</p>
      </div>
    </article>
  );
};

export default Card;

import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";

export type Props = {
  image: string;
  title: string;
  description: string;
  slug: string;
};

function ComponentCard({ image, title, description, slug }: Props) {
  return (
    <Link href={`/component/${slug}`} className="group">
      <Card className="aspect-video overflow-hidden bg-[repeating-linear-gradient(45deg,#25252512_0px_1px,transparent_1px_10px)] dark:bg-[repeating-linear-gradient(45deg,#ffffff0a_0px_1px,transparent_1px_10px)] p-0 ">
        <Card className="translate-6 h-full group-hover:translate-0 duration-500">
          <Image src={image} alt={title} fill className="object-cover" />
        </Card>
      </Card>
      <div className="pl-6 py-4 rounded-md border-b border-b-background group-hover:border-gray-200 dark:group-hover:border-white/5 duration-500">
        <h3 className="font-semibold text-lg text-black dark:text-white group-hover:text-black line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 font-mono">{description}</p>
      </div>
    </Link>
  );
}

export default ComponentCard;

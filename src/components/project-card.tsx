import Image from "next/image";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  slug: string;
  img: string;
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
}

export function ProjectCard({ slug, img, id, title, excerpt, date, readTime, tags, featured, author }: ProjectCardProps) {
  if (!featured) return null;
  return (
    <Card color="transparent" shadow={false} className="">
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">

        <div className="flex items-center text-sm text-slate-500 mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          {new Date(date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
          <Clock className="w-4 h-4 ml-4 mr-1" />
          {readTime}
        </div>

        <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 hover:text-black transition-colors line-clamp-2">
          <Link href={`/blogs/${slug}`}>
              {title}
          </Link>
        </h2>
        <Typography className="mb-6 font-normal !text-gray-500">
          {excerpt}
        </Typography>
          
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              {tag}
              </span>
          ))}
          </div>
          
            <Link
            href={`/blogs/${slug}`}
            className="inline-flex items-center text-gray-600 hover:text-black font-medium group"
            >
            Continue reading
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
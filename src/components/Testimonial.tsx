import { Placeholder } from "./Placeholder";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  isPlaceholder?: boolean;
}

export const Testimonial = ({ quote, author, role, isPlaceholder }: TestimonialProps) => (
  <figure className="bg-card p-7 border border-border h-full flex flex-col">
    <blockquote className="font-serif text-xl leading-snug italic text-foreground mb-6 flex-1">
      « {quote} »
    </blockquote>
    <figcaption className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-villa-stone flex items-center justify-center font-bold text-villa-noir">
        {author.charAt(0)}
      </div>
      <div className="flex-1">
        <div className="font-bold text-sm">{author}</div>
        <div className="text-xs text-muted-foreground">{role}</div>
      </div>
      {isPlaceholder && <Placeholder>à collecter</Placeholder>}
    </figcaption>
  </figure>
);

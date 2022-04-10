import { useState } from 'react';
import Link from 'next/link';

interface NewsCardProps {
  body: string;
  summary: string;
  thumbnail: string;
  title: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  body,
  summary,
  thumbnail,
  title,
}) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <article>
      <h3>{title}</h3>
      <img src={thumbnail} alt={title} />
      <p>{summary}</p>
      <button onClick={() => setShowContent(prevState => !prevState)}>
        {!showContent ? 'Read' : 'Close'}
      </button>
      {showContent && <div dangerouslySetInnerHTML={{ __html: body }} />}
    </article>
  );
};

export default NewsCard;

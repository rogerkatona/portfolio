
import Link from "next/link";


const Topic = props => (
    <div className="flex flex-col">
        <Link href="/">
            <a className="py-1 hover:underline text-link font-medium">{props.label}</a>
        </Link>
    </div>
);


const ArticleTopics = props => (
    <>
        {props.topicItems.map(topic => (
            <Topic
                key={topic.id}
                label={topic.label}
            />
        ))}
    </>
);

export default ArticleTopics;

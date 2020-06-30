import Link from 'next/link';

const ButtonLink = ({ path, id, title }) => (
    <Link href={`/${path}/[id]`} as={`/${path}/${id}`}>
        <button>{title}</button>
    </Link>
);

export default ButtonLink;
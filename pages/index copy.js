import Link from 'next/link';

export default () => (
    <>Test

        <div>
            <Link href="/playground">
                <a>Go playground</a>
            </Link>
        </div>
        <div>
            <a href="/playground">Go playground</a>
        </div>
    </>
);
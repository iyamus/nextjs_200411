import Document, { Head, Main, NextScript } from 'next/document';

export default class CustomerDocument extends Document {

    render() {
        return (
            <html>
                <Head>
                    <title>Test</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
                </Head>
                <body>
                    <div className="container">
                        <Main />
                    </div>
                    <NextScript />
                </body>
            </html>
        );
    }


}
import React from "react";
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {GetStaticProps} from "next";

export default function Home() {

    const { t } = useTranslation('common');

    return (
        <>
            <Head>
                <title>{t('greeting')}</title>
                <meta name="description" content="starter-nextjs" key="desc" />
            </Head>

            <div>INDEX PAGE</div>

        </>
    );
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || 'ro', ['common'])),
        },
    };
}


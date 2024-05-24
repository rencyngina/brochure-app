// pages/_app.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import "@/styles/globals.css";
import Head from "next/head";
import Loading from '../Components/Loading';

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) {
        setLoading(true);
      }
    };

    const handleComplete = (url) => {
      if (url === router.asPath) {
        setLoading(false);
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  const metadata = {
    title: "Sovereign Wealth Management - Financial Planning & Investment Management",
    description: "Wealth Management is a comprehensive and holistic investment process that integrates the client long-term goals with financial solutions, using a planning-based and consultative approach.",
    keywords: "Wealth Management, Financial Planning, Investment Management, Financial Solutions, Planning-Based, Consultative Approach, Comprehensive, Holistic, Investment Process, Client Long-Term Goals, Client Goals, Financial Goals, Investment Goals, Investment Process, Financial Process, Planning Process, Consultative Process, Wealth Management Process, Wealth Management Solutions, Wealth Management Goals, Wealth Management Approach, Wealth Management Consultation, Wealth Management Planning, Wealth Management Investment, Wealth Management Financial Solutions, Wealth Management Comprehensive, Wealth Management Holistic, Wealth Management Client Goals, Wealth Management Financial Goals, Wealth Management Investment Goals, Wealth Management Investment Process, Wealth Management Financial Process, Wealth Management Planning Process, Wealth Management Consultative Process, Wealth Management Financial Planning, Wealth Management Investment Management, Wealth Management Financial Solutions, Wealth Management Planning-Based, Wealth Management Consultative Approach, Wealth Management Comprehensive Investment Process, Wealth Management Holistic Investment Process, Wealth Management Client Long-Term Goals, Wealth Management Client Goals, Wealth Management Financial Goals, Wealth Management Investment Goals, Wealth Management Investment Process, Wealth Management Financial Process, Wealth Management Planning Process, Wealth Management Consultative Process, Wealth Management Financial Planning, Wealth Management Investment Management, Wealth Management Financial Solutions, Wealth Management Planning-Based, Wealth Management Consultative Approach, Wealth Management Comprehensive Investment Process, Wealth Management Holistic Investment Process, Wealth Management Client Long-Term Goals, Wealth Management Client Goals, Wealth Management Financial Goals, Wealth Management Investment Goals, Wealth Management Investment Process, Wealth Management Financial Process, Wealth Management Planning Process, Wealth Management Consultative Process, Wealth Management Financial Planning, Wealth Management Investment Management, Wealth Management Financial Solutions, Wealth Management Planning-Based, Wealth Management Consultative Approach, Wealth Management Comprehensive Investment Process, Wealth Management Holistic Investment Process, Wealth Management Client Long-Term Goals, Wealth Management Client Goals, Wealth Management Financial Goals, Wealth Management Investment Goals, Wealth Management Investment Process, Wealth Management Financial Process, Wealth Management Planning Process, Wealth Management Consultative Process, Wealth Management Financial Planning, Wealth Management Investment Management, Wealth Management Financial Solutions, Wealth Management Planning-Based, Wealth Management Consultative Approach, Wealth Management Comprehensive Investment Process, Wealth Management Holistic Investment Process, Wealth Management Client Long-Term Goals, Wealth Management Client Goals, Wealth Management Financial Goals, Wealth Management Investment Goals, Wealth Management Investment Process, Wealth Management Financial Process, Wealth Management Planning Process, Wealth Management Consultative Process, Wealth Management Financial Planning, Wealth Management Investment Management, Wealth Management Financial Solutions, Wealth Management Planning-Based, Wealth Management Consultative Approach, Wealth Management Comprehensive Investment Process, Wealth Management Holistic Investment Process, Wealth Management Client Long-Term Goals, Wealth Management Client Goals, Wealth Management Financial Goals, Wealth Management Investment Goals, Wealth Management Investment Process, Wealth Management Financial Process, Wealth Management Planning Process, Wealth Management Consultative Process, Wealth Management Financial Planning, Wealth Management Investment Management, Wealth Management Financial Solutions, Wealth Management Planning-Based, Wealth Management Consultative Approach, Wealth Management Comprehensive Investment Process, Wealth Management Holistic Investment Process",
    author: "Erick Adikah",
    portfolio: {
      name: "Erick Adikah",
      sameAs: [
        "https://www.linkedin.com/in/erickadikah",
        "https://github.com/erickadikah",
        "https://my-portfolio-sand-ten-81.vercel.app/",
      ],
    },
    themeColor: "#03234D",
    favicon: "/favicon.ico",
    robots: "index, follow, visit:daily",
    og: {
      title: "Sovereign Wealth Management - Financial Planning & Investment Management",
      description: "Unlock legal excellence with Royfordlaw. Highly skilled professionals from Kenya's prestigious Law School, University of Nairobi, ready to guide you. Trust in our expertise for unparalleled legal services.",
      image: "/MWENDA ROYFORD LOGO-03 (1).png",
      url: "https://www.royfordlaw.com/",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Sovereign Wealth Management - Financial Planning & Investment Management",
      description: "Unlock legal excellence with Royfordlaw. Highly skilled professionals from Kenya's prestigious Law School, University of Nairobi, ready to guide you. Trust in our expertise for unparalleled legal services.",
      image: "/images/favicon.ico",
      site: "@royford_law",
      url: "https://twitter.com/Royfordlaw",
    },
    linkedIn: {
      card: "summary_large_image",
      title: "Sovereign Wealth Management - Financial Planning & Investment Management",
      description: "Unlock legal excellence with Royfordlaw. Highly skilled professionals from Kenya's prestigious Law School, University of Nairobi, ready to guide you. Trust in our expertise for unparalleled legal services.",
      image: "/images/favicon.ico",
      site: "@royford_law",
      url: "https://www.linkedin.com/in/mwenda-royford-company-advocates-062a5a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app_share",
      type: "website",
    },
  };

  return (
    <>
      <Head>
        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Title Tag */}
        <title>{metadata.title}</title>

        {/* Meta Description */}
        <meta name="description" content={metadata.description} />

        {/* Keywords Meta Tag */}
        <meta name="keywords" content={metadata.keywords} />

        {/* Favicon Link */}
        <link rel="icon" sizes="48x48" href={metadata.favicon} />

        {/* Author Meta Tag */}
        <meta name="author" content={metadata.author} />

        {/* Schema.org Markup for Portfolio */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: metadata.portfolio.name,
            sameAs: metadata.portfolio.sameAs,
          })}
        </script>

        {/* Robots Meta Tag */}
        <meta name="robots" content={metadata.robots} />

        {/* Theme Color Meta Tag */}
        <meta name="theme-color" content={metadata.themeColor} />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:site" content={metadata.twitter.site} />

        {/* LinkedIn Meta Tags */}
        <meta property="og:title" content={metadata.linkedIn.title} />
        <meta
          property="og:description"
          content={metadata.linkedIn.description}
        />
        <meta property="og:image" content={metadata.linkedIn.image} />
        <meta property="og:url" content={metadata.linkedIn.url} />
        <meta property="og:type" content={metadata.linkedIn.type} />
        <meta property="og:site" content={metadata.linkedIn.site} />
      </Head>
      {loading && <Loading />}
      <Component {...pageProps} />
    </>
  );
}

export default App;
